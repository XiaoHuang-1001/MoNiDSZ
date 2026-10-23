System.register("chunks:///_virtual/ZGGSDirectorated.ts", ["cc", "./ZGGSAnimationani.ts", "./ZGGSButtonbtn.ts", "./ZGGSEditBoxeb.ts", "./ZGGSLabellab.ts", "./ZGGSLayoutlist.ts", "./ZGGSProgressBarpb.ts", "./ZGGSRichTxtr.ts", "./ZGGSScrollviewsvi.ts", "./ZGGSSlidersli.ts", "./ZGGSSpritespr.ts", "./ZGGSToggletog.ts"], (function(t) {
  "use strict";
  var e, n, o, r, g, i, u, s, l, G, c, a, S, z;
  return {
    setters: [function(t) {
      e = t.cclegacy, n = t.find, o = t.UITransform
    }, function(t) {
      r = t.ZGGSAnimationani
    }, function(t) {
      g = t.ZGGSButtonbtn
    }, function(t) {
      i = t.ZGGSEditBoxeb
    }, function(t) {
      u = t.ZGGSLabellab
    }, function(t) {
      s = t.ZGGSLayoutlist
    }, function(t) {
      l = t.ZGGSProgressBarpb
    }, function(t) {
      G = t.ZGGSRichTxtr
    }, function(t) {
      c = t.ZGGSScrollviewsvi
    }, function(t) {
      a = t.ZGGSSlidersli
    }, function(t) {
      S = t.ZGGSSpritespr
    }, function(t) {
      z = t.ZGGSToggletog
    }],
    execute: function() {
      e._RF.push({}, "eed59fV2u9LNJ72Zum8mSMZ", "ZGGSDirectorated", void 0);
      class Z {
        static zgNodegzt(t, e = null) {
          return "string" != typeof t ? t : e ? n(t, e) : n(t)
        }
        static getComponent(t, e, n = null) {
          return Z.zgNodegzt(e).getComponent(t)
        }
        static getSprite(t, e = null) {
          return Z.zgNodegzt(t, e).getComponent(S)
        }
        static getLabel(t, e = null) {
          return Z.zgNodegzt(t, e).getComponent(u)
        }
        static getButton(t, e = null) {
          return Z.zgNodegzt(t, e).getComponent(g)
        }
        static getRichText(t, e = null) {
          return Z.zgNodegzt(t, e).getComponent(G)
        }
        static getScrollView(t, e = null) {
          return Z.zgNodegzt(t, e).getComponent(c)
        }
        static getSlider(t, e = null) {
          return Z.zgNodegzt(t, e).getComponent(a)
        }
        static getProgressBar(t, e = null) {
          return Z.zgNodegzt(t, e).getComponent(l)
        }
        static getEditBox(t, e = null) {
          return Z.zgNodegzt(t, e).getComponent(i)
        }
        static getToggle(t, e = null) {
          return Z.zgNodegzt(t, e).getComponent(z)
        }
        static getAnimation(t, e = null) {
          return Z.zgNodegzt(t, e).getComponent(r)
        }
        static getUITransform(t, e = null) {
          return Z.zgNodegzt(t, e).getComponent(o)
        }
        static getLayout(t, e = null) {
          return Z.zgNodegzt(t, e).getComponent(s)
        }
      }
      t("ZGGSDirectorated", Z), e._RF.pop()
    }
  }
}));