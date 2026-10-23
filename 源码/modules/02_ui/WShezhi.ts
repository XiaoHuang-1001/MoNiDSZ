System.register("chunks:///_virtual/WShezhi.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSConfigco.ts", "./WGongshiGuidingm.ts", "./WGongshiGuidingn.ts", "./WShezhi2.ts", "./WPochan2.ts", "./minFunc.ts"], (function(s) {
  "use strict";
  var t, o, i, g, n, e, h, c, u, d, b, f, a, l, p;
  return {
    setters: [function(s) {
      t = s.cclegacy, o = s._decorator
    }, function(s) {
      i = s.ZGGSOfficeFx, g = s.gs_bmsg, n = s.gs_boss, e = s.gs_btxt, h = s.gs_sql, c = s.gs_sound, u = s.gs_computer
    }, function(s) {
      d = s.ZGGSConfigco
    }, function(s) {
      b = s.WGongshiGuidingm
    }, function(s) {
      f = s.WGongshiGuidingn
    }, function(s) {
      a = s.WShezhi2
    }, function(s) {
      l = s.WPochan2
    }, function(s) {
      p = s.minFunc
    }],
    execute: function() {
      var r, z;
      t._RF.push({}, "aa1caNlohdDXIqInhtcr80v", "WShezhi", void 0);
      const {
        ccclass: O,
        property: m
      } = o;
      s("WShezhi", O("WShezhi")(((z = class s extends i {
        constructor(...s) {
          super(...s), this.bdog = null
        }
        pohuiPage() {
          g.send(2100, !1), n.bossDieWin(s, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.bdog), this.gsButtongbs("YMSpriteSplash", function() {}.bind(this)), this.gsTxtLblgs("4/node_6/YMLabel1", e.gsNorStringType(6) + h.config.uid, this.bdog), this.gsTxtLblgs("4/node_7/YMLabel1", h.config.strmp, this.bdog), this.zgNodegzt("4/node_7", this.bdog).active = h.config.strmp.length > 0, this.gsTxtLblgs("YMLabel1", d.bhaopz, this.bdog);
          let s = this.zgTogglegtts("node1/toggle", this.bdog);
          s.isChecked = !!h.config.isOpenMusic, this.gsButtongbs("node1/btn", (() => {
            h.config.isOpenMusic = h.config.isOpenMusic ? 0 : 1, h.config.isOpenMusic ? c.playBg("vhallBg") : c.stopBg(), s.isChecked = !!h.config.isOpenMusic, console.log(h.config.isOpenMusic), c.play("button")
          }), this.bdog);
          let t = this.zgTogglegtts("node2/toggle", this.bdog);
          t.isChecked = !!h.config.isOpenEffect, this.gsButtongbs("node2/btn", (() => {
            h.config.isOpenEffect = h.config.isOpenEffect ? 0 : 1, c.play("button"), t.isChecked = !!h.config.isOpenEffect, console.log(h.config.isOpenEffect)
          }), this.bdog);
          let o = this.zgTogglegtts("node3/toggle", this.bdog);
          o.isChecked = !!h.config.isOpenEffectEmot, this.gsButtongbs("node3/btn", (() => {
            h.config.isOpenEffectEmot = h.config.isOpenEffectEmot ? 0 : 1, c.play("button"), o.isChecked = !!h.config.isOpenEffectEmot, console.log(h.config.isOpenEffectEmot)
          }), this.bdog), this.gsButtongbs("huajie3", (() => {
            console.log("点击用户"), 1 == d.sdkCp ? n.bossPshow(b) : 2 == d.sdkCp && p.gotoYonghu()
          }), this.bdog), this.gsButtongbs("huajie4", (() => {
            console.log("点击隐私"), 1 == d.sdkCp ? n.bossPshow(f) : 2 == d.sdkCp && p.gotoYinsi()
          }), this.bdog);
          let i = u.getDanjiInfo(),
            g = u.zgTimeByTxt(Date.now()),
            r = i && g >= i.shijian && 1 == d.sdkCp;
          this.zgNodegzt("huajie1", this.bdog).active = r, this.gsButtongbs("huajie1", (() => {
            n.bossWshow(a)
          }), this.bdog);
          let z = p.getGDBtn();
          this.zgNodegzt("Layout/huajie6", this.bdog).active = z && 2 == d.sdkCp, this.gsButtongbs("Layout/huajie6", (() => {
            p.gotoMore()
          }), this.bdog), this.zgNodegzt("Layout/huajie7", this.bdog).active = 2 == d.sdkCp, this.gsButtongbs("Layout/huajie7", (() => {
            p.gotoFK()
          }), this.bdog), this.zgNodegzt("huajie2", this.bdog).setPosition(r ? 130 : 0, -134), this.gsButtongbs("huajie2", (() => {
            n.bossWshow(l)
          }), this.bdog);
          let O = 0,
            m = 0;
          console.log("is", !0), this.gsButtongbs("huajie5", (() => {
            let s = Date.now();
            s > O + 1e4 && (m = 0, O = s), m += 1, console.log("次数", m), m >= 5 && n.bossWshow(a)
          }), this.bdog)
        }
        init(s) {
          g.send(2100, !0)
        }
      }).m_name = "WShezhi", r = z)) || r);
      t._RF.pop()
    }
  }
}));