System.register("chunks:///_virtual/WShenzao3.ts", ["cc", "./ZGGSOfficeFx.ts", "./CurListView.ts"], (function(t) {
  "use strict";
  var s, o, i, e, h, n, g, l, a, r;
  return {
    setters: [function(t) {
      s = t.cclegacy, o = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, e = t.gs_boss, h = t.gs_btxt, n = t.gs_phone, g = t.gs_sql, l = t.gs_tabpr, a = t.gs_computer
    }, function(t) {
      r = t.CurListView
    }],
    execute: function() {
      var p, d;
      s._RF.push({}, "14fa2kb5BFKQYTj+3npxbCU", "WShenzao3", void 0);
      const {
        ccclass: u,
        property: b
      } = o;
      t("WShenzao3", u("WShenzao3")(((d = class t extends i {
        constructor(...t) {
          super(...t), this.top = null, this.content = null, this.svCtl1 = null, this._kv = null, this.swCom = null, this.pageIdx = 1, this.pageMax = 1, this.pageCount = 8, this.allRen = [], this.workInfo1_id = null
        }
        pohuiPage() {
          e.bossDieWin(t, 2)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.content = this.zgNodegzt("sw1/view/content", this.top), this.svCtl1 = this.zgNodegzt("sw1", this.top).getComponent(r), this.swCom = this.zgScrollViewgsvt("sw1", this.top), this.gsButtongbs("YMSpriteSplash", (() => {
            this.pohuiPage()
          })), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.top), this.gsButtongbs("close", (() => {
            this.sortShow(0)
          }), this.top), this.gsButtongbs("btn_up", (() => {
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
          let s = t.can,
            o = t.chooseObj,
            i = t.xuhao;
          this.workInfo1_id = t.workInfo1_id, this.allRen = [];
          let e = null;
          for (let h in s) {
            let g = s[h],
              l = n.returnOneAttr(g.id),
              a = {
                id: g.id,
                workInfo1_s: g,
                xuhao: i,
                workAttr: l
              };
            g.id == t.workInfo1_id ? e = a : o[g.id] || this.allRen.push(a)
          }
          let l = g.sortType.shenzao;
          this.gsTxtLblgs("btn_up/YMLabel1", h.gsStringSortInfo(100, l), this.top), this.allRen.sort(((t, s) => 1 == l ? s.workAttr.allNum - t.workAttr.allNum : 2 == l ? s.workInfo1_s.jobId - t.workInfo1_s.jobId : 3 == l ? s.workAttr.pot - t.workAttr.pot : s.workAttr.amb - t.workAttr.amb)), e && this.allRen.splice(0, 0, e);
          let a = this.allRen.length % this.pageCount,
            r = Math.floor(this.allRen.length / this.pageCount);
          this.pageMax = 0 == a ? r : 1 + r, this.bindPage(), this.zgNodegzt("node_3", this.top).active = this.pageMax > 1
        }
        bindPage() {
          this.gsTxtLblgs("node_3/YMLabel1", this.pageIdx + "/" + this.pageMax, this.top);
          let t = this.allRen.slice((this.pageIdx - 1) * this.pageCount, this.pageIdx * this.pageCount);
          this.svCtl1.init(t, function(t, s, o) {
            this.bindRen(t, s, o, this.workInfo1_id)
          }.bind(this))
        }
        bindRen(t, s) {
          let o = g.findObjById("workInfo1", s.id);
          this.gsWorkPic(t, o), this.zgNodegzt("btn_yes", t).active = o.id != this._kv.workInfo1_id, this.zgNodegzt("btn_no", t).active = o.id == this._kv.workInfo1_id;
          const i = l.co_edu.zgTableKey(o.edu);
          this.gsTxtGradelbl("lbl_info2/YMLabel1", i.grade, i.name, t);
          let e = n.returnOneAttr(o.id);
          this.gsTxtLblgs("lbl_info3/YMLabel2", a.gsNumValueShow(e.pot), t), this.gsTxtLblgs("lbl_info4/YMLabel2", a.gsNumValueShow(e.amb), t), this.gsTxtStrbyNums("lbl_info5/YMLabel2", 4, e.allNum, t), this.gsButtongbs("btn_yes", (t => {
            this._kv._func(o.id), this.pohuiPage()
          }), t), this.gsButtongbs("btn_no", (t => {
            this._kv._func(0), this.pohuiPage()
          }), t)
        }
        sortShow(t) {
          if (t && t > 0) {
            g.sortType.shenzao = t;
            let s = g.sortType.shenzao;
            this.gsTxtLblgs("btn_up/YMLabel1", h.gsStringSortInfo(100, s), this.top), this.showInfo(this._kv), this.sortShow(0)
          } else {
            let t = this.zgNodegzt("node_2", this.top).active;
            this.zgNodegzt("node_2", this.top).active = !t, this.zgNodegzt("close", this.top).active = !t
          }
        }
      }).m_name = "WShenzao3", p = d)) || p);
      s._RF.pop()
    }
  }
}));