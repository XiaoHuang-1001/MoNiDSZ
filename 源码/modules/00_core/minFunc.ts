System.register("chunks:///_virtual/minFunc.ts", ["cc", "./ZGGSBookTxt.ts", "./ZGGSBoxMsg.ts", "./ZGGSSqlMyg.ts", "./ZGGSTablePrint.ts", "./ZGGSSoundMusic.ts", "./ZGGSConfigco.ts", "./dszKuMi.ts"], (function(t) {
  "use strict";
  var e, i, s, a, o, c, n, l;
  return {
    setters: [function(t) {
      e = t.cclegacy
    }, function(t) {
      i = t.ZGGSBookTxt
    }, function(t) {
      s = t.ZGGSBoxMsg
    }, function(t) {
      a = t.ZGGSSqlMyg
    }, function(t) {
      o = t.ZGGSTablePrint
    }, function(t) {
      c = t.ZGGSSound
    }, function(t) {
      n = t.ZGGSConfigco
    }, function(t) {
      l = t.dszKuMi
    }],
    execute: function() {
      e._RF.push({}, "3adc0qIEyBDPYR7374/nL6S", "minFunc", void 0);
      let d = t("gs_sql", a);
      class g extends i {}
      t("gs_btxt", g);
      class u extends s {}
      t("gs_bmsg", u);
      let r = t("gs_tabpr", o);
      class _ {
        static kuInit(t) {
          2 == n.sdkCp ? l.init((() => {
            t()
          })) : t()
        }
        static checkWang(t) {
          t(!0)
        }
        static dbtGgShow(t, e) {
          let i = g.dbtZongName(1, t),
            s = {
              param: null,
              statExt: {
                game_name: "game",
                mode_name: "simulation",
                video_name: i,
                develop_lv: d.pingjiaInfo.titId
              },
              success: (t, i) => {
                e(!0)
              },
              fail: (t, i) => {
                e(!1), u.send(202, "视频未完成播放")
              },
              error: (t, i, s) => {
                e(!1), u.send(202, "视频未拉取到，请稍后再试")
              }
            };
          this.checkWang((e => {
            if (e) {
              let t = l.showVideo(i, s);
              console.error("sdk 广告判断结果", i, t), t && c.stopBg()
            } else console.error(`无网络${t}点击无效`), u.send(202, "视频未拉取到，请稍后再试!")
          }))
        }
        static guideZT(t) {
          1 == t ? l.GuideStart() : 2 == t && l.GuideOver()
        }
        static guideStep(t) {
          l.GuideStep(t)
        }
        static ggbtnPlay(t, e) {
          if (t.active) {
            let i = g.dbtZongName(1, e);
            l.addVideoNode(t, i)
          }
        }
        static ggbtnCantPlay(t) {
          let e = g.dbtZongName(1, t);
          l.setVideoStatus(e)
        }
        static xioahaoSend(t, e, i, s) {
          let a = "钞票";
          1 == t ? a = "钞票" : 2 == t ? a = "钻石" : 3 == t && (a = "金卡");
          let o = g.dbtZongName(2, s);
          l.CostItem(t, e, i, o, a)
        }
        static huodeSend(t, e, i, s) {
          let a = "钞票";
          1 == t ? a = "钞票" : 2 == t ? a = "钻石" : 3 == t && (a = "金卡");
          let o = g.dbtZongName(3, s);
          o && l.GetItem(t, e, i, o, a), 1 == s && _.activityReward(4, 2, {
            idx: t
          })
        }
        static workerDays() {
          if (2 != n.sdkCp) return;
          let t = g.dbtZongName(3, 11);
          l.GetItem(1, d.chaopiaosub.num, d.base.gold, t, "钞票"), d.chaopiaosub.num = 0
        }
        static developUnlockSend(t) {
          if (2 != n.sdkCp) return;
          let e = g.dbtZongName(4, t),
            i = "";
          if (1 == t) {
            let t = r.co_title.zgTableKey(d.pingjiaInfo.titId);
            i = `${t.title}${t.star}星`
          } else 2 == t ? i = `${d.base.year}-${d.base.month}` : 3 == t && (i = "" + (d.workInfo1.sysId - 1), "10" == i && l.goEvaluate());
          i && l.develop_unlock(i, e)
        }
        static activityUnlock(t) {
          let e = g.dbtZongName(5, t);
          e && !d.jieusoRed.objs[t] && (d.jieusoRed.objs[t] = 1, l.activity_unlock(e))
        }
        static activityEnter(t) {
          let e = g.dbtZongName(5, t);
          e && l.activity_enter(e)
        }
        static activityStart(t, e) {
          let i = g.dbtZongName(5, t),
            s = "",
            a = "",
            o = 0;
          if (1 == t) {
            let i = e.data_t;
            s = r.co_dep.zgTableKey(i.dep_id).name, d.jieusoRed.count[t][i.dep_id] = d.jieusoRed.count[t][i.dep_id] || 0;
            let a = d.jieusoRed.count[t][i.dep_id] || 0;
            o = a += 1, d.jieusoRed.count[t][i.dep_id] = o
          } else if (2 == t) {
            let t = e.data_t,
              i = r.co_market.zgTableKey(t.market_id);
            s = i.prov || g.gsStringHelpIn(203)[i.type], a = i.name, o = t.lv - 1
          } else if (3 == t) {
            let t = e.data_t;
            s = g.gsStringHelpIn(1)[t.type], o = t.lv, 1 == t.type && (o -= 1)
          } else if (4 == t) {
            let t = e.data_t;
            s = r.co_check.zgTableKey(t.check_id).name2, o = t.lv - 1
          } else if (5 == t || 6 == t || 7 == t || 9 == t) {
            let e = d.jieusoRed.count[t];
            o = e += 1, d.jieusoRed.count[t] = o
          }
          i && l.activity_start(i, s, a, o), t <= 4 && this.activityComplete(t, e)
        }
        static activityComplete(t, e) {
          let i = g.dbtZongName(5, t),
            s = "",
            a = "",
            o = 0;
          if (1 == t) {
            let t = e.data_t;
            s = r.co_dep.zgTableKey(t.dep_id).name, a = t.name, o = t.lv
          } else if (2 == t) {
            let t = e.data_t,
              i = r.co_market.zgTableKey(t.market_id);
            s = i.prov || g.gsStringHelpIn(203)[i.type], a = i.name, o = t.lv
          } else if (3 == t) {
            let t = e.data_t;
            s = g.gsStringHelpIn(1)[t.type], o = t.lv
          } else if (4 == t) {
            let t = e.data_t;
            s = r.co_check.zgTableKey(t.check_id).name2, o = t.lv
          } else if (5 == t) {
            o = e.data_t.id - 5e3
          }
          i && l.activity_complete(i, s, a, o)
        }
        static activityReward(t, e, i) {
          let s = g.dbtZongName(6, t),
            a = "",
            o = "";
          if (o = 1 == e ? "普通" : "视频", 1 == t) {
            a = `第${i.data_t.num}天签到`
          } else if (2 == t);
          else if (3 == t) {
            a = i.data_t.des
          } else 4 == t && (1 == i.idx ? a = "钞票" : 2 == i.idx ? a = "钻石" : 3 == i.idx && (a = "金卡"));
          s && l.activity_reward(s, a, o)
        }
        static activitySuccess(t, e, i) {
          let s = g.dbtZongName(7, t);
          if (!s) return;
          let a = s.tit,
            o = "",
            c = "";
          this.successkind2[t] ? (o = s.choose[e], c = i.num) : this.successkind[t] ? o = s.choose[e] : 22 == t && (o = s.choose[e], 1 == i.num ? c = "重新生成方案" : 2 == i.num && (c = "所有奖项拉满")), l.activity_success(a, o, c)
        }
        static getGDBtn() {
          let t = l.showMoreBtn();
          return console.log("更多按钮状态", t), t
        }
        static gotoMore() {
          l.showMoreContent()
        }
        static getFKBtn() {
          let t = l.showFbBtn();
          return console.log("反馈按钮状态", t), t
        }
        static gotoFK() {
          l.showFeedback()
        }
        static gotoYinsi() {
          l.gotoPrivacyPolicyStatic()
        }
        static gotoYonghu() {
          l.gotoTermsServiceStatic()
        }
        static getslAge() {
          let t = l.getslAge();
          return t || (t = 12), console.log("适龄年龄", t), t
        }
        static gotoAge() {
          l.showEligibleAgeAlertStatic()
        }
        static getpeizhi1(t) {
          return l.getOnlineConfigParams(t)
        }
        static checkIlllegal(t, e, i = !1) {
          // 单机版：原逻辑要请求服务器做敏感词校验（getWordResult），断网时回调永不返回，
          // 导致「取名 / 公司名 / 改名」的按钮点了完全没反应。改成纯本地规则并立即回调。
          try {
            const s = String(null == t ? "" : t);
            if (!s.length || !s.trim().length) {
              e(!1, "名字不能为空");
              return
            }
            e(!0, null)
          } catch (t2) {
            e(!0, null)
          }
        }
      }
      t("minFunc", _), _.successkind = {
        2: 1,
        4: 1,
        "5_1": 1,
        "5_2": 1,
        "5_3": 1,
        "5_4": 1,
        12: 1,
        13: 1,
        "15_1": 1,
        "15_2": 1,
        "15_3": 1,
        16: 1,
        18: 1,
        19: 1,
        20: 1,
        21: 1,
        23: 1,
        24: 1,
        25: 1,
        26: 1,
        27: 1,
        28: 1,
        29: 1
      }, _.successkind2 = {
        1: 1,
        3: 1,
        6: 1,
        7: 1,
        8: 1,
        9: 1,
        10: 1,
        14: 1,
        17: 1
      }, e._RF.pop()
    }
  }
}));