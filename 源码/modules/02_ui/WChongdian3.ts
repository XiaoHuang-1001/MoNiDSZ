System.register("chunks:///_virtual/WChongdian3.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var n, s, i, e, o;
  return {
    setters: [function(t) {
      n = t.cclegacy, s = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, e = t.gs_boss, o = t.gs_phone
    }],
    execute: function() {
      var h, a;
      n._RF.push({}, "9f994cuLwJIm5/weIaZ/jvT", "WChongdian3", void 0);
      const {
        ccclass: c,
        property: r
      } = s;
      t("WChongdian3", c("WChongdian3")(((a = class t extends i {
        constructor(...t) {
          super(...t), this.fanghe = null, this.content = null, this.item = null
        }
        xiabanye() {
          e.bossDieWin(t, 2)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.content = this.zgNodegzt("content", this.fanghe), this.item = this.zgNodegzt("spr1", this.content)
        }
        init(t) {
          this.showWDaoshidianbo2(t)
        }
        showWDaoshidianbo2(t) {
          let n = t.workInfo1_s,
            s = this.item;
          this.gsWorkPic(s, n);
          let i = o.returnOneAttr(n.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, i.pot, s), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, i.amb, s), this.gsTxtStrbyNums("lbl_info4/YMLabel2", 102, t.earn, s), n.makeAdd += t.earn, o.countEarn(n.id), this.gsButtongbs("btn_2", (() => {
            t._func(), this.xiabanye()
          }), this.fanghe)
        }
      }).m_name = "WChongdian3", h = a)) || h);
      n._RF.pop()
    }
  }
}));