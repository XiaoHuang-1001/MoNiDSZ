# -*- coding: utf-8 -*-
"""PC 版一键出包。

产物：build/pc/dsh-fgs-pc-<ver>.zip（免安装绿色包，解压双击 exe 即玩）。

流程（每步失败即中止，不出半成品）：
  1) 读 build/version.json（与安卓包共用同一版本号体系，不单独 bump）
  2) python tools/build_web.py --engine <引擎目录>   组装 pc/web
  3) 组装 pc/dist/<ver>/：Electron 运行时 + resources/app（壳 + 游戏）
  4) 生成图标（原版 ic_launcher + 红条 + 版本号），写入窗口图标
  5) zip 打包 + SHA-256
  6) verify_pc.py 终检
"""
import argparse
import hashlib
import json
import re
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PY = sys.executable
VERSION_JSON = ROOT / "build" / "version.json"
WEB = ROOT / "pc" / "web"
ELECTRON_DIR = ROOT / "pc" / "electron"
RUNTIME = ROOT / "pc" / "runtime" / "electron"
ENGINE_CAND = ROOT / "pc" / "engine-candidates"
ORIG_APK = Path(r"C:\Users\20905\Downloads\dszmnq_247960.apk")

EXE_BASE = "dsh-fgs-pc"


def read_version() -> str:
    return json.loads(VERSION_JSON.read_text(encoding="utf-8"))["versionName"]


def build_icon(ver: str) -> Path:
    """原版 ic_launcher（取最大分辨率那张）+ 红条 + 版本号 → pc/dist_assets/appicon.png"""
    from PIL import Image, ImageDraw, ImageFont
    import io

    with zipfile.ZipFile(ORIG_APK) as z:
        names = [n for n in z.namelist() if re.search(r"ic_launcher\.png$", n)]
        best = max(names, key=lambda n: z.getinfo(n).file_size)
        im = Image.open(io.BytesIO(z.read(best))).convert("RGBA")
    if im.size[0] < 256:
        im = im.resize((256, 256), Image.LANCZOS)
    w, h = im.size
    d = ImageDraw.Draw(im)
    bar = max(6, int(h * 0.26))
    d.rectangle([0, h - bar, w, h], fill=(206, 30, 30, 255))
    size = int(bar * 0.78)
    while size > 5:
        try:
            f = ImageFont.truetype(r"C:\Windows\Fonts\msyhbd.ttc", size)
        except Exception:
            break
        bb = d.textbbox((0, 0), ver, font=f)
        if bb[2] - bb[0] <= w * 0.92:
            d.text(((w - (bb[2] - bb[0])) / 2 - bb[0],
                    h - bar + (bar - (bb[3] - bb[1])) / 2 - bb[1]),
                   ver, font=f, fill=(255, 255, 255, 255))
            break
        size -= 1
    out_dir = ROOT / "pc" / "dist_assets"
    out_dir.mkdir(parents=True, exist_ok=True)
    out = out_dir / "appicon.png"
    im.save(out, "PNG")
    print("[icon] %s (%dx%d, base=%s)" % (out, w, h, best))
    return out


def find_engine_dir() -> Path:
    marker = ENGINE_CAND / "BEST"
    if marker.is_file():
        return ENGINE_CAND / marker.read_text(encoding="utf-8").strip()
    cands = sorted(p for p in ENGINE_CAND.iterdir() if p.is_dir()) if ENGINE_CAND.exists() else []
    if len(cands) == 1:
        return cands[0]
    raise SystemExit("无法确定引擎目录：pc/engine-candidates/ 下没有 BEST 标记，"
                     "且候选数不为 1。请手动指定 --engine。")


def assemble(ver: str, engine: Path | None):
    dist = ROOT / "pc" / "dist" / ("dsh-fgs-pc-%s" % ver)
    if dist.exists():
        shutil.rmtree(dist)
    print("[dist] %s" % dist)

    # 1) Electron 运行时
    shutil.copytree(RUNTIME, dist)
    exe = dist / "electron.exe"
    new_exe = dist / ("%s-%s.exe" % (EXE_BASE, ver))
    exe.rename(new_exe)

    # 2) resources/app = 壳 + 游戏
    app = dist / "resources" / "app"
    app.mkdir(parents=True, exist_ok=True)
    shutil.rmtree(dist / "resources" / "default_app.asar", ignore_errors=True)
    for f in ELECTRON_DIR.glob("*.js"):
        shutil.copy2(f, app / f.name)
    pkg = json.loads((ELECTRON_DIR / "package.json").read_text(encoding="utf-8"))
    pkg["version"] = ver
    (app / "package.json").write_text(json.dumps(pkg, ensure_ascii=False, indent=2),
                                      encoding="utf-8")
    (app / "version.json").write_text(json.dumps({"versionName": ver}, ensure_ascii=False),
                                      encoding="utf-8")
    shutil.copytree(WEB, app / "web")

    # 3) 图标（窗口运行时图标；exe 内嵌图标后续用 rcedit 增强，缺失不阻断）
    icon = build_icon(ver)
    shutil.copy2(icon, app / "appicon.png")

    total = sum(f.stat().st_size for f in dist.rglob("*") if f.is_file())
    print("[dist] %d files, %.1f MB" % (sum(1 for _ in dist.rglob("*") if _.is_file()),
                                        total / 1048576))
    return dist, new_exe


def make_zip(dist: Path, ver: str) -> Path:
    out_dir = ROOT / "build" / "pc"
    out_dir.mkdir(parents=True, exist_ok=True)
    zp = out_dir / ("%s-%s.zip" % (EXE_BASE, ver))
    if zp.exists():
        zp.unlink()
    with zipfile.ZipFile(zp, "w", zipfile.ZIP_DEFLATED, compresslevel=6) as z:
        for f in sorted(dist.rglob("*")):
            if f.is_file():
                z.write(f, f.relative_to(dist.parent))
    sha = hashlib.sha256(zp.read_bytes()).hexdigest().upper()
    print("[zip] %s  %.1f MB  SHA-256=%s" % (zp, zp.stat().st_size / 1048576, sha))
    return zp


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--engine", help="web 引擎候选目录（默认按 BEST 标记自动选）")
    ap.add_argument("--no-build", action="store_true", help="跳过 build_web（用现有 pc/web）")
    args = ap.parse_args()

    ver = read_version()
    print("== PC 出包 version=%s ==" % ver)

    if not args.no_build:
        engine = Path(args.engine) if args.engine else find_engine_dir()
        r = subprocess.run([PY, str(ROOT / "tools" / "build_web.py"),
                            "--engine", str(engine)], check=True)
        assert r.returncode == 0

    dist, exe = assemble(ver, None)

    # 终检
    r = subprocess.run([PY, str(ROOT / "tools" / "verify_pc.py"),
                        "--dist", str(dist), "--ver", ver])
    if r.returncode != 0:
        shutil.rmtree(dist, ignore_errors=True)
        raise SystemExit("verify_pc.py 终检未通过，已删除成品，拒绝交付")

    zp = make_zip(dist, ver)
    print("OK  %s" % zp)


if __name__ == "__main__":
    main()
