System.register("chunks:///_virtual/WShengzhiyan2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var e, s, n, o, i, r, g, h, l, a;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator, n = t.js
    }, function(t) {
      o = t.ZGGSOfficeFx, i = t.gs_boss, r = t.gs_tabpr, g = t.gs_computer, h = t.gs_btxt, l = t.gs_sql, a = t.gs_phone
    }],
    execute: function() {
      var c, u;
      e._RF.push({}, "1b82e4v895JcYp9hcs4xiTF", "WShengzhiyan2", void 0);
      const {
        ccclass: f,
        property: b
      } = s;
      t("WShengzhiyan2", f("WShengzhiyan2")(((u = class t extends o {
        constructor(...t) {
          super(...t), this.top = null, this.content = null
        }
        xiabanye() {
          i.bossDieWin(t, 2)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.content = this.zgNodegzt("sw1/view/content", this.top)
        }
        init(t) {
          this.showWShengzhiyan2(t)
        }
        showWShengzhiyan2(t) {
          let e = t.co_banquet_t,
            s = r.co_banquet_award.objs[e.id],
            o = g.sjNumArrgs(3, 4, 1)[0],
            i = g.sjNumArrgs2(0, e.des.length - 1, o),
            c = h.gsStringHelpIn(9),
            u = 2 * t.arrRen.length,
            f = Object.keys(l.workInfo1.objs),
            b = {},
            d = {
              0: [],
              1: [],
              2: []
            },
            _ = {},
            p = 0,
            y = 304;
          for (let t = 0; t < 4; t++) {
            let r = this.zgNodegzt(`node_Info${t}`, this.content),
              z = i[t];
            if (r.active = t + 1 <= o, t + 1 <= o) {
              let o = e.des[z],
                i = c[t],
                S = h.gsStringByTwo(5);
              if (S = n.formatStr(S, i, o), this.gsTxtLblgs("YMLabel1", S, r), t < 3) {
                let e = g.sjNumArrgs(1, u, 1)[0];
                e > 8 && (e = 8), e <= 1 && (e = 1);
                let o = null;
                for (; !o;) {
                  let t = g.sjNumArrgs(1, 1e4, 1)[0];
                  o = s[0];
                  for (let e = 1; e < s.length; e++) {
                    t >= s[e].rate1 && (o = s[e])
                  }
                  b[o.id] ? o = null : b[o.id] = 1
                }
                for (let s = 0; s < e; s++) {
                  let e = g.sjNumArrgs2(0, f.length - 1, 1)[0],
                    s = f[e];
                  f.splice(e, 1);
                  let n = l.findObjById("workInfo1", s),
                    i = {
                      amb: o.value
                    };
                  a.addWorkerAttr(n.id, i), o.value > 0 ? (_[s] = 312, y = 312) : _[s] = 304, p = Number(s), d[t].push(s)
                }
                let i = this.zgNodegzt(`node_Info0${t}`, this.content),
                  r = h.gsStringByTwo(6),
                  c = o.value;
                c > 0 && (c = `+${c}`), r = n.formatStr(r, e, c), this.gsTxtLblgs("YMLabel2", r, i)
              }
            }
          }
          this.gsButtongbs("btn_yes1", (() => {
            t._func(_, p, y), this.xiabanye()
          }), this.top)
        }
      }).m_name = "WShengzhiyan2", c = u)) || c);
      e._RF.pop()
    }
  }
}));