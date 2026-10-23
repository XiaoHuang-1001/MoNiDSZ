System.register("chunks:///_virtual/WXinfaxian1.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSScrollviewsvi.ts"], (function(t) {
  "use strict";
  var i, e, s, n, o, l, h, c, a, r;
  return {
    setters: [function(t) {
      i = t.cclegacy, e = t._decorator, s = t.instantiate
    }, function(t) {
      n = t.ZGGSOfficeFx, o = t.gs_boss, l = t.gs_tabpr, h = t.gs_sql, c = t.gs_bmsg, a = t.gs_computer
    }, function(t) {
      r = t.ZGGSScrollviewsvi
    }],
    execute: function() {
      var d, g;
      i._RF.push({}, "ec28fMfPtFE8rvANYUHbu4c", "WXinfaxian1", void 0);
      const {
        ccclass: f,
        property: b
      } = e;
      t("WXinfaxian1", f("WXinfaxian1")(((g = class t extends n {
        constructor(...t) {
          super(...t), this.top = null, this.swNode = null, this.mainCt = null, this.content2 = null, this.item = null, this.swCom = null, this.co_character_ttt = null
        }
        xiabanye() {
          o.bossDieWin(t, 1)
        }
        load() {
          this.co_character_ttt = l.co_character.objs, this.top = this.zgNodegzt("top"), this.swNode = this.zgNodegzt("sw1", this.top), this.mainCt = this.zgNodegzt("view/content", this.swNode), this.swCom = this.swNode.getComponent(r), this.content2 = this.zgNodegzt("content2", this.top), this.item = this.zgNodegzt("spr1", this.top)
        }
        init(t) {
          this.showView(t)
        }
        showView(t) {
          console.log(t);
          let i = t.ids;
          if (i.length > 3) {
            this.swNode.active = !0, this.content2.active = !1, this.swCom.scrollToLeft();
            for (let t = 0; t < i.length; t++) {
              let e = i[t],
                n = this.mainCt.children[t];
              if (n || (n = s(this.item), n.parent = this.mainCt), n.active = e, e) {
                let t = h.findObjById("workInfo3", e);
                this.bindRen(n, t)
              }
            }
            for (let t = i.length; t < this.mainCt.children.length; t++) this.mainCt.children[t].active = !1
          } else {
            this.swNode.active = !1, this.content2.active = !0;
            for (let t = 0; t < i.length; t++) {
              let e = i[t],
                n = this.content2.children[t];
              if (n || (n = s(this.item), n.parent = this.content2), n.active = e, e) {
                let t = h.findObjById("workInfo3", e);
                this.bindRen(n, t)
              }
            }
            for (let t = i.length; t < this.content2.children.length; t++) this.content2.children[t].active = !1
          }
          this.gsButtongbs("btn_2", (() => {
            let t = {
              id: i[0],
              roleArr: i,
              face: 312
            };
            c.send(2302, t), this.xiabanye()
          }), this.top)
        }
        bindRen(t, i) {
          console.log("workInfo3_s.id", i.id);
          let e = h.findObjById("workInfo1", i.id),
            s = l.co_post.zgTableKey(e.postId),
            n = this.co_character_ttt[s.type],
            o = null;
          for (; !o;) {
            let t = n[a.sjNumgs(0, n.length - 1)]; - 1 == i.pinzhi.indexOf(t.id) && (o = t.id, a.addPinzhi(i.id, o))
          }
          let c = l.co_character.zgTableKey(o);
          this.gsTxtGradelbl("lbl_info4/YMLabel1", c.grade, c.title, t), this.gsTxtLblgs("lbl_info3/YMLabel1", c.name, t);
          let r = c.des.replace("xx", c.value);
          this.gsTxtLblgs("lbl_info2/YMLabel1", r, t), this.gsWorkPic(t, e)
        }
      }).m_name = "WXinfaxian1", d = g)) || d);
      i._RF.pop()
    }
  }
}));