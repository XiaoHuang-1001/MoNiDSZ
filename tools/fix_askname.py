# -*- coding: utf-8 -*-
"""改造分公司改名：换成游戏自带的 WNewMing1 窗口，并把它加入 PGsWork 的依赖"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
P = ROOT / "源码" / "modules" / "00_core" / "PGsWork.ts"

NEW = '''        // —— 分公司改名：复用游戏自带的改名窗口 WNewMing1（自带输入框+确定按钮）——
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
              window.__dshlog && window.__dshlog("askName: WNewMing1 未就绪，跳过");
              done && done();
              return
            }
            const self = this;
            window.__dshlog && window.__dshlog("askName open for " + branchId);
            // type=2：窗口把输入框内容原样回调（h = "" + 输入）
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

    # 1) 依赖里加 WNewMing1，并加 setter
    dep_line = lines[0]
    assert '"./minFunc.ts"]' in dep_line, dep_line[:200]
    lines[0] = dep_line.replace('"./minFunc.ts"]', '"./minFunc.ts", "./WNewMing1.ts"]')

    # var 声明加 W
    for i, ln in enumerate(lines[:8]):
        if ln.strip().startswith("var ") and ln.rstrip().endswith(";"):
            lines[i] = ln.rstrip()[:-1] + ", W;"
            break

    # setter：在最后一个 setter 函数后追加
    for i, ln in enumerate(lines):
        if ln.strip() == "}]," and "A = e.minFunc" in lines[i - 1]:
            lines.insert(i, "    }, function(e) {\n      W = e.WNewMing1\n    }],")
            # 去掉原来那个 }], 行（现在重复了）
            del lines[i + 1]
            break
    else:
        raise SystemExit("没找到 setter 末尾")

    # 2) 替换自绘窗口那一段
    start = None
    end = None
    for i, ln in enumerate(lines):
        if "__dshWhiteSprite()" in ln:
            start = i - 1          # 上一行是注释
        if start is not None and "__dshAskNamesIfNeeded()" in ln:
            end = i                # 到下一个方法之前
            break
    assert start and end, (start, end)
    head = lines[:start]
    tail = lines[end:]
    out = "\n".join(head) + "\n" + NEW + "\n" + "\n".join(tail)
    P.write_text(out, encoding="utf-8")
    print("已替换，行数", len(out.split("\n")))


if __name__ == "__main__":
    main()
