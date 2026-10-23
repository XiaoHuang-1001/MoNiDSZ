System.register("chunks:///_virtual/WShengzhiyan1.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSScrollviewsvi.ts", "./WShengzhiyan2.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var e, s, n, i, o, l, h, c, g, a, r, b, d;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator, n = t.instantiate
    }, function(t) {
      i = t.ZGGSOfficeFx, o = t.gs_boss, l = t.gs_tabpr, h = t.gs_sql, c = t.gs_computer, g = t.gs_phone, a = t.gs_bmsg
    }, function(t) {
      r = t.ZGGSScrollviewsvi
    }, function(t) {
      b = t.WShengzhiyan2
    }, function(t) {
      d = t.minFunc
    }],
    execute: function() {
      var u, f;
      e._RF.push({}, "93868tVVqlJK7vA2Xu5WwHO", "WShengzhiyan1", void 0);
      const {
        ccclass: _,
        property: m
      } = s;
      t("WShengzhiyan1", _("WShengzhiyan1")(((f = class t extends i {
        constructor(...t) {
          super(...t), this.top = null, this.swNode = null, this.swCom = null, this.mainCt = null, this.content2 = null, this.content = null, this.item = null, this.choose = 1, this.co_banquet_ttt = null
        }
        xiabanye() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.co_banquet_ttt = l.co_banquet.objs, this.top = this.zgNodegzt("top"), this.swNode = this.zgNodegzt("sw1", this.top), this.swCom = this.swNode.getComponent(r), this.content2 = this.zgNodegzt("content2", this.top), this.mainCt = this.zgNodegzt("view/content", this.swNode), this.item = this.zgNodegzt("spr1", this.top), this.content = this.zgNodegzt("content", this.top)
        }
        init(t) {
          this.choose = 1, this.showWShengzhiyan1(t)
        }
        showWShengzhiyan1(t) {
          console.log(t, "升职参数");
          let e = t.arrRen,
            s = t.upLv;
          this.gsTxtStrbyNums("lbl_info2/YMLabel1", 13, e.length, this.top);
          let i = this.mainCt;
          e.length > 3 ? (this.content2.active = !1, this.swCom.scrollToLeft()) : (this.swNode = !1, i = this.content2), i.active = !0, e.length > 3 && this.swCom.scrollToLeft();
          for (let t = 0; t < e.length; t++) {
            if (h.findObjById("workInfo1", e[t])) {
              let o = i.children[t];
              o || (o = n(this.item), o.parent = i), o.active = !0, this.bindRen(o, e, t, s)
            }
          }
          for (let t = e.length; t < i.children.length; t++) i.children[t].active = !1;
          let g = [1],
            r = c.sjNumArrgs2(2, 6, 2);
          for (let t = 0; t < r.length; t++) {
            let e = r[t];
            g.push(e)
          }
          g.sort(((t, e) => t - e));
          let u = [];
          for (let t = 0; t < g.length; t++) {
            let e = g[t],
              s = this.co_banquet_ttt[e],
              n = s[c.sjNumArrgs(0, s.length - 1, 1)[0]];
            u.push(n)
          }
          console.log(u, "升职选项"), this.choose = u[0].id;
          let f = this.content.children,
            _ = 0;
          for (let t = 0; t < u.length; t++) {
            let s = f[t],
              n = u[t];
            this.gsTxtGradelbl("YMLabel1", n.grade, n.name, s);
            let i = this.zgTogglegtts("lbl_info3", s);
            i.isChecked = this.choose == n.id;
            let o = [2, n.need[1] * e.length];
            0 == n.need[0] && (o = [0]), this.gsNeedConfigs("lay", o, s);
            let l = this.zgLableglt("YMLabel1", s);
            if (l.unscheduleAllCallbacks(), this.gsButtongbs("btn", (() => {
                this.choose = n.id, _ = t;
                for (let t = 0; t < f.length; t++) {
                  let e = f[t];
                  this.zgTogglegtts("lbl_info3", e).isChecked = !1
                }
                i.isChecked = !0
              }), s), n.need[0] > 0) {
              let t = () => {
                let t = c.checkTabNeedgs(o);
                this.gsLblCororgst1("lay/YMLabel", t, [25, 25, 25], s)
              };
              l.schedule(t, .3), t()
            }
          }
          this.gsButtongbs("btn_2", (() => {
            let t = l.co_banquet.zgTableKey(this.choose),
              s = [2, t.need[1] * e.length];
            0 == t.need[0] && (s = [0]), c.constNeedTabgs(s, (() => {
              d.activitySuccess(9, 1, {
                num: _ + 1
              }), h.companyInfo.szy += 1, this.node.active = !1;
              let s = {
                arrRen: e,
                co_banquet_t: t,
                _func: (t, e, s) => {
                  this.xiabanye();
                  let n = {
                    id: e,
                    roleArr: [],
                    face: s,
                    roleObj: t
                  };
                  a.send(2302, n)
                }
              };
              o.bossWshow(b, s)
            }), 12)
          }), this.top)
        }
        bindRen(t, e, s, n) {
          let i = e[s],
            o = n[s],
            c = h.findObjById("workInfo1", i);
          this.gsWorkPic(t, c);
          let a = g.returnOneAttr(c.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, a.pot, t), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, a.amb, t);
          let r = l.co_job.zgTableKey(o),
            b = l.co_job.zgTableKey(c.jobId);
          this.gsTxtGradelbl("lbl_info6/lay/YMLabel1", r.grade, r.name, t), this.gsTxtGradelbl("lbl_info6/lay/YMLabel2", b.grade, b.name, t)
        }
      }).m_name = "WShengzhiyan1", u = f)) || u);
      e._RF.pop()
    }
  }
}));