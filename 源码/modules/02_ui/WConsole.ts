System.register("chunks:///_virtual/WConsole.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, i, n, e, o;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator, n = t.instantiate
    }, function(t) {
      e = t.ZGGSOfficeFx, o = t.gs_boss
    }],
    execute: function() {
      var h, a;
      s._RF.push({}, "01143Q9frxMr4SZ2sGUoAnK", "WConsole", void 0);
      const {
        ccclass: g,
        property: c
      } = i;
      t("WConsole", g("WConsole")(((a = class t extends e {
        constructor(...t) {
          super(...t), this.fanghe = null, this.mianCt = null, this.txt2 = null, this.txt4 = null, this.pageSize = 10, this.totalPage = 0, this.pageNum = 0, this.lishiArr = [], this.showArr = []
        }
        pohuiPage() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.mianCt = this.zgNodegzt("sw1/view/content", this.fanghe), this.gsButtongbs("btn_yes1", function() {
            this.pohuiPage()
          }.bind(this), this.fanghe)
        }
        init(t) {
          this.showyeRong()
        }
        showyeRong() {
          let t = this.mianCt.children;
          for (let s = 0; s < window.gongshishuju.length; s++) {
            let i = t[s];
            i || (i = n(t[0]), i.parent = this.mianCt), i.active = !0, this.gsTxtLblgs("txt1", window.gongshishuju[s], i)
          }
        }
      }).m_name = "WConsole", h = a)) || h);
      s._RF.pop()
    }
  }
}));