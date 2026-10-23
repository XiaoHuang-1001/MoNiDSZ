System.register("chunks:///_virtual/WJidumiantan1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WJidumiantan2.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, i, e, n, o, l, r, h, d, g, a, c, u, b;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator, e = t.instantiate, n = t.v2
    }, function(t) {
      o = t.ZGGSOfficeFx, l = t.gs_boss, r = t.gs_www, h = t.gs_btxt, d = t.gs_sql, g = t.gs_tabpr, a = t.gs_computer, c = t.gs_phone
    }, function(t) {
      u = t.WJidumiantan2
    }, function(t) {
      b = t.minFunc
    }],
    execute: function() {
      var f, m;
      s._RF.push({}, "f069a0jH8JC2r4RBXpl0Rz+", "WJidumiantan1", void 0);
      const {
        ccclass: _,
        property: p
      } = i;
      t("WJidumiantan1", _("WJidumiantan1")(((m = class t extends o {
        constructor(...t) {
          super(...t), this.bdog = null, this.selIndex = 0, this.roleArr = [], this.addNum = {}, this.showGG = 10
        }
        xiabanye() {
          l.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsButtongbs("btn_3", (() => {
            b.activitySuccess(27, 1, null), this.endEven(!1)
          }), this.bdog), b.ggbtnPlay(this.zgNodegzt("btn_2", this.bdog), this.showGG), this.gsButtongbs("btn_2", (() => {
            r.GGShowVido(this.showGG, (() => {
              b.activitySuccess(27, 2, null), this.endEven(!0)
            }))
          }), this.bdog)
        }
        init(t) {
          let s = t.type || 1;
          this.gsTxtLblgs("node_Info4/YMLabel1", h.gsStringByParam(119, s), this.bdog), this.roleArr = t.role;
          for (let t = 0; t < this.roleArr.length; t++) {
            const s = d.findObjById("workInfo1", this.roleArr[t]),
              i = g.co_job.zgTableKey(s.jobId);
            let e = a.sjNumgs(i.num1, i.num2);
            this.addNum[s.id] || (this.addNum[s.id] = e)
          }
          this.roleArr.sort(((t, s) => this.addNum[s] - this.addNum[t])), console.log(t.role), this.initRoleInfo()
        }
        initRoleInfo() {
          let t = this.zgNodegzt("sw1/view/content", this.bdog),
            s = this.zgScrollViewgsvt("sw1", this.bdog);
          for (let s = 0; s < this.roleArr.length; s++) {
            let i = t.children[s];
            i || (i = e(t.children[0]), i.parent = t);
            let n = this.roleArr[s];
            if (i.active = n, n) {
              const e = d.findObjById("workInfo1", n);
              this.gsWorkPic(i, e);
              let o = c.returnOneAttr(e.id);
              this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, o.pot, i), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, o.amb, i), this.gsTxtStrbyNums("lbl_info4/YMLabel1", 114, this.addNum[n], i), this.zgNodegzt("lbl_info10/toggle/check", i).active = this.selIndex == s, this.gsButtongbs("lbl_info10/btn", (() => {
                let e = t.children[this.selIndex];
                e && (this.zgNodegzt("lbl_info10/toggle/check", e).active = !1), this.selIndex = s, this.zgNodegzt("lbl_info10/toggle/check", i).active = !0
              }), i)
            }
          }
          this.roleArr.length > 3 && s.scrollToOffset(n(this.roleArr.length / 2 * -420, 0), 0)
        }
        endEven(t) {
          let s = [];
          if (t)
            for (let t = 0; t < this.roleArr.length; t++) {
              let i = this.roleArr[t];
              if (i > 1) {
                let t = this.addNum[i] || 1,
                  e = c.addExpUpById(i, t);
                s.push({
                  id: i,
                  info: e,
                  day: t
                })
              }
            } else {
              let t = this.roleArr[this.selIndex],
                i = this.addNum[t] || 1,
                e = c.addExpUpById(t, i);
              s.push({
                id: t,
                info: e,
                day: i
              })
            }
          l.bossWshow(u, {
            info: s
          }), this.xiabanye()
        }
      }).m_name = "WJidumiantan1", f = m)) || f);
      s._RF.pop()
    }
  }
}));