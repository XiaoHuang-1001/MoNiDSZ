System.register("chunks:///_virtual/Wshangzhan4.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, n, e, o, i, h, r, g, l, a;
  return {
    setters: [function(t) {
      s = t.cclegacy, n = t._decorator, e = t.js
    }, function(t) {
      o = t.ZGGSOfficeFx, i = t.gs_boss, h = t.gs_sql, r = t.gs_phone, g = t.gs_btxt, l = t.gs_computer, a = t.gs_bmsg
    }],
    execute: function() {
      var c, u;
      s._RF.push({}, "8fa3erzBl1GIYXsmquOUVWn", "Wshangzhan4", void 0);
      const {
        ccclass: d,
        property: b
      } = n;
      t("Wshangzhan4", d("Wshangzhan4")(((u = class t extends o {
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
          this.gsTxtStrbyNums("node_Info4/node_Info1/lay/YMLabel", 4, `${t.num}`, this.bdog);
          let s = t.roleInfo,
            n = [];
          for (let t = 0; t < 3; t++) {
            let o = this.content.children[t],
              i = s[t];
            if (o.active = i, i) {
              n.push(i.id);
              const t = h.findObjById("workInfo1", i.id),
                s = r.returnOneAttr(t.id);
              this.gsWorkPic(o, t), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, s.pot, o), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, s.amb, o);
              let a = i.sxinfo,
                c = g.gsStringHelpIn(104),
                u = e.formatStr(c[a[0]], l.gsNumValueShow(a[1]));
              this.gsTxtStrbyStrs("lbl_info6/YMLabel2", 4, u, o)
            }
          }
          this.duisNode = t.curNode;
          let o = () => {
            a.send(2302, {
              id: n[0],
              roleArr: n,
              face: 304
            }), this.pohuiPage()
          };
          this.gsButtongbs("btn_2", o, this.bdog), this.gsButtongbs("YMSpriteSplash", o)
        }
      }).m_name = "Wshangzhan4", c = u)) || c);
      s._RF.pop()
    }
  }
}));