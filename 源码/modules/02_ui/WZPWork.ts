System.register("chunks:///_virtual/WZPWork.ts", ["cc", "./ZGGSOfficeFx.ts", "./WZPWork1.ts", "./minFunc.ts"], (function(o) {
  "use strict";
  var t, s, i, e, n, h, d, a, r, p, l, g;
  return {
    setters: [function(o) {
      t = o.cclegacy, s = o._decorator
    }, function(o) {
      i = o.ZGGSOfficeFx, e = o.gs_btxt, n = o.gs_boss, h = o.gs_bmsg, d = o.gs_sql, a = o.gs_computer, r = o.gs_tabpr, p = o.gs_phone
    }, function(o) {
      l = o.WZPWork1
    }, function(o) {
      g = o.minFunc
    }],
    execute: function() {
      var c, b;
      t._RF.push({}, "33012137mVN0YVg5AqEbykT", "WZPWork", void 0);
      const {
        ccclass: f,
        property: I
      } = s;
      o("WZPWork", f("WZPWork")(((b = class o extends i {
        constructor(...o) {
          super(...o), this.bdog = null, this.type = null, this.postId = null, this.co_co_post_t = null, this.co_job_id = 1, this.co_edu_t_l = null, this.eduRate = [0, 0], this.titleStr = e.gsStringHelpIn(101), this.colorType = {
            1: [214, 255, 192],
            2: [173, 229, 255],
            3: [239, 202, 255],
            4: [255, 246, 143]
          }, this.workInfo = {}, this.isZcj = !1, this.typePic = {
            1: 0,
            2: 0,
            3: 100200,
            4: 100300
          }
        }
        xiabanye() {
          n.bossDieWin(o, 1)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsButtongbs("guanbi", (() => {
            g.activitySuccess(`5_${this.type}`, 3, null), h.send(2300), this.xiabanye()
          }), this.bdog), this.gsButtongbs("btn_2", (() => {
            d.config.guideId < 1e3 && (d.yindaoSp.zp1 += 1), g.activitySuccess(`5_${this.type}`, 2, null), this.endEven()
          }), this.bdog)
        }
        initCost() {
          let o = [2, 10];
          d.config.guideId < 1e3 && (o = [0]), this.gsNeedConfigs("cost", o, this.bdog), this.gsScheduleStnode("cost", (() => {
            let t = a.checkTabNeedgs(o);
            this.gsLblCororgst1("cost/YMLabel", t, [25, 25, 25], this.bdog)
          }), .3, !1, this.bdog), this.gsButtongbs("btn_1", (() => {
            a.constNeedTabgs(o, (() => {
              if (d.config.guideId < 1e3)
                if (0 == d.yindaoSp.zp1) d.yindaoSp.zp1 = 1;
                else {
                  if (2 != d.yindaoSp.zp1) return void console.log("停止刷新招聘");
                  d.yindaoSp.zp1 = 3
                } g.activitySuccess(`5_${this.type}`, 1, null), this.initWorkInfo(), this.showInfo()
            }), 19)
          }), this.bdog)
        }
        init(o) {
          h.send(2100, !0), this.initCost();
          let t = d.pingjiaInfo.titId || 1;
          this.co_edu_t_l = r.co_edu.values.filter((function(o) {
            return o.title_id1 <= t && o.title_id2 >= t
          })), this.eduRate[0] = this.co_edu_t_l[0].rate1, this.eduRate[1] = this.co_edu_t_l[this.co_edu_t_l.length - 1].rate2;
          let s = d.base.pingfen || 0;
          for (const o of r.co_job.values) {
            if (!(s >= o.power)) break;
            this.co_job_id = o.id
          }
          this.type = o.type || 1, this.postId = o.workId, this.isZcj = o.iszcj || !1, this.co_co_post_t = r.co_post.zgTableKey(this.postId), 3 == this.type ? d.base.msZp = 0 : 4 == this.type ? d.base.dsZp = 0 : 2 == this.type && 1103 == this.co_co_post_t.dep_id && (d.base.glywZp = 0), this.gsTxtGradelbl("icon_layout/node_3/YMLabel2", this.co_co_post_t.grade, this.co_co_post_t.name, this.bdog), this.gsTxtLblgs("title", this.titleStr[this.type], this.bdog), this.gsTxtColorLblgs1("title", this.colorType[this.type], this.bdog), this.gsSprstHtByUIs("xian", `ht${this.type}`, this.bdog);
          let i = e.gsStringHelpIn(107),
            n = 4 == this.type ? 1 : 0;
          this.gsTxtLblgs("icon_layout/node_3/YMLabel1", i[1][n], this.bdog), this.gsTxtLblgs("icon_layout/node_6/YMLabel1", i[2][n], this.bdog), this.gsTxtLblgs("btn_2/title", i[3][n], this.bdog), this.workInfo = d.zpInfp.workInfo[this.type] || {}, this.workInfo && this.workInfo.sprId ? (this.workInfo.postId = this.postId, this.workInfo.depId = this.co_co_post_t.dep_id) : this.initWorkInfo(), this.showInfo()
        }
        refresWorkInfo() {
          const o = a.sjTabGetgs(r.co_pic.objs[this.typePic[this.type]]);
          this.workInfo.sprId = o.pic, this.workInfo.sex = o.sex;
          const t = a.sjTabGetgs(r.co_name.objs[this.workInfo.sex]),
            s = a.sjTabGetgs(r.co_name.objs[this.workInfo.sex]);
          this.workInfo.name = t.name1 + s.name2, this.workInfo.join = a.huoquYueNum() - 1, d.zpInfp.workInfo[this.type] = this.workInfo
        }
        initWorkInfo() {
          this.workInfo = JSON.parse(JSON.stringify(d.workInfo1.obj));
          const o = a.sjTabGetgs(r.co_pic.objs[this.typePic[this.type]]);
          this.workInfo.sprId = o.pic, this.workInfo.sex = o.sex;
          const t = a.sjTabGetgs(r.co_name.objs[this.workInfo.sex]),
            s = a.sjTabGetgs(r.co_name.objs[this.workInfo.sex]);
          this.workInfo.name = t.name1 + s.name2, this.workInfo.postId = this.postId, this.workInfo.depId = this.co_co_post_t.dep_id;
          let i = a.sjNumgs(this.eduRate[0], this.eduRate[1]),
            e = this.co_edu_t_l.find((function(o) {
              return o.rate1 <= i && o.rate2 >= i
            }));
          d.config.guideId < 1e3 && (0 == d.yindaoSp.zp1 ? e = r.co_edu.zgTableKey(1) : 1 == d.yindaoSp.zp1 ? e = r.co_edu.zgTableKey(3) : 2 == d.yindaoSp.zp1 ? e = r.co_edu.zgTableKey(1) : 3 == d.yindaoSp.zp1 && (e = r.co_edu.zgTableKey(3)));
          // 单机版加固：学历档位有区间空隙时 find 会返回 undefined，原来这里 .id 直接抛错，
          // 招聘窗口整页卡死（无限重试刷屏）。补一层兜底。
          e || (e = this.co_edu_t_l && this.co_edu_t_l[0] || r.co_edu.zgTableKey(1));
          this.workInfo.edu = e.id, this.workInfo.jobId = a.sjNumgs(1, this.co_job_id) || 1, d.config.guideId < 1e3 && (0 == d.yindaoSp.zp1 ? this.workInfo.jobId = 1 : 1 == d.yindaoSp.zp1 ? this.workInfo.jobId = 3 : 2 == d.yindaoSp.zp1 ? this.workInfo.jobId = 1 : 3 == d.yindaoSp.zp1 && (this.workInfo.jobId = 3));
          let n = r.co_job.zgTableKey(this.workInfo.jobId),
            h = a.sjNumgs(e.pot1, e.pot2),
            l = a.sjNumgs(e.amb1, e.amb2),
            g = a.sjNumgs(e.att1, e.att2),
            c = a.sjNumgs(e.hp1, e.hp2),
            b = a.sjNumgs(e.def1, e.def2),
            f = a.sjNumgs(e.speed1, e.speed2);
          this.workInfo.iPot = h, this.workInfo.iAmb = l, this.workInfo.iAtt = g, this.workInfo.iHp = c, this.workInfo.iDef = b, this.workInfo.iSpeed = f, this.workInfo.pot = 0, this.workInfo.amb = 0, this.workInfo.att = g + n.totalAtt, this.workInfo.hp = c + n.totalHp, this.workInfo.def = b + n.totalDef, this.workInfo.speed = f + n.totalSpeed, this.workInfo.join = a.huoquYueNum() - 1;
          let I = p.countZpEarn(n.id, this.workInfo.postId, this.workInfo.pot, this.workInfo.depId),
            _ = Math.floor(30 * I / n.pay * 100);
          console.log("挣钱", I, "花钱", n.pay, _);
          const u = (r.co_hire_eva.objs[e.id] || []).find((function(o) {
            return o.all1 <= _ && o.all2 >= _
          })) || (r.co_hire_eva.objs[e.id] || [])[0] || r.co_hire_eva.zgTableKey(1);
          this.workInfo.eva = u ? u.id : 1, d.config.guideId < 1e3 && (0 == d.yindaoSp.zp1 ? this.workInfo.eva = 1 : 1 == d.yindaoSp.zp1 ? this.workInfo.eva = 20 : 2 == d.yindaoSp.zp1 ? this.workInfo.eva = 2 : 3 == d.yindaoSp.zp1 && (this.workInfo.eva = 21)), d.zpInfp.workInfo[this.type] = this.workInfo
        }
        showInfo() {
          this.gsWorkPic("spr1", this.workInfo, this.bdog);
          const o = a.sjTabGetgs(r.co_post_des.objs[this.type]);
          this.gsTxtLblgs("lbl_info1/YMLabel1", o.des, this.bdog);
          const t = r.co_edu.zgTableKey(this.workInfo.edu);
          this.gsTxtGradelbl("icon_layout/node_2/YMLabel2", t.grade, t.name, this.bdog);
          const s = r.co_hire_eva.zgTableKey(this.workInfo.eva) || r.co_hire_eva.zgTableKey(1) || {
            grade: 1,
            name: "",
            pay_add: 0
          };
          this.gsTxtGradelbl("lbl_info3/YMLabel1", s.grade, s.name, this.bdog);
          const i = r.co_job.zgTableKey(this.workInfo.jobId);
          let e = Math.floor(i.pay * (1 + s.pay_add / 100));
          this.gsTxtStrbyNums("icon_layout/node_6/YMLabel2", 101, e, this.bdog);
          let n = p.countZpEarn(i.id, this.workInfo.postId, this.workInfo.pot, this.workInfo.depId);
          this.gsTxtStrbyNums("icon_layout/node_7/YMLabel2", 102, n, this.bdog), this.gsTxtLblgs("icon_layout/node_4/YMLabel2", a.gsNumValueShow(this.workInfo.pot + this.workInfo.iPot), this.bdog), this.gsTxtLblgs("icon_layout/node_8/YMLabel2", a.gsNumValueShow(this.workInfo.amb + this.workInfo.iAmb), this.bdog), this.gsTxtLblgs("icon_layout/node_5/YMLabel2", a.gsNumValueShow(this.workInfo.hp), this.bdog), this.gsTxtLblgs("icon_layout/node_9/YMLabel2", a.gsNumValueShow(this.workInfo.att), this.bdog), this.gsTxtLblgs("icon_layout/node_11/YMLabel2", a.gsNumValueShow(this.workInfo.def), this.bdog), this.gsTxtLblgs("icon_layout/node_10/YMLabel2", a.gsNumValueShow(this.workInfo.speed), this.bdog)
        }
        endEven() {
          this.isZcj && d.base.zpNum++;
          let o = a.addWorkerNewInfo(this.workInfo, this.type),
            t = d.findObjById("workInfo2", o.id);
          for (let o in this.workInfo) null != t[o] && "id" != o && (t[o] = this.workInfo[o]);
          d.zpInfp.workInfo[this.type] = null, a.afterInsetWokrer(), n.bossWshow(l, o.id, this.type, this.postId), h.send(2002), this.xiabanye()
        }
      }).m_name = "WZPWork", c = b)) || c);
      t._RF.pop()
    }
  }
}));