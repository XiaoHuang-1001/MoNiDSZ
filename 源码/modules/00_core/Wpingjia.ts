System.register("chunks:///_virtual/Wpingjia.ts", ["cc", "./ZGGSOfficeFx.ts", "./Wpingjia2.ts"], (function(t) {
  "use strict";
  var i, s, o, e, g, n, h, a;
  return {
    setters: [function(t) {
      i = t.cclegacy, s = t._decorator
    }, function(t) {
      o = t.ZGGSOfficeFx, e = t.gs_boss, g = t.gs_bmsg, n = t.gs_tabpr, h = t.gs_sql
    }, function(t) {
      a = t.Wpingjia2
    }],
    execute: function() {
      var l, p;
      i._RF.push({}, "fda728MBKtARYNQCKzcgvyN", "Wpingjia", void 0);
      const {
        ccclass: c,
        property: b
      } = s;
      t("Wpingjia", c("Wpingjia")(((p = class t extends o {
        constructor(...t) {
          super(...t), this.top = null, this.co_title_ttt = null
        }
        pohuiPage() {
          e.bossDieWin(t, 2), g.send(2100, !1)
        }
        load() {
          this.gsButtongbs("YMSpriteSplash", (() => {
            this.pohuiPage()
          })), this.top = this.zgNodegzt("top"), this.co_title_ttt = n.co_title.objs, this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.top)
        }
        init() {
          g.send(2100, !0), this.showInfo()
        }
        showInfo() {
          let t = h.base.pingfen;
          this.gsTxtLblgs("lay-001/YMLabel2", t, this.top);
          let i = h.pingjiaInfo,
            s = n.co_title.zgTableKey(i.titId);
          this.gsTxtLblgs("lay-001/YMLabel3", s.power, this.top);
          let o = n.co_title.zgTableKey(i.titId + 1);
          console.log(o, "next_t");
          let l = this.zgNodegzt("xing", this.top).children;
          for (let t = 0; t < l.length; t++) l[t].active = s.star > t;
          if (this.zgNodegzt("lbl_info4", this.top).active = o, this.zgNodegzt("lay-001", this.top).active = o, this.zgNodegzt("node_2", this.top).active = o, this.zgNodegzt("top1", this.top).active = o, this.zgNodegzt("top2", this.top).active = o, this.zgNodegzt("btn_1", this.top).active = o, this.zgNodegzt("btn_3", this.top).active = !o, o) {
            this.gsTxtLblgs("lay-001/YMLabel3", o.power, this.top), this.gsTxtGradelbl("lbl_info2/YMLabel1", s.grade, s.title, this.top), this.gsTxtLblgs("top1/node_2/lay/YMLabel2", o.award[1], this.top), this.gsTxtLblgs("top2/node_2/lay/YMLabel2", o.award[3], this.top);
            let i = t >= o.power;
            this.gsLblCororgst3("lay-001/YMLabel2", i, this.top), this.gsButtonStategbs("btn_1", i ? 1 : 0, this.top), this.gsButtongbs("btn_1", function() {
              let t = {
                co_title_t: s,
                next_t: o,
                _func: function() {
                  g.send(1201), this.pohuiPage()
                }.bind(this)
              };
              e.bossWshow(a, t)
            }.bind(this), this.top)
          }
        }
      }).m_name = "Wpingjia", l = p)) || l);
      i._RF.pop()
    }
  }
}));