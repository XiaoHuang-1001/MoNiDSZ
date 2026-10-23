System.register("chunks:///_virtual/WZichan1.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, i, e, n, a, g, l, h, o, c, b, r, u;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator, e = t.instantiate, n = t.Animation
    }, function(t) {
      a = t.ZGGSOfficeFx, g = t.gs_bmsg, l = t.gs_boss, h = t.gs_btxt, o = t.gs_tabpr, c = t.gs_sql, b = t.gs_computer, r = t.gs_sound
    }, function(t) {
      u = t.minFunc
    }],
    execute: function() {
      var d, m;
      s._RF.push({}, "13f3bqY5OlFooGpIBlPrivh", "WZichan1", void 0);
      const {
        ccclass: _,
        property: x
      } = i;
      t("WZichan1", _("WZichan1")(((m = class t extends a {
        constructor(...t) {
          super(...t), this.fanghe = null, this.mainCt = null, this.item = null, this.co_property_ttt = null, this.titles = null
        }
        xiabanye() {
          g.send(2100, !1), l.bossDieWin(t, 2)
        }
        load() {
          this.titles = h.gsStringHelpIn(1), this.co_property_ttt = o.co_property.objs, this.fanghe = this.zgNodegzt("top"), this.mainCt = this.zgNodegzt("sw1/view/content", this.fanghe), this.item = this.zgNodegzt("item1", this.mainCt), this.gsButtongbs("guanbi", (() => {
            this.xiabanye()
          }), this.fanghe), this.gsButtongbs("YMSpriteSplash", (() => {
            this.xiabanye()
          })), u.activityUnlock(3)
        }
        init() {
          u.activityEnter(3), g.send(2100, !0), this.showWZichan1()
        }
        showWZichan1() {
          let t = this.mainCt.children;
          for (let s = 1; s <= 5; s++) {
            let i = t[s - 1];
            this.bindZichan(i, s)
          }
        }
        bindZichan(t, s) {
          t || ((t = e(this.item)).parent = this.mainCt), t.active = !0;
          let i = this.co_property_ttt[s],
            a = c.findObjById("zichanInfo", s),
            g = i[a.lv - 1],
            l = i[a.lv];
          this.gsTxtLblgs("tit1/txt1", this.titles[s], t);
          let h = 0;
          g ? (this.gsTxtStrbyNums("tit2/txt2", 8, g.lv, t), this.gsTxtGradelbl("tit2/txt1", g.grade, g.name, t), this.gsTxtLblgs("tit3/lay/txt1", g.des, t), h = g.amb) : (this.gsTxtStrbyNums("tit2/txt2", 8, l.lv, t), this.gsTxtGradelbl("tit2/txt1", l.grade, l.name, t), this.gsTxtLblgs("tit3/lay/txt1", l.des, t), h = l.amb), this.gsTxtStrbyNums("tit3/lay/txt2", 4, h, t), this.zgNodegzt("btn_3", t).active = !l, this.zgNodegzt("lbl_info1", t).active = l, this.zgNodegzt("lay2", t).active = l, this.zgNodegzt("btn_2", t).active = !g && l, this.zgNodegzt("btn_4", t).active = g && l;
          let o = this.zgLableglt("tit1/txt1", t);
          if (o.unscheduleAllCallbacks(), l) {
            let i = l.need;
            this.gsTxtLblgs("btn_2/YMLabel1", l.operate_name, t), this.gsTxtLblgs("btn_4/YMLabel1", l.operate_name, t);
            let e = b.gsAllNumGet();
            this.zgNodegzt("lbl_info1", t).active = e < l.num, this.zgNodegzt("lay2", t).active = e >= l.num, this.gsTxtStrbyNums("lbl_info1", 9, l.num, t), this.gsNeedConfigs("lay2", i, t), this.gsButtonStategbs("btn_2", e >= l.num ? 1 : 0, t), this.gsButtonStategbs("btn_4", e >= l.num ? 1 : 0, t);
            let h = this.zgNodegzt("shengji", t).getComponent(n),
              c = e => {
                b.constNeedTabgs(i, (() => {
                  r.playOne("uplv"), a.lv = l.lv, b.zichanChange(a.id, l, g), h.play(), this.gsNodeBigSmallgOnens("tit3/lay/txt2", t, .15), this.gsNodeBigSmallgOnens("tit2/txt2", t, .15);
                  let i = {
                    data_t: l
                  };
                  u.activityStart(3, i), this.bindZichan(t, s)
                }), e)
              };
            this.gsButtongbs("btn_2", (() => {
              c(17)
            }), t), this.gsButtongbs("btn_4", (() => {
              c(18)
            }), t);
            let d = () => {
              let s = b.checkTabNeedgs(i);
              this.gsLblCororgst1("lay2/YMLabel", s, [25, 25, 25], t)
            };
            o.schedule(d, .3), d()
          }
        }
      }).m_name = "WZichan1", d = m)) || d);
      s._RF.pop()
    }
  }
}));