System.register("chunks:///_virtual/ZGGSComPreLoad.ts", ["cc"], (function(e) {
  "use strict";
  var o, t, a, r, c, s, i;
  return {
    setters: [function(e) {
      o = e.cclegacy, t = e.Component, a = e.resources, r = e.Prefab, c = e.AudioClip, s = e.SpriteFrame, i = e._decorator
    }],
    execute: function() {
      var d;
      o._RF.push({}, "f1f4aGuFA9H5qi9I+A6wEXA", "ZGGSComPreLoad", void 0);
      const {
        ccclass: u,
        property: n
      } = i;
      e("ZGGSComPreLoad", u("ZGGSComPreLoad")(d = class extends t {
        start() {}
        static loadPrefab(e, o) {
          a.load(e, r, ((e, t) => {
            o(t)
          }))
        }
        static loadAudio(e, o) {
          a.load(e, c, ((e, t) => {
            o(t)
          }))
        }
        static loadSpriteFrame(e, o) {
          a.load(e, s, ((e, t) => {
            o(t)
          }))
        }
      }) || d);
      o._RF.pop()
    }
  }
}));