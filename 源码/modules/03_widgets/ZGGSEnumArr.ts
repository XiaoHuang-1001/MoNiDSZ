System.register("chunks:///_virtual/ZGGSEnumArr.ts", ["cc", "./ZGGSSqlMyg.ts", "./ZGGSComputerFun.ts", "./ZGGSTablePrint.ts"], (function(t) {
  "use strict";
  var e, s, o, n;
  return {
    setters: [function(t) {
      e = t.cclegacy
    }, function(t) {
      s = t.ZGGSSqlMyg
    }, function(t) {
      o = t.ZGGSComputerFun
    }, function(t) {
      n = t.ZGGSTablePrint
    }],
    execute: function() {
      e._RF.push({}, "4f2d75RRZNFmZDustz9h5cR", "ZGGSEnumArr", void 0);
      let a = t("gs_sql", s),
        u = t("gs_computer", o),
        d = t("gs_tabpr", n);
      t("ZGGSEnumArr", class {
        static zgArrEnum(t) {
          return {
            1: 3
          } [t]
        }
        static initDsz() {
          let t = d.co_name.objs,
            e = d.co_pic.objs[100100],
            s = e[u.sjNumgs(0, e.length - 1)],
            o = s.sex,
            n = t[o],
            i = u.sjNumArrgs2(0, n.length - 1, 2),
            m = n[i[0]],
            c = n[i[0]],
            r = m.name1,
            l = c.name2,
            p = d.co_first.objs[o],
            g = p[u.sjNumgs(0, p.length - 1)];
          console.log("co_first_t", g);
          let b = d.co_job.zgTableKey(g.job),
            j = u.sjNumgs(g.pot1, g.pot2),
            f = u.sjNumgs(g.amb1, g.amb2),
            _ = u.sjNumgs(g.edu1, g.edu2),
            N = (d.co_edu.zgTableKey(_), u.binarySearch("co_amb", "amb1", "amb2", f), u.binarySearch("co_pot", "pot1", "pot2", j).get_money, b.get_total, u.sjNumgs(g.att1, g.att2) + b.totalAtt),
            G = u.sjNumgs(g.hp1, g.hp2) + b.totalHp,
            h = u.sjNumgs(g.def1, g.def2) + b.totalDef,
            I = u.sjNumgs(g.speed1, g.speed2) + b.totalSpeed,
            S = {
              name: r + l,
              sex: o,
              sprId: s.pic,
              postId: 100100,
              depId: 1001,
              jobId: b.id,
              amb: f,
              pot: j,
              edu: _,
              join: u.huoquYueNum() - 1,
              iPot: 1,
              iAmb: 1
            };
          a.findObjById("combmInfo", 1001).workId = 1;
          let y = u.addWorkerNewInfo(S),
            Z = a.findObjById("workInfo2", y.id);
          Z.att = N, Z.hp = G, Z.def = h, Z.speed = I
        }
        static initYg(t, e) {
          let s = e,
            o = d.co_post.zgTableKey(s),
            n = JSON.parse(JSON.stringify(a.workInfo1.obj));
          const i = u.sjTabGetgs(d.co_pic.objs[{
            1: 0,
            2: 0,
            3: 100200,
            4: 100300
          } [t]]);
          n.sprId = i.pic, n.sex = i.sex;
          const m = u.sjTabGetgs(d.co_name.objs[n.sex]),
            c = u.sjTabGetgs(d.co_name.objs[n.sex]);
          n.name = m.name1 + c.name2, n.postId = s, n.depId = o.dep_id;
          let r = d.co_edu.values,
            l = r[u.sjNumgs(0, r.length - 1)];
          n.edu = l.id;
          let p = d.co_job.values,
            g = p[u.sjNumgs(0, p.length - 1)].id;
          n.jobId = u.sjNumgs(1, g) || 1;
          let b = d.co_job.zgTableKey(n.jobId),
            j = u.sjNumgs(l.pot1, l.pot2),
            f = u.sjNumgs(l.amb1, l.amb2),
            _ = u.sjNumgs(l.att1, l.att2),
            N = u.sjNumgs(l.hp1, l.hp2),
            G = u.sjNumgs(l.def1, l.def2),
            h = u.sjNumgs(l.speed1, l.speed2);
          n.iPot = j, n.iAmb = f, n.iAtt = _, n.iHp = N, n.iDef = G, n.iSpeed = h, n.pot = 0, n.amb = 0, n.att = _ + b.totalAtt, n.hp = N + b.totalHp, n.def = G + b.totalDef, n.speed = h + b.totalSpeed, n.join = u.huoquYueNum() - 1;
          let I = f + j;
          const S = d.co_hire_eva.objs[l.id].find((function(t) {
            return t.all1 <= I && t.all2 >= I
          }));
          n.eva = S.id;
          let y = u.addWorkerNewInfo(n, t),
            Z = a.findObjById("workInfo2", y.id);
          for (let t in n) null != Z[t] && "id" != t && (Z[t] = n[t])
        }
      }), e._RF.pop()
    }
  }
}));