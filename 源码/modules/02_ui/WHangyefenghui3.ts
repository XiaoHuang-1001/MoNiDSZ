System.register("chunks:///_virtual/WHangyefenghui3.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var e, s, o, i, n, g, r, a, c;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator
    }, function(t) {
      o = t.ZGGSOfficeFx, i = t.gs_boss, n = t.gs_bmsg, g = t.gs_sql, r = t.gs_tabpr, a = t.gs_computer, c = t.gs_btxt
    }],
    execute: function() {
      var d, h;
      e._RF.push({}, "136bakoCyNNBrHolCmC7LfG", "WHangyefenghui3", void 0);
      const {
        ccclass: l,
        property: f
      } = s;
      t("WHangyefenghui3", l("WHangyefenghui3")(((h = class t extends o {
        constructor(...t) {
          super(...t), this.bdog = null, this.roleArr = []
        }
        pohuiPage() {
          i.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsButtongbs("btn_yes", function() {
            n.send(211, 2, {}), n.send(2302, {
              id: 0,
              roleArr: []
            }), this.pohuiPage()
          }.bind(this), this.bdog)
        }
        init(t) {
          this.roleArr = t.role;
          const e = t.table;
          let s = t.award,
            o = t.power,
            i = this.zgNodegzt("sw1/view/content", this.bdog);
          this.gsNeedConfigs("node_award/lay", [4, o], this.bdog);
          let n = this.zgNodegzt("node_award1", this.bdog);
          for (const t in s) {
            let e = s[t];
            this.gsNeedConfigs("cost", e, n);
            break
          }
          for (let t = 0; t < 6; t++) {
            let s = this.zgNodegzt(`node_Info${t+1}`, i),
              o = this.roleArr[t];
            if (s.active = o, o) {
              let i = e[t].content;
              const n = g.findObjById("workInfo1", o),
                d = r.co_post.zgTableKey(n.postId);
              let h = a.zgStrRichGradegs(d.name, d.grade);
              i = i.replace(/y%/g, h), i = i.replace(/x%/g, n.name), this.gsRichLbltxtgrs("YMRichText", c.gsStringByParam(1, i), s)
            }
          }
        }
      }).m_name = "WHangyefenghui3", d = h)) || d);
      e._RF.pop()
    }
  }
}));