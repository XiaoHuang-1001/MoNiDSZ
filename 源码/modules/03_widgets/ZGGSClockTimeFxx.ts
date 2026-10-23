System.register("chunks:///_virtual/ZGGSClockTimeFxx.ts", ["cc", "./ZGGSOfficeFx.ts", "./WPeixun1.ts", "./WZPWork.ts", "./WXinfaxian1.ts", "./WDepcl1.ts", "./WWaichuchuchang1.ts", "./ZGGSEnumArr.ts", "./WHuozanribao1.ts", "./WDepcl2.ts", "./WJiangjinjili1.ts", "./WShenqing1.ts", "./WPochan1.ts", "./WTuanjian.ts", "./WXingongneng.ts", "./WShengzhiyan1.ts", "./Wxiyanqingjian.ts", "./WShangyetp1.ts", "./WShangweijiedai1.ts", "./WNianzhongjiang.ts", "./WChuchai1.ts", "./WShenzao1.ts", "./Wyuangongmoyu.ts", "./Wbumenshijian.ts", "./WLizhi1.ts", "./WHangyefenghui1.ts", "./WQingxubaofa.ts", "./ZGGSPaipxxu.ts", "./WMoweitaotai.ts", "./WChaonengli.ts", "./WJidumiantan1.ts", "./WDaoshidianbo1.ts", "./WTuijianshuji.ts", "./WChongdian2.ts", "./WFuli2.ts", "./WChuangye1.ts", "./WChuangye4.ts"], (function(e) {
  "use strict";
  var n, t, o, i, s, l, r, f, h, a, u, c, d, g, m, p, b, j, I, A, k, w, y, _, v, N, W, E, z, O, G, T, C, S, x, B, K, Z, J, M, R, F, D, P, q;
  return {
    setters: [function(e) {
      n = e.cclegacy, t = e.find, o = e._decorator
    }, function(e) {
      i = e.ZGGSOfficeFx, s = e.gs_sql, l = e.gs_boss, r = e.gs_bmsg, f = e.gs_tabpr, h = e.gs_computer, a = e.gs_phone
    }, function(e) {
      u = e.WPeixun1
    }, function(e) {
      c = e.WZPWork
    }, function(e) {
      d = e.WXinfaxian1
    }, function(e) {
      g = e.WDepcl1
    }, function(e) {
      m = e.WWaichuchuchang1
    }, function(e) {
      p = e.ZGGSEnumArr
    }, function(e) {
      b = e.WHuozanribao1
    }, function(e) {
      j = e.WDepcl2
    }, function(e) {
      I = e.WJiangjinjili1
    }, function(e) {
      A = e.WShenqing1
    }, function(e) {
      k = e.WPochan1
    }, function(e) {
      w = e.WTuanjian
    }, function(e) {
      y = e.WXingongneng
    }, function(e) {
      _ = e.WShengzhiyan1
    }, function(e) {
      v = e.Wxiyanqingjian
    }, function(e) {
      N = e.WShangyetp1
    }, function(e) {
      W = e.WShangweijiedai1
    }, function(e) {
      E = e.WNianzhongjiang
    }, function(e) {
      z = e.WChuchai1
    }, function(e) {
      O = e.WShenzao1
    }, function(e) {
      G = e.Wyuangongmoyu
    }, function(e) {
      T = e.Wbumenshijian
    }, function(e) {
      C = e.WLizhi1
    }, function(e) {
      S = e.WHangyefenghui1
    }, function(e) {
      x = e.WQingxubaofa
    }, function(e) {
      B = e.ZGGSPaipxxu
    }, function(e) {
      K = e.WMoweitaotai
    }, function(e) {
      Z = e.WChaonengli
    }, function(e) {
      J = e.WJidumiantan1
    }, function(e) {
      M = e.WDaoshidianbo1
    }, function(e) {
      R = e.WTuijianshuji
    }, function(e) {
      F = e.WChongdian2
    }, function(e) {
      D = e.WFuli2
    }, function(e) {
      P = e.WChuangye1
    }, function(e) {
      q = e.WChuangye4
    }],
    execute: function() {
      var L;
      n._RF.push({}, "760f0TqPpNNfIT6OPMv7EYb", "ZGGSClockTimeFxx", void 0);
      const {
        ccclass: X,
        property: H
      } = o;
      e("ZGGSClockTimeFxx", X("ZGGSClockTimeFxx")(L = class extends i {
        constructor(...e) {
          super(...e), this.InfoArr = [], this.isEvenOpen = !1, this.evenTimeNode = null, this.lastInfoId = 0
        }
        yindaoEvent() {
          this.zhaopinWork({
            id: 3001,
            info: null,
            win: c,
            role: 0
          }, !0), this.showEven()
        }
        showEven() {
          if (this.isEvenOpen || s.cache.yindaoStop) return void console.error("事件正在进行中 " + this.lastInfoId + " 突发" + s.cache.isTufa + " 新功能" + s.cache.isXgn + " 引导" + s.cache.yindaoStop);
          if (l.n_evenBtn.active = !0, s.cache.isTufa = !0, this.InfoArr.length <= 0) return l.n_evenBtn.active = !1, s.cache.isTufa = !1, r.send(2100, !1), void(this.isEvenOpen = !1);
          console.log(this.InfoArr, this.InfoArr.length, "可触发事件"), r.send(2100, !0);
          let e = this.InfoArr.shift(),
            n = e.id,
            t = e.info;
          this.lastInfoId = n, e.win ? (this.gsScheduleStnode(this.evenTimeNode, (() => {
            e.role && e.role > 0 ? r.send(2004, {
              id: e.role,
              win: e.win,
              info: t
            }) : l.bossWshow(e.win, t)
          }), .1, !0), this.isEvenOpen = !0) : (console.error("事件窗口错误id:", n), this.showEven())
        }
        checkSpEven(e, n, o, i = null) {
          if (s.config.guideId < 1e3) return;
          if (i && i > 0 || (1 == e && (this.pochanEvent({
              id: 2,
              info: null,
              win: k,
              role: 0
            }), this.shengzhiyanEvent({
              id: 3015,
              info: null,
              win: _,
              role: 0
            })), 12 == n && 30 == e && this.nianzhongJiang({
              id: 3021,
              info: null,
              win: E,
              role: 0
            }), this.checkBmEvent(), this.zhaopinWork({
              id: 3001,
              info: null,
              win: c,
              role: 0
            }, false), this.zhaopinManage({
              id: 3002,
              info: null,
              win: c,
              role: 0
            }), this.zhaopinMishu({
              id: 3003,
              info: null,
              win: c,
              role: 0
            }), this.zhaopinDonshi({
              id: 3004,
              info: null,
              win: c,
              role: 0
            }), this.peixunEvent({
              id: 3005,
              info: null,
              win: u,
              role: 0
            }), this.xinfaxianEvent({
              id: 3006,
              info: null,
              win: d,
              role: 0
            }), this.huozanDay({
              id: 3007,
              info: null,
              win: b,
              role: 0
            }), this.huozanWeek({
              id: 3008,
              info: null,
              win: b,
              role: 0
            }), this.huozanMonth({
              id: 3009,
              info: null,
              win: b,
              role: 0
            }), this.wiachuEvent({
              id: 3010,
              info: null,
              win: m,
              role: 0
            }), this.tuanjianEven({
              id: 3012,
              info: null,
              win: w,
              role: 0
            }), this.jiliEvent({
              id: 3013,
              info: null,
              win: I,
              role: 0
            }), this.shenqingEvent({
              id: 3014,
              info: null,
              win: A,
              role: 0
            }), this.shangyeEven({
              id: 3016,
              info: null,
              win: N,
              role: 0
            }), this.shangwujiedaiEven({
              id: 3017,
              info: null,
              win: W,
              role: 0
            }), this.xiyanqingjianEvent({
              id: 3020,
              info: null,
              win: v,
              role: 0
            }), this.moyuEvent({
              id: 3023,
              info: null,
              win: G,
              role: 0
            }), this.bumenEvent({
              id: 3025,
              info: null,
              win: T,
              role: 0
            }), this.hangyefenghui({
              id: 3026,
              info: null,
              win: S,
              role: 0
            }), this.chaoNengliEvent({
              id: 3027,
              info: null,
              win: Z,
              role: 0
            }), this.qxbaofaEvent({
              id: 3028,
              info: null,
              win: x,
              role: 0
            }), this.daoshiDianboEvent({
              id: 3031,
              info: null,
              win: M,
              role: 0
            }), this.tjshujiEvent({
              id: 3030,
              info: null,
              win: R,
              role: 0
            }), this.chongdianEvent({
              id: 3032,
              info: null,
              win: F,
              role: 0
            }), this.chuangyeEvent({
              id: 3033,
              info: null,
              win: P,
              role: 0
            }), 15 != e || 2 != n && 5 != n && 8 != n && 11 != n || this.jidumiantanEvent({
              id: 3029,
              info: null,
              win: J,
              role: 0
            }, n), (3 == n && 31 == e || 6 == n && 30 == e || 9 == n && 30 == e || 12 == n && 31 == e) && this.gongsiFuliEvent({
              id: 0,
              info: null,
              win: D,
              role: 0
            }), (3 == n && 15 == e || 6 == n && 20 == e || 9 == n && 25 == e || 12 == n && 30 == e) && this.jiebaoEvent({
              id: 0,
              info: null,
              win: q,
              role: 0
            }), this.lizhiEvent({
              id: 3022,
              info: null,
              win: C,
              role: 0
            }), (3 == n && 31 == e || 6 == n && 30 == e || 9 == n && 30 == e || 12 == n && 31 == e) && this.moweiEvent({
              id: 3024,
              info: null,
              win: K,
              role: 0
            }), this.chucaiEven({
              id: 3018,
              info: null,
              win: z,
              role: 0
            }), this.shenzaoEvent({
              id: 3019,
              info: null,
              win: O,
              role: 0
            })), this.openCheckEven(), this.InfoArr.length > 0) {
            if (!i) {
              let e = t("Canvas/window");
              for (const n of e.children) n.active && (n.active = !1)
            }
            this.showEven()
          }
        }
        openCheckEven() {
          const e = f.co_open.values;
          if (s.base.openIcon.length < e.length) {
            let n = h.gsAllNumGet(),
              t = [];
            for (let o = e.length - 1; o >= 0; o--) {
              const i = e[o];
              s.base.openIcon.indexOf(i.id) < 0 && n >= i.num && (s.base.openIcon.push(i.id), t.push(i.id), 100004 == i.id ? s.base.ccFst = 1 : 100007 == i.id && (s.base.szFst = 1))
            }
            if (t.length > 0) {
              t.sort((function(e, n) {
                const t = f.co_open.zgTableKey(e);
                return f.co_open.zgTableKey(n).num - t.num
              }));
              for (let e = 0; e < t.length; e++) {
                const n = t[e];
                this.InfoArr.unshift({
                  id: 3,
                  info: n,
                  win: y,
                  role: 0
                })
              }
            }
          }
        }
        checkBmEvent() {
          if (!this.checkBmAddEvent() && s.combmInfo.depOpen.length > 0)
            for (let e = 0; e < s.combmInfo.depOpen.length; e++) {
              let e = s.combmInfo.depOpen.shift();
              if (e && e > 0) {
                let n = s.findObjById("combmInfo", e);
                const t = f.co_dep.objs[e];
                if (n && t && t[0] && t[0].set[1] <= n.workArr.filter(x => x > 0).length) {
                  let o = n.workArr;
                  n.workArr = [], o = h.checkSJArr(o);
                  let i = h.randomSplit(o, t.length, 4, 1);
                  for (let e = 0; e < t.length; e++) {
                    let o = s.createNewObj2("combmInfo", t[e].id);
                    n.comArr.push(t[e].id);
                    const l = f.co_post.objs[2][o.id][o.depLv - 1];
                    o.depId = l.id, o.workArr = i[e], h.addPingfenGs(t[e].power);
                    const r = f.co_post.objs[1][o.id];
                    for (const n of i[e]) {
                      let e = s.findObjById("workInfo1", n);
                      e && (e.postId = r.id, e.depId = r.dep_id)
                    }
                    a.loopDepCheck(o)
                  }
                  let l = e => {
                    const n = f.co_dep.zgTableKey(e);
                    if (1 == n.step) return;
                    l(n.higher_id);
                    let t = s.findObjById("combmInfo", e);
                    if (t) {
                      t.depLv = h.gsBmLvById(e);
                      const n = f.co_post.objs[2][t.id][t.depLv - 1];
                      if (t.depId = n.id, t.workId > 0) {
                        const wid = s.findObjById("workInfo1", t.workId);
                        wid && (wid.postId = n.id)
                      }
                    }
                  };
                  l(e), this.InfoArr.unshift({
                    id: 1,
                    info: {
                      type: 1,
                      depId: e
                    },
                    win: j,
                    role: 0
                  });
                  break
                }
              }
            }
        }
        checkBmAddEvent() {
          let e = !1,
            n = Object.keys(s.workInfo1.objs).length;
          const t = f.co_dep.bmObjs[1];
          for (const o in t) {
            if (s.combmInfo.objs[o]) continue;
            const i = t[o];
            if (i.set[1] <= n) {
              let n = s.createNewObj2("combmInfo", i.id);
              const t = f.co_post.objs[2][i.id][n.depLv - 1];
              n.depId = t.id;
              let o = s.createNewObj2("combmInfo", i.higher_id);
              if (o.comArr.push(i.id), o.comArr.sort((function(e, n) {
                  return e - n
                })), 1103 == i.id) {
                let e = o.workArr;
                o.workArr = [], n.workArr = e;
                const t = f.co_post.objs[1][i.id];
                for (const n of e) {
                  let e = s.findObjById("workInfo1", n);
                  e.postId = t.id, e.depId = t.dep_id
                }
              }
              h.addPingfenGs(i.power), a.loopDepCheck(n), this.InfoArr.unshift({
                id: 1,
                info: {
                  type: 1,
                  depId: i.id
                },
                win: g,
                role: 0
              }), e = !0
            }
          }
          const o = f.co_dep.bmObjs[3];
          for (const t in o) {
            const i = o[t];
            if (s.combmInfo.objs[t]) {
              let e = s.findObjById("combmInfo", i.id),
                t = !1;
              for (let o = 0; o < e.workArr.length; o++) {
                if (e.workArr[o] < 0) {
                  f.co_senior.objs[1][o].set[1] <= n && (e.workArr[o] = 0, t = !0)
                }
              }
              t && r.send(2005, 3)
            } else if (i.set[1] <= n) {
              let n = s.createNewObj2("combmInfo", i.id);
              const t = f.co_post.objs[3][i.id];
              n.depId = t.id, n.workArr = [0, -1, -1, -1], h.addPingfenGs(i.power), this.InfoArr.unshift({
                id: 1,
                info: {
                  type: 3,
                  depId: i.id
                },
                win: g,
                role: 0
              }), e = !0
            }
          }
          const i = f.co_dep.bmObjs[4];
          for (const t in i) {
            const o = i[t];
            if (s.combmInfo.objs[t]) {
              let e = s.findObjById("combmInfo", o.id),
                t = !1;
              for (let o = 0; o < e.workArr.length; o++) {
                if (e.workArr[o] < 0) {
                  f.co_senior.objs[2][o].set[1] <= n && (e.workArr[o] = 0, t = !0)
                }
              }
              t && r.send(2005, 4)
            } else if (o.set[1] <= n) {
              let n = s.createNewObj2("combmInfo", o.id);
              const t = f.co_post.objs[4][o.id];
              n.depId = t.id, n.workArr = [0, -1, -1, -1, -1, -1, -1, -1], h.addPingfenGs(o.power), this.InfoArr.unshift({
                id: 1,
                info: {
                  type: 4,
                  depId: o.id
                },
                win: g,
                role: 0
              }), e = !0
            }
          }
          return e
        }
        zhaopinWork(e, n = !1) {
          let t = f.co_event_rate.zgTableKey(e.id),
            o = h.sjNumgs(1, 1e4);
          (s.cache.tufaCheck[e.id] || n) && (o = 1);
          let i = h.gsAllNumGet() >= t.num;
          if (o <= t.rate && i) {
            let n = h.gsAllBmWork();
            if (n.length > 0) {
              let t = h.sjTabGetgs(n).id;
              e.info = {
                type: 1,
                workId: t
              }, this.InfoArr.push(e)
            }
          }
        }
        zhaopinManage(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet() >= n.num,
            i = t <= n.rate && o,
            l = !1;
          if (s.base.glywZp)
            if (s.base.glywZp <= 1) {
              const e = s.findObjById("combmInfo", 1103);
              e && 0 == e.workId && (l = !0)
            } else s.base.glywZp = 1;
          if (i || l) {
            let n = h.gsAllBmWork(!0);
            if (n.length > 0) {
              let t = h.sjTabGetgs(n);
              e.info = {
                type: 2,
                workId: t
              }, this.InfoArr.push(e)
            }
          }
        }
        zhaopinMishu(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet() >= n.num;
          const i = s.findObjById("combmInfo", 1002);
          let l = t <= n.rate && o && i,
            r = !1;
          if (i && s.base.msZp && (s.base.msZp <= 1 ? 0 == i.workArr[0] && (r = !0) : s.base.msZp = 1), l || r) {
            let n = !1;
            for (const e of i.workArr)
              if (0 == e) {
                n = !0;
                break
              } n && (e.info = {
              type: 3,
              workId: 100200
            }, this.InfoArr.push(e))
          }
        }
        zhaopinDonshi(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet() >= n.num;
          const i = s.findObjById("combmInfo", 1003);
          let l = t <= n.rate && o && i,
            r = !1;
          if (i && s.base.dsZp && (s.base.dsZp <= 1 ? 0 == i.workArr[0] && (r = !0) : s.base.dsZp = 1), l || r) {
            let n = !1;
            for (const e of i.workArr)
              if (0 == e) {
                n = !0;
                break
              } n && (e.info = {
              type: 4,
              workId: 100300
            }, this.InfoArr.push(e))
          }
        }
        peixunEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1), t <= n.rate && h.gsAllNumGet() >= n.num && this.InfoArr.push(e)
        }
        xinfaxianEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = [],
              t = s.workInfo3.objs;
            for (let e in t) t[e].pinzhi.length < 6 && n.push(Number(e));
            if (n.length > 1) {
              let t = 1;
              n.length > 4 ? t = h.sjNumgs(2, 4) : 3 == n.length ? t = h.sjNumgs(1, 3) : 2 == n.length && (t = h.sjNumgs(1, 2));
              let o = h.sjNumArrgs2(0, n.length - 1, t),
                i = [];
              for (let e = 0; e < t; e++) {
                let t = n[o[e]];
                i.push(t)
              }
              e.info = {
                ids: i
              }, e.role = i[0], this.InfoArr.push(e)
            }
          }
        }
        huozanDay(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = 1,
              t = h.getZanRen(n);
            if (t.length >= 1) {
              let o = h.sjNumgs(1, 3),
                i = Math.min(o, t.length),
                s = h.sjNumArrgs2(0, t.length - 1, i),
                l = [];
              for (let e = 0; e < s.length; e++) {
                let n = t[s[e]];
                l.push(n)
              }
              e.info = {
                type: n,
                arrRen: l
              }, e.role = l[0].id, this.InfoArr.push(e)
            }
          }
        }
        huozanWeek(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = 2,
              t = h.getZanRen(n);
            if (t.length >= 1) {
              let o = h.sjNumgs(2, 4),
                i = Math.min(o, t.length),
                s = h.sjNumArrgs2(0, t.length - 1, i),
                l = [];
              for (let e = 0; e < s.length; e++) {
                let n = t[s[e]];
                l.push(n)
              }
              e.info = {
                type: n,
                arrRen: l
              }, e.role = l[0].id, this.InfoArr.push(e)
            }
          }
        }
        huozanMonth(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = 3,
              t = h.getZanRen(n);
            if (t.length >= 2) {
              let o = h.sjNumgs(2, 6),
                i = Math.min(o, t.length),
                s = h.sjNumArrgs2(0, t.length - 1, i),
                l = [];
              for (let e = 0; e < s.length; e++) {
                let n = t[s[e]];
                l.push(n)
              }
              e.info = {
                type: n,
                arrRen: l
              }, e.role = l[0].id, this.InfoArr.push(e)
            }
          }
        }
        gangweiEven(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet() >= n.num;
          if (t <= n.rate && o) {
            let n = [];
            for (const e in s.combmInfo.objs) {
              const t = s.combmInfo.objs[e];
              if (!(1 == t.workId || t.workId <= 0))
                if (t.comArr.length > 0)
                  for (const e of t.comArr) s.combmInfo.objs[e].workId > 0 && n.push([t.workId, s.combmInfo.objs[e].workId]);
                else
                  for (const e of t.workArr) n.push([t.workId, e])
            }
            if (n.length > 0) {
              n = h.checkSJArr(n);
              let t = n.length < 5 ? n.length : 5;
              for (let o = 0; o < t; o++) {
                let t = n[o];
                const i = a.returnOneAttr(t[0]),
                  s = a.returnOneAttr(t[1]);
                if (!(i.pot >= s.pot) && !(i.amb >= s.amb || i.allNum >= s.allNum - 1)) {
                  e.info = {
                    workArr: t
                  }, e.role = t[1], this.InfoArr.push(e);
                  break
                }
              }
            }
          }
        }
        tuanjianEven(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet() >= n.num,
            i = h.gsAllNumGet();
          if (t <= n.rate && o && i >= 25) {
            let n = [];
            n.push([1001, [1]]);
            let t = s.findObjById("combmInfo", 1002);
            if (t) {
              let e = [];
              for (const n of t.workArr) n > 0 && e.push(n);
              e.length > 0 && (e = h.checkSJArr(e), n.push([1002, e]))
            }
            let o = s.findObjById("combmInfo", 1003);
            if (o) {
              let e = [];
              for (const n of o.workArr) n > 0 && e.push(n);
              e.length > 0 && (e = h.checkSJArr(e), n.push([1003, e]))
            }
            const i = f.co_dep.stepObjs[2];
            for (const e of i) {
              let t = h.gsBmWorkById(e.id);
              t.length > 0 && (t = h.checkSJArr(t), n.push([e.id, t]))
            }
            let l = h.sjNumgs(3, 9);
            if (l >= n.length && (l = n.length), l < 3) return;
            n = h.checkSJArr(n);
            let r = {};
            for (let e = 0; e < l; e++) {
              let t = n[e],
                o = h.sjNumgs(Math.floor(t[1].length / 3), t[1].length);
              o <= 0 && (o = 1), r[t[0]] = t[1].slice(0, o)
            }
            let a = [];
            const u = f.co_team.values,
              c = u.filter((function(e) {
                return 0 == e.need[0]
              }));
            a.push(h.sjTabGetgs(c));
            const d = u.filter((function(e) {
                return e.grade >= 2 && e.grade <= 6
              })),
              g = h.sjTabGetgs(d);
            let m = !0;
            for (; m;) {
              const e = h.sjTabGetgs(d);
              e.grade != g.grade && (a.push(e), m = !1)
            }
            a.push(g), e.info = {
              tjInfo: r,
              tjTeam: a
            }, this.InfoArr.push(e)
          }
        }
        wiachuEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet();
          if (t <= n.rate && o >= n.num && o >= p.zgArrEnum(1)) {
            let n = Object.keys(s.workInfo1.objs),
              t = p.zgArrEnum(1),
              o = h.sjNumArrgs2(0, n.length - 1, t),
              i = [];
            for (let e = 0; e < o.length; e++) {
              let t = n[o[e]],
                l = s.findObjById("workInfo1", t);
              i.push(l)
            }
            e.info = {
              arr: i
            }, e.role = i[0].id, this.InfoArr.push(e)
          }
        }
        jiliEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = h.getZanRen(1);
            if (n.length >= 3) {
              let t = h.sjNumArrgs2(0, n.length - 1, 3),
                o = [];
              for (let e = 0; e < t.length; e++) {
                let i = n[t[e]];
                o.push(i)
              }
              e.info = {
                arrRen: o
              }, e.role = o[0].id, this.InfoArr.push(e)
            }
          }
        }
        shenqingEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = h.getZanRen(1);
            if (n.length >= 1) {
              let t = h.sjNumArrgs2(0, n.length - 1, 1),
                o = [];
              for (let e = 0; e < t.length; e++) {
                let i = n[t[e]];
                o.push(i)
              }
              e.info = {
                arrRen: o
              }, e.role = o[0].id, this.InfoArr.push(e)
            }
          }
        }
        shengzhiyanEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id);
          s.companyInfo.lastUp = {};
          for (let e = 0; e < s.companyInfo.upArr.length; e++) {
            s.findObjById("workInfo1", s.companyInfo.upArr[e]) || (s.companyInfo.upArr.splice(e, 1), s.companyInfo.upLv.splice(e, 1), e--)
          }
          if (h.gsAllNumGet() >= n.num && s.companyInfo.upArr.length > 0) {
            let n = JSON.parse(JSON.stringify(s.companyInfo.upArr)),
              t = JSON.parse(JSON.stringify(s.companyInfo.upLv));
            e.info = {
              arrRen: n,
              upLv: t
            }, e.role = n[0], this.InfoArr.push(e), s.companyInfo.upArr = [], s.companyInfo.upLv = []
          } else s.companyInfo.upArr = [], s.companyInfo.upLv = []
        }
        xiyanqingjianEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = Object.keys(s.workInfo1.objs);
            n.splice(0, 1);
            let t = n[h.sjNumArrgs2(0, n.length - 1, 1)[0]],
              o = s.findObjById("workInfo1", t);
            e.info = {
              workInfo1_s: o
            }, e.role = o.id, this.InfoArr.push(e)
          }
        }
        shangyeEven(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet(),
            i = o >= n.num;
          if (t <= n.rate && i && o >= 2) {
            let n = [];
            for (const e in s.workInfo1.objs) {
              const t = s.workInfo1.objs[e];
              1 != t.id && n.push(t.id)
            }
            let t = h.sjNumgs(1, 3),
              o = h.getRandomElements(n, t);
            if (o.length <= 0) return;
            let i = 0;
            for (let e = 0; e < o.length; e++) {
              i += s.findObjById("workInfo1", o[e]).jobId
            }
            i = Math.ceil(i / o.length);
            let l = [];
            for (let e = i - 5; e <= i; e++) {
              const n = f.co_negotiate.objs[e];
              n && (l = l.concat(n))
            }
            l = h.checkSJArr(l);
            let r = h.sjNumgs(1, 3),
              a = [],
              u = [];
            for (let e = 0; e < r; e++) {
              const n = l[e];
              let t = f.co_pic.objs[n.post_id];
              t || (t = f.co_pic.objs[0]);
              let o = !0;
              for (; o;) {
                const e = h.sjTabGetgs(t);
                if (a.indexOf(e.id) < 0) {
                  o = !1, a.push(e.id);
                  const t = h.sjTabGetgs(f.co_name.objs[e.sex]),
                    i = h.sjTabGetgs(f.co_name.objs[e.sex]);
                  let s = t.name1 + i.name2;
                  u.push({
                    id: n.id + 1,
                    name: s,
                    sex: e.sex,
                    sprId: e.pic,
                    postId: n.post_id,
                    jobId: n.job,
                    edu: n.edu,
                    att: h.sjNumgs(n.att1, n.att2),
                    hp: h.sjNumgs(n.hp1, n.hp2),
                    def: h.sjNumgs(n.def1, n.def2),
                    speed: h.sjNumgs(n.speed1, n.speed2)
                  })
                }
              }
            }
            e.info = {
              roleArr: o,
              enemyArr: u
            }, this.InfoArr.push(e)
          }
        }
        shangwujiedaiEven(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet(),
            i = o >= n.num;
          if (t <= n.rate && i) {
            const n = f.co_serve.values;
            let t = [];
            for (const e of n) e.num <= o - 1 && t.push(e.job_step);
            let i = h.getJobStepWorkArrInfo(t);
            t = [];
            for (const e in i) {
              i[e].length >= 3 && t.push(Number(e))
            }
            if (t.length > 0) {
              let n = h.sjTabGetgs(t),
                o = f.co_serve_step.objs[n];
              e.info = {
                step: n,
                showInfo: o
              }, this.InfoArr.push(e)
            }
          }
        }
        chucaiEven(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet(),
            i = o >= n.num,
            l = t <= n.rate && i && h.getNewOpen(100004),
            r = !1;
          if (s.base.ccFst && h.getNewOpen(100004) && (r = !0), l || r) {
            const n = f.co_serve.values;
            let t = [];
            for (const e of n) e.num <= o - 1 && t.push(e.job_step);
            let i = h.getJobStepWorkArrInfo(t);
            t = [];
            for (const e in i) {
              i[e].length >= 3 && t.push(Number(e))
            }
            if (t.length > 0) {
              let n = h.sjTabGetgs(t);
              e.info = {
                step: n
              }, this.InfoArr.push(e)
            }
          }
        }
        shenzaoEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = t <= n.rate && h.gsAllNumGet() >= n.num && h.getNewOpen(100007),
            i = !1;
          if (s.base.szFst && h.getNewOpen(100007) && (i = !0), o || i) {
            let n = s.workInfo1.objs,
              t = {};
            for (let e in n) {
              let o = n[e];
              !o.isEdu && o.edu < 17 && (t[o.edu] = t[o.edu] || [], t[o.edu].push(o))
            }
            let o = [];
            for (let e in t) t[e].length >= 3 && o.push(Number(e));
            if (o.length > 0) {
              let n = h.sjNumArrgs(0, o.length - 1, 1)[0],
                i = t[o[n]];
              e.info = {
                eduId: o[n],
                rens: i
              }, this.InfoArr.push(e)
            }
          }
        }
        nianzhongJiang(e) {
          let n = f.co_event_rate.zgTableKey(e.id);
          h.gsAllNumGet() >= n.num && this.InfoArr.push(e)
        }
        pochanEvent(e) {
          let n = h.zongxinshui(),
            t = 0;
          s.base.gold + 10 * n <= 0 ? t = 2 : s.base.gold + 3 * n <= 0 && (t = 1), t && (e.info = {
            type: t
          }, this.InfoArr.push(e))
        }
        moyuEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = Object.keys(s.workInfo1.objs);
            n.splice(0, 1);
            let t = n[h.sjNumArrgs2(0, n.length - 1, 1)[0]],
              o = s.findObjById("workInfo1", t);
            e.info = {
              workInfo1_s: o
            }, e.role = o.id, this.InfoArr.push(e)
          }
        }
        bumenEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = [];
            for (let e in f.co_dep_event.objs) s.combmInfo.objs[e] && n.push(e);
            if (n.length > 0) {
              let t = n[h.sjNumgs(0, n.length - 1)],
                o = f.co_dep_event.objs[t],
                i = o[h.sjNumgs(0, o.length - 1)],
                l = [];
              if (i.num > 0)
                for (let e = 0; e < i.dep_id2.length; e++) {
                  let n = h.gsBmWorkById2(i.dep_id2[e], i.num);
                  n.length >= i.num && (l = l.concat(n))
                } else
                  for (let e = 0; e < i.dep_id2.length; e++) {
                    let n = h.gsBmWorkById(i.dep_id2[e]);
                    l = l.concat(n)
                  }
              if (l.length > 0) {
                let n = l[h.sjNumgs(0, l.length - 1)],
                  t = s.findObjById("workInfo1", n);
                e.info = {
                  workInfo1_s: t,
                  co_dep_event_t: i
                }, e.role = t.id, this.InfoArr.push(e)
              }
            }
          }
        }
        hangyefenghui(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet() >= n.num;
          t <= n.rate && o && this.InfoArr.push(e)
        }
        lizhiEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet() >= n.num;
          if (t <= n.rate && o) {
            let n = h.sjNumgs(1, 2),
              t = Object.keys(s.workInfo1.objs),
              o = Math.floor(t.length / 2),
              i = {
                1: [],
                2: []
              },
              l = {
                1: [],
                2: []
              };
            for (let e = 1; e < 3; e++) {
              let s = [...t].sort(B.paiMingSort(e + 1));
              l[e] = JSON.parse(JSON.stringify(s)), 1 == n ? s = s.slice(0, o) : 2 == n && (s = s.slice(o, s.length)), i[e] = s
            }
            let r = [];
            for (let e = 0; e < i[2].length; e++) {
              let n = i[2][e];
              if (i[1].indexOf(n) >= 0) {
                let e = s.findObjById("workInfo1", n);
                e.isEdu || e.chucai || r.push(n)
              }
            }
            if (r.length > 1) {
              let t = h.sjNumgs(0, r.length - 1),
                o = r[t];
              for (; 1 == o;) t = h.sjNumgs(0, r.length - 1), o = r[t];
              e.info = {
                type: n,
                id: Number(o),
                potRank: l[1].indexOf(o) + 1,
                ambRank: l[2].indexOf(o) + 1
              }, e.role = Number(o), this.InfoArr.push(e)
            }
          }
        }
        moweiEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id);
          if (h.gsAllNumGet() >= n.num) {
            let n = Object.keys(s.workInfo1.objs);
            if (n.length >= 11) {
              let t = {
                1: [],
                2: []
              };
              for (let e = 1; e < 3; e++) {
                let o = [...n].sort(B.paiMingSort(e + 1));
                t[e] = o
              }
              let o = [];
              for (let e = 0; e < t[1].length; e++) {
                let n = t[1][e],
                  i = s.workInfo1.objs[n];
                if (i && !i.isEdu && !i.chucai && 1 != i.id) {
                  let s = h.haveJoinNum(i.join),
                    l = a.returnOneAttr(n),
                    r = e + 1,
                    f = t[2].indexOf(n) + 1,
                    u = {
                      id: Number(n),
                      potRank: r,
                      ambRank: f,
                      pot: l.pot,
                      amb: l.amb,
                      total: (l.pot + l.amb) / s
                    };
                  o.push(u)
                }
              }
              if (o.sort(((e, n) => e.total - n.total)), o.length >= 10) {
                o = o.slice(0, 5);
                let n = h.sjNumArrgs2(0, o.length - 1, 3),
                  t = [];
                for (let e = 0; e < n.length; e++) {
                  let i = o[n[e]];
                  t.push(i)
                }
                t.sort(((e, n) => n.total - e.total)), e.info = {
                  can: t
                }, e.role = t[0].id, this.InfoArr.push(e)
              }
            }
          }
        }
        chaoNengliEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet() >= n.num;
          if (t <= n.rate && o) {
            let n = [];
            for (const e in s.workInfo3.objs) {
              const t = s.workInfo3.objs[e];
              t.chaonengli && t.chaonengli.length > 0 || n.push(t.id)
            }
            if (n.length < 3) return;
            n = h.getRandomElements(n, 3), e.info = {
              roleInfo: n
            }, e.role = n[0], this.InfoArr.push(e)
          }
        }
        qxbaofaEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          s.cache.tufaCheck[e.id] && (t = 1);
          let o = h.gsAllNumGet() >= n.num;
          if (t <= n.rate && o) {
            let n = [];
            const t = s.workInfo1.objs;
            for (const e in t) {
              const o = t[e],
                i = f.co_post.zgTableKey(o.postId);
              i && 1 == i.type && s.combmInfo.objs[o.depId] && s.combmInfo.objs[o.depId].workId > 0 && n.push(o.id)
            }
            if (n.length <= 0) return;
            let o = h.sjTabGetgs(n);
            e.info = {
              role: o
            }, e.role = o, this.InfoArr.push(e)
          }
        }
        jidumiantanEvent(e, n) {
          let t = f.co_event_rate.zgTableKey(e.id),
            o = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (o = 1), h.gsAllNumGet() >= t.num) {
            let t = h.getWorkArrCcaiSzhao([1]);
            if (t.length < 5) return;
            let o = {
                2: 1,
                5: 2,
                8: 3,
                11: 4
              },
              i = h.sjNumgs(3, 5),
              s = h.getRandomElements(t, i);
            e.info = {
              role: s,
              type: o[n] || 1
            }, e.role = s[0], this.InfoArr.push(e)
          }
        }
        tjshujiEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = Object.keys(s.workInfo1.objs),
              t = n[h.sjNumArrgs2(0, n.length - 1, 1)[0]],
              o = s.findObjById("workInfo1", t);
            e.info = {
              workInfo1_s: o
            }, e.role = o.id, this.InfoArr.push(e)
          }
        }
        daoshiDianboEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = h.getWorkArrCcaiSzhao([]);
            if (n.length >= 5) {
              let t = h.sjNumArrgs2(3, 5, 1),
                o = h.sjNumArrgs2(0, n.length - 1, t),
                i = [];
              for (let e = 0; e < o.length; e++) {
                let t = n[o[e]],
                  l = s.findObjById("workInfo1", t),
                  r = f.co_job.zgTableKey(l.jobId),
                  h = Math.ceil(2 * r.get_money),
                  a = {
                    id: l.id,
                    workInfo1_s: l,
                    earn: h
                  };
                i.push(a)
              }
              i.sort(((e, n) => n.earn - e.earn)), e.info = {
                can: i
              }, e.role = i[0].id, this.InfoArr.push(e)
            }
          }
        }
        chongdianEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), h.getNewOpen(100008) && !s.chargeInfo.chufa && (t = 1), h.getNewOpen(100008) && t <= n.rate && h.gsAllNumGet() >= n.num) {
            s.chargeInfo.chufa = 1;
            let n = f.co_class.values,
              t = s.chargeInfo.objs,
              o = [];
            for (let e in n) {
              let i = n[e];
              t[i.id] || o.push(i)
            }
            if (o.length > 0) {
              let n = h.sjNumArrgs2(1, 2, 1)[0],
                t = Math.min(n, o.length),
                i = h.sjNumArrgs2(0, o.length - 1, t),
                s = [];
              for (let e = 0; e < i.length; e++) {
                let n = o[i[e]];
                s.push(n)
              }
              s.length > 0 && (e.info = {
                id: 1,
                can: s
              }, e.role = 1, this.InfoArr.push(e))
            }
          }
        }
        gongsiFuliEvent(e) {
          if (h.getNewOpen(100007)) {
            let n = f.co_benefits.values,
              t = f.co_benefits_lv.objs,
              o = Object.keys(s.workInfo1.objs),
              i = o.length,
              l = [],
              r = {};
            for (let e = 0; e < n.length; e++) {
              let f = n[e];
              if (i >= f.number) {
                let e = s.findObjById("fuliInfo", f.id),
                  n = t[f.id][e.lv - 1],
                  a = Math.min(i, n.number),
                  u = h.sjNumArrgs2(n.add1, n.add2, 1)[0],
                  c = h.sjNumArrgs2(0, o.length - 1, a),
                  d = [];
                for (let e = 0; e < a; e++) {
                  let n = o[c[e]];
                  d.push(n), r[n] = r[n] || {}, 1 == f.type ? (r[n].hp = r[n].hp || 0, r[n].hp += u) : 2 == f.type ? (r[n].att = r[n].att || 0, r[n].att += u) : 3 == f.type ? (r[n].def = r[n].def || 0, r[n].def += u) : 4 == f.type ? (r[n].speed = r[n].speed || 0, r[n].speed += u) : 5 == f.type ? (r[n].pot = r[n].pot || 0, r[n].pot += u) : 6 == f.type && (r[n].amb = r[n].amb || 0, r[n].amb += u)
                }
                let g = {
                  ids: d,
                  sjAdd: u,
                  co_benefits_t: f
                };
                l.push(g)
              }
            }
            console.log(r, l, "福利");
            let u = [];
            for (let e in r) {
              let n = s.findObjById("workInfo1", e);
              u.push(e), a.addWorkerAttr(n.id, r[e])
            }
            l.length > 0 && (e.info = {
              arr: l,
              ids: u
            }, this.InfoArr.push(e))
          }
        }
        chuangyeEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), h.getNewOpen(100011) && t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = s.combmInfo.objs,
              t = [];
            for (let e in n) {
              let o = n[e];
              if (o.id >= 1101 && o.id < 1400 && o.workId) {
                let e = s.findObjById("workInfo1", o.workId);
                !e || e.isEdu || e.chucai || t.push(e)
              }
            }
            if (t.length > 0) {
              let n = t[h.sjNumArrgs2(0, t.length - 1, 1)[0]];
              e.info = {
                workInfo1_s: n
              }, e.role = n.id, this.InfoArr.push(e)
            }
          }
        }
        jiebaoEvent(e) {
          let n = s.chuangyeInfo.objs,
            t = [];
          for (let e in n) {
            let o = n[e],
              i = f.co_staff_company.zgTableKey(o.lv + 1);
            console.log(i, "co_staff_company_t"), i && t.push(o)
          }
          if (t.length > 0) {
            let n = t[h.sjNumArrgs2(0, t.length - 1, 1)[0]];
            e.info = {
              chuangyeInfo_s: n
            }, this.InfoArr.push(e)
          }
        }
        shengwaEvent(e) {
          let n = f.co_event_rate.zgTableKey(e.id),
            t = h.sjNumgs(1, 1e4);
          if (s.cache.tufaCheck[e.id] && (t = 1), t = 1, t <= n.rate && h.gsAllNumGet() >= n.num) {
            let n = Object.keys(s.workInfo1.objs);
            n.splice(0, 1);
            let t = n[h.sjNumArrgs2(0, n.length - 1, 1)[0]],
              o = s.findObjById("workInfo1", t);
            e.info = {
              workInfo1_s: o
            }, e.role = o.id, this.InfoArr.push(e)
          }
        }
      }) || L);
      n._RF.pop()
    }
  }
}));