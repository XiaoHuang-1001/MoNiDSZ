# -*- coding: utf-8 -*-
"""尺寸实验：把原版明文补空格到指定长度再加密打包，验证引擎是否有体积上限"""
import sys, zipfile, shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
from build_apk import xxtea_decrypt, xxtea_encrypt

ORIG = Path(r"C:\Users\20905\Downloads\dszmnq_247960.apk")
SIG = (".sf", ".rsa", ".dsa", ".ec")


def make(target_len: int, out: Path):
    with zipfile.ZipFile(ORIG) as z:
        enc = z.read("assets/assets/main/index.jsc")
    plain = xxtea_decrypt(enc)
    if target_len < len(plain):
        raise SystemExit("目标长度比原版还小")
    pad = target_len - len(plain)
    assert pad % 4 == 0, pad
    plain2 = plain + b" " * pad
    newjsc = xxtea_encrypt(plain2)
    assert len(newjsc) == target_len, (len(newjsc), target_len)

    with zipfile.ZipFile(ORIG) as zi, zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED, allowZip64=True) as zo:
        for info in zi.infolist():
            low = info.filename.lower()
            if low.startswith("meta-inf/") and (low.endswith(SIG) or low.endswith("manifest.mf")):
                continue
            ni = zipfile.ZipInfo(info.filename, info.date_time)
            ni.compress_type = info.compress_type
            ni.external_attr = info.external_attr
            ni.internal_attr = info.internal_attr
            ni.create_system = info.create_system
            if info.filename == "assets/assets/main/index.jsc":
                zo.writestr(ni, newjsc)
            else:
                with zi.open(info.filename) as r, zo.open(ni, "w") as w:
                    shutil.copyfileobj(r, w, 1 << 20)
    print("built", out.name, "jsc", target_len, "plain", len(plain2))


if __name__ == "__main__":
    size = int(sys.argv[1])
    out = Path(sys.argv[2])
    make(size, out)
