System.register("chunks:///_virtual/WNewMing2.ts", ["cc", "./ZGGSOfficeFx.ts", "./cyz_sword.ts", "./minFunc.ts"], (function(s) {
  "use strict";
  var t, n, e, i, g, o, c, r, a;
  return {
    setters: [function(s) {
      t = s.cclegacy, n = s._decorator
    }, function(s) {
      e = s.ZGGSOfficeFx, i = s.gs_boss, g = s.gs_btxt, o = s.gs_bmsg, c = s.gs_computer
    }, function(s) {
      r = s.check
    }, function(s) {
      a = s.minFunc
    }],
    execute: function() {
      var u, l;
      t._RF.push({}, "d6a5cXMl+BC9bWsLdLPRt9V", "WNewMing2", void 0);
      const {
        ccclass: h,
        property: d
      } = n;
      s("WNewMing2", h("WNewMing2")(((l = class s extends e {
        xiabanye() {
          i.bossDieWin(s, 2)
        }
        load() {
          this.gsButtongbs("top/guanbi", (() => {
            this.xiabanye()
          })), this.gsButtongbs("YMSpriteSplash", (() => {
            this.xiabanye()
          }))
        }
        init(s) {
          this.showWNewMing2(s)
        }
        showWNewMing2(s) {
          let t = s.name,
            n = s._func,
            e = this.zgEditBoxgebts("top/lbl_info2/YMEditBox");
          this.gsButtongbs("top/lay/btn_2", function() {
            let s = e.string;
            "" == s ? (t = g.gsNorStringType(17), o.send(202, t)) : " " == s ? (t = g.gsNorStringType(21), o.send(202, t)) : s.length > 4 || s.length < 2 ? (t = g.gsNorStringType(19), o.send(202, t)) : r(s) ? (t = g.gsNorStringType(20), o.send(202, t)) : c.cnTxtCheck(s) ? a.checkIlllegal(s, (t => {
              t ? (console.log(r(s), "sdfsd", s), n(s), this.xiabanye()) : o.send(202, g.gsNorStringType(20))
            })) : (t = g.gsNorStringType(18), o.send(202, t))
          }.bind(this))
        }
      }).m_name = "WNewMing2", u = l)) || u);
      t._RF.pop()
    }
  }
}));