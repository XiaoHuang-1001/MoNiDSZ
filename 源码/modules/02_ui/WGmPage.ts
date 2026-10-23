System.register("chunks:///_virtual/WGmPage.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(e) {
  "use strict";
  var t, n, s, a, o, i, g, r, l;
  return {
    setters: [function(e) {
      t = e.cclegacy, n = e._decorator
    }, function(e) {
      s = e.ZGGSOfficeFx, a = e.gs_boss, o = e.gs_computer, i = e.gs_bmsg, g = e.gs_sql, r = e.gs_tabpr, l = e.gs_phone
    }],
    execute: function() {
      var b, _;
      t._RF.push({}, "e4e5ca7PqhMLKuDtqjkgFa/", "WGmPage", void 0);
      const {
        ccclass: c,
        property: d
      } = n;
      e("WGmPage", c("WGmPage")(((_ = class e extends s {
        constructor(...e) {
          super(...e), this.content = null
        }
        pohuiPage() {
          a.bossDieWin(e, 2)
        }
        load() {
          this.content = this.zgNodegzt("top/sw1/view/content"), this.gsButtongbs("top/guanbi", function() {
            this.pohuiPage()
          }.bind(this))
        }
        init() {
          this.showInfo()
        }
        showInfo() {
          let e = this.zgNodegzt("Node1", this.content),
            t = this.zgEditBoxgebts("lbl_info2/YMEditBox", e);
          this.gsButtongbs("lay/btn_1", function() {
            let e = 1 * t.string;
            if (e && e > 0) {
              let t = [1, e];
              o.getNeedTabgs(t, null, -1), i.send(202, "加钞票成功")
            } else i.send(202, "请输入数字")
          }.bind(this), e), this.gsButtongbs("lay/btn_2", function() {
            let e = 1 * t.string;
            if (e && e > 0) {
              let t = [2, e];
              o.getNeedTabgs(t, null, -1), i.send(202, "加钻石成功")
            } else i.send(202, "请输入数字")
          }.bind(this), e), this.gsButtongbs("lay/btn_3", function() {
            let e = 1 * t.string;
            if (e && e > 0) {
              let t = [3, e];
              o.getNeedTabgs(t, null, -1), i.send(202, "加金卡成功")
            } else i.send(202, "请输入数字")
          }.bind(this), e);
          let n = this.zgNodegzt("Node2", this.content),
            s = this.zgEditBoxgebts("lbl_info2/YMEditBox", n);
          this.gsButtongbs("lay/btn_1", (() => {
            let e = 1 * s.string;
            e && e > 0 ? (g.base.year += e, i.send(202, `加年份成功，目前${g.base.year}年${g.base.month}月${g.base.day}日`)) : i.send(202, "请输入数字")
          }), n), this.gsButtongbs("lay/btn_2", function() {
            let e = 1 * s.string;
            e && e > 0 ? (g.base.month += e, g.base.month > 12 && (g.base.month = 1, g.base.year++), i.send(202, `加月份成功，目前${g.base.year}年${g.base.month}月${g.base.day}日`)) : i.send(202, "请输入数字")
          }.bind(this), n);
          let a = this.zgNodegzt("Node3", this.content),
            b = this.zgEditBoxgebts("lbl_info2/YMEditBox", a);
          this.gsButtongbs("lay/btn_1", function() {
            let e = 1 * b.string;
            if (e && e > 0 && e <= 24) {
              let t = r.co_event_rate.values;
              for (let e in t) {
                t[e].rate = 0
              }
              1 == e ? r.co_event_rate.zgTableKey(3011).rate = 1e4 : 2 == e ? r.co_event_rate.zgTableKey(3025).rate = 1e4 : 3 == e ? r.co_event_rate.zgTableKey(3023).rate = 1e4 : 4 == e ? r.co_event_rate.zgTableKey(3006).rate = 1e4 : 5 == e ? r.co_event_rate.zgTableKey(3007).rate = 1e4 : 6 == e ? r.co_event_rate.zgTableKey(3008).rate = 1e4 : 7 == e ? r.co_event_rate.zgTableKey(3009).rate = 1e4 : 8 == e ? r.co_event_rate.zgTableKey(3010).rate = 1e4 : 9 == e ? r.co_event_rate.zgTableKey(3018).rate = 1e4 : 10 == e ? r.co_event_rate.zgTableKey(3020).rate = 1e4 : 11 == e ? r.co_event_rate.zgTableKey(3012).rate = 1e4 : 12 == e ? r.co_event_rate.zgTableKey(3005).rate = 1e4 : 13 == e ? r.co_event_rate.zgTableKey(3014).rate = 1e4 : 14 == e ? r.co_event_rate.zgTableKey(3022).rate = 1e4 : 15 == e ? r.co_event_rate.zgTableKey(3028).rate = 1e4 : 16 == e ? r.co_event_rate.zgTableKey(3013).rate = 1e4 : 17 == e ? r.co_event_rate.zgTableKey(3019).rate = 1e4 : 18 == e ? r.co_event_rate.zgTableKey(3016).rate = 1e4 : 19 == e ? r.co_event_rate.zgTableKey(3017).rate = 1e4 : 20 == e ? r.co_event_rate.zgTableKey(3032).rate = 1e4 : 21 == e ? r.co_event_rate.zgTableKey(3026).rate = 1e4 : 22 == e ? r.co_event_rate.zgTableKey(3027).rate = 1e4 : 23 == e ? r.co_event_rate.zgTableKey(3030).rate = 1e4 : 24 == e && (r.co_event_rate.zgTableKey(3031).rate = 1e4), i.send(202, "指定事件成功")
            } else i.send(202, "指定事件不存在")
          }.bind(this), a), this.gsButtongbs("lay/btn_2", function() {
            let e = r.co_event_rate.values;
            for (let t in e) {
              let n = e[t];
              n.rate = window.co_event_rate0[`k${n.id}`].rate
            }
            i.send(202, "取消事件成功")
          }.bind(this), a);
          let _ = this.zgNodegzt("Node4", this.content);
          this.gsButtongbs("lay/btn_1", function() {
            g.base.zpNum = -1e3, i.send(202, "刷新招聘成功"), i.send(2002)
          }.bind(this), _);
          let c = this.zgNodegzt("Node5", this.content),
            d = this.zgEditBoxgebts("lbl_info2/YMEditBox", c);
          this.gsButtongbs("lay/btn_1", (() => {
            let e = 1 * d.string;
            if (e && e > 0) {
              let t = g.findObjById("workInfo1", e);
              t ? (t.exp += 1e6, l.addExpUpById(t.id, 0), i.send(202, `工号${e}加经验成功`)) : i.send(202, "员工不存在")
            } else i.send(202, "员工不存在")
          }), c);
          let h = this.zgNodegzt("Node6", this.content);
          this.gsButtongbs("lay/btn_1", function() {
            g.base.pingfen += 1e3, i.send(202, "刷新评分成功")
          }.bind(this), h)
        }
      }).m_name = "WGmPage", b = _)) || b);
      t._RF.pop()
    }
  }
}));