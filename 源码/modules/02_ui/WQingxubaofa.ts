System.register("chunks:///_virtual/WQingxubaofa.ts", ["cc", "./ZGGSOfficeFx.ts", "./WQingxubaofa1.ts", "./minFunc.ts"], (function(s) {
  "use strict";
  var t, o, i, n, e, g, a, r, b, h, c, u, d;
  return {
    setters: [function(s) {
      t = s.cclegacy, o = s._decorator
    }, function(s) {
      i = s.ZGGSOfficeFx, n = s.gs_boss, e = s.gs_computer, g = s.gs_btxt, a = s.gs_phone, r = s.gs_bmsg, b = s.gs_www, h = s.gs_sql, c = s.gs_tabpr
    }, function(s) {
      u = s.WQingxubaofa1
    }, function(s) {
      d = s.minFunc
    }],
    execute: function() {
      var f, l;
      t._RF.push({}, "4a821L4lKhEw69IQtcc1UTt", "WQingxubaofa", void 0);
      const {
        ccclass: _,
        property: p
      } = o;
      s("WQingxubaofa", _("WQingxubaofa")(((l = class s extends i {
        constructor(...s) {
          super(...s), this.bdog = null, this.workInfo1_s = null, this.workGuangg = 9, this.shiyeNum = -20
        }
        xiabanye() {
          n.bossDieWin(s, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsTxtLblgs("node_Info3/YMLabel1", e.sjTabGetgs(g.gsStringHelpIn(112)), this.bdog), this.gsTxtLblgs("node_Info5/lay/YMLabel3", `${this.shiyeNum}`, this.bdog), this.gsButtongbs("btn_3", function() {
            d.activitySuccess(25, 1, null);
            let s = {
              amb: this.shiyeNum
            };
            a.addWorkerAttr(this.workInfo1_s.id, s), r.send(2302, {
              id: this.workInfo1_s.id,
              roleArr: [],
              face: 313
            }), this.xiabanye()
          }.bind(this), this.bdog), d.ggbtnPlay(this.zgNodegzt("btn_2", this.bdog), this.workGuangg), this.gsButtongbs("btn_2", function() {
            b.GGShowVido(this.workGuangg, (() => {
              d.activitySuccess(25, 2, null), this.evenEnd()
            }))
          }.bind(this), this.bdog)
        }
        init(s) {
          let t = s.role;
          this.workInfo1_s = h.findObjById("workInfo1", t), this.gsWorkPic("spr1", this.workInfo1_s, this.bdog);
          let o = a.returnOneAttr(this.workInfo1_s.id);
          this.gsTxtStrbyNums("spr1/lbl_info2/YMLabel2", 4, o.pot, this.bdog), this.gsTxtStrbyNums("spr1/lbl_info3/YMLabel2", 4, o.amb, this.bdog)
        }
        evenEnd() {
          let s = c.co_prop.objs[1];
          for (let t = 2; t <= 4; t++) s = s.concat(c.co_prop.objs[t]);
          const t = e.getRandomElements(s, 3);
          for (const s of t) e.saveYpFunc(this.workInfo1_s.id, s.id);
          n.bossWshow(u, {
            id: this.workInfo1_s.id,
            awardInfo: t
          }), this.xiabanye()
        }
      }).m_name = "WQingxubaofa", f = l)) || f);
      t._RF.pop()
    }
  }
}));