System.register("chunks:///_virtual/Wbuchongziyuan2.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, i, n, o, a, u, e, g, c;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, a = t.gs_www, u = t.gs_bmsg, e = t.gs_computer, g = t.gs_sql
    }, function(t) {
      c = t.minFunc
    }],
    execute: function() {
      var h, b;
      s._RF.push({}, "89d93JHUFdH6J0q0fUkxT5E", "Wbuchongziyuan2", void 0);
      const {
        ccclass: p,
        property: d
      } = i;
      t("Wbuchongziyuan2", p("Wbuchongziyuan2")(((b = class t extends n {
        constructor(...t) {
          super(...t), this.top = null, this.maidianGG2 = 2
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
          let t = [2, 100];
          this.gsTxtLblgs("top2/node_2/lay/YMLabel2", t[1], this.top), c.ggbtnPlay(this.zgNodegzt("top2/lay-001/btn_3", this.top), this.maidianGG2), this.gsButtongbs("top2/lay-001/btn_3", (() => {
            a.GGShowVido(this.maidianGG2, (() => {
              u.send(211, t[0], {}), e.getNeedTabgs(t, null, 1), this.aaa(2), this.pohuiPage()
            }))
          }), this.top)
        }
        aaa(t) {
          1 == t ? g.base.gold : 2 == t ? g.base.diamond : 3 == t && g.base.jinka
        }
      }).m_name = "Wbuchongziyuan2", h = b)) || h);
      s._RF.pop()
    }
  }
}));