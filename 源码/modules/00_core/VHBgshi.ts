System.register("chunks:///_virtual/VHBgshi.ts", ["cc", "./ZGGSOfficeFx.ts", "./VHBgshiMap.ts", "./Wshebei.ts", "./WZichan1.ts", "./Wqianweek.ts", "./Wshichang.ts", "./Wkaohe.ts", "./Wbuchongziyuan.ts", "./Wpingjia.ts", "./Wbuchongziyuan1.ts", "./Wbuchongziyuan2.ts", "./Wbuchongziyuan3.ts", "./Wshangzhan.ts", "./ZGGSSlidersli.ts", "./WChengjiu.ts", "./Wpaiming.ts", "./WShezhi.ts", "./WNewMing3.ts", "./WXinxi.ts", "./WChuchai.ts", "./WShenzao.ts", "./ZGGSRedHdian.ts", "./WWenhao.ts", "./WYoujian.ts", "./WPinlun3.ts", "./WPinlun1.ts", "./WQiandao.ts", "./WChongdian.ts", "./ZGGSConfigco.ts", "./WJiashu.ts", "./WJinsheng.ts", "./WFuli1.ts", "./WChuangye3.ts"], (function(t) {
  "use strict";
  var n, e, s, i, o, a, h, l, u, d, p, g, c, r, f, m, _, b, w, y, W, z, S, N, I, j, L, x, B, v, k, O, T, A, G, C, P, M, H, D, R, q, E, Y, F, V, Z, J, Q, K;
  return {
    setters: [function(t) {
      n = t.cclegacy, e = t._decorator, s = t.view, i = t.sys, o = t.js, a = t.Vec3, h = t.Animation, l = t.tween, u = t.v3, d = t.UITransform
    }, function(t) {
      p = t.gs_www, g = t.gs_computer, c = t.gs_sql, r = t.gs_bmsg, f = t.gs_btxt, m = t.gs_tabpr, _ = t.gs_boss, b = t.gs_sound
    }, function(t) {
      w = t.VHBgshiMap
    }, function(t) {
      y = t.Wshebei
    }, function(t) {
      W = t.WZichan1
    }, function(t) {
      z = t.Wqianweek
    }, function(t) {
      S = t.Wshichang
    }, function(t) {
      N = t.Wkaohe
    }, function(t) {
      I = t.Wbuchongziyuan
    }, function(t) {
      j = t.Wpingjia
    }, function(t) {
      L = t.Wbuchongziyuan1
    }, function(t) {
      x = t.Wbuchongziyuan2
    }, function(t) {
      B = t.Wbuchongziyuan3
    }, function(t) {
      v = t.Wshangzhan
    }, function(t) {
      k = t.ZGGSSlidersli
    }, function(t) {
      O = t.WChengjiu
    }, function(t) {
      T = t.Wpaiming
    }, function(t) {
      A = t.WShezhi
    }, function(t) {
      G = t.WNewMing3
    }, function(t) {
      C = t.WXinxi
    }, function(t) {
      P = t.WChuchai
    }, function(t) {
      M = t.WShenzao
    }, function(t) {
      H = t.ZGGSRedHdian
    }, function(t) {
      D = t.WWenhao
    }, function(t) {
      R = t.WYoujian
    }, function(t) {
      q = t.WPinlun3
    }, function(t) {
      E = t.WPinlun1
    }, function(t) {
      Y = t.WQiandao
    }, function(t) {
      F = t.WChongdian
    }, function(t) {
      V = t.ZGGSConfigco
    }, function(t) {
      Z = t.WJiashu
    }, function(t) {
      J = t.WJinsheng
    }, function(t) {
      Q = t.WFuli1
    }, function(t) {
      K = t.WChuangye3
    }],
    execute: function() {
      var $, U;
      n._RF.push({}, "fa81cGO/plONqadm8KEJDEP", "VHBgshi", void 0);
      const {
        ccclass: X,
        property: tt
      } = e;
      t("VHBgshi", X("VHBgshi")(((U = class extends w {
        constructor(...t) {
          super(...t), this.beforePower = 0, this.jdSilder = null, this.spr_suofang = null, this.node_jindu = null, this.isPmd = null, this.lbl_pmd = null, this.pmdArr = [], this.tweenAct = null
        }
        load(t) {
          let n = s.getVisibleSize();
          p.zgIsLiuHaHead() ? (console.log(n.height / 2 - 100), this.gsNodePositgps("node_up", 0, n.height / 2 - 100)) : this.gsNodePositgps("node_up", 0, n.height / 2), i.platform, i.Platform.ANDROID, this.gsNodePositgps("node_down", 0, -n.height / 2), this.spr_suofang = this.zgNodegzt("node_up/spr_suofang"), this.node_jindu = this.zgNodegzt("tu", this.spr_suofang), this.loadTiankongUi(), this.node_pmd.active = !1;
          let e = c.chahuahui;
          1 == e.state && (2 == e.count ? e.time = 0 : 3 == e.count && (g.todayTimeCheck(e.time) || (e.time = 0))), this.clickAllEvent(), this.shiguanli(), this.updateData(), this.loadBase(), this.initIcon(), this.pingjia(), this.changeComName(), this.suofangInit(), this.initEmail(), this.kanjianHdIcon(), this.getABCon()
        }
        clickAllEvent() {
          this.btnList = [{
            name: "Layout/spr_1",
            path: this.node_down,
            win: y,
            openId: 0,
            data: null,
            fun: null
          }, {
            name: "Layout/spr_qiandao",
            path: this.node_up,
            win: z,
            openId: 100002,
            data: null,
            fun: null
          }, {
            name: "Layout/spr_3",
            path: this.node_down,
            win: S,
            openId: 0,
            data: null,
            fun: null
          }, {
            name: "Layout/spr_4",
            path: this.node_down,
            win: N,
            openId: 100005,
            data: null,
            fun: null
          }, {
            name: "spr_ls/YMButton",
            path: this.node_up,
            win: I,
            openId: 0,
            data: null,
            fun: null
          }, {
            name: "spr_xj/YMButton",
            path: this.node_up,
            win: I,
            openId: 0,
            data: null,
            fun: null
          }, {
            name: "spr_jk/YMButton",
            path: this.node_up,
            win: I,
            openId: 0,
            data: null,
            fun: null
          }, {
            name: "spr_tut",
            path: this.node_up,
            win: j,
            openId: 0,
            data: null,
            fun: null
          }, {
            name: "Layout/spr_2",
            path: this.node_down,
            win: W,
            openId: 0,
            data: null,
            fun: null
          }, {
            name: "Layout/spr_6",
            path: this.node_down,
            win: v,
            openId: 100006,
            data: null,
            fun: null
          }, {
            name: "Layout/spr_chengjiu",
            path: this.node_up,
            win: O,
            openId: 100001,
            data: null,
            fun: null
          }, {
            name: "Layout/spr_paiming",
            path: this.node_up,
            win: T,
            openId: 100003,
            data: null,
            fun: null
          }, {
            name: "Layout/spr_sz",
            path: this.node_up,
            win: A,
            openId: 0,
            data: null,
            fun: null
          }, {
            name: "spr_gs/YMButton",
            path: this.node_up,
            win: G,
            openId: 0,
            data: null,
            fun: null
          }, {
            name: "Layout/spr_5",
            path: this.node_down,
            win: C,
            openId: 0,
            data: null,
            fun: null
          }, {
            name: "spr_dm",
            path: this.node_down,
            win: P,
            openId: 100004,
            data: null,
            fun: null
          }, {
            name: "spr_shenzao",
            path: this.node_down,
            win: M,
            openId: 100007,
            data: null,
            fun: null
          }, {
            name: "Layout/spr_xin",
            path: this.node_up,
            win: R,
            openId: 0,
            data: null,
            fun: null
          }, {
            name: "spr_cd",
            path: this.node_down,
            win: F,
            openId: 100008,
            data: null,
            fun: null
          }, {
            name: "spr_jingsheng",
            path: this.node_down,
            win: J,
            openId: 100009,
            data: null,
            fun: null
          }, {
            name: "Layout/spr_jiashu",
            path: this.node_up,
            win: Z,
            openId: 100012,
            data: null,
            fun: () => !(c.base.jashuTime > 0) || (r.send(202, f.gsStringByTwo(112)), !1)
          }, {
            name: "spr_gsfuli",
            path: this.node_down,
            win: Q,
            openId: 100010,
            data: null,
            fun: null
          }, {
            name: "spr_touzhi",
            path: this.node_down,
            win: K,
            openId: 100011,
            data: null,
            fun: null
          }];
          for (const t of this.btnList) {
            const n = m.co_open.zgTableKey(t.openId);
            if (n) {
              let e = g.getNewOpen(t.openId);
              if (1 == n.type) {
                this.zgNodegzt(t.name, t.path);
                let n = this.zgNodegzt(`${t.name}/suo`, t.path);
                n && (n.active = !e)
              } else if (2 == n.type) {
                let n = this.zgNodegzt(t.name, t.path);
                n && (n.active = e);
                let s = this.zgNodegzt(`${t.name}/suo`, t.path);
                s && (s.active = !e)
              }
            }
            let e = this.zgNodegzt(t.name, t.path);
            e ? this.gsButtongbs(e, function() {
              let e = g.getNewOpen(t.openId);
              if (e) {
                if (t.fun) {
                  let n = t.fun();
                  e = null == n || n
                }
                e && t.win && _.bossWshow(t.win || "", t.data)
              } else {
                let t = n.num;
                r.send(202, o.formatStr(f.gsStringByTwo(105), t, n.name))
              }
            }.bind(this)) : console.error(`未找到按钮${t.name}`)
          }
          this.checkGsOpenShow(), this.updateShowOpenIcon(), this.gsButtongbs("spr_wenhao", (t => {
            _.bossPshow(D, this.zgNodegzt("spr_wenhao", this.node_up).getWorldPosition())
          }), this.node_up), this.gsButtongbs("spr_shalong", (t => {
            c.chahuahui.open && (c.chahuahui.openComment ? _.bossWshow(q) : _.bossWshow(E))
          }), this.node_down), this.zgNodegzt("Layout/spr_xin", this.node_up).active = 1 == V.sdkCp, this.refreshJiashuBtn()
        }
        suofangInit() {
          this.jdSilder = this.node_jindu.getComponent(k), this.node_jindu.off("slide"), this.node_jindu.on("slide", (t => {
            let n = Math.floor(this.jdSilder.progress * this.maxNum * (100 - this.minNum) / 100) + this.minNum;
            c.base.suofang = Math.floor(100 * this.jdSilder.progress), this.gsTxtStrbyNums("lbl_text", 5, n, this.spr_suofang), this.updatePMHSlide(this.jdSilder.progress)
          })), this.gsButtongbs("spr_tt", function() {
            this.guiweiPos()
          }.bind(this), this.spr_suofang), this.gsButtongbs("+", function() {
            let t = c.base.suofang + 2;
            t >= 100 && (t = 100), c.base.suofang = t, this.initSilder(t)
          }.bind(this), this.spr_suofang), this.gsButtongbs("-", function() {
            let t = c.base.suofang - 2;
            t <= 0 && (t = 0), c.base.suofang = t, this.initSilder(t)
          }.bind(this), this.spr_suofang), this.initSilder(c.base.suofang)
        }
        initSilder(t) {
          this.updatePMHSlide(t / 100);
          let n = Math.floor(t / 100 * this.maxNum * (100 - this.minNum) / 100) + this.minNum;
          this.gsTxtStrbyNums("lbl_text", 5, n, this.spr_suofang), this.jdSilder.progress = t / 100
        }
        updatePMHSlide(t) {
          this.zgSpriteFargst("tu", this.node_jindu).fillRange = t;
          let n = t * (this.maxNum - this.minNum) / 100 + this.minNum / 100;
          this.scaleNode.setScale(n, n, n)
        }
        updateShowOpenIcon() {
          this.gsButtongbs("spr_sj/YMButton", function() {
            c.cache.timeStop = !c.cache.timeStop, this.gameStopOrGo()
          }.bind(this), this.node_down);
          let t = f.gsStringHelpIn(100)[3];
          this.gsScheduleStnode("spr_sj", (() => {
            this.gsTxtLblgs("spr_sj/lbl_text1", o.formatStr(t, c.base.year, c.base.month, c.base.day), this.node_down)
          }), .1, !1, this.node_down), this.stopBtnShow()
        }
        receive(t, n, e, s, i, o) {
          101 == t ? this.changeComName() : 203 == t ? this.caifudada(n) : 204 == t ? this.buchongTanchu(n) : 2002 == t ? this.resetLinesAndPosition() : 2003 == t ? this.refreshRole(n) : 2004 == t ? this.evenStartWork(n) : 2007 == t ? this.moveWork(n) : 2005 == t ? 3 == n ? this.refreshMsBm() : 4 == n && this.refreshDsBm() : 2006 == t ? this.showRoleAddMoney() : 2201 == t ? this.refreshJiashuBtn() : 2302 == t ? this.evenEndWork(n) : 2303 == t ? this.evenEndDep(n) : 2304 == t ? this.palyShowChucaiAni(n) : 2305 == t ? this.palyShowSzAni(n) : 2306 == t ? this.deleteWorkerDeal(n) : 2100 == t ? this.gameStopOrGo(n) : 1201 == t ? this.pingjia() : 3101 == t ? this.addnotices(n) : 3400 == t ? this.showOpenIconxx(n) : 2901 == t ? this.moyueRenFly(n) : 5501 == t ? this.wakeOpen() : 5502 == t && this.kanjianHdIcon()
        }
        pingjia() {
          let t = c.pingjiaInfo,
            n = m.co_title.zgTableKey(t.titId);
          this.gsTxtGradelbl("node_up/spr_tut/lbl_text", n.grade, n.title);
          let e = this.zgNodegzt("node_up/spr_tut/Layout").children;
          for (let t = 0; t < e.length; t++) e[t].active = n.star > t;
          let s = m.co_title.zgTableKey(t.titId + 1),
            i = c.base.pingfen;
          this.gsTxtLblgs("node_up/spr_sl/lay/lbl_text1", i), s ? this.gsTxtLblgs("node_up/spr_sl/lay/lbl_text3", s.power) : (this.zgNodegzt("node_up/spr_sl/lay/lbl_text2").active = !1, this.gsTxtLblgs("node_up/spr_sl/lay/lbl_text3", ""))
        }
        buchongTanchu(t) {
          1 == t.type ? _.bossWshow(L) : 2 == t.type ? _.bossWshow(x) : 3 == t.type && _.bossWshow(B)
        }
        gameStopOrGo(t) {
          c.base.stopGame = "boolean" == typeof t ? t : !c.base.stopGame, c.cache.timeStop && (c.base.stopGame = c.cache.timeStop), console.log(c.base.stopGame ? "游戏暂停" : "游戏继续"), this.stopBtnShow()
        }
        stopBtnShow() {
          let t = f.gsStringHelpIn(100);
          this.zgNodegzt("spr_sj/YMButton/tu1", this.node_down).active = c.base.stopGame, this.zgNodegzt("spr_sj/YMButton/tu2", this.node_down).active = !c.base.stopGame;
          let n = c.base.stopGame ? t[1] : t[2];
          this.gsTxtLblgs("spr_sj/lbl_text", n, this.node_down)
        }
        refreshJiashuBtn() {
          if (!g.getNewOpen(100012)) return;
          let t = this.zgNodegzt("Layout/spr_jiashu", this.node_up);
          this.gsStopSchedulegs("YMLabel", t);
          this.gsScheduleStnode("YMLabel", (() => {
            if (c.base.jashuTime > 0) {
              let n = g.gsTimelast(c.base.jashuTime);
              this.gsTxtLblgs("YMLabel", n, t)
            } else this.gsTxtLblgs("YMLabel", "", t)
          }), 1, !1, t)
        }
        shiguanli() {
          this.shuaqian();
          let t = this.zgNodegzt("timeLay"),
            n = this.zgLableglt("time1", t);
          n.unscheduleAllCallbacks(), this.wakeOpen(), n.schedule((() => {
            this.wakeOpen()
          }), 1), this.qipaoLab.scheduleOnce((() => {
            this.qipaoOpen()
          }), window.qipaocd || 4)
        }
        updateData() {
          let t = this.zgLableglt("timeLay/time2");
          t.unscheduleAllCallbacks(), t.schedule(function() {}.bind(this), 1);
          let n = 60;
          t.schedule(function() {
            n <= 0 ? (n = 60, H.shangzActRed()) : n--
          }.bind(this), 1);
          let e = this.zgLableglt("timeLay/time5");
          e.unscheduleAllCallbacks(), e.schedule(function() {
            this.allRedListOne()
          }.bind(this), .3), this.allRedListOne(), _.bossScheduleArrput(this.refreshDataInfo)
        }
        moyueRenFly(t) {
          let n = this.scaleNode.getScale().x,
            e = t.id,
            s = this.iconObjs[e],
            i = s.getWorldPosition(),
            o = new a(i.x, i.y + 110 * n, i.z),
            d = new a(i.x, i.y + 50 * n, i.z);
          this.tweenAct && this.tweenAct.stop(), this.gsTxtLblgs("lbl_titile", t.str, this.moyustrNode), this.moyuQD.setWorldPosition(d);
          let p = this.moyuQD.getComponent(h);
          p.play(), this.moyuQD.setScale(n, n, n), b.playOne("qiaoda");
          let g = null;
          g = s.isp ? this.zgNodegzt("touxiang/4", s) : this.zgNodegzt("icon1/touxiang/4", s);
          let c = l().to(.1, {
            scale: u(.7, .6, 1)
          }).to(.1, {
            scale: u(.7, .7, 1)
          });
          l(g).delay(.1).repeat(2, c).call((() => {})).start(), p.once(h.EventType.FINISHED, (() => {
            let n = {
              id: e,
              roleArr: [],
              face: t.face
            };
            this.evenEndWork2(n, (() => {
              this.moyustrNode.setWorldPosition(o), this.moyustrNode.active = !0, this.tweenAct = l(this.moyustrNode).by(.5, {
                position: u(0, 50, 0)
              }).call((() => {
                this.moyustrNode.active = !1, r.send(2300)
              })).start()
            }))
          }))
        }
        qipaoOpen() {
          let t = g.gsAllNumGet(),
            n = null;
          for (let e = 0; e < this.co_bubble_tt.length; e++) {
            if (!(t >= this.co_bubble_tt[e].number1)) break;
            n = this.co_bubble_tt[e]
          }
          if (n) {
            let t = Object.keys(c.workInfo1.objs);
            if (t.length > 0) {
              let n = t[g.sjNumArrgs2(0, t.length - 1, 1)[0]],
                e = c.findObjById("workInfo1", n),
                s = this.co_bubble_des_ttt[0] || [],
                i = this.co_bubble_des_ttt[e.depId] || [],
                o = s.concat(i);
              if (o.length > 0) {
                let t = o[g.sjNumArrgs2(0, o.length - 1, 1)[0]],
                  e = this.iconObjs[n];
                if (e) {
                  let n = this.getQiaoPao(e);
                  n.active = !0, this.gsTxtLblgs("YMLabel6", t.des, n), e.getComponent(d).scheduleOnce((() => {
                    n && this.removeQiaoPao(n)
                  }), 3)
                } else console.error("气泡人物树未生成")
              }
            }
          }
          let e = n ? n.time : 30;
          e = window.qipaocd || e, this.qipaoLab.scheduleOnce((() => {
            this.qipaoOpen()
          }), e)
        }
        kanjianHdIcon() {
          let t = [{
            id: 0,
            name: "Layout/spr_qiandao2",
            path: this.node_up,
            win: Y
          }];
          const n = c.huodong.info;
          for (const e of t) {
            let t = null;
            if (!e.name) continue;
            if (t = this.zgNodegzt(e.name, e.path), !t) continue;
            if (t.active = !1, 2 == V.sdkCp) break;
            let s = n[e.id];
            if (!s) continue;
            let i = !1,
              o = g.zgTimeByTxt(Date.now());
            if (0 == s.timeStart && 0 == s.timeEnd ? i = !0 : s.timeStart && s.timeEnd ? o >= s.timeStart && o <= s.timeEnd && (i = !0) : s.timeStart && 0 == s.timeEnd && o >= s.timeStart && (i = !0), i) {
              t.active = i;
              let n = g.zgTimeByTxt(c.config.firstTime + 432e6),
                s = o <= n && !c.huodong.infoRed[e.id];
              console.log(s, "签到时间", o, n), this.zgNodegzt(e.name + "/read", e.path).active = s, this.gsButtongbs(t, (() => {
                _.bossWshow(e.win, !0), c.huodong.infoRed[e.id] = 1, this.zgNodegzt(e.name + "/read", e.path).active = !1, console.log("点击签到活动")
              }))
            }
          }
        }
        getABCon() {
          if (2 == V.sdkCp)
            if (i.platform === i.Platform.IOS) {
              let t = window.dszpei1;
              console.log("ab包获得的business_event参数1", t, "start");
              let n = t.split("_"),
                e = 1 * n[0],
                s = 1 * n[1];
              console.log("ab包获得的business_event参数1", t, "end"), m.changeAb1(e), m.changeAb2(s)
            } else i.platform === i.Platform.ANDROID && m.changeAb2(1);
          else m.changeAb1(2)
        }
      }).m_name = "VHBgshi", $ = U)) || $);
      n._RF.pop()
    }
  }
}));