System.register("chunks:///_virtual/Wbumenshijian.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(e) {
  "use strict";
  var t, s, i, n, a, h, l, o, d, g;
  return {
    setters: [function(e) {
      t = e.cclegacy, s = e._decorator
    }, function(e) {
      i = e.ZGGSOfficeFx, n = e.gs_boss, a = e.gs_bmsg, h = e.gs_tabpr, l = e.gs_phone, o = e.gs_btxt, d = e.gs_computer
    }, function(e) {
      g = e.minFunc
    }],
    execute: function() {
      var r, c;
      t._RF.push({}, "53ab6wU7pJBQa5c2pQXAp2x", "Wbumenshijian", void 0);
      const {
        ccclass: b,
        property: _
      } = s;
      e("Wbumenshijian", b("Wbumenshijian")(((c = class e extends i {
        constructor(...e) {
          super(...e), this.hezi = null, this.co_dep_event_ttt = null
        }
        pohuiPage(t, s) {
          n.bossDieWin(e, 1);
          let i = {
            id: t,
            roleArr: [],
            face: s
          };
          a.send(2302, i)
        }
        load() {
          this.co_dep_event_ttt = h.co_dep_event.objs, this.hezi = this.zgNodegzt("top"), this.gsButtongbs("btn_2", function() {
            this.pohuiPage()
          }.bind(this), this.hezi)
        }
        init(e) {
          this.showInfo2(e)
        }
        showInfo2(e) {
          console.log("员工Id", e.workInfo1_s.id), this.bindInfo(e)
        }
        bindInfo(e) {
          let t = e.workInfo1_s,
            s = e.co_dep_event_t,
            i = this.zgNodegzt("spr1", this.hezi);
          this.gsWorkPic(i, t);
          let n = l.returnOneAttr(t.id),
            r = n.salary;
          console.log(n, "workAttr2123"), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, n.pot, i), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, n.amb, i), console.log(s, "co_dep_event_t"), this.gsTxtLblgs("lbl_info3/YMLabel1", s.content, this.hezi), this.gsTxtLblgs("btn_1/title", s.answer1, this.hezi), this.gsTxtLblgs("btn_2/title", s.answer2, this.hezi);
          let c = h.co_dep.zgTableKey(t.depId).name,
            b = s.content;
          b = b.replace("x%", t.name).replace("y%", c), this.gsTxtLblgs("lbl_info3/YMLabel1", b, this.hezi);
          let _ = h.co_dep.zgTableKey(s.dep_id1),
            u = `${_.id}aa`;
          _.step >= 5 && (u = `${_.higher_id}aa`), this.gsSprstHtByUIs("lbl_info2/icon", u, this.hezi), this.gsSprstHtByUIs("lbl_info2", `zpz0${_.step}`, this.hezi), this.gsTxtLblgs("lbl_info2/YMLabel1", _.name, this.hezi), this.zgNodegzt("lay1", this.hezi).active = !1;
          let z = [0],
            p = [0];
          s.need1[0] && (6 == s.need1[0] ? (z = [1, s.need1[1] * r], s.need1[0]) : z = s.need1, this.gsNeedConfigs("lay1", z, this.hezi)), this.zgNodegzt("lay2", this.hezi).active = s.award1[0], s.award1[0] && (p = 6 == s.award1[0] ? [1, s.award1[1] * r] : s.award1, this.gsNeedConfigs("lay2", p, this.hezi), this.gsTxtLblgs("lay2/YMLabel-001", o.gsNeedAward(p[0]), this.hezi)), this.gsButtongbs("btn_1", (() => {
            let e = () => {
              this.pohuiPage(t.id, s.emote1)
            };
            d.constNeedTabgs(z, (() => {
              if (g.activitySuccess(14, 1, {
                  num: 1
                }), 1 == s.award1[0] ? a.send(211, 1, {}) : 2 == s.award1[0] ? a.send(211, 2, {}) : 3 == s.award1[0] ? a.send(211, 3, {}) : 6 == s.award1[0] && a.send(211, 1, {}), 4 == s.award1[0]) {
                let t = s.award1[1];
                d.addPingfenGs(t), a.send(206, o.gsStringByParam(113, t)), e()
              } else d.getNeedTabgs(p, (() => {
                e()
              }), 2)
            }), 1)
          }), this.hezi), this.zgNodegzt("lay3", this.hezi).active = s.need2[0];
          let f = [0];
          s.need2[0] && (f = 6 == s.need2[0] ? [1, s.need2[1] * r] : s.need2, this.gsNeedConfigs("lay3", f, this.hezi)), this.zgNodegzt("lay4", this.hezi).active = s.award2[0], s.award2[0] && this.gsNeedConfigs("lay4", s.award2, this.hezi), this.gsButtongbs("btn_2", (() => {
            let e = () => {
              this.pohuiPage(t.id, s.emote2)
            };
            d.constNeedTabgs(f, (() => {
              if (g.activitySuccess(14, 2, {
                  num: 2
                }), 4 == s.award2[0]) {
                let t = s.award2[1];
                d.addPingfenGs(t), a.send(206, o.gsStringByParam(113, t)), e()
              } else d.getNeedTabgs(s.award2, (() => {
                e()
              }), 2)
            }), 1)
          }), this.hezi);
          let w = this.zgLableglt("title", this.hezi);
          w.unscheduleAllCallbacks();
          let y = function() {
            let e = d.checkTabNeedgs(z);
            this.gsLblCororgst1("lay1/YMLabel", e, [49, 49, 49], this.hezi);
            let t = d.checkTabNeedgs(f);
            this.gsLblCororgst1("lay3/YMLabel", t, [49, 49, 49], this.hezi)
          }.bind(this);
          w.schedule(y, .5), y()
        }
      }).m_name = "Wbumenshijian", r = c)) || r);
      t._RF.pop()
    }
  }
}));