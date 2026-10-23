System.register("chunks:///_virtual/Wshebei.ts", ["cc", "./ZGGSOfficeFx.ts", "./CurListView.ts", "./ZGGSRedHdian.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var e, s, i, n, l, o, h, c, g, a, b, d, u, _;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator, i = t.Animation
    }, function(t) {
      n = t.ZGGSOfficeFx, l = t.gs_bmsg, o = t.gs_boss, h = t.gs_tabpr, c = t.gs_sql, g = t.gs_computer, a = t.gs_btxt, b = t.gs_sound
    }, function(t) {
      d = t.CurListView
    }, function(t) {
      u = t.ZGGSRedHdian
    }, function(t) {
      _ = t.minFunc
    }],
    execute: function() {
      var r, f;
      e._RF.push({}, "9c7bcRQ4rtPAbh1A4qOfnTN", "Wshebei", void 0);
      const {
        ccclass: v,
        property: m
      } = s;
      t("Wshebei", v("Wshebei")(((f = class t extends n {
        constructor(...t) {
          super(...t), this.co_dep_ttt = null, this.co_device_ttt = null, this.co_device_tttt = null, this.svCtl1 = null, this.svCtl2 = null, this.content = null, this.selIndex = 0, this.co_device_tt = null
        }
        pohuiPage() {
          l.send(2100, !1), o.bossDieWin(t, 2)
        }
        load() {
          this.co_device_tttt = h.co_device.objs, this.co_dep_ttt = h.co_dep.objs, this.svCtl1 = this.zgNodegzt("sw1").getComponent(d), this.svCtl2 = this.zgNodegzt("sw2").getComponent(d), this.content = this.zgNodegzt("sw1/view/content"), this.gsButtongbs("YMSpriteSplash", (() => {
            c.config.guideId >= 1e3 && this.pohuiPage()
          })), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this)), _.activityUnlock(1)
        }
        init() {
          _.activityEnter(1), l.send(2100, !0), this.showInfo()
        }
        showInfo() {
          let t = [];
          for (let e in this.co_device_tttt) {
            let s = c.findObjById("shebeiInfo", e),
              i = h.co_dep.zgTableKey(e);
            if (c.combmInfo.objs[e]) {
              let n = this.co_device_tttt[e],
                l = 99999999999,
                o = 0;
              for (let t = 1; t <= 6; t++) {
                let e = n[t][s.pos[t]];
                e && l > e.need[1] && (l = e.need[1], o = t)
              }
              let h = {
                id: Number(e),
                minType: o,
                min: l,
                shebeiInfo_s: s,
                state: 1,
                set: i.set[1]
              };
              t.push(h)
            } else {
              let n = {
                id: Number(e),
                minType: 0,
                min: 0,
                shebeiInfo_s: s,
                state: 2,
                set: i.set[1]
              };
              t.push(n)
            }
          }
          t.sort(((t, e) => t.set - e.set));
          let e = 99999999999,
            s = 0;
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            e > n.min && n.min > 0 && (e = n.min, s = i)
          }
          console.log(t, 665566, s), this.svCtl1.init(t, function(t, e, s) {
            this.bindTips(t, e, s)
          }.bind(this));
          let i = this.content.children;
          this.scheduleOnce(function() {
            i.length > 0 && this.gsButtongbsx(i[s])
          }.bind(this), 0)
        }
        bindTips(t, e, s) {
          let i = e.id,
            n = h.co_dep.zgTableKey(i);
          t.dep_id = i;
          let o = c.findObjById("shebeiInfo", i);
          this.gsTxtLblgs("YMLabel1", n.name, t), t.getChildByName("kai").active = s == this.selIndex, t.getChildByName("guan").active = s != this.selIndex, this.zgBtngbt(t).interactable = s != this.selIndex;
          g.gsAllNumGet();
          t.getChildByName("suo").active = !c.combmInfo.objs[i], this.gsButtongbs(t, function(t) {
            if (!c.combmInfo.objs[i]) {
              let t = a.gsStringByParam(204, n.set[1]);
              return void l.send(202, t)
            }
            this.selIndex = s, this.gsBtnArrStatests(t.target), this.co_device_ttt = this.co_device_tttt[i];
            this.svCtl2.init([1, 2, 3, 4, 5, 6], function(t, e, s) {
              this.bindInfo(t, e, s, i)
            }.bind(this))
          }.bind(this));
          let b = this.zgLableglt("YMLabel1", t);
          b.unscheduleAllCallbacks();
          let d = function() {
            this.zgNodegzt("read", t).active = u.shebeiRed2(o)
          }.bind(this);
          b.schedule(d, .3), d()
        }
        bindInfo(t, e, s, n) {
          let l = c.findObjById("shebeiInfo", n),
            o = this.co_device_tttt[n][e],
            h = l.pos[e],
            a = o[h - 1],
            d = o[h];
          this.zgNodegzt("btn_1", t).active = d && !a, this.zgNodegzt("btn_2", t).active = d && a, this.zgNodegzt("btn_3", t).active = !d, this.zgNodegzt("Layout", t).active = d;
          let u = this.zgLableglt("btn_1/YMLabel1", t);
          if (u.unscheduleAllCallbacks(), a ? (this.gsTxtLblgs("lay1/YMLabel1", a.des, t), this.gsTxtStrbyNums("lay1/YMLabel2/Node-001", 306, a.exp, t), this.gsTxtGradelbl("lbl_info4/YMLabel2", a.grade, a.name, t), this.gsTxtLblgs("lbl_info4/lay/YMLabel4", a.lv, t)) : (this.gsTxtLblgs("lay1/YMLabel1", d.des, t), this.gsTxtStrbyNums("lay1/YMLabel2/Node-001", 306, d.exp, t), this.gsTxtGradelbl("lbl_info4/YMLabel2", d.grade, d.name, t), this.gsTxtLblgs("lbl_info4/lay/YMLabel4", d.lv, t)), d) {
            let o = this.zgNodegzt("shengji", t);
            o.active = !0;
            let h = o.getComponent(i),
              r = d.need;
            c.cache.yindaoStop && (r = [0]), this.gsNeedConfigs("Layout", r, t);
            let f = g.checkTabNeedgs(r);
            this.gsLblCororgst1("Layout/YMLabel", f, [49, 49, 49], t);
            let v = i => {
              g.constNeedTabgs(r, (() => {
                b.playOne("uplv"), l.pos[e] = d.lv, l.use[e] = d.lv, this.gsNodeBigSmallgOnens("lbl_info4/lay", t, .15), this.gsNodeBigSmallgOnens("lay1/YMLabel2/Node-001", t, .15), o.active = !0, h.play();
                let i = {
                  data_t: d
                };
                _.activityStart(1, i), g.shebeiChange(n, d, a), this.bindInfo(t, e, s, n)
              }), i)
            };
            this.gsButtongbs("btn_1", (() => {
              v(10)
            }), t);
            let m = function() {
              f = g.checkTabNeedgs(r), this.gsLblCororgst1("Layout/YMLabel", f, [49, 49, 49], t)
            }.bind(this);
            u.schedule(m, .5), m(), this.gsButtongbs("btn_2", (() => {
              v(11)
            }), t)
          }
        }
      }).m_name = "Wshebei", r = f)) || r);
      e._RF.pop()
    }
  }
}));