System.register("chunks:///_virtual/ZGGSJavaj.ts", ["cc", "./ZGGSConfigco.ts"], (function(a) {
  "use strict";
  var n, o, i;
  return {
    setters: [function(a) {
      n = a.cclegacy, o = a.sys
    }, function(a) {
      i = a.ZGGSConfigco
    }],
    execute: function() {
      n._RF.push({}, "f0c288IFsRCcInjIh/xx1Za", "ZGGSJavaj", void 0);
      a("ZGGSJavaj", class {
        static qdTapPL() {
          console.log("唤醒tap评论"), o.platform === o.Platform.IOS || o.platform === o.Platform.ANDROID && i.gsSdk && window.PlatformManager.a_na_jumpToTap()
        }
        static qdRyStr(a) {}
        static qduMengs(a) {
          console.log(1, a, "umeng事件"), o.platform === o.Platform.IOS ? window.PlatformManager.i_na_youmengEvent(a) : o.platform === o.Platform.ANDROID && i.gsSdk && window.PlatformManager.a_na_setEvent(a)
        }
        static guanggIdG(a) {
          return {
            lingshigg: 1,
            xianjinggg: 2,
            tuiyangg: 3,
            shengyuangg: 4,
            pingjiagg: 5,
            chengjiugg: 6,
            qiandaogg: 7,
            lixianshouygg: 8,
            churudandaogg: 9,
            churufudaogg: 10,
            churulianqigg: 11,
            yuanfengg: 12,
            baowushijiangg: 13,
            bagaoxiuweigg: 14,
            chongshulingggg: 15,
            xiaochuanjgg: 16,
            huodeqiwugg: 17,
            tinengxunliangg: 18,
            yinjibianhuagg: 19
          } [a] || 1
        }
        static yindaoSend(a, n) {
          g[`${1e3*a+n}`] || console.error("引导埋点问题", a, n, `${1e3*a+n}`)
        }
      });
      const g = {
        1001: "yindao_1001",
        1002: "yindao_1002",
        1003: "yindao_1003",
        1004: "yindao_1004",
        1005: "yindao_1005",
        1006: "yindao_1006",
        1007: "yindao_1007",
        1008: "yindao_1008",
        1009: "yindao_1009",
        1010: "yindao_1010",
        1011: "yindao_1011",
        1012: "yindao_1012",
        1013: "yindao_1013",
        2001: "yindao_2001",
        2002: "yindao_2002",
        2003: "yindao_2003",
        3001: "yindao_3001",
        3002: "yindao_3002",
        3003: "yindao_3003",
        3004: "yindao_3004",
        4001: "yindao_4001",
        4002: "yindao_4002",
        5001: "yindao_5001",
        5002: "yindao_5002",
        5003: "yindao_5003",
        5004: "yindao_5004",
        6001: "yindao_6001",
        6002: "yindao_6002",
        6003: "yindao_6003",
        1e3: "yindao_tiaoguo"
      };
      n._RF.pop()
    }
  }
}));