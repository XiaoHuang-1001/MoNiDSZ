System.register("chunks:///_virtual/WJidumiantan2.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var i, s, e, n, o, l, a, c, b;
  return {
    setters: [function(t) {
      i = t.cclegacy, s = t._decorator, e = t.instantiate
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, l = t.gs_sql, a = t.gs_phone, c = t.gs_tabpr, b = t.gs_bmsg
    }],
    execute: function() {
      var r, g;
      i._RF.push({}, "f5146IRJlRBPqqMJSMKBtSv", "WJidumiantan2", void 0);
      const {
        ccclass: h,
        property: d
      } = s;
      t("WJidumiantan2", h("WJidumiantan2")(((g = class t extends n {
        constructor(...t) {
          super(...t), this.bdog = null, this.content = null, this.scrollView = null
        }
        xiabanye() {
          o.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.content = this.zgNodegzt("sw1/view/content", this.bdog), this.scrollView = this.zgScrollViewgsvt("sw1", this.bdog)
        }
        init(t) {
          let i = t.info;
          this.gsTxtStrbyNums("node_Info3/YMLabel1", 121, i.length, this.bdog);
          let s = [];
          for (let t = 0; t < i.length; t++) {
            let n = this.content.children[t],
              o = i[t];
            if (n || (n = e(this.content.children[0]), n.parent = this.content), n.active = o, o) {
              s.push(o.id);
              const t = l.findObjById("workInfo1", o.id),
                i = a.returnOneAttr(t.id);
              this.gsWorkPic(n, t), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, i.pot, n), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, i.amb, n);
              let e = o.info;
              if (this.gsTxtStrbyNums("lbl_info4/YMLabel1", 114, e.addDay, n), this.gsTxtStrbyNums("lbl_info5/YMLabel1", 120, e.addExp, n), this.zgNodegzt("lbl_info6/lay/YMLabel0", n).active = !e.upNum, this.zgNodegzt("lbl_info6/lay/YMLabel1", n).active = e.upNum, this.zgNodegzt("lbl_info6/lay/YMLabel2", n).active = e.upNum, e) {
                const i = c.co_job.zgTableKey(t.jobId);
                this.gsTxtGradelbl("lbl_info6/lay/YMLabel2", i.grade, i.name, n)
              }
            }
          }
          i.length > 3 ? this.scrollView.scrollToLeft() : this.content.setPosition(0, 0, 0);
          this.gsButtongbs("btn_3", (() => {
            b.send(2302, {
              id: s[0],
              roleArr: s,
              face: 311
            }), this.xiabanye()
          }), this.bdog)
        }
      }).m_name = "WJidumiantan2", r = g)) || r);
      i._RF.pop()
    }
  }
}));