System.register("chunks:///_virtual/ZGGSEditBoxeb.ts", ["cc"], (function(e) {
  "use strict";
  var t, s, n, c;
  return {
    setters: [function(e) {
      t = e.cclegacy, s = e.EditBox, n = e.EventHandler, c = e._decorator
    }],
    execute: function() {
      var a;
      t._RF.push({}, "1427bvP63xH6YA75vshMQJE", "ZGGSEditBoxeb", void 0);
      const {
        ccclass: i,
        property: r
      } = c;
      e("ZGGSEditBoxeb", i("ZGGSEditBoxeb")(a = class extends s {
        constructor(...e) {
          super(...e), this.m_call = null
        }
        start() {}
        callback(e, t, s) {
          this.m_call = e;
          const c = new n;
          switch (c.target = this.node, c.component = "ZGGSEditBoxeb", c.handler = t, c.customEventData = s, t) {
            case "began":
              console.log("Began"), this.editingDidBegan.push(c);
              break;
            case "ended":
              this.editingDidEnded.push(c);
              break;
            case "changed":
              this.textChanged.push(c);
              break;
            case "return":
              console.log("Return"), this.editingReturn.push(c)
          }
        }
        began(e, t) {
          this.m_call(e, t)
        }
        ended(e, t) {
          this.m_call(e, t)
        }
        changed(e, t, s) {
          this.m_call(e, t, s)
        }
        return (e, t) {
          this.m_call(e, t)
        }
      }) || a);
      t._RF.pop()
    }
  }
}));