System.register("chunks:///_virtual/WChongdian.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts", "./WChongdian3.ts"], (function(t) {
  "use strict";
  var s, n, i, e, o, a, h, g, c, d;
  return {
    setters: [function(t) {
      s = t.cclegacy, n = t._decorator, i = t.instantiate
    }, function(t) {
      e = t.ZGGSOfficeFx, o = t.gs_boss, a = t.gs_bmsg, h = t.gs_sql, g = t.gs_tabpr
    }, function(t) {
      c = t.minFunc
    }, function(t) {
      d = t.WChongdian3
    }],
    execute: function() {
      var l, r;
      s._RF.push({}, "7e9096hA69BHKcdIivu6PHr", "WChongdian", void 0);
      const {
        ccclass: b,
        property: u
      } = n;
      t("WChongdian", b("WChongdian")(((r = class t extends e {
        constructor(...t) {
          super(...t), this.top = null, this.content = null, this.item1 = null
        }
        xiabanye() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.content = this.zgNodegzt("sw1/view/content", this.top), this.item1 = this.zgNodegzt("item1", this.content), this.gsButtongbs("guanbi", (() => {
            a.send(2100, !1), this.xiabanye()
          }), this.top), this.gsButtongbs("YMSpriteSplash", (() => {
            a.send(2100, !1), this.xiabanye()
          }))
        }
        init() {
          c.activityEnter(9), a.send(2100, !0), this.showWChongdian()
        }
        showWChongdian() {
          let t = h.chargeInfo.objs,
            s = [];
          for (let n in t) s.push(t[n]);
          let n = this.content.children;
          for (let t = 0; t < s.length; t++) {
            let e = n[t];
            e || (e = i(this.item1), e.parent = this.content), e.active = !0, this.bindClass(e, s[t])
          }
          for (let t = s.length; t < n.length; t++) n[t].active = !1;
          this.zgNodegzt("lbl_info2", this.top).active = 0 == s.length
        }
        bindClass(t, s) {
          let n = g.co_class.zgTableKey(s.id);
          this.gsTxtLblgs("txt1", n.name, t), this.gsTxtStrbyNums("YMLabel", 4, s.gold, t), this.gsTxtStrbyNums("YMLabel2", 22, s.add, t), this.zgNodegzt("btn_3", t).active = s.day > 0, this.zgNodegzt("btn_4", t).active = s.day <= 0, this.gsTxtStrbyNums("btn_3/YMLabel1", 116, s.day, t), this.gsButtongbs("btn_4", (() => {
            let t = h.findObjById("workInfo1", 1);
            c.activityStart(9, null), h.deleteObjById("chargeInfo", s.id);
            let n = {
              workInfo1_s: t,
              earn: s.add,
              _func: () => {
                a.send(2302, {
                  id: 1,
                  roleArr: [],
                  face: 308
                }), this.xiabanye()
              }
            };
            o.bossWshow(d, n)
          }), t)
        }
      }).m_name = "WChongdian", l = r)) || l);
      s._RF.pop()
    }
  }
}));