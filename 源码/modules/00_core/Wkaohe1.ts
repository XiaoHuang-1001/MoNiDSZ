System.register("chunks:///_virtual/Wkaohe1.ts", ["cc", "./ZGGSOfficeFx.ts", "./CurListView.ts"], (function(t) {
  "use strict";
  var s, o, i, e, h, n, g, l, a, r;
  return {
    setters: [function(t) {
      s = t.cclegacy, o = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, e = t.gs_boss, h = t.gs_btxt, n = t.gs_sql, g = t.gs_phone, l = t.gs_tabpr, a = t.gs_computer
    }, function(t) {
      r = t.CurListView
    }],
    execute: function() {
      var p, d;
      s._RF.push({}, "e9839WzfPRM9qqIGSZkgg2M", "Wkaohe1", void 0);
      const {
        ccclass: c,
        property: u
      } = o;
      t("Wkaohe1", c("Wkaohe1")(((d = class t extends i {
        constructor(...t) {
          super(...t), this.top = null, this.content = null, this.svCtl1 = null, this._kv = null, this.pageIdx = 1, this.pageMax = 1, this.swCom = null, this.pageCount = 8, this.allRen = [], this.workInfo1_id = null
        }
        pohuiPage() {
          e.bossDieWin(t, 2)
        }
        load() {
          this.gsButtongbs("YMSpriteSplash", (() => {
            this.pohuiPage()
          })), this.top = this.zgNodegzt("top"), this.content = this.zgNodegzt("sw1/view/content", this.top), this.svCtl1 = this.zgNodegzt("sw1", this.top).getComponent(r), this.swCom = this.zgScrollViewgsvt("sw1", this.top), this.gsButtongbs("guanbi", function() {
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
            let o = t[s];
            o && (this.gsTxtLblgs("YMLabel1", h.gsStringSortInfo(100, s + 1), o), this.gsButtongbs(o, (() => {
              this.pageIdx = 1, this.sortShow(s + 1)
            })))
          }
        }
        init(t) {
          this.showInfo(t)
        }
        showInfo(t) {
          console.log(t, "sdfsdf"), this._kv = t;
          let s = t.co_check_t;
          t.kaoheInfo_S;
          this.workInfo1_id = t.workInfo1_id;
          let o = t.xuhao;
          this.allRen = [];
          let i = n.workInfo1.objs,
            e = null;
          for (let t in i) {
            let h = i[t],
              n = g.returnOneAttr(h.id),
              l = {
                id: h.id,
                co_check_t: s,
                workInfo1_s: h,
                workAttr: n,
                xuhao: o
              };
            h.id == this.workInfo1_id ? e = l : h.kaohePos || this.allRen.push(l)
          }
          let l = n.sortType.kaoheSort;
          this.gsTxtLblgs("btn_2/YMLabel1", h.gsStringSortInfo(100, l), this.top), this.allRen.sort(((t, s) => 1 == l ? s.workAttr.allNum - t.workAttr.allNum : 2 == l ? s.workInfo1_s.jobId - t.workInfo1_s.jobId : 3 == l ? s.workAttr.pot - t.workAttr.pot : s.workAttr.amb - t.workAttr.amb)), e && this.allRen.splice(0, 0, e);
          let a = this.allRen.length % this.pageCount,
            r = Math.floor(this.allRen.length / this.pageCount);
          this.pageMax = 0 == a ? r : 1 + r, this.bindPage(), this.zgNodegzt("node_3", this.top).active = this.pageMax > 1
        }
        bindPage() {
          console.log(this.allRen), this.gsTxtLblgs("node_3/YMLabel1", this.pageIdx + "/" + this.pageMax, this.top);
          let t = this.allRen.slice((this.pageIdx - 1) * this.pageCount, this.pageIdx * this.pageCount);
          console.log("新页面的数据", t, (this.pageIdx - 1) * this.pageCount, this.pageCount), this.svCtl1.init(t, function(t, s, o) {
            this.bindRen(t, s, o, this.workInfo1_id)
          }.bind(this))
        }
        bindRen(t, s, o, i) {
          let e = s.workInfo1_s;
          this.gsWorkPic(t, e), this.zgNodegzt("btn_yes", t).active = e.id != this._kv.workInfo1_id, this.zgNodegzt("btn_no", t).active = e.id == this._kv.workInfo1_id;
          const h = l.co_edu.zgTableKey(e.edu);
          this.gsTxtGradelbl("lbl_info2/YMLabel1", h.grade, h.name, t);
          let r = g.returnOneAttr(e.id);
          this.gsTxtLblgs("lbl_info3/YMLabel2", a.gsNumValueShow(r.pot), t), this.gsTxtLblgs("lbl_info4/YMLabel2", a.gsNumValueShow(r.amb), t), this.gsTxtStrbyNums("lbl_info5/YMLabel2", 102, r.earn, t);
          let p = s.co_check_t;
          this.gsButtongbs("btn_yes", (t => {
            if (i) {
              n.findObjById("workInfo1", i).kaohePos = 0
            }
            e.kaohePos = p.id, console.log(e.name, "--------------"), this._kv._func(e.id), this.pohuiPage()
          }), t), this.gsButtongbs("btn_no", (t => {
            if (i) {
              n.findObjById("workInfo1", i).kaohePos = 0
            }
            console.log(e.name, "--------------"), this._kv._func(0), this.pohuiPage()
          }), t)
        }
        sortShow(t) {
          if (t && t > 0) {
            n.sortType.kaoheSort = t;
            let s = n.sortType.kaoheSort;
            this.gsTxtLblgs("btn_2/YMLabel1", h.gsStringSortInfo(100, s), this.top), this.showInfo(this._kv), this.sortShow(0)
          } else {
            let t = this.zgNodegzt("node_2", this.top).active;
            this.zgNodegzt("node_2", this.top).active = !t, this.zgNodegzt("close", this.top).active = !t
          }
        }
      }).m_name = "Wkaohe1", p = d)) || p);
      s._RF.pop()
    }
  }
}));