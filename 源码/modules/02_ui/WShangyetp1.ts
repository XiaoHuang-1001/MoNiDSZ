System.register("chunks:///_virtual/WShangyetp1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WZhandou.ts", "./WShangyetp3.ts", "./WShangyetp2.ts", "./minFunc.ts"], (function(e) {
  "use strict";
  var t, s, r, n, i, o, h, l, g, a, c, d, f, p, u;
  return {
    setters: [function(e) {
      t = e.cclegacy, s = e._decorator, r = e.instantiate
    }, function(e) {
      n = e.ZGGSOfficeFx, i = e.gs_btxt, o = e.gs_boss, h = e.gs_computer, l = e.gs_tabpr, g = e.gs_sql, a = e.gs_bmsg, c = e.gs_phone
    }, function(e) {
      d = e.WZhandou
    }, function(e) {
      f = e.WShangyetp3
    }, function(e) {
      p = e.WShangyetp2
    }, function(e) {
      u = e.minFunc
    }],
    execute: function() {
      var b, _;
      t._RF.push({}, "1e0b9Gep1xGl5T27NSwU4z9", "WShangyetp1", void 0);
      const {
        ccclass: y,
        property: A
      } = s;
      e("WShangyetp1", y("WShangyetp1")(((_ = class e extends n {
        constructor(...e) {
          super(...e), this.bdog = null, this.titleStr = i.gsStringHelpIn(108), this.roleArr = [], this.enemyArr = [], this.sxType = {
            s_att: "att",
            s_hp: "hp",
            s_def: "def",
            s_speed: "speed",
            f_att: "att",
            f_hp: "hp",
            f_def: "def",
            f_speed: "speed"
          }
        }
        pohuiPage() {
          o.bossDieWin(e, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsTxtLblgs("lbl_info2/YMLabel1", h.sjTabGetgs(this.titleStr), this.bdog)
        }
        init(e) {
          this.roleArr = e.roleArr, this.enemyArr = e.enemyArr, console.log("商业谈判敌人数据", this.enemyArr, this.roleArr);
          let t = this.zgNodegzt("sw1/view/content", this.bdog),
            s = this.zgNodegzt("sw2/view/content", this.bdog);
          for (let e = 0; e < 3; e++) {
            let n = t.children[e];
            n || (n = r(t.children[0]), n.parent = t);
            let i = this.enemyArr[e];
            if (n.active = i, i) {
              this.gsWorkPic(n, i);
              const e = l.co_edu.zgTableKey(i.edu);
              this.gsTxtGradelbl("lbl_info3/YMLabel1", e.grade, e.name, n)
            }
            let o = s.children[e];
            o || (o = r(s.children[0]), o.parent = s);
            let h = this.roleArr[e];
            if (o.active = h, h) {
              const e = g.findObjById("workInfo1", h);
              this.gsWorkPic(o, e);
              const t = l.co_edu.zgTableKey(e.edu);
              this.gsTxtGradelbl("lbl_info3/YMLabel1", t.grade, t.name, o)
            }
          }
          this.gsButtongbs("btn_3", (() => {
            u.activitySuccess(4, 1, null), a.send(2302, {
              id: this.roleArr[0],
              roleArr: this.roleArr,
              face: 310
            }), this.pohuiPage()
          }), this.bdog), this.gsButtongbs("btn_2", (() => {
            u.activitySuccess(4, 2, null), o.bossWshow(d, {
              enemy: this.enemyArr,
              role: this.roleArr,
              fun: e => {
                this.evenEnd(e), this.pohuiPage()
              }
            })
          }), this.bdog)
        }
        evenEnd(e) {
          let t = [],
            s = e ? ["s_att", "s_hp", "s_def", "s_speed"] : ["f_att", "f_hp", "f_def", "f_speed"],
            r = 3;
          this.roleArr.length <= r && (r = this.roleArr.length);
          let n = h.sjNumgs(1, r);
          this.roleArr = h.checkSJArr(this.roleArr);
          for (let e = 0; e < n; e++) {
            let r = this.roleArr[e];
            const n = g.findObjById("workInfo1", r),
              i = l.co_job.zgTableKey(n.jobId);
            s = h.checkSJArr(s);
            let o = s[h.sjNumgs(0, s.length - 1)],
              a = {},
              d = i[o];
            a[this.sxType[o]] = d, c.addWorkerAttr(r, a), t.push({
              id: r,
              sxinfo: [this.sxType[o], d]
            })
          }
          if (e) {
            let e = 5,
              s = [1, 5 * (g.TOTALEARN || 0)];
            h.getNeedTabgs(s, null, 9), h.addPingfenGs(e), o.bossWshow(p, {
              award: s,
              roleInfo: t,
              num: e
            })
          } else {
            let e = -5;
            h.addPingfenGs(e), o.bossWshow(f, {
              roleInfo: t,
              num: e
            })
          }
        }
      }).m_name = "WShangyetp1", b = _)) || b);
      t._RF.pop()
    }
  }
}));