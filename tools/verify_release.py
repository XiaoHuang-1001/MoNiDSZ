# -*- coding: utf-8 -*-
"""出包终检（硬门禁）。任何一项不过 -> 退出码 1，且 release.py 会把成品删掉。

检查的是「最终要交付的那个 APK 文件本身」，不是中间产物：
  1. aapt2 badging      : versionCode / versionName / application-label / launchable-activity
  2. 启动入口           : 必须是 com.cocos.game.AppActivity（绕过 CL SDK 开屏 = 登录/实名/黑屏）
  3. ZIP64             : 任何条目都不许出现（extract_version=45 / extra 0x0001），否则安卓装不上
  4. 关键条目           : index.jsc、main.js、AndroidManifest.xml、lib 都在
  5. bundle 内容        : index.jsc 能解密，且含本次版本号 + 分公司节点 + 立绘表
  6. main.js 内容       : 含 __dshlog（日志落盘用的覆盖版本）
  7. 图标               : ic_launcher 底部有红色版本条
  8. 签名               : apksigner verify 通过
  9. 桌面投放           : Desktop 下除本包外没有任何 .apk（防装错旧包）
 10. 体积               : > 100 MB（防止打出个残缺包）

用法:
    python tools/verify_release.py <apk路径> <versionName> [versionCode]
    python tools/verify_release.py            # 自动取桌面最新包 + build/version.json
"""
import io
import json
import os
import re
import subprocess
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BUILD = ROOT / "build"
DESKTOP = Path(r"C:\Users\20905\Desktop")
OUT_DIR = DESKTOP / "最新包"
BUILD_TOOLS = Path(r"C:\Program Files (x86)\Android\android-sdk\build-tools\36.0.0")
JAVA_HOME = Path(r"C:\Program Files\Android\openjdk\jdk-21.0.8")
NODE = Path(r"C:\Users\20905\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\node\bin\node.exe")
AAPT2 = BUILD_TOOLS / "aapt2.exe"
APKSIGNER = BUILD_TOOLS / "apksigner.bat"
EXPECT_ACTIVITY = "com.cocos.game.AppActivity"
SKIP_ACTIVITY = "com.kuoyou.clsdk.SplashActivity"
KEY = b"26ynMLK8dMvKx1Q+"

sys.path.insert(0, str(ROOT / "tools"))
from build_apk import xxtea_decrypt, xxtea_encrypt, _btea_decrypt  # noqa: E402

for _s in (sys.stdout, sys.stderr):
    try:
        _s.reconfigure(encoding="utf-8", errors="replace")
    except Exception:  # noqa: BLE001
        pass

results = []


def check(name, ok, detail=""):
    results.append((name, bool(ok), detail))
    print("  %s %-26s %s" % ("PASS" if ok else "FAIL", name, detail))
    return ok


def _env():
    e = dict(os.environ)
    e["JAVA_HOME"] = str(JAVA_HOME)
    e["PATH"] = str(JAVA_HOME / "bin") + os.pathsep + e.get("PATH", "")
    return e


def _run(args):
    return subprocess.run([str(a) for a in args], capture_output=True, text=True,
                          encoding="utf-8", errors="replace", env=_env())


def parse_badging(apk: Path):
    r = _run([AAPT2, "dump", "badging", apk])
    if r.returncode != 0:
        raise RuntimeError("aapt2 badging 失败: %s" % r.stderr[-1500:])
    out = r.stdout
    m = re.search(r"package: name='([^']*)' versionCode='([^']*)' versionName='([^']*)'", out)
    pkg, vcode, vname = (m.group(1), m.group(2), m.group(3)) if m else (None, None, None)
    lm = re.search(r"application-label:'([^']*)'", out)
    label = lm.group(1) if lm else None
    am = re.search(r"launchable-activity: name='([^']*)'", out)
    activity = am.group(1) if am else None
    return {"package": pkg, "versionCode": vcode, "versionName": vname,
            "label": label, "activity": activity, "raw": out}


def zip64_offenders(z: zipfile.ZipFile):
    bad = []
    for info in z.infolist():
        if info.extract_version >= 45:
            bad.append((info.filename, "extract_version=%d" % info.extract_version))
            continue
        # extra field 0x0001 == ZIP64 extended information
        extra, i = info.extra or b"", 0
        while i + 4 <= len(extra):
            tag = int.from_bytes(extra[i:i + 2], "little")
            size = int.from_bytes(extra[i + 2:i + 4], "little")
            if tag == 0x0001:
                bad.append((info.filename, "extra 0x0001"))
                break
            i += 4 + size
    return bad


