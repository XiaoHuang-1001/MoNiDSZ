System.register("chunks:///_virtual/WChongdian1.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, o, i, n, c, l, a, h;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      o = t.ZGGSOfficeFx, i = t.gs_boss, n = t.gs_tabpr, c = t.gs_www, l = t.gs_computer, a = t.gs_sql
    }, function(t) {
      h = t.minFunc
    }],
    execute: function() {
      var d, g;
      s._RF.push({}, "93a3bB5TWNC/YpYIkcFkIHY", "WChongdian1", void 0);
      const {
        ccclass: u,
        property: b
      } = e;
      t("WChongdian1", u("WChongdian1")(((g = class t extends o {
        constructor(...t) {
          super(...t), this.top = null, this.content = null, this.co_study_ttt = null, this.maidianGG1 = 15
        }
        xiabanye() {
          i.bossDieWin(t, 1)
        }
        load() {
          this.co_study_ttt = n.co_study.objs, this.top = this.zgNodegzt("top"), this.content = this.zgNodegzt("content", this.top)
        }
        init(t) {
          this.showWChongdian1(t)
        }
        showWChongdian1(t) {
          let s = t.json,
            e = s.co_class_t;
          this.showList(s.co_study_tt), this.gsButtongbs("guanbi", (() => {
            t._func(1, s.co_study_tt, s.notRed), this.xiabanye()
          }), this.top), this.gsTxtLblgs("title", e.name, this.top);
          let o = this.zgNodegzt("cost", this.top);
          h.ggbtnPlay(this.zgNodegzt("Node2/btn_3", o), this.maidianGG1), this.gsButtongbs("Node2/btn_3", (() => {
            c.GGShowVido(this.maidianGG1, (() => {
              h.activitySuccess(29, 2, null);
              let t = [],
                i = this.co_study_ttt[e.id],
                n = {};
              for (; t.length < 5;) {
                let s = l.sjNumgs(8751, 1e4);
                for (let e = 0; e < i.length; e++) {
                  let o = i[e];
                  if (o.rate1 <= s && s <= o.rate2) {
                    n[o.id] || (n[o.id] = 1, t.push(o));
                    break
                  }
                }
              }
              s.co_study_tt = t, s.notRed = !1, this.zgNodegzt("Node2", o).active = s.notRed, this.showList(s.co_study_tt)
            }))
          }), o);
          let i = [1, s.bmfee];
          this.gsNeedConfigs("Node/cost", i, o);
          let n = this.zgLableglt("Node/cost/YMLabel", o);
          n.unscheduleAllCallbacks();
          let d = () => {
            let t = l.checkTabNeedgs(i);
            this.gsLblCororgst1("Node/cost/YMLabel", t, [25, 25, 25], o)
          };
          n.schedule(d, .3), d(), this.gsButtongbs("Node/btn_2", (() => {
            l.constNeedTabgs(i, (() => {
              h.activitySuccess(29, 1, null);
              let o = 0,
                i = 0,
                n = s.co_study_tt;
              for (let t = 0; t < n.length; t++) {
                let s = n[t];
                o += s.value, i += s.day
              }
              let c = a.createNewObj2("chargeInfo", e.id);
              c.day = i, c.add = o, c.gold = s.bmfee, t._func(2), this.xiabanye()
            }), 22)
          }), o), this.zgNodegzt("Node2", o).active = s.notRed
        }
        showList(t) {
          let s = this.content.children,
            e = 0;
          for (let o = 0; o < t.length; o++) {
            let i = s[o],
              n = t[o];
            this.gsTxtGradelbl("YMLabel1", n.grade, n.name, i), this.gsTxtStrbyNums("lay/YMLabel", 21, n.day, i), e += n.value
          }
          this.gsTxtStrbyNums("lbl_info2/YMLabel1", 22, e, this.top)
        }
      }).m_name = "WChongdian1", d = g)) || d);
      s._RF.pop()
    }
  }
}));