System.register("chunks:///_virtual/Wshangzhan1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WZhandou.ts", "./Wshangzhan2.ts", "./ZGGSPaipxxu.ts", "./Wshangzhan4.ts", "./Wshangzhan3.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, n, i, e, o, h, d, a, f, c, u, g, r, l;
  return {
    setters: [function(t) {
      s = t.cclegacy, n = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, e = t.gs_boss, o = t.gs_computer, h = t.gs_sql, d = t.gs_tabpr, a = t.gs_phone
    }, function(t) {
      f = t.WZhandou
    }, function(t) {
      c = t.Wshangzhan2
    }, function(t) {
      u = t.ZGGSPaipxxu
    }, function(t) {
      g = t.Wshangzhan4
    }, function(t) {
      r = t.Wshangzhan3
    }, function(t) {
      l = t.minFunc
    }],
    execute: function() {
      var p, b;
      s._RF.push({}, "eb8026273xDTp1fxPmhFH4R", "Wshangzhan1", void 0);
      const {
        ccclass: _,
        property: z
      } = n;
      t("Wshangzhan1", _("Wshangzhan1")(((b = class t extends i {
        constructor(...t) {
          super(...t), this.bdog = null, this.duisNode = null, this.szId = null, this.fun1 = null, this.fun = null, this.enemyList = [], this.roleList = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
          }, this.sxType = {
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
          e.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.bdog), this.gsButtongbs("YMSpriteSplash", function() {
            this.pohuiPage()
          }.bind(this)), this.gsButtongbs("btn_3", function() {
            let t = [],
              s = {};
            for (const n in this.roleList) {
              const i = this.roleList[n];
              i > 0 && (s[i] = n, t.push(i))
            }
            t.length > 0 && (l.activityStart(5, null), e.bossWshow(f, {
              enemy: this.enemyList,
              role: t,
              fun: this.fun,
              pos: s
            }), setTimeout((() => {
              this.node.active = !1, this.duisNode && (this.duisNode.active = !1)
            }), 100))
          }.bind(this), this.bdog), this.gsButtongbs("btn_1", function() {
            this.roleList = {
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0
            }, this.initRole()
          }.bind(this), this.bdog), this.gsButtongbs("btn_2", function() {
            let t = o.getWorkArrInfo();
            t.sort(u.fightSort(h.sortType.shangzhanSort));
            for (let s = 0; s < 6; s++) this.roleList[s + 1] = t[s] || 0;
            this.initRole()
          }.bind(this), this.bdog)
        }
        init(t) {
          this.duisNode = t.curNode, this.szId = t.id, this.fun1 = t.fun, this.fun = t => {
            this.endEven(t), this.fun1 && this.fun1(t), this.pohuiPage()
          }, this.initEnemy(), this.initRole()
        }
        initEnemy() {
          let t = h.shangzhanInfo.curInfo.spr,
            s = h.shangzhanInfo.curInfo.fightInfo,
            n = t.split("-"),
            i = n[0].split("|"),
            e = n[1].split("|");
          const o = d.co_war_member.objs[this.szId];
          for (let t = 0; t < o.length; t++) {
            const n = o[t],
              h = d.co_pic.values[Number(i[t]) - 1];
            let a = {};
            a.name = e[t] || "", a.jobId = n.job || 0, a.postId = n.post_id || 0, a.att = s[t].att || 0, a.hp = s[t].hp || 0, a.def = s[t].def || 0, a.speed = s[t].speed || 0, a.sprId = h.pic, this.enemyList.push(a)
          }
        }
        initRole() {
          let t = this.zgNodegzt("sw1/view/content", this.bdog);
          for (let s = 0; s < 6; s++) {
            let n = t.children[s],
              i = this.roleList[s + 1];
            this.infoRe(n, i, s), this.gsButtongbs(n, function() {
              let t = [];
              for (const s in this.roleList) {
                const n = this.roleList[s];
                n > 0 && t.push(n)
              }
              e.bossWshow(c, {
                id: i,
                type: this.type,
                roleList: t,
                fun: t => {
                  t >= 0 && (this.roleList[s + 1] = t, i = t, this.infoRe(n, i, s))
                }
              })
            }.bind(this))
          }
        }
        infoRe(t, s, n) {
          this.zgNodegzt("node_2", t).active = 0 != s, this.zgNodegzt("node_3", t).active = 0 == s;
          let i = 7;
          if (s > 0) {
            const n = h.findObjById("workInfo1", s);
            this.gsSprHtsst("node_2/icon", n.sprId, t), this.gsTxtLblgs("node_2/YMLabel2", n.name, t);
            i = d.co_post.zgTableKey(n.postId).grade
          }
          this.gsWorkTypePic3("node_1", `${i}`, t)
        }
        endEven(t) {
          let s = [],
            n = t ? ["s_att", "s_hp", "s_def", "s_speed"] : ["f_att", "f_hp", "f_def", "f_speed"],
            i = 3,
            f = [];
          for (const t in this.roleList) {
            const s = this.roleList[t];
            s > 0 && f.push(s)
          }
          f.length <= i && (i = f.length);
          let c = o.sjNumgs(1, i);
          f = o.checkSJArr(f);
          for (let t = 0; t < c; t++) {
            let i = f[t];
            const e = h.findObjById("workInfo1", i),
              c = d.co_job.zgTableKey(e.jobId);
            n = o.checkSJArr(n);
            let u = n[o.sjNumgs(0, n.length - 1)],
              g = {},
              r = c[u];
            g[this.sxType[u]] = r, a.addWorkerAttr(i, g), s.push({
              id: i,
              sxinfo: [this.sxType[u], r]
            })
          }
          const u = d.co_war.zgTableKey(this.szId);
          if (h.cache.shangzhanActRed = !1, t) {
            let t = h.shangzhanInfo.curInfo.id,
              n = h.shangzhanInfo.curInfo.spr.split("-");
            h.shangzhanInfo.battleInfo[t] = n[0], o.initShangzhanInfo(), o.addPingfenGs(u.power), o.getNeedTabgs(u.award, null, 10), u.check_id > 0 && o.kaoheUnlock(u.check_id), e.bossWshow(r, {
              info: u,
              roleInfo: s,
              curNode: this.duisNode
            })
          } else o.addPingfenGs(-5), e.bossWshow(g, {
            roleInfo: s,
            num: -5,
            curNode: this.duisNode
          })
        }
      }).m_name = "Wshangzhan1", p = b)) || p);
      s._RF.pop()
    }
  }
}));