System.register("chunks:///_virtual/ZGGSScrollviewsvi.ts", ["cc"], (function(c) {
  "use strict";
  var l, t, e, s;
  return {
    setters: [function(c) {
      l = c.cclegacy, t = c.ScrollView, e = c.EventHandler, s = c._decorator
    }],
    execute: function() {
      var r;
      l._RF.push({}, "2db8c83FRxN+o/zcfgn+qvo", "ZGGSScrollviewsvi", void 0);
      const {
        ccclass: n,
        property: o
      } = s;
      c("ZGGSScrollviewsvi", n("ZGGSScrollviewsvi")(r = class extends t {
        constructor(...c) {
          super(...c), this.m_call = null
        }
        start() {}
        callback(c, l) {
          this.m_call = c;
          const t = new e;
          t.target = this.node, t.component = "ZGGSScrollviewsvi", t.handler = "callbackHandler", t.customEventData = l, this.scrollEvents.push(t)
        }
        callbackHandler(c, l, t) {
          this.m_call(c, l, t)
        }
      }) || r);
      l._RF.pop()
    }
  }
}));