System.register("chunks:///_virtual/PQTips3.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, i, e, o, n, r, h, g, l;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator, e = t.js, o = t.UITransform
    }, function(t) {
      n = t.ZGGSOfficeFx, r = t.gs_btxt, h = t.gs_boss, g = t.gs_tabpr, l = t.gs_computer
    }],
    execute: function() {
      var u, p;
      s._RF.push({}, "a9f5b+KGipC9KkxmvQKkOnH", "PQTips3", void 0);
      const {
        ccclass: a,
        property: c
      } = i;
      t("PQTips3", a("PQTips3")(((p = class t extends n {
        constructor(...t) {
          super(...t), this._ui = null, this.strArr = r.gsStringHelpIn(106), this.typeS = ["att", "hp", "def", "speed"], this.typeArr = r.gsStringHelpIn(104)
        }
        pohuiPage() {
          h.bossDieWin(t, 2)
        }
        load(t) {
          this._ui = this.zgNodegzt("spr1"), this.gsButtongbs("spr_bg", function() {
            this.pohuiPage()
          }.bind(this))
        }
        init(t) {
          let s = t.type || 1,
            i = t.info;
          if (i) {
            this.zgNodegzt("lbl_info4", this._ui).active = 1 == s, this.zgNodegzt("YMLabel2", this._ui).active = 1 == s;
            const t = g.co_prop.zgTableKey(i.id);
            this.gsTxtGradelbl("YMLabel1", t.grade, t.name, this._ui), this.gsTxtLblgs("lbl_info1/YMLabel2", this.strArr[t.type], this._ui);
            let o = "";
            for (const s of this.typeS)
              if (t[s] > 0) {
                o = e.formatStr(this.typeArr[s], l.gsNumValueShow(t[s]));
                break
              } if (this.gsTxtLblgs("lbl_info3/YMLabel1", o, this._ui), 1 == s) {
              let t = i.num || 0;
              this.gsTxtLblgs("lbl_info4/YMLabel2", l.gsNumValueShow(t), this._ui)
            }
          }
          let n = t.pos,
            r = t.size;
          if (n) {
            let t = {
                x: 1,
                y: 1
              },
              i = this._ui.getComponent(o).contentSize.height;
            1 == s ? i = 330 : 2 == s && (i = 230);
            let e = n.x,
              h = n.y;
            h >= 0 ? h = h - (r.height * t.y + i) / 2 - 20 : h += (r.height * t.y + i) / 2, this._ui.setPosition(e, h, 0)
          }
        }
      }).m_name = "PQTips3", u = p)) || u);
      s._RF.pop()
    }
  }
}));