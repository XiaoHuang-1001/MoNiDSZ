System.register("chunks:///_virtual/WShezhi2.ts", ["cc", "./ZGGSOfficeFx.ts", "./WConsole.ts", "./WGmPage.ts"], (function(e) {
  "use strict";
  var t, i, s, n, h, o, g, a, r, d, c;
  return {
    setters: [function(e) {
      t = e.cclegacy, i = e._decorator
    }, function(e) {
      s = e.ZGGSOfficeFx, n = e.gs_boss, h = e.gs_tabpr, o = e.gs_sql, g = e.gs_bmsg, a = e.gs_btxt, r = e.gs_computer
    }, function(e) {
      d = e.WConsole
    }, function(e) {
      c = e.WGmPage
    }],
    execute: function() {
      var l, u;
      t._RF.push({}, "92725NrG55G7KCJBpacCIFp", "WShezhi2", void 0);
      const {
        ccclass: f,
        property: b
      } = i;
      e("WShezhi2", f("WShezhi2")(((u = class e extends s {
        constructor(...e) {
          super(...e), this.bdog = null, this.edit = null
        }
        pohuiPage() {
          n.bossDieWin(e, 2)
        }
        load() {
          this.bdog = this.zgNodegzt("top"), this.edit = this.zgEditBoxgebts("lbl_info2/YMEditBox", this.bdog), this.gsButtongbs("guanbi", function() {
            this.pohuiPage()
          }.bind(this), this.bdog), this.gsButtongbs("YMSpriteSplash", function() {
            this.pohuiPage()
          }.bind(this))
        }
        init(e) {
          this.inishezi()
        }
        inishezi() {
          this.edit.string = "", this.gsButtongbs("btn_2", (() => {
            if ("jsmmgropen" != this.edit.string)
              if ("dongshiConsole" != this.edit.string) {
                if (this.edit.string.indexOf("gn_") >= 0) {
                  let e = this.edit.string.split("gn_"),
                    t = Number(e[1]);
                  const i = h.co_event_rate.zgTableKey(t);
                  if (i) {
                    o.cache.tufaCheck[t] ? (o.cache.tufaCheck[t] = null, delete o.cache.tufaCheck[t]) : o.cache.tufaCheck[t] = 1;
                    let e = `${i?i.name:t} 事件${t}` + (o.cache.tufaCheck[t] ? "必定触发" : "调回原来概率");
                    return console.error("现事件触发：", o.cache.tufaCheck, e), void g.send(202, e)
                  }
                }
                if (this.edit.string.indexOf("time_%&") >= 0) {
                  let e = this.edit.string.split("time_%&"),
                    t = Number(e[1]);
                  if ("number" == typeof t && t > 0) {
                    o.cache.sec = t, g.send(2200);
                    let e = `现时间每${o.cache.sec/100}秒一天`;
                    return void g.send(202, e)
                  }
                }
                if ("dongshizhangyearadd" != this.edit.string)
                  if ("dongshizhangmonthadd" != this.edit.string) "pochan%&" != this.edit.string ? this.edit.string.length <= 0 ? g.send(202, a.gsNorStringType(8)) : -1 == this.edit.string.indexOf(" ") ? -1 == o.config.duihuanmaList.indexOf(this.edit.string) ? this.duihaunmaTable() : g.send(202, a.gsNorStringType(13)) : g.send(202, a.gsNorStringType(9)) : o.base.gold = -1e11;
                  else {
                    o.base.month++, o.base.month > 12 && (o.base.month = 1, o.base.year++), o.base.zpNum = 0;
                    let e = `现在${o.base.year}年，${o.base.month}月`;
                    g.send(202, e)
                  }
                else {
                  o.base.year++;
                  let e = `现在${o.base.year}年，${o.base.month}月`;
                  g.send(202, e)
                }
              } else n.bossWshow(d);
            else n.bossWshow(c)
          }), this.bdog)
        }
        duihaunmaTable() {
          let e = h.co_dhm.objs,
            t = null,
            i = 0,
            s = (e[1] || []).find((e => e.zimu[0] === this.edit.string));
          if (s) t = s.reward, i = s.pici;
          else {
            let s = e[2] || [];
            for (let e = 0; e < s.length; e++) {
              let n = s[e],
                h = n.weizhi,
                o = !0;
              for (let e = 0; e < h.length; e++)
                if (this.edit.string[h[e] - 1] != n.zimu[e]) {
                  o = !1;
                  break
                } if (o) {
                i = n.pici, t = n.reward;
                break
              }
            }
          }
          if (t)
            if (i > 0 && o.maJianli[i]) g.send(202, a.gsNorStringType(13) + "!");
            else {
              for (let e = 0; e < t.length; e += 2) {
                let i = [];
                for (let s = 0; s < 2; s++) i[s] = t[e + s];
                console.log(i, "奖励"), r.getNeedTabgs(i, null, -1)
              }
              g.send(202, a.gsNorStringType(12)), o.config.duihuanmaList.push(this.edit.string), o.maJianli[i] = i, this.scheduleOnce(function() {
                this.pohuiPage()
              }.bind(this), .1)
            }
          else g.send(202, a.gsNorStringType(9) + "!")
        }
      }).m_name = "WShezhi2", l = u)) || l);
      t._RF.pop()
    }
  }
}));