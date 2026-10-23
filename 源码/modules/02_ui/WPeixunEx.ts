System.register("chunks:///_virtual/WPeixunEx.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var e, i, s, n, h, o, g, l;
  return {
    setters: [function(t) {
      e = t.cclegacy, i = t.find, s = t.UITransform, n = t.Vec3, h = t._decorator
    }, function(t) {
      o = t.ZGGSOfficeFx, g = t.gs_btxt, l = t.gs_sql
    }],
    execute: function() {
      var d;
      e._RF.push({}, "4cd78ZHmYNOmbp/hJTwQhnH", "WPeixunEx", void 0);
      const {
        ccclass: a,
        property: u
      } = h;
      t("WPeixunEx", a("WPeixunEx")(d = class extends o {
        constructor(...t) {
          super(...t), this.ydText = null, this.btnJump = null, this.earthNode = null, this.boxNode = null, this.mask_see = null, this.boxShare = null, this.node_text = null, this.spr_bg1 = null, this.spr_bg2 = null, this.node_text2 = null, this.nextBtn = null, this.bandang = null, this.nowGuideId = 0, this.VHBgshi = null
        }
        load() {
          this.ydText = g.gsYDStringHelp(), this.btnJump = this.zgNodegzt("btn_tiaoguo"), this.earthNode = this.zgNodegzt("node_quan"), this.boxNode = this.zgNodegzt("spr_kuang1"), this.mask_see = this.zgNodegzt("mask_see", this.boxNode), this.boxShare = this.zgNodegzt("ani_action/YMSprite", this.mask_see), this.node_text = this.zgNodegzt("node_text"), this.spr_bg1 = this.zgNodegzt("spr_shang", this.node_text), this.spr_bg2 = this.zgNodegzt("spr_xia", this.node_text), this.node_text2 = this.zgNodegzt("node_text2"), this.nextBtn = this.zgNodegzt("btn_yin"), this.bandang = this.zgNodegzt("btn_even"), this.VHBgshi = i("Canvas/ui/VHBgshi"), this.btnJump.active = !1, this.bandang.active = !1, this.node_text.active = !1, this.nextBtn.active = !1, this.btnTxtDeal()
        }
        setYingdaoId(t) {
          l.config.guideId += t
        }
        dengNextStep(t, e, s) {
          this.unscheduleAllCallbacks(), this.schedule(function() {
            var n = i(e);
            !(s && n && n.active && 0 == n.position.x) && (s || n && n.active) || (this.unscheduleAllCallbacks(), t())
          }.bind(this), 0)
        }
        kuangShezhi(t, e = 0, i = 0, n = 0, h = 0, o = 0, g = 0) {
          var l = {
            x: 6e3,
            y: 0
          };
          if (t) {
            l = t.getWorldPosition();
            let e = t.getComponent(s).contentSize;
            this.mask_see.getComponent(s).setContentSize(e.width + n, e.height + h), this.boxShare.getComponent(s).setContentSize(e.width + o, e.height + g);
            let i = (e.height + h) / 2,
              d = (e.width + n) / 2;
            this.gsNodePositgps("btn_up", 0, i, this.boxNode), this.gsNodePositgps("btn_left", -d, 0, this.boxNode), this.gsNodePositgps("btn_right", d, 0, this.boxNode), this.gsNodePositgps("btn_down", 0, -i, this.boxNode)
          }
          this.boxNode.setWorldPosition(l.x + e, l.y + i, 1)
        }
        yuanShezhi(t, e = 0, i = 0, s = null) {
          let n = {
            x: 3e3,
            y: 0
          };
          t && (n = t.getWorldPosition(), console.log(`${this.nowGuideId}引导圈坐标`, n)), s && (n = s), this.earthNode.setWorldPosition(n.x + e, n.y + i, 1)
        }
        buKeDian(t) {
          this.bandang.active = t
        }
        shiHengfu(t, e = null, i = null, s = null, h = 0, o = 0, l = 0) {
          if (this.spr_bg1.active = 1 == t, this.spr_bg2.active = 2 == t, 1 == t ? this.spr_bg1.setPosition(l, 277) : 2 == t && this.spr_bg2.setPosition(l, 73), t && e && e.isValid) {
            let t = e.getWorldPosition(),
              l = new n(t.x + h, t.y + o, 1);
            if (this.node_text.setWorldPosition(l), this.zgNodegzt("txt1", this.node_text).active = i, this.zgNodegzt("ric_text", this.node_text).active = s, i && i.length > 0 && this.gsTxtLblgs("txt1", i, this.node_text), s && s.length > 0) {
              let t = g.gsStringByParam(1, s);
              this.gsRichLbltxtgrs("ric_text", t, this.node_text)
            }
          }
          this.node_text.active = t && (i && i.length > 0 || s && s.length > 0)
        }
        hengfuJuzhong(t = null) {
          if (this.node_text2.active = t && t.length > 0, t && t.length > 0) {
            let e = g.gsStringByParam(1, t);
            this.gsRichLbltxtgrs("fu", e, this.node_text2)
          }
        }
        hideBtnXia(t) {
          this.btnTxtDeal(), this.nextBtn.active = !1, this.scheduleOnce(function() {
            this.nextYingdao(t)
          }.bind(this), .1)
        }
        btnTxtDeal() {
          this.buKeDian(!0), this.kuangShezhi(null), this.yuanShezhi(null), this.shiHengfu(null), this.hengfuJuzhong(null)
        }
      }) || d);
      e._RF.pop()
    }
  }
}));