System.register("chunks:///_virtual/co_raise.ts", ["cc"], (function(e) {
  "use strict";
  var a;
  return {
    setters: [function(e) {
      a = e.cclegacy
    }],
    execute: function() {
      a._RF.push({}, "1ff8aouNK5LFbSIF0+86IBi", "co_raise", void 0);
      e("co_raise", {
        k1: {
          id: 1,
          name: "同意+1000/月",
          grade: 1,
          value1: 1e3,
          value2: 50,
          des1: "低于预期",
          des2: "x%内心仍有不满，但表示自己会努力工作",
          emote_id: 301
        },
        k2: {
          id: 2,
          name: "同意+2000/月",
          grade: 3,
          value1: 2e3,
          value2: 95,
          des1: "与预期相符",
          des2: "x%内心雀跃，当场表示自己会加油努力",
          emote_id: 303
        },
        k3: {
          id: 3,
          name: "同意+5000/月",
          grade: 4,
          value1: 5e3,
          value2: 225,
          des1: "超出预期",
          des2: "x%激动得跳了起来，并再三承诺自己会加倍努力",
          emote_id: 308
        },
        k4: {
          id: 4,
          name: "同意+10000/月",
          grade: 6,
          value1: 1e4,
          value2: 400,
          des1: "远远超出预期",
          des2: "x%根本不敢相信，再三确认后，发誓自己会加倍加倍再加倍努力",
          emote_id: 312
        }
      });
      a._RF.pop()
    }
  }
}));