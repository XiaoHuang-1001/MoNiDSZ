System.register("chunks:///_virtual/ZGGSRedHdian.ts", ["cc", "./ZGGSComputerFun.ts", "./ZGGSTablePrint.ts", "./ZGGSSqlMyg.ts", "./ZGGSPaipxxu.ts", "./ZGGSOfficeFx.ts"], (function(e) {
  "use strict";
  var t, n, i, c, a, o;
  return {
    setters: [function(e) {
      t = e.cclegacy
    }, function(e) {
      n = e.ZGGSComputerFun
    }, function(e) {
      i = e.ZGGSTablePrint
    }, function(e) {
      c = e.ZGGSSqlMyg
    }, function(e) {
      a = e.ZGGSPaipxxu
    }, function(e) {
      o = e.gs_phone
    }],
    execute: function() {
      t._RF.push({}, "bf352LRABVMvLEUciPO5aFu", "ZGGSRedHdian", void 0);
      let r = e("gs_computer", n),
        s = e("gs_sql", c),
        l = e("gs_tabpr", i);
      class h {
        static loadBlack() {
          this.co_property_ttt = l.co_property.objs, this.co_market_lv_ttt = l.co_market_lv.objs, this.co_check_lv_ttt = l.co_check_lv.objs, this.co_check_tt = l.co_check.objs, this.co_device_ttt = l.co_device.objs
        }
        static youRedPoint(e) {
          let t = s.youjian.arr2,
            n = s.youjian.arr1;
          if (!e || 2 == e)
            for (let e = 0; e < t.length; e++)
              if (1 == t[e].state) return !0;
          if (!e || 1 == e)
            for (let e = 0; e < n.length; e++)
              if (1 == n[e].state) return !0
        }
        static zichanBlack() {
          return this.zichanBlack0()
        }
        static zichanBlack0() {
          let e = !1,
            t = s.zichanInfo.objs,
            n = r.gsAllNumGet();
          for (let i in t)
            if (e = this.zichanBlack1(t[i], n), e) break;
          return e
        }
        static zichanBlack1(e, t) {
          let n = this.co_property_ttt[e.id][e.lv];
          return n && t >= n.num && r.checkTabNeedgs(n.need)
        }
        static shenzaoRed0() {
          return this.shenzaoRed1()
        }
        static shenzaoRed1() {
          let e = s.upEduInfo.arr,
            t = !1;
          for (let n = 0; n < e.length; n++)
            if (e[n].day <= 0) {
              t = !0;
              break
            } return t
        }
        static chogndianRed0() {
          return this.chogndianRed1()
        }
        static chogndianRed1() {
          let e = s.chargeInfo.objs,
            t = !1;
          for (let n in e)
            if (e[n].day <= 0) {
              t = !0;
              break
            } return t
        }
        static fuliUpRed0() {
          return this.fuliUpRed1()
        }
        static fuliUpRed1() {
          let e = !1,
            t = r.gsAllNumGet(),
            n = l.co_benefits.values,
            i = l.co_benefits_lv.objs;
          for (let c = 0; c < n.length; c++) {
            let a = n[c],
              o = s.findObjById("fuliInfo", a.id),
              l = i[a.id][o.lv];
            if (e = l && t >= a.number && r.checkTabNeedgs(l.need), e) break
          }
          return e
        }
        static chuangyeRed0() {
          return this.chuangyeRed1()
        }
        static chuangyeRed1() {
          let e = !1,
            t = s.chuangyeInfo.objs;
          for (let n in t) {
            let i = t[n];
            if (e = i.ljhb > 0 || !i.new, e) break
          }
          return e
        }
        static jingshengInfo() {
          return !!r.getNewOpen(100009) && s.jsInfo.info.length > 0
        }
        static chengjiuInfo() {
          let e = !1;
          if (!r.getNewOpen(100001)) return e;
          for (const t in s.cjInfo.lockCj) {
            const n = s.cjInfo.lockCj[t];
            for (const t of n)
              if (s.cjInfo.stateCj.indexOf(t) < 0) return e = !0, e
          }
          return e
        }
        static chucaiInfo() {
          if (!r.getNewOpen(100004)) return false;
          for (const e of s.chucaiInfo.ccInfo)
            if (e.day <= 0) return !0;
          return false
        }
        static shangzInfo() {
          return !!r.getNewOpen(100006) && (s.cache.shangzhanRed || s.cache.shangzhanActRed)
        }
        static shangzActRed() {
          if (!r.getNewOpen(100006)) return;
          console.log("商战可战斗红点刷新");
          let e = [...Object.keys(s.workInfo1.objs)].sort(a.paiMingSort(4)),
            t = 0,
            n = 0;
          for (let i = 0; i < 6; i++) {
            let c = e[i];
            c && (t += o.returnOneAttr(c).allNum || 0);
            let a = s.shangzhanInfo.curInfo.fightInfo[i];
            a && (n += a.allNum || 0)
          }
          t >= 1.5 * n && (s.cache.shangzhanActRed = !0)
        }
        static shichangRed() {
          return this.shichangRed0()
        }
        static shichangRed0() {
          let e = !1,
            t = s.shichangInfo.objs;
          for (let n in t)
            if (e = this.shichangRed2(t[n]) || this.shichangRed3(t[n]), e) break;
          return e
        }
        static shichangRed2(e) {
          let t = !1,
            n = this.co_market_lv_ttt[e.id][e.lv];
          return n && (t = e.lock && r.checkTabNeedgs(n.need)), t
        }
        static shichangRed3(e) {
          let t = s.workInfo1.objs,
            n = !1;
          for (let e in t)
            if (!t[e].shichangPos[0]) {
              n = !0;
              break
            } let i = e.lock && n;
          if (i) {
            i = !1;
            for (let t = 0; t < e.lv; t++)
              if (!e.num[t]) {
                i = !0;
                break
              }
          }
          return i
        }
        static kaoheRed() {
          return this.kaoheRed1()
        }
        static kaoheRed1() {
          let e = s.kaoheInfo.objs,
            t = !1;
          for (let n in e)
            if (t = this.kaoheRed2(e[n]) || this.kaoheRed3(e[n]), t) break;
          return t
        }
        static kaoheRed2(e) {
          let t = !1,
            n = this.co_check_lv_ttt[e.id][e.lv];
          return n && e.lock && (t = r.checkTabNeedgs(n.need)), t
        }
        static kaoheRed3(e) {
          let t = !1,
            n = s.workInfo1.objs;
          for (let e in n) {
            if (!n[e].kaohePos) {
              t = !0;
              break
            }
          }
          let i = e.lock && t;
          if (i) {
            i = !1;
            for (let t = 0; t < e.lv; t++)
              if (!e.num[t]) {
                i = !0;
                break
              }
          }
          return i
        }
        static shebeiRed() {
          return this.shebeiRed1()
        }
        static shebeiRed1() {
          let e = s.shebeiInfo.objs,
            t = !1;
          for (let n in e)
            if (t = this.shebeiRed2(e[n]), t) break;
          return t
        }
        static shebeiRed2(e) {
          let t = !1,
            n = e.id,
            i = this.co_device_ttt[n];
          if (!i) return !1;   // 分公司新部门在 co_device 里没有配表，直接跳过（否则每帧抛异常刷屏）
          if (s.combmInfo.objs[n])
            for (let n = 1; n <= 6; n++) {
              let c = i[n][e.pos[n]];
              if (c && (t = r.checkTabNeedgs(c.need), t)) break
            }
          return t
        }
        static qiandaoRed() {
          let e = !1;
          if (!r.getNewOpen(100001)) return e;
          let t = s.qiandaoInfo;
          for (let n = 1; n <= 7; n++)
            if (t.day >= n) {
              if (!t.award[n]) {
                e = !0;
                break
              }
            } return e
        }
        static pingjiaRed() {
          let e = !1,
            t = s.base.pingfen,
            n = s.pingjiaInfo,
            i = l.co_title.zgTableKey(n.titId + 1);
          return i && t >= i.power && (e = !0), e
        }
      }
      e("ZGGSRedHdian", h), h.co_property_ttt = null, h.co_market_lv_ttt = null, h.co_check_lv_ttt = null, h.co_check_tt = null, h.co_device_ttt = null, t._RF.pop()
    }
  }
}));