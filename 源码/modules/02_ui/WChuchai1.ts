System.register("chunks:///_virtual/WChuchai1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WChuchai3.ts", "./minFunc.ts", "./ZGGSPaipxxu.ts"], (function(t) {
  "use strict";
  var s, e, i, o, h, n, l, r, a, c, g, d;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, o = t.gs_boss, h = t.gs_computer, n = t.gs_btxt, l = t.gs_sql, r = t.gs_tabpr, a = t.gs_bmsg
    }, function(t) {
      c = t.WChuchai3
    }, function(t) {
      g = t.minFunc
    }, function(t) {
      d = t.ZGGSPaipxxu
    }],
    execute: function() {
      var b, u;
      s._RF.push({}, "79e228CFk9ErJMEcZXeeX2m", "WChuchai1", void 0);
      const {
        ccclass: f,
        property: _
      } = e;
      t("WChuchai1", f("WChuchai1")(((u = class t extends i {
        constructor(...t) {
          super(...t), this.bdog = null, this.step = 1, this.seleIndxArr = [1, 1, 1, 1], this.workArr = [0, 0, 0], this.chucaiDay = [7, 10, 15, 20, 30, 60], this.ccDay = 7, this.roleCost = 0, this.allCost = 0, this.addValue = 0, this.type = 0
        }
        xiabanye() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.type = h.sjNumgs(0, n.gsStringHelpIn(110).length - 1), this.gsTxtLblgs("lbl_info2/YMLabel1", n.gsStringHelpIn(110)[this.type], this.bdog), this.ccDay = h.sjTabGetgs(this.chucaiDay), this.gsTxtLblgs("lbl_info3/lay/YMLabel4", this.ccDay, this.bdog)
        }
        init(t) {
          l.base.ccFst = 0, this.step = t.step;
          const s = r.co_serve.zgTableKey(this.step);
          this.gsTxtGradelbl("lbl_info3/lay/YMLabel2", s.grade, s.name, this.bdog), this.initRole();
          const e = r.co_egress.values;
          let i = this.zgNodegzt("content", this.bdog);
          for (let t = 0; t < 4; t++) {
            let s = i.children[t];
            const o = e[t];
            this.gsTxtLblgs("YMLabel1", o.name, s);
            let n = o.value1 * this.ccDay;
            this.gsScheduleStnode(s, (() => {
              let t = [1, Math.floor(this.roleCost / 30 * n)];
              this.gsNeedConfigs("lay", t, s);
              let e = h.checkTabNeedgs(t);
              this.gsLblCororgst1("lay/YMLabel", e, [25, 25, 25], s)
            }), .3);
            let l = this.zgNodegzt("lbl_info3/check", s);
            l.active = this.seleIndxArr[t] > 0, this.seleIndxArr[t] > 0 && (this.addValue += o.value2), this.gsButtongbs("lbl_info3/btn", (() => {
              this.seleIndxArr[t] > 0 ? (this.seleIndxArr[t] = 0, this.allCost -= Math.floor(this.roleCost / 30 * n), this.addValue -= o.value2, l.active = !1) : (this.seleIndxArr[t] = 1, this.allCost += Math.floor(this.roleCost / 30 * n), this.addValue += o.value2, l.active = !0)
            }), s)
          }
          this.gsButtongbs("btn_2", (() => {
            for (const t of this.workArr)
              if (t <= 0) return void a.send(202, n.gsStringByTwo(107));
            let t = !0,
              s = 0;
            for (const e of this.seleIndxArr) e > 0 && (s += 1, t = !1);
            if (t) return void a.send(202, n.gsStringByTwo(108));
            let e = [1, this.allCost];
            h.constNeedTabgs(e, (() => {
              g.activitySuccess(8, 2, {
                num: s
              }), this.endEven()
            }), 2)
          }), this.bdog), this.gsButtongbs("btn_3", (() => {
            g.activitySuccess(8, 1, {
              num: 0
            }), a.send(2300), this.xiabanye()
          }), this.bdog), this.gsButtongbs("btn_4", (() => {
            let t = h.getWorkArrchucaiStep([], this.step);
            t.sort(d.fightSort(l.sortType.chucaiSort));
            for (let s = 0; s < this.workArr.length; s++) {
              let e = t[s] || 0;
              this.workArr[s] = e
            }
            this.initRole(), this.initAllCost()
          }), this.bdog), this.gsButtongbs("btn_5", (() => {
            this.workArr = [0, 0, 0], this.initRole(), this.initAllCost()
          }), this.bdog)
        }
        initRole() {
          let t = this.zgNodegzt("sw1", this.bdog);
          for (let s = 0; s < 3; s++) {
            let e = t.children[s],
              i = this.workArr[s];
            this.infoRe(e, i, s), this.gsButtongbs(e, function() {
              o.bossWshow(c, {
                id: i,
                step: this.step,
                roleList: this.workArr,
                fun: t => {
                  t >= 0 && (this.workArr[s] = t, i = t, this.infoRe(e, i, s), this.initAllCost())
                }
              })
            }.bind(this))
          }
        }
        initAllCost() {
          this.roleCost = 0;
          for (const t of this.workArr)
            if (t > 0) {
              const s = l.ALLWORKER[t];
              this.roleCost += s.salary || 0
            } this.allCost = 0;
          const t = r.co_egress.values;
          for (let s = 0; s < 4; s++) {
            if (this.seleIndxArr[s] <= 0) continue;
            const e = t[s];
            this.allCost += Math.floor(this.roleCost / 30 * e.value1 * this.ccDay)
          }
        }
        infoRe(t, s, e) {
          this.zgNodegzt("node_2", t).active = 0 != s, this.zgNodegzt("node_3", t).active = 0 == s;
          let i = 7;
          if (s > 0) {
            const e = l.findObjById("workInfo1", s);
            this.gsSprHtsst("node_2/icon", e.sprId, t), this.gsTxtLblgs("node_2/YMLabel2", e.name, t);
            const o = r.co_job.zgTableKey(e.jobId);
            this.zgNodegzt("node_2/lbl_info", t).active = 1 != e.id, o && (this.gsWorkTypePic2("node_2/lbl_info", o.grade, t), this.gsTxtGradelbl("node_2/lbl_info/YMLabel1", o.grade, o.name, t));
            const h = r.co_edu.zgTableKey(e.edu);
            this.gsTxtGradelbl("node_2/lbl_info1/YMLabel2", h.grade, h.name, t);
            const n = r.co_post.zgTableKey(e.postId);
            n && (this.gsWorkTypePic1("node_2/node_1", n.grade, t), this.gsTxtGradelbl("node_2/node_1/YMLabel1", n.grade, n.name, t)), i = n.grade
          }
          this.gsWorkTypePic3("node_1", `${i}`, t)
        }
        endEven() {
          let t = {
            role: this.workArr,
            add: this.addValue * this.ccDay,
            bt: this.seleIndxArr,
            day: this.ccDay,
            type: this.type,
            step: this.step
          };
          for (const t of this.workArr) t > 0 && (l.workInfo1.objs[t].chucai = 1);
          l.chucaiInfo.ccInfo.push(t), a.send(2304, this.workArr), this.xiabanye()
        }
      }).m_name = "WChuchai1", b = u)) || b);
      s._RF.pop()
    }
  }
}));