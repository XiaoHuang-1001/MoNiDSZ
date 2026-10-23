System.register("chunks:///_virtual/WShiyong.ts", ["cc", "./ZGGSOfficeFx.ts", "./WPeixunEx.ts", "./ZGGSScrollviewsvi.ts", "./blController.ts", "./minFunc.ts", "./WZPWork.ts"], (function(i) {
  "use strict";
  var e, t, s, h, n, a, d, u, o, c, l, g;
  return {
    setters: [function(i) {
      e = i.cclegacy, t = i._decorator, s = i.find, h = i.js
    }, function(i) {
      n = i.gs_sql, a = i.gs_boss, d = i.gs_bmsg
    }, function(i) {
      u = i.WPeixunEx
    }, function(i) {
      o = i.ZGGSScrollviewsvi
    }, function(i) {
      c = i.blController
    }, function(i) {
      l = i.minFunc
    }, function(i) {
      g = i.WZPWork
    }],
    execute: function() {
      var b, w;
      e._RF.push({}, "2c7a95tT8ZNj7HmM6E04Y2+", "WShiyong", void 0);
      const {
        ccclass: y,
        property: x
      } = t;
      i("WShiyong", y("WShiyong")(((w = class i extends u {
        nextYingdao(i) {
          console.log("下一步", i, this.nowGuideId), i == this.nowGuideId + 1 && (this.nowGuideId = i, this.buKeDian(!0), this.listGuide())
        }
        clickHideBtn(i) {
          this.nextBtn.active = !!i, this.gsButtongbs(this.nextBtn, (() => {
            switch (console.log(i, "隐藏按钮下一步"), this.nextBtn.active = !1, this.buKeDian(!0), i) {
              case 11:
              case 12:
              case 13:
                this.hideBtnXia(i);
                break;
              case 14:
                this.clickSpHideBtn(i);
                break;
              case 15:
              case 18:
                this.openzp();
                break;
              case 22:
              case 28:
              case 29:
                this.hideBtnXia(i);
                break;
              case 32:
                n.config.guideId = 1e3, this.yingdaoEndSp();
                break;
              case 1002:
                n.config.guideId = 1100, a.n_evenBtn.active = !1, n.base.pingfen >= 50 && 1 == n.pingjiaInfo.titId ? (this.btnTxtDeal(), this.nowGuideId = n.config.guideId - 1, this.nextYingdao(n.config.guideId)) : this.yingdaoEndSp();
                break;
              case 1202:
                n.config.guideId = 1300, a.n_evenBtn.active = !1, this.yingdaoEndSp()
            }
          }))
        }
        clickSpHideBtn(i) {
          this.btnTxtDeal(), d.send(2100, !1), this.scheduleOnce((() => {
            this.hideBtnXia(i), n.cache.yindaoStop = !1
          }), .2)
        }
        openzp() {
          a.bossWshow(g, {
            type: 1,
            workId: 100101
          })
        }
        yingdaoEndSp() {
          this.scheduleOnce((() => {
            n.cache.yindaoStop = !1, console.log("引导结束", n.cache.yindaoStop), this.xiabanye(), d.send(2300)
          }), .01)
        }
        yingdaoEnd() {
          this.scheduleOnce((() => {
            n.cache.yindaoStop = !1, console.log("引导结束", n.cache.yindaoStop), this.xiabanye()
          }), .01)
        }
        xiabanye() {
          l.guideZT(2), a.bossDieWin(i, 1)
        }
        init() {
          l.guideZT(1), n.cache.yindaoStop = !0, this.nowGuideId = n.config.guideId, this.btnTxtDeal(), this.btnJump.active = !1, this.bandang.active = !1, this.node_text.active = !1, this.nextBtn.active = !1, this.gsButtongbs(this.btnJump, (() => {})), console.log("引导开始", n.cache.yindaoStop), this.listGuide()
        }
        listGuide() {
          n.config.guideId += 1;
          let i = n.config.guideId;
          switch (console.log("引导iD", i), c.ydIdSend(n.config.guideId), l.guideStep(n.config.guideId), i) {
            case 11:
              this.jinyouxi11(i);
              break;
            case 12:
              this.jinyouxi12(i);
              break;
            case 13:
              this.jinyouxi13(i);
              break;
            case 14:
              this.jinyouxi14(i);
              break;
            case 15:
              this.jinyouxi15(i);
              break;
            case 16:
              this.jinyouxi16(i);
              break;
            case 17:
              this.jinyouxi17(i);
              break;
            case 18:
              this.jinyouxi18(i);
              break;
            case 19:
              this.jinyouxi19(i);
              break;
            case 20:
              this.jinyouxi20(i);
              break;
            case 21:
              this.shebei21(i);
              break;
            case 22:
              this.shebei22(i);
              break;
            case 23:
              this.shebei23(i);
              break;
            case 24:
              this.shebei24(i);
              break;
            case 25:
              this.shebei25(i);
              break;
            case 26:
              this.shebei26(i);
              break;
            case 27:
              this.shichang27(i);
              break;
            case 28:
              this.shichang28(i);
              break;
            case 29:
              this.shichang29(i);
              break;
            case 30:
              this.shichang30(i);
              break;
            case 31:
              this.shichang31(i);
              break;
            case 32:
              this.shichang32(i);
              break;
            case 1001:
              this.yewubu1001(i);
              break;
            case 1002:
              this.yewubu1002(i);
              break;
            case 1101:
              this.yewubu1101(i);
              break;
            case 1102:
              this.yewubu1102(i);
              break;
            case 1103:
              this.yewubu1103(i);
              break;
            case 1201:
              this.yewubu1201(i);
              break;
            case 1202:
              this.yewubu1202(i)
          }
        }
        yewubu1201(i) {
          this.buKeDian(!0), this.dengNextStep((() => {
            this.scheduleOnce((() => {
              let e = s("Canvas/window/WDepcl1"),
                t = this.zgNodegzt("top/btn_1", e);
              this.yuanShezhi(t), this.shiHengfu(1, t, null, this.ydText[25], 0, -380, 0), this.buKeDian(!1), this.dengNextStep((() => {
                this.btnTxtDeal(), this.scheduleOnce((() => {
                  this.hideBtnXia(i)
                }), .18)
              }), "Canvas/window/WDepcl1", !1)
            }), .5)
          }), "Canvas/window/WDepcl1", !0)
        }
        yewubu1202(i) {
          this.buKeDian(!0), this.scheduleOnce((() => {
            let e = this.zgNodegzt("touch_node/node/node_icon/node_item/ms1", this.VHBgshi);
            this.kuangShezhi(e, 0, 0, 0, 0, 50, 50), this.shiHengfu(1, e, null, this.ydText[26], 0, -400, 0), this.buKeDian(!1), this.clickHideBtn(i)
          }), .5)
        }
        yewubu1101(i) {
          a.n_evenBtn.active = !1, this.buKeDian(!0);
          let e = this.zgNodegzt("node_up/spr_tut", this.VHBgshi);
          this.shiHengfu(1, e, this.ydText[23], null, 120, -395, -120), this.yuanShezhi(e), this.buKeDian(!1), this.dengNextStep((() => {
            this.btnTxtDeal(), this.scheduleOnce((() => {
              this.hideBtnXia(i)
            }), .18)
          }), "Canvas/window/Wpingjia", !0)
        }
        yewubu1102(i) {
          this.buKeDian(!0);
          let e = s("Canvas/window/Wpingjia"),
            t = this.zgNodegzt("top/btn_1", e);
          this.yuanShezhi(t), this.buKeDian(!1), this.dengNextStep((() => {
            this.btnTxtDeal(), this.scheduleOnce((() => {
              this.hideBtnXia(i)
            }), .18)
          }), "Canvas/window/Wpingjia2", !0)
        }
        yewubu1103(i) {
          this.buKeDian(!0);
          let e = s("Canvas/window/Wpingjia2"),
            t = this.zgNodegzt("top/btn_4", e);
          this.shiHengfu(1, t, null, this.ydText[24], 0, -395, 0), this.yuanShezhi(t), this.buKeDian(!1), this.dengNextStep((() => {
            this.btnTxtDeal(), n.config.guideId = 1200, this.yingdaoEndSp()
          }), "Canvas/window/Wpingjia2", !1)
        }
        yewubu1001(i) {
          this.buKeDian(!0), this.dengNextStep((() => {
            this.scheduleOnce((() => {
              let e = s("Canvas/window/WDepcl1"),
                t = this.zgNodegzt("top/btn_1", e);
              this.yuanShezhi(t), this.shiHengfu(1, t, null, this.ydText[21], 0, -380, 0), this.buKeDian(!1), this.dengNextStep((() => {
                this.btnTxtDeal(), this.scheduleOnce((() => {
                  this.hideBtnXia(i)
                }), .18)
              }), "Canvas/window/WDepcl1", !1)
            }), .5)
          }), "Canvas/window/WDepcl1", !0)
        }
        yewubu1002(i) {
          this.buKeDian(!0), this.scheduleOnce((() => {
            let e = this.zgNodegzt("touch_node/node/node_icon/node_item/110300", this.VHBgshi);
            this.kuangShezhi(e, 0, 0, 100, 30, 180, 100), this.shiHengfu(1, e, null, this.ydText[22], 0, -390, 0), this.buKeDian(!1), this.clickHideBtn(i)
          }), .5)
        }
        shichang27(i) {
          this.buKeDian(!0);
          let e = this.zgNodegzt("node_down/Layout/spr_3", this.VHBgshi);
          this.shiHengfu(2, e, this.ydText[16], null, 0, 40, 0), this.yuanShezhi(e), this.buKeDian(!1), this.dengNextStep((() => {
            this.btnTxtDeal(), this.scheduleOnce((() => {
              this.hideBtnXia(i)
            }), .18)
          }), "Canvas/window/Wshichang", !0)
        }
        shichang28(i) {
          this.buKeDian(!0);
          let e = s("Canvas/window/Wshichang"),
            t = this.zgNodegzt("ydk", e);
          this.shiHengfu(1, t, this.ydText[17], null, 0, -432, 0), this.kuangShezhi(t, 0, 0, -30, -10, 50, 50), this.buKeDian(!1), this.clickHideBtn(i)
        }
        shichang29(i) {
          this.buKeDian(!0);
          let e = s("Canvas/window/Wshichang"),
            t = this.zgNodegzt("ydk2", e);
          this.shiHengfu(1, t, null, this.ydText[18], 0, -392, 0), this.kuangShezhi(t, 0, 0, -30, -10, 50, 50), this.buKeDian(!1), this.clickHideBtn(i)
        }
        shichang30(i) {
          this.buKeDian(!0);
          let e = s("Canvas/window/Wshichang"),
            t = this.zgNodegzt("btn_2", e);
          this.yuanShezhi(t), this.shiHengfu(2, t, this.ydText[19], null, 0, 40, 0), this.buKeDian(!1), this.schedule((() => {
            n.shichangInfo.objs[6101].num.length >= 1 && (this.unscheduleAllCallbacks(), this.btnTxtDeal(), this.hideBtnXia(i))
          }), .1)
        }
        shichang31(i) {
          this.buKeDian(!0);
          let e = s("Canvas/window/Wshichang"),
            t = this.zgNodegzt("top/guanbi", e);
          this.yuanShezhi(t), this.buKeDian(!1), this.dengNextStep((() => {
            this.btnTxtDeal(), this.scheduleOnce((() => {
              this.hideBtnXia(i)
            }), .18)
          }), "Canvas/window/Wshichang", !1)
        }
        shichang32(i) {
          this.buKeDian(!0), this.hengfuJuzhong(this.ydText[20]), this.scheduleOnce((() => {
            this.buKeDian(!1), this.clickHideBtn(i)
          }), .3)
        }
        shebei21(i) {
          a.n_evenBtn.active = !1, this.buKeDian(!0);
          let e = this.zgNodegzt("node_down/Layout/spr_1", this.VHBgshi);
          this.shiHengfu(2, e, this.ydText[11], null, 50, 40, -50), this.yuanShezhi(e), this.buKeDian(!1), this.dengNextStep((() => {
            this.btnTxtDeal(), this.scheduleOnce((() => {
              this.hideBtnXia(i)
            }), .18)
          }), "Canvas/window/Wshebei", !0)
        }
        shebei22(i) {
          this.buKeDian(!0);
          let e = s("Canvas/window/Wshebei"),
            t = this.zgNodegzt("sw2/view/content", e).children;
          this.zgNodegzt("sw2", e).getComponent(o).vertical = !1, this.schedule((() => {
            if (t.length >= 1) {
              this.unscheduleAllCallbacks(), this.btnTxtDeal();
              let e = t[0],
                s = this.zgNodegzt("ydk", e);
              this.shiHengfu(1, s, null, this.ydText[12], 0, -390, 0), this.kuangShezhi(s, 0, 0, -26, -10, 50, 50), this.buKeDian(!1), this.clickHideBtn(i)
            }
          }), .1)
        }
        shebei23(i) {
          this.buKeDian(!0);
          let e = s("Canvas/window/Wshebei"),
            t = this.zgNodegzt("sw2/view/content", e).children[0],
            h = this.zgNodegzt("btn_2", t);
          this.shiHengfu(1, h, null, this.ydText[13], -100, -395, 100), this.yuanShezhi(h), this.buKeDian(!1), this.schedule((() => {
            n.shebeiInfo.objs[1001].pos[1] >= 1 && (this.unscheduleAllCallbacks(), this.btnTxtDeal(), this.hideBtnXia(i))
          }), .1)
        }
        shebei24(i) {
          this.buKeDian(!0);
          let e = s("Canvas/window/Wshebei"),
            t = this.zgNodegzt("sw2/view/content", e).children[1],
            h = this.zgNodegzt("btn_2", t);
          this.shiHengfu(1, h, null, this.ydText[14], -100, -395, 100), this.yuanShezhi(h), this.buKeDian(!1), this.schedule((() => {
            n.shebeiInfo.objs[1001].pos[2] >= 1 && (this.unscheduleAllCallbacks(), this.btnTxtDeal(), this.hideBtnXia(i))
          }), .1)
        }
        shebei25(i) {
          this.buKeDian(!0);
          let e = s("Canvas/window/Wshebei"),
            t = this.zgNodegzt("sw2/view/content", e).children[2],
            h = this.zgNodegzt("btn_2", t);
          this.shiHengfu(1, h, null, this.ydText[15], -100, -395, 100), this.yuanShezhi(h), this.buKeDian(!1), this.schedule((() => {
            n.shebeiInfo.objs[1001].pos[3] >= 1 && (this.unscheduleAllCallbacks(), this.btnTxtDeal(), this.hideBtnXia(i))
          }), .1)
        }
        shebei26(i) {
          this.buKeDian(!0);
          let e = s("Canvas/window/Wshebei");
          this.zgNodegzt("sw2", e).getComponent(o).vertical = !0;
          let t = this.zgNodegzt("guanbi", e);
          this.yuanShezhi(t), this.buKeDian(!1), this.dengNextStep((() => {
            this.btnTxtDeal(), this.scheduleOnce((() => {
              this.hideBtnXia(i)
            }), .18)
          }), "Canvas/window/Wshebei", !1)
        }
        jinyouxi11(i) {
          this.buKeDian(!0);
          let e = h.formatStr(this.ydText[1], n.base.name);
          this.hengfuJuzhong(e), this.scheduleOnce((() => {
            this.buKeDian(!1), this.clickHideBtn(i)
          }), .5)
        }
        jinyouxi12(i) {
          this.buKeDian(!0);
          let e = this.zgNodegzt("node_down/guide_node", this.VHBgshi);
          this.shiHengfu(2, e, null, this.ydText[2], -120, 17, 110), this.kuangShezhi(e, 0, 0, -26, -10, 50, 50), this.buKeDian(!1), this.clickHideBtn(i)
        }
        jinyouxi13(i) {
          this.buKeDian(!0);
          let e = this.zgNodegzt("node_down/guide_node", this.VHBgshi);
          this.shiHengfu(2, e, null, this.ydText[3], -120, 17, 110), this.kuangShezhi(e, 0, 0, -26, -10, 50, 50), this.buKeDian(!1), this.clickHideBtn(i)
        }
        jinyouxi14(i) {
          this.buKeDian(!0);
          let e = this.zgNodegzt("node_down/guide_node", this.VHBgshi);
          this.shiHengfu(2, e, null, this.ydText[4], -120, 17, 110), this.kuangShezhi(e, 0, 0, -26, -10, 50, 50), this.buKeDian(!1), this.clickHideBtn(i)
        }
        jinyouxi15(i) {
          this.buKeDian(!0), this.scheduleOnce((() => {
            d.send(2100, !0);
            let e = this.zgNodegzt("touch_node/node/node_icon/node_item/100101-0", this.VHBgshi);
            this.kuangShezhi(e, 0, 0, 0, 0, 50, 50), this.buKeDian(!1), this.clickHideBtn(i), this.shiHengfu(1, e, null, this.ydText[27], 0, -380, 0), this.dengNextStep((() => {
              this.kuangShezhi(null, 0, 0, 0, 0, 0, 0), this.scheduleOnce((() => {
                let e = s("Canvas/window/WZPWork"),
                  t = this.zgNodegzt("top/btn_1", e);
                this.shiHengfu(1, t, null, this.ydText[5], 0, -340, 0), this.yuanShezhi(t), this.buKeDian(!1), this.schedule((() => {
                  n.yindaoSp.zp1 >= 1 && (this.unscheduleAllCallbacks(), this.btnTxtDeal(), this.scheduleOnce((() => {
                    this.hideBtnXia(i)
                  }), .18))
                }), .1)
              }), .18)
            }), "Canvas/window/WZPWork", !0)
          }), 2)
        }
        jinyouxi16(i) {
          let e = s("Canvas/window/WZPWork"),
            t = this.zgNodegzt("top/btn_2", e);
          this.shiHengfu(1, t, this.ydText[6], null, 0, -340, 0), this.yuanShezhi(t), this.buKeDian(!1), this.dengNextStep((() => {
            this.btnTxtDeal(), this.scheduleOnce((() => {
              this.hideBtnXia(i)
            }), .18)
          }), "Canvas/window/WZPWork1", !0)
        }
        jinyouxi17(i) {
          let e = s("Canvas/window/WZPWork"),
            t = this.zgNodegzt("top/btn_2", e);
          this.shiHengfu(1, t, null, this.ydText[7], 0, -340, 0), this.yuanShezhi(t, 0, 30), this.buKeDian(!1), this.dengNextStep((() => {
            this.btnTxtDeal(), this.dengNextStep((() => {
              this.btnTxtDeal(), this.scheduleOnce((() => {
                this.hideBtnXia(i)
              }), .18)
            }), "Canvas/window/WZPWork1", !1)
          }), "Canvas/window/WZPWork1/top", !1)
        }
        jinyouxi18(i) {
          this.buKeDian(!0), this.scheduleOnce((() => {
            d.send(2100, !0);
            let e = this.zgNodegzt("touch_node/node/node_icon/node_item/100101-1", this.VHBgshi);
            this.kuangShezhi(e, 0, 0, 0, 0, 50, 50), this.shiHengfu(1, e, null, this.ydText[28], 0, -380, 0), this.buKeDian(!1), this.clickHideBtn(i), this.dengNextStep((() => {
              n.cache.yindaoStop = !0, this.kuangShezhi(null, 0, 0, 0, 0, 0, 0), this.scheduleOnce((() => {
                let e = s("Canvas/window/WZPWork"),
                  t = this.zgNodegzt("top/btn_1", e);
                this.shiHengfu(1, t, null, this.ydText[8], 0, -340, 0), this.yuanShezhi(t), this.buKeDian(!1), this.schedule((() => {
                  n.yindaoSp.zp1 >= 3 && (this.unscheduleAllCallbacks(), this.btnTxtDeal(), this.scheduleOnce((() => {
                    this.hideBtnXia(i)
                  }), .18))
                }), .1)
              }), .18)
            }), "Canvas/window/WZPWork", !0)
          }), 2)
        }
        jinyouxi19(i) {
          let e = s("Canvas/window/WZPWork"),
            t = this.zgNodegzt("top/btn_2", e);
          this.shiHengfu(1, t, this.ydText[9], null, 0, -340, 0), this.yuanShezhi(t), this.buKeDian(!1), this.dengNextStep((() => {
            this.btnTxtDeal(), this.scheduleOnce((() => {
              this.hideBtnXia(i)
            }), .18)
          }), "Canvas/window/WZPWork1", !0)
        }
        jinyouxi20(i) {
          let e = s("Canvas/window/WZPWork"),
            t = this.zgNodegzt("top/btn_2", e);
          this.shiHengfu(1, t, null, this.ydText[10], 0, -340, 0), this.yuanShezhi(t, 0, 30), this.buKeDian(!1), this.dengNextStep((() => {
            this.btnTxtDeal(), this.dengNextStep((() => {
              this.scheduleOnce((() => {
                this.hideBtnXia(i)
              }), 2)
            }), "Canvas/window/WZPWork1", !1)
          }), "Canvas/window/WZPWork1/top", !1)
        }
      }).m_name = "WShiyong", b = w)) || b);
      e._RF.pop()
    }
  }
}));