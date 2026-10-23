System.register("chunks:///_virtual/WXinxi.ts", ["cc", "./ZGGSOfficeFx.ts", "./CurListView.ts"], (function(t) {
  "use strict";
  var s, n, e, o, i, c, h, g, l;
  return {
    setters: [function(t) {
      s = t.cclegacy, n = t._decorator
    }, function(t) {
      e = t.ZGGSOfficeFx, o = t.gs_bmsg, i = t.gs_boss, c = t.gs_computer, h = t.gs_sql, g = t.gs_tabpr
    }, function(t) {
      l = t.CurListView
    }],
    execute: function() {
      var a, r;
      s._RF.push({}, "c0de4w2v+9A/qkTqravxTeD", "WXinxi", void 0);
      const {
        ccclass: b,
        property: d
      } = n;
      t("WXinxi", b("WXinxi")(((r = class t extends e {
        constructor(...t) {
          super(...t), this.hezi = null, this.svCtl1 = null, this.content = null
        }
        pohuiPage() {
          o.send(2100, !1), i.bossDieWin(t, 2)
        }
        load() {
          this.hezi = this.zgNodegzt("top"), this.svCtl1 = this.zgNodegzt("sw1").getComponent(l), this.content = this.zgNodegzt("sw1/view/content"), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.hezi)
        }
        init() {
          o.send(2100, !0), this.showInfo(), this.yuangong(), this.bindPage()
        }
        showInfo() {
          let t = [1, Math.ceil(c.getAllEarn())];
          this.gsNeedConfigs("node_4/lay", t, this.content);
          let s = h.base.pingfen;
          this.gsTxtLblgs("node_3/YMLabel2", s, this.content);
          let n = [1, c.zongxinshui()];
          this.gsTxtLblgs("node_5/lay/YMLabel", c.gsNumValueShow(n[1]), this.content);
          let e = c.gsAllNumGet();
          this.gsTxtLblgs("node_2/YMLabel2", e, this.content)
        }
        yuangong() {
          let t = {
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0
            },
            s = h.workInfo1.objs;
          for (let n in s) {
            let e = s[n];
            if (e.id > 1) {
              t[g.co_job.zgTableKey(e.jobId).step] += 1
            }
          }
          for (let s = 1; s < 8; s++) {
            let n = this.zgNodegzt(`node_ren${s}`, this.content);
            this.gsTxtStrbyNums("YMLabel2", 304, t[s], n)
          }
        }
        bindPage() {
          let t = h.peixunInfo.order,
            s = h.companyInfo.jili,
            n = h.companyInfo.xiyan,
            e = h.companyInfo.wczc,
            o = h.companyInfo.gwtz,
            i = h.companyInfo.tj,
            c = h.companyInfo.swjd,
            g = h.companyInfo.wccc,
            l = h.companyInfo.szy,
            a = h.companyInfo.wcsz,
            r = h.companyInfo.sytp;
          this.gsTxtStrbyStrs("node_13/YMLabel2", 309, t, this.content), this.gsTxtStrbyStrs("node_14/YMLabel2", 308, s, this.content), this.gsTxtStrbyStrs("node_15/YMLabel2", 308, n, this.content), this.gsTxtStrbyStrs("node_22/YMLabel2", 308, e, this.content), this.gsTxtStrbyStrs("node_20/YMLabel2", 308, o, this.content), this.gsTxtStrbyStrs("node_16/YMLabel2", 308, c, this.content), this.gsTxtStrbyStrs("node_17/YMLabel2", 308, g, this.content), this.gsTxtStrbyStrs("node_18/YMLabel2", 308, l, this.content), this.gsTxtStrbyStrs("node_19/YMLabel2", 308, a, this.content), this.gsTxtStrbyStrs("node_21/YMLabel2", 308, r, this.content), this.gsTxtStrbyStrs("node_23/YMLabel2", 308, i, this.content)
        }
      }).m_name = "WXinxi", a = r)) || a);
      s._RF.pop()
    }
  }
}));