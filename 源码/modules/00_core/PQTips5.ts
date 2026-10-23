System.register("chunks:///_virtual/PQTips5.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(s) {
  "use strict";
  var t, i, e, n, o, l;
  return {
    setters: [function(s) {
      t = s.cclegacy, i = s._decorator, e = s.UITransform
    }, function(s) {
      n = s.ZGGSOfficeFx, o = s.gs_boss, l = s.gs_tabpr
    }],
    execute: function() {
      var c, u;
      t._RF.push({}, "157a60RO9tGiLxmtITgTXni", "PQTips5", void 0);
      const {
        ccclass: h,
        property: r
      } = i;
      s("PQTips5", h("PQTips5")(((u = class s extends n {
        constructor(...s) {
          super(...s), this._ui = null
        }
        pohuiPage() {
          o.bossDieWin(s, 2)
        }
        load(s) {
          this._ui = this.zgNodegzt("spr1"), this.gsButtongbs("spr_bg", function() {
            this.pohuiPage()
          }.bind(this))
        }
        init(s) {
          let t = s.info;
          if (t) {
            const s = l.co_super.zgTableKey(t);
            this.gsTxtGradelbl("YMLabel1", s.grade, s.name, this._ui), this.gsTxtStrbyNums("lbl_info4/YMLabel1", 117, s.level, this._ui), this.gsTxtLblgs("lbl_info1/YMLabel1", s.des1, this._ui);
            let i = s.des2;
            i = i.replace(/x/g, s.add), this.gsTxtLblgs("lbl_info3/YMLabel1", i, this._ui)
          }
          let i = s.pos,
            n = s.size;
          if (i) {
            let s = {
                x: 1,
                y: 1
              },
              t = this._ui.getComponent(e).contentSize.height,
              o = i.x,
              l = i.y;
            l >= 0 ? l = l - (n.height * s.y + t) / 2 - 20 : l += (n.height * s.y + t) / 2, this._ui.setPosition(o, l, 0)
          }
        }
      }).m_name = "PQTips5", c = u)) || c);
      t._RF.pop()
    }
  }
}));