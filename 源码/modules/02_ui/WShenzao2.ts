System.register("chunks:///_virtual/WShenzao2.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, i, n, o, l, a, g, b, h;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, n = t.gs_boss, o = t.gs_tabpr, l = t.gs_btxt, a = t.gs_sql, g = t.gs_phone, b = t.gs_computer
    }, function(t) {
      h = t.minFunc
    }],
    execute: function() {
      var r, u;
      s._RF.push({}, "0f21dN0q4NPYpSaiAddzy85", "WShenzao2", void 0);
      const {
        ccclass: d,
        property: c
      } = e;
      t("WShenzao2", d("WShenzao2")(((u = class t extends i {
        constructor(...t) {
          super(...t), this.top = null, this.lay = null, this.content = null
        }
        xiabanye() {
          n.bossDieWin(t, 2)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.lay = this.zgNodegzt("node_Info3/lay", this.top), this.content = this.zgNodegzt("content", this.top)
        }
        init(t) {
          h.activityStart(7, null), this.showWShenzao2(t)
        }
        showWShenzao2(t) {
          console.log(t, "sdfs");
          let s = o.co_edu_up.zgTableKey(t.tabId),
            e = o.co_edu.zgTableKey(s.edu_id),
            i = o.co_edu.zgTableKey(s.edu_id + 1);
          this.gsTxtGradelbl("YMLabel3", e.grade, e.name, this.lay), this.gsTxtGradelbl("YMLabel2", i.grade, i.name, this.lay);
          let n = t.arr,
            h = this.content.children,
            r = JSON.parse(JSON.stringify(n)),
            u = l.gsStringHelpIn(204);
          for (let t = 0; t < n.length; t++) {
            let s = h[t],
              e = n[t],
              o = a.findObjById("workInfo1", e),
              l = a.findObjById("workInfo2", e);
            this.gsWorkPic(s, o);
            let r = g.returnOneAttr(o.id);
            this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, r.pot, s), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, r.amb, s);
            let d = b.sjNumgs(i.pot1, i.pot2),
              c = b.sjNumgs(i.amb1, i.amb2),
              f = b.sjNumgs(i.att1, i.att2),
              p = b.sjNumgs(i.hp1, i.hp2),
              _ = b.sjNumgs(i.def1, i.def2),
              m = b.sjNumgs(i.speed1, i.speed2),
              y = d - o.iPot,
              S = c - o.iAmb,
              z = f - l.iAtt,
              N = p - l.iHp,
              x = _ - l.iDef,
              L = m - l.iSpeed;
            this.gsTxtStrbyNums("lbl_info4/YMLabel2", 306, y, s), this.gsTxtStrbyNums("lbl_info5/YMLabel2", 306, S, s), this.gsTxtLblgs("lbl_info6/YMLabel2", `${u[2]}+${N}`, s), this.gsTxtLblgs("lbl_info7/YMLabel2", `${u[3]}+${z}`, s), this.gsTxtLblgs("lbl_info8/YMLabel2", `${u[4]}+${x}`, s), this.gsTxtLblgs("lbl_info9/YMLabel2", `${u[5]}+${L}`, s), o.iPot = d, o.iAmb = c, l.iAtt = f, l.iHp = p, l.iDef = _, l.iSpeed = m, l.att += z, l.hp += N, l.def += x, l.speed += L, g.runOneAttr(e), o.isEdu = 0, o.edu = i.id
          }
          this.gsButtongbs("btn_2", (() => {
            a.companyInfo.wcsz += 1, t._func(r)
          }), this.top)
        }
      }).m_name = "WShenzao2", r = u)) || r);
      s._RF.pop()
    }
  }
}));