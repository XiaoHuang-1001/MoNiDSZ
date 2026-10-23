System.register("chunks:///_virtual/Wshangzhan2.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSPaipxxu.ts", "./CurListView.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, i, o, h, e, n, g, l, a, d, u, r;
  return {
    setters: [function(t) {
      s = t.cclegacy, i = t._decorator
    }, function(t) {
      o = t.ZGGSOfficeFx, h = t.gs_boss, e = t.gs_btxt, n = t.gs_computer, g = t.gs_sql, l = t.gs_phone, a = t.gs_tabpr
    }, function(t) {
      d = t.ZGGSPaipxxu
    }, function(t) {
      u = t.CurListView
    }, function(t) {
      r = t.minFunc
    }],
    execute: function() {
      var b, c;
      s._RF.push({}, "7e9b4lsf8BFU45brmsix/87", "Wshangzhan2", void 0);
      const {
        ccclass: p,
        property: f
      } = i;
      t("Wshangzhan2", p("Wshangzhan2")(((c = class t extends o {
        constructor(...t) {
          super(...t), this.bdog = null, this.fun = null, this.svCtl = null, this.swCom = null, this.selId = null, this.allInfo = [], this.showInfo = null, this.selCurList = {}, this.type = null, this.pageIdx = 1, this.pageMax = 1
        }
        pohuiPage() {
          h.bossDieWin(t, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.bdog), this.gsButtongbs("YMSpriteSplash", function() {
            this.pohuiPage()
          }.bind(this)), this.svCtl = this.zgNodegzt("sw1", this.bdog).getComponent(u), this.swCom = this.zgScrollViewgsvt("sw1", this.bdog), this.gsButtongbs("close", (() => {
            this.sortShow(0)
          }), this.bdog), this.gsButtongbs("btn_up", (() => {
            this.sortShow(0)
          }), this.bdog), this.gsButtongbs("node_3/zuo", (() => {
            this.swCom.stopAutoScroll(), this.swCom.scrollToTop(), this.pageIdx <= 1 || (this.pageIdx -= 1), this.show()
          }), this.bdog), this.gsButtongbs("node_3/you", (() => {
            this.swCom.stopAutoScroll(), this.swCom.scrollToTop(), this.pageIdx >= this.pageMax || (this.pageIdx += 1), this.show()
          }), this.bdog), this.zgNodegzt("node_2", this.bdog).active = !1, this.zgNodegzt("close", this.bdog).active = !1;
          let t = this.zgNodegzt("node_2", this.bdog).children;
          for (let s = 0; s < t.length; s++) {
            let i = t[s];
            i && (this.gsTxtLblgs("YMLabel1", e.gsStringSortInfo(100, s + 1), i), this.gsButtongbs(i, (() => {
              this.pageIdx = 1, this.sortShow(s + 1)
            })))
          }
        }
        init(t) {
          r.activityEnter(5), this.fun = t.fun, this.selId = t.id, this.allInfo = n.getWorkArrInfo(t.roleList || []), this.sortList()
        }
        initData() {
          this.pageMax = 1, this.selCurList = {}, this.showInfo = [...this.allInfo];
          let t = g.sortType.shangzhanSort;
          this.showInfo.sort(d.fightSort(t)), this.selId && this.selId > 0 && this.showInfo.unshift(this.selId);
          let s = 0;
          for (let t = 0; t < this.showInfo.length; t++) s >= 8 ? (this.pageMax++, s = 1) : s++, this.selCurList[this.pageMax] = this.selCurList[this.pageMax] || [], this.selCurList[this.pageMax].push(this.showInfo[t]);
          this.zgNodegzt("node_3", this.bdog).active = this.pageMax > 1, this.swCom.stopAutoScroll(), this.swCom.scrollToTop()
        }
        bindInfo(t, s, i) {
          const o = g.findObjById("workInfo1", s),
            h = l.returnOneAttr(o.id);
          this.gsWorkPic(t, o);
          const e = a.co_edu.zgTableKey(o.edu);
          e && this.gsTxtGradelbl("lbl_info2/YMLabel1", e.grade, e.name, t), this.gsTxtLblgs("lbl_info3/YMLabel2", n.gsNumValueShow(h.pot), t), this.gsTxtLblgs("lbl_info4/YMLabel2", n.gsNumValueShow(h.amb), t), this.gsTxtLblgs("lbl_info5/YMLabel2", n.gsNumValueShow(h.allNum), t), this.zgNodegzt("btn_yes", t).active = this.selId != s, this.zgNodegzt("btn_no", t).active = this.selId == s, this.gsButtongbs("btn_no", function() {
            this.selId = 0, this.endE()
          }.bind(this), t), this.gsButtongbs("btn_yes", function() {
            this.selId = s, this.endE()
          }.bind(this), t)
        }
        sortList() {
          this.initData(), this.show()
        }
        show() {
          this.gsTxtLblgs("node_3/YMLabel1", this.pageIdx + "/" + this.pageMax, this.bdog);
          let t = g.sortType.shangzhanSort;
          this.gsTxtLblgs("btn_up/YMLabel1", e.gsStringSortInfo(100, t), this.bdog), this.svCtl.init(this.selCurList[this.pageIdx], function(t, s, i) {
            this.bindInfo(t, s, i)
          }.bind(this))
        }
        sortShow(t) {
          if (t && t > 0) {
            g.sortType.shangzhanSort = t;
            let s = g.sortType.shangzhanSort;
            this.gsTxtLblgs("btn_up/YMLabel1", e.gsStringSortInfo(100, s), this.bdog), this.sortList(), this.sortShow(0)
          } else {
            let t = this.zgNodegzt("node_2", this.bdog).active;
            this.zgNodegzt("node_2", this.bdog).active = !t, this.zgNodegzt("close", this.bdog).active = !t
          }
        }
        endE() {
          this.selId >= 0 && this.fun && this.fun(this.selId), this.pohuiPage()
        }
      }).m_name = "Wshangzhan2", b = c)) || b);
      s._RF.pop()
    }
  }
}));