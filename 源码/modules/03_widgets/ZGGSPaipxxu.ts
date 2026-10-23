System.register("chunks:///_virtual/ZGGSPaipxxu.ts", ["cc", "./ZGGSOfficeFx.ts"], (function(t) {
  "use strict";
  var r, n, e;
  return {
    setters: [function(t) {
      r = t.cclegacy
    }, function(t) {
      n = t.gs_sql, e = t.gs_phone
    }],
    execute: function() {
      r._RF.push({}, "bff35NtOXRJK79hQyC2Bfdc", "ZGGSPaipxxu", void 0);
      t("ZGGSPaipxxu", class {
        static sortShiming(t, r) {
          return t.power == r.power ? r.id - t.id : r.power - t.power
        }
        static fightSort(t) {
          let r = {
            1: "allNum",
            2: "jobId",
            3: "pot",
            4: "amb"
          };
          return 2 == t ? function(e, u) {
            const i = n.findObjById("workInfo1", e);
            return n.findObjById("workInfo1", u)[r[t]] - i[r[t]]
          } : function(n, u) {
            const i = e.returnOneAttr(n);
            return e.returnOneAttr(u)[r[t]] - i[r[t]]
          }
        }
        static paiMingSort(t) {
          let r = {
            1: "earn",
            2: "pot",
            3: "amb",
            4: "allNum",
            5: "salary"
          };
          return function(n, u) {
            const i = e.returnOneAttr(n);
            return e.returnOneAttr(u)[r[t]] - i[r[t]]
          }
        }
      }), r._RF.pop()
    }
  }
}));