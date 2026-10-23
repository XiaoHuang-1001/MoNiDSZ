System.register("chunks:///_virtual/WWaichuchuchang1.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSEnumArr.ts", "./WWaichuchuchang2.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, i, n, h, c, a, u, o, l, g, r;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator, i = t.instantiate
    }, function(t) {
      n = t.ZGGSOfficeFx, h = t.gs_boss, c = t.gs_sql, a = t.gs_computer, u = t.gs_phone, o = t.gs_bmsg
    }, function(t) {
      l = t.ZGGSEnumArr
    }, function(t) {
      g = t.WWaichuchuchang2
    }, function(t) {
      r = t.minFunc
    }],
    execute: function() {
      var f, b;
      s._RF.push({}, "99efb2flzhMt7b8iL3D/mJ7", "WWaichuchuchang1", void 0);
      const {
        ccclass: m,
        property: d
      } = e;
      t("WWaichuchuchang1", m("WWaichuchuchang1")(((b = class t extends n {
        constructor(...t) {
          super(...t), this.fanghe = null, this.mainCt = null, this.item = null
        }
        xiabanye() {
          h.bossDieWin(t, 1)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.mainCt = this.zgNodegzt("sw1/view/content", this.fanghe), this.item = this.zgNodegzt("spr1", this.mainCt)
        }
        init(t) {
          this.showNeed(), this.showWWaichuchuchang1(t)
        }
        showWWaichuchuchang1(t) {
          let s = [];
          if (t.arr) s = t.arr;
          else {
            let t = Object.keys(c.workInfo1.objs),
              e = l.zgArrEnum(1),
              i = a.sjNumArrgs2(0, t.length - 1, e);
            for (let e = 0; e < i.length; e++) {
              let n = t[i[e]],
                h = c.findObjById("workInfo1", n);
              s.push(h)
            }
          }
          for (let t = 0; t < s.length; t++) {
            let e = s[t],
              n = this.mainCt.children[t];
            n || (n = i(this.item), n.parent = this.mainCt), n.active = !0, this.bindRen(n, e)
          }
          this.gsButtongbs("btn_2", (() => {
            r.activitySuccess(2, 2, null), this.node.active = !1, c.companyInfo.wczc += 1;
            let t = {
              arr: s,
              _func: t => {
                let s = {
                  id: t[0],
                  roleArr: t,
                  face: 312
                };
                o.send(2302, s), this.xiabanye()
              }
            };
            h.bossWshow(g, t)
          }), this.fanghe)
        }
        bindRen(t, s) {
          this.gsWorkPic(t, s);
          let e = u.returnOneAttr(s.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, e.pot, t), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, e.amb, t)
        }
        showNeed() {
          let t = [2, 10];
          this.gsNeedConfigs("cost", t, this.fanghe);
          let s = this.zgLableglt("cost/YMLabel", this.fanghe);
          s.unscheduleAllCallbacks();
          let e = () => {
            let s = a.checkTabNeedgs(t);
            this.gsLblCororgst1("cost/YMLabel", s, [25, 25, 25], this.fanghe)
          };
          s.schedule(e, .5), e(), this.gsButtongbs("btn_3", (() => {
            a.constNeedTabgs(t, (() => {
              r.activitySuccess(2, 1, null), this.showWWaichuchuchang1({})
            }), 16)
          }), this.fanghe)
        }
      }).m_name = "WWaichuchuchang1", f = b)) || f);
      s._RF.pop()
    }
  }
}));