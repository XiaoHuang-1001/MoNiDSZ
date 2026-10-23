System.register("chunks:///_virtual/ZGGSClockTimeFx.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSClockTimeFxx.ts", "./WOutTime.ts", "./minFunc.ts"], (function(o) {
  "use strict";
  var e, n, t, s, a, r, i, f, d, c, h, u, l, m, b, I, y;
  return {
    setters: [function(o) {
      e = o.cclegacy, n = o.find, t = o.game, s = o.Game, a = o.js, r = o._decorator
    }, function(o) {
      i = o.gs_computer, f = o.gs_sql, d = o.gs_bmsg, c = o.gs_boss, h = o.gs_sound, u = o.gs_phone, l = o.gs_btxt, m = o.gs_tabpr
    }, function(o) {
      b = o.ZGGSClockTimeFxx
    }, function(o) {
      I = o.WOutTime
    }, function(o) {
      y = o.minFunc
    }],
    execute: function() {
      var g;
      e._RF.push({}, "4232cJtI/pGuI0DHUZEtTIz", "ZGGSClockTimeFx", void 0);
      const {
        ccclass: p,
        property: k
      } = r;
      o("ZGGSClockTimeFx", p("ZGGSClockTimeFx")(g = class extends b {
        constructor(...o) {
          super(...o), this.dayMax = {
            1: 31,
            2: 28,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31
          }, this.delArr = []
        }
        CzDayTime() {
          i.todayTimeCheck(f.config.outTime) || (f.base.dayCount++, f.qiandaoInfo.day += 1, f.qiandaoInfo.award, f.qiandaoInfo.day >= 8 && (f.qiandaoInfo.day = 1, f.qiandaoInfo.award = [0, 0, 0, 0, 0, 0, 0, 0], f.qiandaoInfo.award2 = [0, 0, 0, 0, 0, 0, 0, 0]), f.huodong.infoRed = [], d.send(5502)), f.config.outTime = (new Date).valueOf()
        }
        outGameAward() {
          let o = f.config.outTime,
            e = !1,
            a = function() {
              if (!e) {
                e = !0, console.log("前台", "显示");
                let t = Date.now() - o;
                if (console.log(t > 6e4, f.config.guideId >= 1e3, "99"), t > 6e4 && f.config.guideId >= 1e3 && !f.cache.yindaoStop) {
                  if (!(0 == f.base.year && 1 == f.base.month && f.base.day < 10)) {
                    d.send(2100, !0);
                    let o = {
                      time: t
                    };
                    c.bossWshow(I, o)
                  }
                }
                if (!h.getMuseState()) {
                  let o = n("Canvas/window/WZhandou");
                  if (o && 1 == o.active) return void h.playBg("warBg");
                  h.playBg("vhallBg")
                }
              }
            }.bind(this);
          a(), t.on(s.EVENT_SHOW, a, this), t.on(s.EVENT_HIDE, (function() {
            o = Date.now(), e = !1, console.log("后台", "进入")
          }), this)
        }
        timeLast() {
          if (f.cache.yindaoStop) return;
          if (f.base.stopGame) return;
          if (f.cache.timeStop) return;
          let o = !1,
            e = !1,
            n = !1;
          if (this.isEvenOpen = !1, f.base.day++, f.base.year <= 0 && f.base.month <= 1 && f.base.day <= 6 && (2 == f.base.day || f.base.day), f.base.week++, o = !0, f.base.day > this.dayMax[f.base.month] && (f.base.day = 1, f.base.month++, e = !0, f.base.month > 12 && (f.base.month = 1, f.base.year++, f.cache.cjCheckType[4] = f.base.year, n = !0), f.likeInfo.monthInfo = {}, y.developUnlockSend(2), this.kaiWakeYear()), f.base.week > 7 && (f.base.week = 1, f.likeInfo.weekInfo = {}), n && this.yearRefresh(f.base.day, f.base.month, f.base.year), e && this.monthRefresh(f.base.day, f.base.month, f.base.year), this.dayRefresh(f.base.day, f.base.month, f.base.year), e && d.send(2002), this.delArr.length > 0) {
            for (let o = 0; o < this.delArr.length; o++) {
              let e = this.delArr[o];
              i.delWorkInfo(e)
            }
            console.log("存在虚假人物", this.delArr), this.delArr = []
          }
          this.checkSpEven(f.base.day, f.base.month, f.base.year)
        }
        dayRefresh(o, e, n) {
          console.log("-----------每日刷新-----------");
          for (const o of f.chucaiInfo.ccInfo) o.day > 0 && o.day--;
          for (const o of f.upEduInfo.arr) o.day > 0 && o.day--;
          for (let o in f.chargeInfo.objs) f.chargeInfo.objs[o].day > 0 && f.chargeInfo.objs[o].day--;
          d.send(2006), this.earnEveryDay(), this.expEveryDay(o), 20 == o && this.brokeJob(), 1 == o && this.refrshJIngshengInfo(), this.xianshengAwardSend()
        }
        monthRefresh(o, e, n) {
          console.log("-----------每月刷新-----------"), f.base.zpNum = 0, this.payDay(), this.chuangyeHuibao(), (e >= 2 || n > 0) && this.runningLanternJudgment()
        }
        yearRefresh(o, e, n) {
          console.log("-----------每年刷新-----------")
        }
        expEveryDay(o) {
          this.delArr = [];
          let e = f.workInfo1.objs;
          for (let n in e) {
            let t = e[n];
            f.ALLWORKER[n] && (t.exp += f.ALLWORKER[n].workExp || 0), 10 == o && u.addExpUpById(n, 0), u.addFoutAttr(t.id);
            const s = f.combmInfo.objs[t.depId];
            if (s) {
              let o = !0;
              (s.workId == t.id || s.workArr.indexOf(t.id) >= 0) && (o = !1), o && this.delArr.push(t.id)
            }
          }
        }
        earnEveryDay() {
          let o = [1, f.TOTALEARN || 0];
          i.getNeedTabgs(o, null, -1), f.base.lastMOnth += o[1], f.chaopiaosub.num += o[1], f.chaopiaosub.day += 1, f.chaopiaosub.day >= 10 && (f.chaopiaosub.day = 0, y.workerDays())
        }
        payDay() {
          let o = i.zongxinshui();
          f.base.gold -= o, y.xioahaoSend(1, o, f.base.gold, 21), d.send(203, {
            type: 1
          })
        }
        runningLanternJudgment() {
          let o = i.zongxinshui();
          if (o > 0) {
            let e = "";
            e = f.base.gold > 6 * o ? l.gsStringByTwo(3) : l.gsStringByTwo(4), e = a.formatStr(e, i.gsNumValueShow(o), i.gsNumValueShow(f.base.lastMOnth), i.gsNumValueShow(f.base.gold)), d.send(3101, e), f.base.lastMOnth = 0
          }
        }
        brokeJob() {
          let o = 0;
          for (let e in f.companyInfo.lastUp) o += 1;
          if (o > 0) {
            let e = l.gsStringByParam(12, o);
            d.send(3101, e)
          }
        }
        refrshJIngshengInfo() {
          f.jsInfo.info = [], f.jsInfo.cyInfo = [];
          let o = {},
            e = {},
            n = {};
          for (const t in f.combmInfo.objs) {
            const s = f.combmInfo.objs[t];
            if (1 != s.workId && 1002 != s.id && 1003 != s.id)
              if (s.workId <= 0)
                if (s.comArr.length > 0)
                  for (const o of s.comArr) f.combmInfo.objs[o].workId > 0 && (n[s.id] = n[s.id] || [], n[s.id].push(f.combmInfo.objs[o].workId));
                else
                  for (const o of s.workArr) n[s.id] = n[s.id] || [], n[s.id].push(o);
            else if (s.comArr.length > 0)
              for (const o of s.comArr) f.combmInfo.objs[o].workId > 0 && i.conSortWorkAttr(s.workId, f.combmInfo.objs[o].workId) && (e[s.workId] = e[s.workId] || [], e[s.workId].push(f.combmInfo.objs[o].workId));
            else
              for (const e of s.workArr) i.conSortWorkAttr(s.workId, e) && (o[s.workId] = o[s.workId] || [], o[s.workId].push(e))
          }
          for (const o in n) {
            let e = n[o];
            e.sort((function(o, e) {
              const n = u.returnOneAttr(o),
                t = u.returnOneAttr(e);
              return t.pot + t.amb + t.allNum - (n.pot + n.amb + n.allNum)
            }));
            let t = `${o}`,
              s = e[0];
            f.jsInfo.cyInfo.indexOf(s) < 0 && f.jsInfo.cyInfo.indexOf(t) < 0 && (f.jsInfo.info.push([t, s]), f.jsInfo.cyInfo.push(s), f.jsInfo.cyInfo.push(t))
          }
          for (const e in o) {
            let n = o[e];
            n.sort((function(o, e) {
              const n = u.returnOneAttr(o),
                t = u.returnOneAttr(e);
              return t.pot + t.amb + t.allNum - (n.pot + n.amb + n.allNum)
            }));
            let t = Number(e),
              s = n[0];
            f.jsInfo.cyInfo.indexOf(s) < 0 && f.jsInfo.cyInfo.indexOf(t) < 0 && (f.jsInfo.info.push([t, s]), f.jsInfo.cyInfo.push(s), f.jsInfo.cyInfo.push(t))
          }
          for (const o in e) {
            let n = e[o];
            n.sort((function(o, e) {
              const n = u.returnOneAttr(o),
                t = u.returnOneAttr(e);
              return t.pot + t.amb + t.allNum - (n.pot + n.amb + n.allNum)
            }));
            let t = Number(o),
              s = n[0];
            f.jsInfo.cyInfo.indexOf(s) < 0 && f.jsInfo.cyInfo.indexOf(t) < 0 && (f.jsInfo.info.unshift([t, s]), f.jsInfo.cyInfo.push(s), f.jsInfo.cyInfo.push(t))
          }
        }
        kaiWakeYear() {
          let o = f.chahuahui;
          if (o.open && !o.state) {
            if (i.huoquYueNum() >= o.kaiqiTime && 0 == o.state) {
              let e = m.co_dati.values,
                n = e[i.sjNumgs(0, e.length - 1)];
              o.id = n.id, o.state = 1, d.send(5501)
            }
          }
        }
        xianshengAwardSend() {
          let o = f.chahuahui;
          if (!o.state2 && o.award) {
            if (Date.now() > o.endTime) {
              let e = l.gsStringByTwo(7),
                n = {
                  content: e.content,
                  create_time: Date.now(),
                  enclosure: o.award,
                  game_from: 99,
                  id: "1",
                  order_id: null,
                  state: 1,
                  title: e.title,
                  uid: f.config.uid
                };
              f.youjian.arr1.push(n), o.state2 = 1
            }
          }
        }
        chuangyeHuibao() {
          let o = f.chuangyeInfo.objs;
          for (let e in o) {
            let n = o[e];
            n.month -= 1, n.month <= 0 && (n.month = 6, n.ljhb += n.hb)
          }
        }
      }) || g);
      e._RF.pop()
    }
  }
}));