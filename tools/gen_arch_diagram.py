# -*- coding: utf-8 -*-
"""生成《最大理论架构图》：PNG 图 + Markdown 说明。

数据来源：源码/modules/01_config/co_dep.ts（部门）与 co_post.ts（岗位编制）。
"""
import io, os, re, json, collections, datetime, sys

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
M = os.path.join(ROOT, '源码', 'modules', '01_config')
OUT_DIR = os.path.dirname(ROOT)          # 工作区根
VER = json.load(io.open(os.path.join(ROOT, 'build', 'version.json'), encoding='utf-8')) \
    if os.path.exists(os.path.join(ROOT, 'build', 'version.json')) else {}
VERSTR = (sys.argv[1] if len(sys.argv) > 1 else "") or str(VER.get('versionName') or '1.1.36')

read = lambda n: io.open(os.path.join(M, n), encoding='utf-8-sig').read()


def parse(src):
    parts = re.split(r'(?m)^        k(\d+): \{', src)
    out = []
    for i in range(1, len(parts), 2):
        body = parts[i + 1]
        d = {}
        for f in re.finditer(r'(\w+):\s*("([^"]*)"|(-?[\w.]+))', body):
            d[f.group(1)] = f.group(3) if f.group(3) is not None else f.group(4)
        out.append(d)
    return out

deps = {int(d['id']): d for d in parse(read('co_dep.ts'))}
posts = parse(read('co_post.ts'))

by_dep = collections.defaultdict(lambda: {'lead': [], 'staff': []})
for p in posts:
    dd = int(p['dep_id'])
    if dd not in deps:
        continue
    (by_dep[dd]['lead'] if p['type'] == '2' else by_dep[dd]['staff']).append(p)

kids = collections.defaultdict(list)
roots = []
for did, d in deps.items():
    up = int(d.get('higher_id', '0') or 0)
    if up and up in deps:
        kids[up].append(did)
    else:
        roots.append(did)
for k in kids:
    kids[k].sort()
roots.sort()

CAP = {did: sum(int(p['num']) for p in by_dep[did]['lead']) +
              sum(int(p['num']) for p in by_dep[did]['staff']) for did in deps}
NAME = {did: deps[did].get('name', '?') for did in deps}

# ---------------- 统计 ----------------
# 分公司一 = 1500 子树；分公司二 = 1600 子树
def subtree(root):
    out = []
    def walk(x):
        out.append(x)
        for c in kids[x]:
            walk(c)
    walk(root)
    return out

T1 = subtree(1500)
T2 = subtree(1600)
TOP = [1001, 1002, 1003]
total_cap = sum(CAP.values())
n_lead = sum(len(by_dep[d]['lead']) for d in deps)
seat_lead = sum(int(p['num']) for d in deps for p in by_dep[d]['lead'])
seat_staff = sum(int(p['num']) for d in deps for p in by_dep[d]['staff'])

# ---------------- 画图 ----------------
FONT_R = r'C:\Windows\Fonts\msyh.ttc'
FONT_B = r'C:\Windows\Fonts\msyhbd.ttc'
f_title = ImageFont.truetype(FONT_B, 34)
f_sub = ImageFont.truetype(FONT_R, 18)
f_box = ImageFont.truetype(FONT_B, 15)
f_box_s = ImageFont.truetype(FONT_R, 12)
f_leaf = ImageFont.truetype(FONT_B, 14)
f_leaf_s = ImageFont.truetype(FONT_R, 11)
f_band = ImageFont.truetype(FONT_B, 17)

SLOT = 104          # 叶子槽宽
BOX_H = 46
GAP_Y = 96          # 层间距
LINE = (120, 132, 150)
PAD = 24

def leaf_span(did):
    if not kids[did]:
        return 1
    return sum(leaf_span(c) for c in kids[did])

BAND_W = leaf_span(1500) * SLOT
W = BAND_W + 160
TOP_H = 340
H = TOP_H + 2 * (4 * GAP_Y + BOX_H + 20) + 150

img = Image.new('RGB', (W, H), (250, 251, 253))
dr = ImageDraw.Draw(img)


def text_c(draw, xy, s, font, fill):
    w = draw.textlength(s, font=font)
    draw.text((xy[0] - w / 2, xy[1]), s, font=font, fill=fill)


def fit_font(text, maxw, size, bold=True, min_size=9):
    path = FONT_B if bold else FONT_R
    s = size
    while s > min_size:
        f = ImageFont.truetype(path, s)
        if dr.textlength(text, font=f) <= maxw:
            return f
        s -= 1
    return ImageFont.truetype(path, min_size)


RECTS = []


