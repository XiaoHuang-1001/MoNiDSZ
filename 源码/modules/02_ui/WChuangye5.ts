System.register("chunks:///_virtual/WChuangye5.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, n, e, o, a, i;
  return {
    setters: [function(t) {
      s = t.cclegacy, n = t._decorator
    }, function(t) {
      e = t.ZGGSOfficeFx, o = t.gs_boss, a = t.gs_tabpr, i = t.gs_computer
    }],
    execute: function() {
      var c, h;
      s._RF.push({}, "6a609XbqUBNA4hC3PomK6gt", "WChuangye5", void 0);
      const {
        ccclass: l,
        property: r
      } = n;
      t("WChuangye5", l("WChuangye5")(((h = class t extends e {
        constructor(...t) {
          super(...t), this.top = null, this.content = null
        }
        xiabanye() {
          o.bossDieWin(t, 1)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.content = this.zgNodegzt("sw1/view/content", this.top)
        }
        init(t) {
          this.showWChuangye5(t)
        }
        showWChuangye5(t) {
          let s = t.chuangyeInfo_s,
            n = a.co_industry_company.zgTableKey(s.tabId),
            e = a.co_staff_company.zgTableKey(s.lv),
            o = a.co_staff_company.zgTableKey(s.lv + 1);
          a.co_staff_company.zgTableKey(s.lv + 2);
          this.gsTxtStrbyStrs("node_Info0/YMLabel1", 32, n.name, this.content), this.gsTxtStrbyStrs("node_Info1/lay/YMLabel1", 28, e.company, this.content), this.gsTxtLblgs("node_Info1/lay/YMLabel2", o.company, this.content);
          let c = i.sjNumArrgs2(o.number1, o.number2, 1)[0];
          this.gsTxtStrbyNums("node_Info2/lay/YMLabel1", 29, s.renshu, this.content), this.gsTxtStrbyNums("node_Info2/lay/YMLabel2", 304, c, this.content);
          let h = i.sjNumArrgs2(o.income1, o.income2, 1)[0];
          this.gsTxtStrbyNums("node_Info3/lay/YMLabel1", 30, s.income, this.content), this.gsTxtStrbyNums("node_Info3/lay/YMLabel2", 4, h, this.content);
          let l = i.sjNumArrgs2(o.cash1, o.cash2, 1)[0];
          this.gsTxtStrbyNums("node_Info4/lay/YMLabel1", 31, s.xjl, this.content), this.gsTxtStrbyNums("node_Info4/lay/YMLabel2", 4, l, this.content), this.gsTxtStrbyNums("node_Info5/YMLabel1", 33, o.award, this.content), s.lv = o.id, s.renshu = c, s.income = h, s.xjl = l, s.hb = s.hb + s.bMoney * o.award;
          let r = !1;
          if (8 == o.id) {
            let t = i.sjNumArrgs2(1, 100, 1)[0];
            console.log("上市概率", t), t <= 50 && (s.ss = 1, r = !0)
          }
          this.zgNodegzt("node_Info6", this.content).active = r, this.gsButtongbs("btn_2", (() => {
            this.xiabanye(), t._func()
          }), this.top)
        }
      }).m_name = "WChuangye5", c = h)) || c);
      s._RF.pop()
    }
  }
}));