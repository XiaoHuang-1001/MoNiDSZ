System.register("chunks:///_virtual/WGangweitiaozheng.ts", ["cc", "./ZGGSOfficeFx.ts", "./WGangweitiaozheng1.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var o, s, i, r, e, n, d, a, g, l, b;
  return {
    setters: [function(t) {
      o = t.cclegacy, s = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, r = t.gs_boss, e = t.gs_sql, n = t.gs_phone, d = t.gs_bmsg, a = t.gs_tabpr, g = t.gs_computer
    }, function(t) {
      l = t.WGangweitiaozheng1
    }, function(t) {
      b = t.minFunc
    }],
    execute: function() {
      var c, f;
      o._RF.push({}, "261eaQ0IjVClLZmclBm6Rw3", "WGangweitiaozheng", void 0);
      const {
        ccclass: h,
        property: p
      } = s;
      t("WGangweitiaozheng", h("WGangweitiaozheng")(((f = class t extends i {
        constructor(...t) {
          super(...t), this.bdog = null, this.workArr = []
        }
        xiabanye() {
          r.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top")
        }
        init(t) {
          this.workArr = t.workArr, console.log(this.workArr);
          for (let t = 0; t < 2; t++) {
            const o = e.findObjById("workInfo1", this.workArr[t]),
              s = n.returnOneAttr(o.id);
            let i = this.zgNodegzt(`content/spr${t+1}`, this.bdog);
            this.gsWorkPic(i, o), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, s.pot, i), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, s.amb, i), this.gsTxtStrbyNums("lbl_info4/YMLabel2", 4, s.allNum, i), this.gsTxtStrbyNums("lbl_info5/YMLabel2", 101, s.salary, i)
          }
          this.gsButtongbs("btn_2", (() => {
            b.activitySuccess(19, 2, null), e.companyInfo.gwtz += 1, this.endEven(!0)
          }), this.bdog), this.gsButtongbs("btn_3", (() => {
            b.activitySuccess(19, 1, null), this.endEven(!1)
          }), this.bdog)
        }
        endEven(t) {
          if (!t) return d.send(2302, {
            id: this.workArr[0],
            roleArr: [],
            face: 301
          }), void this.xiabanye();
          let o = e.findObjById("workInfo1", this.workArr[0]),
            s = e.findObjById("workInfo1", this.workArr[1]);
          const i = n.returnOneAttr(o.id),
            b = n.returnOneAttr(s.id);
          let c = {
              workId: [o.id, s.id],
              oldInfo: [JSON.parse(JSON.stringify(o)), JSON.parse(JSON.stringify(s))],
              oldNum: [JSON.parse(JSON.stringify(i)), JSON.parse(JSON.stringify(b))],
              addArr: []
            },
            f = e.findObjById("combmInfo", s.depId),
            h = e.findObjById("combmInfo", o.depId);
          if (f.workId == s.id) f.workId = o.id, o.postId = f.depId, o.depId = f.id, h.workId = s.id, s.postId = h.depId, s.depId = h.id;
          else if (f.workArr.indexOf(s.id) >= 0) {
            let t = f.workArr.indexOf(s.id);
            f.workArr[t] = o.id, o.postId = s.postId, o.depId = s.depId, h.workId = s.id, s.postId = h.depId, s.depId = h.id
          } else console.error(s.id, o.id, "职位错误");
          const p = a.co_job.zgTableKey(o.jobId);
          let u = Math.floor(g.sjNumgs(p.pot1, p.pot2) / 2 * 6),
            I = Math.floor(g.sjNumgs(p.amb1, p.amb2) / 4 * 6),
            m = {
              pot: u <= 0 ? -1 : -u,
              amb: I <= 0 ? -1 : -I
            };
          n.addWorkerAttr(o.id, m);
          const w = a.co_job.zgTableKey(s.jobId);
          let y = Math.floor(g.sjNumgs(w.pot1, w.pot2) / 2 * 6),
            k = Math.floor(g.sjNumgs(w.amb1, w.amb2) / 4 * 6),
            N = {
              pot: y <= 0 ? 1 : y,
              amb: k <= 0 ? 1 : k
            };
          n.addWorkerAttr(s.id, N), c.addArr = [m, N], d.send(2002), r.bossWshow(l, c), this.xiabanye()
        }
      }).m_name = "WGangweitiaozheng", c = f)) || c);
      o._RF.pop()
    }
  }
}));