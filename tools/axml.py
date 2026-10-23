# -*- coding: utf-8 -*-
"""最小化二进制 AndroidManifest（AXML）读写：只改 versionCode / versionName。

- versionCode 是 manifest 节点属性里的一个 TYPE_INT_DEC 值，原位改 4 字节；
- versionName 是字符串池里的一条，改完重建字符串池（其余 chunk 的偏移都是相对的，不受影响）。
"""
import struct

RES_XML_TYPE = 0x0003
RES_STRING_POOL_TYPE = 0x0001
RES_XML_START_ELEMENT_TYPE = 0x0102
TYPE_STRING = 0x03
TYPE_INT_DEC = 0x10
UTF8_FLAG = 1 << 8


def _u16(b, o):
    return struct.unpack_from("<H", b, o)[0]


def _u32(b, o):
    return struct.unpack_from("<I", b, o)[0]


def _enc_len_utf8(n):
    if n > 0x7F:
        return bytes([(n >> 8) | 0x80, n & 0xFF])
    return bytes([n])


def _dec_len_utf8(b, o):
    n = b[o]
    if n & 0x80:
        return ((n & 0x7F) << 8) | b[o + 1], o + 2
    return n, o + 1


def parse_pool(data):
    """返回 (strings, flags, pool_end, rebuild_fn)"""
    assert _u16(data, 0) == RES_STRING_POOL_TYPE, "not a string pool"
    header_size = _u16(data, 2)
    size = _u32(data, 4)
    count = _u32(data, 8)
    style_count = _u32(data, 12)
    flags = _u32(data, 16)
    strings_start = _u32(data, 20)
    utf8 = bool(flags & UTF8_FLAG)
    offsets = [_u32(data, header_size + 4 * i) for i in range(count)]
    strings = []
    for off in offsets:
        p = strings_start + off
        if utf8:
            _, p = _dec_len_utf8(data, p)
            blen, p = _dec_len_utf8(data, p)
            strings.append(data[p:p + blen].decode("utf-8", "replace"))
        else:
            n = _u16(data, p)
            p += 2
            if n & 0x8000:
                n = ((n & 0x7FFF) << 16) | _u16(data, p)
                p += 2
            strings.append(data[p:p + 2 * n].decode("utf-16-le", "replace"))
    return strings, utf8, header_size + 4 * count + 4 * style_count, size


def build_pool(strings, utf8, style_count=0):
    body = b""
    offsets = []
    for s in strings:
        offsets.append(len(body))
        if utf8:
            b = s.encode("utf-8")
            body += _enc_len_utf8(len(s)) + _enc_len_utf8(len(b)) + b + b"\x00"
        else:
            b = s.encode("utf-16-le")
            n = len(s)
            body += (struct.pack("<H", n) if n < 0x8000
                     else struct.pack("<HH", 0x8000 | (n >> 16), n & 0xFFFF)) + b + b"\x00\x00"
    header_size = 28
    strings_start = header_size + 4 * len(strings) + 4 * style_count
    body += b"\x00" * ((-(strings_start + len(body))) % 4)  # 4 字节对齐
    size = strings_start + len(body)
    # styles 区留空
    return (struct.pack("<HHI", RES_STRING_POOL_TYPE, header_size, size) +
            struct.pack("<IIIII", len(strings), style_count, UTF8_FLAG if utf8 else 0,
                        strings_start, 0 if style_count == 0 else size) +
            b"".join(struct.pack("<I", o) for o in offsets) +
            body)


def _iter_chunks(data, start):
    p = start
    while p + 8 <= len(data):
        ctype = _u16(data, p)
        hsize = _u16(data, p + 2)
        csize = _u32(data, p + 4)
        if csize < 8 or p + csize > len(data):
            break
        yield p, ctype, hsize, csize
        p += csize


def _manifest_attrs(data, pool_strings):
    """返回 [(attr_file_offset, name, typed_off)]，只针对 <manifest> 节点"""
    pool_end_placeholder = None
    # 找到字符串池之后的第一个 start element，其 name 必须是 "manifest"
    p = 8
    chunks = list(_iter_chunks(data, 8))
    for idx, (off, ctype, hsize, csize) in enumerate(chunks):
        if ctype == RES_XML_START_ELEMENT_TYPE:
            name_idx = _u32(data, off + 16 + 4)
            if pool_strings[name_idx] != "manifest":
                continue
            attr_start = _u16(data, off + 16 + 8)
            attr_size = _u16(data, off + 16 + 10)
            attr_count = _u16(data, off + 16 + 12)
            base = off + 16 + attr_start
            out = []
            for i in range(attr_count):
                a = base + i * attr_size
                nm = pool_strings[_u32(data, a + 4)]
                out.append((a, nm))
            return out
    return []


