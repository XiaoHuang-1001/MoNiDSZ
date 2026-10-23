System.register("chunks:///_virtual/ZGGSRichTxtr.ts", ["cc"], (function(t) {
  "use strict";
  var c, e, n, o;
  return {
    setters: [function(t) {
      c = t.cclegacy, e = t.RichText, n = t.Component, o = t._decorator
    }],
    execute: function() {
      var s;
      c._RF.push({}, "8e6dcwpKQJKyoRRl/twfnEI", "ZGGSRichTxtr", void 0);
      const {
        ccclass: r,
        property: i
      } = o;
      t("ZGGSRichTxtr", r("ZGGSRichTxtr")(s = class extends e {
        constructor(...t) {
          super(...t), this._onTouchEnded = function(t) {
            let c = this.node.getComponents(n);
            for (const e of this._segments) {
              const n = e.clickHandler;
              e.clickParam;
              if (n && this._containsTouchLocation(e, t.touch.getUILocation())) {
                let e = n.split(":"),
                  o = e[0],
                  s = e.length > 1 ? e[1] : "",
                  r = e.length > 2 ? e[2] : "",
                  i = e.length > 3 ? e[3] : "";
                c.forEach((c => {
                  const e = c[o];
                  c.enabledInHierarchy && e && e.call(c, t, s, r, i)
                })), t.propagationStopped = !0
              }
            }
          }
        }
        start() {}
      }) || s);
      c._RF.pop()
    }
  }
}));