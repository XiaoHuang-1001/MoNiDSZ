# 方案 A：插入「分公司」层（两个分公司，各带完整六部门）

> 变更日期：2026-10-23
> 目标：在**董事长**与**六大一级部门**之间插入分公司层；暂定 2 个分公司节点，**每个分公司各带一套完整的六部门子树**。
> 秘书处、董事会仍挂在董事长两侧（侧槽），地图层不动。

## 一、改后结构

```
董事长 1001
├─ 分公司一 1500（行政董事长）
│   ├─ 法务部 1101 ─ 合规/审计/知识产权
│   ├─ 行政部 1102 ─ 人力资源/监察/后勤 ─ 采购/食宿/物资
│   ├─ 业务部 1103 ─ 产品/技术/市场 ─ 策划/设计/算法/运营…（21 组）
│   ├─ 财务部 1104 ─ 薪酬管理/资产/资金
│   ├─ 安保部 1105
│   └─ 公关部 1106
├─ 分公司二 1600（行政董事长）
│   └─ 法务部 2101 … 公关部 2106（与上完全对称，含 12/14/21 组）
├─ 秘书处 1002（侧槽 ms1~ms4，不变）
└─ 董事会 1003（侧槽 ds0~ds8，不变）
```

| 指标 | 改造前 | 改造后 |
| --- | --- | --- |
| 部门节点 | 56 | **111**（3 顶层 + 2 分公司 + 2×53 子树） |
| 职位（co_post） | 137 | **274** |

## 二、ID 分配规则

| 对象 | 分公司一 | 分公司二 | 规则 |
| --- | --- | --- | --- |
| 分公司节点 | 1500 | 1600 | — |
| 六部门 | 1101–1106 | 2101–2106 | +1000 |
| 二级部门 | 1201–1212 | 2201–2212 | +1000 |
| 三级部门 | 1301–1314 | 2301–2314 | +1000 |
| 班组 | 1401–1421 | 2401–2421 | +1000 |
| 职位 | 110100–150001 | 200001–200133<br>+160000/160001 | 分公司二职位从 200001 起顺序发号（原表 id 是全局流水号，不是"部门×100"，不能按公式推） |

## 三、改动清单

| 文件 | 改动 |
| --- | --- |
| `01_config/co_dep.ts` | 新增 1500 / 1600 与分公司二 53 个节点；1101–1106 的 `higher_id` 1001 → 1500；1500 改名「分公司一」 |
| `01_config/co_post.ts` | 新增 135 条职位（分公司二 53 个部门各一套），加 1600 的两条（行政董事长 / 员工） |
| `00_core/PGsWork.ts` | GM 种子表：`1001.comArr=[1500]`，新增 1500 节点（`comArr=[1101..1106]`） |
| `00_core/blController.ts` | 埋点新增 `1500: bumen_fengongsi` |
| `tools/add_branch2.js` | 生成器：从分公司一机械克隆出分公司二整棵子树（默认预览，`--write` 落盘） |
| `tools/check_branches.js` | 校验器：20 项断言（结构/对称性/职位链/唯一性） |

原文件备份为同名 `.bak`。

## 四、设计决策

- **分公司二 = 分公司一 + 1000**：父子、层级、power、type 全部按同一偏移映射，保证两棵子树结构完全一致；`set` 字段里的父级 id 也做了 +1000 重写（如 `1101|8` → `2101|8`），二级部门仍是 `1|N`（`1` 是公司等级哨兵，不参与偏移）。
- **step 仍是 2，不重编号**：
  - 重编号会让 1101–1106 从 step2 变 step3，而 `PGsWork:190` 只为 `step 1|2` 建 `shebeiInfo`（设备），六部门会**丢设备**；
  - 美术 `Wbumenshijian.ts:56` / `WDepcl1.ts:40` / `WDepcl2.ts:50` 用 `zpz0${step}` 取层框，重编号就需要不存在的 `zpz06`。
  - 代价：分公司与一级部门"层框同款"，视觉上少一层缩进感。
