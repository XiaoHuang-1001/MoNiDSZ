System.register("chunks:///_virtual/WShangyetp2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, e, n, o, i, g, r, c, h, l;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator, n = t.js
    }, function(t) {
      o = t.ZGGSOfficeFx, i = t.gs_boss, g = t.gs_sql, r = t.gs_phone, c = t.gs_btxt, h = t.gs_computer, l = t.gs_bmsg
    }],
    execute: function() {
      var d, a;
      s._RF.push({}, "d3595PIsYxAq4Xm5+S0bBBk", "WShangyetp2", void 0);
      const {
        ccclass: u,
        property: f
      } = e;
      t("WShangyetp2", u("WShangyetp2")(((a = class t extends o {
        constructor(...t) {
          super(...t), this.bdog = null, this.content = null, this.duisNode = null
        }
        pohuiPage() {
          i.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.content = this.zgNodegzt("content", this.bdog)
        }
        init(t) {
          let s = t.award,
            e = t.num,
            o = this.zgNodegzt("node_Info4", this.bdog);
          this.gsNeedConfigs("node_Info2/lay", s, o), this.gsNeedConfigs("node_Info1/lay", [4, e], o);
          let i = t.roleInfo,
            d = [];
          for (let t = 0; t < 3; t++) {
            let s = this.content.children[t],
              e = i[t];
            if (s.active = e, e) {
              d.push(e.id);
              const t = g.findObjById("workInfo1", e.id),
                o = r.returnOneAttr(t.id);
              this.gsWorkPic(s, t), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, o.pot, s), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, o.amb, s);
              let i = e.sxinfo,
                l = c.gsStringHelpIn(104),
                a = n.formatStr(l[i[0]], h.gsNumValueShow(i[1]));
              this.gsTxtStrbyStrs("lbl_info6/YMLabel2", 4, a, s)
            }
          }
          g.companyInfo.sytp += 1;
          this.gsButtongbs("btn_2", (() => {
            l.send(211, s[0], {}), l.send(2302, {
              id: d[0],
              roleArr: d,
              face: 311
            }), this.pohuiPage()
          }), this.bdog)
        }
      }).m_name = "WShangyetp2", d = a)) || d);
      s._RF.pop()
    }
  }
}));