def box(draw, x, y, w, h, title, sub, fill, border, f1, f2, tcol=(17, 24, 39), scol=(71, 85, 105)):
    RECTS.append((x, y, x + w, y + h, title))
    draw.rounded_rectangle([x, y, x + w, y + h], radius=7, fill=fill, outline=border, width=2)
    ft = fit_font(title, w - 8, f1.size, bold=True)
    text_c(draw, (x + w / 2, y + (5 if sub else h / 2 - ft.size / 2)), title, ft, tcol)
    if sub:
        fs = fit_font(sub, w - 8, f2.size, bold=False, min_size=8)
        text_c(draw, (x + w / 2, y + h - fs.size - 7), sub, fs, scol)


def line(draw, x1, y1, x2, y2, w=2, col=LINE):
    draw.line([x1, y1, x2, y2], fill=col, width=w)


COL = {
    'chair':  ((253, 230, 138), (180, 83, 9)),
    'board':  ((237, 233, 254), (109, 40, 217)),
    'sec':    ((219, 234, 254), (37, 99, 235)),
    'branch': ((252, 231, 243), (190, 24, 93)),
    'l2':     ((224, 242, 254), (3, 105, 161)),
    'l3':     ((240, 253, 244), (21, 128, 61)),
    'l4':     ((254, 252, 232), (161, 98, 7)),
    'l5':     ((245, 243, 255), (91, 33, 182)),
}

# 标题
text_c(dr, (W / 2, 18), '《董事长模拟器·分公司版》最大理论架构图', f_title, (15, 23, 42))
text_c(dr, (W / 2, 62),
       'v%s ｜ 部门 %d 个 ｜ 最大理论编制 %d 人 ｜ 领导岗 %d / 员工岗 %d 个编制 ｜ 职级 30 档 ｜ 市场 34 省 308 市'
       % (VERSTR, len(deps), total_cap, seat_lead, seat_staff), f_sub, (71, 85, 105))

cx = W / 2
# 董事会（上）
bw, bh = 200, 52
bx = cx - 150
by = 108
box(dr, bx, by, bw, bh, '董事会(1003)', '董事 ×8', *COL['board'], f_box, f_box_s)
# 董事长
dx0, dy0 = cx - 110, by + 100
box(dr, dx0, dy0, 220, 58, '董事长(1001)', '1 人 + 直属员工 4', *COL['chair'], f_box, f_box_s)
line(dr, cx, by + bh, cx, dy0, 2, COL['board'][1])
# 秘书处（右）
sx, sy = dx0 + 220 + 46, dy0 + 3
box(dr, sx, sy, 190, 52, '秘书处(1002)', '董事长秘书 ×4', *COL['sec'], f_box, f_box_s)
line(dr, dx0 + 220, dy0 + 29, sx, sy + 26, 2, COL['sec'][1])
# 说明
dr.text((sx + 198, sy + 8), '↑ 直属董事长，', font=f_box_s, fill=(120, 130, 145))
dr.text((sx + 198, sy + 26), '  不挂在分公司下', font=f_box_s, fill=(120, 130, 145))


def draw_band(root, y0, label):
    """画一个分公司子树。返回画完后的 y"""
    # 计算每个节点的 x 与 span
    pos = {}
    cursor = [80]
    def place(did):
        ch = kids[did]
        if not ch:
            pos[did] = (cursor[0] + (SLOT - 20) / 2, 1)
            cursor[0] += SLOT
            return 1
        sp = 0
        first = last = None
        for c in ch:
            place(c)
            if first is None:
                first = pos[c][0]
            last = pos[c][0]
            sp += pos[c][1]
        pos[did] = ((first + last) / 2, sp)
        return sp
    place(root)

    def depth_of(did):
        return LV[did]

    LV = {}
    def mark(did, lv):
        LV[did] = lv
        for c in kids[did]:
            mark(c, lv + 1)
    mark(root, 0)
    maxlv = max(LV.values())

    # 绘制
    def draw_node(did):
        x, sp = pos[did]
        d = depth_of(did)
        y = y0 + d * GAP_Y
        w = min(sp * SLOT - 12, 190)
        if did == root:
            fill, bd = COL['branch']
            box(dr, x - 110, y, 220, BOX_H + 6, NAME[did], '分公司总经理×1 + 员工×4',
                fill, bd, f_box, f_box_s)
        elif d == 1:
            fill, bd = COL['l2']
            box(dr, x - w / 2, y, w, BOX_H, NAME[did], '%d · %d人' % (did, CAP[did]),
                fill, bd, f_box, f_box_s)
        elif d == 2:
            fill, bd = COL['l3']
            box(dr, x - w / 2, y, w, BOX_H, NAME[did], '%d · %d人' % (did, CAP[did]),
                fill, bd, f_box, f_box_s)
        elif d == 3:
            fill, bd = COL['l4']
            box(dr, x - w / 2, y, w, BOX_H, NAME[did], '%d · %d人' % (did, CAP[did]),
                fill, bd, f_box, f_box_s)
        else:
            fill, bd = COL['l5']
            w2 = min(w, 96)
            box(dr, x - w2 / 2, y, w2, 40, NAME[did], '%d人' % CAP[did], fill, bd, f_leaf, f_leaf_s)
        # 连线到子节点
        bh = 40 if d == 4 else (BOX_H + 6 if did == root else BOX_H)
        for c in kids[did]:
            cy = y0 + depth_of(c) * GAP_Y
            px, cxx = x, pos[c][0]
            line(dr, px, y + bh, px, y + bh + 26)
            line(dr, px, y + bh + 26, cxx, y + bh + 26)
            line(dr, cxx, y + bh + 26, cxx, cy)
        for c in kids[did]:
            draw_node(c)

    draw_node(root)
    # 层标注
    tags = ['分公司', '部门', '二级', '三级', '小组']
    for lv in range(0, maxlv + 1):
        yy = y0 + lv * GAP_Y
        dr.text((6, yy + 6), tags[lv] if lv < len(tags) else 'L%d' % lv,
                font=f_band, fill=(148, 163, 184))
    dr.text((6, y0 - 30), label, font=f_band, fill=(100, 116, 139))
    return y0 + maxlv * GAP_Y + BOX_H


