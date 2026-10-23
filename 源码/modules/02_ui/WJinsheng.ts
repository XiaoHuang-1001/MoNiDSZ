System.register("chunks:///_virtual/WJinsheng.ts", ["cc", "./ZGGSOfficeFx.ts", "./CurListView.ts", "./WGangweitiaozheng1.ts", "./WGangweitiaozheng2.ts"], (function(t) {
  "use strict";
  var o, i, s, e, d, n, r, a, g, f, b, l;
  return {
    setters: [function(t) {
      o = t.cclegacy, i = t._decorator
    }, function(t) {
      s = t.ZGGSOfficeFx, e = t.gs_boss, d = t.gs_bmsg, n = t.gs_sql, r = t.gs_tabpr, a = t.gs_phone, g = t.gs_computer
    }, function(t) {
      f = t.CurListView
    }, function(t) {
      b = t.WGangweitiaozheng1
    }, function(t) {
      l = t.WGangweitiaozheng2
    }],
    execute: function() {
      var c, I;
      o._RF.push({}, "c283bwm7opF1aSHk58uhvj8", "WJinsheng", void 0);
      const {
        ccclass: p,
        property: h
      } = i;
      t("WJinsheng", p("WJinsheng")(((I = class t extends s {
        constructor(...t) {
          super(...t), this.bdog = null, this.showArr = []
        }
        xiabanye() {
          e.bossDieWin(t, 1)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.zgNodegzt("content", this.bdog).active = !1, this.gsButtongbs("guanbi", (() => {
            d.send(2100, !1), this.xiabanye()
          }), this.bdog)
        }
        init(t) {
          d.send(2100, !0), this.initArrInfo()
        }
        initArrInfo() {
          this.showArr = n.jsInfo.info || [], this.zgNodegzt("sw1", this.bdog).getComponent(f).init(this.showArr, ((t, o, i) => {
            t.active = !0;
            for (let i = 0; i < 2; i++) {
              let s = o[i],
                e = this.zgNodegzt(`spr${i+1}`, t),
                d = this.zgNodegzt("node_2", e);
              d.active = !0;
              let g = this.zgNodegzt("icon", e);
              g.active = !0;
              let f = this.zgNodegzt("lbl_info", e);
              if (f.active = !0, "string" == typeof s) {
                const t = n.combmInfo.objs[s];
                f.active = !1, g.active = !1, d.active = !1;
                const o = r.co_post.zgTableKey(t.depId);
                if (o) {
                  this.gsWorkTypePic1("node_1", o.grade, e), this.gsTxtGradelbl("node_1/YMLabel1", o.grade, o.name, e), this.zgNodegzt("yuan", e) && this.gsWorkTypePic3("yuan", `${o.grade}`, e)
                }
                this.gsTxtStrbyNums("lbl_info1/YMLabel2", 4, 0, e), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, 0, e), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, 0, e)
              } else {
                const t = n.findObjById("workInfo1", o[i]),
                  s = a.returnOneAttr(t.id);
                this.gsWorkPic(e, t), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, s.pot, e), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, s.amb, e)
              }
            }
            this.zgNodegzt("jiantou", t).active = "string" != typeof o[0], this.gsButtongbs("btn_1", (() => {
              n.companyInfo.gwtz += 1;
              let t = n.jsInfo.info.indexOf(o);
              n.jsInfo.info.splice(t, 1), "string" == typeof o[0] ? this.endEven1(o) : this.endEven(o)
            }), t), this.gsButtongbs("btn_2", (() => {
              this.disEnd(o)
            }), t)
          }))
        }
        disEnd(t) {
          let o = n.jsInfo.info.indexOf(t);
          n.jsInfo.info.splice(o, 1), this.initArrInfo()
        }
        endEven1(t) {
          let o = n.findObjById("workInfo1", t[1]);
          const i = a.returnOneAttr(o.id);
          let s = {
              workId: [0, o.id],
              oldInfo: [{}, JSON.parse(JSON.stringify(o))],
              oldNum: [{}, JSON.parse(JSON.stringify(i))],
              addArr: []
            },
            f = n.findObjById("combmInfo", t[0]),
            b = n.findObjById("combmInfo", o.depId);
          if (b.workId == o.id) b.workId = 0, f.workId = o.id, o.postId = f.depId, o.depId = f.id;
          else if (b.workArr.indexOf(o.id) >= 0) {
            let t = b.workArr.indexOf(o.id);
            b.workArr.splice(t, 1), f.workId = o.id, o.postId = f.depId, o.depId = f.id
          } else console.error(o.id, f.id, "职位错误");
          const c = r.co_job.zgTableKey(o.jobId);
          let I = Math.floor(g.sjNumgs(c.pot1, c.pot2) / 2 * 6),
            p = Math.floor(g.sjNumgs(c.amb1, c.amb2) / 4 * 6),
            h = {
              pot: I <= 0 ? 1 : I,
              amb: p <= 0 ? 1 : p
            };
          a.addWorkerAttr(o.id, h), s.addArr = [{}, h], d.send(2002), e.bossWshow(l, s), this.xiabanye()
        }
        endEven(t) {
          let o = n.findObjById("workInfo1", t[0]),
            i = n.findObjById("workInfo1", t[1]);
          const s = a.returnOneAttr(o.id),
            f = a.returnOneAttr(i.id);
          let l = {
              workId: [o.id, i.id],
              oldInfo: [JSON.parse(JSON.stringify(o)), JSON.parse(JSON.stringify(i))],
              oldNum: [JSON.parse(JSON.stringify(s)), JSON.parse(JSON.stringify(f))],
              addArr: []
            },
            c = n.findObjById("combmInfo", i.depId),
            I = n.findObjById("combmInfo", o.depId);
          if (c.workId == i.id) c.workId = o.id, o.postId = c.depId, o.depId = c.id, I.workId = i.id, i.postId = I.depId, i.depId = I.id;
          else if (c.workArr.indexOf(i.id) >= 0) {
            let t = c.workArr.indexOf(i.id);
            c.workArr[t] = o.id, o.postId = i.postId, o.depId = i.depId, I.workId = i.id, i.postId = I.depId, i.depId = I.id
          } else console.error(i.id, o.id, "职位错误");
          const p = r.co_job.zgTableKey(o.jobId);
          let h = Math.floor(g.sjNumgs(p.pot1, p.pot2) / 2 * 6),
            u = Math.floor(g.sjNumgs(p.amb1, p.amb2) / 4 * 6),
            m = {
              pot: h <= 0 ? -1 : -h,
              amb: u <= 0 ? -1 : -u
            };
          a.addWorkerAttr(o.id, m);
          const y = r.co_job.zgTableKey(i.jobId);
          let w = Math.floor(g.sjNumgs(y.pot1, y.pot2) / 2 * 6),
            N = Math.floor(g.sjNumgs(y.amb1, y.amb2) / 4 * 6),
            O = {
              pot: w <= 0 ? 1 : w,
              amb: N <= 0 ? 1 : N
            };
          a.addWorkerAttr(i.id, O), l.addArr = [m, O], d.send(2002), e.bossWshow(b, l), this.xiabanye()
        }
      }).m_name = "WJinsheng", c = I)) || c);
      o._RF.pop()
    }
  }
}));