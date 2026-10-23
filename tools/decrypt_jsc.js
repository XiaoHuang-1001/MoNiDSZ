// Cocos Creator 3.6.3 .jsc 一键解密（董事长模拟器 com.sky.dsz.dsh）
// 用法: node decrypt_jsc.js <输入.jsc> <输出.js>
const fs = require('fs');
const path = require('path');

// 密钥：从 libcocos.so 中爆破得到（16 字节 ASCII）
const KEY = '26ynMLK8dMvKx1Q+';
const DELTA = 0x9E3779B9;

function decrypt(v, n, k) {
  const rounds = 6 + Math.floor(52 / n);
  let sum = (rounds * DELTA) >>> 0;
  let y = v[0], z;
  for (let r = 0; r < rounds; r++) {
    const e = (sum >>> 2) & 3;
    for (let p = n - 1; p > 0; p--) {
      z = v[p - 1];
      const mx = ((((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
                  (((sum ^ y) >>> 0) + ((k[(p & 3) ^ e] ^ z) >>> 0))) >>> 0;
      v[p] = (v[p] - mx) >>> 0;
      y = v[p];
    }
    z = v[n - 1];
    const mx = ((((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^
                (((sum ^ y) >>> 0) + ((k[e] ^ z) >>> 0))) >>> 0;
    v[0] = (v[0] - mx) >>> 0;
    y = v[0];
    sum = (sum - DELTA) >>> 0;
  }
}

const inp = process.argv[2] || path.join(__dirname, '..', '资源', 'assets', 'main', 'index.jsc');
const outp = process.argv[3] || path.join(process.cwd(), path.basename(inp).replace(/\.jsc$/, '') + '.js');

const buf = fs.readFileSync(inp);
const n = Math.floor(buf.length / 4);
const v = new Uint32Array(n);
for (let i = 0; i < n; i++) v[i] = buf.readUInt32LE(i * 4);

const k = new Uint32Array(4);
for (let i = 0; i < 16; i++) k[i >> 2] |= (KEY.charCodeAt(i) & 0xff) << ((i & 3) * 8);

decrypt(v, n, k);

const out = Buffer.alloc(n * 4);
for (let i = 0; i < n; i++) out.writeUInt32LE(v[i], i * 4);
fs.writeFileSync(outp, out);
console.log('解密完成:', inp, '->', outp, out.length, 'bytes');
console.log('头部预览:', JSON.stringify(out.subarray(0, 120).toString('latin1')));
