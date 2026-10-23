# -*- coding: utf-8 -*-
"""诊断 2：原版 chunk 里 pic 的实际格式"""
import re
import sys
import zipfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import build_apk

with zipfile.ZipFile(build_apk.ORIG_APK) as z:
    raw = z.read("assets/assets/main/index.jsc")
text = build_apk.xxtea_decrypt(raw).decode("utf-8", "replace")
a = text.find('System.register("chunks:///_virtual/co_dep.ts"')
m = re.search(r'System\.register\("chunks:///_virtual/', text[a + 10:])
chunk = text[a: a + 10 + m.start()]
i = chunk.find("pic")
print("chunk len:", len(chunk), " first pic at:", i)
print(repr(chunk[max(0, i - 100): i + 140]))
print("pic occurrences:", chunk.count("pic"))
# 各种格式都试一遍
for pat in [r'pic:"', r'pic: "', r'pic :', r'"pic"']:
    print(repr(pat), "->", chunk.count(pat))
