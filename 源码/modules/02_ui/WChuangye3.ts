System.register("chunks:///_virtual/WChuangye3.ts", ["cc", "./ZGGSOfficeFx.ts", "./CurListView.ts"], (function(s) {
  "use strict";
  var t, e, i, n, l, b, g, o, a, h;
  return {
    setters: [function(s) {
      t = s.cclegacy, e = s._decorator
    }, function(s) {
      i = s.ZGGSOfficeFx, n = s.gs_bmsg, l = s.gs_boss, b = s.gs_btxt, g = s.gs_sql, o = s.gs_tabpr, a = s.gs_computer
    }, function(s) {
      h = s.CurListView
    }],
    execute: function() {
      var u, c;
      t._RF.push({}, "ad35aMsTvlBHLeWsjXlWlj8", "WChuangye3", void 0);
      const {
        ccclass: r,
        property: y
      } = e;
      s("WChuangye3", r("WChuangye3")(((c = class s extends i {
        constructor(...s) {
          super(...s), this.svCtl = null, this.ssDes = null
        }
        xiabanye() {
          n.send(2100, !1), l.bossDieWin(s, 2)
        }
        load() {
          this.ssDes = b.gsStringHelpIn(13), this.svCtl = this.zgNodegzt("top/sw1").getComponent(h), this.gsButtongbs("top/guanbi", (() => {
            this.xiabanye()
          })), this.gsButtongbs("YMSpriteSplash", (() => {
            this.xiabanye()
          }))
        }
        init() {
          n.send(2100, !0), this.showWChuangye3()
        }
        showWChuangye3() {
          let s = [],
            t = g.chuangyeInfo.objs;
          for (let e in t) {
            let i = t[e],
              n = {
                chuangyeInfo_s: t[e],
                new: i.new
              };
            i.new = 1, s.push(n)
          }
          this.svCtl.init(s, function(s, t, e) {
            this.bindTips(s, t, e)
          }.bind(this)), this.zgNodegzt("top/lbl_info2").active = 0 == s.length
        }
        bindTips(s, t, e) {
          let i = t.chuangyeInfo_s,
            l = o.co_staff_company.zgTableKey(i.lv),
            b = o.co_post.zgTableKey(100100),
            g = o.co_industry_company.zgTableKey(i.tabId),
            h = o.co_industry.zgTableKey(g.industry_id);
          this.gsSprstHtByUIs("yuan", "gsy06", s), this.gsSprHtsst("icon", i.sprId, s), this.gsTxtLblgs("node_2/YMLabel1", i.name, s), this.gsTxtLblgs("node_1/YMLabel1", i.CName, s), this.gsTxtLblgs("lbl_info1/YMLabel2", l.company, s), this.gsTxtGradelbl("lbl_info2/YMLabel2", b.grade, b.name, s), this.gsTxtLblgs("lbl_info3/YMLabel2", h.name, s), this.gsTxtStrbyNums("lbl_info4/YMLabel2", 4, i.renshu, s), this.gsTxtLblgs("lbl_info8/YMLabel1", this.ssDes[i.ss], s), this.gsTxtStrbyNums("lbl_info7/YMLabel2", 4, i.income, s), this.gsTxtStrbyNums("lbl_info5/YMLabel2", 4, i.xjl, s), this.gsTxtStrbyNums("lbl_info6/YMLabel2", 4, i.hb, s), this.zgNodegzt("btn_yes", s).active = i.ljhb > 0, this.zgNodegzt("lbl_info9", s).active = i.ljhb > 0, this.zgNodegzt("lbl_info10", s).active = i.ljhb <= 0, this.gsTxtStrbyNums("lbl_info10/YMLabel1", 26, i.month, s), this.gsTxtStrbyNums("lbl_info9/lay/YMLabel", 4, i.ljhb, s), this.zgNodegzt("lbl_info", s).active = !t.new, this.gsButtongbs("btn_yes", (() => {
            let l = [1, i.ljhb];
            a.getNeedTabgs(l, null, 14), n.send(211, l[0], {}), i.ljhb = 0, this.bindTips(s, t, e)
          }), s)
        }
      }).m_name = "WChuangye3", u = c)) || u);
      t._RF.pop()
    }
  }
}));