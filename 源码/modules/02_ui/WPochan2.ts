System.register("chunks:///_virtual/WPochan2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(s) {
  "use strict";
  var t, e, i, o, n, a, r, c, h, g;
  return {
    setters: [function(s) {
      t = s.cclegacy, e = s._decorator, i = s.find, o = s.game
    }, function(s) {
      n = s.ZGGSOfficeFx, a = s.gs_boss, r = s.gs_btxt, c = s.gs_sql, h = s.gs_sound, g = s.gs_bmsg
    }],
    execute: function() {
      var l, d;
      t._RF.push({}, "155dfRwZT1Kl4tZYCU7Jy6W", "WPochan2", void 0);
      const {
        ccclass: u,
        property: p
      } = e;
      s("WPochan2", u("WPochan2")(((d = class s extends n {
        constructor(...s) {
          super(...s), this.bdog = null
        }
        xiabanye() {
          a.bossDieWin(s, 2)
        }
        load() {
          this.gsButtongbs("top/guanbi", (() => {
            this.xiabanye()
          })), this.gsButtongbs("YMSpriteSplash", (() => {
            this.xiabanye()
          }))
        }
        init(s) {
          this.showWShezhi3(s)
        }
        showWShezhi3(s) {
          let t = "DSZMNQ";
          var e = this.zgEditBoxgebts("top/node_2/YMEditBox");
          let n = r.gsNorStringType(11) + t;
          this.gsTxtLblgs("top/YMLabel2", n), this.gsButtongbs("top/huajie1", (() => {
            t == e.string ? (c.config.guideId = 0, a.bossScheduleStopArr(), c.cache.timeStop = !1, c.cache.sec = 0, c.base.stopGame = !0, h.stopBg(), c.clsData(), c.saveData(), this.gsSprHtreset(), i("Canvas/ground").destroyAllChildren(), i("Canvas/ui").destroyAllChildren(), i("Canvas/window").destroyAllChildren(), i("Canvas/popup").destroyAllChildren(), setTimeout(function() {
              o.restart()
            }.bind(this), 1e3)) : g.send(202, r.gsNorStringType(10))
          }))
        }
      }).m_name = "WPochan2", l = d)) || l);
      t._RF.pop()
    }
  }
}));