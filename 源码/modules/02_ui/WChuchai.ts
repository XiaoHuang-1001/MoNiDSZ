System.register("chunks:///_virtual/WChuchai.ts", ["cc", "./ZGGSOfficeFx.ts", "./WChuchai2.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, i, n, o, c, h, g, a, l, d, f, b;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator, i = t.instantiate, n = t.UITransform
    }, function(t) {
      o = t.ZGGSOfficeFx, c = t.gs_boss, h = t.gs_tabpr, g = t.gs_bmsg, a = t.gs_sql, l = t.gs_btxt, d = t.gs_phone
    }, function(t) {
      f = t.WChuchai2
    }, function(t) {
      b = t.minFunc
    }],
    execute: function() {
      var r, u;
      s._RF.push({}, "961ecY+OppHQY8sSWcqbSQN", "WChuchai", void 0);
      const {
        ccclass: _,
        property: I
      } = e;
      t("WChuchai", _("WChuchai")(((u = class t extends o {
        constructor(...t) {
          super(...t), this.bdog = null, this.closeBtn = null, this.showInfo = null
        }
        xiabanye() {
          c.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.closeBtn = this.zgNodegzt("close", this.bdog), this.showInfo = this.zgNodegzt("node_2", this.bdog);
          const t = h.co_egress.values;
          for (let s = 0; s < 4; s++) this.gsTxtLblgs("lbl_info1", t[s].name, this.showInfo.children[s]);
          this.closeBtn.active = !1, this.gsButtongbs(this.closeBtn, function() {
            this.showInfo.active = !1, this.closeBtn.active = !1
          }.bind(this)), this.gsButtongbs("guanbi", function() {
            g.send(2100, !1), this.xiabanye()
          }.bind(this), this.bdog), this.gsButtongbs("YMSpriteSplash", function() {
            g.send(2100, !1), this.xiabanye()
          }.bind(this))
        }
        init(t) {
          b.activityEnter(6), g.send(2100, !0), this.zgNodegzt("lbl_info2", this.bdog).active = a.chucaiInfo.ccInfo.length <= 0, this.zgNodegzt("sw1", this.bdog).active = a.chucaiInfo.ccInfo.length > 0, a.chucaiInfo.ccInfo.length <= 0 || (a.chucaiInfo.ccInfo.sort((function(t, s) {
            return t.day - s.day
          })), this.refreshInfoShow())
        }
        refreshInfoShow() {
          let t = this.zgNodegzt("sw1/view/content", this.bdog);
          for (let s = 0; s < a.chucaiInfo.ccInfo.length; s++) {
            let e = t.children[s];
            e || (e = i(t.children[0]), e.parent = t), e.active = !0;
            let o = a.chucaiInfo.ccInfo[s];
            this.gsTxtLblgs("tit1/lay2/txt1", l.gsStringHelpIn(110)[o.type], e);
            const c = h.co_serve.zgTableKey(o.step);
            this.gsTxtGradelbl("tit1/lay2/txt2", c.grade, c.name, e);
            for (let t = 0; t < 3; t++) {
              let s = this.zgNodegzt("sw1", e).children[t],
                i = o.role[t];
              this.infoRe(s, i, t)
            }
            let g = o.bt.reduce((function(t, s) {
              return t + s
            }));
            this.gsTxtStrbyNums("lbl_info2", 115, g, e);
            let d = this.zgNodegzt("lbl_info2", e),
              f = d.getComponent(n).contentSize;
            this.gsButtongbs("lbl_info2", (() => {
              this.showInfo.active = !0, this.closeBtn.active = !0;
              for (let t = 0; t < 4; t++) this.zgNodegzt(`btn_${t+1}/lbl_info3/check`, this.showInfo).active = o.bt[t] > 0;
              let t = this.showInfo.getComponent(n).contentSize.height,
                s = this.gsWorldposgws(d),
                e = s.x,
                i = s.y;
              i >= 0 ? i = i - (f.height + t) / 2 - 20 : i += (f.height + t) / 2, this.showInfo.setPosition(e, i, 0)
            }), e), this.zgNodegzt("btn_2", e).active = o.day <= 0, this.zgNodegzt("btn_3", e).active = o.day > 0, this.gsTxtStrbyNums("btn_3/YMLabel1", 116, o.day, e), this.gsButtongbs("btn_2", (() => {
              this.endEven(s)
            }), e)
          }
        }
        endEven(t) {
          let s = a.chucaiInfo.ccInfo[t];
          a.chucaiInfo.ccInfo.splice(t, 1);
          let e = [];
          for (const t of s.role)
            if (t > 1) {
              a.findObjById("workInfo1", t).chucai = 0;
              let i = d.addExpUpById(t, s.add);
              e.push({
                id: t,
                info: i,
                day: s.add
              })
            } c.bossWshow(f, {
            info: e,
            step: s.step
          }), this.xiabanye()
        }
        infoRe(t, s, e) {
          this.zgNodegzt("node_2", t).active = 0 != s;
          let i = 7;
          if (s > 0) {
            const e = a.findObjById("workInfo1", s);
            this.gsSprHtsst("node_2/icon", e.sprId, t), this.gsTxtLblgs("node_2/YMLabel2", e.name, t);
            const n = h.co_edu.zgTableKey(e.edu);
            this.gsTxtGradelbl("node_2/lbl_info1/YMLabel2", n.grade, n.name, t);
            const o = h.co_post.zgTableKey(e.postId);
            o && (this.gsWorkTypePic1("node_2/node_1", o.grade, t), this.gsTxtGradelbl("node_2/node_1/YMLabel1", o.grade, o.name, t)), i = o.grade;
            const c = h.co_job.zgTableKey(e.jobId);
            this.zgNodegzt("node_2/lbl_info", t).active = 1 != e.id, c && (this.gsWorkTypePic2("node_2/lbl_info", c.grade, t), this.gsTxtGradelbl("node_2/lbl_info/YMLabel1", c.grade, c.name, t))
          }
          this.gsWorkTypePic3("node_1", `${i}`, t)
        }
      }).m_name = "WChuchai", r = u)) || r);
      s._RF.pop()
    }
  }
}));