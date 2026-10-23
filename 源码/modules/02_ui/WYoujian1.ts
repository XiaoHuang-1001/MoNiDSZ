System.register("chunks:///_virtual/WYoujian1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WTishis.ts"], (function(t) {
  "use strict";
  var s, e, n, i, o, g, a, h, l;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      n = t.ZGGSOfficeFx, i = t.gs_boss, o = t.gs_computer, g = t.gs_btxt, a = t.gs_bmsg, h = t.gs_sql
    }, function(t) {
      l = t.WTishis
    }],
    execute: function() {
      var c, r;
      s._RF.push({}, "1676coefFpBqYQglglsjHLz", "WYoujian1", void 0);
      const {
        ccclass: u,
        property: b
      } = e;
      t("WYoujian1", u("WYoujian1")(((r = class t extends n {
        constructor(...t) {
          super(...t), this.fanghe = null, this.content = null, this.txt = null
        }
        xiabanye() {
          i.bossDieWin(t, 2)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.txt = this.zgNodegzt("sw1/view/content/txt1", this.fanghe), this.content = this.zgNodegzt("content")
        }
        init(t) {
          this.showDetail(t), this.gsButtongbs("guanbi", (() => {
            t._func(!1), this.xiabanye()
          }), this.fanghe), this.gsButtongbs("YMSpriteSplash", (() => {
            t._func(!1), this.xiabanye()
          }))
        }
        showDetail(t) {
          let s = t.type,
            e = t.info;
          this.content.active = e.enclosure, this.zgNodegzt("lay/btn_yes", this.fanghe).active = e.enclosure && 1 == e.state;
          let n = [],
            c = [];
          if (e.enclosure) {
            let t = e.enclosure.split(",");
            this.zgNodegzt("top1", this.content).active = e.enclosure.length >= 2, e.enclosure.length >= 2 && (n = [1 * t[0], 1 * t[1]], this.gsTxtLblgs("top1/node_2/YMLabel2", o.gsNumValueShow(n[1]), this.content), this.gsSprstHtByList("top1/node_1/icon", "qian", g.gsAwardImg2(n[0]), this.content), this.gsTxtLblgs("top1/node_1/YMLabel1", g.gsNeedAward(n[0]), this.content)), this.zgNodegzt("top2", this.content).active = e.enclosure.length >= 4, e.enclosure.length >= 4 && (c = [1 * t[2], 1 * t[3]], this.gsTxtLblgs("top2/node_2/YMLabel2", o.gsNumValueShow(c[1]), this.content), this.gsSprstHtByList("top2/node_1/icon", "qian", g.gsAwardImg2(c[0]), this.content), this.gsTxtLblgs("top2/node_1/YMLabel1", g.gsNeedAward(c[0]), this.content))
          }
          this.gsTxtLblgs(this.txt, e.content);
          let r = o.zgTimeByStrgs(e.create_time);
          this.gsTxtLblgs("YMLabel2", r, this.fanghe), this.gsButtongbs("lay/btn_no", (() => {
            let n = () => {
                if (1 == s) {
                  for (var n = 0; n < h.youjian.arr1.length; n++)
                    if (h.youjian.arr1[n].id == e.id) {
                      h.youjian.arr1.splice(n, 1);
                      break
                    }
                } else if (2 == s)
                  for (n = 0; n < h.youjian.arr2.length; n++)
                    if (h.youjian.arr2[n].id == e.id) {
                      h.youjian.arr2.splice(n, 1);
                      break
                    } t._func(!0), this.xiabanye()
              },
              o = g.gsNorStringType(4);
            if (1 == e.state && e.enclosure) {
              2 == s && (o = g.gsNorStringType(5));
              let t = {
                _func: function(t) {
                  t && n()
                }.bind(this),
                str: o,
                showNot: !0
              };
              i.bossWshow(l, t)
            } else n()
          }), this.fanghe), this.gsButtongbs("lay/btn_yes", (() => {
            n.length > 0 && (o.getNeedTabgs(n, null, -1), a.send(211, n[0], {})), c.length > 0 && (o.getNeedTabgs(c, null, -1), a.send(211, c[0], {})), e.state = 2, t._func(!0), this.xiabanye()
          }), this.fanghe)
        }
      }).m_name = "WYoujian1", c = r)) || c);
      s._RF.pop()
    }
  }
}));