System.register("chunks:///_virtual/WPochan1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WPochan2.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, i, n, o, g, h, e, b, c, a, d;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_bmsg, g = t.gs_boss, h = t.gs_btxt, e = t.gs_sql, b = t.gs_computer, c = t.gs_www
    }, function(t) {
      a = t.WPochan2
    }, function(t) {
      d = t.minFunc
    }],
    execute: function() {
      var l, u;
      s._RF.push({}, "87ccaQAuAhHyrvmYWosskWZ", "WPochan1", void 0);
      const {
        ccclass: r,
        property: _
      } = i;
      t("WPochan1", r("WPochan1")(((u = class t extends n {
        constructor(...t) {
          super(...t), this.bdog = null, this.maidianGG1 = 13
        }
        xiabanye() {
          o.send(2300), g.bossDieWin(t, 1)
        }
        load() {
          this.bdog = this.zgNodegzt("top")
        }
        init(t) {
          this.showWPochan1(t)
        }
        showWPochan1(t) {
          let s = t.type,
            i = h.gsStringHelpIn(4)[s];
          this.gsTxtLblgs("title", i.tit, this.bdog), this.gsTxtStrbyNums("lbl_info2/lay/YMLabel3", 4, e.base.gold, this.bdog), this.gsTxtLblgs("lbl_info3/YMLabel1", i.des1, this.bdog), this.gsTxtLblgs("lbl_info4/YMLabel1", i.des2, this.bdog), this.zgNodegzt("btn_2", this.bdog).active = 1 == s, this.zgNodegzt("btn_4", this.bdog).active = 2 == s;
          let n = [1, Math.ceil(30 * b.getAllEarn() * 20)];
          this.gsNeedConfigs("lay2", n, this.bdog), this.gsButtongbs("btn_2", function() {
            this.xiabanye()
          }.bind(this), this.bdog), this.gsButtongbs("btn_4", function() {
            g.bossWshow(a, {
              _func: () => {}
            })
          }.bind(this), this.bdog), d.ggbtnPlay(this.zgNodegzt("btn_3", this.bdog), this.maidianGG1), this.gsButtongbs("btn_3", function() {
            c.GGShowVido(this.maidianGG1, (() => {
              b.getNeedTabgs(n, null, 7), this.xiabanye()
            }))
          }.bind(this), this.bdog)
        }
      }).m_name = "WPochan1", l = u)) || l);
      s._RF.pop()
    }
  }
}));