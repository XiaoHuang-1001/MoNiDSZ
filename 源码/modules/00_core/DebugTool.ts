System.register("chunks:///_virtual/DebugTool.ts", ["cc", "./ZGGSOfficeFx.ts", "./ZGGSComputeCom.ts"], (function(e) {
  "use strict";
  var t, a, c, o, n;
  return {
    setters: [function(e) {
      t = e.sys, a = e.cclegacy
    }, function(e) {
      c = e.gs_sql, o = e.gs_tabpr
    }, function(e) {
      n = e.gs_bmsg
    }],
    execute: function() {
      a._RF.push({}, "ce5fc+GzTdCSbDP2S4AYHgC", "DebugTool", void 0);
      e("default", class {
        constructor() {
          t.platform !== t.Platform.IOS && t.platform !== t.Platform.ANDROID ? (this.addText("切换速度", (e => {
            "number" == typeof e && e > 0 && (c.cache.sec = e, n.send(2200)), console.log(`现时间每${c.cache.sec/100}秒一天`)
          })), this.addText("事件触发", (e => {
            c.cache.tufaCheck[e] ? (c.cache.tufaCheck[e] = null, delete c.cache.tufaCheck[e]) : c.cache.tufaCheck[e] = 1;
            const t = o.co_event_rate.zgTableKey(e);
            let a = t ? t.name : e;
            console.error(`${a} 事件${e}` + (c.cache.tufaCheck[e] ? "必定触发" : `调回原来概率必定触发事件：${c.cache.tufaCheck}`)), console.error("现事件触发：", c.cache.tufaCheck)
          }))) : CC_DEBUG = !1
        }
        addBtn(e, a) {
          if (t.platform === t.Platform.IOS || t.platform === t.Platform.ANDROID) return;
          let c = document.getElementsByClassName("toolbar")[0];
          if (!c) return;
          let o = document.createElement("div");
          o.className = "item", o.innerHTML = "<button id='" + e + "'>" + e + "</button>", c.appendChild(o), document.getElementById(e).onclick = () => {
            a()
          }
        }
        addText(e, a) {
          if (t.platform === t.Platform.IOS || t.platform === t.Platform.ANDROID) return;
          let c = document.getElementsByClassName("toolbar")[0];
          if (!c) return;
          let o = document.createElement("div");
          o.className = "text", o.innerText = `${e}`, c.appendChild(o), this.editBox(e + "box", a)
        }
        editBox(e, a) {
          if (t.platform === t.Platform.IOS || t.platform === t.Platform.ANDROID) return;
          let c = document.getElementsByClassName("toolbar")[0];
          if (!c) return;
          let o = document.createElement("div");
          o.className = "item", o.innerHTML = `<input type="number" id="${e}">`, c.appendChild(o);
          const n = document.getElementById(e);
          n.onkeypress = e => {
            if ("Enter" === e.key) {
              var t = parseInt(n.value);
              a(t)
            }
          }
        }
      }), a._RF.pop()
    }
  }
}));