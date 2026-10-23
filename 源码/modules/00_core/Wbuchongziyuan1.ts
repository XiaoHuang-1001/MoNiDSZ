System.register("chunks:///_virtual/Wbuchongziyuan1.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, i, n, o, a, u, e, g, c;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, a = t.gs_computer, u = t.gs_www, e = t.gs_bmsg, g = t.gs_sql
    }, function(t) {
      c = t.minFunc
    }],
    execute: function() {
      var h, l;
      s._RF.push({}, "9d055eMSElArpZcYxlJz3wA", "Wbuchongziyuan1", void 0);
      const {
        ccclass: b,
        property: p
      } = i;
      t("Wbuchongziyuan1", b("Wbuchongziyuan1")(((l = class t extends n {
        constructor(...t) {
          super(...t), this.top = null, this.maidianGG2 = 1
        }
        pohuiPage() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.top), this.gsButtongbs("YMSpriteSplash", (() => {
            this.pohuiPage()
          }))
        }
        init() {
          this.ziyuanbucong()
        }
        ziyuanbucong() {
          let t = [1, Math.ceil(30 * a.getAllEarn())];
          this.gsTxtLblgs("top1/node_2/lay/YMLabel2", a.gsNumValueShow(t[1]), this.top), c.ggbtnPlay(this.zgNodegzt("top1/lay-001/btn_3", this.top), this.maidianGG2), this.gsButtongbs("top1/lay-001/btn_3", (() => {
            u.GGShowVido(this.maidianGG2, (() => {
              e.send(211, t[0], {}), a.getNeedTabgs(t, null, 1), this.aaa(1), this.pohuiPage()
            }))
          }), this.top)
        }
        aaa(t) {
          1 == t ? g.base.gold : 2 == t ? g.base.diamond : 3 == t && g.base.jinka
        }
      }).m_name = "Wbuchongziyuan1", h = l)) || h);
      s._RF.pop()
    }
  }
}));