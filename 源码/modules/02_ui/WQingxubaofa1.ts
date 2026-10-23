System.register("chunks:///_virtual/WQingxubaofa1.ts", ["cc", "./ZGGSOfficeFx.ts", "./PQTips3.ts"], (function(s) {
  "use strict";
  var t, i, o, e, n, r, g, l, a;
  return {
    setters: [function(s) {
      t = s.cclegacy, i = s._decorator, o = s.UITransform
    }, function(s) {
      e = s.ZGGSOfficeFx, n = s.gs_boss, r = s.gs_sql, g = s.gs_phone, l = s.gs_bmsg
    }, function(s) {
      a = s.PQTips3
    }],
    execute: function() {
      var b, c;
      t._RF.push({}, "ee1322j0DRNDbs+EJsANYuo", "WQingxubaofa1", void 0);
      const {
        ccclass: d,
        property: f
      } = i;
      s("WQingxubaofa1", d("WQingxubaofa1")(((c = class s extends e {
        constructor(...s) {
          super(...s), this.bdog = null, this.step = 1, this.seleIndx = 0, this.workArr = [0, 0, 0], this.showInfo = []
        }
        xiabanye() {
          n.bossDieWin(s, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top")
        }
        init(s) {
          let t = s.id;
          const i = s.awardInfo;
          let e = r.findObjById("workInfo1", t);
          this.gsWorkPic("spr1", e, this.bdog);
          let b = g.returnOneAttr(e.id);
          this.gsTxtStrbyNums("spr1/lbl_info2/YMLabel2", 4, b.pot, this.bdog), this.gsTxtStrbyNums("spr1/lbl_info3/YMLabel2", 4, b.amb, this.bdog);
          let c = this.zgNodegzt("lay", this.bdog);
          for (let s = 0; s < 3; s++) {
            const t = i[s];
            let e = c.children[s];
            if (e) {
              this.gsTxtGradelbl("lbl_info6/YMLabel1", t.grade, t.name, e);
              let s = this.zgNodegzt("lbl_info6", e);
              this.gsButtongbs("lbl_info6/YMLabel1", (() => {
                let i = {
                  pos: this.gsWorldposgws(s),
                  size: s.getComponent(o).contentSize,
                  info: {
                    id: t.id
                  },
                  type: 2
                };
                n.bossWshow(a, i)
              }), e)
            }
          }
          this.gsButtongbs("btn_3", (() => {
            l.send(2302, {
              id: t,
              roleArr: [],
              face: 301
            }), this.xiabanye()
          }), this.bdog)
        }
      }).m_name = "WQingxubaofa1", b = c)) || b);
      t._RF.pop()
    }
  }
}));