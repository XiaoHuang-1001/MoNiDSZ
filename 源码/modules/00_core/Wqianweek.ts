System.register("chunks:///_virtual/Wqianweek.ts", ["cc", "./ZGGSOfficeFx.ts", "./Wqianweek2.ts", "./minFunc.ts", "./ZGGSConfigco.ts"], (function(t) {
  "use strict";
  var n, i, a, s, e, o, d, c, g, h, u, l, r, w;
  return {
    setters: [function(t) {
      n = t.cclegacy, i = t._decorator, a = t.instantiate
    }, function(t) {
      s = t.ZGGSOfficeFx, e = t.gs_bmsg, o = t.gs_boss, d = t.gs_tabpr, c = t.gs_btxt, g = t.gs_www, h = t.gs_computer, u = t.gs_sql
    }, function(t) {
      l = t.Wqianweek2
    }, function(t) {
      r = t.minFunc
    }, function(t) {
      w = t.ZGGSConfigco
    }],
    execute: function() {
      var b, _;
      n._RF.push({}, "6e9c5mUAlhF67AKFLY8gSTc", "Wqianweek", void 0);
      const {
        ccclass: m,
        property: p
      } = i;
      t("Wqianweek", m("Wqianweek")(((_ = class t extends s {
        constructor(...t) {
          super(...t), this.content = null, this.btnLay = null, this.co_qiandao_tt = null, this.maidianGG1 = 6
        }
        pohuiPage() {
          e.send(2100, !1), o.bossDieWin(t, 2)
        }
        load() {
          this.content = this.zgNodegzt("YMScrollView/view/content"), this.btnLay = this.zgNodegzt("Node1", this.content), this.co_qiandao_tt = d.co_qiandao.values, this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this)), this.gsButtongbs("YMSpriteSplash", (() => {
            this.pohuiPage()
          }))
        }
        init() {
          e.send(2100, !0), this.shouView()
        }
        shouView() {
          for (let t = 0; t < this.co_qiandao_tt.length; t++) {
            let n = this.co_qiandao_tt[t],
              i = this.content.children[t];
            i || (i = a(this.btnLay), i.parent = this.content), i.active = !0, this.bindView(i, n)
          }
        }
        bindView(t, n) {
          this.gsTxtLblgs("lbl_info3/YMLabel1", c.gsStringHelpIn(202)[n.num], t), this.gsTxtLblgs("top1/node_2/lay/YMLabel2", n.award[1], t), this.gsTxtLblgs("top2/node_2/lay/YMLabel2", n.award[3], t);
          let i = u.qiandaoInfo;
          this.zgNodegzt("btn_1", t).active = !i.award[n.num] && i.day >= n.num, this.zgNodegzt("btn_2", t).active = i.award[n.num] && !i.award2[n.num], this.zgNodegzt("btn_3", t).active = i.award[n.num] && i.award2[n.num];
          let a = [n.award[0], n.award[1]],
            s = [n.award[2], n.award[3]];
          this.gsButtongbs("btn_1", (() => {
            e.send(211, a[0], {}), e.send(211, s[0], {}), this.aaa(i, a, s, n, 1, t)
          }), t);
          let o = `${this.maidianGG1}_${n.num}`;
          r.ggbtnPlay(this.zgNodegzt("btn_2", t), o), 1 == w.sdkCp && (o = this.maidianGG1 + ""), this.gsButtongbs("btn_2", (() => {
            g.GGShowVido(o, (() => {
              e.send(211, a[0], {}), e.send(211, s[0], {}), this.aaa(i, a, s, n, 2, t)
            }))
          }), t)
        }
        aaa(t, n, i, a, s, e) {
          1 == s ? t.award[a.num] = 1 : 2 == s && (t.award2[a.num] = 1), this.bindView(e, a), h.getNeedTabgs(n, null, 8), h.getNeedTabgs(i, null, 8);
          let d = {
            diamondAward: n,
            diamondAward2: i,
            co_qiandao_t: a
          };
          o.bossWshow(l, d);
          let c = {
            data_t: a
          };
          r.activityReward(1, s, c)
        }
      }).m_name = "Wqianweek", b = _)) || b);
      n._RF.pop()
    }
  }
}));