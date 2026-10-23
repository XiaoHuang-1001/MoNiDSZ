System.register("chunks:///_virtual/ZGGSComputeCom.ts", ["cc", "./ZGGSTablePrint.ts", "./ZGGSHttpsWww.ts", "./ZGGSBookTxt.ts", "./ZGGSBoxMsg.ts", "./ZGGSSqlMyg.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var e, r, n, s, o, a, i, g;
  return {
    setters: [function(t) {
      e = t.cclegacy, r = t.js
    }, function(t) {
      n = t.ZGGSTablePrint
    }, function(t) {
      s = t.ZGGSHttpsWww
    }, function(t) {
      o = t.ZGGSBookTxt
    }, function(t) {
      a = t.ZGGSBoxMsg
    }, function(t) {
      i = t.ZGGSSqlMyg
    }, function(t) {
      g = t.minFunc
    }],
    execute: function() {
      e._RF.push({}, "8c686PutehLsaqMb/XaoXaU", "ZGGSComputeCom", void 0);
      let l = t("gs_sql", i);
      class u extends o {}
      t("gs_btxt", u);
      class h extends s {}
      t("gs_www", h);
      let c = t("gs_tabpr", n);
      class m extends a {}
      t("gs_bmsg", m);
      class d {
        static checkTabNeedgs(t) {
          return 0 == t[0] || (1 == t[0] && l.base.gold >= t[1] || (t[0] == this.diamondType && l.base.diamond >= t[1] || 3 == t[0] && l.base.jinka >= t[1]))
        }
        static constNeedTabgs(t, e, r) {
          let n = {
            type: t[0]
          };
          0 == t[0] ? e && e() : 1 == t[0] ? l.base.gold >= t[1] ? (l.base.gold -= t[1], m.send(203, n), e && e(), r ? g.xioahaoSend(t[0], t[1], l.base.gold, r) : console.error("钞票消耗类型没写")) : (console.log("灵石不足"), m.send(204, n)) : t[0] == this.diamondType ? l.base.diamond >= t[1] ? h.countGGNum(2, t[1], (function() {
            m.send(203, n), e && e(), r ? g.xioahaoSend(t[0], t[1], l.base.diamond, r) : console.error("钻石消耗类型没写")
          })) : (console.log("元宝不足"), m.send(204, n)) : 3 == t[0] && (l.base.jinka >= t[1] ? (l.base.jinka -= t[1], m.send(203, n), e && e(), r ? g.xioahaoSend(t[0], t[1], l.base.jinka, r) : console.error("金卡消耗类型没写")) : (console.log("金卡不足"), m.send(204, n)))
        }
        static getNeedTabgs(t, e, r) {
          let n = {
            type: t[0],
            count: t[1]
          };
          0 == t[0] ? e && e() : 1 == t[0] ? (l.base.gold += t[1], m.send(203, n), e && e(), r ? g.huodeSend(t[0], t[1], l.base.gold, r) : console.error("钞票消耗类型没写")) : t[0] == this.diamondType ? h.countGGNum(1, t[1], (function() {
            m.send(203, n), m.send(207), e && e(), r ? g.huodeSend(t[0], t[1], l.base.diamond, r) : console.error("钻石消耗类型没写")
          })) : 3 == t[0] && (l.base.jinka += t[1], m.send(203, n), e && e(), r ? g.huodeSend(t[0], t[1], l.base.jinka, r) : console.error("金卡消耗类型没写"))
        }
        static zgTimeSysgt(t = 0) {
          return t ? (new Date).valueOf() + t : (new Date).valueOf()
        }
        static todayTimeCheck(t) {
          let e = new Date,
            r = "" + e.getFullYear() + e.getMonth() + e.getDate(),
            n = new Date(t);
          return r == "" + n.getFullYear() + n.getMonth() + n.getDate()
        }
        static gsTimelast(t) {
          t = t || 0, t = Math.floor(t / 1e3);
          var e = Math.floor(t / 86400);
          t -= 86400 * e;
          var r = Math.floor(t / 3600);
          t -= 3600 * r;
          for (var n = Math.floor(t / 60), s = [e, r, n, t -= 60 * n], o = s[0] > 0 ? s[0] + u.gsNorStringType(23) : "", a = 1; a < s.length; a++)(s[a] > 0 || "" != o || a > 1) && (o += (s[a] > 9 ? "" : "0") + s[a] + ":");
          return o.slice(0, o.length - 1)
        }
        static gsNumValueShow(t) {
          var e = 0,
            r = "";
          if ((t >= 10 ** 52 || t <= -(10 ** 52)) && (e = 1, r = u.gsNorStringNum(5) + u.gsNorStringNum(12)), t >= 10 ** 48 || t <= -(10 ** 48)) e = t / 10 ** 48, r = u.gsNorStringNum(12);
          else if (t >= 10 ** 44 || t <= -(10 ** 44)) e = t / 10 ** 44, r = u.gsNorStringNum(11);
          else if (t >= 10 ** 40 || t <= -(10 ** 40)) e = t / 10 ** 40, r = u.gsNorStringNum(10);
          else if (t >= 10 ** 36 || t <= -(10 ** 36)) e = t / 10 ** 36, r = u.gsNorStringNum(9);
          else if (t >= 10 ** 32 || t <= -(10 ** 32)) e = t / 10 ** 32, r = u.gsNorStringNum(8);
          else if (t >= 10 ** 28 || t <= -(10 ** 28)) e = t / 10 ** 28, r = u.gsNorStringNum(7);
          else if (t >= 10 ** 24 || t <= -(10 ** 24)) e = t / 10 ** 24, r = u.gsNorStringNum(6);
          else if (t >= 1e20 || t <= -1e20) e = t / 1e20, r = u.gsNorStringNum(1);
          else if (t >= 1e16 || t <= -1e16) e = t / 1e16, r = u.gsNorStringNum(2);
          else if (t >= 1e12 || t <= -1e12) e = t / 1e12, r = u.gsNorStringNum(3);
          else if (t >= 1e8 || t <= -1e8) e = t / 1e8, r = u.gsNorStringNum(4);
          else if (t >= 1e5 || t <= -1e5) e = t / 1e4, r = u.gsNorStringNum(5);
          else {
            if (-1 == t.toString().indexOf(".")) return t.toString();
            e = t
          }
          var n = e.toString().split(".");
          return n.length > 1 && n[1].length > 1 && parseInt(n[1][1]) > 0 ? n[0] + "." + n[1][0] + n[1][1] + r : n.length > 1 && n[1].length > 0 && parseInt(n[1][0]) > 0 ? n[0] + "." + n[1][0] + r : n[0] + r
        }
        static cnTxtCheck(t) {
          return !!/^[\u4E00-\u9FA5]+$/.test(t)
        }
        static objToArrshow(t, e) {
          let r = [];
          if (1 == e)
            for (let e in t) r.push(t[e]);
          else
            for (let e in t) r.push(e);
          return r
        }
        static sjTabGetgs(t) {
          return t[Math.floor(Math.random() * t.length)]
        }
        static sjNumgs(t, e) {
          return Math.round(Math.random() * (e - t) + t)
        }
        static sjNumArrgs(t, e, r) {
          let n = [];
          for (let s = r; s > 0; s--) {
            let r = Math.round(Math.random() * (e - t) + t);
            r < t && (r = t), n.push(r)
          }
          return n
        }
        static sjNumArrgs2(t, e, r) {
          let n = [],
            s = () => {
              let r = !1,
                o = Math.round(Math.random() * (e - t) + t);
              o < t && (o = t);
              for (let t = 0; t < n.length; t++) o == n[t] && (r = !0, s());
              r || n.push(o)
            };
          for (let t = 0; t < r; t++) s();
          return n
        }
        static zgTimeByDay(t) {
          t = t || 0, t = parseInt(t);
          let e = new Date(t);
          return e.getFullYear() + "." + (e.getMonth() + 1) + "." + e.getDate()
        }
        static zgTimeByDayArr(t) {
          t = t || 0, t = parseInt(t);
          let e = new Date(t);
          return [e.getFullYear(), e.getMonth() + 1, e.getDate()]
        }
        static zgTimeBySec(t) {
          t = t || 0, t = parseInt(t);
          let e = new Date(t);
          var r = e.getHours(),
            n = e.getMinutes(),
            s = e.getSeconds();
          return (r > 9 ? "" : "0") + r + ":" + (n > 9 ? "" : "0") + n + ":" + (s > 9 ? "" : "0") + s
        }
        static zgTimeByTxt(t) {
          let e = new Date(t);
          return ("" + e.getFullYear() + (e.getMonth() + 1 >= 10 ? e.getMonth() + 1 : "0" + (e.getMonth() + 1)) + (e.getDate() >= 10 ? e.getDate() : "0" + e.getDate())).toString()
        }
        static zgTimeByStrgs(t) {
          let e = new Date(t),
            n = "%s/%s/%s %s:%s:%s";
          return n = r.formatStr(n, this.zgTimeByStrgs2(e.getFullYear()), this.zgTimeByStrgs2(e.getMonth() + 1), this.zgTimeByStrgs2(e.getDate()), this.zgTimeByStrgs2(e.getHours()), this.zgTimeByStrgs2(e.getMinutes()), this.zgTimeByStrgs2(e.getSeconds())), n
        }
        static zgTimeByStrgs2(t) {
          return t < 10 ? `0${t}` : `${t}`
        }
        static gsRichTxtshow(t, e) {
          return u.gsStringByParam(t, this.gsNumValueShow(e))
        }
        static zgStrRichGradegs(t, e) {
          let n = u.gsStringByTwo(1),
            s = u.gsColorByGradesg(e)[3];
          return n = r.formatStr(n, s, t), n
        }
        static checkSJArr(t) {
          let e = t.length;
          for (var r = 0; r < e; r++) {
            var n = Math.floor(Math.random() * (r + 1));
            [t[r], t[n]] = [t[n], t[r]]
          }
          return t
        }
        static getRandomElements(t, e) {
          const r = [...t],
            n = r.length;
          e = Math.max(0, Math.min(e, n));
          for (let t = 0; t < e; t++) {
            const e = Math.floor(Math.random() * (n - t)) + t;
            [r[t], r[e]] = [r[e], r[t]]
          }
          return r.slice(0, e)
        }
        static generateRandomLengths() {
          let t, e, r;
          do {
            t = Math.floor(4 * Math.random()) + 1;
            const n = 8 - t,
              s = Math.max(1, n - 4),
              o = Math.min(4, n - 1);
            s > o || (e = Math.floor(Math.random() * (o - s + 1)) + s, r = n - e)
          } while (r < 1 || r > 4);
          if (t + e + r !== 8 || ![t, e, r].every((t => t >= 1 && t <= 4))) throw new Error("Invalid lengths generated");
          return [t, e, r]
        }
        static randomSplit(t, e, r, n) {
          const s = t.length;
          if (e <= 0 || r <= n || n < 1) throw new Error("Invalid parameters: m must be positive, x > y, and y >= 1.");
          if (s < e) throw new Error("n must be greater than m.");
          const o = e * n,
            a = e * r;
          if (s < o || s > a) throw new Error(`Cannot split array: ensure ${o} <= n <= ${a} for given m, x, y.`);
          const i = r - n,
            g = s - e * n,
            l = new Array(e).fill(0);
          let u = g;
          for (; u > 0;) {
            const t = l.map(((t, e) => ({
              delta: t,
              index: e
            }))).filter((({
              delta: t
            }) => t < i)).map((({
              index: t
            }) => t));
            if (0 === t.length) throw new Error("分配失败，无法满足约束条件。");
            l[t[Math.floor(Math.random() * t.length)]]++, u--
          }
          const h = l.map((t => n + t)),
            c = [...t];
          for (let t = c.length - 1; t > 0; t--) {
            const e = Math.floor(Math.random() * (t + 1));
            [c[t], c[e]] = [c[e], c[t]]
          }
          const m = [];
          let d = 0;
          for (const t of h) m.push(c.slice(d, d + t)), d += t;
          return m
        }
        static binarySearch(t, e, r, n) {
          let s = 0,
            o = c[t].values,
            a = o.length - 1;
          for (; s <= a;) {
            let t = Math.floor((s + a) / 2),
              i = o[t];
            if (i[e] <= n && n <= i[r]) return i;
            i[e] < n ? s = t + 1 : a = t - 1
          }
          return o[0]
        }
      }
      t("ZGGSComputeCom", d), d.diamondType = 2, e._RF.pop()
    }
  }
}));