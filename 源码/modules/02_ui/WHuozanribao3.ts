System.register("chunks:///_virtual/WHuozanribao3.ts", ["cc", "./ZGGSOfficeFx.ts", "./PQTips3.ts"], (function(t) {
  "use strict";
  var i, e, s, n, o, h, l, a, c, r, g, b;
  return {
    setters: [function(t) {
      i = t.cclegacy, e = t._decorator, s = t.instantiate, n = t.UITransform
    }, function(t) {
      o = t.ZGGSOfficeFx, h = t.gs_boss, l = t.gs_tabpr, a = t.gs_sql, c = t.gs_btxt, r = t.gs_phone, g = t.gs_computer
    }, function(t) {
      b = t.PQTips3
    }],
    execute: function() {
      var d, f;
      i._RF.push({}, "2e5cfuAIYFDXL0xkwO96par", "WHuozanribao3", void 0);
      const {
        ccclass: p,
        property: u
      } = e;
      t("WHuozanribao3", p("WHuozanribao3")(((f = class t extends o {
        constructor(...t) {
          super(...t), this.fanghe = null, this.swNode = null, this.content2 = null, this.mainCt = null, this.item = null, this.co_prop_tt = [], this.can = []
        }
        xiabanye() {
          h.bossDieWin(t, 2)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.swNode = this.zgNodegzt("sw1", this.fanghe), this.content2 = this.zgNodegzt("content2", this.fanghe), this.mainCt = this.zgNodegzt("view/content", this.swNode), this.item = this.zgNodegzt("spr1", this.fanghe);
          let t = l.co_prop.objs,
            i = [];
          i = i.concat(t[1], t[2], t[3], t[4]);
          for (let t = 0; t < i.length; t++) {
            let e = i[t];
            e.title_lv <= a.pingjiaInfo.titId && this.co_prop_tt.push(e)
          }
        }
        init(t) {
          this.showWHuozanribao3(t)
        }
        showWHuozanribao3(t) {
          console.log(t, "sdfs");
          let i = t.type,
            e = t.arr,
            n = t.co_report_t;
          this.can = [];
          for (let t = 0; t < this.co_prop_tt.length; t++) this.co_prop_tt[t].grade == n.grade && this.can.push(this.co_prop_tt[t]);
          let o = t.kind;
          this.zgNodegzt("lay/lbl_info5", this.fanghe).active = 1 == o;
          let h = c.gsStringHelpIn(3)[i].res;
          this.gsTxtLblgs("title", h, this.fanghe);
          let l = [];
          if (e.length > 3) {
            this.swNode.active = !0, this.content2.active = !1;
            for (let t = 0; t < e.length; t++) {
              let n = e[t],
                h = this.mainCt.children[t];
              h || (h = s(this.item), h.parent = this.mainCt), h.active = n, n && (l.push(n.id), this.bindRen(h, n, o), 1 == i || (2 == i ? a.likeInfo.weekInfo[n.id] = 1 : 3 == i && (a.likeInfo.monthInfo[n.id] = 1)))
            }
            for (let t = e.length; t < this.mainCt.children.length; t++) this.mainCt.children[t].active = !1
          } else {
            this.swNode.active = !1, this.content2.active = !0;
            for (let t = 0; t < e.length; t++) {
              let n = e[t],
                h = this.content2.children[t];
              h || (h = s(this.item), h.parent = this.content2), h.active = n, n && (l.push(n.id), this.bindRen(h, n, o), 1 == i || (2 == i ? a.likeInfo.weekInfo[n.id] = 1 : 3 == i && (a.likeInfo.monthInfo[n.id] = 1)))
            }
            for (let t = e.length; t < this.content2.children.length; t++) this.content2.children[t].active = !1
          }
          this.gsButtongbs("btn_2", (() => {
            this.xiabanye(), t._func(l)
          }), this.fanghe)
        }
        bindRen(t, i, e) {
          this.gsWorkPic(t, i);
          let s = r.returnOneAttr(i.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, s.pot, t), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, s.amb, t);
          let o = l.co_job.zgTableKey(i.jobId),
            a = g.sjNumgs(o.pot1, o.pot2);
          a = Math.ceil(a / 2 * 6), a <= 1 && (a = 1);
          let c = g.sjNumgs(o.amb1, o.amb2);
          if (c = Math.ceil(c / 2 * 6), c <= 1 && (c = 1), this.gsTxtStrbyNums("lbl_info4/YMLabel1", 301, a, t), this.gsTxtStrbyNums("lbl_info5/YMLabel1", 302, c, t), this.zgNodegzt("lbl_info6", t).active = 1 == e, 1 == e) {
            let e = g.sjNumgs(0, this.can.length - 1),
              s = this.can[e];
            this.gsTxtGradelbl("lbl_info6/YMLabel2", s.grade, s.name, t), g.saveYpFunc(i.id, s.id);
            let o = this.zgNodegzt("lbl_info6", t);
            this.gsButtongbs("lbl_info6/YMLabel2", (() => {
              let t = {
                pos: this.gsWorldposgws(o),
                size: o.getComponent(n).contentSize,
                info: {
                  id: s.id
                },
                type: 2
              };
              h.bossWshow(b, t)
            }), t)
          }
          let d = {
            pot: a,
            amb: c
          };
          r.addWorkerAttr(i.id, d)
        }
      }).m_name = "WHuozanribao3", d = f)) || d);
      i._RF.pop()
    }
  }
}));