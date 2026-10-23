System.register("chunks:///_virtual/WTishis3.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, e, i, n, o, h;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, n = t.gs_boss, o = t.gs_btxt, h = t.gs_computer
    }],
    execute: function() {
      var l, u;
      s._RF.push({}, "36fb7nUudtDSbHe4VMC4gME", "WTishis3", void 0);
      const {
        ccclass: c,
        property: g
      } = e;
      t("WTishis3", c("WTishis3")(((u = class t extends i {
        constructor(...t) {
          super(...t), this.btn_yes = null, this.btn_no = null, this.topTitle = null
        }
        pohuiPage() {
          n.bossDieWin(t, 2)
        }
        load() {
          this.topTitle = o.gsStringHelpIn(5), this.btn_yes = this.zgNodegzt("top/layout/btn_yes"), this.btn_no = this.zgNodegzt("top/layout/btn_no"), this.gsButtongbs(this.btn_no, function() {
            this.pohuiPage()
          }.bind(this))
        }
        init(t) {
          this.showPage(t)
        }
        showPage(t) {
          let s = t.str;
          this.gsTxtLblgs("lbl_state0", s);
          let e = t._func;
          this.btn_no.active = t.showNot, this.gsTxtLblgs("top/Layout/YMLabel", h.gsNumValueShow(t.needNum));
          let i = this.zgLableglt("top/Layout/YMLabel");
          i.unscheduleAllCallbacks();
          let n = () => {
            let s = [1, t.needNum],
              e = h.checkTabNeedgs(s);
            this.gsLblCororgst1("top/Layout/YMLabel", e, [25, 25, 25])
          };
          i.schedule(n, .3), n(), this.gsButtongbs(this.btn_yes, function() {
            let s = [1, t.needNum];
            h.constNeedTabgs(s, (() => {
              e(!0), this.pohuiPage()
            }), 23)
          }.bind(this))
        }
      }).m_name = "WTishis3", l = u)) || l);
      s._RF.pop()
    }
  }
}));