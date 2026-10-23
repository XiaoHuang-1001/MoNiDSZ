System.register("chunks:///_virtual/WZPWork1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WNewMing2.ts", "./minFunc.ts"], (function(s) {
  "use strict";
  var t, i, o, e, n, h, l, g, a, d, r, b, c, _, f, u, p;
  return {
    setters: [function(s) {
      t = s.cclegacy, i = s._decorator, o = s.Animation, e = s.js, n = s.tween, h = s.v3
    }, function(s) {
      l = s.ZGGSOfficeFx, g = s.gs_boss, a = s.gs_sql, d = s.gs_phone, r = s.gs_computer, b = s.gs_tabpr, c = s.gs_btxt, _ = s.gs_bmsg, f = s.gs_sound
    }, function(s) {
      u = s.WNewMing2
    }, function(s) {
      p = s.minFunc
    }],
    execute: function() {
      var w, y;
      t._RF.push({}, "bfda60Wtm9CHa2z51Tl2T7o", "WZPWork1", void 0);
      const {
        ccclass: I,
        property: m
      } = i;
      s("WZPWork1", I("WZPWork1")(((y = class s extends l {
        constructor(...s) {
          super(...s), this.bdog = null, this.bgNode = null, this.roelSpr = null, this.caidanAni = null, this.caidanAni1 = null, this.type = null, this.workInfo1_s = null, this.postId = null, this.gsShiliAdd = {
            1: [2, 10],
            2: [5, 25],
            3: [10, 50],
            4: [10, 50]
          }, this.cost = {
            1: [2, 10],
            2: [2, 20],
            3: [2, 50],
            4: [2, 50]
          }
        }
        xiabanye() {
          g.bossDieWin(s, 1)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.bgNode = this.zgNodegzt("node"), this.roelSpr = this.zgNodegzt("spr1"), this.caidanAni = this.zgNodegzt("caidai").getComponent(o), this.caidanAni1 = this.zgNodegzt("caidai1").getComponent(o), this.gsButtongbs("btn_1", (() => {
            p.activitySuccess(13, 1, null), this.endEven(!1)
          }), this.bdog)
        }
        init(s, t, i) {
          this.bdog.active = !0, this.bgNode.active = !0, this.type = t || 1, this.postId = i, this.workInfo1_s = a.findObjById("workInfo1", s), d.runOneAttr(this.workInfo1_s.id), d.loopRefreshWorker(this.workInfo1_s.id), 100200 != this.workInfo1_s.postId && 100300 != this.workInfo1_s.postId || d.countEarn(this.workInfo1_s.id), this.gsTxtLblgs("show1/YMLabel2", "+" + r.gsNumValueShow(this.gsShiliAdd[this.type][0]), this.bdog), this.gsTxtLblgs("show2/YMLabel2", "+" + r.gsNumValueShow(this.gsShiliAdd[this.type][1]), this.bdog);
          let o = this.cost[this.type];
          a.cache.yindaoStop && (o = [0]), this.gsNeedConfigs("cost", o, this.bdog), this.gsScheduleStnode("cost", (() => {
            let s = r.checkTabNeedgs(o);
            this.gsLblCororgst1("cost/YMLabel", s, [25, 25, 25], this.bdog)
          }), .3, !1, this.bdog), this.gsButtongbs("btn_2", (() => {
            r.constNeedTabgs(o, (() => {
              p.activitySuccess(13, 2, null), this.endEven(!0)
            }), 20)
          }), this.bdog), this.showInfo()
        }
        showInfo() {
          this.gsWorkPic("spr1", this.workInfo1_s, this.bdog), this.gsWorkPic(this.roelSpr, this.workInfo1_s), this.zgNodegzt("lbl_info", this.bdog).active = 1 != this.type;
          let s = this.postId || this.workInfo1_s.postId;
          const t = b.co_post.zgTableKey(s);
          this.gsTxtGradelbl("lay/lbl_info1/YMLabel2", t.grade, t.name, this.bdog);
          const i = b.co_job.zgTableKey(this.workInfo1_s.jobId);
          this.gsTxtGradelbl("lay/lbl_info2/YMLabel2", i.grade, i.name, this.bdog), this.gsEmpGonghao("lay/lbl_info3/YMLabel2", this.workInfo1_s.id, this.bdog);
          let o = d.returnOneAttr(this.workInfo1_s.id);
          if (this.gsTxtStrbyNums("lay/lbl_info4/YMLabel2", 102, o.earn, this.bdog), this.gsTxtLblgs("lay/lbl_info5/YMLabel2", r.gsNumValueShow(this.workInfo1_s.pot + this.workInfo1_s.iPot), this.bdog), this.gsTxtLblgs("lay/lbl_info6/YMLabel2", r.gsNumValueShow(this.workInfo1_s.amb + this.workInfo1_s.iAmb), this.bdog), this.type > 1) {
            let s = r.binarySearch("co_amb", "amb1", "amb2", this.workInfo1_s.amb)[{
                2: "get_money_add1",
                3: "get_money_add2",
                4: "get_money_add3"
              } [this.type]] / 100,
              t = c.gsStringHelpIn(103)[this.type];
            this.gsTxtLblgs("lbl_info/lay/YMLabel1", t[0], this.bdog), this.gsTxtLblgs("lbl_info/lay/YMLabel2", e.formatStr(t[1], r.gsNumValueShow(s)), this.bdog)
          }
          this.gsButtongbs("btn_3", (() => {
            let s = {
              name: this.workInfo1_s.name,
              _func: s => {
                a.findObjById("workInfo1", this.workInfo1_s.id).name = s, this.gsTxtLblgs("spr1/node_2/YMLabel1", s, this.bdog), this.gsTxtLblgs("node_2/YMLabel1", s, this.roelSpr), _.send(2003, this.workInfo1_s.id)
              }
            };
            g.bossWshow(u, s)
          }), this.bdog)
        }
        showTexiao(s) {
          let t = s ? 308 : 307,
            i = s ? this.gsShiliAdd[this.type][1] : this.gsShiliAdd[this.type][0];
          r.addPingfenGs(i), _.send(206, c.gsStringByParam(113, r.gsNumValueShow(i))), _.send(2302, {
            id: this.workInfo1_s.id,
            roleArr: [],
            face: t
          }), this.xiabanye()
        }
        endEven(s) {
          _.send(2007, {
            id: this.workInfo1_s.id,
            time: 0
          }), this.bdog.active = !1, this.bgNode.active = !1, this.roelSpr.active = !0;
          let t = null;
          t = s ? this.caidanAni : this.caidanAni1, f.playOne("welcome"), t.play(), t.once(o.EventType.FINISHED, (() => {
            n(this.roelSpr).to(.3, {
              scale: h(.5, .5, 0)
            }).call((() => {
              this.roelSpr.setScale(h(1.3, 1.3, 0)), this.roelSpr.active = !1, this.showTexiao(s)
            })).start()
          }))
        }
      }).m_name = "WZPWork1", w = y)) || w);
      t._RF.pop()
    }
  }
}));