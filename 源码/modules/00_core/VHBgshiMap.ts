System.register("chunks:///_virtual/VHBgshiMap.ts", ["cc", "./ZGGSOfficeFx.ts", "./VHBgshiMapEx.ts", "./VHBgshiMapFu.ts"], (function(t) {
  "use strict";
  var i, e, s, o, n, h, c, l, a, r, d, g, b, f, m, p, u, z, y, x, v;
  return {
    setters: [function(t) {
      i = t.cclegacy, e = t.v3, s = t.Rect, o = t.find, n = t.Node, h = t.instantiate, c = t.v2, l = t.tween, a = t.Vec3, r = t.UITransform, d = t._decorator
    }, function(t) {
      g = t.gs_sql, b = t.gs_tabpr, f = t.gs_bmsg, m = t.gs_btxt, p = t.gs_sound, u = t.gs_boss, z = t.gs_computer
    }, function(t) {
      y = t.VHBgshiMapEx
    }, function(t) {
      x = t.ThreeShow, v = t.DrawTree
    }],
    execute: function() {
      var I;
      i._RF.push({}, "6d964oF3iBH97+q0Tjzz381", "VHBgshiMap", void 0);
      const {
        ccclass: N,
        property: j
      } = d;
      let O = {
        x: 0,
        y: 10,
        sizex: 207,
        sizey: -280,
        pyX: 0,
        pyY: 0,
        faceTime: 2
      };
      t("VHBgshiMap", N("VHBgshiMap")(I = class extends y {
        constructor(...t) {
          super(...t), this.bgSpr = null, this.iconObjs = {}, this.showObjs = {}, this.contentIcon = null, this.fatherIcon = null, this.txtIcon = null, this.txtIconP = null, this.txtObjs = {}, this.txtPos = [], this.scaleNode = null, this.touchNode = null, this.sonItem = null, this.mishuItem = null, this.dszhangItem = null, this.lblPos = e(0, 0, 0), this.maxNum = 100, this.minNum = 37.5, this.btn_yindao = null, this.isFirstPy = !1, this.msX = 218, this.dsY = 265, this.rect = new s(0, 0, this.screen.width + 80, this.screen.height + 50)
        }
        loadBase() {
          this.bgSpr = this.zgNodegzt("YMSprite"), this.btn_yindao = o("Canvas/btn_yindao"), this.contentIcon = this.zgNodegzt("touch_node/node/node_icon"), this.fatherIcon = this.zgNodegzt("touch_node/node/node_icon/node_item"), this.txtIcon = this.zgNodegzt("touch_node/node/node_icon/node_txt"), this.txtIconP = this.zgNodegzt("touch_node/node/node_icon/node_txtP"), this.scaleNode = this.zgNodegzt("touch_node/node"), this.touchNode = this.zgNodegzt("touch_node"), this.sonItem = this.zgNodegzt("nodeItem");
          let t = this.zgNodegzt("icon1/touxiang/YMLabel5", this.sonItem);
          this.lblPos = t.getPosition(), t.active = !1, this.sonItem.active = !1, this.mishuItem = this.zgNodegzt("nodeItem1");
          for (let t = 1; t <= 4; t++) {
            let i = this.zgNodegzt(`icon${t}`, this.mishuItem),
              e = i.getPosition();
            i.spX = e.x, i.spY = e.y, i.parent = this.fatherIcon, i.active = !1, i.isp = 1, i.name = `ms${t}`, i.bq = this.zgNodegzt("touxiang/biaoqing", i), i.bq.active = !1, i.jh = this.zgNodegzt("jiahao", i), i.jh.active = !1;
            for (let t = 1; t <= 5; t++) {
              let e = this.zgNodegzt(`touxiang/YMLabel${t}`, i);
              e.parent = this.txtIcon, i[`lbName${t}`] = e, e.active = !1, 5 == t && (e.active = !1, e.parent = this.txtIconP)
            }
            this.iconObjs[`ms${t}`] = i
          }
          this.dszhangItem = this.zgNodegzt("nodeItem2");
          for (let t = 0; t <= 8; t++) {
            let i = this.zgNodegzt(`icon${t}`, this.dszhangItem),
              e = i.getPosition();
            i.spX = e.x, i.spY = e.y, i.parent = this.fatherIcon, i.active = !1, i.isp = 2, i.bq = this.zgNodegzt("touxiang/biaoqing", i), i.bq.active = !1, i.jh = this.zgNodegzt("jiahao", i), i.jh.active = !1;
            for (let t = 1; t <= 5; t++) {
              let e = this.zgNodegzt(`touxiang/YMLabel${t}`, i);
              e.parent = this.txtIcon, i[`lbName${t}`] = e, e.active = !1, 5 == t && (e.active = !1, e.parent = this.txtIconP)
            }
            this.iconObjs[`ds${t}`] = i
          }
          for (let t = 1; t <= 4; t++) {
            let i = this.zgNodegzt(`icon1/touxiang/YMLabel${t}`, this.sonItem);
            this.txtPos.push(i.getPosition())
          }
          this.touchSet()
        }
        touchSet() {
          this.touchNode.on(n.EventType.TOUCH_MOVE, function(t) {
            var i = t.getTouches();
            {
              var e = e || i[0].getLocation(),
                s = s || i[0].getPreviousLocation();
              let t = e.x - s.x,
                o = e.y - s.y,
                n = this.scaleNode.getScale().x,
                h = this.fatherIcon.getPosition();
              h.x += t / n, h.y += o / n, this.fatherIcon.setPosition(h)
            }
          }.bind(this), this)
        }
        initIcon() {
          this.resetLinesAndPosition()
        }
        initDataObj(t, i = 0) {
          let e = {
            name: t,
            children: [],
            info: {
              isbm: 0,
              iswan: i,
              aType: 0
            }
          };
          const s = g.findObjById("combmInfo", t);
          if (s)
            if (e.name = s.depId, e.info = {
                isbm: 1,
                iswan: i,
                aType: 2
              }, s.workId > 0 && (e.name = s.workId, e.info.aType = 0), s.comArr.length > 0) s.comArr.forEach(((t, i) => {
              let o = 0;
              s.comArr.length > 1 && (0 == i ? o = 1 : i == s.comArr.length - 1 && (o = 2)), e.children.push(this.initDataObj(t, o))
            }));
            else {
              const t = b.co_post.objs[1][s.id];
              let i = [...s.workArr],
                o = e,
                n = !1,
                h = !1;
              for (let e = 0; e < Math.max(t.num, i.length) + 1; e++) {
                let s = {
                    name: `${t.id}-${e}`,
                    children: [],
                    info: {
                      isbm: 0,
                      iswan: 3,
                      aType: 1
                    }
                  },
                  c = i[e];
                const l = g.findObjById("workInfo1", c);
                if (l ? (s.name = l.id, s.info.aType = 0) : h = !0, n || (s.info.isbm = 1, n = !0), o.children.push(s), o = s, h) break
              }
            } return e
        }
        resetLinesAndPosition() {
          if (!g.findObjById("combmInfo", 1001) || !g.findObjById("workInfo1", 1)) return;
          let t = this.initDataObj(1001),
            i = x.buchheim(new v(t, null, O.y));
          try {
            if (window.__dshlog) {
              const dump = (n, d) => {
                window.__dshlog("T " + new Array(d + 1).join(".") + n.name + " x=" + Math.round(n.x) + " ch=" + n.children.length);
                n.children.forEach(c => dump(c, d + 1))
              };
              dump(i, 0)
            }
          } catch (e) {}
          try {
            if (window.__dshlog) {
              ["1001", "1002", "1003", "1500", "1600"].forEach(k => {
                const n = g.combmInfo.objs[k];
                window.__dshlog("M " + k + " dep=" + (n && n.depId) + " wId=" + (n && n.workId) +
                  " arr=" + (n && n.workArr ? n.workArr.length : "-") +
                  " com=" + (n && n.comArr ? n.comArr.join("/") : "-") +
                  " cname=" + (n && n.cname))
              });
              const ik = Object.keys(this.iconObjs || {}).filter(k => this.iconObjs[k]);
              window.__dshlog("I " + ik.map(k => k + ">" + this.iconObjs[k].name + (this.iconObjs[k].active ? "" : "(off)")).join(" "))
            }
          } catch (e) {}
          this.isFirstPy || (this.isFirstPy = !0, O.pyX = i.x - O.x, O.pyY = i.y - O.y), this.renderTree(i), this.renderTreeSilp(i);
          // 打开组织架构图时询问分公司名称（是否真的提问由 PGsWork 内的引导状态决定）
          try {
            if (window.__dshAskBranchNames) setTimeout(function() { window.__dshAskBranchNames() }, 1200)
          } catch (e) {}
          let e = this.iconObjs[g.combmInfo.objs[1001] && g.combmInfo.objs[1001].workId] || this.iconObjs[1];
          if (e) {
            const a1 = this.zgNodegzt("icon1/sprUp2", e),
              a2 = this.zgNodegzt("icon1/sprJt", e),
              a3 = this.zgNodegzt("icon1/sprUp1", e),
              hasDs = !!g.combmInfo.objs[1003];
            a1 && (a1.active = !1), a2 && (a2.active = hasDs), a3 && (a3.active = hasDs)
          }
          this.refreshMsBm(), this.refreshDsBm();
          let s = [];
          for (const t in this.iconObjs) {
            let i = this.iconObjs[t];
            if (i.iss || i.isp) i.iss = 0, s.push(i);
            else {
              i.active = !1;
              for (let t = 1; t <= 4; t++) i["lbName" + t].removeFromParent();
              i.lbName5.removeFromParent(), i.removeFromParent(), delete this.iconObjs[t]
            }
          }
          s.sort((function(t, i) {
            return t.position.y - i.position.y
          }));
          for (let t = 0; t < s.length; t++) s[t].getSiblingIndex() != t && s[t].setSiblingIndex(t)
        }
        handerThree(t) {
          t.x *= O.sizex, t.x += O.sizex, t.y *= O.sizey, t.y += O.sizey, t.children.forEach((t => {
            this.handerThree(t)
          }))
        }
        renderTree(t) {
          let i = this.iconObjs[t.name];
          if (!i && !i) {
            i = h(this.sonItem), i.name = `${t.name}`, i.parent = this.fatherIcon, i.active = !0, this.iconObjs[t.name] = i;
            for (let t = 1; t <= 5; t++) {
              let e = this.zgNodegzt(`icon1/touxiang/YMLabel${t}`, i);
              e.parent = this.txtIcon, i[`lbName${t}`] = e, 5 == t && (e.parent = this.txtIconP)
            }
            i.bq = this.zgNodegzt("icon1/touxiang/biaoqing", i), i.bq.active = !1, i.jh = this.zgNodegzt("icon1/jiahao", i), i.jh.active = !1
          }
          i.aType = t.info.aType, i.iss = 1;
          for (let e = 0; e < 4; e++) {
            let s = i[`lbName${e+1}`],
              o = this.txtPos[e];
            s.setPosition(t.x - O.pyX + o.x, t.y - O.pyY + o.y, 0)
          }
          i.lbName5.lblPos = c(t.x - O.pyX, t.y - O.pyY), i.setPosition(t.x - O.pyX, t.y - O.pyY, 0), i.qipao && i.qipao.setPosition(t.x - O.pyX, t.y - O.pyY + i.qipao.posY, 0), this.initRoleShow(i), t.children.forEach((t => {
            this.renderTree(t)
          }))
        }
        findOldTreeNode(t, i) {
          let e = this.iconObjs[i];
          return e && (e.name = t, this.iconObjs[i] = null, delete this.iconObjs[i], this.iconObjs[t] = e), e
        }
        renderTreeSilp(t) {
          t.children.forEach((t => {
            this.renderTreeSilp(t)
          }));
          let i = this.iconObjs[t.name],
            e = i.children[0];
          i.getPosition();
          this.bindLines(e, t)
        }
        bindLines(t, i) {
          if (this.zgNodegzt("sprJt", t).active = i.info.isbm, this.zgNodegzt("sprUp1", t).active = i.info.isbm && (!i.info.iswan || 3 == i.info.iswan) || 1 == i.info.aType, this.zgNodegzt("sprUp2", t).active = !i.info.isbm && 3 == i.info.iswan, this.zgNodegzt("sprUp3", t).active = i.info.iswan && 3 != i.info.iswan, this.zgNodegzt("sprUp4", t).active = i.children.length > 0 && 3 != i.info.iswan, this.zgNodegzt("sprw1", t).active = 1 == i.info.iswan, this.zgNodegzt("sprw2", t).active = 2 == i.info.iswan, this.zgNodegzt("sprD1", t).active = i.children.length > 1, this.zgNodegzt("sprD2", t).active = i.children.length > 1, i.children.length > 1) {
            let e = i.children[0],
              s = i.children[i.children.length - 1];
            this.gsTransUIBoxgts("sprD1", null, i.x - e.x, t), this.gsTransUIBoxgts("sprD2", null, s.x - i.x, t)
          }
        }
        refreshMsBm() {
          const t = g.findObjById("combmInfo", 1002);
          if (!t) return;
          const base = this.iconObjs[g.combmInfo.objs[1001] && g.combmInfo.objs[1001].workId] || this.iconObjs[1];
          if (!base) return;
          let i = base.getPosition();
          for (let s = 0; s < Math.min(t.workArr.length, 4); s++) {
            let o = t.workArr[s],
              n = this.iconObjs[`ms${s+1}`];
            n ? n && o > 0 && (this.iconObjs[`ms${s+1}`] = null, delete this.iconObjs[`ms${s+1}`], this.iconObjs[o] = n) : n = this.iconObjs[o], o > 0 ? (n.name = `${o}`, n.aType = 0) : 0 == o && (n.aType = 3), n.active = !0;
            for (let t = 0; t < 4; t++) {
              let e = n[`lbName${t+1}`];
              e.active = !0;
              let s = this.txtPos[t];
              e.setPosition(i.x + this.msX + n.spX + s.x, s.y + i.y + n.spY - .1 * t)
            }
            n.lbName5.lblPos = c(i.x + this.msX + n.spX, i.y + n.spY - .1 * s), n.setPosition(e(i.x + this.msX + n.spX, i.y + n.spY - .1 * s)), this.initRoleShow(n), this.zgNodegzt("suo", n).active = o < 0, o < 0 && (n.aType = 0, this.gsButtongbs("suo", (() => {
              let t = b.co_senior.objs[1][s].set[1];
              f.send(202, m.gsStringByParam(106, t))
            }), n))
          }
        }
        refreshDsBm() {
          const t = g.findObjById("combmInfo", 1003);
          if (!t) return;
          const baseD = this.iconObjs[g.combmInfo.objs[1001] && g.combmInfo.objs[1001].workId] || this.iconObjs[1];
          if (!baseD) return;
          let i = baseD.getPosition(),
            s = this.iconObjs.ds0;
          if (!s) return;
          s.active = !0;
          for (let t = 0; t < 4; t++) {
            let e = s[`lbName${t+1}`];
            e.active = !0;
            let o = this.txtPos[t];
            e.setPosition(i.x + s.spX + o.x, o.y + i.y + s.spY + this.dsY)
          }
          s.lbName5.lblPos = c(i.x + s.spX, i.y + s.spY + this.dsY), s.setPosition(e(i.x + s.spX, i.y + s.spY + this.dsY)), this.initRoleShow(s, g.combmInfo.objs[1001] && g.combmInfo.objs[1001].workId || 1);
          for (let s = 0; s < Math.min(t.workArr.length, 8); s++) {
            let o = t.workArr[s],
              n = this.iconObjs[`ds${s+1}`];
            n ? n && o > 0 && (this.iconObjs[`ds${s+1}`] = null, delete this.iconObjs[`ds${s+1}`], this.iconObjs[o] = n) : n = this.iconObjs[o], o > 0 ? (n.name = `${o}`, n.aType = 0) : 0 == o && (n.aType = 4), n.active = !0;
            for (let t = 0; t < 4; t++) {
              let e = n[`lbName${t+1}`];
              e.active = !0;
              let s = this.txtPos[t];
              e.setPosition(i.x + n.spX + s.x, s.y + i.y + n.spY + this.dsY, 0)
            }
            n.lbName5.lblPos = c(i.x + n.spX, i.y + n.spY + this.dsY), n.setPosition(e(i.x + n.spX, i.y + n.spY + this.dsY)), this.initRoleShow(n), this.zgNodegzt("suo", n).active = o < 0, o < 0 && (n.aType = 0, this.gsButtongbs("suo", (() => {
              let t = b.co_senior.objs[2][s].set[1];
              f.send(202, m.gsStringByParam(106, t))
            }), n))
          }
        }
        refreshRole(t) {
          if (!t || t <= 0) return;
          let i = this.iconObjs[t];
          if (i && (this.initRoleShow(i), 1 == t)) {
            let t = this.iconObjs.ds0;
            t && t.active && this.initRoleShow(t, 1)
          }
        }
        evenEndDep(t) {
          let i = !1,
            e = t.id;
          if (e && e > 0) {
            let t = o("Canvas/window");
            for (const i of t.children) i.active && (i.active = !1);
            let s = null;
            if (1002 == e) s = "ms1";
            else if (1003 == e) s = "ds0";
            else {
              const t = b.co_post.objs[2][e][0];
              t && (s = t.id)
            }
            s && (i = !0, this.moveToWork(s, .3, (t => {
              this.scheduleOnce((() => {
                f.send(2300)
              }), .2)
            })))
          }
          i || f.send(2300)
        }
        evenEndWork(t) {
          let i = !1,
            e = t.id,
            s = t.roleArr || [],
            n = t.roleObj || null,
            h = t.face;
          if (e && e > 0) {
            i = !0;
            let t = o("Canvas/window");
            for (const i of t.children) i.active && (i.active = !1);
            this.moveToWork(e, .3, (t => {
              let i = null;
              i = t.isp ? this.zgNodegzt("touxiang/4", t) : this.zgNodegzt("icon1/touxiang/4", t), this.gsNodeBigSmallgOnensFun(i, .15, (() => {
                if (h && h > 0) {
                  if (n)
                    for (const t in n) this.faceShowById(Number(t), n[t]);
                  else if (s.length > 0)
                    for (const t of s) this.faceShowById(t, h);
                  else this.faceShowById(e, h);
                  this.faceSoundShowById(e, h)
                }
                this.scheduleOnce((() => {
                  f.send(2300)
                }), .2)
              }))
            }))
          }
          i || f.send(2300)
        }
        evenEndWork2(t, i) {
          let e = !1,
            s = t.id,
            n = t.roleArr || [],
            h = t.roleObj || null,
            c = t.face;
          if (s && s > 0) {
            e = !0;
            let t = o("Canvas/window");
            for (const i of t.children) i.active && (i.active = !1);
            this.moveToWork(s, 0, (t => {
              t.isp ? this.zgNodegzt("touxiang/4", t) : this.zgNodegzt("icon1/touxiang/4", t);
              if (c && c > 0) {
                if (h)
                  for (const t in h) this.faceShowById(Number(t), h[t]);
                else if (n.length > 0)
                  for (const t of n) this.faceShowById(t, c);
                else this.faceShowById(s, c);
                this.faceSoundShowById(s, c)
              }
              this.scheduleOnce((() => {
                i()
              }), .2)
            }))
          }
          e || f.send(2300)
        }
        faceShowById(t = 0, i) {
          let e = this.iconObjs[t];
          e && (e.bq.active = !0, this.gsWorkFace(e.bq, i), l(e.bq).delay(O.faceTime).call((() => {
            e.bq.active = !1
          })).start())
        }
        faceSoundShowById(t = 0, i) {
          const e = g.findObjById("workInfo1", t);
          let s = e ? e.sex : 1;
          const o = b.co_emote.zgTableKey(i);
          let n = m.gsFaceVido(s, o);
          o && n ? p.play1(n) : console.error("声音有问题", e.sex, i)
        }
        evenStartWork(t) {
          let i = t.id,
            e = t.win,
            s = t.info;
          i && i > 0 && this.moveToWork(i, .3, (t => {
            let i = null;
            i = t.isp ? this.zgNodegzt("touxiang/4", t) : this.zgNodegzt("icon1/touxiang/4", t), this.gsNodeBigSmallgOnensFun(i, .15, (() => {
              u.bossWshow(e, s)
            }))
          }))
        }
        moveWork(t) {
          let i = t.id,
            e = t.time || 0;
          i && i > 0 && this.moveToWork(i, e, (t => {}))
        }
        guiweiPos() {
          let t = this.iconObjs[1];
          t && this.movetoWorkNode(t, .1, function(t) {}.bind(this))
        }
        moveToWork(t, i = 0, e = null) {
          let s = this.iconObjs[t];
          s ? this.movetoWorkNode(s, i, function(t) {
            e && e(t)
          }.bind(this)) : (console.error("节点不存在，进行下一个事件", t), f.send(2300))
        }
        movetoWorkNode(t, i, e) {
          let s = t.getWorldPosition(),
            o = this.scaleNode.getWorldPosition(),
            n = this.scaleNode.getScale().x,
            h = new a((o.x - s.x) / n, (o.y - s.y) / n, 0);
          l(this.fatherIcon).by(i, {
            position: h
          }).call((() => {
            e && e(t)
          })).start()
        }
        showRoleAddMoney() {
          for (const t in this.iconObjs) {
            let i = this.iconObjs[t];
            if (i && i.name <= 1e3 && i.name > 0 && 1 == i.active) {
              let t = i.lbName5;
              if (t) {
                let i = t.lblPos;
                t.setPosition(e(i.x + this.lblPos.x, i.y + this.lblPos.y, 0)), t.active = !0, l(t).by(.8, {
                  position: e(0, 30, 0)
                }).to(0, {
                  active: !1
                }).start()
              }
            }
          }
        }
        deleteWorkerDeal(t) {
          let i = t.id,
            e = g.findObjById("workInfo1", i),
            s = m.gsStringByParam(18, e.name),
            o = e.depId,
            n = this.iconObjs[i];
          n ? this.movetoWorkNode(n, 0, function(t) {
            let h = 0,
              c = !1;
            1002 == o ? h = 3 : 1003 == o && (h = 4), g.findObjById("combmInfo", o).workId == i && (c = !0);
            let l = null;
            l = n.isp ? this.zgNodegzt("touxiang/4", n) : this.zgNodegzt("icon1/touxiang/4", n), this.gsNodeBigSmallgOnensFun(l, .15, (() => {
              let t = g.findObjById("combmInfo", o),
                i = t.workArr.indexOf(e.id);
              1 == c && 0 == h && i < 0 && (this.iconObjs[t.depId] = n, n.name = `${t.depId}`, this.iconObjs[e.id] = null, delete this.iconObjs[e.id]), 1002 == o ? (this.iconObjs[e.id] = null, delete this.iconObjs[e.id], this.iconObjs[`ms${i+1}`] = n, n.name = `ms${i+1}`) : 1003 == o && (this.iconObjs[e.id] = null, delete this.iconObjs[e.id], this.iconObjs[`ds${i+1}`] = n, n.name = `ds${i+1}`), l.active = !1, z.delBmInfoByWork(o, e.id, h), this.scheduleOnce((() => {
                n.active = c, this.scheduleOnce((() => {
                  f.send(202, s), this.resetLinesAndPosition(), f.send(2300)
                }), .4)
              }), .4)
            }))
          }.bind(this)) : (console.error("节点不存在，进行下一个事件", i), f.send(2300))
        }
        lateUpdate(t) {}
        update(t) {
          let i = this.fatherIcon.position;
          this.txtIcon.setPosition(i), this.txtIconP.setPosition(i), this.node_qipao.setPosition(i);
          // 性能补丁：名字标签的显隐只跟"地图动了没有"有关。
          // 原版每帧扫一遍全部图标，每个图标都要拼 "ANode:xxx" 字符串 + new Rect，
          // 静止时纯属空转（实测主界面常驻 144% CPU 的一部分就来自这里）。
          // 现在：位置/缩放没变就 4 次/秒兜底一次，拖动时依然逐帧判定，视觉无差别。
          let sc = this.scaleNode ? this.scaleNode.scale.x : 1,
            lp = this._cullPos;
          this._cullDt = (this._cullDt || 0) + (t || 0);
          if (lp && lp.x === i.x && lp.y === i.y && lp.s === sc && this._cullDt < .25) return;
          this._cullDt = 0, this._cullPos = {
            x: i.x,
            y: i.y,
            s: sc
          };
          for (const t in this.iconObjs) {
            let i = this.iconObjs[t];
            if (1 == i.active) {
              let t = null;
              t = i.isp ? this.zgNodegzt("touxiang", i) : this.zgNodegzt("icon1/touxiang", i);
              var e = i.getComponent(r).contentSize;
              let o = i.worldPosition,
                n = i.worldScale,
                h = new s(o.x, o.y, e.width * n.x, e.height * n.x).intersects(this.rect);
              t.active = h
            }
          }
        }
      }) || I);
      i._RF.pop()
    }
  }
}));