System.register("chunks:///_virtual/WGongshiGuidingm.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(i) {
  "use strict";
  var t, s, n, o, e;
  return {
    setters: [function(i) {
      t = i.cclegacy, s = i._decorator
    }, function(i) {
      n = i.ZGGSOfficeFx, o = i.gs_boss, e = i.gs_sql
    }],
    execute: function() {
      var g, c;
      t._RF.push({}, "8a4f3F0PxhLA5m4MXXoNfTo", "WGongshiGuidingm", void 0);
      const {
        ccclass: u,
        property: a
      } = s;
      i("WGongshiGuidingm", u("WGongshiGuidingm")(((c = class i extends n {
        pohuiPage() {
          o.bossDieWin(i, 2)
        }
        load() {
          this.gsButtongbs("top/guanbi", function() {
            this.pohuiPage()
          }.bind(this)), this.gsButtongbs("YMSpriteSplash", function() {
            this.pohuiPage()
          }.bind(this));
          let i = this.zgLableglt("top/sw1/view/content/txt1");
          i.string = i.string.replace(/广州缤灵网络科技有限公司/g, e.config.companyName)
        }
        init() {}
      }).m_name = "WGongshiGuidingm", g = c)) || g);
      t._RF.pop()
    }
  }
}));