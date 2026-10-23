# -*- coding: utf-8 -*-
"""一键出包：版本号自增 -> 改 manifest/游戏内版本 -> 编译 bundle -> 重打包 -> 对齐签名 -> 放桌面

用法:
    python tools/release.py            # 自增一位版本号并出包
    python tools/release.py --no-bump  # 用当前版本号重新出包
"""
import hashlib
import json
import os
import re
import subprocess
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOOLS = ROOT / "tools"
BUILD = ROOT / "build"
DESKTOP = Path(os.environ.get("DSH_DESKTOP") or r"C:\Users\20905\Desktop")


def _base_apk():
    """打底包：环境变量 > build/base.apk（冻结底包）> 原版下载路径。

    原版 v1.0.6 已经不再分发，现在用一个自己出过的、验证稳定的版本冻结成
    build/base.apk 当底包；每次出包都从这一份派生，保证不会逐版漂移。
    """
    env = os.environ.get("DSH_ORIG_APK")
    if env:
        return Path(env)
    for c in (ROOT / "build" / "base.apk",
              Path(r"C:\Users\20905\Downloads\dszmnq_247960.apk")):
        if c.exists():
            return c
    return ROOT / "build" / "base.apk"


ORIG_APK = _base_apk()
VERSION_FILE = BUILD / "version.json"
KEYSTORE = BUILD / "debug.keystore"

BUILD_TOOLS = Path(os.environ.get("DSH_BUILD_TOOLS")
                   or r"C:\Program Files (x86)\Android\android-sdk\build-tools\36.0.0")
JAVA_HOME = Path(os.environ.get("DSH_JAVA_HOME") or os.environ.get("JAVA_HOME")
                 or r"C:\Program Files\Android\openjdk\jdk-21.0.8")
PY = sys.executable

sys.path.insert(0, str(TOOLS))
import axml  # noqa: E402
import build_apk  # noqa: E402
import pack_original  # noqa: E402


def load_version(bump: bool):
    if VERSION_FILE.exists():
        v = json.loads(VERSION_FILE.read_text(encoding="utf-8-sig"))
    else:
        v = {"versionName": "1.0.6", "versionCode": 7}
    if bump:
        major, minor, patch = (int(x) for x in v["versionName"].split("."))
        patch += 1
        v["versionName"] = "%d.%d.%d" % (major, minor, patch)
        v["versionCode"] = int(v["versionCode"]) + 1
        VERSION_FILE.write_text(json.dumps(v, ensure_ascii=False, indent=2), encoding="utf-8")
    return v


def patch_in_game_version(name: str):
    p = ROOT / "源码" / "modules" / "03_widgets" / "ZGGSConfigco.ts"
    t = p.read_text(encoding="utf-8")
    t2, n = re.subn(r't\.bhaopz = "[^"]*"', 't.bhaopz = "%s"' % name, t)
    if n != 1:
        raise RuntimeError("bhaopz 替换失败：%d 处" % n)
    if t2 != t:
        p.write_text(t2, encoding="utf-8")
    print("[0] 游戏内版本号 -> %s" % name)


def sh(args):
    r = subprocess.run(args, capture_output=True, text=True,
                       env={**os.environ,
                            "JAVA_HOME": str(JAVA_HOME),
                            "PATH": str(JAVA_HOME / "bin") + os.pathsep + os.environ.get("PATH", "")})
    if r.returncode != 0:
        raise RuntimeError("命令失败(%d): %s\n%s\n%s" % (r.returncode, args[0], r.stdout[-2000:], r.stderr[-2000:]))
    return r


def icon_overrides(ver="1.0"):
    """给所有启动图标加红色底栏，并把版本号印上去，一眼区分新旧"""
    import io
    from PIL import Image, ImageDraw, ImageFont
    out = {}
    with zipfile.ZipFile(ORIG_APK) as z:
        names = [n for n in z.namelist() if re.search(r"ic_launcher[^/]*\.png$", n)]
        for n in names:
            im = Image.open(io.BytesIO(z.read(n))).convert("RGBA")
            w, h = im.size
            d = ImageDraw.Draw(im)
            bar = max(6, int(h * 0.26))
            d.rectangle([0, h - bar, w, h], fill=(206, 30, 30, 255))
            txt = ver
            size = int(bar * 0.78)
            while size > 5:
                try:
                    f = ImageFont.truetype(r"C:\Windows\Fonts\msyhbd.ttc", size)
                except Exception:
                    break
                bb = d.textbbox((0, 0), txt, font=f)
                if bb[2] - bb[0] <= w * 0.92:
                    d.text(((w - (bb[2] - bb[0])) / 2 - bb[0],
                            h - bar + (bar - (bb[3] - bb[1])) / 2 - bb[1]),
                           txt, font=f, fill=(255, 255, 255, 255))
                    break
                size -= 1
            buf = io.BytesIO()
            im.save(buf, "PNG")
            out[n] = buf.getvalue()
    print("[0] 图标印版本 %s（%d 个）" % (ver, len(out)))
    return out


