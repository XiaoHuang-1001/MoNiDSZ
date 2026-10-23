System.register("chunks:///_virtual/WChuangye4.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts", "./WChuangye5.ts"], (function(t) {
  "use strict";
  var s, n, e, o, i, a, h, c, g, l;
  return {
    setters: [function(t) {
      s = t.cclegacy, n = t._decorator
    }, function(t) {
      e = t.ZGGSOfficeFx, o = t.gs_bmsg, i = t.gs_boss, a = t.gs_tabpr, h = t.gs_computer, c = t.gs_www
    }, function(t) {
      g = t.minFunc
    }, function(t) {
      l = t.WChuangye5
    }],
    execute: function() {
      var y, u;
      s._RF.push({}, "35e4bIjYbpN/rv3P7RWaAdT", "WChuangye4", void 0);
      const {
        ccclass: b,
        property: r
      } = n;
      t("WChuangye4", b("WChuangye4")(((u = class t extends e {
        constructor(...t) {
          super(...t), this.top = null, this.content = null, this.lay1 = null, this.maidianGG1 = 17
        }
        xiabanye() {
          o.send(2300), i.bossDieWin(t, 1)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.content = this.zgNodegzt("sw1/view/content", this.top), this.lay1 = this.zgNodegzt("Layout", this.top)
        }
        init(t) {
          this.showWChuangye4(t)
        }
        showWChuangye4(t) {
          console.log(t);
          let s = t.chuangyeInfo_s,
            n = a.co_industry_company.zgTableKey(s.tabId),
            e = a.co_staff_company.zgTableKey(s.lv),
            o = a.co_staff_company.zgTableKey(s.lv + 1),
            y = a.co_staff_company.zgTableKey(s.lv + 2);
          this.gsTxtStrbyStrs("node_Info0/YMLabel1", 27, n.name, this.content), this.gsTxtStrbyStrs("node_Info1/lay/YMLabel1", 28, e.company, this.content), this.gsTxtLblgs("node_Info1/lay/YMLabel2", o.company, this.content);
          let u = h.sjNumArrgs2(o.number1, o.number2, 1)[0];
          this.gsTxtStrbyNums("node_Info2/lay/YMLabel1", 29, s.renshu, this.content), this.gsTxtStrbyNums("node_Info2/lay/YMLabel2", 304, u, this.content);
          let b = h.sjNumArrgs2(o.income1, o.income2, 1)[0];
          this.gsTxtStrbyNums("node_Info3/lay/YMLabel1", 30, s.income, this.content), this.gsTxtStrbyNums("node_Info3/lay/YMLabel2", 4, b, this.content);
          let r = h.sjNumArrgs2(o.cash1, o.cash2, 1)[0];
          this.gsTxtStrbyNums("node_Info4/lay/YMLabel1", 31, s.xjl, this.content), this.gsTxtStrbyNums("node_Info4/lay/YMLabel2", 4, r, this.content), s.lv = o.id, s.renshu = u, s.income = b, s.xjl = r, this.gsButtongbs("btn_2", (() => {
            this.xiabanye()
          }), this.lay1), this.zgNodegzt("btn_3", this.lay1).active = y, g.ggbtnPlay(this.zgNodegzt("btn_3", this.lay1), this.maidianGG1);
          let _ = !1;
          if (8 == o.id) {
            let t = h.sjNumArrgs2(1, 100, 1)[0];
            console.log("上市概率", t), t <= 50 && (s.ss = 1, _ = !0)
          }
          this.zgNodegzt("node_Info5", this.content).active = _, this.gsButtongbs("btn_3", (() => {
            c.GGShowVido(this.maidianGG1, (() => {
              let t = {
                chuangyeInfo_s: s,
                co_staff_company_next2: y,
                _func: () => {
                  this.xiabanye()
                }
              };
              i.bossWshow(l, t), this.node.active = !1
            }))
          }), this.lay1)
        }
      }).m_name = "WChuangye4", y = u)) || y);
      s._RF.pop()
    }
  }
}));