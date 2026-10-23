System.register("chunks:///_virtual/WZhandou.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSSoundMusic.ts"], (function(t) {
  "use strict";
  var e, s, i, o, h, n, a, l, p, d, r, c, g, y, f, u, m, S;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator, i = t.AudioSource, o = t.v3, h = t.Layout, n = t.Vec3, a = t.tween, l = t.Tween, p = t.Animation, d = t.UIOpacity, r = t.Sprite
    }, function(t) {
      c = t.ZGGSOfficeFx, g = t.gs_sql, y = t.gs_boss, f = t.gs_computer, u = t.gs_phone, m = t.gs_tabpr
    }, function(t) {
      S = t.ZGGSSound
    }],
    execute: function() {
      var L, k;
      e._RF.push({}, "6ad9c5YAnRPd46xfDs/OZRf", "WZhandou", void 0);
      const {
        ccclass: b,
        property: z
      } = s;
      t("WZhandou", b("WZhandou")(((k = class t extends c {
        constructor(...t) {
          super(...t), this.speed = {
            1: 2,
            2: 3,
            3: 1
          }, this.timeSpeed = g.base.atkSpeed || 1, this.outHuihe = 240, this.curHuihe = 0, this.atk = {
            1: [4, 1, 5, 2, 6, 3],
            4: [4, 1, 5, 2, 6, 3],
            2: [5, 2, 4, 1, 6, 3],
            5: [5, 2, 4, 1, 6, 3],
            3: [6, 3, 4, 1, 5, 2],
            6: [6, 3, 4, 1, 5, 2]
          }, this.enemyAtk = {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6
          }, this.roleAtk = {
            1: 4,
            2: 5,
            3: 6,
            4: 1,
            5: 2,
            6: 3
          }, this.nodeObj1 = {}, this.nodePosObj1 = {}, this.nodeObj2 = {}, this.nodePosObj2 = {}, this.cat = null, this.fun = null, this.type = 0, this.atkList = [], this.atkZdList = [], this.enemy = [], this.enemyInfo = {}, this.role = [], this.roleInfo = {}, this.enemyList = {}, this.enemyposList = {}, this.roleList = {}, this.roleposList = {}, this.dieList = [], this.isPlay = !0, this.isStar = !1, this.rolePos = {}, this.damageColor = {
            101: [226, 62, 30],
            102: [0, 253, 152],
            103: [48, 147, 255],
            104: [216, 59, 255],
            105: [253, 132, 0],
            106: [91, 253, 0]
          }
        }
        pohuiPage() {
          S.stopBg(), S.playBg("vhallBg"), y.bossDieWin(t, 2)
        }
        load() {
          g.config.isOpenMusic || this.node.getComponent(i).stop(), this.cat = this.zgNodegzt("top"), this.gsButtongbs("top/guanbi", function() {
            this.pohuiPage()
          }.bind(this)), this.gsTxtStrbyNums("lay0/btn_3/YMLabel1", 111, this.speed[this.timeSpeed], this.cat), this.gsTxtStrbyNums("YMLabel", 118, this.timeSpeed, this.cat), this.gsButtongbs("lay0/btn_3", function() {
            this.timeSpeed = this.speed[this.timeSpeed], g.base.atkSpeed = this.timeSpeed, this.gsTxtStrbyNums("lay0/btn_3/YMLabel1", 111, this.speed[this.timeSpeed], this.cat), this.gsTxtStrbyNums("YMLabel", 118, this.timeSpeed, this.cat)
          }.bind(this), this.cat), this.getNodePos(), this.gsButtongbs("lay0/btn_2", function() {
            this.isStar ? (this.isPlay = !1, this.checkisOver()) : console.log("战斗还未开始")
          }.bind(this), this.cat)
        }
        init(t) {
          S.stopBg(), S.playBg("warBg");
          let e = 1e3;
          for (const s of t.enemy) {
            this.enemy.push(e), this.enemyInfo[e] = s;
            let t = s.hp || 100;
            this.enemyInfo[e].hpMax = t > 0 ? t : 1, this.enemyInfo[e].hp = t > 0 ? t : 1;
            let i = s.def;
            this.enemyInfo[e].def = i > 0 ? i : 1;
            let o = s.att;
            this.enemyInfo[e].att = o > 0 ? o : 1;
            let h = s.speed;
            this.enemyInfo[e].speed = h > 0 ? h : 1, e++
          }
          this.fun = t.fun, this.role = t.role, this.type = t.type || 0, this.rolePos = t.pos || {}, this.initLayoutUse(!t.pos), this.initAllData(), this.initInfoShow(), setTimeout(function() {
            console.log("-----战斗开始-----"), console.log("战斗信息:攻击排序，攻击顺序", this.atkList, this.atkZdList), console.log("战斗人原信息:人物属性，人物攻击位置,人物位置Id", this.roleInfo, this.roleList, this.roleposList), console.log("敌人信息:怪物属性，怪物攻击位置,怪物位置Id", this.enemyInfo, this.enemyList, this.enemyposList), this.isStar = !0, this.getNodePos(), this.initLayoutUse(!1), this.startAtk()
          }.bind(this), 500)
        }
        getNodePos() {
          for (let t = 1; t <= 6; t++) {
            let e = this.zgNodegzt("lay1/YMLayout1", this.cat).position.y,
              s = this.zgNodegzt(`lay1/YMLayout1/spr${t}`, this.cat);
            s || (s = this.zgNodegzt(`lay1/YMLayout2/spr${t}`, this.cat), e = this.zgNodegzt("lay1/YMLayout2", this.cat).position.y), this.nodeObj1[t] = s, this.nodePosObj1[t] = o(s.position.x, e, s.position.z);
            let i = this.zgNodegzt("lay2/YMLayout1", this.cat).position.y,
              h = this.zgNodegzt(`lay2/YMLayout1/spr${t}`, this.cat);
            h || (h = this.zgNodegzt(`lay2/YMLayout2/spr${t}`, this.cat), i = this.zgNodegzt("lay2/YMLayout2", this.cat).position.y), this.nodeObj2[t] = h, this.nodePosObj2[t] = o(h.position.x, i, h.position.z)
          }
        }
        initLayoutUse(t) {
          this.zgNodegzt("lay1/YMLayout1", this.cat).getComponent(h).enabled = t, this.zgNodegzt("lay1/YMLayout2", this.cat).getComponent(h).enabled = t, this.zgNodegzt("lay2/YMLayout1", this.cat).getComponent(h).enabled = t, this.zgNodegzt("lay2/YMLayout1", this.cat).getComponent(h).enabled = t
        }
        initAllData() {
          let t = [],
            e = [f.checkSJArr(this.enemy), f.checkSJArr(this.role)],
            s = [this.enemyAtk, this.roleAtk],
            i = [this.enemyList, this.roleList],
            o = [this.enemyposList, this.roleposList];
          for (let h = 0; h < 2; h++) {
            let n = e[h];
            for (let e = 1; e <= 6; e++) {
              let a = n[e - 1];
              if (!a) break;
              let l = s[h][e];
              if (1 == h && this.rolePos[a] && (l = s[h][this.rolePos[a]]), i[h][a] = l, o[h][l] = a, 0 == h) {
                const e = this.enemyInfo[a];
                e && t.push({
                  id: a,
                  speed: e.speed
                })
              } else {
                const e = u.getWorkerAttr(a);
                if (e) {
                  this.roleInfo[a] = {
                    ...e
                  };
                  let s = e.hp || 100;
                  this.roleInfo[a].hpMax = s, this.roleInfo[a].hp = s, t.push({
                    id: a,
                    speed: e.speed
                  })
                }
              }
            }
          }
          t.sort((function(t, e) {
            return e.speed - t.speed
          }));
          for (const e of t) this.atkList.push(e.id);
          this.atkZdList = [...this.atkList]
        }
        initInfoShow() {
          for (let t = 1; t <= 6; t++) {
            let e = this.nodeObj2[t],
              s = this.enemyposList[t];
            if (s) {
              const t = this.enemyInfo[s];
              this.gsWorkPic(e, t);
              const i = m.co_post.zgTableKey(t.postId);
              i && this.gsWorkTypePic3(e, `${i.grade}`), this.zgSpriteFargst("node_0/node_2", e).fillRange = 1
            } else e.active = !1
          }
          for (let t = 1; t <= 6; t++) {
            let e = this.nodeObj1[t],
              s = this.roleposList[t];
            if (s) {
              const t = g.findObjById("workInfo1", s);
              this.gsWorkPic(e, t);
              const i = m.co_post.zgTableKey(t.postId);
              i && this.gsWorkTypePic3(e, `${i.grade}`), this.zgSpriteFargst("node_0/node_2", e).fillRange = 1
            } else e.active = !1
          }
        }
        startAtk() {
          if (this.curHuihe++, this.atkZdList.length <= 0) {
            this.atkZdList = [];
            for (let t = 0; t < this.atkList.length; t++) {
              let e = this.atkList[t];
              this.dieList.indexOf(e) < 0 && this.atkZdList.push(e)
            }
          }
          let t, e, s = {
              atkId: 0,
              defId: 0,
              atkpos: 0,
              defpos: 0,
              type: 0,
              num: {
                1: {},
                2: 0,
                3: {},
                4: 0
              },
              atkDie: !1,
              defDie: !1
            },
            i = this.atkZdList.shift();
          s.atkId = i;
          let o = this.enemyList[i];
          t = this.enemyInfo[i], s.type = 2, o || (o = this.roleList[i], t = this.roleInfo[i], s.type = 1), s.atkpos = o;
          let h = 1,
            n = 1,
            a = this.atk[o];
          if (!a) return void console.error("错误", this.atkZdList, i, h);
          for (let t = 0; t < a.length; t++)
            if (n = a[t], 1 == s.type) {
              if (h = this.enemyposList[n], h && this.dieList.indexOf(h) < 0) {
                e = this.enemyInfo[h];
                break
              }
            } else if (h = this.roleposList[n], h && this.dieList.indexOf(h) < 0) {
            e = this.roleInfo[h];
            break
          }
          s.defId = h, s.defpos = n, console.log("输出战斗信息:战斗信息,攻击者数据,防御者数据", s, t, e);
          let l = t.att - e.def;
          l <= 0 && (l = 1), s.num[1][101] = -l, s.num[2] = -l, console.log("输出战斗数值信息", s.num);
          let p = (t, e) => {
              if (this.dieList.indexOf(t) >= 0) return void console.error("重复死亡", t, this.atkZdList, this.dieList);
              this.dieList.push(t);
              let s = this.atkZdList.indexOf(t);
              s >= 0 && this.atkZdList.splice(s, 1), e ? console.log("攻击id死亡", t) : console.log("防御id死亡", t)
            },
            d = s.atkId,
            r = s.defId;
          if (1 == s.type) {
            let t = this.roleInfo[d];
            t.hp += s.num[4], t.hp <= 0 ? (t.hp = 0, s.atkDie = !0, p(d, !0)) : t.hp >= t.hpMax && (t.hp = t.hpMax);
            let e = this.enemyInfo[r];
            e.hp += s.num[2], e.hp <= 0 && (e.hp = 0, s.defDie = !0, p(r, !1))
          } else {
            let t = this.enemyInfo[d];
            t.hp += s.num[4], t.hp <= 0 ? (t.hp = 0, s.atkDie = !0, p(d, !0)) : t.hp >= t.hpMax && (t.hp = t.hpMax);
            let e = this.roleInfo[r];
            e.hp += s.num[2], e.hp <= 0 && (e.hp = 0, s.defDie = !0, p(r, !1))
          }
          this.isPlay ? this.playShow(s) : this.checkisOver()
        }
        checkisOver() {
          let t = 0,
            e = 0,
            s = 0;
          for (const t of this.dieList) this.enemy.indexOf(t) >= 0 && e++, this.role.indexOf(t) >= 0 && s++;
          if (0 == t && e >= this.enemy.length && (t = 1), 0 == t && s >= this.role.length && (t = 2), this.curHuihe > this.outHuihe && (console.log("战斗回合数过多，判负"), t = 2), 0 == t) this.startAtk();
          else {
            console.log("-----结束战斗-----");
            let e = {
              enemy: [],
              role: []
            };
            for (const t of this.dieList) this.enemy.indexOf(t) >= 0 && e.enemy.push(this.enemyInfo[t]), this.role.indexOf(t) >= 0 && e.role.push(this.roleInfo[t]);
            console.log("-----死亡信息-----:"), console.log(e), this.fun && this.fun(1 == t, e), this.pohuiPage()
          }
        }
        playShow(t) {
          if (1 == t.type) {
            let e = this.nodeObj1[t.atkpos],
              s = this.nodeObj2[t.defpos],
              i = this.nodePosObj1[t.atkpos],
              o = this.nodePosObj2[t.defpos];
            this.atkShow(e, s, !0, t, i, o)
          } else {
            let e = this.nodeObj2[t.atkpos],
              s = this.nodeObj1[t.defpos],
              i = this.nodePosObj2[t.atkpos],
              o = this.nodePosObj1[t.defpos];
            this.atkShow(e, s, !1, t, i, o)
          }
        }
        atkShow(t, e, s, i, h, r) {
          let c = this.zgNodegzt("lay3", this.cat),
            g = t.parent,
            y = {
              ...t.position
            },
            f = (e.position, s ? -160 : 160),
            u = s ? [this.roleInfo, this.enemyInfo] : [this.enemyInfo, this.roleInfo];
          t.parent = c, t.setPosition(new n(h.x, h.y, h.z));
          let m = !1,
            L = !1;
          var k = () => {
            m && L && (m = !1, L = !1, this.defDamage(t), this.defDamage(e), this.isPlay && this.checkisOver())
          };
          let b = s ? r.y - h.y : h.y - r.y,
            z = s ? r.x - h.x : h.x - r.x,
            I = .25 / 330 * Math.sqrt(Math.pow(z, 2) + Math.pow(b, 2)),
            O = !1,
            x = !1;
          var P = () => {
            if (O)
              if (O = !1, l.stopAllByTarget(t), i.atkDie) {
                let e = this.zgNodegzt("Pren", t),
                  s = this.zgNodegzt("icon", t);
                0 == this.type && s && (e = s), a(e.getComponent(d)).delay(.1 / this.timeSpeed).sequence((new l).to(.15 / this.timeSpeed, {
                  opacity: 0
                }), (new l).to(.15 / this.timeSpeed, {
                  opacity: 255
                })).repeat(1).call((() => {
                  this.sprGray(e), a(t.getComponent(d)).to(.3, {
                    opacity: 0
                  }).call((() => {
                    t.setPosition(new n(y.x, y.y, y.z)), t.parent = g, t.active = !1, t.getComponent(d).opacity = 255, m = !0, k()
                  })).start()
                })).start()
              } else a(t).delay(.1 / this.timeSpeed).parallel((new l).to(.3 / this.timeSpeed, {
                position: h
              }), (new l).sequence()).call((() => {
                t.setPosition(new n(y.x, y.y, y.z)), t.parent = g, m = !0, k()
              })).start();
            if (x)
              if (x = !1, l.stopAllByTarget(e), i.defDie) {
                let t = this.zgNodegzt("icon", e),
                  s = this.zgNodegzt("Pren", e);
                0 == this.type && t && (s = t), a(s.getComponent(d)).delay(.1 / this.timeSpeed).sequence((new l).to(.15 / this.timeSpeed, {
                  opacity: 0
                }), (new l).to(.15 / this.timeSpeed, {
                  opacity: 255
                })).repeat(1).call((() => {
                  this.sprGray(s), a(e.getComponent(d)).to(.3, {
                    opacity: 0
                  }).call((() => {
                    e.active = !1, e.getComponent(d).opacity = 255, L = !0, k()
                  })).start()
                })).start()
              } else L = !0, k()
          };
          a(t).delay(.1 / this.timeSpeed).sequence((new l).to(I / this.timeSpeed, {
            position: o(r.x, r.y + f, r.z)
          }), (new l).to(.09 / this.timeSpeed, {
            scale: o(1.5, 1.5, 1)
          }), (new l).to(.03 / this.timeSpeed, {
            scale: o(1, 1, 1)
          })).call((() => {
            a(e).sequence((new l).to(.1 / this.timeSpeed, {
              scale: o(.8, .8, 1)
            }), (new l).to(.1 / this.timeSpeed, {
              scale: o(1, 1, 1)
            })).call((() => {
              let s = 0;
              if (i.num[4] < 0 ? s = 1 : i.num[4] > 0 && (s = 2), 0 != s) {
                let e = u[0][i.atkId],
                  o = this.zgSpriteFargst("node_0/node_2", t).fillRange,
                  h = e.hp / e.hpMax,
                  n = o - h;
                console.log("战斗扣血", e, o, h), this.gsScheduleStnode(t, (() => {
                  if (this.zgSpriteFargst("node_0/node_2", t).fillRange = h + n, n <= 0 && 1 == s || n >= 0 && 2 == s) return this.gsStopSchedulegs(t), O = !0, void P();
                  1 == s ? (n -= .05, n <= 0 && (n = 0)) : (n += .05, n >= 0 && (n = 0))
                }), .005 / this.timeSpeed)
              } else O = !0, P();
              let o = u[1][i.defId],
                h = this.zgSpriteFargst("node_0/node_2", e).fillRange,
                n = o.hp / o.hpMax,
                a = h - n;
              console.log("战斗扣血2", o, h, n), this.gsScheduleStnode(e, (() => {
                if (this.zgSpriteFargst("node_0/node_2", e).fillRange = n + a, a <= 0) return this.gsStopSchedulegs(e), x = !0, void P();
                a -= .05, a <= 0 && (a = 0)
              }), .005 / this.timeSpeed)
            })).start();
            let s = this.zgNodegzt("0", this.cat);
            s.setPosition(new n(r.x, r.y + 10, r.z)), S.playOne("warAtt");
            let h = s.getComponent(p);
            h.play(), h.once(p.EventType.PLAY, (() => {
              this.showDamage(t, i.num[3]), this.showDamage(e, i.num[1])
            })), h.once(p.EventType.FINISHED, (() => {
              s.setPosition(new n(-800, 100, 0))
            }))
          })).start()
        }
        showDamage(t, e) {
          let s = Object.keys(e);
          s.length > 3 && console.error("伤害类型出现四种", e), s.reverse();
          let i = this.zgNodegzt("YMLayout", t),
            h = {
              102: "免疫",
              103: "反弹",
              104: "破防",
              105: "暴击",
              106: "吸血"
            };
          for (let t = 0; t < 3; t++) {
            let o = i.children[t],
              n = s[t];
            if (o.active = n, n) {
              let t = f.gsNumValueShow(e[n]);
              0 == e[n] && (t = "");
              let s = "",
                i = "";
              "102" == n ? i = "%" : "106" == n && (s = "+");
              let a = (h[n] || "") + s + `${t}` + i;
              this.gsTxtGradelbl0(o, this.damageColor[n], a)
            }
          }
          i.setScale(.1, .1, .1), i.active = !0;
          let n = i.getPosition();
          a(i).sequence((new l).to(.2 / this.timeSpeed, {
            scale: o(1.3, 1.3, 1)
          }), (new l).to(.2 / this.timeSpeed, {
            scale: o(1, 1, 1)
          })).by(.3 / this.timeSpeed, {
            position: o(0, 60, 0)
          }).call((() => {
            a(i.getComponent(d)).to(.3 / this.timeSpeed, {
              opacity: 0
            }).call((() => {
              i.getComponent(d).opacity = 255, i.setPosition(n), i.active = !1
            })).start()
          })).start()
        }
        defDamage(t) {}
        sprGray(t) {
          let e = t.children;
          if (e.length > 0)
            for (let t = 0; t < 11; t++) e[t].getComponent(r).grayscale = !0;
          else t.getComponent(r).grayscale = !0
        }
      }).m_name = "WZhandou", L = k)) || L);
      e._RF.pop()
    }
  }
}));