System.register("chunks:///_virtual/WPeixun2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var i, s, e, n, o, r, l, h, a;
  return {
    setters: [function(t) {
      i = t.cclegacy, s = t._decorator, e = t.instantiate
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, r = t.gs_tabpr, l = t.gs_sql, h = t.gs_computer, a = t.gs_phone
    }],
    execute: function() {
      var c, u;
      i._RF.push({}, "e71f131ps9BvpSB11AJsmKK", "WPeixun2", void 0);
      const {
        ccclass: g,
        property: b
      } = s;
      t("WPeixun2", g("WPeixun2")(((u = class t extends n {
        constructor(...t) {
          super(...t), this.top = null, this.mainCt = null, this.item = null, this.co_training_tt = null, this.choose = {}
        }
        xiabanye() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.co_training_tt = r.co_training.values, this.top = this.zgNodegzt("top"), this.mainCt = this.zgNodegzt("sw1/view/content", this.top), this.item = this.zgNodegzt("spr1", this.mainCt)
        }
        init(t) {
          this.showWPeixun2(t)
        }
        showWPeixun2(t) {
          let i = t.choose,
            s = 0,
            n = 0,
            o = 1;
          for (let t in i) {
            let i = r.co_training.zgTableKey(t);
            s += i.pot1, n += i.pot2, o += 1
          }
          let a = Object.keys(l.workInfo1.objs),
            c = a.length,
            u = h.sjNumArrgs2(1, o, 1)[0],
            g = Math.min(c, u),
            b = h.sjNumArrgs2(0, a.length - 1, g),
            p = [];
          for (let t = 0; t < b.length; t++) {
            let i = a[b[t]],
              o = l.findObjById("workInfo1", i);
            p.push(o.id);
            let r = this.mainCt.children[t];
            r || (r = e(this.item), r.parent = this.mainCt), r.active = !0;
            let c = h.sjNumgs(s, n);
            this.bindRen(r, o, c)
          }
          this.gsButtongbs("lay/btn_2", (() => {
            t._func(p), this.xiabanye()
          }), this.top)
        }
        bindRen(t, i, s) {
          this.gsWorkPic(t, i);
          let e = a.returnOneAttr(i.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, e.pot, t), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, e.amb, t), this.gsTxtStrbyNums("lbl_info4/YMLabel1", 301, s, t);
          let n = {
            pot: s
          };
          a.addWorkerAttr(i.id, n)
        }
      }).m_name = "WPeixun2", c = u)) || c);
      i._RF.pop()
    }
  }
}));