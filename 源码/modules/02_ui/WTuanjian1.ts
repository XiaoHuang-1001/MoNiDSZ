System.register("chunks:///_virtual/WTuanjian1.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, e, i, n, o, l, a, r, g, c, b, h, u;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator, i = t.instantiate, n = t.js, o = t.v2
    }, function(t) {
      l = t.ZGGSOfficeFx, a = t.gs_boss, r = t.gs_sql, g = t.gs_phone, c = t.gs_btxt, b = t.gs_computer, h = t.gs_tabpr, u = t.gs_bmsg
    }],
    execute: function() {
      var d, f;
      s._RF.push({}, "e7230Pw+9ZLZbgaS3vZwcoX", "WTuanjian1", void 0);
      const {
        ccclass: _,
        property: m
      } = e;
      t("WTuanjian1", _("WTuanjian1")(((f = class t extends l {
        constructor(...t) {
          super(...t), this.bdog = null, this.scrollView = null
        }
        xiabanye() {
          a.bossDieWin(t, 2), r.companyInfo.tj += 1
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.scrollView = this.zgScrollViewgsvt("sw1", this.bdog)
        }
        init(t) {
          const s = t;
          this.gsTxtStrbyNums("lbl_info2/YMLabel1", 110, s.length, this.bdog);
          let e = [],
            l = this.zgNodegzt("sw1/view/content", this.bdog);
          for (let t = 0; t < s.length; t++) {
            let o = l.children[t];
            o || (o = i(l.children[0]), o.parent = l);
            let a = s[t];
            e.push(a.id);
            const u = r.findObjById("workInfo1", a.id),
              d = g.returnOneAttr(a.id);
            this.gsWorkPic(o, u), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, d.pot, o), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, d.amb, o);
            let f = c.gsStringHelpIn(104),
              _ = n.formatStr(f[a.add[0]], b.gsNumValueShow(a.add[1]));
            this.gsTxtStrbyStrs("lbl_info6/YMLabel2", 4, _, o);
            const m = h.co_team_award.zgTableKey(a.teamId);
            this.gsTxtLblgs("lbl_info7/YMLabel2", m.name, o)
          }
          s.length > 3 && this.scrollView.scrollToOffset(o(s.length / 2 * -257, 0), 0), this.gsButtongbs("btn_2", (() => {
            u.send(2302, {
              id: e[0],
              roleArr: e,
              face: 312
            }), this.xiabanye()
          }), this.bdog)
        }
      }).m_name = "WTuanjian1", d = f)) || d);
      s._RF.pop()
    }
  }
}));