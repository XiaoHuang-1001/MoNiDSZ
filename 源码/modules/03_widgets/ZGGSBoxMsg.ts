System.register("chunks:///_virtual/ZGGSBoxMsg.ts", ["cc", "./ZGGSMsgboxc.ts"], (function(s) {
  "use strict";
  var e, t;
  return {
    setters: [function(s) {
      e = s.cclegacy
    }, function(s) {
      t = s.ZGGSMsgboxc
    }],
    execute: function() {
      e._RF.push({}, "86049zXyH5OCJGtJvDK+bcL", "ZGGSBoxMsg", void 0);
      class i {}
      s("ZGGSBoxMsg", i), i.send = function(s, e = null, i = null, a = null, l = null, d = null) {
        101 == s ? t.startBuild().sendMessage("VHBgshi", [s, e, i, a, l, d]) : 202 == s ? t.startBuild().sendMessage("ZGGSClockTime", [s, e, i, a, l, d]) : 203 == s || 204 == s ? t.startBuild().sendMessage("VHBgshi", [s, e, i, a, l, d]) : 206 == s ? t.startBuild().sendMessage("ZGGSClockTime", [s, e, i, a, l, d]) : 211 == s || 212 == s ? t.startBuild().sendMessage("WFeishu", [s, e, i, a, l, d]) : (213 == s || 1201 == s || 2001 == s || 2002 == s || 2003 == s || 2004 == s || 2005 == s || 2006 == s || 2007 == s) && t.startBuild().sendMessage("VHBgshi", [s, e, i, a, l, d]), 2100 == s ? (t.startBuild().sendMessage("VHBgshi", [s, e, i, a, l, d]), t.startBuild().sendMessage("ZGGSClockTime", [s, e, i, a, l, d])) : 2200 == s ? t.startBuild().sendMessage("ZGGSClockTime", [s, e, i, a, l, d]) : 2201 == s ? t.startBuild().sendMessage("VHBgshi", [s, e, i, a, l, d]) : 2300 == s || 2301 == s ? t.startBuild().sendMessage("ZGGSClockTime", [s, e, i, a, l, d]) : 2302 == s || 2303 == s || 2304 == s || 2305 == s || 2306 == s ? t.startBuild().sendMessage("VHBgshi", [s, e, i, a, l, d]) : 2307 == s ? t.startBuild().sendMessage("ZGGSClockTime", [s, e, i, a, l, d]) : 3101 == s || 3400 == s || 2901 == s ? t.startBuild().sendMessage("VHBgshi", [s, e, i, a, l, d]) : 501 == s ? t.startBuild().sendMessage("ZGGSClockTime", [s, e, i, a, l, d]) : (5501 == s || 5502 == s) && t.startBuild().sendMessage("VHBgshi", [s, e, i, a, l, d])
      }, e._RF.pop()
    }
  }
}));