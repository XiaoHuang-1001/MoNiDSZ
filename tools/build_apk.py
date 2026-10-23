# -*- coding: utf-8 -*-
"""把分公司层改动 + 55 张立绘编译进 APK 资源包，并重新加密 index.jsc。

流程：
  1) co_dep.ts：修正分公司二节点 pic 指向自己的立绘（<id>aa）
  2) ZGGSOfficeFx.ts：注入立绘数据表 + 运行时 SpriteFrame 合成 + 加载钩子
  3) 解密 apk 里的 main/index.jsc，用改好的 5 个模块替换对应 System.register 块
  4) 重新 XXTEA 加密，写回 APK 目录
"""
import base64
import io
import json
import os
import re
import struct
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC_MOD = ROOT / "源码" / "modules"
ICON_DIR = ROOT / "资源" / "新增立绘"
APK_MAIN = ROOT / "apk" / "assets" / "assets" / "main"

KEY = b"26ynMLK8dMvKx1Q+"
DELTA = 0x9E3779B9
M32 = 0xFFFFFFFF

PATCH_MODULES = ["co_dep.ts", "co_post.ts", "co_danji.ts", "co_job.ts", "co_market.ts", "co_market_lv.ts", "PGsWork.ts", "blController.ts",
                 "ZGGSOfficeFx.ts", "ZGGSHttpsWww.ts", "ZGGSConfigco.ts", "VHBgshiMap.ts",
                 "ZGGSRedHdian.ts", "VHBgshiMapEx.ts", "WNewMing1.ts", "minFunc.ts", "WKaiye1.ts",
                 "ZGGSComputerFun.ts", "WZPWork.ts", "WPeixunEx.ts", "ZGGSClockTimeFxx.ts",
                 "ZGGSBookTxt.ts", "ZGGSTablePrint.ts", "Wshichang.ts"]


# ────────────────────────── XXTEA ──────────────────────────
def _key_words(key: bytes):
    k = [0, 0, 0, 0]
    for i in range(16):
        k[i >> 2] |= (key[i] & 0xFF) << ((i & 3) * 8)
    return k


def _mx(z, y, s, kk):
    a = ((z >> 5) ^ ((y << 2) & M32)) & M32
    b = ((y >> 3) ^ ((z << 4) & M32)) & M32
    c = (((s ^ y) & M32) + ((kk ^ z) & M32)) & M32
    return (((a + b) & M32) ^ c) & M32


def _btea_encrypt(buf: bytes) -> bytes:
    n = len(buf) // 4
    v = list(struct.unpack("<%dI" % n, buf))
    k = _key_words(KEY)
    rounds = 6 + 52 // n
    s = 0
    z = v[n - 1]
    for _ in range(rounds):
        s = (s + DELTA) & M32
        e = (s >> 2) & 3
        for p in range(n - 1):
            y = v[p + 1]
            v[p] = (v[p] + _mx(z, y, s, k[(p & 3) ^ e])) & M32
            z = v[p]
        y = v[0]
        v[n - 1] = (v[n - 1] + _mx(z, y, s, k[((n - 1) & 3) ^ e])) & M32
        z = v[n - 1]
    return struct.pack("<%dI" % n, *v)


def _btea_decrypt(buf: bytes) -> bytes:
    n = len(buf) // 4
    v = list(struct.unpack("<%dI" % n, buf[: n * 4]))
    k = _key_words(KEY)
    rounds = 6 + 52 // n
    s = (rounds * DELTA) & M32
    y = v[0]
    for _ in range(rounds):
        e = (s >> 2) & 3
        for p in range(n - 1, 0, -1):
            z = v[p - 1]
            v[p] = (v[p] - _mx(z, y, s, k[(p & 3) ^ e])) & M32
            y = v[p]
        z = v[n - 1]
        v[0] = (v[0] - _mx(z, y, s, k[e])) & M32
        y = v[0]
        s = (s - DELTA) & M32
    return struct.pack("<%dI" % n, *v)


