System.register("chunks:///_virtual/WChengjiu1.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var i, s, n, e, o, g, h, u;
  return {
    setters: [function(t) {
      i = t.cclegacy, s = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, e = t.gs_boss, o = t.gs_www, g = t.gs_computer, h = t.gs_bmsg
    }, function(t) {
      u = t.minFunc
    }],
    execute: function() {
      var a, c;
      i._RF.push({}, "8e081/SzmZHp4jilmydiMjY", "WChengjiu1", void 0);
      const {
        ccclass: d,
        property: f
      } = s;
      t("WChengjiu1", d("WChengjiu1")(((c = class t extends n {
        constructor(...t) {
          super(...t), this.bdog = null, this.fun = null, this.info = null, this.ggId = 5
        }
        xiabanye() {
          this.fun && this.fun(), e.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top")
        }
        init(t) {
          this.info = t.info, this.fun = t.fun, this.gsNeedConfigs2("lay", this.info.award, this.bdog), this.gsButtongbs("layout/btn_no", function() {
            this.getAward()
          }.bind(this), this.bdog), u.ggbtnPlay(this.zgNodegzt("layout/btn_yes", this.bdog), this.ggId), this.gsButtongbs("layout/btn_yes", function() {
            o.GGShowVido(this.ggId, (() => {
              this.getAward(!0)
            }))
          }.bind(this), this.bdog)
        }
        getAward(t) {
          let i = 1,
            s = [...this.info.award];
          t && (s[1] = 3 * s[1], i = 2), g.getNeedTabgs(s, (() => {
            h.send(211, s[0], {}), this.xiabanye()
          }), 3);
          let n = {
            data_t: this.info
          };
          u.activityReward(3, i, n)
        }
      }).m_name = "WChengjiu1", a = c)) || a);
      i._RF.pop()
    }
  }
}));