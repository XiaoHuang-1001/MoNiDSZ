System.register("chunks:///_virtual/WPinlun1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WPinlun2.ts"], (function(t) {
  "use strict";
  var s, n, i, e, o, a, u, l, c, b;
  return {
    setters: [function(t) {
      s = t.cclegacy, n = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, e = t.gs_bmsg, o = t.gs_computer, a = t.gs_boss, u = t.gs_tabpr, l = t.gs_btxt, c = t.gs_sql
    }, function(t) {
      b = t.WPinlun2
    }],
    execute: function() {
      var g, h;
      s._RF.push({}, "b5318Cdwx9EIbcPI/IcPHKE", "WPinlun1", void 0);
      const {
        ccclass: d,
        property: r
      } = n;
      t("WPinlun1", d("WPinlun1")(((h = class t extends i {
        xiabanye() {
          e.send(2100, !1), o.shalongDeal(), a.bossDieWin(t, 2)
        }
        load() {
          this.gsButtongbs("top/guanbi", function() {
            this.xiabanye()
          }.bind(this))
        }
        init() {
          e.send(2100, !0), this.showWPinlun1()
        }
        showWPinlun1() {
          let t = c.chahuahui,
            s = u.co_dati.zgTableKey(t.id);
          this.gsTxtLblgs("YMLabel2", s.problem), this.gsTxtLblgs("top/layout/btn_no/YMLabel2", s.respond1), this.gsTxtLblgs("top/layout/btn_yes/YMLabel2", s.respond2), this.gsButtongbs("top/layout/btn_no", function() {
            this.endDati(1)
          }.bind(this)), this.gsButtongbs("top/layout/btn_yes", function() {
            this.endDati(2)
          }.bind(this))
        }
        endDati(t) {
          let s = c.chahuahui;
          if (t == u.co_dati.zgTableKey(s.id).right) {
            this.node.active = !1;
            let t = {
              _func: () => {
                this.xiabanye()
              }
            };
            a.bossWshow(b, t)
          } else e.send(202, l.gsNorStringType(15))
        }
      }).m_name = "WPinlun1", g = h)) || g);
      s._RF.pop()
    }
  }
}));