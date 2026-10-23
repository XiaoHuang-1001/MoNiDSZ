# -*- coding: utf-8 -*-
"""验证 .jsc 长度字格式：原版能逐字节还原，改内容后也能被正确解回"""
import sys, struct, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
import build_apk
from build_apk import xxtea_decrypt, xxtea_encrypt, _btea_decrypt

z = zipfile.ZipFile(r"C:\Users\20905\Downloads\dszmnq_247960.apk")
enc = z.read("assets/assets/main/index.jsc")
plain = xxtea_decrypt(enc)
print("解密后正文长度", len(plain), "结尾", repr(plain[-12:]))
again = xxtea_encrypt(plain)
print("重新加密与原版逐字节一致:", again == enc, len(again), len(enc))

mod = plain + b"\n// patch test\n"
e2 = xxtea_encrypt(mod)
raw = _btea_decrypt(e2)
lw = struct.unpack_from("<I", raw, len(raw) - 4)[0]
print("改内容: 密文", len(e2), "长度字", lw, "正文实际", len(mod), "一致:", lw == len(mod))
print("解回一致:", xxtea_decrypt(e2) == mod)
