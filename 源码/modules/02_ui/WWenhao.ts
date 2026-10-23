System.register("chunks:///_virtual/WWenhao.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(s) {
  "use strict";
  var o, e, t, n, i;
  return {
    setters: [function(s) {
      o = s.cclegacy, e = s._decorator
    }, function(s) {
      t = s.ZGGSOfficeFx, n = s.gs_bmsg, i = s.gs_boss
    }],
    execute: function() {
      var c, h;
      o._RF.push({}, "c6ad3bzITRLT5pkhPzPjUJj", "WWenhao", void 0);
      const {
        ccclass: a,
        property: r
      } = e;
      s("WWenhao", a("WWenhao")(((h = class s extends t {
        constructor(...s) {
          super(...s), this.box = null
        }
        pohuiPage() {
          n.send(2100, !1), i.bossDieWin(s, 2)
        }
        load() {
          this.box = this.zgNodegzt("spr1"), this.gsButtongbs("YMSpriteSplash", (() => {
            this.pohuiPage()
          }))
        }
        init(s) {
          this.showWWenhao(s)
        }
        showWWenhao(s) {
          console.log(JSON.stringify(s), "sdfsdf"), n.send(2100, !0), s.y -= 25, s.x += 190, console.log(s, "sdfsdf"), this.box.setWorldPosition(s)
        }
      }).m_name = "WWenhao", c = h)) || c);
      o._RF.pop()
    }
  }
}));