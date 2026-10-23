// Split a decrypted Cocos Creator System.register bundle into per-module files.
// Usage: node split_modules.mjs <input.js> <outDir>
import fs from 'node:fs';
import path from 'node:path';
import beautify from 'js-beautify';

const input = process.argv[2];
const outDir = process.argv[3];
if (!input || !outDir) {
  console.error('usage: node split_modules.mjs <input.js> <outDir>');
  process.exit(1);
}

let text = fs.readFileSync(input, 'utf8');

// Decrypted XXTEA output can carry trailing binary padding after the final wrapper.
const lastClose = text.lastIndexOf('});');
if (lastClose > 0) text = text.slice(0, lastClose + 3);

const RE = /System\.register\("chunks:\/\/\/_virtual\/([^"]+)"/g;
const starts = [];
for (const m of text.matchAll(RE)) {
  starts.push({ name: m[1], at: m.index });
}
if (starts.length === 0) {
  console.error('no System.register modules found');
  process.exit(2);
}

const buckets = { '01_config': [], '02_ui': [], '03_widgets': [], '00_core': [] };
const rows = [];

for (let i = 0; i < starts.length; i++) {
  const start = starts[i].at;
  const end = i + 1 < starts.length ? starts[i + 1].at : text.length;
  const chunk = text.slice(start, end).trimEnd();
  if (!chunk.startsWith('System.register(') || !chunk.endsWith('});')) {
    console.error(`warn: unexpected chunk bounds for ${starts[i].name}`);
  }
  const pretty = beautify.js(chunk, { indent_size: 2, max_preserve_newlines: 1, wrap_line_length: 0 });
  const name = starts[i].name;
  const bucket = name.startsWith('co_') ? '01_config'
    : name.startsWith('ZGGS') ? '03_widgets'
    : /^W[A-Z]/.test(name) ? '02_ui'
    : '00_core';
  buckets[bucket].push({ name, pretty });
  rows.push({ bucket, name, bytes: Buffer.byteLength(pretty) });
}

for (const [bucket, items] of Object.entries(buckets)) {
  const dir = path.join(outDir, bucket);
  fs.mkdirSync(dir, { recursive: true });
  for (const it of items) fs.writeFileSync(path.join(dir, it.name), it.pretty, 'utf8');
}

const tsv = rows.map(r => `${r.bucket}\t${r.name}\t${r.name}\t${r.bytes}`).join('\n') + '\n';
fs.writeFileSync(path.join(outDir, '_split_manifest.tsv'), tsv, 'utf8');

const total = rows.reduce((s, r) => s + r.bytes, 0);
const byBucket = Object.entries(buckets).map(([b, v]) => `${b}: ${v.length}`).join(', ');
console.log(`modules: ${rows.length} (${byBucket})`);
console.log(`bytes: ${total}`);
