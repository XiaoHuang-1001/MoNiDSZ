System.register("chunks:///_virtual/PQTips.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var i, s, e, o, n, c, u, p;
  return {
    setters: [function(t) {
      i = t.cclegacy, s = t._decorator, e = t.Tween, o = t.UIOpacity, n = t.tween, c = t.v3
    }, function(t) {
      u = t.ZGGSOfficeFx, p = t.gs_boss
    }],
    execute: function() {
      var a, l;
      i._RF.push({}, "fc600wpZixLRKnArTX4MMAy", "PQTips", void 0);
      const {
        ccclass: r,
        property: h
      } = s;
      t("PQTips", r("PQTips")(((l = class t extends u {
        constructor(...t) {
          super(...t), this._ui = null
        }
        pohuiPage() {
          p.bossDieWin(t, 2)
        }
        load(t) {
          this._ui = this.zgNodegzt("node_1")
        }
        init(t) {
          t && this.gsTxtLblgs("node_2/lbl_titile", t, this._ui), this._ui.setPosition(0, 0, 0), e.stopAllByTarget(this._ui), e.stopAllByTarget(this._ui.getComponent(o)), this._ui.getComponent(o).opacity = 255, n(this._ui).parallel(n().delay(1).call(function() {
            n(this._ui.getComponent(o)).to(.5, {
              opacity: 0
            }).start()
          }.bind(this)), n().by(1, {
            position: c(0, 150, 0)
          })).call(function() {
            this.pohuiPage()
          }.bind(this)).start()
        }
      }).m_name = "PQTips", a = l)) || a);
      i._RF.pop()
    }
  }
}));