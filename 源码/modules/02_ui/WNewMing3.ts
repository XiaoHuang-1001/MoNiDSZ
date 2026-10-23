System.register("chunks:///_virtual/WNewMing3.ts", ["cc", "./ZGGSOfficeFx.ts", "./cyz_sword.ts", "./minFunc.ts"], (function(s) {
  "use strict";
  var n, t, e, i, g, o, c, r, a, u;
  return {
    setters: [function(s) {
      n = s.cclegacy, t = s._decorator
    }, function(s) {
      e = s.ZGGSOfficeFx, i = s.gs_bmsg, g = s.gs_boss, o = s.gs_sql, c = s.gs_btxt, r = s.gs_computer
    }, function(s) {
      a = s.check
    }, function(s) {
      u = s.minFunc
    }],
    execute: function() {
      var b, l;
      n._RF.push({}, "bbea535SnJAgYP2DTSeuXsm", "WNewMing3", void 0);
      const {
        ccclass: d,
        property: h
      } = t;
      s("WNewMing3", d("WNewMing3")(((l = class s extends e {
        xiabanye() {
          i.send(2100, !1), g.bossDieWin(s, 2)
        }
        load() {
          this.gsButtongbs("top/guanbi", (() => {
            this.xiabanye()
          })), this.gsButtongbs("YMSpriteSplash", (() => {
            this.xiabanye()
          }))
        }
        init() {
          this.showWNewMing3()
        }
        showWNewMing3() {
          i.send(2100, !0);
          let s = "",
            n = this.zgEditBoxgebts("top/lbl_info2/YMEditBox");
          n.string = o.base.name, this.gsButtongbs("top/lay/btn_2", function() {
            let t = n.string;
            "" == t ? (s = c.gsNorStringType(17), i.send(202, s)) : " " == t ? (s = c.gsNorStringType(21), i.send(202, s)) : t.length > 12 || t.length < 1 ? (s = c.gsNorStringType(16), i.send(202, s)) : a(t) ? (s = c.gsNorStringType(20), i.send(202, s)) : r.cnTxtCheck(t) ? u.checkIlllegal(t, (s => {
              s ? (console.log(a(t), "sdfsd", t), o.base.name = t, i.send(101), this.xiabanye()) : i.send(202, c.gsNorStringType(20))
            })) : (s = c.gsNorStringType(18), i.send(202, s))
          }.bind(this))
        }
      }).m_name = "WNewMing3", b = l)) || b);
      n._RF.pop()
    }
  }
}));