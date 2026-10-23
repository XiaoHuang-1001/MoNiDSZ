System.register("chunks:///_virtual/Wkaohe.ts", ["cc", "./ZGGSOfficeFx.ts", "./CurListView.ts", "./Wkaohe1.ts", "./ZGGSRedHdian.ts", "./ZGGSScrollviewsvi.ts", "./ZGGSLayoutlist.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var e, s, i, o, n, l, h, c, d, g, a, b, _, u, r, k, f, m, p;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator, i = t.v2, o = t.Animation
    }, function(t) {
      n = t.ZGGSOfficeFx, l = t.gs_boss, h = t.gs_bmsg, c = t.gs_tabpr, d = t.gs_btxt, g = t.gs_sql, a = t.gs_computer, b = t.gs_sound, _ = t.gs_phone
    }, function(t) {
      u = t.CurListView
    }, function(t) {
      r = t.Wkaohe1
    }, function(t) {
      k = t.ZGGSRedHdian
    }, function(t) {
      f = t.ZGGSScrollviewsvi
    }, function(t) {
      m = t.ZGGSLayoutlist
    }, function(t) {
      p = t.minFunc
    }],
    execute: function() {
      var v, I;
      e._RF.push({}, "b0b8fh2QNNF3J393u04URLv", "Wkaohe", void 0);
      const {
        ccclass: y,
        property: z
      } = s;
      t("Wkaohe", y("Wkaohe")(((I = class t extends n {
        constructor(...t) {
          super(...t), this.top = null, this.svCtl1 = null, this.svCtl3 = null, this.content = null, this.content2 = null, this.sw1Com = null, this.content2Com = null, this.selIndex = 0, this.co_check_tt = null, this.co_check_lv_ttt = null, this.co_check_g = null, this.allRen = [], this.workInfo1_id = null, this.swCom = null
        }
        pohuiPage() {
          l.bossDieWin(t, 2), h.send(2100, !1)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.gsButtongbs("YMSpriteSplash", (() => {
            this.pohuiPage()
          })), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.top), this.co_check_tt = c.co_check.values, this.co_check_lv_ttt = c.co_check_lv.objs, this.svCtl1 = this.zgNodegzt("sw2").getComponent(u), this.swCom = this.zgNodegzt("sw2").getComponent(f), this.content = this.zgNodegzt("sw2/view/content"), this.sw1Com = this.zgNodegzt("lbl_2/sw1").getComponent(f), this.svCtl3 = this.zgNodegzt("lbl_2/sw1").getComponent(u), this.content2 = this.zgNodegzt("lbl_2/sw1/view/content"), this.content2Com = this.content2.getComponent(m), this.gsTxtLblgs("btn_2/YMLabel1", d.gsStringSortInfo(100, g.sortType.kaoheSet))
        }
        init() {
          p.activityEnter(4), h.send(2100, !0), this.showInfo()
        }
        showInfo() {
          this.gsButtongbs("btn_2", (() => {
            this.yijianshezhi()
          })), this.gsButtongbs("btn_2/suo", (() => {
            this.sortShow(0)
          })), this.gsButtongbs("btn_1", (() => {
            this.onekeyCancel(1)
          })), this.gsButtongbs("close", (() => {
            this.sortShow(0)
          })), this.zgNodegzt("content").active = !1, this.zgNodegzt("close").active = !1;
          let t = this.zgNodegzt("content").children;
          for (let e = 0; e < t.length; e++) {
            let s = t[e];
            s && (this.gsTxtLblgs("YMLabel1", d.gsStringSortInfo(100, e + 1), s), this.gsButtongbs(s, (() => {
              this.sortShow(e + 1)
            })))
          }
          let e = 99999999999,
            s = 0,
            o = [];
          for (let t = 0; t < this.co_check_tt.length; t++) {
            let i = this.co_check_tt[t],
              n = g.findObjById("kaoheInfo", i.id),
              l = 1,
              h = this.co_check_lv_ttt[i.id],
              c = (h[n.lv - 1], h[n.lv]);
            n.lock && c && e > c.need[1] && a.checkTabNeedgs(c.need) && (e = c.need[1], s = t), c ? 0 == n.lock && (l = 3) : l = 2;
            let d = {
              id: n.id,
              kaoheInfo_S: n,
              co_check_t: i,
              state: l
            };
            3 != l && o.push(d)
          }
          o.sort(((t, e) => t.id - e.id)), this.svCtl1.init(o, function(t, e, s) {
            this.bindTips(t, e, s)
          }.bind(this));
          let n = this.content.children;
          this.selIndex = s, this.scheduleOnce(function() {
            if (n.length > 0) {
              let t = 102 * (this.selIndex - 1);
              if (console.log(t, this.selIndex, "sfdsdf"), this.swCom.scrollToOffset(i(0, t), 0), this.selIndex < n.length) this.gsButtongbsx(n[this.selIndex]);
              else {
                let t = o[this.selIndex];
                this.bindTips2(t.co_check_t)
              }
            }
          }.bind(this), 0)
        }
        bindTips(t, e, s) {
          let i = e.co_check_t;
          t.khId = i.id, this.gsTxtLblgs("YMLabel1", i.name2, t), t.getChildByName("kai").active = s == this.selIndex, t.getChildByName("guan").active = s != this.selIndex, this.gsButtongbs(t, function(t) {
            this.selIndex = s, this.gsBtnArrStatests(t.target), this.bindTips2(i)
          }.bind(this));
          let o = g.findObjById("kaoheInfo", i.id),
            n = this.zgLableglt("YMLabel1", t);
          n.unscheduleAllCallbacks();
          let l = function() {
            this.zgNodegzt("read", t).active = k.kaoheRed2(o) || k.kaoheRed3(o)
          }.bind(this);
          n.schedule(l, .3), l()
        }
        bindTips2(t) {
          this.co_check_g = t;
          let e = this.zgLableglt("lbl_2/lbl_info1/YMLabel1");
          e.unscheduleAllCallbacks();
          let s = g.findObjById("kaoheInfo", t.id),
            i = this.co_check_lv_ttt[t.id],
            n = i[s.lv - 1],
            l = i[s.lv],
            h = g.findObjById("kaoheInfo", t.id),
            c = a.getshichangInfoById(h);
          this.gsTxtLblgs("lbl_2/node_3/lay/YMLabel3", a.gsNumValueShow(c));
          let d = n.num > c;
          if (this.gsLblCororgst2("lbl_2/node_3/lay/YMLabel3", !d, [52, 45, 43]), this.gsTxtLblgs("lbl_2/lbl_info1/YMLabel2", n.lv), this.gsTxtLblgs("lbl_2/lbl_info5/lay/YMLabel1", t.name1), this.gsTxtLblgs("lbl_2/lbl_info5/lay/YMLabel3", t.name2), this.gsTxtStrbyNums("lbl_2/node_3/lay/YMLabel2", 305, n.num), this.gsTxtStrbyNums("lbl_2/node_2/lay/YMLabel2", 303, n.add), this.zgNodegzt("lbl_2/item1").active = l, this.zgNodegzt("lbl_2/btn_5").active = !l, l) {
            let i = this.content2.children;
            this.gsNeedConfigs("lbl_2/item1/lay2", l.need);
            let n = a.checkTabNeedgs(l.need);
            this.gsTxtStrbyNums("lbl_2/item1/tit2/txt2", 303, l.add), this.gsTxtStrbyNums("lbl_2/item1/tit3/txt2", 304, l.num), this.gsButtongbs("lbl_2/item1/btn_1", (() => {
              a.constNeedTabgs(l.need, (() => {
                b.playOne("market"), s.lv += 1, s.lv > 6 && (console.log("滑动", s.lv), this.content2Com.updateLayout(), this.scheduleOnce((() => {
                  this.sw1Com.stopAutoScroll(), this.sw1Com.scrollToBottom()
                }), 0)), this.gsNodeBigSmallgOnens("lbl_2/node_2/lay/YMLabel2", null, .15), this.gsNodeBigSmallgOnens("lbl_2/node_3/lay/YMLabel2", null, .15);
                let e = i[h.lv - 1];
                e.active = !0;
                let n = this.zgNodegzt("shengji", e);
                n.active = !0, n.getComponent(o).play();
                let c = {
                  data_t: l
                };
                p.activityStart(4, c), this.bindTips2(t)
              }), 5)
            }));
            let c = function() {
              n = a.checkTabNeedgs(l.need), this.gsLblCororgst1("lbl_2/item1/lay2/YMLabel", n, [49, 49, 49])
            }.bind(this);
            e.schedule(c, .5), c()
          }
          this.bindTips3(n, l, t, s)
        }
        bindTips3(t, e, s, i) {
          let o = this.content2.children;
          for (let n = 0; n < o.length; n++) {
            let h = o[n];
            if (h.active = t.lv >= n + 1, h.active) {
              if (this.zgNodegzt("node_3", h).active = n < i.lv, this.zgNodegzt("node_2", h).active = i.num[n], this.zgNodegzt("node_3", h).active = !i.num[n], i.num[n]) {
                let t = g.findObjById("workInfo1", i.num[n]);
                const e = c.co_post.zgTableKey(t.postId);
                this.zgNodegzt("node_1", h) && this.gsSprstHtByUIs("node_1", `gsy0${e.grade}`, h), this.gsSprHtsst("node_2/icon", t.sprId, h), this.gsTxtLblgs("node_2/YMLabel2", t.name, h)
              } else this.gsSprstHtByUIs("node_1", "gsy07", h);
              this.gsButtongbs(h, (() => {
                let o = {
                  workInfo1_id: i.num[n],
                  co_check_t: s,
                  kaoheInfo_S: i,
                  xuhao: n,
                  _func: o => {
                    i.num[n] && _.countWorkExp(i.num[n]), i.num[n] = o, o && _.countWorkExp(o), this.bindTips3(t, e, s, i), this.bindTips2(s)
                  }
                };
                l.bossWshow(r, o)
              }))
            }
          }
        }
        sortShow(t) {
          if (t && t > 0) g.sortType.kaoheSet = t, this.gsTxtLblgs("btn_2/YMLabel1", d.gsStringSortInfo(100, t)), this.yijianshezhi(), this.sortShow(0);
          else {
            let t = this.zgNodegzt("content").active;
            this.zgNodegzt("content").active = !t, this.zgNodegzt("close").active = !t
          }
        }
        onekeyCancel(t) {
          for (let t in g.kaoheInfo.objs) {
            let e = g.kaoheInfo.objs[t];
            for (let t = 0; t < e.num.length; t++)
              if (e.num[t]) {
                g.findObjById("workInfo1", e.num[t]).kaohePos = 0, _.countWorkExp(e.num[t]), e.num[t] = 0
              }
          }
          2 != t && this.bindTips2(this.co_check_g)
        }
        yijianshezhi() {
          this.onekeyCancel(2);
          let t = [],
            e = g.workInfo1.objs;
          for (let s in e) {
            let i = e[s],
              o = _.returnOneAttr(i.id),
              n = {
                id: i.id,
                workInfo1_s: i,
                workAttr: o
              };
            t.push(n)
          }
          let s = g.sortType.kaoheSet;
          t.sort(((t, e) => 1 == s ? e.workAttr.allNum - t.workAttr.allNum : 2 == s ? e.workInfo1_s.jobId - t.workInfo1_s.jobId : 3 == s ? e.workAttr.pot - t.workAttr.pot : e.workAttr.amb - t.workAttr.amb));
          let i = 0,
            o = [];
          for (let t = 0; t < this.co_check_tt.length; t++) {
            let e = this.co_check_tt[t],
              s = g.findObjById("kaoheInfo", e.id);
            if (1 != s.lock) break;
            {
              let t = this.co_check_lv_ttt[e.id][s.lv - 1],
                i = {
                  id: e.id,
                  kaoheInfo_s: s,
                  co_check_t: e,
                  add: t.add
                };
              o.push(i)
            }
          }
          o.sort(((t, e) => e.add - t.add));
          for (let e = 0; e < o.length; e++) {
            let s = o[e].co_check_t,
              n = g.findObjById("kaoheInfo", s.id);
            for (let e = 0; e < n.lv && i < t.length; e++, i++) {
              let o = t[i].id;
              g.findObjById("workInfo1", o).kaohePos = s.id, n.num[e] = o, _.countWorkExp(n.num[e])
            }
          }
          this.bindTips2(this.co_check_g)
        }
      }).m_name = "Wkaohe", v = I)) || v);
      e._RF.pop()
    }
  }
}));