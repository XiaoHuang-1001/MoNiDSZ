System.register("chunks:///_virtual/WChakancy.ts", ["cc", "./ZGGSOfficeFx.ts", "./CurListView.ts", "./WNewMing2.ts", "./PQTips3.ts", "./PQTips4.ts", "./PQTips5.ts", "./WTishis3.ts"], (function(t) {
  "use strict";
  var s, i, e, n, o, h, g, l, a, d, b, r, u, c, _, p, w;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator, e = t.UITransform
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_bmsg, h = t.gs_boss, g = t.gs_phone, l = t.gs_tabpr, a = t.gs_btxt, d = t.gs_computer, b = t.gs_sql
    }, function(t) {
      r = t.CurListView
    }, function(t) {
      u = t.WNewMing2
    }, function(t) {
      c = t.PQTips3
    }, function(t) {
      _ = t.PQTips4
    }, function(t) {
      p = t.PQTips5
    }, function(t) {
      w = t.WTishis3
    }],
    execute: function() {
      var y, z;
      s._RF.push({}, "21759pMo1hJnYDQAoP+ONCY", "WChakancy", void 0);
      const {
        ccclass: L,
        property: f
      } = i;
      t("WChakancy", L("WChakancy")(((z = class t extends n {
        constructor(...t) {
          super(...t), this.top = null, this.btns = null, this.sw1 = null, this.sw2 = null, this.svCtl2 = null, this.sw3 = null, this.svCtl3 = null, this.sw4 = null, this.svCtl4 = null, this._workInfo1_s = null, this.btnIdx = 0, this.closeIn = !1
        }
        xiabanye() {
          o.send(2100, this.closeIn), h.bossDieWin(t, 2)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.sw1 = this.zgNodegzt("sw1", this.top), this.sw2 = this.zgNodegzt("sw2", this.top), this.svCtl2 = this.sw2.getComponent(r), this.sw3 = this.zgNodegzt("sw3", this.top), this.svCtl3 = this.sw3.getComponent(r), this.sw4 = this.zgNodegzt("sw4", this.top), this.svCtl4 = this.sw4.getComponent(r), this.btns = this.zgNodegzt("YMLayout", this.top).children;
          for (let t = 0; t < this.btns.length; t++) {
            let s = this.btns[t];
            this.gsButtongbs(s, (s => {
              this.btnIdx = t, this.gsBtnArrStatests(s.target), this.sw1.active = 0 == t, this.sw2.active = 1 == t, this.sw3.active = 2 == t, this.sw4.active = 3 == t, this.showBottom()
            }))
          }
          this.gsButtongbs("guanbi", (() => {
            this.xiabanye()
          }), this.top), this.gsButtongbs("YMSpriteSplash", (() => {
            this.xiabanye()
          }))
        }
        init(t) {
          o.send(2100, !0), this.showInfo(t)
        }
        showInfo(t) {
          this.closeIn = t.isclose || !1, this.btnIdx = 0, this._workInfo1_s = t.workInfo1_s, console.log("员工Id", t.workInfo1_s.id), this.bindInfo(), this.gsButtongbsx(this.btns[this.btnIdx])
        }
        bindInfo() {
          let t = this.zgNodegzt("icon_layout", this.top),
            s = this.zgNodegzt("spr", this.top),
            i = this._workInfo1_s,
            e = g.returnOneAttr(i.id),
            n = l.co_post.zgTableKey(i.postId),
            b = l.co_job.zgTableKey(i.jobId),
            r = l.co_job.zgTableKey(i.jobId + 1),
            c = l.co_edu.zgTableKey(i.edu);
          if (this.gsTxtGradelbl("node_3/YMLabel2", n.grade, n.name, t), this.gsEmpGonghao("node_6/YMLabel2", i.id, t), this.gsTxtStrbyNums("node_5/YMLabel2", 4, e.pot, t), this.gsTxtStrbyNums("node_9/YMLabel2", 4, e.amb, t), 1 == i.id ? (this.gsTxtLblgs("node_2/YMLayout/YMLabel2", a.gsNorStringType(27), t), this.gsTxtLblgs("node_8/YMLabel2", a.gsNorStringType(27), t)) : (this.gsTxtGradelbl("node_2/YMLayout/YMLabel2", b.grade, b.name, t), this.gsTxtStrbyNums("node_8/YMLabel2", 101, e.salary, t)), this.zgNodegzt("node_2/YMLayout/YMLabel1", t).active = r && 1 != i.id, this.zgNodegzt("node_2/YMLayout/YMLabel3", t).active = r && 1 != i.id, this.zgNodegzt("node_2/YMLayout/YMLabel4", t).active = r && 1 != i.id, r) {
            let s = Math.floor(i.exp / r.exp * 100);
            s >= 100 ? this.gsTxtLblgs("node_2/YMLayout/YMLabel1", a.gsStringHelpIn(6), t) : this.gsTxtLblgs("node_2/YMLayout/YMLabel1", `${s}%`, t)
          }
          this.gsTxtGradelbl("node_11/YMLabel2", c.grade, c.name, t), this.gsSprHtsst("icon", i.sprId, s), this.gsTxtLblgs("node_2/YMLabel1", i.name, s), this.gsTxtStrbyNums("node_4/YMLabel2", 102, e.earn, t), this.gsTxtStrbyNums("node_7/YMLabel2", 102, e.workExp, t);
          let p = d.haveJoinStr(i.join);
          this.gsTxtLblgs("node_10/YMLabel2", p, t), this.zgNodegzt("YMBtn", t).active = !this.closeIn, this.gsButtongbs("YMBtn", (() => {
            let t = {
              name: i.name,
              _func: t => {
                i.name = t, this.gsTxtLblgs("node_2/YMLabel1", i.name, s), o.send(2003, i.id)
              }
            };
            h.bossWshow(u, t)
          }), t), this.gsButtongbs("node_5/YMLabel2", (t => {
            let s = {
              type: 1,
              workInfo1_s: i,
              node: t.target,
              _func: () => {}
            };
            h.bossWshow(_, s)
          }), t), this.gsButtongbs("node_9/YMLabel2", (t => {
            let s = {
              type: 2,
              workInfo1_s: i,
              node: t.target,
              _func: () => {}
            };
            h.bossWshow(_, s)
          }), t), this.zgNodegzt("btn_3").active = !this.closeIn, 1 == i.id && (this.zgNodegzt("btn_3").active = !1), this.gsButtongbs("btn_3", (() => {
            if (i.chucai) return void o.send(202, a.gsStringByTwo(110));
            if (i.isEdu) return void o.send(202, a.gsStringByTwo(111));
            let t = d.huoquYueNum() - i.join,
              s = Math.floor(t / 12),
              n = {
                needNum: Math.ceil((s + 1) * e.salary),
                _func: t => {
                  if (t) {
                    this.xiabanye();
                    let t = {
                      id: i.id
                    };
                    o.send(2306, t)
                  }
                },
                str: a.gsStringHelpIn(12),
                showNot: !0
              };
            h.bossWshow(w, n)
          }))
        }
        showBottom() {
          0 == this.btnIdx ? this.showShuxing() : 1 == this.btnIdx ? this.showPinzhi() : 2 == this.btnIdx ? this.showYongpin() : 3 == this.btnIdx && this.chaonengli()
        }
        showShuxing() {
          let t = b.findObjById("workInfo2", this._workInfo1_s.id),
            s = g.returnOneAttr(t.id),
            i = this.zgNodegzt("view/content", this.sw1);
          this.gsTxtStrbyNums("node_1/YMLayout/YMLabel3", 4, s.hp, i), this.gsTxtStrbyNums("node_2/YMLayout/YMLabel3", 4, s.att, i), this.gsTxtStrbyNums("node_3/YMLayout/YMLabel3", 4, s.def, i), this.gsTxtStrbyNums("node_4/YMLayout/YMLabel3", 4, s.speed, i)
        }
        showPinzhi() {
          let t = b.findObjById("workInfo3", this._workInfo1_s.id);
          this.zgNodegzt("view/node_2", this.sw2).active = 0 == t.pinzhi.length, this.zgNodegzt("view/content", this.sw2).active = t.pinzhi.length > 0, t.pinzhi.length > 0 && this.svCtl2.init(t.pinzhi, function(t, s, i) {
            this.bindpz(t, s, i)
          }.bind(this))
        }
        bindpz(t, s, i) {
          let e = l.co_character.zgTableKey(s);
          this.gsTxtGradelbl("node_1/YMLabel1", e.grade, e.title, t), this.gsTxtLblgs("node_2/YMLabel1", e.name, t);
          let n = e.des.replace("xx", e.value);
          this.gsTxtLblgs("node_3/YMLabel1", n, t)
        }
        showYongpin() {
          let t = b.findObjById("workInfo3", this._workInfo1_s.id),
            s = d.getYpArr2(t.id);
          s.sort(((t, s) => t.id - s.id)), this.zgNodegzt("view/node_2", this.sw3).active = 0 == t.yongpin.length, this.zgNodegzt("view/content", this.sw3).active = t.yongpin.length > 0, t.yongpin.length > 0 && this.svCtl3.init(s, function(t, s, i) {
            this.bindyp(t, s, i)
          }.bind(this))
        }
        bindyp(t, s, i) {
          let n = l.co_prop.zgTableKey(s.id);
          this.gsTxtGradelbl("lay/YMLabel1", n.grade, n.name, t), this.gsTxtStrbyNums("lay/YMLabel2", 11, s.num, t), this.gsButtongbs("lay/YMLabel1", (() => {
            let i = {
              pos: this.gsWorldposgws(t),
              size: t.getComponent(e).contentSize,
              info: {
                id: n.id,
                num: s.num
              },
              type: 1
            };
            h.bossWshow(c, i)
          }), t)
        }
        chaonengli() {
          let t = b.findObjById("workInfo3", this._workInfo1_s.id).chaonengli || [];
          t.sort(((t, s) => t - s)), this.zgNodegzt("view/node_4", this.sw4).active = t.length <= 0, this.zgNodegzt("view/content", this.sw4).active = t.length > 0, t.length > 0 && this.svCtl4.init(t, function(t, s, i) {
            const n = l.co_super.zgTableKey(s);
            this.gsTxtGradelbl("YMLabel1", n.grade, n.name, t), this.gsButtongbs("YMLabel1", (() => {
              h.bossWshow(p, {
                pos: this.gsWorldposgws(t),
                size: t.getComponent(e).contentSize,
                info: n.id
              })
            }), t)
          }.bind(this))
        }
      }).m_name = "WChakancy", y = z)) || y);
      s._RF.pop()
    }
  }
}));