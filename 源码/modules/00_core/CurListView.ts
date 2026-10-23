System.register("chunks:///_virtual/CurListView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ListView.ts"], (function(t) {
  "use strict";
  var e, i, r, s, n, c, o;
  return {
    setters: [function(t) {
      e = t.applyDecoratedDescriptor, i = t.initializerDefineProperty
    }, function(t) {
      r = t.cclegacy, s = t._decorator, n = t.Component
    }, function(t) {
      c = t.default, o = t.AbsAdapter
    }],
    execute: function() {
      var u, l, a, p, d;
      r._RF.push({}, "c50bdcgfF9Cj5OO7jAdVp95", "CurListView", void 0);
      const {
        ccclass: f,
        property: w
      } = s;
      t("CurListView", (u = f("CurListView"), l = w(c), u((d = e((p = class extends n {
        constructor(...t) {
          super(...t), i(this, "listView", d, this)
        }
        init(t, e) {
          let i = new o;
          i.setCallback(e), i.setDataSet(t), this.listView.setAdapter(i)
        }
      }).prototype, "listView", [l], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), a = p)) || a));
      r._RF.pop()
    }
  }
}));