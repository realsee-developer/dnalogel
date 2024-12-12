/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
var tt = {}, b = void 0, et = tt;
function C(i, e) {
  var t = i.split("."), r = et;
  !(t[0] in r) && r.execScript && r.execScript("var " + t[0]);
  for (var s; t.length && (s = t.shift()); )
    !t.length && e !== b ? r[s] = e : r = r[s] ? r[s] : r[s] = {};
}
var o = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Uint32Array != "undefined" && typeof DataView != "undefined";
function k(i) {
  var e = i.length, t = 0, r = Number.POSITIVE_INFINITY, s, h, n, a, f, l, u, y, c, d;
  for (y = 0; y < e; ++y)
    i[y] > t && (t = i[y]), i[y] < r && (r = i[y]);
  for (s = 1 << t, h = new (o ? Uint32Array : Array)(s), n = 1, a = 0, f = 2; n <= t; ) {
    for (y = 0; y < e; ++y)
      if (i[y] === n) {
        for (l = 0, u = a, c = 0; c < n; ++c)
          l = l << 1 | u & 1, u >>= 1;
        for (d = n << 16 | y, c = l; c < s; c += f)
          h[c] = d;
        ++a;
      }
    ++n, a <<= 1, f <<= 1;
  }
  return [h, t, r];
}
function A(i, e) {
  switch (this.g = [], this.h = 32768, this.d = this.f = this.a = this.l = 0, this.input = o ? new Uint8Array(i) : i, this.m = !1, this.i = x, this.r = !1, (e || !(e = {})) && (e.index && (this.a = e.index), e.bufferSize && (this.h = e.bufferSize), e.bufferType && (this.i = e.bufferType), e.resize && (this.r = e.resize)), this.i) {
    case D:
      this.b = 32768, this.c = new (o ? Uint8Array : Array)(32768 + this.h + 258);
      break;
    case x:
      this.b = 0, this.c = new (o ? Uint8Array : Array)(this.h), this.e = this.z, this.n = this.v, this.j = this.w;
      break;
    default:
      throw Error("invalid inflate mode");
  }
}
var D = 0, x = 1, J = { t: D, s: x };
A.prototype.k = function() {
  for (; !this.m; ) {
    var i = v(this, 3);
    switch (i & 1 && (this.m = !0), i >>>= 1, i) {
      case 0:
        var e = this.input, t = this.a, r = this.c, s = this.b, h = e.length, n = b, a = b, f = r.length, l = b;
        if (this.d = this.f = 0, t + 1 >= h)
          throw Error("invalid uncompressed block header: LEN");
        if (n = e[t++] | e[t++] << 8, t + 1 >= h)
          throw Error("invalid uncompressed block header: NLEN");
        if (a = e[t++] | e[t++] << 8, n === ~a)
          throw Error("invalid uncompressed block header: length verify");
        if (t + n > e.length)
          throw Error("input buffer is broken");
        switch (this.i) {
          case D:
            for (; s + n > r.length; ) {
              if (l = f - s, n -= l, o)
                r.set(e.subarray(t, t + l), s), s += l, t += l;
              else
                for (; l--; )
                  r[s++] = e[t++];
              this.b = s, r = this.e(), s = this.b;
            }
            break;
          case x:
            for (; s + n > r.length; )
              r = this.e({ p: 2 });
            break;
          default:
            throw Error("invalid inflate mode");
        }
        if (o)
          r.set(e.subarray(t, t + n), s), s += n, t += n;
        else
          for (; n--; )
            r[s++] = e[t++];
        this.a = t, this.b = s, this.c = r;
        break;
      case 1:
        this.j(st, ht);
        break;
      case 2:
        for (var u = v(this, 5) + 257, y = v(this, 5) + 1, c = v(this, 4) + 4, d = new (o ? Uint8Array : Array)(O.length), K = b, V = b, G = b, w = b, z = b, N = b, E = b, p = b, H = b, p = 0; p < c; ++p)
          d[O[p]] = v(this, 3);
        if (!o)
          for (p = c, c = d.length; p < c; ++p)
            d[O[p]] = 0;
        for (K = k(d), w = new (o ? Uint8Array : Array)(u + y), p = 0, H = u + y; p < H; )
          switch (z = T(this, K), z) {
            case 16:
              for (E = 3 + v(this, 2); E--; )
                w[p++] = N;
              break;
            case 17:
              for (E = 3 + v(this, 3); E--; )
                w[p++] = 0;
              N = 0;
              break;
            case 18:
              for (E = 11 + v(this, 7); E--; )
                w[p++] = 0;
              N = 0;
              break;
            default:
              N = w[p++] = z;
          }
        V = k(o ? w.subarray(0, u) : w.slice(0, u)), G = k(o ? w.subarray(u) : w.slice(u)), this.j(V, G);
        break;
      default:
        throw Error("unknown BTYPE: " + i);
    }
  }
  return this.n();
};
var Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], O = o ? new Uint16Array(Q) : Q, R = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258], rt = o ? new Uint16Array(R) : R, W = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0], S = o ? new Uint8Array(W) : W, X = [
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577
], it = o ? new Uint16Array(X) : X, _ = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], Z = o ? new Uint8Array(_) : _, B = new (o ? Uint8Array : Array)(288), g, $;
g = 0;
for ($ = B.length; g < $; ++g)
  B[g] = 143 >= g ? 8 : 255 >= g ? 9 : 279 >= g ? 7 : 8;
