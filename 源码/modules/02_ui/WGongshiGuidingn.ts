System.register("chunks:///_virtual/WGongshiGuidingn.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(i) {
  "use strict";
  var n, s, t, e, o;
  return {
    setters: [function(i) {
      n = i.cclegacy, s = i._decorator
    }, function(i) {
      t = i.ZGGSOfficeFx, e = i.gs_boss, o = i.gs_sql
    }],
    execute: function() {
      var g, c;
      n._RF.push({}, "9477dBsKY1IgI0s6970bviw", "WGongshiGuidingn", void 0);
      const {
        ccclass: u,
        property: a
      } = s;
      i("WGongshiGuidingn", u("WGongshiGuidingn")(((c = class i extends t {
        pohuiPage() {
          e.bossDieWin(i, 2)
        }
        load() {
          this.gsButtongbs("top/guanbi", function() {
            this.pohuiPage()
          }.bind(this)), this.gsButtongbs("YMSpriteSplash", function() {
            this.pohuiPage()
          }.bind(this));
          let i = this.zgLableglt("top/sw1/view/content/txt1");
          i.string = i.string.replace(/SKY工作室/g, o.config.companyName)
        }
        init() {}
      }).m_name = "WGongshiGuidingn", g = c)) || g);
      n._RF.pop()
    }
  }
}));