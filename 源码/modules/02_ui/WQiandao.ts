System.register("chunks:///_virtual/WQiandao.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var n, s, i, a, e, o;
  return {
    setters: [function(t) {
      n = t.cclegacy, s = t._decorator, i = t.sys
    }, function(t) {
      a = t.ZGGSOfficeFx, e = t.gs_bmsg, o = t.gs_boss
    }],
    execute: function() {
      var c, u;
      n._RF.push({}, "54dfcr6tcJHML50ptV22hmv", "WQiandao", void 0);
      const {
        ccclass: r,
        property: p
      } = s;
      t("WQiandao", r("WQiandao")(((u = class t extends a {
        xiabanye() {
          e.send(2100, !1), o.bossDieWin(t, 2)
        }
        load() {
          this.gsButtongbs("top/guanbi", function() {
            this.xiabanye()
          }.bind(this)), this.gsButtongbs("YMSpriteSplash", function() {
            this.xiabanye()
          }.bind(this))
        }
        init() {
          e.send(2100, !0), this.gsButtongbs("top/node_2", function() {
            i.openURL("https://l.taptap.cn/PnakLtzb?channel=rep-rep_y8ktnpnu1zh_h5url3807")
          }.bind(this))
        }
      }).m_name = "WQiandao", c = u)) || c);
      n._RF.pop()
    }
  }
}));