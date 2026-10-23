System.register("chunks:///_virtual/Wxiyanqingjian.ts", ["cc", "./ZGGSOfficeFx.ts", "./Wxiyanqingjian1.ts", "./minFunc.ts"], (function(i) {
  "use strict";
  var t, s, n, e, o, a, h, l, c, g, r, u;
  return {
    setters: [function(i) {
      t = i.cclegacy, s = i._decorator
    }, function(i) {
      n = i.ZGGSOfficeFx, e = i.gs_boss, o = i.gs_bmsg, a = i.gs_phone, h = i.gs_tabpr, l = i.gs_computer, c = i.gs_www, g = i.gs_sql
    }, function(i) {
      r = i.Wxiyanqingjian1
    }, function(i) {
      u = i.minFunc
    }],
    execute: function() {
      var b, _;
      t._RF.push({}, "fd537zXRXJJkpuCWDVxZprz", "Wxiyanqingjian", void 0);
      const {
        ccclass: d,
        property: f
      } = s;
      i("Wxiyanqingjian", d("Wxiyanqingjian")(((_ = class i extends n {
        constructor(...i) {
          super(...i), this.hezi = null, this._workInfo1_s = null, this.maidianGG1 = 7
        }
        pohuiPage(t, s) {
          e.bossDieWin(i, 1);
          let n = {
            id: t,
            roleArr: [],
            face: s
          };
          o.send(2302, n)
        }
        load() {
          this.hezi = this.zgNodegzt("top")
        }
        init(i) {
          this.showInfo2(i)
        }
        showInfo2(i) {
          this._workInfo1_s = i.workInfo1_s, console.log("员工Id", i.workInfo1_s.id), this.bindInfo()
        }
        bindInfo() {
          let i = this.zgNodegzt("spr1", this.hezi),
            t = this._workInfo1_s;
          this.gsWorkPic(i, t);
          let s = a.returnOneAttr(t.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, s.pot, i), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, s.amb, i);
          let n = h.co_job.zgTableKey(t.jobId);
          console.log(n, 88888888);
          let o = l.sjNumArrgs2(n.amb1, n.amb2, 1)[0],
            b = Math.ceil(o / 1 * 6);
          this.gsTxtStrbyNums("YMLabel2", 307, b, this.hezi);
          let _ = h.co_post.zgTableKey(t.postId);
          this.gsTxtGradelbl("node_1/YMLabel1", _.grade, _.name, i), this.zgLableglt("btn_3/title", this.hezi).unscheduleAllCallbacks(), this.gsButtongbs("btn_2", (() => {
            u.activitySuccess(18, 1, null), this.pohuiPage(t.id, 304)
          }), this.hezi), u.ggbtnPlay(this.zgNodegzt("btn_3", this.hezi), this.maidianGG1), this.gsButtongbs("btn_3", (() => {
            c.GGShowVido(this.maidianGG1, (() => {
              u.activitySuccess(18, 2, null);
              let i = {
                add: b,
                workAttr: s,
                workInfo1_s: t,
                face: 303,
                face2: 304,
                _func: () => {
                  this.pohuiPage(t.id, 303)
                }
              };
              this.node.active = !1, g.companyInfo.xiyan += 1, e.bossWshow(r, i)
            }))
          }), this.hezi)
        }
      }).m_name = "Wxiyanqingjian", b = _)) || b);
      t._RF.pop()
    }
  }
}));