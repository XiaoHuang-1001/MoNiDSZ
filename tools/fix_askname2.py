# -*- coding: utf-8 -*-
"""把分公司改名改成复用游戏自带窗口 WNewMing1（精确切区间版）"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
P = ROOT / "源码" / "modules" / "00_core" / "PGsWork.ts"

NEW = '''        // —— 分公司改名：复用游戏自带的改名窗口 WNewMing1（自带输入框 + 确定按钮）——
        __dshSetBranchName(branchId, name) {
          try {
            const n = l.findObjById("combmInfo", branchId);
            const nm = String(name || "").trim();
            if (n && nm) n.cname = nm.slice(0, 8);
            this.__dshApplyBranchName(branchId);
            window.__dshSaveData && window.__dshSaveData();
            window.__dshlog && window.__dshlog("setBranchName " + branchId + " -> " + (n && n.cname))
          } catch (e) {
            window.__dshlog && window.__dshlog("setBranchName error: " + e)
          }
        }
        __dshAskName(branchId, done) {
          try {
            if (!W) {
              window.__dshlog && window.__dshlog("askName: WNewMing1 未就绪");
              done && done();
              return
            }
            const self = this;
            window.__dshlog && window.__dshlog("askName open for " + branchId);
            r.bossWshow(W, {
              xing: "",
              ming: "",
              type: 2,
              _func: function(txt) {
                self.__dshSetBranchName(branchId, txt);
                setTimeout(function() { done && done() }, 600)
              }
            })
          } catch (err) {
            window.__dshlog && window.__dshlog("askName error: " + err + " | " + (err && err.stack));
            done && done()
          }
        }
'''


def main():
    text = P.read_text(encoding="utf-8")
    lines = text.split("\n")

    # 1) 依赖列表末尾加 WNewMing1
    assert '"./minFunc.ts"]' in lines[0], lines[0][-120:]
    lines[0] = lines[0].replace('"./minFunc.ts"]', '"./minFunc.ts", "./WNewMing1.ts"]')

    # 2) var 声明加 W
    for i, ln in enumerate(lines[:8]):
        if ln.strip().startswith("var ") and ln.rstrip().endswith(";"):
            lines[i] = ln.rstrip()[:-1] + ", W;"
            break

    # 3) setter 末尾加一个
    for i, ln in enumerate(lines):
        if ln.strip() == "}]," and "A = e.minFunc" in lines[i - 1]:
            lines.insert(i, "    }, function(e) {\n      W = e.WNewMing1\n    }],")
            del lines[i + 1]
            break

    # 4) 精确切除旧的自绘窗口（从 __dshWhiteSprite 定义前一行 到 __dshAskNamesIfNeeded 之前）
    start = end = None
    for i, ln in enumerate(lines):
        if "__dshWhiteSprite() {" in ln:
            start = i - 1 if lines[i - 1].strip().startswith("//") else i
            break
    for i, ln in enumerate(lines):
        if "__dshAskNamesIfNeeded() {" in ln:
            end = i
            break
    assert start is not None and end is not None and start < end, (start, end)

    out = "\n".join(lines[:start]) + "\n" + NEW + "\n".join(lines[end:])
    P.write_text(out, encoding="utf-8")

    print("切割 %d..%d，新行数 %d" % (start, end, len(out.split("\n"))))
    for k in ("__dshWhiteSprite", "__dsh_name_win", "W = e.WNewMing1", "./WNewMing1.ts", "A, W;"):
        print("  包含 %-22s %s" % (k, k in out))


if __name__ == "__main__":
    main()
