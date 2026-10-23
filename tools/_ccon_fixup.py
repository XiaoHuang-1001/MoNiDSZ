# -*- coding: utf-8 -*-
"""给 web bundle 里所有 json+bin 的 pack 补一份 .ccon（web 引擎按 ccon 扩展名请求时不 404）"""
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WEB = ROOT / "pc" / "web" / "assets"

count = 0
for bundle in ("internal", "resources", "main"):
    for binf in (WEB / bundle / "import").rglob("*.bin"):
        json = binf.with_suffix(".json")
        ccon = binf.with_suffix(".ccon")
        if json.is_file() and not ccon.exists():
            shutil.copy2(json, ccon)
            count += 1
print("ccon copies:", count)
