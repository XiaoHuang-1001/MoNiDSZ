System.register("chunks:///_virtual/WTishis2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(s) {
  "use strict";
  var t, i, n;
  return {
    setters: [function(s) {
      t = s.cclegacy, i = s._decorator
    }, function(s) {
      n = s.ZGGSOfficeFx
    }],
    execute: function() {
      var e, c;
      t._RF.push({}, "313b4Ux8MlOkZbn/+iYxaoP", "WTishis2", void 0);
      const {
        ccclass: h,
        property: o
      } = i;
      s("WTishis2", h("WTishis2")(((c = class extends n {
        guanmen() {
          this.node.active = !1
        }
        load() {
          this.gsButtongbs("btn_no", function() {
            this.guanmen()
          }.bind(this))
        }
        init(s) {
          this.showPage(s)
        }
        showPage(s) {
          let t = s.str;
          this.gsRichLbltxtgrs("YMRichText", t);
          let i = s._func;
          this.gsButtongbs("btn_yes", function() {
            i(!0), this.guanmen()
          }.bind(this))
        }
      }).m_name = "WTishis2", e = c)) || e);
      t._RF.pop()
    }
  }
}));