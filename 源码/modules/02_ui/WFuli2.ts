System.register("chunks:///_virtual/WFuli2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var s, i, e, n, o, c, l, r;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator, e = t.instantiate, n = t.js
    }, function(t) {
      o = t.ZGGSOfficeFx, c = t.gs_boss, l = t.gs_bmsg, r = t.gs_btxt
    }],
    execute: function() {
      var a, h;
      s._RF.push({}, "fff2bwhi/5NBasbgLOXEDYK", "WFuli2", void 0);
      const {
        ccclass: u,
        property: g
      } = i;
      t("WFuli2", u("WFuli2")(((h = class t extends o {
        constructor(...t) {
          super(...t), this.content = null, this.item = null
        }
        xiabanye() {
          c.bossDieWin(t, 2)
        }
        load() {
          this.content = this.zgNodegzt("top/sw1/view/content"), this.item = this.zgNodegzt("node_Info0", this.content)
        }
        init(t) {
          this.showWFuli2(t)
        }
        showWFuli2(t) {
          let s = t.arr,
            i = this.content.children,
            n = t.ids;
          for (let t = 0; t < s.length; t++) {
            let n = s[t],
              o = i[t];
            o || (o = e(this.item), o.parent = this.content), o.active = !0, this.bindFuli(o, n)
          }
          this.gsButtongbs("top/btn_2", (() => {
            let t = {
              id: n[0],
              roleArr: n,
              face: 301
            };
            l.send(2302, t), this.xiabanye()
          }))
        }
        bindFuli(t, s) {
          let i = s.co_benefits_t;
          this.gsTxtLblgs("YMLabel1", i.name, t);
          let e = r.gsStringByTwo(9)[i.type];
          e = n.formatStr(e, s.ids.length, s.sjAdd), this.gsTxtLblgs("YMLabel2", e, t)
        }
      }).m_name = "WFuli2", a = h)) || a);
      s._RF.pop()
    }
  }
}));