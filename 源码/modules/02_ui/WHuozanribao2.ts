System.register("chunks:///_virtual/WHuozanribao2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var i, e, s, n, o, h, l, a, r, c;
  return {
    setters: [function(t) {
      i = t.cclegacy, e = t._decorator, s = t.instantiate
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, h = t.gs_tabpr, l = t.gs_sql, a = t.gs_btxt, r = t.gs_phone, c = t.gs_computer
    }],
    execute: function() {
      var g, b;
      i._RF.push({}, "37e51iqr45I1aDyhFbtfEOF", "WHuozanribao2", void 0);
      const {
        ccclass: d,
        property: f
      } = e;
      t("WHuozanribao2", d("WHuozanribao2")(((b = class t extends n {
        constructor(...t) {
          super(...t), this.fanghe = null, this.swNode = null, this.content2 = null, this.mainCt = null, this.item = null, this.co_prop_tt = []
        }
        xiabanye() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.swNode = this.zgNodegzt("sw1", this.fanghe), this.content2 = this.zgNodegzt("content2", this.fanghe), this.mainCt = this.zgNodegzt("view/content", this.swNode), this.item = this.zgNodegzt("spr1", this.fanghe);
          let t = h.co_prop.objs,
            i = [];
          i = i.concat(t[1], t[2], t[3], t[4]);
          for (let t = 0; t < i.length; t++) {
            let e = i[t];
            e.title_lv <= l.pingjiaInfo.titId && this.co_prop_tt.push(e)
          }
        }
        init(t) {
          this.showWHuozanribao2(t)
        }
        showWHuozanribao2(t) {
          let i = t.type,
            e = t.arr,
            n = (t.co_report_t, t.kind),
            o = a.gsStringHelpIn(3)[i].res;
          this.gsTxtLblgs("title", o, this.fanghe);
          let h = [];
          if (e.length > 3) {
            this.swNode.active = !0, this.content2.active = !1;
            for (let t = 0; t < e.length; t++) {
              let o = e[t],
                a = this.mainCt.children[t];
              a || (a = s(this.item), a.parent = this.mainCt), a.active = o, o && (h.push(o.id), this.bindRen(a, o, n), 1 == i || (2 == i ? l.likeInfo.weekInfo[o.id] = 1 : 3 == i && (l.likeInfo.monthInfo[o.id] = 1)))
            }
            for (let t = e.length; t < this.mainCt.children.length; t++) this.mainCt.children[t].active = !1
          } else {
            this.swNode.active = !1, this.content2.active = !0;
            for (let t = 0; t < e.length; t++) {
              let o = e[t],
                a = this.content2.children[t];
              a || (a = s(this.item), a.parent = this.content2), a.active = o, o && (h.push(o.id), this.bindRen(a, o, n), 1 == i || (2 == i ? l.likeInfo.weekInfo[o.id] = 1 : 3 == i && (l.likeInfo.monthInfo[o.id] = 1)))
            }
            for (let t = e.length; t < this.content2.children.length; t++) this.content2.children[t].active = !1
          }
          this.gsButtongbs("btn_2", (() => {
            this.xiabanye(), t._func(h)
          }), this.fanghe)
        }
        bindRen(t, i, e) {
          this.gsWorkPic(t, i);
          let s = r.returnOneAttr(i.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, s.pot, t), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, s.amb, t);
          let n = h.co_job.zgTableKey(i.jobId),
            o = c.sjNumgs(n.pot1, n.pot2);
          o = Math.ceil(o / 4 * 6), o <= 1 && (o = 1);
          let l = c.sjNumgs(n.amb1, n.amb2);
          if (l = Math.ceil(l / 4 * 6), l <= 1 && (l = 1), this.gsTxtStrbyNums("lbl_info4/YMLabel1", 301, o, t), this.gsTxtStrbyNums("lbl_info5/YMLabel1", 302, l, t), this.zgNodegzt("lbl_info6", t).active = 1 == e, 1 == e) {
            let e = c.sjNumgs(0, this.co_prop_tt.length - 1),
              s = this.co_prop_tt[e];
            this.gsTxtGradelbl("lbl_info6/YMLabel2", s.grade, s.name, t), c.saveYpFunc(i.id, s.id)
          }
          let a = {
            pot: o,
            amb: l
          };
          r.addWorkerAttr(i.id, a)
        }
      }).m_name = "WHuozanribao2", g = b)) || g);
      i._RF.pop()
    }
  }
}));