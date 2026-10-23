System.register("chunks:///_virtual/ListView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
  "use strict";
  var e, i, n, s, h, o, a, r, l, c, g, p, m, u, d;
  return {
    setters: [function(t) {
      e = t.applyDecoratedDescriptor, i = t.initializerDefineProperty
    }, function(t) {
      n = t.cclegacy, s = t.Node, h = t.Vec2, o = t.Rect, a = t.ScrollView, r = t._decorator, l = t.Component, c = t.NodePool, g = t.UITransform, p = t.v2, m = t.instantiate, u = t.v3, d = t.rect
    }],
    execute: function() {
      var C, f, w, _, b, I, V, P, y, x, v, z, L, R;
      n._RF.push({}, "a5937Fexe9PKZLawJOsCbRf", "ListView", void 0);
      const {
        ccclass: O,
        property: H
      } = r;
      t("default", (C = H(s), f = H(h), w = H(o), _ = H(a), b = H(s), O((P = e((V = class extends l {
        constructor(...t) {
          super(...t), i(this, "itemTemplate", P, this), i(this, "spacing", y, this), i(this, "margin", x, this), i(this, "spawnCount", v, this), i(this, "column", z, this), i(this, "scrollView", L, this), i(this, "emptyView", R, this), this.content = null, this.adapter = null, this._items = new c, this._filledIds = {}, this.horizontal = !1, this._itemHeight = 1, this._itemWidth = 1, this._itemsVisible = 1, this.dataChanged = !1, this._isInited = !1, this.visibleRange = [-1, -1], this.pager = void 0, this.comp = null
        }
        onLoad() {
          this.init(), this.pager = new M(this), this.scrollView
        }
        async setAdapter(t) {
          this.adapter !== t ? (this.adapter = t, null != this.adapter ? null != this.itemTemplate ? (this.visibleRange[0] = this.visibleRange[1] = -1, this.recycleAll(), this.notifyUpdate()) : console.error("Listview 未设置待显示的Item模板.") : console.warn("adapter 为空.")) : this.notifyUpdate()
        }
        getAdapter() {
          return this.adapter
        }
        getSVByUrl() {
          return this.scrollView
        }
        getAllItems() {
          return this._items
        }
        scrollToPage(t, e, i) {
          if (!this.adapter || !this.scrollView) return !1;
          this.adapter.getCount();
          if (this.horizontal) {
            let n = 0;
            const s = this.content.getComponent(g).width,
              h = this.getColumnWH();
            if (e) n = h * e;
            else {
              let t = this.content.parent.getComponent(g).width;
              n = Math.floor(t / h) * h
            }
            return this.scrollView.scrollToOffset(p(n * t, 0), i), n * (t + 1) >= s
          } {
            const n = this.content.getComponent(g).height,
              s = this.getColumnWH();
            let h = 0;
            if (e) h = s * e;
            else {
              let t = this.content.parent.getComponent(g).height;
              h = Math.floor(t / s) * s
            }
            return this.scrollView.scrollToOffset(p(0, h * t), i), h * (t + 1) >= n
          }
        }
        getVisibleElements() {
          let t = 0;
          if (this.horizontal) {
            let e = this.content.parent.getComponent(g).width;
            t = Math.floor(e / this.getColumnWH())
          } else {
            let e = this.content.parent.getComponent(g).height;
            t = Math.floor(e / this.getColumnWH())
          }
          return t * this.column
        }
        getColumnWH() {
          return this.horizontal ? this._itemWidth + this.spacing.x : this._itemHeight + this.spacing.y
        }
        notifyUpdate() {
          null != this.adapter && (this._isOnLoadCalled || this.init(), this.scrollView && this.content && (this.visibleRange[0] = this.visibleRange[1] = -1, this.horizontal ? this.content.getComponent(g).width = Math.ceil(this.adapter.getCount() / this.column) * (this._itemWidth + this.spacing.x) - this.spacing.x + this.margin.x + this.margin.width : this.content.getComponent(g).height = Math.ceil(this.adapter.getCount() / this.column) * (this._itemHeight + this.spacing.y) - this.spacing.y + this.margin.y + this.margin.height, this.dataChanged = !0))
        }
        lateUpdate() {
          const t = this.getVisibleRange();
          this.checkNeedUpdate(t) && (this.recycleDirty(t), this.updateView(t))
        }
        _layoutVertical(t, e) {
          this.content.addChild(t);
          const i = e % (this.column || 1),
            n = Math.floor(e / (this.column || 1));
          t.setPosition(this.column > 1 ? this.margin.x + t.getComponent(g).width * t.getComponent(g).anchorX + (t.getComponent(g).width + this.spacing.x) * i - this.content.getComponent(g).width * this.content.getComponent(g).anchorX : 0, -this.margin.y - t.getComponent(g).height * (t.getComponent(g).anchorY + n) - this.spacing.y * n)
        }
        _layoutHorizontal(t, e) {
          this.content.addChild(t);
          const i = e % (this.column || 1),
            n = Math.floor(e / (this.column || 1));
          t.setPosition(t.getComponent(g).width * (t.getComponent(g).anchorX + n) + this.spacing.x * n + this.margin.x, this.column > 1 ? -1 * (this.margin.y + t.getComponent(g).height * t.getComponent(g).anchorY + (t.getComponent(g).height + this.spacing.y) * i - this.content.getComponent(g).height * this.content.getComponent(g).anchorY) : 0)
        }
        recycleAll() {
          for (const t in this._filledIds) this._filledIds.hasOwnProperty(t) && this._items.put(this._filledIds[t]);
          this._filledIds = {}
        }
        recycleDirty(t) {
          if (t && !(t.length < 2)) {
            for (let e = this.visibleRange[0]; e < t[0]; e++) e < 0 || !this._filledIds[e] || (this._items.put(this._filledIds[e]), this._filledIds[e] = null);
            for (let e = this.visibleRange[1]; e > t[1]; e--) e < 0 || !this._filledIds[e] || (this._items.put(this._filledIds[e]), this._filledIds[e] = null);
            this.visibleRange[0] = t[0], this.visibleRange[1] = t[1]
          }
        }
        checkNeedUpdate(t) {
          return t && this.visibleRange && (this.visibleRange[0] != t[0] || this.visibleRange[1] != t[1])
        }
        updateView(t) {
          for (let e = t[0]; e <= t[1]; e++) {
            if (!this.dataChanged && this._filledIds[e]) continue;
            let t = this._filledIds[e] || this._items.get() || m(this.itemTemplate);
            !this.comp || t.getComponent(l) instanceof this.comp || (t.removeComponent(l), t.addComponent(this.comp)), t.removeFromParent(), this.horizontal ? this._layoutHorizontal(t, e) : this._layoutVertical(t, e), this._filledIds[e] = this.adapter._getView(t, e)
          }
          this.dataChanged = !1
        }
        getVisibleRange() {
          if (null == this.adapter) return null;
          let t = this.scrollView.getScrollOffset(),
            e = 0;
          e = this.horizontal ? Math.floor(-t.x / (this._itemWidth + this.spacing.x)) : Math.floor(t.y / (this._itemHeight + this.spacing.y)), e < 0 && (e = 0);
          let i = this.column * (e + this._itemsVisible + this.spawnCount);
          return i >= this.adapter.getCount() && (i = this.adapter.getCount() - 1), [e * this.column, i]
        }
        init() {
          if (this._isInited) return;
          this._isInited = !0, this.scrollView ? (this.content = this.scrollView.content, this.horizontal = this.scrollView.horizontal, this.horizontal ? (this.scrollView.vertical = !1, this.content.getComponent(g).anchorX = 0, this.content.getComponent(g).anchorY = this.content.parent.getComponent(g).anchorY, this.content.setPosition(u(0 - this.content.parent.getComponent(g).width * this.content.parent.getComponent(g).anchorX, 0, 0))) : (this.scrollView.vertical = !0, this.content.getComponent(g).anchorX = this.content.parent.getComponent(g).anchorX, this.content.getComponent(g).anchorY = 1, this.content.setPosition(u(0, this.content.parent.getComponent(g).height * this.content.parent.getComponent(g).anchorY, 0)))) : console.error("ListView need a scrollView for showing.");
          let t = this._items.get() || m(this.itemTemplate);
          this._items.put(t), this._itemHeight = t.getComponent(g).height || 10, this._itemWidth = t.getComponent(g).width || 10, this.horizontal ? this._itemsVisible = Math.ceil((this.content.parent.getComponent(g).width - this.margin.x - this.margin.width) / (this._itemWidth + this.spacing.x)) : this._itemsVisible = Math.ceil((this.content.parent.getComponent(g).height - this.margin.y - this.margin.height) / (this._itemHeight + this.spacing.y))
        }
      }).prototype, "itemTemplate", [C], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), y = e(V.prototype, "spacing", [f], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return p(0, 0)
        }
      }), x = e(V.prototype, "margin", [w], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return d(0, 0, 0, 0)
        }
      }), v = e(V.prototype, "spawnCount", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 2
        }
      }), z = e(V.prototype, "column", [H], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), L = e(V.prototype, "scrollView", [_], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), R = e(V.prototype, "emptyView", [b], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), I = V)) || I));
      class M {
        constructor(t, e = 0) {
          this.listView = null, this.pageOfItems = 0, this.currentPageIndex = 0, this.onPageChangeListener = null, this.listView = t, this.pageOfItems = e
        }
        getPageCount() {
          if (!this.listView.getAdapter()) return 1;
          const t = this.listView.getAdapter().getCount();
          this.pageOfItems || (this.pageOfItems = this.listView.getVisibleElements()), this.pageOfItems <= 0 && (this.pageOfItems = 1);
          return Math.ceil(t / this.pageOfItems)
        }
        getCurrentPage() {
          return this.currentPageIndex
        }
        prePage() {
          this.currentPageIndex--, this.currentPageIndex < 0 && (this.currentPageIndex = 0), this.listView.scrollToPage(this.currentPageIndex, 0, .2), this.onPageChangeListener && this.onPageChangeListener(this.listView, this.currentPageIndex)
        }
        nextPage() {
          this.currentPageIndex++;
          const t = this.getPageCount();
          this.currentPageIndex > t - 1 && (this.currentPageIndex = t - 1), this.listView.scrollToPage(this.currentPageIndex, 0, .2), this.onPageChangeListener && this.onPageChangeListener(this.listView, this.currentPageIndex)
        }
        canPrePage() {
          return this.currentPageIndex > 0
        }
        canNextPage() {
          return this.currentPageIndex < this.getPageCount() - 1
        }
        setOnPageChangeListener(t) {
          this.onPageChangeListener = t
        }
      }
      t("Pager", M);
      t("AbsAdapter", class {
        constructor() {
          this.onItemClickListener = void 0, this.dataSet = [], this._callback = null
        }
        setDataSet(t) {
          this.dataSet = t || []
        }
        getCount() {
          return this.dataSet ? this.dataSet.length : 0
        }
        getItem(t) {
          return this.dataSet[t]
        }
        _getView(t, e) {
          return this._callback.call(this, t, this.dataSet[e], e), t
        }
        setCallback(t) {
          this._callback = t
        }
        setOnItemClickListener(t, e) {
          this.onItemClickListener = e ? t.bind(e) : t
        }
        onItemClicked(t, e) {
          this.onItemClickListener && this.onItemClickListener(this, e)
        }
      }), n._RF.pop()
    }
  }
}));