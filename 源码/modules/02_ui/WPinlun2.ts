System.register("chunks:///_virtual/WPinlun2.ts", ["cc", "./ZGGSOfficeFx.ts", "./blController.ts"], (function(n) {
  "use strict";
  var t, e, s, i, o, u, a;
  return {
    setters: [function(n) {
      t = n.cclegacy, e = n._decorator
    }, function(n) {
      s = n.ZGGSOfficeFx, i = n.gs_boss, o = n.gs_computer, u = n.gs_sql
    }, function(n) {
      a = n.blController
    }],
    execute: function() {
      var c, l;
      t._RF.push({}, "876f0Bo9PhMxqe6czBBYH4o", "WPinlun2", void 0);
      const {
        ccclass: h,
        property: r
      } = e;
      let d = {
        1: "1,1000,2,20",
        2: "1,2500,2,50",
        3: "1,5000,2,100"
      };
      n("WPinlun2", h("WPinlun2")(((l = class n extends s {
        xiabanye() {
          i.bossDieWin(n, 2)
        }
        load() {}
        init(n) {
          this.showWPinlun2(n)
        }
        leixingPin() {}
        showWPinlun2(n) {
          this.gsButtongbs("top/guanbi", function() {
            n._func(), this.xiabanye()
          }.bind(this)), this.gsButtongbs("top/btn_yes", (() => {
            a.huanxSend();
            let t = u.chahuahui,
              e = Date.now();
            t.state = 2;
            let s = this.dedaoGodsType(),
              i = d[s];
            t.award = i, t.endTime = e + 1e3 * t.cd, n._func(), this.xiabanye()
          }))
        }
        dedaoGodsType() {
          let n = o.sjNumgs(1, 1e4);
          u.chahuahui.huanqitype && (n = u.chahuahui.huanqitype);
          let t = 1;
          return n > 1e3 ? t = 1 : n > 50 ? t = 2 : n > 0 && (t = 3), console.log("奖品类型:", d[t]), t
        }
      }).m_name = "WPinlun2", c = l)) || c);
      t._RF.pop()
    }
  }
}));