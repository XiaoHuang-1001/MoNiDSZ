System.register("chunks:///_virtual/WLizhi2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, i, e, o, n, b, l;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator
    }, function(t) {
      e = t.ZGGSOfficeFx, o = t.gs_boss, n = t.gs_sql, b = t.gs_phone, l = t.gs_tabpr
    }],
    execute: function() {
      var r, a;
      s._RF.push({}, "c9be6YEnh5MnYxhNFe+zpvw", "WLizhi2", void 0);
      const {
        ccclass: h,
        property: g
      } = i;
      t("WLizhi2", h("WLizhi2")(((a = class t extends e {
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
          this.showWLizhi2(t)
        }
        showWLizhi2(t) {
          let s = n.findObjById("workInfo1", t.id);
          this.gsTxtStrbyStrs("lbl_info5/YMLabel1", 16, s.name, this.bdog);
          let i = this.zgNodegzt("spr1", this.bdog);
          this.gsWorkPic(i, s);
          let e = b.returnOneAttr(s.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, e.pot, i), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, e.amb, i);
          let o = this.zgNodegzt("Node1", this.bdog),
            r = this.zgNodegzt("Node2", this.bdog),
            a = e.salary;
          this.gsTxtStrbyNums("lbl_info4/YMLabel2", 101, e.salary, o), this.gsTxtStrbyNums("lbl_info6/YMLabel2", 102, e.earn, o), a = Math.ceil(.2 * a), a < 1 && (a = 1), s.qianAdd += a;
          let h = l.co_job.zgTableKey(s.jobId),
            g = Math.ceil(.01 * h.get_money);
          g < 1 && (g = 1), s.makeAdd += g, b.countSalary(s.id), b.countEarn(s.id), e = b.returnOneAttr(s.id), this.gsTxtStrbyNums("lbl_info4/YMLabel2", 101, e.salary, r), this.gsTxtStrbyNums("lbl_info6/YMLabel2", 102, e.earn, r), this.gsButtongbs("btn_2", (() => {
            t._func(), this.xiabanye()
          }), this.bdog)
        }
      }).m_name = "WLizhi2", r = a)) || r);
      s._RF.pop()
    }
  }
}));