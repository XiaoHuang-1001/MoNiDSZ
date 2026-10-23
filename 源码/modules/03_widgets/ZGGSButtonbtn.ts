System.register("chunks:///_virtual/ZGGSButtonbtn.ts", ["cc", "./ZGGSSpritespr.ts"], (function(t) {
  "use strict";
  var n, e, c, r, s;
  return {
    setters: [function(t) {
      n = t.cclegacy, e = t.Button, c = t.EventHandler, r = t._decorator
    }, function(t) {
      s = t.ZGGSSpritespr
    }],
    execute: function() {
      var i;
      n._RF.push({}, "3ae9eVTLFFEYoRID9/iRAFt", "ZGGSButtonbtn", void 0);
      const {
        ccclass: l,
        property: a
      } = r;
      t("ZGGSButtonbtn", l("ZGGSButtonbtn")(i = class extends e {
        constructor(...t) {
          super(...t), this.m_call = null, this.m_lastTime = 0, this.m_intervalTime = 200, this.m_color = {}
        }
        start() {}
        callback(t, n) {
          this.m_call = t;
          const e = new c;
          e.target = this.node, e.component = "ZGGSButtonbtn", e.handler = "callbackHandler", e.customEventData = n, this.clickEvents.push(e)
        }
        callbackHandler(t, n) {
          let e = Date.now();
          e - this.m_lastTime > this.m_intervalTime && (this.m_lastTime = e, this.m_call(t, n))
        }
        unuse() {
          var t = function(n) {
            for (var e = 0; e < n.children.length; e++) {
              var c = n.children[e].getComponent(s);
              c && (c.grayscale = !0), t(n.children[e])
            }
          }.bind(this);
          t({
            children: [this.node]
          })
        }
        use() {
          var t = function(n) {
            for (var e = 0; e < n.children.length; e++) {
              var c = n.children[e].getComponent(s);
              c && (c.grayscale = !1), t(n.children[e])
            }
          }.bind(this);
          t({
            children: [this.node]
          })
        }
      }) || i);
      n._RF.pop()
    }
  }
}));