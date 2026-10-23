# -*- coding: utf-8 -*-
"""诊断 3：候选基线 APK 是否为原版内容（co_dep 56 节点、无分公司 id、无空格 pic 格式）"""
import re
import sys
import zipfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import build_apk

CANDS = [
    Path(r"C:\Users\20905\Downloads\dszmnq_247960.apk"),
    Path(r"C:\Users\20905\Desktop\dszmnq_247960.apk"),
    ROOT := Path(__file__).resolve().parent.parent / "build" / "vanilla_signed.apk",
    ROOT / "build" / "pulled_vanilla.apk",
    ROOT / "build" / "vanilla_unsigned.apk",
]

for apk in CANDS:
    if not apk.exists():
        print(f"{apk}  MISSING")
        continue
    try:
        with zipfile.ZipFile(apk) as z:
            raw = z.read("assets/assets/main/index.jsc")
        text = build_apk.xxtea_decrypt(raw).decode("utf-8", "replace")
        a = text.find('System.register("chunks:///_virtual/co_dep.ts"')
        m = re.search(r'System\.register\("chunks:///_virtual/', text[a + 10:])
        chunk = text[a: a + 10 + m.start()]
        n_nospace = len(re.findall(r'pic:"([^"]+)"', chunk))
        n_space = len(re.findall(r'pic: "([^"]+)"', chunk))
        has_fgs = "1501aa" in chunk or "k1502" in chunk
        n_nodes = len(re.findall(r"k(\d+): \{", chunk)) or len(re.findall(r"k(\d+):\{", chunk))
        print(f"{apk.name}  size={apk.stat().st_size}  pic无空格={n_nospace} pic带空格={n_space} "
              f"含分公司={has_fgs} 节点数≈{n_nodes}  {'<-- 原版特征' if n_nospace and not has_fgs else ''}")
    except Exception as e:
        print(f"{apk.name}  ERROR {e}")
