const DELTA = 0x9E3779B9;
const M = 0xFFFFFFFF;

function mx(z, y, sum, kk) {
  return ((((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4))) ^ (((sum ^ y) >>> 0) + ((kk ^ z) >>> 0))) >>> 0;
}

function encrypt(v, n, k) {
  const rounds = 6 + Math.floor(52 / n);
  let sum = 0, z = v[n - 1], y;
  for (let r = 0; r < rounds; r++) {
    sum = (sum + DELTA) >>> 0;
    const e = (sum >>> 2) & 3;
    for (let p = 0; p < n - 1; p++) {
      y = v[p + 1];
      v[p] = (v[p] + mx(z, y, sum, k[(p & 3) ^ e])) >>> 0;
      z = v[p];
    }
    y = v[0];
    v[n - 1] = (v[n - 1] + mx(z, y, sum, k[((n - 1) & 3) ^ e])) >>> 0;
    z = v[n - 1];
  }
}

function decrypt(v, n, k) {
  const rounds = 6 + Math.floor(52 / n);
  let sum = (rounds * DELTA) >>> 0;
  let y = v[0], z;
  for (let r = 0; r < rounds; r++) {
    const e = (sum >>> 2) & 3;
    for (let p = n - 1; p > 0; p--) {
      z = v[p - 1];
      v[p] = (v[p] - mx(z, y, sum, k[(p & 3) ^ e])) >>> 0;
      y = v[p];
    }
    z = v[n - 1];
    v[0] = (v[0] - mx(z, y, sum, k[e])) >>> 0;
    y = v[0];
    sum = (sum - DELTA) >>> 0;
  }
}

if (require.main === module) {
  const k = new Uint32Array([0x01234567, 0x89abcdef, 0x01234567, 0x89abcdef]);
  for (const n of [2, 4, 7, 16, 100, 2650, 524206]) {
    const v = new Uint32Array(n);
    for (let i = 0; i < n; i++) v[i] = (Math.imul(i + 1, 2654435761) + 12345) >>> 0;
    const cp = Uint32Array.from(v);
    encrypt(v, n, k);
    decrypt(v, n, k);
    let bad = -1;
    for (let i = 0; i < n; i++) if (v[i] !== cp[i]) { bad = i; break; }
    console.log('n', n, 'roundtrip', bad < 0);
  }
}
module.exports = { encrypt, decrypt, DELTA };