def icon_has_red_bar(z: zipfile.ZipFile):
    from PIL import Image
    names = [n for n in z.namelist() if re.search(r"ic_launcher[^/]*\.png$", n)]
    if not names:
        return False, "APK 内没有 ic_launcher*.png"
    hits = 0
    for n in names:
        im = Image.open(io.BytesIO(z.read(n))).convert("RGBA")
        w, h = im.size
        band = im.crop((0, int(h * 0.78), w, h))
        raw = band.tobytes()
        px = [(raw[i], raw[i + 1], raw[i + 2], raw[i + 3]) for i in range(0, len(raw), 4)]
        red = sum(1 for r, g, b, a in px if a > 200 and r > 140 and g < 90 and b < 90)
        if red >= len(px) * 0.30:
            hits += 1
    return hits > 0, "%d/%d 张图标带红条" % (hits, len(names))


def node_syntax_ok(text: str, tag: str):
    """用 node --check 做真正的语法校验：main.js 有语法错 = 引擎永远不启动 = 黑屏"""
    if not NODE.exists():
        return None, "node 不存在，跳过"
    tmp = BUILD / ("_verify_%s.js" % tag)
    tmp.write_text(text, encoding="utf-8")
    r = _run([NODE, "--check", tmp])
    if r.returncode == 0:
        return True, ""
    lines = [x for x in (r.stderr or r.stdout).strip().splitlines() if x.strip()]
    return False, (lines[0] if lines else "语法错误")[:160]


def desktop_strays(keep: Path):
    strays = []
    for p in DESKTOP.rglob("*.apk"):
        if p.resolve() != keep.resolve():
            strays.append(p)
    return strays


