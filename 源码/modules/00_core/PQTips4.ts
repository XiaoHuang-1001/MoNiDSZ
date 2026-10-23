System.register("chunks:///_virtual/PQTips4.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSLayoutlist.ts"], (function(t) {
  "use strict";
  var e, s, i, n, o, r, a, p, d, c, h, u, g;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator, i = t.js, n = t.UITransform, o = t.find, r = t.v3
    }, function(t) {
      a = t.ZGGSOfficeFx, p = t.gs_boss, d = t.gs_phone, c = t.gs_btxt, h = t.gs_computer, u = t.gs_sql
    }, function(t) {
      g = t.ZGGSLayoutlist
    }],
    execute: function() {
      var l, _;
      e._RF.push({}, "9b15a1MyDNHr4w0OW+IDPSr", "PQTips4", void 0);
      const {
        ccclass: m,
        property: f
      } = s;
      t("PQTips4", m("PQTips4")(((_ = class t extends a {
        constructor(...t) {
          super(...t), this._ui = null, this.uiLay = null
        }
        xiabanye() {
          p.bossDieWin(t, 2)
        }
        load() {
          this._ui = this.zgNodegzt("spr1"), this.uiLay = this._ui.getComponent(g), this.gsButtongbs("spr_bg", (() => {
            this.xiabanye()
          }))
        }
        init(t) {
          this.showPQTips4(t)
        }
        showPQTips4(t) {
          let e = t.workInfo1_s,
            s = d.returnOneAttr(e.id),
            a = c.gsStringHelpIn(7)[t.type];
          if (1 == t.type) {
            let t = a.des1,
              e = a.des2,
              n = h.binarySearch("co_pot", "pot1", "pot2", s.pot);
            e = i.formatStr(e, s.pot, n.get_money);
            let o = t + "\n" + e;
            this.gsTxtLblgs("YMLabel0", o, this._ui)
          } else if (2 == t.type) {
            let t = a.des1,
              n = a.des2,
              o = h.binarySearch("co_amb", "amb1", "amb2", s.amb);
            n = i.formatStr(n, s.amb, o.exp);
            let r = "",
              p = c.gsStringHelpIn(8);
            if (1002 == e.depId) r = i.formatStr(p[2], o.get_money_add2 / 100);
            else if (1003 == e.depId) r = i.formatStr(p[3], o.get_money_add3 / 100);
            else if (1 == e.id);
            else {
              u.findObjById("combmInfo", e.depId).workId == e.id && (r = i.formatStr(p[1], o.get_money_add1 / 100))
            }
            let d = t + "\n" + n;
            r.length > 0 && (d += "\n" + r), this.gsTxtLblgs("YMLabel0", d, this._ui)
          }
          this.uiLay.updateLayout(), this.scheduleOnce((() => {
            let e = t.node,
              s = e.getComponent(n).contentSize,
              i = o("Canvas").getComponent(n).contentSize,
              a = this._ui.getComponent(n).contentSize,
              p = e.getComponent(n).convertToWorldSpaceAR(r(0, 0, 0)),
              d = p.x - i.width / 2,
              c = p.y - i.height / 2 - s.height / 2;
            if (d + a.width / 2 > i.width / 2) {
              d -= d + a.width / 2 - i.width / 2 + 20
            }
            this._ui.setPosition(d, c, 0)
          }), 0)
        }
      }).m_name = "PQTips4", l = _)) || l);
      e._RF.pop()
    }
  }
}));