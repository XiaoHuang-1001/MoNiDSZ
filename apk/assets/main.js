// —— DSH 启动诊断（v2）：引擎一启动就在屏幕上显示状态，同时把日志写到真正能写的地方 ——
// 关键教训：targetSdk=30 时应用无权写 /sdcard/Download，第一个路径失败后不能 break，
//          否则连可写目录都不会写 → “哪里都没有日志”。
(function () {
    var f = null;
    try { f = (typeof jsb !== "undefined" && jsb.fileUtils) ? jsb.fileUtils : null; } catch (e) {}

    // 按“最可能可写”排序：应用专属外部目录 > 可写路径(内部) > Download(通常被拒)
    var DIRS = [
        "/storage/emulated/0/Android/data/com.sky.dsz.dsh/files",
        "/sdcard/Android/data/com.sky.dsz.dsh/files"
    ];
    var EXTRA = [];
    try { var wp = f && f.getWritablePath(); if (wp) EXTRA.push(wp); } catch (e) {}
    var FILES = [];
    for (var i = 0; i < DIRS.length; i++) FILES.push({ p: DIRS[i] + "/dsh_log.txt", ok: null });
    for (var j = 0; j < EXTRA.length; j++) FILES.push({ p: EXTRA[j] + "dsh_log.txt", ok: null });
    FILES.push({ p: "/storage/emulated/0/Download/dsh_log.txt", ok: null });

    var buf = "";
    var written = [];

    function stamp() {
        var d = new Date();
        try { return d.toTimeString().substr(0, 8); } catch (e) { return ""; }
    }

    function flush() {
        if (!f) return;
        for (var k = 0; k < FILES.length; k++) {
            var it = FILES[k];
            try {
                var ok = f.writeStringToFile(buf, it.p);
                if (ok === false) { it.ok = false; continue; }
                it.ok = true;
                if (written.indexOf(it.p) < 0) written.push(it.p);
            } catch (e) { it.ok = false; }
        }
    }

    var LOG = function (msg) {
        try { buf += "[" + stamp() + "] " + msg + "\n"; } catch (e) {}
        flush();
        // 同步打到 logcat（adb logcat -s DSHBOOT:* 可直接看到）
        try { console.log("[DSHBOOT] " + msg); } catch (e) {}
    };

    window.__dshlog = LOG;
    window.__dshlogPath = FILES[0].p;
    window.__dshFiles = function () { return written.slice(); };
    window.__dshTail = function (n) { return buf.split("\n").slice(-(n || 8)).join("\n"); };
    window.__dshBuf = function () { return buf; };

    LOG("boot: fileUtils=" + !!f + " writable=" + (EXTRA[0] || "?"));

    try {
        var oe = console.error;
        var errCount = {};
        console.error = function () {
            try {
                var msg = Array.prototype.slice.call(arguments).join(" ");
                // 同一个错误最多记 5 次，避免刷屏把 logcat 缓冲冲掉
                errCount[msg] = (errCount[msg] || 0) + 1;
                if (errCount[msg] <= 5) LOG("E " + msg);
            } catch (e) {}
            try { oe.apply(console, arguments); } catch (e) {}
        };
    } catch (e) {}

    try {
        if (window.addEventListener) {
            window.addEventListener("error", function (ev) {
                LOG("window.onerror: " + (ev && ev.message) + " @" + (ev && ev.filename) + ":" + (ev && ev.lineno));
            });
        }
    } catch (e) {}

    // —— 屏幕显示：优先挂到游戏自己的 Canvas，没有就在场景根上自建一个 UI + 相机 ——
    var overlay = null;

    function makeLabel(parent, name, fontSize, y, color) {
        var n = new window.__dshCC.Node(name);
        n.layer = parent.layer;
        n.addComponent(window.__dshCC.UITransform).setContentSize(900, 400);
        var l = n.addComponent(window.__dshCC.Label);
        l.fontSize = fontSize;
        l.lineHeight = fontSize + 6;
        l.overflow = window.__dshCC.Label.Overflow.SHRINK;
        l.horizontalAlign = window.__dshCC.Label.HorizontalAlign.LEFT;
        l.verticalAlign = window.__dshCC.Label.VerticalAlign.TOP;
        try { l.color = color; } catch (e) {}
        try { l.isBold = true; } catch (e) {}
        parent.addChild(n);
        try { n.setPosition(0, y, 0); } catch (e) {}
        return n;
    }

    window.__dshShow = function (text) {
        LOG("SHOW: " + String(text).replace(/\n/g, " / "));
        try {
            var cc = window.__dshCC;
            if (!cc || !cc.director || !cc.Node) return;
            var host = cc.find ? cc.find("Canvas") : null;
            if (!host) host = cc.director.getScene();
            if (!host) return;
            if (!overlay || !overlay.isValid) {
                overlay = makeLabel(host, "__dsh_err", 22, 260, new cc.Color(255, 60, 60, 255));
                try { overlay.setSiblingIndex(999999); } catch (e) {}
            }
            overlay.getComponent(cc.Label).string = String(text);
        } catch (e) {}
    };

    // —— 心跳：引擎活着就能看到秒数在动；引擎没起来则什么都看不到 ——
    var t0 = Date.now(), tickLabel = null, tick = 0;
    function beat() {
        try {
            var cc = window.__dshCC;
            if (!cc || !cc.director) return;
            var sc = cc.director.getScene();
            if (!sc) return;
            if (!tickLabel || !tickLabel.isValid) {
                var host = cc.find ? cc.find("Canvas") : null;
                if (!host) host = sc;
                tickLabel = makeLabel(host, "__dsh_tick", 20, 380, new cc.Color(80, 220, 120, 255));
                try { tickLabel.setSiblingIndex(999998); } catch (e) {}
            }
            var sec = ((Date.now() - t0) / 1000).toFixed(0);
            tickLabel.getComponent(cc.Label).string =
                "DSH 引擎运行 " + sec + "s  场景:" + (sc.name || "?") + "\n" +
                "日志: " + (written[0] || "未写出") + "\n" + window.__dshTail(6);
        } catch (e) {}
    }

    // —— 引擎就绪后才开始心跳 ——
    var beatTimer = null;
    window.__dshStartBeat = function () {
        if (beatTimer) return;
        LOG("beat start");
        beatTimer = setInterval(beat, 1000);
        beat();
    };
})();