def verify(apk: Path, want_name: str, want_code: int | None = None) -> bool:
    print("\n=== 终检 %s ===" % apk)
    results.clear()

    if not check("文件存在", apk.is_file(), str(apk)):
        return False

    size_mb = apk.stat().st_size / 1048576
    check("体积 > 100MB", size_mb > 100, "%.1f MB" % size_mb)

    # 1/2. manifest 事实
    try:
        b = parse_badging(apk)
    except Exception as e:  # noqa: BLE001
        return check("aapt2 解析", False, str(e)[:200]) and False
    check("包名 com.sky.dsz.dsh", b["package"] == "com.sky.dsz.dsh", str(b["package"]))
    check("versionName = %s" % want_name, b["versionName"] == want_name,
          "实际 %s" % b["versionName"])
    if want_code is not None:
        check("versionCode = %d" % want_code, b["versionCode"] == str(want_code),
              "实际 %s" % b["versionCode"])
    check("应用名含版本号", bool(b["label"]) and want_name in (b["label"] or ""),
          str(b["label"]))
    check("应用名是分公司版", "分公司版" in (b["label"] or ""), str(b["label"]))
    check("启动入口绕过 SDK", b["activity"] == EXPECT_ACTIVITY,
          str(b["activity"]))
    check("不是 SDK 开屏", b["activity"] != SKIP_ACTIVITY, str(b["activity"]))

    # 3~7. 包内事实
    with zipfile.ZipFile(apk) as z:
        names = set(z.namelist())
        bad = zip64_offenders(z)
        check("无 ZIP64 条目", not bad,
              "%d 条违规，如 %s" % (len(bad), bad[0]) if bad else "0 条")

        for need in ("AndroidManifest.xml", "assets/assets/main/index.jsc", "assets/main.js"):
            check("包含 %s" % need, need in names)

        has_lib = any(n.startswith("lib/arm64-v8a/") for n in names)
        check("含 arm64 原生库", has_lib)

        # index.jsc 能解密 + 含本次版本
        try:
            enc_bytes = z.read("assets/assets/main/index.jsc")
            plain = xxtea_decrypt(enc_bytes)
            text = plain.decode("utf-8", "replace")
            ok_dec = True
        except Exception as e:  # noqa: BLE001
            text, ok_dec = "", False
            check("index.jsc 可解密", False, str(e)[:120])
        if ok_dec:
            check("index.jsc 可解密", True, "%d bytes" % len(plain))
            # —— 致命格式检查：Cocos .jsc 末尾必须有 4 字节小端长度字 ——
            raw = _btea_decrypt(enc_bytes)
            lw = int.from_bytes(raw[-4:], "little")
            check("jsc 长度字正确", lw == len(plain),
                  "尾部长度字=%d 正文=%d" % (lw, len(plain)))
            same = xxtea_encrypt(plain) == enc_bytes
            check("jsc 重加密可还原", same, "" if same else "重加密后与包内字节不一致")
            check("bundle 内版本号一致", 'bhaopz = "%s"' % want_name in text,
                  '找不到 bhaopz="%s"' % want_name if 'bhaopz = "%s"' % want_name not in text else "")
            check("bundle 含分公司节点", 'k1500' in text and 'k1600' in text)
            check("bundle 含新部门立绘表", "__depIconB64" in text)
            check("bundle 单机化生效", "jindutiao" in text)
            # 数据表必须真的打进去了（曾经漏把 co_market.ts 加进 PATCH_MODULES，白改一场）
            check("bundle 含省级市场表", "石家庄" in text,
                  "co_market.ts 没有打进 bundle（检查 build_apk.PATCH_MODULES）" if "石家庄" not in text else "")
            check("bundle 含职级 A/B/C", 'name: "P9-A"' in text or "name: 'P9-A'" in text,
                  "co_job.ts 没有打进 bundle" if ('name: "P9-A"' not in text and "name: 'P9-A'" not in text) else "")
            # 全量地级市（308 个市场）
            n_mkt = len(re.findall(r'prov: "', text))
            check("bundle 含全量地级市(%d)" % n_mkt, n_mkt >= 300,
                  "" if n_mkt >= 300 else "只有 %d 个市场，co_market.ts 不是全量版" % n_mkt)
            n_lv = text.count("market_id: ")
            check("bundle 含市场等级全表(%d)" % n_lv, n_lv >= 1800,
                  "" if n_lv >= 1800 else "co_market_lv.ts 没打进 bundle 或行数不足（%d 行）" % n_lv)
            ok_syn, why = node_syntax_ok(text, "bundle")
            if ok_syn is not None:
                check("bundle 语法（node --check）", ok_syn, why)

        # main.js
        mj = z.read("assets/main.js").decode("utf-8", "replace")
        check("main.js 含日志落盘", "__dshlog" in mj)
        # 行首（可缩进）出现赋值 = 没被 // 注释掉
        has_show = re.search(r"(?m)^\s*window\.__dshShow\s*=\s*function", mj) is not None
        check("main.js 红字未被注释掉", has_show)
        check("main.js 含启动心跳", "__dshStartBeat" in mj)
        ok_syn, why = node_syntax_ok(mj, "main")
        if ok_syn is not None:
            check("main.js 语法（node --check）", ok_syn, why)

        ok_icon, icon_msg = icon_has_red_bar(z)
        check("图标带版本红条", ok_icon, icon_msg)

        # 关键条目 CRC 自校验
        try:
            for n in ("assets/assets/main/index.jsc", "assets/main.js", "AndroidManifest.xml"):
                z.read(n)
            check("关键条目 CRC 正常", True)
        except Exception as e:  # noqa: BLE001
            check("关键条目 CRC 正常", False, str(e)[:120])

    # 8. 签名
    r = _run([APKSIGNER, "verify", "--print-certs", apk])
    check("apksigner verify", r.returncode == 0,
          "" if r.returncode == 0 else (r.stdout + r.stderr)[-200:])

    # 9. 桌面无旧包
    strays = desktop_strays(apk)
    check("桌面无其它 APK", not strays, ", ".join(p.name for p in strays[:5]))

    bad_n = sum(1 for _, ok, _ in results if not ok)
    print("\n结果: %d/%d 通过" % (len(results) - bad_n, len(results)))
    if bad_n:
        print("!! 有 %d 项不通过，这个包不能交付 !!" % bad_n)
    return bad_n == 0


def main():
    if len(sys.argv) >= 3:
        apk = Path(sys.argv[1])
        want = sys.argv[2]
        code = int(sys.argv[3]) if len(sys.argv) > 3 else None
    else:
        v = json.loads((BUILD / "version.json").read_text(encoding="utf-8-sig"))
        want, code = v["versionName"], int(v["versionCode"])
        apk = OUT_DIR / ("dsh-fgs-%s.apk" % want)
    ok = verify(apk, want, code)
    if ok:
        import hashlib
        print("SHA256: %s" % hashlib.sha256(apk.read_bytes()).hexdigest().upper())
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
