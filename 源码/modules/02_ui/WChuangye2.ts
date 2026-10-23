System.register("chunks:///_virtual/WChuangye2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, e, n, o, a, i, r, h;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, a = t.gs_tabpr, i = t.gs_phone, r = t.gs_computer, h = t.gs_sql
    }],
    execute: function() {
      var c, g;
      s._RF.push({}, "b3da8T9jo1AZ7rCbWj+bBeE", "WChuangye2", void 0);
      const {
        ccclass: u,
        property: l
      } = e;
      t("WChuangye2", u("WChuangye2")(((g = class t extends n {
        constructor(...t) {
          super(...t), this.top = null, this.co_industry_company_ttt = null
        }
        xiabanye() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.co_industry_company_ttt = a.co_industry_company.objs, this.top = this.zgNodegzt("top")
        }
        init(t) {
          this.showWChuangye2(t)
        }
        showWChuangye2(t) {
          let s = t.workInfo1_s,
            e = i.returnOneAttr(s.id),
            n = t.co_industry_t,
            o = a.co_staff_company.zgTableKey(1),
            c = this.co_industry_company_ttt[n.id],
            g = this.zgNodegzt("icon_layout", this.top),
            u = this.zgNodegzt("spr", this.top);
          this.gsTxtStrbyStrs("lbl_info2/YMLabel1", 25, s.name, this.top), this.gsSprHtsst("icon", s.sprId, u), this.gsTxtLblgs("node_2/YMLabel1", s.name, u);
          let l = a.co_post.zgTableKey(100100);
          this.gsTxtGradelbl("node_3/YMLabel2", l.grade, l.name, g);
          let b = r.sjNumArrgs2(o.cash1, o.cash2, 1)[0];
          this.gsTxtStrbyNums("node_4/YMLabel2", 4, b, g);
          let _ = r.sjNumArrgs2(o.income1, o.income2, 1)[0];
          this.gsTxtStrbyNums("node_11/YMLabel2", 4, _, g);
          let d = r.sjNumArrgs2(o.number1, o.number2, 1)[0];
          this.gsTxtStrbyNums("node_5/YMLabel2", 4, d, g), this.gsTxtLblgs("node_14/YMLabel2", n.name, g);
          let m = [],
            y = h.saveCName.objs[n.id] || [];
          for (let t = 0; t < c.length; t++) {
            let s = c[t]; - 1 == y.indexOf(s.id) && m.push(s)
          }
          m.length <= 0 && (y = [], m = c);
          let p = m[r.sjNumArrgs2(0, m.length - 1, 1)[0]];
          y.push(p.id), h.saveCName.objs[n.id] = y, this.gsTxtLblgs("node_12/YMLabel2", p.name, g);
          let f = h.createNewObj("chuangyeInfo", p.id);
          f.name = s.name, f.sprId = s.sprId, f.renshu = d, f.income = _, f.xjl = b, f.CName = p.name, f.month = 6, f.bMoney = e.salary, f.hb = 5 * f.bMoney, this.gsButtongbs("btn_2", (() => {
            this.xiabanye(), t._func()
          }), this.top)
        }
      }).m_name = "WChuangye2", c = g)) || c);
      s._RF.pop()
    }
  }
}));