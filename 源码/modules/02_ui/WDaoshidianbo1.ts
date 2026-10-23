System.register("chunks:///_virtual/WDaoshidianbo1.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSScrollviewsvi.ts", "./WDaoshidianbo2.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, i, e, n, o, h, l, a, g, c, r, b, d, u, f;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator, e = t.instantiate
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, h = t.gs_sql, l = t.gs_phone, a = t.gs_tabpr, g = t.gs_www, c = t.gs_btxt, r = t.gs_computer, b = t.gs_bmsg
    }, function(t) {
      d = t.ZGGSScrollviewsvi
    }, function(t) {
      u = t.WDaoshidianbo2
    }, function(t) {
      f = t.minFunc
    }],
    execute: function() {
      var _, m;
      s._RF.push({}, "a3292kN6YRF9o5AT8jr8xjZ", "WDaoshidianbo1", void 0);
      const {
        ccclass: w,
        property: p
      } = i;
      t("WDaoshidianbo1", w("WDaoshidianbo1")(((m = class t extends n {
        constructor(...t) {
          super(...t), this.fanghe = null, this.swCom = null, this.mianCt = null, this.content = null, this.sw = null, this.item = null, this.choose = 0, this.maidianGG1 = 12
        }
        xiabanye() {
          o.bossDieWin(t, 1)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.sw = this.zgNodegzt("sw1", this.fanghe), this.swCom = this.sw.getComponent(d), this.mianCt = this.zgNodegzt("view/content", this.sw), this.content = this.zgNodegzt("content", this.fanghe), this.item = this.zgNodegzt("spr1", this.fanghe)
        }
        init(t) {
          this.showWDaoshidianbo1(t)
        }
        showWDaoshidianbo1(t) {
          this.topDes();
          let s = t.can,
            i = this.content;
          s.length > 3 ? (this.swCom.scrollToLeft(), i = this.mianCt, this.sw.active = !0, this.content.active = !1) : (this.sw.active = !1, this.content.active = !0), this.choose = s[0].id;
          let n = i.children,
            o = [];
          for (let t = 0; t < s.length; t++) {
            let g = n[t];
            g || (g = e(this.item), g.parent = i), g.active = !0;
            let c = s[t],
              r = h.findObjById("workInfo1", c.id);
            console.log(r), this.gsWorkPic(g, r);
            let b = l.returnOneAttr(r.id);
            this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, b.pot, g), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, b.amb, g);
            let d = a.co_job.zgTableKey(r.jobId),
              u = Math.ceil(2 * d.get_money);
            this.gsTxtStrbyNums("lbl_info4/YMLabel2", 102, u, g);
            let f = {
              id: c.id,
              workInfo1_s: r,
              earn: u
            };
            o.push(f);
            let _ = this.zgTogglegtts("lbl_info10/toggle", g);
            _.isChecked = this.choose == c.id, this.gsButtongbs("lbl_info10/btn", (() => {
              this.choose = c.id;
              for (let t = 0; t < s.length; t++) {
                let s = n[t];
                this.zgTogglegtts("lbl_info10/toggle", s).isChecked = !1
              }
              _.isChecked = !0
            }), g)
          }
          for (let t = s.length; t < n.length; t++) n[t].active = !1;
          let c = [];
          this.gsButtongbs("btn_3", (() => {
            f.activitySuccess(26, 1, null);
            for (let t = 0; t < o.length; t++)
              if (o[t].id == this.choose) {
                c.push(o[t]);
                break
              } this.dealResult(c)
          }), this.fanghe), f.ggbtnPlay(this.zgNodegzt("btn_2", this.fanghe), this.maidianGG1), this.gsButtongbs("btn_2", (() => {
            g.GGShowVido(this.maidianGG1, (() => {
              f.activitySuccess(26, 2, null), this.dealResult(o)
            }))
          }), this.fanghe)
        }
        topDes() {
          let t = c.gsStringHelpIn(11),
            s = t[r.sjNumArrgs2(0, t.length - 1, 1)];
          this.gsTxtLblgs("node_Info4/YMLabel1", s, this.fanghe)
        }
        dealResult(t) {
          this.node.active = !1;
          let s = {
            can: t,
            _func: t => {
              let s = {
                id: t[0],
                roleArr: t,
                face: 311
              };
              b.send(2302, s), this.xiabanye()
            }
          };
          o.bossWshow(u, s)
        }
      }).m_name = "WDaoshidianbo1", _ = m)) || _);
      s._RF.pop()
    }
  }
}));