- **type=1 + set="1|0"**：`checkBmAddEvent()` 只遍历 `bmObjs[1]`，且 `set[1]` 是建造门槛（工位数）；0 表示开局即建。
- **职位 id 重新分配**：原表 id 是全局流水号（如 1304 策划部的主管 id 竟是 110313），无公式可依，因此由脚本按原顺序顺序发号，保证 `objs[2][dep]` 数组下标（= depLv-1）与分公司一一致。

## 五、运行时链路（无需额外代码）

1. 开局 `checkBmAddEvent()`：1500、1600 满足 `set[1]=0` → 各自建出 `combmInfo`，并挂到 1001 的 `comArr`。
2. 各分公司下属部门达标时，按 `higher_id` 自动挂到 1500 或 1600 的 `comArr`。
3. 地图 `initDataObj(1001)` 递归 `comArr`，Buchheim 自动排版；产出 `loopDepCheck` 递归累加——**均与深度/分支数无关，零改动**。

## 六、仍待补的

| 项 | 说明 |
| --- | --- |
| **旧存档迁移** | 老档里六大部门直接挂在 1001 下，需一次性搬到 1500；1600 及其子树由运行时自动补建。见下方片段 |
| **GM 种子表** | `PGsWork` 的 `gmPack` 种子目前只铺了分公司一；分公司二会走正常建造流程。若要在 GM 模式一次性看到两棵子树，需同步补 54 条种子 |
| 美术 | `1500aa` / `1600aa` / 分公司二各部门 `2xxxaa` 立绘缺失（`co_dep.pic` 当前无模块读取，运行不崩；但部门详情页图标会缺，因为 `WDepcl` 用的是 `id+"aa"`） |
| 埋点 | 分公司二 54 个节点尚未进 `blController` 埋点表，也未在统计平台配置 |
| 职位描述 | `co_post_des` 未同步克隆（纯文案） |
| 重写工程移植 | 本工程是反编译参考件，改动不影响 APK；需同步到重写工程 |

### 旧存档迁移片段（加在 `PGsWork.setGameSet()` 末尾）

```js
// 老档：把六大部门从董事长名下搬到分公司一
const b1 = findObjById("combmInfo", 1500);
const ds = findObjById("combmInfo", 1001);
if (b1 && ds) {
  const six = [1101, 1102, 1103, 1104, 1105, 1106];
  const moved = ds.comArr.filter(id => six.includes(id));
  if (moved.length) {
    ds.comArr = ds.comArr.filter(id => !six.includes(id));
    b1.comArr = Array.from(new Set([...b1.comArr, ...moved])).sort((a, b) => a - b);
  }
}
```

## 七、校验

```powershell
node tools/check_branches.js    # 20 项断言
```

当前结果：**全部通过**——111 节点、两棵 53 节点子树逐个对称、职位链长度一致、id 无重复、分公司一原结构未被破坏。

## 八、补充实现（旧档迁移 / GM 种子 / 美术出图）

### 1. 旧存档迁移（已写入代码）

位置：`PGsWork.setGameSet()` 末尾（福利初始化之后）。逻辑：检测到董事长 `comArr` 里仍有 1101–1106，
就补建分公司一（含 depId）并把六个部门整体搬过去，`comArr` 去重后按 id 排序。可重复执行，已迁移过的档不会二次处理。

### 2. GM 种子表（已扩展）

`tools/add_seed_branch2.js` 已写入 33 条：分公司二 + 32 个部门节点。
注意原种子表只覆盖到 13xx（不含 14xx 班组），因此分公司二同样只铺到 23xx——14xx/24xx 班组由 `checkBmEvent()` 在运行时按 `co_dep.objs[父]` 拆分生成，与原版行为一致。

### 3. 美术立绘（已进包，运行时可加载）

`tools/make_dept_icons.py` 按 `co_dep.ts` 自动出图：

- 输出：`资源/新增立绘/`，**55 张 85×80 PNG**（尺寸对齐游戏图集里 `1101aa` 的帧：85×80）
- 命名：`<部门id>aa.png`（与游戏 `id + "aa"` 的取图规则一致）
- 附：`manifest.json`、`清单.csv`（id / 名称 / 层级 / 分公司 / 文件名）
- 配色按层级区分，分公司二整体压暗；先在 4 倍画布绘制再缩小，保证边缘抗锯齿

