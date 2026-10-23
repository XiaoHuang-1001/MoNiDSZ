# -*- coding: utf-8 -*-
"""组装 PC(web) 版游戏目录 pc/web/。

与安卓出包共用同一套源码逻辑（复用 build_apk 的拼接清单与工具函数），
区别只在：脚本不加密、bundle 落成网页可加载的明文形态。

用法：
  python tools/build_web.py                     # 只组装 assets/（bundle + 明文脚本）
  python tools/build_web.py --engine <dir>      # 同时从引擎候选目录拷入 web 引擎运行时
  python tools/build_web.py --engine <dir> --platform web-mobile
"""
import argparse
import json
import re
import shutil
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
import build_apk  # noqa: E402  复用：ORIG_APK / xxtea_decrypt / PATCH_MODULES / module_text 等

APK_ASSETS = ROOT / "apk" / "assets" / "assets"
APK_SRC = ROOT / "apk" / "assets" / "src"
WEB = ROOT / "pc" / "web"

RE_REGISTER = re.compile(r'System\.register\("chunks:///_virtual/([^"]+)"')


def build_main_plain() -> str:
    """与 build_apk.build_bundle 相同的基线与拼接逻辑，但返回明文全文（不加密）。

    基线永远是原版 APK（AGENTS.md 规矩：多次构建结果必须一致）。
    """
    with zipfile.ZipFile(build_apk.ORIG_APK) as z:
        base = z.read("assets/assets/main/index.jsc")
    plain = build_apk.xxtea_decrypt(base)
    text = plain.decode("utf-8", errors="replace")
    head = 'System.register("chunks:///_virtual/blController.ts"'
    assert text.startswith(head), text[:80]
    cut = text.rfind("});")
    text = text[: cut + 3]

    for name in build_apk.PATCH_MODULES:
        a = text.find('System.register("chunks:///_virtual/%s"' % name)
        assert a >= 0, name
        m = RE_REGISTER.search(text, a + 10)
        b = m.start() if m else len(text)
        new = build_apk.module_text(name).rstrip() + "\n"
        text = text[:a] + new + text[b:]
        print("    splice %-22s -> %8d bytes" % (name, len(new.encode("utf-8"))))

    if not text.endswith("\n"):
        text += "\n"
    return text


def write_bundle_scripts():
    """三个 bundle：internal / resources 解密原包，main 用拼接后的明文。"""
    WEB.mkdir(parents=True, exist_ok=True)

    for bundle in ("internal", "resources", "main"):
        src_dir = APK_ASSETS / bundle
        dst_dir = WEB / "assets" / bundle
        if dst_dir.exists():
            shutil.rmtree(dst_dir)
        shutil.copytree(src_dir, dst_dir, ignore=shutil.ignore_patterns("*.jsc"))

        if bundle == "main":
            text = build_main_plain()
            (dst_dir / "index.js").write_text(text, encoding="utf-8", newline="")
            size = len(text.encode("utf-8"))
        else:
            with zipfile.ZipFile(build_apk.ORIG_APK) as z:
                raw = z.read("assets/assets/%s/index.jsc" % bundle)
            data = build_apk.xxtea_decrypt(raw)
            (dst_dir / "index.js").write_bytes(data)
            size = len(data)

        # 明文脚本：清掉 cc.config.json 里的加密标记
        cfg_path = dst_dir / "cc.config.json"
        cfg = json.loads(cfg_path.read_text(encoding="utf-8"))
        was = cfg.get("encrypted")
        cfg["encrypted"] = False
        cfg_path.write_text(json.dumps(cfg, ensure_ascii=False, separators=(",", ":")),
                            encoding="utf-8", newline="")
        print("[bundle] %-10s index.js %8d bytes (encrypted:%s->False)" % (bundle, size, was))


def patch_settings(platform: str):
    """基于安卓 settings.json 生成 web 版：平台字段换成 web，其余（分辨率/场景/预载 bundle）保持。"""
    settings = json.loads((APK_SRC / "settings.json").read_text(encoding="utf-8"))
    settings["engine"]["platform"] = platform
    # 网页伺服无需服务端前缀
    settings["assets"]["server"] = ""
    dst = WEB / "src"
    dst.mkdir(parents=True, exist_ok=True)
    (dst / "settings.json").write_text(json.dumps(settings, ensure_ascii=False, separators=(",", ":")),
                                       encoding="utf-8", newline="")
    print("[src] settings.json platform=android -> %s (designResolution=%s, launchScene kept)"
          % (platform, settings["screen"]["designResolution"]))


def copy_boot_files():
    """启动配套（与平台无关的部分）：application.js / system.bundle.js / import-map.json。"""
    for name in ("application.js", "system.bundle.js", "import-map.json"):
        src = APK_SRC / name
        if src.is_file():
            shutil.copy2(src, WEB / name)
            print("[boot] %s copied" % name)


def install_engine(engine_dir: Path):
    """把引擎候选目录里的 web 引擎文件拷到 pc/web（跳过候选目录里游戏自己的 assets）。"""
    copied = 0
    for item in engine_dir.rglob("*"):
        if item.is_dir():
            continue
        rel = item.relative_to(engine_dir)
        # 候选目录里可能带样例游戏自己的 bundle / settings —— 这些我们不用
        parts = rel.parts
        if parts and parts[0] in ("assets",):
            continue
        if rel.name in ("settings.json",):
            continue
        dst = WEB / rel
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(item, dst)
        copied += 1
    print("[engine] %d files copied from %s" % (copied, engine_dir))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--engine", help="web 引擎候选目录（pc/engine-candidates/<name>）")
    ap.add_argument("--platform", default="web-mobile", help="settings.json 的 platform 值")
    args = ap.parse_args()

    # 与 release.py 相同顺序的源码预处理（幂等：已注入则跳过）
    build_apk.fix_co_dep_pic()
    items = build_apk.build_payload()
    build_apk.inject_icons(items)

    write_bundle_scripts()
    patch_settings(args.platform)
    copy_boot_files()
    if args.engine:
        install_engine(Path(args.engine))

    total = sum(f.stat().st_size for f in WEB.rglob("*") if f.is_file())
    print("[done] pc/web assembled, %d files, %.1f MB"
          % (sum(1 for _ in WEB.rglob("*") if _.is_file()), total / 1048576))


if __name__ == "__main__":
    main()
