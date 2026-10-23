System.register("chunks:///_virtual/WNianzhongjiang.ts", ["cc", "./ZGGSOfficeFx.ts", "./WNianzhongjiang1.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, n, i, e, o, g, h, a, c, l;
  return {
    setters: [function(t) {
      s = t.cclegacy, n = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, e = t.gs_boss, o = t.gs_tabpr, g = t.gs_computer, h = t.gs_btxt, a = t.gs_bmsg
    }, function(t) {
      c = t.WNianzhongjiang1
    }, function(t) {
      l = t.minFunc
    }],
    execute: function() {
      var r, u;
      s._RF.push({}, "f1b97CcPR5D7qlc/GNhgVMZ", "WNianzhongjiang", void 0);
      const {
        ccclass: b,
        property: p
      } = n;
      t("WNianzhongjiang", b("WNianzhongjiang")(((u = class t extends i {
        constructor(...t) {
          super(...t), this.top = null, this.content = null, this.co_year_ttt = null, this.type = 1
        }
        xiabanye() {
          e.bossDieWin(t, 2)
        }
        load() {
          this.co_year_ttt = o.co_year.objs, this.top = this.zgNodegzt("top"), this.content = this.zgNodegzt("content", this.top)
        }
        init() {
          this.showWNianzhongjiang()
        }
        showWNianzhongjiang() {
          let t = g.gsAllNumGet(),
            s = 0;
          this.gsTxtStrbyNums("lbl_info2/YMLabel1", 14, t, this.top);
          let n = h.gsStringHelpIn(10),
            i = 0,
            o = 0;
          for (let t = 1; t <= 6; t++) {
            let e = this.zgNodegzt(`item${t}`, this.content);
            this.gsTxtLblgs("YMLabel1", n[t], e);
            let h = this.co_year_ttt[t],
              a = g.sjNumArrgs(0, h.length - 1, 1)[0];
            2 == this.type && (a = h.length - 1);
            let c = h[a];
            this.gsTxtGradelbl("lay/YMLabel", c.grade, c.name, e), i += c.need[1], o += c.grade, s += c.power
          }
          let r = this.zgLableglt("lbl_info2/YMLabel1", this.top);
          r.unscheduleAllCallbacks();
          let u = [3, i];
          this.gsNeedConfigs("cost", u, this.top);
          let b = () => {
            let t = g.checkTabNeedgs(u);
            this.gsLblCororgst1("cost/YMLabel", t, [25, 25, 25], this.top)
          };
          r.schedule(b, .3), b(), this.gsButtongbs("btn_4", (() => {
            this.type = 1, this.showWNianzhongjiang()
          }), this.top), this.gsButtongbs("btn_5", (() => {
            this.type = 2, this.showWNianzhongjiang()
          }), this.top), this.gsButtongbs("btn_3", (() => {
            l.activitySuccess(22, 1, {
              num: 0
            }), a.send(2300), this.xiabanye()
          }), this.top), this.gsButtongbs("btn_2", (() => {
            g.constNeedTabgs(u, (() => {
              l.activitySuccess(22, 2, {
                num: this.type
              }), this.node.active = !1;
              let t = {
                power: s,
                totalGrade: o,
                _func: t => {
                  this.xiabanye();
                  let s = {
                    id: t[0],
                    roleArr: t,
                    face: 312
                  };
                  a.send(2302, s)
                }
              };
              e.bossWshow(c, t)
            }), 7)
          }), this.top)
        }
      }).m_name = "WNianzhongjiang", r = u)) || r);
      s._RF.pop()
    }
  }
}));