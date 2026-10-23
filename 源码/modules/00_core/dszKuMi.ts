System.register("chunks:///_virtual/dszKuMi.ts", ["cc", "./ZGGSConfigco.ts"], (function(t) {
  "use strict";
  var e, a, o;
  return {
    setters: [function(t) {
      e = t.cclegacy, a = t.sys
    }, function(t) {
      o = t.ZGGSConfigco
    }],
    execute: function() {
      e._RF.push({}, "362869vpgpP7KsDimUOb0qp", "dszKuMi", void 0);
      let r = "game",
        i = "simulation";
      t("dszKuMi", class {
        static addVideoNode(t, e) {
          if (2 == o.sdkCp) return console.log("[SDK]", " GameHelper.AdsVideoManager.addVideoNode()", e), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.AdsVideoManager.addVideoNode(t, e)
        }
        static setVideoStatus(t) {
          if (2 == o.sdkCp) return console.log("[SDK]", " GameHelper.AdsVideoManager.setVideoStatus()", t, !1), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.AdsVideoManager.setVideoStatus(t, !1)
        }
        static showVideo(t, e) {
          if (2 == o.sdkCp) return console.log("[SDK]", " GameHelper.AdsFunc.showVideo()", e.name, e), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.AdsVideoManager.showVideo(t, e)
        }
        static init(t) {
          if (2 != o.sdkCp) return void t();
          console.log("[SDK]", "GameHelper.init() sdk初始化");
          a.platform === a.Platform.ANDROID || a.platform === a.Platform.IOS ? GameHelper.init(function() {
            GameHelper.GameStatistics.EnterHome(), GameHelper.GameStatistics.EnterGame(r), GameHelper.GameStatistics.StartGame(0, "wujin"), GameHelper.GameStatistics.EnterMode("wujin"), t()
          }.bind(this)) : t()
        }
        static GuideStart() {
          2 == o.sdkCp && (console.log("[SDK]", "GameHelper.GameStatistics.GuideStart()"), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.GameStatistics.GuideStart())
        }
        static GuideStep(t) {
          if (2 == o.sdkCp) {
            var e = {
              mode_level: `${t}`,
              mode_name: i,
              mode_level_name: "0"
            };
            console.log("[SDK]", "GameHelper.GameStatistics.reportEvent()", "game_progress", e), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.GameStatistics.reportEvent("game_progress", e)
          }
        }
        static GuideOver() {
          2 == o.sdkCp && (console.log("[SDK]", "GameHelper.GameStatistics.GuideOver()"), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.GameStatistics.GuideOver())
        }
        static GetItem(t, e, m, l, s) {
          if (2 == o.sdkCp) {
            var p = {
              game_name: r,
              mode_name: i,
              item_name: s,
              item_id: t,
              item_number: e,
              item_count: m,
              item_system: l
            };
            console.log("[SDK]", "GameHelper.GameStatistics.reportEvent()", "item_get", JSON.stringify(p)), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.GameStatistics.reportEvent("item_get", p)
          }
        }
        static CostItem(t, e, m, l, s) {
          if (2 == o.sdkCp) {
            var p = {
              game_name: r,
              mode_name: i,
              item_id: t,
              item_name: s,
              item_number: e,
              item_count: m,
              item_system: l
            };
            console.log("[SDK]", "GameHelper.GameStatistics.reportEvent()", "item_cost", JSON.stringify(p)), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.GameStatistics.reportEvent("item_cost", p)
          }
        }
        static develop_unlock(t, e) {
          if (2 == o.sdkCp) {
            var r = {
              develop_type: `${t}`,
              mode_name: i,
              develop_name: `${e}`
            };
            console.log("[SDK]", "GameHelper.GameStatistics.reportEvent()", "develop_unlock", JSON.stringify(r)), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.GameStatistics.reportEvent("develop_unlock", r)
          }
        }
        static activity_unlock(t) {
          if (2 == o.sdkCp) {
            var e = {
              game_name: r,
              mode_name: i,
              activity_name: t
            };
            console.log("[SDK]", "GameHelper.GameStatistics.reportEvent()", "activity_unlock", JSON.stringify(e)), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.GameStatistics.reportEvent("activity_unlock", e)
          }
        }
        static activity_enter(t) {
          if (2 == o.sdkCp) {
            var e = {
              game_name: r,
              mode_name: i,
              activity_name: t
            };
            console.log("[SDK]", "GameHelper.GameStatistics.reportEvent()", "activity_enter", JSON.stringify(e)), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.GameStatistics.reportEvent("activity_enter", e)
          }
        }
        static activity_start(t, e, m, l) {
          if (2 == o.sdkCp) {
            var s = {
              game_name: r,
              mode_name: i,
              activity_name: t,
              activity_mode1: e,
              activity_mode2: m,
              activity_mode3: `${l}`
            };
            console.log("[SDK]", "GameHelper.GameStatistics.reportEvent()", "activity_start", JSON.stringify(s)), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.GameStatistics.reportEvent("activity_start", s)
          }
        }
        static activity_complete(t, e, m, l) {
          if (2 == o.sdkCp) {
            var s = {
              game_name: r,
              mode_name: i,
              activity_name: t,
              activity_mode1: e,
              activity_mode2: m,
              activity_mode3: `${l}`,
              activity_param1: ""
            };
            console.log("[SDK]", "GameHelper.GameStatistics.reportEvent()", "activity_complete", JSON.stringify(s)), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.GameStatistics.reportEvent("activity_complete", s)
          }
        }
        static activity_reward(t, e, m) {
          if (2 == o.sdkCp) {
            var l = {
              game_name: r,
              mode_name: i,
              activity_name: t,
              activity_mode1: e,
              activity_mode2: m
            };
            console.log("[SDK]", "GameHelper.GameStatistics.reportEvent()", "activity_reward", JSON.stringify(l)), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.GameStatistics.reportEvent("activity_reward", l)
          }
        }
        static activity_success(t, e, m) {
          if (2 == o.sdkCp) {
            var l = {
              game_name: r,
              mode_name: i,
              activity_name: t,
              activity_mode1: e,
              activity_mode2: m
            };
            console.log("[SDK]", "GameHelper.GameStatistics.reportEvent()", "activity_success", JSON.stringify(l)), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.GameStatistics.reportEvent("activity_success", l)
          }
        }
        static goEvaluate() {
          2 == o.sdkCp && (console.log("[SDK]", "GameHelper.App.goEvaluate()"), a.platform === a.Platform.IOS && GameHelper.App.goEvaluate())
        }
        static gotoPrivacyPolicyStatic() {
          2 == o.sdkCp && (console.log("[SDK]", "GameHelper.App.gotoPrivacyPolicyStatic() 跳转隐私"), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.App.gotoPrivacyPolicyStatic())
        }
        static gotoTermsServiceStatic() {
          2 == o.sdkCp && (console.log("[SDK]", "GameHelper.App.gotoTermsServiceStatic() 跳转协议"), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.App.gotoTermsServiceStatic())
        }
        static getslAge() {
          return 2 != o.sdkCp ? 8 : (console.log("[SDK]", "GameHelper.App.getOnlineConfigParams(underage_limit_level) 获取适龄年龄"), a.platform === a.Platform.ANDROID || a.platform === a.Platform.IOS ? GameHelper.App.getOnlineConfigParams("underage_limit_level") : 12)
        }
        static showEligibleAgeAlertStatic() {
          2 == o.sdkCp && (console.log("[SDK]", "GameHelper.GameStatistics.showEligibleAgeAlertStatic() 适龄提示"), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.App.showEligibleAgeAlertStatic())
        }
        static showFbBtn() {
          return 2 == o.sdkCp && (console.log("[SDK]", " GameHelper.App.isShowFeedback() 反馈按钮"), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.App.isShowFeedback())
        }
        static showFeedback() {
          2 == o.sdkCp && (console.log("[SDK]", " GameHelper.App.showFeedback() 反馈"), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.App.showFeedback())
        }
        static showMoreBtn() {
          return 2 == o.sdkCp && (console.log("[SDK]", " GameHelper.App.isShowMoreSettingStatic() 更多按钮"), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.App.isShowMoreSettingStatic())
        }
        static showMoreContent() {
          return 2 == o.sdkCp && (console.log("[SDK]", " GameHelper.App.startSettingStatic() 显示更多"), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.App.startSettingStatic())
        }
        static getOnlineConfigParams(t) {
          if (2 == o.sdkCp) {
            console.log("[SDK]", "GameHelper.App.getOnlineConfigParams()", t);
            var e = null;
            return a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || (e = GameHelper.App.getOnlineConfigParams(t)), e
          }
        }
        static errorSubmit(t) {
          2 == o.sdkCp && (console.log("[SDK]", "GameHelper.App.postBuglyInfo()", JSON.stringify(t)), a.platform !== a.Platform.ANDROID && a.platform !== a.Platform.IOS || GameHelper.App.postBuglyInfo(JSON.stringify(t)))
        }
        static showInterstitialStatic(t, e, r) {
          if (2 != o.sdkCp) return;
          let i = {
            name: "game",
            insertName: "game",
            type: "0",
            show: t,
            fail: e,
            close: r
          };
          return console.log("[SDK]", "插屏 GameHelper.AdsFunc.showInterstitialStatic()", JSON.stringify(i)), a.platform === a.Platform.ANDROID || a.platform === a.Platform.IOS ? GameHelper.AdsFunc.showInterstitialStatic(i) : void 0
        }
        static getWordResult(t, e) {
          if (2 != o.sdkCp) return console.log("非多比特渠道"), void e(!0);
          a.platform === a.Platform.ANDROID || a.platform === a.Platform.IOS ? GameHelper.AppUtil.checkThirdSensitiveInfoStatic(1, t, "", (a => {
            console.log("检查正常", t, a), e(!!a)
          }), (t => {
            console.log("检查错误", t), e(!1, 1)
          })) : (console.log("多比特不走检查"), e(!0))
        }
      }), e._RF.pop()
    }
  }
}));