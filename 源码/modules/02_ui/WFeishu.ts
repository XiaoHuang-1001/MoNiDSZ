System.register("chunks:///_virtual/WFeishu.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var e, i, s, o, n, l, h, a, c, r, p;
  return {
    setters: [function(t) {
      e = t.cclegacy, i = t._decorator, s = t.instantiate, o = t.UIOpacity, n = t.Tween, l = t.Vec3, h = t.tween, a = t.find, c = t.UITransform
    }, function(t) {
      r = t.ZGGSOfficeFx, p = t.gs_sound
    }],
    execute: function() {
      var d, g;
      e._RF.push({}, "f63c3Dg4r5Kg79BRi9uoilX", "WFeishu", void 0);
      const {
        ccclass: u,
        property: y
      } = i;
      t("WFeishu", u("WFeishu")(((g = class extends r {
        constructor(...t) {
          super(...t), this.m_effect = 2, this.m_delayopen = 0, this.m_list = [], this.m_list1 = [], this.m_time = 0
        }
        load() {
          for (var t = this.node.children, e = 0; e < t.length; e++) {
            var i = t[e];
            this.gsNodePositgps(i, 0, 0), this.m_list.push([]), this.m_list1.push([]);
            for (var o = i.children, n = 0; n < 2; n++) s(o[0]).parent = o[0].parent;
            o = i.children;
            for (var l = 0; l < o.length; l++) {
              var h = o[l];
              this.gsNodePositgps(h, 0, 0), h.active = !1
            }
          }
          this.unscheduleAllCallbacks(), this.schedule(function() {
            for (var t = 0; t < this.m_list.length; t++)
              if (this.m_list[t].length) return this["playView" + t](t);
            for (t = 0; t < this.m_list1.length; t++)
              if (this.m_list1[t].length) return this["play1View" + t](t)
          }.bind(this), .5)
        }
        add(t, e) {
          this.m_list[t].push(e)
        }
        add1(t, e) {
          this.m_list1[t].push(e)
        }
        delayAdd(t, e) {
          this.scheduleOnce(function() {
            this.m_list[t].push(e)
          }.bind(this), 1)
        }
        playView0(t) {
          for (let i = 0; i < this.node.children[t].children.length; i++) {
            let s = this.node.children[t].children[i];
            if ((!s.active || 0 == s.position.y) && this.m_list[t].length) {
              s.active = !0, s.getComponent("cc.Animation") && s.getComponent("cc.Animation").play();
              this.m_list[t].shift();
              var e = s.getComponent(o);
              e || (e = s.addComponent(o)), e.opacity = 255, n.stopAllByTarget(e), n.stopAllByTarget(s), s.position = new l(0, 0, 0), s.setScale(new l(.5, .5)), h(s).to(.02, {
                scale: new l(1.1, 1.1)
              }).to(.02, {
                scale: l.ONE
              }).delay(.2).to(1, {
                position: new l(0, 100, 0)
              }, {
                easing: "quadOut"
              }).call((() => {
                h(e).to(.3, {
                  opacity: 0
                }).call((() => {
                  s.active = !1
                })).start()
              })).start();
              break
            }
          }
        }
        playView1(t) {
          this.playView100(t, "node_up/spr_ls/tu3")
        }
        playView2(t) {
          this.playView100(t, "node_up/spr_xj/tu3")
        }
        playView3(t) {
          this.playView100(t, "node_up/spr_jk/tu3")
        }
        playView4(t) {
          this.playView100(t, "node_up/spr_ls/tu3")
        }
        play1View1(t) {
          this.playView101(t)
        }
        play1View2(t) {
          this.playView101(t)
        }
        play1View3(t) {
          this.playView101(t)
        }
        play1View4(t) {
          this.playView101(t)
        }
        playView100(t, e) {
          console.log("show2");
          let i = a("Canvas/ui/VHBgshi");
          if (i)
            for (let a = 0; a < this.node.children[t].children.length; a++) {
              let y = this.node.children[t].children[a];
              if (!y.active && this.m_list[t].length) {
                y.active = !0;
                new l(0, 0, 0);
                var s = this.m_list[t].shift();
                s.pos && this.node.getComponent(c).convertToNodeSpaceAR(s.pos);
                var h = y.children,
                  r = y.getComponent(o);
                if (!r) {
                  r = y.addComponent(o);
                  for (var d = 0; d < h.length; d++) h[d].pos = h[d].position.clone()
                }
                n.stopAllByTarget(r), r.opacity = 255;
                var g = s.wps || this.zgNodegzt(`${e}`, i).getWorldPosition(),
                  u = this.node.getComponent(c).convertToNodeSpaceAR(g);
                for (let t = 0; t < h.length; t++) h[t].position = h[t].pos.clone(), this.gsScheduleStnode(h[t], (() => {
                  var e = t % 2 ? 1 : -1,
                    i = {
                      x: u.x,
                      x1: 150 * e,
                      x2: -100 * e,
                      y: u.y
                    };
                  this.bezier(h[t], null, i)
                }), .05 * t, !0);
                this.gsScheduleStnode(y, function() {
                  y.active = !1
                }.bind(this), 1.5, !0), p.play("flygold");
                break
              }
            }
        }
        playView101(t, e) {
          for (let e = 0; e < this.node.children[t].children.length; e++) {
            let u = this.node.children[t].children[e];
            if (!u.active && this.m_list1[t].length) {
              u.active = !0;
              var i = new l(0, 0, 0),
                s = this.m_list1[t].shift();
              s.pos && (i = this.node.getComponent(c).convertToNodeSpaceAR(s.pos)), u.setPosition(i);
              var h = u.children,
                a = u.getComponent(o);
              if (!a) {
                a = u.addComponent(o);
                for (var r = 0; r < h.length; r++) h[r].pos = h[r].position.clone()
              }
              n.stopAllByTarget(a), a.opacity = 255;
              var d = s.wps,
                g = this.node.getComponent(c).convertToNodeSpaceAR(d);
              g.x -= i.x, g.y -= i.y, g.z -= i.z;
              for (let t = 0; t < h.length; t++) h[t].position = h[t].pos.clone(), this.gsScheduleStnode(h[t], (() => {
                var e = t % 2 ? 1 : -1,
                  i = {
                    x: g.x,
                    x1: 150 * e,
                    x2: -100 * e,
                    y: g.y
                  };
                this.bezier(h[t], null, i)
              }), .05 * t, !0);
              this.gsScheduleStnode(u, function() {
                u.active = !1, this.gsNodePositgps(u, 0, 0)
              }.bind(this), 1.5, !0), p.play("flygold");
              break
            }
          }
        }
        receive(t, e, i, s, o, n) {
          211 == t ? (console.log("show1"), this.add(e, i)) : 212 == t && this.add1(e, i)
        }
      }).m_name = "WFeishu", d = g)) || d);
      e._RF.pop()
    }
  }
}));