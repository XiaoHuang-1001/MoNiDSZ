System.register("chunks:///_virtual/ZGGSHttpsWww.ts", ["cc", "./ZGGSConfigco.ts", "./ZGGSConlog.ts", "./ZGGSBoxMsg.ts", "./ZGGSSoundMusic.ts", "./ZGGSSqlMyg.ts", "./minFunc.ts"], (function(a) {
  "use strict";
  var t, o, e, n, i, l, r, s;
  return {
    setters: [function(a) {
      t = a.cclegacy, o = a.sys
    }, function(a) {
      e = a.ZGGSConfigco
    }, function(a) {
      n = a.ZGGSConlog
    }, function(a) {
      i = a.ZGGSBoxMsg
    }, function(a) {
      l = a.ZGGSSound
    }, function(a) {
      r = a.ZGGSSqlMyg
    }, function(a) {
      s = a.minFunc
    }],
    execute: function() {
      t._RF.push({}, "69203QOfPxFn4JmnfgFlGDy", "ZGGSHttpsWww", void 0);
      let d = a("gs_sql", r);
      class f extends i {}
      a("gs_bmsg", f);
      class c {
        static zgIsLiuHaHead() {
          let a = !1;
          return o.platform === o.Platform.IOS ? window.PlatformManager.i_na_getIsLiuHai() && (a = !0) : o.platform === o.Platform.ANDROID && window.PlatformManager.a_na_getIsLiuHai() && (a = !0), a = !0, a
        }
        static zgIntOpennet() {
          // 单机版：始终视为有网，避免联网/广告校验卡住流程
          return !0
        }
        static refreshZGSID() {
          c.deviceId || (c.deviceId = o.localStorage.getItem("ZGSGSSID"), c.deviceId || (c.deviceId = "send", n.log(["[Mhttp]", "设备id: 等待请求"])))
        }
        static blUpPlayerData(a, t, n) {
          // 单机版：不向服务器上传，但必须写本地存档（原版全靠服务器，我们断了网就没存档了）
          c.__dshSave()
        }
        static __dshSave() {
          try {
            d.saveData();
            const n = window.__dshSaveN = (window.__dshSaveN || 0) + 1;
            if (n <= 5) {
              let cnt = -1;
              try { cnt = Object.keys(d.combmInfo.objs).length } catch (e) {}
              window.__dshlog && window.__dshlog("save ok #" + n + " combm=" + cnt + " year=" + (d.base && d.base.year))
            }
            return !0
          } catch (e) {
            window.__dshlog && window.__dshlog("save error: " + e + " | " + (e && e.stack));
            return !1
          }
        }
        static blInitPlayerData(a, t, n) {
          // 单机版：屏蔽 SDK 注册上报
        }
        static blDataUpDay(a, t, n, i) {
          // 单机版：屏蔽 SDK 登录上报，但保留本地存档
          c.__dshSave()
        }
        static zgTableByQudao() {
          let a = 0;
          return o.platform === o.Platform.IOS ? a = 2 : o.platform === o.Platform.ANDROID ? (e.gsSdk && 1 == e.sdkCp && (a = window.PlatformManager.a_na_getSubPackageId()), a || (a = 1)) : a = 99, a
        }
        static zgNumByQudao(a) {
          o.platform === o.Platform.IOS ? (c.fachehao = 2, a()) : (c.fachehao = this.zgTableByQudao(), a())
        }
        static zgNumByQudaoType() {
          return c.fachehao
        }
        static countGGNum(a, t, o) {
          1 == a ? (d.base.diamond += t, o()) : 2 == a ? (d.base.diamond -= t, d.base.diamond < 0 && (d.base.diamond = 0), o()) : 3 == a ? (d.base.diamond = 20, o()) : o()
        }
        static GGShowVido(a, t) {
          // 单机版：不拉广告，按原“离线发奖”分支直接发放
          try {
            if (d.cache.yindaoStop) return void t();
            d.cjInfo.videoCount++, d.cache.cjCheckType[1] = d.cjInfo.videoCount,
              window.__dshlog && window.__dshlog("ad: offline grant"), t()
          } catch (e) {
            try { t() } catch (e2) {}
          }
        }
        static GGShowVido_orig(a, t) {
          if (console.log("广告id=", a), d.cache.yindaoStop) t();
          else if (c.zgIntOpennet() || 2 == e.sdkCp)
            if (e.kpkasi) {
              let i = "",
                r = function(a) {
                  i = "广告成功回调,状态是" + a, l.playBg("vhallBg"), a && "boolean" == typeof a ? (i = "请求视频播放统计(视频播放后)", n.log(["[Mhttp]", i, !0]), d.cjInfo.videoCount++, d.cache.cjCheckType[1] = d.cjInfo.videoCount, t()) : (i = "广告正在加载中，请稍等几秒再试哦", 2 != e.sdkCp && f.send(202, "广告正在加载中，请稍等几秒再试哦"))
                }.bind(this);
              if (i = "请求视频播放统计(视频打开前)", n.log(["[Mhttp]", i, !0]), 1 == e.sdkCp) {
                if (l.stopBg(), o.platform === o.Platform.IOS) return window.PlatformManager.i_na_playShiPing(a.toString(), r);
                if (o.platform === o.Platform.ANDROID) return window.PlatformManager.a_na_playShiPing(a.toString(), r)
              } else 2 == e.sdkCp && s.dbtGgShow(a, r)
            } else n.log(["[Mhttp]", "请求视频播放统计(视频打开前)"]), d.cjInfo.videoCount++, d.cache.cjCheckType[1] = d.cjInfo.videoCount, t();
          else f.send(202, "网络异常")
        }
        static initPlayerData() {
          // 单机版：不调用 SDK 注册/登录，避免弹出登录与实名认证
          window.__dshlog && window.__dshlog("sdk: initPlayerData skipped")
        }
        static initPlayerData2() {
          // 单机版：不调用 a_na_loginGame（登录 + 实名认证的入口）
        }
        static playerDataUp() {
          // 单机版：原始逻辑只是 SDK 登录上报；这里改成写本地存档
          c.__dshSave()
        }
      }
      a("ZGGSHttpsWww", c), c.deviceId = "", c.fachehao = 0,
        // 单机版存档入口：任何模块都可以调 window.__dshSaveData() 落盘
        window.__dshSaveData = function() { return c.__dshSave() },
        t._RF.pop()
    }
  }
}));