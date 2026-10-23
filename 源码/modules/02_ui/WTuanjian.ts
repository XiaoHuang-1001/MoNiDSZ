System.register("chunks:///_virtual/WTuanjian.ts", ["cc", "./ZGGSOfficeFx.ts", "./WTuanjian1.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var e, s, n, i, o, r, a, d, l, h, c;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator, n = t.instantiate
    }, function(t) {
      i = t.ZGGSOfficeFx, o = t.gs_boss, r = t.gs_computer, a = t.gs_tabpr, d = t.gs_sql, l = t.gs_phone
    }, function(t) {
      h = t.WTuanjian1
    }, function(t) {
      c = t.minFunc
    }],
    execute: function() {
      var g, u;
      e._RF.push({}, "1a3817QeydMPqan7vum1bxo", "WTuanjian", void 0);
      const {
        ccclass: b,
        property: f
      } = s;
      t("WTuanjian", b("WTuanjian")(((u = class t extends i {
        constructor(...t) {
          super(...t), this.bdog = null, this.seleIndx = 0, this.workArr = [], this.typeAdd = {
            1: "hp",
            2: "att",
            3: "def",
            4: "speed"
          }, this.addS = {
            1: "f_hp",
            2: "f_att",
            3: "f_def",
            4: "f_speed"
          }
        }
        xiabanye() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top")
        }
        init(t) {
          const e = t.tjInfo;
          let s = [];
          for (const t in e) s.push([Number(t), e[t].length]), this.workArr = this.workArr.concat(e[t]);
          this.workArr = r.checkSJArr(this.workArr), s.sort((function(t, e) {
            return t[0] - e[0]
          })), this.gsTxtStrbyNums("lbl_info5/YMLabel1", 108, this.workArr.length, this.bdog);
          let i = this.zgNodegzt("sw1/view/content", this.bdog);
          for (let t = 0; t < s.length; t++) {
            let e = i.children[t];
            e || (e = n(i.children[0]), e.parent = i);
            let o = s[t];
            this.zgNodegzt("YMLayout/node_1", e).active = 1001 != o[0];
            const r = a.co_dep.zgTableKey(o[0]);
            this.gsTxtLblgs("YMLayout/YMLabel1", r.name, e), this.gsTxtStrbyNums("YMLayout/node_1/YMLabel1", 109, o[1], e)
          }
          const o = t.tjTeam;
          let d = this.zgNodegzt("content", this.bdog);
          for (let t = 0; t < 3; t++) {
            let e = d.children[t];
            const s = o[t];
            this.gsTxtGradelbl("YMLabel1", s.grade, s.name, e), this.gsNeedConfigs("lay", s.need, e), this.gsScheduleStnode("lbl_info3", (() => {
              let t = r.checkTabNeedgs(s.need);
              this.gsLblCororgst1("lay/YMLabel", t, [25, 25, 25], e)
            }), .3, !1, e), this.zgNodegzt("lbl_info3/check", e).active = this.seleIndx == t, this.gsButtongbs("lbl_info3/btn", (() => {
              this.seleIndx = t;
              for (let t = 0; t < d.children.length; t++) {
                const e = d.children[t];
                this.zgNodegzt("lbl_info3/check", e).active = this.seleIndx == t
              }
            }), e)
          }
          this.gsButtongbs("btn_2", (() => {
            let t = o[this.seleIndx].need;
            r.constNeedTabgs(t, (() => {
              c.activitySuccess(7, 2, {
                num: this.seleIndx + 1
              }), this.endEven(o[this.seleIndx])
            }), 15)
          }), this.bdog)
        }
        endEven(t) {
          let e = a.co_team_award.objs[t.id],
            s = [],
            n = r.sjNumgs(3, 6);
          n >= this.workArr.length && (n = this.workArr.length);
          for (let t = 0; t < n; t++) {
            let n = this.workArr[t];
            const i = d.findObjById("workInfo1", n),
              o = a.co_post.zgTableKey(i.postId),
              h = a.co_job.zgTableKey(i.jobId),
              c = e.filter((function(t) {
                return t.post_type.indexOf(o.type) >= 0
              })),
              g = r.sjTabGetgs(c);
            let u = this.typeAdd[g.type],
              b = r.sjNumgs(g.value1, g.value2),
              f = {};
            b *= h[this.addS[g.type]], f[u] = b, l.addWorkerAttr(n, f), s.push({
              id: n,
              teamId: g.id,
              add: [u, b]
            })
          }
          o.bossWshow(h, s), this.xiabanye()
        }
      }).m_name = "WTuanjian", g = u)) || g);
      e._RF.pop()
    }
  }
}));