System.register("chunks:///_virtual/Wshangzhan.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSHttpsWww.ts", "./Wshangzhan1.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, n, i, o, h, a, g, d, c, r, f;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator, n = t.instantiate, i = t.v2
    }, function(t) {
      o = t.ZGGSOfficeFx, h = t.gs_boss, a = t.gs_bmsg, g = t.gs_tabpr, d = t.gs_btxt
    }, function(t) {
      c = t.gs_sql
    }, function(t) {
      r = t.Wshangzhan1
    }, function(t) {
      f = t.minFunc
    }],
    execute: function() {
      var l, z;
      s._RF.push({}, "6e4e5jft7NAd7SUaSZazl5X", "Wshangzhan", void 0);
      const {
        ccclass: b,
        property: I
      } = e;
      t("Wshangzhan", b("Wshangzhan")(((z = class t extends o {
        constructor(...t) {
          super(...t), this.bdog = null, this.firstId = [], this.info = [], this.pageIndex = 0, this.infoIndex = 0
        }
        pohuiPage() {
          h.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsButtongbs("guanbi", function() {
            a.send(2100, !1), this.pohuiPage()
          }.bind(this), this.bdog), this.gsButtongbs("YMSpriteSplash", function() {
            a.send(2100, !1), this.pohuiPage()
          }.bind(this)), this.checkFirst(), this.refreshPage()
        }
        checkFirst() {
          const t = g.co_war.zgTableKey(c.shangzhanInfo.curInfo.id);
          t && (this.pageIndex = t.type - 2)
        }
        refreshPage() {
          this.firstId = [];
          let t = Object.keys(g.co_war.objs),
            s = this.zgNodegzt("sw1/view/content", this.bdog),
            e = 0;
          for (let i = 0; i < t.length; i++) {
            let o = s.children[i];
            o || (o = n(s.children[0]), o.parent = s), this.firstId.push(g.co_war.objs[t[i]][0].id);
            let h = c.shangzhanInfo.lv >= e;
            o.active = h, this.zgNodegzt("kai", o).active = this.pageIndex == i, this.zgNodegzt("guan", o).active = this.pageIndex != i;
            const a = g.co_title.objs[t[i]];
            this.gsTxtGradelbl("YMLabel", a.grade, a.title, o), this.gsButtongbs(o, (t => {
              this.gsBtnArrStatests(t.target), this.pageIndex = i, this.infoIndex = 0, this.refreshPageInfo(), this.gsButtongbsx(this.zgNodegzt("sw2/view/content", this.bdog).children[0])
            })), e += g.co_war.objs[t[i]].length
          }
          this.zgScrollViewgsvt("sw1", this.bdog).scrollToOffset(i(196 * this.pageIndex, 0), .01)
        }
        init(t) {
          f.activityEnter(5), c.cache.shangzhanRed = !1, c.cache.shangzhanActRed = !1, a.send(2100, !0), this.refreshPageInfo()
        }
        refreshPageInfo(t) {
          t || (this.info = [...g.co_war.objs[this.pageIndex + 2]], this.info.sort(((t, s) => {
            let e = t.id < c.shangzhanInfo.curInfo.id ? 2 : 1,
              n = s.id < c.shangzhanInfo.curInfo.id ? 2 : 1;
            return e == n && 2 == e ? s.id - t.id : e - n
          })));
          let s = this.zgNodegzt("sw2/view/content", this.bdog);
          for (let t = 0; t < this.info.length; t++) {
            let e = s.children[t];
            e || (e = n(s.children[0]), e.parent = s);
            const i = this.info[t];
            let o = i.id <= c.shangzhanInfo.curInfo.id + 1;
            e.active = o, o && (this.gsTxtLblgs("YMLabel1", i.name1, e), this.zgNodegzt("kai", e).active = this.infoIndex == t, this.zgNodegzt("guan", e).active = this.infoIndex != t, this.zgNodegzt("win", e).active = c.shangzhanInfo.battleInfo[i.id], this.zgNodegzt("suo", e).active = i.id == c.shangzhanInfo.curInfo.id + 1, this.gsButtongbs(e, (s => {
              if (i.id != c.shangzhanInfo.curInfo.id + 1) this.gsBtnArrStatests(s.target), this.infoIndex = t, this.refreshShowInfo();
              else {
                const t = g.co_war.zgTableKey(c.shangzhanInfo.curInfo.id);
                a.send(202, d.gsStringByParam(107, t.name1))
              }
            })))
          }
          this.refreshShowInfo()
        }
        refreshShowInfo() {
          const t = this.info[this.infoIndex];
          let s = this.zgNodegzt("lbl_Info", this.bdog);
          this.gsTxtLblgs("node_Info1/YMLabel1", t.name2, s);
          const e = g.co_title.values[t.title_lv - 1];
          this.gsTxtLblgs("node_Info2/lay/YMLabel", e.star, s), this.gsTxtGradelbl("node_Info2/lay/YMLabel2", e.grade, e.title, s);
          let n = c.shangzhanInfo.battleInfo[t.id],
            i = !0;
          n || (i = !1, n = c.shangzhanInfo.curInfo.spr, t.id == c.shangzhanInfo.curInfo.id + 1 && (n = c.shangzhanInfo.curInfo.nextSpr));
          let o = n.split("-")[0].split("|");
          const h = g.co_war_member.objs[t.id];
          let r = this.zgNodegzt("sw1/view/content", s);
          for (let t = 0; t < h.length; t++) {
            let s = r.children[t];
            const e = h[t],
              n = g.co_pic.values[Number(o[t]) - 1];
            this.gsSprHtsst("icon", n.pic, s);
            const i = g.co_job.zgTableKey(e.job);
            i && (this.gsWorkTypePic2("node_2", i.grade, s), this.gsTxtGradelbl("node_2/YMLabel1", i.grade, i.name, s));
            const a = g.co_post.zgTableKey(e.post_id);
            if (a) {
              this.gsWorkTypePic1("node_1", a.grade, s), this.gsTxtGradelbl("node_1/YMLabel1", a.grade, a.name, s);
              let t = this.zgNodegzt("yuan", s);
              t && this.gsWorkTypePic3(t, `${a.grade}`)
            }
            const d = g.co_edu.zgTableKey(e.edu);
            d && this.gsTxtGradelbl("node_3/YMLabel1", d.grade, d.name, s)
          }
          if (this.zgNodegzt("node_Info4", s).active = !i, this.zgNodegzt("node_Info5", s).active = i, !i) {
            let e = this.zgNodegzt("node_Info4", s);
            this.gsNeedConfigs("node_Info2/lay", t.award, e), this.gsNeedConfigs("node_Info1/lay", [4, t.power], e);
            const n = g.co_check.zgTableKey(t.check_id);
            this.zgNodegzt("node_Info3", e).active = n, n && this.gsTxtLblgs("node_Info3/lay/YMLabel", n.name2, e), this.gsButtongbs("btn_1", (s => {
              if (t.id != c.shangzhanInfo.curInfo.id + 1) this.showEnd();
              else {
                const t = g.co_war.zgTableKey(c.shangzhanInfo.curInfo.id);
                a.send(202, d.gsStringByParam(107, t.name1))
              }
            }), e)
          }
        }
        showEnd() {
          h.bossWshow(r, {
            id: this.info[this.infoIndex].id,
            fun: t => {
              t ? console.log("战斗胜利") : console.log("战斗失败"), this.pohuiPage()
            },
            curNode: this.node
          })
        }
      }).m_name = "Wshangzhan", l = z)) || l);
      s._RF.pop()
    }
  }
}));