System.register("chunks:///_virtual/WShenqing2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var e, s, n, i, h;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, i = t.gs_boss, h = t.gs_phone
    }],
    execute: function() {
      var a, l;
      e._RF.push({}, "a8961bNndBBHLJbFw9h+8mH", "WShenqing2", void 0);
      const {
        ccclass: r,
        property: g
      } = s;
      t("WShenqing2", r("WShenqing2")(((l = class t extends n {
        constructor(...t) {
          super(...t), this.fanghe = null, this.item = null
        }
        xiabanye() {
          i.bossDieWin(t, 2)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.item = this.zgNodegzt("spr1", this.fanghe)
        }
        init(t) {
          this.showWShenqing2(t)
        }
        showWShenqing2(t) {
          let e = t.arrRen[0],
            s = t.co_raise_t;
          this.gsTxtLblgs("lbl_info2/YMLabel1", s.des1, this.fanghe);
          let n = s.des2;
          n = n.replace("x%", e.name), this.gsTxtLblgs("lbl_info5/YMLabel1", n, this.fanghe), this.bindRen(this.item, e), this.gsButtongbs("btn_2", (() => {
            this.xiabanye(), t._func()
          }), this.fanghe);
          let i = h.returnOneAttr(e.id),
            a = this.zgNodegzt("Node1", this.fanghe);
          this.gsTxtStrbyNums("lbl_info4/YMLabel2", 101, i.salary, a), this.gsTxtStrbyNums("lbl_info6/YMLabel2", 102, i.earn, a), e.qianAdd += s.value1, e.makeAdd += s.value2, h.countSalary(e.id), h.countEarn(e.id), i = h.returnOneAttr(e.id);
          let l = this.zgNodegzt("Node2", this.fanghe);
          this.gsTxtStrbyNums("lbl_info4/YMLabel2", 101, i.salary, l), this.gsTxtStrbyNums("lbl_info6/YMLabel2", 102, i.earn, l)
        }
        bindRen(t, e) {
          this.gsWorkPic(t, e);
          let s = h.returnOneAttr(e.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, s.pot, t), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, s.amb, t)
        }
      }).m_name = "WShenqing2", a = l)) || a);
      e._RF.pop()
    }
  }
}));