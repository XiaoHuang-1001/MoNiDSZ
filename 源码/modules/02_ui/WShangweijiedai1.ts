System.register("chunks:///_virtual/WShangweijiedai1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WShangweijiedai3.ts", "./WShangweijiedai2.ts", "./minFunc.ts", "./ZGGSPaipxxu.ts"], (function(t) {
  "use strict";
  var e, s, i, n, o, g, h, d, l, r, a, c, b, f;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, n = t.gs_boss, o = t.gs_computer, g = t.gs_btxt, h = t.gs_tabpr, d = t.gs_bmsg, l = t.gs_sql, r = t.gs_phone
    }, function(t) {
      a = t.WShangweijiedai3
    }, function(t) {
      c = t.WShangweijiedai2
    }, function(t) {
      b = t.minFunc
    }, function(t) {
      f = t.ZGGSPaipxxu
    }],
    execute: function() {
      var _, u;
      e._RF.push({}, "7e16fZt97JOXocd1vcw3RS1", "WShangweijiedai1", void 0);
      const {
        ccclass: p,
        property: w
      } = s;
      t("WShangweijiedai1", p("WShangweijiedai1")(((u = class t extends i {
        constructor(...t) {
          super(...t), this.bdog = null, this.step = 1, this.seleIndx = 0, this.workArr = [0, 0, 0], this.showInfo = []
        }
        xiabanye() {
          n.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsTxtLblgs("lbl_info2/YMLabel1", o.sjTabGetgs(g.gsStringHelpIn(109)), this.bdog)
        }
        init(t) {
          this.step = t.step;
          const e = h.co_serve.zgTableKey(this.step);
          this.gsTxtGradelbl("lbl_info3/lay/YMLabel2", e.grade, e.name, this.bdog), this.initRole();
          const s = t.showInfo;
          let i = this.zgNodegzt("content", this.bdog);
          for (let t = 0; t < 3; t++) {
            let e = i.children[t];
            const n = s[t];
            this.gsTxtGradelbl("YMLabel1", n.grade, n.name, e), this.gsNeedConfigs("lay", n.need, e), this.gsScheduleStnode("lbl_info3", (() => {
              let t = o.checkTabNeedgs(n.need);
              this.gsLblCororgst1("lay/YMLabel", t, [25, 25, 25], e)
            }), .3, !1, e), this.zgNodegzt("lbl_info3/check", e).active = this.seleIndx == t, this.gsButtongbs("lbl_info3/btn", (() => {
              this.seleIndx = t;
              for (let t = 0; t < i.children.length; t++) {
                const e = i.children[t];
                this.zgNodegzt("lbl_info3/check", e).active = this.seleIndx == t
              }
            }), e)
          }
          this.gsButtongbs("btn_2", (() => {
            for (const t of this.workArr)
              if (t <= 0) return void d.send(202, g.gsStringByTwo(107));
            let t = s[this.seleIndx].need;
            o.constNeedTabgs(t, (() => {
              b.activitySuccess(10, 2, {
                num: this.seleIndx + 1
              }), l.companyInfo.swjd += 1, this.endEven(s[this.seleIndx])
            }), 9)
          }), this.bdog), this.gsButtongbs("btn_3", (() => {
            b.activitySuccess(10, 1, {
              num: 0
            }), d.send(2300), this.xiabanye()
          }), this.bdog), this.gsButtongbs("btn_4", (() => {
            let t = o.getWorkArrchucaiStep([], this.step);
            t.sort(f.fightSort(l.sortType.shangwuSort));
            for (let e = 0; e < this.workArr.length; e++) {
              let s = t[e] || 0;
              this.workArr[e] = s
            }
            this.initRole()
          }), this.bdog), this.gsButtongbs("btn_5", (() => {
            this.workArr = [0, 0, 0], this.initRole()
          }), this.bdog)
        }
        initRole() {
          let t = this.zgNodegzt("sw1", this.bdog);
          for (let e = 0; e < 3; e++) {
            let s = t.children[e],
              i = this.workArr[e];
            this.infoRe(s, i, e), this.gsButtongbs(s, function() {
              n.bossWshow(a, {
                id: i,
                step: this.step,
                roleList: this.workArr,
                fun: t => {
                  t >= 0 && (this.workArr[e] = t, i = t, this.infoRe(s, i, e))
                }
              })
            }.bind(this))
          }
        }
        infoRe(t, e, s) {
          this.zgNodegzt("node_2", t).active = 0 != e, this.zgNodegzt("node_3", t).active = 0 == e;
          let i = 7;
          if (e > 0) {
            const s = l.findObjById("workInfo1", e);
            this.gsSprHtsst("node_2/icon", s.sprId, t), this.gsTxtLblgs("node_2/YMLabel2", s.name, t);
            const n = h.co_job.zgTableKey(s.jobId);
            this.zgNodegzt("node_2/lbl_info", t).active = 1 != s.id, n && (this.gsWorkTypePic2("node_2/lbl_info", n.grade, t), this.gsTxtGradelbl("node_2/lbl_info/YMLabel1", n.grade, n.name, t));
            const o = h.co_edu.zgTableKey(s.edu);
            this.gsTxtGradelbl("node_2/lbl_info1/YMLabel2", o.grade, o.name, t);
            const g = h.co_post.zgTableKey(s.postId);
            g && (this.gsWorkTypePic1("node_2/node_1", g.grade, t), this.gsTxtGradelbl("node_2/node_1/YMLabel1", g.grade, g.name, t)), i = g.grade
          }
          this.gsWorkTypePic3("node_1", `${i}`, t)
        }
        endEven(t) {
          let e = t.day || 0,
            s = [];
          for (const t of this.workArr)
            if (t > 1) {
              let i = r.addExpUpById(t, e);
              s.push({
                id: t,
                info: i
              })
            } n.bossWshow(c, {
            info: s,
            table: t
          }), this.xiabanye()
        }
      }).m_name = "WShangweijiedai1", _ = u)) || _);
      e._RF.pop()
    }
  }
}));