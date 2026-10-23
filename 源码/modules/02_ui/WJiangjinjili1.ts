System.register("chunks:///_virtual/WJiangjinjili1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WJiangjinjili2.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var i, s, e, n, l, h, a, o, g, c, r, b;
  return {
    setters: [function(t) {
      i = t.cclegacy, s = t._decorator, e = t.instantiate
    }, function(t) {
      n = t.ZGGSOfficeFx, l = t.gs_boss, h = t.gs_bmsg, a = t.gs_tabpr, o = t.gs_computer, g = t.gs_sql, c = t.gs_phone
    }, function(t) {
      r = t.WJiangjinjili2
    }, function(t) {
      b = t.minFunc
    }],
    execute: function() {
      var u, _;
      i._RF.push({}, "55508msb1pOxpauneLnR7nF", "WJiangjinjili1", void 0);
      const {
        ccclass: f,
        property: d
      } = s;
      t("WJiangjinjili1", f("WJiangjinjili1")(((_ = class t extends n {
        constructor(...t) {
          super(...t), this.fanghe = null, this.mainCt = null, this.content = null, this.item = null, this.co_inspire_tt = null, this.choose = 1, this.salarys = 0
        }
        xiabanye(i, s) {
          l.bossDieWin(t, 1);
          let e = {
            id: i[0],
            roleArr: i,
            face: s
          };
          h.send(2302, e)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.mainCt = this.zgNodegzt("sw1/view/content", this.fanghe), this.content = this.zgNodegzt("content", this.fanghe), this.item = this.zgNodegzt("spr1", this.mainCt), this.co_inspire_tt = a.co_inspire.values
        }
        init(t) {
          this.choose = 1, this.salarys = 0, this.showWJiangjinjili1(t)
        }
        showWJiangjinjili1(t) {
          let i = t.arrRen,
            s = [];
          for (let t = 0; t < i.length; t++) {
            let n = i[t];
            s.push(n.id);
            let l = this.mainCt.children[t];
            l || (l = e(this.item), l.parent = this.mainCt), l.active = !0, this.bindRen(l, n)
          }
          let n = this.content.children,
            h = 0;
          for (let t = 0; t < n.length; t++) {
            let i = n[t],
              s = this.co_inspire_tt[t];
            this.gsTxtGradelbl("lbl_info1/YMLabel1", s.grade, s.name, i);
            let e = [1, s.num * this.salarys];
            this.gsNeedConfigs("lbl_info2/lay2", e, i);
            let l = this.zgTogglegtts("lbl_info3/toggle", i);
            l.isChecked = this.choose == s.id;
            let a = this.zgLableglt("lbl_info1/YMLabel1", i);
            a.unscheduleAllCallbacks(), this.gsButtongbs("lbl_info3/btn", (() => {
              this.choose = s.id, h = t;
              for (let t = 0; t < n.length; t++) {
                let i = n[t];
                this.zgTogglegtts("lbl_info3/toggle", i).isChecked = !1
              }
              l.isChecked = !0
            }), i);
            let g = () => {
              let t = o.checkTabNeedgs(e);
              this.gsLblCororgst1("lbl_info2/lay2/YMLabel", t, [25, 25, 25], i)
            };
            a.schedule(g, .3), g()
          }
          this.gsButtongbs("btn_3", (() => {
            b.activitySuccess(3, 1, {
              num: 0
            }), this.xiabanye(s, 310)
          }), this.fanghe), this.gsButtongbs("btn_2", (() => {
            let t = a.co_inspire.zgTableKey(this.choose),
              e = [1, t.num * this.salarys];
            o.constNeedTabgs(e, (() => {
              b.activitySuccess(3, 2, {
                num: h + 1
              }), g.companyInfo.jili += 1, this.node.active = !1;
              let e = {
                arrRen: i,
                co_inspire_t: t,
                _func: () => {
                  this.xiabanye(s, 312)
                }
              };
              l.bossWshow(r, e)
            }), 4)
          }), this.fanghe)
        }
        bindRen(t, i) {
          this.gsWorkPic(t, i);
          let s = c.returnOneAttr(i.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, s.pot, t), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, s.amb, t), this.gsTxtStrbyNums("lbl_info6/YMLabel2", 102, s.earn, t), this.salarys += s.earn
        }
      }).m_name = "WJiangjinjili1", u = _)) || u);
      i._RF.pop()
    }
  }
}));