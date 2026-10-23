System.register("chunks:///_virtual/WDepcl1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WShiyong.ts", "./blController.ts"], (function(t) {
  "use strict";
  var s, i, e, o, n, d, l, c, h, g;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator
    }, function(t) {
      e = t.ZGGSOfficeFx, o = t.gs_boss, n = t.gs_bmsg, d = t.gs_sql, l = t.gs_tabpr, c = t.gs_btxt
    }, function(t) {
      h = t.WShiyong
    }, function(t) {
      g = t.blController
    }],
    execute: function() {
      var _, b;
      s._RF.push({}, "65c6dDkgl9B55q3dGjUj490", "WDepcl1", void 0);
      const {
        ccclass: p,
        property: r
      } = i;
      t("WDepcl1", p("WDepcl1")(((b = class t extends e {
        constructor(...t) {
          super(...t), this.bdog = null, this.type = 0, this.co_dep_t = null
        }
        pohuiPage() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsButtongbs("btn_1", function() {
            n.send(2002), n.send(2303, {
              id: this.co_dep_t.id
            }), this.pohuiPage()
          }.bind(this), this.bdog)
        }
        init(t) {
          1103 == t.depId ? (d.config.guideId = 1e3, o.bossPshow(h)) : 1002 == t.depId && (d.config.guideId = 1200, o.bossPshow(h)), this.type = t.type, this.co_dep_t = l.co_dep.zgTableKey(t.depId), g.bumenSend(this.co_dep_t.id);
          let s = c.gsStringHelpIn(102)[this.type];
          this.gsTxtLblgs("title", s[0], this.bdog), this.gsTxtLblgs("lbl_info2/YMLabel1", s[1], this.bdog), this.gsTxtStrbyNums("lbl_info1/YMLabel1", 103, this.co_dep_t.set[1], this.bdog);
          let i = this.co_dep_t.name;
          this.co_dep_t.name.length > 4 && (i = this.co_dep_t.name.slice(0, 2) + "\n" + this.co_dep_t.name.slice(2, this.co_dep_t.name.length)), this.gsTxtLblgs("lbl_info3/YMLayout/YMLabel1", i, this.bdog), this.gsSprstHtByUIs("lbl_info3/icon", `${this.co_dep_t.id}aa`, this.bdog), this.gsSprstHtByUIs("lbl_info3", `zpz0${this.co_dep_t.step}`, this.bdog);
          let e = this.zgNodegzt("lbl_info3/YMLayout/node_1", this.bdog);
          if (e.active = 1103 == this.co_dep_t.id, 1103 == this.co_dep_t.id) {
            const t = d.findObjById("combmInfo", 1103);
            this.gsTxtStrbyNums("YMLabel1", 104, t.workArr.length, e)
          }
          this.gsTxtLblgs("lbl_info4/show/YMLabel2", "+" + this.co_dep_t.power, this.bdog)
        }
      }).m_name = "WDepcl1", _ = b)) || _);
      s._RF.pop()
    }
  }
}));