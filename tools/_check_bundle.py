# -*- coding: utf-8 -*-
"""确认成品 APK 里真的带着这次的新代码（从 index.jsc 解密后直接找字符串）。"""
import io, os, sys, zipfile

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__))))
import build_apk as B

APK = r"C:\Users\20905\Desktop\最新包\dsh-fgs-1.1.37.apk"
with zipfile.ZipFile(APK) as z:
    enc = z.read("assets/assets/main/index.jsc")
plain = B.xxtea_decrypt(enc).decode("utf-8", "replace")
print("index.js chars =", len(plain))

want = [
    "__dshRenameBranch",
    "__dshBranchOfWork",
    "refreshTree ok",
    "rename hook =",
    "market table:",
    "分公司总经理",
    'name: "三沙"',
    'name: "克拉玛依"',
    "market_id: 6848",
    "P9-A",
]
bad = 0
for w in want:
    n = plain.count(w)
    print("%-24s x%d" % (w, n))
    if n == 0:
        bad += 1
print("市场总条数(prov:) =", plain.count('prov: "'))
print("市场等级条数(market_id:) =", plain.count("market_id: "))
print("省分组数(type:) =", len(set(__import__("re").findall(r"type: (\d+),\s*\n\s*num", plain))))
sys.exit(1 if bad else 0)

