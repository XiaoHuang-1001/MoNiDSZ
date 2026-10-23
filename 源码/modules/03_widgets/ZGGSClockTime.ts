System.register("chunks:///_virtual/ZGGSClockTime.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSClockTimeFx.ts", "./PQTips2.ts", "./PQTips.ts", "./WChengjiu2.ts", "./WShiyong.ts", "./blController.ts"], (function(e) {
  "use strict";
  var i, s, n, t, c, o, a, h, l, d, u, f, r, m, g, p;
  return {
    setters: [function(e) {
      i = e.cclegacy, s = e._decorator, n = e.find, t = e.sys
    }, function(e) {
      c = e.gs_sql, o = e.gs_bmsg, a = e.gs_www, h = e.gs_computer, l = e.gs_boss, d = e.gs_tabpr
    }, function(e) {
      u = e.ZGGSClockTimeFx
    }, function(e) {
      f = e.PQTips2
    }, function(e) {
      r = e.PQTips
    }, function(e) {
      m = e.WChengjiu2
    }, function(e) {
      g = e.WShiyong
    }, function(e) {
      p = e.blController
    }],
    execute: function() {
      var b, j;
      i._RF.push({}, "f43e5XHjYlNDYEHLiG0uOCf", "ZGGSClockTime", void 0);
      const {
        ccclass: T,
        property: w
      } = s;
      e("ZGGSClockTime", T("ZGGSClockTime")(((j = class extends u {
        constructor(...e) {
          super(...e), this.m_sv = null, this.m_ground = void 0, this.m_scale = void 0
        }
        loadjichu() {}
        load(e) {
          this.evenTimeNode = this.zgNodegzt("evenTime"), this.loadjichu(), this.shiguanli(), this.m_scale = {
            x: .5,
            y: .5,
            z: .5
          }, this.sendMsgTs()
        }
        startGame() {
          c.config.guideId >= 1e3 && c.base.stopGame && o.send(2100, !1), this.outGameAward(), this.updateData(), this.checkDingshi(), this.enGameInitT(), a.playerDataUp()
        }
        enGameInitT() {
          let e = n("Canvas/popup/WGongshiGuiding");
          e && (e.active = !1);
          let i = t.localStorage.getItem("ZGSGSSID");
          a.blDataUpDay(i, 1, "0", c.config.uid)
        }
        updateData() {
          let e = this.zgLableglt("timeLay/time1");
          e.unscheduleAllCallbacks();
          let i = function() {
            this.CzDayTime()
          }.bind(this);
          e.schedule(i, 2), i();
          let s = 60,
            n = function() {
              c.config.onlineTime += 1, c.bluJi.abUm < 7210 && (c.bluJi.abUm += 1, p.shichangSend(c.bluJi.abUm)), s <= 0 ? (s = 60, c.cjInfo.zxTimeCount++, c.cache.cjCheckType[2] = c.cjInfo.zxTimeCount) : s--, c.cache.yindaoStop || c.base.stopGame || c.cache.timeStop || c.base.jashuTime && c.base.jashuTime > 0 && (c.base.jashuTime -= 1e3, c.base.jashuTime <= 0 && (h.initTimeNumCd(), o.send(2200), o.send(2201)))
            }.bind(this);
          e.schedule(n, 1), n();
          let t = this.zgLableglt("timeLay/time1"),
            a = function() {
              this.checkCjInfo()
            }.bind(this);
          t.schedule(a, .1)
        }
        checkDingshi() {
          let e = this.zgNodegzt("timeLay1"),
            i = c.base.sec;
          c.cache.sec > 0 && (i = c.cache.sec), this.gsScheduleStnode(e, (() => {
            c.cache.yindaoStop || (c.base.stopGame ? i < c.cache.sec / 3 && (i = Math.floor(c.cache.sec / 3)) : c.cache.timeStop || (i--, i <= 0 && (i = c.base.sec, c.cache.sec > 0 && (i = c.cache.sec), this.timeLast())))
          }), .01)
        }
        allSecondsNeedCheck() {}
        receive(e, i, s, t, o, a) {
          if (202 == e) this.showTipsUd(i);
          else if (206 == e) this.showTipsUd2(i);
          else if (2100 == e) this.yindaoPingjia(i);
          else if (2200 == e) this.checkDingshi();
          else if (2300 == e) {
            console.log("下一个事件触发 2300"), this.isEvenOpen = !1;
            let e = n("Canvas/window");
            for (const i of e.children) i.active && (i.active = !1);
            this.showEven()
          } else 2301 == e ? this.checkSpEven(0, 0, 0, i) : 501 == e ? this.yindaoEvent() : 2307 == e && (this.isEvenOpen = !0, c.cache.isTufa = !0)
        }
        showTipsUd(e) {
          l.bossPshow(r, e)
        }
        showTipsUd2(e) {
          l.bossPshow(f, e)
        }
        shiguanli() {
          this.zgNodegzt("timeLay")
        }
        sendMsgTs() {
          console.log("推送"), t.platform === t.Platform.IOS && (window.PlatformManager.i_na_cancelPush(1), window.PlatformManager.i_na_push(28800, 1), window.PlatformManager.i_na_cancelPush(2), window.PlatformManager.i_na_push(0, 2), window.PlatformManager.i_na_cancelPush(3), window.PlatformManager.i_na_push(0, 3))
        }
        yindaoPingjia(e) {
          if (e || c.cache.yindaoStop || this.isEvenOpen || c.base.pingfen < 50) return;
          let i = n("Canvas/window").children;
          for (let e of i)
            if (1 == e.active) return;
          return 1 == c.pingjiaInfo.titId ? (c.config.guideId = 1100, c.cache.yindaoStop = !0, l.bossPshow(g), !0) : void 0
        }
        checkCjInfo() {
          for (const e in c.cache.cjCheckType) {
            let i = c.cache.cjCheckType[e];
            if (i > 0) {
              const s = d.co_accomplish.objs[e];
              for (let n = c.cjInfo.cjlv[e] || 0; n < s.length; n++) {
                const t = s[n];
                if (c.cjInfo.lockCj[e].indexOf(t.id) < 0) {
                  if (!(i >= t.num)) break;
                  c.cjInfo.zhibo.indexOf(t.id) < 0 && (c.cjInfo.zhibo.push(t.id), c.cjInfo.lockCj[e].push(t.id), c.cjInfo.timeCj[t.id] = (new Date).valueOf(), c.cjInfo.cjlv[e] = n)
                }
              }
              c.cache.cjCheckType[e] = null
            }
          }
          this.checkOpenCjWin()
        }
        checkOpenCjWin() {
          if (!h.getNewOpen(100001) || c.cjInfo.zhibo.length <= 0) return;
          if (c.cache.isTufa || c.cache.isXgn || c.cache.yindaoStop || this.isEvenOpen) return;
          let e = n("Canvas/window").children;
          for (let i of e)
            if (1 == i.active) return;
          c.base.stopGame = !0, o.send(2100, !0);
          let i = c.cjInfo.zhibo.shift();
          l.bossWshow(m, i)
        }
      }).m_name = "ZGGSClockTime", b = j)) || b);
      i._RF.pop()
    }
  }
}));