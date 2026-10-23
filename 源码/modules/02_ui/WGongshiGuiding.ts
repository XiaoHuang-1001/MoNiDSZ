System.register("chunks:///_virtual/WGongshiGuiding.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(i) {
  "use strict";
  var s, n, t, o;
  return {
    setters: [function(i) {
      s = i.cclegacy, n = i._decorator
    }, function(i) {
      t = i.ZGGSOfficeFx, o = i.gs_boss
    }],
    execute: function() {
      var e, u;
      s._RF.push({}, "90905kengBNK6xrC3vbXydp", "WGongshiGuiding", void 0);
      const {
        ccclass: c,
        property: g
      } = n;
      i("WGongshiGuiding", c("WGongshiGuiding")(((u = class i extends t {
        pohuiPage() {
          o.bossDieWin(i, 2)
        }
        load() {
          this.gsButtongbs("top/guanbi", function() {
            this.pohuiPage()
          }.bind(this)), this.gsButtongbs("YMSpriteSplash", function() {
            this.pohuiPage()
          }.bind(this))
        }
        init() {}
      }).m_name = "WGongshiGuiding", e = u)) || e);
      s._RF.pop()
    }
  }
}));