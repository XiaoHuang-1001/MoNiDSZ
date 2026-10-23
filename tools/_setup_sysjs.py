# -*- coding: utf-8 -*-
"""安装 SystemJS 6.14.2（完整版）+ named-register 扩展到 pc/web/src/"""
import tarfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
tgz = ROOT / "pc" / "web-template" / "systemjs.tgz"
web_src = ROOT / "pc" / "web" / "src"
tpl = ROOT / "pc" / "web-template"

t = tarfile.open(tgz)
sysjs = t.extractfile("package/dist/system.min.js").read()
named = t.extractfile("package/dist/extras/named-register.min.js").read()

(web_src / "system.bundle.js").write_bytes(sysjs)
(web_src / "named-register.min.js").write_bytes(named)
# 存一份到模板目录，供 build_web.py 每次组装时使用
(tpl / "system.bundle.js").write_bytes(sysjs)
(tpl / "named-register.min.js").write_bytes(named)
print("system.bundle.js %d bytes, named-register.min.js %d bytes" % (len(sysjs), len(named)))

# index.html：追加 named-register 脚本标签 + 换版本参数
f = web_src.parent / "index.html"
html = f.read_text(encoding="utf-8")
html = html.replace(
    '<script src="src/system.bundle.js?v=off363" charset="utf-8"></script>',
    '<script src="src/system.bundle.js?v=6142n" charset="utf-8"></script>\n'
    '  <script src="src/named-register.min.js?v=1" charset="utf-8"></script>')
f.write_text(html, encoding="utf-8")
print("index.html updated")
