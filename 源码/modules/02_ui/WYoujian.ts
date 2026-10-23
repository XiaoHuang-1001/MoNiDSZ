System.register("chunks:///_virtual/WYoujian.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSRedHdian.ts", "./WYoujian1.ts"], (function(t) {
  "use strict";
  var e, s, i, n, h, o, g, a, l, c, r, d;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator, i = t.UITransform, n = t.instantiate
    }, function(t) {
      h = t.ZGGSOfficeFx, o = t.gs_bmsg, g = t.gs_boss, a = t.gs_sql, l = t.gs_btxt, c = t.gs_computer
    }, function(t) {
      r = t.ZGGSRedHdian
    }, function(t) {
      d = t.WYoujian1
    }],
    execute: function() {
      var u, f;
      e._RF.push({}, "c64d2XufzhOSptpVWM8ZhEY", "WYoujian", void 0);
      const {
        ccclass: b,
        property: z
      } = s;
      t("WYoujian", b("WYoujian")(((f = class t extends h {
        constructor(...t) {
          super(...t), this.fanghe = null, this.conent = null, this.item = null, this.redT = null, this.topIdx = 0
        }
        xiabanye() {
          o.send(2100, !1), g.bossDieWin(t, 2)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.gsButtongbs("guanbi", (() => {
            this.xiabanye()
          }), this.fanghe), this.gsButtongbs("YMSpriteSplash", (() => {
            this.xiabanye()
          })), this.redT = this.zgNodegzt("title", this.fanghe).getComponent(i), this.conent = this.zgNodegzt("sw1/view/content", this.fanghe), this.item = this.zgNodegzt("node_1", this.fanghe);
          let t = this.zgNodegzt("content", this.fanghe).children;
          for (let e = 0; e < t.length; e++) {
            let s = t[e];
            this.gsButtongbs(s, (t => {
              console.log("点击", e), this.gsBtnArrStatests(t.target), this.topIdx = e, this.showEamil()
            }))
          }
          this.redPoint()
        }
        init() {
          o.send(2100, !0), this.showList()
        }
        showList() {
          let t = this.zgNodegzt("content", this.fanghe).children;
          this.gsButtongbsx(t[this.topIdx])
        }
        showEamil() {
          let t = a.youjian.arr1,
            e = l.gsNorStringType(2);
          1 == this.topIdx && (t = a.youjian.arr2, e = l.gsNorStringType(3));
          let s = this.conent.children;
          for (let e = 0; e < t.length; e++) {
            let i = s[e];
            i || (i = n(this.item), i.parent = this.conent), i.active = !0, this.bindItem(i, t[e])
          }
          for (let e = t.length; e < s.length; e++) s[e].active = !1;
          this.zgNodegzt("lbl_info3", this.fanghe).active = t.length <= 0, this.gsTxtLblgs("lbl_info3/YMLabel1", e, this.fanghe), this.zgNodegzt("sw1", this.fanghe).active = t.length > 0
        }
        bindItem(t, e) {
          this.gsTxtLblgs("YMLabel1", e.title, t);
          let s = c.zgTimeByStrgs(e.create_time);
          this.gsTxtLblgs("YMLabel2", s, t), this.zgNodegzt("huajie1/read", t).active = 1 == e.state, this.gsButtongbs("huajie1", (() => {
            let s = {
              type: this.topIdx + 1,
              info: e,
              _func: s => {
                s ? this.showEamil() : (e.enclosure || (e.state = 3), this.bindItem(t, e))
              }
            };
            g.bossWshow(d, s)
          }), t)
        }
        redPoint() {
          this.redT.unscheduleAllCallbacks();
          let t = this.zgNodegzt("content", this.fanghe).children,
            e = function() {
              let e = r.youRedPoint(1);
              this.zgNodegzt("read", t[0]).active = e;
              let s = r.youRedPoint(2);
              this.zgNodegzt("read", t[1]).active = s
            }.bind(this);
          this.redT.schedule(e, .5), e()
        }
      }).m_name = "WYoujian", u = f)) || u);
      e._RF.pop()
    }
  }
}));