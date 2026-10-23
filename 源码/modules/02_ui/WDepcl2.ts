System.register("chunks:///_virtual/WDepcl2.ts", ["cc", "./ZGGSOfficeFx.ts", "./blController.ts"], (function(t) {
  "use strict";
  var s, e, l, i, n, o, c, g, d, r;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator, l = t.js
    }, function(t) {
      i = t.ZGGSOfficeFx, n = t.gs_boss, o = t.gs_bmsg, c = t.gs_tabpr, g = t.gs_btxt, d = t.gs_sql
    }, function(t) {
      r = t.blController
    }],
    execute: function() {
      var b, h;
      s._RF.push({}, "ed77f4MwL5PUqEfjUS4DXYk", "WDepcl2", void 0);
      const {
        ccclass: _,
        property: a
      } = e;
      t("WDepcl2", _("WDepcl2")(((h = class t extends i {
        constructor(...t) {
          super(...t), this.bdog = null, this.co_dep_t_ll = null
        }
        pohuiPage() {
          n.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsButtongbs("btn_1", function() {
            let t = this.co_dep_t_ll[1].id;
            t || (t = this.co_dep_t_ll[0].id), o.send(2002), o.send(2303, {
              id: t
            }), this.pohuiPage()
          }.bind(this), this.bdog)
        }
        init(t) {
          const s = c.co_dep.zgTableKey(t.depId),
            e = c.co_dep.objs[t.depId];
          this.co_dep_t_ll = e;
          let i = g.gsStringByTwo(103);
          i = l.formatStr(i, s.name, e[0].set[1]), this.gsTxtLblgs("lbl_info1/YMLabel1", i, this.bdog);
          let n = this.zgNodegzt("lay", this.bdog);
          for (let t = 0; t < n.children.length; t++) {
            let s = n.children[t];
            const l = e[t];
            if (s && (s.active = l, l)) {
              let t = l.name;
              l.name.length > 4 && (t = l.name.slice(0, 2) + "\n" + l.name.slice(2, l.name.length)), this.gsTxtLblgs("YMLabel1", t, s);
              const e = d.findObjById("combmInfo", l.id);
              this.gsTxtStrbyNums("lbl_info1/YMLabel1", 105, e.workArr.length, s), this.gsTxtLblgs("lbl_info2/show/YMLabel2", "+" + l.power, s);
              let i = `${l.id}aa`;
              l.step >= 5 && (i = `${l.higher_id}aa`), this.gsSprstHtByUIs("lbl_info3/icon", i, s), this.gsSprstHtByUIs("lbl_info3", `zpz0${l.step}`, s), r.bumenSend(l.id)
            }
          }
        }
      }).m_name = "WDepcl2", b = h)) || b);
      s._RF.pop()
    }
  }
}));