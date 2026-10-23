System.register("chunks:///_virtual/ZGGSComponentcom.ts", ["cc", "./ZGGSMsgboxc.ts"], (function(e) {
  "use strict";
  var o, s, t, c;
  return {
    setters: [function(e) {
      o = e.cclegacy, s = e.Component, t = e._decorator
    }, function(e) {
      c = e.ZGGSMsgboxc
    }],
    execute: function() {
      var n;
      o._RF.push({}, "b6b67Hr/stKwo00+jA1vQQ2", "ZGGSComponentcom", void 0);
      const {
        ccclass: r,
        property: a
      } = t;
      e("ZGGSComponentcom", r("ZGGSComponentcom")(n = class extends s {
        start() {}
        sendMessage(e, ...o) {
          c.startBuild().sendMessage(e, o)
        }
        receiveMessage(...e) {
          console.log("yyyy", e)
        }
      }) || n);
      o._RF.pop()
    }
  }
}));