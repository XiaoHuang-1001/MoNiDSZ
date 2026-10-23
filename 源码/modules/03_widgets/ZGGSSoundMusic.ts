System.register("chunks:///_virtual/ZGGSSoundMusic.ts", ["cc", "./ZGGSComPreLoad.ts"], (function(i) {
  "use strict";
  var t, a, s, n;
  return {
    setters: [function(i) {
      t = i.cclegacy, a = i._decorator, s = i.AudioSource
    }, function(i) {
      n = i.ZGGSComPreLoad
    }],
    execute: function() {
      var e, o;
      t._RF.push({}, "b2e5f+GNSBNp5HHIgWfOeVo", "ZGGSSoundMusic", void 0);
      const {
        ccclass: u,
        property: y
      } = a;
      let c = i("ZGGSSoundMusic", u("ZGGSSoundMusic")(((o = class i extends s {
        constructor(...i) {
          super(...i), this.yinyueji = {}, this.m_nowBg = ""
        }
        start() {
          for (var t = ["vhallBg", "button", "uplv", "market", "warBg", "warAtt", "welcome", "flygold", "yuanGo", "feiji", "keche", "qiaoda", "pjlv", "b302aa", "b301aa", "b303aa", "b304aa", "b306aa", "b307aa", "b308aa", "b309aa", "b312aa", "b313aa", "g301aa", "g302aa", "g303aa", "g304aa", "g306aa", "g307aa", "g308aa", "g309aa", "g312aa", "g313aa", "t305aa", "t310aa", "t311aa"], a = 0; a < t.length; a++) this.yinxiangAdd(t[a]);
          i.inst = this
        }
        yinxiangAdd(i) {
          n.loadAudio("music/" + i, function(t) {
            t && (this.yinyueji[i] = t)
          }.bind(this))
        }
        playOne(i, t) {
          window.gs_sql.config.isOpenEffect && this.yinyueji[i] && (this.yinyueji[i].setLoop(t), this.yinyueji[i].play())
        }
        playOne1(i, t) {
          window.gs_sql.config.isOpenEffectEmot && this.yinyueji[i] && (this.yinyueji[i].setLoop(t), this.yinyueji[i].play())
        }
        playOne2(i, t) {
          window.gs_sql.config.isOpenEffect && this.yinyueji[i] && (this.yinyueji[i].stop(), this.yinyueji[i].play())
        }
        playBg(i) {
          window.gs_sql.config.isOpenMusic && this.m_nowBg != i && this.yinyueji[i] && (this.stopBg(), this.m_nowBg = i, this.clip = this.yinyueji[i], this.play())
        }
        stopBg() {
          this.m_nowBg = null, this.stop()
        }
      }).m_name = "ZGGSSoundMusic", o.inst = null, e = o)) || e);
      i("ZGGSSound", class {
        static play(i) {
          c.inst.playOne(i, !1)
        }
        static play1(i) {
          c.inst.playOne1(i, !1)
        }
        static playOne(i) {
          c.inst.playOne2(i, !1)
        }
        static playBg(i) {
          c.inst.playBg(i)
        }
        static stopBg() {
          c.inst.stopBg()
        }
        static getMuseState() {
          return c.inst.m_nowBg
        }
        static getInst() {
          return c.inst
        }
      }), t._RF.pop()
    }
  }
}));