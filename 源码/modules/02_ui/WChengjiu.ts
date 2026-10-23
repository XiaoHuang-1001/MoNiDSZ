System.register("chunks:///_virtual/WChengjiu.ts", ["cc", "./ZGGSOfficeFx.ts", "./WChengjiu1.ts"], (function(t) {
  "use strict";
  var s, e, i, o, n, l, c, a, h, g, f, d, r, b;
  return {
    setters: [function(t) {
      s = t.cclegacy, e = t._decorator, i = t.instantiate, o = t.v2, n = t.js, l = t.UITransform
    }, function(t) {
      c = t.ZGGSOfficeFx, a = t.gs_bmsg, h = t.gs_boss, g = t.gs_tabpr, f = t.gs_sql, d = t.gs_btxt, r = t.gs_computer
    }, function(t) {
      b = t.WChengjiu1
    }],
    execute: function() {
      var u, j;
      s._RF.push({}, "162177D2mdD/r2UWzoTKd8j", "WChengjiu", void 0);
      const {
        ccclass: p,
        property: m
      } = e;
      t("WChengjiu", p("WChengjiu")(((j = class t extends c {
        constructor(...t) {
          super(...t), this.bdog = null, this.scrollView = null, this.showNode = null, this.typeNode = {}, this.nameNode = {}, this.typeName = {}
        }
        xiabanye() {
          a.send(2100, !1), h.bossDieWin(t, 1)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.gsButtongbs("guanbi", (() => {
            this.xiabanye()
          })), this.gsButtongbs("YMSpriteSplash", (() => {
            this.xiabanye()
          })), this.scrollView = this.zgScrollViewgsvt("sw1");
          let t = this.zgNodegzt("sw1/view/content/0");
          this.showNode = this.zgNodegzt("node1");
          let s = this.zgNodegzt("sw1/view/content");
          const e = g.co_accomplish.objs;
          for (const o in e) {
            const n = e[o];
            let l = i(t);
            l.parent = s, this.typeNode[o] = l, this.typeName[o] = n[0].type_name, l.active = !1;
            for (const t of n) {
              if (f.cjInfo.lockCj[o].indexOf(t.id) < 0) continue;
              let s = i(this.showNode);
              l.insertChild(s, 1), this.nameNode[t.id] = s, s.active = !1, this.gsTxtLblgs("lbl_info1/YMLabel1", t.name, s), this.gsTxtLblgs("lbl_info2/YMLabel1", t.des, s), this.gsNeedConfigs2("lay", t.award, s), this.gsTxtLblgs("lay/YMLabel1", d.gsNeedAward(t.award[0]), s)
            }
          }
          t.active = !1, this.showNode.active = !1
        }
        init(t) {
          if (a.send(2100, !0), this.scrollView.scrollToOffset(o(0, 0), 0), !t) {
            let s = null;
            for (const e in f.cjInfo.lockCj) {
              const i = f.cjInfo.lockCj[e];
              for (const e of i)
                if (f.cjInfo.stateCj.indexOf(e) < 0) {
                  let i = f.cjInfo.timeCj[e];
                  (!s || s <= i) && (s = i, t = e)
                }
            }
          }
          this.initCjInfo(t)
        }
        initCjInfo(t) {
          const s = g.co_accomplish.objs;
          for (let t = 1; t <= 6; t++) {
            const e = f.cjInfo.lockCj[t] || [];
            if (e.length > 0) {
              const o = s[t];
              let l = this.typeNode[t],
                c = 0;
              for (const t of o) {
                let s = t.id;
                if (f.cjInfo.zhibo.indexOf(s) >= 0 || e.indexOf(s) < 0) continue;
                let o = this.nameNode[s];
                o || (o = i(this.showNode), o.active = !0, l.insertChild(o, 1), this.nameNode[s] = o, this.gsTxtLblgs("lbl_info1/YMLabel1", t.name, o), this.gsTxtLblgs("lbl_info2/YMLabel1", t.des, o), this.gsNeedConfigs2("lay", t.award, o), this.gsTxtLblgs("lay/YMLabel1", d.gsNeedAward(t.award[0]), o)), c += 1, o.active = !0;
                let n = f.cjInfo.timeCj[s] || (new Date).valueOf(),
                  a = d.gsStringByParam(112, r.zgTimeByStrgs(n));
                this.gsTxtLblgs("YMLabel1", a, o);
                let u = () => {
                  let t = f.cjInfo.stateCj.indexOf(s) >= 0;
                  this.zgNodegzt("btn_3", o).active = t, this.zgNodegzt("btn_1", o).active = !t
                };
                u(), this.gsButtongbs("btn_1", (() => {
                  const t = g.co_accomplish.zgTableKey(s);
                  h.bossWshow(b, {
                    info: t,
                    fun: () => {
                      f.cjInfo.stateCj.push(s);
                      let t = f.cjInfo.zhibo.indexOf(s);
                      t >= 0 && f.cjInfo.zhibo.splice(t, 1), u()
                    }
                  })
                }), o)
              }
              l.active = c > 0;
              let a = d.gsStringByTwo(104);
              this.gsTxtLblgs("YMLabel1", n.formatStr(a, this.typeName[t], c, s[t].length), l.children[0])
            }
          }
          setTimeout((() => {
            let s = this.nameNode[t];
            if (s) {
              const e = g.co_accomplish.zgTableKey(t);
              let i = this.typeNode[e.type],
                n = s.position,
                c = i.position;
              this.scrollView.scrollToOffset(o(0, -n.y - c.y - s.getComponent(l).height / 2), 0)
            }
          }), 100)
        }
      }).m_name = "WChengjiu", u = j)) || u);
      s._RF.pop()
    }
  }
}));