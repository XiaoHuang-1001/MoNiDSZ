System.register("chunks:///_virtual/VHBgshiMapFu.ts", ["cc"], (function(t) {
  "use strict";
  var e;
  return {
    setters: [function(t) {
      e = t.cclegacy
    }],
    execute: function() {
      e._RF.push({}, "a564aaWjZpFJ5pQoVGuTHv/", "VHBgshiMapFu", void 0);
      let i = 0,
        h = -280;
      class l {
        constructor(t, e = null, i = 0, h = 1) {
          this.name = null, this.x = 0, this.y = 0, this.children = null, this.parent = null, this.mod = null, this.thread = null, this.ancestor = null, this.change = null, this.shift = null, this._lmost_sibling = null, this.number = null, this.width = null, this.height = null, this.minX = null, this.maxX = null, this.offset = null, this.info = null, this.name = t.name, this.x = -1, this.y = i, this.width = t.width || 207, this.height = t.height || 0, this.children = t.children.map(((t, e) => new l(t, this, i + 1, e + 1))), this.info = t.info, this.parent = e, this.thread = null, this.mod = 0, this.ancestor = this, this.change = this.shift = 0, this._lmost_sibling = null, this.number = h, this.minX = 0, this.maxX = 0, this.offset = 0
        }
        left() {
          return this.thread || (this.children.length > 0 ? this.children[0] : null)
        }
        right() {
          return this.thread || (this.children.length > 0 ? this.children[this.children.length - 1] : null)
        }
        left_brother() {
          let t = null;
          if (this.parent)
            for (let e = 0; e < this.parent.children.length; e++) {
              let i = this.parent.children[e];
              if (i === this) return t;
              t = i
            }
          return t
        }
        get_lmost_sibling() {
          return !this._lmost_sibling && this.parent && this !== this.parent.children[0] && (this._lmost_sibling = this.parent.children[0]), this._lmost_sibling
        }
        get leftmost_sibling() {
          return this.get_lmost_sibling()
        }
      }
      t("DrawTree", l);
      class n {}
      t("ThreeShow", n), n.firstwalk = t => {
        if (0 === t.children.length) t.leftmost_sibling ? t.x = t.left_brother().x + i : t.x = 0;
        else {
          let e = t.children[0];
          t.children.forEach((t => {
            n.firstwalk(t), e = n.apportion(t, e)
          })), n.execute_shifts(t);
          let h = (t.children[0].x + t.children[t.children.length - 1].x) / 2,
            l = t.left_brother();
          l ? (t.x = l.x + i, t.mod = t.x - h) : t.x = h
        }
        return t
      }, n.apportion = (t, e) => {
        let h = t.left_brother();
        if (h) {
          let l = t,
            r = t,
            s = h,
            o = t.leftmost_sibling,
            a = l.mod,
            c = r.mod,
            d = s.mod,
            f = o.mod;
          for (; s.right() && l.left();) {
            s = s.right(), l = l.left(), o = o.left(), r = r.right(), r.ancestor = t;
            let h = s.x + d + i - (l.x + a);
            if (h > 0) {
              let i = n.ancestor(s, t, e);
              n.move_subtree(i, t, h), a += h, c += h
            }
            a += l.mod, c += r.mod, d += s.mod, f += o.mod
          }
          s.right() && !r.right() ? (r.thread = s.right(), r.mod += d - c) : (l.left() && !o.left() && (o.thread = l.left(), o.mod += a - f), e = t)
        }
        return e
      }, n.move_subtree = (t, e, i) => {
        let h = i / (e.number - t.number);
        e.change -= h, e.shift += i, t.change += h, e.x += i, e.mod += i
      }, n.execute_shifts = t => {
        let e = 0,
          i = 0;
        for (let h = t.children.length - 1; h >= 0; h--) {
          let l = t.children[h];
          l.x += i, l.mod += i, e += l.change, i += l.shift + e
        }
      }, n.ancestor = (t, e, i) => e.parent.children.includes(t.ancestor) ? t.ancestor : i, n.second_walk = (t, e = 0, i = 0, l = 0) => {
        t.x += e, t.y = i * h + l + h, t.children.forEach((h => {
          n.second_walk(h, e + t.mod, i + 1, l + t.height)
        }))
      }, n.third_walk = t => {
        let e = t.x - t.width / 2,
          h = t.x + t.width / 2;
        if (t.children.length > 0) {
          let i = 1 / 0,
            l = -1 / 0;
          t.children.forEach((t => {
            n.third_walk(t), t.minX < i && (i = t.minX), t.maxX > l && (l = t.maxX)
          })), t.minX = e < i ? e : i, t.maxX = h > l ? h : l
        } else t.minX = e, t.maxX = h;
        if (t.left_brother() && t.minX < t.left_brother().maxX + i) {
          let e = t.left_brother().maxX - t.minX + i;
          t.offset = e, t.x += e, t.minX += e, t.maxX += e
        }
      }, n.fourth_walk = (t, e = 0) => {
        t.x += e, t.children.forEach((i => {
          n.fourth_walk(i, e + t.offset)
        }));
        let i = t.children.length;
        if (i <= 0) return;
        let h = (t.children[0].x + t.children[i - 1].x) / 2;
        t.x = h
      }, n.buchheim = t => {
        let e = n.firstwalk(t);
        return n.second_walk(e), n.third_walk(e), n.fourth_walk(e), console.log("树打印", e), e
      }, e._RF.pop()
    }
  }
}));