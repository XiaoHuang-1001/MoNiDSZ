System.register("chunks:///_virtual/Wpaiming.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSPaipxxu.ts", "./CurListView.ts", "./WChakancy.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, i, e, n, o, a, g, r, l, h, b, c, d, p, f, u;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator, e = t.instantiate, n = t.js
    }, function(t) {
      o = t.ZGGSOfficeFx, a = t.gs_btxt, g = t.gs_bmsg, r = t.gs_boss, l = t.gs_sql, h = t.gs_phone, b = t.gs_tabpr, c = t.gs_computer
    }, function(t) {
      d = t.ZGGSPaipxxu
    }, function(t) {
      p = t.CurListView
    }, function(t) {
      f = t.WChakancy
    }, function(t) {
      u = t.minFunc
    }],
    execute: function() {
      var x, m;
      s._RF.push({}, "eb36cA80N1Nj4ZwBvRui14i", "Wpaiming", void 0);
      const {
        ccclass: _,
        property: I
      } = i;
      t("Wpaiming", _("Wpaiming")(((m = class t extends o {
        constructor(...t) {
          super(...t), this.bdog = null, this.nameStr = a.gsStringHelpIn(105), this.pageIndex = 0, this.showType = {
            1: "earn",
            2: "pot",
            3: "amb",
            4: "allNum",
            5: "salary"
          }, this.sortArr = []
        }
        xiabanye() {
          g.send(2100, !1), r.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsButtongbs("guanbi", (() => {
            this.xiabanye()
          }), this.bdog);
          let t = this.zgNodegzt("content", this.bdog);
          for (let s = 0; s < 5; s++) {
            let i = t.children[s];
            i || (i = e(t.children[0]), i.parent = t), this.gsTxtLblgs("YMLabel", this.nameStr[s][0], i), this.zgNodegzt("kai", i).active = this.pageIndex == s, this.zgNodegzt("guan", i).active = this.pageIndex != s, this.gsButtongbs(i, (t => {
              this.gsBtnArrStatests(t.target), this.gsTxtLblgs("lbl_info2/YMLabel3", this.nameStr[s][1], this.bdog), this.pageIndex = s, this.refreshPageInfo()
            }))
          }
          this.gsTxtLblgs("lbl_info2/YMLabel3", this.nameStr[this.pageIndex][1], this.bdog)
        }
        init() {
          u.activityEnter(8), g.send(2100, !0), this.initData()
        }
        initData() {
          let t = Object.keys(l.workInfo1.objs);
          for (let s = 0; s < 5; s++) {
            let i = [...t].sort(d.paiMingSort(s + 1));
            i = i.slice(0, 100), this.sortArr.push(i)
          }
          this.refreshPageInfo()
        }
        refreshPageInfo() {
          console.log(this.sortArr), this.zgNodegzt("sw1", this.bdog).getComponent(p).init(this.sortArr[this.pageIndex], ((t, s, i) => {
            const e = l.findObjById("workInfo1", s),
              o = h.returnOneAttr(s);
            this.gsTxtLblgs("lbl_info1/title", `${i+1}`, t), this.gsTxtLblgs("lbl_info1/YMSprite3/YMLabel1", e.name, t);
            const g = b.co_post.zgTableKey(e.postId);
            if (this.gsTxtGradelbl("lbl_info1/YMLabel1", g.grade, g.name, t), 1 == e.id) this.gsTxtGradelbl("lbl_info1/YMLabel2", 1, a.gsNorStringType(27), t);
            else {
              const s = b.co_job.zgTableKey(e.jobId);
              this.gsTxtGradelbl("lbl_info1/YMLabel2", s.grade, s.name, t)
            }
            let d = o[this.showType[this.pageIndex + 1]],
              p = n.formatStr(this.nameStr[this.pageIndex][2], c.gsNumValueShow(d));
            this.gsTxtLblgs("lbl_info1/YMLabel3", p, t), this.gsButtongbs("lbl_info1/YMSprite3", (() => {
              let t = {
                workInfo1_s: e,
                isclose: !0
              };
              r.bossWshow(f, t)
            }), t)
          }))
        }
      }).m_name = "Wpaiming", x = m)) || x);
      s._RF.pop()
    }
  }
}));