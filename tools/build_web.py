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
WEB_TEMPLATE = ROOT / "pc" / "web-template"

RE_REGISTER = re.compile(r'System\.register\("chunks:///_virtual/([^"]+)"')


def resolve_baseline() -> Path:
    """定位原版打底 APK。优先官方原版路径；被并行会话动过时回落到 build/vanilla_signed.apk
    （昨晚从原版重打包，co_dep 为 56 节点原版内容，已验证）。"""
    cands = [
        build_apk.ORIG_APK,
        Path(r"C:\Users\20905\Desktop\dszmnq_247960.apk"),
        ROOT / "build" / "vanilla_signed.apk",
    ]
    for apk in cands:
        if apk.exists():
            if apk != build_apk.ORIG_APK:
                print("[baseline] %s 不存在，回落 %s" % (build_apk.ORIG_APK, apk))
                build_apk.ORIG_APK = apk
            return apk
    raise SystemExit("找不到任何可用的原版基线 APK")


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
        # 自建 web 引擎按旧文件名请求 bundle 配置（安卓原生层会自动回落，web 不会）→ 双名并存
        shutil.copy2(cfg_path, dst_dir / "config.json")
        print("[bundle] %-10s index.js %8d bytes (encrypted:%s->False)" % (bundle, size, was))


def ccon_fixup():
    """带 .bin 的 pack 是 ccon 形态：给 .json 补一份 .ccon 副本，web 引擎按 .ccon 请求时不 404。

    （.ccon 的下载逻辑 = json 头 + 同名 .bin 块，与包内 json+bin 数据同构，直接改名即可。）
    """
    count = 0
    for bundle in ("internal", "resources", "main"):
        imp = WEB / "assets" / bundle / "import"
        if not imp.is_dir():
            continue
        for binf in imp.rglob("*.bin"):
            js = binf.with_suffix(".json")
            cc_ = binf.with_suffix(".ccon")
            if js.is_file() and not cc_.exists():
                shutil.copy2(js, cc_)
                count += 1
    print("[ccon] pack 副本 %d 个" % count)


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
    """启动配套。网页目录布局（对齐 CC web 构建标准 + 本项目实测适配）：
      index.html / index.js / style.css / application.js        ← 根
      src/{settings.json, polyfills.bundle.js, system.bundle.js,
           named-register.min.js, import-map.json}
      cocos-js/cc.js                                             ← web 引擎（install_engine 放入）
      chunks/bundle.js                                           ← 游戏自带 appsdk chunk

    关键件来源（浏览器实测通过的组合，勿随意更换）：
      system.bundle.js = SystemJS 6.14.2 完整版 + named-register 扩展
        （安卓包里的原生裁剪版不支持 import map；官方编辑器预览版需要 require 全局，均不可用）
      polyfills.bundle.js = 官方 3.6.3 编辑器版
    """
    for name in ("index.html", "index.js", "style.css"):
        shutil.copy2(WEB_TEMPLATE / name, WEB / name)
    for name in ("polyfills.bundle.js", "system.bundle.js", "named-register.min.js"):
        shutil.copy2(WEB_TEMPLATE / name, WEB / "src" / name)
    shutil.copy2(APK_SRC / "application.js", WEB / "application.js")
    shutil.copy2(APK_SRC / "import-map.json", WEB / "src" / "import-map.json")
    # settings.json 的 scriptPackages 引用 ../chunks/bundle.js（相对 src/ → 根/chunks/）
    (WEB / "chunks").mkdir(parents=True, exist_ok=True)
    shutil.copy2(APK_SRC / "chunks" / "bundle.js", WEB / "chunks" / "bundle.js")
    print("[boot] 模板/systemjs/polyfills/application/import-map/chunks 已就位")


def install_engine(engine_dir: Path):
    """把 web 引擎 cc.js 放到 pc/web/cocos-js/cc.js。

    engine_dir 支持三种形态：
      - 自建产物：cocos-engine 构建输出（bin/dev/cc-min/cc.js）
      - 候选仓库根：cc.js 或 cocos-js/cc.js 直接在目录下
      - 候选子目录：递归找最大的 cc.js
    """
    candidates = [
        engine_dir / "cc.js",
        engine_dir / "cocos-js" / "cc.js",
        engine_dir / "bin" / "dev" / "cc-min" / "cc.js",
    ]
    cc = next((p for p in candidates if p.is_file()), None)
    if cc is None:
        found = [p for p in engine_dir.rglob("cc.js") if p.is_file()]
        if not found:
            raise SystemExit("引擎目录里找不到 cc.js: %s" % engine_dir)
        cc = max(found, key=lambda p: p.stat().st_size)
    dst = WEB / "cocos-js" / "cc.js"
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(cc, dst)
    head = dst.read_text(encoding="utf-8", errors="ignore")[:200000]
    import re as _re
    m = _re.search(r"3\.[0-9]+\.[0-9]+", head)
    print("[engine] cc.js <- %s (%.1f MB, 版本标记≈%s)"
          % (cc, cc.stat().st_size / 1048576, m.group(0) if m else "?"))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--engine", help="web 引擎候选目录（pc/engine-candidates/<name>）")
    ap.add_argument("--platform", default="web-mobile", help="settings.json 的 platform 值")
    args = ap.parse_args()

    # 与 release.py 相同顺序的源码预处理（幂等：已注入则跳过）
    resolve_baseline()
    build_apk.fix_co_dep_pic()
    items = build_apk.build_payload()
    build_apk.inject_icons(items)

    write_bundle_scripts()
    ccon_fixup()
    patch_settings(args.platform)
    copy_boot_files()
    if args.engine:
        install_engine(Path(args.engine))

    total = sum(f.stat().st_size for f in WEB.rglob("*") if f.is_file())
    print("[done] pc/web assembled, %d files, %.1f MB"
          % (sum(1 for _ in WEB.rglob("*") if _.is_file()), total / 1048576))


if __name__ == "__main__":
    main()
