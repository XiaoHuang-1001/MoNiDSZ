System.register("chunks:///_virtual/Wxiyanqingjian1.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var i, s, n, e, o, a;
  return {
    setters: [function(t) {
      i = t.cclegacy, s = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, e = t.gs_boss, o = t.gs_tabpr, a = t.gs_phone
    }],
    execute: function() {
      var r, c;
      i._RF.push({}, "b550eTzvOZOuKydq+rrNzL2", "Wxiyanqingjian1", void 0);
      const {
        ccclass: h,
        property: l
      } = s;
      t("Wxiyanqingjian1", h("Wxiyanqingjian1")(((c = class t extends n {
        constructor(...t) {
          super(...t), this.hezi = null, this._workInfo1_s = null
        }
        pohuiPage() {
          e.bossDieWin(t, 2)
        }
        load() {
          this.hezi = this.zgNodegzt("top")
        }
        init(t) {
          this.shouView(t)
        }
        shouView(t) {
          let i = t.workAttr,
            s = t.workInfo1_s,
            n = t.add;
          this.gsButtongbs("top/btn_2", function() {
            t._func(), this.pohuiPage()
          }.bind(this)), this.bindInfo(i, s, n)
        }
        bindInfo(t, i, s) {
          let n = this.zgNodegzt("spr1", this.hezi);
          this.gsWorkPic(n, i);
          let e = o.co_post.zgTableKey(i.postId);
          this.gsTxtGradelbl("node_1/YMLabel1", e.grade, e.name, n), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, t.pot, n), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, t.amb, n), this.gsTxtStrbyNums("lbl_info4/YMLabel1", 302, s, n);
          let r = {
            amb: s
          };
          a.addWorkerAttr(i.id, r)
        }
      }).m_name = "Wxiyanqingjian1", r = c)) || r);
      i._RF.pop()
    }
  }
}));