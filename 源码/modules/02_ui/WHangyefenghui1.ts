System.register("chunks:///_virtual/WHangyefenghui1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WHangyefenghui2.ts", "./ZGGSPaipxxu.ts", "./WHangyefenghui3.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var e, s, n, i, o, g, r, h, d, a, c, l, u;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, i = t.gs_boss, o = t.gs_computer, g = t.gs_btxt, r = t.gs_bmsg, h = t.gs_sql, d = t.gs_tabpr
    }, function(t) {
      a = t.WHangyefenghui2
    }, function(t) {
      c = t.ZGGSPaipxxu
    }, function(t) {
      l = t.WHangyefenghui3
    }, function(t) {
      u = t.minFunc
    }],
    execute: function() {
      var b, f;
      e._RF.push({}, "c04bck8Ab5A8L8OhA53lnXy", "WHangyefenghui1", void 0);
      const {
        ccclass: _,
        property: p
      } = s;
      t("WHangyefenghui1", _("WHangyefenghui1")(((f = class t extends n {
        constructor(...t) {
          super(...t), this.bdog = null, this.workArr = [0, 0, 0, 0, 0, 0]
        }
        pohuiPage() {
          i.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsTxtLblgs("node_Info2/title", o.sjTabGetgs(g.gsStringHelpIn(111)), this.bdog), this.gsButtongbs("btn_4", function() {
            u.activitySuccess(12, 1, null), r.send(2300), this.pohuiPage()
          }.bind(this), this.bdog), this.gsButtongbs("btn_3", function() {
            this.evenEnd()
          }.bind(this), this.bdog), this.gsButtongbs("btn_1", function() {
            this.workArr = [0, 0, 0, 0, 0, 0], this.initRole()
          }.bind(this), this.bdog), this.gsButtongbs("btn_2", function() {
            let t = o.getPostTypeWorkArrInfo([], [0, 2, 3, 4]);
            t.sort(c.fightSort(h.sortType.hangyefenghuiSort || 1));
            for (let e = 0; e < 6; e++) this.workArr[e] = t[e] || 0;
            this.initRole()
          }.bind(this), this.bdog)
        }
        init(t) {
          this.initRole()
        }
        initRole() {
          let t = this.zgNodegzt("sw1", this.bdog);
          for (let e = 0; e < 6; e++) {
            let s = t.children[e],
              n = this.workArr[e];
            this.infoRe(s, n, e), this.gsButtongbs(s, function() {
              i.bossWshow(a, {
                id: n,
                roleList: this.workArr,
                fun: t => {
                  t >= 0 && (this.workArr[e] = t, n = t, this.infoRe(s, n, e))
                }
              })
            }.bind(this))
          }
        }
        infoRe(t, e, s) {
          this.zgNodegzt("node_2", t).active = 0 != e, this.zgNodegzt("node_3", t).active = 0 == e;
          let n = 7;
          if (e > 0) {
            const s = h.findObjById("workInfo1", e);
            this.gsSprHtsst("node_2/icon", s.sprId, t), this.gsTxtLblgs("node_2/YMLabel2", s.name, t);
            const i = d.co_job.zgTableKey(s.jobId);
            this.zgNodegzt("node_2/lbl_info", t).active = 1 != s.id, i && (this.gsWorkTypePic2("node_2/lbl_info", i.grade, t), this.gsTxtGradelbl("node_2/lbl_info/YMLabel1", i.grade, i.name, t));
            const o = d.co_edu.zgTableKey(s.edu);
            this.gsTxtGradelbl("node_2/lbl_info1/YMLabel2", o.grade, o.name, t);
            const g = d.co_post.zgTableKey(s.postId);
            g && (this.gsWorkTypePic1("node_2/node_1", g.grade, t), this.gsTxtGradelbl("node_2/node_1/YMLabel1", g.grade, g.name, t)), n = g.grade
          }
          this.gsWorkTypePic3("node_1", `${n}`, t)
        }
        evenEnd() {
          let t = !1,
            e = [];
          for (let s = 0; s < 6; s++) this.workArr[s] > 0 && (e.push(this.workArr[s]), t = !0);
          if (!t) return void r.send(202, g.gsStringByTwo(109));
          const s = d.co_summit.values,
            n = o.getRandomElements(s, e.length);
          let h = {},
            a = 0;
          n.forEach((function(t) {
            let e = t.award[0];
            h[e] = h[e] || [e, 0], h[e][1] += t.award[1], a += t.power
          }));
          for (const t in h) o.getNeedTabgs(h[t], null, 4);
          o.addPingfenGs(a), u.activitySuccess(12, 2, null), i.bossWshow(l, {
            role: e,
            table: n,
            award: h,
            power: a
          }), this.pohuiPage()
        }
      }).m_name = "WHangyefenghui1", b = f)) || b);
      e._RF.pop()
    }
  }
}));