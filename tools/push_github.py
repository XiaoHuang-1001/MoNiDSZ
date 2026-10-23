# -*- coding: utf-8 -*-
"""把工程源码增量推送到 GitHub（本机没有 git 时用 GitHub Git Data API 代替）。

用法：
    python tools/push_github.py                 # 增量推送（只上传变化的文件）
    python tools/push_github.py --message "..."  # 自定义提交说明
    python tools/push_github.py --dry-run        # 只看会变动哪些文件

凭据：从 Windows 凭据管理器读取 `git:https://github.com`（Git Credential Manager 存的
      OAuth token / PAT），也支持环境变量 GITHUB_TOKEN 优先覆盖。token 不会打印、不落盘。

仓库默认 XiaoHuang-1001/MoNiDSZ，可用 --owner/--repo/--branch 覆盖。

入库规则（与 .gitignore 一致，白名单式）：
    源码/modules/**、源码/*.md、tools/*（保留扩展名）、docs/**
不包含：原版 APK、解包资源、build/、node_modules、keystore、解密中间产物。
"""
import argparse
import base64
import ctypes
import ctypes.wintypes as wt
import hashlib
import json
import os
import sys
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
API = "https://api.github.com"

KEEP_EXT = {".py", ".js", ".mjs", ".ps1", ".cmd", ".json", ".yaml", ".md", ".txt"}


# ────────────────────────── 文件清单 ──────────────────────────
def collect():
    """返回 {仓库内路径: 绝对路径}。"""
    out = {}

    mod = ROOT / "源码" / "modules"
    for p in sorted(mod.rglob("*")):
        if p.is_file():
            out["源码/modules/" + p.relative_to(mod).as_posix()] = p

    for name in ("模块清单.md", "方案A-分公司层-改造说明.md"):
        p = ROOT / "源码" / name
        if p.exists():
            out["源码/" + name] = p

    for p in sorted((ROOT / "tools").iterdir()):
        if p.is_file() and p.suffix.lower() in KEEP_EXT:
            out["tools/" + p.name] = p

    for p in sorted(ROOT.glob("董事长模拟器-最大架构图-*")):
        if p.is_file():
            out["docs/" + p.name] = p
    if (ROOT / "README-出包规矩.md").exists():
        out["docs/出包规矩.md"] = ROOT / "README-出包规矩.md"
    docs = ROOT / "docs"
    if docs.is_dir():
        for p in sorted(docs.rglob("*")):
            if p.is_file():
                out["docs/" + p.relative_to(docs).as_posix()] = p

    for name in ("README.md", ".gitignore"):
        p = ROOT / name
        if p.exists():
            out[name] = p

    # 原版解包资源：图片/音频/配置/Android res。
    # lib/ 与 *.dex 排除，因为 libcocos.so 单文件 194MB，超过 GitHub 100MB 单文件限制。
    apk = ROOT / "apk"
    if apk.is_dir():
        for p in sorted(apk.rglob("*")):
            if not p.is_file():
                continue
            rel = p.relative_to(ROOT).as_posix()
            if rel.startswith("apk/lib/") or p.suffix.lower() == ".dex":
                continue
            out[rel] = p

    res = ROOT / "资源"
    if res.is_dir():
        for p in sorted(res.rglob("*")):
            if p.is_file():
                out["资源/" + p.relative_to(res).as_posix()] = p
    return out


# ────────────────────────── 认证 ──────────────────────────
class CREDENTIAL(ctypes.Structure):
    _fields_ = [
        ("Flags", wt.DWORD), ("Type", wt.DWORD), ("TargetName", wt.LPWSTR),
        ("Comment", wt.LPWSTR), ("LastWritten", wt.FILETIME),
        ("CredentialBlobSize", wt.DWORD), ("CredentialBlob", ctypes.POINTER(ctypes.c_byte)),
        ("Persist", wt.DWORD), ("AttributeCount", wt.DWORD), ("Attributes", ctypes.c_void_p),
        ("TargetAlias", wt.LPWSTR), ("UserName", wt.LPWSTR),
    ]


def read_token():
    env = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    if env:
        return env.strip()
    advapi32 = ctypes.WinDLL("advapi32", use_last_error=True)
    for target in ("git:https://github.com", "git:https://XiaoHuang-1001@github.com"):
        p = ctypes.POINTER(CREDENTIAL)()
        if not advapi32.CredReadW(ctypes.c_wchar_p(target), 1, 0, ctypes.byref(p)):
            continue
        c = p.contents
        blob = ctypes.string_at(c.CredentialBlob, c.CredentialBlobSize)
        advapi32.CredFree(p)
        tok = blob.decode("utf-16-le", "ignore").strip("\x00").strip()
        if tok:
            return tok
    raise SystemExit("找不到 GitHub 凭据：请设置环境变量 GITHUB_TOKEN，或在 git 凭据管理器里保存 token")


