System.register("chunks:///_virtual/WShangweijiedai2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var i, e, s, o, n, l, a, g;
  return {
    setters: [function(t) {
      i = t.cclegacy, e = t._decorator
    }, function(t) {
      s = t.ZGGSOfficeFx, o = t.gs_boss, n = t.gs_sql, l = t.gs_phone, a = t.gs_tabpr, g = t.gs_bmsg
    }],
    execute: function() {
      var c, b;
      i._RF.push({}, "4ca6385lsFFjI2XC864LHU/", "WShangweijiedai2", void 0);
      const {
        ccclass: d,
        property: h
      } = e;
      t("WShangweijiedai2", d("WShangweijiedai2")(((b = class t extends s {
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
          const i = t.table;
          this.gsTxtLblgs("node_Info3/YMLabel1", i.des, this.bdog);
          let e = t.info,
            s = [];
          for (let t = 0; t < 3; t++) {
            let o = this.content.children[t],
              g = e[t];
            if (o.active = g, g) {
              s.push(g.id);
              const t = n.findObjById("workInfo1", g.id),
                e = l.returnOneAttr(t.id);
              this.gsWorkPic(o, t), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, e.pot, o), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, e.amb, o), this.gsTxtStrbyNums("lbl_info6/YMLabel2", 114, i.day, o);
              let c = g.info;
              if (this.zgNodegzt("lbl_info4/lay/YMLabel0", o).active = !c.upNum, this.zgNodegzt("lbl_info4/lay/YMLabel1", o).active = c.upNum, this.zgNodegzt("lbl_info4/lay/YMLabel2", o).active = c.upNum, c) {
                const i = a.co_job.zgTableKey(t.jobId);
                this.gsTxtGradelbl("lbl_info4/lay/YMLabel2", i.grade, i.name, o)
              }
            }
          }
          this.gsButtongbs("btn_2", (() => {
            g.send(2302, {
              id: s[0],
              roleArr: s,
              face: i.emote_id
            }), this.pohuiPage()
          }), this.bdog)
        }
      }).m_name = "WShangweijiedai2", c = b)) || c);
      i._RF.pop()
    }
  }
}));