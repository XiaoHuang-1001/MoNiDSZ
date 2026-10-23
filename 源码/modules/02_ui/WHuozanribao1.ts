System.register("chunks:///_virtual/WHuozanribao1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WHuozanribao2.ts", "./WHuozanribao3.ts", "./ZGGSScrollviewsvi.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var e, s, i, n, o, l, h, a, c, g, r, u, b, d, f;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator, i = t.instantiate
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, l = t.gs_tabpr, h = t.gs_btxt, a = t.gs_sql, c = t.gs_computer, g = t.gs_phone, r = t.gs_bmsg
    }, function(t) {
      u = t.WHuozanribao2
    }, function(t) {
      b = t.WHuozanribao3
    }, function(t) {
      d = t.ZGGSScrollviewsvi
    }, function(t) {
      f = t.minFunc
    }],
    execute: function() {
      var _, m;
      e._RF.push({}, "ee905TETXxO1K9gVQ22DK7l", "WHuozanribao1", void 0);
      const {
        ccclass: p,
        property: v
      } = s;
      t("WHuozanribao1", p("WHuozanribao1")(((m = class t extends n {
        constructor(...t) {
          super(...t), this.fanghe = null, this.swNode = null, this.swCom = null, this.mainCt = null, this.content2 = null, this.item = null, this.co_report_ttt = null
        }
        xiabanye() {
          o.bossDieWin(t, 1)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.swNode = this.zgNodegzt("sw1", this.fanghe), this.swCom = this.swNode.getComponent(d), this.content2 = this.zgNodegzt("content2", this.fanghe), this.mainCt = this.zgNodegzt("view/content", this.swNode), this.item = this.zgNodegzt("spr1", this.fanghe), this.co_report_ttt = l.co_report.objs
        }
        init(t) {
          this.node.active = !0, this.showWHuozanribao1(t)
        }
        showWHuozanribao1(t) {
          let e = t.type,
            s = h.gsStringHelpIn(3)[e].tit;
          this.gsTxtLblgs("title", s, this.fanghe);
          let n = this.co_report_ttt[e],
            o = [];
          for (let t = 0; t < n.length; t++) {
            let e = n[t];
            e.title_lv <= a.pingjiaInfo.titId && o.push(e)
          }
          let l = o[c.sjNumgs(0, o.length - 1)];
          this.gsTxtLblgs("lbl_info2/YMLabel1", l.des1, this.fanghe), this.gsTxtGradelbl("lbl_info3/YMLabel1", l.grade, l.des2, this.fanghe), this.gsTxtLblgs("lbl_info4/YMLabel1", l.des3, this.fanghe);
          let g = t.arrRen;
          if (g.length > 3) {
            this.swNode.active = !0, this.swCom.scrollToLeft(), this.content2.active = !1;
            for (let t = 0; t < g.length; t++) {
              let e = g[t],
                s = this.mainCt.children[t];
              s || (s = i(this.item), s.parent = this.mainCt), s.active = !0, this.bindRen(s, e)
            }
            for (let t = g.length; t < this.mainCt.children.length; t++) this.mainCt.children[t].active = !1
          } else {
            this.swNode.active = !1, this.content2.active = !0;
            for (let t = 0; t < g.length; t++) {
              let e = g[t],
                s = this.content2.children[t];
              s || (s = i(this.item), s.parent = this.content2), s.active = !0, this.bindRen(s, e)
            }
            for (let t = g.length; t < this.content2.children.length; t++) this.content2.children[t].active = !1
          }
          let r = [3, 1 * g.length * l.grade];
          this.gsNeedConfigs("cost", r, this.fanghe);
          let u = this.zgLableglt("cost/YMLabel", this.fanghe);
          u.unscheduleAllCallbacks();
          let b = () => {
            let t = c.checkTabNeedgs(r);
            this.gsLblCororgst1("cost/YMLabel", t, [25, 25, 25], this.fanghe)
          };
          u.schedule(b, .5), b(), this.gsButtongbs("btn_3", (() => {
            c.constNeedTabgs(r, (() => {
              f.activitySuccess(`15_${e}`, 2, null), this.dealResult(e, g, l, 1, 308)
            }), `3_${e}`)
          }), this.fanghe), this.gsButtongbs("btn_2", (() => {
            f.activitySuccess(`15_${e}`, 1, null), this.dealResult(e, g, l, 2, 303)
          }), this.fanghe)
        }
        bindRen(t, e) {
          this.gsWorkPic(t, e);
          let s = g.returnOneAttr(e.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, s.pot, t), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, s.amb, t)
        }
        dealResult(t, e, s, i, n) {
          this.node.active = !1;
          let l = {
            type: t,
            arr: e,
            co_report_t: s,
            kind: i,
            _func: t => {
              let e = {
                id: t[0],
                roleArr: t,
                face: n
              };
              r.send(2302, e), this.xiabanye()
            }
          };
          console.log(i, "获赞"), 1 == i ? o.bossWshow(b, l) : 2 == i && o.bossWshow(u, l)
        }
      }).m_name = "WHuozanribao1", _ = m)) || _);
      e._RF.pop()
    }
  }
}));