贴图没有走 Cocos 图集（图集 1993×2048 里已没有空位，往里加帧还要重写 packed JSON + SpriteFrame 资产），
改成**把 RGBA 像素以 base64 内嵌进 `ZGGSOfficeFx` 模块，运行时合成 `Texture2D` + `SpriteFrame`**：

```js
// gsSprHtsst1 钩子：ui 目录的图先查内置表，命中就地建帧，未命中走原 resources.load
var __df = i && "ui" == s && e && __depIconB64[e] !== void 0 ? __depIconGet(e) : null;
if (__df) return void (i.spriteFrame = __df);
```

- 建帧顺序：`tex.reset({w,h,RGBA8888})` → `tex.uploadData(px)`（失败回退 `ImageAsset.reset` + `tex.image`）
  → `SpriteFrame.texture/rect/originalSize/offset`
- 55 张共 1.49 MB 原始像素 / 1.90 MB base64；按 id 懒加载并缓存在 `__depIconCache`
- 覆盖三处取图：树状图（`pic` 字段）、部门详情（`id+"aa"`）、上级部门里的子部门列表
- 同时把分公司二 53 个节点的 `pic` 改成自己的 `id+"aa"`（原来是克隆自一公司的 `1101aa` 等）

## 九、打包流水线（产出可安装 APK）

| 步骤 | 工具 | 说明 |
| --- | --- | --- |
| 1. 改表/改码 | `tools/build_apk.py` | co_dep（pic 回填 + 55 处）、co_post、PGsWork（种子+迁移）、blController、ZGGSOfficeFx（立绘注入） |
| 2. 换 bundle | 同上 | 解密 `main/index.jsc` → 按 `System.register("chunks:///_virtual/<模块>"` 原位替换 5 个块 → 重新 XXTEA 加密（密钥 `26ynMLK8dMvKx1Q+`，取自 libcocos.so） |
| 3. 重打包 | `tools/pack_original.py` | **在原版 APK 上原位替换** `assets/assets/main/index.jsc`，其余 2745 个条目字节不变、压缩方式不变 |
| 4. 对齐/签名 | zipalign / apksigner | `zipalign -p -f 4`，v1+v2+v3 签名，签名库 `build/debug.keystore`（androiddebugkey / android） |

产物：`桌面/董事长模拟器_分公司版_v1.0.6.apk`

```
包名 com.sky.dsz.dsh   版本 1.0.6 (versionCode 7)
大小 153.5 MB          minSdk 26 / targetSdk 30
签名 v2 + v3 验证通过  SHA-256 7BD64910C17F720894FC30097BA8B0B92B54D4E7ACC52E6B3D4C2689FEB8A95B
```

打包后校验（`tools/` 里可复跑）：

- 条目数 2747 → 2747，`testzip` 通过；**仅 `index.jsc` 与 `META-INF/MANIFEST.MF` 变化**，其余全等
- 新 `index.jsc` 解密后仍是 250 个模块，5 个改动模块的块首尾完整
- 立绘 55 条 base64 解码后与 PNG 逐字节一致（0 处不符）
- `co_dep` 与原版逐字段对比：老 56 个节点**只有 1101–1106 的 `higher_id` 变成 1500**，其余字段（含 pic）完全一致；新增 55 个节点字段齐全
- `co_post` 与原版逐字段对比：原 137 条**零差异**，新增 137 条

## 十、安装提示

签名用的是调试证书，与原版（渠道签名）不同，**无法覆盖安装**：装之前必须先卸载手机上的原版，
否则会提示"应用未安装 / 签名不一致"。卸载会清掉该应用的本地存档。

如果需要和原版**共存**（保留原版存档），可以改包名重打一版（`com.sky.dsz.dsh` → 等长的 `com.sky.dsz.fgs`，
并同步改 provider authority 与 dex 里的包名字符串、重算 dex 校验和），需要时再出。

## 十一、单机化 + 黑屏排查（第二轮）

首次打包启动黑屏后做的改动：

