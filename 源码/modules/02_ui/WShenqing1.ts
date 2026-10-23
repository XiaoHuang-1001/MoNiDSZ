System.register("chunks:///_virtual/WShenqing1.ts", ["cc", "./ZGGSOfficeFx.ts", "./WShenqing2.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var e, s, i, n, h, l, o, g, c;
  return {
    setters: [function(t) {
      e = t.cclegacy, s = t._decorator
    }, function(t) {
      i = t.ZGGSOfficeFx, n = t.gs_boss, h = t.gs_bmsg, l = t.gs_tabpr, o = t.gs_phone
    }, function(t) {
      g = t.WShenqing2
    }, function(t) {
      c = t.minFunc
    }],
    execute: function() {
      var a, r;
      e._RF.push({}, "8f661DZWqJMSJ6heYPvQi/f", "WShenqing1", void 0);
      const {
        ccclass: b,
        property: u
      } = s;
      t("WShenqing1", b("WShenqing1")(((r = class t extends i {
        constructor(...t) {
          super(...t), this.fanghe = null, this.content = null, this.item = null, this.choose = 1, this.co_raise_tt = null
        }
        xiabanye(e, s) {
          n.bossDieWin(t, 1);
          let i = {
            id: e[0],
            roleArr: [],
            face: s
          };
          h.send(2302, i)
        }
        load() {
          this.fanghe = this.zgNodegzt("top"), this.item = this.zgNodegzt("spr1", this.fanghe), this.content = this.zgNodegzt("content", this.fanghe), this.co_raise_tt = l.co_raise.values
        }
        init(t) {
          this.showWShenqing1(t)
        }
        showWShenqing1(t) {
          this.choose = 1;
          let e = t.arrRen,
            s = [];
          for (let t = 0; t < e.length; t++) {
            let i = e[t];
            s.push(i.id), this.bindRen(this.item, i)
          }
          let i = this.content.children,
            h = 0;
          for (let t = 0; t < i.length; t++) {
            let e = i[t],
              s = this.co_raise_tt[t];
            this.gsTxtGradelbl("lbl_info1/YMLabel1", s.grade, s.name, e);
            let n = this.zgTogglegtts("lbl_info3/toggle", e);
            n.isChecked = this.choose == s.id, this.zgLableglt("lbl_info1/YMLabel1", e).unscheduleAllCallbacks(), this.gsButtongbs("lbl_info3/btn", (() => {
              this.choose = s.id, h = t;
              for (let t = 0; t < i.length; t++) {
                let e = i[t];
                this.zgTogglegtts("lbl_info3/toggle", e).isChecked = !1
              }
              n.isChecked = !0
            }), e)
          }
          this.gsButtongbs("btn_3", (() => {
            c.activitySuccess(17, 1, {
              num: 0
            }), this.xiabanye(s, 310)
          }), this.fanghe), this.gsButtongbs("btn_2", (() => {
            c.activitySuccess(17, 2, {
              num: h + 1
            });
            let t = l.co_raise.zgTableKey(this.choose);
            this.node.active = !1;
            let i = {
              arrRen: e,
              co_raise_t: t,
              _func: () => {
                this.xiabanye(s, t.emote_id)
              }
            };
            n.bossWshow(g, i)
          }), this.fanghe)
        }
        bindRen(t, e) {
          this.gsWorkPic(t, e);
          let s = o.returnOneAttr(e.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, s.pot, t), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, s.amb, t), this.gsTxtStrbyNums("lbl_info4/YMLabel2", 101, s.salary, t), this.gsTxtStrbyNums("lbl_info6/YMLabel2", 102, s.earn, t)
        }
      }).m_name = "WShenqing1", a = r)) || a);
      e._RF.pop()
    }
  }
}));