System.register("chunks:///_virtual/Wshangzhan3.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, n, e, o, i, g, a, c, h, l, r, d;
  return {
    setters: [function(t) {
      s = t.cclegacy, n = t._decorator, e = t.js
    }, function(t) {
      o = t.ZGGSOfficeFx, i = t.gs_boss, g = t.gs_tabpr, a = t.gs_sql, c = t.gs_phone, h = t.gs_btxt, l = t.gs_computer, r = t.gs_bmsg
    }, function(t) {
      d = t.minFunc
    }],
    execute: function() {
      var u, b;
      s._RF.push({}, "3b8deGFbHBPOLso3NaxGyMP", "Wshangzhan3", void 0);
      const {
        ccclass: f,
        property: _
      } = n;
      t("Wshangzhan3", f("Wshangzhan3")(((b = class t extends o {
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
          const s = t.info;
          let n = {
            data_t: s
          };
          d.activityComplete(5, n);
          let o = this.zgNodegzt("node_Info4", this.bdog);
          this.gsNeedConfigs("node_Info2/lay", s.award, o), this.gsNeedConfigs("node_Info1/lay", [4, s.power], o);
          const i = g.co_check.zgTableKey(s.check_id);
          this.zgNodegzt("node_Info3", o).active = i, i && this.gsTxtLblgs("node_Info3/lay/YMLabel", i.name2, o);
          let u = t.roleInfo,
            b = [];
          for (let t = 0; t < 3; t++) {
            let s = this.content.children[t],
              n = u[t];
            if (s.active = n, n) {
              b.push(n.id);
              const t = a.findObjById("workInfo1", n.id),
                o = c.returnOneAttr(t.id);
              this.gsWorkPic(s, t), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, o.pot, s), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, o.amb, s);
              let i = n.sxinfo,
                g = h.gsStringHelpIn(104),
                r = e.formatStr(g[i[0]], l.gsNumValueShow(i[1]));
              this.gsTxtStrbyStrs("lbl_info6/YMLabel2", 4, r, s)
            }
          }
          this.duisNode = t.curNode;
          let f = () => {
            r.send(211, s.award[0], {}), r.send(2302, {
              id: b[0],
              roleArr: b,
              face: 311
            }), this.pohuiPage()
          };
          this.gsButtongbs("btn_2", f, this.bdog), this.gsButtongbs("YMSpriteSplash", f)
        }
      }).m_name = "Wshangzhan3", u = b)) || u);
      s._RF.pop()
    }
  }
}));