| # | 位置 | 改动 | 原因 |
| --- | --- | --- | --- |
| 1 | `ZGGSHttpsWww.initPlayerData2()` | 置空 | 全工程唯一调用 `PlatformManager.a_na_loginGame()` 的地方，而 `attainSet()` **每秒调一次** → SDK 登录/实名弹窗反复弹出，且 SDK Activity 切回后游戏可能在后台挂起 → 黑屏 |
| 2 | `initPlayerData` / `playerDataUp` / `blUpPlayerData` / `blInitPlayerData` / `blDataUpDay` | 置空 | 不再触发 SDK 注册、登录、实名上报 |
| 3 | `ZGGSHttpsWww.zgIntOpennet()` | 固定 `true` | 不再依赖 `a_na_getNetState()`，广告/联网校验直接放行 |
| 4 | `ZGGSHttpsWww.GGShowVido()` | 直接走离线发奖分支 | 不拉激励视频；保留 `cjInfo.videoCount++` 与 `cjCheckType[1]`，任务计数照旧 |
| 5 | `ZGGSConfigco.kpkasi` | `!0` → `!1` | 关掉优量汇/穿山甲广告通道 |
| 6 | `PGsWork.setGameSet()` 迁移段 | 整段 `try/catch` + 数组判空 | 任何异常都不再打断 `paotiao()` 的启动流程 |
| 7 | `co_danji` 的 `jindutiao` | 加 `单机版 ·` 前缀 | 加载页肉眼可确认当前跑的是哪一版 |

### 诊断日志

`assets/main.js`（明文，未加密）里注入了 `window.__dshlog`，把启动与异常写到以下路径（逐个尝试，第一个成功即停）：

```
/storage/emulated/0/Download/dsh_log.txt
/sdcard/Download/dsh_log.txt
/storage/emulated/0/Android/data/com.sky.dsz.dsh/files/dsh_log.txt
/sdcard/Android/data/com.sky.dsz.dsh/files/dsh_log.txt
<应用内部 files 目录>/dsh_log.txt
```

会记录：`boot: jsb=...`、`console.error`、`window.error`、`paotiao: start`、`paotiao: setGameSet ok`、
`paotiao: startGame`、`migrate ok/error`、`sdk: initPlayerData skipped`、`ad: offline grant`、
以及 `application Fatal:` + 堆栈。黑屏时把这份日志发来即可定位卡在哪一步。

### 回归验证

用 `tools/smoke_bundle.js` 把原版与改版 bundle 的 250 个 `System.register` 模块全部跑一遍（桩 cc），
两者的报错集合**逐条一致**（413 条均为桩缺能力导致），说明改动没有引入模块级错误。

## 十二、版本号与一键出包

从 v1.0.7 起，**每次出包都自增版本号**：

```powershell
python tools/release.py            # 版本号 +1，然后出包
python tools/release.py --no-bump  # 用当前版本号重新出（调试用）
```

流水线（`tools/release.py`）：

1. `build/version.json` 里 `versionName` 末位 +1、`versionCode` +1；
2. 把版本号写进两处：
   - **AndroidManifest.xml**（二进制 AXML）——`tools/axml.py` 直接改 `versionCode`（TYPE_INT_DEC 4 字节原地改）
     和字符串池里的 `versionName`（重建字符串池并 4 字节对齐）；
   - **游戏内 `ZGGSConfigco.bhaopz`**——加载页 `node_jindu/YMLabel-006` 会显示，肉眼可核对版本；
3. 重新编译 bundle（co_dep / co_post / co_danji / PGsWork / blController / ZGGSOfficeFx / ZGGSHttpsWww / ZGGSConfigco）；
4. 在原版 APK 上原位替换 `AndroidManifest.xml` + `assets/main.js` + `assets/assets/main/index.jsc`，其余条目不动；
5. `zipalign -p 4` + `apksigner`（v1+v2+v3，debug.keystore）；
6. 投放到桌面 `董事长模拟器_分公司版_单机_v<版本>.apk`，并自动删掉桌面上的旧版本文件。

| 版本 | versionCode | 说明 |
| --- | --- | --- |
| 1.0.6 | 7 | 原版 |
| 1.0.7 | 8 | 分公司层 + 55 张立绘 + 单机化 + 黑屏诊断日志（首个带版本迭代的包） |

`tools/axml.py` 也可以单独用：`python tools/axml.py <apk>` 直接读出该包的 `(versionCode, versionName)`。

