# -*- coding: utf-8 -*-
"""在原版 APK 上原位替换若干条目（bundle / main.js / AndroidManifest），保持其余条目不变。

用法: python pack_original.py <原版.apk> <输出.apk> [AndroidManifest.xml路径]
"""
import shutil
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
NEW_JSC = ROOT / "apk" / "assets" / "assets" / "main" / "index.jsc"
NEW_MAIN_JS = ROOT / "apk" / "assets" / "main.js"
TARGET = "assets/assets/main/index.jsc"
TARGET_MAIN = "assets/main.js"
SIG_EXT = (".sf", ".rsa", ".dsa", ".ec")


def pack(src: Path, dst: Path, extra: dict | None = None):
    overrides = {
        TARGET: NEW_JSC.read_bytes(),
        TARGET_MAIN: NEW_MAIN_JS.read_bytes(),
    }
    if extra:
        overrides.update(extra)
    n = 0
    with zipfile.ZipFile(src) as zi, zipfile.ZipFile(dst, "w", allowZip64=True) as zo:
        for info in zi.infolist():
            name = info.filename
            low = name.lower()
            if low.startswith("meta-inf/") and (low.endswith(SIG_EXT) or low.endswith("manifest.mf")):
                continue  # 丢掉旧签名
            data = overrides.get(name)
            zi_new = zipfile.ZipInfo(name, info.date_time)
            zi_new.compress_type = info.compress_type
            zi_new.external_attr = info.external_attr
            zi_new.internal_attr = info.internal_attr
            zi_new.create_system = info.create_system
            if data is None:
                with zi.open(name) as r, zo.open(zi_new, "w") as w:
                    shutil.copyfileobj(r, w, 1 << 20)
            else:
                zo.writestr(zi_new, data)
            n += 1
    print("packed %d entries -> %s (%.1f MB)" % (n, dst, dst.stat().st_size / 1048576))


if __name__ == "__main__":
    extra = {}
    if len(sys.argv) > 3:
        extra["AndroidManifest.xml"] = Path(sys.argv[3]).read_bytes()
    pack(Path(sys.argv[1]), Path(sys.argv[2]), extra)
