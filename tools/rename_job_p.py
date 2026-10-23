# -*- coding: utf-8 -*-
"""把 co_job 的「金银铜…」63 级职位名改成 P0~P9 升序十档（纯改名，数值一律不动）。

映射：level = floor((id-1) * 10 / 63)，id 1..63 -> P0..P9，顺序与原本强弱一致。
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
P = ROOT / "源码" / "modules" / "01_config" / "co_job.ts"


def main():
    text = P.read_text(encoding="utf-8")
    blocks = list(re.finditer(r"k(\d+):\s*\{(.*?)\n(\s*)\}", text, re.S))
    print("职位块:", len(blocks))
    total = len(blocks)
    out, last, changed = [], 0, 0
    for m in blocks:
        pid = int(m.group(1))
        body = m.group(2)
        lvl = min(9, (pid - 1) * 10 // total)
        newname = "P%d" % lvl
        body2, n = re.subn(r'name:\s*"[^"]*"', 'name: "%s"' % newname, body, count=1)
        if n == 0:
            print("  警告：id=%d 没找到 name" % pid)
        else:
            changed += 1
        out.append(text[last:m.start(2)])
        out.append(body2)
        last = m.end(2)
    out.append(text[last:])
    new = "".join(out)
    P.write_text(new, encoding="utf-8")
    print("改名 %d 条" % changed)

    # 校验
    rows = re.findall(r'k(\d+):\s*\{(.*?)\n\s*\}', new, re.S)
    got = []
    for pid, b in rows:
        nm = re.search(r'name:\s*"([^"]*)"', b)
        got.append((int(pid), nm.group(1) if nm else None))
    print("前 8:", got[:8])
    print("后 8:", got[-8:])
    names = [n for _, n in got]
    asc = all(names[i] <= names[i + 1] for i in range(len(names) - 1))
    print("是否升序:", asc, " 出现的等级:", sorted(set(names), key=lambda s: int(s[1:])))


if __name__ == "__main__":
    main()
