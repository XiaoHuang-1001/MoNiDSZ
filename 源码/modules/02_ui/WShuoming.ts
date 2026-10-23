System.register("chunks:///_virtual/WShuoming.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, i, n, o, e;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, e = t.gs_btxt
    }],
    execute: function() {
      var c, h;
      s._RF.push({}, "ccc77Di2PlHxaz3NfWJxwkA", "WShuoming", void 0);
      const {
        ccclass: u,
        property: g
      } = i;
      t("WShuoming", u("WShuoming")(((h = class t extends n {
        constructor(...t) {
          super(...t), this.txtNode = null, this.allTxt = null
        }
        pohuiPage() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.gsButtongbs("top/guanbi", function() {
            this.pohuiPage()
          }.bind(this)), this.txtNode = this.zgNodegzt("top/sw1/view/content/txt"), this.allTxt = e.gsWinStringHelp()
        }
        init(t) {
          this.showXitong(t)
        }
        showXitong(t) {
          let s = this.allTxt[t],
            i = "";
          for (let t = 0; t < s.length; t++) i += s[t] + "\n";
          this.gsTxtLblgs(this.txtNode, i)
        }
      }).m_name = "WShuoming", c = h)) || c);
      s._RF.pop()
    }
  }
}));