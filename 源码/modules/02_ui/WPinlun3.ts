System.register("chunks:///_virtual/WPinlun3.ts", ["cc", "./ZGGSOfficeFx.ts", "./blController.ts"], (function(t) {
  "use strict";
  var n, s, e, i, o, u, a, c;
  return {
    setters: [function(t) {
      n = t.cclegacy, s = t._decorator
    }, function(t) {
      e = t.ZGGSOfficeFx, i = t.gs_bmsg, o = t.gs_computer, u = t.gs_boss, a = t.gs_sql
    }, function(t) {
      c = t.blController
    }],
    execute: function() {
      var l, r;
      n._RF.push({}, "1876dVJzuNMEIPVSkcJbs/E", "WPinlun3", void 0);
      const {
        ccclass: b,
        property: g
      } = s;
      t("WPinlun3", b("WPinlun3")(((r = class t extends e {
        xiabanye() {
          i.send(2100, !1), o.shalongDeal(), u.bossDieWin(t, 2)
        }
        load() {
          this.gsButtongbs("top/layout/btn_no", (() => {
            this.xiabanye()
          })), this.gsButtongbs("top/layout/btn_yes", (() => {
            c.huanxSend();
            let t = a.chahuahui;
            t.count = 4, t.state = 2, t.state2 = 1, c.tpingTiao(), this.xiabanye()
          }))
        }
        init() {
          i.send(2100, !0)
        }
      }).m_name = "WPinlun3", l = r)) || l);
      n._RF.pop()
    }
  }
}));