var st = k(B), L = new (o ? Uint8Array : Array)(30), j, F;
j = 0;
for (F = L.length; j < F; ++j)
  L[j] = 5;
var ht = k(L);
function v(i, e) {
  for (var t = i.f, r = i.d, s = i.input, h = i.a, n = s.length, a; r < e; ) {
    if (h >= n)
      throw Error("input buffer is broken");
    t |= s[h++] << r, r += 8;
  }
  return a = t & (1 << e) - 1, i.f = t >>> e, i.d = r - e, i.a = h, a;
}
function T(i, e) {
  for (var t = i.f, r = i.d, s = i.input, h = i.a, n = s.length, a = e[0], f = e[1], l, u; r < f && !(h >= n); )
    t |= s[h++] << r, r += 8;
  if (l = a[t & (1 << f) - 1], u = l >>> 16, u > r)
    throw Error("invalid code length: " + u);
  return i.f = t >> u, i.d = r - u, i.a = h, l & 65535;
}
A.prototype.j = function(i, e) {
  var t = this.c, r = this.b;
  this.o = i;
  for (var s = t.length - 258, h, n, a, f; (h = T(this, i)) !== 256; )
    if (256 > h)
      r >= s && (this.b = r, t = this.e(), r = this.b), t[r++] = h;
    else
      for (n = h - 257, f = rt[n], 0 < S[n] && (f += v(this, S[n])), h = T(this, e), a = it[h], 0 < Z[h] && (a += v(this, Z[h])), r >= s && (this.b = r, t = this.e(), r = this.b); f--; )
        t[r] = t[r++ - a];
  for (; 8 <= this.d; )
    this.d -= 8, this.a--;
  this.b = r;
};
A.prototype.w = function(i, e) {
  var t = this.c, r = this.b;
  this.o = i;
  for (var s = t.length, h, n, a, f; (h = T(this, i)) !== 256; )
    if (256 > h)
      r >= s && (t = this.e(), s = t.length), t[r++] = h;
    else
      for (n = h - 257, f = rt[n], 0 < S[n] && (f += v(this, S[n])), h = T(this, e), a = it[h], 0 < Z[h] && (a += v(this, Z[h])), r + f > s && (t = this.e(), s = t.length); f--; )
        t[r] = t[r++ - a];
  for (; 8 <= this.d; )
    this.d -= 8, this.a--;
  this.b = r;
};
A.prototype.e = function() {
  var i = new (o ? Uint8Array : Array)(this.b - 32768), e = this.b - 32768, t, r, s = this.c;
  if (o)
    i.set(s.subarray(32768, i.length));
  else
    for (t = 0, r = i.length; t < r; ++t)
      i[t] = s[t + 32768];
  if (this.g.push(i), this.l += i.length, o)
    s.set(s.subarray(e, e + 32768));
  else
    for (t = 0; 32768 > t; ++t)
      s[t] = s[e + t];
  return this.b = 32768, s;
};
A.prototype.z = function(i) {
  var e, t = this.input.length / this.a + 1 | 0, r, s, h, n = this.input, a = this.c;
  return i && (typeof i.p == "number" && (t = i.p), typeof i.u == "number" && (t += i.u)), 2 > t ? (r = (n.length - this.a) / this.o[2], h = 258 * (r / 2) | 0, s = h < a.length ? a.length + h : a.length << 1) : s = a.length * t, o ? (e = new Uint8Array(s), e.set(a)) : e = a, this.c = e;
};
A.prototype.n = function() {
  var i = 0, e = this.c, t = this.g, r, s = new (o ? Uint8Array : Array)(this.l + (this.b - 32768)), h, n, a, f;
  if (t.length === 0)
    return o ? this.c.subarray(32768, this.b) : this.c.slice(32768, this.b);
  for (h = 0, n = t.length; h < n; ++h)
    for (r = t[h], a = 0, f = r.length; a < f; ++a)
      s[i++] = r[a];
  for (h = 32768, n = this.b; h < n; ++h)
    s[i++] = e[h];
  return this.g = [], this.buffer = s;
};
A.prototype.v = function() {
  var i, e = this.b;
  return o ? this.r ? (i = new Uint8Array(e), i.set(this.c.subarray(0, e))) : i = this.c.subarray(0, e) : (this.c.length > e && (this.c.length = e), i = this.c), this.buffer = i;
};
function Y(i, e) {
  var t, r;
  switch (this.input = i, this.a = 0, (e || !(e = {})) && (e.index && (this.a = e.index), e.verify && (this.A = e.verify)), t = i[this.a++], r = i[this.a++], t & 15) {
    case M:
      this.method = M;
      break;
    default:
      throw Error("unsupported compression method");
  }
  if (((t << 8) + r) % 31 !== 0)
    throw Error("invalid fcheck flag:" + ((t << 8) + r) % 31);
  if (r & 32)
    throw Error("fdict flag is not supported");
  this.q = new A(i, { index: this.a, bufferSize: e.bufferSize, bufferType: e.bufferType, resize: e.resize });
}
Y.prototype.k = function() {
  var i = this.input, e, t;
  if (e = this.q.k(), this.a = this.q.a, this.A) {
    t = (i[this.a++] << 24 | i[this.a++] << 16 | i[this.a++] << 8 | i[this.a++]) >>> 0;
    var r = e;
    if (typeof r == "string") {
      var s = r.split(""), h, n;
      for (h = 0, n = s.length; h < n; h++)
        s[h] = (s[h].charCodeAt(0) & 255) >>> 0;
      r = s;
    }
    for (var a = 1, f = 0, l = r.length, u, y = 0; 0 < l; ) {
      u = 1024 < l ? 1024 : l, l -= u;
      do
        a += r[y++], f += a;
      while (--u);
      a %= 65521, f %= 65521;
    }
    if (t !== (f << 16 | a) >>> 0)
      throw Error("invalid adler-32 checksum");
  }
  return e;
};
var M = 8;
C("Zlib.Inflate", Y);
C("Zlib.Inflate.prototype.decompress", Y.prototype.k);
var P = { ADAPTIVE: J.s, BLOCK: J.t }, I, m, U, q;
if (Object.keys)
  I = Object.keys(P);
else
  for (m in I = [], U = 0, P)
    I[U++] = m;
U = 0;
for (q = I.length; U < q; ++U)
  m = I[U], C("Zlib.Inflate.BufferType." + m, P[m]);
var nt = tt.Zlib;
export {
  nt as Zlib
};
