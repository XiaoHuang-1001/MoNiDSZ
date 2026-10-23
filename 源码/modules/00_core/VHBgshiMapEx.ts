System.register("chunks:///_virtual/VHBgshiMapEx.ts", ["cc", "./VHBgshiF.ts", "./ZGGSOfficeFx.ts", "./WChakancy.ts", "./WZPWork.ts"], (function(s) {
  "use strict";
  var t, e, i, g, a, o, h, n, r, c, l;
  return {
    setters: [function(s) {
      t = s.cclegacy, e = s._decorator
    }, function(s) {
      i = s.VHBgshiF
    }, function(s) {
      g = s.gs_sql, a = s.gs_boss, o = s.gs_tabpr, h = s.gs_phone, n = s.gs_bmsg, r = s.gs_btxt
    }, function(s) {
      c = s.WChakancy
    }, function(s) {
      l = s.WZPWork
    }],
    execute: function() {
      var p;
      t._RF.push({}, "37085GFtblPRrrjS4WvWj7B", "VHBgshiMapEx", void 0);
      const {
        ccclass: b,
        property: d
      } = e;
      s("VHBgshiMapEx", b("VHBgshiMapEx")(p = class extends i {
        // 这个员工是不是某分公司的「总经理」（分公司老板）→ 返回分公司 id，否则 0
        __dshBranchOfWork(s) {
          try {
            const o = g.combmInfo && g.combmInfo.objs;
            if (!o || !s) return 0;
            for (const id of [1500, 1600]) {
              const n = o[id];
              if (n && n.workId && n.workId == s) return id
            }
          } catch (e) {}
          return 0
        }
        // 点击分公司董事长/分公司板块 → 弹出分公司改名窗口
        __dshBindRename(s) {
          try {
            window.__dshRenameBranch && window.__dshRenameBranch(s)
          } catch (e) {}
        }
        initRoleShow(s, t = null) {
          let e = t || s.name,
            i = g.findObjById("workInfo1", e),
            p = null;
          p = s.isp ? this.zgNodegzt("touxiang", s) : this.zgNodegzt("icon1/touxiang", s);
          let b = e;
          if (i) {
            const bid = this.__dshBranchOfWork(i.id);
            if (bid) {
              // 分公司董事长：点击直接改分公司名字
              this.gsButtongbs("4", (() => {
                this.__dshBindRename(bid)
              }), p)
            } else {
              this.gsButtongbs("4", (() => {
                let s = {
                  workInfo1_s: i
                };
                a.bossWshow(c, s)
              }), p)
            }
            this.zgNodegzt("4", p).active = !0, this.gsSprHtsst("4", i.sprId, p), this.gsTxtLblgs(s.lbName4, i.name), b = i.postId;
            const t = o.co_job.zgTableKey(i.jobId);
            // 原版写死「1 号员工就是董事长」，本版董事长不是 1 号，改成按真实董事长 id 判断
            const isDs = i.id == (g.combmInfo.objs[1001] && g.combmInfo.objs[1001].workId);
            t && (this.zgNodegzt("2", p).active = !isDs, this.gsWorkTypePic2("2", t.grade, p), !isDs ? this.gsTxtGradelbl(s.lbName1, t.grade, t.name) : this.gsTxtLblgs(s.lbName1, ""));
            // 职级改成 P0-A 这种 4 字符后，原来的职级背景板偏窄，整体拉宽 1.2 倍（只拉伸一次）
            try {
              const tr2 = this.zgUITransformguift("2", p);
              tr2 && tr2.node && !tr2.node.dshWide && (tr2.node.dshWide = !0,
                tr2.setContentSize(tr2.contentSize.width * 1.3, tr2.contentSize.height))
            } catch (e3) {}
            let e = h.returnOneAttr(i.id);
            e.earn && (this.zgNodegzt("1", p).active = !0, this.gsTxtStrbyNums(s.lbName2, 102, e.earn), this.gsTxtStrbyNums(s.lbName5, 306, e.earn))
          } else {
            for (let t = 1; t <= 4; t++) this.zgNodegzt(t + "", p).active = !1, this.gsTxtLblgs(s["lbName" + t], "");
            const dn = String(s.name);
            dn == "1500" || dn == "1600" ? this.gsButtongbs("4", (() => {
              this.__dshBindRename(Number(dn))
            }), p) : this.gsButtongbs("4", (() => {}), p)
          }
          1 == s.isp ? b = 100200 : 2 == s.isp ? (b = 100300, e == (g.combmInfo.objs[1001] && g.combmInfo.objs[1001].workId) && (b = 100100)) : 1 == s.aType && (b = b.split("-")[0]);
          const d = o.co_post.zgTableKey(b);
          if (d && (this.zgNodegzt("3", p).active = !0, this.gsWorkTypePic1("3", d.grade, p), this.gsTxtGradelbl(s.lbName3, d.grade, d.name), this.gsWorkTypePic3("0", `${d.grade}`, p)), s.aType && s.jh) {
            s.jh.active = !0;
            let t = !0;   // 单机版：移除每月招聘人数上限（原本是 g.base.zpNum < g.cache.zpNumMax）
            t ? this.gsSprHtsst(s.jh, "jiah") : this.gsSprHtsst(s.jh, "jiah1"), this.gsButtongbs(s.jh, (() => {
              t ? (n.send(2307), a.bossWshow(l, {
                type: s.aType,
                workId: b,
                iszcj: !0
              })) : n.send(202, r.gsStringByParam(122, g.cache.zpNumMax))
            }), p)
          } else s.jh && (s.jh.active = !1)
        }
      }) || p);
      t._RF.pop()
    }
  }
}));