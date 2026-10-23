System.register("chunks:///_virtual/WLizhi3.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, i, e, o, n, r;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator
    }, function(t) {
      e = t.ZGGSOfficeFx, o = t.gs_boss, n = t.gs_sql, r = t.gs_phone
    }],
    execute: function() {
      var h, b;
      s._RF.push({}, "494a3MrGlxPbbGKnpYWRNfS", "WLizhi3", void 0);
      const {
        ccclass: c,
        property: l
      } = i;
      t("WLizhi3", c("WLizhi3")(((b = class t extends e {
        constructor(...t) {
          super(...t), this.bdog = null
        }
        xiabanye() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top")
        }
        init(t) {
          this.showWLizhi3(t)
        }
        showWLizhi3(t) {
          let s = n.findObjById("workInfo1", t.id);
          this.gsTxtStrbyStrs("lbl_info4/YMLabel1", 17, s.name, this.bdog);
          let i = this.zgNodegzt("spr1", this.bdog);
          this.gsWorkPic(i, s);
          let e = r.returnOneAttr(s.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, e.pot, i), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, e.amb, i), this.gsButtongbs("btn_2", (() => {
            t._func(), this.xiabanye()
          }), this.bdog)
        }
      }).m_name = "WLizhi3", h = b)) || h);
      s._RF.pop()
    }
  }
}));