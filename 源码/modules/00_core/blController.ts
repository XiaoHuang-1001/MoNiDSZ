System.register("chunks:///_virtual/blController.ts", ["cc", "./ZGGSConfigco.ts"], (function(n) {
  "use strict";
  var u, e, i;
  return {
    setters: [function(n) {
      u = n.cclegacy, e = n.sys
    }, function(n) {
      i = n.ZGGSConfigco
    }],
    execute: function() {
      u._RF.push({}, "92935LYZKtOu5MfPvbA8Ao0", "blController", void 0);
      let a = {
          100001: "gongneng_chengjiu",
          100002: "gongneng_qiandao",
          100003: "gongneng_paiming",
          100004: "gongneng_chuchai",
          100005: "gongneng_kaohe",
          100006: "gongneng_shangzhan",
          100007: "gongneng_shenzao"
        },
        b = {
          1001: "bumen_dongshizhang",
          1002: "bumen_mishuchu",
          1003: "bumen_dongshihui",
          1500: "bumen_fengongsi",
          1101: "bumen_fawubu",
          1102: "bumen_xingzhengbu",
          1103: "bumen_yewubu",
          1104: "bumen_caiwubu",
          1105: "bumen_anbaobu",
          1106: "bumen_gongguanbu",
          1201: "bumen_heguibu",
          1202: "bumen_shenjibu",
          1203: "bumen_zhishichanquanbu",
          1204: "bumen_renliziyuanbu",
          1205: "bumen_jianchabu",
          1206: "bumen_houqinbu",
          1207: "bumen_chanpinbu",
          1208: "bumen_jishubu",
          1209: "bumen_shichangbu",
          1210: "bumen_xinchouguanlibu",
          1211: "bumen_zichanbu",
          1212: "bumen_zijinbu",
          1301: "bumen_caigoubu",
          1302: "bumen_shisubu",
          1303: "bumen_wuzibu",
          1304: "bumen_cehuabu",
          1305: "bumen_shejibu",
          1306: "bumen_suanfabu",
          1307: "bumen_yunyingbu",
          1308: "bumen_yanfabu",
          1309: "bumen_ceshibu",
          1310: "bumen_yunweibu",
          1311: "bumen_xiaoshoubu",
          1312: "bumen_xuanchuanbu",
          1313: "bumen_diaoyanbu",
          1314: "bumen_kefubu",
          1401: "bumen_cehua1zu",
          1402: "bumen_cehua2zu",
          1403: "bumen_cehua3zu",
          1404: "bumen_sheji1zu",
          1405: "bumen_sheji2zu",
          1406: "bumen_sheji3zu",
          1407: "bumen_yunying1zu",
          1408: "bumen_yunying2zu",
          1409: "bumen_yunying3zu",
          1410: "bumen_yanfa1zu",
          1411: "bumen_yanfa2zu",
          1412: "bumen_yanfa3zu",
          1413: "bumen_ceshi1zu",
          1414: "bumen_ceshi2zu",
          1415: "bumen_ceshi3zu",
          1416: "bumen_xiaoshou1zu",
          1417: "bumen_xiaoshou2zu",
          1418: "bumen_xiaoshou3zu",
          1419: "bumen_kefu1zu",
          1420: "bumen_kefu2zu",
          1421: "bumen_kefu3zu"
        },
        _ = {
          1: "pingjia_chuchuang",
          6: "pingjia_yiban",
          11: "pingjia_jingying",
          16: "pingjia_biaogan",
          21: "pingjia_zhiming"
        };
      n("blController", class {
        static tpingTiao() {
          console.log("唤醒tap评论"), e.platform === e.Platform.IOS || e.platform === e.Platform.ANDROID && i.gsSdk && 1 == i.sdkCp && window.PlatformManager.a_na_jumpToTap()
        }
        static uRecordApi(n) {
          1 == i.sdkCp && (console.log(1, n, "umeng事件"), e.platform === e.Platform.IOS ? window.PlatformManager.i_na_youmengEvent(n) : e.platform === e.Platform.ANDROID && i.gsSdk && 1 == i.sdkCp && window.PlatformManager.a_na_setEvent(n))
        }
        static ydIdSend(n) {
          let u = `yindao_${n}`;
          this.uRecordApi(u)
        }
        static kpIdSend(n) {
          let u = `kaipian_${n}`;
          this.uRecordApi(u)
        }
        static shichangSend(n) {}
        static gongnengSend(n) {
          let u = a[n];
          u && this.uRecordApi(u)
        }
        static bumenSend(n) {
          let u = b[n];
          u && this.uRecordApi(u)
        }
        static pingjiaSend(n) {
          let u = _[n];
          u && this.uRecordApi(u)
        }
        static huanxSend() {
          this.uRecordApi("pinglunhuanqi")
        }
      }), u._RF.pop()
    }
  }
}));