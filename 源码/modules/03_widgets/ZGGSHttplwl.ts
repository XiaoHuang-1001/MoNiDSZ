System.register("chunks:///_virtual/ZGGSHttplwl.ts", ["cc"], (function(t) {
  "use strict";
  var e;
  return {
    setters: [function(t) {
      e = t.cclegacy
    }],
    execute: function() {
      e._RF.push({}, "5b329ie1d5B6rlTlVdPxRaZ", "ZGGSHttplwl", void 0);
      class n {
        static startBuild() {
          return null == n._instance && (n._instance = new n), n._instance
        }
        lianxian(t, e, n) {
          var s = new XMLHttpRequest;
          s.onreadystatechange = function() {
            if (4 === s.readyState)
              if (s.status >= 200 && s.status < 400) {
                var t = s.responseText;
                console.log("获得HTTP信息" + t), n(t)
              } else console.log("HTTP连接失败")
          }, s.timeout = 5e3, s.open("POST", t, !0), s.setRequestHeader("Content-Type", "application/json"), s.send(e)
        }
      }
      t("ZGGSHttplwl", n), n._instance = null, e._RF.pop()
    }
  }
}));