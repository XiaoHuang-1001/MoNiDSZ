System.register("chunks:///_virtual/WOutTime.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, i, o, l, n, u, a, h, g;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, o = t.gs_sql, l = t.gs_bmsg, n = t.gs_boss, u = t.gs_computer, a = t.gs_www, h = t.gs_sound
    }, function(t) {
      g = t.minFunc
    }],
    execute: function() {
      var c, d;
      s._RF.push({}, "b7f9fwLR+5D151hoDWGpCdF", "WOutTime", void 0);
      const {
        ccclass: r,
        property: b
      } = e;
      t("WOutTime", r("WOutTime")(((d = class t extends i {
        constructor(...t) {
          super(...t), this.hezi = null, this.guangaoId = 14, this.maxMin = 36e5, this.Node0 = null
        }
        guanbi() {
          o.cache.isTufa || l.send(2100, !1), n.bossDieWin(t, 2)
        }
        load() {
          this.hezi = this.zgNodegzt("top")
        }
        init(t) {
          l.send(2100, !0), this.shouWOutTime(t)
        }
        shouWOutTime(t) {
          let s = t.time,
            e = Math.floor(s / 1e3 / 60);
          console.log("实际离线分钟", e);
          let i = Math.floor(e / 15 * 30);
          i > 120 && (i = 120), 0 == i && (i = 1), console.log(i, "钻石分钟收入");
          let o = Math.floor(e / 15 * 10);
          o > 30 && (o = 30), 0 == o && (o = 1), console.log(o, "金卡分钟收入"), this.gsTxtStrbyNums("lbl_info2/lay/YMLabel2", 20, e, this.hezi);
          let l = [2, i],
            n = [3, o];
          this.gsTxtStrbyNums("top1/node_2/lay/YMLabel2", 4, u.gsNumValueShow(l[1]), this.hezi), this.gsTxtStrbyNums("top2/node_2/lay/YMLabel2", 4, u.gsNumValueShow(n[1]), this.hezi), this.gsButtongbs("lay-001/btn_2", (() => {
            this.dealResult(1, i, o)
          }), this.hezi), g.ggbtnPlay(this.zgNodegzt("lay-001/btn_3", this.hezi), this.guangaoId), this.gsButtongbs("lay-001/btn_3", (() => {
            a.GGShowVido(this.guangaoId, (() => {
              this.dealResult(2, i, o)
            }))
          }), this.hezi)
        }
        dealResult(t, s, e) {
          g.activityReward(2, t, {});
          let i = [2, s * t],
            o = [3, e * t];
          u.getNeedTabgs(i, null, 5), u.getNeedTabgs(o, null, 5), h.play("award"), l.send(211, 2, {}), l.send(211, 3, {}), this.guanbi()
        }
      }).m_name = "WOutTime", c = d)) || c);
      s._RF.pop()
    }
  }
}));