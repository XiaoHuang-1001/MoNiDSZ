// 生成「分公司二」完整子树（六部门 + 下辖 12/14/21 组）
// 用法：node tools/add_branch2.js            → 预览
//       node tools/add_branch2.js --write    → 写入 co_dep.ts / co_post.ts
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '源码', 'modules');
const WRITE = process.argv.includes('--write');

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

const depFile = path.join(ROOT, '01_config', 'co_dep.ts');
const postFile = path.join(ROOT, '01_config', 'co_post.ts');
const dep = loadTable(depFile);
const post = loadTable(postFile);

// 分公司一（1500）下的完整子树：1101–1421
const isBranch1 = id => id >= 1101 && id <= 1421;
const subtree = Object.values(dep).filter(d => isBranch1(d.id)).sort((a, b) => a.id - b.id);
if (subtree.length !== 53) throw new Error(`子树应为 53 个节点，实际 ${subtree.length}`);

// 新 id：部门 +1000；父节点 1500 → 1600，其余父节点 +1000
const mapId = id => (id === 1500 ? 1600 : id + 1000);
const mapSet = s => {
  const [a, b] = String(s).split('|');
  const na = isBranch1(Number(a)) ? String(Number(a) + 1000) : a;
  return `${na}|${b}`;
};

const newDepts = subtree.map(d => ({
  key: 'k' + mapId(d.id),
  obj: {
    id: mapId(d.id),
    name: d.name,
    step: d.step,
    power: d.power,
    higher_id: mapId(d.higher_id),
    type: d.type,
    set: mapSet(d.set),
    pic: d.pic
  }
}));

// 分公司二节点本身
const branch2 = {
  key: 'k1600',
  obj: { id: 1600, name: '分公司二', step: 2, power: 70, higher_id: 1001, type: 1, set: '1|0', pic: '1600aa' }
};

// —— 职位克隆 ——
const postsByDep = {};
for (const p of Object.values(post)) (postsByDep[p.dep_id] = postsByDep[p.dep_id] || []).push(p);

let nextPostId = 200001;
const usedIds = new Set(Object.values(post).map(p => p.id));
const newPosts = [];
for (const d of subtree) {
  const list = postsByDep[d.id] || [];
  for (const p of list) {                       // 保持原顺序 → objs[2][dep] 的 depLv 下标不变
    const id = nextPostId++;
    if (usedIds.has(id)) throw new Error('职位 id 冲突: ' + id);
    usedIds.add(id);
    newPosts.push({ key: 'k' + id, obj: { ...p, id, dep_id: mapId(d.id) } });
  }
}
// 分公司二的职位
for (const p of [{ id: 160000, type: 2, stratum: 1, name: '行政董事长', dep_id: 1600, grade: 6, num: 1, back_pic: '6aa' },
                 { id: 160001, type: 1, stratum: 1, name: '分公司二员工', dep_id: 1600, grade: 1, num: 4, back_pic: '1aa' }]) {
  if (usedIds.has(p.id)) throw new Error('职位 id 冲突: ' + p.id);
  usedIds.add(p.id);
  newPosts.push({ key: 'k' + p.id, obj: p });
}

const fmt = e => `        ${e.key}: {\n` +
  Object.entries(e.obj).map(([k, v]) => `          ${k}: ${typeof v === 'string' ? JSON.stringify(v) : v},`).join('\n') +
  `\n        }`;

console.log(`新增部门节点: ${newDepts.length + 1}（含分公司二）`);
console.log(`新增职位: ${newPosts.length}`);
console.log(`部门 id 范围: ${mapId(1101)} ~ ${mapId(1421)}`);
console.log(`职位 id 范围: 200001 ~ ${nextPostId - 1}（+160000/160001）`);
console.log('分公司二子节点:', newDepts.filter(d => d.obj.higher_id === 1600).map(d => d.obj.id).join(','));

if (!WRITE) { console.log('\n预览模式，未写入。加 --write 执行。'); process.exit(0); }

// —— 写入：追加到对象末尾 ——
function appendEntries(file, entries) {
  let text = fs.readFileSync(file, 'utf8');
  const anchor = '\n      });';
  const at = text.lastIndexOf(anchor);
  if (at < 0) throw new Error('找不到插入锚点: ' + file);
  const block = ',\n' + entries.map(fmt).join(',\n');
  text = text.slice(0, at) + block + text.slice(at);
  fs.writeFileSync(file, text, 'utf8');
}

// 分公司一改名（避免两个都叫「分公司」）
let depText = fs.readFileSync(depFile, 'utf8');
depText = depText.replace('name: "分公司",', 'name: "分公司一",');
fs.writeFileSync(depFile, depText, 'utf8');

appendEntries(depFile, [branch2, ...newDepts]);
appendEntries(postFile, newPosts);
console.log('\n已写入 co_dep.ts / co_post.ts');