def xxtea_encrypt(data: bytes) -> bytes:
    """Cocos Creator 的 .jsc 格式：正文 + 补 0 到 4 字节对齐 + 4 字节小端长度字，整体加密。

    漏掉那个长度字 = 引擎解密后把最后 4 字节当正文长度、读到天文数字 = “Can't decrypt code”
    = 黑屏。这是本项目一等一的坑，绝不能再丢。
    """
    m = len(data)
    words = (m + 3) // 4 + 1          # 正文单词数（向上取整）+ 1 个长度字
    buf = bytearray(words * 4)
    buf[:m] = data
    struct.pack_into("<I", buf, words * 4 - 4, m)
    return _btea_encrypt(bytes(buf))


def xxtea_decrypt(data: bytes) -> bytes:
    """解密并去掉长度字，返回真正的正文"""
    plain = _btea_decrypt(data)
    if len(plain) < 8:
        return plain
    m = struct.unpack_from("<I", plain, len(plain) - 4)[0]
    if 0 < m <= len(plain) - 4:        # 合理的长度字
        return plain[:m]
    return plain                        # 兼容没有长度字的旧数据


# ────────────────────── 1. co_dep pic 修正 ──────────────────────
def _blocks(text):
    """按大括号配对切出 k<id>: {...} 块，返回 [(id, start, end_exclusive), ...]"""
    spans = []
    i = 0
    while True:
        m = re.search(r"k(\d+): \{", text[i:])
        if not m:
            break
        start = i + m.start()
        j = i + m.end() - 1
        depth = 0
        while j < len(text):
            c = text[j]
            if c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    break
            j += 1
        spans.append((int(m.group(1)), start, j + 1))
        i = j + 1
    return spans


def _base_apk():
    """打底包：环境变量 > build/base.apk（冻结底包）> 原版下载路径"""
    env = os.environ.get("DSH_ORIG_APK")
    if env:
        return Path(env)
    for c in (ROOT / "build" / "base.apk",
              Path(r"C:\Users\20905\Downloads\dszmnq_247960.apk")):
        if c.exists():
            return c
    return ROOT / "build" / "base.apk"


ORIG_APK = _base_apk()


def original_pics():
    """从原版 APK 解出 co_dep，取回原始 pic，保证老部门立绘不被改动"""
    if not ORIG_APK.exists():
        return {}
    import zipfile
    with zipfile.ZipFile(ORIG_APK) as z:
        raw = z.read("assets/assets/main/index.jsc")
    text = xxtea_decrypt(raw).decode("utf-8", "replace")
    a = text.find('System.register("chunks:///_virtual/co_dep.ts"')
    m = re.search(r'System\.register\("chunks:///_virtual/', text[a + 10:])
    chunk = text[a: a + 10 + m.start()] if m else text[a:]
    return {did: pic for did, pic in
            ((int(d), p) for d, p in re.findall(r'k(\d+):\{[^{}]*?pic:"([^"]+)"', chunk))}


def fix_co_dep_pic():
    p = SRC_MOD / "01_config" / "co_dep.ts"
    text = p.read_text(encoding="utf-8")
    bak = p.with_suffix(".ts.prepatch")
    if not bak.exists():
        bak.write_text(text, encoding="utf-8")

    orig = original_pics()
    pieces, last, changed = [], 0, 0
    for did, start, end in _blocks(text):
        block = text[start:end]
        want = orig.get(did)
        if want is None and 1500 <= did < 3000:
            want = "%daa" % did
        if want:
            block, n = re.subn(r'pic: "[^"]*"', 'pic: "%s"' % want, block)
            changed += n
        pieces.append(text[last:start])
        pieces.append(block)
        last = end
    pieces.append(text[last:])
    text = "".join(pieces)
    # 恢复被压缩到同一行的收尾花括号
    text = re.sub(r'(pic: "[^"]*")\}', r"\1\n        }", text)
    p.write_text(text, encoding="utf-8")
    print("[1] co_dep pic 校正 %d 处（原版 %d 个节点回填，共 %d 个节点）"
          % (changed, len(orig), len(_blocks(text))))


