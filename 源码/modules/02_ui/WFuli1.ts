System.register("chunks:///_virtual/WFuli1.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, e, i, n, l, o, b, h, c, g, a, u, _;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator, i = t.instantiate, n = t.js, l = t.Animation
    }, function(t) {
      o = t.ZGGSOfficeFx, b = t.gs_boss, h = t.gs_tabpr, c = t.gs_bmsg, g = t.gs_computer, a = t.gs_sql, u = t.gs_btxt, _ = t.gs_sound
    }],
    execute: function() {
      var r, d;
      s._RF.push({}, "c25b4K9hmBGaoG6nMKbtTkY", "WFuli1", void 0);
      const {
        ccclass: f,
        property: v
      } = e;
      t("WFuli1", f("WFuli1")(((d = class t extends o {
        constructor(...t) {
          super(...t), this.content = null, this.item = null, this.co_benefits_tt = null, this.co_benefits_lv_ttt = null, this.renshu = 0
        }
        xiabanye() {
          b.bossDieWin(t, 2)
        }
        load() {
          this.co_benefits_tt = h.co_benefits.values, this.co_benefits_lv_ttt = h.co_benefits_lv.objs, this.content = this.zgNodegzt("top/sw1/view/content"), this.item = this.zgNodegzt("Node1", this.content), this.gsButtongbs("top/guanbi", (() => {
            c.send(2100, !1), this.xiabanye()
          })), this.gsButtongbs("YMSpriteSplash", (() => {
            c.send(2100, !1), this.xiabanye()
          }))
        }
        init() {
          c.send(2100, !0), this.showWFuli1()
        }
        showWFuli1() {
          this.renshu = g.gsAllNumGet();
          let t = this.content.children;
          for (let s = 0; s < this.co_benefits_tt.length; s++) {
            let e = this.co_benefits_tt[s],
              n = t[s];
            n || (n = i(this.item), n.parent = this.content), n.active = !0, this.bindFuli(n, e)
          }
        }
        bindFuli(t, s) {
          let e = a.findObjById("fuliInfo", s.id),
            i = this.co_benefits_lv_ttt[s.id],
            o = i[e.lv - 1],
            b = i[e.lv];
          this.gsTxtLblgs("lbl_info/YMLabel1", e.lv, t), this.gsTxtLblgs("lbl_info4/YMLabel1", s.name, t);
          let h = u.gsStringByTwo(8)[s.type];
          h = n.formatStr(h, o.number, o.add1, o.add2), this.gsTxtLblgs("lbl_info6/YMLabel1", h, t), this.zgNodegzt("btn_yes2", t).active = !b, this.zgNodegzt("btn_yes", t).active = b && this.renshu >= s.number, this.zgNodegzt("lbl_info7", t).active = b && this.renshu < s.number, this.gsTxtStrbyNums("lbl_info7/YMLabel1", 23, s.number, t);
          let c = this.zgLableglt("lbl_info4/YMLabel1", t);
          c.unscheduleAllCallbacks();
          let r = this.zgNodegzt("shengji", t),
            d = r.getComponent(l);
          if (b) {
            let i = b.need;
            this.gsNeedConfigs("btn_yes/cost", i, t), this.gsButtongbs("btn_yes", (() => {
              g.constNeedTabgs(i, (() => {
                _.playOne("uplv"), e.lv = b.lv, r.active = !0, d.play(), this.gsNodeBigSmallgOnens("lbl_info/YMLabel1", t, .2), this.bindFuli(t, s)
              }), 25)
            }), t);
            let n = () => {
              let s = g.checkTabNeedgs(i);
              this.gsLblCororgst1("btn_yes/cost/YMLabel", s, [255, 255, 255], t)
            };
            c.schedule(n, .3), n()
          }
        }
      }).m_name = "WFuli1", r = d)) || r);
      s._RF.pop()
    }
  }
}));