System.register("chunks:///_virtual/WWaichuchuchang2.ts", ["cc", "./ZGGSOfficeFx.ts", "./PQTips3.ts"], (function(t) {
  "use strict";
  var s, i, e, n, h, o, a, c, l, g, r;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator, e = t.instantiate, n = t.UITransform
    }, function(t) {
      h = t.ZGGSOfficeFx, o = t.gs_boss, a = t.gs_tabpr, c = t.gs_sql, l = t.gs_phone, g = t.gs_computer
    }, function(t) {
      r = t.PQTips3
    }],
    execute: function() {
      var u, b;
      s._RF.push({}, "22eda3FkyRI3Y4Ro5qQQJhB", "WWaichuchuchang2", void 0);
      const {
        ccclass: p,
        property: _
      } = i;
      t("WWaichuchuchang2", p("WWaichuchuchang2")(((b = class t extends h {
        constructor(...t) {
          super(...t), this.fanghe = null, this.mainCt = null, this.item = null, this.co_prop_tt = []
        }
        xiabanye() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.mainCt = this.zgNodegzt("sw1/view/content", this.fanghe), this.item = this.zgNodegzt("spr1", this.mainCt);
          let t = a.co_prop.objs,
            s = [];
          s = s.concat(t[5], t[6], t[7], t[8]);
          for (let t = 0; t < s.length; t++) {
            let i = s[t];
            i.title_lv <= c.pingjiaInfo.titId && this.co_prop_tt.push(i)
          }
        }
        init(t) {
          this.showWWaichuchuchang2(t)
        }
        showWWaichuchuchang2(t) {
          let s = t.arr,
            i = [];
          for (let t = 0; t < s.length; t++) {
            let n = s[t];
            i.push(n.id);
            let h = this.mainCt.children[t];
            h || (h = e(this.item), h.parent = this.mainCt), h.active = !0, this.bindRen(h, n)
          }
          this.gsButtongbs("btn_2", (() => {
            t._func(i), this.xiabanye()
          }), this.fanghe)
        }
        bindRen(t, s) {
          this.gsWorkPic(t, s);
          let i = l.returnOneAttr(s.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, i.pot, t), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, i.amb, t);
          let e = a.co_job.zgTableKey(s.jobId),
            h = g.sjNumgs(e.pot1, e.pot2);
          h = Math.ceil(h / 4 * 6), h <= 1 && (h = 1);
          let c = g.sjNumgs(e.amb1, e.amb2);
          c = Math.ceil(c / 4 * 6), c <= 1 && (c = 1), this.gsTxtStrbyNums("lbl_info4/YMLabel1", 301, h, t), this.gsTxtStrbyNums("lbl_info5/YMLabel1", 302, c, t);
          let u = g.sjNumgs(0, this.co_prop_tt.length - 1),
            b = this.co_prop_tt[u];
          this.gsTxtGradelbl("lbl_info6/YMLabel2", b.grade, b.name, t);
          let p = this.zgNodegzt("lbl_info6", t);
          this.gsButtongbs("lbl_info6/YMLabel2", (() => {
            let t = {
              pos: this.gsWorldposgws(p),
              size: p.getComponent(n).contentSize,
              info: {
                id: b.id
              },
              type: 2
            };
            o.bossWshow(r, t)
          }), t), g.saveYpFunc(s.id, b.id);
          let _ = {
            pot: h,
            amb: c
          };
          l.addWorkerAttr(s.id, _)
        }
      }).m_name = "WWaichuchuchang2", u = b)) || u);
      s._RF.pop()
    }
  }
}));