# -*- coding: utf-8 -*-
"""一次性诊断：original_pics 为什么返回 0 + co_dep.ts 当前状态是否正确"""
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import build_apk

ROOT = Path(__file__).resolve().parent.parent

# 1) original_pics 直接调用
orig = build_apk.original_pics()
print("orig pics:", len(orig))

# 2) 手动复现 original_pics 内部步骤，看哪一步断了
import zipfile
with zipfile.ZipFile(build_apk.ORIG_APK) as z:
    raw = z.read("assets/assets/main/index.jsc")
text = build_apk.xxtea_decrypt(raw).decode("utf-8", "replace")
a = text.find('System.register("chunks:///_virtual/co_dep.ts"')
print("find co_dep register at:", a)
m = re.search(r'System\.register\("chunks:///_virtual/', text[a + 10:]) if a >= 0 else None
print("next register found:", bool(m))
chunk = text[a: a + 10 + m.start()] if (a >= 0 and m) else text[a:]
found = re.findall(r'k(\d+):\{[^{}]*?pic:"([^"]+)"', chunk)
print("pics found in original chunk:", len(found), found[:3])

# 3) 当前源码 co_dep.ts 状态
src = (ROOT / "源码" / "modules" / "01_config" / "co_dep.ts").read_text(encoding="utf-8")
pics = re.findall(r'k(\d+):\{[^{}]*?pic: "([^"]+)"', src)
print("source pics (with space):", len(pics))
empty = [(d, p) for d, p in pics if not p]
print("empty pics:", empty[:5])
newbad = [(d, p) for d, p in pics if 1500 <= int(d) < 3000 and p != "%daa" % int(d)]
print("new-node (1500-3000) wrong:", newbad[:5])
if orig:
    mismatch = [(d, p) for d, p in pics if int(d) < 1500 and orig.get(int(d)) != p]
    print("old-node mismatch vs orig:", len(mismatch), mismatch[:5])
