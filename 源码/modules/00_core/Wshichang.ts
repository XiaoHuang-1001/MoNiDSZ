System.register("chunks:///_virtual/Wshichang.ts", ["cc", "./ZGGSOfficeFx.ts", "./CurListView.ts", "./Wshichang1.ts", "./ZGGSRedHdian.ts", "./ZGGSScrollviewsvi.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, i, n, o, h, l, g, d, c, a, r, b, f, _, u, m, p, I, Q;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator, i = t.UITransform, n = t.v2, o = t.Animation, Q = t.instantiate
    }, function(t) {
      h = t.ZGGSOfficeFx, l = t.gs_boss, g = t.gs_bmsg, d = t.gs_sql, c = t.gs_tabpr, a = t.gs_btxt, r = t.gs_computer, b = t.gs_sound, f = t.gs_phone
    }, function(t) {
      _ = t.CurListView
    }, function(t) {
      u = t.Wshichang1
    }, function(t) {
      m = t.ZGGSRedHdian
    }, function(t) {
      p = t.ZGGSScrollviewsvi
    }, function(t) {
      I = t.minFunc
    }],
    execute: function() {
      var k, z;
      s._RF.push({}, "2aa26t48cdGjL072Mz5QyVS", "Wshichang", void 0);
      const {
        ccclass: v,
        property: x
      } = e;
      t("Wshichang", v("Wshichang")(((z = class t extends h {
        constructor(...t) {
          super(...t), this.top = null, this.co_market_ttt = null, this.co_market_lv_ttt = null, this.svCtl1 = null, this.svCtl3 = null, this.content = null, this.content1 = null, this.content2 = null, this.swCom = null, this.topSwCom = null, this.selIndex = 0, this.infoIndex = 0, this.showArr = [], this.co_market_G = null, this.firstInto = !0
        }
        pohuiPage() {
          l.bossDieWin(t, 2), g.send(2100, !1)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.top), this.gsButtongbs("YMSpriteSplash", (() => {
            d.config.guideId >= 1e3 && this.pohuiPage()
          })), this.co_market_ttt = c.co_market.objs, this.co_market_lv_ttt = c.co_market_lv.objs, this.content = this.zgNodegzt("sw2/view/content"), this.content1 = this.zgNodegzt("sw3/view/content"), this.content2 = this.zgNodegzt("lbl_2/sw1/view/content"), this.svCtl1 = this.zgNodegzt("sw2").getComponent(_), this.svCtl3 = this.zgNodegzt("lbl_2/sw1").getComponent(_), this.swCom = this.zgNodegzt("sw2").getComponent(p), this.topSwCom = this.zgNodegzt("sw3").getComponent(p), this.gsTxtLblgs("btn_2/YMLabel1", a.gsStringSortInfo(100, d.sortType.shichangSet)), I.activityUnlock(2)
        }
        init() {
          this.firstInto = !0, I.activityEnter(2), g.send(2100, !0), this.showInfo()
        }
        showInfo() {
          let t = -1;
          // 市场改按省级行政区划分：分页数量跟着数据走，原版只有 5 个标签节点，不够就克隆
          try {
            const need = Object.keys(c.co_market.objs).length,
              kids = this.content1.children;
            if (kids.length > 0 && need > kids.length && Q) {
              for (let n2 = kids.length; n2 < need; n2++) {
                const node2 = Q(kids[0]);
                node2.parent = this.content1
              }
            }
          } catch (e0) {}
          for (let s = 0; s < this.content1.children.length; s++) {
            let e = this.content1.children[s],
              i = s + 1;
            const grp = c.co_market.objs[i];
            this.gsTxtLblgs("YMLabel", grp && grp[0] && grp[0].prov || a.gsStringHelpIn(203)[s + 1], e);
            try {
              window.__dshlog && window.__dshlog("market tab " + i + " = " + (grp && grp[0] && grp[0].prov) + " cities=" + (grp ? grp.length : 0))
            } catch (e9) {}
            let n = c.co_market.objs[i],
              o = n[0];
            if (this.gsButtongbs(e, function(t) {
                if (!d.findObjById("shichangInfo", o.id).lock) {
                  let t = a.gsStringByParam(203, o.num);
                  return console.log(t, "提示"), void g.send(202, t)
                }
                this.gsBtnArrStatests(t.target), this.infoIndex = s, this.firstInto || (this.selIndex = 0), this.refreshInfo()
              }.bind(this)), -1 == t)
              for (let e = 0; e < n.length; e++) {
                let i = n[e],
                  o = d.findObjById("shichangInfo", i.id);
                if (o.lock) {
                  if (m.shichangRed2(o) || m.shichangRed3(o)) {
                    t = s;
                    break
                  }
                }
              }
            let h = this.zgLableglt("YMLabel", e);
            h.unscheduleAllCallbacks();
            let l = function() {
              let t = !1;
              for (let s = 0; s < n.length; s++) {
                let e = d.findObjById("shichangInfo", n[s].id);
                if (t = m.shichangRed2(e) || m.shichangRed3(e), t) break
              }
              this.zgNodegzt("read", e).active = t
            }.bind(this);
            h.schedule(l, .3), l()
          }
          if (-1 == t && (t = 0), this.infoIndex = t, this.gsButtongbsx(this.content1.children[this.infoIndex]), this.firstInto && this.infoIndex > 0) {
            let t = this.content1.children[this.infoIndex],
              s = t.position,
              e = this.content1.position,
              o = s.x - e.x - t.getComponent(i).width / 2;
            this.topSwCom.scrollToOffset(n(o, 0), 0)
          }
          this.gsButtongbs("btn_2", (() => {
            this.onekeySet()
          })), this.gsButtongbs("btn_2/btn", (() => {
            this.sortShow(0)
          })), this.gsButtongbs("btn_1", (() => {
            this.onekeyCancel(1)
          })), this.gsButtongbs("close", (() => {
            console.log("点击隐藏关闭"), this.sortShow(0)
          })), this.zgNodegzt("content").active = !1, this.zgNodegzt("close").active = !1;
          let s = this.zgNodegzt("content").children;
          for (let t = 0; t < s.length; t++) {
            let e = s[t];
            e && (this.gsTxtLblgs("YMLabel1", a.gsStringSortInfo(100, t + 1), e), this.gsButtongbs(e, (() => {
              console.log("点击排序", t + 1), this.sortShow(t + 1)
            })))
          }
        }
        refreshInfo() {
          let t = c.co_market.objs[this.infoIndex + 1];
          this.showArr = [];
          let s = 0;
          for (let e = 0; e < t.length; e++) {
            let i = t[e],
              n = d.findObjById("shichangInfo", i.id),
              o = 1,
              h = this.co_market_lv_ttt[i.id][n.lv],
              l = 0,
              g = !1;
            h ? n.lock ? (l = h.need[1], g = m.shichangRed2(n) || m.shichangRed3(n)) : o = 3 : (o = 2, g = m.shichangRed3(n)), !s && g && (s = i.id);
            let c = {
              id: n.id,
              shichangInfo_s: n,
              co_market_t: i,
              state: o,
              min: l,
              red1: g
            };
            this.showArr.push(c)
          }
          if (this.showArr.sort(((t, s) => t.state - s.state)), this.firstInto)
            for (let t = 0; t < this.showArr.length; t++) {
              if (this.showArr[t].id == s) {
                this.selIndex = t;
                break
              }
            }
          this.svCtl1.init(this.showArr, function(t, s, e) {
            this.bindTips(t, s, e)
          }.bind(this)), console.log(this.showArr, this.selIndex, "8888");
          let e = this.content.children;
          this.scheduleOnce(function() {
            if (e.length > 0)
              if (this.firstInto) {
                if (this.gsButtongbsx(e[this.selIndex]), this.firstInto = !1, this.selIndex > 0) {
                  let t = e[this.selIndex],
                    s = t.position,
                    o = this.content.position,
                    h = -s.y - o.y - t.getComponent(i).height / 2;
                  this.swCom.scrollToOffset(n(0, h), 0)
                }
              } else this.bindTips2(this.showArr[this.selIndex].co_market_t)
          }.bind(this), 0)
        }
        bindTips(t, s, e) {
          let i = s.co_market_t,
            n = d.findObjById("shichangInfo", i.id);
          t.scId = i.id, this.gsTxtLblgs("YMLabel1", i.name, t), t.getChildByName("kai").active = e == this.selIndex, t.getChildByName("guan").active = e != this.selIndex, this.zgBtngbt(t).interactable = e != this.selIndex, t.getChildByName("suo").active = !n.lock, this.gsButtongbs(t, function(t) {
            if (n.lock) this.selIndex = e, console.log(this.selIndex, "sdfsdfsdf"), this.gsBtnArrStatests(t.target), this.co_market_tt = this.co_market_ttt[i], this.bindTips2(i);
            else {
              let t = a.gsStringByParam(203, i.num);
              g.send(202, t)
            }
          }.bind(this));
          let o = this.zgLableglt("YMLabel1", t);
          o.unscheduleAllCallbacks();
          let h = function() {
            this.zgNodegzt("read", t).active = m.shichangRed2(n) || m.shichangRed3(n)
          }.bind(this);
          o.schedule(h, .3), h()
        }
        bindTips2(t) {
          this.co_market_G = t;
          let s = this.zgLableglt("lbl_2/lbl_info1/YMLabel1");
          s.unscheduleAllCallbacks();
          let e = this.co_market_lv_ttt[t.id],
            i = d.findObjById("shichangInfo", t.id),
            n = e[i.lv - 1],
            h = e[i.lv];
          this.gsTxtLblgs("lbl_2/item1/tit3/txt2", n.num), this.gsTxtLblgs("lbl_2/item1/tit2/txt1", a.gsStringHelpIn(204)[this.infoIndex + 1]), 0 != n.exp ? this.gsTxtStrbyNums("lbl_2/item1/tit2/txt2", 306, n.exp) : 0 != n.hp ? this.gsTxtStrbyNums("lbl_2/item1/tit2/txt2", 306, n.hp) : 0 != n.att ? this.gsTxtStrbyNums("lbl_2/item1/tit2/txt2", 306, n.att) : 0 != n.def ? this.gsTxtStrbyNums("lbl_2/item1/tit2/txt2", 306, n.def) : 0 != n.speed && this.gsTxtStrbyNums("lbl_2/item1/tit2/txt2", 306, n.speed);
          let l = this.zgNodegzt("lbl_2/content").children;
          for (let t = 0; t < l.length; t++) {
            let s = l[t];
            this.zgNodegzt("lbl_info3/toggle/check", s).active = t < i.lv, this.zgNodegzt("suo", s).active = t >= i.lv
          }
          if (this.zgNodegzt("lbl_2/item1/lay2").active = h, this.zgNodegzt("lbl_2/item1/btn_1").active = h, this.zgNodegzt("lbl_2/item1/btn_5").active = !h, h) {
            let e = this.content2.children;
            this.gsNeedConfigs("lbl_2/item1/lay2", h.need);
            let n = r.checkTabNeedgs(h.need);
            this.gsLblCororgst1("lbl_2/item1/lay2/YMLabel", n, [49, 49, 49]), this.gsButtongbs("lbl_2/item1/btn_1", (() => {
              r.constNeedTabgs(h.need, (() => {
                b.playOne("market"), i.lv += 1, this.gsNodeBigSmallgOnens("lbl_2/item1/tit2/txt2", null, .15), this.gsNodeBigSmallgOnens("lbl_2/item1/tit3/txt2", null, .15);
                let s = e[i.lv - 1];
                s.active = !0;
                let n = this.zgNodegzt("shengji", s);
                n.active = !0, n.getComponent(o).play();
                let l = {
                  data_t: h
                };
                I.activityStart(2, l), this.bindTips2(t)
              }), 14)
            }));
            let l = function() {
              n = r.checkTabNeedgs(h.need), this.gsLblCororgst1("lbl_2/item1/lay2/YMLabel", n, [49, 49, 49]), this.zgNodegzt("lbl_2/item1/read").active = n
            }.bind(this);
            s.schedule(l, .5), l()
          } else this.zgNodegzt("lbl_2/item1/read").active = h;
          this.bindTips3(n, h, t, i)
        }
        bindTips3(t, s, e, i) {
          let n = this.content2.children;
          for (let o = 0; o < n.length; o++) {
            let h = n[o];
            if (h.active = t.lv >= o + 1, h.active) {
              if (this.zgNodegzt("node_3", h).active = o < i.lv, this.zgNodegzt("node_2", h).active = i.num[o], this.zgNodegzt("node_3", h).active = !i.num[o], i.num[o]) {
                let t = d.findObjById("workInfo1", i.num[o]);
                const s = c.co_post.zgTableKey(t.postId);
                this.zgNodegzt("node_1", h) && this.gsSprstHtByUIs("node_1", `gsy0${s.grade}`, h), this.gsSprHtsst("node_2/icon", t.sprId, h), this.gsTxtLblgs("node_2/YMLabel2", t.name, h)
              } else this.gsSprstHtByUIs("node_1", "gsy07", h);
              this.gsButtongbs(h, (() => {
                let n = {
                  workInfo1_id: i.num[o],
                  co_market: e,
                  shichangInfo_s: i,
                  xuhao: o,
                  _func: n => {
                    i.num[o] && this.dealSCUp(i.num[o], e.type), i.num[o] = n, n && this.dealSCUp(n, e.type), this.bindTips3(t, s, e, i), this.bindTips2(e)
                  }
                };
                l.bossWshow(u, n)
              }))
            }
          }
        }
        sortShow(t) {
          if (t && t > 0) d.sortType.shichangSet = t, this.gsTxtLblgs("btn_2/YMLabel1", a.gsStringSortInfo(100, t)), this.sortShow(0), console.log(t, "sdfsdfsd"), this.onekeySet();
          else {
            let t = this.zgNodegzt("content").active;
            this.zgNodegzt("content").active = !t, this.zgNodegzt("close").active = !t
          }
        }
        onekeyCancel(t) {
          for (let t in d.shichangInfo.objs) {
            let s = d.shichangInfo.objs[t],
              e = c.co_market.zgTableKey(s.id);
            for (let t = 0; t < s.num.length; t++)
              if (s.num[t]) {
                let i = s.num[t];
                d.findObjById("workInfo1", i).shichangPos = [0, 0, 0, 0, 0, 0], s.num[t] = 0, this.dealSCUp(i, e.type)
              }
          }
          2 != t && this.bindTips2(this.co_market_G)
        }
        onekeySet() {
          this.onekeyCancel(2);
          let t = [],
            s = d.workInfo1.objs;
          for (let e in s) {
            let i = s[e],
              n = f.returnOneAttr(i.id),
              o = {
                id: i.id,
                workInfo1_s: i,
                workAttr: n
              };
            t.push(o)
          }
          let e = d.sortType.shichangSet;
          t.sort(((t, s) => 1 == e ? s.workAttr.allNum - t.workAttr.allNum : 2 == e ? s.workInfo1_s.jobId - t.workInfo1_s.jobId : 3 == e ? s.workAttr.pot - t.workAttr.pot : s.workAttr.amb - t.workAttr.amb));
          let i = 0;
          for (let s = 1; s <= 5; s++) {
            let e = c.co_market.objs[s],
              n = [];
            for (let t = 0; t < e.length; t++) {
              let s = e[t],
                i = d.findObjById("shichangInfo", s.id);
              if (!i.lock) break;
              {
                let t = this.co_market_lv_ttt[s.id][i.lv - 1],
                  e = {
                    id: s.id,
                    shichangInfo_s: i,
                    co_market_t: s,
                    add: t.exp || t.hp || t.att || t.def || t.speed
                  };
                n.push(e)
              }
            }
            n.sort(((t, s) => s.add - t.add));
            for (let s = 0; s < n.length; s++) {
              let e = n[s],
                o = d.findObjById("shichangInfo", e.id),
                h = e.co_market_t;
              for (let s = 0; s < o.lv && i < t.length; s++, i++) {
                let e = t[i].id;
                d.findObjById("workInfo1", e).shichangPos[0] = h.id, o.num[s] = e, this.dealSCUp(e, h.type)
              }
            }
          }
          this.bindTips2(this.co_market_G)
        }
        dealSCUp(t, s) {
          1 == s ? f.countWorkExp(t) : 2 == s ? f.countHp(t) : 3 == s ? f.countAtt(t) : 4 == s ? f.countDef(t) : 5 == s && f.countSpeed(t)
        }
      }).m_name = "Wshichang", k = z)) || k);
      s._RF.pop()
    }
  }
}));