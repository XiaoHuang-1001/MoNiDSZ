System.register("chunks:///_virtual/WXingongneng.ts", ["cc", "./ZGGSOfficeFx.ts", "./blController.ts", "./minFunc.ts"], (function(n) {
  "use strict";
  var t, s, i, o, e, g, c, l;
  return {
    setters: [function(n) {
      t = n.cclegacy, s = n._decorator
    }, function(n) {
      i = n.ZGGSOfficeFx, o = n.gs_boss, e = n.gs_tabpr, g = n.gs_bmsg
    }, function(n) {
      c = n.blController
    }, function(n) {
      l = n.minFunc
    }],
    execute: function() {
      var b, d;
      t._RF.push({}, "4bc558nqLxOnLbb2mff5Yps", "WXingongneng", void 0);
      const {
        ccclass: a,
        property: r
      } = s;
      n("WXingongneng", a("WXingongneng")(((d = class n extends i {
        constructor(...n) {
          super(...n), this.bdog = null
        }
        xiabanye() {
          o.bossDieWin(n, 1)
        }
        load() {
          this.bdog = this.zgNodegzt("top")
        }
        init(n) {
          let t = n;
          const s = e.co_open.zgTableKey(t);
          console.log(s, n), this.gsTxtLblgs("lbl_info2/lay/YMLabel3", s.name, this.bdog), this.gsTxtLblgs("top1/node_2/YMLabel2", s.name, this.bdog), this.gsTxtLblgs("lbl_info3/YMLabel1", s.des, this.bdog), this.gsSprstHtByUIs("top1/node_1/icon", s.pic, this.bdog), c.gongnengSend(s.id), this.gsButtongbs("btn_2", (() => {
            g.send(3400, t), this.xiabanye()
          }), this.bdog);
          let i = 0;
          100005 == s.id ? i = 4 : 100006 == s.id ? i = 5 : 100004 == s.id ? i = 6 : 100007 == s.id ? i = 7 : 100003 == s.id ? i = 8 : 100008 == s.id && (i = 9), i && l.activityUnlock(i)
        }
      }).m_name = "WXingongneng", b = d)) || b);
      t._RF.pop()
    }
  }
}));