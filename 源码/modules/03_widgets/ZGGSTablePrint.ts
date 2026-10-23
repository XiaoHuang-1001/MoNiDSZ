System.register("chunks:///_virtual/ZGGSTablePrint.ts", ["cc", "./co_dep.ts", "./co_device.ts", "./co_job.ts", "./co_post.ts", "./co_property.ts", "./co_training.ts", "./co_qiandao.ts", "./co_event_rate.ts", "./co_character.ts", "./co_pic.ts", "./co_prop.ts", "./co_post_des.ts", "./co_name.ts", "./co_edu.ts", "./co_hire_eva.ts", "./co_market.ts", "./co_market_lv.ts", "./co_check_lv.ts", "./co_check.ts", "./co_first.ts", "./co_pot.ts", "./co_amb.ts", "./co_cname.ts", "./co_report.ts", "./co_title.ts", "./co_emote.ts", "./co_inspire.ts", "./co_raise.ts", "./co_senior.ts", "./co_war.ts", "./co_war_member.ts", "./co_team.ts", "./co_team_award.ts", "./co_accomplish.ts", "./co_open.ts", "./co_numcd.ts", "./co_banquet.ts", "./co_banquet_award.ts", "./co_negotiate.ts", "./co_serve.ts", "./co_serve_step.ts", "./co_egress.ts", "./co_year.ts", "./co_year_award.ts", "./co_edu_up.ts", "./co_resign.ts", "./co_slack.ts", "./co_summit.ts", "./co_dep_event.ts", "./co_super.ts", "./co_book.ts", "./co_bubble.ts", "./co_bubble_des.ts", "./co_dhm.ts", "./co_danji.ts", "./co_gonggao.ts", "./co_dati.ts", "./co_huodong.ts", "./co_class.ts", "./co_study.ts", "./co_benefits.ts", "./co_benefits_lv.ts", "./co_industry.ts", "./co_industry_company.ts", "./co_staff_company.ts"], (function(t) {
  "use strict";
  var e, o, _, s, c, i, r, n, a, p, u, d, l, b, h, g, f, y, S, m, j, T, v, w, k, N, q, x, z, G, O, A, F, J, P, R, Z, D, I, L, H, K, M, Q, V, B, C, E, U, W, X, Y, $, tt, et, ot, _t, st, ct, it, rt, nt, at, pt, ut, dt;
  return {
    setters: [function(t) {
      e = t.cclegacy
    }, function(t) {
      o = t.co_dep
    }, function(t) {
      _ = t.co_device
    }, function(t) {
      s = t.co_job
    }, function(t) {
      c = t.co_post
    }, function(t) {
      i = t.co_property
    }, function(t) {
      r = t.co_training
    }, function(t) {
      n = t.co_qiandao
    }, function(t) {
      a = t.co_event_rate
    }, function(t) {
      p = t.co_character
    }, function(t) {
      u = t.co_pic
    }, function(t) {
      d = t.co_prop
    }, function(t) {
      l = t.co_post_des
    }, function(t) {
      b = t.co_name
    }, function(t) {
      h = t.co_edu
    }, function(t) {
      g = t.co_hire_eva
    }, function(t) {
      f = t.co_market
    }, function(t) {
      y = t.co_market_lv
    }, function(t) {
      S = t.co_check_lv
    }, function(t) {
      m = t.co_check
    }, function(t) {
      j = t.co_first
    }, function(t) {
      T = t.co_pot
    }, function(t) {
      v = t.co_amb
    }, function(t) {
      w = t.co_cname
    }, function(t) {
      k = t.co_report
    }, function(t) {
      N = t.co_title
    }, function(t) {
      q = t.co_emote
    }, function(t) {
      x = t.co_inspire
    }, function(t) {
      z = t.co_raise
    }, function(t) {
      G = t.co_senior
    }, function(t) {
      O = t.co_war
    }, function(t) {
      A = t.co_war_member
    }, function(t) {
      F = t.co_team
    }, function(t) {
      J = t.co_team_award
    }, function(t) {
      P = t.co_accomplish
    }, function(t) {
      R = t.co_open
    }, function(t) {
      Z = t.co_numcd
    }, function(t) {
      D = t.co_banquet
    }, function(t) {
      I = t.co_banquet_award
    }, function(t) {
      L = t.co_negotiate
    }, function(t) {
      H = t.co_serve
    }, function(t) {
      K = t.co_serve_step
    }, function(t) {
      M = t.co_egress
    }, function(t) {
      Q = t.co_year
    }, function(t) {
      V = t.co_year_award
    }, function(t) {
      B = t.co_edu_up
    }, function(t) {
      C = t.co_resign
    }, function(t) {
      E = t.co_slack
    }, function(t) {
      U = t.co_summit
    }, function(t) {
      W = t.co_dep_event
    }, function(t) {
      X = t.co_super
    }, function(t) {
      Y = t.co_book
    }, function(t) {
      $ = t.co_bubble
    }, function(t) {
      tt = t.co_bubble_des
    }, function(t) {
      et = t.co_dhm
    }, function(t) {
      ot = t.co_danji
    }, function(t) {
      _t = t.co_gonggao
    }, function(t) {
      st = t.co_dati
    }, function(t) {
      ct = t.co_huodong
    }, function(t) {
      it = t.co_class
    }, function(t) {
      rt = t.co_study
    }, function(t) {
      nt = t.co_benefits
    }, function(t) {
      at = t.co_benefits_lv
    }, function(t) {
      pt = t.co_industry
    }, function(t) {
      ut = t.co_industry_company
    }, function(t) {
      dt = t.co_staff_company
    }],
    execute: function() {
      e._RF.push({}, "bafceRk4LJLzIDQuMdmVipF", "ZGGSTablePrint", void 0);
      class lt {
        static gsNeedStrp(t, e) {
          if (t.split) {
            for (var o = t.split("|"), _ = 0; _ < o.length; _++) o[_] = e ? o[_] : parseInt(o[_]);
            return o
          }
          return [t]
        }
        static gsTableSettobj(t, e) {
          var o = Object.keys(t),
            _ = [];
          for (var s in t) _.push(t[s]);
          return t.values = _, t.keys = o, t.length = o.length, t.objs = e, t.zgTableKey = function(o, _) {
            return _ >= 0 ? e[o] ? e[o][_ - 1] : null : t["k" + o]
          }, t
        }
        static changeAb1(t) {
          if (2 == t)
            for (let t in this.co_event_rate.values) this.co_event_rate.values[t].rate = this.co_event_rate.values[t].rate2
        }
        static changeAb2(t) {
          if (1 == t)
            for (let t in this.co_numcd.values) this.co_numcd.values[t].cd = this.co_numcd.values[t].cd2
        }
        static _co_staff_company() {
          return this.gsTableSettobj(dt, {})
        }
        static _co_industry() {
          return this.gsTableSettobj(pt, {})
        }
        static _co_industry_company() {
          let t = {};
          for (let e in ut) {
            let o = ut[e];
            t[o.industry_id] = t[o.industry_id] || [], t[o.industry_id].push(o)
          }
          return this.gsTableSettobj(ut, t)
        }
        static _co_benefits() {
          return this.gsTableSettobj(nt, {})
        }
        static _co_benefits_lv() {
          let t = {};
          for (let e in at) {
            let o = at[e];
            o.need = this.gsNeedStrp(o.need, !1), t[o.benefits_id] = t[o.benefits_id] || [], t[o.benefits_id].push(o)
          }
          return this.gsTableSettobj(at, t)
        }
        static _co_study() {
          let t = {};
          for (let e in rt) {
            let o = rt[e];
            t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(rt, t)
        }
        static _co_class() {
          return this.gsTableSettobj(it, {})
        }
        static _co_huodong() {
          let t = {};
          for (let e in ct) {
            let o = ct[e];
            t[o.qudao] = t[o.qudao] || [], t[o.qudao].push(o)
          }
          return this.gsTableSettobj(ct, t)
        }
        static _co_dati() {
          return this.gsTableSettobj(st, {})
        }
        static _co_danji() {
          for (let t in ot) {
            let e = ot[t];
            e.gonggao = this.gsNeedStrp(e.gonggao, !1)
          }
          return this.gsTableSettobj(ot, {})
        }
        static _co_gonggao() {
          return this.gsTableSettobj(_t, {})
        }
        static _co_dhm() {
          let t = {};
          for (let e in et) {
            let o = et[e];
            o.zimu = this.gsNeedStrp(o.zimu, !0), o.reward = this.gsNeedStrp(o.reward, !1), o.weizhi = this.gsNeedStrp(o.weizhi, !1), t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(et, t)
        }
        static _co_bubble() {
          return this.gsTableSettobj($, {})
        }
        static _co_bubble_des() {
          let t = {};
          for (let e in tt) {
            let o = tt[e];
            o.dep_id = this.gsNeedStrp(o.dep_id, !1);
            for (let e = 0; e < o.dep_id.length; e++) t[o.dep_id[e]] = t[o.dep_id[e]] || [], t[o.dep_id[e]].push(o)
          }
          return this.gsTableSettobj(tt, t)
        }
        static _co_resign() {
          let t = {};
          for (let e in C) {
            let o = C[e];
            t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(C, t)
        }
        static _co_edu_up() {
          let t = {};
          for (let e in B) {
            let o = B[e];
            o.need = this.gsNeedStrp(o.need, !1), t[o.edu_id] = t[o.edu_id] || [], t[o.edu_id].push(o)
          }
          return this.gsTableSettobj(B, t)
        }
        static _co_year() {
          let t = {};
          for (let e in Q) {
            let o = Q[e];
            o.need = this.gsNeedStrp(o.need, !1), t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(Q, t)
        }
        static _co_year_award() {
          let t = {};
          for (let e in V) {
            let o = V[e];
            o.des = this.gsNeedStrp(o.des, !0), t[o.grade1] = t[o.grade1] || [], t[o.grade1].push(o)
          }
          return this.gsTableSettobj(V, t)
        }
        static _co_banquet() {
          let t = {};
          for (let e in D) {
            let o = D[e];
            o.need = this.gsNeedStrp(o.need, !1), o.des = this.gsNeedStrp(o.des, !0), t[o.grade] = t[o.grade] || [], t[o.grade].push(o)
          }
          return this.gsTableSettobj(D, t)
        }
        static _co_banquet_award() {
          let t = {};
          for (let e in I) {
            let o = I[e];
            t[o.banquet_id] = t[o.banquet_id] || [], t[o.banquet_id].push(o)
          }
          return this.gsTableSettobj(I, t)
        }
        static _co_raise() {
          return this.gsTableSettobj(z, {})
        }
        static _co_inspire() {
          return this.gsTableSettobj(x, {})
        }
        static _co_title() {
          let t = {},
            e = 1;
          for (let o in N) {
            let _ = N[o];
            _.award = this.gsNeedStrp(_.award, !1), 1 == _.star && (t[e] = _, e++)
          }
          return this.gsTableSettobj(N, t)
        }
        static _co_report() {
          let t = {};
          for (let e in k) {
            let o = k[e];
            t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(k, t)
        }
        static _co_cname() {
          return this.gsTableSettobj(w, {})
        }
        static _co_amb() {
          return this.gsTableSettobj(v, {})
        }
        static _co_pot() {
          return this.gsTableSettobj(T, {})
        }
        static _co_first() {
          let t = {};
          for (let e in j) {
            let o = j[e];
            t[o.sex] = t[o.sex] || [], t[o.sex].push(o)
          }
          return this.gsTableSettobj(j, t)
        }
        static _co_prop() {
          let t = {};
          for (let e in d) {
            let o = d[e];
            t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(d, t)
        }
        static _co_character() {
          let t = {};
          for (let e in p) {
            let o = p[e];
            o.post_type = this.gsNeedStrp(o.post_type, !1);
            for (let e = 0; e < o.post_type.length; e++) t[o.post_type[e]] = t[o.post_type[e]] || [], t[o.post_type[e]].push(o)
          }
          return this.gsTableSettobj(p, t)
        }
        static _co_event_rate() {
          return window.co_event_rate0 = JSON.parse(JSON.stringify(a)), this.gsTableSettobj(a, {})
        }
        static _co_job() {
          let t = 0,
            e = 0,
            o = 0,
            _ = 0,
            c = 0;
          for (let i in s) {
            let r = s[i];
            t += r.get_money, e += r.att, o += r.hp, _ += r.def, c += r.speed, r.get_total = t, r.totalAtt = e, r.totalHp = o, r.totalDef = _, r.totalSpeed = c
          }
          let tab = this.gsTableSettobj(s, {});
          // 职级只有 30 级（P0-C..P9-A）：超出范围的查询回退到最高级，避免「升到头」时取到 undefined 崩界面
          const rawKey = tab.zgTableKey;
          tab.zgTableKey = function(o, _) {
            return rawKey(o, _) || rawKey(tab.length, _)
          };
          return tab
        }
        static _co_post() {
          let t = {};
          for (let e in c) {
            let o = c[e];
            2 == o.type ? (t[o.type] = t[o.type] || {}, t[o.type][o.dep_id] = t[o.type][o.dep_id] || [], t[o.type][o.dep_id].push(o)) : (t[o.type] = t[o.type] || {}, t[o.type][o.dep_id] = o)
          }
          return this.gsTableSettobj(c, t)
        }
        static _co_property() {
          let t = {};
          for (let e in i) {
            let o = i[e];
            o.need = this.gsNeedStrp(o.need, !1), t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(i, t)
        }
        static _co_training() {
          let t = {};
          for (let e in r) {
            let o = r[e];
            o.need = this.gsNeedStrp(o.need, !1), t[o.grade] = t[o.grade] || [], t[o.grade].push(o)
          }
          return this.gsTableSettobj(r, t)
        }
        static _co_pic() {
          let t = {};
          for (let e in u) {
            let o = u[e];
            t[o.post_id] = t[o.post_id] || [], t[o.post_id].push(o)
          }
          return this.gsTableSettobj(u, t)
        }
        static _co_edu() {
          return this.gsTableSettobj(h, {})
        }
        static _co_emote() {
          return this.gsTableSettobj(q, {})
        }
        static _co_hire_eva() {
          let t = {};
          for (let e in g) {
            let o = g[e];
            t[o.edu] = t[o.edu] || [], t[o.edu].push(o)
          }
          return this.gsTableSettobj(g, t)
        }
        static _co_open() {
          let t = {};
          for (let e in R) {
            let o = R[e];
            t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return t[2] && t[2].sort((function(t, e) {
            return t.num - e.num
          })), this.gsTableSettobj(R, t)
        }
        static _co_numcd() {
          return this.gsTableSettobj(Z, {})
        }
        static _co_egress() {
          return this.gsTableSettobj(M, {})
        }
        static _co_serve() {
          return this.gsTableSettobj(H, {})
        }
        static _co_post_des() {
          let t = {};
          for (let e in l) {
            let o = l[e];
            t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(l, t)
        }
        static _co_senior() {
          let t = {};
          for (let e in G) {
            let o = G[e];
            o.set = this.gsNeedStrp(o.set, !1), t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(G, t)
        }
        static _co_summit() {
          for (let t in U) {
            let e = U[t];
            e.award = this.gsNeedStrp(e.award, !1)
          }
          return this.gsTableSettobj(U, {})
        }
        static _co_serve_step() {
          let t = {};
          for (let e in K) {
            let o = K[e];
            o.need = this.gsNeedStrp(o.need, !1), t[o.step] = t[o.step] || [], t[o.step].push(o)
          }
          return this.gsTableSettobj(K, t)
        }
        static _co_negotiate() {
          let t = {};
          for (let e in L) {
            let o = L[e];
            t[o.job] = t[o.job] || [], t[o.job].push(o)
          }
          return this.gsTableSettobj(L, t)
        }
        static _co_name() {
          let t = {};
          for (let e in b) {
            let o = b[e];
            t[o.sex] = t[o.sex] || [], t[o.sex].push(o)
          }
          return this.gsTableSettobj(b, t)
        }
        static _co_war() {
          let t = {};
          for (let e in O) {
            let o = O[e];
            o.award = this.gsNeedStrp(o.award, !1), t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(O, t)
        }
        static _co_accomplish() {
          let t = {};
          for (let e in P) {
            let o = P[e];
            o.award = this.gsNeedStrp(o.award, !1), t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(P, t)
        }
        static _co_team_award() {
          let t = {};
          for (let e in J) {
            let o = J[e];
            o.post_type = this.gsNeedStrp(o.post_type, !1), t[o.team_id] = t[o.team_id] || [], t[o.team_id].push(o)
          }
          return this.gsTableSettobj(J, t)
        }
        static _co_team() {
          for (let t in F) {
            let e = F[t];
            e.need = this.gsNeedStrp(e.need, !1)
          }
          return this.gsTableSettobj(F, {})
        }
        static _co_war_member() {
          let t = {};
          for (let e in A) {
            let o = A[e];
            t[o.war_id] = t[o.war_id] || [], t[o.war_id].push(o)
          }
          return this.gsTableSettobj(A, t)
        }
        static _co_super() {
          let t = {};
          for (let e in X) {
            let o = X[e];
            o.post_type = this.gsNeedStrp(o.post_type, !1);
            for (const e of o.post_type) t[e] = t[e] || {}, t[e][o.grade] = t[e][o.grade] || [], t[e][o.grade].push(o.id)
          }
          return this.gsTableSettobj(X, t)
        }
        static _co_dep() {
          let t = {},
            e = {},
            _ = {};
          for (let s in o) {
            let c = o[s];
            c.set = this.gsNeedStrp(c.set, !1), t[c.higher_id] = t[c.higher_id] || [], t[c.higher_id].push(c), _[c.step] = _[c.step] || [], _[c.step].push(c), e[c.type] = e[c.type] || {}, e[c.type][c.id] = c
          }
          let s = this.gsTableSettobj(o, t);
          return s.bmObjs = e, s.stepObjs = _, s
        }
        static _co_device() {
          let t = {};
          for (let e in _) {
            let o = _[e];
            o.need = this.gsNeedStrp(o.need, !1), t[o.dep_id] = t[o.dep_id] || {}, t[o.dep_id][o.type] = t[o.dep_id][o.type] || [], t[o.dep_id][o.type].push(o)
          }
          return this.gsTableSettobj(_, t)
        }
        static _co_qiandao() {
          for (let t in n) {
            let e = n[t];
            e.award = this.gsNeedStrp(e.award, !1)
          }
          return this.gsTableSettobj(n, {})
        }
        static _co_market() {
          let t = {};
          for (let e in f) {
            let o = f[e];
            t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(f, t)
        }
        static _co_market_lv() {
          let t = {};
          for (let e in y) {
            let o = y[e];
            o.need = this.gsNeedStrp(o.need, !1), t[o.market_id] = t[o.market_id] || [], t[o.market_id].push(o)
          }
          return this.gsTableSettobj(y, t)
        }
        static _co_check_lv() {
          let t = {};
          for (let e in S) {
            let o = S[e];
            o.need = this.gsNeedStrp(o.need, !1), t[o.check_id] = t[o.check_id] || [], t[o.check_id].push(o)
          }
          return this.gsTableSettobj(S, t)
        }
        static _co_check() {
          let t = {};
          for (let e in m) {
            let o = m[e];
            t[o.is_get] = t[o.is_get] || [], t[o.is_get].push(o)
          }
          return this.gsTableSettobj(m, t)
        }
        static _co_slack() {
          let t = {};
          for (let e in E) {
            let o = E[e];
            t[o.sex] = t[o.sex] || [], t[o.sex].push(o)
          }
          return this.gsTableSettobj(E, t)
        }
        static _co_dep_event() {
          let t = {};
          for (let e in W) {
            let o = W[e];
            t[o.dep_id1] = t[o.dep_id1] || [], t[o.dep_id1].push(o), o.dep_id2 = this.gsNeedStrp(o.dep_id2, !1), o.need1 = this.gsNeedStrp(o.need1, !1), o.need2 = this.gsNeedStrp(o.need2, !1), o.award1 = this.gsNeedStrp(o.award1, !1), o.award2 = this.gsNeedStrp(o.award2, !1)
          }
          return this.gsTableSettobj(W, t)
        }
        static _co_book() {
          let t = {};
          for (let e in Y) {
            let o = Y[e];
            t[o.type] = t[o.type] || [], t[o.type].push(o)
          }
          return this.gsTableSettobj(Y, t)
        }
      }
      t("ZGGSTablePrint", lt), lt.co_property = lt._co_property(), lt.co_training = lt._co_training(), lt.co_post = lt._co_post(), lt.co_job = lt._co_job(), lt.co_event_rate = lt._co_event_rate(), lt.co_character = lt._co_character(), lt.co_prop = lt._co_prop(), lt.co_first = lt._co_first(), lt.co_pot = lt._co_pot(), lt.co_amb = lt._co_amb(), lt.co_cname = lt._co_cname(), lt.co_report = lt._co_report(), lt.co_title = lt._co_title(), lt.co_inspire = lt._co_inspire(), lt.co_raise = lt._co_raise(), lt.co_banquet = lt._co_banquet(), lt.co_banquet_award = lt._co_banquet_award(), lt.co_year = lt._co_year(), lt.co_year_award = lt._co_year_award(), lt.co_resign = lt._co_resign(), lt.co_bubble = lt._co_bubble(), lt.co_bubble_des = lt._co_bubble_des(), lt.co_dhm = lt._co_dhm(), lt.co_danji = lt._co_danji(), lt.co_gonggao = lt._co_gonggao(), lt.co_huodong = lt._co_huodong(), lt.co_class = lt._co_class(), lt.co_study = lt._co_study(), lt.co_benefits = lt._co_benefits(), lt.co_benefits_lv = lt._co_benefits_lv(), lt.co_industry = lt._co_industry(), lt.co_industry_company = lt._co_industry_company(), lt.co_staff_company = lt._co_staff_company(), lt.co_pic = lt._co_pic(), lt.co_post_des = lt._co_post_des(), lt.co_name = lt._co_name(), lt.co_edu = lt._co_edu(), lt.co_hire_eva = lt._co_hire_eva(), lt.co_emote = lt._co_emote(), lt.co_senior = lt._co_senior(), lt.co_war = lt._co_war(), lt.co_war_member = lt._co_war_member(), lt.co_team = lt._co_team(), lt.co_team_award = lt._co_team_award(), lt.co_accomplish = lt._co_accomplish(), lt.co_open = lt._co_open(), lt.co_numcd = lt._co_numcd(), lt.co_negotiate = lt._co_negotiate(), lt.co_serve = lt._co_serve(), lt.co_serve_step = lt._co_serve_step(), lt.co_egress = lt._co_egress(), lt.co_edu_up = lt._co_edu_up(), lt.co_summit = lt._co_summit(), lt.co_super = lt._co_super(), lt.co_dati = lt._co_dati(), lt.co_dep = lt._co_dep(), lt.co_device = lt._co_device(), lt.co_qiandao = lt._co_qiandao(), lt.co_market = lt._co_market(), lt.co_market_lv = lt._co_market_lv(), lt.co_check_lv = lt._co_check_lv(), lt.co_check = lt._co_check(), lt.co_slack = lt._co_slack(), lt.co_dep_event = lt._co_dep_event(), lt.co_book = lt._co_book(), e._RF.pop()
    }
  }
}));