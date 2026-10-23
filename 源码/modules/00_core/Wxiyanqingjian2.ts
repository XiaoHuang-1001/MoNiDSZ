System.register("chunks:///_virtual/Wxiyanqingjian2.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts", "./Wxiyanqingjian3.ts"], (function(i) {
  "use strict";
  var t, s, n, e, o, a, h, g, l, r, c;
  return {
    setters: [function(i) {
      t = i.cclegacy, s = i._decorator
    }, function(i) {
      n = i.ZGGSOfficeFx, e = i.gs_boss, o = i.gs_bmsg, a = i.gs_phone, h = i.gs_tabpr, g = i.gs_computer, l = i.gs_www
    }, function(i) {
      r = i.minFunc
    }, function(i) {
      c = i.Wxiyanqingjian3
    }],
    execute: function() {
      var b, u;
      t._RF.push({}, "53760x+NaRHEYvx18QAii+E", "Wxiyanqingjian2", void 0);
      const {
        ccclass: _,
        property: d
      } = s;
      i("Wxiyanqingjian2", _("Wxiyanqingjian2")(((u = class i extends n {
        constructor(...i) {
          super(...i), this.hezi = null, this._workInfo1_s = null, this.maidianGG1 = 18
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
          let n = h.co_job.zgTableKey(t.jobId),
            o = g.sjNumArrgs2(n.amb1, n.amb2, 1)[0],
            b = Math.ceil(o / 1 * 6);
          this.gsTxtStrbyStrs("lbl_info4/YMLabel1", 34, t.name, this.hezi);
          let u = h.co_post.zgTableKey(t.postId);
          this.gsTxtGradelbl("node_1/YMLabel1", u.grade, u.name, i), this.zgLableglt("btn_3/title", this.hezi).unscheduleAllCallbacks(), this.gsButtongbs("btn_2", (() => {
            this.pohuiPage(t.id, 303)
          }), this.hezi), r.ggbtnPlay(this.zgNodegzt("btn_3", this.hezi), this.maidianGG1), this.gsButtongbs("btn_3", (() => {
            l.GGShowVido(this.maidianGG1, (() => {
              let i = {
                add: b,
                workAttr: s,
                workInfo1_s: t,
                face: 303,
                face2: 304,
                _func: () => {
                  this.pohuiPage(t.id, 301)
                }
              };
              this.node.active = !1, e.bossWshow(c, i)
            }))
          }), this.hezi)
        }
      }).m_name = "Wxiyanqingjian2", b = u)) || b);
      t._RF.pop()
    }
  }
}));