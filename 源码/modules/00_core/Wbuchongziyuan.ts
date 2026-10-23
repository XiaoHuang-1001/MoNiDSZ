System.register("chunks:///_virtual/Wbuchongziyuan.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var i, s, n, o, a, g, h, e;
  return {
    setters: [function(t) {
      i = t.cclegacy, s = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_bmsg, a = t.gs_boss, g = t.gs_computer, h = t.gs_www
    }, function(t) {
      e = t.minFunc
    }],
    execute: function() {
      var u, l;
      i._RF.push({}, "13ee81tmMdPHIifuzz0TZ4J", "Wbuchongziyuan", void 0);
      const {
        ccclass: p,
        property: b
      } = s;
      t("Wbuchongziyuan", p("Wbuchongziyuan")(((l = class t extends n {
        constructor(...t) {
          super(...t), this.top = null, this.maidianGG1 = 1, this.maidianGG2 = 2, this.maidianGG3 = 3
        }
        pohuiPage() {
          o.send(2100, !1), a.bossDieWin(t, 2)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.top), this.gsButtongbs("YMSpriteSplash", (() => {
            this.pohuiPage()
          }))
        }
        init() {
          o.send(2100, !0), this.ziyuanbucong()
        }
        ziyuanbucong() {
          let t = [1, Math.ceil(30 * g.getAllEarn())],
            i = [2, 100],
            s = [3, 20];
          this.gsTxtLblgs("top1/node_2/lay/YMLabel2", g.gsNumValueShow(t[1]), this.top), this.gsTxtLblgs("top2/node_2/lay/YMLabel2", i[1], this.top), this.gsTxtLblgs("top3/node_2/lay/YMLabel2", s[1], this.top), e.ggbtnPlay(this.zgNodegzt("top1/lay-001/btn_3", this.top), this.maidianGG1), this.gsButtongbs("top1/lay-001/btn_3", (() => {
            h.GGShowVido(this.maidianGG1, (() => {
              o.send(211, t[0], {}), g.getNeedTabgs(t, null, 1), this.pohuiPage()
            }))
          }), this.top), e.ggbtnPlay(this.zgNodegzt("top2/lay-001/btn_3", this.top), this.maidianGG2), this.gsButtongbs("top2/lay-001/btn_3", (() => {
            h.GGShowVido(this.maidianGG2, (() => {
              o.send(211, i[0], {}), g.getNeedTabgs(i, null, 1), this.pohuiPage()
            }))
          }), this.top), e.ggbtnPlay(this.zgNodegzt("top3/lay-001/btn_3", this.top), this.maidianGG3), this.gsButtongbs("top3/lay-001/btn_3", (() => {
            h.GGShowVido(this.maidianGG3, (() => {
              g.getNeedTabgs(s, null, 1), o.send(211, s[0], {}), this.pohuiPage()
            }))
          }), this.top)
        }
      }).m_name = "Wbuchongziyuan", u = l)) || u);
      i._RF.pop()
    }
  }
}));