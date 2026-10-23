System.register("chunks:///_virtual/WJiashu.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(s) {
  "use strict";
  var t, e, i, c, o, h, n;
  return {
    setters: [function(s) {
      t = s.cclegacy, e = s._decorator
    }, function(s) {
      i = s.ZGGSOfficeFx, c = s.gs_bmsg, o = s.gs_boss, h = s.gs_computer, n = s.gs_sql
    }],
    execute: function() {
      var u, a;
      t._RF.push({}, "7c652DJ0c9EuIlIhfrKXP46", "WJiashu", void 0);
      const {
        ccclass: g,
        property: r
      } = e;
      s("WJiashu", g("WJiashu")(((a = class s extends i {
        constructor(...s) {
          super(...s), this.bcat = null, this.cost = [2, 10]
        }
        pohuiPage() {
          c.send(2100, !1), o.bossDieWin(s, 2)
        }
        load() {
          this.bcat = this.zgNodegzt("top"), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.bcat)
        }
        init(s) {
          c.send(2100, !0);
          let t = this.zgNodegzt("btn_yes", this.bcat);
          this.gsNeedConfigs("cost", this.cost, t), this.gsScheduleStnode(t, (() => {
            let s = h.checkTabNeedgs(this.cost);
            this.gsLblCororgst1("cost/YMLabel", s, [250, 250, 250], t)
          }), .3), this.gsButtongbs(t, (() => {
            h.constNeedTabgs(this.cost, (() => {
              n.base.jashuTime = 18e5, h.initTimeNumCd(), c.send(2200), c.send(2201), this.pohuiPage()
            }), 24)
          }))
        }
      }).m_name = "WJiashu", u = a)) || u);
      t._RF.pop()
    }
  }
}));