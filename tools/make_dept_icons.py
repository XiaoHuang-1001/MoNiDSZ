# -*- coding: utf-8 -*-
"""生成分公司层部门立绘：<部门 id>aa.png

尺寸对齐游戏内图集帧：85x80（见 resources 图集 1101aa 的 rect）。
先在 4 倍画布绘制再缩小，保证抗锯齿质量。
"""
import json
import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
DEP_TS = ROOT / "源码" / "modules" / "01_config" / "co_dep.ts"
OUT = ROOT / "资源" / "新增立绘"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 85, 80
SS = 4  # 超采样倍数

# —— 解析 co_dep.ts ——
src = DEP_TS.read_text(encoding="utf-8")
blocks = re.findall(r"k(\d+): \{(.*?)\n        \}", src, re.S)
depts = []
for did, body in blocks:
    did = int(did)
    name = re.search(r'name: "([^"]+)"', body)
    step = re.search(r"step: (\d+)", body)
    power = re.search(r"power: (\d+)", body)
    if not name or not step:
        continue
    depts.append({"id": did, "name": name.group(1), "step": int(step.group(1)),
                  "power": int(power.group(1)) if power else 0})

targets = [d for d in depts if d["id"] in (1500, 1600) or 2100 < d["id"] < 2500]
targets.sort(key=lambda d: d["id"])
print(f"待生成 {len(targets)} 张 ({W}x{H})")

PALETTE = {
    2: ((43, 108, 176), (66, 153, 225)),
    3: ((44, 122, 123), (56, 178, 172)),
    4: ((151, 90, 22), (221, 107, 32)),
    5: ((85, 60, 154), (128, 90, 213)),
}


def font(size):
    for p in (r"C:\Windows\Fonts\msyhbd.ttc", r"C:\Windows\Fonts\msyh.ttc",
              r"C:\Windows\Fonts\simhei.ttf"):
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            continue
    return ImageFont.load_default()


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def split_name(name):
    """返回 (行列表, 字号)"""
    n = len(name)
    if n <= 3:
        return [name], (22 if n <= 2 else 21)
    if n == 4:
        return [name], 19
    if n <= 6:
        k = (n + 1) // 2
        return [name[:k], name[k:]], 16
    return [name[:4], name[4:8]], 14


def draw_dept(d):
    w, h = W * SS, H * SS
    branch2 = d["id"] >= 2000 or d["id"] == 1600
    c1, c2 = PALETTE[d["step"]]
    if branch2:
        c1 = tuple(int(x * 0.72) for x in c1)
        c2 = tuple(int(x * 0.78) for x in c2)

    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    grad = Image.new("RGB", (1, h))
    for y in range(h):
        grad.putpixel((0, y), lerp(c1, c2, y / (h - 1)))
    grad = grad.resize((w, h))

    m = 2 * SS
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle([m, m, w - m, h - m], radius=13 * SS, fill=255)
    img.paste(grad, (0, 0), mask)

    d2 = ImageDraw.Draw(img)
    d2.rounded_rectangle([m, m, w - m, h - m], radius=13 * SS,
                         outline=(255, 255, 255, 90), width=SS)

    lines, size = split_name(d["name"])
    f = font(size * SS)
    line_h = int(size * SS * 1.16)
    total = line_h * len(lines)
    y = h // 2 - total // 2 + (2 * SS if len(lines) == 1 else 0)
    for ln in lines:
        bb = d2.textbbox((0, 0), ln, font=f)
        d2.text(((w - (bb[2] - bb[0])) / 2 - bb[0], y), ln, font=f, fill=(255, 255, 255, 255))
        y += line_h

    img = img.resize((W, H), Image.LANCZOS)
    out = OUT / f"{d['id']}aa.png"
    img.save(out)
    return out


files = [draw_dept(d) for d in targets]

manifest = [{"id": d["id"], "name": d["name"], "step": d["step"],
             "branch": 2 if (d["id"] >= 2000 or d["id"] == 1600) else 1,
             "file": f"{d['id']}aa.png"} for d in targets]
(OUT / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")

with (OUT / "清单.csv").open("w", encoding="utf-8-sig", newline="") as f:
    f.write("id,名称,层级,分公司,文件\n")
    for m2 in manifest:
        f.write(f"{m2['id']},{m2['name']},{m2['step']},{m2['branch']},{m2['file']}\n")

print(f"已生成 {len(files)} 张 → {OUT}")
