System.register("chunks:///_virtual/WTuijianshuji1.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, i, e, n, l, o, h;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator
    }, function(t) {
      e = t.ZGGSOfficeFx, n = t.gs_boss, l = t.gs_bmsg, o = t.gs_phone, h = t.gs_btxt
    }],
    execute: function() {
      var b, g;
      s._RF.push({}, "85e90KOPYdDwp+x9Mz0Cj+l", "WTuijianshuji1", void 0);
      const {
        ccclass: u,
        property: a
      } = i;
      t("WTuijianshuji1", u("WTuijianshuji1")(((g = class t extends e {
        constructor(...t) {
          super(...t), this.hezi = null
        }
        pohuiPage() {
          n.bossDieWin(t, 2)
        }
        load(t) {
          this.hezi = this.zgNodegzt("top"), this.gsButtongbs("btn_2", (() => {
            this.pohuiPage(), l.send(2302, t)
          }), this.hezi)
        }
        init(t) {
          let s = t.workInfo1_s,
            i = t.workAttr;
          console.log(i.att, 6666), this.bindlabel(s, t)
        }
        bindlabel(t, s) {
          let i = this.zgNodegzt("content/spr1", this.hezi);
          this.gsWorkPic(i, t);
          let e = o.returnOneAttr(t.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, e.pot, i), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, e.amb, i);
          let n = h.gsStringHelpIn(206);
          this.gsTxtLblgs("lbl_info6/YMLabel2", `${n[1]}+${s.hp}`, i), this.gsTxtLblgs("lbl_info7/YMLabel2", `${n[2]}+${s.att}`, i), this.gsTxtLblgs("lbl_info8/YMLabel2", `${n[3]}+${s.def}`, i), this.gsTxtLblgs("lbl_info9/YMLabel2", `${n[4]}+${s.speed}`, i)
        }
      }).m_name = "WTuijianshuji1", b = g)) || b);
      s._RF.pop()
    }
  }
}));