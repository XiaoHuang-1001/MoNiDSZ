System.register("chunks:///_virtual/WMoweitaotai.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, o, i, l, n, a, c, b, g;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      o = t.ZGGSOfficeFx, i = t.gs_boss, l = t.gs_sql, n = t.gs_phone, a = t.gs_computer, c = t.gs_bmsg, b = t.gs_tabpr
    }, function(t) {
      g = t.minFunc
    }],
    execute: function() {
      var h, u;
      s._RF.push({}, "87965zER5tO27rJfvYoGwZw", "WMoweitaotai", void 0);
      const {
        ccclass: r,
        property: f
      } = e;
      t("WMoweitaotai", r("WMoweitaotai")(((u = class t extends o {
        constructor(...t) {
          super(...t), this.content = null, this.choose = 0
        }
        xiabanye() {
          i.bossDieWin(t, 1)
        }
        load() {
          this.content = this.zgNodegzt("top/content")
        }
        init(t) {
          this.showWMoweitaotai(t)
        }
        showWMoweitaotai(t) {
          console.log(t, "555");
          let s = t.can;
          this.choose = s[0].id;
          let e = this.content.children,
            o = this.zgLableglt("top/node_Info3/YMLabel1");
          o.unscheduleAllCallbacks();
          let i = 0,
            b = () => {
              let t = [1, i],
                s = a.checkTabNeedgs(t);
              this.gsLblCororgst1("top/cost/YMLabel", s, [25, 25, 25])
            };
          for (let t = 0; t < e.length; t++) {
            let o = e[t],
              c = s[t],
              g = l.findObjById("workInfo1", c.id);
            if (o.active = g, !g) continue;
            let h = n.returnOneAttr(g.id);
            this.bindInfo(o, g, c, h);
            let u = this.zgTogglegtts("lbl_info10/toggle", o);
            u.isChecked = this.choose == c.id, this.gsButtongbs("lbl_info10/btn", (() => {
              this.choose = c.id;
              for (let t = 0; t < e.length; t++) {
                let s = e[t];
                this.zgTogglegtts("lbl_info10/toggle", s).isChecked = !1
              }
              u.isChecked = !0;
              let t = a.huoquYueNum() - g.join,
                s = Math.floor(t / 12);
              i = Math.ceil((s + 1) * h.salary), this.gsTxtLblgs("top/cost/YMLabel", a.gsNumValueShow(i)), b()
            }), o)
          }
          o.schedule(b, .3), b(), this.gsButtongbsx("lbl_info10/btn", e[0]), this.gsButtongbs("top/btn_3", (() => {
            g.activitySuccess(23, 1, null), c.send(2300), this.xiabanye()
          })), this.gsButtongbs("top/btn_2", (() => {
            let t = [1, i];
            a.constNeedTabgs(t, (() => {
              g.activitySuccess(23, 2, null), this.xiabanye();
              let t = {
                id: this.choose
              };
              c.send(2306, t)
            }), 6)
          }))
        }
        bindInfo(t, s, e, o) {
          this.gsWorkPic(t, s), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, o.pot, t), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, o.amb, t), this.gsTxtStrbyNums("lbl_info4/YMLabel2", 4, o.allNum, t);
          let i = b.co_edu.zgTableKey(s.edu);
          this.gsTxtGradelbl("lbl_info5/YMLabel2", i.grade, i.name, t);
          let l = a.haveJoinStr(s.join);
          this.gsTxtLblgs("lbl_info6/YMLabel2", l, t), this.gsTxtStrbyNums("lbl_info9/YMLabel2", 101, o.salary, t), this.gsTxtStrbyNums("lbl_info8/YMLabel2", 4, e.potRank, t), this.gsTxtStrbyNums("lbl_info7/YMLabel2", 4, e.ambRank, t)
        }
      }).m_name = "WMoweitaotai", h = u)) || h);
      s._RF.pop()
    }
  }
}));