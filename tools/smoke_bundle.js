// 用桩 cc 依次执行 bundle 里的所有 System.register 模块，检测哪些模块在定义/执行期抛错。
// 用法: node smoke_bundle.js <decrypted_index.js>
const fs = require('fs');

function makeStub(name) {
  const base = function (...args) { return makeObj(name); };
  base.prototype = {};
  return new Proxy(base, {
    get(t, k) {
      if (k === 'prototype') return t.prototype;
      if (k === 'name' || k === 'length') return t[k];
      if (k === Symbol.toPrimitive) return () => 0;
      if (k === 'toString') return () => name;
      if (k in t) return t[k];
      return makeStub(name + '.' + String(k));
    },
    set(t, k, v) { t[k] = v; return true; },
    has() { return true; },
    apply() { return makeObj(name + '()'); },
    construct() { return makeObj(name + '#new'); },
  });
}
function makeObj(name) {
  const o = Object.create(null);
  return new Proxy(o, {
    get(t, k) {
      if (k === Symbol.toPrimitive) return () => 0;
      if (k === 'toString') return () => name;
      if (k === 'then') return undefined;
      if (k in t) return t[k];
      return makeStub(name + '.' + String(k));
    },
    set(t, k, v) { t[k] = v; return true; },
    has() { return true; },
    deleteProperty() { return true; },
  });
}

const cc = makeObj('cc');
// 让 cc 里的“类”能做基类
const platform = { IOS: 'iOS', ANDROID: 'Android', DESKTOP_BROWSER: 'desktop', NATIVE: 'native', MOBILE_BROWSER: 'mobile' };
cc.platform = 'Android';
cc.Platform = platform;
cc.sys = { platform: 'Android', Platform: platform, localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }, now: () => Date.now() };

const textRaw = fs.readFileSync(process.argv[2], 'utf8');
const cut = textRaw.lastIndexOf('});');
const text = cut > 0 ? textRaw.slice(0, cut + 3) : textRaw;
const regs = [];
const System = {
  register(name, deps, factory) { regs.push({ name, deps, factory }); },
};
new Function('System', 'cc', 'window', 'globalThis', text)(System, cc, {}, globalThis);
console.log('registered modules:', regs.length);

const byName = new Map(regs.map(r => [r.name, r]));
const exportsMap = new Map();
const errors = [];

function resolve(dep, from) {
  if (dep === 'cc') return 'cc';
  if (dep.startsWith('./')) return 'chunks:///_virtual/' + dep.slice(2);
  return dep;
}

function load(name, stack = []) {
  if (name === 'cc') return cc;
  if (exportsMap.has(name)) return exportsMap.get(name);
  const reg = byName.get(name);
  if (!reg) return makeObj('missing:' + name);
  if (stack.includes(name)) return exportsMap.get(name) || makeObj('cycle:' + name);
  exportsMap.set(name, makeObj('pending:' + name));
  const exp = {};
  let rs;
  try {
    rs = reg.factory(function (k, v) { if (k === undefined) return exp; exp[k] = v; return exp[k]; }, {});
  } catch (e) {
    errors.push([name, 'factory: ' + e.message]);
    exportsMap.set(name, exp);
    return exp;
  }
  (rs.setters || []).forEach((s, i) => {
    let v;
    try { v = load(resolve(reg.deps[i], name), stack.concat(name)); }
    catch (e) { errors.push([name, 'dep ' + reg.deps[i] + ': ' + e.message]); v = makeObj('errdep'); }
    try { s(v); } catch (e) { errors.push([name, 'setter ' + reg.deps[i] + ': ' + e.message]); }
  });
  try { if (rs.execute) rs.execute(); } catch (e) { errors.push([name, 'execute: ' + e.message]); }
  exportsMap.set(name, exp);
  return exp;
}

for (const r of regs) load(r.name);

console.log('modules with errors:', errors.length);
for (const [n, m] of errors.slice(0, 40)) console.log('  ', n, '|', m);
const patched = ['co_dep.ts', 'co_post.ts', 'PGsWork.ts', 'blController.ts', 'ZGGSOfficeFx.ts'];
for (const p of patched) {
  const e = errors.filter(x => x[0] === 'chunks:///_virtual/' + p);
  console.log('  patched', p, '->', e.length ? e.map(x => x[1]).join(' | ') : 'OK');
}
