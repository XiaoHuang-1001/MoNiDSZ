System.register("chunks:///_virtual/ZGGSMsgboxc.ts", ["cc"], (function(e) {
  "use strict";
  var s;
  return {
    setters: [function(e) {
      s = e.cclegacy
    }],
    execute: function() {
      s._RF.push({}, "3b392TzzY5PHILlUcbjD+hH", "ZGGSMsgboxc", void 0);
      class t {
        constructor() {
          this.m_windowBox = []
        }
        static startBuild() {
          return null == t._instance && (t._instance = new t), t._instance
        }
        SetBoxName(e, s, t) {
          e.addChild(s), this.m_windowBox[t] = s
        }
        guanbiView(e, s) {
          let t = this.m_windowBox[e];
          1 == s ? t.active = !1 : (t.destroy(), this.m_windowBox[e] = null)
        }
        sendMessage(e, ...s) {
          if (this.m_windowBox[e]) {
            if (this.m_windowBox[e].active) {
              this.m_windowBox[e].getComponent(e).receiveMessage(s)
            }
          } else console.log("sendMessage 该节点不存在," + e)
        }
      }
      e("ZGGSMsgboxc", t), t._instance = null, s._RF.pop()
    }
  }
}));