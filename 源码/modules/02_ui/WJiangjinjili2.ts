System.register("chunks:///_virtual/WJiangjinjili2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(i) {
  "use strict";
  var t, s, n, e, l, a;
  return {
    setters: [function(i) {
      t = i.cclegacy, s = i._decorator
    }, function(i) {
      n = i.ZGGSOfficeFx, e = i.gs_boss, l = i.gs_phone, a = i.gs_tabpr
    }],
    execute: function() {
      var h, o;
      t._RF.push({}, "5f443u945JAHLxggDDzZqY4", "WJiangjinjili2", void 0);
      const {
        ccclass: g,
        property: r
      } = s;
      i("WJiangjinjili2", g("WJiangjinjili2")(((o = class i extends n {
        constructor(...i) {
          super(...i), this.fanghe = null, this.mainCt = null, this.lay = null, this.item = null
        }
        xiabanye() {
          e.bossDieWin(i, 2)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.lay = this.zgNodegzt("lay", this.fanghe), this.mainCt = this.zgNodegzt("sw1/view/content", this.fanghe), this.item = this.zgNodegzt("spr1", this.mainCt)
        }
        init(i) {
          this.showWJiangjinjili2(i)
        }
        showWJiangjinjili2(i) {
          let t = i.arrRen,
            s = i.co_inspire_t;
          this.gsTxtLblgs("lbl_info2/YMLabel1", s.des1, this.lay), this.gsTxtLblgs("lbl_info3/YMLabel1", s.des2, this.lay);
          for (let i = 0; i < t.length; i++) {
            let n = t[i],
              e = this.mainCt.children[i];
            e.active = !0, this.bindRen(e, n, s)
          }
          this.gsButtongbs("btn_2", (() => {
            this.xiabanye(), i._func()
          }), this.fanghe)
        }
        bindRen(i, t, s) {
          this.gsWorkPic(i, t);
          let n = l.returnOneAttr(t.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, n.pot, i), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, n.amb, i);
          let e = n.earn;
          this.gsTxtStrbyNums("lbl_info6/YMLabel2", 102, e, i);
          let h = a.co_job.zgTableKey(t.jobId),
            o = Math.floor(h.get_money * s.value);
          o <= 1 && (o = 1), t.makeAdd += o, l.countEarn(t.id), this.gsTxtStrbyNums("lbl_info7/YMLabel2", 102, o, i)
        }
      }).m_name = "WJiangjinjili2", h = o)) || h);
      t._RF.pop()
    }
  }
}));