y1 = TOP_H
yy1 = draw_band(1500, y1, '分公司一')
y2 = yy1 + 110
yy2 = draw_band(1600, y2, '分公司二')

# 董事长 -> 两个分公司（走左侧主干，避开子树）
trunk = 44
line(dr, dx0, dy0 + 29, trunk, dy0 + 29, 3, COL['branch'][1])
line(dr, trunk, dy0 + 29, trunk, y2 - 40, 3, COL['branch'][1])
line(dr, trunk, y2 - 40, W / 2, y2 - 40, 3, COL['branch'][1])
line(dr, W / 2, y2 - 40, W / 2, y2, 3, COL['branch'][1])
line(dr, W / 2, y1 - 40, W / 2, y1, 3, COL['branch'][1])
line(dr, trunk, y1 - 40, W / 2, y1 - 40, 3, COL['branch'][1])

# 图例
lg = [('董事长', 'chair'), ('董事会', 'board'), ('秘书处', 'sec'), ('分公司', 'branch'),
      ('L2 部门', 'l2'), ('L3 部门', 'l3'), ('L4 部门', 'l4'), ('L5 小组', 'l5')]
lx = 70
ly = H - 62
for name, key in lg:
    dr.rounded_rectangle([lx, ly, lx + 20, ly + 16], radius=4, fill=COL[key][0], outline=COL[key][1], width=2)
    dr.text((lx + 26, ly), name, font=f_box_s, fill=(51, 65, 85))
    lx += 26 + int(dr.textlength(name, font=f_box_s)) + 26
dr.text((70, H - 34),
        '规模：单分公司 %d 部门 / %d 人；两分公司合计 %d 部门 / %d 人；全公司 %d 部门 / %d 人'
        % (len(T1), sum(CAP[x] for x in T1), len(T1) + len(T2), sum(CAP[x] for x in T1 + T2),
           len(deps), total_cap), font=f_sub, fill=(30, 41, 59))

png = os.path.join(OUT_DIR, '董事长模拟器-最大架构图-v%s.png' % VERSTR)
img.save(png)
print('PNG ->', png, img.size)

# ---- 自检：方框不能互相压住 ----
bad = []
for i in range(len(RECTS)):
    a = RECTS[i]
    for j in range(i + 1, len(RECTS)):
        b = RECTS[j]
        if a[0] < b[2] and b[0] < a[2] and a[1] < b[3] and b[1] < a[3]:
            bad.append((a[4], b[4]))
print('boxes=%d overlap=%d' % (len(RECTS), len(bad)))
if bad:
    for x in bad[:10]:
        print('   OVERLAP', x)
    raise SystemExit('方框重叠，布局需要调整')

