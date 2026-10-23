System.register("chunks:///_virtual/Wpingjia2.ts", ["cc", "./ZGGSOfficeFx.ts", "./blController.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var i, s, n, o, e, a, g, l, h, d, c, p;
  return {
    setters: [function(t) {
      i = t.cclegacy, s = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, e = t.gs_tabpr, a = t.gs_sound, g = t.gs_sql, l = t.gs_www, h = t.gs_computer, d = t.gs_bmsg
    }, function(t) {
      c = t.blController
    }, function(t) {
      p = t.minFunc
    }],
    execute: function() {
      var u, r;
      i._RF.push({}, "0083dxFVwtG/Zizy7Jz/gDg", "Wpingjia2", void 0);
      const {
        ccclass: b,
        property: _
      } = s;
      t("Wpingjia2", b("Wpingjia2")(((r = class t extends n {
        constructor(...t) {
          super(...t), this.top = null, this.co_title_ttt = null, this.maidianGG1 = 4
        }
        pohuiPage() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.gsButtongbs("YMSpriteSplash", (() => {
            this.pohuiPage()
          })), this.top = this.zgNodegzt("top"), this.co_title_ttt = e.co_title.objs, this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.top)
        }
        init(t) {
          this.showInfo(t)
        }
        showInfo(t) {
          a.playOne("pjlv");
          let i = g.pingjiaInfo,
            s = e.co_title.zgTableKey(i.titId),
            n = e.co_title.zgTableKey(i.titId + 1),
            o = this.zgNodegzt("xing", this.top).children;
          for (let t = 0; t < o.length; t++) o[t].active = n.star > t;
          console.log(n, "next_t", s, "co_title_t"), n && (this.gsTxtGradelbl("lbl_info2/YMLabel1", n.grade, n.title, this.top), this.gsTxtLblgs("top1/node_2/lay/YMLabel2", n.award[1], this.top), this.gsTxtLblgs("top2/node_2/lay/YMLabel2", n.award[3], this.top)), this.gsButtongbs("btn_2", function() {
            this.dealResult(1, n, t)
          }.bind(this), this.top), g.cache.yindaoStop ? p.ggbtnCantPlay(this.maidianGG1) : p.ggbtnPlay(this.zgNodegzt("btn_4", this.top), this.maidianGG1), this.gsButtongbs("btn_4", function() {
            l.GGShowVido(this.maidianGG1, (() => {
              this.dealResult(3, n, t)
            }))
          }.bind(this), this.top)
        }
        dealResult(t, i, s) {
          let n = [i.award[0], i.award[1] * t];
          if (h.getNeedTabgs(n, function() {}.bind(this), 6), d.send(211, n[0], {}), i.award[2]) {
            let s = [i.award[2], i.award[3] * t];
            h.getNeedTabgs(s, function() {}.bind(this), 6), d.send(211, s[0], {})
          }
          g.pingjiaInfo.titId = i.id, p.developUnlockSend(1), c.pingjiaSend(g.pingjiaInfo.titId), s._func(), this.pohuiPage()
        }
      }).m_name = "Wpingjia2", u = r)) || u);
      i._RF.pop()
    }
  }
}));