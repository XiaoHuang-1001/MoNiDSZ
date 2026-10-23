System.register("chunks:///_virtual/WLizhi1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WLizhi2.ts", "./WLizhi3.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, i, o, n, l, a, g, b, d, h, r, c;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, o = t.gs_boss, n = t.gs_tabpr, l = t.gs_sql, a = t.gs_computer, g = t.gs_phone, b = t.gs_btxt, d = t.gs_bmsg
    }, function(t) {
      h = t.WLizhi2
    }, function(t) {
      r = t.WLizhi3
    }, function(t) {
      c = t.minFunc
    }],
    execute: function() {
      var u, _;
      s._RF.push({}, "9ea8ex/7oZF5YiAYMXcQJuQ", "WLizhi1", void 0);
      const {
        ccclass: L,
        property: y
      } = e;
      t("WLizhi1", L("WLizhi1")(((_ = class t extends i {
        constructor(...t) {
          super(...t), this.bdog = null, this.co_resign_ttt = null
        }
        xiabanye() {
          o.bossDieWin(t, 1)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.co_resign_ttt = n.co_resign.objs
        }
        init(t) {
          this.showWLizhi1(t)
        }
        showWLizhi1(t) {
          let s = t.type,
            e = l.findObjById("workInfo1", t.id);
          console.log(t, e.depId);
          let i = this.co_resign_ttt[s],
            o = i[a.sjNumgs(0, i.length - 1)];
          this.gsTxtLblgs("lbl_info3/YMLabel1", o.content, this.bdog), this.showInfo(e, t), this.gsButtongbs("btn_1", (() => {
            c.activitySuccess(20, 1, null), this.dealResult(t)
          }), this.bdog), this.gsButtongbs("btn_2", (() => {
            c.activitySuccess(20, 2, null), this.leaveDeal(t.id)
          }), this.bdog)
        }
        showInfo(t, s) {
          let e = this.zgNodegzt("icon_layout", this.bdog),
            i = g.returnOneAttr(t.id);
          this.gsSprHtsst("spr1/icon", t.sprId, this.bdog), this.gsTxtLblgs("spr1/node_2/YMLabel1", t.name, this.bdog);
          let o = n.co_post.zgTableKey(t.postId),
            l = n.co_job.zgTableKey(t.jobId),
            d = n.co_job.zgTableKey(t.jobId + 1),
            h = n.co_edu.zgTableKey(t.edu);
          if (this.gsTxtGradelbl("node_3/YMLabel2", o.grade, o.name, e), this.gsEmpGonghao("node_6/YMLabel2", t.id, e), 1 == t.id ? (this.gsTxtLblgs("node_2/YMLayout/YMLabel2", b.gsNorStringType(27), e), this.gsTxtLblgs("node_8/YMLabel2", b.gsNorStringType(27), e)) : (this.gsTxtGradelbl("node_2/YMLayout/YMLabel2", l.grade, l.name, e), this.gsTxtStrbyNums("node_8/YMLabel2", 101, i.salary, e)), this.zgNodegzt("node_2/YMLayout/YMLabel1", e).active = d && 1 != t.id, this.zgNodegzt("node_2/YMLayout/YMLabel3", e).active = d && 1 != t.id, this.zgNodegzt("node_2/YMLayout/YMLabel4", e).active = d && 1 != t.id, d) {
            let s = Math.floor(t.exp / d.exp * 100);
            s >= 100 ? this.gsTxtLblgs("node_2/YMLayout/YMLabel1", b.gsStringHelpIn(6), e) : this.gsTxtLblgs("node_2/YMLayout/YMLabel1", `${s}%`, e)
          }
          this.gsTxtGradelbl("node_5/YMLabel2", h.grade, h.name, e), this.gsTxtStrbyNums("node_4/YMLabel2", 102, i.earn, e), this.gsTxtStrbyNums("node_7/YMLabel2", 102, i.workExp, e);
          let r = a.haveJoinStr(t.join);
          this.gsTxtLblgs("node_9/YMLabel2", r, e), this.gsTxtStrbyNums("node_11/YMLabel2", 4, s.potRank, e), this.gsTxtStrbyNums("node_10/YMLabel2", 4, s.ambRank, e), this.gsTxtStrbyNums("node_13/YMLabel2", 4, i.pot, e), this.gsTxtStrbyNums("node_12/YMLabel2", 4, i.amb, e)
        }
        dealResult(t) {
          let s = t.id,
            e = 100;
          2 == t.type && (e = 75);
          let i = a.sjNumgs(1, 100),
            n = !1;
          if (i <= e && (n = !0), this.node.active = !1, console.log(e, i, "离职"), n) {
            let t = {
              id: s,
              _func: () => {
                let t = {
                  id: s,
                  roleArr: [],
                  face: 307
                };
                d.send(2302, t), this.xiabanye()
              }
            };
            o.bossWshow(h, t)
          } else {
            let t = {
              id: s,
              _func: () => {
                this.leaveDeal(s)
              }
            };
            o.bossWshow(r, t)
          }
        }
        leaveDeal(t) {
          this.xiabanye();
          let s = {
            id: t
          };
          d.send(2306, s)
        }
      }).m_name = "WLizhi1", u = _)) || u);
      s._RF.pop()
    }
  }
}));