def api(path, method="GET", payload=None, token=None, tries=5):
    url = path if path.startswith("http") else API + path
    body = json.dumps(payload).encode() if payload is not None else None
    for attempt in range(tries):
        req = urllib.request.Request(url, data=body, method=method)
        req.add_header("Authorization", "Bearer " + token)
        req.add_header("Accept", "application/vnd.github+json")
        req.add_header("User-Agent", "dsh-agent")
        if body:
            req.add_header("Content-Type", "application/json")
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return json.loads(r.read().decode() or "{}")
        except urllib.error.HTTPError as e:
            detail = e.read().decode(errors="replace")[:300]
            if e.code in (403, 429, 500, 502, 503, 504) and attempt < tries - 1:
                time.sleep(2 * (attempt + 1))
                continue
            raise SystemExit(f"{method} {url} 失败 -> HTTP {e.code}: {detail}")
        except urllib.error.URLError:
            if attempt == tries - 1:
                raise
            time.sleep(2 * (attempt + 1))
    raise SystemExit(f"{method} {url} 失败")


# ────────────────────────── 主流程 ──────────────────────────
def git_blob_sha(data):
    h = hashlib.sha1()
    h.update(b"blob %d\0" % len(data))
    h.update(data)
    return h.hexdigest()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--owner", default="XiaoHuang-1001")
    ap.add_argument("--repo", default="MoNiDSZ")
    ap.add_argument("--branch", default="main")
    ap.add_argument("--message", default=None)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    token = read_token()
    files = collect()
    total = sum(p.stat().st_size for p in files.values())
    print(f"本地待入库: {len(files)} 个文件, {total/1024/1024:.2f} MB")

    # 远端现状
    head = None
    try:
        ref = api(f"/repos/{args.owner}/{args.repo}/git/ref/heads/{args.branch}", token=token)
        head = ref["object"]["sha"]
    except SystemExit:
        print("  远端分支不存在（空仓库），将创建首个提交")
    remote = {}
    if head:
        t = api(f"/repos/{args.owner}/{args.repo}/git/trees/{head}?recursive=1", token=token)
        remote = {e["path"]: (e["sha"], e.get("size", 0)) for e in t["tree"] if e["type"] == "blob"}

    # 逐文件比对
    entries, changed, uploads = [], [], []
    for rel, path in sorted(files.items()):
        data = path.read_bytes()
        sha = git_blob_sha(data)
        entries.append({"path": rel, "mode": "100644", "type": "blob", "sha": sha})
        r = remote.get(rel)
        if r is None:
            changed.append(("新增", rel))
            uploads.append((rel, data))
        elif r[0] != sha:
            changed.append(("修改", rel))
            uploads.append((rel, data))
        else:
            continue

    deleted = sorted(set(remote) - set(files))
    for rel in deleted:
        changed.append(("删除", rel))
        entries.append({"path": rel, "mode": "100644", "type": "blob", "sha": None})

    if not changed:
        print("远端已是最新，无需提交")
        return

    print(f"变动 {len(changed)} 个（新增/修改 {len(uploads)}，删除 {len(deleted)}）:")
    for kind, rel in changed[:40]:
        print(f"  {kind}  {rel}")
    if len(changed) > 40:
        print(f"  ... 还有 {len(changed)-40} 个")

    if args.dry_run:
        print("dry-run：不提交")
        return

    print("上传 blob ...")
    shas = {}

    def up(item):
        rel, data = item
        res = api(f"/repos/{args.owner}/{args.repo}/git/blobs", "POST", {
            "content": base64.b64encode(data).decode(), "encoding": "base64"}, token=token)
        shas[rel] = res["sha"]

    with ThreadPoolExecutor(max_workers=8) as ex:
        list(ex.map(up, uploads))
    for e in entries:
        if e["sha"] is None:
            continue
        e["sha"] = shas.get(e["path"], e["sha"])

    tree = api(f"/repos/{args.owner}/{args.repo}/git/trees", "POST",
               {"tree": entries}, token=token)
    msg = args.message or f"chore: 同步源码 {len(changed)} 个文件"
    commit = api(f"/repos/{args.owner}/{args.repo}/git/commits", "POST", {
        "message": msg, "tree": tree["sha"], "parents": [head] if head else []}, token=token)
    if head:
        api(f"/repos/{args.owner}/{args.repo}/git/refs/heads/{args.branch}", "PATCH",
            {"sha": commit["sha"], "force": False}, token=token)
    else:
        api(f"/repos/{args.owner}/{args.repo}/git/refs", "POST",
            {"ref": f"refs/heads/{args.branch}", "sha": commit["sha"]}, token=token)
    print(f"完成: {commit['sha']}")
    print(f"https://github.com/{args.owner}/{args.repo}/commit/{commit['sha']}")


if __name__ == "__main__":
    main()
