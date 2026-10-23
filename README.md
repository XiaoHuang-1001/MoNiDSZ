# 董事长模拟器·分公司版（MoNiDSZ）

《董事长模拟器》Android 单机 MOD 的完整改造源码与出包工具链。

| 项 | 值 |
| --- | --- |
| 现版本 | **1.1.37**（versionCode **47**） |
| 包名 | `com.sky.dsz.dsh` |
| 底包 | 《董事长模拟器》v1.0.6（versionCode 7） |
| 引擎 | Cocos Creator 3.6.x（`assets/main/index.jsc`，脚本 XXTEA 加密） |
| 启动入口 | `com.cocos.game.AppActivity`（已绕过渠道 SDK 的 SplashActivity） |
| 出包 | `python tools/release.py` 一条命令，全自动 |

> 本仓库只放**源码与工具**。原版 APK、解包资源（立绘/音频/图片）、签名密钥与构建产物不入库，
> 见文末「不包含的内容」。

---

## 一、这个版本做了什么

相对原版 v1.0.6 的全部改动：

**组织架构**

- 新增**分公司层**：`董事长(1001) → 分公司一(1500) / 分公司二(1600) → 原六部门子树`。
  分公司二整棵子树 id +1000（1600 / 2101–2106 / 2201–2212 / 2301–2314 / 2401–2421）。
- 最大理论架构：**115 个部门 / 1067 个编制**，5 层（分公司 → 6 个一级 → 12 个二级 → 14 个三级 → 21 个小组）。
- 单分公司 56 个部门 / 525 个编制，两分公司完全镜像。

**市场**

- 34 个省级页签（替换原版「中/西/东/南/北」5 个大区）。
- **308 个城市**（293 地级市 + 4 直辖市 + 2 特别行政区 + 9 台湾城市），每个城市 6 级市场等级表（1848 行）。
  原版 60 条老 id 全部保留，4 个非地级市条目（大理/喀什/敦煌/格尔木）把 id 让给同省真实地级市，老存档不会报错。

**职级与岗位**

- 职级扩到 **P0–P9 × A/B/C = 30 档**（原版只有 P 系列粗粒度）。
- 岗位盘子容量 ×1.3，领导岗 166 个 / 员工岗 116 个。

**交互**

- 点击**分公司董事长**（或分公司名字板）弹出改名窗口，预填当前名称，改完立刻刷新架构图并落盘。

**单机化与去壳**

- 6 个联网/上报函数改为空实现，`zgIntOpennet()` 直接返回 `true`。
- AXML 把 LAUNCHER 从 `com.kuoyou.clsdk.SplashActivity` 挪到 `com.cocos.game.AppActivity`，
  跳过登录/实名/黑屏三连。
- 部门立绘 55 张（85×80 RGBA）以 base64 内嵌在 `ZGGSOfficeFx.ts`，运行时合成 `SpriteFrame`。

---

## 二、目录结构

```
MoNiDSZ/
├── 源码/
│   ├── modules/            # 打进包的 TS/JS 源码（Cocos System.register 模块）
│   │   ├── 00_core/        # 主控、主界面树布局、列表、工具
│   │   ├── 01_config/      # co_*.ts 配置表（数值全在这里）
│   │   ├── 02_ui/          # W*.ts 各类窗口
│   │   └── 03_widgets/     # ZGGS* 通用组件
│   ├── 模块清单.md
│   └── 方案A-分公司层-改造说明.md
├── tools/
│   ├── release.py          # ★ 一条命令出包（7 步）
│   ├── build_apk.py        # 重编 index.jsc（24 个模块 + 立绘表）+ XXTEA
│   ├── verify_release.py   # 34 项终检门禁
│   ├── axml.py             # 二进制 AXML 读写（versionName/label/LAUNCHER）
│   ├── gen_arch_diagram.py # 从 co_dep/co_post 生成架构图
│   ├── rebuild_market_provinces.py  # 34 省 308 市 + 等级表生成
│   ├── emulator_debug.ps1  # 雷电模拟器一键自测
│   ├── push_github.py      # 本机无 git 时增量推送源码到 GitHub
│   └── ...                 # 若干一次性探针/修复脚本
└── docs/
    ├── 董事长模拟器-最大架构图-v1.1.37.png
    ├── 董事长模拟器-最大架构图-v1.1.37.md
    ├── 出包规矩.md
    └── 逆向说明-原版.md     # 原版 v1.0.6 的解包/解密说明
```

