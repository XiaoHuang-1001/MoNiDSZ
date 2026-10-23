System.register("chunks:///_virtual/VHBgshiF.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSRedHdian.ts"], (function(t) {
  "use strict";
  var e, s, i, o, n, a, l, d, h, g, c, p, u, _, r, b, z;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t.Animation, i = t.instantiate, o = t.v3, n = t.tween, a = t.UIOpacity, l = t.Vec3, d = t.Tween, h = t._decorator
    }, function(t) {
      g = t.ZGGSOfficeFx, c = t.gs_tabpr, p = t.gs_computer, u = t.gs_sql, _ = t.gs_btxt, r = t.gs_sound, b = t.gs_bmsg
    }, function(t) {
      z = t.ZGGSRedHdian
    }],
    execute: function() {
      var m;
      e._RF.push({}, "c6630ZFsHFDlIrEz/l26jfV", "VHBgshiF", void 0);
      const {
        ccclass: y,
        property: N
      } = h;
      t("VHBgshiF", y("VHBgshiF")(m = class extends g {
        constructor(...t) {
          super(...t), this.node_up = null, this.node_down = null, this.node_zhong = null, this.node_chucai = null, this.node_shenzao = null, this.node_open = null, this.btnList = null, this.node_pmd = null, this.node_suo = null, this.iconNode = null, this.isOpenShow = !1, this.m_sv = null, this.m_ground = void 0, this.sf_sv = null, this.aniPJ = null, this.guangPj = null, this.lastShow = !1, this.moyustrNode = null, this.moyuQD = null, this.qipaoLab = null, this.qipaoItem = null, this.qiaoPaoArr = [], this.node_qipao = null, this.co_bubble_tt = null, this.co_bubble_des_ttt = null, this.tapBtn = null, this.isplay = !1, this.notices = [], this.isact = !1
        }
        loadTiankongUi() {
          this.node_up = this.zgNodegzt("node_up"), this.m_ground = this.zgNodegzt("sw/view/content/node_icon"), this.m_sv = this.zgScrollViewgsvt("sw"), this.node_down = this.zgNodegzt("node_down"), this.node_zhong = this.zgNodegzt("node_zhong"), this.node_chucai = this.zgNodegzt("node_chucai"), this.node_shenzao = this.zgNodegzt("node_shenzao"), this.node_open = this.zgNodegzt("node_open"), this.node_pmd = this.zgNodegzt("node_pmd", this.node_up), this.aniPJ = this.zgNodegzt("spr_tut", this.node_up).getComponent(s), this.guangPj = this.zgNodegzt("spr_tut/guang", this.node_up), this.node_suo = this.zgNodegzt("suo"), this.node_suo.active = !1, this.iconNode = this.zgNodegzt("iconNode"), this.iconNode.active = !1, this.moyustrNode = this.zgNodegzt("myTip"), this.moyuQD = this.zgNodegzt("qiaoDa"), this.qipaoLab = this.zgLableglt("timeLay/time6"), this.qipaoItem = this.zgNodegzt("qipao"), this.node_qipao = this.zgNodegzt("touch_node/node/node_icon/node_qipao"), this.co_bubble_tt = c.co_bubble.values, this.co_bubble_des_ttt = c.co_bubble_des.objs, this.tapBtn = this.zgNodegzt("spr_shalong", this.node_down)
        }
        shuaqian() {
          this.gsTxtLblgs("node_up/spr_xj/lbl_text", p.gsNumValueShow(u.base.diamond)), this.gsTxtLblgs("node_up/spr_ls/lbl_text", p.gsNumValueShow(u.base.gold)), this.gsTxtLblgs("node_up/spr_jk/lbl_text", p.gsNumValueShow(u.base.jinka)), this.gsTxtLblgs("node_up/spr_sl/lay/lbl_text1", p.gsNumValueShow(u.base.pingfen)), this.gsOpacityByNodegs2("node_up/spr_xj/lbl_text1"), this.gsOpacityByNodegs2("node_up/spr_ls/lbl_text1"), this.gsOpacityByNodegs2("node_up/spr_jk/lbl_text1"), this.gsOpacityByNodegs2("node_up/spr_sl/lbl_text4"), this.gsOpacityByNodegs2("node_up/spr_sl/lbl_text5")
        }
        caifudada(t) {
          let e = t.type;
          2 == e ? (this.gsTxtLblgs("node_up/spr_xj/lbl_text", p.gsNumValueShow(u.base.diamond)), this.gsNodeBigSmallgOnens("node_up/spr_xj/lbl_text", null, .3), t.count && (this.gsTxtLblgs("node_up/spr_xj/lbl_text1", `+${p.gsNumValueShow(t.count)}`), this.gsOpacityByNodegs("node_up/spr_xj/lbl_text1"))) : 1 == e ? (this.gsTxtLblgs("node_up/spr_ls/lbl_text", p.gsNumValueShow(u.base.gold)), this.gsNodeBigSmallgOnens("node_up/spr_ls/lbl_text", null, .3), t.count && (this.gsTxtLblgs("node_up/spr_ls/lbl_text1", `+${p.gsNumValueShow(t.count)}`), this.gsOpacityByNodegs("node_up/spr_ls/lbl_text1"))) : 3 == e ? (this.gsTxtLblgs("node_up/spr_jk/lbl_text", p.gsNumValueShow(u.base.jinka)), this.gsNodeBigSmallgOnens("node_up/spr_jk/lbl_text", null, .3), t.count && (this.gsTxtLblgs("node_up/spr_jk/lbl_text1", `+${p.gsNumValueShow(t.count)}`), this.gsOpacityByNodegs("node_up/spr_jk/lbl_text1"))) : 4 == e && (this.gsNodeBigSmallgOnens("node_up/spr_sl/lay/lbl_text1", null, .3), t.count > 0 ? (this.gsTxtLblgs("node_up/spr_sl/lbl_text4", `+${p.gsNumValueShow(t.count)}`), this.gsOpacityByNodegs("node_up/spr_sl/lbl_text4")) : (this.gsTxtLblgs("node_up/spr_sl/lbl_text5", `${p.gsNumValueShow(t.count)}`), this.gsOpacityByNodegs("node_up/spr_sl/lbl_text5")))
        }
        refreshDataInfo() {
          return !1
        }
        allRedListOne() {
          let t = z.zichanBlack() && !u.base.gmPack;
          this.zgNodegzt("Layout/spr_2/read", this.node_down).active = t;
          let e = z.shichangRed() && !u.base.gmPack;
          this.zgNodegzt("Layout/spr_3/read", this.node_down).active = e;
          let s = z.kaoheRed() && !u.base.gmPack;
          this.zgNodegzt("Layout/spr_4/read", this.node_down).active = s;
          let i = z.shebeiRed() && !u.base.gmPack;
          this.zgNodegzt("Layout/spr_1/read", this.node_down).active = i;
          let o = z.qiandaoRed() && !u.base.gmPack;
          this.zgNodegzt("Layout/spr_qiandao/read", this.node_up).active = o, z.pingjiaRed() && !u.base.gmPack ? this.isplay || (this.zgNodegzt("spr_tut/Mask/gsk16", this.node_up).active = !0, this.zgNodegzt("spr_tut/x1", this.node_up).active = !0, this.isplay = !0, this.aniPJ.play()) : (this.isplay = !1, this.aniPJ.stop(), this.zgNodegzt("spr_tut/Mask/gsk16", this.node_up).active = !1, this.zgNodegzt("spr_tut/x1", this.node_up).active = !1);
          let n = z.chucaiInfo() && !u.base.gmPack;
          this.zgNodegzt("spr_dm/read", this.node_down).active = n;
          let a = z.chengjiuInfo() && !u.base.gmPack;
          this.zgNodegzt("Layout/spr_chengjiu/read", this.node_up).active = a;
          let l = z.shenzaoRed0() && !u.base.gmPack;
          this.zgNodegzt("spr_shenzao/read", this.node_down).active = l;
          let d = z.shangzInfo() && !u.base.gmPack;
          this.zgNodegzt("Layout/spr_6/read", this.node_down).active = d;
          let h = z.chogndianRed0() && !u.base.gmPack;
          this.zgNodegzt("spr_cd/read", this.node_down).active = h;
          let g = z.jingshengInfo() && !u.base.gmPack;
          this.zgNodegzt("spr_jingsheng/read", this.node_down).active = g;
          let c = z.fuliUpRed0() && !u.base.gmPack;
          this.zgNodegzt("spr_gsfuli/read", this.node_down).active = c;
          let p = z.chuangyeRed0() && !u.base.gmPack;
          this.zgNodegzt("spr_touzhi/read", this.node_down).active = p;
          let _ = (z.youRedPoint(2) || z.youRedPoint(1)) && !u.base.gmPack;
          this.zgNodegzt("Layout/spr_xin/read", this.node_up).active = _
        }
        addnotices(t) {
          if (t && this.notices.push(t), !this.isact && this.notices.length > 0) {
            let t = this.notices.shift();
            this.bofangnotices(t)
          }
        }
        bofangnotices(t) {
          if (this.isact) return;
          this.isact = !0, t = _.gsStringByParam(1, t), this.gsRichLbltxtgrs("lbl_pmd/mask/lbl_pmd", t, this.node_pmd);
          let e = this.zgNodegzt("lbl_pmd/mask/lbl_pmd", this.node_pmd),
            s = e.getContentSize().width + 100;
          s <= 650 && (s = 650), e.setPosition(s, 0, 0);
          let i = s;
          this.node_pmd.active = !0;
          this.gsScheduleStnode(this.node_pmd, (() => {
            i >= -s - 5 ? (i -= 5, e.setPosition(i, -0, 0)) : (this.gsStopSchedulegs(this.node_pmd), this.node_pmd.active = !1, this.isact = !1, this.addnotices())
          }), 0)
        }
        getQiaoPao(t = null) {
          let e = this.qiaoPaoArr.shift();
          if (e || (e = i(this.qipaoItem), e.parent = this.node_qipao, e.posY = 152), e.active = !0, t) {
            t.qipao = e;
            let s = t.getPosition();
            e.setPosition(o(s.x, s.y + e.posY, 0)), t.qipao = e, e.curNode = e
          }
          return e
        }
        removeQiaoPao(t) {
          t.active = !1, this.qiaoPaoArr.push(t), t.curNode && (t.curNode.qipao = null, t.curNode = null)
        }
        checkGsOpenShow(t = null) {
          const e = c.co_open.objs[2];
          for (const t of e)
            if (!p.getNewOpen(t.id)) {
              let e = this.btnList.find((function(e) {
                return e.openId == t.id
              }));
              if (!e) continue;
              this.zgNodegzt(e.name, e.path).active = !0;
              break
            }
        }
        showOpenIconxx(t) {
          u.cache.isXgn = !0;
          let e = () => {
            u.cache.isXgn = !1, b.send(2300)
          };
          if (!t || t <= 0) return void e();
          console.log("新功能开放id");
          const o = c.co_open.zgTableKey(t);
          let h = this.btnList.find((function(e) {
            return e.openId == t
          }));
          if (!h) return void e();
          let g = this.zgNodegzt(h.name, h.path);
          if (g && o) {
            if (1 == o.type) {
              let t = this.zgNodegzt("suo", g);
              if (t) {
                let i = this.zgNodegzt("suo", t).getComponent(s);
                i ? (u.cache.isXgn = !0, u.base.stopGame = !0, i.play(), i.once(s.EventType.FINISHED, (() => {
                  t.active = !1, e()
                }))) : n(t).call((() => {
                  t.active = !1
                })).delay(.1).call((() => {
                  e()
                })).start()
              }
            } else if (2 == o.type) {
              let t = i(this.node_suo),
                h = i(this.iconNode),
                c = t.getComponent(s),
                p = i(g);
              if (p.active = !1, p.parent = this.node_open, c) {
                h.active = !0, t.active = !0, h.parent = this.node_open, t.parent = this.node_open, this.gsSprstHtByUIs("spr_icon", o.pic, h);
                let i = g.getComponent(a);
                i && (g.active = !0, i.opacity = 0), c.play(), c.once(s.EventType.FINISHED, (() => {
                  t.removeFromParent();
                  let s = new l(0, 0, 0),
                    i = this.gsWorldposgws(g),
                    o = new l(0, i.y, 0);
                  h.position = s, n(h).delay(Math.random() / 4).parallel((new d).to(.5, i, {
                    onUpdate: (t, e) => {
                      h.position = this.twoBezierxx(e, s, o, i)
                    }
                  }), (new d).by(.5, {
                    scale: new l(-.8, -.8, 0)
                  })).call((() => {
                    h.removeFromParent(), p.active = !0, p.setScale(new l(.2, .2, 0)), p.setPosition(i), n(p).to(.2, {
                      scale: new l(1.2, 1.2, 0)
                    }).to(.2, {
                      scale: new l(1, 1, 0)
                    }).call((() => {
                      p.removeFromParent(), this.zgNodegzt("suo", g).active = !1;
                      let t = g.getComponent(a);
                      t ? t.opacity = 255 : g.active = !0, this.checkGsOpenShow(), e()
                    })).start()
                  })).start()
                }))
              }
            }
          } else e()
        }
        changeComName() {
          this.gsTxtLblgs("spr_gs/lbl_text", u.base.name, this.node_up)
        }
        palyShowChucaiAni(t) {
          let e = this.btnList.find((function(t) {
              return 100004 == t.openId
            })),
            s = this.zgNodegzt(e.name, e.path);
          if (s) {
            let e = this.gsWorldposgws(s),
              i = o(0, 0, 0),
              a = (new l(e.x, i.y, 0), this.node_chucai.children[0]);
            a.active = !0, a.setPosition(o(530, 0, 0)), a.setScale(o(1, 1, 0)), r.play("feiji"), n(a).to(.5, {
              position: i
            }).call((() => {
              r.playOne("yuanGo");
              for (let e = 1; e < 4; e++) {
                let s = this.node_chucai.children[e];
                const i = u.findObjById("workInfo1", t[e - 1]);
                this.gsSprHtsst(s, i.sprId), s.setPosition(o(-30, 115, 0)), s.setScale(o(.7, .7, 0)), n(s).delay(.5 * (e - 1)).call((() => {
                  s.active = !0
                })).to(.5, {
                  position: o(-30, 15, 0),
                  scale: o(.3, .3, 0)
                }).call((() => {
                  s.active = !1
                })).start()
              }
            })).delay(1.5).to(1, {
              position: e,
              scale: o(.2, .2, 0)
            }).call((() => {
              a.active = !1, b.send(2300)
            })).start()
          } else console.error("出差按钮不存在"), b.send(2300)
        }
        palyShowSzAni(t) {
          let e = this.btnList.find((function(t) {
              return 100007 == t.openId
            })),
            s = this.zgNodegzt(e.name, e.path);
          if (s) {
            let e = this.gsWorldposgws(s),
              i = o(0, 0, 0),
              a = (new l(e.x, i.y, 0), this.node_shenzao.children[0]);
            a.active = !0, a.setPosition(o(530, 0, 0)), a.setScale(o(1, 1, 0)), r.play("keche"), n(a).to(.5, {
              position: i
            }).call((() => {
              r.playOne("yuanGo");
              for (let e = 1; e < 4; e++) {
                let s = this.node_shenzao.children[e];
                const i = u.findObjById("workInfo1", t[e - 1]);
                this.gsSprHtsst(s, i.sprId), s.setPosition(o(-30, 115, 0)), s.setScale(o(.7, .7, 0)), n(s).delay(.5 * (e - 1)).call((() => {
                  s.active = !0
                })).to(.5, {
                  position: o(-30, 15, 0),
                  scale: o(.3, .3, 0)
                }).call((() => {
                  s.active = !1
                })).start()
              }
            })).delay(1.5).by(.5, {
              position: o(-530, 0, 0)
            }).call((() => {
              let t = s.getWorldPosition(),
                i = new l(t.x - 250, t.y, t.z),
                d = new l(e.x - 25, e.y, e.z);
              a.setWorldPosition(i), a.setScale(o(-.5, .5, 0)), n(a).to(.5, {
                position: d
              }).delay(.15).to(.2, {
                scale: o(-.6, .6, 0)
              }).to(.2, {
                scale: o(-.5, .5, 0)
              }).call((() => {
                a.active = !1, b.send(2300)
              })).start()
            })).start()
          } else console.error("深造按钮不存在"), b.send(2300)
        }
        initEmail() {
          let t = p.getDanjiInfo(),
            e = u.yjIds,
            s = p.zgTimeByTxt(Date.now());
          for (let i = 0; i < t.gonggao.length; i++) {
            let o = c.co_gonggao.zgTableKey(t.gonggao[i]);
            if (console.log(!e.objs[o.id], e.objs[o.id]), !e.objs[o.id]) {
              let t = !1;
              if (0 == o.timeStart && 0 == o.timeEnd ? t = !0 : o.timeStart && o.timeEnd ? s >= o.timeStart && s <= o.timeEnd && (t = !0) : o.timeStart && 0 == o.timeEnd && s >= o.timeStart && (t = !0), t) {
                e.objs[o.id] = 1;
                let t = {
                  content: o.content,
                  create_time: (new Date).valueOf(),
                  enclosure: null,
                  game_from: 99,
                  id: "1",
                  order_id: null,
                  state: 1,
                  title: o.title,
                  uid: u.config.uid
                };
                u.youjian.arr2.push(t);
                o.content, (new Date).valueOf(), o.title, u.config.uid, o.content, (new Date).valueOf(), o.title, u.config.uid, o.content, (new Date).valueOf(), o.title, u.config.uid
              }
            }
          }
        }
        wakeOpen() {
          let t = u.chahuahui,
            e = !1;
          if (1 == t.state) {
            let s = Date.now();
            0 == t.count ? e = !0 : 1 == t.count ? s > t.time && (e = !0) : (2 == t.count || 3 == t.count) && (t.time || (e = !0))
          }
          this.tapBtn.active = e
        }
      }) || m);
      e._RF.pop()
    }
  }
}));