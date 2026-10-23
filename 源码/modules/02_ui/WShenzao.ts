System.register("chunks:///_virtual/WShenzao.ts", ["cc", "./ZGGSOfficeFx.ts", "./CurListView.ts", "./WShenzao2.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var s, e, i, n, o, a, d, h, g, r;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, n = t.gs_boss, o = t.gs_bmsg, a = t.gs_sql, d = t.gs_tabpr
    }, function(t) {
      h = t.CurListView
    }, function(t) {
      g = t.WShenzao2
    }, function(t) {
      r = t.minFunc
    }],
    execute: function() {
      var c, l;
      s._RF.push({}, "a6ec3SCnLpLv6WrwHTkmYzZ", "WShenzao", void 0);
      const {
        ccclass: u,
        property: b
      } = e;
      t("WShenzao", u("WShenzao")(((l = class t extends i {
        constructor(...t) {
          super(...t), this.top = null, this.svCtl1 = null
        }
        xiabanye() {
          n.bossDieWin(t, 2)
        }
        load() {
          this.top = this.zgNodegzt("top"), this.svCtl1 = this.zgNodegzt("sw1", this.top).getComponent(h), this.gsButtongbs("guanbi", (() => {
            o.send(2100, !1), this.xiabanye()
          }), this.top), this.gsButtongbs("YMSpriteSplash", (() => {
            o.send(2100, !1), this.xiabanye()
          }))
        }
        init() {
          r.activityEnter(7), o.send(2100, !0), this.showWShenzao()
        }
        showWShenzao() {
          let t = a.upEduInfo.arr;
          t.sort(((t, s) => t.day - s.day)), this.zgNodegzt("lbl_info2", this.top).active = 0 == t.length, this.svCtl1.init(t, function(t, s, e) {
            this.bindList(t, s, e)
          }.bind(this))
        }
        bindList(t, s, e) {
          let i = this.zgNodegzt("tit1/lay2", t),
            h = this.zgNodegzt("sw1", t).children,
            r = d.co_edu_up.zgTableKey(s.tabId),
            c = d.co_edu.zgTableKey(r.edu_id);
          this.gsTxtGradelbl("txt2", c.grade, c.name, i), this.gsTxtGradelbl("txt4", r.grade, r.name, i);
          for (let t = 0; t < s.pos.length; t++) {
            let e = s.pos[t],
              i = a.findObjById("workInfo1", e),
              n = h[t],
              o = 7;
            if (i) {
              this.gsWorkPic("node_2", i, n);
              const t = d.co_edu.zgTableKey(i.edu);
              this.gsTxtGradelbl("node_2/lbl_info3/YMLabel2", t.grade, t.name, n), o = d.co_post.zgTableKey(i.postId).grade
            }
            this.gsWorkTypePic3("node_1", `${o}`, n)
          }
          this.gsTxtStrbyNums("btn_3/YMLabel1", 116, s.day, t), this.zgNodegzt("btn_2", t).active = s.day <= 0, this.zgNodegzt("btn_3", t).active = s.day > 0, this.gsButtongbs("btn_2", (() => {
            let t = {
              tabId: s.tabId,
              arr: s.pos,
              _func: t => {
                a.upEduInfo.arr.splice(e, 1), this.xiabanye(), o.send(2302, {
                  id: t[0],
                  roleArr: t,
                  face: 303
                })
              }
            };
            n.bossWshow(g, t)
          }), t)
        }
      }).m_name = "WShenzao", c = l)) || c);
      s._RF.pop()
    }
  }
}));