// 校验「两个分公司」改造：node tools/check_branches.js
// 直接加载 co_dep.ts / co_post.ts（桩掉 cc 依赖），并按 ZGGSTablePrint 的规则重建索引。
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '源码', 'modules');

function loadTable(file) {
  const src = fs.readFileSync(file, 'utf8');
  let captured = null;
  const exportFn = function (name, val) { if (val !== undefined) captured = val; };
  const System = {
    register(name, deps, factory) {
      const mod = factory(exportFn);
      (mod.setters || []).forEach(s => s({ cclegacy: { _RF: { push() {}, pop() {} } } }));
      mod.execute.call({});
    }
  };
  new Function('System', src)(System);
  return captured;
}

const dep = loadTable(path.join(ROOT, '01_config', 'co_dep.ts'));
const post = loadTable(path.join(ROOT, '01_config', 'co_post.ts'));

const kids = {}, byStep = {}, byType = {};
const depts = Object.values(dep);
for (const c of depts) {
  (kids[c.higher_id] = kids[c.higher_id] || []).push(c);
  (byStep[c.step] = byStep[c.step] || []).push(c);
  byType[c.type] = byType[c.type] || {};
  byType[c.type][c.id] = c;
}
const postIdx = {};
for (const o of Object.values(post)) {
  postIdx[o.type] = postIdx[o.type] || {};
  if (o.type === 2) (postIdx[o.type][o.dep_id] = postIdx[o.type][o.dep_id] || []).push(o);
  else postIdx[o.type][o.dep_id] = o;
}

const fails = [];
const ok = (cond, msg) => { console.log((cond ? 'PASS  ' : 'FAIL  ') + msg); if (!cond) fails.push(msg); };
const ids = a => JSON.stringify((a || []).map(x => (typeof x === 'object' ? x.id : x)).sort((x, y) => x - y));

// —— 1. 总量 ——
ok(depts.length === 111, `部门节点总数 = ${depts.length}（期望 111：3 顶层 + 2 分公司 + 2×53 子树）`);
ok(Object.keys(post).length === 274, `职位总数 = ${Object.keys(post).length}（期望 274 = 139 + 135）`);

// —— 2. 顶层与两个分公司 ——
ok(ids(kids[1001]) === '[1500,1600]', `董事长子节点 = ${ids(kids[1001])}（期望 [1500,1600]）`);
ok(ids(kids[1500]) === ids([1101, 1102, 1103, 1104, 1105, 1106]), `分公司一子节点 = ${ids(kids[1500])}`);
ok(ids(kids[1600]) === ids([2101, 2102, 2103, 2104, 2105, 2106]), `分公司二子节点 = ${ids(kids[1600])}`);
ok(dep.k1500.name === '分公司一', `1500 名称 = ${dep.k1500.name}`);
ok(dep.k1600.name === '分公司二', `1600 名称 = ${dep.k1600.name}`);
ok(dep.k1600.higher_id === 1001 && dep.k1600.type === 1 && String(dep.k1600.set) === '1|0',
  `1600 属性 higher_id=${dep.k1600.higher_id} type=${dep.k1600.type} set=${dep.k1600.set}`);

// —— 3. 两棵子树对称（逐个节点比对 id+1000） ——
const b1 = depts.filter(d => d.id >= 1101 && d.id <= 1421);
const b2 = depts.filter(d => d.id >= 2101 && d.id <= 2421);
ok(b1.length === 53 && b2.length === 53, `子树规模 分公司一=${b1.length} 分公司二=${b2.length}（期望各 53）`);
let asym = [];
for (const d of b1) {
  const c = dep['k' + (d.id + 1000)];
  if (!c) { asym.push(`${d.id} 缺失`); continue; }
  if (c.step !== d.step || c.power !== d.power || c.type !== d.type) asym.push(`${d.id} 属性不一致`);
  const wantParent = d.higher_id === 1500 ? 1600 : d.higher_id + 1000;
  if (c.higher_id !== wantParent) asym.push(`${d.id} 父级=${c.higher_id} 期望 ${wantParent}`);
}
ok(asym.length === 0, `两棵子树对称（${asym.length ? asym.slice(0, 5).join('; ') : '53 个节点全部匹配'}）`);

// 抽查深层结构
ok(ids(kids[2101]) === ids([2201, 2202, 2203]), `2101 法务部子节点 = ${ids(kids[2101])}`);
ok(ids(kids[2304]) === ids([2401, 2402, 2403]), `2304 策划部子节点 = ${ids(kids[2304])}`);
ok(dep.k2401.higher_id === 2304 && dep.k2401.step === 5, `2401 策划1组 higher_id=${dep.k2401.higher_id} step=${dep.k2401.step}`);

// —— 4. 职位表完整性 ——
let missing = [];
for (const d of depts) {
  if (d.id === 1001 || d.id === 1002 || d.id === 1003) continue;   // 顶层三类职位结构特殊
  const p2 = postIdx[2] && postIdx[2][d.id];
  if (!p2 || !p2.length) missing.push(`${d.id} 缺 type2`);
  if (d.id !== 1500 && d.id !== 1600 && !(postIdx[1] && postIdx[1][d.id])) missing.push(`${d.id} 缺 type1`);
}
ok(missing.length === 0, `每个部门都有职位配置（${missing.length ? missing.slice(0, 5).join('; ') : '全部齐备'}）`);

// type2 数组长度要与分公司一一致（depLv 下标不能错位）
let lvBad = [];
for (const d of b1) {
  const a = (postIdx[2][d.id] || []).length, b = (postIdx[2][d.id + 1000] || []).length;
  if (a !== b) lvBad.push(`${d.id}:${a} vs ${d.id + 1000}:${b}`);
}
ok(lvBad.length === 0, `职位等级链长度一致（${lvBad.length ? lvBad.slice(0, 5).join('; ') : '53 组全部一致'}）`);

// —— 5. 索引与唯一性 ——
ok(!!byType[1][1600] && !!byType[1][2101], 'bmObjs[1] 含 1600 与 2101（会被自动建造）');
ok((byStep[2] || []).filter(x => x.id >= 2100 && x.id <= 2200).length === 6, 'stepObjs[2] 含分公司二六个部门（沿用 zpz02 层框）');
ok(new Set(depts.map(d => d.id)).size === depts.length, '部门 id 无重复');
ok(new Set(Object.values(post).map(p => p.id)).size === Object.keys(post).length, '职位 id 无重复');

// —— 6. 分公司一子树未被破坏 ——
ok(ids(kids[1103]) === ids([1207, 1208, 1209]), `1103 业务部子节点 = ${ids(kids[1103])}（原结构保持）`);

// —— 7. 立绘字段：step<=4 必须指向自己，step5 可以是自己或上级 ——
const depList = depts;
const badPic = depList.filter(d => {
  const want = `${d.id}aa`, alt = `${d.higher_id}aa`;
  return d.step <= 4 ? d.pic !== want : (d.pic !== want && d.pic !== alt);
});
ok(badPic.length === 0, `立绘字段全部指向正确图标${badPic.length ? '（异常：' + badPic.slice(0, 5).map(d => d.id + '→' + d.pic).join(',') + '）' : ''}`);

const injected = depList.filter(d => d.id === 1500 || d.id === 1600 || (d.id > 2100 && d.id < 2500)).map(d => d.pic);
ok(injected.length === 55, `需要内置立绘的节点 = ${injected.length}（期望 55）`);

console.log('\n' + (fails.length === 0 ? '全部通过' : `失败 ${fails.length} 项`));
process.exit(fails.length === 0 ? 0 : 1);
