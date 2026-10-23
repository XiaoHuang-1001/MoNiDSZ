System.register("chunks:///_virtual/WShenzao1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WShenzao3.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, o, i, n, h, l, c, d, a, g, r;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      o = t.ZGGSOfficeFx, i = t.gs_boss, n = t.gs_tabpr, h = t.gs_sql, l = t.gs_bmsg, c = t.gs_computer, d = t.gs_btxt, a = t.gs_phone
    }, function(t) {
      g = t.WShenzao3
    }, function(t) {
      r = t.minFunc
    }],
    execute: function() {
      var b, u;
      s._RF.push({}, "01a0fmrbr5JSY9KHgFtkHVU", "WShenzao1", void 0);
      const {
        ccclass: _,
        property: f
      } = e;
      t("WShenzao1", _("WShenzao1")(((u = class t extends o {
        constructor(...t) {
          super(...t), this.top = null, this.content = null, this.content2 = null, this.choose = [], this.chooseObj = {}, this.co_edu_up_ttt = null, this.chooseId = 0
        }
        xiabanye() {
          i.bossDieWin(t, 1)
        }
        load() {
          this.co_edu_up_ttt = n.co_edu_up.objs, this.top = this.zgNodegzt("top"), this.content2 = this.zgNodegzt("sw1", this.top), this.content = this.zgNodegzt("content", this.top)
        }
        init(t) {
          this.showWShenzao1(t)
        }
        showWShenzao1(t) {
          h.base.szFst = 0, console.log(t);
          let s = t.rens,
            e = t.eduId,
            o = n.co_edu.zgTableKey(e);
          this.gsTxtGradelbl("lbl_info3/lay/YMLabel2", o.grade, o.name, this.top);
          let i = this.co_edu_up_ttt[e];
          this.chooseId = i[0].id;
          let a = this.content.children,
            g = 0;
          for (let t = 0; t < a.length; t++) {
            let s = a[t],
              e = i[t];
            if (s.active = e, e) {
              this.gsTxtGradelbl("YMLabel1", e.grade, e.name, s), this.gsTxtStrbyNums("YMLabel2", 15, e.day, s), this.gsNeedConfigs("lay", e.need, s);
              let o = this.zgTogglegtts("lbl_info3", s);
              o.isChecked = this.chooseId == e.id;
              let i = this.zgLableglt("YMLabel1", s);
              if (i.unscheduleAllCallbacks(), this.gsButtongbs("btn", (() => {
                  this.chooseId = e.id, g = t;
                  for (let t = 0; t < a.length; t++) {
                    let s = a[t];
                    this.zgTogglegtts("lbl_info3", s).isChecked = !1
                  }
                  o.isChecked = !0
                }), s), e.need[0] > 0) {
                let t = () => {
                  let t = c.checkTabNeedgs(e.need);
                  this.gsLblCororgst1("lay/YMLabel", t, [25, 25, 25], s)
                };
                i.schedule(t, .3), t()
              }
            }
          }
          this.choose = [], this.chooseObj = {}, this.bindList(s), this.gsButtongbs("btn_3", (() => {
            r.activitySuccess(1, 1, {
              num: 0
            }), l.send(2300), this.xiabanye()
          }), this.top), this.gsButtongbs("btn_2", (() => {
            let t = [];
            for (let s in this.chooseObj) {
              let e = h.findObjById("workInfo1", s);
              t.push(e)
            }
            if (t.length >= 3) {
              r.activitySuccess(1, 2, {
                num: g + 1
              });
              let s = n.co_edu_up.zgTableKey(this.chooseId);
              c.constNeedTabgs(s.need, (() => {
                let e = [];
                for (let s = 0; s < t.length; s++) t[s].isEdu = 1, e.push(t[s].id);
                let o = {
                  tabId: s.id,
                  pos: e,
                  day: s.day
                };
                h.upEduInfo.arr.push(o), l.send(2305, e), this.xiabanye()
              }), 13)
            } else l.send(202, d.gsStringByTwo(107))
          }), this.top)
        }
        bindList(t) {
          let s = this.content2.children;
          for (let e = 0; e < s.length; e++) {
            let o = s[e],
              l = this.choose[e];
            this.zgNodegzt("node_2", o).active = l, this.zgNodegzt("node_3", o).active = !l;
            let c = 7;
            if (l) {
              this.gsWorkPic("node_2", l, o);
              const t = n.co_edu.zgTableKey(l.edu);
              this.gsTxtGradelbl("node_2/lbl_info3/YMLabel2", t.grade, t.name, o), c = n.co_post.zgTableKey(l.postId).grade
            }
            this.gsWorkTypePic3("node_1", `${c}`, o), this.gsButtongbs(o, (() => {
              let s = 0;
              l && (s = l.id);
              let o = {
                can: t,
                chooseObj: this.chooseObj,
                xuhao: e,
                workInfo1_id: s,
                _func: o => {
                  if (s && delete this.chooseObj[s], o) {
                    this.chooseObj[o] = 1;
                    let t = h.findObjById("workInfo1", o);
                    this.choose[e] = t
                  } else this.choose[e] = null;
                  this.bindList(t)
                }
              };
              i.bossWshow(g, o)
            }))
          }
          this.gsButtongbs("btn_5", (() => {
            this.keyNot(1, t)
          }), this.top), this.gsButtongbs("btn_4", (() => {
            this.keyWant(t)
          }), this.top)
        }
        keyNot(t, s) {
          this.choose = [], this.chooseObj = {}, 2 != t && this.bindList(s)
        }
        keyWant(t) {
          this.keyNot(2, t);
          let s = [];
          for (let e in t) {
            let o = t[e],
              i = a.returnOneAttr(o.id),
              n = {
                id: o.id,
                workInfo1_s: o,
                workAttr: i
              };
            s.push(n)
          }
          let e = h.sortType.shenzao;
          s.sort(((t, s) => 1 == e ? s.workAttr.allNum - t.workAttr.allNum : 2 == e ? s.workInfo1_s.jobId - t.workInfo1_s.jobId : 3 == e ? s.workAttr.pot - t.workAttr.pot : s.workAttr.amb - t.workAttr.amb));
          for (let t = 0; t < 3; t++) {
            let e = s[t];
            this.chooseObj[e.id] = 1;
            let o = e.workInfo1_s;
            this.choose[t] = o
          }
          this.bindList(t)
        }
      }).m_name = "WShenzao1", b = u)) || b);
      s._RF.pop()
    }
  }
}));