def read_version(data):
    strings, utf8, pool_end, pool_size = parse_pool(data[8:])
    attrs = _manifest_attrs(data, strings)
    code = name = None
    for a, nm in attrs:
        if nm == "versionCode":
            code = _u32(data, a + 16)
        elif nm == "versionName":
            idx = _u32(data, a + 8)  # rawValue
            if idx == 0xFFFFFFFF:
                idx = _u32(data, a + 16)
            name = strings[idx]
    return code, name


def set_version(data, code=None, name=None):
    data = bytearray(data)
    strings, utf8, pool_end, pool_size = parse_pool(data[8:])
    attrs = _manifest_attrs(data, strings)

    name_idx = None
    code_off = None
    for a, nm in attrs:
        if nm == "versionCode":
            code_off = a
        elif nm == "versionName":
            idx = _u32(data, a + 8)
            if idx == 0xFFFFFFFF:
                idx = _u32(data, a + 16)
            name_idx = idx

    body = data[8:]
    if code is not None:
        if code_off is None:
            raise RuntimeError("versionCode attribute not found")
        struct.pack_into("<I", data, code_off + 16, code)
        body = data[8:]

    if name is not None:
        if name_idx is None:
            raise RuntimeError("versionName attribute not found")
        strings[name_idx] = name
        new_pool = build_pool(strings, utf8)
        rest = body[pool_size:]
        body = new_pool + rest

    total = 8 + len(body)
    return bytes(struct.pack("<HHI", RES_XML_TYPE, 8, total) + body)


def _attrs_of(data, strings, elem_name):
    for off, ctype, hsize, csize in _iter_chunks(data, 8):
        if ctype != RES_XML_START_ELEMENT_TYPE:
            continue
        if strings[_u32(data, off + 16 + 4)] != elem_name:
            continue
        attr_start = _u16(data, off + 16 + 8)
        attr_size = _u16(data, off + 16 + 10)
        attr_count = _u16(data, off + 16 + 12)
        base = off + 16 + attr_start
        return [(base + i * attr_size, strings[_u32(data, base + i * attr_size + 4)])
                for i in range(attr_count)]
    return []


def set_label(data, label):
    """把 <application android:label> 改成字面量字符串（图标下显示的名字）"""
    buf = bytearray(data)
    strings, utf8, _, pool_size = parse_pool(bytes(buf[8:]))
    attrs = dict((nm, a) for a, nm in _attrs_of(bytes(buf), strings, "application"))
    if "label" not in attrs:
        raise RuntimeError("<application android:label> not found")
    a = attrs["label"]
    idx = strings.index(label) if label in strings else len(strings)
    if idx == len(strings):
        strings.append(label)
    struct.pack_into("<I", buf, a + 8, idx)     # rawValue -> 字符串池索引
    struct.pack_into("<H", buf, a + 12, 8)      # typedValue.size
    buf[a + 14] = 0
    buf[a + 15] = TYPE_STRING
    struct.pack_into("<I", buf, a + 16, idx)    # typedValue.data
    new_pool = build_pool(strings, utf8)
    body = bytes(buf[8 + pool_size:])
    return bytes(struct.pack("<HHI", RES_XML_TYPE, 8, 8 + len(new_pool) + len(body)) + new_pool + body)


def read_label(data):
    strings, utf8, _, _ = parse_pool(data[8:])
    for a, nm in _attrs_of(data, strings, "application"):
        if nm == "label":
            dt = data[a + 15]
            if dt == TYPE_STRING:
                return strings[_u32(data, a + 16)]
            return "@ref:0x%08x" % _u32(data, a + 16)
    return None


RES_XML_END_ELEMENT_TYPE = 0x0103
RES_XML_RESOURCE_MAP_TYPE = 0x0180


def _elements(data, strings):
    """返回 [(tag, start, end_start, end_exclusive)]，内层在前"""
    stack, out = [], []
    for off, ctype, hsize, csize in _iter_chunks(data, 8):
        if ctype == RES_STRING_POOL_TYPE or ctype == RES_XML_RESOURCE_MAP_TYPE:
            continue
        if ctype == RES_XML_START_ELEMENT_TYPE:
            stack.append([strings[_u32(data, off + 16 + 4)], off])
        elif ctype == RES_XML_END_ELEMENT_TYPE:
            nm = strings[_u32(data, off + 16 + 4)]
            if stack and stack[-1][0] == nm:
                tag, s = stack.pop()
                out.append((tag, s, off, off + csize))
    return out


