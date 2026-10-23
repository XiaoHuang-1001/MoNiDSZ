System.register("chunks:///_virtual/Wyuangongmoyu.ts", ["cc", "./ZGGSOfficeFx.ts", "./minFunc.ts"], (function(s) {
  "use strict";
  var t, o, i, n, e, c, l, g, a, h;
  return {
    setters: [function(s) {
      t = s.cclegacy, o = s._decorator
    }, function(s) {
      i = s.ZGGSOfficeFx, n = s.gs_boss, e = s.gs_tabpr, c = s.gs_phone, l = s.gs_computer, g = s.gs_bmsg, a = s.gs_btxt
    }, function(s) {
      h = s.minFunc
    }],
    execute: function() {
      var u, r;
      t._RF.push({}, "e8f4fSgTNBJSLGhewZnq2Ic", "Wyuangongmoyu", void 0);
      const {
        ccclass: _,
        property: b
      } = o;
      s("Wyuangongmoyu", _("Wyuangongmoyu")(((r = class s extends i {
        constructor(...s) {
          super(...s), this.hezi = null, this._workInfo1_s = null, this.co_slack_tt = null
        }
        pohuiPage() {
          n.bossDieWin(s, 1)
        }
        load() {
          this.hezi = this.zgNodegzt("top"), this.co_slack_tt = e.co_slack.values, this.co_slack_tt = e.co_slack.objs, this.gsButtongbs("btn_2", function() {
            this.pohuiPage()
          }.bind(this), this.hezi)
        }
        init(s) {
          this.showInfo2(s)
        }
        showInfo2(s) {
          this._workInfo1_s = s.workInfo1_s, console.log("员工Id", s.workInfo1_s.id), this.bindInfo()
        }
        bindInfo() {
          let s = this.zgNodegzt("spr1", this.hezi),
            t = this._workInfo1_s;
          this.gsWorkPic(s, t);
          let o = c.returnOneAttr(t.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, o.pot, s), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, o.amb, s);
          let i = e.co_slack.objs[0],
            n = e.co_slack.objs[t.sex],
            u = i.concat(n),
            r = l.sjNumgs(0, u.length - 1),
            _ = u[r];
          console.log(_, 1, r, 2, u, 3), this.gsTxtLblgs("lbl_info3/YMLabel1", _.content, this.hezi);
          let b = e.co_job.zgTableKey(t.jobId);
          console.log(b.id, "co_job_t.id");
          let d = l.sjNumArrgs2(b.amb1, b.amb2, 1)[0],
            f = Math.ceil(d);
          this.gsTxtStrbyNums("YMLabel3", 302, f, this.hezi);
          let m = e.co_post.zgTableKey(t.postId);
          this.gsTxtGradelbl("node_1/YMLabel1", m.grade, m.name, s), this.gsButtongbs("btn_2", (() => {
            h.activitySuccess(16, 2, null), this.pohuiPage();
            l.addPingfenGs(2), g.send(206, a.gsStringByParam(113, 2));
            let s = {
              id: t.id,
              roleArr: [],
              face: 301
            };
            g.send(2302, s)
          }), this.hezi), this.gsButtongbs("btn_3", (() => {
            h.activitySuccess(16, 1, null), this.pohuiPage();
            let s = {
              amb: f,
              id: this._workInfo1_s.id,
              str: a.gsStringByParam(302, f),
              face: 313
            };
            g.send(2901, s), c.addWorkerAttr(t.id, s)
          }), this.hezi)
        }
      }).m_name = "Wyuangongmoyu", u = r)) || u);
      t._RF.pop()
    }
  }
}));