System.register("chunks:///_virtual/WChengjiu2.ts", ["cc", "./ZGGSOfficeFx.ts", "./WChengjiu.ts"], (function(s) {
  "use strict";
  var t, i, e, n, g, o, b, c, a, h;
  return {
    setters: [function(s) {
      t = s.cclegacy, i = s._decorator
    }, function(s) {
      e = s.ZGGSOfficeFx, n = s.gs_boss, g = s.gs_bmsg, o = s.gs_tabpr, b = s.gs_sql, c = s.gs_btxt, a = s.gs_computer
    }, function(s) {
      h = s.WChengjiu
    }],
    execute: function() {
      var u, l;
      t._RF.push({}, "2973aW6qmdPYq0n3AmwJ+T/", "WChengjiu2", void 0);
      const {
        ccclass: r,
        property: d
      } = i;
      s("WChengjiu2", r("WChengjiu2")(((l = class s extends e {
        constructor(...s) {
          super(...s), this.bdog = null
        }
        xiabanye() {
          n.bossDieWin(s, 1)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsButtongbs("guanbi", (() => {
            g.send(2100, !1), this.xiabanye()
          }), this.bdog)
        }
        init(s) {
          let t = s;
          const i = o.co_accomplish.zgTableKey(t);
          this.gsTxtLblgs("lbl_info1/YMLabel1", i.name, this.bdog), this.gsTxtLblgs("lbl_info3/YMLabel1", i.des, this.bdog);
          let e = b.cjInfo.timeCj[i.id] || (new Date).valueOf(),
            g = c.gsStringByParam(112, a.zgTimeByStrgs(e));
          this.gsTxtLblgs("YMLabel1", g, this.bdog), this.gsButtongbs("btn_no", (() => {
            n.bossWshow(h, t), this.xiabanye()
          }), this.bdog)
        }
      }).m_name = "WChengjiu2", u = l)) || u);
      t._RF.pop()
    }
  }
}));