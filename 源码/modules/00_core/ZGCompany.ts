System.register("chunks:///_virtual/ZGCompany.ts", ["cc", "./ZGGSOfficeFx.ts", "./PGsWork.ts", "./ZGGSConfigco.ts", "./DebugTool.ts", "./WTishis.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var n, o, e, s, i, a, c, l, u, g, r, f, d, h, m, p;
  return {
    setters: [function(t) {
      n = t.cclegacy, o = t.view, e = t.find, s = t.UITransform, i = t.sys, a = t.View, c = t.ResolutionPolicy, l = t._decorator
    }, function(t) {
      u = t.ZGGSOfficeFx, g = t.gs_sql, r = t.gs_boss, f = t.gs_www
    }, function(t) {
      d = t.PGsWork
    }, function(t) {
      h = t.ZGGSConfigco
    }, function(t) {
      m = t.default
    }, null, function(t) {
      p = t.minFunc
    }],
    execute: function() {
      var C;
      n._RF.push({}, "40b3a0njMJAA4opZv0Xe5XD", "ZGCompany", void 0);
      const {
        ccclass: S
      } = l;
      t("ZGCompany", S("ZGCompany")(C = class extends u {
        constructor(...t) {
          super(...t), this.debug = null
        }
        onLoad() {
          console.log("进入场景"), p.kuInit((() => {
            this.loadOther()
          }))
        }
        loadOther() {
          window.dszpei1 = "2_1";
          let t = o.getVisibleSize(),
            n = e("Canvas/ground").getComponent(s),
            l = e("Canvas/ui").getComponent(s),
            u = e("Canvas/window").getComponent(s),
            p = e("Canvas/popup").getComponent(s);
          if (n.setContentSize(750, t.height), l.setContentSize(750, t.height), u.setContentSize(750, t.height), p.setContentSize(750, t.height), i.platform === i.Platform.ANDROID && h.gsSdk && 0 == window.PlatformManager.a_na_isTable()) {
            let t = a.instance.getDesignResolutionSize();
            a.instance.setDesignResolutionSize(t.width, t.height, c.SHOW_ALL), console.log("ipad的就打开")
          }
          i.platform !== i.Platform.IOS && i.platform !== i.Platform.ANDROID && (this.debug = new m), g.load(), g.config.guideId < 1e3 && (g.clsData(), g.load()), r.zggsInitView(this);
          {
            f.zgNumByQudao(function() {}.bind(this)), i.platform === i.Platform.IOS || (i.platform, i.Platform.ANDROID);
            let t = function() {
              let t = f.zgNumByQudaoType();
              g.config.qudao = t, r.bossScheduleArrput(g.saveData), r.bossPshow(d)
            }.bind(this);
            this.scheduleOnce(function() {
              t()
            }.bind(this), 0)
          }
        }
      }) || C);
      n._RF.pop()
    }
  }
}));