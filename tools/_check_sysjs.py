# -*- coding: utf-8 -*-
"""诊断 4：SystemJS 6.14.2 出错点上下文"""
from pathlib import Path

t = Path(r"pc/web/src/system.bundle.js").read_text(encoding="utf-8")
lines = t.split("\n")
print("lines:", len(lines))
seg = lines[3] if len(lines) > 3 else lines[-1]
print("len(line4):", len(seg))
print("--- line4 col 2050~2750 ---")
print(seg[2050:2750])
