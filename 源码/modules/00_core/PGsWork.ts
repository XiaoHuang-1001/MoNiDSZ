System.register("chunks:///_virtual/PGsWork.ts", ["cc", "./ZGGSConfigco.ts", "./ZGGSOfficeFx.ts", "./ZGGSClockTime.ts", "./WGongshiGuiding.ts", "./ZGGSRedHdian.ts", "./ZGGSEnumArr.ts", "./WFeishu.ts", "./VHBgshi.ts", "./WKaiye1.ts", "./WChengjiu.ts", "./minFunc.ts", "./WNewMing1.ts"], (function(e) {
  "use strict";
  var i, o, t, n, s, d, r, a, l, c, h, g, f, I, u, b, m, p, k, S, G, w, _, A, W;
  return {
    setters: [function(e) {
      i = e.cclegacy, o = e._decorator, t = e.sys, n = e.find
    }, function(e) {
      s = e.ZGGSConfigco
    }, function(e) {
      d = e.ZGGSOfficeFx, r = e.gs_boss, a = e.gs_computer, l = e.gs_sql, c = e.gs_tabpr, h = e.gs_phone, g = e.gs_sound, f = e.gs_www, I = e.gs_bmsg, u = e.gs_btxt
    }, function(e) {
      b = e.ZGGSClockTime
    }, function(e) {
      m = e.WGongshiGuiding
    }, function(e) {
      p = e.ZGGSRedHdian
    }, function(e) {
      k = e.ZGGSEnumArr
    }, function(e) {
      S = e.WFeishu
    }, function(e) {
      G = e.VHBgshi
    }, function(e) {
      w = e.WKaiye1
    }, function(e) {
      _ = e.WChengjiu
    }, function(e) {
      A = e.minFunc
    }, function(e) {
      W = e.WNewMing1
    }],
    execute: function() {
      var z, v;
      i._RF.push({}, "705089EYptOipPZyLjfNptv", "PGsWork", void 0);
      const {
        ccclass: P,
        property: j
      } = o;
      e("PGsWork", P("PGsWork")(((v = class e extends d {
        constructor(...e) {
          super(...e), this.canInto = !1
        }
        pohuiPage() {
          r.bossDieWin(e, 2)
        }
        __dshFail(where, err) {
          const msg = where + " 失败: " + (err && err.message ? err.message : err);
          try { window.__dshlog && window.__dshlog("FAIL " + msg + " | " + (err && err.stack)) } catch (e) {}
          try { window.__dshShow && window.__dshShow(msg + "\n" + (err && err.stack ? String(err.stack).slice(0, 300) : "")) } catch (e) {}
        }
        load(e) {
          window.__dshlog && window.__dshlog("PGsWork.load gsClview=" + s.gsClview + " sdkCp=" + s.sdkCp + " kpkasi=" + s.kpkasi);
          try {
            window.__dshlog && window.__dshlog("DB@load combm=" + Object.keys(l.combmInfo.objs).length +
              " dshBV=" + (l.base && l.base.dshBV) + " year=" + (l.base && l.base.year))
          } catch (e0) {}
          // 单机版：原版靠服务器存档，这里每 10 秒落一次本地盘，否则关掉游戏进度全丢
          if (!window.__dshSaveTimer) {
            window.__dshSaveTimer = setInterval(function() {
              try { window.__dshSaveData && window.__dshSaveData() } catch (e) {}
            }, 10000)
          }
          // 组织架构图打开时由 VHBgshiMap 调用（引导结束后才会真正提问）
          window.__dshAskBranchNames = () => { try { this.__dshAskNamesIfNeeded() } catch (e) {} };
          // 点击分公司董事长 / 分公司板块 → 改分公司名字（预填当前名字，方便改）
          window.__dshRenameBranch = (id) => {
            try {
              const bid = Number(id);
              if (bid != 1500 && bid != 1600) return;
              this.__dshAskName(bid, null, this.__dshBranchName(bid))
            } catch (e) {}
          };
          window.__dshlog && window.__dshlog("rename hook = " + typeof window.__dshRenameBranch);
          this.log("登录界面"), a.loadJian(), p.loadBlack(), this.gsButtongbs("GTTu/btn_even", this.checkAllName.bind(this));
          let i = Date.now(),
            o = t.localStorage.getItem("ZGSGSSID");
          o || (t.localStorage.setItem("ZGSGSSID", i + ""), o = t.localStorage.getItem("ZGSGSSID"));
          let n = t.localStorage.getItem("ZGSGSAUID");
          if (n || (t.localStorage.setItem("ZGSGSAUID", i + "#" + l.config.qudao), n = t.localStorage.getItem("ZGSGSAUID")), console.log(o, n, "标识符id,uid"), l.config.uid = n, 1 == s.sdkCp) this.gsSprstHtByUIs("shiling", "8");
          else if (2 == s.sdkCp) {
            let e = A.getslAge();
            e > 0 && this.gsSprstHtByUIs("shiling", `${e}`)
          }
          if (this.gsButtongbs("shiling", function() {
              console.log("点击适龄提示"), 1 == s.sdkCp ? r.bossPshow(m) : 2 == s.sdkCp && A.gotoAge()
            }.bind(this)), this.gsButtongbs("GTTu/btn_even2", function() {
              this.xindeStart()
            }.bind(this)), r.bossPshow(S), s.gsClview) return this.zgNodegzt("GTTu/btn_even3").active = !1, this.zgNodegzt("GTTu/btn_even2").active = !1, this.zgNodegzt("GTTu/btn_even").active = !1, this.checkAllName()
        }
        checkAllName() {
          window.__dshlog && window.__dshlog("checkAllName: enter");
          if (l.base.wxNew) return this.paotiao();
          {
            let e = l.workInfo1.objs,
              i = [];
            for (let o in e) i.push(e[o]);
            let o = c.co_name.objs,
              t = e => {
                if (!(e < i.length)) return l.base.wxNew = 1, this.paotiao();
                {
                  let n = i[e],
                    s = n.name;
                  console.log("old", s), A.checkIlllegal(s, (i => {
                    if (!i) {
                      let e = n.sex,
                        i = o[e],
                        t = a.sjNumArrgs2(0, i.length - 1, 2),
                        s = i[t[0]],
                        d = i[t[0]];
                      n.name = s.name1 + d.name2
                    }
                    t(e + 1)
                  }), !0)
                }
              },
              n = l.base.name;
            console.log("公司old", n), n.length > 0 ? A.checkIlllegal(n, (e => {
              if (!e) {
                let e = c.co_cname.zgTableKey(1);
                l.base.name = e.name
              }
              t(0)
            }), !0) : t(0)
          }
        }
        paotiao() {
          window.__dshlog && window.__dshlog("paotiao: start");
          h.loadJian();
          let e = Date.now(),
            i = t.localStorage.getItem("ZGSGSSID"),
            o = t.localStorage.getItem("ZGSGSAUID");
          if (o || (t.localStorage.setItem("ZGSGSAUID", e + "#" + l.config.qudao), o = t.localStorage.getItem("ZGSGSAUID")), console.log(i, o, "标识符id,uid"), l.config.uid = o, 1 == s.sdkCp) {
            let e = a.getDanjiInfo();
            console.log(e, "渠道表"), l.config.companyName = e.gongsi, l.config.strmp = e.shezhi, l.config.loadingTxt = e.jindutiao, l.chahuahui.open = e.pingfen, l.chahuahui.openComment = e.pinglun
          } else s.bhaopz = "", l.chahuahui.open = 0, l.chahuahui.openComment = 0;
          r.bossGshow(b), this.zgNodegzt("GTTu/btn_even3").active = !1, this.zgNodegzt("GTTu/btn_even2").active = !1, this.zgNodegzt("GTTu/btn_even").active = !1, this.zgNodegzt("spr_jindu").active = !0;
          try { this.attainSet() } catch (e1) { this.__dshFail("attainSet", e1) }
          try { this.gameSetTest() } catch (e2) { this.__dshFail("gameSetTest", e2) }
          try { this.setGameSet() } catch (e3) { this.__dshFail("setGameSet", e3) }
          window.__dshlog && window.__dshlog("paotiao: init done");
          var d = 0,
            c = [
              [_, 2, "Canvas/window/WChengjiu", 20]
            ],
            m = 0,
            p = function() {
              if (o = c[d]) 0 == --o[3] ? 0 == o[1] ? r.bossGshow(o[0]) : 1 == o[1] ? r.bossUshow(o[0]) : 2 == o[1] ? r.bossWshow(o[0]) : 3 == o[1] && r.bossPshow(o[0]) : (s = n(o[2])) && (k = s).com && !k.com.wait && (k.active = !1, d += 1);
              else
                for (var e = 0; e < c.length; e++) {
                  if (s = n((o = c[e])[2]))
                    if ((k = s).com && !k.com.wait) {
                      k.active = !1;
                      break
                    }
                }
              let i = 0;
              if (i = m < (d + 1) / (c.length + 1) ? .005 : .001, m < .7 && m + i > .7 && this.getPeizhi0514(), (m += i) >= 1) {
                if (m = 1, !n("Canvas/ground/ZGGSClockTime")) return console.error("找不到倒计时系统大厅"), this.unscheduleAllCallbacks(), void this.schedule(p, 1);
                if (!n("Canvas/ui/VHBgshi")) return console.error("找不到大厅按钮"), this.unscheduleAllCallbacks(), void this.schedule(p, 1);
                for (e = 0; e < c.length; e++) {
                  var o, s, k;
                  if (s = n((o = c[e])[2]))(k = s).com && k.active && (k.active = !1)
                }
                if (l.base.gmPack && !l.base.PackKey) return;
                n("Canvas/ground/ZGGSClockTime").getComponent(b) && (this.unscheduleAllCallbacks(), this.scheduleOnce(function() {
                  if (g.playBg("vhallBg"), n("Canvas/btn_even").active = !1, l.config.guideId < 1e3) {
                    l.base.stopGame = !0, r.bossWshow(w);
                    let e = Date.now(),
                      i = t.localStorage.getItem("ZGSGSAUID");
                    i || (t.localStorage.setItem("ZGSGSAUID", e + "#" + l.config.qudao), i = t.localStorage.getItem("ZGSGSAUID")), console.log(i, "uid"), l.config.uid = i;
                    let o = t.localStorage.getItem("ZGSGSSID");
                    f.blUpPlayerData(l.config.uid, o, 1), f.blInitPlayerData(o, "0", l.config.uid)
                  }
                  n("Canvas/ground/ZGGSClockTime").getComponent(b).startGame(), window.__dshlog && window.__dshlog("paotiao: startGame"), l.config.guideId < 1e3 ? this.scheduleOnce(function() {
                    this.pohuiPage()
                  }.bind(this), .3) : this.scheduleOnce(function() {
                    l.base.gmPack ? (l.base.PackKey && (h.loadJian(), a.afterInsetWokrer(), I.send(2002)), this.scheduleOnce((() => {
                      this.pohuiPage()
                    }), 2)) : this.pohuiPage()
                  }.bind(this), .1)
                }.bind(this), .5))
              }
              this.zgSpriteFargst("spr_jindu/spr_jindu").fillRange = m, this.gsTxtLblgs("node_jindu/YMLabel-004", u.gsNorStringType(14) + `${Math.floor(100*m)}%(${(50*m).toFixed(2)}/50mb)`)
            }.bind(this);
          this.scheduleOnce(function() {
            l.config.guideId
          }.bind(this), 2), this.scheduleOnce(function() {
            this.schedule(p, 0)
          }.bind(this), .5), this.scheduleOnce(function() {
            r.bossUshow(G)
          }.bind(this), .3), this.scheduleOnce(function() {
            try {
              const g = n("Canvas/ground/ZGGSClockTime");
              if (!g || !g.active) window.__dshShow && window.__dshShow("加载卡住了，最后日志：\n" + (window.__dshTail ? window.__dshTail(10) : ""))
            } catch (e) {}
          }.bind(this), 20)
        }
        attainSet() {
          f.refreshZGSID(), f.initPlayerData();
          this.schedule((function() {
            this.gsTxtLblgs("node_jindu/YMLabel-006", s.bhaopz), f.initPlayerData2(), this.gsRichLbltxtgrs("node_jindu/YMLabel-005", `<color=#000000>${l.config.loadingTxt}</c>`)
          }), 1)
        }
        showTipLoad() {
          let e = u.gsStringJDInfo(),
            i = Math.floor(Math.random() * e.length);
          this.gsTxtLblgs("node_jindu/YMLabel-003", e[i]);
          let o = 0;
          this.schedule(function() {
            if (--o < 0) {
              let i = Math.floor(Math.random() * e.length);
              this.gsTxtLblgs("node_jindu/YMLabel-003", e[i])
            }
          }.bind(this), 3), this.gsButtongbs("spr_bg", function() {
            let i = Math.floor(Math.random() * e.length);
            this.gsTxtLblgs("node_jindu/YMLabel-003", e[i]), o = 1
          }.bind(this))
        }
        gameSetTest() {
          0 == l.shangzhanInfo.lv && (a.initNextShangzhanInfo(5001), a.initShangzhanInfo())
        }
        setGameSet() {
          if (!l.findObjById("combmInfo", 1001)) {
            l.createNewObj2("combmInfo", 1001).depId = 100100
          }
          c.co_device.values;
          let e = c.co_dep.values;
          for (let i = 0; i < e.length; i++) {
            let o = e[i];
            if ((1 == o.step || 2 == o.step) && !l.findObjById("shebeiInfo", o.id)) {
              let e = l.createNewObj2("shebeiInfo", o.id);
              1001 == o.id && (e.lock = 1)
            }
          }
          for (let e = 1; e <= 5; e++) {
            let i = l.findObjById("zichanInfo", e);
            i || (i = l.createNewObj2("zichanInfo", e))
          }
          let i = c.co_market.values;
          for (let e = 0; e < i.length; e++) {
            let o = i[e];
            if (!l.findObjById("shichangInfo", o.id)) {
              let e = l.createNewObj2("shichangInfo", o.id);
              6101 == o.id && (e.lock = 1)
            }
          }
          let o = c.co_check.values;
          for (let e = 0; e < o.length; e++) {
            let i = o[e];
            if (!l.findObjById("kaoheInfo", i.id)) {
              let e = l.createNewObj2("kaoheInfo", i.id);
              1 == i.is_get && (e.lock = 1)
            }
          }
          let t = l.config.guideId;
          t > 1e3 && t < 1100 ? l.config.guideId = 1100 : t > 1100 && t < 1200 ? l.config.guideId = 1200 : t > 1200 && t < 1300 && (l.config.guideId = 1300);
          let n = l.config.qudao;
          const s = c.co_huodong.objs[n];
          if (s && s.length > 0 ? l.huodong.info = s : l.huodong.info = [], a.initTimeNumCd(), l.base.gmPack && !l.base.PackKey) {
            l.config.guideId = 1300, l.base.diamond = 1e5, l.base.gold = 1e10, l.base.jinka = 1e5;
            let e = {
              1001: {
                id: 1001,
                depId: 100100,
                comArr: [1500, 1600],
                workerId: 0
              },
              1002: {
                id: 1002,
                depId: 100200,
                comArr: [],
                workerId: 0
              },
              1003: {
                id: 1003,
                depId: 100300,
                comArr: [],
                workerId: 0
              },
              1500: {
                id: 1500,
                depId: 150000,
                comArr: [1101, 1102, 1103, 1104, 1105, 1106],
                workerId: 0
              },
              1101: {
                id: 1101,
                depId: 110102,
                comArr: [1201, 1202, 1203],
                workerId: 0
              },
              1102: {
                id: 1102,
                depId: 110209,
                comArr: [1204, 1205, 1206],
                workerId: 0
              },
              1103: {
                id: 1103,
                depId: 110309,
                comArr: [1207, 1208, 1209],
                workerId: 0
              },
              1104: {
                id: 1104,
                depId: 110402,
                comArr: [1210, 1211, 1212],
                workerId: 0
              },
              1105: {
                id: 1105,
                depId: 110500,
                comArr: [],
                workerId: 110501
              },
              1106: {
                id: 1106,
                depId: 110600,
                comArr: [],
                workerId: 110601
              },
              1201: {
                id: 1201,
                depId: 110103,
                comArr: [],
                workerId: 110106
              },
              1202: {
                id: 1202,
                depId: 110104,
                comArr: [],
                workerId: 110107
              },
              1203: {
                id: 1203,
                depId: 110105,
                comArr: [],
                workerId: 110108
              },
              1204: {
                id: 1204,
                depId: 110203,
                comArr: [],
                workerId: 110206
              },
              1205: {
                id: 1205,
                depId: 110204,
                comArr: [],
                workerId: 110207
              },
              1206: {
                id: 1206,
                depId: 110212,
                comArr: [1301, 1302, 1303],
                workerId: 0
              },
              1207: {
                id: 1207,
                depId: 110310,
                comArr: [1304, 1305, 1306, 1307],
                workerId: 0
              },
              1208: {
                id: 1208,
                depId: 110311,
                comArr: [1308, 1309, 1310]
              },
              1209: {
                id: 1209,
                depId: 110312,
                comArr: [1311, 1312, 1313, 1314],
                workerId: 0
              },
              1210: {
                id: 1210,
                depId: 110403,
                comArr: [],
                workerId: 110406
              },
              1211: {
                id: 1211,
                depId: 110404,
                comArr: [],
                workerId: 110407
              },
              1212: {
                id: 1212,
                depId: 110405,
                comArr: [],
                workerId: 110408
              },
              1301: {
                id: 1301,
                depId: 110213,
                comArr: [],
                workerId: 110218
              },
              1302: {
                id: 1302,
                depId: 110214,
                comArr: [],
                workerId: 110219
              },
              1303: {
                id: 1303,
                depId: 110215,
                comArr: [],
                workerId: 110220
              },
              1304: {
                id: 1304,
                depId: 110313,
                comArr: [],
                workerId: 110324
              },
              1305: {
                id: 1305,
                depId: 110314,
                comArr: [],
                workerId: 110325
              },
              1306: {
                id: 1306,
                depId: 110315,
                comArr: [],
                workerId: 110326
              },
              1307: {
                id: 1307,
                depId: 110316,
                comArr: [],
                workerId: 110327
              },
              1308: {
                id: 1308,
                depId: 110317,
                comArr: [],
                workerId: 110328
              },
              1309: {
                id: 1309,
                depId: 110318,
                comArr: [],
                workerId: 110329
              },
              1310: {
                id: 1310,
                depId: 110319,
                comArr: [],
                workerId: 110330
              },
              1311: {
                id: 1311,
                depId: 110320,
                comArr: [],
                workerId: 110331
              },
              1312: {
                id: 1312,
                depId: 110321,
                comArr: [],
                workerId: 110332
              },
              1313: {
                id: 1313,
                depId: 110322,
                comArr: [],
                workerId: 110333
              },
              1314: {
                id: 1314,
                depId: 110323,
                comArr: [],
                workerId: 110333
              },
              1600: {
                id: 1600,
                depId: 160000,
                comArr: [2101, 2102, 2103, 2104, 2105, 2106]
              },
              2101: {
                id: 2101,
                depId: 200003,
                comArr: [2201, 2202, 2203]
              },
              2102: {
                id: 2102,
                depId: 200007,
                comArr: [2204, 2205, 2206]
              },
              2103: {
                id: 2103,
                depId: 200011,
                comArr: [2207, 2208, 2209]
              },
              2104: {
                id: 2104,
                depId: 200015,
                comArr: [2210, 2211, 2212]
              },
              2105: {
                id: 2105,
                depId: 200016,
                comArr: [],
                workerId: 200017
              },
              2106: {
                id: 2106,
                depId: 200018,
                comArr: [],
                workerId: 200019
              },
              2201: {
                id: 2201,
                depId: 200020,
                comArr: [],
                workerId: 200021
              },
              2202: {
                id: 2202,
                depId: 200022,
                comArr: [],
                workerId: 200023
              },
              2203: {
                id: 2203,
                depId: 200024,
                comArr: [],
                workerId: 200025
              },
              2204: {
                id: 2204,
                depId: 200026,
                comArr: [],
                workerId: 200027
              },
              2205: {
                id: 2205,
                depId: 200029,
                comArr: [],
                workerId: 200030
              },
              2206: {
                id: 2206,
                depId: 200034,
                comArr: [2301, 2302, 2303]
              },
              2207: {
                id: 2207,
                depId: 200037,
                comArr: [2304, 2305, 2306, 2307]
              },
              2208: {
                id: 2208,
                depId: 200041,
                comArr: [2308, 2309, 2310]
              },
              2209: {
                id: 2209,
                depId: 200045,
                comArr: [2311, 2312, 2313, 2314]
              },
              2210: {
                id: 2210,
                depId: 200047,
                comArr: [],
                workerId: 200048
              },
              2211: {
                id: 2211,
                depId: 200049,
                comArr: [],
                workerId: 200050
              },
              2212: {
                id: 2212,
                depId: 200051,
                comArr: [],
                workerId: 200052
              },
              2301: {
                id: 2301,
                depId: 200053,
                comArr: [],
                workerId: 200054
              },
              2302: {
                id: 2302,
                depId: 200055,
                comArr: [],
                workerId: 200056
              },
              2303: {
                id: 2303,
                depId: 200057,
                comArr: [],
                workerId: 200058
              },
              2304: {
                id: 2304,
                depId: 200059,
                comArr: [],
                workerId: 200060
              },
              2305: {
                id: 2305,
                depId: 200062,
                comArr: [],
                workerId: 200063
              },
              2306: {
                id: 2306,
                depId: 200065,
                comArr: [],
                workerId: 200066
              },
              2307: {
                id: 2307,
                depId: 200068,
                comArr: [],
                workerId: 200069
              },
              2308: {
                id: 2308,
                depId: 200071,
                comArr: [],
                workerId: 200072
              },
              2309: {
                id: 2309,
                depId: 200074,
                comArr: [],
                workerId: 200075
              },
              2310: {
                id: 2310,
                depId: 200077,
                comArr: [],
                workerId: 200078
              },
              2311: {
                id: 2311,
                depId: 200080,
                comArr: [],
                workerId: 200081
              },
              2312: {
                id: 2312,
                depId: 200083,
                comArr: [],
                workerId: 200084
              },
              2313: {
                id: 2313,
                depId: 200086,
                comArr: [],
                workerId: 200087
              },
              2314: {
                id: 2314,
                depId: 200089,
                comArr: [],
                workerId: 200087
              },
            };
            for (let i in e) {
              let o = e[i],
                t = l.findObjById("combmInfo", o.id);
              if (t || (t = l.createNewObj2("combmInfo", o.id)), t.depId = o.depId, 1002 != o.id && 1003 != o.id && (t.comArr = o.comArr), 1001 == o.id) k.initDsz();
              else if (1002 == o.id) t.workArr = [0, 0, 0, 0], k.initYg(3, 100200);
              else if (1003 == o.id) t.workArr = [0, 0, 0, 0, 0, 0, 0, 0], k.initYg(4, 100300);
              else if (k.initYg(2, o.depId), t.comArr.length <= 0)
                for (let e = 0; e < 3; e++) k.initYg(1, o.workerId)
            }
            l.base.name = "梦想成真科技有限公司", l.base.PackKey = 1
          }
          let d = l.workInfo1.objs;
          for (let e in d) {
            let i = d[e];
            if (i.shichangPos[0]) {
              -1 == l.findObjById("shichangInfo", i.shichangPos[0]).num.indexOf(i.id) && (i.shichangPos[0] = 0)
            }
            if (i.kaohePos) {
              -1 == l.findObjById("kaoheInfo", i.kaohePos).num.indexOf(i.id) && (i.kaohePos = 0)
            }
          }
          let r = c.co_benefits.values;
          for (let e = 0; e < r.length; e++) {
            let i = l.findObjById("fuliInfo", r[e].id);
            i || (i = l.createNewObj2("fuliInfo", r[e].id))
          }
          try { this.__dshEnsureBranches() } catch (e1) { this.__dshFail("ensureBranches", e1) }
        }
        __dshRel() {
          return {
            1500: [1501, 1502, 1101, 1102, 1103, 1104, 1105, 1106],
            1600: [1601, 1602, 2101, 2102, 2103, 2104, 2105, 2106],
            1101: [1201, 1202, 1203], 1102: [1204, 1205, 1206], 1103: [1207, 1208, 1209], 1104: [1210, 1211, 1212],
            1206: [1301, 1302, 1303], 1207: [1304, 1305, 1306, 1307], 1208: [1308, 1309, 1310], 1209: [1311, 1312, 1313, 1314],
            2101: [2201, 2202, 2203], 2102: [2204, 2205, 2206], 2103: [2207, 2208, 2209], 2104: [2210, 2211, 2212],
            2206: [2301, 2302, 2303], 2207: [2304, 2305, 2306, 2307], 2208: [2308, 2309, 2310], 2209: [2311, 2312, 2313, 2314]
          }
        }
        __dshPostOf(depId, type) {
          const t = c.co_post.objs[type] && c.co_post.objs[type][depId];
          if (!t) return null;
          return Array.isArray(t) ? t[0] : t
        }
        __dshShuffle(arr) {
          for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const t = arr[i]; arr[i] = arr[j]; arr[j] = t
          }
          return arr
        }
        __dshBranchName(id) {
          const n = l.findObjById("combmInfo", id);
          if (!n) return "";
          if (!n.cname) n.cname = 1500 == id ? "分公司一" : "分公司二";
          return n.cname
        }
        __dshApplyBranchName(id) {
          const n = l.findObjById("combmInfo", id);
          if (!n || !n.cname) return;
          const pid = n.depId;
          if (!pid) return;
          const flat = c.co_post.objs;
          if (flat[pid]) flat[pid].name = n.cname;
          const arr = flat[2] && flat[2][id];
          if (Array.isArray(arr)) arr.forEach(p => { if (p && p.id === pid) p.name = n.cname });
          const arr2 = flat[1] && flat[1][id];
          (Array.isArray(arr2) ? arr2 : [arr2]).forEach(p => { if (p && p.id === pid) p.name = n.cname });
          window.__dshlog && window.__dshlog("branch name " + id + " = " + n.cname + " (post " + pid + ")")
        }
        // 把同一个岗位在两棵树里镜像对照，员工对半随机拆分（总数不变 → 两边宽度一致 → 树才对称）
        __dshBalanceEmployees() {
          const pairs = [];
          pairs.push([1501, 1601]);
          pairs.push([1502, 1602]);
          for (let i = 1101; i <= 1106; i++) pairs.push([i, i + 1000]);
          for (let i = 1201; i <= 1213; i++) pairs.push([i, i + 1000]);
          for (let i = 1301; i <= 1314; i++) pairs.push([i, i + 1000]);
          let movedN = 0;
          pairs.forEach(pr => {
            const a = pr[0], b = pr[1];
            const na = l.findObjById("combmInfo", a), nb = l.findObjById("combmInfo", b);
            if (!na || !nb) return;
            const all = [];
            [na, nb].forEach(n => {
              (Array.isArray(n.workArr) ? n.workArr : []).forEach(w => {
                if (w > 0 && all.indexOf(w) < 0) all.push(w)
              })
            });
            if (all.length < 2) return;
            this.__dshShuffle(all);
            const half = Math.ceil(all.length / 2);
            na.workArr = all.slice(0, half);
            nb.workArr = all.slice(half);
            all.forEach((w, i) => {
              const wi = l.findObjById("workInfo1", w);
              if (wi && wi.depId != (i < half ? a : b)) { wi.depId = i < half ? a : b; movedN++ }
            });
          });
          window.__dshlog && window.__dshlog("balance: pairs=" + pairs.length + " movedWorker=" + movedN)
        }
        __dshEnsureBranches() {
          const VER = 3;
          if (l.base && l.base.dshBV === VER) {
            window.__dshlog && window.__dshlog("ensureBranches: skip (v" + VER + ")");
            return
          }
          window.__dshlog && window.__dshlog("ensureBranches: start");
          const rel = this.__dshRel();
          const ds = l.findObjById("combmInfo", 1001);
          if (!ds) return;
          // 董事长配套：秘书处(1002) / 董事会(1003)。原版要等影响力解锁；
          // 这里开局就建好，保证顶层是「一个董事长 + 董事会 + 秘书处」这一套。
          [[1002, 100200, 4, 3], [1003, 100300, 8, 4]].forEach(cfg => {
            const id = cfg[0], post = cfg[1], seats = cfg[2], mode = cfg[3];
            let n = l.findObjById("combmInfo", id);
            if (!n) n = l.createNewObj2("combmInfo", id);
            if (!n.depId) n.depId = post;
            if (!Array.isArray(n.workArr) || n.workArr.length < seats) {
              const arr = Array.isArray(n.workArr) ? n.workArr.slice() : [];
              while (arr.length < seats) arr.push(0);
              n.workArr = arr
            }
            if (!(n.workId > 0)) {
              try { k.initYg(mode, post) } catch (e0) { this.__dshFail("team" + id, e0) }
            }
          });
          // 职级表由 63 级压缩为 30 级（P0-C..P9-A），老存档的 jobId 需要夹到上限
          try {
            for (const kk in l.workInfo1.objs) {
              const w = l.workInfo1.objs[kk];
              if (w && w.jobId > 30) w.jobId = 30
            }
          } catch (e0) { this.__dshFail("jobClamp", e0) }
          if (!Array.isArray(ds.comArr)) ds.comArr = [];
          // 1) 老档：六大部门还挂在董事长名下 -> 记录后搬到 1500
          const six = rel[1500];
          const moved = ds.comArr.filter(e => six.indexOf(e) >= 0);
          if (moved.length) ds.comArr = ds.comArr.filter(e => six.indexOf(e) < 0);
          // 2) 建全所有节点（老档里 1600 及整棵右树往往根本不存在）
          const allIds = [1500, 1600];
          for (const kk in rel) {
            if (allIds.indexOf(+kk) < 0) allIds.push(+kk);
            rel[kk].forEach(e => { if (allIds.indexOf(e) < 0) allIds.push(e) })
          }
          let created = 0;
          allIds.forEach(id => {
            let n = l.findObjById("combmInfo", id);
            if (!n) { n = l.createNewObj2("combmInfo", id); created++ }
            if (!Array.isArray(n.workArr)) n.workArr = [];
            if (!n.depId) {
              const p = this.__dshPostOf(id, 2);
              n.depId = p ? p.id : id * 100
            }
          });
          // 3) 接线（父子关系统一以 rel 为准，保证两边形状完全一致）
          for (const kk in rel) {
            const n = l.findObjById("combmInfo", +kk);
            if (n) n.comArr = rel[kk].slice()
          }
          ds.comArr = [1500, 1600];
          // 4) 叶子部门（没有子部门的）——员工只能挂在这里
          const leaves = allIds.filter(id => !rel[id]);
          // 5) 孤儿员工：没有有效部门、或原本直接挂在董事长名下的，随机分配到两个分公司
          const orphan = [];
          const objs = l.workInfo1.objs;
          for (const kk in objs) {
            const w = objs[kk];
            if (!w || !w.id || w.id <= 3) continue;
            if (!w.depId || 1001 == w.depId || !l.findObjById("combmInfo", w.depId)) {
              if (1002 == w.depId || 1003 == w.depId) continue;
              orphan.push(w)
            }
          }
          this.__dshShuffle(orphan);
          let dealt = 0;
          orphan.forEach(w => {
            const dep = leaves[dealt % leaves.length];
            dealt++;
            const n = l.findObjById("combmInfo", dep);
            if (!n) return;
            w.depId = dep;
            if (n.workArr.indexOf(w.id) < 0) n.workArr.push(w.id)
          });
          // 6) 老员工在两个分公司之间对半随机拆分（总数不变）
          try { this.__dshBalanceEmployees() } catch (e) { this.__dshFail("balance", e) }
          // 7) 每个部门必须有负责人；叶子部门补到 3 名员工（两边数量一致 -> 树才对称）
          let boss = 0, hire = 0;
          allIds.forEach(id => {
            const n = l.findObjById("combmInfo", id);
            if (!n) return;
            if (!(n.workId > 0)) {
              const p = this.__dshPostOf(id, 2);
              if (p) { try { k.initYg(2, p.id); boss++ } catch (e) {} }
            }
            if (rel[id]) return;
            const post1 = this.__dshPostOf(id, 1);
            if (!post1) return;
            let have = n.workArr.filter(x => x > 0).length;
            while (have < 3) {
              try { k.initYg(1, post1.id); hire++ } catch (e) { break }
              have++
            }
            // 不补零：补零会让「3 个真人」变成 length=8 的假满员，进而
            // ①新招聘的员工被 push 到可见窗口之外（看不见）②随机招聘事件消失
            // ③部门达到 set[1] 阈值后被自动拆分。这里只保留真实存在的员工。
            if (n.workArr.indexOf(-1) < 0) n.workArr = n.workArr.filter(x => x > 0)
          });
          // 8) 自定义名称
          [1500, 1600].forEach(id => { this.__dshBranchName(id); this.__dshApplyBranchName(id) });
          if (l.base) l.base.dshBV = VER;
          window.__dshlog && window.__dshlog("ensureBranches: created=" + created + " moved=" + moved.length +
            " orphan=" + orphan.length + " boss=" + boss + " hire=" + hire + " leaves=" + leaves.length)
          // 市场表自检：确认跑起来的是全量地级市数据（不是包里还是旧表）
          try {
            const mk = c.co_market && c.co_market.objs,
              lv = c.co_market_lv && c.co_market_lv.objs;
            const ids = mk ? Object.keys(mk).map(Number) : [];
            const mx = ids.length ? Math.max.apply(null, ids) : 0,
              mn = ids.length ? Math.min.apply(null, ids) : 0;
            window.__dshlog && window.__dshlog("market table: markets=" + ids.length +
              " lvGroups=" + (lv ? Object.keys(lv).length : -1) +
              " idRange=" + mn + "~" + mx +
              " 北京=" + (mk && mk[6101] && mk[6101].name) +
              " 苏州=" + (mk && mk[6106] && mk[6106].name) +
              " 三沙=" + (mk && Object.keys(mk).map(k => mk[k]).filter(x => x.name == "三沙").map(x => x.id)[0]) +
              " 尾条=" + (mk && mk[mx] && mk[mx].name))
          } catch (e) {}
        }

        // —— 分公司改名：复用游戏自带的改名窗口 WNewMing1（自带输入框 + 确定按钮）——
        __dshSetBranchName(branchId, name) {
          try {
            const n = l.findObjById("combmInfo", branchId);
            const nm = String(name || "").trim();
            if (n && nm) { n.cname = nm.slice(0, 8); n.cnameSet = 1 }
            this.__dshApplyBranchName(branchId);
            this.__dshRefreshTree();
            window.__dshSaveData && window.__dshSaveData();
            window.__dshlog && window.__dshlog("setBranchName " + branchId + " -> " + (n && n.cname))
          } catch (e) {
            window.__dshlog && window.__dshlog("setBranchName error: " + e)
          }
        }
        // 改完名字立刻刷新组织架构图上的部门名（否则要退出重进才变）
        __dshRefreshTree() {
          try {
            const cc = window.__dshCC;
            const sc = cc && cc.director && cc.director.getScene ? cc.director.getScene() : null;
            if (!sc) return;
            const stack = [sc];
            let guard = 0;
            while (stack.length && guard++ < 4000) {
              const nd = stack.pop();
              const comps = nd._components || [];
              for (let i = 0; i < comps.length; i++) {
                const cp = comps[i];
                if (cp && typeof cp.resetLinesAndPosition === "function") {
                  window.__dshlog && window.__dshlog("refreshTree ok");
                  cp.resetLinesAndPosition();
                  return
                }
              }
              const ch = nd.children || [];
              for (let i = 0; i < ch.length; i++) stack.push(ch[i])
            }
          } catch (e) {
            window.__dshlog && window.__dshlog("refreshTree error: " + e)
          }
        }
        __dshAskName(branchId, done, pre) {
          try {
            if (!W) {
              window.__dshlog && window.__dshlog("askName: WNewMing1 未就绪");
              done && done();
              return
            }
            const self = this;
            window.__dshlog && window.__dshlog("askName open for " + branchId + " pre=" + (pre || ""));
            r.bossWshow(W, {
              xing: "",
              ming: pre || "",
              type: 2,
              _func: function(txt) {
                self.__dshSetBranchName(branchId, txt);
                setTimeout(function() { done && done() }, 600)
              }
            })
          } catch (err) {
            window.__dshlog && window.__dshlog("askName error: " + err + " | " + (err && err.stack));
            done && done()
          }
        }
        __dshAskNamesIfNeeded() {
          // 引导期间绝不弹窗：改名窗口会打断引导（WKaiye1）的窗口时序，导致「继续游戏」无响应
          if (!l.config || l.config.guideId < 1000) {
            window.__dshlog && window.__dshlog("askNames: 引导未结束 guideId=" + (l.config && l.config.guideId) + "，跳过");
            return
          }
          if (window.__dshNameAsked) return;
          const need = [];
          // 两个分公司名字一样 = 视为没起好名，重新问（避免玩家手滑填成同一个）
          const b1 = l.findObjById("combmInfo", 1500), b2 = l.findObjById("combmInfo", 1600);
          const dup = b1 && b2 && b1.cname && b2.cname && b1.cname === b2.cname;
          [1500, 1600].forEach(id => {
            const n = l.findObjById("combmInfo", id);
            if (n && (!n.cnameSet || dup)) need.push(id)
          });
          window.__dshlog && window.__dshlog("askNames pending=" + need.length + " dup=" + !!dup);
          if (!need.length) return;
          window.__dshNameAsked = 1;   // 真正提问后才记账，本次会话只问一轮
          // 注意：这里不能用 scheduleOnce —— paotiao 结束后 PGsWork 节点会被销毁，
          // 挂在组件上的定时器会一起消失，弹窗就永远不出现。用全局 setTimeout。
          const step = (i) => {
            if (i >= need.length) return;
            this.__dshAskName(need[i], () => setTimeout(() => step(i + 1), 400))
          };
          const waitHost = (retry) => {
            const cc = window.__dshCC;
            const host = cc && cc.find ? cc.find("Canvas") : null;
            if (host) { step(0); return }
            if (retry <= 0) { window.__dshlog && window.__dshlog("askName: Canvas 一直没找到，跳过"); return }
            setTimeout(() => waitHost(retry - 1), 800)
          };
          setTimeout(() => waitHost(6), 2500)
        }

        xindeStart() {
          l.clsData(), l.load();
          let e = f.zgNumByQudaoType();
          l.config.qudao = e
        }
        getPeizhi0514() {
          if (l.peizhi0514.first) return console.log(JSON.stringify(l.peizhi0514), "获取配置0514_1"), this.canInto = !0, void this.dealPeizhi0514();
          if (l.peizhi0514.first = 1, 2 == s.sdkCp) {
            if (t.platform === t.Platform.IOS || t.platform === t.Platform.DESKTOP_BROWSER) {
              let e = A.getpeizhi1("bs_speed");
              console.log("ab包获得的bs_speed参数1", e, "start"), e = e || "0", e *= 1, console.log("ab包获得的bs_speed参数1", e, "end"), 1 == e && (l.peizhi0514.speed = 1);
              let i = A.getpeizhi1("bs_video");
              console.log("ab包获得的bs_video参数1", i, "start"), i = i || "0", i *= 1, console.log("ab包获得的bs_video参数1", i, "end"), 1 == i && (l.peizhi0514.video = 1);
              let o = A.getpeizhi1("bs_battle");
              console.log("ab包获得的bs_battle参数1", o, "start"), o = o || "0", o *= 1, console.log("ab包获得的bs_battle参数1", o, "end"), 1 == o && (l.peizhi0514.battle = 1);
              let t = A.getpeizhi1("bs_cost");
              console.log("ab包获得的bs_cost参数1", t, "start"), t = t || "0_0_0_0_0";
              let n = t.split("_"),
                s = 1 * n[0],
                d = 1 * n[1],
                r = 1 * n[2],
                a = 1 * n[3],
                c = 1 * n[4];
              1 == s && (l.peizhi0514.equip = 1), 1 == d && (l.peizhi0514.shichang = 1), 1 == r && (l.peizhi0514.zichan = 1), 1 == a && (l.peizhi0514.kaohe = 1), 1 == c && (l.peizhi0514.offline = 1), console.log("ab包获得的bs_cost参数1", t, s, d, r, a, c, "end"), this.dealPeizhi0514()
            } else t.platform === t.Platform.ANDROID && (l.peizhi0514.speed = 1, l.peizhi0514.video = 1, l.peizhi0514.battle = 1, l.peizhi0514.equip = 1, l.peizhi0514.shichang = 1, l.peizhi0514.zichan = 1, l.peizhi0514.kaohe = 1, l.peizhi0514.offline = 1, this.dealPeizhi0514());
            this.canInto = !0
          } else this.canInto = !0, this.dealPeizhi0514();
          console.log(JSON.stringify(l.peizhi0514), "获取配置0514_2")
        }
        dealPeizhi0514() {}
      }).m_name = "PGsWork", z = v)) || z);
      i._RF.pop()
    }
  }
}));