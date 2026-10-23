System.register("chunks:///_virtual/Wshichang1.ts", ["cc", "./ZGGSOfficeFx.ts", "./CurListView.ts"], (function(t) {
  "use strict";
  var s, i, o, h, e, n, g, l, a, r;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator
    }, function(t) {
      o = t.ZGGSOfficeFx, h = t.gs_boss, e = t.gs_btxt, n = t.gs_sql, g = t.gs_phone, l = t.gs_tabpr, a = t.gs_computer
    }, function(t) {
      r = t.CurListView
    }],
    execute: function() {
      var d, c;
      s._RF.push({}, "f097dlItAtFAL5Oq9eg4Hei", "Wshichang1", void 0);
      const {
        ccclass: p,
        property: u
      } = i;
      t("Wshichang1", p("Wshichang1")(((c = class t extends o {
        constructor(...t) {
          super(...t), this.top = null, this.content = null, this.svCtl1 = null, this._kv = null, this.swCom = null, this.pageIdx = 1, this.pageMax = 1, this.pageCount = 8, this.allRen = [], this.workInfo1_id = null
        }
        pohuiPage() {
          h.bossDieWin(t, 2)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.content = this.zgNodegzt("sw1/view/content", this.top), this.svCtl1 = this.zgNodegzt("sw1", this.top).getComponent(r), this.swCom = this.zgScrollViewgsvt("sw1", this.top), this.gsButtongbs("YMSpriteSplash", (() => {
            this.pohuiPage()
          })), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.top), this.gsButtongbs("close", (() => {
            this.sortShow(0)
          }), this.top), this.gsButtongbs("btn_2", (() => {
            this.sortShow(0)
          }), this.top), this.gsButtongbs("node_3/zuo", (() => {
            this.swCom.stopAutoScroll(), this.swCom.scrollToTop(), this.pageIdx <= 1 || (this.pageIdx -= 1, this.bindPage())
          }), this.top), this.gsButtongbs("node_3/you", (() => {
            this.swCom.stopAutoScroll(), this.swCom.scrollToTop(), this.pageIdx >= this.pageMax || (this.pageIdx += 1, this.bindPage())
          }), this.top), this.zgNodegzt("node_2", this.top).active = !1, this.zgNodegzt("close", this.top).active = !1;
          let t = this.zgNodegzt("node_2", this.top).children;
          for (let s = 0; s < t.length; s++) {
            let i = t[s];
            i && (this.gsTxtLblgs("YMLabel1", e.gsStringSortInfo(100, s + 1), i), this.gsButtongbs(i, (() => {
              this.pageIdx = 1, this.sortShow(s + 1)
            })))
          }
        }
        init(t) {
          this.showInfo(t)
        }
        showInfo(t) {
          console.log(t, "sdfsdf"), this._kv = t;
          let s = t.co_market;
          t.shichangInfo_s;
          this.workInfo1_id = t.workInfo1_id;
          let i = t.xuhao;
          this.allRen = [];
          let o = n.workInfo1.objs,
            h = null;
          for (let e in o) {
            let n = o[e],
              l = g.returnOneAttr(n.id),
              a = {
                id: n.id,
                co_market: s,
                workInfo1_s: n,
                xuhao: i,
                workAttr: l
              };
            n.id == t.workInfo1_id ? h = a : n.shichangPos[0] || this.allRen.push(a)
          }
          let l = n.sortType.shichangSort;
          this.gsTxtLblgs("btn_2/YMLabel1", e.gsStringSortInfo(100, l), this.top), this.allRen.sort(((t, s) => 1 == l ? s.workAttr.allNum - t.workAttr.allNum : 2 == l ? s.workInfo1_s.jobId - t.workInfo1_s.jobId : 3 == l ? s.workAttr.pot - t.workAttr.pot : s.workAttr.amb - t.workAttr.amb)), h && this.allRen.splice(0, 0, h);
          let a = this.allRen.length % this.pageCount,
            r = Math.floor(this.allRen.length / this.pageCount);
          this.pageMax = 0 == a ? r : 1 + r, this.bindPage(), this.zgNodegzt("node_3", this.top).active = this.pageMax > 1
        }
        bindPage() {
          this.gsTxtLblgs("node_3/YMLabel1", this.pageIdx + "/" + this.pageMax, this.top);
          let t = this.allRen.slice((this.pageIdx - 1) * this.pageCount, this.pageIdx * this.pageCount);
          this.svCtl1.init(t, function(t, s, i) {
            this.bindRen(t, s, i, this.workInfo1_id)
          }.bind(this))
        }
        bindRen(t, s, i, o) {
          let h = n.findObjById("workInfo1", s.id);
          this.gsWorkPic(t, h), this.zgNodegzt("btn_yes", t).active = h.id != this._kv.workInfo1_id, this.zgNodegzt("btn_no", t).active = h.id == this._kv.workInfo1_id;
          const e = l.co_edu.zgTableKey(h.edu);
          this.gsTxtGradelbl("lbl_info2/YMLabel1", e.grade, e.name, t);
          let r = g.returnOneAttr(h.id);
          this.gsTxtLblgs("lbl_info3/YMLabel2", a.gsNumValueShow(r.pot), t), this.gsTxtLblgs("lbl_info4/YMLabel2", a.gsNumValueShow(r.amb), t), this.gsTxtStrbyNums("lbl_info5/YMLabel2", 102, r.earn, t);
          let d = s.co_market;
          this.gsButtongbs("btn_yes", (t => {
            if (o) {
              n.findObjById("workInfo1", o).shichangPos[0] = 0
            }
            h.shichangPos[0] = d.id, console.log(h.name, "--------------"), this._kv._func(h.id), this.pohuiPage()
          }), t), this.gsButtongbs("btn_no", (t => {
            if (o) {
              n.findObjById("workInfo1", o).shichangPos[0] = 0
            }
            this._kv._func(0), this.pohuiPage()
          }), t)
        }
        sortShow(t) {
          if (t && t > 0) {
            n.sortType.shichangSort = t;
            let s = n.sortType.shichangSort;
            this.gsTxtLblgs("btn_2/YMLabel1", e.gsStringSortInfo(100, s), this.top), this.showInfo(this._kv), this.sortShow(0)
          } else {
            let t = this.zgNodegzt("node_2", this.top).active;
            this.zgNodegzt("node_2", this.top).active = !t, this.zgNodegzt("close", this.top).active = !t
          }
        }
      }).m_name = "Wshichang1", d = c)) || d);
      s._RF.pop()
    }
  }
}));