# -*- coding: utf-8 -*-
"""
市场重构 v2：34 个省级行政区 + 全部地级市（共 308 个市场）

- co_market.ts：每个城市一行 {id, type=省份序号, num=难度, name=城市, prov=省}
- co_market_lv.ts：每个市场 6 级（市场调研→多元拓展），复制原表模板行

id 策略：
  * 原有 60 个 id 尽量沿用（老存档 shichangInfo 不跑偏）
  * 删掉的 4 个非地级市（大理/喀什/敦煌/格尔木）把 id 让给同省真实地级市
  * 其余新城市从 6601 起顺延
"""
import io
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P_MARKET = os.path.join(ROOT, "源码", "modules", "01_config", "co_market.ts")
P_LV = os.path.join(ROOT, "源码", "modules", "01_config", "co_market_lv.ts")

# (省, [地级市...])  顺序 = 分页顺序 = 省内展示顺序
PROV = [
    ("北京", ["北京"]),
    ("上海", ["上海"]),
    ("广东", ["广州", "深圳", "珠海", "汕头", "佛山", "韶关", "湛江", "肇庆", "江门",
              "茂名", "惠州", "梅州", "汕尾", "河源", "阳江", "清远", "东莞", "中山",
              "潮州", "揭阳", "云浮"]),
    ("江苏", ["南京", "无锡", "徐州", "常州", "苏州", "南通", "连云港", "淮安", "盐城",
              "扬州", "镇江", "泰州", "宿迁"]),
    ("浙江", ["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山",
              "台州", "丽水"]),
    ("山东", ["济南", "青岛", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安",
              "威海", "日照", "临沂", "德州", "聊城", "滨州", "菏泽"]),
    ("河南", ["郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "焦作", "濮阳",
              "许昌", "漯河", "三门峡", "南阳", "商丘", "信阳", "周口", "驻马店"]),
    ("四川", ["成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江",
              "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳"]),
    ("湖北", ["武汉", "黄石", "十堰", "宜昌", "襄阳", "鄂州", "荆门", "孝感", "荆州",
              "黄冈", "咸宁", "随州"]),
    ("福建", ["福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德"]),
    ("湖南", ["长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳",
              "郴州", "永州", "怀化", "娄底"]),
    ("安徽", ["合肥", "芜湖", "蚌埠", "淮南", "马鞍山", "淮北", "铜陵", "安庆", "黄山",
              "滁州", "阜阳", "宿州", "六安", "亳州", "池州", "宣城"]),
    ("河北", ["石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德",
              "沧州", "廊坊", "衡水"]),
    ("陕西", ["西安", "铜川", "宝鸡", "咸阳", "渭南", "延安", "汉中", "榆林", "安康", "商洛"]),
    ("辽宁", ["沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新",
              "辽阳", "盘锦", "铁岭", "朝阳", "葫芦岛"]),
    ("重庆", ["重庆"]),
    ("江西", ["南昌", "景德镇", "萍乡", "九江", "新余", "鹰潭", "赣州", "吉安", "宜春",
              "抚州", "上饶"]),
    ("云南", ["昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "普洱", "临沧"]),
    ("广西", ["南宁", "柳州", "桂林", "梧州", "北海", "防城港", "钦州", "贵港", "玉林",
              "百色", "贺州", "河池", "来宾", "崇左"]),
    ("山西", ["太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "忻州",
              "临汾", "吕梁"]),
    ("内蒙古", ["呼和浩特", "包头", "乌海", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔",
                "巴彦淖尔", "乌兰察布"]),
    ("贵州", ["贵阳", "六盘水", "遵义", "安顺", "毕节", "铜仁"]),
    ("新疆", ["乌鲁木齐", "克拉玛依", "吐鲁番", "哈密"]),
    ("天津", ["天津"]),
    ("黑龙江", ["哈尔滨", "齐齐哈尔", "鸡西", "鹤岗", "双鸭山", "大庆", "伊春", "佳木斯",
                "七台河", "牡丹江", "黑河", "绥化"]),
    ("吉林", ["长春", "吉林", "四平", "辽源", "通化", "白山", "松原", "白城"]),
    ("甘肃", ["兰州", "嘉峪关", "金昌", "白银", "天水", "武威", "张掖", "平凉", "酒泉",
              "庆阳", "定西", "陇南"]),
    ("海南", ["海口", "三亚", "三沙", "儋州"]),
    ("宁夏", ["银川", "石嘴山", "吴忠", "固原", "中卫"]),
    ("青海", ["西宁", "海东"]),
    ("西藏", ["拉萨", "日喀则", "昌都", "林芝", "山南", "那曲"]),
    ("香港", ["香港"]),
    ("澳门", ["澳门"]),
    ("台湾", ["台北", "新北", "桃园", "台中", "台南", "高雄", "基隆", "新竹", "嘉义"]),
]

# 原表里不是地级市、要腾出 id 的 4 个
# 6309 大理 -> 曲靖(云南) / 6407 喀什 -> 克拉玛依(新疆) / 6502 敦煌 -> 嘉峪关(甘肃) / 6507 格尔木 -> 海东(青海)
ID_HANDOVER = {6309: "曲靖", 6407: "克拉玛依", 6502: "嘉峪关", 6507: "海东"}


def parse_markets(src):
    rows = re.findall(
        r'k(\d+): \{\s*id: (\d+),\s*type: (\d+),\s*num: (\d+),\s*name: "([^"]*)",\s*prov: "([^"]*)"',
        src)
    return [(int(a), int(b), int(c), int(d), e, f) for a, b, c, d, e, f in rows]


def main():
    msrc = io.open(P_MARKET, encoding="utf-8").read()
    old = parse_markets(msrc)
    print("原有市场 %d 个" % len(old))

    old_by_name = {}
    for mid, _id, _type, _num, name, _prov in old:
        old_by_name[name] = mid
    # 4 个让 id 的城市：新城市继承老 id
    for mid, city in ID_HANDOVER.items():
        old_by_name[city] = mid

    flat = []
    for pi, (prov, cities) in enumerate(PROV, start=1):
        for c in cities:
            flat.append((pi, prov, c))
    print("新市场 %d 个 / %d 个省" % (len(flat), len(PROV)))

    used = set()
    for _pi, _prov, city in flat:
        mid = old_by_name.get(city)
        if mid is None:
            continue
        assert mid not in used, "id 重复: %s %s" % (mid, city)
        used.add(mid)

    nxt = 6601
    rows = []
    for pi, prov, city in flat:
        mid = old_by_name.get(city)
        if mid is None:
            while nxt in used or nxt in old_by_name.values():
                nxt += 1
            mid = nxt
            used.add(mid)
        rows.append((mid, pi, prov, city))

    # 难度 num：0..300 均匀铺开
    n = len(rows)
    nums = [int(round(k * 300.0 / (n - 1))) for k in range(n)]

    out = []
    for (mid, pi, prov, city), num in zip(rows, nums):
        out.append("        k%d: {" % mid)
        out.append("          id: %d," % mid)
        out.append("          type: %d," % pi)
        out.append("          num: %d," % num)
        out.append('          name: "%s",' % city)
        out.append('          prov: "%s"' % prov)
        out.append("        },")
    out[-1] = out[-1][:-1]
    write_obj(P_MARKET, msrc, '("co_market", {', "\n".join(out))
    print("写出 co_market.ts: %d 个市场" % n)

    # ---------- co_market_lv.ts ----------
    lsrc = io.open(P_LV, encoding="utf-8-sig").read()
    pat = re.compile(
        r'\{\s*id:\s*(\d+),\s*market_id:\s*(\d+),\s*lv:\s*(\d+),\s*'
        r'name:\s*"([^"]*)",\s*exp:\s*(\d+),\s*hp:\s*(\d+),\s*'
        r'att:\s*(\d+),\s*def:\s*(\d+),\s*speed:\s*(\d+),\s*'
        r'need:\s*([^,]*),\s*num:\s*(\d+)\s*\}')
    lrows = pat.findall(lsrc)
    by_market = {}
    for r in lrows:
        by_market.setdefault(int(r[1]), []).append(r)
    tmpl_zero = by_market[6201]          # 后 48 个市场用的「0 经验」模板

    lout = []
    rid = 0
    for mid, pi, prov, city in rows:
        tmpl = by_market.get(mid) or tmpl_zero
        for r in tmpl:
            rid += 1
            lout.append("        k%d: {" % rid)
            lout.append("          id: %d," % rid)
            lout.append("          market_id: %d," % mid)
            lout.append("          lv: %s," % r[2])
            lout.append('          name: "%s",' % r[3])
            lout.append("          exp: %s," % r[4])
            lout.append("          hp: %s," % r[5])
            lout.append("          att: %s," % r[6])
            lout.append("          def: %s," % r[7])
            lout.append("          speed: %s," % r[8])
            lout.append("          need: %s," % r[9])
            lout.append("          num: %s" % r[10])
            lout.append("        },")
    lout[-1] = lout[-1][:-1]
    write_obj(P_LV, lsrc, '("co_market_lv", {', "\n".join(lout))
    print("写出 co_market_lv.ts: %d 行（%d 市场 x 6 级）" % (rid, rid // 6))

    total = 0
    for pi, (prov, cities) in enumerate(PROV, start=1):
        total += len(cities)
        print("  %2d %-4s %2d  %s" % (pi, prov, len(cities), "/".join(cities)))
    print("合计 %d" % total)


def write_obj(path, src, marker, body):
    start = src.find(marker)
    assert start > 0, marker
    ob = src.find("{", start)
    depth = 0
    i = ob
    while i < len(src):
        if src[i] == "{":
            depth += 1
        elif src[i] == "}":
            depth -= 1
            if depth == 0:
                break
        i += 1
    assert depth == 0
    new = src[:ob + 1] + "\n" + body + "\n      " + src[i:]
    io.open(path, "w", encoding="utf-8", newline="").write(new)


if __name__ == "__main__":
    main()
