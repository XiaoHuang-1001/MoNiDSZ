# -*- coding: utf-8 -*-
"""诊断 6：web 输入层监听的 DOM 事件类型"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ENG = ROOT / "pc" / "build-engine" / "engine" / "cocos-engine-3.6.3"
d = ENG / "pal" / "input" / "web"
for f in d.glob("*.ts"):
    t = f.read_text(encoding="utf-8", errors="ignore")
    for i, line in enumerate(t.splitlines(), 1):
        if re.search(r"addEventListener\(|'pointer|'touch|'mouse", line):
            print("%s:%d: %s" % (f.name, i, line.strip()[:150]))
