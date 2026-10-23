System.register("chunks:///_virtual/Wbuchongziyuan3.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, i, n, o, a, u, e, c, g;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, a = t.gs_www, u = t.gs_bmsg, e = t.gs_computer, c = t.gs_sql
    }, function(t) {
      g = t.minFunc
    }],
    execute: function() {
      var h, b;
      s._RF.push({}, "e7cfccCd5ZF9ri5T9/rWy/n", "Wbuchongziyuan3", void 0);
      const {
        ccclass: p,
        property: r
      } = i;
      t("Wbuchongziyuan3", p("Wbuchongziyuan3")(((b = class t extends n {
        constructor(...t) {
          super(...t), this.top = null, this.maidianGG3 = 3
        }
        pohuiPage() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.gsButtongbs("YMSpriteSplash", (() => {
            this.pohuiPage()
          })), this.top = this.zgNodegzt("top"), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.top)
        }
        init() {
          this.ziyuanbucong()
        }
        ziyuanbucong() {
          let t = [3, 20];
          this.gsTxtLblgs("top2/node_2/lay/YMLabel2", t[1], this.top), g.ggbtnPlay(this.zgNodegzt("top2/lay-001/btn_3", this.top), this.maidianGG3), this.gsButtongbs("top2/lay-001/btn_3", (() => {
            a.GGShowVido(this.maidianGG3, (() => {
              u.send(211, t[0], {}), e.getNeedTabgs(t, null, 1), this.aaa(3), this.pohuiPage()
            }))
          }), this.top)
        }
        aaa(t) {
          1 == t ? c.base.gold : 2 == t ? c.base.diamond : 3 == t && c.base.jinka
        }
      }).m_name = "Wbuchongziyuan3", h = b)) || h);
      s._RF.pop()
    }
  }
}));