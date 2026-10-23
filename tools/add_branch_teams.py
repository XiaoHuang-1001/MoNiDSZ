# -*- coding: utf-8 -*-
"""
给每个分公司加一套「秘书处 + 董事会」（普通部门，走游戏通用部门逻辑），
并把分公司总经理的头衔从「行政董事长」改成「分公司总经理」。
可重复执行（幂等）。
"""
import io
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CFG = os.path.join(ROOT, "源码", "modules", "01_config")

DEP_ROWS = """        k1501: {
          id: 1501,
          name: "秘书处",
          step: 2,
          power: 55,
          higher_id: 1500,
          type: 1,
          set: "1|6",
          pic: "1002aa"
        },
        k1502: {
          id: 1502,
          name: "董事会",
          step: 2,
          power: 210,
          higher_id: 1500,
          type: 1,
          set: "1|10",
          pic: "1003aa"
        },
        k1601: {
          id: 1601,
          name: "秘书处",
          step: 2,
          power: 55,
          higher_id: 1600,
          type: 1,
          set: "1|6",
          pic: "1002aa"
        },
        k1602: {
          id: 1602,
          name: "董事会",
          step: 2,
          power: 210,
          higher_id: 1600,
          type: 1,
          set: "1|10",
          pic: "1003aa"
        },
"""

POST_ROWS = """        k150100: {
          id: 150100,
          type: 2,
          stratum: 1,
          name: "秘书处主任",
          dep_id: 1501,
          grade: 4,
          num: 1,
          back_pic: "4aa"
        },
        k150101: {
          id: 150101,
          type: 1,
          stratum: 1,
          name: "秘书",
          dep_id: 1501,
          grade: 1,
          num: 5,
          back_pic: "1aa"
        },
        k150200: {
          id: 150200,
          type: 2,
          stratum: 1,
          name: "董事",
          dep_id: 1502,
          grade: 5,
          num: 1,
          back_pic: "5aa"
        },
        k150201: {
          id: 150201,
          type: 1,
          stratum: 1,
          name: "董事助理",
          dep_id: 1502,
          grade: 2,
          num: 9,
          back_pic: "2aa"
        },
        k160100: {
          id: 160100,
          type: 2,
          stratum: 1,
          name: "秘书处主任",
          dep_id: 1601,
          grade: 4,
          num: 1,
          back_pic: "4aa"
        },
        k160101: {
          id: 160101,
          type: 1,
          stratum: 1,
          name: "秘书",
          dep_id: 1601,
          grade: 1,
          num: 5,
          back_pic: "1aa"
        },
        k160200: {
          id: 160200,
          type: 2,
          stratum: 1,
          name: "董事",
          dep_id: 1602,
          grade: 5,
          num: 1,
          back_pic: "5aa"
        },
        k160201: {
          id: 160201,
          type: 1,
          stratum: 1,
          name: "董事助理",
          dep_id: 1602,
          grade: 2,
          num: 9,
          back_pic: "2aa"
        },
"""


def patch_dep():
    p = os.path.join(CFG, "co_dep.ts")
    s = io.open(p, encoding="utf-8").read()
    if "k1501:" in s:
        print("[dep] 已存在，跳过")
    else:
        anchor = '("co_dep", {'
        i = s.find(anchor)
        assert i > 0, "co_dep 锚点未找到"
        j = s.find("\n", i) + 1
        s = s[:j] + DEP_ROWS + s[j:]
        io.open(p, "w", encoding="utf-8", newline="").write(s)
        print("[dep] 已插入 1501/1502/1601/1602")


def patch_post():
    p = os.path.join(CFG, "co_post.ts")
    s = io.open(p, encoding="utf-8").read()
    if "k150100:" in s:
        print("[post] 已存在，跳过")
    else:
        anchor = '("co_post", {'
        i = s.find(anchor)
        assert i > 0, "co_post 锚点未找到"
        j = s.find("\n", i) + 1
        s = s[:j] + POST_ROWS + s[j:]
        io.open(p, "w", encoding="utf-8", newline="").write(s)
        print("[post] 已插入 8 个岗位")


def rename_branch_head():
    p = os.path.join(CFG, "co_post.ts")
    s = io.open(p, encoding="utf-8").read()
    n = s.count('name: "行政董事长"')
    s = s.replace('name: "行政董事长"', 'name: "分公司总经理"')
    if n:
        io.open(p, "w", encoding="utf-8", newline="").write(s)
    print("[rename] 行政董事长 -> 分公司总经理, %d 处" % n)
    for m in re.finditer(r'k(\d+): \{\s*id: \d+,\s*type: \d+,\s*stratum: \d+,\s*name: "([^"]*董事长[^"]*)",\s*dep_id: (\d+)', s):
        print("   仍含「董事长」的岗位:", m.group(1), m.group(2), "dep", m.group(3))


if __name__ == "__main__":
    patch_dep()
    patch_post()
    rename_branch_head()
    print("OK")
