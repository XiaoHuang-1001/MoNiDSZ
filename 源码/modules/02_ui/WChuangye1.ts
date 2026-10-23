System.register("chunks:///_virtual/WChuangye1.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSPaipxxu.ts", "./WChuangye2.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, o, i, n, a, g, l, d, h, b, r, u, _;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      o = t.ZGGSOfficeFx, i = t.gs_boss, n = t.gs_tabpr, a = t.gs_phone, g = t.gs_btxt, l = t.gs_computer, d = t.gs_sql, h = t.gs_bmsg, b = t.gs_www
    }, function(t) {
      r = t.ZGGSPaipxxu
    }, function(t) {
      u = t.WChuangye2
    }, function(t) {
      _ = t.minFunc
    }],
    execute: function() {
      var c, y;
      s._RF.push({}, "77f4f8Cd6FO3Jf7C98trjQn", "WChuangye1", void 0);
      const {
        ccclass: L,
        property: x
      } = e;
      t("WChuangye1", L("WChuangye1")(((y = class t extends o {
        constructor(...t) {
          super(...t), this.top = null, this.co_industry_tt = null, this.maidianGG1 = 16
        }
        xiabanye() {
          i.bossDieWin(t, 1)
        }
        load() {
          this.co_industry_tt = n.co_industry.values, this.top = this.zgNodegzt("top")
        }
        init(t) {
          this.showWChuangye1(t)
        }
        showWChuangye1(t) {
          console.log(t);
          let s = t.workInfo1_s,
            e = this.zgNodegzt("icon_layout", this.top),
            o = this.zgNodegzt("spr", this.top),
            c = a.returnOneAttr(s.id),
            y = n.co_post.zgTableKey(s.postId),
            L = n.co_job.zgTableKey(s.jobId),
            x = n.co_job.zgTableKey(s.jobId + 1),
            p = n.co_edu.zgTableKey(s.edu);
          if (this.gsTxtGradelbl("node_3/YMLabel2", y.grade, y.name, e), this.gsEmpGonghao("node_6/YMLabel2", s.id, e), this.gsTxtStrbyNums("node_5/YMLabel2", 4, c.pot, e), this.gsTxtStrbyNums("node_9/YMLabel2", 4, c.amb, e), 1 == s.id ? (this.gsTxtLblgs("node_2/YMLayout/YMLabel2", g.gsNorStringType(27), e), this.gsTxtLblgs("node_8/YMLabel2", g.gsNorStringType(27), e)) : (this.gsTxtGradelbl("node_2/YMLayout/YMLabel2", L.grade, L.name, e), this.gsTxtStrbyNums("node_8/YMLabel2", 101, c.salary, e)), this.zgNodegzt("node_2/YMLayout/YMLabel1", e).active = x && 1 != s.id, this.zgNodegzt("node_2/YMLayout/YMLabel3", e).active = x && 1 != s.id, this.zgNodegzt("node_2/YMLayout/YMLabel4", e).active = x && 1 != s.id, x) {
            let t = Math.floor(s.exp / x.exp * 100);
            t >= 100 ? this.gsTxtLblgs("node_2/YMLayout/YMLabel1", g.gsStringHelpIn(6), e) : this.gsTxtLblgs("node_2/YMLayout/YMLabel1", `${t}%`, e)
          }
          this.gsTxtGradelbl("node_11/YMLabel2", p.grade, p.name, e), this.gsSprHtsst("icon", s.sprId, o), this.gsTxtLblgs("node_2/YMLabel1", s.name, o), this.gsTxtStrbyNums("node_4/YMLabel2", 102, c.earn, e), this.gsTxtStrbyNums("node_7/YMLabel2", 102, c.workExp, e);
          let M = l.haveJoinStr(s.join);
          this.gsTxtLblgs("node_10/YMLabel2", M, e), this.gsTxtStrbyStrs("lbl_info2/YMLabel1", 24, s.name, this.top);
          let Y = Object.keys(d.workInfo1.objs),
            f = {
              1: [],
              2: []
            };
          for (let t = 1; t < 3; t++) {
            let s = [...Y].sort(r.paiMingSort(t + 1));
            f[t] = s
          }
          let m = f[1].indexOf(`${s.id}`) + 1,
            T = f[2].indexOf(`${s.id}`) + 1;
          console.log(f, m, T), this.gsTxtLblgs("node_12/YMLabel2", m, e), this.gsTxtLblgs("node_13/YMLabel2", T, e);
          let G = l.sjNumArrgs2(0, this.co_industry_tt.length - 1, 1)[0],
            S = this.co_industry_tt[G];
          this.gsTxtLblgs("node_14/YMLabel2", S.name, e), this.gsButtongbs("btn_2", (() => {
            h.send(2300), this.xiabanye()
          }), this.top), _.ggbtnPlay(this.zgNodegzt("btn_3", this.top), this.maidianGG1), this.gsButtongbs("btn_3", (() => {
            b.GGShowVido(this.maidianGG1, (() => {
              let t = {
                workInfo1_s: s,
                co_industry_t: S,
                _func: () => {
                  this.xiabanye();
                  let t = {
                    id: s.id
                  };
                  h.send(2306, t)
                }
              };
              i.bossWshow(u, t), this.node.active = !1
            }))
          }), this.top)
        }
      }).m_name = "WChuangye1", c = y)) || c);
      s._RF.pop()
    }
  }
}));