---

## 三、出包

```powershell
$py = "C:\Users\20905\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\python.exe"
& $py tools\release.py            # 自增版本号并出包
& $py tools\release.py --no-bump  # 同版本重出
```

`release.py` 内部固定 7 步，不拆开手动做：

1. `preflight()` 环境自检（原版包 / keystore / zipalign / apksigner / aapt2 / java）
2. `build/version.json` 自增（patch+1，versionCode+1）
3. 游戏内版本号 `bhaopz` 同步
4. `build_apk.py` 重编 `index.jsc`（24 个模块 + 立绘表）
5. AXML 改 versionCode / versionName / application-label / activity-label，LAUNCHER 指向 `AppActivity`
6. 图标底部盖红条 + 印版本号
7. 重打包 → zipalign → apksigner → 投放 `Desktop\最新包\` → **`verify_release.py` 34 项终检**

终检任何一项 FAIL ⇒ 立刻删除成品并报错退出（**不交付半成品**）。

### Cocos `.jsc` 加密格式（改脚本必须知道）

```
密文 = XXTEA( 正文 + 补 0 到 4 字节对齐 + 4 字节小端长度字 )
```

- 加密：`words = ceil(len/4) + 1`，末尾 4 字节写 `len`
- 解密：XXTEA 解密后读末尾 4 字节得 `m`，正文 = `plain[:m]`
- 漏掉长度字 ⇒ 引擎报 `Can't decrypt code` + 黑屏，且**没有任何提示**（本项目踩过的最深的坑）
- 重加密必须逐字节还原原版 `.jsc`，`verify_release.py` 有对应门禁

---

## 四、推送到 GitHub

本机没装 git，`tools/push_github.py` 直接走 GitHub Git Data API 做**增量**推送（只上传 sha 变化的文件）：

```powershell
$py = "C:\Users\20905\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\python.exe"
& $py tools\push_github.py                     # 只提交有变化的文件
& $py tools\push_github.py --dry-run           # 先看会动哪些文件，不提交
& $py tools\push_github.py --message "feat: 1.1.38"
```

- 仓库：`https://github.com/XiaoHuang-1001/MoNiDSZ`（私有）
- 凭据：优先 `GITHUB_TOKEN` 环境变量；否则读 Windows 凭据管理器里 `git:https://github.com`（GCM 存的 token）。token 不打印、不落盘
- 入库白名单：`源码/modules/**`、`源码/*.md`、`tools/*`（按扩展名）、`docs/**`、`README.md`、`.gitignore`
- 远端多出来、本地已删除的文件会自动 `sha: null` 删除，提交说明缺省为「同步源码 N 个文件」

---

## 五、自测

```powershell
# 雷电模拟器 index 0，adb connect 127.0.0.1:5555
& tools\emulator_debug.ps1
```

通过标准：无 `Can't decrypt` / `FATAL`，有 `[DSHBOOT] scene launched: ZGCompany`、`[DSHBOOT] paotiao: startGame`，截图非黑屏。

游戏内日志：`/sdcard/Android/data/com.sky.dsz.dsh/files/dsh_log.txt`（`window.__dshlog` 写入）。

---

## 六、不包含的内容

| 未入库 | 原因 |
| --- | --- |
| 原版 APK（`dszmnq_247960.apk`） | 第三方版权，需自备 |
| `apk/`、`资源/`（解包后的立绘/音频/图片） | 同上，且体积 470+ MB |
| `build/`（编译产物、签名后的 APK） | 构建产物，每次出包重新生成 |
| `debug.keystore` | 签名密钥不入库 |
| `源码/engine/cocos-js/`、`main.dec.js`、`index.pretty.js` | Cocos 引擎与整包解密中间产物，可本地重新生成 |

补齐方式：把原版 APK 放到 `build/` 下并运行 `tools/pack_original.py`，再按 `tools/build_apk.py` 的
`ORIG_APK` 路径约定调整即可。

## 七、声明

本项目为**个人学习用的单机改造**，仅修改本地资源与逻辑，不含任何联网、内购、广告或账号功能。
原版游戏及其美术资源版权归原作者所有，本仓库不分发原版程序与素材。