// SystemJS support.
window.self = window;
require("src/system.bundle.js");

const importMapJson = jsb.fileUtils.getStringFromFile("src/import-map.json");
const importMap = JSON.parse(importMapJson);
System.warmup({
    importMap,
    importMapUrl: 'src/import-map.json',
    defaultHandler: (urlNoSchema) => {
        require(urlNoSchema.startsWith('/') ? urlNoSchema.substr(1) : urlNoSchema);
    },
});

window.__dshlog && window.__dshlog("system.bundle + import-map OK");

System.import('./src/application.js')
.then(({ Application }) => {
    window.__dshlog && window.__dshlog("application.js loaded");
    return new Application();
}).then((application) => {
    return System.import('cc').then((cc) => {
        window.__dshCC = cc;
        window.__dshlog && window.__dshlog("cc imported");
        require('jsb-adapter/engine-adapter.js');
        return application.init(cc);
    }).then(() => {
        window.__dshlog && window.__dshlog("application.init done -> start()");
        return application.start();
    });
}).then(() => {
    window.__dshlog && window.__dshlog("application.start resolved");
    try {
        var cc = window.__dshCC;
        cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            window.__dshlog && window.__dshlog("scene launched: " + (cc.director.getScene() || {}).name);
            window.__dshStartBeat();
        });
        cc.game.on(cc.Game.EVENT_ENGINE_INITED, function () {
            window.__dshlog && window.__dshlog("EVENT_ENGINE_INITED");
            window.__dshStartBeat();
        });
        window.__dshStartBeat();
    } catch (e) {}
}).catch((err) => {
    try { window.__dshlog && window.__dshlog("application Fatal: " + err + " | " + (err && err.stack)); } catch (e) {}
    try { window.__dshShow && window.__dshShow("引擎启动失败:\n" + err + "\n" + (err && err.stack ? String(err.stack).slice(0, 400) : "")); } catch (e) {}
    try { console.error(err.toString() + ', stack: ' + err.stack); } catch (e) {}
});
