System.register("chunks:///_virtual/WGongshiGuidingx.ts", ["cc", "./ZGGSOfficeFx.ts", "./WGongshiGuidingm.ts", "./WGongshiGuidingn.ts"], (function(t) {
  "use strict";
  var i, n, s, o, g, u, c;
  return {
    setters: [function(t) {
      i = t.cclegacy, n = t._decorator, s = t.game
    }, function(t) {
      o = t.ZGGSOfficeFx, g = t.gs_boss
    }, function(t) {
      u = t.WGongshiGuidingm
    }, function(t) {
      c = t.WGongshiGuidingn
    }],
    execute: function() {
      var e, h;
      i._RF.push({}, "600d2C6FiZL4bArXzGwUJoI", "WGongshiGuidingx", void 0);
      const {
        ccclass: G,
        property: d
      } = n;
      t("WGongshiGuidingx", G("WGongshiGuidingx")(((h = class extends o {
        load() {}
        init(t) {
          let i = this.zgNodegzt("top/sw1/view/content/txt3");
          this.gsButtongbs("top/layout/btn_yes", function() {
            t(), this.node.destroy()
          }.bind(this)), this.gsButtongbs("top/layout/btn_no", function() {
            s.end()
          }.bind(this)), this.gsButtongbs("txt4", function() {
            g.bossPshow(u)
          }.bind(this), i), this.gsButtongbs("txt6", function() {
            g.bossPshow(c)
          }.bind(this), i)
        }
      }).m_name = "WGongshiGuidingx", e = h)) || e);
      i._RF.pop()
    }
  }
}));