System.register("chunks:///_virtual/WShangyetp3.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, e, n, o, i, g, r, l, c, h;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator, n = t.js
    }, function(t) {
      o = t.ZGGSOfficeFx, i = t.gs_boss, g = t.gs_sql, r = t.gs_phone, l = t.gs_btxt, c = t.gs_computer, h = t.gs_bmsg
    }],
    execute: function() {
      var u, a;
      s._RF.push({}, "511feuu/9FGarXzwnPRpqM5", "WShangyetp3", void 0);
      const {
        ccclass: d,
        property: f
      } = e;
      t("WShangyetp3", d("WShangyetp3")(((a = class t extends o {
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
          let s = t.num;
          console.log(s);
          let e = this.zgNodegzt("node_Info4", this.bdog);
          this.gsNeedConfigs("node_Info1/lay", [4, s], e);
          let o = t.roleInfo,
            i = [];
          for (let t = 0; t < 3; t++) {
            let s = this.content.children[t],
              e = o[t];
            if (s.active = e, e) {
              i.push(e.id);
              const t = g.findObjById("workInfo1", e.id),
                o = r.returnOneAttr(t.id);
              this.gsWorkPic(s, t), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, o.pot, s), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, o.amb, s);
              let h = e.sxinfo,
                u = l.gsStringHelpIn(104),
                a = n.formatStr(u[h[0]], c.gsNumValueShow(h[1]));
              this.gsTxtStrbyStrs("lbl_info6/YMLabel2", 4, a, s)
            }
          }
          this.gsButtongbs("btn_2", (() => {
            h.send(2302, {
              id: i[0],
              roleArr: i,
              face: 304
            }), this.pohuiPage()
          }), this.bdog)
        }
      }).m_name = "WShangyetp3", u = a)) || u);
      s._RF.pop()
    }
  }
}));