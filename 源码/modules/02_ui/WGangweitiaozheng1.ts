System.register("chunks:///_virtual/WGangweitiaozheng1.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
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
      s._RF.push({}, "e94b1mGiQ5BE6PT/OsLCLIt", "WGangweitiaozheng1", void 0);
      const {
        ccclass: c,
        property: l
      } = o;
      t("WGangweitiaozheng1", c("WGangweitiaozheng1")(((r = class t extends i {
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
          for (let t = 0; t < 2; t++) {
            let o = s.workId[t],
              i = s.oldInfo[t],
              e = s.oldNum[t],
              g = s.addArr[t],
              a = this.zgNodegzt(`content${t+1}`, this.bdog);
            if (!o) {
              a.active = !1;
              continue
            }
            let r = this.zgNodegzt("spr1", a);
            this.gsWorkPic(r, i), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, e.pot, r), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, e.amb, r);
            let c = this.zgNodegzt("spr2", a);
            const l = n.findObjById("workInfo1", o);
            this.gsWorkPic(c, l), this.gsTxtStrbyNums("lbl_info2/YMLayout/YMLabel3", 4, g.pot, c), this.gsTxtStrbyNums("lbl_info3/YMLayout/YMLabel3", 4, g.amb, c)
          }
          this.gsButtongbs("btn_2", (() => {
            g.send(2302, {
              id: s.workId[1],
              roleArr: [],
              face: 301
            }), this.xiabanye()
          }), this.bdog)
        }
      }).m_name = "WGangweitiaozheng1", a = r)) || a);
      s._RF.pop()
    }
  }
}));