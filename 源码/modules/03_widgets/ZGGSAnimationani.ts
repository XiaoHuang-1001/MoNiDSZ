System.register("chunks:///_virtual/ZGGSAnimationani.ts", ["cc"], (function(t) {
  "use strict";
  var i, n, a;
  return {
    setters: [function(t) {
      i = t.cclegacy, n = t.Animation, a = t._decorator
    }],
    execute: function() {
      var e;
      i._RF.push({}, "f372c1P/mxECLJcI+iXpqfe", "ZGGSAnimationani", void 0);
      const {
        ccclass: c,
        property: s
      } = a;
      t("ZGGSAnimationani", c("ZGGSAnimationani")(e = class extends n {
        constructor(...t) {
          super(...t), this.m_call = null
        }
        start() {}
        callback(t, i, n, a) {
          this.m_call = n, this.defaultClip.events.push({
            frame: t,
            func: "onTriggered",
            params: [i]
          }), this.defaultClip.updateEventDatas()
        }
        onTriggered(t) {
          this.m_call(t)
        }
      }) || e);
      i._RF.pop()
    }
  }
}));