# ---- 自检：画布不能有空/超界 ----
px = img.convert('RGB')
w, h = px.size
hist = px.resize((w // 4, h // 4)).getcolors(1 << 20)
bg = sum(c for c, col in hist if col == (250, 251, 253))
tot = sum(c for c, _ in hist)
print('背景占比 %.1f%%（其余为方框/文字/连线）' % (100.0 * bg / tot))
assert 0.30 < bg / tot < 0.97, '图像看起来是空白或糊死'

# ---------------- Markdown ----------------
lines = []
A = lines.append
A('# 《董事长模拟器·分公司版》最大理论架构图')
A('')
A('> 版本 v%s ｜ 由 `源码/modules/01_config/co_dep.ts` + `co_post.ts` 直接统计，非手绘估算。' % VERSTR)
A('')
A('## 一、总览数字')
A('')
A('| 项目 | 数值 |')
A('| --- | --- |')
A('| 部门总数（含分公司/秘书处/董事会） | **%d** |' % len(deps))
A('| 最大理论编制 | **%d 人** |' % total_cap)
A('| 领导岗（主管/总监/总裁/组长） | %d 个岗位，合计 %d 个编制 |' % (n_lead, seat_lead))
A('| 普通员工岗 | %d 个岗位，合计 %d 个编制 |' % (len(posts) - n_lead, seat_staff))
A('| 组织层级 | 董事长 → 分公司 → 6 个一级部门 → 12 个二级部门 → 14 个三级部门 → 21 个小组（5 层） |')
A('| 分公司数量 | 2（分公司一 1500 / 分公司二 1600，结构完全镜像） |')
A('| 单分公司部门数 | %d |' % len(T1))
A('| 单分公司编制 | %d 人 |' % sum(CAP[x] for x in T1))
A('| 职级 | P0~P9 每级 A/B/C 共 **30 档** |')
A('| 市场 | **34 个省级行政区 / 308 个地级市** |')
A('')
A('## 二、分公司一 分层统计（分公司二同构）')
A('')
A('| 层 | 部门种类 | 个数 | 编制合计 |')
A('| --- | --- | --- | --- |')
_lv = collections.Counter(int(deps[x].get('step')) for x in T1)
_lvc = collections.Counter()
for x in T1:
    _lvc[int(deps[x].get('step'))] += CAP[x]
_desc = {2: '分公司 / 秘书处 / 董事会 / 一级部门',
         3: '二级部门', 4: '三级部门', 5: '小组'}
for k in sorted(_lv):
    A('| L%d | %s | %d | %d |' % (k, _desc.get(k, '?'), _lv[k], _lvc[k]))
A('| 合计 | — | **%d** | **%d** |' % (len(T1), sum(CAP[x] for x in T1)))
A('')
A('## 三、结构树（分公司一；分公司二为 +1000 镜像）')
A('')
A('```')


def out_tree(did, depth=0):
    A('%s%s(%d) [%d人]' % ('    ' * depth, NAME[did], did, CAP[did]))
    for c in kids[did]:
        out_tree(c, depth + 1)

A('董事长(1001) [%d人]  ← 树根' % CAP[1001])
for c in kids[1001]:
    out_tree(c, 1)
A('')
A('董事会(1003) [8人]   ← 直属董事长，画在董事长上方，不是树的子节点')
A('秘书处(1002) [4人]   ← 直属董事长，画在董事长右侧，不是树的子节点')
A('```')
A('')
A('## 四、部门明细（分公司一）')
A('')
A('| 层级 | 部门 | id | 编制 | 领导岗 | 员工岗 | 上级 |')
A('| --- | --- | --- | --- | --- | --- | --- |')
for did in T1:
    ls = '/'.join('%s×%s' % (p['name'], p['num']) for p in by_dep[did]['lead']) or '—'
    ss = '/'.join('%s×%s' % (p['name'], p['num']) for p in by_dep[did]['staff']) or '—'
    A('| L%s | %s | %d | %d | %s | %s | %s |' % (
        deps[did].get('step'), NAME[did], did, CAP[did], ls, ss,
        NAME.get(int(deps[did].get('higher_id') or 0), '—')))
A('')
A('分公司二把上表 id 整体 +1000（1500→1600、1101→2101、1201→2201、1301→2301、1401→2401），名称与编制完全相同。')
A('')
A('## 五、职级梯（P0~P9 × A/B/C）')
A('')
A('| 职级 | 说明 | 颜色 |')
A('| --- | --- | --- |')
A('| P0-A/B/C ~ P3-A/B/C | 12 档，新人~专员 | 绿 |')
A('| P4-A/B/C ~ P6-A/B/C | 9 档，主管~经理 | 蓝 |')
A('| P7-A/B/C | 3 档，总监 | 橙 |')
A('| P8-A/B/C | 3 档，总裁 | 金 |')
A('| P9-A/B/C | 3 档，天花板 | 红 |')
A('')
A('## 六、市场（34 省 / 308 市）')
A('')
A('省页签按 `co_market.ts` 的 `type` 分组，每省下的城市即该省全部地级市；直辖市/特别行政区各 1 个。')
A('')
md = os.path.join(OUT_DIR, '董事长模拟器-最大架构图-v%s.md' % VERSTR)
io.open(md, 'w', encoding='utf-8', newline='').write('\n'.join(lines) + '\n')
print('MD  ->', md)
print('deps=%d cap=%d lead=%d leadSeats=%d staffSeats=%d' % (
    len(deps), total_cap, n_lead, seat_lead, seat_staff))
print('T1 deps=%d cap=%d' % (len(T1), sum(CAP[x] for x in T1)))
