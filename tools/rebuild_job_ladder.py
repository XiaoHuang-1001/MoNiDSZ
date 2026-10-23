# -*- coding: utf-8 -*-
"""
把 co_job 的 63 级（P0..P9）重建成 30 级：P0-C < P0-B < P0-A < ... < P9-C < P9-B < P9-A。
数值全部按曲线采样自原始 63 行，保证平滑；颜色 grade 按 P 档给：
P0-P3=2(绿) P4-P6=3(蓝) P7=5(橙) P8=7(金) P9=6(红)
"""
import io
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P = os.path.join(ROOT, "源码", "modules", "01_config", "co_job.ts")

FIELDS = ["id", "step", "lv", "name", "power", "grade", "pay", "exp", "num1", "num2",
          "get_money", "att", "hp", "def", "speed", "pot1", "pot2", "amb1", "amb2",
          "s_att", "s_hp", "s_def", "s_speed", "f_att", "f_hp", "f_def", "f_speed"]

src = io.open(P, encoding="utf-8").read()

rows = {}
for m in re.finditer(r"k(\d+): \{(.*?)\n        \}", src, re.S):
    body = m.group(2)
    d = {}
    for f in FIELDS:
        mm = re.search(r"\b%s: ([^,]+)" % f, body)
        d[f] = mm.group(1).strip() if mm else ("0" if f != "name" else '""')
    rows[int(m.group(1))] = d

print("parsed rows:", len(rows))
assert len(rows) == 63, len(rows)

SUBS = ["C", "B", "A"]
out_rows = []
for k in range(30):
    lvl = k // 3
    sub = k % 3
    sid = 1 + int(round(k * 62 / 29.0))
    d = dict(rows[sid])
    d["id"] = str(k + 1)
    d["name"] = '"P%d-%s"' % (lvl, SUBS[sub])
    if lvl <= 3:
        d["grade"] = "2"
    elif lvl <= 6:
        d["grade"] = "3"
    elif lvl == 7:
        d["grade"] = "5"
    elif lvl == 8:
        d["grade"] = "7"
    else:
        d["grade"] = "6"
    d["step"] = str(lvl + 1)
    d["lv"] = str(sub + 1)
    out_rows.append(d)

lines = []
for d in out_rows:
    lines.append("        k%s: {" % d["id"])
    for f in FIELDS:
        lines.append("          %s: %s," % (f, d[f]))
    lines[-1] = lines[-1][:-1]
    lines.append("        },")
lines[-1] = lines[-1][:-1]

start = src.find("e(\"co_job\", {")
assert start > 0
open_brace = src.find("{", start)
# find matching closing brace of the object literal
depth = 0
i = open_brace
while i < len(src):
    c = src[i]
    if c == "{":
        depth += 1
    elif c == "}":
        depth -= 1
        if depth == 0:
            break
    i += 1
assert depth == 0
close = i

head = src[:open_brace + 1]
tail = src[close:]
new = head + "\n" + "\n".join(lines) + "\n      " + tail

io.open(P, "w", encoding="utf-8", newline="").write(new)
print("wrote 30 rows")
for d in out_rows:
    print(" ", d["id"], d["name"], "grade", d["grade"], "pay", d["pay"], "power", d["power"])
