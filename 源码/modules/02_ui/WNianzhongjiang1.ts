System.register("chunks:///_virtual/WNianzhongjiang1.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, n, o, e, i, r, a, g, l, h;
  return {
    setters: [function(t) {
      s = t.cclegacy, n = t._decorator, o = t.js
    }, function(t) {
      e = t.ZGGSOfficeFx, i = t.gs_boss, r = t.gs_tabpr, a = t.gs_sql, g = t.gs_btxt, l = t.gs_computer, h = t.gs_phone
    }],
    execute: function() {
      var c, _;
      s._RF.push({}, "c296db+NxFMjqKlSQhSZAws", "WNianzhongjiang1", void 0);
      const {
        ccclass: d,
        property: u
      } = n;
      t("WNianzhongjiang1", d("WNianzhongjiang1")(((_ = class t extends e {
        constructor(...t) {
          super(...t), this.top = null, this.content = null, this.co_year_award_ttt = null
        }
        xiabanye() {
          i.bossDieWin(t, 2)
        }
        load() {
          this.co_year_award_ttt = r.co_year_award.objs, this.top = this.zgNodegzt("top"), this.content = this.zgNodegzt("sw1/view/content", this.top)
        }
        init(t) {
          this.showWNianzhongjiang1(t)
        }
        showWNianzhongjiang1(t) {
          let s = [],
            n = 0,
            e = [];
          for (let t in a.workInfo1.objs) a.workInfo1.objs[t].id > 1 && (n += 1, s.push(a.workInfo1.objs[t].id));
          let i = g.gsStringHelpIn(9),
            r = t.totalGrade,
            c = null;
          for (let t in this.co_year_award_ttt) {
            if (!(r > Number(t))) break;
            c = this.co_year_award_ttt[t]
          }
          let _ = l.sjNumArrgs(3, 4, 1)[0],
            d = c[0],
            u = l.sjNumArrgs2(0, d.des.length - 1, _),
            f = l.sjNumArrgs2(0, c.length - 1, _);
          for (let t = 0; t < 4; t++) {
            let r = this.zgNodegzt(`node_Info${t}`, this.content),
              d = u[t],
              b = f[t];
            if (r.active = t + 1 <= _, t + 1 <= _) {
              let _ = c[b],
                u = _.des[d],
                f = i[t],
                p = g.gsStringByTwo(5);
              p = o.formatStr(p, f, u), this.gsTxtLblgs("YMLabel1", p, r);
              let j = Math.floor(n * _.rate / 100);
              if (j <= 1 && (j = 1), t < 3) {
                for (let t = 0; t < j; t++) {
                  let t = l.sjNumArrgs2(0, s.length - 1, 1)[0],
                    n = s[t];
                  s.splice(t, 1);
                  let o = a.findObjById("workInfo1", n),
                    i = {
                      amb: _.value
                    };
                  h.addWorkerAttr(o.id, i), e.push(n)
                }
                let n = this.zgNodegzt(`node_Info0${t}`, this.content),
                  i = g.gsStringByTwo(6),
                  r = _.value;
                r > 0 && (r = `+${r}`), i = o.formatStr(i, j, r), this.gsTxtLblgs("YMLabel1", i, n)
              }
            }
          }
          console.log(e, "999"), this.gsTxtStrbyNums("node_Info7/lay/YMLabel", 306, t.power, this.content), l.addPingfenGs(t.power), this.gsButtongbs("btn_yes1", (() => {
            t._func(e), this.xiabanye()
          }), this.top)
        }
      }).m_name = "WNianzhongjiang1", c = _)) || c);
      s._RF.pop()
    }
  }
}));