# ────────────────── 2. 立绘数据 + ZGGSOfficeFx 注入 ──────────────────
def build_payload():
    files = sorted(ICON_DIR.glob("*aa.png"))
    items = []
    for f in files:
        im = Image.open(f).convert("RGBA")
        if im.size != (85, 80):
            im = im.resize((85, 80), Image.LANCZOS)
        raw = im.tobytes()
        assert len(raw) == 85 * 80 * 4, (f, len(raw))
        items.append((f.stem, base64.b64encode(raw).decode("ascii")))
    print("[2] 立绘 %d 张，原始 %.2f MB，base64 %.2f MB" % (
        len(items), len(items) * 85 * 80 * 4 / 1048576, sum(len(b) for _, b in items) / 1048576))
    return items


HELPER = """      // —— 分公司新部门立绘：运行时合成 SpriteFrame（不依赖图集）——
      var __depIconW = 85, __depIconH = 80, __depIconCache = {}, __depIconMap = null;
      var __depIconB64 = {%(data)s};
      function __depIconDecode(str) {
        if (!__depIconMap) {
          __depIconMap = {};
          var tb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          for (var i = 0; i < 64; i++) __depIconMap[tb.charAt(i)] = i
        }
        var len = str.length, pad = 0;
        if (str.charAt(len - 1) == "=") pad++;
        if (str.charAt(len - 2) == "=") pad++;
        var out = new Uint8Array(len / 4 * 3 - pad), o = 0, m = __depIconMap;
        for (var i = 0; i < len; i += 4) {
          var a = m[str.charAt(i)] | 0, b = m[str.charAt(i + 1)] | 0,
            c = m[str.charAt(i + 2)] | 0, d = m[str.charAt(i + 3)] | 0;
          out[o++] = (a << 2) | (b >> 4);
          if (o < out.length) out[o++] = ((b & 15) << 4) | (c >> 2);
          if (o < out.length) out[o++] = ((c & 3) << 6) | d
        }
        return out
      }
      function __depIconGet(name) {
        var hit = __depIconCache[name];
        if (hit) return hit;
        var b64 = __depIconB64[name];
        if (!b64) return null;
        try {
          var px = __depIconDecode(b64), w = __depIconW, h = __depIconH;
          var tex = new __cc.Texture2D();
          try {
            tex.reset({
              width: w,
              height: h,
              format: __cc.Texture2D.PixelFormat.RGBA8888
            });
            tex.uploadData(px, 0, 0)
          } catch (e1) {
            var img = new __cc.ImageAsset();
            img.reset({
              _data: px,
              width: w,
              height: h,
              format: __cc.Texture2D.PixelFormat.RGBA8888,
              _compressed: false
            });
            tex.image = img
          }
          tex.setFilters(__cc.Texture2D.Filter.LINEAR, __cc.Texture2D.Filter.LINEAR);
          var sf = new __cc.SpriteFrame();
          sf.texture = tex;
          sf.rect = new __cc.Rect(0, 0, w, h);
          sf.originalSize = new __cc.Size(w, h);
          sf.offset = new __cc.Vec2(0, 0);
          __depIconCache[name] = sf;
          return sf
        } catch (err) {
          console.error("[depicon] " + name + " " + err);
          return null
        }
      }
"""


