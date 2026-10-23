System.register("chunks:///_virtual/WChaonengli.ts", ["cc", "./ZGGSOfficeFx.ts", "./PQTips5.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, o, n, i, r, l, h, g, c, a, d, b;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator, o = t.UITransform
    }, function(t) {
      n = t.ZGGSOfficeFx, i = t.gs_boss, r = t.gs_sql, l = t.gs_phone, h = t.gs_tabpr, g = t.gs_bmsg, c = t.gs_www, a = t.gs_computer
    }, function(t) {
      d = t.PQTips5
    }, function(t) {
      b = t.minFunc
    }],
    execute: function() {
      var f, u;
      s._RF.push({}, "4d2acfmTT9M/6A9ijIwUAdY", "WChaonengli", void 0);
      const {
        ccclass: p,
        property: _
      } = e;
      t("WChaonengli", p("WChaonengli")(((u = class t extends n {
        constructor(...t) {
          super(...t), this.bdog = null, this.gkGG = 8, this.roleArr = [], this.cnlArr = [
            [],
            [],
            []
          ]
        }
        xiabanye() {
          i.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top")
        }
        init(t) {
          this.roleArr = t.roleInfo, this.refreshCnlInfo(), this.refreshWorkInfo()
        }
        refreshWorkInfo() {
          let t = this.zgNodegzt("content", this.bdog);
          for (let s = 0; s < 3; s++) {
            let e = t.children[s],
              n = this.roleArr[s];
            if (e.active = n, n) {
              const t = r.findObjById("workInfo1", n),
                g = l.returnOneAttr(t.id);
              this.gsWorkPic(e, t), this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, g.pot, e), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, g.amb, e);
              for (let t = 0; t < 3; t++) {
                let n = this.zgNodegzt(`lbl_info${t+5}`, e),
                  r = this.cnlArr[s][t];
                const l = h.co_super.zgTableKey(r);
                this.gsTxtGradelbl("YMLabel1", l.grade, l.name, n), this.gsButtongbs("YMLabel1", (() => {
                  i.bossWshow(d, {
                    pos: this.gsWorldposgws(n),
                    size: n.getComponent(o).contentSize,
                    info: l.id
                  })
                }), n)
              }
            }
          }
          this.gsButtongbs("btn_3", (() => {
            b.activitySuccess(28, 1, null);
            for (let t = 0; t < 3; t++) {
              let s = r.findObjById("workInfo3", this.roleArr[t]);
              s.chaonengli = this.cnlArr[t], this.countAddChao(s)
            }
            g.send(2302, {
              id: this.roleArr[0],
              roleArr: this.roleArr,
              face: 308
            }), this.xiabanye()
          }), this.bdog), b.ggbtnPlay(this.zgNodegzt("btn_2", this.bdog), this.gkGG), this.gsButtongbs("btn_2", (() => {
            c.GGShowVido(this.gkGG, (() => {
              b.activitySuccess(28, 2, null), this.refreshCnlInfo(!0), this.refreshWorkInfo(), this.gsNodePositgps("btn_3", 0, null, this.bdog), this.zgNodegzt("btn_2", this.bdog).active = !1, this.zgNodegzt("YMLabel", this.bdog).active = !1
            }))
          }), this.bdog)
        }
        refreshCnlInfo(t = !1) {
          for (let s = 0; s < 3; s++) {
            let e = this.roleArr[s];
            this.cnlArr[s] = [];
            const o = r.findObjById("workInfo1", e),
              n = h.co_post.zgTableKey(o.postId),
              i = h.co_super.objs[n.type];
            let l = t ? [6] : [1, 2, 3, 4, 5, 6],
              g = a.getRandomElements(l, 3);
            if (g.length < 3) this.cnlArr[s] = a.getRandomElements(i[g[0]], 3);
            else
              for (let t = 0; t < 3; t++) {
                let e = g[t] || g[0];
                this.cnlArr[s].push(a.sjTabGetgs(i[e]))
              }
          }
        }
        countAddChao(t) {
          let s = 0;
          for (let e = 0; e < t.chaonengli.length; e++) {
            s += h.co_super.zgTableKey(t.chaonengli[e]).add
          }
          t.chaoAdd = s, l.countWorkExp(t.id)
        }
      }).m_name = "WChaonengli", f = u)) || f);
      s._RF.pop()
    }
  }
}));