System.register("chunks:///_virtual/WTuijianshuji.ts", ["cc", "./ZGGSOfficeFx.ts", "./WTuijianshuji1.ts", "./minFunc.ts"], (function(t) {
  "use strict";
  var i, s, e, o, n, l, h, a, u, r, c;
  return {
    setters: [function(t) {
      i = t.cclegacy, s = t._decorator
    }, function(t) {
      e = t.ZGGSOfficeFx, o = t.gs_boss, n = t.gs_tabpr, l = t.gs_computer, h = t.gs_phone, a = t.gs_btxt, u = t.gs_www
    }, function(t) {
      r = t.WTuijianshuji1
    }, function(t) {
      c = t.minFunc
    }],
    execute: function() {
      var b, g;
      i._RF.push({}, "7edafNI7fpL7r/TUprS70or", "WTuijianshuji", void 0);
      const {
        ccclass: _,
        property: f
      } = s;
      t("WTuijianshuji", _("WTuijianshuji")(((g = class t extends e {
        constructor(...t) {
          super(...t), this.hezi = null, this._workInfo1_s = null, this.co_book_tt = null, this.maidianGG1 = 11, this.btnGg = null, this.allBook = []
        }
        pohuiPage() {
          o.bossDieWin(t, 1)
        }
        load() {
          this.hezi = this.zgNodegzt("top"), this.btnGg = this.zgNodegzt("top/lay2/btn_3"), this.co_book_tt = n.co_book.objs
        }
        init(t) {
          this.allBook = [], this._workInfo1_s = t.workInfo1_s, console.log("员工Id", t.workInfo1_s.id), this.bindInfo(), this.btnGg.active = !0, this.bindLabel(1)
        }
        bindLabel(t) {
          let i = 1e4;
          2 == t && (i = 500);
          for (let t = 1; t < 5; t++) {
            let s = l.sjNumgs(1, i),
              e = this.co_book_tt[t],
              o = null;
            for (let t = 0; t < e.length; t++)
              if (o = e[t], o.rate1 <= s && s <= o.rate2) {
                this.allBook.push(o);
                break
              } this.gsTxtGradelbl(`content/item${t}/lay2/YMLabel2`, o.grade, o.name, this.hezi)
          }
        }
        bindInfo() {
          let t = this.zgNodegzt("spr1", this.hezi),
            i = this._workInfo1_s;
          this.gsWorkPic(t, i);
          let s = h.returnOneAttr(i.id);
          this.gsTxtStrbyNums("lbl_info2/YMLabel2", 4, s.pot, t), this.gsTxtStrbyNums("lbl_info3/YMLabel2", 4, s.amb, t);
          for (let t = 1; t < 5; t++) {
            let i = a.gsStringHelpIn(205)[t];
            this.gsTxtLblgs(`content/item${t}/lay2/YMLabel1`, i, this.hezi)
          }
          this.gsButtongbs("lay2/btn_2", (() => {
            c.activitySuccess(21, 1, null);
            let t = n.co_job.zgTableKey(i.jobId),
              e = 0,
              a = 0,
              u = 0,
              b = 0;
            for (let i = 0; i < this.allBook.length; i++) {
              let s = this.allBook[i],
                o = l.sjNumgs(s.value1, s.value2);
              1 == s.type ? e = Math.ceil(o * t.f_hp) : 2 == s.type ? a = Math.ceil(o * t.f_att) : 3 == s.type ? u = Math.ceil(o * t.f_def) : 4 == s.type && (b = Math.ceil(o * t.f_speed))
            }
            let g = {
              workAttr: s,
              att: a,
              hp: e,
              def: u,
              speed: b,
              workInfo1_s: i,
              id: this._workInfo1_s.id,
              face: 306
            };
            this.pohuiPage(), h.addWorkerAttr(i.id, g), o.bossWshow(r, g)
          }), this.hezi), c.ggbtnPlay(this.zgNodegzt("lay2/btn_3", this.hezi), this.maidianGG1), this.gsButtongbs("lay2/btn_3", (() => {
            u.GGShowVido(this.maidianGG1, (() => {
              c.activitySuccess(21, 2, null), this.allBook = [], this.bindLabel(2), this.btnGg.active = !1
            }))
          }), this.hezi)
        }
      }).m_name = "WTuijianshuji", b = g)) || b);
      i._RF.pop()
    }
  }
}));