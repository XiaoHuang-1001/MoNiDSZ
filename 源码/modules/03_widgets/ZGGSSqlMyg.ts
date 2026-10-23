System.register("chunks:///_virtual/ZGGSSqlMyg.ts", ["cc"], (function(e) {
  "use strict";
  var o, n;
  return {
    setters: [function(e) {
      o = e.cclegacy, n = e.sys
    }],
    execute: function() {
      o._RF.push({}, "8179f32hCFPD7d4dW5ohf/d", "ZGGSSqlMyg", void 0);
      class a {
        static gsStringByParam(e, o) {
          throw new Error("Method not implemented.")
        }
        static createNewObj(e, o) {
          let n = JSON.parse(JSON.stringify(a[e].obj)),
            s = a[e].sysId || 1;
          return n.tabId = o, n.id = s, a[e].objs[s] = n, a[e].sysId = s + 1, n
        }
        static findObjById(e, o) {
          return a[e].objs[o]
        }
        static deleteObjById(e, o) {
          delete a[e].objs[o]
        }
        static createNewObj2(e, o) {
          let n = this.findObjById(e, o);
          if (!n) {
            let n = JSON.parse(JSON.stringify(a[e].obj));
            n.id = o, a[e].objs[o] = n
          }
          return n = this.findObjById(e, o), n
        }
        static load() {
          window.gongshishuju = [];
          for (let s = 0; s < a.texts.length; s++) {
            var e = a.texts[s];
            a.backs[e] = JSON.stringify(a[e]), a.update[e] = 1, a.server[e] = {};
            var o = n.localStorage.getItem(a.gameKey + e);
            o && o.length > 0 && "undefined" != o && (a[e] = JSON.parse(o), window.gongshishuju.push(o))
          }
          this.addNewData()
        }
        static clsData() {
          for (let o = 0; o < a.texts.length; o++) {
            var e = a.texts[o];
            n.localStorage.setItem(a.gameKey + e, ""), a[e] = JSON.parse(a.backs[e]), a.update[e] = 1
          }
        }
        static saveData() {
          for (let s = 0; s < a.texts.length; s++) {
            var e = a.texts[s],
              o = JSON.stringify(a[e]);
            o != a.jsonstr[e] && (a.jsonstr[e] = o, a.update[e] += 1, n.localStorage.setItem(a.gameKey + e, o))
          }
          return !1
        }
        static addNewData() {
          a.base.zpNum || (a.base.zpNum = 0), a.base.jashuTime || (a.base.jashuTime = 0), a.combmInfo.depOpen || (a.combmInfo.depOpen = [])
        }
      }
      e("ZGGSSqlMyg", a), a.backs = {}, a.update = {}, a.server = {}, a.jsonstr = {}, a.cache = {
        timeStop: !1,
        yindaoStop: !1,
        sec: 0,
        isTufa: !1,
        isXgn: !1,
        cjCheckType: {},
        bmcomType: 0,
        tufaCheck: {},
        shangzhanRed: !0,
        shangzhanActRed: !1,
        zpNumMax: 5
      }, a.ALLWORKER = {}, a.DIRECTORADD = 0, a.SECRETARYADD = 0, a.ALLDEPT = {}, a.TOTALEARN = 0, a.ALLDEPTEXP = {}, a.sysId = 0, a.gameKey = "zgsgs_", a.texts = ["sysId", "config", "base", "youjian", "maJianli", "yjIds", "yindao", "sortType", "zichanInfo", "peixunInfo", "workInfo2", "workInfo3", "likeInfo", "companyInfo", "upEduInfo", "yindaoSp", "bluJi", "chahuahui", "huodong", "chaopiaosub", "jieusoRed", "chargeInfo", "fuliInfo", "saveCName", "workInfo1", "combmInfo", "shangzhanInfo", "cjInfo", "chucaiInfo", "zpInfp", "jsInfo", "shebeiInfo", "qiandaoInfo", "shichangInfo", "kaoheInfo", "pingjiaInfo", "chuangyeInfo"], a.config = {
        uid: "",
        defaultUrl: "",
        firstTime: (new Date).valueOf(),
        versionNumber: "0,0,0",
        strmp: "",
        loadingTxt: "",
        isOpenMusic: 1,
        isOpenEffect: 1,
        isOpenEffectEmot: 1,
        guideId: 0,
        loginCount: 1,
        isPinFen: !1,
        companyName: "",
        duihuanmaList: [],
        checkTxt: 1,
        outTime: (new Date).valueOf(),
        onlineTime: 0,
        qudao: 99,
        openZc: 0
      }, a.base = {
        gold: 1e3,
        diamond: 100,
        jinka: 20,
        openIcon: [],
        year: 0,
        month: 1,
        day: 1,
        week: 1,
        sec: 60,
        stopGame: !0,
        suofang: 60,
        gmPack: 0,
        PackKey: 0,
        name: "",
        pingfen: 0,
        atkSpeed: 1,
        dayCount: 1,
        lastMOnth: 0,
        msZp: 0,
        dsZp: 0,
        glywZp: 0,
        ccFst: 0,
        szFst: 0,
        zpNum: 0,
        wxNew: 1,
        jashuTime: 0
      }, a.yindao = {}, a.youjian = {
        arr1: [],
        arr2: []
      }, a.yjIds = {
        objs: {}
      }, a.sortType = {
        shichangSort: 3,
        shichangSet: 3,
        shangzhanSort: 1,
        kaoheSort: 3,
        kaoheSet: 3,
        shangwuSort: 1,
        chucaiSort: 1,
        shenzao: 1,
        hangyefenghuiSort: 1
      }, a.maJianli = {}, a.fuliInfo = {
        objs: {},
        obj: {
          id: 0,
          lv: 1
        }
      }, a.zichanInfo = {
        objs: {},
        obj: {
          id: 0,
          lock: 0,
          lv: 0,
          add: 0
        }
      }, a.peixunInfo = {
        order: 0
      }, a.likeInfo = {
        weekInfo: {},
        monthInfo: {}
      }, a.companyInfo = {
        lastUp: {},
        upArr: [],
        upLv: [],
        jili: 0,
        xiyan: 0,
        wczc: 0,
        gwtz: 0,
        tj: 0,
        swjd: 0,
        wccc: 0,
        szy: 0,
        wcsz: 0,
        sytp: 0
      }, a.upEduInfo = {
        arr: [],
        obj: {
          tabId: 0,
          day: 0,
          pos: []
        }
      }, a.yindaoSp = {
        zp1: 0
      }, a.bluJi = {
        abUm: 0
      }, a.chahuahui = {
        open: 0,
        kaiqiTime: 31,
        state: 0,
        count: 0,
        endTime: 0,
        award: "",
        state2: 0,
        id: 0,
        cd: 7200,
        cd1: 300,
        time: 0,
        openComment: 0,
        huanqitype: 0
      }, a.huodong = {
        info: [],
        infoRed: []
      }, a.chargeInfo = {
        objs: {},
        obj: {
          id: 0,
          day: 0,
          add: 0,
          gold: 0
        },
        chufa: 0
      }, a.chuangyeInfo = {
        objs: {},
        obj: {
          id: 0,
          tabId: 0,
          name: "",
          sprId: "",
          CName: "",
          lv: 1,
          renshu: 0,
          ss: 0,
          income: 0,
          xjl: 0,
          hb: 0,
          month: 6,
          ljhb: 0,
          bMoney: 0,
          new: 0
        }
      }, a.saveCName = {
        objs: {}
      }, a.peizhi0514 = {
        first: 0,
        speed: 0,
        video: 0,
        battle: 0,
        equip: 0,
        shichang: 0,
        zichan: 0,
        kaohe: 0,
        offline: 0
      }, a.combmInfo = {
        objs: {},
        obj: {
          id: 0,
          depId: 0,
          depLv: 1,
          workId: 0,
          comArr: [],
          workArr: []
        },
        depOpen: []
      }, a.workInfo1 = {
        objs: {},
        obj: {
          id: 0,
          name: "",
          sex: 1,
          sprId: "2002aa",
          postId: 0,
          depId: 0,
          jobId: 1,
          exp: 0,
          amb: 0,
          pot: 0,
          edu: 0,
          eva: 0,
          chucai: 0,
          qianAdd: 0,
          makeAdd: 0,
          shichangPos: [0, 0, 0, 0, 0, 0],
          kaohePos: 0,
          join: 0,
          isEdu: 0,
          iPot: 0,
          iAmb: 0
        },
        sysId: 1
      }, a.workInfo2 = {
        objs: {},
        obj: {
          id: 0,
          att: 0,
          hp: 0,
          def: 0,
          speed: 0,
          iAtt: 0,
          iHp: 0,
          iDef: 0,
          iSpeed: 0
        }
      }, a.workInfo3 = {
        objs: {},
        obj: {
          id: 0,
          pinzhi: [],
          yongpin: "",
          ypNum: "",
          add: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
          },
          chaonengli: [],
          chaoAdd: 0
        }
      }, a.shangzhanInfo = {
        lv: 0,
        curInfo: {
          id: 0,
          spr: "",
          nextSpr: "",
          fightInfo: []
        },
        battleInfo: {}
      }, a.cjInfo = {
        lockCj: {
          1: [],
          2: [],
          3: [],
          4: [],
          5: [],
          6: []
        },
        cjlv: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0
        },
        timeCj: {},
        stateCj: [],
        zhibo: [],
        videoCount: 0,
        zxTimeCount: 0,
        roleCount: 0
      }, a.chucaiInfo = {
        ccInfo: []
      }, a.zpInfp = {
        workInfo: {}
      }, a.chaopiaosub = {
        day: 0,
        num: 0
      }, a.jieusoRed = {
        objs: {},
        count: {
          1: {},
          2: {},
          3: {},
          4: {},
          5: 0,
          6: 0,
          7: 0,
          9: 0
        }
      }, a.jsInfo = {
        info: [],
        cyInfo: []
      }, a.shebeiInfo = {
        objs: {},
        obj: {
          id: 0,
          lock: 1,
          pos: [0, 0, 0, 0, 0, 0, 0],
          use: [0, 0, 0, 0, 0, 0, 0],
          add: 0
        },
        count: 0
      }, a.qiandaoInfo = {
        day: 1,
        award: [0, 0, 0, 0, 0, 0, 0, 0],
        award2: [0, 0, 0, 0, 0, 0, 0, 0]
      }, a.shichangInfo = {
        objs: {},
        rolelock: [],
        obj: {
          lock: 0,
          id: 0,
          lv: 1,
          num: []
        }
      }, a.kaoheInfo = {
        objs: {},
        rolelock: [],
        obj: {
          id: 0,
          lock: 0,
          lv: 1,
          num: []
        }
      }, a.pingjiaInfo = {
        titId: 1
      }, o._RF.pop()
    }
  }
}));