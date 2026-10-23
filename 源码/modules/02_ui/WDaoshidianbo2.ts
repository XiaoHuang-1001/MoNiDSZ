System.register("chunks:///_virtual/WDaoshidianbo2.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSScrollviewsvi.ts"], (function(t) {
  "use strict";
  var s, i, n, e, o, h, a;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator, n = t.instantiate
    }, function(t) {
      e = t.ZGGSOfficeFx, o = t.gs_boss, h = t.gs_phone
    }, function(t) {
      a = t.ZGGSScrollviewsvi
    }],
    execute: function() {
      var l, c;
      s._RF.push({}, "ad0bavTbS1MkoOZld1VMEEF", "WDaoshidianbo2", void 0);
      const {
        ccclass: r,
        property: g
      } = i;
      t("WDaoshidianbo2", r("WDaoshidianbo2")(((c = class t extends e {
        constructor(...t) {
          super(...t), this.fanghe = null, this.swCom = null, this.mianCt = null, this.content = null, this.sw = null, this.item = null
        }
        xiabanye() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.sw = this.zgNodegzt("sw1", this.fanghe), this.swCom = this.sw.getComponent(a), this.mianCt = this.zgNodegzt("view/content", this.sw), this.content = this.zgNodegzt("content", this.fanghe), this.item = this.zgNodegzt("spr1", this.fanghe)
        }
        init(t) {
          this.showWDaoshidianbo2(t)
        }
        showWDaoshidianbo2(t) {
          let s = t.can;
          this.topDes(s);
          let i = [],
            e = this.content;
          s.length > 3 ? (this.swCom.scrollToLeft(), e = this.mianCt, this.sw.active = !0, this.content.active = !1) : (this.sw.active = !1, this.content.active = !0);
          let o = e.children;
          for (let t = 0; t < s.length; t++) {
            let a = o[t];
            a || (a = n(this.item), a.parent = e), a.active = !0;
            let l = s[t],
              c = l.workInfo1_s;
            this.gsWorkPic(a, c);
            let r = h.returnOneAttr(c.id);
            this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, r.pot, a), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, r.amb, a), this.gsTxtStrbyNums("lbl_info4/YMLabel2", 102, l.earn, a), i.push(c.id), c.makeAdd += l.earn, h.countEarn(c.id)
          }
          this.gsButtongbs("btn_2", (() => {
            t._func(i), this.xiabanye()
          }), this.fanghe)
        }
        topDes(t) {
          this.gsTxtStrbyNums("node_Info4/YMLabel1", 19, t.length, this.fanghe)
        }
      }).m_name = "WDaoshidianbo2", l = c)) || l);
      s._RF.pop()
    }
  }
}));