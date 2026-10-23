System.register("chunks:///_virtual/ZGGSToggletog.ts", ["cc"], (function(t) {
  "use strict";
  var c, e, l, s;
  return {
    setters: [function(t) {
      c = t.cclegacy, e = t.Toggle, l = t.EventHandler, s = t._decorator
    }],
    execute: function() {
      var o;
      c._RF.push({}, "c7a41sB8ZJNY5HLfgTd5BBU", "ZGGSToggletog", void 0);
      const {
        ccclass: a,
        property: n
      } = s;
      t("ZGGSToggletog", a("ZGGSToggletog")(o = class extends e {
        constructor(...t) {
          super(...t), this.m_call = null
        }
        start() {}
        callback(t, c) {
          this.m_call = t;
          const e = new l;
          e.target = this.node, e.component = "ZGGSToggletog", e.handler = "callbackHandler", e.customEventData = c, this.checkEvents.push(e)
        }
        callbackHandler(t, c) {
          this.m_call(t, c)
        }
      }) || o);
      c._RF.pop()
    }
  }
}));
(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
})(function(mid, cid) {
  System.register(mid, [cid], function(_export, _context) {
    return {
      setters: [function(_m) {
        var _exportObj = {};
        for (var _key in _m) {
          if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
        }
        _export(_exportObj);
      }],
      execute: function() {}
    };
  });
});