System.register("chunks:///_virtual/ZGGSComputerFun.ts", ["cc", "./ZGGSComputeCom.ts", "./ZGGSTablePrint.ts", "./ZGGSBoxMsg.ts", "./ZGGSBookTxt.ts", "./ZGGSSqlMyg.ts", "./cyz_sword.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var e, o, n, i, r, s, d, c, a;
  return {
    setters: [function(t) {
      e = t.cclegacy, o = t.js
    }, function(t) {
      n = t.ZGGSComputeCom
    }, function(t) {
      i = t.ZGGSTablePrint
    }, function(t) {
      r = t.ZGGSBoxMsg
    }, function(t) {
      s = t.ZGGSBookTxt
    }, function(t) {
      d = t.ZGGSSqlMyg
    }, function(t) {
      c = t.check
    }, function(t) {
      a = t.minFunc
    }],
    execute: function() {
      e._RF.push({}, "20381WZYDRJt6aOUeqF7CzR", "ZGGSComputerFun", void 0);
      let l = t("gs_sql", d),
        f = t("gs_tabpr", i);
      class h extends r {}
      t("gs_bmsg", h);
      class I extends s {}
      t("gs_btxt", I);
      class u extends n {
        static loadJian() {
          this.co_property_ttt = f.co_property.objs
        }
        static getDanjiInfo() {
          let t = l.config.qudao,
            e = f.co_danji.zgTableKey(t);
          return e || (e = f.co_danji.zgTableKey(0)), e
        }
        static shalongDeal() {
          let t = l.chahuahui;
          t.count += 1;
          let e = Date.now();
          1 == t.count ? t.time = e + 1e3 * t.cd1 : 2 == t.count || 3 == t.count ? t.time = e : 4 == t.count && (t.state = 2);
          let o = f.co_dati.values,
            n = o[this.sjNumgs(0, o.length - 1)];
          t.id = n.id, h.send(5501)
        }
        static idToGonghao(t) {
          return t < 10 ? `00${t}` : t < 100 ? `0${t}` : t
        }
        static huoquYueNum() {
          return 12 * l.base.year + l.base.month
        }
        static getYpArr(t) {
          let e = l.findObjById("workInfo3", t),
            o = e.yongpin.split("|");
          0 == e.yongpin.length && (o = []);
          for (let t = 0; t < o.length; t++) o[t] = 1 * o[t];
          return o
        }
        static getYpNumArr(t) {
          let e = l.findObjById("workInfo3", t),
            o = e.ypNum.split("|");
          0 == e.ypNum.length && (o = []);
          for (let t = 0; t < o.length; t++) o[t] = 1 * o[t];
          return o
        }
        static getYpArr2(t) {
          let e = this.getYpArr(t),
            o = this.getYpNumArr(t),
            n = [];
          for (let t = 0; t < e.length; t++) {
            let i = {
              id: Number(e[t]),
              num: Number(o[t]) || 1
            };
            n.push(i)
          }
          return n
        }
        static saveYpFunc(t, e) {
          let o = l.findObjById("workInfo3", t),
            n = this.getYpArr(t),
            i = this.getYpNumArr(t),
            r = n.indexOf(e);
          if (r >= 0) i[r] += 1;
          else {
            n.push(e), i.push(1);
            let t = n.join("|");
            1 == n.length && (t = `${e}`), o.yongpin = t
          }
          let s = i.join("|");
          1 == i.length && (s = `${i[0]}`), o.ypNum = s;
          let d = f.co_prop.zgTableKey(e),
            c = {
              att: d.att,
              hp: d.hp,
              def: d.def,
              speed: d.speed
            };
          p.addWorkerAttr(t, c)
        }
        static addPinzhi(t, e) {
          let o = l.findObjById("workInfo3", t);
          o.pinzhi.push(e);
          let n = f.co_character.zgTableKey(e);
          o.add[n.type] += n.value, 2 == n.type ? p.countPot(t) : 1 == n.type ? p.countAmb(t) : 4 == n.type ? p.countAtt(t) : 3 == n.type ? p.countHp(t) : 5 == n.type ? p.countDef(t) : 6 == n.type && p.countSpeed(t)
        }
        static checkComName(t, e) {
          let o = "";
          "" == t ? (o = I.gsNorStringType(17), h.send(202, o)) : " " == t ? (o = I.gsNorStringType(21), h.send(202, o)) : t.length > 12 ? (o = I.gsStringHelpIn(2), h.send(202, o)) : c(t) ? (o = I.gsNorStringType(20), h.send(202, o)) : this.cnTxtCheck(t) ? e(t) : (o = I.gsStringHelpIn(2), h.send(202, o))
        }
        static getZanRen(t) {
          let e = l.workInfo1.objs,
            o = [];
          for (let n in e) {
            let i = e[n];
            if ("100100" != i.postId && "100300" != i.postId) {
              if (1 == t);
              else if (2 == t) {
                if (l.likeInfo.weekInfo[i.id]) continue
              } else if (3 == t && l.likeInfo.monthInfo[i.id]) continue;
              o.push(i)
            }
          }
          return o
        }
        static getAllEarn() {
          let t = l.workInfo1.objs,
            e = 0;
          for (let o in t) e += l.ALLWORKER[t[o].id].earn;
          return e
        }
        static haveJoinStr(t) {
          let e = this.huoquYueNum() - t,
            o = e % 12,
            n = Math.floor(e / 12),
            i = I.gsStringHelpIn(5),
            r = "";
          return n > 0 && (r += `${n}${i[1]}`), o > 0 && (r += `${o}${i[2]}`), 0 == r.length && (r = `1${i[2]}`), r
        }
        static haveJoinNum(t) {
          return this.huoquYueNum() - t
        }
        static zongxinshui() {
          let t = 0;
          for (let e in l.ALLWORKER) t += l.ALLWORKER[e].salary || 0;
          return t
        }
        static kaoheUnlock(t) {
          l.findObjById("kaoheInfo", t).lock = 1
        }
        static shebeiChange(t, e, o) {
          let n = l.findObjById("shebeiInfo", t),
            i = 0;
          o && (i = o.exp);
          let r = n.add - i + e.exp;
          n.add = r, p.afterChangeSb(n.id)
        }
        static zichanChange(t, e, o) {
          let n = l.findObjById("zichanInfo", t),
            i = 0;
          o && (i = o.amb);
          let r = n.add - i + e.amb;
          n.add = r, p.zichanJiachang(n.id)
        }
        static afterInsetWokrer() {
          let t = this.gsAllNumGet(),
            e = l.zichanInfo.objs;
          for (let o in e) {
            let n = e[o];
            if (!n.lock) {
              let e = this.co_property_ttt[n.id][n.lv];
              t >= e.num && (1 == n.id && (n.lv = 1, this.zichanChange(n.id, e, null)), n.lock = 1)
            }
          }
          let o = l.shichangInfo.objs;
          for (let e in o) {
            let n = o[e];
            if (!n.lock) {
              t >= f.co_market.zgTableKey(n.id).num && (n.lock = 1)
            }
          }
        }
        static afterDeleteWorker(t) {
          let e = l.findObjById("workInfo1", t);
          if (e.shichangPos[0]) {
            let t = l.findObjById("shichangInfo", e.shichangPos[0]),
              o = t.num.indexOf(e.id);
            o >= 0 && (t.num[o] = 0)
          }
          if (e.kaohePos) {
            let t = l.findObjById("kaoheInfo", e.kaohePos),
              o = t.num.indexOf(e.id);
            o >= 0 && (t.num[o] = 0)
          }
          let n = l.companyInfo.upArr.indexOf(t);
          n >= 0 && (l.companyInfo.upArr.splice(n, 1), l.companyInfo.upLv.splice(n, 1)), l.deleteObjById("workInfo1", t), l.deleteObjById("workInfo2", t), l.deleteObjById("workInfo3", t), l.cjInfo.roleCount--, l.cjInfo.roleCount <= 1 && (l.cjInfo.roleCount = 1);
          let i = this.initTimeNumCd();
          if (i) {
            console.log("时间重置流逝", i), h.send(2200);
            let t = o.formatStr(I.gsStringByTwo(106), i[0], i[1]);
            h.send(3101, t)
          }
        }
        static gsBmWorkById2(t, e) {
          let o = [];
          const n = l.findObjById("combmInfo", t);
          return n ? (n.workId > 0 && o.push(n.workId), n.comArr.length > 0 ? (n.comArr.forEach((t => {
            let n = this.gsBmWorkById2(t, e);
            o = o.concat(n)
          })), o) : n.workArr.length >= e ? o.concat(n.workArr) : o) : o
        }
        static getNewOpen(t) {
          if (!t) return !0;
          let e = !1;
          return l.base.openIcon && (e = -1 != l.base.openIcon.indexOf(t)), e
        }
        static gsAllNumGet() {
          return Object.keys(l.workInfo1.objs).length || 0
        }
        static initTimeNumCd() {
          let t = this.gsAllNumGet();
          t <= 0 && (t = 1);
          const e = this.binarySearch("co_numcd", "num1", "num2", t);
          if (e) {
            let o = 100;
            l.base.jashuTime && l.base.jashuTime > 0 ? o = 50 : l.base.jashuTime = 0;
            let n = e.cd * o;
            if (n != l.base.sec) return l.base.sec = n, [t, e.cd]
          }
          return null
        }
        static addWorkerNewInfo(t = {}, e = 0) {
          let n = l.workInfo1.sysId,
            i = l.createNewObj("workInfo1", n);
          l.createNewObj("workInfo2", i.id), l.createNewObj("workInfo3", i.id);
          for (let e in t) null != i[e] && "id" != e && (i[e] = t[e]);
          if (t.depId) {
            let o = t.depId;
            this.addBmInfoByWork(o, n, e)
          }
          l.cjInfo.roleCount++, l.cache.cjCheckType[3] = l.cjInfo.roleCount;
          let r = this.initTimeNumCd();
          if (r) {
            console.log("时间重置流逝", r), h.send(2200);
            let t = o.formatStr(I.gsStringByTwo(106), r[0], r[1]);
            h.send(3101, t)
          }
          return a.developUnlockSend(3), i
        }
        static addBmInfoByWork(t, e, o = 0) {
          let n = l.findObjById("combmInfo", t);
          if (n)
            if (2 == o) {
              if (n.workId = e, l.jsInfo.cyInfo.indexOf(`${t}`) >= 0)
                for (let e = 0; e < l.jsInfo.info.length; e++) {
                  let o = l.jsInfo.info[e];
                  if (o[0] == `${t}` || o[1] == `${t}`) {
                    l.jsInfo.info.splice(e, 1);
                    break
                  }
                }
            } else if (3 == o || 4 == o) {
            let t = n.workArr.indexOf(0);
            t < 0 && (t = n.workArr.length), n.workArr[t] = e, h.send(2005, o)
          } else if (n.workId != e) {
            let s = n.workArr.indexOf(0);
            s < 0 ? n.workArr.push(e) : n.workArr[s] = e;
            d.combmInfo.depOpen.indexOf(t) < 0 && d.combmInfo.depOpen.push(t)
          }
        }
        static delBmInfoByWork(t, e, o = 0) {
          let n = l.findObjById("combmInfo", t);
          if (n)
            if (2 == o || n.workId == e) n.workId = 0;
            else if (3 == o || 4 == o) {
            let t = n.workArr.indexOf(e);
            n.workArr[t] = 0
          } else {
            let t = n.workArr.indexOf(e);
            console.log("删除", t), t >= 0 && n.workArr.splice(t, 1)
          }
          if (e > 1 && (this.delWorkInfo(e), l.jsInfo.cyInfo.indexOf(e) >= 0))
            for (let t = 0; t < l.jsInfo.info.length; t++) {
              let o = l.jsInfo.info[t];
              if (o[0] == e || o[1] == e) {
                l.jsInfo.info.splice(t, 1);
                break
              }
            }
        }
        static delWorkInfo(t) {
          this.afterDeleteWorker(t), p.deleteAllWorkerInfo(t), p.countAllWorker()
        }
        static gsBmIdleWork(t) {
          let e = l.findObjById("combmInfo", t);
          if (e && e.comArr.length <= 0) {
            const t = f.co_post.objs[1][e.id];
            if (!t) return null;
            const v = e.workArr.filter(x => x > 0).length;
            if (t.num > v) return {
              num: t.num - v,
              id: t.id
            }
          }
          return null
        }
        static gsAllBmWork(t = !1) {
          let e = [];
          for (const o in l.combmInfo.objs) {
            const n = l.combmInfo.objs[o];
            if (t) n.workId <= 0 && 1002 != n.id && 1003 != n.id && e.push(n.depId);
            else if (n.comArr.length <= 0) {
              let t = this.gsBmIdleWork(n.id);
              t && e.push(t)
            }
          }
          return e
        }
        static gsBmLvById(t) {
          const e = l.findObjById("combmInfo", t);
          let o = 1;
          return e.comArr.length > 0 ? (e.comArr.forEach((t => {
            let e = this.gsBmLvById(t);
            e >= o && (o = e)
          })), o + 1) : 1
        }
        static gsBmWorkById(t) {
          const e = l.findObjById("combmInfo", t);
          let o = [];
          return e ? (e.workId > 0 && o.push(e.workId), e.comArr.length > 0 ? (e.comArr.forEach((t => {
            let e = this.gsBmWorkById(t);
            o = o.concat(e)
          })), o) : o.concat(e.workArr)) : o
        }
        static initShangzhanInfo() {
          l.shangzhanInfo.lv++;
          const t = f.co_war.values[l.shangzhanInfo.lv - 1];
          if (t) {
            l.shangzhanInfo.curInfo.id = t.id, l.shangzhanInfo.curInfo.fightInfo = [], l.shangzhanInfo.curInfo.spr = l.shangzhanInfo.curInfo.nextSpr;
            const e = f.co_war_member.objs[t.id];
            for (let t = 0; t < e.length; t++) {
              const o = e[t];
              let n = {
                att: this.sjNumgs(o.att1, o.att2),
                hp: this.sjNumgs(o.hp1, o.hp2),
                def: this.sjNumgs(o.def1, o.def2),
                speed: this.sjNumgs(o.speed1, o.speed2)
              };
              n.allNum = n.att + n.hp + n.def + n.speed, l.shangzhanInfo.curInfo.fightInfo.push(n)
            }
            const o = f.co_war.values[l.shangzhanInfo.lv];
            o ? this.initNextShangzhanInfo(o.id) : l.shangzhanInfo.curInfo.nextSpr = ""
          } else l.shangzhanInfo.curInfo.id = 99999, l.shangzhanInfo.curInfo.spr = "", l.shangzhanInfo.curInfo.nextSpr = "", l.shangzhanInfo.curInfo.fightInfo = []
        }
        static initNextShangzhanInfo(t) {
          const e = f.co_war_member.objs[t];
          let o = [],
            n = "",
            i = "";
          for (let t = 0; t < e.length; t++) {
            const r = e[t];
            let s = f.co_pic.objs[r.post_id];
            s || (s = f.co_pic.objs[0]);
            let d = !0;
            for (; d;) {
              const r = this.sjTabGetgs(s);
              if (o.indexOf(r.id) < 0) {
                d = !1, o.push(r.id);
                const s = this.sjTabGetgs(f.co_name.objs[r.sex]),
                  c = this.sjTabGetgs(f.co_name.objs[r.sex]);
                i += s.name1 + c.name2, n = n + "" + (r.id - 2e3), t != e.length - 1 && (n += "|", i += "|")
              }
            }
          }
          l.shangzhanInfo.curInfo.nextSpr = n + "-" + i
        }
        static getWorkArrInfo(t = []) {
          let e = [];
          const o = l.workInfo1.objs;
          for (const n in o) {
            const i = o[n];
            t.indexOf(i.id) >= 0 || e.push(i.id)
          }
          return e
        }
        static getWorkArrchucaiStep(t = [], e = 1) {
          let o = [];
          const n = l.workInfo1.objs;
          for (const i in n) {
            const r = n[i];
            if (1 == r.id || r.chucai > 0) continue;
            if (t.indexOf(r.id) >= 0) continue;
            f.co_job.zgTableKey(r.jobId).step == e && o.push(r.id)
          }
          return o
        }
        static getWorkArrCcaiSzhao(t = []) {
          let e = [];
          const o = l.workInfo1.objs;
          for (const n in o) {
            const i = o[n];
            i.chucai > 0 || i.isEdu > 0 || (t.indexOf(i.id) >= 0 || e.push(i.id))
          }
          return e
        }
        static getJobStepWorkArrInfo(t = []) {
          let e = {};
          const o = l.workInfo1.objs;
          for (const n in o) {
            const i = o[n];
            if (i.chucai || (i.chucai = 0), 1 == i.id || i.chucai > 0) continue;
            const r = f.co_job.zgTableKey(i.jobId);
            t.indexOf(r.step) >= 0 && (e[r.step] = e[r.step] || [], e[r.step].push(i.id))
          }
          return e
        }
        static getPostTypeWorkArrInfo(t = [], e = []) {
          let o = [];
          const n = l.workInfo1.objs;
          for (const i in n) {
            const r = n[i];
            if (t.indexOf(r.id) >= 0) continue;
            const s = f.co_post.zgTableKey(r.postId);
            s && e.indexOf(s.type) >= 0 && o.push(r.id)
          }
          return o
        }
        static addPingfenGs(t = 0) {
          if (l.base.pingfen += t, l.base.pingfen <= 0 && (l.base.pingfen = 0), 0 != t) {
            let e = {
              type: 4,
              count: t
            };
            h.send(203, e), h.send(1201)
          }
        }
        static conSortWorkAttr(t, e) {
          const o = p.returnOneAttr(t),
            n = p.returnOneAttr(e);
          return !(o.pot >= n.pot) && (!(o.amb >= n.amb) && !(o.allNum >= n.allNum - 1))
        }
        static getshichangInfoById(t) {
          let e = t.num,
            o = 0;
          for (let t = 0; t < e.length; t++) e[t] && (o += 1);
          return o
        }
      }
      t("ZGGSComputerFun", u), u.co_property_ttt = null;
      class p {
        static loadJian() {
          this.co_check_lv_ttt = f.co_check_lv.objs, this.co_market_lv_ttt = f.co_market_lv.objs, this.initFinish = !1, this.initSBExpAdd(), l.ALLWORKER = {
            0: {
              id: 0,
              salary: 0,
              amb: 0,
              pot: 0,
              workExp: 0,
              att: 0,
              hp: 0,
              def: 0,
              speed: 0,
              earn: 0,
              allNum: 0,
              potId: 0,
              ambId: 0,
              mgAdd: 0
            }
          };
          let t = l.workInfo1.objs;
          for (let e in t) this.runOneAttr(t[e].id);
          this.countDirector(), this.countSecretary(), this.countAllWorker(), this.initFinish = !0
        }
        static runOneAttr(t) {
          l.ALLWORKER[t] = l.ALLWORKER[t] || JSON.parse(JSON.stringify(l.ALLWORKER[0])), l.ALLWORKER[t].id = t, this.countSalary(t), this.countPot(t), this.countAmb(t), this.countAtt(t), this.countHp(t), this.countDef(t), this.countSpeed(t)
        }
        static returnOneAttr(t) {
          return l.ALLWORKER[t] || l.ALLWORKER[0]
        }
        static gameStartfun() {}
        static getWorkerAttr(t) {
          return this.returnOneAttr(t)
        }
        static addWorkerAttr(t, e) {
          let o = e || {},
            n = l.findObjById("workInfo1", t),
            i = l.findObjById("workInfo2", t);
          for (let e in o) o[e] && ("pot" == e ? (n[e] += o[e], n[e] <= 0 && (n[e] = 0), this.countPot(t)) : "amb" == e ? (n[e] += o[e], n[e] <= 0 && (n[e] = 0), this.countAmb(t)) : "att" == e ? (i[e] += o[e], n[e] <= 0 && (n[e] = 1), this.countAtt(t)) : "hp" == e ? (i[e] += o[e], n[e] <= 0 && (n[e] = 1), this.countHp(t)) : "def" == e ? (i[e] += o[e], n[e] <= 0 && (n[e] = 1), this.countDef(t)) : "speed" == e && (i[e] += o[e], n[e] <= 0 && (n[e] = 1), this.countSpeed(t)))
        }
        static countSalary(t) {
          let e = l.findObjById("workInfo1", t),
            o = 0;
          if (1 != t && e) {
            let t = f.co_job.zgTableKey(e.jobId),
              n = f.co_hire_eva && f.co_hire_eva.zgTableKey ? f.co_hire_eva.zgTableKey(e.eva) : null;
            // 单机版加固：旧存档/引导创建的员工 eva 可能为 0（co_hire_eva 无 k0），
            // 原来这里会 TypeError 中断整个属性重算链，导致招聘、存档、换部门全部卡死。
            n || (n = f.co_hire_eva.zgTableKey(1)), n || (n = {
              pay_add: 0
            });
            t || (t = {
              pay: 0
            }), o = Math.ceil(t.pay * (1 + n.pay_add / 100)), o += e.qianAdd || 0
          }
          l.ALLWORKER[t] && (l.ALLWORKER[t].salary = o)
        }
        static countZpEarn(t, e, o, n) {
          let i = 0,
            r = f.co_job.zgTableKey(t),
            s = f.co_post.zgTableKey(e),
            d = u.binarySearch("co_pot", "pot1", "pot2", o);
          if (0 == s.stratum) 100100 == s.id ? i = Math.ceil((d.get_money + r.get_total) * (1 + (l.SECRETARYADD + l.DIRECTORADD) / 1e4)) : (100200 == s.id || 100300 == s.id) && (i = Math.ceil((d.get_money + r.get_total) * (1 + l.DIRECTORADD / 1e4)));
          else {
            let t = l.findObjById("combmInfo", n),
              e = l.ALLDEPT[t.id];
            i = Math.ceil((d.get_money + r.get_total) * (1 + (e + l.DIRECTORADD) / 1e4))
          }
          return i
        }
        static countPot(t) {
          let e = l.findObjById("workInfo1", t),
            o = l.findObjById("workInfo3", t).add[2] || 0,
            n = Math.ceil((e.pot + e.iPot) * (1 + o / 100));
          l.ALLWORKER[t].pot = n;
          let i = u.binarySearch("co_pot", "pot1", "pot2", l.ALLWORKER[t].pot);
          l.ALLWORKER[t].potId != i.id && (l.ALLWORKER[t].potId = i.id, this.initFinish && (console.log("重新计算赚钱能力 潜力的计算"), this.loopRefreshWorker(t)))
        }
        static countAmb(t) {
          let e = l.findObjById("workInfo1", t),
            o = l.findObjById("workInfo3", t).add[1] || 0,
            n = l.findObjById("zichanInfo", 1).add;
          if (1002 == e.depId) {
            n += l.findObjById("zichanInfo", 4).add
          } else if (1003 == e.depId) {
            n += l.findObjById("zichanInfo", 5).add
          } else {
            if (l.findObjById("combmInfo", e.depId).workId == t) {
              n += l.findObjById("zichanInfo", 3).add
            } else {
              n += l.findObjById("zichanInfo", 2).add
            }
          }
          let i = Math.ceil((e.amb + n + e.iAmb) * (1 + o / 100));
          l.ALLWORKER[t] || l.ALLWORKER[0] && (l.ALLWORKER[t] = JSON.parse(JSON.stringify(l.ALLWORKER[0]))), l.ALLWORKER[t] && (l.ALLWORKER[t].amb = i, this.countWorkExp(t))
        }
        static countWorkExp(t) {
          l.ALLWORKER[t] || (l.ALLWORKER[0] && (l.ALLWORKER[t] = JSON.parse(JSON.stringify(l.ALLWORKER[0]))));
          if (!l.ALLWORKER[t]) return;
          let e = l.findObjById("workInfo1", t),
            o = l.findObjById("workInfo3", t),
            n = u.binarySearch("co_amb", "amb1", "amb2", l.ALLWORKER[t].amb),
            i = o.chaoAdd;
          if (e.kaohePos) {
            let t = l.findObjById("kaoheInfo", e.kaohePos);
            i += this.co_check_lv_ttt[t.id][t.lv - 1].add
          }
          let r = 0;
          if (e.shichangPos[0]) {
            let t = l.findObjById("shichangInfo", e.shichangPos[0]);
            r += this.co_market_lv_ttt[t.id][t.lv - 1].exp
          }
          r += l.ALLDEPTEXP[e.depId] || 0;
          let s = Math.ceil((n.exp + r) * (1 + i / 100));
          l.ALLWORKER[t].workExp = s, l.ALLWORKER[t].ambId != n.id && (l.ALLWORKER[t].ambId = n.id, this.initFinish && this.loopRefreshWorker(t))
        }
        static countAtt(t) {
          let e = l.findObjById("workInfo2", t),
            o = l.findObjById("workInfo3", t).add[4] || 0,
            n = Math.ceil(e.att * (1 + o / 100));
          l.ALLWORKER[t].att = n, this.fourAttrCount(t)
        }
        static countHp(t) {
          let e = l.findObjById("workInfo2", t),
            o = l.findObjById("workInfo3", t).add[3] || 0,
            n = Math.ceil(e.hp * (1 + o / 100));
          l.ALLWORKER[t].hp = n, this.fourAttrCount(t)
        }
        static countDef(t) {
          let e = l.findObjById("workInfo2", t),
            o = l.findObjById("workInfo3", t).add[5] || 0,
            n = Math.ceil(e.def * (1 + o / 100));
          l.ALLWORKER[t].def = n, this.fourAttrCount(t)
        }
        static countSpeed(t) {
          let e = l.findObjById("workInfo2", t),
            o = l.findObjById("workInfo3", t).add[6] || 0,
            n = Math.ceil(e.speed * (1 + o / 100));
          l.ALLWORKER[t].speed = n, this.fourAttrCount(t)
        }
        static fourAttrCount(t) {
          let e = 0;
          for (let o = 0; o < this.fourAttr.length; o++) e = e + l.ALLWORKER[t][this.fourAttr[o]] || 0;
          l.ALLWORKER[t].allNum = e
        }
        static loopDepCheck(t) {
          if (1002 != t.id && 1003 != t.id) {
            l.ALLDEPT[t.id] = 0;
            let e = 0,
              o = f.co_dep.zgTableKey(t.id);
            if (o.higher_id > 0 && (e = l.ALLDEPT[o.higher_id] || 0), t.workId && t.workId > 1) {
              let o = (l.ALLWORKER[t.workId] || {}).ambId;
              if (o) {
                e = (f.co_amb.zgTableKey(o) || {get_money_add1:0}).get_money_add1 + e
              }
            }
            l.ALLDEPT[t.id] = e
          }
          if (t.workId && this.countEarn(t.workId), t.comArr.length > 0)
            for (let e = 0; e < t.comArr.length; e++) {
              let o = l.combmInfo.objs[t.comArr[e]];
              this.loopDepCheck(o)
            } else
              for (let e = 0; e < t.workArr.length; e++) t.workArr[e] > 0 && this.countEarn(t.workArr[e])
        }
        static countEarn(t) {
          if (!l.ALLWORKER[t]) return;
          let e = 0,
            o = l.findObjById("workInfo1", t),
            n = f.co_post.zgTableKey(o.postId) || {stratum:0,id:0},
            i = f.co_pot.zgTableKey(l.ALLWORKER[t].potId);
          i || (i = u.binarySearch("co_pot", "pot1", "pot2", l.ALLWORKER[t].pot));
          let r = f.co_job.zgTableKey(o.jobId) || {get_total:0};
          if (0 == n.stratum) 100100 == n.id ? e = Math.ceil((i.get_money + r.get_total + o.makeAdd) * (1 + (l.SECRETARYADD + l.DIRECTORADD) / 1e4)) : (100200 == n.id || 100300 == n.id) && (e = Math.ceil((i.get_money + r.get_total + o.makeAdd) * (1 + l.DIRECTORADD / 1e4)));
          else {
            let n = l.findObjById("combmInfo", o.depId),
              s = l.ALLDEPT[n.id] || 0;
            if (n.workId == t) {
              let t = (l.ALLWORKER[n.workId] || {}).ambId;
              if (t) {
                let e = f.co_amb.zgTableKey(t) || {get_money_add1:0};
                s = l.ALLDEPT[n.id] - e.get_money_add1
              }
            }
            e = Math.ceil((i.get_money + r.get_total + o.makeAdd) * (1 + (s + l.DIRECTORADD) / 1e4))
          }
          let s = l.ALLWORKER[t].earn || 0;
          l.ALLWORKER[t].earn = e, h.send(2003, t), l.TOTALEARN += e - s, l.cache.cjCheckType[5] = l.TOTALEARN
        }
        static countSecretary() {
          let t = l.combmInfo.objs[1002];
          if (t) {
            let e = 0;
            for (let o = 0; o < t.workArr.length; o++) {
              let n = t.workArr[o];
              if (n > 0) {
                let t = (l.ALLWORKER[n] || {}).ambId;
                if (t) {
                  e = e + (f.co_amb.zgTableKey(t) || {get_money_add2:0}).get_money_add2 || 0
                }
              }
            }
            l.SECRETARYADD = e
          }
        }
        static countDirector() {
          let t = l.combmInfo.objs[1003];
          if (t) {
            let e = 0;
            for (let o = 0; o < t.workArr.length; o++) {
              let n = t.workArr[o];
              if (n > 0) {
                let t = (l.ALLWORKER[n] || {}).ambId;
                if (t) {
                  e = e + (f.co_amb.zgTableKey(t) || {get_money_add3:0}).get_money_add3 || 0
                }
              }
            }
            l.DIRECTORADD = e
          }
        }
        static loopRefreshWorker(t) {
          let e = l.findObjById("workInfo1", t);
          if (1002 == e.depId) return this.countSecretary(), void this.countEarn(1);
          if (1003 == e.depId) return this.countDirector(), void this.countAllWorker();
          {
            let o = l.combmInfo.objs[e.depId];
            o.workId == t ? this.loopDepCheck(o) : this.countEarn(t)
          }
        }
        static countAllWorker() {
          for (let t = 1003; t >= 1001; t--) {
            let e = l.combmInfo.objs[t];
            e && this.loopDepCheck(e)
          }
        }
        static zichanJiachang(t) {
          let e = l.workInfo1.objs,
            o = [];
          for (let n in e) {
            let i = e[n];
            f.co_post.zgTableKey(i.postId).type + 1 != t && 1 != t || o.push(i)
          }
          for (let t = 0; t < o.length; t++) this.countAmb(o[t].id)
        }
        static initSBExpAdd() {
          let t = l.shebeiInfo.objs;
          for (let e in t) {
            let o = t[e],
              n = l.findObjById("combmInfo", o.id);
            this.loopDepExpAdd(o, n)
          }
        }
        static loopDepExpAdd(t, e, o) {
          if (!e) return;
          l.ALLDEPTEXP[e.id] = 0;
          let n = 0;
          if (t && (n = t.add), l.ALLDEPTEXP[e.id] = n, e.comArr.length > 0 && t.id > 1003)
            for (let o = 0; o < e.comArr.length; o++) {
              let n = l.combmInfo.objs[e.comArr[o]];
              this.loopDepExpAdd(t, n)
            }
        }
        static countAllSbExp(t) {
          let e = l.findObjById("combmInfo", t);
          e.workId && this.countWorkExp(e.workId);
          for (let t = 0; t < e.workArr.length; t++) e.workArr[t] > 0 && this.countWorkExp(e.workArr[t]);
          if (e.comArr.length > 0 && t > 1003)
            for (let t = 0; t < e.comArr.length; t++) {
              let o = l.combmInfo.objs[e.comArr[t]];
              this.countAllSbExp(o.id)
            }
        }
        static afterChangeSb(t) {
          let e = l.findObjById("shebeiInfo", t),
            o = l.findObjById("combmInfo", e.id);
          this.loopDepExpAdd(e, o), this.countAllSbExp(t)
        }
        static addFoutAttr(t) {
          let e = l.findObjById("workInfo1", t);
          if (e.shichangPos[0]) {
            let o = l.findObjById("workInfo2", t),
              n = l.findObjById("shichangInfo", e.shichangPos[0]),
              i = this.co_market_lv_ttt[n.id][n.lv - 1];
            i.hp > 0 ? (o.hp += i.hp, this.countHp(t)) : i.att > 0 ? (o.att += i.att, this.countAtt(t)) : i.def > 0 ? (o.def += i.def, this.countDef(t)) : i.speed > 0 && (o.speed += i.speed, this.countSpeed(t))
          }
        }
        static addExpUpById(t, e = 0) {
          t = Number(t);
          let o = l.findObjById("workInfo1", t),
            n = l.ALLWORKER[t].workExp || 0;
          o.exp += n * e;
          let i = {
              curjob: o.jobId,
              nexjob: o.jobId,
              upNum: 0,
              addExp: n * e,
              addDay: e
            },
            r = {
              att: 0,
              hp: 0,
              def: 0,
              speed: 0
            },
            s = !1,
            d = !1,
            c = o.jobId < 30 ? f.co_job.zgTableKey(o.jobId + 1) : null,
            a = o.jobId;
          for (; c && o.jobId < 30 && o.exp >= c.exp;) s || (s = !0), 1 != c.lv || d || -1 != l.companyInfo.upArr.indexOf(t) || (d = !0, l.companyInfo.upLv.push(a)), o.exp -= c.exp, o.jobId += 1, i.nexjob = c.id, i.upNum++, r.att += c.att, r.hp += c.hp, r.def += c.def, r.speed += c.speed, c = o.jobId < 30 ? f.co_job.zgTableKey(o.jobId + 1) : null;
          return s && (1 != t && (l.companyInfo.lastUp[t] = 1, d && l.companyInfo.upArr.push(t)), this.addWorkerAttr(o.id, r), this.countSalary(o.id), this.countEarn(o.id)), i
        }
        static deleteAllWorkerInfo(t) {
          delete l.ALLWORKER[t]
        }
      }
      t("ZGGSPhonein", p), p.co_check_lv_ttt = null, p.co_market_lv_ttt = null, p.initFinish = !1, p.fourAttr = ["att", "hp", "def", "speed"], e._RF.pop()
    }
  }
}));