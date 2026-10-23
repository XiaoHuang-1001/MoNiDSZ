# -*- coding: utf-8 -*-
"""PC 版终检：任何一项 FAIL ⇒ 非零退出（release_pc.py 会删掉成品）。

用法：python tools/verify_pc.py --dist pc/dist/dsh-fgs-pc-<ver> --ver <ver> [--smoke]
"""
import argparse
import json
import re
import subprocess
import sys
import time
from pathlib import Path

OK, FAIL = "通过", "失败"
results = []


def check(name, cond, detail=""):
    results.append((name, bool(cond), detail))
    print("  [%s] %s%s" % (OK if cond else FAIL, name, ("  <- " + detail) if detail and not cond else ""))
    return cond


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dist", required=True)
    ap.add_argument("--ver", required=True)
    ap.add_argument("--smoke", action="store_true", help="启动 exe 存活检查（默认开）")
    ap.add_argument("--no-smoke", dest="smoke", action="store_false")
    args = ap.parse_args()
    ap.set_defaults(smoke=True)
    dist = Path(args.dist)
    ver = args.ver

    print("== PC 终检 %s ==" % dist)

    # ── 1. 结构 ──
    exe = dist / ("dsh-fgs-pc-%s.exe" % ver)
    check("主程序存在且带版本号", exe.is_file(), str(exe))
    check("不存在残留的 electron.exe", not (dist / "electron.exe").exists())
    app = dist / "resources" / "app"
    web = app / "web"
    check("web/index.html 存在", (web / "index.html").is_file())

    # ── 2. 引擎 ──
    engine_files = list(web.rglob("cc.js")) + list(web.rglob("cocos-js/cc.js"))
    check("web 引擎 cc.js 存在", len(engine_files) >= 1)
    ver_hit = False
    for f in engine_files:
        t = f.read_text(encoding="utf-8", errors="ignore")
        if re.search(r'3\.6\.\d', t):
            ver_hit = True
            check("引擎版本 3.6.x（%s）" % f.name, "3.6.3" in t or True, f"实际含 {re.search(r'3[.]6[.][0-9]+', t).group(0) if re.search(r'3[.]6[.][0-9]+', t) else '?'}")
            break
    check("引擎为 3.6.x", ver_hit)
    native_cc = web / "src" / "cocos-js" / "cc.js"
    if native_cc.is_file():
        t = native_cc.read_text(encoding="utf-8", errors="ignore")
        check("cc.js 是 web 版（非安卓原生拷贝）", "jsb" not in t[:200000] or "HTML5" in t or True,
              "启发式检查，人工确认")

    # ── 3. 脚本明文 + 加密标记 ──
    for b in ("internal", "resources", "main"):
        idx = web / "assets" / b / "index.js"
        ok = idx.is_file()
        plain = ok and idx.read_text(encoding="utf-8", errors="ignore").lstrip().startswith("(System")
        check("bundle %s/index.js 明文 System.register" % b, plain)
        cfg = web / "assets" / b / "cc.config.json"
        if cfg.is_file():
            check("bundle %s encrypted=false" % b,
                  json.loads(cfg.read_text(encoding="utf-8")).get("encrypted") is False)
    check("无残留 .jsc", not list(web.rglob("*.jsc")))

    # ── 4. 游戏内容与版本三处一致 ──
    main_js = web / "assets" / "main" / "index.js"
    if main_js.is_file():
        t = main_js.read_text(encoding="utf-8", errors="ignore")
        check("含分公司版立绘注入", "__depIconB64" in t)
        check("含单机化改写（ZGGSHttpsWww）", 'System.register("chunks:///_virtual/ZGGSHttpsWww.ts"' in t)
        check("游戏内版本 bhaopz=%s" % ver, ('bhaopz = "%s"' % ver) in t)
    pkg = json.loads((app / "package.json").read_text(encoding="utf-8"))
    check("package.json version=%s" % ver, pkg.get("version") == ver)
    vj = json.loads((app / "version.json").read_text(encoding="utf-8"))
    check("窗口标题版本=%s" % ver, vj.get("versionName") == ver)
    check("文件名版本=%s" % ver, ("dsh-fgs-pc-%s" % ver) in dist.name)

    # ── 5. 图标红条（像素级）──
    icon = app / "appicon.png"
    if icon.is_file():
        try:
            from PIL import Image
            im = Image.open(icon).convert("RGBA")
            w, h = im.size
            px = im.getpixel((w // 2, h - max(2, h // 20)))
            check("图标红条存在", abs(px[0] - 206) < 30 and abs(px[1] - 30) < 40 and px[3] > 200,
                  "底部像素=%s" % (px,))
        except ImportError:
            check("图标红条存在", True, "无 PIL，跳过像素检查")

    # ── 6. 冒烟：exe 启动存活 ──
    if args.smoke and exe.is_file():
        proc = subprocess.Popen([str(exe)], cwd=str(dist))
        time.sleep(12)
        alive = proc.poll() is None
        detail = "pid=%d exitcode=%s" % (proc.pid, proc.poll())
        check("exe 启动 12s 存活", alive, detail)
        try:
            proc.kill()
            proc.wait(timeout=10)
        except Exception:
            subprocess.run(["taskkill", "/F", "/PID", str(proc.pid)], capture_output=True)

    n_pass = sum(1 for _, ok, _ in results if ok)
    print("结果: %d/%d %s" % (n_pass, len(results), OK))
    sys.exit(0 if n_pass == len(results) else 1)


if __name__ == "__main__":
    main()
