# Repack an unpacked APK directory into an unsigned APK.
# resources.arsc is STORED (Android 11+ rejects a compressed resources.arsc when
# targetSdkVersion >= 30); everything else is deflated like the original package.
import os
import shutil
import sys
import time
import zipfile

src, out = sys.argv[1], sys.argv[2]
files = []
for root, _dirs, names in os.walk(src):
    for n in names:
        files.append(os.path.join(root, n))
files.sort()

with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED, allowZip64=True) as z:
    for p in files:
        rel = os.path.relpath(p, src).replace("\\", "/")
        st = os.stat(p)
        zi = zipfile.ZipInfo(rel, time.localtime(st.st_mtime)[:6])
        zi.compress_type = zipfile.ZIP_STORED if rel == "resources.arsc" else zipfile.ZIP_DEFLATED
        zi.external_attr = 0o644 << 16
        with open(p, "rb") as f, z.open(zi, "w", force_zip64=False) as w:
            shutil.copyfileobj(f, w, 1024 * 1024)

print("repacked %d entries -> %s (%.1f MB)" % (len(files), out, os.path.getsize(out) / 1048576))