def inject_icons(items):
    p = SRC_MOD / "03_widgets" / "ZGGSOfficeFx.ts"
    text = p.read_text(encoding="utf-8")
    if not p.with_suffix(".ts.bak").exists():
        p.with_suffix(".ts.bak").write_text(text, encoding="utf-8")
    if "__depIconB64" in text:
        print("[3] ZGGSOfficeFx 已注入，跳过")
        return

    # (a) 声明 __cc
    old_decl = "  var s, e, n, i, o, l, a, g, r, h, d, c, u, m, p, b, f, z, S, v, G, x, y, T;"
    assert old_decl in text
    text = text.replace(old_decl, old_decl[:-1] + ", __cc;")

    # (b) setter 里拿到整个 cc 命名空间
    old_setter = ("      s = t.cclegacy, e = t.find, n = t.UITransform, i = t.Color, o = t.Vec3, "
                  "l = t.tween, a = t.UIOpacity, g = t.Tween, r = t.error, h = t.instantiate, d = t.bezier")
    assert old_setter in text
    text = text.replace(old_setter, old_setter + ", __cc = t")

    # (c) 数据 + 工具函数
    anchor = '      s._RF.push({}, "4bd1bPn1aFId4KyL+0rOq23", "ZGGSOfficeFx", void 0);'
    assert anchor in text
    data = ",".join('"%s":"%s"' % (n, b) for n, b in items)
    text = text.replace(anchor, anchor + "\n" + (HELPER % {"data": data}))

    # (d) 加载钩子
    old_load = "          w[e] ? i.spriteFrame = w[e] : i && e ? u.loadSpriteFrame(`textures/${s}/${e}`, function(s) {"
    assert old_load in text
    hook = ("          var __df = i && \"ui\" == s && e && __depIconB64[e] !== void 0 ? __depIconGet(e) : null;\n"
            "          if (__df) return void(i.spriteFrame = __df);\n")
    text = text.replace(old_load, hook + old_load)

    p.write_text(text, encoding="utf-8")
    print("[3] ZGGSOfficeFx 注入完成，文件 %.2f MB" % (len(text.encode("utf-8")) / 1048576))


# ─────────────────── 3. 组装 index.js 并加密 ───────────────────
def module_text(name):
    for sub in SRC_MOD.iterdir():
        f = sub / name
        if f.is_file():
            return f.read_text(encoding="utf-8")
    raise FileNotFoundError(name)


def build_bundle():
    import zipfile
    jsc = APK_MAIN / "index.jsc"
    # 始终以原版 APK 里的 bundle 为基线，保证多次构建结果一致
    with zipfile.ZipFile(ORIG_APK) as z:
        base = z.read("assets/assets/main/index.jsc")
    plain = xxtea_decrypt(base)
    text = plain.decode("utf-8", errors="replace")
    head = 'System.register("chunks:///_virtual/blController.ts"'
    assert text.startswith(head), text[:80]
    cut = text.rfind("});")
    text = text[: cut + 3]
    old_len = len(text)

    RE = re.compile(r'System\.register\("chunks:///_virtual/([^"]+)"')
    for name in PATCH_MODULES:
        a = text.find('System.register("chunks:///_virtual/%s"' % name)
        assert a >= 0, name
        m = RE.search(text, a + 10)
        b = m.start() if m else len(text)
        new = module_text(name).rstrip() + "\n"
        text = text[:a] + new + text[b:]
        print("    splice %-18s %8d -> %8d bytes" % (name, b - a, len(new.encode("utf-8"))))

    if not text.endswith("\n"):
        text += "\n"
    data = text.encode("utf-8")
    out = xxtea_encrypt(data)          # 长度字与 4 字节对齐由 encrypt 负责
    jsc.write_bytes(out)
    print("[4] index.js %d -> %d chars, jsc %d bytes" % (old_len, len(text), len(out)))

    # 自检：解密回来必须与正文完全一致（长度字被正确剥离）
    back = xxtea_decrypt(out)
    assert back == data, "roundtrip mismatch: %d vs %d" % (len(back), len(data))
    names = RE.findall(text)
    print("    模块数 %d，首 %s，末 %s" % (len(names), names[0], names[-1]))
    return text


if __name__ == "__main__":
    fix_co_dep_pic()
    items = build_payload()
    inject_icons(items)
    build_bundle()
    print("OK")
