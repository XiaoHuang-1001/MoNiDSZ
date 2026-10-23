System.register("chunks:///_virtual/WChuchai2.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, i, o, n, l, c, a, u;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, o = t.gs_boss, n = t.gs_tabpr, l = t.gs_sql, c = t.gs_phone, a = t.gs_bmsg
    }, function(t) {
      u = t.minFunc
    }],
    execute: function() {
      var h, g;
      s._RF.push({}, "7fae0ctzuxGpa8YqVuQeOE+", "WChuchai2", void 0);
      const {
        ccclass: b,
        property: r
      } = e;
      t("WChuchai2", b("WChuchai2")(((g = class t extends i {
        constructor(...t) {
          super(...t), this.bdog = null, this.content = null, this.duisNode = null
        }
        pohuiPage() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.content = this.zgNodegzt("content", this.bdog)
        }
        init(t) {
          u.activityStart(6, null);
          const s = n.co_serve.zgTableKey(t.step);
          this.gsTxtGradelbl("node_Info3/lay/YMLabel2", s.grade, s.name, this.bdog);
          let e = t.info,
            i = [];
          for (let t = 0; t < 3; t++) {
            let s = this.content.children[t],
              o = e[t];
            if (s.active = o, o) {
              i.push(o.id);
              const t = l.findObjById("workInfo1", o.id),
                e = c.returnOneAttr(t.id);
              this.gsWorkPic(s, t), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, e.pot, s), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, e.amb, s), this.gsTxtStrbyNums("lbl_info6/YMLabel2", 114, o.day, s);
              let a = o.info;
              if (this.zgNodegzt("lbl_info4/lay/YMLabel0", s).active = !a.upNum, this.zgNodegzt("lbl_info4/lay/YMLabel1", s).active = a.upNum, this.zgNodegzt("lbl_info4/lay/YMLabel2", s).active = a.upNum, a) {
                const e = n.co_job.zgTableKey(t.jobId);
                this.gsTxtGradelbl("lbl_info4/lay/YMLabel2", e.grade, e.name, s)
              }
            }
          }
          let o = () => {
            l.companyInfo.wccc += 1, a.send(2302, {
              id: i[0],
              roleArr: i,
              face: 312
            }), this.pohuiPage()
          };
          this.gsButtongbs("btn_2", o, this.bdog), this.gsButtongbs("YMSpriteSplash", o)
        }
      }).m_name = "WChuchai2", h = g)) || h);
      s._RF.pop()
    }
  }
}));