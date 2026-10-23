System.register("chunks:///_virtual/WKaiye1.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSEditBoxeb.ts", "./WNewMing1.ts", "./WShiyong.ts", "./blController.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, i, o, n, g, a, h, l, c, u, b, d, r, _;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, o = t.gs_boss, n = t.gs_tabpr, g = t.gs_bmsg, a = t.gs_sql, h = t.gs_computer, l = t.gs_btxt, c = t.gs_phone
    }, function(t) {
      u = t.ZGGSEditBoxeb
    }, function(t) {
      b = t.WNewMing1
    }, function(t) {
      d = t.WShiyong
    }, function(t) {
      r = t.blController
    }, function(t) {
      _ = t.minFunc
    }],
    execute: function() {
      var p, m;
      s._RF.push({}, "608c5UY/odFA7ohNlc/X1bG", "WKaiye1", void 0);
      const {
        ccclass: y,
        property: f
      } = e;
      t("WKaiye1", y("WKaiye1")(((m = class t extends i {
        constructor(...t) {
          super(...t), this.rongqi = null, this.pag1 = null, this.pag2 = null, this.co_pic_tt = null, this.co_name_ttt = null, this.co_first_ttt = null, this.co_cname_tt = null, this.fitshInit = !0
        }
        xiabanye() {
          o.bossDieWin(t, 2)
        }
        load() {
          _.guideZT(1), this.co_pic_tt = n.co_pic.objs[100100], this.co_name_ttt = n.co_name.objs, this.co_first_ttt = n.co_first.objs, this.co_cname_tt = n.co_cname.values, this.rongqi = this.zgNodegzt("top"), this.pag1 = this.zgNodegzt("pag1", this.rongqi), this.pag2 = this.zgNodegzt("pag2", this.rongqi)
        }
        init() {
          try {
            window.__dshlog && window.__dshlog("K1 init combm=" + (a.combmInfo && Object.keys(a.combmInfo.objs).length) + " g=" + a.config.guideId + " has1001=" + !!(a.combmInfo && a.combmInfo.objs[1001]) + " job1=" + !!(n.co_job && n.co_job.objs))
          } catch (e0) {}
          g.send(2100, !0), this.showWKaiye1(1)
        }
        showWKaiye1(t) {
          try {
            window.__dshlog && window.__dshlog("K1 showWKaiye1 " + t)
          } catch (e0) {}
          a.config.guideId = t, r.kpIdSend(a.config.guideId), _.guideStep(a.config.guideId), this.pag1.active = 1 == t, this.pag2.active = 2 == t, 1 == t ? this.showPage1() : 2 == t && this.showPage2(1)
        }
        showPage1() {
          let t = 100100,
            s = h.sjNumgs(0, this.co_pic_tt.length - 1),
            e = this.co_pic_tt[s],
            i = e.sex,
            u = this.co_name_ttt[i],
            d = h.sjNumArrgs2(0, u.length - 1, 2),
            r = u[d[0]],
            p = u[d[0]],
            m = r.name1,
            y = p.name2,
            f = this.zgNodegzt("YMNode", this.pag1),
            N = this.zgNodegzt("icon_layout", this.pag1),
            x = this.zgNodegzt("content", this.pag1),
            S = n.co_post.zgTableKey(t),
            L = this.co_first_ttt[i],
            T = h.sjNumgs(0, L.length - 1),
            M = L[T];
          this.fitshInit && (this.fitshInit = !1, T = h.sjTabGetgs([3, 9]), M = n.co_first.zgTableKey(T)), console.log("co_first_t", M);
          let Y = n.co_job.zgTableKey(M.job),
            j = h.sjNumgs(M.pot1, M.pot2),
            I = h.sjNumgs(M.amb1, M.amb2),
            z = h.sjNumgs(M.edu1, M.edu2),
            w = n.co_edu.zgTableKey(z),
            W = h.binarySearch("co_amb", "amb1", "amb2", I),
            B = h.binarySearch("co_pot", "pot1", "pot2", j).get_money + Y.get_total,
            G = h.sjNumgs(M.att1, M.att2) + Y.totalAtt,
            K = h.sjNumgs(M.hp1, M.hp2) + Y.totalHp,
            k = h.sjNumgs(M.def1, M.def2) + Y.totalDef,
            v = h.sjNumgs(M.speed1, M.speed2) + Y.totalSpeed;
          this.gsSprHtsst("spr/human", e.pic, this.pag1), this.gsTxtLblgs("xing2/Label", m, f), this.gsTxtLblgs("xing4/Label", y, f), this.gsTxtGradelbl("node_3/YMLabel2", S.grade, S.name, N), this.gsEmpGonghao("node_6/YMLabel2", 1, N), this.gsTxtStrbyNums("node_5/YMLabel2", 4, j, N), this.gsTxtStrbyNums("node_9/YMLabel2", 4, I, N), this.gsTxtLblgs("node_2/YMLayout/YMLabel2", l.gsNorStringType(27), N), this.gsTxtStrbyNums("node_8/YMLabel2", 101, 0, N), this.gsTxtGradelbl("node_11/YMLabel2", w.grade, w.name, N), this.gsTxtStrbyNums("node_7/YMLabel2", 102, W.exp, N), this.gsTxtStrbyNums("node_4/YMLabel2", 102, B, N), this.gsTxtStrbyNums("node_1/YMLayout/YMLabel3", 4, K, x), this.gsTxtStrbyNums("node_2/YMLayout/YMLabel3", 4, G, x), this.gsTxtStrbyNums("node_3/YMLayout/YMLabel3", 4, k, x), this.gsTxtStrbyNums("node_4/YMLayout/YMLabel3", 4, v, x), this.gsButtongbs("btn1", (() => {
            let t = {
              xing: m,
              ming: y,
              type: 1,
              _func: t => {
                m = t, this.gsTxtLblgs("xing2/Label", m, f)
              }
            };
            o.bossWshow(b, t)
          }), f), this.gsButtongbs("btn2", (() => {
            let t = {
              xing: m,
              ming: y,
              type: 2,
              _func: t => {
                y = t, this.gsTxtLblgs("xing4/Label", y, f)
              }
            };
            o.bossWshow(b, t)
          }), f), this.gsButtongbs("YMButton1", (() => {
            this.showPage1()
          }), this.pag1);
          let P = !1;
          const LL = t2 => {
            try {
              window.__dshlog && window.__dshlog("K1 " + t2)
            } catch (e0) {}
          };
          this.gsButtongbs("YMButton2", (() => {
            LL("tap YMButton2 name=" + m + y);
            _.checkIlllegal(m + y, (s => {
              LL("cb ret=" + s);
              if (!s) return void g.send(202, l.gsNorStringType(20));
              let o = {
                name: m + y,
                sex: i,
                sprId: e.pic,
                postId: t,
                depId: 1001,
                jobId: Y.id,
                amb: I,
                pot: j,
                edu: z,
                eva: 1,
                join: h.huoquYueNum() - 1,
                iPot: 1,
                iAmb: 1
              };
              if (P) return void LL("dup ignored");
              P = !0;
              LL("s1 combm begin");
              try {
                let cb = a.findObjById("combmInfo", 1001);
                cb || (cb = a.createNewObj2("combmInfo", 1001), cb.depId = 100100, LL("s1 combm created")), LL("s1 ok")
              } catch (e1) {
                LL("s1 ERR " + e1)
              }
              LL("s2 addWorker begin");
              let n2 = null;
              try {
                n2 = h.addWorkerNewInfo(o), LL("s2 ok id=" + (n2 && n2.id) + " name=" + (n2 && n2.name))
              } catch (e2) {
                LL("s2 ERR " + e2)
              }
              try {
                n2 && (a.findObjById("combmInfo", 1001).workId = n2.id, LL("s2b workId=" + n2.id))
              } catch (e2b) {
                LL("s2b ERR " + e2b)
              }
              if (n2) {
                try {
                  let u = a.findObjById("workInfo2", n2.id);
                  u && (u.att = G, u.hp = K, u.def = k, u.speed = v), LL("s3 ok")
                } catch (e3) {
                  LL("s3 ERR " + e3)
                }
              }
              try {
                _.developUnlockSend(1), _.developUnlockSend(2), LL("s4 ok")
              } catch (e4) {
                LL("s4 ERR " + e4)
              }
              try {
                n2 && c.runOneAttr(n2.id), LL("s5 ok")
              } catch (e5) {
                LL("s5 ERR " + e5)
              }
              try {
                g.send(2002), LL("s6 ok")
              } catch (e6) {
                LL("s6 ERR " + e6)
              }
              try {
                this.showWKaiye1(2), LL("s7 page2 OK active=" + this.pag1.active + "/" + this.pag2.active)
              } catch (e7) {
                LL("s7 ERR " + e7 + " | " + (e7 && e7.stack))
              }
            }))
          }), this.pag1)
        }
        showPage2(t) {
          try {
            window.__dshlog && window.__dshlog("K1 showPage2 " + t)
          } catch (e0) {}
          let s = null;
          if (t) s = n.co_cname.zgTableKey(t);
          else {
            let t = h.sjNumgs(0, this.co_cname_tt.length - 1);
            s = this.co_cname_tt[t]
          }
          console.log(s, "公司");
          let e = this.zgNodegzt("lbl_info2/YMEditBox", this.pag2).getComponent(u);
          e.string = s.name, this.gsButtongbs("btn1", (() => {
            this.showPage2(0)
          }), this.pag2), this.gsButtongbs("YMButton1", (() => {
            const L2 = t2 => {
              try {
                window.__dshlog && window.__dshlog("K1 " + t2)
              } catch (e0) {}
            };
            L2("tap YMButton1(公司名) txt=" + e.string);
            h.checkComName(e.string, (t => {
              L2("checkComName ret=" + t);
              _.checkIlllegal(e.string, (s => {
                L2("ill ret=" + s);
                if (!s) return void g.send(202, l.gsNorStringType(20));
                try {
                  _.guideZT(2), a.base.name = t, L2("p1 ok name=" + t)
                } catch (e1) {
                  L2("p1 ERR " + e1)
                }
                try {
                  g.send(101), a.config.guideId = 10, o.bossPshow(d), L2("p2 ok")
                } catch (e2) {
                  L2("p2 ERR " + e2)
                }
                try {
                  h.afterInsetWokrer(), c.afterChangeSb(1001), L2("p3 ok")
                } catch (e3) {
                  L2("p3 ERR " + e3)
                }
                try {
                  r.pingjiaSend(1), r.bumenSend(1001), L2("p4 ok")
                } catch (e4) {
                  L2("p4 ERR " + e4)
                }
                try {
                  this.xiabanye(), L2("p5 next OK")
                } catch (e5) {
                  L2("p5 ERR " + e5 + " | " + (e5 && e5.stack))
                }
              }))
            }))
          }), this.pag2)
        }
      }).m_name = "WKaiye1", p = m)) || p);
      s._RF.pop()
    }
  }
}));