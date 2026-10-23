System.register("chunks:///_virtual/WGangweitiaozheng2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, o, i, e, n, g;
  return {
    setters: [function(t) {
      s = t.cclegacy, o = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, e = t.gs_boss, n = t.gs_sql, g = t.gs_bmsg
    }],
    execute: function() {
      var a, r;
      s._RF.push({}, "c64dfknyaRC7Je9eF3Nf4iv", "WGangweitiaozheng2", void 0);
      const {
        ccclass: c,
        property: l
      } = o;
      t("WGangweitiaozheng2", c("WGangweitiaozheng2")(((r = class t extends i {
        constructor(...t) {
          super(...t), this.bdog = null
        }
        xiabanye() {
          e.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top")
        }
        init(t) {
          const s = t;
          console.log(s);
          let o = s.workId[1],
            i = s.oldInfo[1],
            e = s.oldNum[1],
            a = s.addArr[1],
            r = this.zgNodegzt("content2", this.bdog),
            c = this.zgNodegzt("spr1", r);
          this.gsWorkPic(c, i), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, e.pot, c), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, e.amb, c);
          let l = this.zgNodegzt("spr2", r);
          const b = n.findObjById("workInfo1", o);
          this.gsWorkPic(l, b), this.gsTxtStrbyNums("lbl_info2/YMLayout/YMLabel3", 4, a.pot, l), this.gsTxtStrbyNums("lbl_info3/YMLayout/YMLabel3", 4, a.amb, l), this.gsButtongbs("btn_2", (() => {
            g.send(2302, {
              id: s.workId[1],
              roleArr: [],
              face: 301
            }), this.xiabanye()
          }), this.bdog)
        }
      }).m_name = "WGangweitiaozheng2", a = r)) || a);
      s._RF.pop()
    }
  }
}));