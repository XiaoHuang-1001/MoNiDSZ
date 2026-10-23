# -*- coding: utf-8 -*-
"""检查 co_post 索引覆盖：每个部门是否都有 type1(负责人) 岗位、以及有子部门的部门是否有 type2 岗位。
树渲染里 VHBgshiMap.initDataObj 会取 co_post.objs[1][deptId].num，缺失就直接抛错 → 树画不全（看起来"不对称"）。
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "源码" / "modules"


def flat_posts():
    txt = (SRC / "01_config" / "co_post.ts").read_text(encoding="utf-8")
    out = {}
    for m in re.finditer(r"k(\d+):\s*\{(.*?)\n\s*\}", txt, re.S):
        pid = int(m.group(1))
        body = m.group(2)
        def g(k, cast=str, default=None):
            mm = re.search(k + r":\s*\"?([^,\n]+)\"?", body)
            return cast(mm.group(1).strip().strip('"')) if mm else default
        out[pid] = {"id": pid, "type": g("type", int), "dep_id": g("dep_id", int),
                    "num": g("num", int, 0), "grade": g("grade", int, 0),
                    "name": g("name")}
    return out


def depts():
    txt = (SRC / "01_config" / "co_dep.ts").read_text(encoding="utf-8")
    out = {}
    for m in re.finditer(r"k(\d+):\s*\{(.*?)\n\s*\}", txt, re.S):
        did = int(m.group(1))
        body = m.group(2)
        def g(k, cast=str, default=None):
            mm = re.search(k + r":\s*\"?([^,\n]+)\"?", body)
            return cast(mm.group(1).strip().strip('"')) if mm else default
        out[did] = {"id": did, "step": g("step", int, 0), "name": g("name"),
                    "last": g("last", int, 0)}
    return out


def seed_children():
    """从 PGsWork 的种子结构里抽出 父 -> 子 列表"""
    txt = (SRC / "00_core" / "PGsWork.ts").read_text(encoding="utf-8")
    rel = {}
    for m in re.finditer(r"(\d+):\s*\{\s*\n?\s*id:\s*(\d+),\s*\n?\s*depId:\s*\d+,\s*\n?\s*comArr:\s*\[([^\]]*)\]", txt):
        pid = int(m.group(1))
        kids = [int(x) for x in re.findall(r"\d+", m.group(3))]
        if kids:
            rel[pid] = kids
    return rel


def main():
    posts = flat_posts()
    deps = depts()
    rel = seed_children()

    idx1, idx2 = {}, {}
    for p in posts.values():
        if p["type"] == 2:
            idx2.setdefault(p["dep_id"], []).append(p)
        else:
            idx1.setdefault(p["dep_id"], p)

    print("岗位总数 %d，部门总数 %d，有子部门的父节点 %d 个" % (len(posts), len(deps), len(rel)))
    need1 = set(rel.keys()) | {k for v in rel.values() for k in v}
    miss1 = sorted(d for d in need1 if d not in idx1)
    print("\n[缺 type1 负责人岗位] %d 个: %s" % (len(miss1), miss1[:40]))

    need2 = set(rel.keys())
    miss2 = sorted(d for d in need2 if d not in idx2)
    print("[缺 type2 下属岗位] %d 个: %s" % (len(miss2), miss2[:40]))

    # 子部门是否都有负责人
    leaf_miss = sorted(d for d in deps if d not in idx1 and d not in idx2)
    print("\n[既无 type1 也无 type2 岗位的部门] %d 个: %s" % (len(leaf_miss), leaf_miss[:40]))

    # 打印种子结构，人工核对对称性
    print("\n种子父子结构:")
    for p in sorted(rel):
        print("  %d(%s) -> %s" % (p, deps.get(p, {}).get("name", "?"), rel[p]))


if __name__ == "__main__":
    main()
