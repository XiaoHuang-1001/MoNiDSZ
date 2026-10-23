System.register("chunks:///_virtual/WPeixun1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WPeixun2.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var i, e, s, n, o, h, l, c, r, a, g;
  return {
    setters: [function(t) {
      i = t.cclegacy, e = t._decorator, s = t.instantiate
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, h = t.gs_tabpr, l = t.gs_bmsg, c = t.gs_sql, r = t.gs_computer
    }, function(t) {
      a = t.WPeixun2
    }, function(t) {
      g = t.minFunc
    }],
    execute: function() {
      var u, d;
      i._RF.push({}, "a9ad7A9gQ9FgpjA6/QVxyOR", "WPeixun1", void 0);
      const {
        ccclass: b,
        property: _
      } = e;
      t("WPeixun1", b("WPeixun1")(((d = class t extends n {
        constructor(...t) {
          super(...t), this.top = null, this.mainCt = null, this.item = null, this.co_training_tt = null, this.choose = {}, this.freeId = 0
        }
        xiabanye() {
          o.bossDieWin(t, 1)
        }
        load() {
          this.co_training_tt = h.co_training.values, this.top = this.zgNodegzt("top"), this.mainCt = this.zgNodegzt("sw1/view/content", this.top), this.item = this.zgNodegzt("item1", this.mainCt), this.gsButtongbs("guanbi", (() => {
            g.activitySuccess(6, 1, {
              num: 0
            }), l.send(2300), this.xiabanye()
          }), this.top)
        }
        init() {
          c.peixunInfo.order += 1, this.showWPeixun1()
        }
        showWPeixun1() {
          this.choose = {};
          let t = r.sjNumArrgs2(0, this.co_training_tt.length - 1, 5),
            i = [];
          for (let e = 0; e < t.length; e++) {
            let s = t[e],
              n = {
                co_training_t: this.co_training_tt[s]
              };
            i.push(n)
          }
          this.choose[i[0].co_training_t.id] = 1, this.freeId = i[0].co_training_t.id, this.bindList(i), this.gsButtongbs("btn_yes1", (() => {
            let t = 0,
              i = 0;
            for (let e in this.choose)
              if (i += 1, this.freeId != Number(e)) {
                t += h.co_training.zgTableKey(e).need[1]
              } let e = [3, t];
            r.constNeedTabgs(e, (() => {
              g.activitySuccess(6, 2, {
                num: i
              }), this.node.active = !1;
              let t = {
                choose: this.choose,
                _func: t => {
                  let i = {
                    id: t[0],
                    roleArr: t,
                    face: 311
                  };
                  l.send(2302, i), this.xiabanye()
                }
              };
              o.bossWshow(a, t)
            }), 8)
          }), this.top), this.showTitle()
        }
        bindList(t) {
          for (let i = 0; i < t.length; i++) this.bindItem(t[i], i)
        }
        bindItem(t, i) {
          let e = t.co_training_t,
            n = this.mainCt.children[i];
          n || (n = s(this.item), n.parent = this.mainCt), n.active = !0, this.gsTxtGradelbl("lbl_info1/YMLabel1", e.grade, e.name, n);
          let o = JSON.parse(JSON.stringify(e.need));
          0 == i && (o = [0]), this.gsNeedConfigs("lbl_info2/lay2", o, n);
          let h = this.zgTogglegtts("lbl_info3/toggle", n);
          h.isChecked = !!this.choose[e.id];
          let l = this.zgLableglt("lbl_info1/YMLabel1", n);
          if (l.unscheduleAllCallbacks(), i > 0) {
            this.gsButtongbs("lbl_info3/btn", (() => {
              this.choose[e.id] ? delete this.choose[e.id] : this.choose[e.id] = 1, h.isChecked = !h.isChecked
            }), n);
            let t = () => {
              let t = r.checkTabNeedgs(o);
              this.gsLblCororgst1("lbl_info2/lay2/YMLabel", t, [25, 25, 25], n)
            };
            l.schedule(t, .3), t()
          }
        }
        showTitle() {
          let t = this.returnQishu(c.peixunInfo.order);
          this.gsTxtStrbyStrs("lbl_info2/YMLabel1", 10, t, this.top)
        }
        returnQishu(t) {
          let i = "";
          return t < 10 ? i = `00${t}` : t < 100 ? i = `0${t}` : t < 1e3 && (i = `${t}`), i
        }
      }).m_name = "WPeixun1", u = d)) || u);
      i._RF.pop()
    }
  }
}));