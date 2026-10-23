System.register("chunks:///_virtual/WTishis.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, i, n, o, e;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, e = t.gs_btxt
    }],
    execute: function() {
      var h, c;
      s._RF.push({}, "096db/x2ypLNJzL4VPma+4/", "WTishis", void 0);
      const {
        ccclass: u,
        property: g
      } = i;
      t("WTishis", u("WTishis")(((c = class t extends n {
        constructor(...t) {
          super(...t), this.btn_yes = null, this.btn_no = null, this.topTitle = null
        }
        pohuiPage() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.topTitle = e.gsStringHelpIn(5), this.btn_yes = this.zgNodegzt("top/layout/btn_yes"), this.btn_no = this.zgNodegzt("top/layout/btn_no"), this.gsButtongbs(this.btn_no, function() {
            this.pohuiPage()
          }.bind(this))
        }
        init(t) {
          this.showPage(t)
        }
        showPage(t) {
          let s = t.str;
          this.gsTxtLblgs("lbl_state0", s);
          let i = t._func;
          this.btn_no.active = t.showNot, this.gsButtongbs(this.btn_yes, function() {
            i(!0), this.pohuiPage()
          }.bind(this))
        }
      }).m_name = "WTishis", h = c)) || h);
      s._RF.pop()
    }
  }
}));