def _attr_value(data, strings, elem_off, key):
    attr_start = _u16(data, elem_off + 16 + 8)
    attr_size = _u16(data, elem_off + 16 + 10)
    attr_count = _u16(data, elem_off + 16 + 12)
    base = elem_off + 16 + attr_start
    for i in range(attr_count):
        a = base + i * attr_size
        if strings[_u32(data, a + 4)] != key:
            continue
        raw = _u32(data, a + 8)
        idx = raw if raw != 0xFFFFFFFF else _u32(data, a + 16)
        return strings[idx]
    return None


def move_launcher(data, target_activity, launcher_activity=None):
    """把 MAIN/LAUNCHER intent-filter 从 SDK 开屏页搬到目标 Activity（cocos 的 AppActivity）"""
    strings, utf8, _, pool_size = parse_pool(data[8:])
    elems = _elements(data, strings)

    def name_of(s):
        return _attr_value(data, strings, s, "name")

    acts = [(s, es, ee) for tag, s, es, ee in elems if tag == "activity"]
    filters = [(s, es, ee) for tag, s, es, ee in elems if tag == "intent-filter"]

    chosen = None
    for fs, fes, fee in filters:
        has_main = any(tag == "action" and fs <= s < fee
                       and name_of(s) == "android.intent.action.MAIN"
                       for tag, s, es, ee in elems)
        if not has_main:
            continue
        for s, es, ee in acts:
            if s < fs < ee:
                if launcher_activity and name_of(s) != launcher_activity:
                    continue
                chosen = (fs, fes, fee)
                break
        if chosen:
            break
    if not chosen:
        raise RuntimeError("找不到带 MAIN 的 intent-filter")

    target = None
    for s, es, ee in acts:
        if name_of(s) == target_activity:
            target = (s, es, ee)
            break
    if not target:
        raise RuntimeError("找不到目标 Activity: " + target_activity)

    f_s, f_es, f_e = chosen
    t_s, t_es, t_e = target
    if t_es > f_s:
        raise RuntimeError("目标 Activity 在开屏页之后，未支持")

    block = data[f_s:f_e]
    out = data[:t_es] + block + data[t_es:f_s] + data[f_e:]
    return bytes(struct.pack("<HHI", RES_XML_TYPE, 8, len(out)) + out[8:])


def set_element_label(data, elem_tag, elem_name, label):
    """把某个组件（如 activity）的 android:label 改成字面量字符串"""
    buf = bytearray(data)
    strings, utf8, _, pool_size = parse_pool(bytes(buf[8:]))
    elems = _elements(bytes(buf), strings)
    target = None
    for tag, s, es, ee in elems:
        if tag == elem_tag and _attr_value(bytes(buf), strings, s, "name") == elem_name:
            target = s
            break
    if target is None:
        raise RuntimeError("找不到组件 %s/%s" % (elem_tag, elem_name))
    attr_start = _u16(buf, target + 16 + 8)
    attr_size = _u16(buf, target + 16 + 10)
    attr_count = _u16(buf, target + 16 + 12)
    base = target + 16 + attr_start
    a = None
    for i in range(attr_count):
        off = base + i * attr_size
        if strings[_u32(buf, off + 4)] == "label":
            a = off
            break
    if a is None:
        raise RuntimeError("组件没有 label 属性")
    idx = strings.index(label) if label in strings else len(strings)
    if idx == len(strings):
        strings.append(label)
    struct.pack_into("<I", buf, a + 8, idx)
    struct.pack_into("<H", buf, a + 12, 8)
    buf[a + 14] = 0
    buf[a + 15] = TYPE_STRING
    struct.pack_into("<I", buf, a + 16, idx)
    new_pool = build_pool(strings, utf8)
    body = bytes(buf[8 + pool_size:])
    return bytes(struct.pack("<HHI", RES_XML_TYPE, 8, 8 + len(new_pool) + len(body)) + new_pool + body)


if __name__ == "__main__":
    import sys
    from pathlib import Path
    sys.path.insert(0, str(Path(__file__).resolve().parent))
    import zipfile
    if len(sys.argv) < 2:
        print("usage: axml.py <apk>")
        raise SystemExit(1)
    with zipfile.ZipFile(sys.argv[1]) as z:
        mf = z.read("AndroidManifest.xml")
    print("versionCode, versionName =", read_version(mf))
