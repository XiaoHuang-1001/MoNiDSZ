// 为 GM 种子表补齐「分公司二」节点（PGsWork.setGameSet 里的 e = {...} 字面量）
// 用法：node tools/add_seed_branch2.js            → 预览
//       node tools/add_seed_branch2.js --write    → 写入 PGsWork.ts
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '源码', 'modules');
const WRITE = process.argv.includes('--write');
const pgFile = path.join(ROOT, '00_core', 'PGsWork.ts');

function loadTable(file) {
  const src = fs.readFileSync(file, 'utf8');
  let cap = null;
  const exportFn = function (n, v) { if (v !== undefined) cap = v; };
  const System = {
    register(n, d, f) {
      const m = f(exportFn);
      (m.setters || []).forEach(s => s({ cclegacy: { _RF: { push() {}, pop() {} } } }));
      m.execute.call({});
    }
  };
  new Function('System', src)(System);
  return cap;
}

const dep = loadTable(path.join(ROOT, '01_config', 'co_dep.ts'));
const post = loadTable(path.join(ROOT, '01_config', 'co_post.ts'));

// —— 原职位 → 克隆职位 映射（同部门内按 id 顺序一一配对）——
const postsOf = depId => Object.values(post).filter(p => p.dep_id === depId).sort((a, b) => a.id - b.id);
const postMap = new Map();
for (let id = 1101; id <= 1421; id++) {
  if (!dep['k' + id]) continue;
  const a = postsOf(id), b = postsOf(id + 1000);
  if (a.length !== b.length) throw new Error(`dept ${id}: 职位数不一致 ${a.length} vs ${b.length}`);
  a.forEach((p, i) => postMap.set(p.id, b[i].id));
}

let text = fs.readFileSync(pgFile, 'utf8');
if (/^\s*1600:\s*\{/m.test(text)) { console.log('种子表已含 1600，跳过。'); process.exit(0); }

// workerId 可选（1208 就没有这一行）
const entryRe = /(\d{4}):\s*\{\s*id:\s*(\d+),\s*depId:\s*(\d+),\s*comArr:\s*\[([^\]]*)\](?:,\s*workerId:\s*(\d+))?\s*\}/g;
const seeds = [];
let m;
while ((m = entryRe.exec(text))) {
  seeds.push({
    id: Number(m[2]), depId: Number(m[3]),
    comArr: m[4].trim() ? m[4].split(',').map(s => Number(s.trim())) : [],
    workerId: m[5] ? Number(m[5]) : 0
  });
}
const b1 = seeds.filter(s => s.id >= 1101 && s.id <= 1421).sort((a, b) => a.id - b.id);
console.log(`解析到种子条目 ${seeds.length} 个，其中分公司一子树 ${b1.length} 个（原表不含 14xx 班组，运行时由 checkBmEvent 拆分生成）`);

const out = [{ id: 1600, depId: 160000, comArr: [2101, 2102, 2103, 2104, 2105, 2106], workerId: 0 }];
for (const s of b1) {
  if (!postMap.has(s.depId)) throw new Error(`dept ${s.id} 的 depId ${s.depId} 无对应克隆职位`);
  out.push({
    id: s.id + 1000,
    depId: postMap.get(s.depId),
    comArr: s.comArr.map(x => x + 1000),
    workerId: s.workerId && postMap.has(s.workerId) ? postMap.get(s.workerId) : 0
  });
}

console.log(`将新增种子条目 ${out.length} 个（1600 + ${out.length - 1} 个部门）`);
for (const id of [1600, 2101, 2105, 2304]) {
  const e = out.find(x => x.id === id);
  console.log(`  ${id}: depId=${e.depId} comArr=[${e.comArr.join(',')}] workerId=${e.workerId}`);
}

if (!WRITE) { console.log('\n预览模式，未写入。加 --write 执行。'); process.exit(0); }

const fmt = s => `              ${s.id}: {\n` +
  `                id: ${s.id},\n` +
  `                depId: ${s.depId},\n` +
  `                comArr: [${s.comArr.join(', ')}]` +
  (s.workerId ? `,\n                workerId: ${s.workerId}` : '') +
  `\n              },`;

// 1001 补上 1600
text = text.replace(/(1001:\s*\{\s*id:\s*1001,\s*depId:\s*100100,\s*comArr:\s*)\[1500\]/, '$1[1500, 1600]');

const anchor = '            };\n            for (let i in e) {';
const at = text.indexOf(anchor);
if (at < 0) throw new Error('找不到种子表结尾锚点');
const pre = text.slice(0, at).replace(/\n$/, '');   // 去掉末条记录后的换行，改成逗号
text = pre + ',\n' + out.map(fmt).join('\n') + '\n' + text.slice(at);
fs.writeFileSync(pgFile, text, 'utf8');
console.log('\n已写入 PGsWork.ts');