def preflight():
    """开跑前先把环境验一遍：缺东西立刻停，别跑到一半才发现"""
    need = [
        (ORIG_APK, "原版 APK（打底的纯净包）"),
        (KEYSTORE, "签名 keystore"),
        (BUILD_TOOLS / "zipalign.exe", "zipalign"),
        (BUILD_TOOLS / "apksigner.bat", "apksigner"),
        (BUILD_TOOLS / "aapt2.exe", "aapt2（终检用）"),
        (JAVA_HOME / "bin" / "java.exe", "java"),
        (ROOT / "apk" / "assets" / "main.js", "main.js 覆盖文件"),
        (ROOT / "源码" / "modules" / "01_config" / "co_dep.ts", "co_dep 源码"),
    ]
    miss = [(p, w) for p, w in need if not Path(p).exists()]
    if miss:
        raise SystemExit("环境不全，先补齐：\n" + "\n".join("  - %s  (%s)" % (p, w) for p, w in miss))
    print("[pre] 环境检查通过（原版包 / keystore / 构建工具 / java 全在）")


def main():
    preflight()
    bump = "--no-bump" not in sys.argv
    v = load_version(bump)
    name, code = v["versionName"], v["versionCode"]
    print("=== 出包版本 %s (versionCode %d) ===" % (name, code))

    # 1. 游戏内版本号
    patch_in_game_version(name)

    # 2. 编译 bundle（co_dep/co_post/... -> index.jsc）
    subprocess.run([PY, str(TOOLS / "build_apk.py")], check=True)

    # 3. manifest 版本号 + 桌面图标名（带版本，方便一眼确认装没装上）
    with zipfile.ZipFile(ORIG_APK) as z:
        raw_mf = z.read("AndroidManifest.xml")
    new_mf = axml.set_version(raw_mf, code=code, name=name)
    label = "董事长模拟器·分公司版%s" % name
    new_mf = axml.set_label(new_mf, label)
    # 启动入口：绕过 SDK 开屏（登录/实名都在那里），直接进 Cocos 的 AppActivity
    new_mf = axml.move_launcher(new_mf, "com.cocos.game.AppActivity", "com.kuoyou.clsdk.SplashActivity")
    new_mf = axml.set_element_label(new_mf, "activity", "com.cocos.game.AppActivity", label)
    mf_path = BUILD / "AndroidManifest.xml"
    mf_path.write_bytes(new_mf)
    got = axml.read_version(new_mf)
    if got != (code, name):
        raise RuntimeError("manifest 版本写回不一致: %r" % (got,))
    print("[0] manifest -> versionCode=%d versionName=%s label=%s" % (got[0], got[1], axml.read_label(new_mf)))

    # 4. 重打包（不写 ZIP64，安卓安装器不认）
    unsigned = BUILD / "release_unsigned.apk"
    extra = {"AndroidManifest.xml": new_mf}
    extra.update(icon_overrides(name))
    pack_original.pack(ORIG_APK, unsigned, extra)

    # 5. 对齐 + 签名
    aligned = BUILD / "release_aligned.apk"
    signed = BUILD / "release_signed.apk"
    sh([str(BUILD_TOOLS / "zipalign.exe"), "-p", "-f", "4", str(unsigned), str(aligned)])
    sh([str(BUILD_TOOLS / "apksigner.bat"), "sign",
        "--ks", str(KEYSTORE), "--ks-pass", "pass:android", "--key-pass", "pass:android",
        "--ks-key-alias", "androiddebugkey", "--v1-signing-enabled", "true",
        "--v2-signing-enabled", "true", "--out", str(signed), str(aligned)])
    sh([str(BUILD_TOOLS / "apksigner.bat"), "verify", str(signed)])
    print("[5] 签名校验通过")

    # 6. 投放（ASCII 文件名，单独放一个文件夹，避免和旧包混淆）
    OUT_DIR = DESKTOP / "最新包"
    OUT_DIR.mkdir(exist_ok=True)
    out = OUT_DIR / ("dsh-fgs-%s.apk" % name)
    for old in list(DESKTOP.glob("*.apk")) + list(OUT_DIR.glob("*.apk")):
        if old != out:
            try:
                old.unlink()
            except OSError:
                print("    (旧包被占用，跳过删除: %s)" % old.name)
    out.write_bytes(signed.read_bytes())

    # 7. 硬门禁终检：验的是最终交付文件本身，任何一项不过就删包退出
    import verify_release
    if not verify_release.verify(out, name, code):
        try:
            out.unlink()
        except OSError:
            pass
        raise SystemExit("\n!! 终检不通过，已删除成品 %s —— 这个包不许交付 !!" % out.name)

    digest = hashlib.sha256(out.read_bytes()).hexdigest().upper()
    print("\n产物 : %s" % out)
    print("大小 : %.1f MB" % (out.stat().st_size / 1048576))
    print("版本 : %s (versionCode %d)" % (name, code))
    print("SHA256: %s" % digest)


if __name__ == "__main__":
    main()
