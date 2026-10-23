System.register("chunks:///_virtual/WNewMing1.ts", ["cc", "./ZGGSOfficeFx.ts", "./cyz_sword.ts"], (function(t) {
  "use strict";
  var s, n, e, i, g, o, c, r;
  return {
    setters: [function(t) {
      s = t.cclegacy, n = t._decorator
    }, function(t) {
      e = t.ZGGSOfficeFx, i = t.gs_boss, g = t.gs_btxt, o = t.gs_bmsg, c = t.gs_computer
    }, function(t) {
      r = t.check
    }],
    execute: function() {
      var a, u;
      s._RF.push({}, "cea30tu+RBNrbdkRVJDiaR+", "WNewMing1", void 0);
      const {
        ccclass: h,
        property: b
      } = n;
      t("WNewMing1", h("WNewMing1")(((u = class t extends e {
        xiabanye() {
          i.bossDieWin(t, 2)
        }
        load() {
          this.gsButtongbs("top/guanbi", (() => {
            this.xiabanye()
          })), this.gsButtongbs("YMSpriteSplash", (() => {
            this.xiabanye()
          }))
        }
        init(t) {
          this.showWNewMing1(t)
        }
        showWNewMing1(t) {
          let s = t.xing,
            n = t.ming,
            e = t.type,
            i = t._func,
            a = this.zgEditBoxgebts("top/lbl_info2/YMEditBox");
          1 == e ? a.string = s : 2 == e && (a.string = n);
          let u = "";
          this.gsButtongbs("top/lay/btn_2", function() {
            let t = a.string,
              h = "";
            1 == e ? h = t + n : 2 == e && (h = s + t), "" == t ? (u = g.gsNorStringType(17), o.send(202, u)) : " " == t ? (u = g.gsNorStringType(21), o.send(202, u)) : t.length > 8 || t.length < 1 ? (u = g.gsNorStringType(22), o.send(202, u)) : r(h) ? (u = g.gsNorStringType(20), o.send(202, u)) : c.cnTxtCheck(t) ? (console.log(r(h), "sdfsd", h), i(t), this.xiabanye()) : (u = g.gsNorStringType(18), o.send(202, u))
          }.bind(this))
        }
      }).m_name = "WNewMing1", a = u)) || a);
      s._RF.pop()
    }
  }
}));