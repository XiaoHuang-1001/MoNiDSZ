System.register("chunks:///_virtual/Wqianweek2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var e, s, i, n;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, n = t.gs_boss
    }],
    execute: function() {
      var o, a;
      e._RF.push({}, "6cc37oRKD1JA5gbeblcsMg1", "Wqianweek2", void 0);
      const {
        ccclass: c,
        property: u
      } = s;
      t("Wqianweek2", c("Wqianweek2")(((a = class t extends i {
        constructor(...t) {
          super(...t), this._kv = null, this.maidianGG1 = 1
        }
        pohuiPage() {
          n.bossDieWin(t, 2)
        }
        load() {}
        init(t) {
          this.shouView(t)
        }
        shouView(t) {
          t.co_qiandao_t;
          let e = t.diamondAward,
            s = t.diamondAward2;
          this.gsTxtLblgs("top/top1/node_2/lay/YMLabel2", e[1]), this.gsTxtLblgs("top/top2/node_2/lay/YMLabel2", s[1]), this.gsButtongbs("top/lay-001/btn_2", function() {
            this.pohuiPage()
          }.bind(this))
        }
      }).m_name = "Wqianweek2", o = a)) || o);
      e._RF.pop()
    }
  }
}));