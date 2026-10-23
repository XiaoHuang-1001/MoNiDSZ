System.register("chunks:///_virtual/WChongdian2.ts", ["cc", "./ZGGSOfficeFx.ts", "./WChongdian1.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, i, n, o, h, c, a, l, g;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator, i = t.instantiate
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, h = t.gs_tabpr, c = t.gs_bmsg, a = t.gs_computer
    }, function(t) {
      l = t.WChongdian1
    }, function(t) {
      g = t.minFunc
    }],
    execute: function() {
      var d, r;
      s._RF.push({}, "d3644AjaM9Pm7DXRgR1MYOj", "WChongdian2", void 0);
      const {
        ccclass: u,
        property: f
      } = e;
      t("WChongdian2", u("WChongdian2")(((r = class t extends n {
        constructor(...t) {
          super(...t), this.top = null, this.content = null, this.item1 = null, this.co_study_ttt = null, this.haveJoin = !1
        }
        xiabanye() {
          o.bossDieWin(t, 1)
        }
        load() {
          this.co_study_ttt = h.co_study.objs, this.top = this.zgNodegzt("top"), this.content = this.zgNodegzt("sw1/view/content", this.top), this.item1 = this.zgNodegzt("item1", this.content), this.gsButtongbs("guanbi", (() => {
            if (this.haveJoin) {
              let t = {
                id: 1,
                roleArr: [],
                face: 312
              };
              c.send(2302, t)
            } else g.activitySuccess(29, 3, null), c.send(2300);
            this.xiabanye()
          }), this.top)
        }
        init(t) {
          this.showWChongdian2(t)
        }
        showWChongdian2(t) {
          this.haveJoin = !1;
          let s = t.can,
            e = (t.id, this.content.children),
            n = [],
            o = a.zongxinshui(),
            h = Math.ceil(o / 10);
          h <= 1 && (h = 1);
          for (let t = 0; t < s.length; t++) {
            let e = s[t],
              i = [],
              o = !1,
              c = this.co_study_ttt[e.id],
              l = {};
            for (; i.length < 5;) {
              let t = a.sjNumgs(1, 1e4);
              for (let s = 0; s < c.length; s++) {
                let e = c[s];
                if (e.rate1 <= t && t <= e.rate2) {
                  l[e.id] || (l[e.id] = 1, 6 != e.grade && (o = !0), i.push(e));
                  break
                }
              }
            }
            let g = {
              co_class_t: e,
              notRed: o,
              co_study_tt: i,
              bmfee: h
            };
            n.push(g)
          }
          for (let t = 0; t < n.length; t++) {
            let s = e[t];
            s || (s = i(this.item1), s.parent = this.content), s.active = !0, this.bindClass(s, n[t])
          }
          for (let t = n.length; t < e.length; t++) e[t].active = !1
        }
        bindClass(t, s) {
          let e = s.co_class_t;
          this.gsTxtLblgs("txt1", e.name, t), this.gsTxtStrbyNums("YMLabel", 4, s.bmfee, t), this.gsTxtLblgs("YMLabel2", e.des, t), this.gsButtongbs("btn_2", (() => {
            let e = {
              json: s,
              _func: (e, i, n) => {
                if (1 == e) s.co_study_tt = i, s.notRed = n;
                else if (2 == e) {
                  this.haveJoin = !0, t.active = !1;
                  let s = this.content.children,
                    e = !0;
                  for (let t = 0; t < s.length; t++)
                    if (s[t].active) {
                      e = !1;
                      break
                    } if (e) {
                    this.xiabanye();
                    let t = {
                      id: 1,
                      roleArr: [],
                      face: 312
                    };
                    c.send(2302, t)
                  }
                }
              }
            };
            o.bossWshow(l, e)
          }), t)
        }
      }).m_name = "WChongdian2", d = r)) || d);
      s._RF.pop()
    }
  }
}));