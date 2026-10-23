System.register("chunks:///_virtual/PQTips2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var i, s, e, n, o, c, a, u, r;
  return {
    setters: [function(t) {
      i = t.cclegacy, s = t._decorator, e = t.Tween, n = t.UIOpacity, o = t.tween, c = t.v3
    }, function(t) {
      a = t.ZGGSOfficeFx, u = t.gs_boss, r = t.gs_btxt
    }],
    execute: function() {
      var p, h;
      i._RF.push({}, "198e2gaRFNHK7NNsq1alUnH", "PQTips2", void 0);
      const {
        ccclass: l,
        property: g
      } = s;
      t("PQTips2", l("PQTips2")(((h = class t extends a {
        constructor(...t) {
          super(...t), this._ui = null
        }
        pohuiPage() {
          u.bossDieWin(t, 2)
        }
        load(t) {
          this._ui = this.zgNodegzt("node_1"), this.gsButtongbs("spr_bg", function() {
            this.node.active = !1
          }.bind(this))
        }
        init(t) {
          if (t) {
            let i = r.gsStringByParam(1, t);
            this.gsRichLbltxtgrs("node_1/YMRichText", i)
          }
          this._ui.setPosition(0, 0, 0), e.stopAllByTarget(this._ui), e.stopAllByTarget(this._ui.getComponent(n)), this._ui.getComponent(n).opacity = 255, o(this._ui).parallel(o().delay(1).call(function() {
            o(this._ui.getComponent(n)).to(.5, {
              opacity: 0
            }).start()
          }.bind(this)), o().by(1, {
            position: c(0, 150, 0)
          })).call(function() {
            this.pohuiPage()
          }.bind(this)).start()
        }
      }).m_name = "PQTips2", p = h)) || p);
      i._RF.pop()
    }
  }
}));