Number.EPSILON === void 0 && (Number.EPSILON = Math.pow(2, -52));
Number.isInteger === void 0 && (Number.isInteger = function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
});
Math.sign === void 0 && (Math.sign = function(e) {
  return e < 0 ? -1 : e > 0 ? 1 : +e;
});
"name" in Function.prototype || Object.defineProperty(Function.prototype, "name", {
  get: function() {
    return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
  }
});
Object.assign === void 0 && (Object.assign = function(e) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const t = Object(e);
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (r != null)
      for (const i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }
  return t;
});
const dh = "117", ph = 0, Fc = 1, vh = 2, mu = 1, mh = 2, xi = 3, sa = 0, ft = 1, Bo = 2, gu = 1, Nn = 0, Mi = 1, Bc = 2, Uc = 3, Gc = 4, gh = 5, Ar = 100, yh = 101, xh = 102, zc = 103, Hc = 104, _h = 200, Mh = 201, bh = 202, wh = 203, yu = 204, xu = 205, Sh = 206, Eh = 207, Th = 208, Ah = 209, Lh = 210, Rh = 0, Ch = 1, Ph = 2, Es = 3, Dh = 4, Ih = 5, Oh = 6, Nh = 7, Uo = 0, Fh = 1, Bh = 2, bi = 0, _u = 1, Uh = 2, Gh = 3, zh = 4, Hh = 5, Mc = 300, bc = 301, wc = 302, Mu = 303, Sc = 304, bu = 305, ca = 306, Ec = 307, Qa = 1e3, Tt = 1001, Ka = 1002, st = 1003, Ts = 1004, As = 1005, yt = 1006, wu = 1007, Go = 1008, la = 1009, Vh = 1010, kh = 1011, eo = 1012, Wh = 1013, Ja = 1014, In = 1015, to = 1016, qh = 1017, Xh = 1018, jh = 1019, wi = 1020, Yh = 1021, er = 1022, Zt = 1023, Zh = 1024, Jh = 1025, $h = Zt, Or = 1026, Ai = 1027, Qh = 1028, Kh = 1029, ef = 1030, tf = 1031, nf = 1032, rf = 1033, Vc = 33776, kc = 33777, Wc = 33778, qc = 33779, Xc = 35840, jc = 35841, Yc = 35842, Zc = 35843, af = 36196, Jc = 37492, $c = 37496, of = 37808, sf = 37809, cf = 37810, lf = 37811, uf = 37812, hf = 37813, ff = 37814, df = 37815, pf = 37816, vf = 37817, mf = 37818, gf = 37819, yf = 37820, xf = 37821, _f = 36492, Mf = 37840, bf = 37841, wf = 37842, Sf = 37843, Ef = 37844, Tf = 37845, Af = 37846, Lf = 37847, Rf = 37848, Cf = 37849, Pf = 37850, Df = 37851, If = 37852, Of = 37853, Nf = 2200, Ff = 2201, Bf = 2202, no = 2300, $a = 2301, qo = 2302, Fr = 2400, Rr = 2401, ro = 2402, Tc = 2500, Su = 2501, Uf = 0, At = 3e3, zo = 3001, Ac = 3007, Lc = 3002, Gf = 3003, Eu = 3004, Tu = 3005, Au = 3006, zf = 3200, Hf = 3201, ni = 0, Vf = 1, Xo = 7680, kf = 519, Ho = 35044, Li = 35048;
function wn() {
}
Object.assign(wn.prototype, {
  addEventListener: function(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    var n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  },
  hasEventListener: function(e, t) {
    if (this._listeners === void 0)
      return !1;
    var n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  },
  removeEventListener: function(e, t) {
    if (this._listeners !== void 0) {
      var n = this._listeners, r = n[e];
      if (r !== void 0) {
        var i = r.indexOf(t);
        i !== -1 && r.splice(i, 1);
      }
    }
  },
  dispatchEvent: function(e) {
    if (this._listeners !== void 0) {
      var t = this._listeners, n = t[e.type];
      if (n !== void 0) {
        e.target = this;
        for (var r = n.slice(0), i = 0, a = r.length; i < a; i++)
          r[i].call(this, e);
      }
    }
  }
});
var vt = [];
for (var ci = 0; ci < 256; ci++)
  vt[ci] = (ci < 16 ? "0" : "") + ci.toString(16);
var Ae = {
  DEG2RAD: Math.PI / 180,
  RAD2DEG: 180 / Math.PI,
  generateUUID: function() {
    var e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0, i = vt[e & 255] + vt[e >> 8 & 255] + vt[e >> 16 & 255] + vt[e >> 24 & 255] + "-" + vt[t & 255] + vt[t >> 8 & 255] + "-" + vt[t >> 16 & 15 | 64] + vt[t >> 24 & 255] + "-" + vt[n & 63 | 128] + vt[n >> 8 & 255] + "-" + vt[n >> 16 & 255] + vt[n >> 24 & 255] + vt[r & 255] + vt[r >> 8 & 255] + vt[r >> 16 & 255] + vt[r >> 24 & 255];
    return i.toUpperCase();
  },
  clamp: function(e, t, n) {
    return Math.max(t, Math.min(n, e));
  },
  // compute euclidian modulo of m % n
  // https://en.wikipedia.org/wiki/Modulo_operation
  euclideanModulo: function(e, t) {
    return (e % t + t) % t;
  },
  // Linear mapping from range <a1, a2> to range <b1, b2>
  mapLinear: function(e, t, n, r, i) {
    return r + (e - t) * (i - r) / (n - t);
  },
  // https://en.wikipedia.org/wiki/Linear_interpolation
  lerp: function(e, t, n) {
    return (1 - n) * e + n * t;
  },
  // http://en.wikipedia.org/wiki/Smoothstep
  smoothstep: function(e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
  },
  smootherstep: function(e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
  },
  // Random integer from <low, high> interval
  randInt: function(e, t) {
    return e + Math.floor(Math.random() * (t - e + 1));
  },
  // Random float from <low, high> interval
  randFloat: function(e, t) {
    return e + Math.random() * (t - e);
  },
  // Random float from <-range/2, range/2> interval
  randFloatSpread: function(e) {
    return e * (0.5 - Math.random());
  },
  degToRad: function(e) {
    return e * Ae.DEG2RAD;
  },
  radToDeg: function(e) {
    return e * Ae.RAD2DEG;
  },
  isPowerOfTwo: function(e) {
    return (e & e - 1) === 0 && e !== 0;
  },
  ceilPowerOfTwo: function(e) {
    return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
  },
  floorPowerOfTwo: function(e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
  },
  setQuaternionFromProperEuler: function(e, t, n, r, i) {
    var a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), l = a((t + r) / 2), u = o((t + r) / 2), h = a((t - r) / 2), f = o((t - r) / 2), d = a((r - t) / 2), m = o((r - t) / 2);
    switch (i) {
      case "XYX":
        e.set(s * u, c * h, c * f, s * l);
        break;
      case "YZY":
        e.set(c * f, s * u, c * h, s * l);
        break;
      case "ZXZ":
        e.set(c * h, c * f, s * u, s * l);
        break;
      case "XZX":
        e.set(s * u, c * m, c * d, s * l);
        break;
      case "YXY":
        e.set(c * d, s * u, c * m, s * l);
        break;
      case "ZYZ":
        e.set(c * m, c * d, s * u, s * l);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
    }
  }
};
function U(e, t) {
  this.x = e || 0, this.y = t || 0;
}
Object.defineProperties(U.prototype, {
  width: {
    get: function() {
      return this.x;
    },
    set: function(e) {
      this.x = e;
    }
  },
  height: {
    get: function() {
      return this.y;
    },
    set: function(e) {
      this.y = e;
    }
  }
});
Object.assign(U.prototype, {
  isVector2: !0,
  set: function(e, t) {
    return this.x = e, this.y = t, this;
  },
  setScalar: function(e) {
    return this.x = e, this.y = e, this;
  },
  setX: function(e) {
    return this.x = e, this;
  },
  setY: function(e) {
    return this.y = e, this;
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  },
  clone: function() {
    return new this.constructor(this.x, this.y);
  },
  copy: function(e) {
    return this.x = e.x, this.y = e.y, this;
  },
  add: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this);
  },
  addScalar: function(e) {
    return this.x += e, this.y += e, this;
  },
  addVectors: function(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  },
  addScaledVector: function(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  },
  sub: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this);
  },
  subScalar: function(e) {
    return this.x -= e, this.y -= e, this;
  },
  subVectors: function(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  },
  multiply: function(e) {
    return this.x *= e.x, this.y *= e.y, this;
  },
  multiplyScalar: function(e) {
    return this.x *= e, this.y *= e, this;
  },
  divide: function(e) {
    return this.x /= e.x, this.y /= e.y, this;
  },
  divideScalar: function(e) {
    return this.multiplyScalar(1 / e);
  },
  applyMatrix3: function(e) {
    var t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  },
  min: function(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  },
  max: function(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  },
  clamp: function(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  },
  clampScalar: function(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  },
  clampLength: function(e, t) {
    var n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  },
  floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  },
  ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  },
  round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  },
  roundToZero: function() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  },
  negate: function() {
    return this.x = -this.x, this.y = -this.y, this;
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y;
  },
  cross: function(e) {
    return this.x * e.y - this.y * e.x;
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y;
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  manhattanLength: function() {
    return Math.abs(this.x) + Math.abs(this.y);
  },
  normalize: function() {
    return this.divideScalar(this.length() || 1);
  },
  angle: function() {
    var e = Math.atan2(-this.y, -this.x) + Math.PI;
    return e;
  },
  distanceTo: function(e) {
    return Math.sqrt(this.distanceToSquared(e));
  },
  distanceToSquared: function(e) {
    var t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  },
  manhattanDistanceTo: function(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  },
  setLength: function(e) {
    return this.normalize().multiplyScalar(e);
  },
  lerp: function(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  },
  lerpVectors: function(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e;
  },
  fromBufferAttribute: function(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this;
  },
  rotateAround: function(e, t) {
    var n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
    return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
  },
  random: function() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
});
function wt() {
  this.elements = [
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1
  ], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
}
Object.assign(wt.prototype, {
  isMatrix3: !0,
  set: function(e, t, n, r, i, a, o, s, c) {
    var l = this.elements;
    return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
  },
  identity: function() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  },
  clone: function() {
    return new this.constructor().fromArray(this.elements);
  },
  copy: function(e) {
    var t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  },
  extractBasis: function(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  },
  setFromMatrix4: function(e) {
    var t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  },
  multiply: function(e) {
    return this.multiplyMatrices(this, e);
  },
  premultiply: function(e) {
    return this.multiplyMatrices(e, this);
  },
  multiplyMatrices: function(e, t) {
    var n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], h = n[2], f = n[5], d = n[8], m = r[0], g = r[3], y = r[6], p = r[1], v = r[4], _ = r[7], b = r[2], x = r[5], T = r[8];
    return i[0] = a * m + o * p + s * b, i[3] = a * g + o * v + s * x, i[6] = a * y + o * _ + s * T, i[1] = c * m + l * p + u * b, i[4] = c * g + l * v + u * x, i[7] = c * y + l * _ + u * T, i[2] = h * m + f * p + d * b, i[5] = h * g + f * v + d * x, i[8] = h * y + f * _ + d * T, this;
  },
  multiplyScalar: function(e) {
    var t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  },
  determinant: function() {
    var e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
    return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
  },
  getInverse: function(e, t) {
    t !== void 0 && console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");
    var n = e.elements, r = this.elements, i = n[0], a = n[1], o = n[2], s = n[3], c = n[4], l = n[5], u = n[6], h = n[7], f = n[8], d = f * c - l * h, m = l * u - f * s, g = h * s - c * u, y = i * d + a * m + o * g;
    if (y === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    var p = 1 / y;
    return r[0] = d * p, r[1] = (o * h - f * a) * p, r[2] = (l * a - o * c) * p, r[3] = m * p, r[4] = (f * i - o * u) * p, r[5] = (o * s - l * i) * p, r[6] = g * p, r[7] = (a * u - h * i) * p, r[8] = (c * i - a * s) * p, this;
  },
  transpose: function() {
    var e, t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  },
  getNormalMatrix: function(e) {
    return this.setFromMatrix4(e).getInverse(this).transpose();
  },
  transposeIntoArray: function(e) {
    var t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  },
  setUvTransform: function(e, t, n, r, i, a, o) {
    var s = Math.cos(i), c = Math.sin(i);
    this.set(
      n * s,
      n * c,
      -n * (s * a + c * o) + a + e,
      -r * c,
      r * s,
      -r * (-c * a + s * o) + o + t,
      0,
      0,
      1
    );
  },
  scale: function(e, t) {
    var n = this.elements;
    return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this;
  },
  rotate: function(e) {
    var t = Math.cos(e), n = Math.sin(e), r = this.elements, i = r[0], a = r[3], o = r[6], s = r[1], c = r[4], l = r[7];
    return r[0] = t * i + n * s, r[3] = t * a + n * c, r[6] = t * o + n * l, r[1] = -n * i + t * s, r[4] = -n * a + t * c, r[7] = -n * o + t * l, this;
  },
  translate: function(e, t) {
    var n = this.elements;
    return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this;
  },
  equals: function(e) {
    for (var t = this.elements, n = e.elements, r = 0; r < 9; r++)
      if (t[r] !== n[r])
        return !1;
    return !0;
  },
  fromArray: function(e, t) {
    t === void 0 && (t = 0);
    for (var n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  },
  toArray: function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = 0);
    var n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
});
var ur, nr = {
  getDataURL: function(e) {
    var t;
    if (typeof HTMLCanvasElement == "undefined")
      return e.src;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      ur === void 0 && (ur = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), ur.width = e.width, ur.height = e.height;
      var n = ur.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = ur;
    }
    return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", 0.6) : t.toDataURL("image/png");
  }
}, Wf = 0;
function je(e, t, n, r, i, a, o, s, c, l) {
  Object.defineProperty(this, "id", { value: Wf++ }), this.uuid = Ae.generateUUID(), this.name = "", this.image = e !== void 0 ? e : je.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = t !== void 0 ? t : je.DEFAULT_MAPPING, this.wrapS = n !== void 0 ? n : Tt, this.wrapT = r !== void 0 ? r : Tt, this.magFilter = i !== void 0 ? i : yt, this.minFilter = a !== void 0 ? a : Go, this.anisotropy = c !== void 0 ? c : 1, this.format = o !== void 0 ? o : Zt, this.internalFormat = null, this.type = s !== void 0 ? s : la, this.offset = new U(0, 0), this.repeat = new U(1, 1), this.center = new U(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new wt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = l !== void 0 ? l : At, this.version = 0, this.onUpdate = null;
}
je.DEFAULT_IMAGE = void 0;
je.DEFAULT_MAPPING = Mc;
je.prototype = Object.assign(Object.create(wn.prototype), {
  constructor: je,
  isTexture: !0,
  updateMatrix: function() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this;
  },
  toJSON: function(e) {
    var t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    var n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (this.image !== void 0) {
      var r = this.image;
      if (r.uuid === void 0 && (r.uuid = Ae.generateUUID()), !t && e.images[r.uuid] === void 0) {
        var i;
        if (Array.isArray(r)) {
          i = [];
          for (var a = 0, o = r.length; a < o; a++)
            i.push(nr.getDataURL(r[a]));
        } else
          i = nr.getDataURL(r);
        e.images[r.uuid] = {
          uuid: r.uuid,
          url: i
        };
      }
      n.image = r.uuid;
    }
    return t || (e.textures[this.uuid] = n), n;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  },
  transformUv: function(e) {
    if (this.mapping !== Mc)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Qa:
          e.x = e.x - Math.floor(e.x);
          break;
        case Tt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ka:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Qa:
          e.y = e.y - Math.floor(e.y);
          break;
        case Tt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ka:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
});
Object.defineProperty(je.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++;
  }
});
function Ve(e, t, n, r) {
  this.x = e || 0, this.y = t || 0, this.z = n || 0, this.w = r !== void 0 ? r : 1;
}
Object.defineProperties(Ve.prototype, {
  width: {
    get: function() {
      return this.z;
    },
    set: function(e) {
      this.z = e;
    }
  },
  height: {
    get: function() {
      return this.w;
    },
    set: function(e) {
      this.w = e;
    }
  }
});
Object.assign(Ve.prototype, {
  isVector4: !0,
  set: function(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  },
  setScalar: function(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  },
  setX: function(e) {
    return this.x = e, this;
  },
  setY: function(e) {
    return this.y = e, this;
  },
  setZ: function(e) {
    return this.z = e, this;
  },
  setW: function(e) {
    return this.w = e, this;
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  },
  clone: function() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  },
  copy: function(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  },
  add: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this);
  },
  addScalar: function(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  },
  addVectors: function(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  },
  addScaledVector: function(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  },
  sub: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this);
  },
  subScalar: function(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  },
  subVectors: function(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  },
  multiplyScalar: function(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  },
  applyMatrix4: function(e) {
    var t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
  },
  divideScalar: function(e) {
    return this.multiplyScalar(1 / e);
  },
  setAxisAngleFromQuaternion: function(e) {
    this.w = 2 * Math.acos(e.w);
    var t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  },
  setAxisAngleFromRotationMatrix: function(e) {
    var t, n, r, i, a = 0.01, o = 0.1, s = e.elements, c = s[0], l = s[4], u = s[8], h = s[1], f = s[5], d = s[9], m = s[2], g = s[6], y = s[10];
    if (Math.abs(l - h) < a && Math.abs(u - m) < a && Math.abs(d - g) < a) {
      if (Math.abs(l + h) < o && Math.abs(u + m) < o && Math.abs(d + g) < o && Math.abs(c + f + y - 3) < o)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      var p = (c + 1) / 2, v = (f + 1) / 2, _ = (y + 1) / 2, b = (l + h) / 4, x = (u + m) / 4, T = (d + g) / 4;
      return p > v && p > _ ? p < a ? (n = 0, r = 0.707106781, i = 0.707106781) : (n = Math.sqrt(p), r = b / n, i = x / n) : v > _ ? v < a ? (n = 0.707106781, r = 0, i = 0.707106781) : (r = Math.sqrt(v), n = b / r, i = T / r) : _ < a ? (n = 0.707106781, r = 0.707106781, i = 0) : (i = Math.sqrt(_), n = x / i, r = T / i), this.set(n, r, i, t), this;
    }
    var A = Math.sqrt((g - d) * (g - d) + (u - m) * (u - m) + (h - l) * (h - l));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (g - d) / A, this.y = (u - m) / A, this.z = (h - l) / A, this.w = Math.acos((c + f + y - 1) / 2), this;
  },
  min: function(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  },
  max: function(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  },
  clamp: function(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  },
  clampScalar: function(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  },
  clampLength: function(e, t) {
    var n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  },
  floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  },
  ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  },
  round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  },
  roundToZero: function() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  },
  negate: function() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  },
  lengthSq: function() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  },
  manhattanLength: function() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  },
  normalize: function() {
    return this.divideScalar(this.length() || 1);
  },
  setLength: function(e) {
    return this.normalize().multiplyScalar(e);
  },
  lerp: function(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  },
  lerpVectors: function(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  },
  fromBufferAttribute: function(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  },
  random: function() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
});
function Bt(e, t, n) {
  this.width = e, this.height = t, this.scissor = new Ve(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ve(0, 0, e, t), n = n || {}, this.texture = new je(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = e, this.texture.image.height = t, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : yt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !0, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null;
}
Bt.prototype = Object.assign(Object.create(wn.prototype), {
  constructor: Bt,
  isWebGLRenderTarget: !0,
  setSize: function(e, t) {
    (this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.texture.image.width = e, this.texture.image.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
function Qc(e, t, n) {
  Bt.call(this, e, t, n), this.samples = 4;
}
Qc.prototype = Object.assign(Object.create(Bt.prototype), {
  constructor: Qc,
  isWebGLMultisampleRenderTarget: !0,
  copy: function(e) {
    return Bt.prototype.copy.call(this, e), this.samples = e.samples, this;
  }
});
function dt(e, t, n, r) {
  this._x = e || 0, this._y = t || 0, this._z = n || 0, this._w = r !== void 0 ? r : 1;
}
Object.assign(dt, {
  slerp: function(e, t, n, r) {
    return n.copy(e).slerp(t, r);
  },
  slerpFlat: function(e, t, n, r, i, a, o) {
    var s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], h = i[a + 0], f = i[a + 1], d = i[a + 2], m = i[a + 3];
    if (u !== m || s !== h || c !== f || l !== d) {
      var g = 1 - o, y = s * h + c * f + l * d + u * m, p = y >= 0 ? 1 : -1, v = 1 - y * y;
      if (v > Number.EPSILON) {
        var _ = Math.sqrt(v), b = Math.atan2(_, y * p);
        g = Math.sin(g * b) / _, o = Math.sin(o * b) / _;
      }
      var x = o * p;
      if (s = s * g + h * x, c = c * g + f * x, l = l * g + d * x, u = u * g + m * x, g === 1 - o) {
        var T = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
        s *= T, c *= T, l *= T, u *= T;
      }
    }
    e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
  },
  multiplyQuaternionsFlat: function(e, t, n, r, i, a) {
    var o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], h = i[a + 1], f = i[a + 2], d = i[a + 3];
    return e[t] = o * d + l * u + s * f - c * h, e[t + 1] = s * d + l * h + c * u - o * f, e[t + 2] = c * d + l * f + o * h - s * u, e[t + 3] = l * d - o * u - s * h - c * f, e;
  }
});
Object.defineProperties(dt.prototype, {
  x: {
    get: function() {
      return this._x;
    },
    set: function(e) {
      this._x = e, this._onChangeCallback();
    }
  },
  y: {
    get: function() {
      return this._y;
    },
    set: function(e) {
      this._y = e, this._onChangeCallback();
    }
  },
  z: {
    get: function() {
      return this._z;
    },
    set: function(e) {
      this._z = e, this._onChangeCallback();
    }
  },
  w: {
    get: function() {
      return this._w;
    },
    set: function(e) {
      this._w = e, this._onChangeCallback();
    }
  }
});
Object.assign(dt.prototype, {
  isQuaternion: !0,
  set: function(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  },
  clone: function() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  },
  copy: function(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  },
  setFromEuler: function(e, t) {
    if (!(e && e.isEuler))
      throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
    var n = e._x, r = e._y, i = e._z, a = e.order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), h = s(n / 2), f = s(r / 2), d = s(i / 2);
    switch (a) {
      case "XYZ":
        this._x = h * l * u + c * f * d, this._y = c * f * u - h * l * d, this._z = c * l * d + h * f * u, this._w = c * l * u - h * f * d;
        break;
      case "YXZ":
        this._x = h * l * u + c * f * d, this._y = c * f * u - h * l * d, this._z = c * l * d - h * f * u, this._w = c * l * u + h * f * d;
        break;
      case "ZXY":
        this._x = h * l * u - c * f * d, this._y = c * f * u + h * l * d, this._z = c * l * d + h * f * u, this._w = c * l * u - h * f * d;
        break;
      case "ZYX":
        this._x = h * l * u - c * f * d, this._y = c * f * u + h * l * d, this._z = c * l * d - h * f * u, this._w = c * l * u + h * f * d;
        break;
      case "YZX":
        this._x = h * l * u + c * f * d, this._y = c * f * u + h * l * d, this._z = c * l * d - h * f * u, this._w = c * l * u - h * f * d;
        break;
      case "XZY":
        this._x = h * l * u - c * f * d, this._y = c * f * u - h * l * d, this._z = c * l * d + h * f * u, this._w = c * l * u + h * f * d;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t !== !1 && this._onChangeCallback(), this;
  },
  setFromAxisAngle: function(e, t) {
    var n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  },
  setFromRotationMatrix: function(e) {
    var t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], h = n + o + u, f;
    return h > 0 ? (f = 0.5 / Math.sqrt(h + 1), this._w = 0.25 / f, this._x = (l - s) * f, this._y = (i - c) * f, this._z = (a - r) * f) : n > o && n > u ? (f = 2 * Math.sqrt(1 + n - o - u), this._w = (l - s) / f, this._x = 0.25 * f, this._y = (r + a) / f, this._z = (i + c) / f) : o > u ? (f = 2 * Math.sqrt(1 + o - n - u), this._w = (i - c) / f, this._x = (r + a) / f, this._y = 0.25 * f, this._z = (s + l) / f) : (f = 2 * Math.sqrt(1 + u - n - o), this._w = (a - r) / f, this._x = (i + c) / f, this._y = (s + l) / f, this._z = 0.25 * f), this._onChangeCallback(), this;
  },
  setFromUnitVectors: function(e, t) {
    var n = 1e-6, r = e.dot(t) + 1;
    return r < n ? (r = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = r) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = r)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = r), this.normalize();
  },
  angleTo: function(e) {
    return 2 * Math.acos(Math.abs(Ae.clamp(this.dot(e), -1, 1)));
  },
  rotateTowards: function(e, t) {
    var n = this.angleTo(e);
    if (n === 0)
      return this;
    var r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  },
  inverse: function() {
    return this.conjugate();
  },
  conjugate: function() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  },
  dot: function(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  },
  lengthSq: function() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  },
  length: function() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  },
  normalize: function() {
    var e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  },
  multiply: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e);
  },
  premultiply: function(e) {
    return this.multiplyQuaternions(e, this);
  },
  multiplyQuaternions: function(e, t) {
    var n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
    return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
  },
  slerp: function(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    var n = this._x, r = this._y, i = this._z, a = this._w, o = a * e._w + n * e._x + r * e._y + i * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = r, this._z = i, this;
    var s = 1 - o * o;
    if (s <= Number.EPSILON) {
      var c = 1 - t;
      return this._w = c * a + t * this._w, this._x = c * n + t * this._x, this._y = c * r + t * this._y, this._z = c * i + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    var l = Math.sqrt(s), u = Math.atan2(l, o), h = Math.sin((1 - t) * u) / l, f = Math.sin(t * u) / l;
    return this._w = a * h + this._w * f, this._x = n * h + this._x * f, this._y = r * h + this._y * f, this._z = i * h + this._z * f, this._onChangeCallback(), this;
  },
  equals: function(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  },
  fromBufferAttribute: function(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  },
  _onChange: function(e) {
    return this._onChangeCallback = e, this;
  },
  _onChangeCallback: function() {
  }
});
var jo = new M(), Kc = new dt();
function M(e, t, n) {
  this.x = e || 0, this.y = t || 0, this.z = n || 0;
}
Object.assign(M.prototype, {
  isVector3: !0,
  set: function(e, t, n) {
    return this.x = e, this.y = t, this.z = n, this;
  },
  setScalar: function(e) {
    return this.x = e, this.y = e, this.z = e, this;
  },
  setX: function(e) {
    return this.x = e, this;
  },
  setY: function(e) {
    return this.y = e, this;
  },
  setZ: function(e) {
    return this.z = e, this;
  },
  setComponent: function(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  },
  getComponent: function(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  },
  clone: function() {
    return new this.constructor(this.x, this.y, this.z);
  },
  copy: function(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  },
  add: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this);
  },
  addScalar: function(e) {
    return this.x += e, this.y += e, this.z += e, this;
  },
  addVectors: function(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  },
  addScaledVector: function(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  },
  sub: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this);
  },
  subScalar: function(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  },
  subVectors: function(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  },
  multiply: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this);
  },
  multiplyScalar: function(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  },
  multiplyVectors: function(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  },
  applyEuler: function(e) {
    return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(Kc.setFromEuler(e));
  },
  applyAxisAngle: function(e, t) {
    return this.applyQuaternion(Kc.setFromAxisAngle(e, t));
  },
  applyMatrix3: function(e) {
    var t = this.x, n = this.y, r = this.z, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
  },
  applyNormalMatrix: function(e) {
    return this.applyMatrix3(e).normalize();
  },
  applyMatrix4: function(e) {
    var t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
    return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
  },
  applyQuaternion: function(e) {
    var t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = s * t + a * r - o * n, l = s * n + o * t - i * r, u = s * r + i * n - a * t, h = -i * t - a * n - o * r;
    return this.x = c * s + h * -i + l * -o - u * -a, this.y = l * s + h * -a + u * -i - c * -o, this.z = u * s + h * -o + c * -a - l * -i, this;
  },
  project: function(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  },
  unproject: function(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  },
  transformDirection: function(e) {
    var t = this.x, n = this.y, r = this.z, i = e.elements;
    return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
  },
  divide: function(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  },
  divideScalar: function(e) {
    return this.multiplyScalar(1 / e);
  },
  min: function(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  },
  max: function(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  },
  clamp: function(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  },
  clampScalar: function(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  },
  clampLength: function(e, t) {
    var n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  },
  floor: function() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  },
  ceil: function() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  },
  round: function() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  },
  roundToZero: function() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  },
  negate: function() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  },
  dot: function(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  },
  // TODO lengthSquared?
  lengthSq: function() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  },
  manhattanLength: function() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  },
  normalize: function() {
    return this.divideScalar(this.length() || 1);
  },
  setLength: function(e) {
    return this.normalize().multiplyScalar(e);
  },
  lerp: function(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  },
  lerpVectors: function(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  },
  cross: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e);
  },
  crossVectors: function(e, t) {
    var n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
    return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
  },
  projectOnVector: function(e) {
    var t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    var n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  },
  projectOnPlane: function(e) {
    return jo.copy(this).projectOnVector(e), this.sub(jo);
  },
  reflect: function(e) {
    return this.sub(jo.copy(e).multiplyScalar(2 * this.dot(e)));
  },
  angleTo: function(e) {
    var t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    var n = this.dot(e) / t;
    return Math.acos(Ae.clamp(n, -1, 1));
  },
  distanceTo: function(e) {
    return Math.sqrt(this.distanceToSquared(e));
  },
  distanceToSquared: function(e) {
    var t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  },
  manhattanDistanceTo: function(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  },
  setFromSpherical: function(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  },
  setFromSphericalCoords: function(e, t, n) {
    var r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  },
  setFromCylindrical: function(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  },
  setFromCylindricalCoords: function(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  },
  setFromMatrixPosition: function(e) {
    var t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  },
  setFromMatrixScale: function(e) {
    var t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  },
  setFromMatrixColumn: function(e, t) {
    return this.fromArray(e.elements, t * 4);
  },
  setFromMatrix3Column: function(e, t) {
    return this.fromArray(e.elements, t * 3);
  },
  equals: function(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  },
  fromBufferAttribute: function(e, t, n) {
    return n !== void 0 && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  },
  random: function() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
});
var hr = new M(), Wt = new Ce(), qf = new M(0, 0, 0), Xf = new M(1, 1, 1), En = new M(), pa = new M(), Pt = new M();
function Ce() {
  this.elements = [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
}
Object.assign(Ce.prototype, {
  isMatrix4: !0,
  set: function(e, t, n, r, i, a, o, s, c, l, u, h, f, d, m, g) {
    var y = this.elements;
    return y[0] = e, y[4] = t, y[8] = n, y[12] = r, y[1] = i, y[5] = a, y[9] = o, y[13] = s, y[2] = c, y[6] = l, y[10] = u, y[14] = h, y[3] = f, y[7] = d, y[11] = m, y[15] = g, this;
  },
  identity: function() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  clone: function() {
    return new Ce().fromArray(this.elements);
  },
  copy: function(e) {
    var t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  },
  copyPosition: function(e) {
    var t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  },
  extractBasis: function(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  },
  makeBasis: function(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  extractRotation: function(e) {
    var t = this.elements, n = e.elements, r = 1 / hr.setFromMatrixColumn(e, 0).length(), i = 1 / hr.setFromMatrixColumn(e, 1).length(), a = 1 / hr.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  },
  makeRotationFromEuler: function(e) {
    e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    var t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
    if (e.order === "XYZ") {
      var h = a * l, f = a * u, d = o * l, m = o * u;
      t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = f + d * c, t[5] = h - m * c, t[9] = -o * s, t[2] = m - h * c, t[6] = d + f * c, t[10] = a * s;
    } else if (e.order === "YXZ") {
      var g = s * l, y = s * u, p = c * l, v = c * u;
      t[0] = g + v * o, t[4] = p * o - y, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = y * o - p, t[6] = v + g * o, t[10] = a * s;
    } else if (e.order === "ZXY") {
      var g = s * l, y = s * u, p = c * l, v = c * u;
      t[0] = g - v * o, t[4] = -a * u, t[8] = p + y * o, t[1] = y + p * o, t[5] = a * l, t[9] = v - g * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
    } else if (e.order === "ZYX") {
      var h = a * l, f = a * u, d = o * l, m = o * u;
      t[0] = s * l, t[4] = d * c - f, t[8] = h * c + m, t[1] = s * u, t[5] = m * c + h, t[9] = f * c - d, t[2] = -c, t[6] = o * s, t[10] = a * s;
    } else if (e.order === "YZX") {
      var _ = a * s, b = a * c, x = o * s, T = o * c;
      t[0] = s * l, t[4] = T - _ * u, t[8] = x * u + b, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = b * u + x, t[10] = _ - T * u;
    } else if (e.order === "XZY") {
      var _ = a * s, b = a * c, x = o * s, T = o * c;
      t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = _ * u + T, t[5] = a * l, t[9] = b * u - x, t[2] = x * u - b, t[6] = o * l, t[10] = T * u + _;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  },
  makeRotationFromQuaternion: function(e) {
    return this.compose(qf, e, Xf);
  },
  lookAt: function(e, t, n) {
    var r = this.elements;
    return Pt.subVectors(e, t), Pt.lengthSq() === 0 && (Pt.z = 1), Pt.normalize(), En.crossVectors(n, Pt), En.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Pt.x += 1e-4 : Pt.z += 1e-4, Pt.normalize(), En.crossVectors(n, Pt)), En.normalize(), pa.crossVectors(Pt, En), r[0] = En.x, r[4] = pa.x, r[8] = Pt.x, r[1] = En.y, r[5] = pa.y, r[9] = Pt.y, r[2] = En.z, r[6] = pa.z, r[10] = Pt.z, this;
  },
  multiply: function(e, t) {
    return t !== void 0 ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e);
  },
  premultiply: function(e) {
    return this.multiplyMatrices(e, this);
  },
  multiplyMatrices: function(e, t) {
    var n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], h = n[9], f = n[13], d = n[2], m = n[6], g = n[10], y = n[14], p = n[3], v = n[7], _ = n[11], b = n[15], x = r[0], T = r[4], A = r[8], D = r[12], R = r[1], V = r[5], P = r[9], I = r[13], F = r[2], H = r[6], C = r[10], z = r[14], k = r[3], j = r[7], X = r[11], Y = r[15];
    return i[0] = a * x + o * R + s * F + c * k, i[4] = a * T + o * V + s * H + c * j, i[8] = a * A + o * P + s * C + c * X, i[12] = a * D + o * I + s * z + c * Y, i[1] = l * x + u * R + h * F + f * k, i[5] = l * T + u * V + h * H + f * j, i[9] = l * A + u * P + h * C + f * X, i[13] = l * D + u * I + h * z + f * Y, i[2] = d * x + m * R + g * F + y * k, i[6] = d * T + m * V + g * H + y * j, i[10] = d * A + m * P + g * C + y * X, i[14] = d * D + m * I + g * z + y * Y, i[3] = p * x + v * R + _ * F + b * k, i[7] = p * T + v * V + _ * H + b * j, i[11] = p * A + v * P + _ * C + b * X, i[15] = p * D + v * I + _ * z + b * Y, this;
  },
  multiplyScalar: function(e) {
    var t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  },
  determinant: function() {
    var e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], h = e[10], f = e[14], d = e[3], m = e[7], g = e[11], y = e[15];
    return d * (+i * s * u - r * c * u - i * o * h + n * c * h + r * o * f - n * s * f) + m * (+t * s * f - t * c * h + i * a * h - r * a * f + r * c * l - i * s * l) + g * (+t * c * u - t * o * f - i * a * u + n * a * f + i * o * l - n * c * l) + y * (-r * o * l - t * s * u + t * o * h + r * a * u - n * a * h + n * s * l);
  },
  transpose: function() {
    var e = this.elements, t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  },
  setPosition: function(e, t, n) {
    var r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  },
  getInverse: function(e, t) {
    t !== void 0 && console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");
    var n = this.elements, r = e.elements, i = r[0], a = r[1], o = r[2], s = r[3], c = r[4], l = r[5], u = r[6], h = r[7], f = r[8], d = r[9], m = r[10], g = r[11], y = r[12], p = r[13], v = r[14], _ = r[15], b = d * v * h - p * m * h + p * u * g - l * v * g - d * u * _ + l * m * _, x = y * m * h - f * v * h - y * u * g + c * v * g + f * u * _ - c * m * _, T = f * p * h - y * d * h + y * l * g - c * p * g - f * l * _ + c * d * _, A = y * d * u - f * p * u - y * l * m + c * p * m + f * l * v - c * d * v, D = i * b + a * x + o * T + s * A;
    if (D === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var R = 1 / D;
    return n[0] = b * R, n[1] = (p * m * s - d * v * s - p * o * g + a * v * g + d * o * _ - a * m * _) * R, n[2] = (l * v * s - p * u * s + p * o * h - a * v * h - l * o * _ + a * u * _) * R, n[3] = (d * u * s - l * m * s - d * o * h + a * m * h + l * o * g - a * u * g) * R, n[4] = x * R, n[5] = (f * v * s - y * m * s + y * o * g - i * v * g - f * o * _ + i * m * _) * R, n[6] = (y * u * s - c * v * s - y * o * h + i * v * h + c * o * _ - i * u * _) * R, n[7] = (c * m * s - f * u * s + f * o * h - i * m * h - c * o * g + i * u * g) * R, n[8] = T * R, n[9] = (y * d * s - f * p * s - y * a * g + i * p * g + f * a * _ - i * d * _) * R, n[10] = (c * p * s - y * l * s + y * a * h - i * p * h - c * a * _ + i * l * _) * R, n[11] = (f * l * s - c * d * s - f * a * h + i * d * h + c * a * g - i * l * g) * R, n[12] = A * R, n[13] = (f * p * o - y * d * o + y * a * m - i * p * m - f * a * v + i * d * v) * R, n[14] = (y * l * o - c * p * o - y * a * u + i * p * u + c * a * v - i * l * v) * R, n[15] = (c * d * o - f * l * o + f * a * u - i * d * u - c * a * m + i * l * m) * R, this;
  },
  scale: function(e) {
    var t = this.elements, n = e.x, r = e.y, i = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
  },
  getMaxScaleOnAxis: function() {
    var e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  },
  makeTranslation: function(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  },
  makeRotationX: function(e) {
    var t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeRotationY: function(e) {
    var t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeRotationZ: function(e) {
    var t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeRotationAxis: function(e, t) {
    var n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
    return this.set(
      c * a + n,
      c * o - r * s,
      c * s + r * o,
      0,
      c * o + r * s,
      l * o + n,
      l * s - r * a,
      0,
      c * s - r * o,
      l * s + r * a,
      i * s * s + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeScale: function(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  makeShear: function(e, t, n) {
    return this.set(
      1,
      t,
      n,
      0,
      e,
      1,
      n,
      0,
      e,
      t,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  },
  compose: function(e, t, n) {
    var r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, h = i * c, f = i * l, d = i * u, m = a * l, g = a * u, y = o * u, p = s * c, v = s * l, _ = s * u, b = n.x, x = n.y, T = n.z;
    return r[0] = (1 - (m + y)) * b, r[1] = (f + _) * b, r[2] = (d - v) * b, r[3] = 0, r[4] = (f - _) * x, r[5] = (1 - (h + y)) * x, r[6] = (g + p) * x, r[7] = 0, r[8] = (d + v) * T, r[9] = (g - p) * T, r[10] = (1 - (h + m)) * T, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  },
  decompose: function(e, t, n) {
    var r = this.elements, i = hr.set(r[0], r[1], r[2]).length(), a = hr.set(r[4], r[5], r[6]).length(), o = hr.set(r[8], r[9], r[10]).length(), s = this.determinant();
    s < 0 && (i = -i), e.x = r[12], e.y = r[13], e.z = r[14], Wt.copy(this);
    var c = 1 / i, l = 1 / a, u = 1 / o;
    return Wt.elements[0] *= c, Wt.elements[1] *= c, Wt.elements[2] *= c, Wt.elements[4] *= l, Wt.elements[5] *= l, Wt.elements[6] *= l, Wt.elements[8] *= u, Wt.elements[9] *= u, Wt.elements[10] *= u, t.setFromRotationMatrix(Wt), n.x = i, n.y = a, n.z = o, this;
  },
  makePerspective: function(e, t, n, r, i, a) {
    a === void 0 && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
    var o = this.elements, s = 2 * i / (t - e), c = 2 * i / (n - r), l = (t + e) / (t - e), u = (n + r) / (n - r), h = -(a + i) / (a - i), f = -2 * a * i / (a - i);
    return o[0] = s, o[4] = 0, o[8] = l, o[12] = 0, o[1] = 0, o[5] = c, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = h, o[14] = f, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
  },
  makeOrthographic: function(e, t, n, r, i, a) {
    var o = this.elements, s = 1 / (t - e), c = 1 / (n - r), l = 1 / (a - i), u = (t + e) * s, h = (n + r) * c, f = (a + i) * l;
    return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -h, o[2] = 0, o[6] = 0, o[10] = -2 * l, o[14] = -f, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
  },
  equals: function(e) {
    for (var t = this.elements, n = e.elements, r = 0; r < 16; r++)
      if (t[r] !== n[r])
        return !1;
    return !0;
  },
  fromArray: function(e, t) {
    t === void 0 && (t = 0);
    for (var n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  },
  toArray: function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = 0);
    var n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
});
var el = new Ce(), tl = new dt();
function ri(e, t, n, r) {
  this._x = e || 0, this._y = t || 0, this._z = n || 0, this._order = r || ri.DefaultOrder;
}
ri.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
ri.DefaultOrder = "XYZ";
Object.defineProperties(ri.prototype, {
  x: {
    get: function() {
      return this._x;
    },
    set: function(e) {
      this._x = e, this._onChangeCallback();
    }
  },
  y: {
    get: function() {
      return this._y;
    },
    set: function(e) {
      this._y = e, this._onChangeCallback();
    }
  },
  z: {
    get: function() {
      return this._z;
    },
    set: function(e) {
      this._z = e, this._onChangeCallback();
    }
  },
  order: {
    get: function() {
      return this._order;
    },
    set: function(e) {
      this._order = e, this._onChangeCallback();
    }
  }
});
Object.assign(ri.prototype, {
  isEuler: !0,
  set: function(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._order = r || this._order, this._onChangeCallback(), this;
  },
  clone: function() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  },
  copy: function(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  },
  setFromRotationMatrix: function(e, t, n) {
    var r = Ae.clamp, i = e.elements, a = i[0], o = i[4], s = i[8], c = i[1], l = i[5], u = i[9], h = i[2], f = i[6], d = i[10];
    switch (t = t || this._order, t) {
      case "XYZ":
        this._y = Math.asin(r(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-r(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-h, a), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(r(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, a));
        break;
      case "ZYX":
        this._y = Math.asin(-r(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(r(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-h, a)) : (this._x = 0, this._y = Math.atan2(s, d));
        break;
      case "XZY":
        this._z = Math.asin(-r(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-u, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n !== !1 && this._onChangeCallback(), this;
  },
  setFromQuaternion: function(e, t, n) {
    return el.makeRotationFromQuaternion(e), this.setFromRotationMatrix(el, t, n);
  },
  setFromVector3: function(e, t) {
    return this.set(e.x, e.y, e.z, t || this._order);
  },
  reorder: function(e) {
    return tl.setFromEuler(this), this.setFromQuaternion(tl, e);
  },
  equals: function(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  },
  fromArray: function(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  },
  toVector3: function(e) {
    return e ? e.set(this._x, this._y, this._z) : new M(this._x, this._y, this._z);
  },
  _onChange: function(e) {
    return this._onChangeCallback = e, this;
  },
  _onChangeCallback: function() {
  }
});
function Rc() {
  this.mask = 1;
}
Object.assign(Rc.prototype, {
  set: function(e) {
    this.mask = 1 << e | 0;
  },
  enable: function(e) {
    this.mask |= 1 << e | 0;
  },
  enableAll: function() {
    this.mask = -1;
  },
  toggle: function(e) {
    this.mask ^= 1 << e | 0;
  },
  disable: function(e) {
    this.mask &= ~(1 << e | 0);
  },
  disableAll: function() {
    this.mask = 0;
  },
  test: function(e) {
    return (this.mask & e.mask) !== 0;
  }
});
let jf = 0;
const nl = new M(), fr = new dt(), hn = new Ce(), va = new M(), li = new M(), Yf = new M(), Zf = new dt(), rl = new M(1, 0, 0), il = new M(0, 1, 0), al = new M(0, 0, 1), Jf = { type: "added" }, $f = { type: "removed" };
function Q() {
  Object.defineProperty(this, "id", { value: jf++ }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Q.DefaultUp.clone();
  var e = new M(), t = new ri(), n = new dt(), r = new M(1, 1, 1);
  function i() {
    n.setFromEuler(t, !1);
  }
  function a() {
    t.setFromQuaternion(n, void 0, !1);
  }
  t._onChange(i), n._onChange(a), Object.defineProperties(this, {
    position: {
      configurable: !0,
      enumerable: !0,
      value: e
    },
    rotation: {
      configurable: !0,
      enumerable: !0,
      value: t
    },
    quaternion: {
      configurable: !0,
      enumerable: !0,
      value: n
    },
    scale: {
      configurable: !0,
      enumerable: !0,
      value: r
    },
    modelViewMatrix: {
      value: new Ce()
    },
    normalMatrix: {
      value: new wt()
    }
  }), this.matrix = new Ce(), this.matrixWorld = new Ce(), this.matrixAutoUpdate = Q.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Rc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {};
}
Q.DefaultUp = new M(0, 1, 0);
Q.DefaultMatrixAutoUpdate = !0;
Q.prototype = Object.assign(Object.create(wn.prototype), {
  constructor: Q,
  isObject3D: !0,
  onBeforeRender: function() {
  },
  onAfterRender: function() {
  },
  applyMatrix4: function(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  },
  applyQuaternion: function(e) {
    return this.quaternion.premultiply(e), this;
  },
  setRotationFromAxisAngle: function(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  },
  setRotationFromEuler: function(e) {
    this.quaternion.setFromEuler(e, !0);
  },
  setRotationFromMatrix: function(e) {
    this.quaternion.setFromRotationMatrix(e);
  },
  setRotationFromQuaternion: function(e) {
    this.quaternion.copy(e);
  },
  rotateOnAxis: function(e, t) {
    return fr.setFromAxisAngle(e, t), this.quaternion.multiply(fr), this;
  },
  rotateOnWorldAxis: function(e, t) {
    return fr.setFromAxisAngle(e, t), this.quaternion.premultiply(fr), this;
  },
  rotateX: function(e) {
    return this.rotateOnAxis(rl, e);
  },
  rotateY: function(e) {
    return this.rotateOnAxis(il, e);
  },
  rotateZ: function(e) {
    return this.rotateOnAxis(al, e);
  },
  translateOnAxis: function(e, t) {
    return nl.copy(e).applyQuaternion(this.quaternion), this.position.add(nl.multiplyScalar(t)), this;
  },
  translateX: function(e) {
    return this.translateOnAxis(rl, e);
  },
  translateY: function(e) {
    return this.translateOnAxis(il, e);
  },
  translateZ: function(e) {
    return this.translateOnAxis(al, e);
  },
  localToWorld: function(e) {
    return e.applyMatrix4(this.matrixWorld);
  },
  worldToLocal: function(e) {
    return e.applyMatrix4(hn.getInverse(this.matrixWorld));
  },
  lookAt: function(e, t, n) {
    e.isVector3 ? va.copy(e) : va.set(e, t, n);
    var r = this.parent;
    this.updateWorldMatrix(!0, !1), li.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? hn.lookAt(li, va, this.up) : hn.lookAt(va, li, this.up), this.quaternion.setFromRotationMatrix(hn), r && (hn.extractRotation(r.matrixWorld), fr.setFromRotationMatrix(hn), this.quaternion.premultiply(fr.inverse()));
  },
  add: function(e) {
    if (arguments.length > 1) {
      for (var t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Jf)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  },
  remove: function(e) {
    if (arguments.length > 1) {
      for (var t = 0; t < arguments.length; t++)
        this.remove(arguments[t]);
      return this;
    }
    var n = this.children.indexOf(e);
    return n !== -1 && (e.parent = null, this.children.splice(n, 1), e.dispatchEvent($f)), this;
  },
  attach: function(e) {
    return this.updateWorldMatrix(!0, !1), hn.getInverse(this.matrixWorld), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), hn.multiply(e.parent.matrixWorld)), e.applyMatrix4(hn), e.updateWorldMatrix(!1, !1), this.add(e), this;
  },
  getObjectById: function(e) {
    return this.getObjectByProperty("id", e);
  },
  getObjectByName: function(e) {
    return this.getObjectByProperty("name", e);
  },
  getObjectByProperty: function(e, t) {
    if (this[e] === t)
      return this;
    for (var n = 0, r = this.children.length; n < r; n++) {
      var i = this.children[n], a = i.getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  },
  getWorldPosition: function(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new M()), this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld);
  },
  getWorldQuaternion: function(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), e = new dt()), this.updateMatrixWorld(!0), this.matrixWorld.decompose(li, e, Yf), e;
  },
  getWorldScale: function(e) {
    return e === void 0 && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), e = new M()), this.updateMatrixWorld(!0), this.matrixWorld.decompose(li, Zf, e), e;
  },
  getWorldDirection: function(e) {
    e === void 0 && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new M()), this.updateMatrixWorld(!0);
    var t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  },
  raycast: function() {
  },
  traverse: function(e) {
    e(this);
    for (var t = this.children, n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  },
  traverseVisible: function(e) {
    if (this.visible !== !1) {
      e(this);
      for (var t = this.children, n = 0, r = t.length; n < r; n++)
        t[n].traverseVisible(e);
    }
  },
  traverseAncestors: function(e) {
    var t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  },
  updateMatrix: function() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  },
  updateMatrixWorld: function(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    for (var t = this.children, n = 0, r = t.length; n < r; n++)
      t[n].updateMatrixWorld(e);
  },
  updateWorldMatrix: function(e, t) {
    var n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0)
      for (var r = this.children, i = 0, a = r.length; i < a; i++)
        r[i].updateWorldMatrix(!1, !0);
  },
  toJSON: function(e) {
    var t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    var r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON());
    function i(y, p) {
      return y[p.uuid] === void 0 && (y[p.uuid] = p.toJSON(e)), p.uuid;
    }
    if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = i(e.geometries, this.geometry);
      var a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        var o = a.shapes;
        if (Array.isArray(o))
          for (var s = 0, c = o.length; s < c; s++) {
            var l = o[s];
            i(e.shapes, l);
          }
        else
          i(e.shapes, o);
      }
    }
    if (this.material !== void 0)
      if (Array.isArray(this.material)) {
        for (var u = [], s = 0, c = this.material.length; s < c; s++)
          u.push(i(e.materials, this.material[s]));
        r.material = u;
      } else
        r.material = i(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (var s = 0; s < this.children.length; s++)
        r.children.push(this.children[s].toJSON(e).object);
    }
    if (t) {
      var h = g(e.geometries), f = g(e.materials), d = g(e.textures), m = g(e.images), o = g(e.shapes);
      h.length > 0 && (n.geometries = h), f.length > 0 && (n.materials = f), d.length > 0 && (n.textures = d), m.length > 0 && (n.images = m), o.length > 0 && (n.shapes = o);
    }
    return n.object = r, n;
    function g(y) {
      var p = [];
      for (var v in y) {
        var _ = y[v];
        delete _.metadata, p.push(_);
      }
      return p;
    }
  },
  clone: function(e) {
    return new this.constructor().copy(this, e);
  },
  copy: function(e, t) {
    if (t === void 0 && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (var n = 0; n < e.children.length; n++) {
        var r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
});
function Ri() {
  Q.call(this), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
Ri.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: Ri,
  isScene: !0,
  copy: function(e, t) {
    return Q.prototype.copy.call(this, e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  },
  toJSON: function(e) {
    var t = Q.prototype.toJSON.call(this, e);
    return this.background !== null && (t.object.background = this.background.toJSON(e)), this.environment !== null && (t.object.environment = this.environment.toJSON(e)), this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
var fn = [
  new M(),
  new M(),
  new M(),
  new M(),
  new M(),
  new M(),
  new M(),
  new M()
], ui = new M(), Yo = new un(), dr = new M(), pr = new M(), vr = new M(), Tn = new M(), An = new M(), qn = new M(), hi = new M(), ma = new M(), ga = new M(), Xn = new M();
function un(e, t) {
  this.min = e !== void 0 ? e : new M(1 / 0, 1 / 0, 1 / 0), this.max = t !== void 0 ? t : new M(-1 / 0, -1 / 0, -1 / 0);
}
Object.assign(un.prototype, {
  isBox3: !0,
  set: function(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  },
  setFromArray: function(e) {
    for (var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = e.length; s < c; s += 3) {
      var l = e[s], u = e[s + 1], h = e[s + 2];
      l < t && (t = l), u < n && (n = u), h < r && (r = h), l > i && (i = l), u > a && (a = u), h > o && (o = h);
    }
    return this.min.set(t, n, r), this.max.set(i, a, o), this;
  },
  setFromBufferAttribute: function(e) {
    for (var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = e.count; s < c; s++) {
      var l = e.getX(s), u = e.getY(s), h = e.getZ(s);
      l < t && (t = l), u < n && (n = u), h < r && (r = h), l > i && (i = l), u > a && (a = u), h > o && (o = h);
    }
    return this.min.set(t, n, r), this.max.set(i, a, o), this;
  },
  setFromPoints: function(e) {
    this.makeEmpty();
    for (var t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  },
  setFromCenterAndSize: function(e, t) {
    var n = ui.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  },
  setFromObject: function(e) {
    return this.makeEmpty(), this.expandByObject(e);
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  },
  makeEmpty: function() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  },
  isEmpty: function() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  },
  getCenter: function(e) {
    return e === void 0 && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new M()), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  },
  getSize: function(e) {
    return e === void 0 && (console.warn("THREE.Box3: .getSize() target is now required"), e = new M()), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  },
  expandByPoint: function(e) {
    return this.min.min(e), this.max.max(e), this;
  },
  expandByVector: function(e) {
    return this.min.sub(e), this.max.add(e), this;
  },
  expandByScalar: function(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  },
  expandByObject: function(e) {
    e.updateWorldMatrix(!1, !1);
    var t = e.geometry;
    t !== void 0 && (t.boundingBox === null && t.computeBoundingBox(), Yo.copy(t.boundingBox), Yo.applyMatrix4(e.matrixWorld), this.union(Yo));
    for (var n = e.children, r = 0, i = n.length; r < i; r++)
      this.expandByObject(n[r]);
    return this;
  },
  containsPoint: function(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  },
  containsBox: function(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  },
  getParameter: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new M()), t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  },
  intersectsBox: function(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  },
  intersectsSphere: function(e) {
    return this.clampPoint(e.center, ui), ui.distanceToSquared(e.center) <= e.radius * e.radius;
  },
  intersectsPlane: function(e) {
    var t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  },
  intersectsTriangle: function(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(hi), ma.subVectors(this.max, hi), dr.subVectors(e.a, hi), pr.subVectors(e.b, hi), vr.subVectors(e.c, hi), Tn.subVectors(pr, dr), An.subVectors(vr, pr), qn.subVectors(dr, vr);
    var t = [
      0,
      -Tn.z,
      Tn.y,
      0,
      -An.z,
      An.y,
      0,
      -qn.z,
      qn.y,
      Tn.z,
      0,
      -Tn.x,
      An.z,
      0,
      -An.x,
      qn.z,
      0,
      -qn.x,
      -Tn.y,
      Tn.x,
      0,
      -An.y,
      An.x,
      0,
      -qn.y,
      qn.x,
      0
    ];
    return !Zo(t, dr, pr, vr, ma) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Zo(t, dr, pr, vr, ma)) ? !1 : (ga.crossVectors(Tn, An), t = [ga.x, ga.y, ga.z], Zo(t, dr, pr, vr, ma));
  },
  clampPoint: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new M()), t.copy(e).clamp(this.min, this.max);
  },
  distanceToPoint: function(e) {
    var t = ui.copy(e).clamp(this.min, this.max);
    return t.sub(e).length();
  },
  getBoundingSphere: function(e) {
    return e === void 0 && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(e.center), e.radius = this.getSize(ui).length() * 0.5, e;
  },
  intersect: function(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  },
  union: function(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  },
  applyMatrix4: function(e) {
    return this.isEmpty() ? this : (fn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), fn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), fn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), fn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), fn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), fn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), fn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), fn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(fn), this);
  },
  translate: function(e) {
    return this.min.add(e), this.max.add(e), this;
  },
  equals: function(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
});
function Zo(e, t, n, r, i) {
  var a, o;
  for (a = 0, o = e.length - 3; a <= o; a += 3) {
    Xn.fromArray(e, a);
    var s = i.x * Math.abs(Xn.x) + i.y * Math.abs(Xn.y) + i.z * Math.abs(Xn.z), c = t.dot(Xn), l = n.dot(Xn), u = r.dot(Xn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > s)
      return !1;
  }
  return !0;
}
var Qf = new un();
function Sn(e, t) {
  this.center = e !== void 0 ? e : new M(), this.radius = t !== void 0 ? t : -1;
}
Object.assign(Sn.prototype, {
  set: function(e, t) {
    return this.center.copy(e), this.radius = t, this;
  },
  setFromPoints: function(e, t) {
    var n = this.center;
    t !== void 0 ? n.copy(t) : Qf.setFromPoints(e).getCenter(n);
    for (var r = 0, i = 0, a = e.length; i < a; i++)
      r = Math.max(r, n.distanceToSquared(e[i]));
    return this.radius = Math.sqrt(r), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  },
  isEmpty: function() {
    return this.radius < 0;
  },
  makeEmpty: function() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  },
  containsPoint: function(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  },
  distanceToPoint: function(e) {
    return e.distanceTo(this.center) - this.radius;
  },
  intersectsSphere: function(e) {
    var t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  },
  intersectsBox: function(e) {
    return e.intersectsSphere(this);
  },
  intersectsPlane: function(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  },
  clampPoint: function(e, t) {
    var n = this.center.distanceToSquared(e);
    return t === void 0 && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new M()), t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  },
  getBoundingBox: function(e) {
    return e === void 0 && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new un()), this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  },
  applyMatrix4: function(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  },
  translate: function(e) {
    return this.center.add(e), this;
  },
  equals: function(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
});
var dn = new M(), Jo = new M(), ya = new M(), Ln = new M(), $o = new M(), xa = new M(), Qo = new M();
function ii(e, t) {
  this.origin = e !== void 0 ? e : new M(), this.direction = t !== void 0 ? t : new M(0, 0, -1);
}
Object.assign(ii.prototype, {
  set: function(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  },
  at: function(e, t) {
    return t === void 0 && (console.warn("THREE.Ray: .at() target is now required"), t = new M()), t.copy(this.direction).multiplyScalar(e).add(this.origin);
  },
  lookAt: function(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  },
  recast: function(e) {
    return this.origin.copy(this.at(e, dn)), this;
  },
  closestPointToPoint: function(e, t) {
    t === void 0 && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new M()), t.subVectors(e, this.origin);
    var n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  },
  distanceToPoint: function(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  },
  distanceSqToPoint: function(e) {
    var t = dn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (dn.copy(this.direction).multiplyScalar(t).add(this.origin), dn.distanceToSquared(e));
  },
  distanceSqToSegment: function(e, t, n, r) {
    Jo.copy(e).add(t).multiplyScalar(0.5), ya.copy(t).sub(e).normalize(), Ln.copy(this.origin).sub(Jo);
    var i = e.distanceTo(t) * 0.5, a = -this.direction.dot(ya), o = Ln.dot(this.direction), s = -Ln.dot(ya), c = Ln.lengthSq(), l = Math.abs(1 - a * a), u, h, f, d;
    if (l > 0)
      if (u = a * s - o, h = a * o - s, d = i * l, u >= 0)
        if (h >= -d)
          if (h <= d) {
            var m = 1 / l;
            u *= m, h *= m, f = u * (u + a * h + 2 * o) + h * (a * u + h + 2 * s) + c;
          } else
            h = i, u = Math.max(0, -(a * h + o)), f = -u * u + h * (h + 2 * s) + c;
        else
          h = -i, u = Math.max(0, -(a * h + o)), f = -u * u + h * (h + 2 * s) + c;
      else
        h <= -d ? (u = Math.max(0, -(-a * i + o)), h = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + h * (h + 2 * s) + c) : h <= d ? (u = 0, h = Math.min(Math.max(-i, -s), i), f = h * (h + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), h = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + h * (h + 2 * s) + c);
    else
      h = a > 0 ? -i : i, u = Math.max(0, -(a * h + o)), f = -u * u + h * (h + 2 * s) + c;
    return n && n.copy(this.direction).multiplyScalar(u).add(this.origin), r && r.copy(ya).multiplyScalar(h).add(Jo), f;
  },
  intersectSphere: function(e, t) {
    dn.subVectors(e.center, this.origin);
    var n = dn.dot(this.direction), r = dn.dot(dn) - n * n, i = e.radius * e.radius;
    if (r > i)
      return null;
    var a = Math.sqrt(i - r), o = n - a, s = n + a;
    return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
  },
  intersectsSphere: function(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  },
  distanceToPlane: function(e) {
    var t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    var n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  },
  intersectPlane: function(e, t) {
    var n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  },
  intersectsPlane: function(e) {
    var t = e.distanceToPoint(this.origin);
    if (t === 0)
      return !0;
    var n = e.normal.dot(this.direction);
    return n * t < 0;
  },
  intersectBox: function(e, t) {
    var n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, h = this.origin;
    return c >= 0 ? (n = (e.min.x - h.x) * c, r = (e.max.x - h.x) * c) : (n = (e.max.x - h.x) * c, r = (e.min.x - h.x) * c), l >= 0 ? (i = (e.min.y - h.y) * l, a = (e.max.y - h.y) * l) : (i = (e.max.y - h.y) * l, a = (e.min.y - h.y) * l), n > a || i > r || ((i > n || n !== n) && (n = i), (a < r || r !== r) && (r = a), u >= 0 ? (o = (e.min.z - h.z) * u, s = (e.max.z - h.z) * u) : (o = (e.max.z - h.z) * u, s = (e.min.z - h.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  },
  intersectsBox: function(e) {
    return this.intersectBox(e, dn) !== null;
  },
  intersectTriangle: function(e, t, n, r, i) {
    $o.subVectors(t, e), xa.subVectors(n, e), Qo.crossVectors($o, xa);
    var a = this.direction.dot(Qo), o;
    if (a > 0) {
      if (r)
        return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Ln.subVectors(this.origin, e);
    var s = o * this.direction.dot(xa.crossVectors(Ln, xa));
    if (s < 0)
      return null;
    var c = o * this.direction.dot($o.cross(Ln));
    if (c < 0 || s + c > a)
      return null;
    var l = -o * Ln.dot(Qo);
    return l < 0 ? null : this.at(l / a, i);
  },
  applyMatrix4: function(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  },
  equals: function(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
});
var Ko = new M(), Kf = new M(), ed = new wt();
function tn(e, t) {
  this.normal = e !== void 0 ? e : new M(1, 0, 0), this.constant = t !== void 0 ? t : 0;
}
Object.assign(tn.prototype, {
  isPlane: !0,
  set: function(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  },
  setComponents: function(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  },
  setFromNormalAndCoplanarPoint: function(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  },
  setFromCoplanarPoints: function(e, t, n) {
    var r = Ko.subVectors(n, t).cross(Kf.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  },
  normalize: function() {
    var e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  },
  negate: function() {
    return this.constant *= -1, this.normal.negate(), this;
  },
  distanceToPoint: function(e) {
    return this.normal.dot(e) + this.constant;
  },
  distanceToSphere: function(e) {
    return this.distanceToPoint(e.center) - e.radius;
  },
  projectPoint: function(e, t) {
    return t === void 0 && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new M()), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  },
  intersectLine: function(e, t) {
    t === void 0 && (console.warn("THREE.Plane: .intersectLine() target is now required"), t = new M());
    var n = e.delta(Ko), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : void 0;
    var i = -(e.start.dot(this.normal) + this.constant) / r;
    if (!(i < 0 || i > 1))
      return t.copy(n).multiplyScalar(i).add(e.start);
  },
  intersectsLine: function(e) {
    var t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  },
  intersectsBox: function(e) {
    return e.intersectsPlane(this);
  },
  intersectsSphere: function(e) {
    return e.intersectsPlane(this);
  },
  coplanarPoint: function(e) {
    return e === void 0 && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new M()), e.copy(this.normal).multiplyScalar(-this.constant);
  },
  applyMatrix4: function(e, t) {
    var n = t || ed.getNormalMatrix(e), r = this.coplanarPoint(Ko).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(i), this;
  },
  translate: function(e) {
    return this.constant -= e.dot(this.normal), this;
  },
  equals: function(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
});
var jt = new M(), vn = new M(), es = new M(), pn = new M(), mr = new M(), gr = new M(), ol = new M(), ts = new M(), ns = new M(), rs = new M();
function mt(e, t, n) {
  this.a = e !== void 0 ? e : new M(), this.b = t !== void 0 ? t : new M(), this.c = n !== void 0 ? n : new M();
}
Object.assign(mt, {
  getNormal: function(e, t, n, r) {
    r === void 0 && (console.warn("THREE.Triangle: .getNormal() target is now required"), r = new M()), r.subVectors(n, t), jt.subVectors(e, t), r.cross(jt);
    var i = r.lengthSq();
    return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
  },
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  getBarycoord: function(e, t, n, r, i) {
    jt.subVectors(r, t), vn.subVectors(n, t), es.subVectors(e, t);
    var a = jt.dot(jt), o = jt.dot(vn), s = jt.dot(es), c = vn.dot(vn), l = vn.dot(es), u = a * c - o * o;
    if (i === void 0 && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), i = new M()), u === 0)
      return i.set(-2, -1, -1);
    var h = 1 / u, f = (c * s - o * l) * h, d = (a * l - o * s) * h;
    return i.set(1 - f - d, d, f);
  },
  containsPoint: function(e, t, n, r) {
    return mt.getBarycoord(e, t, n, r, pn), pn.x >= 0 && pn.y >= 0 && pn.x + pn.y <= 1;
  },
  getUV: function(e, t, n, r, i, a, o, s) {
    return this.getBarycoord(e, t, n, r, pn), s.set(0, 0), s.addScaledVector(i, pn.x), s.addScaledVector(a, pn.y), s.addScaledVector(o, pn.z), s;
  },
  isFrontFacing: function(e, t, n, r) {
    return jt.subVectors(n, t), vn.subVectors(e, t), jt.cross(vn).dot(r) < 0;
  }
});
Object.assign(mt.prototype, {
  set: function(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  },
  setFromPointsAndIndices: function(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  },
  getArea: function() {
    return jt.subVectors(this.c, this.b), vn.subVectors(this.a, this.b), jt.cross(vn).length() * 0.5;
  },
  getMidpoint: function(e) {
    return e === void 0 && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new M()), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  },
  getNormal: function(e) {
    return mt.getNormal(this.a, this.b, this.c, e);
  },
  getPlane: function(e) {
    return e === void 0 && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new tn()), e.setFromCoplanarPoints(this.a, this.b, this.c);
  },
  getBarycoord: function(e, t) {
    return mt.getBarycoord(e, this.a, this.b, this.c, t);
  },
  getUV: function(e, t, n, r, i) {
    return mt.getUV(e, this.a, this.b, this.c, t, n, r, i);
  },
  containsPoint: function(e) {
    return mt.containsPoint(e, this.a, this.b, this.c);
  },
  isFrontFacing: function(e) {
    return mt.isFrontFacing(this.a, this.b, this.c, e);
  },
  intersectsBox: function(e) {
    return e.intersectsTriangle(this);
  },
  closestPointToPoint: function(e, t) {
    t === void 0 && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), t = new M());
    var n = this.a, r = this.b, i = this.c, a, o;
    mr.subVectors(r, n), gr.subVectors(i, n), ts.subVectors(e, n);
    var s = mr.dot(ts), c = gr.dot(ts);
    if (s <= 0 && c <= 0)
      return t.copy(n);
    ns.subVectors(e, r);
    var l = mr.dot(ns), u = gr.dot(ns);
    if (l >= 0 && u <= l)
      return t.copy(r);
    var h = s * u - l * c;
    if (h <= 0 && s >= 0 && l <= 0)
      return a = s / (s - l), t.copy(n).addScaledVector(mr, a);
    rs.subVectors(e, i);
    var f = mr.dot(rs), d = gr.dot(rs);
    if (d >= 0 && f <= d)
      return t.copy(i);
    var m = f * c - s * d;
    if (m <= 0 && c >= 0 && d <= 0)
      return o = c / (c - d), t.copy(n).addScaledVector(gr, o);
    var g = l * d - f * u;
    if (g <= 0 && u - l >= 0 && f - d >= 0)
      return ol.subVectors(i, r), o = (u - l) / (u - l + (f - d)), t.copy(r).addScaledVector(ol, o);
    var y = 1 / (g + m + h);
    return a = m * y, o = h * y, t.copy(n).addScaledVector(mr, a).addScaledVector(gr, o);
  },
  equals: function(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
});
var Lu = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, qt = { h: 0, s: 0, l: 0 }, _a = { h: 0, s: 0, l: 0 };
function ee(e, t, n) {
  return t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
}
function is(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
function as(e) {
  return e < 0.04045 ? e * 0.0773993808 : Math.pow(e * 0.9478672986 + 0.0521327014, 2.4);
}
function os(e) {
  return e < 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
Object.assign(ee.prototype, {
  isColor: !0,
  r: 1,
  g: 1,
  b: 1,
  set: function(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  },
  setScalar: function(e) {
    return this.r = e, this.g = e, this.b = e, this;
  },
  setHex: function(e) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this;
  },
  setRGB: function(e, t, n) {
    return this.r = e, this.g = t, this.b = n, this;
  },
  setHSL: function(e, t, n) {
    if (e = Ae.euclideanModulo(e, 1), t = Ae.clamp(t, 0, 1), n = Ae.clamp(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      var r = n <= 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
      this.r = is(i, r, e + 1 / 3), this.g = is(i, r, e), this.b = is(i, r, e - 1 / 3);
    }
    return this;
  },
  setStyle: function(e) {
    function t(h) {
      h !== void 0 && parseFloat(h) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    var n;
    if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
      var r, i = n[1], a = n[2];
      switch (i) {
        case "rgb":
        case "rgba":
          if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
            return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, t(r[5]), this;
          if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, t(r[5]), this;
          break;
        case "hsl":
        case "hsla":
          if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
            var o = parseFloat(r[1]) / 360, s = parseInt(r[2], 10) / 100, c = parseInt(r[3], 10) / 100;
            return t(r[5]), this.setHSL(o, s, c);
          }
          break;
      }
    } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
      var l = n[1], u = l.length;
      if (u === 3)
        return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255, this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255, this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255, this;
      if (u === 6)
        return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255, this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255, this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255, this;
    }
    return e && e.length > 0 ? this.setColorName(e) : this;
  },
  setColorName: function(e) {
    var t = Lu[e];
    return t !== void 0 ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this;
  },
  clone: function() {
    return new this.constructor(this.r, this.g, this.b);
  },
  copy: function(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  },
  copyGammaToLinear: function(e, t) {
    return t === void 0 && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this;
  },
  copyLinearToGamma: function(e, t) {
    t === void 0 && (t = 2);
    var n = t > 0 ? 1 / t : 1;
    return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this;
  },
  convertGammaToLinear: function(e) {
    return this.copyGammaToLinear(this, e), this;
  },
  convertLinearToGamma: function(e) {
    return this.copyLinearToGamma(this, e), this;
  },
  copySRGBToLinear: function(e) {
    return this.r = as(e.r), this.g = as(e.g), this.b = as(e.b), this;
  },
  copyLinearToSRGB: function(e) {
    return this.r = os(e.r), this.g = os(e.g), this.b = os(e.b), this;
  },
  convertSRGBToLinear: function() {
    return this.copySRGBToLinear(this), this;
  },
  convertLinearToSRGB: function() {
    return this.copyLinearToSRGB(this), this;
  },
  getHex: function() {
    return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
  },
  getHexString: function() {
    return ("000000" + this.getHex().toString(16)).slice(-6);
  },
  getHSL: function(e) {
    e === void 0 && (console.warn("THREE.Color: .getHSL() target is now required"), e = { h: 0, s: 0, l: 0 });
    var t = this.r, n = this.g, r = this.b, i = Math.max(t, n, r), a = Math.min(t, n, r), o, s, c = (a + i) / 2;
    if (a === i)
      o = 0, s = 0;
    else {
      var l = i - a;
      switch (s = c <= 0.5 ? l / (i + a) : l / (2 - i - a), i) {
        case t:
          o = (n - r) / l + (n < r ? 6 : 0);
          break;
        case n:
          o = (r - t) / l + 2;
          break;
        case r:
          o = (t - n) / l + 4;
          break;
      }
      o /= 6;
    }
    return e.h = o, e.s = s, e.l = c, e;
  },
  getStyle: function() {
    return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")";
  },
  offsetHSL: function(e, t, n) {
    return this.getHSL(qt), qt.h += e, qt.s += t, qt.l += n, this.setHSL(qt.h, qt.s, qt.l), this;
  },
  add: function(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  },
  addColors: function(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  },
  addScalar: function(e) {
    return this.r += e, this.g += e, this.b += e, this;
  },
  sub: function(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  },
  multiply: function(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  },
  multiplyScalar: function(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  },
  lerp: function(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  },
  lerpHSL: function(e, t) {
    this.getHSL(qt), e.getHSL(_a);
    var n = Ae.lerp(qt.h, _a.h, t), r = Ae.lerp(qt.s, _a.s, t), i = Ae.lerp(qt.l, _a.l, t);
    return this.setHSL(n, r, i), this;
  },
  equals: function(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  },
  fromArray: function(e, t) {
    return t === void 0 && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  },
  toArray: function(e, t) {
    return e === void 0 && (e = []), t === void 0 && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  },
  toJSON: function() {
    return this.getHex();
  }
});
ee.NAMES = Lu;
function io(e, t, n, r, i, a) {
  this.a = e, this.b = t, this.c = n, this.normal = r && r.isVector3 ? r : new M(), this.vertexNormals = Array.isArray(r) ? r : [], this.color = i && i.isColor ? i : new ee(), this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = a !== void 0 ? a : 0;
}
Object.assign(io.prototype, {
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
    for (var t = 0, n = e.vertexNormals.length; t < n; t++)
      this.vertexNormals[t] = e.vertexNormals[t].clone();
    for (var t = 0, n = e.vertexColors.length; t < n; t++)
      this.vertexColors[t] = e.vertexColors[t].clone();
    return this;
  }
});
var td = 0;
function ve() {
  Object.defineProperty(this, "id", { value: td++ }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = Mi, this.side = sa, this.flatShading = !1, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = yu, this.blendDst = xu, this.blendEquation = Ar, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Es, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = kf, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Xo, this.stencilZFail = Xo, this.stencilZPass = Xo, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0;
}
ve.prototype = Object.assign(Object.create(wn.prototype), {
  constructor: ve,
  isMaterial: !0,
  onBeforeCompile: function() {
  },
  setValues: function(e) {
    if (e !== void 0)
      for (var t in e) {
        var n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        if (t === "shading") {
          console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = n === gu;
          continue;
        }
        var r = this[t];
        if (r === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  },
  toJSON: function(e) {
    var t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    var n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, this.combine !== void 0 && (n.combine = this.combine), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Mi && (n.blending = this.blending), this.flatShading === !0 && (n.flatShading = this.flatShading), this.side !== sa && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.morphTargets === !0 && (n.morphTargets = !0), this.morphNormals === !0 && (n.morphNormals = !0), this.skinning === !0 && (n.skinning = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function r(o) {
      var s = [];
      for (var c in o) {
        var l = o[c];
        delete l.metadata, s.push(l);
      }
      return s;
    }
    if (t) {
      var i = r(e.textures), a = r(e.images);
      i.length > 0 && (n.textures = i), a.length > 0 && (n.images = a);
    }
    return n;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.flatShading = e.flatShading, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    var t = e.clippingPlanes, n = null;
    if (t !== null) {
      var r = t.length;
      n = new Array(r);
      for (var i = 0; i !== r; ++i)
        n[i] = t[i].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
Object.defineProperty(ve.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++;
  }
});
function $t(e) {
  ve.call(this), this.type = "MeshBasicMaterial", this.color = new ee(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Uo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(e);
}
$t.prototype = Object.create(ve.prototype);
$t.prototype.constructor = $t;
$t.prototype.isMeshBasicMaterial = !0;
$t.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this;
};
var qe = new M();
function pe(e, t, n) {
  if (Array.isArray(e))
    throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
  this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = Ho, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
}
Object.defineProperty(pe.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++;
  }
});
Object.assign(pe.prototype, {
  isBufferAttribute: !0,
  onUploadCallback: function() {
  },
  setUsage: function(e) {
    return this.usage = e, this;
  },
  copy: function(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  },
  copyAt: function(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (var r = 0, i = this.itemSize; r < i; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  },
  copyArray: function(e) {
    return this.array.set(e), this;
  },
  copyColorsArray: function(e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), a = new ee()), t[n++] = a.r, t[n++] = a.g, t[n++] = a.b;
    }
    return this;
  },
  copyVector2sArray: function(e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new U()), t[n++] = a.x, t[n++] = a.y;
    }
    return this;
  },
  copyVector3sArray: function(e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), a = new M()), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z;
    }
    return this;
  },
  copyVector4sArray: function(e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      a === void 0 && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), a = new Ve()), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z, t[n++] = a.w;
    }
    return this;
  },
  applyMatrix3: function(e) {
    for (var t = 0, n = this.count; t < n; t++)
      qe.x = this.getX(t), qe.y = this.getY(t), qe.z = this.getZ(t), qe.applyMatrix3(e), this.setXYZ(t, qe.x, qe.y, qe.z);
    return this;
  },
  applyMatrix4: function(e) {
    for (var t = 0, n = this.count; t < n; t++)
      qe.x = this.getX(t), qe.y = this.getY(t), qe.z = this.getZ(t), qe.applyMatrix4(e), this.setXYZ(t, qe.x, qe.y, qe.z);
    return this;
  },
  applyNormalMatrix: function(e) {
    for (var t = 0, n = this.count; t < n; t++)
      qe.x = this.getX(t), qe.y = this.getY(t), qe.z = this.getZ(t), qe.applyNormalMatrix(e), this.setXYZ(t, qe.x, qe.y, qe.z);
    return this;
  },
  transformDirection: function(e) {
    for (var t = 0, n = this.count; t < n; t++)
      qe.x = this.getX(t), qe.y = this.getY(t), qe.z = this.getZ(t), qe.transformDirection(e), this.setXYZ(t, qe.x, qe.y, qe.z);
    return this;
  },
  set: function(e, t) {
    return t === void 0 && (t = 0), this.array.set(e, t), this;
  },
  getX: function(e) {
    return this.array[e * this.itemSize];
  },
  setX: function(e, t) {
    return this.array[e * this.itemSize] = t, this;
  },
  getY: function(e) {
    return this.array[e * this.itemSize + 1];
  },
  setY: function(e, t) {
    return this.array[e * this.itemSize + 1] = t, this;
  },
  getZ: function(e) {
    return this.array[e * this.itemSize + 2];
  },
  setZ: function(e, t) {
    return this.array[e * this.itemSize + 2] = t, this;
  },
  getW: function(e) {
    return this.array[e * this.itemSize + 3];
  },
  setW: function(e, t) {
    return this.array[e * this.itemSize + 3] = t, this;
  },
  setXY: function(e, t, n) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this;
  },
  setXYZ: function(e, t, n, r) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  },
  setXYZW: function(e, t, n, r, i) {
    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
  },
  onUpload: function(e) {
    return this.onUploadCallback = e, this;
  },
  clone: function() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  },
  toJSON: function() {
    return {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized
    };
  }
});
function Ls(e, t, n) {
  pe.call(this, new Int8Array(e), t, n);
}
Ls.prototype = Object.create(pe.prototype);
Ls.prototype.constructor = Ls;
function Rs(e, t, n) {
  pe.call(this, new Uint8Array(e), t, n);
}
Rs.prototype = Object.create(pe.prototype);
Rs.prototype.constructor = Rs;
function Cs(e, t, n) {
  pe.call(this, new Uint8ClampedArray(e), t, n);
}
Cs.prototype = Object.create(pe.prototype);
Cs.prototype.constructor = Cs;
function Ps(e, t, n) {
  pe.call(this, new Int16Array(e), t, n);
}
Ps.prototype = Object.create(pe.prototype);
Ps.prototype.constructor = Ps;
function Ci(e, t, n) {
  pe.call(this, new Uint16Array(e), t, n);
}
Ci.prototype = Object.create(pe.prototype);
Ci.prototype.constructor = Ci;
function Ds(e, t, n) {
  pe.call(this, new Int32Array(e), t, n);
}
Ds.prototype = Object.create(pe.prototype);
Ds.prototype.constructor = Ds;
function Pi(e, t, n) {
  pe.call(this, new Uint32Array(e), t, n);
}
Pi.prototype = Object.create(pe.prototype);
Pi.prototype.constructor = Pi;
function $(e, t, n) {
  pe.call(this, new Float32Array(e), t, n);
}
$.prototype = Object.create(pe.prototype);
$.prototype.constructor = $;
function Is(e, t, n) {
  pe.call(this, new Float64Array(e), t, n);
}
Is.prototype = Object.create(pe.prototype);
Is.prototype.constructor = Is;
function Ru() {
  this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1;
}
Object.assign(Ru.prototype, {
  computeGroups: function(e) {
    for (var t, n = [], r = void 0, i = e.faces, a = 0; a < i.length; a++) {
      var o = i[a];
      o.materialIndex !== r && (r = o.materialIndex, t !== void 0 && (t.count = a * 3 - t.start, n.push(t)), t = {
        start: a * 3,
        materialIndex: r
      });
    }
    t !== void 0 && (t.count = a * 3 - t.start, n.push(t)), this.groups = n;
  },
  fromGeometry: function(e) {
    var t = e.faces, n = e.vertices, r = e.faceVertexUvs, i = r[0] && r[0].length > 0, a = r[1] && r[1].length > 0, o = e.morphTargets, s = o.length, c;
    if (s > 0) {
      c = [];
      for (var l = 0; l < s; l++)
        c[l] = {
          name: o[l].name,
          data: []
        };
      this.morphTargets.position = c;
    }
    var u = e.morphNormals, h = u.length, f;
    if (h > 0) {
      f = [];
      for (var l = 0; l < h; l++)
        f[l] = {
          name: u[l].name,
          data: []
        };
      this.morphTargets.normal = f;
    }
    var d = e.skinIndices, m = e.skinWeights, g = d.length === n.length, y = m.length === n.length;
    n.length > 0 && t.length === 0 && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
    for (var l = 0; l < t.length; l++) {
      var p = t[l];
      this.vertices.push(n[p.a], n[p.b], n[p.c]);
      var v = p.vertexNormals;
      if (v.length === 3)
        this.normals.push(v[0], v[1], v[2]);
      else {
        var _ = p.normal;
        this.normals.push(_, _, _);
      }
      var b = p.vertexColors;
      if (b.length === 3)
        this.colors.push(b[0], b[1], b[2]);
      else {
        var x = p.color;
        this.colors.push(x, x, x);
      }
      if (i === !0) {
        var T = r[0][l];
        T !== void 0 ? this.uvs.push(T[0], T[1], T[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs.push(new U(), new U(), new U()));
      }
      if (a === !0) {
        var T = r[1][l];
        T !== void 0 ? this.uvs2.push(T[0], T[1], T[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new U(), new U(), new U()));
      }
      for (var A = 0; A < s; A++) {
        var D = o[A].vertices;
        c[A].data.push(D[p.a], D[p.b], D[p.c]);
      }
      for (var A = 0; A < h; A++) {
        var R = u[A].vertexNormals[l];
        f[A].data.push(R.a, R.b, R.c);
      }
      g && this.skinIndices.push(d[p.a], d[p.b], d[p.c]), y && this.skinWeights.push(m[p.a], m[p.b], m[p.c]);
    }
    return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), this;
  }
});
function Cu(e) {
  if (e.length === 0)
    return -1 / 0;
  let t = e[0];
  for (let n = 1, r = e.length; n < r; ++n)
    e[n] > t && (t = e[n]);
  return t;
}
var nd = 1, Qt = new Ce(), ss = new Q(), yr = new M(), Dt = new un(), fi = new un(), ot = new M();
function te() {
  Object.defineProperty(this, "id", { value: nd += 2 }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
}
te.prototype = Object.assign(Object.create(wn.prototype), {
  constructor: te,
  isBufferGeometry: !0,
  getIndex: function() {
    return this.index;
  },
  setIndex: function(e) {
    Array.isArray(e) ? this.index = new (Cu(e) > 65535 ? Pi : Ci)(e, 1) : this.index = e;
  },
  getAttribute: function(e) {
    return this.attributes[e];
  },
  setAttribute: function(e, t) {
    return this.attributes[e] = t, this;
  },
  deleteAttribute: function(e) {
    return delete this.attributes[e], this;
  },
  addGroup: function(e, t, n) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n !== void 0 ? n : 0
    });
  },
  clearGroups: function() {
    this.groups = [];
  },
  setDrawRange: function(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  },
  applyMatrix4: function(e) {
    var t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    var n = this.attributes.normal;
    if (n !== void 0) {
      var r = new wt().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    var i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  },
  rotateX: function(e) {
    return Qt.makeRotationX(e), this.applyMatrix4(Qt), this;
  },
  rotateY: function(e) {
    return Qt.makeRotationY(e), this.applyMatrix4(Qt), this;
  },
  rotateZ: function(e) {
    return Qt.makeRotationZ(e), this.applyMatrix4(Qt), this;
  },
  translate: function(e, t, n) {
    return Qt.makeTranslation(e, t, n), this.applyMatrix4(Qt), this;
  },
  scale: function(e, t, n) {
    return Qt.makeScale(e, t, n), this.applyMatrix4(Qt), this;
  },
  lookAt: function(e) {
    return ss.lookAt(e), ss.updateMatrix(), this.applyMatrix4(ss.matrix), this;
  },
  center: function() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(yr).negate(), this.translate(yr.x, yr.y, yr.z), this;
  },
  setFromObject: function(e) {
    var t = e.geometry;
    if (e.isPoints || e.isLine) {
      var n = new $(t.vertices.length * 3, 3), r = new $(t.colors.length * 3, 3);
      if (this.setAttribute("position", n.copyVector3sArray(t.vertices)), this.setAttribute("color", r.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
        var i = new $(t.lineDistances.length, 1);
        this.setAttribute("lineDistance", i.copyArray(t.lineDistances));
      }
      t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone());
    } else
      e.isMesh && t && t.isGeometry && this.fromGeometry(t);
    return this;
  },
  setFromPoints: function(e) {
    for (var t = [], n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.push(i.x, i.y, i.z || 0);
    }
    return this.setAttribute("position", new $(t, 3)), this;
  },
  updateFromObject: function(e) {
    var t = e.geometry;
    if (e.isMesh) {
      var n = t.__directGeometry;
      if (t.elementsNeedUpdate === !0 && (n = void 0, t.elementsNeedUpdate = !1), n === void 0)
        return this.fromGeometry(t);
      n.verticesNeedUpdate = t.verticesNeedUpdate, n.normalsNeedUpdate = t.normalsNeedUpdate, n.colorsNeedUpdate = t.colorsNeedUpdate, n.uvsNeedUpdate = t.uvsNeedUpdate, n.groupsNeedUpdate = t.groupsNeedUpdate, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = n;
    }
    var r;
    return t.verticesNeedUpdate === !0 && (r = this.attributes.position, r !== void 0 && (r.copyVector3sArray(t.vertices), r.needsUpdate = !0), t.verticesNeedUpdate = !1), t.normalsNeedUpdate === !0 && (r = this.attributes.normal, r !== void 0 && (r.copyVector3sArray(t.normals), r.needsUpdate = !0), t.normalsNeedUpdate = !1), t.colorsNeedUpdate === !0 && (r = this.attributes.color, r !== void 0 && (r.copyColorsArray(t.colors), r.needsUpdate = !0), t.colorsNeedUpdate = !1), t.uvsNeedUpdate && (r = this.attributes.uv, r !== void 0 && (r.copyVector2sArray(t.uvs), r.needsUpdate = !0), t.uvsNeedUpdate = !1), t.lineDistancesNeedUpdate && (r = this.attributes.lineDistance, r !== void 0 && (r.copyArray(t.lineDistances), r.needsUpdate = !0), t.lineDistancesNeedUpdate = !1), t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this;
  },
  fromGeometry: function(e) {
    return e.__directGeometry = new Ru().fromGeometry(e), this.fromDirectGeometry(e.__directGeometry);
  },
  fromDirectGeometry: function(e) {
    var t = new Float32Array(e.vertices.length * 3);
    if (this.setAttribute("position", new pe(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
      var n = new Float32Array(e.normals.length * 3);
      this.setAttribute("normal", new pe(n, 3).copyVector3sArray(e.normals));
    }
    if (e.colors.length > 0) {
      var r = new Float32Array(e.colors.length * 3);
      this.setAttribute("color", new pe(r, 3).copyColorsArray(e.colors));
    }
    if (e.uvs.length > 0) {
      var i = new Float32Array(e.uvs.length * 2);
      this.setAttribute("uv", new pe(i, 2).copyVector2sArray(e.uvs));
    }
    if (e.uvs2.length > 0) {
      var a = new Float32Array(e.uvs2.length * 2);
      this.setAttribute("uv2", new pe(a, 2).copyVector2sArray(e.uvs2));
    }
    this.groups = e.groups;
    for (var o in e.morphTargets) {
      for (var s = [], c = e.morphTargets[o], l = 0, u = c.length; l < u; l++) {
        var h = c[l], f = new $(h.data.length * 3, 3);
        f.name = h.name, s.push(f.copyVector3sArray(h.data));
      }
      this.morphAttributes[o] = s;
    }
    if (e.skinIndices.length > 0) {
      var d = new $(e.skinIndices.length * 4, 4);
      this.setAttribute("skinIndex", d.copyVector4sArray(e.skinIndices));
    }
    if (e.skinWeights.length > 0) {
      var m = new $(e.skinWeights.length * 4, 4);
      this.setAttribute("skinWeight", m.copyVector4sArray(e.skinWeights));
    }
    return e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), this;
  },
  computeBoundingBox: function() {
    this.boundingBox === null && (this.boundingBox = new un());
    var e = this.attributes.position, t = this.morphAttributes.position;
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (var n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          Dt.setFromBufferAttribute(i), this.morphTargetsRelative ? (ot.addVectors(this.boundingBox.min, Dt.min), this.boundingBox.expandByPoint(ot), ot.addVectors(this.boundingBox.max, Dt.max), this.boundingBox.expandByPoint(ot)) : (this.boundingBox.expandByPoint(Dt.min), this.boundingBox.expandByPoint(Dt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  },
  computeBoundingSphere: function() {
    this.boundingSphere === null && (this.boundingSphere = new Sn());
    var e = this.attributes.position, t = this.morphAttributes.position;
    if (e) {
      var n = this.boundingSphere.center;
      if (Dt.setFromBufferAttribute(e), t)
        for (var r = 0, i = t.length; r < i; r++) {
          var a = t[r];
          fi.setFromBufferAttribute(a), this.morphTargetsRelative ? (ot.addVectors(Dt.min, fi.min), Dt.expandByPoint(ot), ot.addVectors(Dt.max, fi.max), Dt.expandByPoint(ot)) : (Dt.expandByPoint(fi.min), Dt.expandByPoint(fi.max));
        }
      Dt.getCenter(n);
      for (var o = 0, r = 0, i = e.count; r < i; r++)
        ot.fromBufferAttribute(e, r), o = Math.max(o, n.distanceToSquared(ot));
      if (t)
        for (var r = 0, i = t.length; r < i; r++)
          for (var a = t[r], s = this.morphTargetsRelative, c = 0, l = a.count; c < l; c++)
            ot.fromBufferAttribute(a, c), s && (yr.fromBufferAttribute(e, c), ot.add(yr)), o = Math.max(o, n.distanceToSquared(ot));
      this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  },
  computeFaceNormals: function() {
  },
  computeVertexNormals: function() {
    var e = this.index, t = this.attributes;
    if (t.position) {
      var n = t.position.array;
      if (t.normal === void 0)
        this.setAttribute("normal", new pe(new Float32Array(n.length), 3));
      else
        for (var r = t.normal.array, i = 0, a = r.length; i < a; i++)
          r[i] = 0;
      var o = t.normal.array, s, c, l, u = new M(), h = new M(), f = new M(), d = new M(), m = new M();
      if (e)
        for (var g = e.array, i = 0, a = e.count; i < a; i += 3)
          s = g[i + 0] * 3, c = g[i + 1] * 3, l = g[i + 2] * 3, u.fromArray(n, s), h.fromArray(n, c), f.fromArray(n, l), d.subVectors(f, h), m.subVectors(u, h), d.cross(m), o[s] += d.x, o[s + 1] += d.y, o[s + 2] += d.z, o[c] += d.x, o[c + 1] += d.y, o[c + 2] += d.z, o[l] += d.x, o[l + 1] += d.y, o[l + 2] += d.z;
      else
        for (var i = 0, a = n.length; i < a; i += 9)
          u.fromArray(n, i), h.fromArray(n, i + 3), f.fromArray(n, i + 6), d.subVectors(f, h), m.subVectors(u, h), d.cross(m), o[i] = d.x, o[i + 1] = d.y, o[i + 2] = d.z, o[i + 3] = d.x, o[i + 4] = d.y, o[i + 5] = d.z, o[i + 6] = d.x, o[i + 7] = d.y, o[i + 8] = d.z;
      this.normalizeNormals(), t.normal.needsUpdate = !0;
    }
  },
  merge: function(e, t) {
    if (!(e && e.isBufferGeometry)) {
      console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
      return;
    }
    t === void 0 && (t = 0, console.warn(
      "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
    ));
    var n = this.attributes;
    for (var r in n)
      if (e.attributes[r] !== void 0)
        for (var i = n[r], a = i.array, o = e.attributes[r], s = o.array, c = o.itemSize * t, l = Math.min(s.length, a.length - c), u = 0, h = c; u < l; u++, h++)
          a[h] = s[u];
    return this;
  },
  normalizeNormals: function() {
    for (var e = this.attributes.normal, t = 0, n = e.count; t < n; t++)
      ot.x = e.getX(t), ot.y = e.getY(t), ot.z = e.getZ(t), ot.normalize(), e.setXYZ(t, ot.x, ot.y, ot.z);
  },
  toNonIndexed: function() {
    function e(g, y) {
      for (var p = g.array, v = g.itemSize, _ = g.normalized, b = new p.constructor(y.length * v), x = 0, T = 0, A = 0, D = y.length; A < D; A++) {
        x = y[A] * v;
        for (var R = 0; R < v; R++)
          b[T++] = p[x++];
      }
      return new pe(b, v, _);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
    var t = new te(), n = this.index.array, r = this.attributes;
    for (var i in r) {
      var a = r[i], o = e(a, n);
      t.setAttribute(i, o);
    }
    var s = this.morphAttributes;
    for (i in s) {
      for (var c = [], l = s[i], u = 0, h = l.length; u < h; u++) {
        var a = l[u], o = e(a, n);
        c.push(o);
      }
      t.morphAttributes[i] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    for (var f = this.groups, u = 0, d = f.length; u < d; u++) {
      var m = f[u];
      t.addGroup(m.start, m.count, m.materialIndex);
    }
    return t;
  },
  toJSON: function() {
    var e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      var t = this.parameters;
      for (var n in t)
        t[n] !== void 0 && (e[n] = t[n]);
      return e;
    }
    e.data = { attributes: {} };
    var r = this.index;
    r !== null && (e.data.index = {
      type: r.array.constructor.name,
      array: Array.prototype.slice.call(r.array)
    });
    var i = this.attributes;
    for (var n in i) {
      var a = i[n], o = a.toJSON();
      a.name !== "" && (o.name = a.name), e.data.attributes[n] = o;
    }
    var s = {}, c = !1;
    for (var n in this.morphAttributes) {
      for (var l = this.morphAttributes[n], u = [], h = 0, f = l.length; h < f; h++) {
        var a = l[h], o = a.toJSON();
        a.name !== "" && (o.name = a.name), u.push(o);
      }
      u.length > 0 && (s[n] = u, c = !0);
    }
    c && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
    var d = this.groups;
    d.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(d)));
    var m = this.boundingSphere;
    return m !== null && (e.data.boundingSphere = {
      center: m.center.toArray(),
      radius: m.radius
    }), e;
  },
  clone: function() {
    return new te().copy(this);
  },
  copy: function(e) {
    var t, n, r;
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
    var i = e.index;
    i !== null && this.setIndex(i.clone());
    var a = e.attributes;
    for (t in a) {
      var o = a[t];
      this.setAttribute(t, o.clone());
    }
    var s = e.morphAttributes;
    for (t in s) {
      var c = [], l = s[t];
      for (n = 0, r = l.length; n < r; n++)
        c.push(l[n].clone());
      this.morphAttributes[t] = c;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    var u = e.groups;
    for (n = 0, r = u.length; n < r; n++) {
      var h = u[n];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    var f = e.boundingBox;
    f !== null && (this.boundingBox = f.clone());
    var d = e.boundingSphere;
    return d !== null && (this.boundingSphere = d.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
var sl = new Ce(), jn = new ii(), cs = new Sn(), Rn = new M(), Cn = new M(), Pn = new M(), ls = new M(), us = new M(), hs = new M(), Ma = new M(), ba = new M(), wa = new M(), Cr = new U(), Pr = new U(), Dr = new U(), Si = new M(), Sa = new M();
function tt(e, t) {
  Q.call(this), this.type = "Mesh", this.geometry = e !== void 0 ? e : new te(), this.material = t !== void 0 ? t : new $t(), this.updateMorphTargets();
}
tt.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: tt,
  isMesh: !0,
  copy: function(e) {
    return Q.prototype.copy.call(this, e), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this;
  },
  updateMorphTargets: function() {
    var e = this.geometry, t, n, r;
    if (e.isBufferGeometry) {
      var i = e.morphAttributes, a = Object.keys(i);
      if (a.length > 0) {
        var o = i[a[0]];
        if (o !== void 0)
          for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, n = o.length; t < n; t++)
            r = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t;
      }
    } else {
      var s = e.morphTargets;
      s !== void 0 && s.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  },
  raycast: function(e, t) {
    var n = this.geometry, r = this.material, i = this.matrixWorld;
    if (r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), cs.copy(n.boundingSphere), cs.applyMatrix4(i), e.ray.intersectsSphere(cs) !== !1 && (sl.getInverse(i), jn.copy(e.ray).applyMatrix4(sl), !(n.boundingBox !== null && jn.intersectsBox(n.boundingBox) === !1)))) {
      var a;
      if (n.isBufferGeometry) {
        var o, s, c, l = n.index, u = n.attributes.position, h = n.morphAttributes.position, f = n.morphTargetsRelative, d = n.attributes.uv, m = n.attributes.uv2, g = n.groups, y = n.drawRange, p, v, _, b, x, T, A, D;
        if (l !== null)
          if (Array.isArray(r))
            for (p = 0, _ = g.length; p < _; p++)
              for (x = g[p], T = r[x.materialIndex], A = Math.max(x.start, y.start), D = Math.min(x.start + x.count, y.start + y.count), v = A, b = D; v < b; v += 3)
                o = l.getX(v), s = l.getX(v + 1), c = l.getX(v + 2), a = Ea(this, T, e, jn, u, h, f, d, m, o, s, c), a && (a.faceIndex = Math.floor(v / 3), a.face.materialIndex = x.materialIndex, t.push(a));
          else
            for (A = Math.max(0, y.start), D = Math.min(l.count, y.start + y.count), p = A, _ = D; p < _; p += 3)
              o = l.getX(p), s = l.getX(p + 1), c = l.getX(p + 2), a = Ea(this, r, e, jn, u, h, f, d, m, o, s, c), a && (a.faceIndex = Math.floor(p / 3), t.push(a));
        else if (u !== void 0)
          if (Array.isArray(r))
            for (p = 0, _ = g.length; p < _; p++)
              for (x = g[p], T = r[x.materialIndex], A = Math.max(x.start, y.start), D = Math.min(x.start + x.count, y.start + y.count), v = A, b = D; v < b; v += 3)
                o = v, s = v + 1, c = v + 2, a = Ea(this, T, e, jn, u, h, f, d, m, o, s, c), a && (a.faceIndex = Math.floor(v / 3), a.face.materialIndex = x.materialIndex, t.push(a));
          else
            for (A = Math.max(0, y.start), D = Math.min(u.count, y.start + y.count), p = A, _ = D; p < _; p += 3)
              o = p, s = p + 1, c = p + 2, a = Ea(this, r, e, jn, u, h, f, d, m, o, s, c), a && (a.faceIndex = Math.floor(p / 3), t.push(a));
      } else if (n.isGeometry) {
        var R, V, P, I = Array.isArray(r), F = n.vertices, H = n.faces, C, z = n.faceVertexUvs[0];
        z.length > 0 && (C = z);
        for (var k = 0, j = H.length; k < j; k++) {
          var X = H[k], Y = I ? r[X.materialIndex] : r;
          if (Y !== void 0 && (R = F[X.a], V = F[X.b], P = F[X.c], a = Pu(this, Y, e, jn, R, V, P, Si), a)) {
            if (C && C[k]) {
              var oe = C[k];
              Cr.copy(oe[0]), Pr.copy(oe[1]), Dr.copy(oe[2]), a.uv = mt.getUV(Si, R, V, P, Cr, Pr, Dr, new U());
            }
            a.face = X, a.faceIndex = k, t.push(a);
          }
        }
      }
    }
  },
  clone: function() {
    return new this.constructor(this.geometry, this.material).copy(this);
  }
});
function Pu(e, t, n, r, i, a, o, s) {
  var c;
  if (t.side === ft ? c = r.intersectTriangle(o, a, i, !0, s) : c = r.intersectTriangle(i, a, o, t.side !== Bo, s), c === null)
    return null;
  Sa.copy(s), Sa.applyMatrix4(e.matrixWorld);
  var l = n.ray.origin.distanceTo(Sa);
  return l < n.near || l > n.far ? null : {
    distance: l,
    point: Sa.clone(),
    object: e
  };
}
function Ea(e, t, n, r, i, a, o, s, c, l, u, h) {
  Rn.fromBufferAttribute(i, l), Cn.fromBufferAttribute(i, u), Pn.fromBufferAttribute(i, h);
  var f = e.morphTargetInfluences;
  if (t.morphTargets && a && f) {
    Ma.set(0, 0, 0), ba.set(0, 0, 0), wa.set(0, 0, 0);
    for (var d = 0, m = a.length; d < m; d++) {
      var g = f[d], y = a[d];
      g !== 0 && (ls.fromBufferAttribute(y, l), us.fromBufferAttribute(y, u), hs.fromBufferAttribute(y, h), o ? (Ma.addScaledVector(ls, g), ba.addScaledVector(us, g), wa.addScaledVector(hs, g)) : (Ma.addScaledVector(ls.sub(Rn), g), ba.addScaledVector(us.sub(Cn), g), wa.addScaledVector(hs.sub(Pn), g)));
    }
    Rn.add(Ma), Cn.add(ba), Pn.add(wa);
  }
  e.isSkinnedMesh && (e.boneTransform(l, Rn), e.boneTransform(u, Cn), e.boneTransform(h, Pn));
  var p = Pu(e, t, n, r, Rn, Cn, Pn, Si);
  if (p) {
    s && (Cr.fromBufferAttribute(s, l), Pr.fromBufferAttribute(s, u), Dr.fromBufferAttribute(s, h), p.uv = mt.getUV(Si, Rn, Cn, Pn, Cr, Pr, Dr, new U())), c && (Cr.fromBufferAttribute(c, l), Pr.fromBufferAttribute(c, u), Dr.fromBufferAttribute(c, h), p.uv2 = mt.getUV(Si, Rn, Cn, Pn, Cr, Pr, Dr, new U()));
    var v = new io(l, u, h);
    mt.getNormal(Rn, Cn, Pn, v.normal), p.face = v;
  }
  return p;
}
var rd = 0, Kt = new Ce(), fs = new Q(), Ta = new M();
function ge() {
  Object.defineProperty(this, "id", { value: rd += 2 }), this.uuid = Ae.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1;
}
ge.prototype = Object.assign(Object.create(wn.prototype), {
  constructor: ge,
  isGeometry: !0,
  applyMatrix4: function(e) {
    for (var t = new wt().getNormalMatrix(e), n = 0, r = this.vertices.length; n < r; n++) {
      var i = this.vertices[n];
      i.applyMatrix4(e);
    }
    for (var n = 0, r = this.faces.length; n < r; n++) {
      var a = this.faces[n];
      a.normal.applyMatrix3(t).normalize();
      for (var o = 0, s = a.vertexNormals.length; o < s; o++)
        a.vertexNormals[o].applyMatrix3(t).normalize();
    }
    return this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this;
  },
  rotateX: function(e) {
    return Kt.makeRotationX(e), this.applyMatrix4(Kt), this;
  },
  rotateY: function(e) {
    return Kt.makeRotationY(e), this.applyMatrix4(Kt), this;
  },
  rotateZ: function(e) {
    return Kt.makeRotationZ(e), this.applyMatrix4(Kt), this;
  },
  translate: function(e, t, n) {
    return Kt.makeTranslation(e, t, n), this.applyMatrix4(Kt), this;
  },
  scale: function(e, t, n) {
    return Kt.makeScale(e, t, n), this.applyMatrix4(Kt), this;
  },
  lookAt: function(e) {
    return fs.lookAt(e), fs.updateMatrix(), this.applyMatrix4(fs.matrix), this;
  },
  fromBufferGeometry: function(e) {
    var t = this, n = e.index !== null ? e.index.array : void 0, r = e.attributes;
    if (r.position === void 0)
      return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
    var i = r.position.array, a = r.normal !== void 0 ? r.normal.array : void 0, o = r.color !== void 0 ? r.color.array : void 0, s = r.uv !== void 0 ? r.uv.array : void 0, c = r.uv2 !== void 0 ? r.uv2.array : void 0;
    c !== void 0 && (this.faceVertexUvs[1] = []);
    for (var l = 0; l < i.length; l += 3)
      t.vertices.push(new M().fromArray(i, l)), o !== void 0 && t.colors.push(new ee().fromArray(o, l));
    function u(p, v, _, b) {
      var x = o === void 0 ? [] : [
        t.colors[p].clone(),
        t.colors[v].clone(),
        t.colors[_].clone()
      ], T = a === void 0 ? [] : [
        new M().fromArray(a, p * 3),
        new M().fromArray(a, v * 3),
        new M().fromArray(a, _ * 3)
      ], A = new io(p, v, _, T, x, b);
      t.faces.push(A), s !== void 0 && t.faceVertexUvs[0].push([
        new U().fromArray(s, p * 2),
        new U().fromArray(s, v * 2),
        new U().fromArray(s, _ * 2)
      ]), c !== void 0 && t.faceVertexUvs[1].push([
        new U().fromArray(c, p * 2),
        new U().fromArray(c, v * 2),
        new U().fromArray(c, _ * 2)
      ]);
    }
    var h = e.groups;
    if (h.length > 0)
      for (var l = 0; l < h.length; l++)
        for (var f = h[l], d = f.start, m = f.count, g = d, y = d + m; g < y; g += 3)
          n !== void 0 ? u(n[g], n[g + 1], n[g + 2], f.materialIndex) : u(g, g + 1, g + 2, f.materialIndex);
    else if (n !== void 0)
      for (var l = 0; l < n.length; l += 3)
        u(n[l], n[l + 1], n[l + 2]);
    else
      for (var l = 0; l < i.length / 3; l += 3)
        u(l, l + 1, l + 2);
    return this.computeFaceNormals(), e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  },
  center: function() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ta).negate(), this.translate(Ta.x, Ta.y, Ta.z), this;
  },
  normalize: function() {
    this.computeBoundingSphere();
    var e = this.boundingSphere.center, t = this.boundingSphere.radius, n = t === 0 ? 1 : 1 / t, r = new Ce();
    return r.set(
      n,
      0,
      0,
      -n * e.x,
      0,
      n,
      0,
      -n * e.y,
      0,
      0,
      n,
      -n * e.z,
      0,
      0,
      0,
      1
    ), this.applyMatrix4(r), this;
  },
  computeFaceNormals: function() {
    for (var e = new M(), t = new M(), n = 0, r = this.faces.length; n < r; n++) {
      var i = this.faces[n], a = this.vertices[i.a], o = this.vertices[i.b], s = this.vertices[i.c];
      e.subVectors(s, o), t.subVectors(a, o), e.cross(t), e.normalize(), i.normal.copy(e);
    }
  },
  computeVertexNormals: function(e) {
    e === void 0 && (e = !0);
    var t, n, r, i, a, o;
    for (o = new Array(this.vertices.length), t = 0, n = this.vertices.length; t < n; t++)
      o[t] = new M();
    if (e) {
      var s, c, l, u = new M(), h = new M();
      for (r = 0, i = this.faces.length; r < i; r++)
        a = this.faces[r], s = this.vertices[a.a], c = this.vertices[a.b], l = this.vertices[a.c], u.subVectors(l, c), h.subVectors(s, c), u.cross(h), o[a.a].add(u), o[a.b].add(u), o[a.c].add(u);
    } else
      for (this.computeFaceNormals(), r = 0, i = this.faces.length; r < i; r++)
        a = this.faces[r], o[a.a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
    for (t = 0, n = this.vertices.length; t < n; t++)
      o[t].normalize();
    for (r = 0, i = this.faces.length; r < i; r++) {
      a = this.faces[r];
      var f = a.vertexNormals;
      f.length === 3 ? (f[0].copy(o[a.a]), f[1].copy(o[a.b]), f[2].copy(o[a.c])) : (f[0] = o[a.a].clone(), f[1] = o[a.b].clone(), f[2] = o[a.c].clone());
    }
    this.faces.length > 0 && (this.normalsNeedUpdate = !0);
  },
  computeFlatVertexNormals: function() {
    var e, t, n;
    for (this.computeFaceNormals(), e = 0, t = this.faces.length; e < t; e++) {
      n = this.faces[e];
      var r = n.vertexNormals;
      r.length === 3 ? (r[0].copy(n.normal), r[1].copy(n.normal), r[2].copy(n.normal)) : (r[0] = n.normal.clone(), r[1] = n.normal.clone(), r[2] = n.normal.clone());
    }
    this.faces.length > 0 && (this.normalsNeedUpdate = !0);
  },
  computeMorphNormals: function() {
    var e, t, n, r, i;
    for (n = 0, r = this.faces.length; n < r; n++)
      for (i = this.faces[n], i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), e = 0, t = i.vertexNormals.length; e < t; e++)
        i.__originalVertexNormals[e] ? i.__originalVertexNormals[e].copy(i.vertexNormals[e]) : i.__originalVertexNormals[e] = i.vertexNormals[e].clone();
    var a = new ge();
    for (a.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++) {
      if (!this.morphNormals[e]) {
        this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
        var o = this.morphNormals[e].faceNormals, s = this.morphNormals[e].vertexNormals, l, u;
        for (n = 0, r = this.faces.length; n < r; n++)
          l = new M(), u = { a: new M(), b: new M(), c: new M() }, o.push(l), s.push(u);
      }
      var c = this.morphNormals[e];
      a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals();
      var l, u;
      for (n = 0, r = this.faces.length; n < r; n++)
        i = this.faces[n], l = c.faceNormals[n], u = c.vertexNormals[n], l.copy(i.normal), u.a.copy(i.vertexNormals[0]), u.b.copy(i.vertexNormals[1]), u.c.copy(i.vertexNormals[2]);
    }
    for (n = 0, r = this.faces.length; n < r; n++)
      i = this.faces[n], i.normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals;
  },
  computeBoundingBox: function() {
    this.boundingBox === null && (this.boundingBox = new un()), this.boundingBox.setFromPoints(this.vertices);
  },
  computeBoundingSphere: function() {
    this.boundingSphere === null && (this.boundingSphere = new Sn()), this.boundingSphere.setFromPoints(this.vertices);
  },
  merge: function(e, t, n) {
    if (!(e && e.isGeometry)) {
      console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
      return;
    }
    var r, i = this.vertices.length, a = this.vertices, o = e.vertices, s = this.faces, c = e.faces, l = this.colors, u = e.colors;
    n === void 0 && (n = 0), t !== void 0 && (r = new wt().getNormalMatrix(t));
    for (var h = 0, f = o.length; h < f; h++) {
      var d = o[h], m = d.clone();
      t !== void 0 && m.applyMatrix4(t), a.push(m);
    }
    for (var h = 0, f = u.length; h < f; h++)
      l.push(u[h].clone());
    for (h = 0, f = c.length; h < f; h++) {
      var g = c[h], y, p, v, _ = g.vertexNormals, b = g.vertexColors;
      y = new io(g.a + i, g.b + i, g.c + i), y.normal.copy(g.normal), r !== void 0 && y.normal.applyMatrix3(r).normalize();
      for (var x = 0, T = _.length; x < T; x++)
        p = _[x].clone(), r !== void 0 && p.applyMatrix3(r).normalize(), y.vertexNormals.push(p);
      y.color.copy(g.color);
      for (var x = 0, T = b.length; x < T; x++)
        v = b[x], y.vertexColors.push(v.clone());
      y.materialIndex = g.materialIndex + n, s.push(y);
    }
    for (var h = 0, f = e.faceVertexUvs.length; h < f; h++) {
      var A = e.faceVertexUvs[h];
      this.faceVertexUvs[h] === void 0 && (this.faceVertexUvs[h] = []);
      for (var x = 0, T = A.length; x < T; x++) {
        for (var D = A[x], R = [], V = 0, P = D.length; V < P; V++)
          R.push(D[V].clone());
        this.faceVertexUvs[h].push(R);
      }
    }
  },
  mergeMesh: function(e) {
    if (!(e && e.isMesh)) {
      console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e);
      return;
    }
    e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix);
  },
  /*
   * Checks for duplicate vertices with hashmap.
   * Duplicated vertices are removed
   * and faces' vertices are updated.
   */
  mergeVertices: function() {
    var e = {}, t = [], n = [], r, i, a = 4, o = Math.pow(10, a), s, c, l, u, h, f;
    for (s = 0, c = this.vertices.length; s < c; s++)
      r = this.vertices[s], i = Math.round(r.x * o) + "_" + Math.round(r.y * o) + "_" + Math.round(r.z * o), e[i] === void 0 ? (e[i] = s, t.push(this.vertices[s]), n[s] = t.length - 1) : n[s] = n[e[i]];
    var d = [];
    for (s = 0, c = this.faces.length; s < c; s++) {
      l = this.faces[s], l.a = n[l.a], l.b = n[l.b], l.c = n[l.c], u = [l.a, l.b, l.c];
      for (var m = 0; m < 3; m++)
        if (u[m] === u[(m + 1) % 3]) {
          d.push(s);
          break;
        }
    }
    for (s = d.length - 1; s >= 0; s--) {
      var g = d[s];
      for (this.faces.splice(g, 1), h = 0, f = this.faceVertexUvs.length; h < f; h++)
        this.faceVertexUvs[h].splice(g, 1);
    }
    var y = this.vertices.length - t.length;
    return this.vertices = t, y;
  },
  setFromPoints: function(e) {
    this.vertices = [];
    for (var t = 0, n = e.length; t < n; t++) {
      var r = e[t];
      this.vertices.push(new M(r.x, r.y, r.z || 0));
    }
    return this;
  },
  sortFacesByMaterialIndex: function() {
    for (var e = this.faces, t = e.length, n = 0; n < t; n++)
      e[n]._id = n;
    function r(l, u) {
      return l.materialIndex - u.materialIndex;
    }
    e.sort(r);
    var i = this.faceVertexUvs[0], a = this.faceVertexUvs[1], o, s;
    i && i.length === t && (o = []), a && a.length === t && (s = []);
    for (var n = 0; n < t; n++) {
      var c = e[n]._id;
      o && o.push(i[c]), s && s.push(a[c]);
    }
    o && (this.faceVertexUvs[0] = o), s && (this.faceVertexUvs[1] = s);
  },
  toJSON: function() {
    var e = {
      metadata: {
        version: 4.5,
        type: "Geometry",
        generator: "Geometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), this.parameters !== void 0) {
      var t = this.parameters;
      for (var n in t)
        t[n] !== void 0 && (e[n] = t[n]);
      return e;
    }
    for (var r = [], i = 0; i < this.vertices.length; i++) {
      var a = this.vertices[i];
      r.push(a.x, a.y, a.z);
    }
    for (var o = [], s = [], c = {}, l = [], u = {}, h = [], f = {}, i = 0; i < this.faces.length; i++) {
      var d = this.faces[i], m = !0, g = !1, y = this.faceVertexUvs[0][i] !== void 0, p = d.normal.length() > 0, v = d.vertexNormals.length > 0, _ = d.color.r !== 1 || d.color.g !== 1 || d.color.b !== 1, b = d.vertexColors.length > 0, x = 0;
      if (x = R(x, 0, 0), x = R(x, 1, m), x = R(x, 2, g), x = R(x, 3, y), x = R(x, 4, p), x = R(x, 5, v), x = R(x, 6, _), x = R(x, 7, b), o.push(x), o.push(d.a, d.b, d.c), o.push(d.materialIndex), y) {
        var T = this.faceVertexUvs[0][i];
        o.push(
          I(T[0]),
          I(T[1]),
          I(T[2])
        );
      }
      if (p && o.push(V(d.normal)), v) {
        var A = d.vertexNormals;
        o.push(
          V(A[0]),
          V(A[1]),
          V(A[2])
        );
      }
      if (_ && o.push(P(d.color)), b) {
        var D = d.vertexColors;
        o.push(
          P(D[0]),
          P(D[1]),
          P(D[2])
        );
      }
    }
    function R(F, H, C) {
      return C ? F | 1 << H : F & ~(1 << H);
    }
    function V(F) {
      var H = F.x.toString() + F.y.toString() + F.z.toString();
      return c[H] !== void 0 || (c[H] = s.length / 3, s.push(F.x, F.y, F.z)), c[H];
    }
    function P(F) {
      var H = F.r.toString() + F.g.toString() + F.b.toString();
      return u[H] !== void 0 || (u[H] = l.length, l.push(F.getHex())), u[H];
    }
    function I(F) {
      var H = F.x.toString() + F.y.toString();
      return f[H] !== void 0 || (f[H] = h.length / 2, h.push(F.x, F.y)), f[H];
    }
    return e.data = {}, e.data.vertices = r, e.data.normals = s, l.length > 0 && (e.data.colors = l), h.length > 0 && (e.data.uvs = [h]), e.data.faces = o, e;
  },
  clone: function() {
    return new ge().copy(this);
  },
  copy: function(e) {
    var t, n, r, i, a, o;
    this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [[]], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
    var s = e.vertices;
    for (t = 0, n = s.length; t < n; t++)
      this.vertices.push(s[t].clone());
    var c = e.colors;
    for (t = 0, n = c.length; t < n; t++)
      this.colors.push(c[t].clone());
    var l = e.faces;
    for (t = 0, n = l.length; t < n; t++)
      this.faces.push(l[t].clone());
    for (t = 0, n = e.faceVertexUvs.length; t < n; t++) {
      var u = e.faceVertexUvs[t];
      for (this.faceVertexUvs[t] === void 0 && (this.faceVertexUvs[t] = []), r = 0, i = u.length; r < i; r++) {
        var h = u[r], f = [];
        for (a = 0, o = h.length; a < o; a++) {
          var d = h[a];
          f.push(d.clone());
        }
        this.faceVertexUvs[t].push(f);
      }
    }
    var m = e.morphTargets;
    for (t = 0, n = m.length; t < n; t++) {
      var g = {};
      if (g.name = m[t].name, m[t].vertices !== void 0)
        for (g.vertices = [], r = 0, i = m[t].vertices.length; r < i; r++)
          g.vertices.push(m[t].vertices[r].clone());
      if (m[t].normals !== void 0)
        for (g.normals = [], r = 0, i = m[t].normals.length; r < i; r++)
          g.normals.push(m[t].normals[r].clone());
      this.morphTargets.push(g);
    }
    var y = e.morphNormals;
    for (t = 0, n = y.length; t < n; t++) {
      var p = {};
      if (y[t].vertexNormals !== void 0)
        for (p.vertexNormals = [], r = 0, i = y[t].vertexNormals.length; r < i; r++) {
          var v = y[t].vertexNormals[r], _ = {};
          _.a = v.a.clone(), _.b = v.b.clone(), _.c = v.c.clone(), p.vertexNormals.push(_);
        }
      if (y[t].faceNormals !== void 0)
        for (p.faceNormals = [], r = 0, i = y[t].faceNormals.length; r < i; r++)
          p.faceNormals.push(y[t].faceNormals[r].clone());
      this.morphNormals.push(p);
    }
    var b = e.skinWeights;
    for (t = 0, n = b.length; t < n; t++)
      this.skinWeights.push(b[t].clone());
    var x = e.skinIndices;
    for (t = 0, n = x.length; t < n; t++)
      this.skinIndices.push(x[t].clone());
    var T = e.lineDistances;
    for (t = 0, n = T.length; t < n; t++)
      this.lineDistances.push(T[t]);
    var A = e.boundingBox;
    A !== null && (this.boundingBox = A.clone());
    var D = e.boundingSphere;
    return D !== null && (this.boundingSphere = D.clone()), this.elementsNeedUpdate = e.elementsNeedUpdate, this.verticesNeedUpdate = e.verticesNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this;
  },
  dispose: function() {
    this.dispatchEvent({ type: "dispose" });
  }
});
class id extends ge {
  constructor(t, n, r, i, a, o) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: n,
      depth: r,
      widthSegments: i,
      heightSegments: a,
      depthSegments: o
    }, this.fromBufferGeometry(new Vo(t, n, r, i, a, o)), this.mergeVertices();
  }
}
class Vo extends te {
  constructor(t, n, r, i, a, o) {
    super(), this.type = "BoxBufferGeometry", this.parameters = {
      width: t,
      height: n,
      depth: r,
      widthSegments: i,
      heightSegments: a,
      depthSegments: o
    };
    const s = this;
    t = t || 1, n = n || 1, r = r || 1, i = Math.floor(i) || 1, a = Math.floor(a) || 1, o = Math.floor(o) || 1;
    const c = [], l = [], u = [], h = [];
    let f = 0, d = 0;
    m("z", "y", "x", -1, -1, r, n, t, o, a, 0), m("z", "y", "x", 1, -1, r, n, -t, o, a, 1), m("x", "z", "y", 1, 1, t, r, n, i, o, 2), m("x", "z", "y", 1, -1, t, r, -n, i, o, 3), m("x", "y", "z", 1, -1, t, n, r, i, a, 4), m("x", "y", "z", -1, -1, t, n, -r, i, a, 5), this.setIndex(c), this.setAttribute("position", new $(l, 3)), this.setAttribute("normal", new $(u, 3)), this.setAttribute("uv", new $(h, 2));
    function m(g, y, p, v, _, b, x, T, A, D, R) {
      const V = b / A, P = x / D, I = b / 2, F = x / 2, H = T / 2, C = A + 1, z = D + 1;
      let k = 0, j = 0;
      const X = new M();
      for (let Y = 0; Y < z; Y++) {
        const oe = Y * P - F;
        for (let Pe = 0; Pe < C; Pe++) {
          const Be = Pe * V - I;
          X[g] = Be * v, X[y] = oe * _, X[p] = H, l.push(X.x, X.y, X.z), X[g] = 0, X[y] = 0, X[p] = T > 0 ? 1 : -1, u.push(X.x, X.y, X.z), h.push(Pe / A), h.push(1 - Y / D), k += 1;
        }
      }
      for (let Y = 0; Y < D; Y++)
        for (let oe = 0; oe < A; oe++) {
          const Pe = f + oe + C * Y, Be = f + oe + C * (Y + 1), Ue = f + (oe + 1) + C * (Y + 1), xe = f + (oe + 1) + C * Y;
          c.push(Pe, Be, xe), c.push(Be, Ue, xe), j += 6;
        }
      s.addGroup(d, j, R), d += j, f += k;
    }
  }
}
function Br(e) {
  var t = {};
  for (var n in e) {
    t[n] = {};
    for (var r in e[n]) {
      var i = e[n][r];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture) ? t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i;
    }
  }
  return t;
}
function gt(e) {
  for (var t = {}, n = 0; n < e.length; n++) {
    var r = Br(e[n]);
    for (var i in r)
      t[i] = r[i];
  }
  return t;
}
var ad = { clone: Br, merge: gt }, od = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, sd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
function Lt(e) {
  ve.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = od, this.fragmentShader = sd, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
    derivatives: !1,
    // set to use derivatives
    fragDepth: !1,
    // set to use fragment depth values
    drawBuffers: !1,
    // set to use draw buffers
    shaderTextureLOD: !1
    // set to use shader texture LOD
  }, this.defaultAttributeValues = {
    color: [1, 1, 1],
    uv: [0, 0],
    uv2: [0, 0]
  }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, e !== void 0 && (e.attributes !== void 0 && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e));
}
Lt.prototype = Object.create(ve.prototype);
Lt.prototype.constructor = Lt;
Lt.prototype.isShaderMaterial = !0;
Lt.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Br(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = Object.assign({}, e.extensions), this;
};
Lt.prototype.toJSON = function(e) {
  var t = ve.prototype.toJSON.call(this, e);
  t.uniforms = {};
  for (var n in this.uniforms) {
    var r = this.uniforms[n], i = r.value;
    i && i.isTexture ? t.uniforms[n] = {
      type: "t",
      value: i.toJSON(e).uuid
    } : i && i.isColor ? t.uniforms[n] = {
      type: "c",
      value: i.getHex()
    } : i && i.isVector2 ? t.uniforms[n] = {
      type: "v2",
      value: i.toArray()
    } : i && i.isVector3 ? t.uniforms[n] = {
      type: "v3",
      value: i.toArray()
    } : i && i.isVector4 ? t.uniforms[n] = {
      type: "v4",
      value: i.toArray()
    } : i && i.isMatrix3 ? t.uniforms[n] = {
      type: "m3",
      value: i.toArray()
    } : i && i.isMatrix4 ? t.uniforms[n] = {
      type: "m4",
      value: i.toArray()
    } : t.uniforms[n] = {
      value: i
    };
  }
  Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
  var a = {};
  for (var o in this.extensions)
    this.extensions[o] === !0 && (a[o] = !0);
  return Object.keys(a).length > 0 && (t.extensions = a), t;
};
function gn() {
  Q.call(this), this.type = "Camera", this.matrixWorldInverse = new Ce(), this.projectionMatrix = new Ce(), this.projectionMatrixInverse = new Ce();
}
gn.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: gn,
  isCamera: !0,
  copy: function(e, t) {
    return Q.prototype.copy.call(this, e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  },
  getWorldDirection: function(e) {
    e === void 0 && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new M()), this.updateMatrixWorld(!0);
    var t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  },
  updateMatrixWorld: function(e) {
    Q.prototype.updateMatrixWorld.call(this, e), this.matrixWorldInverse.getInverse(this.matrixWorld);
  },
  updateWorldMatrix: function(e, t) {
    Q.prototype.updateWorldMatrix.call(this, e, t), this.matrixWorldInverse.getInverse(this.matrixWorld);
  },
  clone: function() {
    return new this.constructor().copy(this);
  }
});
function ht(e, t, n, r) {
  gn.call(this), this.type = "PerspectiveCamera", this.fov = e !== void 0 ? e : 50, this.zoom = 1, this.near = n !== void 0 ? n : 0.1, this.far = r !== void 0 ? r : 2e3, this.focus = 10, this.aspect = t !== void 0 ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
}
ht.prototype = Object.assign(Object.create(gn.prototype), {
  constructor: ht,
  isPerspectiveCamera: !0,
  copy: function(e, t) {
    return gn.prototype.copy.call(this, e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  },
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength: function(e) {
    var t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ae.RAD2DEG * 2 * Math.atan(t), this.updateProjectionMatrix();
  },
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength: function() {
    var e = Math.tan(Ae.DEG2RAD * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  },
  getEffectiveFOV: function() {
    return Ae.RAD2DEG * 2 * Math.atan(
      Math.tan(Ae.DEG2RAD * 0.5 * this.fov) / this.zoom
    );
  },
  getFilmWidth: function() {
    return this.filmGauge * Math.min(this.aspect, 1);
  },
  getFilmHeight: function() {
    return this.filmGauge / Math.max(this.aspect, 1);
  },
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   var w = 1920;
   *   var h = 1080;
   *   var fullWidth = w * 3;
   *   var fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset: function(e, t, n, r, i, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
  },
  clearViewOffset: function() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  },
  updateProjectionMatrix: function() {
    var e = this.near, t = e * Math.tan(Ae.DEG2RAD * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -0.5 * r, a = this.view;
    if (this.view !== null && this.view.enabled) {
      var o = a.fullWidth, s = a.fullHeight;
      i += a.offsetX * r / o, t -= a.offsetY * n / s, r *= a.width / o, n *= a.height / s;
    }
    var c = this.filmOffset;
    c !== 0 && (i += e * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix);
  },
  toJSON: function(e) {
    var t = Q.prototype.toJSON.call(this, e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
});
var xr = 90, _r = 1;
function Di(e, t, n) {
  if (Q.call(this), this.type = "CubeCamera", n.isWebGLCubeRenderTarget !== !0) {
    console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
    return;
  }
  this.renderTarget = n;
  var r = new ht(xr, _r, e, t);
  r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new M(1, 0, 0)), this.add(r);
  var i = new ht(xr, _r, e, t);
  i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new M(-1, 0, 0)), this.add(i);
  var a = new ht(xr, _r, e, t);
  a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new M(0, 1, 0)), this.add(a);
  var o = new ht(xr, _r, e, t);
  o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new M(0, -1, 0)), this.add(o);
  var s = new ht(xr, _r, e, t);
  s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new M(0, 0, 1)), this.add(s);
  var c = new ht(xr, _r, e, t);
  c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new M(0, 0, -1)), this.add(c), this.update = function(l, u) {
    this.parent === null && this.updateMatrixWorld();
    var h = l.xr.enabled, f = l.getRenderTarget();
    l.xr.enabled = !1;
    var d = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, l.setRenderTarget(n, 0), l.render(u, r), l.setRenderTarget(n, 1), l.render(u, i), l.setRenderTarget(n, 2), l.render(u, a), l.setRenderTarget(n, 3), l.render(u, o), l.setRenderTarget(n, 4), l.render(u, s), n.texture.generateMipmaps = d, l.setRenderTarget(n, 5), l.render(u, c), l.setRenderTarget(f), l.xr.enabled = h;
  }, this.clear = function(l, u, h, f) {
    for (var d = l.getRenderTarget(), m = 0; m < 6; m++)
      l.setRenderTarget(n, m), l.clear(u, h, f);
    l.setRenderTarget(d);
  };
}
Di.prototype = Object.create(Q.prototype);
Di.prototype.constructor = Di;
function Ii(e, t, n) {
  Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = n), Bt.call(this, e, e, t);
}
Ii.prototype = Object.create(Bt.prototype);
Ii.prototype.constructor = Ii;
Ii.prototype.isWebGLCubeRenderTarget = !0;
Ii.prototype.fromEquirectangularTexture = function(e, t) {
  this.texture.type = t.type, this.texture.format = t.format, this.texture.encoding = t.encoding;
  var n = new Ri(), r = {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: [
      "varying vec3 vWorldDirection;",
      "vec3 transformDirection( in vec3 dir, in mat4 matrix ) {",
      "	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );",
      "}",
      "void main() {",
      "	vWorldDirection = transformDirection( position, modelMatrix );",
      "	#include <begin_vertex>",
      "	#include <project_vertex>",
      "}"
    ].join(`
`),
    fragmentShader: [
      "uniform sampler2D tEquirect;",
      "varying vec3 vWorldDirection;",
      "#include <common>",
      "void main() {",
      "	vec3 direction = normalize( vWorldDirection );",
      "	vec2 sampleUV = equirectUv( direction );",
      "	gl_FragColor = texture2D( tEquirect, sampleUV );",
      "}"
    ].join(`
`)
  }, i = new Lt({
    type: "CubemapFromEquirect",
    uniforms: Br(r.uniforms),
    vertexShader: r.vertexShader,
    fragmentShader: r.fragmentShader,
    side: ft,
    blending: Nn
  });
  i.uniforms.tEquirect.value = t;
  var a = new tt(new Vo(5, 5, 5), i);
  n.add(a);
  var o = new Di(1, 10, this);
  return o.update(e, n), a.geometry.dispose(), a.material.dispose(), this;
};
function Ur(e, t, n, r, i, a, o, s, c, l, u, h) {
  je.call(this, null, a, o, s, c, l, r, i, u, h), this.image = { data: e || null, width: t || 1, height: n || 1 }, this.magFilter = c !== void 0 ? c : st, this.minFilter = l !== void 0 ? l : st, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0;
}
Ur.prototype = Object.create(je.prototype);
Ur.prototype.constructor = Ur;
Ur.prototype.isDataTexture = !0;
var Mr = new Sn(), Aa = new M();
function ua(e, t, n, r, i, a) {
  this.planes = [
    e !== void 0 ? e : new tn(),
    t !== void 0 ? t : new tn(),
    n !== void 0 ? n : new tn(),
    r !== void 0 ? r : new tn(),
    i !== void 0 ? i : new tn(),
    a !== void 0 ? a : new tn()
  ];
}
Object.assign(ua.prototype, {
  set: function(e, t, n, r, i, a) {
    var o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    for (var t = this.planes, n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  },
  setFromProjectionMatrix: function(e) {
    var t = this.planes, n = e.elements, r = n[0], i = n[1], a = n[2], o = n[3], s = n[4], c = n[5], l = n[6], u = n[7], h = n[8], f = n[9], d = n[10], m = n[11], g = n[12], y = n[13], p = n[14], v = n[15];
    return t[0].setComponents(o - r, u - s, m - h, v - g).normalize(), t[1].setComponents(o + r, u + s, m + h, v + g).normalize(), t[2].setComponents(o + i, u + c, m + f, v + y).normalize(), t[3].setComponents(o - i, u - c, m - f, v - y).normalize(), t[4].setComponents(o - a, u - l, m - d, v - p).normalize(), t[5].setComponents(o + a, u + l, m + d, v + p).normalize(), this;
  },
  intersectsObject: function(e) {
    var t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Mr);
  },
  intersectsSprite: function(e) {
    return Mr.center.set(0, 0, 0), Mr.radius = 0.7071067811865476, Mr.applyMatrix4(e.matrixWorld), this.intersectsSphere(Mr);
  },
  intersectsSphere: function(e) {
    for (var t = this.planes, n = e.center, r = -e.radius, i = 0; i < 6; i++) {
      var a = t[i].distanceToPoint(n);
      if (a < r)
        return !1;
    }
    return !0;
  },
  intersectsBox: function(e) {
    for (var t = this.planes, n = 0; n < 6; n++) {
      var r = t[n];
      if (Aa.x = r.normal.x > 0 ? e.max.x : e.min.x, Aa.y = r.normal.y > 0 ? e.max.y : e.min.y, Aa.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Aa) < 0)
        return !1;
    }
    return !0;
  },
  containsPoint: function(e) {
    for (var t = this.planes, n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
});
var Z = {
  common: {
    diffuse: { value: new ee(15658734) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: new wt() },
    uv2Transform: { value: new wt() },
    alphaMap: { value: null }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    refractionRatio: { value: 0.98 },
    maxMipLevel: { value: 0 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: new U(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: new ee(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotShadowMap: { value: [] },
    spotShadowMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } }
  },
  points: {
    diffuse: { value: new ee(15658734) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    uvTransform: { value: new wt() }
  },
  sprite: {
    diffuse: { value: new ee(15658734) },
    opacity: { value: 1 },
    center: { value: new U(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    uvTransform: { value: new wt() }
  }
};
function Du() {
  var e = null, t = !1, n = null;
  function r(i, a) {
    t !== !1 && (n(i, a), e.requestAnimationFrame(r));
  }
  return {
    start: function() {
      t !== !0 && n !== null && (e.requestAnimationFrame(r), t = !0);
    },
    stop: function() {
      t = !1;
    },
    setAnimationLoop: function(i) {
      n = i;
    },
    setContext: function(i) {
      e = i;
    }
  };
}
function cd(e, t) {
  var n = t.isWebGL2, r = /* @__PURE__ */ new WeakMap();
  function i(l, u) {
    var h = l.array, f = l.usage, d = e.createBuffer();
    e.bindBuffer(u, d), e.bufferData(u, h, f), l.onUploadCallback();
    var m = 5126;
    return h instanceof Float32Array ? m = 5126 : h instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : h instanceof Uint16Array ? m = 5123 : h instanceof Int16Array ? m = 5122 : h instanceof Uint32Array ? m = 5125 : h instanceof Int32Array ? m = 5124 : h instanceof Int8Array ? m = 5120 : h instanceof Uint8Array && (m = 5121), {
      buffer: d,
      type: m,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function a(l, u, h) {
    var f = u.array, d = u.updateRange;
    e.bindBuffer(h, l), d.count === -1 ? e.bufferSubData(h, 0, f) : (n ? e.bufferSubData(
      h,
      d.offset * f.BYTES_PER_ELEMENT,
      f,
      d.offset,
      d.count
    ) : e.bufferSubData(
      h,
      d.offset * f.BYTES_PER_ELEMENT,
      f.subarray(d.offset, d.offset + d.count)
    ), d.count = -1);
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), r.get(l);
  }
  function s(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    var u = r.get(l);
    u && (e.deleteBuffer(u.buffer), r.delete(l));
  }
  function c(l, u) {
    l.isInterleavedBufferAttribute && (l = l.data);
    var h = r.get(l);
    h === void 0 ? r.set(l, i(l, u)) : h.version < l.version && (a(h.buffer, l, u), h.version = l.version);
  }
  return {
    get: o,
    remove: s,
    update: c
  };
}
function ao(e, t, n, r) {
  ge.call(this), this.type = "PlaneGeometry", this.parameters = {
    width: e,
    height: t,
    widthSegments: n,
    heightSegments: r
  }, this.fromBufferGeometry(new Gr(e, t, n, r)), this.mergeVertices();
}
ao.prototype = Object.create(ge.prototype);
ao.prototype.constructor = ao;
function Gr(e, t, n, r) {
  te.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
    width: e,
    height: t,
    widthSegments: n,
    heightSegments: r
  }, e = e || 1, t = t || 1;
  var i = e / 2, a = t / 2, o = Math.floor(n) || 1, s = Math.floor(r) || 1, c = o + 1, l = s + 1, u = e / o, h = t / s, f, d, m = [], g = [], y = [], p = [];
  for (d = 0; d < l; d++) {
    var v = d * h - a;
    for (f = 0; f < c; f++) {
      var _ = f * u - i;
      g.push(_, -v, 0), y.push(0, 0, 1), p.push(f / o), p.push(1 - d / s);
    }
  }
  for (d = 0; d < s; d++)
    for (f = 0; f < o; f++) {
      var b = f + c * d, x = f + c * (d + 1), T = f + 1 + c * (d + 1), A = f + 1 + c * d;
      m.push(b, x, A), m.push(x, T, A);
    }
  this.setIndex(m), this.setAttribute("position", new $(g, 3)), this.setAttribute("normal", new $(y, 3)), this.setAttribute("uv", new $(p, 2));
}
Gr.prototype = Object.create(te.prototype);
Gr.prototype.constructor = Gr;
var ld = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, ud = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, hd = `#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`, fd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`, dd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, pd = "vec3 transformed = vec3( position );", vd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, md = `vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha  = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`, gd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, yd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, xd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, _d = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Md = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, bd = `#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`, wd = `#ifdef USE_COLOR
	varying vec3 vColor;
#endif`, Sd = `#ifdef USE_COLOR
	varying vec3 vColor;
#endif`, Ed = `#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`, Td = `#define PI 3.14159265359
#define PI2 6.28318530718
#define PI_HALF 1.5707963267949
#define RECIPROCAL_PI 0.31830988618
#define RECIPROCAL_PI2 0.15915494
#define LOG2 1.442695
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
  return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Ad = `#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_maxMipLevel 8.0
#define cubeUV_minMipLevel 4.0
#define cubeUV_maxTileSize 256.0
#define cubeUV_minTileSize 16.0
float getFace(vec3 direction) {
    vec3 absDirection = abs(direction);
    float face = -1.0;
    if (absDirection.x > absDirection.z) {
      if (absDirection.x > absDirection.y)
        face = direction.x > 0.0 ? 0.0 : 3.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
      if (absDirection.z > absDirection.y)
        face = direction.z > 0.0 ? 2.0 : 5.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}
vec2 getUV(vec3 direction, float face) {
    vec2 uv;
    if (face == 0.0) {
      uv = vec2(direction.z, direction.y) / abs(direction.x);    } else if (face == 1.0) {
      uv = vec2(-direction.x, -direction.z) / abs(direction.y);    } else if (face == 2.0) {
      uv = vec2(-direction.x, direction.y) / abs(direction.z);    } else if (face == 3.0) {
      uv = vec2(-direction.z, direction.y) / abs(direction.x);    } else if (face == 4.0) {
      uv = vec2(-direction.x, direction.z) / abs(direction.y);    } else {
      uv = vec2(direction.x, direction.y) / abs(direction.z);    }
    return 0.5 * (uv + 1.0);
}
vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
  float face = getFace(direction);
  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
  mipInt = max(mipInt, cubeUV_minMipLevel);
  float faceSize = exp2(mipInt);
  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
  vec2 uv = getUV(direction, face) * (faceSize - 1.0);
  vec2 f = fract(uv);
  uv += 0.5 - f;
  if (face > 2.0) {
    uv.y += faceSize;
    face -= 3.0;
  }
  uv.x += face * faceSize;
  if(mipInt < cubeUV_maxMipLevel){
    uv.y += 2.0 * cubeUV_maxTileSize;
  }
  uv.y += filterInt * 2.0 * cubeUV_minTileSize;
  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
  uv *= texelSize;
  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x += texelSize;
  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.y += texelSize;
  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x -= texelSize;
  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  vec3 tm = mix(tl, tr, f.x);
  vec3 bm = mix(bl, br, f.x);
  return mix(tm, bm, f.y);
}
#define r0 1.0
#define v0 0.339
#define m0 -2.0
#define r1 0.8
#define v1 0.276
#define m1 -1.0
#define r4 0.4
#define v4 0.046
#define m4 2.0
#define r5 0.305
#define v5 0.016
#define m5 3.0
#define r6 0.21
#define v6 0.0038
#define m6 4.0
float roughnessToMip(float roughness) {
  float mip = 0.0;
  if (roughness >= r1) {
    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
  } else if (roughness >= r4) {
    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
  } else if (roughness >= r5) {
    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
  } else if (roughness >= r6) {
    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
  } else {
    mip = -2.0 * log2(1.16 * roughness);  }
  return mip;
}
vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);
  float mipF = fract(mip);
  float mipInt = floor(mip);
  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
  if (mipF == 0.0) {
    return vec4(color0, 1.0);
  } else {
    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
    return vec4(mix(color0, color1, mipF), 1.0);
  }
}
#endif`, Ld = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Rd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Cd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Pd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Dd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Id = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Od = `
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`, Nd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		}  else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#elif defined( ENVMAP_TYPE_EQUIREC )
		reflectVec = normalize( reflectVec );
		vec2 sampleUV = equirectUv( reflectVec );
		vec4 envColor = texture2D( envMap, sampleUV );
	#elif defined( ENVMAP_TYPE_SPHERE )
		reflectVec = normalize( reflectVec );
		vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );
		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Fd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Bd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Ud = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Gd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) { 
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, zd = `#ifdef USE_FOG
	fogDepth = -mvPosition.z;
#endif`, Hd = `#ifdef USE_FOG
	varying float fogDepth;
#endif`, Vd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, kd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Wd = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`, qd = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`, Xd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, jd = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`, Yd = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
		struct PointLightShadow {
			float shadowBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`, Zd = `#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
		  vec3 reflectVec = reflect( -viewDir, normal );
		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#elif defined( ENVMAP_TYPE_EQUIREC )
			vec2 sampleUV = equirectUv( reflectVec );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_SPHERE )
			vec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`, Jd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, $d = `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`, Qd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Kd = `varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`, ep = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`, tp = `struct PhysicalMaterial {
	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, np = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, rp = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`, ip = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, ap = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, op = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, sp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, cp = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, lp = `#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`, up = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, hp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, fp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, dp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, pp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, vp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`, mp = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`, gp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
	transformed += morphTarget4 * morphTargetInfluences[ 4 ];
	transformed += morphTarget5 * morphTargetInfluences[ 5 ];
	transformed += morphTarget6 * morphTargetInfluences[ 6 ];
	transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`, yp = `#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, xp = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`, _p = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`, Mp = `#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, bp = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`, wp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Sp = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Ep = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Tp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Ap = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Lp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Rp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Cp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Pp = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Dp = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Ip = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, Op = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Np = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Fp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`, Bp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Up = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Gp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, zp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Hp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Vp = `#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
uniform float toneMappingWhitePoint;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )
vec3 Uncharted2ToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );
}`, kp = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Wp = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, qp = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, Xp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, jp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, Yp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, Zp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, Jp = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, $p = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Qp = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Kp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ev = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, tv = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, nv = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, rv = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, iv = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, av = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, ov = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, sv = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, cv = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, lv = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, uv = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, hv = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, fv = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, dv = `#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, pv = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, vv = `#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, mv = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gv = `#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, yv = `#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSPARENCY
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSPARENCY
	uniform float transparency;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSPARENCY
		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, xv = `#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, _v = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`, Mv = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, bv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, wv = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Sv = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Ev = `#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Tv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Av = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Ie = {
  alphamap_fragment: ld,
  alphamap_pars_fragment: ud,
  alphatest_fragment: hd,
  aomap_fragment: fd,
  aomap_pars_fragment: dd,
  begin_vertex: pd,
  beginnormal_vertex: vd,
  bsdfs: md,
  bumpmap_pars_fragment: gd,
  clipping_planes_fragment: yd,
  clipping_planes_pars_fragment: xd,
  clipping_planes_pars_vertex: _d,
  clipping_planes_vertex: Md,
  color_fragment: bd,
  color_pars_fragment: wd,
  color_pars_vertex: Sd,
  color_vertex: Ed,
  common: Td,
  cube_uv_reflection_fragment: Ad,
  defaultnormal_vertex: Ld,
  displacementmap_pars_vertex: Rd,
  displacementmap_vertex: Cd,
  emissivemap_fragment: Pd,
  emissivemap_pars_fragment: Dd,
  encodings_fragment: Id,
  encodings_pars_fragment: Od,
  envmap_fragment: Nd,
  envmap_common_pars_fragment: Fd,
  envmap_pars_fragment: Bd,
  envmap_pars_vertex: Ud,
  envmap_physical_pars_fragment: Zd,
  envmap_vertex: Gd,
  fog_vertex: zd,
  fog_pars_vertex: Hd,
  fog_fragment: Vd,
  fog_pars_fragment: kd,
  gradientmap_pars_fragment: Wd,
  lightmap_fragment: qd,
  lightmap_pars_fragment: Xd,
  lights_lambert_vertex: jd,
  lights_pars_begin: Yd,
  lights_toon_fragment: Jd,
  lights_toon_pars_fragment: $d,
  lights_phong_fragment: Qd,
  lights_phong_pars_fragment: Kd,
  lights_physical_fragment: ep,
  lights_physical_pars_fragment: tp,
  lights_fragment_begin: np,
  lights_fragment_maps: rp,
  lights_fragment_end: ip,
  logdepthbuf_fragment: ap,
  logdepthbuf_pars_fragment: op,
  logdepthbuf_pars_vertex: sp,
  logdepthbuf_vertex: cp,
  map_fragment: lp,
  map_pars_fragment: up,
  map_particle_fragment: hp,
  map_particle_pars_fragment: fp,
  metalnessmap_fragment: dp,
  metalnessmap_pars_fragment: pp,
  morphnormal_vertex: vp,
  morphtarget_pars_vertex: mp,
  morphtarget_vertex: gp,
  normal_fragment_begin: yp,
  normal_fragment_maps: xp,
  normalmap_pars_fragment: _p,
  clearcoat_normal_fragment_begin: Mp,
  clearcoat_normal_fragment_maps: bp,
  clearcoat_pars_fragment: wp,
  packing: Sp,
  premultiplied_alpha_fragment: Ep,
  project_vertex: Tp,
  dithering_fragment: Ap,
  dithering_pars_fragment: Lp,
  roughnessmap_fragment: Rp,
  roughnessmap_pars_fragment: Cp,
  shadowmap_pars_fragment: Pp,
  shadowmap_pars_vertex: Dp,
  shadowmap_vertex: Ip,
  shadowmask_pars_fragment: Op,
  skinbase_vertex: Np,
  skinning_pars_vertex: Fp,
  skinning_vertex: Bp,
  skinnormal_vertex: Up,
  specularmap_fragment: Gp,
  specularmap_pars_fragment: zp,
  tonemapping_fragment: Hp,
  tonemapping_pars_fragment: Vp,
  uv_pars_fragment: kp,
  uv_pars_vertex: Wp,
  uv_vertex: qp,
  uv2_pars_fragment: Xp,
  uv2_pars_vertex: jp,
  uv2_vertex: Yp,
  worldpos_vertex: Zp,
  background_frag: Jp,
  background_vert: $p,
  cube_frag: Qp,
  cube_vert: Kp,
  depth_frag: ev,
  depth_vert: tv,
  distanceRGBA_frag: nv,
  distanceRGBA_vert: rv,
  equirect_frag: iv,
  equirect_vert: av,
  linedashed_frag: ov,
  linedashed_vert: sv,
  meshbasic_frag: cv,
  meshbasic_vert: lv,
  meshlambert_frag: uv,
  meshlambert_vert: hv,
  meshmatcap_frag: fv,
  meshmatcap_vert: dv,
  meshtoon_frag: pv,
  meshtoon_vert: vv,
  meshphong_frag: mv,
  meshphong_vert: gv,
  meshphysical_frag: yv,
  meshphysical_vert: xv,
  normal_frag: _v,
  normal_vert: Mv,
  points_frag: bv,
  points_vert: wv,
  shadow_frag: Sv,
  shadow_vert: Ev,
  sprite_frag: Tv,
  sprite_vert: Av
}, mn = {
  basic: {
    uniforms: gt([
      Z.common,
      Z.specularmap,
      Z.envmap,
      Z.aomap,
      Z.lightmap,
      Z.fog
    ]),
    vertexShader: Ie.meshbasic_vert,
    fragmentShader: Ie.meshbasic_frag
  },
  lambert: {
    uniforms: gt([
      Z.common,
      Z.specularmap,
      Z.envmap,
      Z.aomap,
      Z.lightmap,
      Z.emissivemap,
      Z.fog,
      Z.lights,
      {
        emissive: { value: new ee(0) }
      }
    ]),
    vertexShader: Ie.meshlambert_vert,
    fragmentShader: Ie.meshlambert_frag
  },
  phong: {
    uniforms: gt([
      Z.common,
      Z.specularmap,
      Z.envmap,
      Z.aomap,
      Z.lightmap,
      Z.emissivemap,
      Z.bumpmap,
      Z.normalmap,
      Z.displacementmap,
      Z.fog,
      Z.lights,
      {
        emissive: { value: new ee(0) },
        specular: { value: new ee(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ie.meshphong_vert,
    fragmentShader: Ie.meshphong_frag
  },
  standard: {
    uniforms: gt([
      Z.common,
      Z.envmap,
      Z.aomap,
      Z.lightmap,
      Z.emissivemap,
      Z.bumpmap,
      Z.normalmap,
      Z.displacementmap,
      Z.roughnessmap,
      Z.metalnessmap,
      Z.fog,
      Z.lights,
      {
        emissive: { value: new ee(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Ie.meshphysical_vert,
    fragmentShader: Ie.meshphysical_frag
  },
  toon: {
    uniforms: gt([
      Z.common,
      Z.specularmap,
      Z.aomap,
      Z.lightmap,
      Z.emissivemap,
      Z.bumpmap,
      Z.normalmap,
      Z.displacementmap,
      Z.gradientmap,
      Z.fog,
      Z.lights,
      {
        emissive: { value: new ee(0) },
        specular: { value: new ee(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ie.meshtoon_vert,
    fragmentShader: Ie.meshtoon_frag
  },
  matcap: {
    uniforms: gt([
      Z.common,
      Z.bumpmap,
      Z.normalmap,
      Z.displacementmap,
      Z.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ie.meshmatcap_vert,
    fragmentShader: Ie.meshmatcap_frag
  },
  points: {
    uniforms: gt([
      Z.points,
      Z.fog
    ]),
    vertexShader: Ie.points_vert,
    fragmentShader: Ie.points_frag
  },
  dashed: {
    uniforms: gt([
      Z.common,
      Z.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ie.linedashed_vert,
    fragmentShader: Ie.linedashed_frag
  },
  depth: {
    uniforms: gt([
      Z.common,
      Z.displacementmap
    ]),
    vertexShader: Ie.depth_vert,
    fragmentShader: Ie.depth_frag
  },
  normal: {
    uniforms: gt([
      Z.common,
      Z.bumpmap,
      Z.normalmap,
      Z.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ie.normal_vert,
    fragmentShader: Ie.normal_frag
  },
  sprite: {
    uniforms: gt([
      Z.sprite,
      Z.fog
    ]),
    vertexShader: Ie.sprite_vert,
    fragmentShader: Ie.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: new wt() },
      t2D: { value: null }
    },
    vertexShader: Ie.background_vert,
    fragmentShader: Ie.background_frag
  },
  /* -------------------------------------------------------------------------
  //	Cube map shader
   ------------------------------------------------------------------------- */
  cube: {
    uniforms: gt([
      Z.envmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ie.cube_vert,
    fragmentShader: Ie.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ie.equirect_vert,
    fragmentShader: Ie.equirect_frag
  },
  distanceRGBA: {
    uniforms: gt([
      Z.common,
      Z.displacementmap,
      {
        referencePosition: { value: new M() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ie.distanceRGBA_vert,
    fragmentShader: Ie.distanceRGBA_frag
  },
  shadow: {
    uniforms: gt([
      Z.lights,
      Z.fog,
      {
        color: { value: new ee(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ie.shadow_vert,
    fragmentShader: Ie.shadow_frag
  }
};
mn.physical = {
  uniforms: gt([
    mn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new U(1, 1) },
      clearcoatNormalMap: { value: null },
      sheen: { value: new ee(0) },
      transparency: { value: 0 }
    }
  ]),
  vertexShader: Ie.meshphysical_vert,
  fragmentShader: Ie.meshphysical_frag
};
function Lv(e, t, n, r) {
  var i = new ee(0), a = 0, o, s, c = null, l = 0, u = null;
  function h(d, m, g, y) {
    var p = m.background, v = e.xr, _ = v.getSession && v.getSession();
    if (_ && _.environmentBlendMode === "additive" && (p = null), p === null ? f(i, a) : p && p.isColor && (f(p, 1), y = !0), (e.autoClear || y) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), p && (p.isCubeTexture || p.isWebGLCubeRenderTarget || p.mapping === ca)) {
      s === void 0 && (s = new tt(
        new Vo(1, 1, 1),
        new Lt({
          type: "BackgroundCubeMaterial",
          uniforms: Br(mn.cube.uniforms),
          vertexShader: mn.cube.vertexShader,
          fragmentShader: mn.cube.fragmentShader,
          side: ft,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })
      ), s.geometry.deleteAttribute("normal"), s.geometry.deleteAttribute("uv"), s.onBeforeRender = function(x, T, A) {
        this.matrixWorld.copyPosition(A.matrixWorld);
      }, Object.defineProperty(s.material, "envMap", {
        get: function() {
          return this.uniforms.envMap.value;
        }
      }), n.update(s));
      var b = p.isWebGLCubeRenderTarget ? p.texture : p;
      s.material.uniforms.envMap.value = b, s.material.uniforms.flipEnvMap.value = b.isCubeTexture ? -1 : 1, (c !== p || l !== b.version || u !== e.toneMapping) && (s.material.needsUpdate = !0, c = p, l = b.version, u = e.toneMapping), d.unshift(s, s.geometry, s.material, 0, 0, null);
    } else
      p && p.isTexture && (o === void 0 && (o = new tt(
        new Gr(2, 2),
        new Lt({
          type: "BackgroundMaterial",
          uniforms: Br(mn.background.uniforms),
          vertexShader: mn.background.vertexShader,
          fragmentShader: mn.background.fragmentShader,
          side: sa,
          depthTest: !1,
          depthWrite: !1,
          fog: !1
        })
      ), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
        get: function() {
          return this.uniforms.t2D.value;
        }
      }), n.update(o)), o.material.uniforms.t2D.value = p, p.matrixAutoUpdate === !0 && p.updateMatrix(), o.material.uniforms.uvTransform.value.copy(p.matrix), (c !== p || l !== p.version || u !== e.toneMapping) && (o.material.needsUpdate = !0, c = p, l = p.version, u = e.toneMapping), d.unshift(o, o.geometry, o.material, 0, 0, null));
  }
  function f(d, m) {
    t.buffers.color.setClear(d.r, d.g, d.b, m, r);
  }
  return {
    getClearColor: function() {
      return i;
    },
    setClearColor: function(d, m) {
      i.set(d), a = m !== void 0 ? m : 1, f(i, a);
    },
    getClearAlpha: function() {
      return a;
    },
    setClearAlpha: function(d) {
      a = d, f(i, a);
    },
    render: h
  };
}
function Rv(e, t, n, r) {
  var i = r.isWebGL2, a;
  function o(l) {
    a = l;
  }
  function s(l, u) {
    e.drawArrays(a, l, u), n.update(u, a);
  }
  function c(l, u, h, f) {
    if (f !== 0) {
      var d, m;
      if (i)
        d = e, m = "drawArraysInstanced";
      else if (d = t.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", d === null) {
        console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
      }
      d[m](a, u, h, f), n.update(h, a, f);
    }
  }
  this.setMode = o, this.render = s, this.renderInstances = c;
}
function Cv(e, t, n) {
  var r;
  function i() {
    if (r !== void 0)
      return r;
    var T = t.get("EXT_texture_filter_anisotropic");
    return T !== null ? r = e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : r = 0, r;
  }
  function a(T) {
    if (T === "highp") {
      if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      T = "mediump";
    }
    return T === "mediump" && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  var o = typeof WebGL2RenderingContext != "undefined" && e instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext != "undefined" && e instanceof WebGL2ComputeRenderingContext, s = n.precision !== void 0 ? n.precision : "highp", c = a(s);
  c !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", c, "instead."), s = c);
  var l = n.logarithmicDepthBuffer === !0, u = e.getParameter(34930), h = e.getParameter(35660), f = e.getParameter(3379), d = e.getParameter(34076), m = e.getParameter(34921), g = e.getParameter(36347), y = e.getParameter(36348), p = e.getParameter(36349), v = h > 0, _ = o || !!t.get("OES_texture_float"), b = v && _, x = o ? e.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    getMaxAnisotropy: i,
    getMaxPrecision: a,
    precision: s,
    logarithmicDepthBuffer: l,
    maxTextures: u,
    maxVertexTextures: h,
    maxTextureSize: f,
    maxCubemapSize: d,
    maxAttributes: m,
    maxVertexUniforms: g,
    maxVaryings: y,
    maxFragmentUniforms: p,
    vertexTextures: v,
    floatFragmentTextures: _,
    floatVertexTextures: b,
    maxSamples: x
  };
}
function Pv() {
  var e = this, t = null, n = 0, r = !1, i = !1, a = new tn(), o = new wt(), s = { value: null, needsUpdate: !1 };
  this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, h, f) {
    var d = u.length !== 0 || h || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = h, t = l(u, f, 0), n = u.length, d;
  }, this.beginShadows = function() {
    i = !0, l(null);
  }, this.endShadows = function() {
    i = !1, c();
  }, this.setState = function(u, h, f, d, m, g) {
    if (!r || u === null || u.length === 0 || i && !f)
      i ? l(null) : c();
    else {
      var y = i ? 0 : n, p = y * 4, v = m.clippingState || null;
      s.value = v, v = l(u, d, p, g);
      for (var _ = 0; _ !== p; ++_)
        v[_] = t[_];
      m.clippingState = v, this.numIntersection = h ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function c() {
    s.value !== t && (s.value = t, s.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function l(u, h, f, d) {
    var m = u !== null ? u.length : 0, g = null;
    if (m !== 0) {
      if (g = s.value, d !== !0 || g === null) {
        var y = f + m * 4, p = h.matrixWorldInverse;
        o.getNormalMatrix(p), (g === null || g.length < y) && (g = new Float32Array(y));
        for (var v = 0, _ = f; v !== m; ++v, _ += 4)
          a.copy(u[v]).applyMatrix4(p, o), a.normal.toArray(g, _), g[_ + 3] = a.constant;
      }
      s.value = g, s.needsUpdate = !0;
    }
    return e.numPlanes = m, e.numIntersection = 0, g;
  }
}
function Dv(e) {
  var t = {};
  return {
    get: function(n) {
      if (t[n] !== void 0)
        return t[n];
      var r;
      switch (n) {
        case "WEBGL_depth_texture":
          r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          r = e.getExtension(n);
      }
      return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), t[n] = r, r;
    }
  };
}
function Iv(e, t, n) {
  var r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
  function a(u) {
    var h = u.target, f = r.get(h);
    f.index !== null && t.remove(f.index);
    for (var d in f.attributes)
      t.remove(f.attributes[d]);
    h.removeEventListener("dispose", a), r.delete(h);
    var m = i.get(f);
    m && (t.remove(m), i.delete(f)), n.memory.geometries--;
  }
  function o(u, h) {
    var f = r.get(h);
    return f || (h.addEventListener("dispose", a), h.isBufferGeometry ? f = h : h.isGeometry && (h._bufferGeometry === void 0 && (h._bufferGeometry = new te().setFromObject(u)), f = h._bufferGeometry), r.set(h, f), n.memory.geometries++, f);
  }
  function s(u) {
    var h = u.index, f = u.attributes;
    h !== null && t.update(h, 34963);
    for (var d in f)
      t.update(f[d], 34962);
    var m = u.morphAttributes;
    for (var d in m)
      for (var g = m[d], y = 0, p = g.length; y < p; y++)
        t.update(g[y], 34962);
  }
  function c(u) {
    var h = [], f = u.index, d = u.attributes.position, m = 0;
    if (f !== null) {
      var g = f.array;
      m = f.version;
      for (var y = 0, p = g.length; y < p; y += 3) {
        var v = g[y + 0], _ = g[y + 1], b = g[y + 2];
        h.push(v, _, _, b, b, v);
      }
    } else {
      var g = d.array;
      m = d.version;
      for (var y = 0, p = g.length / 3 - 1; y < p; y += 3) {
        var v = y + 0, _ = y + 1, b = y + 2;
        h.push(v, _, _, b, b, v);
      }
    }
    var x = new (Cu(h) > 65535 ? Pi : Ci)(h, 1);
    x.version = m, t.update(x, 34963);
    var T = i.get(u);
    T && t.remove(T), i.set(u, x);
  }
  function l(u) {
    var h = i.get(u);
    if (h) {
      var f = u.index;
      f !== null && h.version < f.version && c(u);
    } else
      c(u);
    return i.get(u);
  }
  return {
    get: o,
    update: s,
    getWireframeAttribute: l
  };
}
function Ov(e, t, n, r) {
  var i = r.isWebGL2, a;
  function o(f) {
    a = f;
  }
  var s, c;
  function l(f) {
    s = f.type, c = f.bytesPerElement;
  }
  function u(f, d) {
    e.drawElements(a, d, s, f * c), n.update(d, a);
  }
  function h(f, d, m, g) {
    if (g !== 0) {
      var y, p;
      if (i)
        y = e, p = "drawElementsInstanced";
      else if (y = t.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", y === null) {
        console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        return;
      }
      y[p](a, m, s, d * c, g), n.update(m, a, g);
    }
  }
  this.setMode = o, this.setIndex = l, this.render = u, this.renderInstances = h;
}
function Nv(e) {
  var t = {
    geometries: 0,
    textures: 0
  }, n = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function r(a, o, s) {
    switch (s = s || 1, n.calls++, o) {
      case 4:
        n.triangles += s * (a / 3);
        break;
      case 1:
        n.lines += s * (a / 2);
        break;
      case 3:
        n.lines += s * (a - 1);
        break;
      case 2:
        n.lines += s * a;
        break;
      case 0:
        n.points += s * a;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    n.frame++, n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
  }
  return {
    memory: t,
    render: n,
    programs: null,
    autoReset: !0,
    reset: i,
    update: r
  };
}
function Fv(e, t) {
  return Math.abs(t[1]) - Math.abs(e[1]);
}
function Bv(e) {
  var t = {}, n = new Float32Array(8);
  function r(i, a, o, s) {
    var c = i.morphTargetInfluences, l = c === void 0 ? 0 : c.length, u = t[a.id];
    if (u === void 0) {
      u = [];
      for (var h = 0; h < l; h++)
        u[h] = [h, 0];
      t[a.id] = u;
    }
    for (var f = o.morphTargets && a.morphAttributes.position, d = o.morphNormals && a.morphAttributes.normal, h = 0; h < l; h++) {
      var m = u[h];
      m[1] !== 0 && (f && a.deleteAttribute("morphTarget" + h), d && a.deleteAttribute("morphNormal" + h));
    }
    for (var h = 0; h < l; h++) {
      var m = u[h];
      m[0] = h, m[1] = c[h];
    }
    u.sort(Fv);
    for (var g = 0, h = 0; h < 8; h++) {
      var m = u[h];
      if (m) {
        var y = m[0], p = m[1];
        if (p) {
          f && a.setAttribute("morphTarget" + h, f[y]), d && a.setAttribute("morphNormal" + h, d[y]), n[h] = p, g += p;
          continue;
        }
      }
      n[h] = 0;
    }
    var v = a.morphTargetsRelative ? 1 : 1 - g;
    s.getUniforms().setValue(e, "morphTargetBaseInfluence", v), s.getUniforms().setValue(e, "morphTargetInfluences", n);
  }
  return {
    update: r
  };
}
function Uv(e, t, n, r) {
  var i = /* @__PURE__ */ new WeakMap();
  function a(s) {
    var c = r.render.frame, l = s.geometry, u = t.get(s, l);
    return i.get(u) !== c && (l.isGeometry && u.updateFromObject(s), t.update(u), i.set(u, c)), s.isInstancedMesh && n.update(s.instanceMatrix, 34962), u;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    update: a,
    dispose: o
  };
}
function Gn(e, t, n, r, i, a, o, s, c, l) {
  e = e !== void 0 ? e : [], t = t !== void 0 ? t : bc, o = o !== void 0 ? o : er, je.call(this, e, t, n, r, i, a, o, s, c, l), this.flipY = !1;
}
Gn.prototype = Object.create(je.prototype);
Gn.prototype.constructor = Gn;
Gn.prototype.isCubeTexture = !0;
Object.defineProperty(Gn.prototype, "images", {
  get: function() {
    return this.image;
  },
  set: function(e) {
    this.image = e;
  }
});
function Oi(e, t, n, r) {
  je.call(this, null), this.image = { data: e || null, width: t || 1, height: n || 1, depth: r || 1 }, this.magFilter = st, this.minFilter = st, this.wrapR = Tt, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0;
}
Oi.prototype = Object.create(je.prototype);
Oi.prototype.constructor = Oi;
Oi.prototype.isDataTexture2DArray = !0;
function Ni(e, t, n, r) {
  je.call(this, null), this.image = { data: e || null, width: t || 1, height: n || 1, depth: r || 1 }, this.magFilter = st, this.minFilter = st, this.wrapR = Tt, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0;
}
Ni.prototype = Object.create(je.prototype);
Ni.prototype.constructor = Ni;
Ni.prototype.isDataTexture3D = !0;
var Iu = new je(), Gv = new Oi(), zv = new Ni(), Ou = new Gn(), cl = [], ll = [], ul = new Float32Array(16), hl = new Float32Array(9), fl = new Float32Array(4);
function ai(e, t, n) {
  var r = e[0];
  if (r <= 0 || r > 0)
    return e;
  var i = t * n, a = cl[i];
  if (a === void 0 && (a = new Float32Array(i), cl[i] = a), t !== 0) {
    r.toArray(a, 0);
    for (var o = 1, s = 0; o !== t; ++o)
      s += n, e[o].toArray(a, s);
  }
  return a;
}
function Gt(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function It(e, t) {
  for (var n = 0, r = t.length; n < r; n++)
    e[n] = t[n];
}
function Nu(e, t) {
  var n = ll[t];
  n === void 0 && (n = new Int32Array(t), ll[t] = n);
  for (var r = 0; r !== t; ++r)
    n[r] = e.allocateTextureUnit();
  return n;
}
function Hv(e, t) {
  var n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function Vv(e, t) {
  var n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (Gt(n, t))
      return;
    e.uniform2fv(this.addr, t), It(n, t);
  }
}
function kv(e, t) {
  var n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else if (t.r !== void 0)
    (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
  else {
    if (Gt(n, t))
      return;
    e.uniform3fv(this.addr, t), It(n, t);
  }
}
function Wv(e, t) {
  var n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (Gt(n, t))
      return;
    e.uniform4fv(this.addr, t), It(n, t);
  }
}
function qv(e, t) {
  var n = this.cache, r = t.elements;
  if (r === void 0) {
    if (Gt(n, t))
      return;
    e.uniformMatrix2fv(this.addr, !1, t), It(n, t);
  } else {
    if (Gt(n, r))
      return;
    fl.set(r), e.uniformMatrix2fv(this.addr, !1, fl), It(n, r);
  }
}
function Xv(e, t) {
  var n = this.cache, r = t.elements;
  if (r === void 0) {
    if (Gt(n, t))
      return;
    e.uniformMatrix3fv(this.addr, !1, t), It(n, t);
  } else {
    if (Gt(n, r))
      return;
    hl.set(r), e.uniformMatrix3fv(this.addr, !1, hl), It(n, r);
  }
}
function jv(e, t) {
  var n = this.cache, r = t.elements;
  if (r === void 0) {
    if (Gt(n, t))
      return;
    e.uniformMatrix4fv(this.addr, !1, t), It(n, t);
  } else {
    if (Gt(n, r))
      return;
    ul.set(r), e.uniformMatrix4fv(this.addr, !1, ul), It(n, r);
  }
}
function Yv(e, t, n) {
  var r = this.cache, i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.safeSetTexture2D(t || Iu, i);
}
function Zv(e, t, n) {
  var r = this.cache, i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || Gv, i);
}
function Jv(e, t, n) {
  var r = this.cache, i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || zv, i);
}
function $v(e, t, n) {
  var r = this.cache, i = n.allocateTextureUnit();
  r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.safeSetTextureCube(t || Ou, i);
}
function Qv(e, t) {
  var n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function Kv(e, t) {
  var n = this.cache;
  Gt(n, t) || (e.uniform2iv(this.addr, t), It(n, t));
}
function em(e, t) {
  var n = this.cache;
  Gt(n, t) || (e.uniform3iv(this.addr, t), It(n, t));
}
function tm(e, t) {
  var n = this.cache;
  Gt(n, t) || (e.uniform4iv(this.addr, t), It(n, t));
}
function nm(e, t) {
  var n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function rm(e) {
  switch (e) {
    case 5126:
      return Hv;
    case 35664:
      return Vv;
    case 35665:
      return kv;
    case 35666:
      return Wv;
    case 35674:
      return qv;
    case 35675:
      return Xv;
    case 35676:
      return jv;
    case 5124:
    case 35670:
      return Qv;
    case 35667:
    case 35671:
      return Kv;
    case 35668:
    case 35672:
      return em;
    case 35669:
    case 35673:
      return tm;
    case 5125:
      return nm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Yv;
    case 35679:
    case 36299:
    case 36307:
      return Jv;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return $v;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Zv;
  }
}
function im(e, t) {
  e.uniform1fv(this.addr, t);
}
function am(e, t) {
  e.uniform1iv(this.addr, t);
}
function om(e, t) {
  e.uniform2iv(this.addr, t);
}
function sm(e, t) {
  e.uniform3iv(this.addr, t);
}
function cm(e, t) {
  e.uniform4iv(this.addr, t);
}
function lm(e, t) {
  var n = ai(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function um(e, t) {
  var n = ai(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function hm(e, t) {
  var n = ai(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function fm(e, t) {
  var n = ai(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function dm(e, t) {
  var n = ai(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function pm(e, t) {
  var n = ai(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function vm(e, t, n) {
  var r = t.length, i = Nu(n, r);
  e.uniform1iv(this.addr, i);
  for (var a = 0; a !== r; ++a)
    n.safeSetTexture2D(t[a] || Iu, i[a]);
}
function mm(e, t, n) {
  var r = t.length, i = Nu(n, r);
  e.uniform1iv(this.addr, i);
  for (var a = 0; a !== r; ++a)
    n.safeSetTextureCube(t[a] || Ou, i[a]);
}
function gm(e) {
  switch (e) {
    case 5126:
      return im;
    case 35664:
      return lm;
    case 35665:
      return um;
    case 35666:
      return hm;
    case 35674:
      return fm;
    case 35675:
      return dm;
    case 35676:
      return pm;
    case 5124:
    case 35670:
      return am;
    case 35667:
    case 35671:
      return om;
    case 35668:
    case 35672:
      return sm;
    case 35669:
    case 35673:
      return cm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return vm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return mm;
  }
}
function ym(e, t, n) {
  this.id = e, this.addr = n, this.cache = [], this.setValue = rm(t.type);
}
function Fu(e, t, n) {
  this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = gm(t.type);
}
Fu.prototype.updateCache = function(e) {
  var t = this.cache;
  e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), It(t, e);
};
function Bu(e) {
  this.id = e, this.seq = [], this.map = {};
}
Bu.prototype.setValue = function(e, t, n) {
  for (var r = this.seq, i = 0, a = r.length; i !== a; ++i) {
    var o = r[i];
    o.setValue(e, t[o.id], n);
  }
};
var ds = /([\w\d_]+)(\])?(\[|\.)?/g;
function dl(e, t) {
  e.seq.push(t), e.map[t.id] = t;
}
function xm(e, t, n) {
  var r = e.name, i = r.length;
  for (ds.lastIndex = 0; ; ) {
    var a = ds.exec(r), o = ds.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
    if (c && (s = s | 0), l === void 0 || l === "[" && o + 2 === i) {
      dl(n, l === void 0 ? new ym(s, e, t) : new Fu(s, e, t));
      break;
    } else {
      var u = n.map, h = u[s];
      h === void 0 && (h = new Bu(s), dl(n, h)), n = h;
    }
  }
}
function Fn(e, t) {
  this.seq = [], this.map = {};
  for (var n = e.getProgramParameter(t, 35718), r = 0; r < n; ++r) {
    var i = e.getActiveUniform(t, r), a = e.getUniformLocation(t, i.name);
    xm(i, a, this);
  }
}
Fn.prototype.setValue = function(e, t, n, r) {
  var i = this.map[t];
  i !== void 0 && i.setValue(e, n, r);
};
Fn.prototype.setOptional = function(e, t, n) {
  var r = t[n];
  r !== void 0 && this.setValue(e, n, r);
};
Fn.upload = function(e, t, n, r) {
  for (var i = 0, a = t.length; i !== a; ++i) {
    var o = t[i], s = n[o.id];
    s.needsUpdate !== !1 && o.setValue(e, s.value, r);
  }
};
Fn.seqWithValue = function(e, t) {
  for (var n = [], r = 0, i = e.length; r !== i; ++r) {
    var a = e[r];
    a.id in t && n.push(a);
  }
  return n;
};
function pl(e, t, n) {
  var r = e.createShader(t);
  return e.shaderSource(r, n), e.compileShader(r), r;
}
var _m = 0;
function Mm(e) {
  for (var t = e.split(`
`), n = 0; n < t.length; n++)
    t[n] = n + 1 + ": " + t[n];
  return t.join(`
`);
}
function Uu(e) {
  switch (e) {
    case At:
      return ["Linear", "( value )"];
    case zo:
      return ["sRGB", "( value )"];
    case Lc:
      return ["RGBE", "( value )"];
    case Eu:
      return ["RGBM", "( value, 7.0 )"];
    case Tu:
      return ["RGBM", "( value, 16.0 )"];
    case Au:
      return ["RGBD", "( value, 256.0 )"];
    case Ac:
      return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
    case Gf:
      return ["LogLuv", "( value )"];
    default:
      throw new Error("unsupported encoding: " + e);
  }
}
function vl(e, t, n) {
  var r = e.getShaderParameter(t, 35713), i = e.getShaderInfoLog(t).trim();
  if (r && i === "")
    return "";
  var a = e.getShaderSource(t);
  return "THREE.WebGLShader: gl.getShaderInfoLog() " + n + `
` + i + Mm(a);
}
function di(e, t) {
  var n = Uu(t);
  return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }";
}
function bm(e, t) {
  var n = Uu(t);
  return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
}
function wm(e, t) {
  var n;
  switch (t) {
    case _u:
      n = "Linear";
      break;
    case Uh:
      n = "Reinhard";
      break;
    case Gh:
      n = "Uncharted2";
      break;
    case zh:
      n = "OptimizedCineon";
      break;
    case Hh:
      n = "ACESFilmic";
      break;
    default:
      throw new Error("unsupported toneMapping: " + t);
  }
  return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
function Sm(e) {
  var t = [
    e.extensionDerivatives || e.envMapCubeUV || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || e.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (e.extensionShaderTextureLOD || e.envMap) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ];
  return t.filter(_i).join(`
`);
}
function Em(e) {
  var t = [];
  for (var n in e) {
    var r = e[n];
    r !== !1 && t.push("#define " + n + " " + r);
  }
  return t.join(`
`);
}
function Tm(e, t) {
  for (var n = {}, r = e.getProgramParameter(t, 35721), i = 0; i < r; i++) {
    var a = e.getActiveAttrib(t, i), o = a.name;
    n[o] = e.getAttribLocation(t, o);
  }
  return n;
}
function _i(e) {
  return e !== "";
}
function ml(e, t) {
  return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function gl(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var Am = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Os(e) {
  return e.replace(Am, Lm);
}
function Lm(e, t) {
  var n = Ie[t];
  if (n === void 0)
    throw new Error("Can not resolve #include <" + t + ">");
  return Os(n);
}
var Rm = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, Cm = /#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;
function yl(e) {
  return e.replace(Cm, Gu).replace(Rm, Pm);
}
function Pm(e, t, n, r) {
  return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), Gu(e, t, n, r);
}
function Gu(e, t, n, r) {
  for (var i = "", a = parseInt(t); a < parseInt(n); a++)
    i += r.replace(/\[ i \]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
  return i;
}
function xl(e) {
  var t = "precision " + e.precision + ` float;
precision ` + e.precision + " int;";
  return e.precision === "highp" ? t += `
#define HIGH_PRECISION` : e.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : e.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function Dm(e) {
  var t = "SHADOWMAP_TYPE_BASIC";
  return e.shadowMapType === mu ? t = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === mh ? t = "SHADOWMAP_TYPE_PCF_SOFT" : e.shadowMapType === xi && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Im(e) {
  var t = "ENVMAP_TYPE_CUBE";
  if (e.envMap)
    switch (e.envMapMode) {
      case bc:
      case wc:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case ca:
      case Ec:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
      case Mu:
      case Sc:
        t = "ENVMAP_TYPE_EQUIREC";
        break;
      case bu:
        t = "ENVMAP_TYPE_SPHERE";
        break;
    }
  return t;
}
function Om(e) {
  var t = "ENVMAP_MODE_REFLECTION";
  if (e.envMap)
    switch (e.envMapMode) {
      case wc:
      case Sc:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function Nm(e) {
  var t = "ENVMAP_BLENDING_NONE";
  if (e.envMap)
    switch (e.combine) {
      case Uo:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Fh:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case Bh:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function Fm(e, t, n) {
  var r = e.getContext(), i = n.defines, a = n.vertexShader, o = n.fragmentShader, s = Dm(n), c = Im(n), l = Om(n), u = Nm(n), h = e.gammaFactor > 0 ? e.gammaFactor : 1, f = n.isWebGL2 ? "" : Sm(n), d = Em(i), m = r.createProgram(), g, y;
  if (n.isRawShaderMaterial ? (g = [
    d
  ].filter(_i).join(`
`), g.length > 0 && (g += `
`), y = [
    f,
    d
  ].filter(_i).join(`
`), y.length > 0 && (y += `
`)) : (g = [
    xl(n),
    "#define SHADER_NAME " + n.shaderName,
    d,
    n.instancing ? "#define USE_INSTANCING" : "",
    n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    "#define GAMMA_FACTOR " + h,
    "#define MAX_BONES " + n.maxBones,
    n.useFog && n.fog ? "#define USE_FOG" : "",
    n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
    n.map ? "#define USE_MAP" : "",
    n.envMap ? "#define USE_ENVMAP" : "",
    n.envMap ? "#define " + l : "",
    n.lightMap ? "#define USE_LIGHTMAP" : "",
    n.aoMap ? "#define USE_AOMAP" : "",
    n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    n.bumpMap ? "#define USE_BUMPMAP" : "",
    n.normalMap ? "#define USE_NORMALMAP" : "",
    n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    n.specularMap ? "#define USE_SPECULARMAP" : "",
    n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    n.metalnessMap ? "#define USE_METALNESSMAP" : "",
    n.alphaMap ? "#define USE_ALPHAMAP" : "",
    n.vertexTangents ? "#define USE_TANGENT" : "",
    n.vertexColors ? "#define USE_COLOR" : "",
    n.vertexUvs ? "#define USE_UV" : "",
    n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    n.flatShading ? "#define FLAT_SHADED" : "",
    n.skinning ? "#define USE_SKINNING" : "",
    n.useVertexTexture ? "#define BONE_TEXTURE" : "",
    n.morphTargets ? "#define USE_MORPHTARGETS" : "",
    n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    n.doubleSided ? "#define DOUBLE_SIDED" : "",
    n.flipSided ? "#define FLIP_SIDED" : "",
    n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    n.shadowMapEnabled ? "#define " + s : "",
    n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    " attribute mat4 instanceMatrix;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#ifdef USE_COLOR",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_MORPHTARGETS",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(_i).join(`
`), y = [
    f,
    xl(n),
    "#define SHADER_NAME " + n.shaderName,
    d,
    n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "",
    // add '.0' if integer
    "#define GAMMA_FACTOR " + h,
    n.useFog && n.fog ? "#define USE_FOG" : "",
    n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
    n.map ? "#define USE_MAP" : "",
    n.matcap ? "#define USE_MATCAP" : "",
    n.envMap ? "#define USE_ENVMAP" : "",
    n.envMap ? "#define " + c : "",
    n.envMap ? "#define " + l : "",
    n.envMap ? "#define " + u : "",
    n.lightMap ? "#define USE_LIGHTMAP" : "",
    n.aoMap ? "#define USE_AOMAP" : "",
    n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    n.bumpMap ? "#define USE_BUMPMAP" : "",
    n.normalMap ? "#define USE_NORMALMAP" : "",
    n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    n.specularMap ? "#define USE_SPECULARMAP" : "",
    n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    n.metalnessMap ? "#define USE_METALNESSMAP" : "",
    n.alphaMap ? "#define USE_ALPHAMAP" : "",
    n.sheen ? "#define USE_SHEEN" : "",
    n.vertexTangents ? "#define USE_TANGENT" : "",
    n.vertexColors ? "#define USE_COLOR" : "",
    n.vertexUvs ? "#define USE_UV" : "",
    n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    n.gradientMap ? "#define USE_GRADIENTMAP" : "",
    n.flatShading ? "#define FLAT_SHADED" : "",
    n.doubleSided ? "#define DOUBLE_SIDED" : "",
    n.flipSided ? "#define FLIP_SIDED" : "",
    n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    n.shadowMapEnabled ? "#define " + s : "",
    n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    n.toneMapping !== bi ? "#define TONE_MAPPING" : "",
    n.toneMapping !== bi ? Ie.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    n.toneMapping !== bi ? wm("toneMapping", n.toneMapping) : "",
    n.dithering ? "#define DITHERING" : "",
    n.outputEncoding || n.mapEncoding || n.matcapEncoding || n.envMapEncoding || n.emissiveMapEncoding || n.lightMapEncoding ? Ie.encodings_pars_fragment : "",
    // this code is required here because it is used by the various encoding/decoding function defined below
    n.mapEncoding ? di("mapTexelToLinear", n.mapEncoding) : "",
    n.matcapEncoding ? di("matcapTexelToLinear", n.matcapEncoding) : "",
    n.envMapEncoding ? di("envMapTexelToLinear", n.envMapEncoding) : "",
    n.emissiveMapEncoding ? di("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "",
    n.lightMapEncoding ? di("lightMapTexelToLinear", n.lightMapEncoding) : "",
    n.outputEncoding ? bm("linearToOutputTexel", n.outputEncoding) : "",
    n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
    `
`
  ].filter(_i).join(`
`)), a = Os(a), a = ml(a, n), a = gl(a, n), o = Os(o), o = ml(o, n), o = gl(o, n), a = yl(a), o = yl(o), n.isWebGL2 && !n.isRawShaderMaterial) {
    var p = !1, v = /^\s*#version\s+300\s+es\s*\n/;
    n.isShaderMaterial && a.match(v) !== null && o.match(v) !== null && (p = !0, a = a.replace(v, ""), o = o.replace(v, "")), g = [
      `#version 300 es
`,
      "#define attribute in",
      "#define varying out",
      "#define texture2D texture"
    ].join(`
`) + `
` + g, y = [
      `#version 300 es
`,
      "#define varying in",
      p ? "" : "out highp vec4 pc_fragColor;",
      p ? "" : "#define gl_FragColor pc_fragColor",
      "#define gl_FragDepthEXT gl_FragDepth",
      "#define texture2D texture",
      "#define textureCube texture",
      "#define texture2DProj textureProj",
      "#define texture2DLodEXT textureLod",
      "#define texture2DProjLodEXT textureProjLod",
      "#define textureCubeLodEXT textureLod",
      "#define texture2DGradEXT textureGrad",
      "#define texture2DProjGradEXT textureProjGrad",
      "#define textureCubeGradEXT textureGrad"
    ].join(`
`) + `
` + y;
  }
  var _ = g + a, b = y + o, x = pl(r, 35633, _), T = pl(r, 35632, b);
  if (r.attachShader(m, x), r.attachShader(m, T), n.index0AttributeName !== void 0 ? r.bindAttribLocation(m, 0, n.index0AttributeName) : n.morphTargets === !0 && r.bindAttribLocation(m, 0, "position"), r.linkProgram(m), e.debug.checkShaderErrors) {
    var A = r.getProgramInfoLog(m).trim(), D = r.getShaderInfoLog(x).trim(), R = r.getShaderInfoLog(T).trim(), V = !0, P = !0;
    if (r.getProgramParameter(m, 35714) === !1) {
      V = !1;
      var I = vl(r, x, "vertex"), F = vl(r, T, "fragment");
      console.error("THREE.WebGLProgram: shader error: ", r.getError(), "35715", r.getProgramParameter(m, 35715), "gl.getProgramInfoLog", A, I, F);
    } else
      A !== "" ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", A) : (D === "" || R === "") && (P = !1);
    P && (this.diagnostics = {
      runnable: V,
      programLog: A,
      vertexShader: {
        log: D,
        prefix: g
      },
      fragmentShader: {
        log: R,
        prefix: y
      }
    });
  }
  r.deleteShader(x), r.deleteShader(T);
  var H;
  this.getUniforms = function() {
    return H === void 0 && (H = new Fn(r, m)), H;
  };
  var C;
  return this.getAttributes = function() {
    return C === void 0 && (C = Tm(r, m)), C;
  }, this.destroy = function() {
    r.deleteProgram(m), this.program = void 0;
  }, this.name = n.shaderName, this.id = _m++, this.cacheKey = t, this.usedTimes = 1, this.program = m, this.vertexShader = x, this.fragmentShader = T, this;
}
function Bm(e, t, n) {
  var r = [], i = n.isWebGL2, a = n.logarithmicDepthBuffer, o = n.floatVertexTextures, s = n.precision, c = n.maxVertexUniforms, l = n.vertexTextures, u = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  }, h = [
    "precision",
    "isWebGL2",
    "supportsVertexTextures",
    "outputEncoding",
    "instancing",
    "map",
    "mapEncoding",
    "matcap",
    "matcapEncoding",
    "envMap",
    "envMapMode",
    "envMapEncoding",
    "envMapCubeUV",
    "lightMap",
    "lightMapEncoding",
    "aoMap",
    "emissiveMap",
    "emissiveMapEncoding",
    "bumpMap",
    "normalMap",
    "objectSpaceNormalMap",
    "tangentSpaceNormalMap",
    "clearcoatMap",
    "clearcoatRoughnessMap",
    "clearcoatNormalMap",
    "displacementMap",
    "specularMap",
    "roughnessMap",
    "metalnessMap",
    "gradientMap",
    "alphaMap",
    "combine",
    "vertexColors",
    "vertexTangents",
    "vertexUvs",
    "uvsVertexOnly",
    "fog",
    "useFog",
    "fogExp2",
    "flatShading",
    "sizeAttenuation",
    "logarithmicDepthBuffer",
    "skinning",
    "maxBones",
    "useVertexTexture",
    "morphTargets",
    "morphNormals",
    "maxMorphTargets",
    "maxMorphNormals",
    "premultipliedAlpha",
    "numDirLights",
    "numPointLights",
    "numSpotLights",
    "numHemiLights",
    "numRectAreaLights",
    "numDirLightShadows",
    "numPointLightShadows",
    "numSpotLightShadows",
    "shadowMapEnabled",
    "shadowMapType",
    "toneMapping",
    "physicallyCorrectLights",
    "alphaTest",
    "doubleSided",
    "flipSided",
    "numClippingPlanes",
    "numClipIntersection",
    "depthPacking",
    "dithering",
    "sheen"
  ];
  function f(g, y) {
    var p;
    if (y) {
      var v = mn[y];
      p = {
        name: g.type,
        uniforms: ad.clone(v.uniforms),
        vertexShader: v.vertexShader,
        fragmentShader: v.fragmentShader
      };
    } else
      p = {
        name: g.type,
        uniforms: g.uniforms,
        vertexShader: g.vertexShader,
        fragmentShader: g.fragmentShader
      };
    return p;
  }
  function d(g) {
    var y = g.skeleton, p = y.bones;
    if (o)
      return 1024;
    var v = c, _ = Math.floor((v - 20) / 4), b = Math.min(_, p.length);
    return b < p.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + p.length + " bones. This GPU supports " + b + "."), 0) : b;
  }
  function m(g) {
    var y;
    return g ? g.isTexture ? y = g.encoding : g.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), y = g.texture.encoding) : y = At, y;
  }
  this.getParameters = function(g, y, p, v, _, b, x) {
    var T = v.fog, A = g.isMeshStandardMaterial ? v.environment : null, D = g.envMap || A, R = u[g.type], V = x.isSkinnedMesh ? d(x) : 0;
    g.precision !== null && (s = n.getMaxPrecision(g.precision), s !== g.precision && console.warn("THREE.WebGLProgram.getParameters:", g.precision, "not supported, using", s, "instead."));
    var P = f(g, R);
    g.onBeforeCompile(P, e);
    var I = e.getRenderTarget(), F = {
      isWebGL2: i,
      shaderID: R,
      shaderName: P.name,
      uniforms: P.uniforms,
      vertexShader: P.vertexShader,
      fragmentShader: P.fragmentShader,
      defines: g.defines,
      isRawShaderMaterial: g.isRawShaderMaterial,
      isShaderMaterial: g.isShaderMaterial,
      precision: s,
      instancing: x.isInstancedMesh === !0,
      supportsVertexTextures: l,
      outputEncoding: I !== null ? m(I.texture) : e.outputEncoding,
      map: !!g.map,
      mapEncoding: m(g.map),
      matcap: !!g.matcap,
      matcapEncoding: m(g.matcap),
      envMap: !!D,
      envMapMode: D && D.mapping,
      envMapEncoding: m(D),
      envMapCubeUV: !!D && (D.mapping === ca || D.mapping === Ec),
      lightMap: !!g.lightMap,
      lightMapEncoding: m(g.lightMap),
      aoMap: !!g.aoMap,
      emissiveMap: !!g.emissiveMap,
      emissiveMapEncoding: m(g.emissiveMap),
      bumpMap: !!g.bumpMap,
      normalMap: !!g.normalMap,
      objectSpaceNormalMap: g.normalMapType === Vf,
      tangentSpaceNormalMap: g.normalMapType === ni,
      clearcoatMap: !!g.clearcoatMap,
      clearcoatRoughnessMap: !!g.clearcoatRoughnessMap,
      clearcoatNormalMap: !!g.clearcoatNormalMap,
      displacementMap: !!g.displacementMap,
      roughnessMap: !!g.roughnessMap,
      metalnessMap: !!g.metalnessMap,
      specularMap: !!g.specularMap,
      alphaMap: !!g.alphaMap,
      gradientMap: !!g.gradientMap,
      sheen: !!g.sheen,
      combine: g.combine,
      vertexTangents: g.normalMap && g.vertexTangents,
      vertexColors: g.vertexColors,
      vertexUvs: !!g.map || !!g.bumpMap || !!g.normalMap || !!g.specularMap || !!g.alphaMap || !!g.emissiveMap || !!g.roughnessMap || !!g.metalnessMap || !!g.clearcoatMap || !!g.clearcoatRoughnessMap || !!g.clearcoatNormalMap || !!g.displacementMap,
      uvsVertexOnly: !(g.map || g.bumpMap || g.normalMap || g.specularMap || g.alphaMap || g.emissiveMap || g.roughnessMap || g.metalnessMap || g.clearcoatNormalMap) && !!g.displacementMap,
      fog: !!T,
      useFog: g.fog,
      fogExp2: T && T.isFogExp2,
      flatShading: g.flatShading,
      sizeAttenuation: g.sizeAttenuation,
      logarithmicDepthBuffer: a,
      skinning: g.skinning && V > 0,
      maxBones: V,
      useVertexTexture: o,
      morphTargets: g.morphTargets,
      morphNormals: g.morphNormals,
      maxMorphTargets: e.maxMorphTargets,
      maxMorphNormals: e.maxMorphNormals,
      numDirLights: y.directional.length,
      numPointLights: y.point.length,
      numSpotLights: y.spot.length,
      numRectAreaLights: y.rectArea.length,
      numHemiLights: y.hemi.length,
      numDirLightShadows: y.directionalShadowMap.length,
      numPointLightShadows: y.pointShadowMap.length,
      numSpotLightShadows: y.spotShadowMap.length,
      numClippingPlanes: _,
      numClipIntersection: b,
      dithering: g.dithering,
      shadowMapEnabled: e.shadowMap.enabled && p.length > 0,
      shadowMapType: e.shadowMap.type,
      toneMapping: g.toneMapped ? e.toneMapping : bi,
      physicallyCorrectLights: e.physicallyCorrectLights,
      premultipliedAlpha: g.premultipliedAlpha,
      alphaTest: g.alphaTest,
      doubleSided: g.side === Bo,
      flipSided: g.side === ft,
      depthPacking: g.depthPacking !== void 0 ? g.depthPacking : !1,
      index0AttributeName: g.index0AttributeName,
      extensionDerivatives: g.extensions && g.extensions.derivatives,
      extensionFragDepth: g.extensions && g.extensions.fragDepth,
      extensionDrawBuffers: g.extensions && g.extensions.drawBuffers,
      extensionShaderTextureLOD: g.extensions && g.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: i || t.get("EXT_frag_depth") !== null,
      rendererExtensionDrawBuffers: i || t.get("WEBGL_draw_buffers") !== null,
      rendererExtensionShaderTextureLod: i || t.get("EXT_shader_texture_lod") !== null,
      onBeforeCompile: g.onBeforeCompile
    };
    return F;
  }, this.getProgramCacheKey = function(g) {
    var y = [];
    if (g.shaderID ? y.push(g.shaderID) : (y.push(g.fragmentShader), y.push(g.vertexShader)), g.defines !== void 0)
      for (var p in g.defines)
        y.push(p), y.push(g.defines[p]);
    if (g.isRawShaderMaterial === void 0) {
      for (var v = 0; v < h.length; v++)
        y.push(g[h[v]]);
      y.push(e.outputEncoding), y.push(e.gammaFactor);
    }
    return y.push(g.onBeforeCompile.toString()), y.join();
  }, this.acquireProgram = function(g, y) {
    for (var p, v = 0, _ = r.length; v < _; v++) {
      var b = r[v];
      if (b.cacheKey === y) {
        p = b, ++p.usedTimes;
        break;
      }
    }
    return p === void 0 && (p = new Fm(e, y, g), r.push(p)), p;
  }, this.releaseProgram = function(g) {
    if (--g.usedTimes === 0) {
      var y = r.indexOf(g);
      r[y] = r[r.length - 1], r.pop(), g.destroy();
    }
  }, this.programs = r;
}
function Um() {
  var e = /* @__PURE__ */ new WeakMap();
  function t(a) {
    var o = e.get(a);
    return o === void 0 && (o = {}, e.set(a, o)), o;
  }
  function n(a) {
    e.delete(a);
  }
  function r(a, o, s) {
    e.get(a)[o] = s;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    remove: n,
    update: r,
    dispose: i
  };
}
function Gm(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id;
}
function zm(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id;
}
function _l() {
  var e = [], t = 0, n = [], r = [], i = { id: -1 };
  function a() {
    t = 0, n.length = 0, r.length = 0;
  }
  function o(h, f, d, m, g, y) {
    var p = e[t];
    return p === void 0 ? (p = {
      id: h.id,
      object: h,
      geometry: f,
      material: d,
      program: d.program || i,
      groupOrder: m,
      renderOrder: h.renderOrder,
      z: g,
      group: y
    }, e[t] = p) : (p.id = h.id, p.object = h, p.geometry = f, p.material = d, p.program = d.program || i, p.groupOrder = m, p.renderOrder = h.renderOrder, p.z = g, p.group = y), t++, p;
  }
  function s(h, f, d, m, g, y) {
    var p = o(h, f, d, m, g, y);
    (d.transparent === !0 ? r : n).push(p);
  }
  function c(h, f, d, m, g, y) {
    var p = o(h, f, d, m, g, y);
    (d.transparent === !0 ? r : n).unshift(p);
  }
  function l(h, f) {
    n.length > 1 && n.sort(h || Gm), r.length > 1 && r.sort(f || zm);
  }
  function u() {
    for (var h = t, f = e.length; h < f; h++) {
      var d = e[h];
      if (d.id === null)
        break;
      d.id = null, d.object = null, d.geometry = null, d.material = null, d.program = null, d.group = null;
    }
  }
  return {
    opaque: n,
    transparent: r,
    init: a,
    push: s,
    unshift: c,
    finish: u,
    sort: l
  };
}
function Hm() {
  var e = /* @__PURE__ */ new WeakMap();
  function t(i) {
    var a = i.target;
    a.removeEventListener("dispose", t), e.delete(a);
  }
  function n(i, a) {
    var o = e.get(i), s;
    return o === void 0 ? (s = new _l(), e.set(i, /* @__PURE__ */ new WeakMap()), e.get(i).set(a, s), i.addEventListener("dispose", t)) : (s = o.get(a), s === void 0 && (s = new _l(), o.set(a, s))), s;
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
function Vm() {
  var e = {};
  return {
    get: function(t) {
      if (e[t.id] !== void 0)
        return e[t.id];
      var n;
      switch (t.type) {
        case "DirectionalLight":
          n = {
            direction: new M(),
            color: new ee()
          };
          break;
        case "SpotLight":
          n = {
            position: new M(),
            direction: new M(),
            color: new ee(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          n = {
            position: new M(),
            color: new ee(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          n = {
            direction: new M(),
            skyColor: new ee(),
            groundColor: new ee()
          };
          break;
        case "RectAreaLight":
          n = {
            color: new ee(),
            position: new M(),
            halfWidth: new M(),
            halfHeight: new M()
          };
          break;
      }
      return e[t.id] = n, n;
    }
  };
}
function km() {
  var e = {};
  return {
    get: function(t) {
      if (e[t.id] !== void 0)
        return e[t.id];
      var n;
      switch (t.type) {
        case "DirectionalLight":
          n = {
            shadowBias: 0,
            shadowRadius: 1,
            shadowMapSize: new U()
          };
          break;
        case "SpotLight":
          n = {
            shadowBias: 0,
            shadowRadius: 1,
            shadowMapSize: new U()
          };
          break;
        case "PointLight":
          n = {
            shadowBias: 0,
            shadowRadius: 1,
            shadowMapSize: new U(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return e[t.id] = n, n;
    }
  };
}
var Wm = 0;
function qm(e, t) {
  return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0);
}
function Xm() {
  for (var e = new Vm(), t = km(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotShadow: [],
    spotShadowMap: [],
    spotShadowMatrix: [],
    rectArea: [],
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: []
  }, r = 0; r < 9; r++)
    n.probe.push(new M());
  var i = new M(), a = new Ce(), o = new Ce();
  function s(c, l, u) {
    for (var h = 0, f = 0, d = 0, m = 0; m < 9; m++)
      n.probe[m].set(0, 0, 0);
    var g = 0, y = 0, p = 0, v = 0, _ = 0, b = 0, x = 0, T = 0, A = u.matrixWorldInverse;
    c.sort(qm);
    for (var m = 0, D = c.length; m < D; m++) {
      var R = c[m], V = R.color, P = R.intensity, I = R.distance, F = R.shadow && R.shadow.map ? R.shadow.map.texture : null;
      if (R.isAmbientLight)
        h += V.r * P, f += V.g * P, d += V.b * P;
      else if (R.isLightProbe)
        for (var H = 0; H < 9; H++)
          n.probe[H].addScaledVector(R.sh.coefficients[H], P);
      else if (R.isDirectionalLight) {
        var C = e.get(R);
        if (C.color.copy(R.color).multiplyScalar(R.intensity), C.direction.setFromMatrixPosition(R.matrixWorld), i.setFromMatrixPosition(R.target.matrixWorld), C.direction.sub(i), C.direction.transformDirection(A), R.castShadow) {
          var z = R.shadow, k = t.get(R);
          k.shadowBias = z.bias, k.shadowRadius = z.radius, k.shadowMapSize = z.mapSize, n.directionalShadow[g] = k, n.directionalShadowMap[g] = F, n.directionalShadowMatrix[g] = R.shadow.matrix, b++;
        }
        n.directional[g] = C, g++;
      } else if (R.isSpotLight) {
        var C = e.get(R);
        if (C.position.setFromMatrixPosition(R.matrixWorld), C.position.applyMatrix4(A), C.color.copy(V).multiplyScalar(P), C.distance = I, C.direction.setFromMatrixPosition(R.matrixWorld), i.setFromMatrixPosition(R.target.matrixWorld), C.direction.sub(i), C.direction.transformDirection(A), C.coneCos = Math.cos(R.angle), C.penumbraCos = Math.cos(R.angle * (1 - R.penumbra)), C.decay = R.decay, R.castShadow) {
          var z = R.shadow, k = t.get(R);
          k.shadowBias = z.bias, k.shadowRadius = z.radius, k.shadowMapSize = z.mapSize, n.spotShadow[p] = k, n.spotShadowMap[p] = F, n.spotShadowMatrix[p] = R.shadow.matrix, T++;
        }
        n.spot[p] = C, p++;
      } else if (R.isRectAreaLight) {
        var C = e.get(R);
        C.color.copy(V).multiplyScalar(P), C.position.setFromMatrixPosition(R.matrixWorld), C.position.applyMatrix4(A), o.identity(), a.copy(R.matrixWorld), a.premultiply(A), o.extractRotation(a), C.halfWidth.set(R.width * 0.5, 0, 0), C.halfHeight.set(0, R.height * 0.5, 0), C.halfWidth.applyMatrix4(o), C.halfHeight.applyMatrix4(o), n.rectArea[v] = C, v++;
      } else if (R.isPointLight) {
        var C = e.get(R);
        if (C.position.setFromMatrixPosition(R.matrixWorld), C.position.applyMatrix4(A), C.color.copy(R.color).multiplyScalar(R.intensity), C.distance = R.distance, C.decay = R.decay, R.castShadow) {
          var z = R.shadow, k = t.get(R);
          k.shadowBias = z.bias, k.shadowRadius = z.radius, k.shadowMapSize = z.mapSize, k.shadowCameraNear = z.camera.near, k.shadowCameraFar = z.camera.far, n.pointShadow[y] = k, n.pointShadowMap[y] = F, n.pointShadowMatrix[y] = R.shadow.matrix, x++;
        }
        n.point[y] = C, y++;
      } else if (R.isHemisphereLight) {
        var C = e.get(R);
        C.direction.setFromMatrixPosition(R.matrixWorld), C.direction.transformDirection(A), C.direction.normalize(), C.skyColor.copy(R.color).multiplyScalar(P), C.groundColor.copy(R.groundColor).multiplyScalar(P), n.hemi[_] = C, _++;
      }
    }
    n.ambient[0] = h, n.ambient[1] = f, n.ambient[2] = d;
    var j = n.hash;
    (j.directionalLength !== g || j.pointLength !== y || j.spotLength !== p || j.rectAreaLength !== v || j.hemiLength !== _ || j.numDirectionalShadows !== b || j.numPointShadows !== x || j.numSpotShadows !== T) && (n.directional.length = g, n.spot.length = p, n.rectArea.length = v, n.point.length = y, n.hemi.length = _, n.directionalShadow.length = b, n.directionalShadowMap.length = b, n.pointShadow.length = x, n.pointShadowMap.length = x, n.spotShadow.length = T, n.spotShadowMap.length = T, n.directionalShadowMatrix.length = b, n.pointShadowMatrix.length = x, n.spotShadowMatrix.length = T, j.directionalLength = g, j.pointLength = y, j.spotLength = p, j.rectAreaLength = v, j.hemiLength = _, j.numDirectionalShadows = b, j.numPointShadows = x, j.numSpotShadows = T, n.version = Wm++);
  }
  return {
    setup: s,
    state: n
  };
}
function Ml() {
  var e = new Xm(), t = [], n = [];
  function r() {
    t.length = 0, n.length = 0;
  }
  function i(c) {
    t.push(c);
  }
  function a(c) {
    n.push(c);
  }
  function o(c) {
    e.setup(t, n, c);
  }
  var s = {
    lightsArray: t,
    shadowsArray: n,
    lights: e
  };
  return {
    init: r,
    state: s,
    setupLights: o,
    pushLight: i,
    pushShadow: a
  };
}
function jm() {
  var e = /* @__PURE__ */ new WeakMap();
  function t(i) {
    var a = i.target;
    a.removeEventListener("dispose", t), e.delete(a);
  }
  function n(i, a) {
    var o;
    return e.has(i) === !1 ? (o = new Ml(), e.set(i, /* @__PURE__ */ new WeakMap()), e.get(i).set(a, o), i.addEventListener("dispose", t)) : e.get(i).has(a) === !1 ? (o = new Ml(), e.get(i).set(a, o)) : o = e.get(i).get(a), o;
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
function rr(e) {
  ve.call(this), this.type = "MeshDepthMaterial", this.depthPacking = zf, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e);
}
rr.prototype = Object.create(ve.prototype);
rr.prototype.constructor = rr;
rr.prototype.isMeshDepthMaterial = !0;
rr.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
};
function ir(e) {
  ve.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new M(), this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e);
}
ir.prototype = Object.create(ve.prototype);
ir.prototype.constructor = ir;
ir.prototype.isMeshDistanceMaterial = !0;
ir.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
};
var Ym = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
  float mean = 0.0;
  float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );
  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
    #ifdef HORIZONAL_PASS
      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
    #else
      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;
    #endif
  }
  mean = mean * HALF_SAMPLE_RATE;
  squared_mean = squared_mean * HALF_SAMPLE_RATE;
  float std_dev = sqrt( squared_mean - mean * mean );
  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`, Zm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`;
function zu(e, t, n) {
  var r = new ua(), i = new U(), a = new U(), o = new Ve(), s = [], c = [], l = {}, u = { 0: ft, 1: sa, 2: Bo }, h = new Lt({
    defines: {
      SAMPLE_RATE: 2 / 8,
      HALF_SAMPLE_RATE: 1 / 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new U() },
      radius: { value: 4 }
    },
    vertexShader: Zm,
    fragmentShader: Ym
  }), f = h.clone();
  f.defines.HORIZONAL_PASS = 1;
  var d = new te();
  d.setAttribute(
    "position",
    new pe(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  var m = new tt(d, h), g = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = mu, this.render = function(x, T, A) {
    if (g.enabled !== !1 && !(g.autoUpdate === !1 && g.needsUpdate === !1) && x.length !== 0) {
      var D = e.getRenderTarget(), R = e.getActiveCubeFace(), V = e.getActiveMipmapLevel(), P = e.state;
      P.setBlending(Nn), P.buffers.color.setClear(1, 1, 1, 1), P.buffers.depth.setTest(!0), P.setScissorTest(!1);
      for (var I = 0, F = x.length; I < F; I++) {
        var H = x[I], C = H.shadow;
        if (C === void 0) {
          console.warn("THREE.WebGLShadowMap:", H, "has no shadow.");
          continue;
        }
        i.copy(C.mapSize);
        var z = C.getFrameExtents();
        if (i.multiply(z), a.copy(C.mapSize), (i.x > n || i.y > n) && (i.x > n && (a.x = Math.floor(n / z.x), i.x = a.x * z.x, C.mapSize.x = a.x), i.y > n && (a.y = Math.floor(n / z.y), i.y = a.y * z.y, C.mapSize.y = a.y)), C.map === null && !C.isPointLightShadow && this.type === xi) {
          var k = { minFilter: yt, magFilter: yt, format: Zt };
          C.map = new Bt(i.x, i.y, k), C.map.texture.name = H.name + ".shadowMap", C.mapPass = new Bt(i.x, i.y, k), C.camera.updateProjectionMatrix();
        }
        if (C.map === null) {
          var k = { minFilter: st, magFilter: st, format: Zt };
          C.map = new Bt(i.x, i.y, k), C.map.texture.name = H.name + ".shadowMap", C.camera.updateProjectionMatrix();
        }
        e.setRenderTarget(C.map), e.clear();
        for (var j = C.getViewportCount(), X = 0; X < j; X++) {
          var Y = C.getViewport(X);
          o.set(
            a.x * Y.x,
            a.y * Y.y,
            a.x * Y.z,
            a.y * Y.w
          ), P.viewport(o), C.updateMatrices(H, X), r = C.getFrustum(), b(T, A, C.camera, H, this.type);
        }
        !C.isPointLightShadow && this.type === xi && y(C, A);
      }
      g.needsUpdate = !1, e.setRenderTarget(D, R, V);
    }
  };
  function y(x, T) {
    var A = t.update(m);
    h.uniforms.shadow_pass.value = x.map.texture, h.uniforms.resolution.value = x.mapSize, h.uniforms.radius.value = x.radius, e.setRenderTarget(x.mapPass), e.clear(), e.renderBufferDirect(T, null, A, h, m, null), f.uniforms.shadow_pass.value = x.mapPass.texture, f.uniforms.resolution.value = x.mapSize, f.uniforms.radius.value = x.radius, e.setRenderTarget(x.map), e.clear(), e.renderBufferDirect(T, null, A, f, m, null);
  }
  function p(x, T, A) {
    var D = x << 0 | T << 1 | A << 2, R = s[D];
    return R === void 0 && (R = new rr({
      depthPacking: Hf,
      morphTargets: x,
      skinning: T
    }), s[D] = R), R;
  }
  function v(x, T, A) {
    var D = x << 0 | T << 1 | A << 2, R = c[D];
    return R === void 0 && (R = new ir({
      morphTargets: x,
      skinning: T
    }), c[D] = R), R;
  }
  function _(x, T, A, D, R, V, P) {
    var I = null, F = p, H = x.customDepthMaterial;
    if (D.isPointLight === !0 && (F = v, H = x.customDistanceMaterial), H === void 0) {
      var C = !1;
      A.morphTargets === !0 && (C = T.morphAttributes && T.morphAttributes.position && T.morphAttributes.position.length > 0);
      var z = !1;
      x.isSkinnedMesh === !0 && (A.skinning === !0 ? z = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", x));
      var k = x.isInstancedMesh === !0;
      I = F(C, z, k);
    } else
      I = H;
    if (e.localClippingEnabled && A.clipShadows === !0 && A.clippingPlanes.length !== 0) {
      var j = I.uuid, X = A.uuid, Y = l[j];
      Y === void 0 && (Y = {}, l[j] = Y);
      var oe = Y[X];
      oe === void 0 && (oe = I.clone(), Y[X] = oe), I = oe;
    }
    return I.visible = A.visible, I.wireframe = A.wireframe, P === xi ? I.side = A.shadowSide !== null ? A.shadowSide : A.side : I.side = A.shadowSide !== null ? A.shadowSide : u[A.side], I.clipShadows = A.clipShadows, I.clippingPlanes = A.clippingPlanes, I.clipIntersection = A.clipIntersection, I.wireframeLinewidth = A.wireframeLinewidth, I.linewidth = A.linewidth, D.isPointLight === !0 && I.isMeshDistanceMaterial === !0 && (I.referencePosition.setFromMatrixPosition(D.matrixWorld), I.nearDistance = R, I.farDistance = V), I;
  }
  function b(x, T, A, D, R) {
    if (x.visible !== !1) {
      var V = x.layers.test(T.layers);
      if (V && (x.isMesh || x.isLine || x.isPoints) && (x.castShadow || x.receiveShadow && R === xi) && (!x.frustumCulled || r.intersectsObject(x))) {
        x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, x.matrixWorld);
        var P = t.update(x), I = x.material;
        if (Array.isArray(I))
          for (var F = P.groups, H = 0, C = F.length; H < C; H++) {
            var z = F[H], k = I[z.materialIndex];
            if (k && k.visible) {
              var j = _(x, P, k, D, A.near, A.far, R);
              e.renderBufferDirect(A, null, P, j, x, z);
            }
          }
        else if (I.visible) {
          var j = _(x, P, I, D, A.near, A.far, R);
          e.renderBufferDirect(A, null, P, j, x, null);
        }
      }
      for (var X = x.children, Y = 0, oe = X.length; Y < oe; Y++)
        b(X[Y], T, A, D, R);
    }
  }
}
function Jm(e, t, n) {
  var r = n.isWebGL2;
  function i() {
    var L = !1, ae = new Ve(), ce = null, Le = new Ve(0, 0, 0, 0);
    return {
      setMask: function(le) {
        ce !== le && !L && (e.colorMask(le, le, le, le), ce = le);
      },
      setLocked: function(le) {
        L = le;
      },
      setClear: function(le, Fe, $e, ut, Rt) {
        Rt === !0 && (le *= ut, Fe *= ut, $e *= ut), ae.set(le, Fe, $e, ut), Le.equals(ae) === !1 && (e.clearColor(le, Fe, $e, ut), Le.copy(ae));
      },
      reset: function() {
        L = !1, ce = null, Le.set(-1, 0, 0, 0);
      }
    };
  }
  function a() {
    var L = !1, ae = null, ce = null, Le = null;
    return {
      setTest: function(le) {
        le ? Oe(2929) : re(2929);
      },
      setMask: function(le) {
        ae !== le && !L && (e.depthMask(le), ae = le);
      },
      setFunc: function(le) {
        if (ce !== le) {
          if (le)
            switch (le) {
              case Rh:
                e.depthFunc(512);
                break;
              case Ch:
                e.depthFunc(519);
                break;
              case Ph:
                e.depthFunc(513);
                break;
              case Es:
                e.depthFunc(515);
                break;
              case Dh:
                e.depthFunc(514);
                break;
              case Ih:
                e.depthFunc(518);
                break;
              case Oh:
                e.depthFunc(516);
                break;
              case Nh:
                e.depthFunc(517);
                break;
              default:
                e.depthFunc(515);
            }
          else
            e.depthFunc(515);
          ce = le;
        }
      },
      setLocked: function(le) {
        L = le;
      },
      setClear: function(le) {
        Le !== le && (e.clearDepth(le), Le = le);
      },
      reset: function() {
        L = !1, ae = null, ce = null, Le = null;
      }
    };
  }
  function o() {
    var L = !1, ae = null, ce = null, Le = null, le = null, Fe = null, $e = null, ut = null, Rt = null;
    return {
      setTest: function(Ye) {
        L || (Ye ? Oe(2960) : re(2960));
      },
      setMask: function(Ye) {
        ae !== Ye && !L && (e.stencilMask(Ye), ae = Ye);
      },
      setFunc: function(Ye, _t, Ct) {
        (ce !== Ye || Le !== _t || le !== Ct) && (e.stencilFunc(Ye, _t, Ct), ce = Ye, Le = _t, le = Ct);
      },
      setOp: function(Ye, _t, Ct) {
        (Fe !== Ye || $e !== _t || ut !== Ct) && (e.stencilOp(Ye, _t, Ct), Fe = Ye, $e = _t, ut = Ct);
      },
      setLocked: function(Ye) {
        L = Ye;
      },
      setClear: function(Ye) {
        Rt !== Ye && (e.clearStencil(Ye), Rt = Ye);
      },
      reset: function() {
        L = !1, ae = null, ce = null, Le = null, le = null, Fe = null, $e = null, ut = null, Rt = null;
      }
    };
  }
  var s = new i(), c = new a(), l = new o(), u = e.getParameter(34921), h = new Uint8Array(u), f = new Uint8Array(u), d = new Uint8Array(u), m = {}, g = null, y = null, p = null, v = null, _ = null, b = null, x = null, T = null, A = null, D = !1, R = null, V = null, P = null, I = null, F = null, H = e.getParameter(35661), C = !1, z = 0, k = e.getParameter(7938);
  k.indexOf("WebGL") !== -1 ? (z = parseFloat(/^WebGL\ ([0-9])/.exec(k)[1]), C = z >= 1) : k.indexOf("OpenGL ES") !== -1 && (z = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(k)[1]), C = z >= 2);
  var j = null, X = {}, Y = new Ve(), oe = new Ve();
  function Pe(L, ae, ce) {
    var Le = new Uint8Array(4), le = e.createTexture();
    e.bindTexture(L, le), e.texParameteri(L, 10241, 9728), e.texParameteri(L, 10240, 9728);
    for (var Fe = 0; Fe < ce; Fe++)
      e.texImage2D(ae + Fe, 0, 6408, 1, 1, 0, 6408, 5121, Le);
    return le;
  }
  var Be = {};
  Be[3553] = Pe(3553, 3553, 1), Be[34067] = Pe(34067, 34069, 6), s.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Oe(2929), c.setFunc(Es), S(!1), E(Fc), Oe(2884), Et(Nn);
  function Ue() {
    for (var L = 0, ae = h.length; L < ae; L++)
      h[L] = 0;
  }
  function xe(L) {
    G(L, 0);
  }
  function G(L, ae) {
    if (h[L] = 1, f[L] === 0 && (e.enableVertexAttribArray(L), f[L] = 1), d[L] !== ae) {
      var ce = r ? e : t.get("ANGLE_instanced_arrays");
      ce[r ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](L, ae), d[L] = ae;
    }
  }
  function Xe() {
    for (var L = 0, ae = f.length; L !== ae; ++L)
      f[L] !== h[L] && (e.disableVertexAttribArray(L), f[L] = 0);
  }
  function De(L, ae, ce, Le, le, Fe) {
    r === !0 && (ce === 5124 || ce === 5125) ? e.vertexAttribIPointer(L, ae, ce, Le, le, Fe) : e.vertexAttribPointer(L, ae, ce, Le, le, Fe);
  }
  function Oe(L) {
    m[L] !== !0 && (e.enable(L), m[L] = !0);
  }
  function re(L) {
    m[L] !== !1 && (e.disable(L), m[L] = !1);
  }
  function W(L) {
    return g !== L ? (e.useProgram(L), g = L, !0) : !1;
  }
  var _e = {
    [Ar]: 32774,
    [yh]: 32778,
    [xh]: 32779
  };
  if (r)
    _e[zc] = 32775, _e[Hc] = 32776;
  else {
    var We = t.get("EXT_blend_minmax");
    We !== null && (_e[zc] = We.MIN_EXT, _e[Hc] = We.MAX_EXT);
  }
  var Je = {
    [_h]: 0,
    [Mh]: 1,
    [bh]: 768,
    [yu]: 770,
    [Lh]: 776,
    [Th]: 774,
    [Sh]: 772,
    [wh]: 769,
    [xu]: 771,
    [Ah]: 775,
    [Eh]: 773
  };
  function Et(L, ae, ce, Le, le, Fe, $e, ut) {
    if (L === Nn) {
      y && (re(3042), y = !1);
      return;
    }
    if (y || (Oe(3042), y = !0), L !== gh) {
      if (L !== p || ut !== D) {
        if ((v !== Ar || x !== Ar) && (e.blendEquation(32774), v = Ar, x = Ar), ut)
          switch (L) {
            case Mi:
              e.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Bc:
              e.blendFunc(1, 1);
              break;
            case Uc:
              e.blendFuncSeparate(0, 0, 769, 771);
              break;
            case Gc:
              e.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case Mi:
              e.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Bc:
              e.blendFunc(770, 1);
              break;
            case Uc:
              e.blendFunc(0, 769);
              break;
            case Gc:
              e.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        _ = null, b = null, T = null, A = null, p = L, D = ut;
      }
      return;
    }
    le = le || ae, Fe = Fe || ce, $e = $e || Le, (ae !== v || le !== x) && (e.blendEquationSeparate(_e[ae], _e[le]), v = ae, x = le), (ce !== _ || Le !== b || Fe !== T || $e !== A) && (e.blendFuncSeparate(Je[ce], Je[Le], Je[Fe], Je[$e]), _ = ce, b = Le, T = Fe, A = $e), p = L, D = null;
  }
  function lt(L, ae) {
    L.side === Bo ? re(2884) : Oe(2884);
    var ce = L.side === ft;
    ae && (ce = !ce), S(ce), L.blending === Mi && L.transparent === !1 ? Et(Nn) : Et(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.premultipliedAlpha), c.setFunc(L.depthFunc), c.setTest(L.depthTest), c.setMask(L.depthWrite), s.setMask(L.colorWrite);
    var Le = L.stencilWrite;
    l.setTest(Le), Le && (l.setMask(L.stencilWriteMask), l.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), l.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), q(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits);
  }
  function S(L) {
    R !== L && (L ? e.frontFace(2304) : e.frontFace(2305), R = L);
  }
  function E(L) {
    L !== ph ? (Oe(2884), L !== V && (L === Fc ? e.cullFace(1029) : L === vh ? e.cullFace(1028) : e.cullFace(1032))) : re(2884), V = L;
  }
  function K(L) {
    L !== P && (C && e.lineWidth(L), P = L);
  }
  function q(L, ae, ce) {
    L ? (Oe(32823), (I !== ae || F !== ce) && (e.polygonOffset(ae, ce), I = ae, F = ce)) : re(32823);
  }
  function Se(L) {
    L ? Oe(3089) : re(3089);
  }
  function se(L) {
    L === void 0 && (L = 33984 + H - 1), j !== L && (e.activeTexture(L), j = L);
  }
  function ie(L, ae) {
    j === null && se();
    var ce = X[j];
    ce === void 0 && (ce = { type: void 0, texture: void 0 }, X[j] = ce), (ce.type !== L || ce.texture !== ae) && (e.bindTexture(L, ae || Be[L]), ce.type = L, ce.texture = ae);
  }
  function Ge() {
    var L = X[j];
    L !== void 0 && L.type !== void 0 && (e.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function be() {
    try {
      e.compressedTexImage2D.apply(e, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Me() {
    try {
      e.texImage2D.apply(e, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ne() {
    try {
      e.texImage3D.apply(e, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function de(L) {
    Y.equals(L) === !1 && (e.scissor(L.x, L.y, L.z, L.w), Y.copy(L));
  }
  function ue(L) {
    oe.equals(L) === !1 && (e.viewport(L.x, L.y, L.z, L.w), oe.copy(L));
  }
  function me() {
    for (var L = 0; L < f.length; L++)
      f[L] === 1 && (e.disableVertexAttribArray(L), f[L] = 0);
    m = {}, j = null, X = {}, g = null, p = null, R = null, V = null, s.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: s,
      depth: c,
      stencil: l
    },
    initAttributes: Ue,
    enableAttribute: xe,
    enableAttributeAndDivisor: G,
    disableUnusedAttributes: Xe,
    vertexAttribPointer: De,
    enable: Oe,
    disable: re,
    useProgram: W,
    setBlending: Et,
    setMaterial: lt,
    setFlipSided: S,
    setCullFace: E,
    setLineWidth: K,
    setPolygonOffset: q,
    setScissorTest: Se,
    activeTexture: se,
    bindTexture: ie,
    unbindTexture: Ge,
    compressedTexImage2D: be,
    texImage2D: Me,
    texImage3D: ne,
    scissor: de,
    viewport: ue,
    reset: me
  };
}
function $m(e, t, n, r, i, a, o) {
  var s = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, u = i.maxTextureSize, h = i.maxSamples, f = /* @__PURE__ */ new WeakMap(), d, m = !1;
  try {
    m = typeof OffscreenCanvas != "undefined" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch (S) {
  }
  function g(S, E) {
    return m ? new OffscreenCanvas(S, E) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  }
  function y(S, E, K, q) {
    var Se = 1;
    if ((S.width > q || S.height > q) && (Se = q / Math.max(S.width, S.height)), Se < 1 || E === !0)
      if (typeof HTMLImageElement != "undefined" && S instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && S instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && S instanceof ImageBitmap) {
        var se = E ? Ae.floorPowerOfTwo : Math.floor, ie = se(Se * S.width), Ge = se(Se * S.height);
        d === void 0 && (d = g(ie, Ge));
        var be = K ? g(ie, Ge) : d;
        be.width = ie, be.height = Ge;
        var Me = be.getContext("2d");
        return Me.drawImage(S, 0, 0, ie, Ge), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + S.width + "x" + S.height + ") to (" + ie + "x" + Ge + ")."), be;
      } else
        return "data" in S && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + S.width + "x" + S.height + ")."), S;
    return S;
  }
  function p(S) {
    return Ae.isPowerOfTwo(S.width) && Ae.isPowerOfTwo(S.height);
  }
  function v(S) {
    return s ? !1 : S.wrapS !== Tt || S.wrapT !== Tt || S.minFilter !== st && S.minFilter !== yt;
  }
  function _(S, E) {
    return S.generateMipmaps && E && S.minFilter !== st && S.minFilter !== yt;
  }
  function b(S, E, K, q) {
    e.generateMipmap(S);
    var Se = r.get(E);
    Se.__maxMipLevel = Math.log(Math.max(K, q)) * Math.LOG2E;
  }
  function x(S, E, K) {
    if (s === !1)
      return E;
    if (S !== null) {
      if (e[S] !== void 0)
        return e[S];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + S + "'");
    }
    var q = E;
    return E === 6403 && (K === 5126 && (q = 33326), K === 5131 && (q = 33325), K === 5121 && (q = 33321)), E === 6407 && (K === 5126 && (q = 34837), K === 5131 && (q = 34843), K === 5121 && (q = 32849)), E === 6408 && (K === 5126 && (q = 34836), K === 5131 && (q = 34842), K === 5121 && (q = 32856)), (q === 33325 || q === 33326 || q === 34842 || q === 34836) && t.get("EXT_color_buffer_float"), q;
  }
  function T(S) {
    return S === st || S === Ts || S === As ? 9728 : 9729;
  }
  function A(S) {
    var E = S.target;
    E.removeEventListener("dispose", A), R(E), E.isVideoTexture && f.delete(E), o.memory.textures--;
  }
  function D(S) {
    var E = S.target;
    E.removeEventListener("dispose", D), V(E), o.memory.textures--;
  }
  function R(S) {
    var E = r.get(S);
    E.__webglInit !== void 0 && (e.deleteTexture(E.__webglTexture), r.remove(S));
  }
  function V(S) {
    var E = r.get(S), K = r.get(S.texture);
    if (S) {
      if (K.__webglTexture !== void 0 && e.deleteTexture(K.__webglTexture), S.depthTexture && S.depthTexture.dispose(), S.isWebGLCubeRenderTarget)
        for (var q = 0; q < 6; q++)
          e.deleteFramebuffer(E.__webglFramebuffer[q]), E.__webglDepthbuffer && e.deleteRenderbuffer(E.__webglDepthbuffer[q]);
      else
        e.deleteFramebuffer(E.__webglFramebuffer), E.__webglDepthbuffer && e.deleteRenderbuffer(E.__webglDepthbuffer), E.__webglMultisampledFramebuffer && e.deleteFramebuffer(E.__webglMultisampledFramebuffer), E.__webglColorRenderbuffer && e.deleteRenderbuffer(E.__webglColorRenderbuffer), E.__webglDepthRenderbuffer && e.deleteRenderbuffer(E.__webglDepthRenderbuffer);
      r.remove(S.texture), r.remove(S);
    }
  }
  var P = 0;
  function I() {
    P = 0;
  }
  function F() {
    var S = P;
    return S >= c && console.warn("THREE.WebGLTextures: Trying to use " + S + " texture units while this GPU supports only " + c), P += 1, S;
  }
  function H(S, E) {
    var K = r.get(S);
    if (S.isVideoTexture && _e(S), S.version > 0 && K.__version !== S.version) {
      var q = S.image;
      if (q === void 0)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
      else if (q.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Be(K, S, E);
        return;
      }
    }
    n.activeTexture(33984 + E), n.bindTexture(3553, K.__webglTexture);
  }
  function C(S, E) {
    var K = r.get(S);
    if (S.version > 0 && K.__version !== S.version) {
      Be(K, S, E);
      return;
    }
    n.activeTexture(33984 + E), n.bindTexture(35866, K.__webglTexture);
  }
  function z(S, E) {
    var K = r.get(S);
    if (S.version > 0 && K.__version !== S.version) {
      Be(K, S, E);
      return;
    }
    n.activeTexture(33984 + E), n.bindTexture(32879, K.__webglTexture);
  }
  function k(S, E) {
    if (S.image.length === 6) {
      var K = r.get(S);
      if (S.version > 0 && K.__version !== S.version) {
        Pe(K, S), n.activeTexture(33984 + E), n.bindTexture(34067, K.__webglTexture), e.pixelStorei(37440, S.flipY);
        for (var q = S && (S.isCompressedTexture || S.image[0].isCompressedTexture), Se = S.image[0] && S.image[0].isDataTexture, se = [], ie = 0; ie < 6; ie++)
          !q && !Se ? se[ie] = y(S.image[ie], !1, !0, l) : se[ie] = Se ? S.image[ie].image : S.image[ie];
        var Ge = se[0], be = p(Ge) || s, Me = a.convert(S.format), ne = a.convert(S.type), de = x(S.internalFormat, Me, ne);
        oe(34067, S, be);
        var ue;
        if (q) {
          for (var ie = 0; ie < 6; ie++) {
            ue = se[ie].mipmaps;
            for (var me = 0; me < ue.length; me++) {
              var L = ue[me];
              S.format !== Zt && S.format !== er ? Me !== null ? n.compressedTexImage2D(34069 + ie, me, de, L.width, L.height, 0, L.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + ie, me, de, L.width, L.height, 0, Me, ne, L.data);
            }
          }
          K.__maxMipLevel = ue.length - 1;
        } else {
          ue = S.mipmaps;
          for (var ie = 0; ie < 6; ie++)
            if (Se) {
              n.texImage2D(34069 + ie, 0, de, se[ie].width, se[ie].height, 0, Me, ne, se[ie].data);
              for (var me = 0; me < ue.length; me++) {
                var L = ue[me], ae = L.image[ie].image;
                n.texImage2D(34069 + ie, me + 1, de, ae.width, ae.height, 0, Me, ne, ae.data);
              }
            } else {
              n.texImage2D(34069 + ie, 0, de, Me, ne, se[ie]);
              for (var me = 0; me < ue.length; me++) {
                var L = ue[me];
                n.texImage2D(34069 + ie, me + 1, de, Me, ne, L.image[ie]);
              }
            }
          K.__maxMipLevel = ue.length;
        }
        _(S, be) && b(34067, S, Ge.width, Ge.height), K.__version = S.version, S.onUpdate && S.onUpdate(S);
      } else
        n.activeTexture(33984 + E), n.bindTexture(34067, K.__webglTexture);
    }
  }
  function j(S, E) {
    n.activeTexture(33984 + E), n.bindTexture(34067, r.get(S).__webglTexture);
  }
  var X = {
    [Qa]: 10497,
    [Tt]: 33071,
    [Ka]: 33648
  }, Y = {
    [st]: 9728,
    [Ts]: 9984,
    [As]: 9986,
    [yt]: 9729,
    [wu]: 9985,
    [Go]: 9987
  };
  function oe(S, E, K) {
    K ? (e.texParameteri(S, 10242, X[E.wrapS]), e.texParameteri(S, 10243, X[E.wrapT]), (S === 32879 || S === 35866) && e.texParameteri(S, 32882, X[E.wrapR]), e.texParameteri(S, 10240, Y[E.magFilter]), e.texParameteri(S, 10241, Y[E.minFilter])) : (e.texParameteri(S, 10242, 33071), e.texParameteri(S, 10243, 33071), (S === 32879 || S === 35866) && e.texParameteri(S, 32882, 33071), (E.wrapS !== Tt || E.wrapT !== Tt) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(S, 10240, T(E.magFilter)), e.texParameteri(S, 10241, T(E.minFilter)), E.minFilter !== st && E.minFilter !== yt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
    var q = t.get("EXT_texture_filter_anisotropic");
    if (q) {
      if (E.type === In && t.get("OES_texture_float_linear") === null || E.type === to && (s || t.get("OES_texture_half_float_linear")) === null)
        return;
      (E.anisotropy > 1 || r.get(E).__currentAnisotropy) && (e.texParameterf(S, q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(E.anisotropy, i.getMaxAnisotropy())), r.get(E).__currentAnisotropy = E.anisotropy);
    }
  }
  function Pe(S, E) {
    S.__webglInit === void 0 && (S.__webglInit = !0, E.addEventListener("dispose", A), S.__webglTexture = e.createTexture(), o.memory.textures++);
  }
  function Be(S, E, K) {
    var q = 3553;
    E.isDataTexture2DArray && (q = 35866), E.isDataTexture3D && (q = 32879), Pe(S, E), n.activeTexture(33984 + K), n.bindTexture(q, S.__webglTexture), e.pixelStorei(37440, E.flipY), e.pixelStorei(37441, E.premultiplyAlpha), e.pixelStorei(3317, E.unpackAlignment);
    var Se = v(E) && p(E.image) === !1, se = y(E.image, Se, !1, u), ie = p(se) || s, Ge = a.convert(E.format), be = a.convert(E.type), Me = x(E.internalFormat, Ge, be);
    oe(q, E, ie);
    var ne, de = E.mipmaps;
    if (E.isDepthTexture)
      Me = 6402, s ? E.type === In ? Me = 36012 : E.type === Ja ? Me = 33190 : E.type === wi ? Me = 35056 : Me = 33189 : E.type === In && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), E.format === Or && Me === 6402 && E.type !== eo && E.type !== Ja && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), E.type = eo, be = a.convert(E.type)), E.format === Ai && Me === 6402 && (Me = 34041, E.type !== wi && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), E.type = wi, be = a.convert(E.type))), n.texImage2D(3553, 0, Me, se.width, se.height, 0, Ge, be, null);
    else if (E.isDataTexture)
      if (de.length > 0 && ie) {
        for (var ue = 0, me = de.length; ue < me; ue++)
          ne = de[ue], n.texImage2D(3553, ue, Me, ne.width, ne.height, 0, Ge, be, ne.data);
        E.generateMipmaps = !1, S.__maxMipLevel = de.length - 1;
      } else
        n.texImage2D(3553, 0, Me, se.width, se.height, 0, Ge, be, se.data), S.__maxMipLevel = 0;
    else if (E.isCompressedTexture) {
      for (var ue = 0, me = de.length; ue < me; ue++)
        ne = de[ue], E.format !== Zt && E.format !== er ? Ge !== null ? n.compressedTexImage2D(3553, ue, Me, ne.width, ne.height, 0, ne.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, ue, Me, ne.width, ne.height, 0, Ge, be, ne.data);
      S.__maxMipLevel = de.length - 1;
    } else if (E.isDataTexture2DArray)
      n.texImage3D(35866, 0, Me, se.width, se.height, se.depth, 0, Ge, be, se.data), S.__maxMipLevel = 0;
    else if (E.isDataTexture3D)
      n.texImage3D(32879, 0, Me, se.width, se.height, se.depth, 0, Ge, be, se.data), S.__maxMipLevel = 0;
    else if (de.length > 0 && ie) {
      for (var ue = 0, me = de.length; ue < me; ue++)
        ne = de[ue], n.texImage2D(3553, ue, Me, Ge, be, ne);
      E.generateMipmaps = !1, S.__maxMipLevel = de.length - 1;
    } else
      n.texImage2D(3553, 0, Me, Ge, be, se), S.__maxMipLevel = 0;
    _(E, ie) && b(q, E, se.width, se.height), S.__version = E.version, E.onUpdate && E.onUpdate(E);
  }
  function Ue(S, E, K, q) {
    var Se = a.convert(E.texture.format), se = a.convert(E.texture.type), ie = x(E.texture.internalFormat, Se, se);
    n.texImage2D(q, 0, ie, E.width, E.height, 0, Se, se, null), e.bindFramebuffer(36160, S), e.framebufferTexture2D(36160, K, q, r.get(E.texture).__webglTexture, 0), e.bindFramebuffer(36160, null);
  }
  function xe(S, E, K) {
    if (e.bindRenderbuffer(36161, S), E.depthBuffer && !E.stencilBuffer) {
      var q = 33189;
      if (K) {
        var Se = E.depthTexture;
        Se && Se.isDepthTexture && (Se.type === In ? q = 36012 : Se.type === Ja && (q = 33190));
        var se = W(E);
        e.renderbufferStorageMultisample(36161, se, q, E.width, E.height);
      } else
        e.renderbufferStorage(36161, q, E.width, E.height);
      e.framebufferRenderbuffer(36160, 36096, 36161, S);
    } else if (E.depthBuffer && E.stencilBuffer) {
      if (K) {
        var se = W(E);
        e.renderbufferStorageMultisample(36161, se, 35056, E.width, E.height);
      } else
        e.renderbufferStorage(36161, 34041, E.width, E.height);
      e.framebufferRenderbuffer(36160, 33306, 36161, S);
    } else {
      var ie = a.convert(E.texture.format), Ge = a.convert(E.texture.type), q = x(E.texture.internalFormat, ie, Ge);
      if (K) {
        var se = W(E);
        e.renderbufferStorageMultisample(36161, se, q, E.width, E.height);
      } else
        e.renderbufferStorage(36161, q, E.width, E.height);
    }
    e.bindRenderbuffer(36161, null);
  }
  function G(S, E) {
    var K = E && E.isWebGLCubeRenderTarget;
    if (K)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(36160, S), !(E.depthTexture && E.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!r.get(E.depthTexture).__webglTexture || E.depthTexture.image.width !== E.width || E.depthTexture.image.height !== E.height) && (E.depthTexture.image.width = E.width, E.depthTexture.image.height = E.height, E.depthTexture.needsUpdate = !0), H(E.depthTexture, 0);
    var q = r.get(E.depthTexture).__webglTexture;
    if (E.depthTexture.format === Or)
      e.framebufferTexture2D(36160, 36096, 3553, q, 0);
    else if (E.depthTexture.format === Ai)
      e.framebufferTexture2D(36160, 33306, 3553, q, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function Xe(S) {
    var E = r.get(S), K = S.isWebGLCubeRenderTarget === !0;
    if (S.depthTexture) {
      if (K)
        throw new Error("target.depthTexture not supported in Cube render targets");
      G(E.__webglFramebuffer, S);
    } else if (K) {
      E.__webglDepthbuffer = [];
      for (var q = 0; q < 6; q++)
        e.bindFramebuffer(36160, E.__webglFramebuffer[q]), E.__webglDepthbuffer[q] = e.createRenderbuffer(), xe(E.__webglDepthbuffer[q], S, !1);
    } else
      e.bindFramebuffer(36160, E.__webglFramebuffer), E.__webglDepthbuffer = e.createRenderbuffer(), xe(E.__webglDepthbuffer, S, !1);
    e.bindFramebuffer(36160, null);
  }
  function De(S) {
    var E = r.get(S), K = r.get(S.texture);
    S.addEventListener("dispose", D), K.__webglTexture = e.createTexture(), o.memory.textures++;
    var q = S.isWebGLCubeRenderTarget === !0, Se = S.isWebGLMultisampleRenderTarget === !0, se = p(S) || s;
    if (s && S.texture.format === er && (S.texture.type === In || S.texture.type === to) && (S.texture.format = Zt, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), q) {
      E.__webglFramebuffer = [];
      for (var ie = 0; ie < 6; ie++)
        E.__webglFramebuffer[ie] = e.createFramebuffer();
    } else if (E.__webglFramebuffer = e.createFramebuffer(), Se)
      if (s) {
        E.__webglMultisampledFramebuffer = e.createFramebuffer(), E.__webglColorRenderbuffer = e.createRenderbuffer(), e.bindRenderbuffer(36161, E.__webglColorRenderbuffer);
        var Ge = a.convert(S.texture.format), be = a.convert(S.texture.type), Me = x(S.texture.internalFormat, Ge, be), ne = W(S);
        e.renderbufferStorageMultisample(36161, ne, Me, S.width, S.height), e.bindFramebuffer(36160, E.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064, 36161, E.__webglColorRenderbuffer), e.bindRenderbuffer(36161, null), S.depthBuffer && (E.__webglDepthRenderbuffer = e.createRenderbuffer(), xe(E.__webglDepthRenderbuffer, S, !0)), e.bindFramebuffer(36160, null);
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
    if (q) {
      n.bindTexture(34067, K.__webglTexture), oe(34067, S.texture, se);
      for (var ie = 0; ie < 6; ie++)
        Ue(E.__webglFramebuffer[ie], S, 36064, 34069 + ie);
      _(S.texture, se) && b(34067, S.texture, S.width, S.height), n.bindTexture(34067, null);
    } else
      n.bindTexture(3553, K.__webglTexture), oe(3553, S.texture, se), Ue(E.__webglFramebuffer, S, 36064, 3553), _(S.texture, se) && b(3553, S.texture, S.width, S.height), n.bindTexture(3553, null);
    S.depthBuffer && Xe(S);
  }
  function Oe(S) {
    var E = S.texture, K = p(S) || s;
    if (_(E, K)) {
      var q = S.isWebGLCubeRenderTarget ? 34067 : 3553, Se = r.get(E).__webglTexture;
      n.bindTexture(q, Se), b(q, E, S.width, S.height), n.bindTexture(q, null);
    }
  }
  function re(S) {
    if (S.isWebGLMultisampleRenderTarget)
      if (s) {
        var E = r.get(S);
        e.bindFramebuffer(36008, E.__webglMultisampledFramebuffer), e.bindFramebuffer(36009, E.__webglFramebuffer);
        var K = S.width, q = S.height, Se = 16384;
        S.depthBuffer && (Se |= 256), S.stencilBuffer && (Se |= 1024), e.blitFramebuffer(0, 0, K, q, 0, 0, K, q, Se, 9728), e.bindFramebuffer(36160, E.__webglMultisampledFramebuffer);
      } else
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
  }
  function W(S) {
    return s && S.isWebGLMultisampleRenderTarget ? Math.min(h, S.samples) : 0;
  }
  function _e(S) {
    var E = o.render.frame;
    f.get(S) !== E && (f.set(S, E), S.update());
  }
  var We = !1, Je = !1;
  function Et(S, E) {
    S && S.isWebGLRenderTarget && (We === !1 && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), We = !0), S = S.texture), H(S, E);
  }
  function lt(S, E) {
    S && S.isWebGLCubeRenderTarget && (Je === !1 && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), Je = !0), S = S.texture), S && S.isCubeTexture || Array.isArray(S.image) && S.image.length === 6 ? k(S, E) : j(S, E);
  }
  this.allocateTextureUnit = F, this.resetTextureUnits = I, this.setTexture2D = H, this.setTexture2DArray = C, this.setTexture3D = z, this.setTextureCube = k, this.setTextureCubeDynamic = j, this.setupRenderTarget = De, this.updateRenderTargetMipmap = Oe, this.updateMultisampleRenderTarget = re, this.safeSetTexture2D = Et, this.safeSetTextureCube = lt;
}
function Qm(e, t, n) {
  var r = n.isWebGL2;
  function i(a) {
    var o;
    if (a === la)
      return 5121;
    if (a === qh)
      return 32819;
    if (a === Xh)
      return 32820;
    if (a === jh)
      return 33635;
    if (a === Vh)
      return 5120;
    if (a === kh)
      return 5122;
    if (a === eo)
      return 5123;
    if (a === Wh)
      return 5124;
    if (a === Ja)
      return 5125;
    if (a === In)
      return 5126;
    if (a === to)
      return r ? 5131 : (o = t.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (a === Yh)
      return 6406;
    if (a === er)
      return 6407;
    if (a === Zt)
      return 6408;
    if (a === Zh)
      return 6409;
    if (a === Jh)
      return 6410;
    if (a === Or)
      return 6402;
    if (a === Ai)
      return 34041;
    if (a === Qh)
      return 6403;
    if (a === Kh)
      return 36244;
    if (a === ef)
      return 33319;
    if (a === tf)
      return 33320;
    if (a === nf)
      return 36248;
    if (a === rf)
      return 36249;
    if (a === Vc || a === kc || a === Wc || a === qc)
      if (o = t.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (a === Vc)
          return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (a === kc)
          return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (a === Wc)
          return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (a === qc)
          return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (a === Xc || a === jc || a === Yc || a === Zc)
      if (o = t.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (a === Xc)
          return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (a === jc)
          return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (a === Yc)
          return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (a === Zc)
          return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (a === af)
      return o = t.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if ((a === Jc || a === $c) && (o = t.get("WEBGL_compressed_texture_etc"), o !== null)) {
      if (a === Jc)
        return o.COMPRESSED_RGB8_ETC2;
      if (a === $c)
        return o.COMPRESSED_RGBA8_ETC2_EAC;
    }
    if (a === of || a === sf || a === cf || a === lf || a === uf || a === hf || a === ff || a === df || a === pf || a === vf || a === mf || a === gf || a === yf || a === xf || a === Mf || a === bf || a === wf || a === Sf || a === Ef || a === Tf || a === Af || a === Lf || a === Rf || a === Cf || a === Pf || a === Df || a === If || a === Of)
      return o = t.get("WEBGL_compressed_texture_astc"), o !== null ? a : null;
    if (a === _f)
      return o = t.get("EXT_texture_compression_bptc"), o !== null ? a : null;
    if (a === wi)
      return r ? 34042 : (o = t.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null);
  }
  return { convert: i };
}
function Ns(e) {
  ht.call(this), this.cameras = e || [];
}
Ns.prototype = Object.assign(Object.create(ht.prototype), {
  constructor: Ns,
  isArrayCamera: !0
});
function Fi() {
  Q.call(this), this.type = "Group";
}
Fi.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: Fi,
  isGroup: !0
});
function oo() {
  this._targetRay = null, this._grip = null;
}
Object.assign(oo.prototype, {
  constructor: oo,
  getTargetRaySpace: function() {
    return this._targetRay === null && (this._targetRay = new Fi(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay;
  },
  getGripSpace: function() {
    return this._grip === null && (this._grip = new Fi(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip;
  },
  dispatchEvent: function(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this;
  },
  disconnect: function(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this;
  },
  update: function(e, t, n) {
    var r = null, i = null, a = this._targetRay, o = this._grip;
    return e && (a !== null && (r = t.getPose(e.targetRaySpace, n), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale))), o !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale)))), a !== null && (a.visible = r !== null), o !== null && (o.visible = i !== null), this;
  }
});
function Hu(e, t) {
  var n = this, r = null, i = 1, a = null, o = "local-floor", s = null, c = [], l = /* @__PURE__ */ new Map(), u = new ht();
  u.layers.enable(1), u.viewport = new Ve();
  var h = new ht();
  h.layers.enable(2), h.viewport = new Ve();
  var f = [u, h], d = new Ns();
  d.layers.enable(1), d.layers.enable(2);
  var m = null, g = null;
  this.enabled = !1, this.isPresenting = !1, this.getController = function(P) {
    var I = c[P];
    return I === void 0 && (I = new oo(), c[P] = I), I.getTargetRaySpace();
  }, this.getControllerGrip = function(P) {
    var I = c[P];
    return I === void 0 && (I = new oo(), c[P] = I), I.getGripSpace();
  };
  function y(P) {
    var I = l.get(P.inputSource);
    I && I.dispatchEvent({ type: P.type });
  }
  function p() {
    l.forEach(function(P, I) {
      P.disconnect(I);
    }), l.clear(), e.setFramebuffer(null), e.setRenderTarget(e.getRenderTarget()), V.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
  }
  function v(P) {
    a = P, V.setContext(r), V.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
  }
  this.setFramebufferScaleFactor = function(P) {
    i = P, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
  }, this.setReferenceSpaceType = function(P) {
    o = P, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
  }, this.getReferenceSpace = function() {
    return a;
  }, this.getSession = function() {
    return r;
  }, this.setSession = function(P) {
    if (r = P, r !== null) {
      r.addEventListener("select", y), r.addEventListener("selectstart", y), r.addEventListener("selectend", y), r.addEventListener("squeeze", y), r.addEventListener("squeezestart", y), r.addEventListener("squeezeend", y), r.addEventListener("end", p);
      var I = t.getContextAttributes();
      I.xrCompatible !== !0 && t.makeXRCompatible();
      var F = {
        antialias: I.antialias,
        alpha: I.alpha,
        depth: I.depth,
        stencil: I.stencil,
        framebufferScaleFactor: i
      }, H = new XRWebGLLayer(r, t, F);
      r.updateRenderState({ baseLayer: H }), r.requestReferenceSpace(o).then(v), r.addEventListener("inputsourceschange", _);
    }
  };
  function _(P) {
    for (var I = r.inputSources, F = 0; F < c.length; F++)
      l.set(I[F], c[F]);
    for (var F = 0; F < P.removed.length; F++) {
      var H = P.removed[F], C = l.get(H);
      C && (C.dispatchEvent({ type: "disconnected", data: H }), l.delete(H));
    }
    for (var F = 0; F < P.added.length; F++) {
      var H = P.added[F], C = l.get(H);
      C && C.dispatchEvent({ type: "connected", data: H });
    }
  }
  var b = new M(), x = new M();
  function T(P, I, F) {
    b.setFromMatrixPosition(I.matrixWorld), x.setFromMatrixPosition(F.matrixWorld);
    var H = b.distanceTo(x), C = I.projectionMatrix.elements, z = F.projectionMatrix.elements, k = C[14] / (C[10] - 1), j = C[14] / (C[10] + 1), X = (C[9] + 1) / C[5], Y = (C[9] - 1) / C[5], oe = (C[8] - 1) / C[0], Pe = (z[8] + 1) / z[0], Be = k * oe, Ue = k * Pe, xe = H / (-oe + Pe), G = xe * -oe;
    I.matrixWorld.decompose(P.position, P.quaternion, P.scale), P.translateX(G), P.translateZ(xe), P.matrixWorld.compose(P.position, P.quaternion, P.scale), P.matrixWorldInverse.getInverse(P.matrixWorld);
    var Xe = k + xe, De = j + xe, Oe = Be - G, re = Ue + (H - G), W = X * j / De * Xe, _e = Y * j / De * Xe;
    P.projectionMatrix.makePerspective(Oe, re, W, _e, Xe, De);
  }
  function A(P, I) {
    I === null ? P.matrixWorld.copy(P.matrix) : P.matrixWorld.multiplyMatrices(I.matrixWorld, P.matrix), P.matrixWorldInverse.getInverse(P.matrixWorld);
  }
  this.getCamera = function(P) {
    d.near = h.near = u.near = P.near, d.far = h.far = u.far = P.far, (m !== d.near || g !== d.far) && (r.updateRenderState({
      depthNear: d.near,
      depthFar: d.far
    }), m = d.near, g = d.far);
    var I = P.parent, F = d.cameras;
    A(d, I);
    for (var H = 0; H < F.length; H++)
      A(F[H], I);
    P.matrixWorld.copy(d.matrixWorld);
    for (var C = P.children, H = 0, z = C.length; H < z; H++)
      C[H].updateMatrixWorld(!0);
    return F.length === 2 ? T(d, u, h) : d.projectionMatrix.copy(u.projectionMatrix), d;
  };
  var D = null;
  function R(P, I) {
    if (s = I.getViewerPose(a), s !== null) {
      var F = s.views, H = r.renderState.baseLayer;
      e.setFramebuffer(H.framebuffer);
      var C = !1;
      F.length !== d.cameras.length && (d.cameras.length = 0, C = !0);
      for (var z = 0; z < F.length; z++) {
        var k = F[z], j = H.getViewport(k), X = f[z];
        X.matrix.fromArray(k.transform.matrix), X.projectionMatrix.fromArray(k.projectionMatrix), X.viewport.set(j.x, j.y, j.width, j.height), z === 0 && d.matrix.copy(X.matrix), C === !0 && d.cameras.push(X);
      }
    }
    for (var Y = r.inputSources, z = 0; z < c.length; z++) {
      var oe = c[z], Pe = Y[z];
      oe.update(Pe, I, a);
    }
    D && D(P, I);
  }
  var V = new Du();
  V.setAnimationLoop(R), this.setAnimationLoop = function(P) {
    D = P;
  }, this.dispose = function() {
  };
}
Object.assign(Hu.prototype, wn.prototype);
function Km(e) {
  function t(p, v) {
    p.fogColor.value.copy(v.color), v.isFog ? (p.fogNear.value = v.near, p.fogFar.value = v.far) : v.isFogExp2 && (p.fogDensity.value = v.density);
  }
  function n(p, v, _, b, x) {
    v.isMeshBasicMaterial ? r(p, v) : v.isMeshLambertMaterial ? (r(p, v), c(p, v)) : v.isMeshToonMaterial ? (r(p, v), u(p, v)) : v.isMeshPhongMaterial ? (r(p, v), l(p, v)) : v.isMeshStandardMaterial ? (r(p, v, _), v.isMeshPhysicalMaterial ? f(p, v, _) : h(p, v, _)) : v.isMeshMatcapMaterial ? (r(p, v), d(p, v)) : v.isMeshDepthMaterial ? (r(p, v), m(p, v)) : v.isMeshDistanceMaterial ? (r(p, v), g(p, v)) : v.isMeshNormalMaterial ? (r(p, v), y(p, v)) : v.isLineBasicMaterial ? (i(p, v), v.isLineDashedMaterial && a(p, v)) : v.isPointsMaterial ? o(p, v, b, x) : v.isSpriteMaterial ? s(p, v) : v.isShadowMaterial ? (p.color.value.copy(v.color), p.opacity.value = v.opacity) : v.isShaderMaterial && (v.uniformsNeedUpdate = !1);
  }
  function r(p, v, _) {
    p.opacity.value = v.opacity, v.color && p.diffuse.value.copy(v.color), v.emissive && p.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity), v.map && (p.map.value = v.map), v.alphaMap && (p.alphaMap.value = v.alphaMap), v.specularMap && (p.specularMap.value = v.specularMap);
    var b = v.envMap || _;
    b && (p.envMap.value = b, p.flipEnvMap.value = b.isCubeTexture ? -1 : 1, p.reflectivity.value = v.reflectivity, p.refractionRatio.value = v.refractionRatio, p.maxMipLevel.value = e.get(b).__maxMipLevel), v.lightMap && (p.lightMap.value = v.lightMap, p.lightMapIntensity.value = v.lightMapIntensity), v.aoMap && (p.aoMap.value = v.aoMap, p.aoMapIntensity.value = v.aoMapIntensity);
    var x;
    v.map ? x = v.map : v.specularMap ? x = v.specularMap : v.displacementMap ? x = v.displacementMap : v.normalMap ? x = v.normalMap : v.bumpMap ? x = v.bumpMap : v.roughnessMap ? x = v.roughnessMap : v.metalnessMap ? x = v.metalnessMap : v.alphaMap ? x = v.alphaMap : v.emissiveMap && (x = v.emissiveMap), x !== void 0 && (x.isWebGLRenderTarget && (x = x.texture), x.matrixAutoUpdate === !0 && x.updateMatrix(), p.uvTransform.value.copy(x.matrix));
    var T;
    v.aoMap ? T = v.aoMap : v.lightMap && (T = v.lightMap), T !== void 0 && (T.isWebGLRenderTarget && (T = T.texture), T.matrixAutoUpdate === !0 && T.updateMatrix(), p.uv2Transform.value.copy(T.matrix));
  }
  function i(p, v) {
    p.diffuse.value.copy(v.color), p.opacity.value = v.opacity;
  }
  function a(p, v) {
    p.dashSize.value = v.dashSize, p.totalSize.value = v.dashSize + v.gapSize, p.scale.value = v.scale;
  }
  function o(p, v, _, b) {
    p.diffuse.value.copy(v.color), p.opacity.value = v.opacity, p.size.value = v.size * _, p.scale.value = b * 0.5, v.map && (p.map.value = v.map), v.alphaMap && (p.alphaMap.value = v.alphaMap);
    var x;
    v.map ? x = v.map : v.alphaMap && (x = v.alphaMap), x !== void 0 && (x.matrixAutoUpdate === !0 && x.updateMatrix(), p.uvTransform.value.copy(x.matrix));
  }
  function s(p, v) {
    p.diffuse.value.copy(v.color), p.opacity.value = v.opacity, p.rotation.value = v.rotation, v.map && (p.map.value = v.map), v.alphaMap && (p.alphaMap.value = v.alphaMap);
    var _;
    v.map ? _ = v.map : v.alphaMap && (_ = v.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), p.uvTransform.value.copy(_.matrix));
  }
  function c(p, v) {
    v.emissiveMap && (p.emissiveMap.value = v.emissiveMap);
  }
  function l(p, v) {
    p.specular.value.copy(v.specular), p.shininess.value = Math.max(v.shininess, 1e-4), v.emissiveMap && (p.emissiveMap.value = v.emissiveMap), v.bumpMap && (p.bumpMap.value = v.bumpMap, p.bumpScale.value = v.bumpScale, v.side === ft && (p.bumpScale.value *= -1)), v.normalMap && (p.normalMap.value = v.normalMap, p.normalScale.value.copy(v.normalScale), v.side === ft && p.normalScale.value.negate()), v.displacementMap && (p.displacementMap.value = v.displacementMap, p.displacementScale.value = v.displacementScale, p.displacementBias.value = v.displacementBias);
  }
  function u(p, v) {
    p.specular.value.copy(v.specular), p.shininess.value = Math.max(v.shininess, 1e-4), v.gradientMap && (p.gradientMap.value = v.gradientMap), v.emissiveMap && (p.emissiveMap.value = v.emissiveMap), v.bumpMap && (p.bumpMap.value = v.bumpMap, p.bumpScale.value = v.bumpScale, v.side === ft && (p.bumpScale.value *= -1)), v.normalMap && (p.normalMap.value = v.normalMap, p.normalScale.value.copy(v.normalScale), v.side === ft && p.normalScale.value.negate()), v.displacementMap && (p.displacementMap.value = v.displacementMap, p.displacementScale.value = v.displacementScale, p.displacementBias.value = v.displacementBias);
  }
  function h(p, v, _) {
    p.roughness.value = v.roughness, p.metalness.value = v.metalness, v.roughnessMap && (p.roughnessMap.value = v.roughnessMap), v.metalnessMap && (p.metalnessMap.value = v.metalnessMap), v.emissiveMap && (p.emissiveMap.value = v.emissiveMap), v.bumpMap && (p.bumpMap.value = v.bumpMap, p.bumpScale.value = v.bumpScale, v.side === ft && (p.bumpScale.value *= -1)), v.normalMap && (p.normalMap.value = v.normalMap, p.normalScale.value.copy(v.normalScale), v.side === ft && p.normalScale.value.negate()), v.displacementMap && (p.displacementMap.value = v.displacementMap, p.displacementScale.value = v.displacementScale, p.displacementBias.value = v.displacementBias), (v.envMap || _) && (p.envMapIntensity.value = v.envMapIntensity);
  }
  function f(p, v, _) {
    h(p, v, _), p.reflectivity.value = v.reflectivity, p.clearcoat.value = v.clearcoat, p.clearcoatRoughness.value = v.clearcoatRoughness, v.sheen && p.sheen.value.copy(v.sheen), v.clearcoatMap && (p.clearcoatMap.value = v.clearcoatMap), v.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = v.clearcoatRoughnessMap), v.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(v.clearcoatNormalScale), p.clearcoatNormalMap.value = v.clearcoatNormalMap, v.side === ft && p.clearcoatNormalScale.value.negate()), p.transparency.value = v.transparency;
  }
  function d(p, v) {
    v.matcap && (p.matcap.value = v.matcap), v.bumpMap && (p.bumpMap.value = v.bumpMap, p.bumpScale.value = v.bumpScale, v.side === ft && (p.bumpScale.value *= -1)), v.normalMap && (p.normalMap.value = v.normalMap, p.normalScale.value.copy(v.normalScale), v.side === ft && p.normalScale.value.negate()), v.displacementMap && (p.displacementMap.value = v.displacementMap, p.displacementScale.value = v.displacementScale, p.displacementBias.value = v.displacementBias);
  }
  function m(p, v) {
    v.displacementMap && (p.displacementMap.value = v.displacementMap, p.displacementScale.value = v.displacementScale, p.displacementBias.value = v.displacementBias);
  }
  function g(p, v) {
    v.displacementMap && (p.displacementMap.value = v.displacementMap, p.displacementScale.value = v.displacementScale, p.displacementBias.value = v.displacementBias), p.referencePosition.value.copy(v.referencePosition), p.nearDistance.value = v.nearDistance, p.farDistance.value = v.farDistance;
  }
  function y(p, v) {
    v.bumpMap && (p.bumpMap.value = v.bumpMap, p.bumpScale.value = v.bumpScale, v.side === ft && (p.bumpScale.value *= -1)), v.normalMap && (p.normalMap.value = v.normalMap, p.normalScale.value.copy(v.normalScale), v.side === ft && p.normalScale.value.negate()), v.displacementMap && (p.displacementMap.value = v.displacementMap, p.displacementScale.value = v.displacementScale, p.displacementBias.value = v.displacementBias);
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function Vu(e) {
  e = e || {};
  var t = e.canvas !== void 0 ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), n = e.context !== void 0 ? e.context : null, r = e.alpha !== void 0 ? e.alpha : !1, i = e.depth !== void 0 ? e.depth : !0, a = e.stencil !== void 0 ? e.stencil : !0, o = e.antialias !== void 0 ? e.antialias : !1, s = e.premultipliedAlpha !== void 0 ? e.premultipliedAlpha : !0, c = e.preserveDrawingBuffer !== void 0 ? e.preserveDrawingBuffer : !1, l = e.powerPreference !== void 0 ? e.powerPreference : "default", u = e.failIfMajorPerformanceCaveat !== void 0 ? e.failIfMajorPerformanceCaveat : !1, h = null, f = null;
  this.domElement = t, this.debug = {
    /**
     * Enables error checking and reporting when shader programs are being compiled
     * @type {boolean}
     */
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = At, this.physicallyCorrectLights = !1, this.toneMapping = bi, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
  var d = this, m = !1, g = null, y = 0, p = 0, v = null, _ = null, b = -1, x = {
    geometry: null,
    program: null,
    wireframe: !1
  }, T = null, A = null, D = new Ve(), R = new Ve(), V = null, P = t.width, I = t.height, F = 1, H = null, C = null, z = new Ve(0, 0, P, I), k = new Ve(0, 0, P, I), j = !1, X = new ua(), Y = new Pv(), oe = !1, Pe = !1, Be = new Ce(), Ue = new M();
  function xe() {
    return v === null ? F : 1;
  }
  var G;
  try {
    var Xe = {
      alpha: r,
      depth: i,
      stencil: a,
      antialias: o,
      premultipliedAlpha: s,
      preserveDrawingBuffer: c,
      powerPreference: l,
      failIfMajorPerformanceCaveat: u
    };
    if (t.addEventListener("webglcontextlost", ue, !1), t.addEventListener("webglcontextrestored", me, !1), G = n || t.getContext("webgl", Xe) || t.getContext("experimental-webgl", Xe), G === null)
      throw t.getContext("webgl") !== null ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    G.getShaderPrecisionFormat === void 0 && (G.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (w) {
    throw console.error("THREE.WebGLRenderer: " + w.message), w;
  }
  var De, Oe, re, W, _e, We, Je, Et, lt, S, E, K, q, Se, se, ie, Ge, be;
  function Me() {
    De = new Dv(G), Oe = new Cv(G, De, e), Oe.isWebGL2 === !1 && (De.get("WEBGL_depth_texture"), De.get("OES_texture_float"), De.get("OES_texture_half_float"), De.get("OES_texture_half_float_linear"), De.get("OES_standard_derivatives"), De.get("OES_element_index_uint"), De.get("ANGLE_instanced_arrays")), De.get("OES_texture_float_linear"), be = new Qm(G, De, Oe), re = new Jm(G, De, Oe), re.scissor(R.copy(k).multiplyScalar(F).floor()), re.viewport(D.copy(z).multiplyScalar(F).floor()), W = new Nv(), _e = new Um(), We = new $m(G, De, re, _e, Oe, be, W), Je = new cd(G, Oe), Et = new Iv(G, Je, W), lt = new Uv(G, Et, Je, W), se = new Bv(G), S = new Bm(d, De, Oe), E = new Km(_e), K = new Hm(), q = new jm(), Se = new Lv(d, re, lt, s), ie = new Rv(G, De, W, Oe), Ge = new Ov(G, De, W, Oe), W.programs = S.programs, d.capabilities = Oe, d.extensions = De, d.properties = _e, d.renderLists = K, d.state = re, d.info = W;
  }
  Me();
  var ne = new Hu(d, G);
  this.xr = ne;
  var de = new zu(d, lt, Oe.maxTextureSize);
  this.shadowMap = de, this.getContext = function() {
    return G;
  }, this.getContextAttributes = function() {
    return G.getContextAttributes();
  }, this.forceContextLoss = function() {
    var w = De.get("WEBGL_lose_context");
    w && w.loseContext();
  }, this.forceContextRestore = function() {
    var w = De.get("WEBGL_lose_context");
    w && w.restoreContext();
  }, this.getPixelRatio = function() {
    return F;
  }, this.setPixelRatio = function(w) {
    w !== void 0 && (F = w, this.setSize(P, I, !1));
  }, this.getSize = function(w) {
    return w === void 0 && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), w = new U()), w.set(P, I);
  }, this.setSize = function(w, N, O) {
    if (ne.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    P = w, I = N, t.width = Math.floor(w * F), t.height = Math.floor(N * F), O !== !1 && (t.style.width = w + "px", t.style.height = N + "px"), this.setViewport(0, 0, w, N);
  }, this.getDrawingBufferSize = function(w) {
    return w === void 0 && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), w = new U()), w.set(P * F, I * F).floor();
  }, this.setDrawingBufferSize = function(w, N, O) {
    P = w, I = N, F = O, t.width = Math.floor(w * O), t.height = Math.floor(N * O), this.setViewport(0, 0, w, N);
  }, this.getCurrentViewport = function(w) {
    return w === void 0 && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), w = new Ve()), w.copy(D);
  }, this.getViewport = function(w) {
    return w.copy(z);
  }, this.setViewport = function(w, N, O, B) {
    w.isVector4 ? z.set(w.x, w.y, w.z, w.w) : z.set(w, N, O, B), re.viewport(D.copy(z).multiplyScalar(F).floor());
  }, this.getScissor = function(w) {
    return w.copy(k);
  }, this.setScissor = function(w, N, O, B) {
    w.isVector4 ? k.set(w.x, w.y, w.z, w.w) : k.set(w, N, O, B), re.scissor(R.copy(k).multiplyScalar(F).floor());
  }, this.getScissorTest = function() {
    return j;
  }, this.setScissorTest = function(w) {
    re.setScissorTest(j = w);
  }, this.setOpaqueSort = function(w) {
    H = w;
  }, this.setTransparentSort = function(w) {
    C = w;
  }, this.getClearColor = function() {
    return Se.getClearColor();
  }, this.setClearColor = function() {
    Se.setClearColor.apply(Se, arguments);
  }, this.getClearAlpha = function() {
    return Se.getClearAlpha();
  }, this.setClearAlpha = function() {
    Se.setClearAlpha.apply(Se, arguments);
  }, this.clear = function(w, N, O) {
    var B = 0;
    (w === void 0 || w) && (B |= 16384), (N === void 0 || N) && (B |= 256), (O === void 0 || O) && (B |= 1024), G.clear(B);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    t.removeEventListener("webglcontextlost", ue, !1), t.removeEventListener("webglcontextrestored", me, !1), K.dispose(), q.dispose(), _e.dispose(), lt.dispose(), ne.dispose(), Rt.stop();
  };
  function ue(w) {
    w.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), m = !0;
  }
  function me() {
    console.log("THREE.WebGLRenderer: Context Restored."), m = !1, Me();
  }
  function L(w) {
    var N = w.target;
    N.removeEventListener("dispose", L), ae(N);
  }
  function ae(w) {
    ce(w), _e.remove(w);
  }
  function ce(w) {
    var N = _e.get(w).program;
    w.program = void 0, N !== void 0 && S.releaseProgram(N);
  }
  function Le(w, N) {
    w.render(function(O) {
      d.renderBufferImmediate(O, N);
    });
  }
  this.renderBufferImmediate = function(w, N) {
    re.initAttributes();
    var O = _e.get(w);
    w.hasPositions && !O.position && (O.position = G.createBuffer()), w.hasNormals && !O.normal && (O.normal = G.createBuffer()), w.hasUvs && !O.uv && (O.uv = G.createBuffer()), w.hasColors && !O.color && (O.color = G.createBuffer());
    var B = N.getAttributes();
    w.hasPositions && (G.bindBuffer(34962, O.position), G.bufferData(34962, w.positionArray, 35048), re.enableAttribute(B.position), G.vertexAttribPointer(B.position, 3, 5126, !1, 0, 0)), w.hasNormals && (G.bindBuffer(34962, O.normal), G.bufferData(34962, w.normalArray, 35048), re.enableAttribute(B.normal), G.vertexAttribPointer(B.normal, 3, 5126, !1, 0, 0)), w.hasUvs && (G.bindBuffer(34962, O.uv), G.bufferData(34962, w.uvArray, 35048), re.enableAttribute(B.uv), G.vertexAttribPointer(B.uv, 2, 5126, !1, 0, 0)), w.hasColors && (G.bindBuffer(34962, O.color), G.bufferData(34962, w.colorArray, 35048), re.enableAttribute(B.color), G.vertexAttribPointer(B.color, 3, 5126, !1, 0, 0)), re.disableUnusedAttributes(), G.drawArrays(4, 0, w.count), w.count = 0;
  };
  var le = new Ri();
  this.renderBufferDirect = function(w, N, O, B, J, Ee) {
    N === null && (N = le);
    var ye = J.isMesh && J.matrixWorld.determinant() < 0, he = ha(w, N, B, J);
    re.setMaterial(B, ye);
    var we = !1;
    (x.geometry !== O.id || x.program !== he.id || x.wireframe !== (B.wireframe === !0)) && (x.geometry = O.id, x.program = he.id, x.wireframe = B.wireframe === !0, we = !0), (B.morphTargets || B.morphNormals) && (se.update(J, O, B, he), we = !0), J.isInstancedMesh === !0 && (we = !0);
    var Re = O.index, Qe = O.attributes.position;
    if (Re === null) {
      if (Qe === void 0 || Qe.count === 0)
        return;
    } else if (Re.count === 0)
      return;
    var He = 1;
    B.wireframe === !0 && (Re = Et.getWireframeAttribute(O), He = 2);
    var ze, Te = ie;
    Re !== null && (ze = Je.get(Re), Te = Ge, Te.setIndex(ze)), we && (Fe(J, O, B, he), Re !== null && G.bindBuffer(34963, ze.buffer));
    var Ne = Re !== null ? Re.count : Qe.count, pt = O.drawRange.start * He, kt = O.drawRange.count * He, Mt = Ee !== null ? Ee.start * He : 0, oi = Ee !== null ? Ee.count * He : 1 / 0, rt = Math.max(pt, Mt), si = Math.min(Ne, pt + kt, Mt + oi) - 1, lr = Math.max(0, si - rt + 1);
    if (lr !== 0) {
      if (J.isMesh)
        B.wireframe === !0 ? (re.setLineWidth(B.wireframeLinewidth * xe()), Te.setMode(1)) : Te.setMode(4);
      else if (J.isLine) {
        var Wo = B.linewidth;
        Wo === void 0 && (Wo = 1), re.setLineWidth(Wo * xe()), J.isLineSegments ? Te.setMode(1) : J.isLineLoop ? Te.setMode(2) : Te.setMode(3);
      } else
        J.isPoints ? Te.setMode(0) : J.isSprite && Te.setMode(4);
      if (J.isInstancedMesh)
        Te.renderInstances(O, rt, lr, J.count);
      else if (O.isInstancedBufferGeometry) {
        var fh = Math.min(O.instanceCount, O._maxInstanceCount);
        Te.renderInstances(O, rt, lr, fh);
      } else
        Te.render(rt, lr);
    }
  };
  function Fe(w, N, O, B) {
    if (!(Oe.isWebGL2 === !1 && (w.isInstancedMesh || N.isInstancedBufferGeometry) && De.get("ANGLE_instanced_arrays") === null)) {
      re.initAttributes();
      var J = N.attributes, Ee = B.getAttributes(), ye = O.defaultAttributeValues;
      for (var he in Ee) {
        var we = Ee[he];
        if (we >= 0) {
          var Re = J[he];
          if (Re !== void 0) {
            var Qe = Re.normalized, He = Re.itemSize, ze = Je.get(Re);
            if (ze === void 0)
              continue;
            var Te = ze.buffer, Ne = ze.type, pt = ze.bytesPerElement;
            if (Re.isInterleavedBufferAttribute) {
              var kt = Re.data, Mt = kt.stride, oi = Re.offset;
              kt && kt.isInstancedInterleavedBuffer ? (re.enableAttributeAndDivisor(we, kt.meshPerAttribute), N._maxInstanceCount === void 0 && (N._maxInstanceCount = kt.meshPerAttribute * kt.count)) : re.enableAttribute(we), G.bindBuffer(34962, Te), re.vertexAttribPointer(we, He, Ne, Qe, Mt * pt, oi * pt);
            } else
              Re.isInstancedBufferAttribute ? (re.enableAttributeAndDivisor(we, Re.meshPerAttribute), N._maxInstanceCount === void 0 && (N._maxInstanceCount = Re.meshPerAttribute * Re.count)) : re.enableAttribute(we), G.bindBuffer(34962, Te), re.vertexAttribPointer(we, He, Ne, Qe, 0, 0);
          } else if (he === "instanceMatrix") {
            var ze = Je.get(w.instanceMatrix);
            if (ze === void 0)
              continue;
            var Te = ze.buffer, Ne = ze.type;
            re.enableAttributeAndDivisor(we + 0, 1), re.enableAttributeAndDivisor(we + 1, 1), re.enableAttributeAndDivisor(we + 2, 1), re.enableAttributeAndDivisor(we + 3, 1), G.bindBuffer(34962, Te), G.vertexAttribPointer(we + 0, 4, Ne, !1, 64, 0), G.vertexAttribPointer(we + 1, 4, Ne, !1, 64, 16), G.vertexAttribPointer(we + 2, 4, Ne, !1, 64, 32), G.vertexAttribPointer(we + 3, 4, Ne, !1, 64, 48);
          } else if (ye !== void 0) {
            var rt = ye[he];
            if (rt !== void 0)
              switch (rt.length) {
                case 2:
                  G.vertexAttrib2fv(we, rt);
                  break;
                case 3:
                  G.vertexAttrib3fv(we, rt);
                  break;
                case 4:
                  G.vertexAttrib4fv(we, rt);
                  break;
                default:
                  G.vertexAttrib1fv(we, rt);
              }
          }
        }
      }
      re.disableUnusedAttributes();
    }
  }
  this.compile = function(w, N) {
    f = q.get(w, N), f.init(), w.traverse(function(B) {
      B.isLight && (f.pushLight(B), B.castShadow && f.pushShadow(B));
    }), f.setupLights(N);
    const O = {};
    w.traverse(function(B) {
      let J = B.material;
      if (J)
        if (Array.isArray(J))
          for (let Ee = 0; Ee < J.length; Ee++) {
            let ye = J[Ee];
            ye.uuid in O || (Vt(ye, w, B), O[ye.uuid] = !0);
          }
        else
          J.uuid in O || (Vt(J, w, B), O[J.uuid] = !0);
    });
  };
  var $e = null;
  function ut(w) {
    ne.isPresenting || $e && $e(w);
  }
  var Rt = new Du();
  Rt.setAnimationLoop(ut), typeof window != "undefined" && Rt.setContext(window), this.setAnimationLoop = function(w) {
    $e = w, ne.setAnimationLoop(w), Rt.start();
  }, this.render = function(w, N) {
    var O, B;
    if (arguments[2] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), O = arguments[2]), arguments[3] !== void 0 && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), B = arguments[3]), !(N && N.isCamera)) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (!m) {
      x.geometry = null, x.program = null, x.wireframe = !1, b = -1, T = null, w.autoUpdate === !0 && w.updateMatrixWorld(), N.parent === null && N.updateMatrixWorld(), ne.enabled && ne.isPresenting && (N = ne.getCamera(N)), w.onBeforeRender(d, w, N, O || v), f = q.get(w, N), f.init(), Be.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), X.setFromProjectionMatrix(Be), Pe = this.localClippingEnabled, oe = Y.init(this.clippingPlanes, Pe, N), h = K.get(w, N), h.init(), Ye(w, N, 0, d.sortObjects), h.finish(), d.sortObjects === !0 && h.sort(H, C), oe && Y.beginShadows();
      var J = f.state.shadowsArray;
      de.render(J, w, N), f.setupLights(N), oe && Y.endShadows(), this.info.autoReset && this.info.reset(), O !== void 0 && this.setRenderTarget(O), Se.render(h, w, N, B);
      var Ee = h.opaque, ye = h.transparent;
      if (w.overrideMaterial) {
        var he = w.overrideMaterial;
        Ee.length && _t(Ee, w, N, he), ye.length && _t(ye, w, N, he);
      } else
        Ee.length && _t(Ee, w, N), ye.length && _t(ye, w, N);
      w.onAfterRender(d, w, N), v !== null && (We.updateRenderTargetMipmap(v), We.updateMultisampleRenderTarget(v)), re.buffers.depth.setTest(!0), re.buffers.depth.setMask(!0), re.buffers.color.setMask(!0), re.setPolygonOffset(!1), h = null, f = null;
    }
  };
  function Ye(w, N, O, B) {
    if (w.visible !== !1) {
      var J = w.layers.test(N.layers);
      if (J) {
        if (w.isGroup)
          O = w.renderOrder;
        else if (w.isLOD)
          w.autoUpdate === !0 && w.update(N);
        else if (w.isLight)
          f.pushLight(w), w.castShadow && f.pushShadow(w);
        else if (w.isSprite) {
          if (!w.frustumCulled || X.intersectsSprite(w)) {
            B && Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Be);
            var Ee = lt.update(w), ye = w.material;
            ye.visible && h.push(w, Ee, ye, O, Ue.z, null);
          }
        } else if (w.isImmediateRenderObject)
          B && Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Be), h.push(w, null, w.material, O, Ue.z, null);
        else if ((w.isMesh || w.isLine || w.isPoints) && (w.isSkinnedMesh && w.skeleton.frame !== W.render.frame && (w.skeleton.update(), w.skeleton.frame = W.render.frame), !w.frustumCulled || X.intersectsObject(w))) {
          B && Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Be);
          var Ee = lt.update(w), ye = w.material;
          if (Array.isArray(ye))
            for (var he = Ee.groups, we = 0, Re = he.length; we < Re; we++) {
              var Qe = he[we], He = ye[Qe.materialIndex];
              He && He.visible && h.push(w, Ee, He, O, Ue.z, Qe);
            }
          else
            ye.visible && h.push(w, Ee, ye, O, Ue.z, null);
        }
      }
      for (var ze = w.children, we = 0, Re = ze.length; we < Re; we++)
        Ye(ze[we], N, O, B);
    }
  }
  function _t(w, N, O, B) {
    for (var J = 0, Ee = w.length; J < Ee; J++) {
      var ye = w[J], he = ye.object, we = ye.geometry, Re = B === void 0 ? ye.material : B, Qe = ye.group;
      if (O.isArrayCamera) {
        A = O;
        for (var He = O.cameras, ze = 0, Te = He.length; ze < Te; ze++) {
          var Ne = He[ze];
          he.layers.test(Ne.layers) && (re.viewport(D.copy(Ne.viewport)), f.setupLights(Ne), Ct(he, N, Ne, we, Re, Qe));
        }
      } else
        A = null, Ct(he, N, O, we, Re, Qe);
    }
  }
  function Ct(w, N, O, B, J, Ee) {
    if (w.onBeforeRender(d, N, O, B, J, Ee), f = q.get(N, A || O), w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, w.matrixWorld), w.normalMatrix.getNormalMatrix(w.modelViewMatrix), w.isImmediateRenderObject) {
      var ye = ha(O, N, J, w);
      re.setMaterial(J), x.geometry = null, x.program = null, x.wireframe = !1, Le(w, ye);
    } else
      d.renderBufferDirect(O, N, B, J, w, Ee);
    w.onAfterRender(d, N, O, B, J, Ee), f = q.get(N, A || O);
  }
  function Vt(w, N, O) {
    var B = _e.get(w), J = f.state.lights, Ee = f.state.shadowsArray, ye = J.state.version, he = S.getParameters(w, J.state, Ee, N, Y.numPlanes, Y.numIntersection, O), we = S.getProgramCacheKey(he), Re = B.program, Qe = !0;
    if (Re === void 0)
      w.addEventListener("dispose", L);
    else if (Re.cacheKey !== we)
      ce(w);
    else if (B.lightsStateVersion !== ye)
      B.lightsStateVersion = ye, Qe = !1;
    else {
      if (he.shaderID !== void 0)
        return;
      Qe = !1;
    }
    Qe && (Re = S.acquireProgram(he, we), B.program = Re, B.uniforms = he.uniforms, B.outputEncoding = he.outputEncoding, w.program = Re);
    var He = Re.getAttributes();
    if (w.morphTargets) {
      w.numSupportedMorphTargets = 0;
      for (var ze = 0; ze < d.maxMorphTargets; ze++)
        He["morphTarget" + ze] >= 0 && w.numSupportedMorphTargets++;
    }
    if (w.morphNormals) {
      w.numSupportedMorphNormals = 0;
      for (var ze = 0; ze < d.maxMorphNormals; ze++)
        He["morphNormal" + ze] >= 0 && w.numSupportedMorphNormals++;
    }
    var Te = B.uniforms;
    (!w.isShaderMaterial && !w.isRawShaderMaterial || w.clipping === !0) && (B.numClippingPlanes = Y.numPlanes, B.numIntersection = Y.numIntersection, Te.clippingPlanes = Y.uniform), B.environment = w.isMeshStandardMaterial ? N.environment : null, B.fog = N.fog, B.needsLights = da(w), B.lightsStateVersion = ye, B.needsLights && (Te.ambientLightColor.value = J.state.ambient, Te.lightProbe.value = J.state.probe, Te.directionalLights.value = J.state.directional, Te.directionalLightShadows.value = J.state.directionalShadow, Te.spotLights.value = J.state.spot, Te.spotLightShadows.value = J.state.spotShadow, Te.rectAreaLights.value = J.state.rectArea, Te.pointLights.value = J.state.point, Te.pointLightShadows.value = J.state.pointShadow, Te.hemisphereLights.value = J.state.hemi, Te.directionalShadowMap.value = J.state.directionalShadowMap, Te.directionalShadowMatrix.value = J.state.directionalShadowMatrix, Te.spotShadowMap.value = J.state.spotShadowMap, Te.spotShadowMatrix.value = J.state.spotShadowMatrix, Te.pointShadowMap.value = J.state.pointShadowMap, Te.pointShadowMatrix.value = J.state.pointShadowMatrix);
    var Ne = B.program.getUniforms(), pt = Fn.seqWithValue(Ne.seq, Te);
    B.uniformsList = pt;
  }
  function ha(w, N, O, B) {
    We.resetTextureUnits();
    var J = N.fog, Ee = O.isMeshStandardMaterial ? N.environment : null, ye = v === null ? d.outputEncoding : v.texture.encoding, he = _e.get(O), we = f.state.lights;
    if (oe && (Pe || w !== T)) {
      var Re = w === T && O.id === b;
      Y.setState(
        O.clippingPlanes,
        O.clipIntersection,
        O.clipShadows,
        w,
        he,
        Re
      );
    }
    O.version === he.__version ? (he.program === void 0 || O.fog && he.fog !== J || he.environment !== Ee || he.needsLights && he.lightsStateVersion !== we.state.version || he.numClippingPlanes !== void 0 && (he.numClippingPlanes !== Y.numPlanes || he.numIntersection !== Y.numIntersection) || he.outputEncoding !== ye) && Vt(O, N, B) : (Vt(O, N, B), he.__version = O.version);
    var Qe = !1, He = !1, ze = !1, Te = he.program, Ne = Te.getUniforms(), pt = he.uniforms;
    if (re.useProgram(Te.program) && (Qe = !0, He = !0, ze = !0), O.id !== b && (b = O.id, He = !0), Qe || T !== w) {
      if (Ne.setValue(G, "projectionMatrix", w.projectionMatrix), Oe.logarithmicDepthBuffer && Ne.setValue(
        G,
        "logDepthBufFC",
        2 / (Math.log(w.far + 1) / Math.LN2)
      ), T !== w && (T = w, He = !0, ze = !0), O.isShaderMaterial || O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshStandardMaterial || O.envMap) {
        var kt = Ne.map.cameraPosition;
        kt !== void 0 && kt.setValue(
          G,
          Ue.setFromMatrixPosition(w.matrixWorld)
        );
      }
      (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && Ne.setValue(G, "isOrthographic", w.isOrthographicCamera === !0), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial || O.skinning) && Ne.setValue(G, "viewMatrix", w.matrixWorldInverse);
    }
    if (O.skinning) {
      Ne.setOptional(G, B, "bindMatrix"), Ne.setOptional(G, B, "bindMatrixInverse");
      var Mt = B.skeleton;
      if (Mt) {
        var oi = Mt.bones;
        if (Oe.floatVertexTextures) {
          if (Mt.boneTexture === void 0) {
            var rt = Math.sqrt(oi.length * 4);
            rt = Ae.ceilPowerOfTwo(rt), rt = Math.max(rt, 4);
            var si = new Float32Array(rt * rt * 4);
            si.set(Mt.boneMatrices);
            var lr = new Ur(si, rt, rt, Zt, In);
            Mt.boneMatrices = si, Mt.boneTexture = lr, Mt.boneTextureSize = rt;
          }
          Ne.setValue(G, "boneTexture", Mt.boneTexture, We), Ne.setValue(G, "boneTextureSize", Mt.boneTextureSize);
        } else
          Ne.setOptional(G, Mt, "boneMatrices");
      }
    }
    return (He || he.receiveShadow !== B.receiveShadow) && (he.receiveShadow = B.receiveShadow, Ne.setValue(G, "receiveShadow", B.receiveShadow)), He && (Ne.setValue(G, "toneMappingExposure", d.toneMappingExposure), Ne.setValue(G, "toneMappingWhitePoint", d.toneMappingWhitePoint), he.needsLights && fa(pt, ze), J && O.fog && E.refreshFogUniforms(pt, J), E.refreshMaterialUniforms(pt, O, Ee, F, I), pt.ltc_1 !== void 0 && (pt.ltc_1.value = Z.LTC_1), pt.ltc_2 !== void 0 && (pt.ltc_2.value = Z.LTC_2), Fn.upload(G, he.uniformsList, pt, We)), O.isShaderMaterial && O.uniformsNeedUpdate === !0 && (Fn.upload(G, he.uniformsList, pt, We), O.uniformsNeedUpdate = !1), O.isSpriteMaterial && Ne.setValue(G, "center", B.center), Ne.setValue(G, "modelViewMatrix", B.modelViewMatrix), Ne.setValue(G, "normalMatrix", B.normalMatrix), Ne.setValue(G, "modelMatrix", B.matrixWorld), Te;
  }
  function fa(w, N) {
    w.ambientLightColor.needsUpdate = N, w.lightProbe.needsUpdate = N, w.directionalLights.needsUpdate = N, w.directionalLightShadows.needsUpdate = N, w.pointLights.needsUpdate = N, w.pointLightShadows.needsUpdate = N, w.spotLights.needsUpdate = N, w.spotLightShadows.needsUpdate = N, w.rectAreaLights.needsUpdate = N, w.hemisphereLights.needsUpdate = N;
  }
  function da(w) {
    return w.isMeshLambertMaterial || w.isMeshToonMaterial || w.isMeshPhongMaterial || w.isMeshStandardMaterial || w.isShadowMaterial || w.isShaderMaterial && w.lights === !0;
  }
  this.setFramebuffer = function(w) {
    g !== w && v === null && G.bindFramebuffer(36160, w), g = w;
  }, this.getActiveCubeFace = function() {
    return y;
  }, this.getActiveMipmapLevel = function() {
    return p;
  }, this.getRenderTarget = function() {
    return v;
  }, this.setRenderTarget = function(w, N, O) {
    v = w, y = N, p = O, w && _e.get(w).__webglFramebuffer === void 0 && We.setupRenderTarget(w);
    var B = g, J = !1;
    if (w) {
      var Ee = _e.get(w).__webglFramebuffer;
      w.isWebGLCubeRenderTarget ? (B = Ee[N || 0], J = !0) : w.isWebGLMultisampleRenderTarget ? B = _e.get(w).__webglMultisampledFramebuffer : B = Ee, D.copy(w.viewport), R.copy(w.scissor), V = w.scissorTest;
    } else
      D.copy(z).multiplyScalar(F).floor(), R.copy(k).multiplyScalar(F).floor(), V = j;
    if (_ !== B && (G.bindFramebuffer(36160, B), _ = B), re.viewport(D), re.scissor(R), re.setScissorTest(V), J) {
      var ye = _e.get(w.texture);
      G.framebufferTexture2D(36160, 36064, 34069 + (N || 0), ye.__webglTexture, O || 0);
    }
  }, this.readRenderTargetPixels = function(w, N, O, B, J, Ee, ye) {
    if (!(w && w.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    var he = _e.get(w).__webglFramebuffer;
    if (w.isWebGLCubeRenderTarget && ye !== void 0 && (he = he[ye]), he) {
      var we = !1;
      he !== _ && (G.bindFramebuffer(36160, he), we = !0);
      try {
        var Re = w.texture, Qe = Re.format, He = Re.type;
        if (Qe !== Zt && be.convert(Qe) !== G.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        if (He !== la && be.convert(He) !== G.getParameter(35738) && // IE11, Edge and Chrome Mac < 52 (#9513)
        !(He === In && (Oe.isWebGL2 || De.get("OES_texture_float") || De.get("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
        !(He === to && (Oe.isWebGL2 ? De.get("EXT_color_buffer_float") : De.get("EXT_color_buffer_half_float")))) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        G.checkFramebufferStatus(36160) === 36053 ? N >= 0 && N <= w.width - B && O >= 0 && O <= w.height - J && G.readPixels(N, O, B, J, be.convert(Qe), be.convert(He), Ee) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
      } finally {
        we && G.bindFramebuffer(36160, _);
      }
    }
  }, this.copyFramebufferToTexture = function(w, N, O) {
    O === void 0 && (O = 0);
    var B = Math.pow(2, -O), J = Math.floor(N.image.width * B), Ee = Math.floor(N.image.height * B), ye = be.convert(N.format);
    We.setTexture2D(N, 0), G.copyTexImage2D(3553, O, ye, w.x, w.y, J, Ee, 0), re.unbindTexture();
  }, this.copyTextureToTexture = function(w, N, O, B) {
    B === void 0 && (B = 0);
    var J = N.image.width, Ee = N.image.height, ye = be.convert(O.format), he = be.convert(O.type);
    We.setTexture2D(O, 0), N.isDataTexture ? G.texSubImage2D(3553, B, w.x, w.y, J, Ee, ye, he, N.image.data) : N.isCompressedTexture ? G.compressedTexSubImage2D(3553, B, w.x, w.y, N.mipmaps[0].width, N.mipmaps[0].height, ye, N.mipmaps[0].data) : G.texSubImage2D(3553, B, w.x, w.y, ye, he, N.image), B === 0 && O.generateMipmaps && G.generateMipmap(3553), re.unbindTexture();
  }, this.initTexture = function(w) {
    We.setTexture2D(w, 0), re.unbindTexture();
  }, typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
function Fs(e, t) {
  this.name = "", this.color = new ee(e), this.density = t !== void 0 ? t : 25e-5;
}
Object.assign(Fs.prototype, {
  isFogExp2: !0,
  clone: function() {
    return new Fs(this.color, this.density);
  },
  toJSON: function() {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  }
});
function Bs(e, t, n) {
  this.name = "", this.color = new ee(e), this.near = t !== void 0 ? t : 1, this.far = n !== void 0 ? n : 1e3;
}
Object.assign(Bs.prototype, {
  isFog: !0,
  clone: function() {
    return new Bs(this.color, this.near, this.far);
  },
  toJSON: function() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
});
function zn(e, t) {
  this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Ho, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
}
Object.defineProperty(zn.prototype, "needsUpdate", {
  set: function(e) {
    e === !0 && this.version++;
  }
});
Object.assign(zn.prototype, {
  isInterleavedBuffer: !0,
  onUploadCallback: function() {
  },
  setUsage: function(e) {
    return this.usage = e, this;
  },
  copy: function(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  },
  copyAt: function(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (var r = 0, i = this.stride; r < i; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  },
  set: function(e, t) {
    return t === void 0 && (t = 0), this.array.set(e, t), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  onUpload: function(e) {
    return this.onUploadCallback = e, this;
  }
});
var Yn = new M();
function so(e, t, n, r) {
  this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r === !0;
}
Object.defineProperties(so.prototype, {
  count: {
    get: function() {
      return this.data.count;
    }
  },
  array: {
    get: function() {
      return this.data.array;
    }
  }
});
Object.assign(so.prototype, {
  isInterleavedBufferAttribute: !0,
  applyMatrix4: function(e) {
    for (var t = 0, n = this.data.count; t < n; t++)
      Yn.x = this.getX(t), Yn.y = this.getY(t), Yn.z = this.getZ(t), Yn.applyMatrix4(e), this.setXYZ(t, Yn.x, Yn.y, Yn.z);
    return this;
  },
  setX: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset] = t, this;
  },
  setY: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  },
  setZ: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  },
  setW: function(e, t) {
    return this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  },
  getX: function(e) {
    return this.data.array[e * this.data.stride + this.offset];
  },
  getY: function(e) {
    return this.data.array[e * this.data.stride + this.offset + 1];
  },
  getZ: function(e) {
    return this.data.array[e * this.data.stride + this.offset + 2];
  },
  getW: function(e) {
    return this.data.array[e * this.data.stride + this.offset + 3];
  },
  setXY: function(e, t, n) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  },
  setXYZ: function(e, t, n, r) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
  },
  setXYZW: function(e, t, n, r, i) {
    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this;
  },
  clone: function() {
    console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
    for (var e = [], t = 0; t < this.count; t++)
      for (var n = t * this.data.stride + this.offset, r = 0; r < this.itemSize; r++)
        e.push(this.data.array[n + r]);
    return new pe(new this.array.constructor(e), this.itemSize, this.normalized);
  },
  toJSON: function() {
    console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
    for (var e = [], t = 0; t < this.count; t++)
      for (var n = t * this.data.stride + this.offset, r = 0; r < this.itemSize; r++)
        e.push(this.data.array[n + r]);
    return {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: e,
      normalized: this.normalized
    };
  }
});
function ar(e) {
  ve.call(this), this.type = "SpriteMaterial", this.color = new ee(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e);
}
ar.prototype = Object.create(ve.prototype);
ar.prototype.constructor = ar;
ar.prototype.isSpriteMaterial = !0;
ar.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this;
};
var br, pi = new M(), wr = new M(), Sr = new M(), Er = new U(), vi = new U(), ku = new Ce(), La = new M(), mi = new M(), Ra = new M(), bl = new U(), ps = new U(), wl = new U();
function Us(e) {
  if (Q.call(this), this.type = "Sprite", br === void 0) {
    br = new te();
    var t = new Float32Array([
      -0.5,
      -0.5,
      0,
      0,
      0,
      0.5,
      -0.5,
      0,
      1,
      0,
      0.5,
      0.5,
      0,
      1,
      1,
      -0.5,
      0.5,
      0,
      0,
      1
    ]), n = new zn(t, 5);
    br.setIndex([0, 1, 2, 0, 2, 3]), br.setAttribute("position", new so(n, 3, 0, !1)), br.setAttribute("uv", new so(n, 2, 3, !1));
  }
  this.geometry = br, this.material = e !== void 0 ? e : new ar(), this.center = new U(0.5, 0.5);
}
Us.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: Us,
  isSprite: !0,
  raycast: function(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), wr.setFromMatrixScale(this.matrixWorld), ku.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Sr.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && wr.multiplyScalar(-Sr.z);
    var n = this.material.rotation, r, i;
    n !== 0 && (i = Math.cos(n), r = Math.sin(n));
    var a = this.center;
    Ca(La.set(-0.5, -0.5, 0), Sr, a, wr, r, i), Ca(mi.set(0.5, -0.5, 0), Sr, a, wr, r, i), Ca(Ra.set(0.5, 0.5, 0), Sr, a, wr, r, i), bl.set(0, 0), ps.set(1, 0), wl.set(1, 1);
    var o = e.ray.intersectTriangle(La, mi, Ra, !1, pi);
    if (!(o === null && (Ca(mi.set(-0.5, 0.5, 0), Sr, a, wr, r, i), ps.set(0, 1), o = e.ray.intersectTriangle(La, Ra, mi, !1, pi), o === null))) {
      var s = e.ray.origin.distanceTo(pi);
      s < e.near || s > e.far || t.push({
        distance: s,
        point: pi.clone(),
        uv: mt.getUV(pi, La, mi, Ra, bl, ps, wl, new U()),
        face: null,
        object: this
      });
    }
  },
  clone: function() {
    return new this.constructor(this.material).copy(this);
  },
  copy: function(e) {
    return Q.prototype.copy.call(this, e), e.center !== void 0 && this.center.copy(e.center), this;
  }
});
function Ca(e, t, n, r, i, a) {
  Er.subVectors(e, n).addScalar(0.5).multiply(r), i !== void 0 ? (vi.x = a * Er.x - i * Er.y, vi.y = i * Er.x + a * Er.y) : vi.copy(Er), e.copy(t), e.x += vi.x, e.y += vi.y, e.applyMatrix4(ku);
}
var Pa = new M(), Sl = new M();
function co() {
  Q.call(this), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
    levels: {
      enumerable: !0,
      value: []
    }
  }), this.autoUpdate = !0;
}
co.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: co,
  isLOD: !0,
  copy: function(e) {
    Q.prototype.copy.call(this, e, !1);
    for (var t = e.levels, n = 0, r = t.length; n < r; n++) {
      var i = t[n];
      this.addLevel(i.object.clone(), i.distance);
    }
    return this.autoUpdate = e.autoUpdate, this;
  },
  addLevel: function(e, t) {
    t === void 0 && (t = 0), t = Math.abs(t);
    for (var n = this.levels, r = 0; r < n.length && !(t < n[r].distance); r++)
      ;
    return n.splice(r, 0, { distance: t, object: e }), this.add(e), this;
  },
  getCurrentLevel: function() {
    return this._currentLevel;
  },
  getObjectForDistance: function(e) {
    var t = this.levels;
    if (t.length > 0) {
      for (var n = 1, r = t.length; n < r && !(e < t[n].distance); n++)
        ;
      return t[n - 1].object;
    }
    return null;
  },
  raycast: function(e, t) {
    var n = this.levels;
    if (n.length > 0) {
      Pa.setFromMatrixPosition(this.matrixWorld);
      var r = e.ray.origin.distanceTo(Pa);
      this.getObjectForDistance(r).raycast(e, t);
    }
  },
  update: function(e) {
    var t = this.levels;
    if (t.length > 1) {
      Pa.setFromMatrixPosition(e.matrixWorld), Sl.setFromMatrixPosition(this.matrixWorld);
      var n = Pa.distanceTo(Sl) / e.zoom;
      t[0].object.visible = !0;
      for (var r = 1, i = t.length; r < i && n >= t[r].distance; r++)
        t[r - 1].object.visible = !1, t[r].object.visible = !0;
      for (this._currentLevel = r - 1; r < i; r++)
        t[r].object.visible = !1;
    }
  },
  toJSON: function(e) {
    var t = Q.prototype.toJSON.call(this, e);
    this.autoUpdate === !1 && (t.object.autoUpdate = !1), t.object.levels = [];
    for (var n = this.levels, r = 0, i = n.length; r < i; r++) {
      var a = n[r];
      t.object.levels.push({
        object: a.object.uuid,
        distance: a.distance
      });
    }
    return t;
  }
});
function Gs(e, t) {
  e && e.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), tt.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ce(), this.bindMatrixInverse = new Ce();
}
Gs.prototype = Object.assign(Object.create(tt.prototype), {
  constructor: Gs,
  isSkinnedMesh: !0,
  bind: function(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t);
  },
  pose: function() {
    this.skeleton.pose();
  },
  normalizeSkinWeights: function() {
    for (var e = new Ve(), t = this.geometry.attributes.skinWeight, n = 0, r = t.count; n < r; n++) {
      e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.w = t.getW(n);
      var i = 1 / e.manhattanLength();
      i !== 1 / 0 ? e.multiplyScalar(i) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  },
  updateMatrixWorld: function(e) {
    tt.prototype.updateMatrixWorld.call(this, e), this.bindMode === "attached" ? this.bindMatrixInverse.getInverse(this.matrixWorld) : this.bindMode === "detached" ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  },
  clone: function() {
    return new this.constructor(this.geometry, this.material).copy(this);
  },
  boneTransform: function() {
    var e = new M(), t = new Ve(), n = new Ve(), r = new M(), i = new Ce();
    return function(a, o) {
      var s = this.skeleton, c = this.geometry;
      t.fromBufferAttribute(c.attributes.skinIndex, a), n.fromBufferAttribute(c.attributes.skinWeight, a), e.fromBufferAttribute(c.attributes.position, a).applyMatrix4(this.bindMatrix), o.set(0, 0, 0);
      for (var l = 0; l < 4; l++) {
        var u = n.getComponent(l);
        if (u !== 0) {
          var h = t.getComponent(l);
          i.multiplyMatrices(s.bones[h].matrixWorld, s.boneInverses[h]), o.addScaledVector(r.copy(e).applyMatrix4(i), u);
        }
      }
      return o.applyMatrix4(this.bindMatrixInverse);
    };
  }()
});
var El = new Ce(), eg = new Ce();
function zs(e, t) {
  if (e = e || [], this.bones = e.slice(0), this.boneMatrices = new Float32Array(this.bones.length * 16), this.frame = -1, t === void 0)
    this.calculateInverses();
  else if (this.bones.length === t.length)
    this.boneInverses = t.slice(0);
  else {
    console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
    for (var n = 0, r = this.bones.length; n < r; n++)
      this.boneInverses.push(new Ce());
  }
}
Object.assign(zs.prototype, {
  calculateInverses: function() {
    this.boneInverses = [];
    for (var e = 0, t = this.bones.length; e < t; e++) {
      var n = new Ce();
      this.bones[e] && n.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(n);
    }
  },
  pose: function() {
    var e, t, n;
    for (t = 0, n = this.bones.length; t < n; t++)
      e = this.bones[t], e && e.matrixWorld.getInverse(this.boneInverses[t]);
    for (t = 0, n = this.bones.length; t < n; t++)
      e = this.bones[t], e && (e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale));
  },
  update: function() {
    for (var e = this.bones, t = this.boneInverses, n = this.boneMatrices, r = this.boneTexture, i = 0, a = e.length; i < a; i++) {
      var o = e[i] ? e[i].matrixWorld : eg;
      El.multiplyMatrices(o, t[i]), El.toArray(n, i * 16);
    }
    r !== void 0 && (r.needsUpdate = !0);
  },
  clone: function() {
    return new zs(this.bones, this.boneInverses);
  },
  getBoneByName: function(e) {
    for (var t = 0, n = this.bones.length; t < n; t++) {
      var r = this.bones[t];
      if (r.name === e)
        return r;
    }
  },
  dispose: function() {
    this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = void 0);
  }
});
function Tl() {
  Q.call(this), this.type = "Bone";
}
Tl.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: Tl,
  isBone: !0
});
var Al = new Ce(), Ll = new Ce(), Da = [], gi = new tt();
function Hs(e, t, n) {
  tt.call(this, e, t), this.instanceMatrix = new pe(new Float32Array(n * 16), 16), this.count = n, this.frustumCulled = !1;
}
Hs.prototype = Object.assign(Object.create(tt.prototype), {
  constructor: Hs,
  isInstancedMesh: !0,
  getMatrixAt: function(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  },
  raycast: function(e, t) {
    var n = this.matrixWorld, r = this.count;
    if (gi.geometry = this.geometry, gi.material = this.material, gi.material !== void 0)
      for (var i = 0; i < r; i++) {
        this.getMatrixAt(i, Al), Ll.multiplyMatrices(n, Al), gi.matrixWorld = Ll, gi.raycast(e, Da);
        for (var a = 0, o = Da.length; a < o; a++) {
          var s = Da[a];
          s.instanceId = i, s.object = this, t.push(s);
        }
        Da.length = 0;
      }
  },
  setMatrixAt: function(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  },
  updateMorphTargets: function() {
  }
});
function at(e) {
  ve.call(this), this.type = "LineBasicMaterial", this.color = new ee(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(e);
}
at.prototype = Object.create(ve.prototype);
at.prototype.constructor = at;
at.prototype.isLineBasicMaterial = !0;
at.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.morphTargets = e.morphTargets, this;
};
var Rl = new M(), Cl = new M(), Pl = new Ce(), Ia = new ii(), Oa = new Sn();
function zt(e, t, n) {
  n === 1 && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), Q.call(this), this.type = "Line", this.geometry = e !== void 0 ? e : new te(), this.material = t !== void 0 ? t : new at(), this.updateMorphTargets();
}
zt.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: zt,
  isLine: !0,
  computeLineDistances: function() {
    var e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        for (var t = e.attributes.position, n = [0], r = 1, i = t.count; r < i; r++)
          Rl.fromBufferAttribute(t, r - 1), Cl.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Rl.distanceTo(Cl);
        e.setAttribute("lineDistance", new $(n, 1));
      } else
        console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else if (e.isGeometry) {
      var a = e.vertices, n = e.lineDistances;
      n[0] = 0;
      for (var r = 1, i = a.length; r < i; r++)
        n[r] = n[r - 1], n[r] += a[r - 1].distanceTo(a[r]);
    }
    return this;
  },
  raycast: function(e, t) {
    var n = this.geometry, r = this.matrixWorld, i = e.params.Line.threshold;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Oa.copy(n.boundingSphere), Oa.applyMatrix4(r), Oa.radius += i, e.ray.intersectsSphere(Oa) !== !1) {
      Pl.getInverse(r), Ia.copy(e.ray).applyMatrix4(Pl);
      var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, s = new M(), c = new M(), l = new M(), u = new M(), h = this && this.isLineSegments ? 2 : 1;
      if (n.isBufferGeometry) {
        var f = n.index, d = n.attributes, m = d.position.array;
        if (f !== null)
          for (var g = f.array, y = 0, p = g.length - 1; y < p; y += h) {
            var v = g[y], _ = g[y + 1];
            s.fromArray(m, v * 3), c.fromArray(m, _ * 3);
            var b = Ia.distanceSqToSegment(s, c, u, l);
            if (!(b > o)) {
              u.applyMatrix4(this.matrixWorld);
              var x = e.ray.origin.distanceTo(u);
              x < e.near || x > e.far || t.push({
                distance: x,
                // What do we want? intersection point on the ray or on the segment??
                // point: raycaster.ray.at( distance ),
                point: l.clone().applyMatrix4(this.matrixWorld),
                index: y,
                face: null,
                faceIndex: null,
                object: this
              });
            }
          }
        else
          for (var y = 0, p = m.length / 3 - 1; y < p; y += h) {
            s.fromArray(m, 3 * y), c.fromArray(m, 3 * y + 3);
            var b = Ia.distanceSqToSegment(s, c, u, l);
            if (!(b > o)) {
              u.applyMatrix4(this.matrixWorld);
              var x = e.ray.origin.distanceTo(u);
              x < e.near || x > e.far || t.push({
                distance: x,
                // What do we want? intersection point on the ray or on the segment??
                // point: raycaster.ray.at( distance ),
                point: l.clone().applyMatrix4(this.matrixWorld),
                index: y,
                face: null,
                faceIndex: null,
                object: this
              });
            }
          }
      } else if (n.isGeometry)
        for (var T = n.vertices, A = T.length, y = 0; y < A - 1; y += h) {
          var b = Ia.distanceSqToSegment(T[y], T[y + 1], u, l);
          if (!(b > o)) {
            u.applyMatrix4(this.matrixWorld);
            var x = e.ray.origin.distanceTo(u);
            x < e.near || x > e.far || t.push({
              distance: x,
              // What do we want? intersection point on the ray or on the segment??
              // point: raycaster.ray.at( distance ),
              point: l.clone().applyMatrix4(this.matrixWorld),
              index: y,
              face: null,
              faceIndex: null,
              object: this
            });
          }
        }
    }
  },
  updateMorphTargets: function() {
    var e = this.geometry, t, n, r;
    if (e.isBufferGeometry) {
      var i = e.morphAttributes, a = Object.keys(i);
      if (a.length > 0) {
        var o = i[a[0]];
        if (o !== void 0)
          for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, n = o.length; t < n; t++)
            r = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t;
      }
    } else {
      var s = e.morphTargets;
      s !== void 0 && s.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  },
  clone: function() {
    return new this.constructor(this.geometry, this.material).copy(this);
  }
});
var Na = new M(), Fa = new M();
function ct(e, t) {
  zt.call(this, e, t), this.type = "LineSegments";
}
ct.prototype = Object.assign(Object.create(zt.prototype), {
  constructor: ct,
  isLineSegments: !0,
  computeLineDistances: function() {
    var e = this.geometry;
    if (e.isBufferGeometry)
      if (e.index === null) {
        for (var t = e.attributes.position, n = [], r = 0, i = t.count; r < i; r += 2)
          Na.fromBufferAttribute(t, r), Fa.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Na.distanceTo(Fa);
        e.setAttribute("lineDistance", new $(n, 1));
      } else
        console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    else if (e.isGeometry)
      for (var a = e.vertices, n = e.lineDistances, r = 0, i = a.length; r < i; r += 2)
        Na.copy(a[r]), Fa.copy(a[r + 1]), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Na.distanceTo(Fa);
    return this;
  }
});
function Vs(e, t) {
  zt.call(this, e, t), this.type = "LineLoop";
}
Vs.prototype = Object.assign(Object.create(zt.prototype), {
  constructor: Vs,
  isLineLoop: !0
});
function or(e) {
  ve.call(this), this.type = "PointsMaterial", this.color = new ee(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(e);
}
or.prototype = Object.create(ve.prototype);
or.prototype.constructor = or;
or.prototype.isPointsMaterial = !0;
or.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this;
};
var Dl = new Ce(), ks = new ii(), Ba = new Sn(), Ua = new M();
function Ws(e, t) {
  Q.call(this), this.type = "Points", this.geometry = e !== void 0 ? e : new te(), this.material = t !== void 0 ? t : new or(), this.updateMorphTargets();
}
Ws.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: Ws,
  isPoints: !0,
  raycast: function(e, t) {
    var n = this.geometry, r = this.matrixWorld, i = e.params.Points.threshold;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ba.copy(n.boundingSphere), Ba.applyMatrix4(r), Ba.radius += i, e.ray.intersectsSphere(Ba) !== !1) {
      Dl.getInverse(r), ks.copy(e.ray).applyMatrix4(Dl);
      var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a;
      if (n.isBufferGeometry) {
        var s = n.index, c = n.attributes, l = c.position.array;
        if (s !== null)
          for (var u = s.array, h = 0, f = u.length; h < f; h++) {
            var d = u[h];
            Ua.fromArray(l, d * 3), vs(Ua, d, o, r, e, t, this);
          }
        else
          for (var h = 0, m = l.length / 3; h < m; h++)
            Ua.fromArray(l, h * 3), vs(Ua, h, o, r, e, t, this);
      } else
        for (var g = n.vertices, h = 0, m = g.length; h < m; h++)
          vs(g[h], h, o, r, e, t, this);
    }
  },
  updateMorphTargets: function() {
    var e = this.geometry, t, n, r;
    if (e.isBufferGeometry) {
      var i = e.morphAttributes, a = Object.keys(i);
      if (a.length > 0) {
        var o = i[a[0]];
        if (o !== void 0)
          for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, n = o.length; t < n; t++)
            r = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[r] = t;
      }
    } else {
      var s = e.morphTargets;
      s !== void 0 && s.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
    }
  },
  clone: function() {
    return new this.constructor(this.geometry, this.material).copy(this);
  }
});
function vs(e, t, n, r, i, a, o) {
  var s = ks.distanceSqToPoint(e);
  if (s < n) {
    var c = new M();
    ks.closestPointToPoint(e, c), c.applyMatrix4(r);
    var l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far)
      return;
    a.push({
      distance: l,
      distanceToRay: Math.sqrt(s),
      point: c,
      index: t,
      face: null,
      object: o
    });
  }
}
function Il(e, t, n, r, i, a, o, s, c) {
  je.call(this, e, t, n, r, i, a, o, s, c), this.format = o !== void 0 ? o : er, this.minFilter = a !== void 0 ? a : yt, this.magFilter = i !== void 0 ? i : yt, this.generateMipmaps = !1;
}
Il.prototype = Object.assign(Object.create(je.prototype), {
  constructor: Il,
  isVideoTexture: !0,
  update: function() {
    var e = this.image;
    e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
  }
});
function Bi(e, t, n, r, i, a, o, s, c, l, u, h) {
  je.call(this, null, a, o, s, c, l, r, i, u, h), this.image = { width: t, height: n }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1;
}
Bi.prototype = Object.create(je.prototype);
Bi.prototype.constructor = Bi;
Bi.prototype.isCompressedTexture = !0;
function lo(e, t, n, r, i, a, o, s, c) {
  je.call(this, e, t, n, r, i, a, o, s, c), this.needsUpdate = !0;
}
lo.prototype = Object.create(je.prototype);
lo.prototype.constructor = lo;
lo.prototype.isCanvasTexture = !0;
function uo(e, t, n, r, i, a, o, s, c, l) {
  if (l = l !== void 0 ? l : Or, l !== Or && l !== Ai)
    throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
  n === void 0 && l === Or && (n = eo), n === void 0 && l === Ai && (n = wi), je.call(this, null, r, i, a, o, s, l, n, c), this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : st, this.minFilter = s !== void 0 ? s : st, this.flipY = !1, this.generateMipmaps = !1;
}
uo.prototype = Object.create(je.prototype);
uo.prototype.constructor = uo;
uo.prototype.isDepthTexture = !0;
function ho(e) {
  te.call(this), this.type = "WireframeGeometry";
  var t = [], n, r, i, a, o, s = [0, 0], c = {}, l, u, h, f, d = ["a", "b", "c"], m;
  if (e && e.isGeometry) {
    var g = e.faces;
    for (n = 0, i = g.length; n < i; n++) {
      var y = g[n];
      for (r = 0; r < 3; r++)
        u = y[d[r]], h = y[d[(r + 1) % 3]], s[0] = Math.min(u, h), s[1] = Math.max(u, h), f = s[0] + "," + s[1], c[f] === void 0 && (c[f] = { index1: s[0], index2: s[1] });
    }
    for (f in c)
      l = c[f], m = e.vertices[l.index1], t.push(m.x, m.y, m.z), m = e.vertices[l.index2], t.push(m.x, m.y, m.z);
  } else if (e && e.isBufferGeometry) {
    var p, v, _, b, x, T, A, D;
    if (m = new M(), e.index !== null) {
      for (p = e.attributes.position, v = e.index, _ = e.groups, _.length === 0 && (_ = [{ start: 0, count: v.count, materialIndex: 0 }]), a = 0, o = _.length; a < o; ++a)
        for (b = _[a], x = b.start, T = b.count, n = x, i = x + T; n < i; n += 3)
          for (r = 0; r < 3; r++)
            u = v.getX(n + r), h = v.getX(n + (r + 1) % 3), s[0] = Math.min(u, h), s[1] = Math.max(u, h), f = s[0] + "," + s[1], c[f] === void 0 && (c[f] = { index1: s[0], index2: s[1] });
      for (f in c)
        l = c[f], m.fromBufferAttribute(p, l.index1), t.push(m.x, m.y, m.z), m.fromBufferAttribute(p, l.index2), t.push(m.x, m.y, m.z);
    } else
      for (p = e.attributes.position, n = 0, i = p.count / 3; n < i; n++)
        for (r = 0; r < 3; r++)
          A = 3 * n + r, m.fromBufferAttribute(p, A), t.push(m.x, m.y, m.z), D = 3 * n + (r + 1) % 3, m.fromBufferAttribute(p, D), t.push(m.x, m.y, m.z);
  }
  this.setAttribute("position", new $(t, 3));
}
ho.prototype = Object.create(te.prototype);
ho.prototype.constructor = ho;
function fo(e, t, n) {
  ge.call(this), this.type = "ParametricGeometry", this.parameters = {
    func: e,
    slices: t,
    stacks: n
  }, this.fromBufferGeometry(new Ui(e, t, n)), this.mergeVertices();
}
fo.prototype = Object.create(ge.prototype);
fo.prototype.constructor = fo;
function Ui(e, t, n) {
  te.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
    func: e,
    slices: t,
    stacks: n
  };
  var r = [], i = [], a = [], o = [], s = 1e-5, c = new M(), l = new M(), u = new M(), h = new M(), f = new M(), d, m;
  e.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
  var g = t + 1;
  for (d = 0; d <= n; d++) {
    var y = d / n;
    for (m = 0; m <= t; m++) {
      var p = m / t;
      e(p, y, l), i.push(l.x, l.y, l.z), p - s >= 0 ? (e(p - s, y, u), h.subVectors(l, u)) : (e(p + s, y, u), h.subVectors(u, l)), y - s >= 0 ? (e(p, y - s, u), f.subVectors(l, u)) : (e(p, y + s, u), f.subVectors(u, l)), c.crossVectors(h, f).normalize(), a.push(c.x, c.y, c.z), o.push(p, y);
    }
  }
  for (d = 0; d < n; d++)
    for (m = 0; m < t; m++) {
      var v = d * g + m, _ = d * g + m + 1, b = (d + 1) * g + m + 1, x = (d + 1) * g + m;
      r.push(v, _, x), r.push(_, b, x);
    }
  this.setIndex(r), this.setAttribute("position", new $(i, 3)), this.setAttribute("normal", new $(a, 3)), this.setAttribute("uv", new $(o, 2));
}
Ui.prototype = Object.create(te.prototype);
Ui.prototype.constructor = Ui;
function po(e, t, n, r) {
  ge.call(this), this.type = "PolyhedronGeometry", this.parameters = {
    vertices: e,
    indices: t,
    radius: n,
    detail: r
  }, this.fromBufferGeometry(new Ot(e, t, n, r)), this.mergeVertices();
}
po.prototype = Object.create(ge.prototype);
po.prototype.constructor = po;
function Ot(e, t, n, r) {
  te.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
    vertices: e,
    indices: t,
    radius: n,
    detail: r
  }, n = n || 1, r = r || 0;
  var i = [], a = [];
  o(r), c(n), l(), this.setAttribute("position", new $(i, 3)), this.setAttribute("normal", new $(i.slice(), 3)), this.setAttribute("uv", new $(a, 2)), r === 0 ? this.computeVertexNormals() : this.normalizeNormals();
  function o(p) {
    for (var v = new M(), _ = new M(), b = new M(), x = 0; x < t.length; x += 3)
      f(t[x + 0], v), f(t[x + 1], _), f(t[x + 2], b), s(v, _, b, p);
  }
  function s(p, v, _, b) {
    var x = Math.pow(2, b), T = [], A, D;
    for (A = 0; A <= x; A++) {
      T[A] = [];
      var R = p.clone().lerp(_, A / x), V = v.clone().lerp(_, A / x), P = x - A;
      for (D = 0; D <= P; D++)
        D === 0 && A === x ? T[A][D] = R : T[A][D] = R.clone().lerp(V, D / P);
    }
    for (A = 0; A < x; A++)
      for (D = 0; D < 2 * (x - A) - 1; D++) {
        var I = Math.floor(D / 2);
        D % 2 === 0 ? (h(T[A][I + 1]), h(T[A + 1][I]), h(T[A][I])) : (h(T[A][I + 1]), h(T[A + 1][I + 1]), h(T[A + 1][I]));
      }
  }
  function c(p) {
    for (var v = new M(), _ = 0; _ < i.length; _ += 3)
      v.x = i[_ + 0], v.y = i[_ + 1], v.z = i[_ + 2], v.normalize().multiplyScalar(p), i[_ + 0] = v.x, i[_ + 1] = v.y, i[_ + 2] = v.z;
  }
  function l() {
    for (var p = new M(), v = 0; v < i.length; v += 3) {
      p.x = i[v + 0], p.y = i[v + 1], p.z = i[v + 2];
      var _ = g(p) / 2 / Math.PI + 0.5, b = y(p) / Math.PI + 0.5;
      a.push(_, 1 - b);
    }
    d(), u();
  }
  function u() {
    for (var p = 0; p < a.length; p += 6) {
      var v = a[p + 0], _ = a[p + 2], b = a[p + 4], x = Math.max(v, _, b), T = Math.min(v, _, b);
      x > 0.9 && T < 0.1 && (v < 0.2 && (a[p + 0] += 1), _ < 0.2 && (a[p + 2] += 1), b < 0.2 && (a[p + 4] += 1));
    }
  }
  function h(p) {
    i.push(p.x, p.y, p.z);
  }
  function f(p, v) {
    var _ = p * 3;
    v.x = e[_ + 0], v.y = e[_ + 1], v.z = e[_ + 2];
  }
  function d() {
    for (var p = new M(), v = new M(), _ = new M(), b = new M(), x = new U(), T = new U(), A = new U(), D = 0, R = 0; D < i.length; D += 9, R += 6) {
      p.set(i[D + 0], i[D + 1], i[D + 2]), v.set(i[D + 3], i[D + 4], i[D + 5]), _.set(i[D + 6], i[D + 7], i[D + 8]), x.set(a[R + 0], a[R + 1]), T.set(a[R + 2], a[R + 3]), A.set(a[R + 4], a[R + 5]), b.copy(p).add(v).add(_).divideScalar(3);
      var V = g(b);
      m(x, R + 0, p, V), m(T, R + 2, v, V), m(A, R + 4, _, V);
    }
  }
  function m(p, v, _, b) {
    b < 0 && p.x === 1 && (a[v] = p.x - 1), _.x === 0 && _.z === 0 && (a[v] = b / 2 / Math.PI + 0.5);
  }
  function g(p) {
    return Math.atan2(p.z, -p.x);
  }
  function y(p) {
    return Math.atan2(-p.y, Math.sqrt(p.x * p.x + p.z * p.z));
  }
}
Ot.prototype = Object.create(te.prototype);
Ot.prototype.constructor = Ot;
function vo(e, t) {
  ge.call(this), this.type = "TetrahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Gi(e, t)), this.mergeVertices();
}
vo.prototype = Object.create(ge.prototype);
vo.prototype.constructor = vo;
function Gi(e, t) {
  var n = [
    1,
    1,
    1,
    -1,
    -1,
    1,
    -1,
    1,
    -1,
    1,
    -1,
    -1
  ], r = [
    2,
    1,
    0,
    0,
    3,
    2,
    1,
    3,
    0,
    2,
    3,
    1
  ];
  Ot.call(this, n, r, e, t), this.type = "TetrahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  };
}
Gi.prototype = Object.create(Ot.prototype);
Gi.prototype.constructor = Gi;
function mo(e, t) {
  ge.call(this), this.type = "OctahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new zr(e, t)), this.mergeVertices();
}
mo.prototype = Object.create(ge.prototype);
mo.prototype.constructor = mo;
function zr(e, t) {
  var n = [
    1,
    0,
    0,
    -1,
    0,
    0,
    0,
    1,
    0,
    0,
    -1,
    0,
    0,
    0,
    1,
    0,
    0,
    -1
  ], r = [
    0,
    2,
    4,
    0,
    4,
    3,
    0,
    3,
    5,
    0,
    5,
    2,
    1,
    2,
    5,
    1,
    5,
    3,
    1,
    3,
    4,
    1,
    4,
    2
  ];
  Ot.call(this, n, r, e, t), this.type = "OctahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  };
}
zr.prototype = Object.create(Ot.prototype);
zr.prototype.constructor = zr;
function go(e, t) {
  ge.call(this), this.type = "IcosahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new zi(e, t)), this.mergeVertices();
}
go.prototype = Object.create(ge.prototype);
go.prototype.constructor = go;
function zi(e, t) {
  var n = (1 + Math.sqrt(5)) / 2, r = [
    -1,
    n,
    0,
    1,
    n,
    0,
    -1,
    -n,
    0,
    1,
    -n,
    0,
    0,
    -1,
    n,
    0,
    1,
    n,
    0,
    -1,
    -n,
    0,
    1,
    -n,
    n,
    0,
    -1,
    n,
    0,
    1,
    -n,
    0,
    -1,
    -n,
    0,
    1
  ], i = [
    0,
    11,
    5,
    0,
    5,
    1,
    0,
    1,
    7,
    0,
    7,
    10,
    0,
    10,
    11,
    1,
    5,
    9,
    5,
    11,
    4,
    11,
    10,
    2,
    10,
    7,
    6,
    7,
    1,
    8,
    3,
    9,
    4,
    3,
    4,
    2,
    3,
    2,
    6,
    3,
    6,
    8,
    3,
    8,
    9,
    4,
    9,
    5,
    2,
    4,
    11,
    6,
    2,
    10,
    8,
    6,
    7,
    9,
    8,
    1
  ];
  Ot.call(this, r, i, e, t), this.type = "IcosahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  };
}
zi.prototype = Object.create(Ot.prototype);
zi.prototype.constructor = zi;
function yo(e, t) {
  ge.call(this), this.type = "DodecahedronGeometry", this.parameters = {
    radius: e,
    detail: t
  }, this.fromBufferGeometry(new Hi(e, t)), this.mergeVertices();
}
yo.prototype = Object.create(ge.prototype);
yo.prototype.constructor = yo;
function Hi(e, t) {
  var n = (1 + Math.sqrt(5)) / 2, r = 1 / n, i = [
    // (±1, ±1, ±1)
    -1,
    -1,
    -1,
    -1,
    -1,
    1,
    -1,
    1,
    -1,
    -1,
    1,
    1,
    1,
    -1,
    -1,
    1,
    -1,
    1,
    1,
    1,
    -1,
    1,
    1,
    1,
    // (0, ±1/φ, ±φ)
    0,
    -r,
    -n,
    0,
    -r,
    n,
    0,
    r,
    -n,
    0,
    r,
    n,
    // (±1/φ, ±φ, 0)
    -r,
    -n,
    0,
    -r,
    n,
    0,
    r,
    -n,
    0,
    r,
    n,
    0,
    // (±φ, 0, ±1/φ)
    -n,
    0,
    -r,
    n,
    0,
    -r,
    -n,
    0,
    r,
    n,
    0,
    r
  ], a = [
    3,
    11,
    7,
    3,
    7,
    15,
    3,
    15,
    13,
    7,
    19,
    17,
    7,
    17,
    6,
    7,
    6,
    15,
    17,
    4,
    8,
    17,
    8,
    10,
    17,
    10,
    6,
    8,
    0,
    16,
    8,
    16,
    2,
    8,
    2,
    10,
    0,
    12,
    1,
    0,
    1,
    18,
    0,
    18,
    16,
    6,
    10,
    2,
    6,
    2,
    13,
    6,
    13,
    15,
    2,
    16,
    18,
    2,
    18,
    3,
    2,
    3,
    13,
    18,
    1,
    9,
    18,
    9,
    11,
    18,
    11,
    3,
    4,
    14,
    12,
    4,
    12,
    0,
    4,
    0,
    8,
    11,
    9,
    5,
    11,
    5,
    19,
    11,
    19,
    7,
    19,
    5,
    14,
    19,
    14,
    4,
    19,
    4,
    17,
    1,
    12,
    14,
    1,
    14,
    5,
    1,
    5,
    9
  ];
  Ot.call(this, i, a, e, t), this.type = "DodecahedronBufferGeometry", this.parameters = {
    radius: e,
    detail: t
  };
}
Hi.prototype = Object.create(Ot.prototype);
Hi.prototype.constructor = Hi;
function xo(e, t, n, r, i, a) {
  ge.call(this), this.type = "TubeGeometry", this.parameters = {
    path: e,
    tubularSegments: t,
    radius: n,
    radialSegments: r,
    closed: i
  }, a !== void 0 && console.warn("THREE.TubeGeometry: taper has been removed.");
  var o = new Hr(e, t, n, r, i);
  this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices();
}
xo.prototype = Object.create(ge.prototype);
xo.prototype.constructor = xo;
function Hr(e, t, n, r, i) {
  te.call(this), this.type = "TubeBufferGeometry", this.parameters = {
    path: e,
    tubularSegments: t,
    radius: n,
    radialSegments: r,
    closed: i
  }, t = t || 64, n = n || 1, r = r || 8, i = i || !1;
  var a = e.computeFrenetFrames(t, i);
  this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
  var o = new M(), s = new M(), c = new U(), l = new M(), u, h, f = [], d = [], m = [], g = [];
  y(), this.setIndex(g), this.setAttribute("position", new $(f, 3)), this.setAttribute("normal", new $(d, 3)), this.setAttribute("uv", new $(m, 2));
  function y() {
    for (u = 0; u < t; u++)
      p(u);
    p(i === !1 ? t : 0), _(), v();
  }
  function p(b) {
    l = e.getPointAt(b / t, l);
    var x = a.normals[b], T = a.binormals[b];
    for (h = 0; h <= r; h++) {
      var A = h / r * Math.PI * 2, D = Math.sin(A), R = -Math.cos(A);
      s.x = R * x.x + D * T.x, s.y = R * x.y + D * T.y, s.z = R * x.z + D * T.z, s.normalize(), d.push(s.x, s.y, s.z), o.x = l.x + n * s.x, o.y = l.y + n * s.y, o.z = l.z + n * s.z, f.push(o.x, o.y, o.z);
    }
  }
  function v() {
    for (h = 1; h <= t; h++)
      for (u = 1; u <= r; u++) {
        var b = (r + 1) * (h - 1) + (u - 1), x = (r + 1) * h + (u - 1), T = (r + 1) * h + u, A = (r + 1) * (h - 1) + u;
        g.push(b, x, A), g.push(x, T, A);
      }
  }
  function _() {
    for (u = 0; u <= t; u++)
      for (h = 0; h <= r; h++)
        c.x = u / t, c.y = h / r, m.push(c.x, c.y);
  }
}
Hr.prototype = Object.create(te.prototype);
Hr.prototype.constructor = Hr;
Hr.prototype.toJSON = function() {
  var e = te.prototype.toJSON.call(this);
  return e.path = this.parameters.path.toJSON(), e;
};
function _o(e, t, n, r, i, a, o) {
  ge.call(this), this.type = "TorusKnotGeometry", this.parameters = {
    radius: e,
    tube: t,
    tubularSegments: n,
    radialSegments: r,
    p: i,
    q: a
  }, o !== void 0 && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Vi(e, t, n, r, i, a)), this.mergeVertices();
}
_o.prototype = Object.create(ge.prototype);
_o.prototype.constructor = _o;
function Vi(e, t, n, r, i, a) {
  te.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
    radius: e,
    tube: t,
    tubularSegments: n,
    radialSegments: r,
    p: i,
    q: a
  }, e = e || 1, t = t || 0.4, n = Math.floor(n) || 64, r = Math.floor(r) || 8, i = i || 2, a = a || 3;
  var o = [], s = [], c = [], l = [], u, h, f = new M(), d = new M(), m = new M(), g = new M(), y = new M(), p = new M(), v = new M();
  for (u = 0; u <= n; ++u) {
    var _ = u / n * i * Math.PI * 2;
    for (P(_, i, a, e, m), P(_ + 0.01, i, a, e, g), p.subVectors(g, m), v.addVectors(g, m), y.crossVectors(p, v), v.crossVectors(y, p), y.normalize(), v.normalize(), h = 0; h <= r; ++h) {
      var b = h / r * Math.PI * 2, x = -t * Math.cos(b), T = t * Math.sin(b);
      f.x = m.x + (x * v.x + T * y.x), f.y = m.y + (x * v.y + T * y.y), f.z = m.z + (x * v.z + T * y.z), s.push(f.x, f.y, f.z), d.subVectors(f, m).normalize(), c.push(d.x, d.y, d.z), l.push(u / n), l.push(h / r);
    }
  }
  for (h = 1; h <= n; h++)
    for (u = 1; u <= r; u++) {
      var A = (r + 1) * (h - 1) + (u - 1), D = (r + 1) * h + (u - 1), R = (r + 1) * h + u, V = (r + 1) * (h - 1) + u;
      o.push(A, D, V), o.push(D, R, V);
    }
  this.setIndex(o), this.setAttribute("position", new $(s, 3)), this.setAttribute("normal", new $(c, 3)), this.setAttribute("uv", new $(l, 2));
  function P(I, F, H, C, z) {
    var k = Math.cos(I), j = Math.sin(I), X = H / F * I, Y = Math.cos(X);
    z.x = C * (2 + Y) * 0.5 * k, z.y = C * (2 + Y) * j * 0.5, z.z = C * Math.sin(X) * 0.5;
  }
}
Vi.prototype = Object.create(te.prototype);
Vi.prototype.constructor = Vi;
function Mo(e, t, n, r, i) {
  ge.call(this), this.type = "TorusGeometry", this.parameters = {
    radius: e,
    tube: t,
    radialSegments: n,
    tubularSegments: r,
    arc: i
  }, this.fromBufferGeometry(new ki(e, t, n, r, i)), this.mergeVertices();
}
Mo.prototype = Object.create(ge.prototype);
Mo.prototype.constructor = Mo;
function ki(e, t, n, r, i) {
  te.call(this), this.type = "TorusBufferGeometry", this.parameters = {
    radius: e,
    tube: t,
    radialSegments: n,
    tubularSegments: r,
    arc: i
  }, e = e || 1, t = t || 0.4, n = Math.floor(n) || 8, r = Math.floor(r) || 6, i = i || Math.PI * 2;
  var a = [], o = [], s = [], c = [], l = new M(), u = new M(), h = new M(), f, d;
  for (f = 0; f <= n; f++)
    for (d = 0; d <= r; d++) {
      var m = d / r * i, g = f / n * Math.PI * 2;
      u.x = (e + t * Math.cos(g)) * Math.cos(m), u.y = (e + t * Math.cos(g)) * Math.sin(m), u.z = t * Math.sin(g), o.push(u.x, u.y, u.z), l.x = e * Math.cos(m), l.y = e * Math.sin(m), h.subVectors(u, l).normalize(), s.push(h.x, h.y, h.z), c.push(d / r), c.push(f / n);
    }
  for (f = 1; f <= n; f++)
    for (d = 1; d <= r; d++) {
      var y = (r + 1) * f + d - 1, p = (r + 1) * (f - 1) + d - 1, v = (r + 1) * (f - 1) + d, _ = (r + 1) * f + d;
      a.push(y, p, _), a.push(p, v, _);
    }
  this.setIndex(a), this.setAttribute("position", new $(o, 3)), this.setAttribute("normal", new $(s, 3)), this.setAttribute("uv", new $(c, 2));
}
ki.prototype = Object.create(te.prototype);
ki.prototype.constructor = ki;
var tg = {
  triangulate: function(e, t, n) {
    n = n || 2;
    var r = t && t.length, i = r ? t[0] * n : e.length, a = Wu(e, 0, i, n, !0), o = [];
    if (!a || a.next === a.prev)
      return o;
    var s, c, l, u, h, f, d;
    if (r && (a = og(e, t, a, n)), e.length > 80 * n) {
      s = l = e[0], c = u = e[1];
      for (var m = n; m < i; m += n)
        h = e[m], f = e[m + 1], h < s && (s = h), f < c && (c = f), h > l && (l = h), f > u && (u = f);
      d = Math.max(l - s, u - c), d = d !== 0 ? 1 / d : 0;
    }
    return Wi(a, o, n, s, c, d), o;
  }
};
function Wu(e, t, n, r, i) {
  var a, o;
  if (i === gg(e, t, n, r) > 0)
    for (a = t; a < n; a += r)
      o = Ol(a, e[a], e[a + 1], o);
  else
    for (a = n - r; a >= t; a -= r)
      o = Ol(a, e[a], e[a + 1], o);
  return o && ko(o, o.next) && (Xi(o), o = o.next), o;
}
function Hn(e, t) {
  if (!e)
    return e;
  t || (t = e);
  var n = e, r;
  do
    if (r = !1, !n.steiner && (ko(n, n.next) || et(n.prev, n, n.next) === 0)) {
      if (Xi(n), n = t = n.prev, n === n.next)
        break;
      r = !0;
    } else
      n = n.next;
  while (r || n !== t);
  return t;
}
function Wi(e, t, n, r, i, a, o) {
  if (e) {
    !o && a && hg(e, r, i, a);
    for (var s = e, c, l; e.prev !== e.next; ) {
      if (c = e.prev, l = e.next, a ? rg(e, r, i, a) : ng(e)) {
        t.push(c.i / n), t.push(e.i / n), t.push(l.i / n), Xi(e), e = l.next, s = l.next;
        continue;
      }
      if (e = l, e === s) {
        o ? o === 1 ? (e = ig(Hn(e), t, n), Wi(e, t, n, r, i, a, 2)) : o === 2 && ag(e, t, n, r, i, a) : Wi(Hn(e), t, n, r, i, a, 1);
        break;
      }
    }
  }
}
function ng(e) {
  var t = e.prev, n = e, r = e.next;
  if (et(t, n, r) >= 0)
    return !1;
  for (var i = e.next.next; i !== e.prev; ) {
    if (Ir(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) && et(i.prev, i, i.next) >= 0)
      return !1;
    i = i.next;
  }
  return !0;
}
function rg(e, t, n, r) {
  var i = e.prev, a = e, o = e.next;
  if (et(i, a, o) >= 0)
    return !1;
  for (var s = i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, c = i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, l = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, u = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, h = qs(s, c, t, n, r), f = qs(l, u, t, n, r), d = e.prevZ, m = e.nextZ; d && d.z >= h && m && m.z <= f; ) {
    if (d !== e.prev && d !== e.next && Ir(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) && et(d.prev, d, d.next) >= 0 || (d = d.prevZ, m !== e.prev && m !== e.next && Ir(i.x, i.y, a.x, a.y, o.x, o.y, m.x, m.y) && et(m.prev, m, m.next) >= 0))
      return !1;
    m = m.nextZ;
  }
  for (; d && d.z >= h; ) {
    if (d !== e.prev && d !== e.next && Ir(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) && et(d.prev, d, d.next) >= 0)
      return !1;
    d = d.prevZ;
  }
  for (; m && m.z <= f; ) {
    if (m !== e.prev && m !== e.next && Ir(i.x, i.y, a.x, a.y, o.x, o.y, m.x, m.y) && et(m.prev, m, m.next) >= 0)
      return !1;
    m = m.nextZ;
  }
  return !0;
}
function ig(e, t, n) {
  var r = e;
  do {
    var i = r.prev, a = r.next.next;
    !ko(i, a) && qu(i, r, r.next, a) && qi(i, a) && qi(a, i) && (t.push(i.i / n), t.push(r.i / n), t.push(a.i / n), Xi(r), Xi(r.next), r = e = a), r = r.next;
  } while (r !== e);
  return Hn(r);
}
function ag(e, t, n, r, i, a) {
  var o = e;
  do {
    for (var s = o.next.next; s !== o.prev; ) {
      if (o.i !== s.i && pg(o, s)) {
        var c = Xu(o, s);
        o = Hn(o, o.next), c = Hn(c, c.next), Wi(o, t, n, r, i, a), Wi(c, t, n, r, i, a);
        return;
      }
      s = s.next;
    }
    o = o.next;
  } while (o !== e);
}
function og(e, t, n, r) {
  var i = [], a, o, s, c, l;
  for (a = 0, o = t.length; a < o; a++)
    s = t[a] * r, c = a < o - 1 ? t[a + 1] * r : e.length, l = Wu(e, s, c, r, !1), l === l.next && (l.steiner = !0), i.push(dg(l));
  for (i.sort(sg), a = 0; a < i.length; a++)
    cg(i[a], n), n = Hn(n, n.next);
  return n;
}
function sg(e, t) {
  return e.x - t.x;
}
function cg(e, t) {
  if (t = lg(e, t), t) {
    var n = Xu(t, e);
    Hn(t, t.next), Hn(n, n.next);
  }
}
function lg(e, t) {
  var n = t, r = e.x, i = e.y, a = -1 / 0, o;
  do {
    if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
      var s = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
      if (s <= r && s > a) {
        if (a = s, s === r) {
          if (i === n.y)
            return n;
          if (i === n.next.y)
            return n.next;
        }
        o = n.x < n.next.x ? n : n.next;
      }
    }
    n = n.next;
  } while (n !== t);
  if (!o)
    return null;
  if (r === a)
    return o;
  var c = o, l = o.x, u = o.y, h = 1 / 0, f;
  n = o;
  do
    r >= n.x && n.x >= l && r !== n.x && Ir(i < u ? r : a, i, l, u, i < u ? a : r, i, n.x, n.y) && (f = Math.abs(i - n.y) / (r - n.x), qi(n, e) && (f < h || f === h && (n.x > o.x || n.x === o.x && ug(o, n))) && (o = n, h = f)), n = n.next;
  while (n !== c);
  return o;
}
function ug(e, t) {
  return et(e.prev, e, t.prev) < 0 && et(t.next, e, e.next) < 0;
}
function hg(e, t, n, r) {
  var i = e;
  do
    i.z === null && (i.z = qs(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== e);
  i.prevZ.nextZ = null, i.prevZ = null, fg(i);
}
function fg(e) {
  var t, n, r, i, a, o, s, c, l = 1;
  do {
    for (n = e, e = null, a = null, o = 0; n; ) {
      for (o++, r = n, s = 0, t = 0; t < l && (s++, r = r.nextZ, !!r); t++)
        ;
      for (c = l; s > 0 || c > 0 && r; )
        s !== 0 && (c === 0 || !r || n.z <= r.z) ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, c--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
      n = r;
    }
    a.nextZ = null, l *= 2;
  } while (o > 1);
  return e;
}
function qs(e, t, n, r, i) {
  return e = 32767 * (e - n) * i, t = 32767 * (t - r) * i, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function dg(e) {
  var t = e, n = e;
  do
    (t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
  while (t !== e);
  return n;
}
function Ir(e, t, n, r, i, a, o, s) {
  return (i - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (r - s) - (n - o) * (t - s) >= 0 && (n - o) * (a - s) - (i - o) * (r - s) >= 0;
}
function pg(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !vg(e, t) && // dones't intersect other edges
  (qi(e, t) && qi(t, e) && mg(e, t) && // locally visible
  (et(e.prev, e, t.prev) || et(e, t.prev, t)) || // does not create opposite-facing sectors
  ko(e, t) && et(e.prev, e, e.next) > 0 && et(t.prev, t, t.next) > 0);
}
function et(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function ko(e, t) {
  return e.x === t.x && e.y === t.y;
}
function qu(e, t, n, r) {
  var i = za(et(e, t, n)), a = za(et(e, t, r)), o = za(et(n, r, e)), s = za(et(n, r, t));
  return !!(i !== a && o !== s || i === 0 && Ga(e, n, t) || a === 0 && Ga(e, r, t) || o === 0 && Ga(n, e, r) || s === 0 && Ga(n, t, r));
}
function Ga(e, t, n) {
  return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function za(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function vg(e, t) {
  var n = e;
  do {
    if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && qu(n, n.next, e, t))
      return !0;
    n = n.next;
  } while (n !== e);
  return !1;
}
function qi(e, t) {
  return et(e.prev, e, e.next) < 0 ? et(e, t, e.next) >= 0 && et(e, e.prev, t) >= 0 : et(e, t, e.prev) < 0 || et(e, e.next, t) < 0;
}
function mg(e, t) {
  var n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
  do
    n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
  while (n !== e);
  return r;
}
function Xu(e, t) {
  var n = new Xs(e.i, e.x, e.y), r = new Xs(t.i, t.x, t.y), i = e.next, a = t.prev;
  return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function Ol(e, t, n, r) {
  var i = new Xs(e, t, n);
  return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function Xi(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function Xs(e, t, n) {
  this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function gg(e, t, n, r) {
  for (var i = 0, a = t, o = n - r; a < n; a += r)
    i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
  return i;
}
var Bn = {
  // calculate area of the contour polygon
  area: function(e) {
    for (var t = e.length, n = 0, r = t - 1, i = 0; i < t; r = i++)
      n += e[r].x * e[i].y - e[i].x * e[r].y;
    return n * 0.5;
  },
  isClockWise: function(e) {
    return Bn.area(e) < 0;
  },
  triangulateShape: function(e, t) {
    var n = [], r = [], i = [];
    Nl(e), Fl(n, e);
    var a = e.length;
    t.forEach(Nl);
    for (var o = 0; o < t.length; o++)
      r.push(a), a += t[o].length, Fl(n, t[o]);
    for (var s = tg.triangulate(n, r), o = 0; o < s.length; o += 3)
      i.push(s.slice(o, o + 3));
    return i;
  }
};
function Nl(e) {
  var t = e.length;
  t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function Fl(e, t) {
  for (var n = 0; n < t.length; n++)
    e.push(t[n].x), e.push(t[n].y);
}
function Vr(e, t) {
  ge.call(this), this.type = "ExtrudeGeometry", this.parameters = {
    shapes: e,
    options: t
  }, this.fromBufferGeometry(new yn(e, t)), this.mergeVertices();
}
Vr.prototype = Object.create(ge.prototype);
Vr.prototype.constructor = Vr;
Vr.prototype.toJSON = function() {
  var e = ge.prototype.toJSON.call(this), t = this.parameters.shapes, n = this.parameters.options;
  return ju(t, n, e);
};
function yn(e, t) {
  te.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
    shapes: e,
    options: t
  }, e = Array.isArray(e) ? e : [e];
  for (var n = this, r = [], i = [], a = 0, o = e.length; a < o; a++) {
    var s = e[a];
    c(s);
  }
  this.setAttribute("position", new $(r, 3)), this.setAttribute("uv", new $(i, 2)), this.computeVertexNormals();
  function c(l) {
    var u = [], h = t.curveSegments !== void 0 ? t.curveSegments : 12, f = t.steps !== void 0 ? t.steps : 1, d = t.depth !== void 0 ? t.depth : 100, m = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, g = t.bevelThickness !== void 0 ? t.bevelThickness : 6, y = t.bevelSize !== void 0 ? t.bevelSize : g - 2, p = t.bevelOffset !== void 0 ? t.bevelOffset : 0, v = t.bevelSegments !== void 0 ? t.bevelSegments : 3, _ = t.extrudePath, b = t.UVGenerator !== void 0 ? t.UVGenerator : yg;
    t.amount !== void 0 && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), d = t.amount);
    var x, T = !1, A, D, R, V;
    _ && (x = _.getSpacedPoints(f), T = !0, m = !1, A = _.computeFrenetFrames(f, !1), D = new M(), R = new M(), V = new M()), m || (v = 0, g = 0, y = 0, p = 0);
    var P, I, F, H = l.extractPoints(h), C = H.shape, z = H.holes, k = !Bn.isClockWise(C);
    if (k)
      for (C = C.reverse(), I = 0, F = z.length; I < F; I++)
        P = z[I], Bn.isClockWise(P) && (z[I] = P.reverse());
    var j = Bn.triangulateShape(C, z), X = C;
    for (I = 0, F = z.length; I < F; I++)
      P = z[I], C = C.concat(P);
    function Y(ne, de, ue) {
      return de || console.error("THREE.ExtrudeGeometry: vec does not exist"), de.clone().multiplyScalar(ue).add(ne);
    }
    var oe, Pe, Be, Ue, xe, G = C.length, Xe, De = j.length;
    function Oe(ne, de, ue) {
      var me, L, ae, ce = ne.x - de.x, Le = ne.y - de.y, le = ue.x - ne.x, Fe = ue.y - ne.y, $e = ce * ce + Le * Le, ut = ce * Fe - Le * le;
      if (Math.abs(ut) > Number.EPSILON) {
        var Rt = Math.sqrt($e), Ye = Math.sqrt(le * le + Fe * Fe), _t = de.x - Le / Rt, Ct = de.y + ce / Rt, Vt = ue.x - Fe / Ye, ha = ue.y + le / Ye, fa = ((Vt - _t) * Fe - (ha - Ct) * le) / (ce * Fe - Le * le);
        me = _t + ce * fa - ne.x, L = Ct + Le * fa - ne.y;
        var da = me * me + L * L;
        if (da <= 2)
          return new U(me, L);
        ae = Math.sqrt(da / 2);
      } else {
        var w = !1;
        ce > Number.EPSILON ? le > Number.EPSILON && (w = !0) : ce < -Number.EPSILON ? le < -Number.EPSILON && (w = !0) : Math.sign(Le) === Math.sign(Fe) && (w = !0), w ? (me = -Le, L = ce, ae = Math.sqrt($e)) : (me = ce, L = Le, ae = Math.sqrt($e / 2));
      }
      return new U(me / ae, L / ae);
    }
    for (var re = [], W = 0, _e = X.length, We = _e - 1, Je = W + 1; W < _e; W++, We++, Je++)
      We === _e && (We = 0), Je === _e && (Je = 0), re[W] = Oe(X[W], X[We], X[Je]);
    var Et = [], lt, S = re.concat();
    for (I = 0, F = z.length; I < F; I++) {
      for (P = z[I], lt = [], W = 0, _e = P.length, We = _e - 1, Je = W + 1; W < _e; W++, We++, Je++)
        We === _e && (We = 0), Je === _e && (Je = 0), lt[W] = Oe(P[W], P[We], P[Je]);
      Et.push(lt), S = S.concat(lt);
    }
    for (oe = 0; oe < v; oe++) {
      for (Be = oe / v, Ue = g * Math.cos(Be * Math.PI / 2), Pe = y * Math.sin(Be * Math.PI / 2) + p, W = 0, _e = X.length; W < _e; W++)
        xe = Y(X[W], re[W], Pe), se(xe.x, xe.y, -Ue);
      for (I = 0, F = z.length; I < F; I++)
        for (P = z[I], lt = Et[I], W = 0, _e = P.length; W < _e; W++)
          xe = Y(P[W], lt[W], Pe), se(xe.x, xe.y, -Ue);
    }
    for (Pe = y + p, W = 0; W < G; W++)
      xe = m ? Y(C[W], S[W], Pe) : C[W], T ? (R.copy(A.normals[0]).multiplyScalar(xe.x), D.copy(A.binormals[0]).multiplyScalar(xe.y), V.copy(x[0]).add(R).add(D), se(V.x, V.y, V.z)) : se(xe.x, xe.y, 0);
    var E;
    for (E = 1; E <= f; E++)
      for (W = 0; W < G; W++)
        xe = m ? Y(C[W], S[W], Pe) : C[W], T ? (R.copy(A.normals[E]).multiplyScalar(xe.x), D.copy(A.binormals[E]).multiplyScalar(xe.y), V.copy(x[E]).add(R).add(D), se(V.x, V.y, V.z)) : se(xe.x, xe.y, d / f * E);
    for (oe = v - 1; oe >= 0; oe--) {
      for (Be = oe / v, Ue = g * Math.cos(Be * Math.PI / 2), Pe = y * Math.sin(Be * Math.PI / 2) + p, W = 0, _e = X.length; W < _e; W++)
        xe = Y(X[W], re[W], Pe), se(xe.x, xe.y, d + Ue);
      for (I = 0, F = z.length; I < F; I++)
        for (P = z[I], lt = Et[I], W = 0, _e = P.length; W < _e; W++)
          xe = Y(P[W], lt[W], Pe), T ? se(xe.x, xe.y + x[f - 1].y, x[f - 1].x + Ue) : se(xe.x, xe.y, d + Ue);
    }
    K(), q();
    function K() {
      var ne = r.length / 3;
      if (m) {
        var de = 0, ue = G * de;
        for (W = 0; W < De; W++)
          Xe = j[W], ie(Xe[2] + ue, Xe[1] + ue, Xe[0] + ue);
        for (de = f + v * 2, ue = G * de, W = 0; W < De; W++)
          Xe = j[W], ie(Xe[0] + ue, Xe[1] + ue, Xe[2] + ue);
      } else {
        for (W = 0; W < De; W++)
          Xe = j[W], ie(Xe[2], Xe[1], Xe[0]);
        for (W = 0; W < De; W++)
          Xe = j[W], ie(Xe[0] + G * f, Xe[1] + G * f, Xe[2] + G * f);
      }
      n.addGroup(ne, r.length / 3 - ne, 0);
    }
    function q() {
      var ne = r.length / 3, de = 0;
      for (Se(X, de), de += X.length, I = 0, F = z.length; I < F; I++)
        P = z[I], Se(P, de), de += P.length;
      n.addGroup(ne, r.length / 3 - ne, 1);
    }
    function Se(ne, de) {
      var ue, me;
      for (W = ne.length; --W >= 0; ) {
        ue = W, me = W - 1, me < 0 && (me = ne.length - 1);
        var L = 0, ae = f + v * 2;
        for (L = 0; L < ae; L++) {
          var ce = G * L, Le = G * (L + 1), le = de + ue + ce, Fe = de + me + ce, $e = de + me + Le, ut = de + ue + Le;
          Ge(le, Fe, $e, ut);
        }
      }
    }
    function se(ne, de, ue) {
      u.push(ne), u.push(de), u.push(ue);
    }
    function ie(ne, de, ue) {
      be(ne), be(de), be(ue);
      var me = r.length / 3, L = b.generateTopUV(n, r, me - 3, me - 2, me - 1);
      Me(L[0]), Me(L[1]), Me(L[2]);
    }
    function Ge(ne, de, ue, me) {
      be(ne), be(de), be(me), be(de), be(ue), be(me);
      var L = r.length / 3, ae = b.generateSideWallUV(n, r, L - 6, L - 3, L - 2, L - 1);
      Me(ae[0]), Me(ae[1]), Me(ae[3]), Me(ae[1]), Me(ae[2]), Me(ae[3]);
    }
    function be(ne) {
      r.push(u[ne * 3 + 0]), r.push(u[ne * 3 + 1]), r.push(u[ne * 3 + 2]);
    }
    function Me(ne) {
      i.push(ne.x), i.push(ne.y);
    }
  }
}
yn.prototype = Object.create(te.prototype);
yn.prototype.constructor = yn;
yn.prototype.toJSON = function() {
  var e = te.prototype.toJSON.call(this), t = this.parameters.shapes, n = this.parameters.options;
  return ju(t, n, e);
};
var yg = {
  generateTopUV: function(e, t, n, r, i) {
    var a = t[n * 3], o = t[n * 3 + 1], s = t[r * 3], c = t[r * 3 + 1], l = t[i * 3], u = t[i * 3 + 1];
    return [
      new U(a, o),
      new U(s, c),
      new U(l, u)
    ];
  },
  generateSideWallUV: function(e, t, n, r, i, a) {
    var o = t[n * 3], s = t[n * 3 + 1], c = t[n * 3 + 2], l = t[r * 3], u = t[r * 3 + 1], h = t[r * 3 + 2], f = t[i * 3], d = t[i * 3 + 1], m = t[i * 3 + 2], g = t[a * 3], y = t[a * 3 + 1], p = t[a * 3 + 2];
    return Math.abs(s - u) < 0.01 ? [
      new U(o, 1 - c),
      new U(l, 1 - h),
      new U(f, 1 - m),
      new U(g, 1 - p)
    ] : [
      new U(s, 1 - c),
      new U(u, 1 - h),
      new U(d, 1 - m),
      new U(y, 1 - p)
    ];
  }
};
function ju(e, t, n) {
  if (n.shapes = [], Array.isArray(e))
    for (var r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      n.shapes.push(a.uuid);
    }
  else
    n.shapes.push(e.uuid);
  return t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()), n;
}
function bo(e, t) {
  ge.call(this), this.type = "TextGeometry", this.parameters = {
    text: e,
    parameters: t
  }, this.fromBufferGeometry(new ji(e, t)), this.mergeVertices();
}
bo.prototype = Object.create(ge.prototype);
bo.prototype.constructor = bo;
function ji(e, t) {
  t = t || {};
  var n = t.font;
  if (!(n && n.isFont))
    return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new ge();
  var r = n.generateShapes(e, t.size);
  t.depth = t.height !== void 0 ? t.height : 50, t.bevelThickness === void 0 && (t.bevelThickness = 10), t.bevelSize === void 0 && (t.bevelSize = 8), t.bevelEnabled === void 0 && (t.bevelEnabled = !1), yn.call(this, r, t), this.type = "TextBufferGeometry";
}
ji.prototype = Object.create(yn.prototype);
ji.prototype.constructor = ji;
function wo(e, t, n, r, i, a, o) {
  ge.call(this), this.type = "SphereGeometry", this.parameters = {
    radius: e,
    widthSegments: t,
    heightSegments: n,
    phiStart: r,
    phiLength: i,
    thetaStart: a,
    thetaLength: o
  }, this.fromBufferGeometry(new kr(e, t, n, r, i, a, o)), this.mergeVertices();
}
wo.prototype = Object.create(ge.prototype);
wo.prototype.constructor = wo;
function kr(e, t, n, r, i, a, o) {
  te.call(this), this.type = "SphereBufferGeometry", this.parameters = {
    radius: e,
    widthSegments: t,
    heightSegments: n,
    phiStart: r,
    phiLength: i,
    thetaStart: a,
    thetaLength: o
  }, e = e || 1, t = Math.max(3, Math.floor(t) || 8), n = Math.max(2, Math.floor(n) || 6), r = r !== void 0 ? r : 0, i = i !== void 0 ? i : Math.PI * 2, a = a !== void 0 ? a : 0, o = o !== void 0 ? o : Math.PI;
  var s = Math.min(a + o, Math.PI), c, l, u = 0, h = [], f = new M(), d = new M(), m = [], g = [], y = [], p = [];
  for (l = 0; l <= n; l++) {
    var v = [], _ = l / n, b = 0;
    for (l == 0 && a == 0 ? b = 0.5 / t : l == n && s == Math.PI && (b = -0.5 / t), c = 0; c <= t; c++) {
      var x = c / t;
      f.x = -e * Math.cos(r + x * i) * Math.sin(a + _ * o), f.y = e * Math.cos(a + _ * o), f.z = e * Math.sin(r + x * i) * Math.sin(a + _ * o), g.push(f.x, f.y, f.z), d.copy(f).normalize(), y.push(d.x, d.y, d.z), p.push(x + b, 1 - _), v.push(u++);
    }
    h.push(v);
  }
  for (l = 0; l < n; l++)
    for (c = 0; c < t; c++) {
      var T = h[l][c + 1], A = h[l][c], D = h[l + 1][c], R = h[l + 1][c + 1];
      (l !== 0 || a > 0) && m.push(T, A, R), (l !== n - 1 || s < Math.PI) && m.push(A, D, R);
    }
  this.setIndex(m), this.setAttribute("position", new $(g, 3)), this.setAttribute("normal", new $(y, 3)), this.setAttribute("uv", new $(p, 2));
}
kr.prototype = Object.create(te.prototype);
kr.prototype.constructor = kr;
function So(e, t, n, r, i, a) {
  ge.call(this), this.type = "RingGeometry", this.parameters = {
    innerRadius: e,
    outerRadius: t,
    thetaSegments: n,
    phiSegments: r,
    thetaStart: i,
    thetaLength: a
  }, this.fromBufferGeometry(new Yi(e, t, n, r, i, a)), this.mergeVertices();
}
So.prototype = Object.create(ge.prototype);
So.prototype.constructor = So;
function Yi(e, t, n, r, i, a) {
  te.call(this), this.type = "RingBufferGeometry", this.parameters = {
    innerRadius: e,
    outerRadius: t,
    thetaSegments: n,
    phiSegments: r,
    thetaStart: i,
    thetaLength: a
  }, e = e || 0.5, t = t || 1, i = i !== void 0 ? i : 0, a = a !== void 0 ? a : Math.PI * 2, n = n !== void 0 ? Math.max(3, n) : 8, r = r !== void 0 ? Math.max(1, r) : 1;
  var o = [], s = [], c = [], l = [], u, h = e, f = (t - e) / r, d = new M(), m = new U(), g, y;
  for (g = 0; g <= r; g++) {
    for (y = 0; y <= n; y++)
      u = i + y / n * a, d.x = h * Math.cos(u), d.y = h * Math.sin(u), s.push(d.x, d.y, d.z), c.push(0, 0, 1), m.x = (d.x / t + 1) / 2, m.y = (d.y / t + 1) / 2, l.push(m.x, m.y);
    h += f;
  }
  for (g = 0; g < r; g++) {
    var p = g * (n + 1);
    for (y = 0; y < n; y++) {
      u = y + p;
      var v = u, _ = u + n + 1, b = u + n + 2, x = u + 1;
      o.push(v, _, x), o.push(_, b, x);
    }
  }
  this.setIndex(o), this.setAttribute("position", new $(s, 3)), this.setAttribute("normal", new $(c, 3)), this.setAttribute("uv", new $(l, 2));
}
Yi.prototype = Object.create(te.prototype);
Yi.prototype.constructor = Yi;
function Eo(e, t, n, r) {
  ge.call(this), this.type = "LatheGeometry", this.parameters = {
    points: e,
    segments: t,
    phiStart: n,
    phiLength: r
  }, this.fromBufferGeometry(new Zi(e, t, n, r)), this.mergeVertices();
}
Eo.prototype = Object.create(ge.prototype);
Eo.prototype.constructor = Eo;
function Zi(e, t, n, r) {
  te.call(this), this.type = "LatheBufferGeometry", this.parameters = {
    points: e,
    segments: t,
    phiStart: n,
    phiLength: r
  }, t = Math.floor(t) || 12, n = n || 0, r = r || Math.PI * 2, r = Ae.clamp(r, 0, Math.PI * 2);
  var i = [], a = [], o = [], s, c = 1 / t, l = new M(), u = new U(), h, f;
  for (h = 0; h <= t; h++) {
    var d = n + h * c * r, m = Math.sin(d), g = Math.cos(d);
    for (f = 0; f <= e.length - 1; f++)
      l.x = e[f].x * m, l.y = e[f].y, l.z = e[f].x * g, a.push(l.x, l.y, l.z), u.x = h / t, u.y = f / (e.length - 1), o.push(u.x, u.y);
  }
  for (h = 0; h < t; h++)
    for (f = 0; f < e.length - 1; f++) {
      s = f + h * e.length;
      var y = s, p = s + e.length, v = s + e.length + 1, _ = s + 1;
      i.push(y, p, _), i.push(p, v, _);
    }
  if (this.setIndex(i), this.setAttribute("position", new $(a, 3)), this.setAttribute("uv", new $(o, 2)), this.computeVertexNormals(), r === Math.PI * 2) {
    var b = this.attributes.normal.array, x = new M(), T = new M(), A = new M();
    for (s = t * e.length * 3, h = 0, f = 0; h < e.length; h++, f += 3)
      x.x = b[f + 0], x.y = b[f + 1], x.z = b[f + 2], T.x = b[s + f + 0], T.y = b[s + f + 1], T.z = b[s + f + 2], A.addVectors(x, T).normalize(), b[f + 0] = b[s + f + 0] = A.x, b[f + 1] = b[s + f + 1] = A.y, b[f + 2] = b[s + f + 2] = A.z;
  }
}
Zi.prototype = Object.create(te.prototype);
Zi.prototype.constructor = Zi;
function Wr(e, t) {
  ge.call(this), this.type = "ShapeGeometry", typeof t == "object" && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), t = t.curveSegments), this.parameters = {
    shapes: e,
    curveSegments: t
  }, this.fromBufferGeometry(new qr(e, t)), this.mergeVertices();
}
Wr.prototype = Object.create(ge.prototype);
Wr.prototype.constructor = Wr;
Wr.prototype.toJSON = function() {
  var e = ge.prototype.toJSON.call(this), t = this.parameters.shapes;
  return Yu(t, e);
};
function qr(e, t) {
  te.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
    shapes: e,
    curveSegments: t
  }, t = t || 12;
  var n = [], r = [], i = [], a = [], o = 0, s = 0;
  if (Array.isArray(e) === !1)
    l(e);
  else
    for (var c = 0; c < e.length; c++)
      l(e[c]), this.addGroup(o, s, c), o += s, s = 0;
  this.setIndex(n), this.setAttribute("position", new $(r, 3)), this.setAttribute("normal", new $(i, 3)), this.setAttribute("uv", new $(a, 2));
  function l(u) {
    var h, f, d, m = r.length / 3, g = u.extractPoints(t), y = g.shape, p = g.holes;
    for (Bn.isClockWise(y) === !1 && (y = y.reverse()), h = 0, f = p.length; h < f; h++)
      d = p[h], Bn.isClockWise(d) === !0 && (p[h] = d.reverse());
    var v = Bn.triangulateShape(y, p);
    for (h = 0, f = p.length; h < f; h++)
      d = p[h], y = y.concat(d);
    for (h = 0, f = y.length; h < f; h++) {
      var _ = y[h];
      r.push(_.x, _.y, 0), i.push(0, 0, 1), a.push(_.x, _.y);
    }
    for (h = 0, f = v.length; h < f; h++) {
      var b = v[h], x = b[0] + m, T = b[1] + m, A = b[2] + m;
      n.push(x, T, A), s += 3;
    }
  }
}
qr.prototype = Object.create(te.prototype);
qr.prototype.constructor = qr;
qr.prototype.toJSON = function() {
  var e = te.prototype.toJSON.call(this), t = this.parameters.shapes;
  return Yu(t, e);
};
function Yu(e, t) {
  if (t.shapes = [], Array.isArray(e))
    for (var n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.shapes.push(i.uuid);
    }
  else
    t.shapes.push(e.uuid);
  return t;
}
function To(e, t) {
  te.call(this), this.type = "EdgesGeometry", this.parameters = {
    thresholdAngle: t
  }, t = t !== void 0 ? t : 1;
  var n = [], r = Math.cos(Ae.DEG2RAD * t), i = [0, 0], a = {}, o, s, c, l = ["a", "b", "c"], u;
  e.isBufferGeometry ? (u = new ge(), u.fromBufferGeometry(e)) : u = e.clone(), u.mergeVertices(), u.computeFaceNormals();
  for (var h = u.vertices, f = u.faces, d = 0, m = f.length; d < m; d++)
    for (var g = f[d], y = 0; y < 3; y++)
      o = g[l[y]], s = g[l[(y + 1) % 3]], i[0] = Math.min(o, s), i[1] = Math.max(o, s), c = i[0] + "," + i[1], a[c] === void 0 ? a[c] = { index1: i[0], index2: i[1], face1: d, face2: void 0 } : a[c].face2 = d;
  for (c in a) {
    var p = a[c];
    if (p.face2 === void 0 || f[p.face1].normal.dot(f[p.face2].normal) <= r) {
      var v = h[p.index1];
      n.push(v.x, v.y, v.z), v = h[p.index2], n.push(v.x, v.y, v.z);
    }
  }
  this.setAttribute("position", new $(n, 3));
}
To.prototype = Object.create(te.prototype);
To.prototype.constructor = To;
function Xr(e, t, n, r, i, a, o, s) {
  ge.call(this), this.type = "CylinderGeometry", this.parameters = {
    radiusTop: e,
    radiusBottom: t,
    height: n,
    radialSegments: r,
    heightSegments: i,
    openEnded: a,
    thetaStart: o,
    thetaLength: s
  }, this.fromBufferGeometry(new Vn(e, t, n, r, i, a, o, s)), this.mergeVertices();
}
Xr.prototype = Object.create(ge.prototype);
Xr.prototype.constructor = Xr;
function Vn(e, t, n, r, i, a, o, s) {
  te.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
    radiusTop: e,
    radiusBottom: t,
    height: n,
    radialSegments: r,
    heightSegments: i,
    openEnded: a,
    thetaStart: o,
    thetaLength: s
  };
  var c = this;
  e = e !== void 0 ? e : 1, t = t !== void 0 ? t : 1, n = n || 1, r = Math.floor(r) || 8, i = Math.floor(i) || 1, a = a !== void 0 ? a : !1, o = o !== void 0 ? o : 0, s = s !== void 0 ? s : Math.PI * 2;
  var l = [], u = [], h = [], f = [], d = 0, m = [], g = n / 2, y = 0;
  p(), a === !1 && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(l), this.setAttribute("position", new $(u, 3)), this.setAttribute("normal", new $(h, 3)), this.setAttribute("uv", new $(f, 2));
  function p() {
    var _, b, x = new M(), T = new M(), A = 0, D = (t - e) / n;
    for (b = 0; b <= i; b++) {
      var R = [], V = b / i, P = V * (t - e) + e;
      for (_ = 0; _ <= r; _++) {
        var I = _ / r, F = I * s + o, H = Math.sin(F), C = Math.cos(F);
        T.x = P * H, T.y = -V * n + g, T.z = P * C, u.push(T.x, T.y, T.z), x.set(H, D, C).normalize(), h.push(x.x, x.y, x.z), f.push(I, 1 - V), R.push(d++);
      }
      m.push(R);
    }
    for (_ = 0; _ < r; _++)
      for (b = 0; b < i; b++) {
        var z = m[b][_], k = m[b + 1][_], j = m[b + 1][_ + 1], X = m[b][_ + 1];
        l.push(z, k, X), l.push(k, j, X), A += 6;
      }
    c.addGroup(y, A, 0), y += A;
  }
  function v(_) {
    var b, x, T, A = new U(), D = new M(), R = 0, V = _ === !0 ? e : t, P = _ === !0 ? 1 : -1;
    for (x = d, b = 1; b <= r; b++)
      u.push(0, g * P, 0), h.push(0, P, 0), f.push(0.5, 0.5), d++;
    for (T = d, b = 0; b <= r; b++) {
      var I = b / r, F = I * s + o, H = Math.cos(F), C = Math.sin(F);
      D.x = V * C, D.y = g * P, D.z = V * H, u.push(D.x, D.y, D.z), h.push(0, P, 0), A.x = H * 0.5 + 0.5, A.y = C * 0.5 * P + 0.5, f.push(A.x, A.y), d++;
    }
    for (b = 0; b < r; b++) {
      var z = x + b, k = T + b;
      _ === !0 ? l.push(k, k + 1, z) : l.push(k + 1, k, z), R += 3;
    }
    c.addGroup(y, R, _ === !0 ? 1 : 2), y += R;
  }
}
Vn.prototype = Object.create(te.prototype);
Vn.prototype.constructor = Vn;
function Ao(e, t, n, r, i, a, o) {
  Xr.call(this, 0, e, t, n, r, i, a, o), this.type = "ConeGeometry", this.parameters = {
    radius: e,
    height: t,
    radialSegments: n,
    heightSegments: r,
    openEnded: i,
    thetaStart: a,
    thetaLength: o
  };
}
Ao.prototype = Object.create(Xr.prototype);
Ao.prototype.constructor = Ao;
function Lo(e, t, n, r, i, a, o) {
  Vn.call(this, 0, e, t, n, r, i, a, o), this.type = "ConeBufferGeometry", this.parameters = {
    radius: e,
    height: t,
    radialSegments: n,
    heightSegments: r,
    openEnded: i,
    thetaStart: a,
    thetaLength: o
  };
}
Lo.prototype = Object.create(Vn.prototype);
Lo.prototype.constructor = Lo;
function Ro(e, t, n, r) {
  ge.call(this), this.type = "CircleGeometry", this.parameters = {
    radius: e,
    segments: t,
    thetaStart: n,
    thetaLength: r
  }, this.fromBufferGeometry(new Ji(e, t, n, r)), this.mergeVertices();
}
Ro.prototype = Object.create(ge.prototype);
Ro.prototype.constructor = Ro;
function Ji(e, t, n, r) {
  te.call(this), this.type = "CircleBufferGeometry", this.parameters = {
    radius: e,
    segments: t,
    thetaStart: n,
    thetaLength: r
  }, e = e || 1, t = t !== void 0 ? Math.max(3, t) : 8, n = n !== void 0 ? n : 0, r = r !== void 0 ? r : Math.PI * 2;
  var i = [], a = [], o = [], s = [], c, l, u = new M(), h = new U();
  for (a.push(0, 0, 0), o.push(0, 0, 1), s.push(0.5, 0.5), l = 0, c = 3; l <= t; l++, c += 3) {
    var f = n + l / t * r;
    u.x = e * Math.cos(f), u.y = e * Math.sin(f), a.push(u.x, u.y, u.z), o.push(0, 0, 1), h.x = (a[c] / e + 1) / 2, h.y = (a[c + 1] / e + 1) / 2, s.push(h.x, h.y);
  }
  for (c = 1; c <= t; c++)
    i.push(c, c + 1, 0);
  this.setIndex(i), this.setAttribute("position", new $(a, 3)), this.setAttribute("normal", new $(o, 3)), this.setAttribute("uv", new $(s, 2));
}
Ji.prototype = Object.create(te.prototype);
Ji.prototype.constructor = Ji;
var bt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WireframeGeometry: ho,
  ParametricGeometry: fo,
  ParametricBufferGeometry: Ui,
  TetrahedronGeometry: vo,
  TetrahedronBufferGeometry: Gi,
  OctahedronGeometry: mo,
  OctahedronBufferGeometry: zr,
  IcosahedronGeometry: go,
  IcosahedronBufferGeometry: zi,
  DodecahedronGeometry: yo,
  DodecahedronBufferGeometry: Hi,
  PolyhedronGeometry: po,
  PolyhedronBufferGeometry: Ot,
  TubeGeometry: xo,
  TubeBufferGeometry: Hr,
  TorusKnotGeometry: _o,
  TorusKnotBufferGeometry: Vi,
  TorusGeometry: Mo,
  TorusBufferGeometry: ki,
  TextGeometry: bo,
  TextBufferGeometry: ji,
  SphereGeometry: wo,
  SphereBufferGeometry: kr,
  RingGeometry: So,
  RingBufferGeometry: Yi,
  PlaneGeometry: ao,
  PlaneBufferGeometry: Gr,
  LatheGeometry: Eo,
  LatheBufferGeometry: Zi,
  ShapeGeometry: Wr,
  ShapeBufferGeometry: qr,
  ExtrudeGeometry: Vr,
  ExtrudeBufferGeometry: yn,
  EdgesGeometry: To,
  ConeGeometry: Ao,
  ConeBufferGeometry: Lo,
  CylinderGeometry: Xr,
  CylinderBufferGeometry: Vn,
  CircleGeometry: Ro,
  CircleBufferGeometry: Ji,
  BoxGeometry: id,
  BoxBufferGeometry: Vo
});
function jr(e) {
  ve.call(this), this.type = "ShadowMaterial", this.color = new ee(0), this.transparent = !0, this.setValues(e);
}
jr.prototype = Object.create(ve.prototype);
jr.prototype.constructor = jr;
jr.prototype.isShadowMaterial = !0;
jr.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.color.copy(e.color), this;
};
function kn(e) {
  Lt.call(this, e), this.type = "RawShaderMaterial";
}
kn.prototype = Object.create(Lt.prototype);
kn.prototype.constructor = kn;
kn.prototype.isRawShaderMaterial = !0;
function xn(e) {
  ve.call(this), this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new ee(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ni, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.vertexTangents = !1, this.setValues(e);
}
xn.prototype = Object.create(ve.prototype);
xn.prototype.constructor = xn;
xn.prototype.isMeshStandardMaterial = !0;
xn.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.vertexTangents = e.vertexTangents, this;
};
function Yr(e) {
  xn.call(this), this.defines = {
    STANDARD: "",
    PHYSICAL: ""
  }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new U(1, 1), this.clearcoatNormalMap = null, this.reflectivity = 0.5, this.sheen = null, this.transparency = 0, this.setValues(e);
}
Yr.prototype = Object.create(xn.prototype);
Yr.prototype.constructor = Yr;
Yr.prototype.isMeshPhysicalMaterial = !0;
Yr.prototype.copy = function(e) {
  return xn.prototype.copy.call(this, e), this.defines = {
    STANDARD: "",
    PHYSICAL: ""
  }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.reflectivity = e.reflectivity, e.sheen ? this.sheen = (this.sheen || new ee()).copy(e.sheen) : this.sheen = null, this.transparency = e.transparency, this;
};
function sr(e) {
  ve.call(this), this.type = "MeshPhongMaterial", this.color = new ee(16777215), this.specular = new ee(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ni, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Uo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
sr.prototype = Object.create(ve.prototype);
sr.prototype.constructor = sr;
sr.prototype.isMeshPhongMaterial = !0;
sr.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function Zr(e) {
  ve.call(this), this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new ee(16777215), this.specular = new ee(1118481), this.shininess = 30, this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ni, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
Zr.prototype = Object.create(ve.prototype);
Zr.prototype.constructor = Zr;
Zr.prototype.isMeshToonMaterial = !0;
Zr.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function Jr(e) {
  ve.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ni, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
Jr.prototype = Object.create(ve.prototype);
Jr.prototype.constructor = Jr;
Jr.prototype.isMeshNormalMaterial = !0;
Jr.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function $r(e) {
  ve.call(this), this.type = "MeshLambertMaterial", this.color = new ee(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Uo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
$r.prototype = Object.create(ve.prototype);
$r.prototype.constructor = $r;
$r.prototype.isMeshLambertMaterial = !0;
$r.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function Qr(e) {
  ve.call(this), this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new ee(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ni, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e);
}
Qr.prototype = Object.create(ve.prototype);
Qr.prototype.constructor = Qr;
Qr.prototype.isMeshMatcapMaterial = !0;
Qr.prototype.copy = function(e) {
  return ve.prototype.copy.call(this, e), this.defines = { MATCAP: "" }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this;
};
function Kr(e) {
  at.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e);
}
Kr.prototype = Object.create(at.prototype);
Kr.prototype.constructor = Kr;
Kr.prototype.isLineDashedMaterial = !0;
Kr.prototype.copy = function(e) {
  return at.prototype.copy.call(this, e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this;
};
var xg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ShadowMaterial: jr,
  SpriteMaterial: ar,
  RawShaderMaterial: kn,
  ShaderMaterial: Lt,
  PointsMaterial: or,
  MeshPhysicalMaterial: Yr,
  MeshStandardMaterial: xn,
  MeshPhongMaterial: sr,
  MeshToonMaterial: Zr,
  MeshNormalMaterial: Jr,
  MeshLambertMaterial: $r,
  MeshDepthMaterial: rr,
  MeshDistanceMaterial: ir,
  MeshBasicMaterial: $t,
  MeshMatcapMaterial: Qr,
  LineDashedMaterial: Kr,
  LineBasicMaterial: at,
  Material: ve
}), Ke = {
  // same as Array.prototype.slice, but also works on typed arrays
  arraySlice: function(e, t, n) {
    return Ke.isTypedArray(e) ? new e.constructor(e.subarray(t, n !== void 0 ? n : e.length)) : e.slice(t, n);
  },
  // converts an array to a specific type
  convertArray: function(e, t, n) {
    return !e || // let 'undefined' and 'null' pass
    !n && e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
  },
  isTypedArray: function(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
  },
  // returns an array by which times and values can be sorted
  getKeyframeOrder: function(e) {
    function t(a, o) {
      return e[a] - e[o];
    }
    for (var n = e.length, r = new Array(n), i = 0; i !== n; ++i)
      r[i] = i;
    return r.sort(t), r;
  },
  // uses the array previously returned by 'getKeyframeOrder' to sort data
  sortedArray: function(e, t, n) {
    for (var r = e.length, i = new e.constructor(r), a = 0, o = 0; o !== r; ++a)
      for (var s = n[a] * t, c = 0; c !== t; ++c)
        i[o++] = e[s + c];
    return i;
  },
  // function for parsing AOS keyframe formats
  flattenJSON: function(e, t, n, r) {
    for (var i = 1, a = e[0]; a !== void 0 && a[r] === void 0; )
      a = e[i++];
    if (a !== void 0) {
      var o = a[r];
      if (o !== void 0)
        if (Array.isArray(o))
          do
            o = a[r], o !== void 0 && (t.push(a.time), n.push.apply(n, o)), a = e[i++];
          while (a !== void 0);
        else if (o.toArray !== void 0)
          do
            o = a[r], o !== void 0 && (t.push(a.time), o.toArray(n, n.length)), a = e[i++];
          while (a !== void 0);
        else
          do
            o = a[r], o !== void 0 && (t.push(a.time), n.push(o)), a = e[i++];
          while (a !== void 0);
    }
  },
  subclip: function(e, t, n, r, i) {
    i = i || 30;
    var a = e.clone();
    a.name = t;
    for (var o = [], s = 0; s < a.tracks.length; ++s) {
      for (var c = a.tracks[s], l = c.getValueSize(), u = [], h = [], f = 0; f < c.times.length; ++f) {
        var d = c.times[f] * i;
        if (!(d < n || d >= r)) {
          u.push(c.times[f]);
          for (var m = 0; m < l; ++m)
            h.push(c.values[f * l + m]);
        }
      }
      u.length !== 0 && (c.times = Ke.convertArray(u, c.times.constructor), c.values = Ke.convertArray(h, c.values.constructor), o.push(c));
    }
    a.tracks = o;
    for (var g = 1 / 0, s = 0; s < a.tracks.length; ++s)
      g > a.tracks[s].times[0] && (g = a.tracks[s].times[0]);
    for (var s = 0; s < a.tracks.length; ++s)
      a.tracks[s].shift(-1 * g);
    return a.resetDuration(), a;
  },
  makeClipAdditive: function(e, t, n, r) {
    t === void 0 && (t = 0), n === void 0 && (n = e), (r === void 0 || r <= 0) && (r = 30);
    for (var i = e.tracks.length, a = t / r, o = 0; o < i; ++o) {
      var s = n.tracks[o], c = s.ValueTypeName;
      if (!(c === "bool" || c === "string")) {
        var l = e.tracks.find(function(b) {
          return b.name === s.name && b.ValueTypeName === c;
        });
        if (l !== void 0) {
          var u = s.getValueSize(), h = s.times.length - 1, f;
          if (a <= s.times[0])
            f = Ke.arraySlice(s.values, 0, s.valueSize);
          else if (a >= s.times[h]) {
            var d = h * u;
            f = Ke.arraySlice(s.values, d);
          } else {
            var m = s.createInterpolant();
            m.evaluate(a), f = m.resultBuffer;
          }
          if (c === "quaternion") {
            var g = new dt(
              f[0],
              f[1],
              f[2],
              f[3]
            ).normalize().conjugate();
            g.toArray(f);
          }
          for (var y = l.times.length, p = 0; p < y; ++p) {
            var v = p * u;
            if (c === "quaternion")
              dt.multiplyQuaternionsFlat(
                l.values,
                v,
                f,
                0,
                l.values,
                v
              );
            else
              for (var _ = 0; _ < u; ++_)
                l.values[v + _] -= f[_];
          }
        }
      }
    }
    return e.blendMode = Su, e;
  }
};
function Ut(e, t, n, r) {
  this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r !== void 0 ? r : new t.constructor(n), this.sampleValues = t, this.valueSize = n;
}
Object.assign(Ut.prototype, {
  evaluate: function(e) {
    var t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
    e: {
      t: {
        var a;
        n: {
          r:
            if (!(e < r)) {
              for (var o = n + 2; ; ) {
                if (r === void 0) {
                  if (e < i)
                    break r;
                  return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, i);
                }
                if (n === o)
                  break;
                if (i = r, r = t[++n], e < r)
                  break t;
              }
              a = t.length;
              break n;
            }
          if (!(e >= i)) {
            var s = t[1];
            e < s && (n = 2, i = s);
            for (var o = n - 2; ; ) {
              if (i === void 0)
                return this._cachedIndex = 0, this.beforeStart_(0, e, r);
              if (n === o)
                break;
              if (r = i, i = t[--n - 1], e >= i)
                break t;
            }
            a = n, n = 0;
            break n;
          }
          break e;
        }
        for (; n < a; ) {
          var c = n + a >>> 1;
          e < t[c] ? a = c : n = c + 1;
        }
        if (r = t[n], i = t[n - 1], i === void 0)
          return this._cachedIndex = 0, this.beforeStart_(0, e, r);
        if (r === void 0)
          return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, i, e);
      }
      this._cachedIndex = n, this.intervalChanged_(n, i, r);
    }
    return this.interpolate_(n, i, e, r);
  },
  settings: null,
  // optional, subclass-specific settings structure
  // Note: The indirection allows central control of many interpolants.
  // --- Protected interface
  DefaultSettings_: {},
  getSettings_: function() {
    return this.settings || this.DefaultSettings_;
  },
  copySampleValue_: function(e) {
    for (var t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r, a = 0; a !== r; ++a)
      t[a] = n[i + a];
    return t;
  },
  // Template methods for derived classes:
  interpolate_: function() {
    throw new Error("call to abstract method");
  },
  intervalChanged_: function() {
  }
});
Object.assign(Ut.prototype, {
  //( 0, t, t0 ), returns this.resultBuffer
  beforeStart_: Ut.prototype.copySampleValue_,
  //( N-1, tN-1, t ), returns this.resultBuffer
  afterEnd_: Ut.prototype.copySampleValue_
});
function js(e, t, n, r) {
  Ut.call(this, e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0;
}
js.prototype = Object.assign(Object.create(Ut.prototype), {
  constructor: js,
  DefaultSettings_: {
    endingStart: Fr,
    endingEnd: Fr
  },
  intervalChanged_: function(e, t, n) {
    var r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case Rr:
          i = e, o = 2 * t - n;
          break;
        case ro:
          i = r.length - 2, o = t + r[i] - r[i + 1];
          break;
        default:
          i = e, o = n;
      }
    if (s === void 0)
      switch (this.getSettings_().endingEnd) {
        case Rr:
          a = e, s = 2 * n - t;
          break;
        case ro:
          a = 1, s = n + r[1] - r[0];
          break;
        default:
          a = e - 1, s = t;
      }
    var c = (n - t) * 0.5, l = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
  },
  interpolate_: function(e, t, n, r) {
    for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, h = this._weightPrev, f = this._weightNext, d = (n - t) / (r - t), m = d * d, g = m * d, y = -h * g + 2 * h * m - h * d, p = (1 + h) * g + (-1.5 - 2 * h) * m + (-0.5 + h) * d + 1, v = (-1 - f) * g + (1.5 + f) * m + 0.5 * d, _ = f * g - f * m, b = 0; b !== o; ++b)
      i[b] = y * a[l + b] + p * a[c + b] + v * a[s + b] + _ * a[u + b];
    return i;
  }
});
function Co(e, t, n, r) {
  Ut.call(this, e, t, n, r);
}
Co.prototype = Object.assign(Object.create(Ut.prototype), {
  constructor: Co,
  interpolate_: function(e, t, n, r) {
    for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l, h = 0; h !== o; ++h)
      i[h] = a[c + h] * u + a[s + h] * l;
    return i;
  }
});
function Ys(e, t, n, r) {
  Ut.call(this, e, t, n, r);
}
Ys.prototype = Object.assign(Object.create(Ut.prototype), {
  constructor: Ys,
  interpolate_: function(e) {
    return this.copySampleValue_(e - 1);
  }
});
function xt(e, t, n, r) {
  if (e === void 0)
    throw new Error("THREE.KeyframeTrack: track name is undefined");
  if (t === void 0 || t.length === 0)
    throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
  this.name = e, this.times = Ke.convertArray(t, this.TimeBufferType), this.values = Ke.convertArray(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
}
Object.assign(xt, {
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  toJSON: function(e) {
    var t = e.constructor, n;
    if (t.toJSON !== void 0)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Ke.convertArray(e.times, Array),
        values: Ke.convertArray(e.values, Array)
      };
      var r = e.getInterpolation();
      r !== e.DefaultInterpolation && (n.interpolation = r);
    }
    return n.type = e.ValueTypeName, n;
  }
});
Object.assign(xt.prototype, {
  constructor: xt,
  TimeBufferType: Float32Array,
  ValueBufferType: Float32Array,
  DefaultInterpolation: $a,
  InterpolantFactoryMethodDiscrete: function(e) {
    return new Ys(this.times, this.values, this.getValueSize(), e);
  },
  InterpolantFactoryMethodLinear: function(e) {
    return new Co(this.times, this.values, this.getValueSize(), e);
  },
  InterpolantFactoryMethodSmooth: function(e) {
    return new js(this.times, this.values, this.getValueSize(), e);
  },
  setInterpolation: function(e) {
    var t;
    switch (e) {
      case no:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case $a:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case qo:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  },
  getInterpolation: function() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return no;
      case this.InterpolantFactoryMethodLinear:
        return $a;
      case this.InterpolantFactoryMethodSmooth:
        return qo;
    }
  },
  getValueSize: function() {
    return this.values.length / this.times.length;
  },
  // move all keyframes either forwards or backwards in time
  shift: function(e) {
    if (e !== 0)
      for (var t = this.times, n = 0, r = t.length; n !== r; ++n)
        t[n] += e;
    return this;
  },
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale: function(e) {
    if (e !== 1)
      for (var t = this.times, n = 0, r = t.length; n !== r; ++n)
        t[n] *= e;
    return this;
  },
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim: function(e, t) {
    for (var n = this.times, r = n.length, i = 0, a = r - 1; i !== r && n[i] < e; )
      ++i;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, i !== 0 || a !== r) {
      i >= a && (a = Math.max(a, 1), i = a - 1);
      var o = this.getValueSize();
      this.times = Ke.arraySlice(n, i, a), this.values = Ke.arraySlice(this.values, i * o, a * o);
    }
    return this;
  },
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate: function() {
    var e = !0, t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    var n = this.times, r = this.values, i = n.length;
    i === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    for (var a = null, o = 0; o !== i; o++) {
      var s = n[o];
      if (typeof s == "number" && isNaN(s)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), e = !1;
        break;
      }
      if (a !== null && a > s) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), e = !1;
        break;
      }
      a = s;
    }
    if (r !== void 0 && Ke.isTypedArray(r))
      for (var o = 0, c = r.length; o !== c; ++o) {
        var l = r[o];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), e = !1;
          break;
        }
      }
    return e;
  },
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize: function() {
    for (var e = Ke.arraySlice(this.times), t = Ke.arraySlice(this.values), n = this.getValueSize(), r = this.getInterpolation() === qo, i = 1, a = e.length - 1, o = 1; o < a; ++o) {
      var s = !1, c = e[o], l = e[o + 1];
      if (c !== l && (o !== 1 || c !== c[0]))
        if (r)
          s = !0;
        else
          for (var u = o * n, h = u - n, f = u + n, d = 0; d !== n; ++d) {
            var m = t[u + d];
            if (m !== t[h + d] || m !== t[f + d]) {
              s = !0;
              break;
            }
          }
      if (s) {
        if (o !== i) {
          e[i] = e[o];
          for (var g = o * n, y = i * n, d = 0; d !== n; ++d)
            t[y + d] = t[g + d];
        }
        ++i;
      }
    }
    if (a > 0) {
      e[i] = e[a];
      for (var g = a * n, y = i * n, d = 0; d !== n; ++d)
        t[y + d] = t[g + d];
      ++i;
    }
    return i !== e.length ? (this.times = Ke.arraySlice(e, 0, i), this.values = Ke.arraySlice(t, 0, i * n)) : (this.times = e, this.values = t), this;
  },
  clone: function() {
    var e = Ke.arraySlice(this.times, 0), t = Ke.arraySlice(this.values, 0), n = this.constructor, r = new n(this.name, e, t);
    return r.createInterpolant = this.createInterpolant, r;
  }
});
function Zs(e, t, n) {
  xt.call(this, e, t, n);
}
Zs.prototype = Object.assign(Object.create(xt.prototype), {
  constructor: Zs,
  ValueTypeName: "bool",
  ValueBufferType: Array,
  DefaultInterpolation: no,
  InterpolantFactoryMethodLinear: void 0,
  InterpolantFactoryMethodSmooth: void 0
  // Note: Actually this track could have a optimized / compressed
  // representation of a single value and a custom interpolant that
  // computes "firstValue ^ isOdd( index )".
});
function Js(e, t, n, r) {
  xt.call(this, e, t, n, r);
}
Js.prototype = Object.assign(Object.create(xt.prototype), {
  constructor: Js,
  ValueTypeName: "color"
  // ValueBufferType is inherited
  // DefaultInterpolation is inherited
  // Note: Very basic implementation and nothing special yet.
  // However, this is the place for color space parameterization.
});
function $i(e, t, n, r) {
  xt.call(this, e, t, n, r);
}
$i.prototype = Object.assign(Object.create(xt.prototype), {
  constructor: $i,
  ValueTypeName: "number"
  // ValueBufferType is inherited
  // DefaultInterpolation is inherited
});
function $s(e, t, n, r) {
  Ut.call(this, e, t, n, r);
}
$s.prototype = Object.assign(Object.create(Ut.prototype), {
  constructor: $s,
  interpolate_: function(e, t, n, r) {
    for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = (n - t) / (r - t), l = s + o; s !== l; s += 4)
      dt.slerpFlat(i, 0, a, s - o, a, s, c);
    return i;
  }
});
function Po(e, t, n, r) {
  xt.call(this, e, t, n, r);
}
Po.prototype = Object.assign(Object.create(xt.prototype), {
  constructor: Po,
  ValueTypeName: "quaternion",
  // ValueBufferType is inherited
  DefaultInterpolation: $a,
  InterpolantFactoryMethodLinear: function(e) {
    return new $s(this.times, this.values, this.getValueSize(), e);
  },
  InterpolantFactoryMethodSmooth: void 0
  // not yet implemented
});
function Qs(e, t, n, r) {
  xt.call(this, e, t, n, r);
}
Qs.prototype = Object.assign(Object.create(xt.prototype), {
  constructor: Qs,
  ValueTypeName: "string",
  ValueBufferType: Array,
  DefaultInterpolation: no,
  InterpolantFactoryMethodLinear: void 0,
  InterpolantFactoryMethodSmooth: void 0
});
function Qi(e, t, n, r) {
  xt.call(this, e, t, n, r);
}
Qi.prototype = Object.assign(Object.create(xt.prototype), {
  constructor: Qi,
  ValueTypeName: "vector"
  // ValueBufferType is inherited
  // DefaultInterpolation is inherited
});
function Yt(e, t, n, r) {
  this.name = e, this.tracks = n, this.duration = t !== void 0 ? t : -1, this.blendMode = r !== void 0 ? r : Tc, this.uuid = Ae.generateUUID(), this.duration < 0 && this.resetDuration();
}
function _g(e) {
  switch (e.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return $i;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Qi;
    case "color":
      return Js;
    case "quaternion":
      return Po;
    case "bool":
    case "boolean":
      return Zs;
    case "string":
      return Qs;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
}
function Mg(e) {
  if (e.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  var t = _g(e.type);
  if (e.times === void 0) {
    var n = [], r = [];
    Ke.flattenJSON(e.keys, n, r, "value"), e.times = n, e.values = r;
  }
  return t.parse !== void 0 ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation);
}
Object.assign(Yt, {
  parse: function(e) {
    for (var t = [], n = e.tracks, r = 1 / (e.fps || 1), i = 0, a = n.length; i !== a; ++i)
      t.push(Mg(n[i]).scale(r));
    return new Yt(e.name, e.duration, t, e.blendMode);
  },
  toJSON: function(e) {
    for (var t = [], n = e.tracks, r = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    }, i = 0, a = n.length; i !== a; ++i)
      t.push(xt.toJSON(n[i]));
    return r;
  },
  CreateFromMorphTargetSequence: function(e, t, n, r) {
    for (var i = t.length, a = [], o = 0; o < i; o++) {
      var s = [], c = [];
      s.push(
        (o + i - 1) % i,
        o,
        (o + 1) % i
      ), c.push(0, 1, 0);
      var l = Ke.getKeyframeOrder(s);
      s = Ke.sortedArray(s, 1, l), c = Ke.sortedArray(c, 1, l), !r && s[0] === 0 && (s.push(i), c.push(c[0])), a.push(
        new $i(
          ".morphTargetInfluences[" + t[o].name + "]",
          s,
          c
        ).scale(1 / n)
      );
    }
    return new Yt(e, -1, a);
  },
  findByName: function(e, t) {
    var n = e;
    if (!Array.isArray(e)) {
      var r = e;
      n = r.geometry && r.geometry.animations || r.animations;
    }
    for (var i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  },
  CreateClipsFromMorphTargetSequences: function(e, t, n) {
    for (var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; a < o; a++) {
      var s = e[a], c = s.name.match(i);
      if (c && c.length > 1) {
        var l = c[1], u = r[l];
        u || (r[l] = u = []), u.push(s);
      }
    }
    var h = [];
    for (var l in r)
      h.push(Yt.CreateFromMorphTargetSequence(l, r[l], t, n));
    return h;
  },
  // parse the animation.hierarchy format
  parseAnimation: function(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    for (var n = function(b, x, T, A, D) {
      if (T.length !== 0) {
        var R = [], V = [];
        Ke.flattenJSON(T, R, V, A), R.length !== 0 && D.push(new b(x, R, V));
      }
    }, r = [], i = e.name || "default", a = e.length || -1, o = e.fps || 30, s = e.blendMode, c = e.hierarchy || [], l = 0; l < c.length; l++) {
      var u = c[l].keys;
      if (!(!u || u.length === 0))
        if (u[0].morphTargets) {
          for (var h = {}, f = 0; f < u.length; f++)
            if (u[f].morphTargets)
              for (var d = 0; d < u[f].morphTargets.length; d++)
                h[u[f].morphTargets[d]] = -1;
          for (var m in h) {
            for (var g = [], y = [], d = 0; d !== u[f].morphTargets.length; ++d) {
              var p = u[f];
              g.push(p.time), y.push(p.morphTarget === m ? 1 : 0);
            }
            r.push(new $i(".morphTargetInfluence[" + m + "]", g, y));
          }
          a = h.length * (o || 1);
        } else {
          var v = ".bones[" + t[l].name + "]";
          n(
            Qi,
            v + ".position",
            u,
            "pos",
            r
          ), n(
            Po,
            v + ".quaternion",
            u,
            "rot",
            r
          ), n(
            Qi,
            v + ".scale",
            u,
            "scl",
            r
          );
        }
    }
    if (r.length === 0)
      return null;
    var _ = new Yt(i, a, r, s);
    return _;
  }
});
Object.assign(Yt.prototype, {
  resetDuration: function() {
    for (var e = this.tracks, t = 0, n = 0, r = e.length; n !== r; ++n) {
      var i = this.tracks[n];
      t = Math.max(t, i.times[i.times.length - 1]);
    }
    return this.duration = t, this;
  },
  trim: function() {
    for (var e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  },
  validate: function() {
    for (var e = !0, t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  },
  optimize: function() {
    for (var e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  },
  clone: function() {
    for (var e = [], t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new Yt(this.name, this.duration, e, this.blendMode);
  }
});
var ei = {
  enabled: !1,
  files: {},
  add: function(e, t) {
    this.enabled !== !1 && (this.files[e] = t);
  },
  get: function(e) {
    if (this.enabled !== !1)
      return this.files[e];
  },
  remove: function(e) {
    delete this.files[e];
  },
  clear: function() {
    this.files = {};
  }
};
function Zu(e, t, n) {
  var r = this, i = !1, a = 0, o = 0, s = void 0, c = [];
  this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(l) {
    o++, i === !1 && r.onStart !== void 0 && r.onStart(l, a, o), i = !0;
  }, this.itemEnd = function(l) {
    a++, r.onProgress !== void 0 && r.onProgress(l, a, o), a === o && (i = !1, r.onLoad !== void 0 && r.onLoad());
  }, this.itemError = function(l) {
    r.onError !== void 0 && r.onError(l);
  }, this.resolveURL = function(l) {
    return s ? s(l) : l;
  }, this.setURLModifier = function(l) {
    return s = l, this;
  }, this.addHandler = function(l, u) {
    return c.push(l, u), this;
  }, this.removeHandler = function(l) {
    var u = c.indexOf(l);
    return u !== -1 && c.splice(u, 2), this;
  }, this.getHandler = function(l) {
    for (var u = 0, h = c.length; u < h; u += 2) {
      var f = c[u], d = c[u + 1];
      if (f.global && (f.lastIndex = 0), f.test(l))
        return d;
    }
    return null;
  };
}
var bg = new Zu();
function ke(e) {
  this.manager = e !== void 0 ? e : bg, this.crossOrigin = "anonymous", this.path = "", this.resourcePath = "", this.requestHeader = {};
}
Object.assign(ke.prototype, {
  load: function() {
  },
  loadAsync: function(e, t) {
    var n = this;
    return new Promise(function(r, i) {
      n.load(e, r, t, i);
    });
  },
  parse: function() {
  },
  setCrossOrigin: function(e) {
    return this.crossOrigin = e, this;
  },
  setPath: function(e) {
    return this.path = e, this;
  },
  setResourcePath: function(e) {
    return this.resourcePath = e, this;
  },
  setRequestHeader: function(e) {
    return this.requestHeader = e, this;
  }
});
var Xt = {};
function an(e) {
  ke.call(this, e);
}
an.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: an,
  load: function(e, t, n, r) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    var i = this, a = ei.get(e);
    if (a !== void 0)
      return i.manager.itemStart(e), setTimeout(function() {
        t && t(a), i.manager.itemEnd(e);
      }, 0), a;
    if (Xt[e] !== void 0) {
      Xt[e].push({
        onLoad: t,
        onProgress: n,
        onError: r
      });
      return;
    }
    var o = /^data:(.*?)(;base64)?,(.*)$/, s = e.match(o);
    if (s) {
      var c = s[1], l = !!s[2], u = s[3];
      u = decodeURIComponent(u), l && (u = atob(u));
      try {
        var h, f = (this.responseType || "").toLowerCase();
        switch (f) {
          case "arraybuffer":
          case "blob":
            for (var d = new Uint8Array(u.length), m = 0; m < u.length; m++)
              d[m] = u.charCodeAt(m);
            f === "blob" ? h = new Blob([d.buffer], { type: c }) : h = d.buffer;
            break;
          case "document":
            var g = new DOMParser();
            h = g.parseFromString(u, c);
            break;
          case "json":
            h = JSON.parse(u);
            break;
          default:
            h = u;
            break;
        }
        setTimeout(function() {
          t && t(h), i.manager.itemEnd(e);
        }, 0);
      } catch (v) {
        setTimeout(function() {
          r && r(v), i.manager.itemError(e), i.manager.itemEnd(e);
        }, 0);
      }
    } else {
      Xt[e] = [], Xt[e].push({
        onLoad: t,
        onProgress: n,
        onError: r
      });
      var y = new XMLHttpRequest();
      y.open("GET", e, !0), y.addEventListener("load", function(v) {
        var _ = this.response, b = Xt[e];
        if (delete Xt[e], this.status === 200 || this.status === 0) {
          this.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), ei.add(e, _);
          for (var x = 0, T = b.length; x < T; x++) {
            var A = b[x];
            A.onLoad && A.onLoad(_);
          }
          i.manager.itemEnd(e);
        } else {
          for (var x = 0, T = b.length; x < T; x++) {
            var A = b[x];
            A.onError && A.onError(v);
          }
          i.manager.itemError(e), i.manager.itemEnd(e);
        }
      }, !1), y.addEventListener("progress", function(v) {
        for (var _ = Xt[e], b = 0, x = _.length; b < x; b++) {
          var T = _[b];
          T.onProgress && T.onProgress(v);
        }
      }, !1), y.addEventListener("error", function(v) {
        var _ = Xt[e];
        delete Xt[e];
        for (var b = 0, x = _.length; b < x; b++) {
          var T = _[b];
          T.onError && T.onError(v);
        }
        i.manager.itemError(e), i.manager.itemEnd(e);
      }, !1), y.addEventListener("abort", function(v) {
        var _ = Xt[e];
        delete Xt[e];
        for (var b = 0, x = _.length; b < x; b++) {
          var T = _[b];
          T.onError && T.onError(v);
        }
        i.manager.itemError(e), i.manager.itemEnd(e);
      }, !1), this.responseType !== void 0 && (y.responseType = this.responseType), this.withCredentials !== void 0 && (y.withCredentials = this.withCredentials), y.overrideMimeType && y.overrideMimeType(this.mimeType !== void 0 ? this.mimeType : "text/plain");
      for (var p in this.requestHeader)
        y.setRequestHeader(p, this.requestHeader[p]);
      y.send(null);
    }
    return i.manager.itemStart(e), y;
  },
  setResponseType: function(e) {
    return this.responseType = e, this;
  },
  setWithCredentials: function(e) {
    return this.withCredentials = e, this;
  },
  setMimeType: function(e) {
    return this.mimeType = e, this;
  }
});
function Bl(e) {
  ke.call(this, e);
}
Bl.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: Bl,
  load: function(e, t, n, r) {
    var i = this, a = new an(i.manager);
    a.setPath(i.path), a.load(e, function(o) {
      try {
        t(i.parse(JSON.parse(o)));
      } catch (s) {
        r ? r(s) : console.error(s), i.manager.itemError(e);
      }
    }, n, r);
  },
  parse: function(e) {
    for (var t = [], n = 0; n < e.length; n++) {
      var r = Yt.parse(e[n]);
      t.push(r);
    }
    return t;
  }
});
function Ul(e) {
  ke.call(this, e);
}
Ul.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: Ul,
  load: function(e, t, n, r) {
    var i = this, a = [], o = new Bi();
    o.image = a;
    var s = new an(this.manager);
    s.setPath(this.path), s.setResponseType("arraybuffer");
    function c(f) {
      s.load(e[f], function(d) {
        var m = i.parse(d, !0);
        a[f] = {
          width: m.width,
          height: m.height,
          format: m.format,
          mipmaps: m.mipmaps
        }, l += 1, l === 6 && (m.mipmapCount === 1 && (o.minFilter = yt), o.format = m.format, o.needsUpdate = !0, t && t(o));
      }, n, r);
    }
    if (Array.isArray(e))
      for (var l = 0, u = 0, h = e.length; u < h; ++u)
        c(u);
    else
      s.load(e, function(f) {
        var d = i.parse(f, !0);
        if (d.isCubemap)
          for (var m = d.mipmaps.length / d.mipmapCount, g = 0; g < m; g++) {
            a[g] = { mipmaps: [] };
            for (var y = 0; y < d.mipmapCount; y++)
              a[g].mipmaps.push(d.mipmaps[g * d.mipmapCount + y]), a[g].format = d.format, a[g].width = d.width, a[g].height = d.height;
          }
        else
          o.image.width = d.width, o.image.height = d.height, o.mipmaps = d.mipmaps;
        d.mipmapCount === 1 && (o.minFilter = yt), o.format = d.format, o.needsUpdate = !0, t && t(o);
      }, n, r);
    return o;
  }
});
function Gl(e) {
  ke.call(this, e);
}
Gl.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: Gl,
  load: function(e, t, n, r) {
    var i = this, a = new Ur(), o = new an(this.manager);
    return o.setResponseType("arraybuffer"), o.setPath(this.path), o.load(e, function(s) {
      var c = i.parse(s);
      c && (c.image !== void 0 ? a.image = c.image : c.data !== void 0 && (a.image.width = c.width, a.image.height = c.height, a.image.data = c.data), a.wrapS = c.wrapS !== void 0 ? c.wrapS : Tt, a.wrapT = c.wrapT !== void 0 ? c.wrapT : Tt, a.magFilter = c.magFilter !== void 0 ? c.magFilter : yt, a.minFilter = c.minFilter !== void 0 ? c.minFilter : yt, a.anisotropy = c.anisotropy !== void 0 ? c.anisotropy : 1, c.format !== void 0 && (a.format = c.format), c.type !== void 0 && (a.type = c.type), c.mipmaps !== void 0 && (a.mipmaps = c.mipmaps, a.minFilter = Go), c.mipmapCount === 1 && (a.minFilter = yt), a.needsUpdate = !0, t && t(a, c));
    }, n, r), a;
  }
});
function Ki(e) {
  ke.call(this, e);
}
Ki.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: Ki,
  load: function(e, t, n, r) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    var i = this, a = ei.get(e);
    if (a !== void 0)
      return i.manager.itemStart(e), setTimeout(function() {
        t && t(a), i.manager.itemEnd(e);
      }, 0), a;
    var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
    function s() {
      o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), ei.add(e, this), t && t(this), i.manager.itemEnd(e);
    }
    function c(l) {
      o.removeEventListener("load", s, !1), o.removeEventListener("error", c, !1), r && r(l), i.manager.itemError(e), i.manager.itemEnd(e);
    }
    return o.addEventListener("load", s, !1), o.addEventListener("error", c, !1), e.substr(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), i.manager.itemStart(e), o.src = e, o;
  }
});
function Ks(e) {
  ke.call(this, e);
}
Ks.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: Ks,
  load: function(e, t, n, r) {
    var i = new Gn(), a = new Ki(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    var o = 0;
    function s(l) {
      a.load(e[l], function(u) {
        i.images[l] = u, o++, o === 6 && (i.needsUpdate = !0, t && t(i));
      }, void 0, r);
    }
    for (var c = 0; c < e.length; ++c)
      s(c);
    return i;
  }
});
function ec(e) {
  ke.call(this, e);
}
ec.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: ec,
  load: function(e, t, n, r) {
    var i = new je(), a = new Ki(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      i.image = o;
      var s = e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0;
      i.format = s ? er : Zt, i.needsUpdate = !0, t !== void 0 && t(i);
    }, n, r), i;
  }
});
function fe() {
  this.type = "Curve", this.arcLengthDivisions = 200;
}
Object.assign(fe.prototype, {
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint: function() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  },
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt: function(e, t) {
    var n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  },
  // Get sequence of points using getPoint( t )
  getPoints: function(e) {
    e === void 0 && (e = 5);
    for (var t = [], n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  },
  // Get sequence of points using getPointAt( u )
  getSpacedPoints: function(e) {
    e === void 0 && (e = 5);
    for (var t = [], n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  },
  // Get total curve arc length
  getLength: function() {
    var e = this.getLengths();
    return e[e.length - 1];
  },
  // Get list of cumulative segment lengths
  getLengths: function(e) {
    if (e === void 0 && (e = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    var t = [], n, r = this.getPoint(0), i, a = 0;
    for (t.push(0), i = 1; i <= e; i++)
      n = this.getPoint(i / e), a += n.distanceTo(r), t.push(a), r = n;
    return this.cacheArcLengths = t, t;
  },
  updateArcLengths: function() {
    this.needsUpdate = !0, this.getLengths();
  },
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping: function(e, t) {
    var n = this.getLengths(), r = 0, i = n.length, a;
    t ? a = t : a = e * n[i - 1];
    for (var o = 0, s = i - 1, c; o <= s; )
      if (r = Math.floor(o + (s - o) / 2), c = n[r] - a, c < 0)
        o = r + 1;
      else if (c > 0)
        s = r - 1;
      else {
        s = r;
        break;
      }
    if (r = s, n[r] === a)
      return r / (i - 1);
    var l = n[r], u = n[r + 1], h = u - l, f = (a - l) / h, d = (r + f) / (i - 1);
    return d;
  },
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent: function(e, t) {
    var n = 1e-4, r = e - n, i = e + n;
    r < 0 && (r = 0), i > 1 && (i = 1);
    var a = this.getPoint(r), o = this.getPoint(i), s = t || (a.isVector2 ? new U() : new M());
    return s.copy(o).sub(a).normalize(), s;
  },
  getTangentAt: function(e, t) {
    var n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  },
  computeFrenetFrames: function(e, t) {
    var n = new M(), r = [], i = [], a = [], o = new M(), s = new Ce(), c, l, u;
    for (c = 0; c <= e; c++)
      l = c / e, r[c] = this.getTangentAt(l, new M()), r[c].normalize();
    i[0] = new M(), a[0] = new M();
    var h = Number.MAX_VALUE, f = Math.abs(r[0].x), d = Math.abs(r[0].y), m = Math.abs(r[0].z);
    for (f <= h && (h = f, n.set(1, 0, 0)), d <= h && (h = d, n.set(0, 1, 0)), m <= h && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), i[0].crossVectors(r[0], o), a[0].crossVectors(r[0], i[0]), c = 1; c <= e; c++)
      i[c] = i[c - 1].clone(), a[c] = a[c - 1].clone(), o.crossVectors(r[c - 1], r[c]), o.length() > Number.EPSILON && (o.normalize(), u = Math.acos(Ae.clamp(r[c - 1].dot(r[c]), -1, 1)), i[c].applyMatrix4(s.makeRotationAxis(o, u))), a[c].crossVectors(r[c], i[c]);
    if (t === !0)
      for (u = Math.acos(Ae.clamp(i[0].dot(i[e]), -1, 1)), u /= e, r[0].dot(o.crossVectors(i[0], i[e])) > 0 && (u = -u), c = 1; c <= e; c++)
        i[c].applyMatrix4(s.makeRotationAxis(r[c], u * c)), a[c].crossVectors(r[c], i[c]);
    return {
      tangents: r,
      normals: i,
      binormals: a
    };
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  },
  toJSON: function() {
    var e = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  },
  fromJSON: function(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
});
function Ht(e, t, n, r, i, a, o, s) {
  fe.call(this), this.type = "EllipseCurve", this.aX = e || 0, this.aY = t || 0, this.xRadius = n || 1, this.yRadius = r || 1, this.aStartAngle = i || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0;
}
Ht.prototype = Object.create(fe.prototype);
Ht.prototype.constructor = Ht;
Ht.prototype.isEllipseCurve = !0;
Ht.prototype.getPoint = function(e, t) {
  for (var n = t || new U(), r = Math.PI * 2, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < Number.EPSILON; i < 0; )
    i += r;
  for (; i > r; )
    i -= r;
  i < Number.EPSILON && (a ? i = 0 : i = r), this.aClockwise === !0 && !a && (i === r ? i = -r : i = i - r);
  var o = this.aStartAngle + e * i, s = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
  if (this.aRotation !== 0) {
    var l = Math.cos(this.aRotation), u = Math.sin(this.aRotation), h = s - this.aX, f = c - this.aY;
    s = h * l - f * u + this.aX, c = h * u + f * l + this.aY;
  }
  return n.set(s, c);
};
Ht.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
};
Ht.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
};
Ht.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
};
function ea(e, t, n, r, i, a) {
  Ht.call(this, e, t, n, n, r, i, a), this.type = "ArcCurve";
}
ea.prototype = Object.create(Ht.prototype);
ea.prototype.constructor = ea;
ea.prototype.isArcCurve = !0;
function Cc() {
  var e = 0, t = 0, n = 0, r = 0;
  function i(a, o, s, c) {
    e = a, t = s, n = -3 * a + 3 * o - 2 * s - c, r = 2 * a - 2 * o + s + c;
  }
  return {
    initCatmullRom: function(a, o, s, c, l) {
      i(o, s, l * (s - a), l * (c - o));
    },
    initNonuniformCatmullRom: function(a, o, s, c, l, u, h) {
      var f = (o - a) / l - (s - a) / (l + u) + (s - o) / u, d = (s - o) / u - (c - o) / (u + h) + (c - s) / h;
      f *= u, d *= u, i(o, s, f, d);
    },
    calc: function(a) {
      var o = a * a, s = o * a;
      return e + t * a + n * o + r * s;
    }
  };
}
var Ha = new M(), ms = new Cc(), gs = new Cc(), ys = new Cc();
function Nt(e, t, n, r) {
  fe.call(this), this.type = "CatmullRomCurve3", this.points = e || [], this.closed = t || !1, this.curveType = n || "centripetal", this.tension = r || 0.5;
}
Nt.prototype = Object.create(fe.prototype);
Nt.prototype.constructor = Nt;
Nt.prototype.isCatmullRomCurve3 = !0;
Nt.prototype.getPoint = function(e, t) {
  var n = t || new M(), r = this.points, i = r.length, a = (i - (this.closed ? 0 : 1)) * e, o = Math.floor(a), s = a - o;
  this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i : s === 0 && o === i - 1 && (o = i - 2, s = 1);
  var c, l, u, h;
  if (this.closed || o > 0 ? c = r[(o - 1) % i] : (Ha.subVectors(r[0], r[1]).add(r[0]), c = Ha), l = r[o % i], u = r[(o + 1) % i], this.closed || o + 2 < i ? h = r[(o + 2) % i] : (Ha.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), h = Ha), this.curveType === "centripetal" || this.curveType === "chordal") {
    var f = this.curveType === "chordal" ? 0.5 : 0.25, d = Math.pow(c.distanceToSquared(l), f), m = Math.pow(l.distanceToSquared(u), f), g = Math.pow(u.distanceToSquared(h), f);
    m < 1e-4 && (m = 1), d < 1e-4 && (d = m), g < 1e-4 && (g = m), ms.initNonuniformCatmullRom(c.x, l.x, u.x, h.x, d, m, g), gs.initNonuniformCatmullRom(c.y, l.y, u.y, h.y, d, m, g), ys.initNonuniformCatmullRom(c.z, l.z, u.z, h.z, d, m, g);
  } else
    this.curveType === "catmullrom" && (ms.initCatmullRom(c.x, l.x, u.x, h.x, this.tension), gs.initCatmullRom(c.y, l.y, u.y, h.y, this.tension), ys.initCatmullRom(c.z, l.z, u.z, h.z, this.tension));
  return n.set(
    ms.calc(s),
    gs.calc(s),
    ys.calc(s)
  ), n;
};
Nt.prototype.copy = function(e) {
  fe.prototype.copy.call(this, e), this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(r.clone());
  }
  return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
};
Nt.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  e.points = [];
  for (var t = 0, n = this.points.length; t < n; t++) {
    var r = this.points[t];
    e.points.push(r.toArray());
  }
  return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
};
Nt.prototype.fromJSON = function(e) {
  fe.prototype.fromJSON.call(this, e), this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(new M().fromArray(r));
  }
  return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
};
function zl(e, t, n, r, i) {
  var a = (r - t) * 0.5, o = (i - n) * 0.5, s = e * e, c = e * s;
  return (2 * n - 2 * r + a + o) * c + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n;
}
function wg(e, t) {
  var n = 1 - e;
  return n * n * t;
}
function Sg(e, t) {
  return 2 * (1 - e) * e * t;
}
function Eg(e, t) {
  return e * e * t;
}
function Ei(e, t, n, r) {
  return wg(e, t) + Sg(e, n) + Eg(e, r);
}
function Tg(e, t) {
  var n = 1 - e;
  return n * n * n * t;
}
function Ag(e, t) {
  var n = 1 - e;
  return 3 * n * n * e * t;
}
function Lg(e, t) {
  return 3 * (1 - e) * e * e * t;
}
function Rg(e, t) {
  return e * e * e * t;
}
function Ti(e, t, n, r, i) {
  return Tg(e, t) + Ag(e, n) + Lg(e, r) + Rg(e, i);
}
function on(e, t, n, r) {
  fe.call(this), this.type = "CubicBezierCurve", this.v0 = e || new U(), this.v1 = t || new U(), this.v2 = n || new U(), this.v3 = r || new U();
}
on.prototype = Object.create(fe.prototype);
on.prototype.constructor = on;
on.prototype.isCubicBezierCurve = !0;
on.prototype.getPoint = function(e, t) {
  var n = t || new U(), r = this.v0, i = this.v1, a = this.v2, o = this.v3;
  return n.set(
    Ti(e, r.x, i.x, a.x, o.x),
    Ti(e, r.y, i.y, a.y, o.y)
  ), n;
};
on.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
};
on.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
};
on.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
};
function _n(e, t, n, r) {
  fe.call(this), this.type = "CubicBezierCurve3", this.v0 = e || new M(), this.v1 = t || new M(), this.v2 = n || new M(), this.v3 = r || new M();
}
_n.prototype = Object.create(fe.prototype);
_n.prototype.constructor = _n;
_n.prototype.isCubicBezierCurve3 = !0;
_n.prototype.getPoint = function(e, t) {
  var n = t || new M(), r = this.v0, i = this.v1, a = this.v2, o = this.v3;
  return n.set(
    Ti(e, r.x, i.x, a.x, o.x),
    Ti(e, r.y, i.y, a.y, o.y),
    Ti(e, r.z, i.z, a.z, o.z)
  ), n;
};
_n.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
};
_n.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
};
_n.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
};
function Ft(e, t) {
  fe.call(this), this.type = "LineCurve", this.v1 = e || new U(), this.v2 = t || new U();
}
Ft.prototype = Object.create(fe.prototype);
Ft.prototype.constructor = Ft;
Ft.prototype.isLineCurve = !0;
Ft.prototype.getPoint = function(e, t) {
  var n = t || new U();
  return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
};
Ft.prototype.getPointAt = function(e, t) {
  return this.getPoint(e, t);
};
Ft.prototype.getTangent = function(e, t) {
  var n = t || new U(), n = n.copy(this.v2).sub(this.v1).normalize();
  return n;
};
Ft.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
Ft.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
};
Ft.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
};
function sn(e, t) {
  fe.call(this), this.type = "LineCurve3", this.v1 = e || new M(), this.v2 = t || new M();
}
sn.prototype = Object.create(fe.prototype);
sn.prototype.constructor = sn;
sn.prototype.isLineCurve3 = !0;
sn.prototype.getPoint = function(e, t) {
  var n = t || new M();
  return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
};
sn.prototype.getPointAt = function(e, t) {
  return this.getPoint(e, t);
};
sn.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
sn.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
};
sn.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
};
function cn(e, t, n) {
  fe.call(this), this.type = "QuadraticBezierCurve", this.v0 = e || new U(), this.v1 = t || new U(), this.v2 = n || new U();
}
cn.prototype = Object.create(fe.prototype);
cn.prototype.constructor = cn;
cn.prototype.isQuadraticBezierCurve = !0;
cn.prototype.getPoint = function(e, t) {
  var n = t || new U(), r = this.v0, i = this.v1, a = this.v2;
  return n.set(
    Ei(e, r.x, i.x, a.x),
    Ei(e, r.y, i.y, a.y)
  ), n;
};
cn.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
cn.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
};
cn.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
};
function Mn(e, t, n) {
  fe.call(this), this.type = "QuadraticBezierCurve3", this.v0 = e || new M(), this.v1 = t || new M(), this.v2 = n || new M();
}
Mn.prototype = Object.create(fe.prototype);
Mn.prototype.constructor = Mn;
Mn.prototype.isQuadraticBezierCurve3 = !0;
Mn.prototype.getPoint = function(e, t) {
  var n = t || new M(), r = this.v0, i = this.v1, a = this.v2;
  return n.set(
    Ei(e, r.x, i.x, a.x),
    Ei(e, r.y, i.y, a.y),
    Ei(e, r.z, i.z, a.z)
  ), n;
};
Mn.prototype.copy = function(e) {
  return fe.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
};
Mn.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
};
Mn.prototype.fromJSON = function(e) {
  return fe.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
};
function ln(e) {
  fe.call(this), this.type = "SplineCurve", this.points = e || [];
}
ln.prototype = Object.create(fe.prototype);
ln.prototype.constructor = ln;
ln.prototype.isSplineCurve = !0;
ln.prototype.getPoint = function(e, t) {
  var n = t || new U(), r = this.points, i = (r.length - 1) * e, a = Math.floor(i), o = i - a, s = r[a === 0 ? a : a - 1], c = r[a], l = r[a > r.length - 2 ? r.length - 1 : a + 1], u = r[a > r.length - 3 ? r.length - 1 : a + 2];
  return n.set(
    zl(o, s.x, c.x, l.x, u.x),
    zl(o, s.y, c.y, l.y, u.y)
  ), n;
};
ln.prototype.copy = function(e) {
  fe.prototype.copy.call(this, e), this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(r.clone());
  }
  return this;
};
ln.prototype.toJSON = function() {
  var e = fe.prototype.toJSON.call(this);
  e.points = [];
  for (var t = 0, n = this.points.length; t < n; t++) {
    var r = this.points[t];
    e.points.push(r.toArray());
  }
  return e;
};
ln.prototype.fromJSON = function(e) {
  fe.prototype.fromJSON.call(this, e), this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(new U().fromArray(r));
  }
  return this;
};
var tc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: ea,
  CatmullRomCurve3: Nt,
  CubicBezierCurve: on,
  CubicBezierCurve3: _n,
  EllipseCurve: Ht,
  LineCurve: Ft,
  LineCurve3: sn,
  QuadraticBezierCurve: cn,
  QuadraticBezierCurve3: Mn,
  SplineCurve: ln
});
function On() {
  fe.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
}
On.prototype = Object.assign(Object.create(fe.prototype), {
  constructor: On,
  add: function(e) {
    this.curves.push(e);
  },
  closePath: function() {
    var e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new Ft(t, e));
  },
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint: function(e) {
    for (var t = e * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length; ) {
      if (n[r] >= t) {
        var i = n[r] - t, a = this.curves[r], o = a.getLength(), s = o === 0 ? 0 : 1 - i / o;
        return a.getPointAt(s);
      }
      r++;
    }
    return null;
  },
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength: function() {
    var e = this.getCurveLengths();
    return e[e.length - 1];
  },
  // cacheLengths must be recalculated.
  updateArcLengths: function() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  },
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths: function() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    for (var e = [], t = 0, n = 0, r = this.curves.length; n < r; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  },
  getSpacedPoints: function(e) {
    e === void 0 && (e = 40);
    for (var t = [], n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  },
  getPoints: function(e) {
    e = e || 12;
    for (var t = [], n, r = 0, i = this.curves; r < i.length; r++)
      for (var a = i[r], o = a && a.isEllipseCurve ? e * 2 : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o), c = 0; c < s.length; c++) {
        var l = s[c];
        n && n.equals(l) || (t.push(l), n = l);
      }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  },
  copy: function(e) {
    fe.prototype.copy.call(this, e), this.curves = [];
    for (var t = 0, n = e.curves.length; t < n; t++) {
      var r = e.curves[t];
      this.curves.push(r.clone());
    }
    return this.autoClose = e.autoClose, this;
  },
  toJSON: function() {
    var e = fe.prototype.toJSON.call(this);
    e.autoClose = this.autoClose, e.curves = [];
    for (var t = 0, n = this.curves.length; t < n; t++) {
      var r = this.curves[t];
      e.curves.push(r.toJSON());
    }
    return e;
  },
  fromJSON: function(e) {
    fe.prototype.fromJSON.call(this, e), this.autoClose = e.autoClose, this.curves = [];
    for (var t = 0, n = e.curves.length; t < n; t++) {
      var r = e.curves[t];
      this.curves.push(new tc[r.type]().fromJSON(r));
    }
    return this;
  }
});
function nn(e) {
  On.call(this), this.type = "Path", this.currentPoint = new U(), e && this.setFromPoints(e);
}
nn.prototype = Object.assign(Object.create(On.prototype), {
  constructor: nn,
  setFromPoints: function(e) {
    this.moveTo(e[0].x, e[0].y);
    for (var t = 1, n = e.length; t < n; t++)
      this.lineTo(e[t].x, e[t].y);
    return this;
  },
  moveTo: function(e, t) {
    return this.currentPoint.set(e, t), this;
  },
  lineTo: function(e, t) {
    var n = new Ft(this.currentPoint.clone(), new U(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  },
  quadraticCurveTo: function(e, t, n, r) {
    var i = new cn(
      this.currentPoint.clone(),
      new U(e, t),
      new U(n, r)
    );
    return this.curves.push(i), this.currentPoint.set(n, r), this;
  },
  bezierCurveTo: function(e, t, n, r, i, a) {
    var o = new on(
      this.currentPoint.clone(),
      new U(e, t),
      new U(n, r),
      new U(i, a)
    );
    return this.curves.push(o), this.currentPoint.set(i, a), this;
  },
  splineThru: function(e) {
    var t = [this.currentPoint.clone()].concat(e), n = new ln(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  },
  arc: function(e, t, n, r, i, a) {
    var o = this.currentPoint.x, s = this.currentPoint.y;
    return this.absarc(
      e + o,
      t + s,
      n,
      r,
      i,
      a
    ), this;
  },
  absarc: function(e, t, n, r, i, a) {
    return this.absellipse(e, t, n, n, r, i, a), this;
  },
  ellipse: function(e, t, n, r, i, a, o, s) {
    var c = this.currentPoint.x, l = this.currentPoint.y;
    return this.absellipse(e + c, t + l, n, r, i, a, o, s), this;
  },
  absellipse: function(e, t, n, r, i, a, o, s) {
    var c = new Ht(e, t, n, r, i, a, o, s);
    if (this.curves.length > 0) {
      var l = c.getPoint(0);
      l.equals(this.currentPoint) || this.lineTo(l.x, l.y);
    }
    this.curves.push(c);
    var u = c.getPoint(1);
    return this.currentPoint.copy(u), this;
  },
  copy: function(e) {
    return On.prototype.copy.call(this, e), this.currentPoint.copy(e.currentPoint), this;
  },
  toJSON: function() {
    var e = On.prototype.toJSON.call(this);
    return e.currentPoint = this.currentPoint.toArray(), e;
  },
  fromJSON: function(e) {
    return On.prototype.fromJSON.call(this, e), this.currentPoint.fromArray(e.currentPoint), this;
  }
});
function tr(e) {
  nn.call(this, e), this.uuid = Ae.generateUUID(), this.type = "Shape", this.holes = [];
}
tr.prototype = Object.assign(Object.create(nn.prototype), {
  constructor: tr,
  getPointsHoles: function(e) {
    for (var t = [], n = 0, r = this.holes.length; n < r; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  },
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints: function(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  },
  copy: function(e) {
    nn.prototype.copy.call(this, e), this.holes = [];
    for (var t = 0, n = e.holes.length; t < n; t++) {
      var r = e.holes[t];
      this.holes.push(r.clone());
    }
    return this;
  },
  toJSON: function() {
    var e = nn.prototype.toJSON.call(this);
    e.uuid = this.uuid, e.holes = [];
    for (var t = 0, n = this.holes.length; t < n; t++) {
      var r = this.holes[t];
      e.holes.push(r.toJSON());
    }
    return e;
  },
  fromJSON: function(e) {
    nn.prototype.fromJSON.call(this, e), this.uuid = e.uuid, this.holes = [];
    for (var t = 0, n = e.holes.length; t < n; t++) {
      var r = e.holes[t];
      this.holes.push(new nn().fromJSON(r));
    }
    return this;
  }
});
function Ze(e, t) {
  Q.call(this), this.type = "Light", this.color = new ee(e), this.intensity = t !== void 0 ? t : 1, this.receiveShadow = void 0;
}
Ze.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: Ze,
  isLight: !0,
  copy: function(e) {
    return Q.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this;
  },
  toJSON: function(e) {
    var t = Q.prototype.toJSON.call(this, e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
});
function nc(e, t, n) {
  Ze.call(this, e, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(Q.DefaultUp), this.updateMatrix(), this.groundColor = new ee(t);
}
nc.prototype = Object.assign(Object.create(Ze.prototype), {
  constructor: nc,
  isHemisphereLight: !0,
  copy: function(e) {
    return Ze.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this;
  }
});
function bn(e) {
  this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new U(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ce(), this._frustum = new ua(), this._frameExtents = new U(1, 1), this._viewportCount = 1, this._viewports = [
    new Ve(0, 0, 1, 1)
  ];
}
Object.assign(bn.prototype, {
  _projScreenMatrix: new Ce(),
  _lightPositionWorld: new M(),
  _lookTarget: new M(),
  getViewportCount: function() {
    return this._viewportCount;
  },
  getFrustum: function() {
    return this._frustum;
  },
  updateMatrices: function(e) {
    var t = this.camera, n = this.matrix, r = this._projScreenMatrix, i = this._lookTarget, a = this._lightPositionWorld;
    a.setFromMatrixPosition(e.matrixWorld), t.position.copy(a), i.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(i), t.updateMatrixWorld(), r.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(r), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(t.projectionMatrix), n.multiply(t.matrixWorldInverse);
  },
  getViewport: function(e) {
    return this._viewports[e];
  },
  getFrameExtents: function() {
    return this._frameExtents;
  },
  copy: function(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  toJSON: function() {
    var e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
});
function rc() {
  bn.call(this, new ht(50, 1, 0.5, 500));
}
rc.prototype = Object.assign(Object.create(bn.prototype), {
  constructor: rc,
  isSpotLightShadow: !0,
  updateMatrices: function(e) {
    var t = this.camera, n = Ae.RAD2DEG * 2 * e.angle, r = this.mapSize.width / this.mapSize.height, i = e.distance || t.far;
    (n !== t.fov || r !== t.aspect || i !== t.far) && (t.fov = n, t.aspect = r, t.far = i, t.updateProjectionMatrix()), bn.prototype.updateMatrices.call(this, e);
  }
});
function ic(e, t, n, r, i, a) {
  Ze.call(this, e, t), this.type = "SpotLight", this.position.copy(Q.DefaultUp), this.updateMatrix(), this.target = new Q(), Object.defineProperty(this, "power", {
    get: function() {
      return this.intensity * Math.PI;
    },
    set: function(o) {
      this.intensity = o / Math.PI;
    }
  }), this.distance = n !== void 0 ? n : 0, this.angle = r !== void 0 ? r : Math.PI / 3, this.penumbra = i !== void 0 ? i : 0, this.decay = a !== void 0 ? a : 1, this.shadow = new rc();
}
ic.prototype = Object.assign(Object.create(Ze.prototype), {
  constructor: ic,
  isSpotLight: !0,
  copy: function(e) {
    return Ze.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
});
function ac() {
  bn.call(this, new ht(90, 1, 0.5, 500)), this._frameExtents = new U(4, 2), this._viewportCount = 6, this._viewports = [
    // These viewports map a cube-map onto a 2D texture with the
    // following orientation:
    //
    //  xzXZ
    //   y Y
    //
    // X - Positive x direction
    // x - Negative x direction
    // Y - Positive y direction
    // y - Negative y direction
    // Z - Positive z direction
    // z - Negative z direction
    // positive X
    new Ve(2, 1, 1, 1),
    // negative X
    new Ve(0, 1, 1, 1),
    // positive Z
    new Ve(3, 1, 1, 1),
    // negative Z
    new Ve(1, 1, 1, 1),
    // positive Y
    new Ve(3, 0, 1, 1),
    // negative Y
    new Ve(1, 0, 1, 1)
  ], this._cubeDirections = [
    new M(1, 0, 0),
    new M(-1, 0, 0),
    new M(0, 0, 1),
    new M(0, 0, -1),
    new M(0, 1, 0),
    new M(0, -1, 0)
  ], this._cubeUps = [
    new M(0, 1, 0),
    new M(0, 1, 0),
    new M(0, 1, 0),
    new M(0, 1, 0),
    new M(0, 0, 1),
    new M(0, 0, -1)
  ];
}
ac.prototype = Object.assign(Object.create(bn.prototype), {
  constructor: ac,
  isPointLightShadow: !0,
  updateMatrices: function(e, t) {
    t === void 0 && (t = 0);
    var n = this.camera, r = this.matrix, i = this._lightPositionWorld, a = this._lookTarget, o = this._projScreenMatrix;
    i.setFromMatrixPosition(e.matrixWorld), n.position.copy(i), a.copy(n.position), a.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(a), n.updateMatrixWorld(), r.makeTranslation(-i.x, -i.y, -i.z), o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(o);
  }
});
function oc(e, t, n, r) {
  Ze.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
    get: function() {
      return this.intensity * 4 * Math.PI;
    },
    set: function(i) {
      this.intensity = i / (4 * Math.PI);
    }
  }), this.distance = n !== void 0 ? n : 0, this.decay = r !== void 0 ? r : 1, this.shadow = new ac();
}
oc.prototype = Object.assign(Object.create(Ze.prototype), {
  constructor: oc,
  isPointLight: !0,
  copy: function(e) {
    return Ze.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
});
function ta(e, t, n, r, i, a) {
  gn.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e !== void 0 ? e : -1, this.right = t !== void 0 ? t : 1, this.top = n !== void 0 ? n : 1, this.bottom = r !== void 0 ? r : -1, this.near = i !== void 0 ? i : 0.1, this.far = a !== void 0 ? a : 2e3, this.updateProjectionMatrix();
}
ta.prototype = Object.assign(Object.create(gn.prototype), {
  constructor: ta,
  isOrthographicCamera: !0,
  copy: function(e, t) {
    return gn.prototype.copy.call(this, e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  },
  setViewOffset: function(e, t, n, r, i, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
  },
  clearViewOffset: function() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  },
  updateProjectionMatrix: function() {
    var e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t;
    if (this.view !== null && this.view.enabled) {
      var c = (this.right - this.left) / this.view.fullWidth / this.zoom, l = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      i += c * this.view.offsetX, a = i + c * this.view.width, o -= l * this.view.offsetY, s = o - l * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix);
  },
  toJSON: function(e) {
    var t = Q.prototype.toJSON.call(this, e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
});
function sc() {
  bn.call(this, new ta(-5, 5, 5, -5, 0.5, 500));
}
sc.prototype = Object.assign(Object.create(bn.prototype), {
  constructor: sc,
  isDirectionalLightShadow: !0,
  updateMatrices: function(e) {
    bn.prototype.updateMatrices.call(this, e);
  }
});
function cc(e, t) {
  Ze.call(this, e, t), this.type = "DirectionalLight", this.position.copy(Q.DefaultUp), this.updateMatrix(), this.target = new Q(), this.shadow = new sc();
}
cc.prototype = Object.assign(Object.create(Ze.prototype), {
  constructor: cc,
  isDirectionalLight: !0,
  copy: function(e) {
    return Ze.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
});
function lc(e, t) {
  Ze.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0;
}
lc.prototype = Object.assign(Object.create(Ze.prototype), {
  constructor: lc,
  isAmbientLight: !0
});
function uc(e, t, n, r) {
  Ze.call(this, e, t), this.type = "RectAreaLight", this.width = n !== void 0 ? n : 10, this.height = r !== void 0 ? r : 10;
}
uc.prototype = Object.assign(Object.create(Ze.prototype), {
  constructor: uc,
  isRectAreaLight: !0,
  copy: function(e) {
    return Ze.prototype.copy.call(this, e), this.width = e.width, this.height = e.height, this;
  },
  toJSON: function(e) {
    var t = Ze.prototype.toJSON.call(this, e);
    return t.object.width = this.width, t.object.height = this.height, t;
  }
});
function Pc() {
  this.coefficients = [];
  for (var e = 0; e < 9; e++)
    this.coefficients.push(new M());
}
Object.assign(Pc.prototype, {
  isSphericalHarmonics3: !0,
  set: function(e) {
    for (var t = 0; t < 9; t++)
      this.coefficients[t].copy(e[t]);
    return this;
  },
  zero: function() {
    for (var e = 0; e < 9; e++)
      this.coefficients[e].set(0, 0, 0);
    return this;
  },
  // get the radiance in the direction of the normal
  // target is a Vector3
  getAt: function(e, t) {
    var n = e.x, r = e.y, i = e.z, a = this.coefficients;
    return t.copy(a[0]).multiplyScalar(0.282095), t.addScaledVector(a[1], 0.488603 * r), t.addScaledVector(a[2], 0.488603 * i), t.addScaledVector(a[3], 0.488603 * n), t.addScaledVector(a[4], 1.092548 * (n * r)), t.addScaledVector(a[5], 1.092548 * (r * i)), t.addScaledVector(a[6], 0.315392 * (3 * i * i - 1)), t.addScaledVector(a[7], 1.092548 * (n * i)), t.addScaledVector(a[8], 0.546274 * (n * n - r * r)), t;
  },
  // get the irradiance (radiance convolved with cosine lobe) in the direction of the normal
  // target is a Vector3
  // https://graphics.stanford.edu/papers/envmap/envmap.pdf
  getIrradianceAt: function(e, t) {
    var n = e.x, r = e.y, i = e.z, a = this.coefficients;
    return t.copy(a[0]).multiplyScalar(0.886227), t.addScaledVector(a[1], 2 * 0.511664 * r), t.addScaledVector(a[2], 2 * 0.511664 * i), t.addScaledVector(a[3], 2 * 0.511664 * n), t.addScaledVector(a[4], 2 * 0.429043 * n * r), t.addScaledVector(a[5], 2 * 0.429043 * r * i), t.addScaledVector(a[6], 0.743125 * i * i - 0.247708), t.addScaledVector(a[7], 2 * 0.429043 * n * i), t.addScaledVector(a[8], 0.429043 * (n * n - r * r)), t;
  },
  add: function(e) {
    for (var t = 0; t < 9; t++)
      this.coefficients[t].add(e.coefficients[t]);
    return this;
  },
  addScaledSH: function(e, t) {
    for (var n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(e.coefficients[n], t);
    return this;
  },
  scale: function(e) {
    for (var t = 0; t < 9; t++)
      this.coefficients[t].multiplyScalar(e);
    return this;
  },
  lerp: function(e, t) {
    for (var n = 0; n < 9; n++)
      this.coefficients[n].lerp(e.coefficients[n], t);
    return this;
  },
  equals: function(e) {
    for (var t = 0; t < 9; t++)
      if (!this.coefficients[t].equals(e.coefficients[t]))
        return !1;
    return !0;
  },
  copy: function(e) {
    return this.set(e.coefficients);
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  fromArray: function(e, t) {
    t === void 0 && (t = 0);
    for (var n = this.coefficients, r = 0; r < 9; r++)
      n[r].fromArray(e, t + r * 3);
    return this;
  },
  toArray: function(e, t) {
    e === void 0 && (e = []), t === void 0 && (t = 0);
    for (var n = this.coefficients, r = 0; r < 9; r++)
      n[r].toArray(e, t + r * 3);
    return e;
  }
});
Object.assign(Pc, {
  // evaluate the basis functions
  // shBasis is an Array[ 9 ]
  getBasisAt: function(e, t) {
    var n = e.x, r = e.y, i = e.z;
    t[0] = 0.282095, t[1] = 0.488603 * r, t[2] = 0.488603 * i, t[3] = 0.488603 * n, t[4] = 1.092548 * n * r, t[5] = 1.092548 * r * i, t[6] = 0.315392 * (3 * i * i - 1), t[7] = 1.092548 * n * i, t[8] = 0.546274 * (n * n - r * r);
  }
});
function Jt(e, t) {
  Ze.call(this, void 0, t), this.type = "LightProbe", this.sh = e !== void 0 ? e : new Pc();
}
Jt.prototype = Object.assign(Object.create(Ze.prototype), {
  constructor: Jt,
  isLightProbe: !0,
  copy: function(e) {
    return Ze.prototype.copy.call(this, e), this.sh.copy(e.sh), this;
  },
  fromJSON: function(e) {
    return this.intensity = e.intensity, this.sh.fromArray(e.sh), this;
  },
  toJSON: function(e) {
    var t = Ze.prototype.toJSON.call(this, e);
    return t.object.sh = this.sh.toArray(), t;
  }
});
function hc(e) {
  ke.call(this, e), this.textures = {};
}
hc.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: hc,
  load: function(e, t, n, r) {
    var i = this, a = new an(i.manager);
    a.setPath(i.path), a.load(e, function(o) {
      try {
        t(i.parse(JSON.parse(o)));
      } catch (s) {
        r ? r(s) : console.error(s), i.manager.itemError(e);
      }
    }, n, r);
  },
  parse: function(e) {
    var t = this.textures;
    function n(c) {
      return t[c] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", c), t[c];
    }
    var r = new xg[e.type]();
    if (e.uuid !== void 0 && (r.uuid = e.uuid), e.name !== void 0 && (r.name = e.name), e.color !== void 0 && r.color.setHex(e.color), e.roughness !== void 0 && (r.roughness = e.roughness), e.metalness !== void 0 && (r.metalness = e.metalness), e.sheen !== void 0 && (r.sheen = new ee().setHex(e.sheen)), e.emissive !== void 0 && r.emissive.setHex(e.emissive), e.specular !== void 0 && r.specular.setHex(e.specular), e.shininess !== void 0 && (r.shininess = e.shininess), e.clearcoat !== void 0 && (r.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (r.clearcoatRoughness = e.clearcoatRoughness), e.fog !== void 0 && (r.fog = e.fog), e.flatShading !== void 0 && (r.flatShading = e.flatShading), e.blending !== void 0 && (r.blending = e.blending), e.combine !== void 0 && (r.combine = e.combine), e.side !== void 0 && (r.side = e.side), e.opacity !== void 0 && (r.opacity = e.opacity), e.transparent !== void 0 && (r.transparent = e.transparent), e.alphaTest !== void 0 && (r.alphaTest = e.alphaTest), e.depthTest !== void 0 && (r.depthTest = e.depthTest), e.depthWrite !== void 0 && (r.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (r.colorWrite = e.colorWrite), e.stencilWrite !== void 0 && (r.stencilWrite = e.stencilWrite), e.stencilWriteMask !== void 0 && (r.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (r.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (r.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (r.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (r.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (r.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (r.stencilZPass = e.stencilZPass), e.wireframe !== void 0 && (r.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (r.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (r.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (r.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (r.rotation = e.rotation), e.linewidth !== 1 && (r.linewidth = e.linewidth), e.dashSize !== void 0 && (r.dashSize = e.dashSize), e.gapSize !== void 0 && (r.gapSize = e.gapSize), e.scale !== void 0 && (r.scale = e.scale), e.polygonOffset !== void 0 && (r.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (r.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (r.polygonOffsetUnits = e.polygonOffsetUnits), e.skinning !== void 0 && (r.skinning = e.skinning), e.morphTargets !== void 0 && (r.morphTargets = e.morphTargets), e.morphNormals !== void 0 && (r.morphNormals = e.morphNormals), e.dithering !== void 0 && (r.dithering = e.dithering), e.vertexTangents !== void 0 && (r.vertexTangents = e.vertexTangents), e.visible !== void 0 && (r.visible = e.visible), e.toneMapped !== void 0 && (r.toneMapped = e.toneMapped), e.userData !== void 0 && (r.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? r.vertexColors = e.vertexColors > 0 : r.vertexColors = e.vertexColors), e.uniforms !== void 0)
      for (var i in e.uniforms) {
        var a = e.uniforms[i];
        switch (r.uniforms[i] = {}, a.type) {
          case "t":
            r.uniforms[i].value = n(a.value);
            break;
          case "c":
            r.uniforms[i].value = new ee().setHex(a.value);
            break;
          case "v2":
            r.uniforms[i].value = new U().fromArray(a.value);
            break;
          case "v3":
            r.uniforms[i].value = new M().fromArray(a.value);
            break;
          case "v4":
            r.uniforms[i].value = new Ve().fromArray(a.value);
            break;
          case "m3":
            r.uniforms[i].value = new wt().fromArray(a.value);
          case "m4":
            r.uniforms[i].value = new Ce().fromArray(a.value);
            break;
          default:
            r.uniforms[i].value = a.value;
        }
      }
    if (e.defines !== void 0 && (r.defines = e.defines), e.vertexShader !== void 0 && (r.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (r.fragmentShader = e.fragmentShader), e.extensions !== void 0)
      for (var o in e.extensions)
        r.extensions[o] = e.extensions[o];
    if (e.shading !== void 0 && (r.flatShading = e.shading === 1), e.size !== void 0 && (r.size = e.size), e.sizeAttenuation !== void 0 && (r.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (r.map = n(e.map)), e.matcap !== void 0 && (r.matcap = n(e.matcap)), e.alphaMap !== void 0 && (r.alphaMap = n(e.alphaMap)), e.bumpMap !== void 0 && (r.bumpMap = n(e.bumpMap)), e.bumpScale !== void 0 && (r.bumpScale = e.bumpScale), e.normalMap !== void 0 && (r.normalMap = n(e.normalMap)), e.normalMapType !== void 0 && (r.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      var s = e.normalScale;
      Array.isArray(s) === !1 && (s = [s, s]), r.normalScale = new U().fromArray(s);
    }
    return e.displacementMap !== void 0 && (r.displacementMap = n(e.displacementMap)), e.displacementScale !== void 0 && (r.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (r.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (r.roughnessMap = n(e.roughnessMap)), e.metalnessMap !== void 0 && (r.metalnessMap = n(e.metalnessMap)), e.emissiveMap !== void 0 && (r.emissiveMap = n(e.emissiveMap)), e.emissiveIntensity !== void 0 && (r.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (r.specularMap = n(e.specularMap)), e.envMap !== void 0 && (r.envMap = n(e.envMap)), e.envMapIntensity !== void 0 && (r.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (r.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (r.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (r.lightMap = n(e.lightMap)), e.lightMapIntensity !== void 0 && (r.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (r.aoMap = n(e.aoMap)), e.aoMapIntensity !== void 0 && (r.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (r.gradientMap = n(e.gradientMap)), e.clearcoatMap !== void 0 && (r.clearcoatMap = n(e.clearcoatMap)), e.clearcoatRoughnessMap !== void 0 && (r.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap)), e.clearcoatNormalMap !== void 0 && (r.clearcoatNormalMap = n(e.clearcoatNormalMap)), e.clearcoatNormalScale !== void 0 && (r.clearcoatNormalScale = new U().fromArray(e.clearcoatNormalScale)), r;
  },
  setTextures: function(e) {
    return this.textures = e, this;
  }
});
var Ju = {
  decodeText: function(e) {
    if (typeof TextDecoder != "undefined")
      return new TextDecoder().decode(e);
    for (var t = "", n = 0, r = e.length; n < r; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch (i) {
      return t;
    }
  },
  extractUrlBase: function(e) {
    var t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.substr(0, t + 1);
  }
};
function Do() {
  te.call(this), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
}
Do.prototype = Object.assign(Object.create(te.prototype), {
  constructor: Do,
  isInstancedBufferGeometry: !0,
  copy: function(e) {
    return te.prototype.copy.call(this, e), this.instanceCount = e.instanceCount, this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  toJSON: function() {
    var e = te.prototype.toJSON.call(this);
    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
  }
});
function fc(e, t, n, r) {
  typeof n == "number" && (r = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), pe.call(this, e, t, n), this.meshPerAttribute = r || 1;
}
fc.prototype = Object.assign(Object.create(pe.prototype), {
  constructor: fc,
  isInstancedBufferAttribute: !0,
  copy: function(e) {
    return pe.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this;
  },
  toJSON: function() {
    var e = pe.prototype.toJSON.call(this);
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
});
function dc(e) {
  ke.call(this, e);
}
dc.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: dc,
  load: function(e, t, n, r) {
    var i = this, a = new an(i.manager);
    a.setPath(i.path), a.load(e, function(o) {
      try {
        t(i.parse(JSON.parse(o)));
      } catch (s) {
        r ? r(s) : console.error(s), i.manager.itemError(e);
      }
    }, n, r);
  },
  parse: function(e) {
    var t = e.isInstancedBufferGeometry ? new Do() : new te(), n = e.data.index;
    if (n !== void 0) {
      var r = new xs[n.type](n.array);
      t.setIndex(new pe(r, 1));
    }
    var i = e.data.attributes;
    for (var a in i) {
      var o = i[a], r = new xs[o.type](o.array), s = o.isInstancedBufferAttribute ? fc : pe, c = new s(r, o.itemSize, o.normalized);
      o.name !== void 0 && (c.name = o.name), t.setAttribute(a, c);
    }
    var l = e.data.morphAttributes;
    if (l)
      for (var a in l) {
        for (var u = l[a], h = [], f = 0, d = u.length; f < d; f++) {
          var o = u[f], r = new xs[o.type](o.array), c = new pe(r, o.itemSize, o.normalized);
          o.name !== void 0 && (c.name = o.name), h.push(c);
        }
        t.morphAttributes[a] = h;
      }
    var m = e.data.morphTargetsRelative;
    m && (t.morphTargetsRelative = !0);
    var g = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (g !== void 0)
      for (var f = 0, y = g.length; f !== y; ++f) {
        var p = g[f];
        t.addGroup(p.start, p.count, p.materialIndex);
      }
    var v = e.data.boundingSphere;
    if (v !== void 0) {
      var _ = new M();
      v.center !== void 0 && _.fromArray(v.center), t.boundingSphere = new Sn(_, v.radius);
    }
    return e.name && (t.name = e.name), e.userData && (t.userData = e.userData), t;
  }
});
var xs = {
  Int8Array,
  Uint8Array,
  // Workaround for IE11 pre KB2929437. See #11440
  Uint8ClampedArray: typeof Uint8ClampedArray != "undefined" ? Uint8ClampedArray : Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
};
function pc(e) {
  ke.call(this, e);
}
pc.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: pc,
  load: function(e, t, n, r) {
    var i = this, a = this.path === "" ? Ju.extractUrlBase(e) : this.path;
    this.resourcePath = this.resourcePath || a;
    var o = new an(i.manager);
    o.setPath(this.path), o.load(e, function(s) {
      var c = null;
      try {
        c = JSON.parse(s);
      } catch (u) {
        r !== void 0 && r(u), console.error("THREE:ObjectLoader: Can't parse " + e + ".", u.message);
        return;
      }
      var l = c.metadata;
      if (l === void 0 || l.type === void 0 || l.type.toLowerCase() === "geometry") {
        console.error("THREE.ObjectLoader: Can't load " + e);
        return;
      }
      i.parse(c, t);
    }, n, r);
  },
  parse: function(e, t) {
    var n = this.parseShape(e.shapes), r = this.parseGeometries(e.geometries, n), i = this.parseImages(e.images, function() {
      t !== void 0 && t(s);
    }), a = this.parseTextures(e.textures, i), o = this.parseMaterials(e.materials, a), s = this.parseObject(e.object, r, o);
    return e.animations && (s.animations = this.parseAnimations(e.animations)), (e.images === void 0 || e.images.length === 0) && t !== void 0 && t(s), s;
  },
  parseShape: function(e) {
    var t = {};
    if (e !== void 0)
      for (var n = 0, r = e.length; n < r; n++) {
        var i = new tr().fromJSON(e[n]);
        t[i.uuid] = i;
      }
    return t;
  },
  parseGeometries: function(e, t) {
    var n = {};
    if (e !== void 0)
      for (var r = new dc(), i = 0, a = e.length; i < a; i++) {
        var o, s = e[i];
        switch (s.type) {
          case "PlaneGeometry":
          case "PlaneBufferGeometry":
            o = new bt[s.type](
              s.width,
              s.height,
              s.widthSegments,
              s.heightSegments
            );
            break;
          case "BoxGeometry":
          case "BoxBufferGeometry":
          case "CubeGeometry":
            o = new bt[s.type](
              s.width,
              s.height,
              s.depth,
              s.widthSegments,
              s.heightSegments,
              s.depthSegments
            );
            break;
          case "CircleGeometry":
          case "CircleBufferGeometry":
            o = new bt[s.type](
              s.radius,
              s.segments,
              s.thetaStart,
              s.thetaLength
            );
            break;
          case "CylinderGeometry":
          case "CylinderBufferGeometry":
            o = new bt[s.type](
              s.radiusTop,
              s.radiusBottom,
              s.height,
              s.radialSegments,
              s.heightSegments,
              s.openEnded,
              s.thetaStart,
              s.thetaLength
            );
            break;
          case "ConeGeometry":
          case "ConeBufferGeometry":
            o = new bt[s.type](
              s.radius,
              s.height,
              s.radialSegments,
              s.heightSegments,
              s.openEnded,
              s.thetaStart,
              s.thetaLength
            );
            break;
          case "SphereGeometry":
          case "SphereBufferGeometry":
            o = new bt[s.type](
              s.radius,
              s.widthSegments,
              s.heightSegments,
              s.phiStart,
              s.phiLength,
              s.thetaStart,
              s.thetaLength
            );
            break;
          case "DodecahedronGeometry":
          case "DodecahedronBufferGeometry":
          case "IcosahedronGeometry":
          case "IcosahedronBufferGeometry":
          case "OctahedronGeometry":
          case "OctahedronBufferGeometry":
          case "TetrahedronGeometry":
          case "TetrahedronBufferGeometry":
            o = new bt[s.type](
              s.radius,
              s.detail
            );
            break;
          case "RingGeometry":
          case "RingBufferGeometry":
            o = new bt[s.type](
              s.innerRadius,
              s.outerRadius,
              s.thetaSegments,
              s.phiSegments,
              s.thetaStart,
              s.thetaLength
            );
            break;
          case "TorusGeometry":
          case "TorusBufferGeometry":
            o = new bt[s.type](
              s.radius,
              s.tube,
              s.radialSegments,
              s.tubularSegments,
              s.arc
            );
            break;
          case "TorusKnotGeometry":
          case "TorusKnotBufferGeometry":
            o = new bt[s.type](
              s.radius,
              s.tube,
              s.tubularSegments,
              s.radialSegments,
              s.p,
              s.q
            );
            break;
          case "TubeGeometry":
          case "TubeBufferGeometry":
            o = new bt[s.type](
              new tc[s.path.type]().fromJSON(s.path),
              s.tubularSegments,
              s.radius,
              s.radialSegments,
              s.closed
            );
            break;
          case "LatheGeometry":
          case "LatheBufferGeometry":
            o = new bt[s.type](
              s.points,
              s.segments,
              s.phiStart,
              s.phiLength
            );
            break;
          case "PolyhedronGeometry":
          case "PolyhedronBufferGeometry":
            o = new bt[s.type](
              s.vertices,
              s.indices,
              s.radius,
              s.details
            );
            break;
          case "ShapeGeometry":
          case "ShapeBufferGeometry":
            for (var h = [], c = 0, l = s.shapes.length; c < l; c++) {
              var u = t[s.shapes[c]];
              h.push(u);
            }
            o = new bt[s.type](
              h,
              s.curveSegments
            );
            break;
          case "ExtrudeGeometry":
          case "ExtrudeBufferGeometry":
            for (var h = [], c = 0, l = s.shapes.length; c < l; c++) {
              var u = t[s.shapes[c]];
              h.push(u);
            }
            var f = s.options.extrudePath;
            f !== void 0 && (s.options.extrudePath = new tc[f.type]().fromJSON(f)), o = new bt[s.type](
              h,
              s.options
            );
            break;
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            o = r.parse(s);
            break;
          case "Geometry":
            console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');
            break;
          default:
            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
            continue;
        }
        o.uuid = s.uuid, s.name !== void 0 && (o.name = s.name), o.isBufferGeometry === !0 && s.userData !== void 0 && (o.userData = s.userData), n[s.uuid] = o;
      }
    return n;
  },
  parseMaterials: function(e, t) {
    var n = {}, r = {};
    if (e !== void 0) {
      var i = new hc();
      i.setTextures(t);
      for (var a = 0, o = e.length; a < o; a++) {
        var s = e[a];
        if (s.type === "MultiMaterial") {
          for (var c = [], l = 0; l < s.materials.length; l++) {
            var u = s.materials[l];
            n[u.uuid] === void 0 && (n[u.uuid] = i.parse(u)), c.push(n[u.uuid]);
          }
          r[s.uuid] = c;
        } else
          n[s.uuid] === void 0 && (n[s.uuid] = i.parse(s)), r[s.uuid] = n[s.uuid];
      }
    }
    return r;
  },
  parseAnimations: function(e) {
    for (var t = [], n = 0; n < e.length; n++) {
      var r = e[n], i = Yt.parse(r);
      r.uuid !== void 0 && (i.uuid = r.uuid), t.push(i);
    }
    return t;
  },
  parseImages: function(e, t) {
    var n = this, r = {};
    function i(g) {
      return n.manager.itemStart(g), o.load(g, function() {
        n.manager.itemEnd(g);
      }, void 0, function() {
        n.manager.itemError(g), n.manager.itemEnd(g);
      });
    }
    if (e !== void 0 && e.length > 0) {
      var a = new Zu(t), o = new Ki(a);
      o.setCrossOrigin(this.crossOrigin);
      for (var s = 0, c = e.length; s < c; s++) {
        var l = e[s], u = l.url;
        if (Array.isArray(u)) {
          r[l.uuid] = [];
          for (var h = 0, f = u.length; h < f; h++) {
            var d = u[h], m = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(d) ? d : n.resourcePath + d;
            r[l.uuid].push(i(m));
          }
        } else {
          var m = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url) ? l.url : n.resourcePath + l.url;
          r[l.uuid] = i(m);
        }
      }
    }
    return r;
  },
  parseTextures: function(e, t) {
    function n(c, l) {
      return typeof c == "number" ? c : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", c), l[c]);
    }
    var r = {};
    if (e !== void 0)
      for (var i = 0, a = e.length; i < a; i++) {
        var o = e[i];
        o.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), t[o.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", o.image);
        var s;
        Array.isArray(t[o.image]) ? s = new Gn(t[o.image]) : s = new je(t[o.image]), s.needsUpdate = !0, s.uuid = o.uuid, o.name !== void 0 && (s.name = o.name), o.mapping !== void 0 && (s.mapping = n(o.mapping, Cg)), o.offset !== void 0 && s.offset.fromArray(o.offset), o.repeat !== void 0 && s.repeat.fromArray(o.repeat), o.center !== void 0 && s.center.fromArray(o.center), o.rotation !== void 0 && (s.rotation = o.rotation), o.wrap !== void 0 && (s.wrapS = n(o.wrap[0], Hl), s.wrapT = n(o.wrap[1], Hl)), o.format !== void 0 && (s.format = o.format), o.type !== void 0 && (s.type = o.type), o.encoding !== void 0 && (s.encoding = o.encoding), o.minFilter !== void 0 && (s.minFilter = n(o.minFilter, Vl)), o.magFilter !== void 0 && (s.magFilter = n(o.magFilter, Vl)), o.anisotropy !== void 0 && (s.anisotropy = o.anisotropy), o.flipY !== void 0 && (s.flipY = o.flipY), o.premultiplyAlpha !== void 0 && (s.premultiplyAlpha = o.premultiplyAlpha), o.unpackAlignment !== void 0 && (s.unpackAlignment = o.unpackAlignment), r[o.uuid] = s;
      }
    return r;
  },
  parseObject: function(e, t, n) {
    var r;
    function i(y) {
      return t[y] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", y), t[y];
    }
    function a(y) {
      if (y !== void 0) {
        if (Array.isArray(y)) {
          for (var p = [], v = 0, _ = y.length; v < _; v++) {
            var b = y[v];
            n[b] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", b), p.push(n[b]);
          }
          return p;
        }
        return n[y] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", y), n[y];
      }
    }
    switch (e.type) {
      case "Scene":
        r = new Ri(), e.background !== void 0 && Number.isInteger(e.background) && (r.background = new ee(e.background)), e.fog !== void 0 && (e.fog.type === "Fog" ? r.fog = new Bs(e.fog.color, e.fog.near, e.fog.far) : e.fog.type === "FogExp2" && (r.fog = new Fs(e.fog.color, e.fog.density)));
        break;
      case "PerspectiveCamera":
        r = new ht(e.fov, e.aspect, e.near, e.far), e.focus !== void 0 && (r.focus = e.focus), e.zoom !== void 0 && (r.zoom = e.zoom), e.filmGauge !== void 0 && (r.filmGauge = e.filmGauge), e.filmOffset !== void 0 && (r.filmOffset = e.filmOffset), e.view !== void 0 && (r.view = Object.assign({}, e.view));
        break;
      case "OrthographicCamera":
        r = new ta(e.left, e.right, e.top, e.bottom, e.near, e.far), e.zoom !== void 0 && (r.zoom = e.zoom), e.view !== void 0 && (r.view = Object.assign({}, e.view));
        break;
      case "AmbientLight":
        r = new lc(e.color, e.intensity);
        break;
      case "DirectionalLight":
        r = new cc(e.color, e.intensity);
        break;
      case "PointLight":
        r = new oc(e.color, e.intensity, e.distance, e.decay);
        break;
      case "RectAreaLight":
        r = new uc(e.color, e.intensity, e.width, e.height);
        break;
      case "SpotLight":
        r = new ic(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
        break;
      case "HemisphereLight":
        r = new nc(e.color, e.groundColor, e.intensity);
        break;
      case "LightProbe":
        r = new Jt().fromJSON(e);
        break;
      case "SkinnedMesh":
        console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
      case "Mesh":
        var o = i(e.geometry), s = a(e.material);
        r = new tt(o, s);
        break;
      case "InstancedMesh":
        var o = i(e.geometry), s = a(e.material), c = e.count, l = e.instanceMatrix;
        r = new Hs(o, s, c), r.instanceMatrix = new pe(new Float32Array(l.array), 16);
        break;
      case "LOD":
        r = new co();
        break;
      case "Line":
        r = new zt(i(e.geometry), a(e.material), e.mode);
        break;
      case "LineLoop":
        r = new Vs(i(e.geometry), a(e.material));
        break;
      case "LineSegments":
        r = new ct(i(e.geometry), a(e.material));
        break;
      case "PointCloud":
      case "Points":
        r = new Ws(i(e.geometry), a(e.material));
        break;
      case "Sprite":
        r = new Us(a(e.material));
        break;
      case "Group":
        r = new Fi();
        break;
      default:
        r = new Q();
    }
    if (r.uuid = e.uuid, e.name !== void 0 && (r.name = e.name), e.matrix !== void 0 ? (r.matrix.fromArray(e.matrix), e.matrixAutoUpdate !== void 0 && (r.matrixAutoUpdate = e.matrixAutoUpdate), r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale)) : (e.position !== void 0 && r.position.fromArray(e.position), e.rotation !== void 0 && r.rotation.fromArray(e.rotation), e.quaternion !== void 0 && r.quaternion.fromArray(e.quaternion), e.scale !== void 0 && r.scale.fromArray(e.scale)), e.castShadow !== void 0 && (r.castShadow = e.castShadow), e.receiveShadow !== void 0 && (r.receiveShadow = e.receiveShadow), e.shadow && (e.shadow.bias !== void 0 && (r.shadow.bias = e.shadow.bias), e.shadow.radius !== void 0 && (r.shadow.radius = e.shadow.radius), e.shadow.mapSize !== void 0 && r.shadow.mapSize.fromArray(e.shadow.mapSize), e.shadow.camera !== void 0 && (r.shadow.camera = this.parseObject(e.shadow.camera))), e.visible !== void 0 && (r.visible = e.visible), e.frustumCulled !== void 0 && (r.frustumCulled = e.frustumCulled), e.renderOrder !== void 0 && (r.renderOrder = e.renderOrder), e.userData !== void 0 && (r.userData = e.userData), e.layers !== void 0 && (r.layers.mask = e.layers), e.children !== void 0)
      for (var u = e.children, h = 0; h < u.length; h++)
        r.add(this.parseObject(u[h], t, n));
    if (e.type === "LOD") {
      e.autoUpdate !== void 0 && (r.autoUpdate = e.autoUpdate);
      for (var f = e.levels, d = 0; d < f.length; d++) {
        var m = f[d], g = r.getObjectByProperty("uuid", m.object);
        g !== void 0 && r.addLevel(g, m.distance);
      }
    }
    return r;
  }
});
var Cg = {
  UVMapping: Mc,
  CubeReflectionMapping: bc,
  CubeRefractionMapping: wc,
  EquirectangularReflectionMapping: Mu,
  EquirectangularRefractionMapping: Sc,
  SphericalReflectionMapping: bu,
  CubeUVReflectionMapping: ca,
  CubeUVRefractionMapping: Ec
}, Hl = {
  RepeatWrapping: Qa,
  ClampToEdgeWrapping: Tt,
  MirroredRepeatWrapping: Ka
}, Vl = {
  NearestFilter: st,
  NearestMipmapNearestFilter: Ts,
  NearestMipmapLinearFilter: As,
  LinearFilter: yt,
  LinearMipmapNearestFilter: wu,
  LinearMipmapLinearFilter: Go
};
function kl(e) {
  typeof createImageBitmap == "undefined" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch == "undefined" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), ke.call(this, e), this.options = void 0;
}
kl.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: kl,
  setOptions: function(t) {
    return this.options = t, this;
  },
  load: function(e, t, n, r) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    var i = this, a = ei.get(e);
    if (a !== void 0)
      return i.manager.itemStart(e), setTimeout(function() {
        t && t(a), i.manager.itemEnd(e);
      }, 0), a;
    fetch(e).then(function(o) {
      return o.blob();
    }).then(function(o) {
      return i.options === void 0 ? createImageBitmap(o) : createImageBitmap(o, i.options);
    }).then(function(o) {
      ei.add(e, o), t && t(o), i.manager.itemEnd(e);
    }).catch(function(o) {
      r && r(o), i.manager.itemError(e), i.manager.itemEnd(e);
    }), i.manager.itemStart(e);
  }
});
function $u() {
  this.type = "ShapePath", this.color = new ee(), this.subPaths = [], this.currentPath = null;
}
Object.assign($u.prototype, {
  moveTo: function(e, t) {
    return this.currentPath = new nn(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  },
  lineTo: function(e, t) {
    return this.currentPath.lineTo(e, t), this;
  },
  quadraticCurveTo: function(e, t, n, r) {
    return this.currentPath.quadraticCurveTo(e, t, n, r), this;
  },
  bezierCurveTo: function(e, t, n, r, i, a) {
    return this.currentPath.bezierCurveTo(e, t, n, r, i, a), this;
  },
  splineThru: function(e) {
    return this.currentPath.splineThru(e), this;
  },
  toShapes: function(e, t) {
    function n(C) {
      for (var z = [], k = 0, j = C.length; k < j; k++) {
        var X = C[k], Y = new tr();
        Y.curves = X.curves, z.push(Y);
      }
      return z;
    }
    function r(C, z) {
      for (var k = z.length, j = !1, X = k - 1, Y = 0; Y < k; X = Y++) {
        var oe = z[X], Pe = z[Y], Be = Pe.x - oe.x, Ue = Pe.y - oe.y;
        if (Math.abs(Ue) > Number.EPSILON) {
          if (Ue < 0 && (oe = z[Y], Be = -Be, Pe = z[X], Ue = -Ue), C.y < oe.y || C.y > Pe.y)
            continue;
          if (C.y === oe.y) {
            if (C.x === oe.x)
              return !0;
          } else {
            var xe = Ue * (C.x - oe.x) - Be * (C.y - oe.y);
            if (xe === 0)
              return !0;
            if (xe < 0)
              continue;
            j = !j;
          }
        } else {
          if (C.y !== oe.y)
            continue;
          if (Pe.x <= C.x && C.x <= oe.x || oe.x <= C.x && C.x <= Pe.x)
            return !0;
        }
      }
      return j;
    }
    var i = Bn.isClockWise, a = this.subPaths;
    if (a.length === 0)
      return [];
    if (t === !0)
      return n(a);
    var o, s, c, l = [];
    if (a.length === 1)
      return s = a[0], c = new tr(), c.curves = s.curves, l.push(c), l;
    var u = !i(a[0].getPoints());
    u = e ? !u : u;
    var h = [], f = [], d = [], m = 0, g;
    f[m] = void 0, d[m] = [];
    for (var y = 0, p = a.length; y < p; y++)
      s = a[y], g = s.getPoints(), o = i(g), o = e ? !o : o, o ? (!u && f[m] && m++, f[m] = { s: new tr(), p: g }, f[m].s.curves = s.curves, u && m++, d[m] = []) : d[m].push({ h: s, p: g[0] });
    if (!f[0])
      return n(a);
    if (f.length > 1) {
      for (var v = !1, _ = [], b = 0, x = f.length; b < x; b++)
        h[b] = [];
      for (var b = 0, x = f.length; b < x; b++)
        for (var T = d[b], A = 0; A < T.length; A++) {
          for (var D = T[A], R = !0, V = 0; V < f.length; V++)
            r(D.p, f[V].p) && (b !== V && _.push({ froms: b, tos: V, hole: A }), R ? (R = !1, h[V].push(D)) : v = !0);
          R && h[b].push(D);
        }
      _.length > 0 && (v || (d = h));
    }
    for (var P, y = 0, I = f.length; y < I; y++) {
      c = f[y].s, l.push(c), P = d[y];
      for (var F = 0, H = P.length; F < H; F++)
        c.holes.push(P[F].h);
    }
    return l;
  }
});
function Qu(e) {
  this.type = "Font", this.data = e;
}
Object.assign(Qu.prototype, {
  isFont: !0,
  generateShapes: function(e, t) {
    t === void 0 && (t = 100);
    for (var n = [], r = Pg(e, t, this.data), i = 0, a = r.length; i < a; i++)
      Array.prototype.push.apply(n, r[i].toShapes());
    return n;
  }
});
function Pg(e, t, n) {
  for (var r = Array.from ? Array.from(e) : String(e).split(""), i = t / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * i, o = [], s = 0, c = 0, l = 0; l < r.length; l++) {
    var u = r[l];
    if (u === `
`)
      s = 0, c -= a;
    else {
      var h = Dg(u, i, s, c, n);
      s += h.offsetX, o.push(h.path);
    }
  }
  return o;
}
function Dg(e, t, n, r, i) {
  var a = i.glyphs[e] || i.glyphs["?"];
  if (!a) {
    console.error('THREE.Font: character "' + e + '" does not exists in font family ' + i.familyName + ".");
    return;
  }
  var o = new $u(), s, c, l, u, h, f, d, m;
  if (a.o)
    for (var g = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), y = 0, p = g.length; y < p; ) {
      var v = g[y++];
      switch (v) {
        case "m":
          s = g[y++] * t + n, c = g[y++] * t + r, o.moveTo(s, c);
          break;
        case "l":
          s = g[y++] * t + n, c = g[y++] * t + r, o.lineTo(s, c);
          break;
        case "q":
          l = g[y++] * t + n, u = g[y++] * t + r, h = g[y++] * t + n, f = g[y++] * t + r, o.quadraticCurveTo(h, f, l, u);
          break;
        case "b":
          l = g[y++] * t + n, u = g[y++] * t + r, h = g[y++] * t + n, f = g[y++] * t + r, d = g[y++] * t + n, m = g[y++] * t + r, o.bezierCurveTo(h, f, d, m, l, u);
          break;
      }
    }
  return { offsetX: a.ha * t, path: o };
}
function Wl(e) {
  ke.call(this, e);
}
Wl.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: Wl,
  load: function(e, t, n, r) {
    var i = this, a = new an(this.manager);
    a.setPath(this.path), a.load(e, function(o) {
      var s;
      try {
        s = JSON.parse(o);
      } catch (l) {
        console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), s = JSON.parse(o.substring(65, o.length - 2));
      }
      var c = i.parse(s);
      t && t(c);
    }, n, r);
  },
  parse: function(e) {
    return new Qu(e);
  }
});
var Va, Ku = {
  getContext: function() {
    return Va === void 0 && (Va = new (window.AudioContext || window.webkitAudioContext)()), Va;
  },
  setContext: function(e) {
    Va = e;
  }
};
function vc(e) {
  ke.call(this, e);
}
vc.prototype = Object.assign(Object.create(ke.prototype), {
  constructor: vc,
  load: function(e, t, n, r) {
    var i = this, a = new an(i.manager);
    a.setResponseType("arraybuffer"), a.setPath(i.path), a.load(e, function(o) {
      try {
        var s = o.slice(0), c = Ku.getContext();
        c.decodeAudioData(s, function(l) {
          t(l);
        });
      } catch (l) {
        r ? r(l) : console.error(l), i.manager.itemError(e);
      }
    }, n, r);
  }
});
function ql(e, t, n) {
  Jt.call(this, void 0, n);
  var r = new ee().set(e), i = new ee().set(t), a = new M(r.r, r.g, r.b), o = new M(i.r, i.g, i.b), s = Math.sqrt(Math.PI), c = s * Math.sqrt(0.75);
  this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s), this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c);
}
ql.prototype = Object.assign(Object.create(Jt.prototype), {
  constructor: ql,
  isHemisphereLightProbe: !0,
  copy: function(e) {
    return Jt.prototype.copy.call(this, e), this;
  },
  toJSON: function(e) {
    var t = Jt.prototype.toJSON.call(this, e);
    return t;
  }
});
function Xl(e, t) {
  Jt.call(this, void 0, t);
  var n = new ee().set(e);
  this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
}
Xl.prototype = Object.assign(Object.create(Jt.prototype), {
  constructor: Xl,
  isAmbientLightProbe: !0,
  copy: function(e) {
    return Jt.prototype.copy.call(this, e), this;
  },
  toJSON: function(e) {
    var t = Jt.prototype.toJSON.call(this, e);
    return t;
  }
});
var jl = new Ce(), Yl = new Ce();
function Ig() {
  this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new ht(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new ht(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
    focus: null,
    fov: null,
    aspect: null,
    near: null,
    far: null,
    zoom: null,
    eyeSep: null
  };
}
Object.assign(Ig.prototype, {
  update: function(e) {
    var t = this._cache, n = t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep;
    if (n) {
      t.focus = e.focus, t.fov = e.fov, t.aspect = e.aspect * this.aspect, t.near = e.near, t.far = e.far, t.zoom = e.zoom, t.eyeSep = this.eyeSep;
      var r = e.projectionMatrix.clone(), i = t.eyeSep / 2, a = i * t.near / t.focus, o = t.near * Math.tan(Ae.DEG2RAD * t.fov * 0.5) / t.zoom, s, c;
      Yl.elements[12] = -i, jl.elements[12] = i, s = -o * t.aspect + a, c = o * t.aspect + a, r.elements[0] = 2 * t.near / (c - s), r.elements[8] = (c + s) / (c - s), this.cameraL.projectionMatrix.copy(r), s = -o * t.aspect - a, c = o * t.aspect - a, r.elements[0] = 2 * t.near / (c - s), r.elements[8] = (c + s) / (c - s), this.cameraR.projectionMatrix.copy(r);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Yl), this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(jl);
  }
});
function eh(e) {
  this.autoStart = e !== void 0 ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
}
Object.assign(eh.prototype, {
  start: function() {
    this.startTime = (typeof performance == "undefined" ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  },
  stop: function() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  },
  getElapsedTime: function() {
    return this.getDelta(), this.elapsedTime;
  },
  getDelta: function() {
    var e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      var t = (typeof performance == "undefined" ? Date : performance).now();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
});
var Zn = new M(), Zl = new dt(), Og = new M(), Jn = new M();
function Jl() {
  Q.call(this), this.type = "AudioListener", this.context = Ku.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new eh();
}
Jl.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: Jl,
  getInput: function() {
    return this.gain;
  },
  removeFilter: function() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  },
  getFilter: function() {
    return this.filter;
  },
  setFilter: function(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  },
  getMasterVolume: function() {
    return this.gain.gain.value;
  },
  setMasterVolume: function(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  },
  updateMatrixWorld: function(e) {
    Q.prototype.updateMatrixWorld.call(this, e);
    var t = this.context.listener, n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Zn, Zl, Og), Jn.set(0, 0, -1).applyQuaternion(Zl), t.positionX) {
      var r = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(Zn.x, r), t.positionY.linearRampToValueAtTime(Zn.y, r), t.positionZ.linearRampToValueAtTime(Zn.z, r), t.forwardX.linearRampToValueAtTime(Jn.x, r), t.forwardY.linearRampToValueAtTime(Jn.y, r), t.forwardZ.linearRampToValueAtTime(Jn.z, r), t.upX.linearRampToValueAtTime(n.x, r), t.upY.linearRampToValueAtTime(n.y, r), t.upZ.linearRampToValueAtTime(n.z, r);
    } else
      t.setPosition(Zn.x, Zn.y, Zn.z), t.setOrientation(Jn.x, Jn.y, Jn.z, n.x, n.y, n.z);
  }
});
function na(e) {
  Q.call(this), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this.filters = [];
}
na.prototype = Object.assign(Object.create(Q.prototype), {
  constructor: na,
  getOutput: function() {
    return this.gain;
  },
  setNodeSource: function(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this;
  },
  setMediaElementSource: function(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
  },
  setMediaStreamSource: function(e) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
  },
  setBuffer: function(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
  },
  play: function(e) {
    if (e === void 0 && (e = 0), this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    var t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  },
  pause: function() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
  },
  stop: function() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
  },
  connect: function() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (var e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else
      this.source.connect(this.getOutput());
    return this;
  },
  disconnect: function() {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (var e = 1, t = this.filters.length; e < t; e++)
        this.filters[e - 1].disconnect(this.filters[e]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else
      this.source.disconnect(this.getOutput());
    return this;
  },
  getFilters: function() {
    return this.filters;
  },
  setFilters: function(e) {
    return e || (e = []), this.isPlaying === !0 ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this;
  },
  setDetune: function(e) {
    if (this.detune = e, this.source.detune !== void 0)
      return this.isPlaying === !0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  },
  getDetune: function() {
    return this.detune;
  },
  getFilter: function() {
    return this.getFilters()[0];
  },
  setFilter: function(e) {
    return this.setFilters(e ? [e] : []);
  },
  setPlaybackRate: function(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = e, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  },
  getPlaybackRate: function() {
    return this.playbackRate;
  },
  onEnded: function() {
    this.isPlaying = !1;
  },
  getLoop: function() {
    return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
  },
  setLoop: function(e) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = e, this.isPlaying === !0 && (this.source.loop = this.loop), this;
  },
  setLoopStart: function(e) {
    return this.loopStart = e, this;
  },
  setLoopEnd: function(e) {
    return this.loopEnd = e, this;
  },
  getVolume: function() {
    return this.gain.gain.value;
  },
  setVolume: function(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
});
var $n = new M(), $l = new dt(), Ng = new M(), Qn = new M();
function Ql(e) {
  na.call(this, e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
}
Ql.prototype = Object.assign(Object.create(na.prototype), {
  constructor: Ql,
  getOutput: function() {
    return this.panner;
  },
  getRefDistance: function() {
    return this.panner.refDistance;
  },
  setRefDistance: function(e) {
    return this.panner.refDistance = e, this;
  },
  getRolloffFactor: function() {
    return this.panner.rolloffFactor;
  },
  setRolloffFactor: function(e) {
    return this.panner.rolloffFactor = e, this;
  },
  getDistanceModel: function() {
    return this.panner.distanceModel;
  },
  setDistanceModel: function(e) {
    return this.panner.distanceModel = e, this;
  },
  getMaxDistance: function() {
    return this.panner.maxDistance;
  },
  setMaxDistance: function(e) {
    return this.panner.maxDistance = e, this;
  },
  setDirectionalCone: function(e, t, n) {
    return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this;
  },
  updateMatrixWorld: function(e) {
    if (Q.prototype.updateMatrixWorld.call(this, e), !(this.hasPlaybackControl === !0 && this.isPlaying === !1)) {
      this.matrixWorld.decompose($n, $l, Ng), Qn.set(0, 0, 1).applyQuaternion($l);
      var t = this.panner;
      if (t.positionX) {
        var n = this.context.currentTime + this.listener.timeDelta;
        t.positionX.linearRampToValueAtTime($n.x, n), t.positionY.linearRampToValueAtTime($n.y, n), t.positionZ.linearRampToValueAtTime($n.z, n), t.orientationX.linearRampToValueAtTime(Qn.x, n), t.orientationY.linearRampToValueAtTime(Qn.y, n), t.orientationZ.linearRampToValueAtTime(Qn.z, n);
      } else
        t.setPosition($n.x, $n.y, $n.z), t.setOrientation(Qn.x, Qn.y, Qn.z);
    }
  }
});
function th(e, t) {
  this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t !== void 0 ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser);
}
Object.assign(th.prototype, {
  getFrequencyData: function() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  },
  getAverageFrequency: function() {
    for (var e = 0, t = this.getFrequencyData(), n = 0; n < t.length; n++)
      e += t[n];
    return e / t.length;
  }
});
function nh(e, t, n) {
  this.binding = e, this.valueSize = n;
  var r, i, a;
  switch (t) {
    case "quaternion":
      r = this._slerp, i = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
      break;
    case "string":
    case "bool":
      r = this._select, i = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
      break;
    default:
      r = this._lerp, i = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
  }
  this._mixBufferRegion = r, this._mixBufferRegionAdditive = i, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
}
Object.assign(nh.prototype, {
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate: function(e, t) {
    var n = this.buffer, r = this.valueSize, i = e * r + r, a = this.cumulativeWeight;
    if (a === 0) {
      for (var o = 0; o !== r; ++o)
        n[i + o] = n[o];
      a = t;
    } else {
      a += t;
      var s = t / a;
      this._mixBufferRegion(n, i, 0, s, r);
    }
    this.cumulativeWeight = a;
  },
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive: function(e) {
    var t = this.buffer, n = this.valueSize, r = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(t, r, 0, e, n), this.cumulativeWeightAdditive += e;
  },
  // apply the state of 'accu<i>' to the binding when accus differ
  apply: function(e) {
    var t = this.valueSize, n = this.buffer, r = e * t + t, i = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, i < 1) {
      var s = t * this._origIndex;
      this._mixBufferRegion(
        n,
        r,
        s,
        1 - i,
        t
      );
    }
    a > 0 && this._mixBufferRegionAdditive(n, r, this._addIndex * t, 1, t);
    for (var c = t, l = t + t; c !== l; ++c)
      if (n[c] !== n[c + t]) {
        o.setValue(n, r);
        break;
      }
  },
  // remember the state of the bound property and copy it to both accus
  saveOriginalState: function() {
    var e = this.binding, t = this.buffer, n = this.valueSize, r = n * this._origIndex;
    e.getValue(t, r);
    for (var i = n, a = r; i !== a; ++i)
      t[i] = t[r + i % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  },
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState: function() {
    var e = this.valueSize * 3;
    this.binding.setValue(this.buffer, e);
  },
  _setAdditiveIdentityNumeric: function() {
    for (var e = this._addIndex * this.valueSize, t = e + this.valueSize, n = e; n < t; n++)
      this.buffer[n] = 0;
  },
  _setAdditiveIdentityQuaternion: function() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * 4 + 3] = 1;
  },
  _setAdditiveIdentityOther: function() {
    for (var e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize, n = 0; n < this.valueSize; n++)
      this.buffer[t + n] = this.buffer[e + n];
  },
  // mix functions
  _select: function(e, t, n, r, i) {
    if (r >= 0.5)
      for (var a = 0; a !== i; ++a)
        e[t + a] = e[n + a];
  },
  _slerp: function(e, t, n, r) {
    dt.slerpFlat(e, t, e, t, e, n, r);
  },
  _slerpAdditive: function(e, t, n, r, i) {
    var a = this._workIndex * i;
    dt.multiplyQuaternionsFlat(e, a, e, t, e, n), dt.slerpFlat(e, t, e, t, e, a, r);
  },
  _lerp: function(e, t, n, r, i) {
    for (var a = 1 - r, o = 0; o !== i; ++o) {
      var s = t + o;
      e[s] = e[s] * a + e[n + o] * r;
    }
  },
  _lerpAdditive: function(e, t, n, r, i) {
    for (var a = 0; a !== i; ++a) {
      var o = t + a;
      e[o] = e[o] + e[n + a] * r;
    }
  }
});
var Dc = "\\[\\]\\.:\\/", Fg = new RegExp("[" + Dc + "]", "g"), Ic = "[^" + Dc + "]", Bg = "[^" + Dc.replace("\\.", "") + "]", Ug = /((?:WC+[\/:])*)/.source.replace("WC", Ic), Gg = /(WCOD+)?/.source.replace("WCOD", Bg), zg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ic), Hg = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ic), Vg = new RegExp(
  "^" + Ug + Gg + zg + Hg + "$"
), kg = ["material", "materials", "bones"];
function rh(e, t, n) {
  var r = n || St.parseTrackName(t);
  this._targetGroup = e, this._bindings = e.subscribe_(t, r);
}
Object.assign(rh.prototype, {
  getValue: function(e, t) {
    this.bind();
    var n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
    r !== void 0 && r.getValue(e, t);
  },
  setValue: function(e, t) {
    for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r)
      n[r].setValue(e, t);
  },
  bind: function() {
    for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  },
  unbind: function() {
    for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
});
function St(e, t, n) {
  this.path = t, this.parsedPath = n || St.parseTrackName(t), this.node = St.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e;
}
Object.assign(St, {
  Composite: rh,
  create: function(e, t, n) {
    return e && e.isAnimationObjectGroup ? new St.Composite(e, t, n) : new St(e, t, n);
  },
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  sanitizeNodeName: function(e) {
    return e.replace(/\s/g, "_").replace(Fg, "");
  },
  parseTrackName: function(e) {
    var t = Vg.exec(e);
    if (!t)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    var n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, r = n.nodeName && n.nodeName.lastIndexOf(".");
    if (r !== void 0 && r !== -1) {
      var i = n.nodeName.substring(r + 1);
      kg.indexOf(i) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = i);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  },
  findNode: function(e, t) {
    if (!t || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      var n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      var r = function(a) {
        for (var o = 0; o < a.length; o++) {
          var s = a[o];
          if (s.name === t || s.uuid === t)
            return s;
          var c = r(s.children);
          if (c)
            return c;
        }
        return null;
      }, i = r(e.children);
      if (i)
        return i;
    }
    return null;
  }
});
Object.assign(St.prototype, {
  // prototype, continued
  // these are used to "bind" a nonexistent property
  _getValue_unavailable: function() {
  },
  _setValue_unavailable: function() {
  },
  BindingType: {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  },
  Versioning: {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  },
  GetterByBindingType: [
    function(t, n) {
      t[n] = this.node[this.propertyName];
    },
    function(t, n) {
      for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i)
        t[n++] = r[i];
    },
    function(t, n) {
      t[n] = this.resolvedProperty[this.propertyIndex];
    },
    function(t, n) {
      this.resolvedProperty.toArray(t, n);
    }
  ],
  SetterByBindingTypeAndVersioning: [
    [
      // Direct
      function(t, n) {
        this.targetObject[this.propertyName] = t[n];
      },
      function(t, n) {
        this.targetObject[this.propertyName] = t[n], this.targetObject.needsUpdate = !0;
      },
      function(t, n) {
        this.targetObject[this.propertyName] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    ],
    [
      // EntireArray
      function(t, n) {
        for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i)
          r[i] = t[n++];
      },
      function(t, n) {
        for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i)
          r[i] = t[n++];
        this.targetObject.needsUpdate = !0;
      },
      function(t, n) {
        for (var r = this.resolvedProperty, i = 0, a = r.length; i !== a; ++i)
          r[i] = t[n++];
        this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    ],
    [
      // ArrayElement
      function(t, n) {
        this.resolvedProperty[this.propertyIndex] = t[n];
      },
      function(t, n) {
        this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.needsUpdate = !0;
      },
      function(t, n) {
        this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    ],
    [
      // HasToFromArray
      function(t, n) {
        this.resolvedProperty.fromArray(t, n);
      },
      function(t, n) {
        this.resolvedProperty.fromArray(t, n), this.targetObject.needsUpdate = !0;
      },
      function(t, n) {
        this.resolvedProperty.fromArray(t, n), this.targetObject.matrixWorldNeedsUpdate = !0;
      }
    ]
  ],
  getValue: function(t, n) {
    this.bind(), this.getValue(t, n);
  },
  setValue: function(t, n) {
    this.bind(), this.setValue(t, n);
  },
  // create getter / setter pair for a property in the scene graph
  bind: function() {
    var e = this.node, t = this.parsedPath, n = t.objectName, r = t.propertyName, i = t.propertyIndex;
    if (e || (e = St.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (n) {
      var a = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (var o = 0; o < e.length; o++)
            if (e[o].name === a) {
              a = o;
              break;
            }
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (a !== void 0) {
        if (e[a] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[a];
      }
    }
    var s = e[r];
    if (s === void 0) {
      var c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + r + " but it wasn't found.", e);
      return;
    }
    var l = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? l = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (l = this.Versioning.MatrixWorldNeedsUpdate);
    var u = this.BindingType.Direct;
    if (i !== void 0) {
      if (r === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (e.geometry.isBufferGeometry) {
          if (!e.geometry.morphAttributes) {
            console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            return;
          }
          e.morphTargetDictionary[i] !== void 0 && (i = e.morphTargetDictionary[i]);
        } else {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
          return;
        }
      }
      u = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = i;
    } else
      s.fromArray !== void 0 && s.toArray !== void 0 ? (u = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (u = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = r;
    this.getValue = this.GetterByBindingType[u], this.setValue = this.SetterByBindingTypeAndVersioning[u][l];
  },
  unbind: function() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
});
Object.assign(St.prototype, {
  // initial state of these methods that calls 'bind'
  _getValue_unbound: St.prototype.getValue,
  _setValue_unbound: St.prototype.setValue
});
function Wg() {
  this.uuid = Ae.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
  var e = {};
  this._indicesByUUID = e;
  for (var t = 0, n = arguments.length; t !== n; ++t)
    e[arguments[t].uuid] = t;
  this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
  var r = this;
  this.stats = {
    objects: {
      get total() {
        return r._objects.length;
      },
      get inUse() {
        return this.total - r.nCachedObjects_;
      }
    },
    get bindingsPerObject() {
      return r._bindings.length;
    }
  };
}
Object.assign(Wg.prototype, {
  isAnimationObjectGroup: !0,
  add: function() {
    for (var e = this._objects, t = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = void 0, l = 0, u = arguments.length; l !== u; ++l) {
      var h = arguments[l], f = h.uuid, d = r[f];
      if (d === void 0) {
        d = t++, r[f] = d, e.push(h);
        for (var m = 0, g = s; m !== g; ++m)
          o[m].push(new St(h, i[m], a[m]));
      } else if (d < n) {
        c = e[d];
        var y = --n, p = e[y];
        r[p.uuid] = d, e[d] = p, r[f] = y, e[y] = h;
        for (var m = 0, g = s; m !== g; ++m) {
          var v = o[m], _ = v[y], b = v[d];
          v[d] = _, b === void 0 && (b = new St(h, i[m], a[m])), v[y] = b;
        }
      } else
        e[d] !== c && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
    }
    this.nCachedObjects_ = n;
  },
  remove: function() {
    for (var e = this._objects, t = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, i = r.length, a = 0, o = arguments.length; a !== o; ++a) {
      var s = arguments[a], c = s.uuid, l = n[c];
      if (l !== void 0 && l >= t) {
        var u = t++, h = e[u];
        n[h.uuid] = l, e[l] = h, n[c] = u, e[u] = s;
        for (var f = 0, d = i; f !== d; ++f) {
          var m = r[f], g = m[u], y = m[l];
          m[l] = g, m[u] = y;
        }
      }
    }
    this.nCachedObjects_ = t;
  },
  // remove & forget
  uncache: function() {
    for (var e = this._objects, t = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._bindings, a = i.length, o = 0, s = arguments.length; o !== s; ++o) {
      var c = arguments[o], l = c.uuid, u = r[l];
      if (u !== void 0)
        if (delete r[l], u < n) {
          var h = --n, f = e[h], d = --t, m = e[d];
          r[f.uuid] = u, e[u] = f, r[m.uuid] = h, e[h] = m, e.pop();
          for (var g = 0, y = a; g !== y; ++g) {
            var p = i[g], v = p[h], _ = p[d];
            p[u] = v, p[h] = _, p.pop();
          }
        } else {
          var d = --t, m = e[d];
          r[m.uuid] = u, e[u] = m, e.pop();
          for (var g = 0, y = a; g !== y; ++g) {
            var p = i[g];
            p[u] = p[d], p.pop();
          }
        }
    }
    this.nCachedObjects_ = n;
  },
  // Internal interface used by befriended PropertyBinding.Composite:
  subscribe_: function(e, t) {
    var n = this._bindingsIndicesByPath, r = n[e], i = this._bindings;
    if (r !== void 0)
      return i[r];
    var a = this._paths, o = this._parsedPaths, s = this._objects, c = s.length, l = this.nCachedObjects_, u = new Array(c);
    r = i.length, n[e] = r, a.push(e), o.push(t), i.push(u);
    for (var h = l, f = s.length; h !== f; ++h) {
      var d = s[h];
      u[h] = new St(d, e, t);
    }
    return u;
  },
  unsubscribe_: function(e) {
    var t = this._bindingsIndicesByPath, n = t[e];
    if (n !== void 0) {
      var r = this._paths, i = this._parsedPaths, a = this._bindings, o = a.length - 1, s = a[o], c = e[o];
      t[c] = n, a[n] = s, a.pop(), i[n] = i[o], i.pop(), r[n] = r[o], r.pop();
    }
  }
});
function ih(e, t, n, r) {
  this._mixer = e, this._clip = t, this._localRoot = n || null, this.blendMode = r || t.blendMode;
  for (var i = t.tracks, a = i.length, o = new Array(a), s = {
    endingStart: Fr,
    endingEnd: Fr
  }, c = 0; c !== a; ++c) {
    var l = i[c].createInterpolant(null);
    o[c] = l, l.settings = s;
  }
  this._interpolantSettings = s, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = Ff, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
}
Object.assign(ih.prototype, {
  // State & Scheduling
  play: function() {
    return this._mixer._activateAction(this), this;
  },
  stop: function() {
    return this._mixer._deactivateAction(this), this.reset();
  },
  reset: function() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  },
  isRunning: function() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  },
  // return true when play has been called
  isScheduled: function() {
    return this._mixer._isActiveAction(this);
  },
  startAt: function(e) {
    return this._startTime = e, this;
  },
  setLoop: function(e, t) {
    return this.loop = e, this.repetitions = t, this;
  },
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight: function(e) {
    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading();
  },
  // return the weight considering fading and .enabled
  getEffectiveWeight: function() {
    return this._effectiveWeight;
  },
  fadeIn: function(e) {
    return this._scheduleFading(e, 0, 1);
  },
  fadeOut: function(e) {
    return this._scheduleFading(e, 1, 0);
  },
  crossFadeFrom: function(e, t, n) {
    if (e.fadeOut(t), this.fadeIn(t), n) {
      var r = this._clip.duration, i = e._clip.duration, a = i / r, o = r / i;
      e.warp(1, a, t), this.warp(o, 1, t);
    }
    return this;
  },
  crossFadeTo: function(e, t, n) {
    return e.crossFadeFrom(this, t, n);
  },
  stopFading: function() {
    var e = this._weightInterpolant;
    return e !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  },
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale: function(e) {
    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping();
  },
  // return the time scale considering warping and .paused
  getEffectiveTimeScale: function() {
    return this._effectiveTimeScale;
  },
  setDuration: function(e) {
    return this.timeScale = this._clip.duration / e, this.stopWarping();
  },
  syncWith: function(e) {
    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping();
  },
  halt: function(e) {
    return this.warp(this._effectiveTimeScale, 0, e);
  },
  warp: function(e, t, n) {
    var r = this._mixer, i = r.time, a = this._timeScaleInterpolant, o = this.timeScale;
    a === null && (a = r._lendControlInterpolant(), this._timeScaleInterpolant = a);
    var s = a.parameterPositions, c = a.sampleValues;
    return s[0] = i, s[1] = i + n, c[0] = e / o, c[1] = t / o, this;
  },
  stopWarping: function() {
    var e = this._timeScaleInterpolant;
    return e !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this;
  },
  // Object Accessors
  getMixer: function() {
    return this._mixer;
  },
  getClip: function() {
    return this._clip;
  },
  getRoot: function() {
    return this._localRoot || this._mixer._root;
  },
  // Interna
  _update: function(e, t, n, r) {
    if (!this.enabled) {
      this._updateWeight(e);
      return;
    }
    var i = this._startTime;
    if (i !== null) {
      var a = (e - i) * n;
      if (a < 0 || n === 0)
        return;
      this._startTime = null, t = n * a;
    }
    t *= this._updateTimeScale(e);
    var o = this._updateTime(t), s = this._updateWeight(e);
    if (s > 0) {
      var c = this._interpolants, l = this._propertyBindings;
      switch (this.blendMode) {
        case Su:
          for (var u = 0, h = c.length; u !== h; ++u)
            c[u].evaluate(o), l[u].accumulateAdditive(s);
          break;
        case Tc:
        default:
          for (var u = 0, h = c.length; u !== h; ++u)
            c[u].evaluate(o), l[u].accumulate(r, s);
      }
    }
  },
  _updateWeight: function(e) {
    var t = 0;
    if (this.enabled) {
      t = this.weight;
      var n = this._weightInterpolant;
      if (n !== null) {
        var r = n.evaluate(e)[0];
        t *= r, e > n.parameterPositions[1] && (this.stopFading(), r === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = t, t;
  },
  _updateTimeScale: function(e) {
    var t = 0;
    if (!this.paused) {
      t = this.timeScale;
      var n = this._timeScaleInterpolant;
      if (n !== null) {
        var r = n.evaluate(e)[0];
        t *= r, e > n.parameterPositions[1] && (this.stopWarping(), t === 0 ? this.paused = !0 : this.timeScale = t);
      }
    }
    return this._effectiveTimeScale = t, t;
  },
  _updateTime: function(e) {
    var t = this.time + e, n = this._clip.duration, r = this.loop, i = this._loopCount, a = r === Bf;
    if (e === 0)
      return i === -1 ? t : a && (i & 1) === 1 ? n - t : t;
    if (r === Nf) {
      i === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      e: {
        if (t >= n)
          t = n;
        else if (t < 0)
          t = 0;
        else {
          this.time = t;
          break e;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = t, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: e < 0 ? -1 : 1
        });
      }
    } else {
      if (i === -1 && (e >= 0 ? (i = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), t >= n || t < 0) {
        var o = Math.floor(t / n);
        t -= n * o, i += Math.abs(o);
        var s = this.repetitions - i;
        if (s <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = e > 0 ? n : 0, this.time = t, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e > 0 ? 1 : -1
          });
        else {
          if (s === 1) {
            var c = e < 0;
            this._setEndings(c, !c, a);
          } else
            this._setEndings(!1, !1, a);
          this._loopCount = i, this.time = t, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: o
          });
        }
      } else
        this.time = t;
      if (a && (i & 1) === 1)
        return n - t;
    }
    return t;
  },
  _setEndings: function(e, t, n) {
    var r = this._interpolantSettings;
    n ? (r.endingStart = Rr, r.endingEnd = Rr) : (e ? r.endingStart = this.zeroSlopeAtStart ? Rr : Fr : r.endingStart = ro, t ? r.endingEnd = this.zeroSlopeAtEnd ? Rr : Fr : r.endingEnd = ro);
  },
  _scheduleFading: function(e, t, n) {
    var r = this._mixer, i = r.time, a = this._weightInterpolant;
    a === null && (a = r._lendControlInterpolant(), this._weightInterpolant = a);
    var o = a.parameterPositions, s = a.sampleValues;
    return o[0] = i, s[0] = t, o[1] = i + e, s[1] = n, this;
  }
});
function Kl(e) {
  this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
}
Kl.prototype = Object.assign(Object.create(wn.prototype), {
  constructor: Kl,
  _bindAction: function(e, t) {
    var n = e._localRoot || this._root, r = e._clip.tracks, i = r.length, a = e._propertyBindings, o = e._interpolants, s = n.uuid, c = this._bindingsByRootAndName, l = c[s];
    l === void 0 && (l = {}, c[s] = l);
    for (var u = 0; u !== i; ++u) {
      var h = r[u], f = h.name, d = l[f];
      if (d !== void 0)
        a[u] = d;
      else {
        if (d = a[u], d !== void 0) {
          d._cacheIndex === null && (++d.referenceCount, this._addInactiveBinding(d, s, f));
          continue;
        }
        var m = t && t._propertyBindings[u].binding.parsedPath;
        d = new nh(
          St.create(n, f, m),
          h.ValueTypeName,
          h.getValueSize()
        ), ++d.referenceCount, this._addInactiveBinding(d, s, f), a[u] = d;
      }
      o[u].resultBuffer = d.buffer;
    }
  },
  _activateAction: function(e) {
    if (!this._isActiveAction(e)) {
      if (e._cacheIndex === null) {
        var t = (e._localRoot || this._root).uuid, n = e._clip.uuid, r = this._actionsByClip[n];
        this._bindAction(
          e,
          r && r.knownActions[0]
        ), this._addInactiveAction(e, n, t);
      }
      for (var i = e._propertyBindings, a = 0, o = i.length; a !== o; ++a) {
        var s = i[a];
        s.useCount++ === 0 && (this._lendBinding(s), s.saveOriginalState());
      }
      this._lendAction(e);
    }
  },
  _deactivateAction: function(e) {
    if (this._isActiveAction(e)) {
      for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
        var i = t[n];
        --i.useCount === 0 && (i.restoreOriginalState(), this._takeBackBinding(i));
      }
      this._takeBackAction(e);
    }
  },
  // Memory manager
  _initMemoryManager: function() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    var e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  },
  // Memory management for AnimationAction objects
  _isActiveAction: function(e) {
    var t = e._cacheIndex;
    return t !== null && t < this._nActiveActions;
  },
  _addInactiveAction: function(e, t, n) {
    var r = this._actions, i = this._actionsByClip, a = i[t];
    if (a === void 0)
      a = {
        knownActions: [e],
        actionByRoot: {}
      }, e._byClipCacheIndex = 0, i[t] = a;
    else {
      var o = a.knownActions;
      e._byClipCacheIndex = o.length, o.push(e);
    }
    e._cacheIndex = r.length, r.push(e), a.actionByRoot[n] = e;
  },
  _removeInactiveAction: function(e) {
    var t = this._actions, n = t[t.length - 1], r = e._cacheIndex;
    n._cacheIndex = r, t[r] = n, t.pop(), e._cacheIndex = null;
    var i = e._clip.uuid, a = this._actionsByClip, o = a[i], s = o.knownActions, c = s[s.length - 1], l = e._byClipCacheIndex;
    c._byClipCacheIndex = l, s[l] = c, s.pop(), e._byClipCacheIndex = null;
    var u = o.actionByRoot, h = (e._localRoot || this._root).uuid;
    delete u[h], s.length === 0 && delete a[i], this._removeInactiveBindingsForAction(e);
  },
  _removeInactiveBindingsForAction: function(e) {
    for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
      var i = t[n];
      --i.referenceCount === 0 && this._removeInactiveBinding(i);
    }
  },
  _lendAction: function(e) {
    var t = this._actions, n = e._cacheIndex, r = this._nActiveActions++, i = t[r];
    e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
  },
  _takeBackAction: function(e) {
    var t = this._actions, n = e._cacheIndex, r = --this._nActiveActions, i = t[r];
    e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
  },
  // Memory management for PropertyMixer objects
  _addInactiveBinding: function(e, t, n) {
    var r = this._bindingsByRootAndName, i = r[t], a = this._bindings;
    i === void 0 && (i = {}, r[t] = i), i[n] = e, e._cacheIndex = a.length, a.push(e);
  },
  _removeInactiveBinding: function(e) {
    var t = this._bindings, n = e.binding, r = n.rootNode.uuid, i = n.path, a = this._bindingsByRootAndName, o = a[r], s = t[t.length - 1], c = e._cacheIndex;
    s._cacheIndex = c, t[c] = s, t.pop(), delete o[i], Object.keys(o).length === 0 && delete a[r];
  },
  _lendBinding: function(e) {
    var t = this._bindings, n = e._cacheIndex, r = this._nActiveBindings++, i = t[r];
    e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
  },
  _takeBackBinding: function(e) {
    var t = this._bindings, n = e._cacheIndex, r = --this._nActiveBindings, i = t[r];
    e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i;
  },
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant: function() {
    var e = this._controlInterpolants, t = this._nActiveControlInterpolants++, n = e[t];
    return n === void 0 && (n = new Co(
      new Float32Array(2),
      new Float32Array(2),
      1,
      this._controlInterpolantsResultBuffer
    ), n.__cacheIndex = t, e[t] = n), n;
  },
  _takeBackControlInterpolant: function(e) {
    var t = this._controlInterpolants, n = e.__cacheIndex, r = --this._nActiveControlInterpolants, i = t[r];
    e.__cacheIndex = r, t[r] = e, i.__cacheIndex = n, t[n] = i;
  },
  _controlInterpolantsResultBuffer: new Float32Array(1),
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction: function(e, t, n) {
    var r = t || this._root, i = r.uuid, a = typeof e == "string" ? Yt.findByName(r, e) : e, o = a !== null ? a.uuid : e, s = this._actionsByClip[o], c = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = Tc), s !== void 0) {
      var l = s.actionByRoot[i];
      if (l !== void 0 && l.blendMode === n)
        return l;
      c = s.knownActions[0], a === null && (a = c._clip);
    }
    if (a === null)
      return null;
    var u = new ih(this, a, t, n);
    return this._bindAction(u, c), this._addInactiveAction(u, o, i), u;
  },
  // get an existing action
  existingAction: function(e, t) {
    var n = t || this._root, r = n.uuid, i = typeof e == "string" ? Yt.findByName(n, e) : e, a = i ? i.uuid : e, o = this._actionsByClip[a];
    return o !== void 0 && o.actionByRoot[r] || null;
  },
  // deactivates all previously scheduled actions
  stopAllAction: function() {
    for (var e = this._actions, t = this._nActiveActions, n = t - 1; n >= 0; --n)
      e[n].stop();
    return this;
  },
  // advance the time and update apply the animation
  update: function(e) {
    e *= this.timeScale;
    for (var t = this._actions, n = this._nActiveActions, r = this.time += e, i = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
      var s = t[o];
      s._update(r, e, i, a);
    }
    for (var c = this._bindings, l = this._nActiveBindings, o = 0; o !== l; ++o)
      c[o].apply(a);
    return this;
  },
  // Allows you to seek to a specific time in an animation.
  setTime: function(e) {
    this.time = 0;
    for (var t = 0; t < this._actions.length; t++)
      this._actions[t].time = 0;
    return this.update(e);
  },
  // return this mixer's root target object
  getRoot: function() {
    return this._root;
  },
  // free all resources specific to a particular clip
  uncacheClip: function(e) {
    var t = this._actions, n = e.uuid, r = this._actionsByClip, i = r[n];
    if (i !== void 0) {
      for (var a = i.knownActions, o = 0, s = a.length; o !== s; ++o) {
        var c = a[o];
        this._deactivateAction(c);
        var l = c._cacheIndex, u = t[t.length - 1];
        c._cacheIndex = null, c._byClipCacheIndex = null, u._cacheIndex = l, t[l] = u, t.pop(), this._removeInactiveBindingsForAction(c);
      }
      delete r[n];
    }
  },
  // free all resources specific to a particular root target object
  uncacheRoot: function(e) {
    var t = e.uuid, n = this._actionsByClip;
    for (var r in n) {
      var i = n[r].actionByRoot, a = i[t];
      a !== void 0 && (this._deactivateAction(a), this._removeInactiveAction(a));
    }
    var o = this._bindingsByRootAndName, s = o[t];
    if (s !== void 0)
      for (var c in s) {
        var l = s[c];
        l.restoreOriginalState(), this._removeInactiveBinding(l);
      }
  },
  // remove a targeted clip from the cache
  uncacheAction: function(e, t) {
    var n = this.existingAction(e, t);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
});
function mc(e) {
  typeof e == "string" && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e;
}
mc.prototype.clone = function() {
  return new mc(this.value.clone === void 0 ? this.value : this.value.clone());
};
function eu(e, t, n) {
  zn.call(this, e, t), this.meshPerAttribute = n || 1;
}
eu.prototype = Object.assign(Object.create(zn.prototype), {
  constructor: eu,
  isInstancedInterleavedBuffer: !0,
  copy: function(e) {
    return zn.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
});
function ah(e, t, n, r) {
  this.ray = new ii(e, t), this.near = n || 0, this.far = r || 1 / 0, this.camera = null, this.layers = new Rc(), this.params = {
    Mesh: {},
    Line: { threshold: 1 },
    LOD: {},
    Points: { threshold: 1 },
    Sprite: {}
  }, Object.defineProperties(this.params, {
    PointCloud: {
      get: function() {
        return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points;
      }
    }
  });
}
function tu(e, t) {
  return e.distance - t.distance;
}
function gc(e, t, n, r) {
  if (e.layers.test(t.layers) && e.raycast(t, n), r === !0)
    for (var i = e.children, a = 0, o = i.length; a < o; a++)
      gc(i[a], t, n, !0);
}
Object.assign(ah.prototype, {
  set: function(e, t) {
    this.ray.set(e, t);
  },
  setFromCamera: function(e, t) {
    t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type.");
  },
  intersectObject: function(e, t, n) {
    var r = n || [];
    return gc(e, this, r, t), r.sort(tu), r;
  },
  intersectObjects: function(e, t, n) {
    var r = n || [];
    if (Array.isArray(e) === !1)
      return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), r;
    for (var i = 0, a = e.length; i < a; i++)
      gc(e[i], this, r, t);
    return r.sort(tu), r;
  }
});
function qg(e, t, n) {
  return this.radius = e !== void 0 ? e : 1, this.phi = t !== void 0 ? t : 0, this.theta = n !== void 0 ? n : 0, this;
}
Object.assign(qg.prototype, {
  set: function(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  },
  // restrict phi to be betwee EPS and PI-EPS
  makeSafe: function() {
    var e = 1e-6;
    return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)), this;
  },
  setFromVector3: function(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  },
  setFromCartesianCoords: function(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Ae.clamp(t / this.radius, -1, 1))), this;
  }
});
function Xg(e, t, n) {
  return this.radius = e !== void 0 ? e : 1, this.theta = t !== void 0 ? t : 0, this.y = n !== void 0 ? n : 0, this;
}
Object.assign(Xg.prototype, {
  set: function(e, t, n) {
    return this.radius = e, this.theta = t, this.y = n, this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this;
  },
  setFromVector3: function(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  },
  setFromCartesianCoords: function(e, t, n) {
    return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this;
  }
});
var nu = new U();
function oh(e, t) {
  this.min = e !== void 0 ? e : new U(1 / 0, 1 / 0), this.max = t !== void 0 ? t : new U(-1 / 0, -1 / 0);
}
Object.assign(oh.prototype, {
  set: function(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  },
  setFromPoints: function(e) {
    this.makeEmpty();
    for (var t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  },
  setFromCenterAndSize: function(e, t) {
    var n = nu.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  },
  makeEmpty: function() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  },
  isEmpty: function() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  },
  getCenter: function(e) {
    return e === void 0 && (console.warn("THREE.Box2: .getCenter() target is now required"), e = new U()), this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  },
  getSize: function(e) {
    return e === void 0 && (console.warn("THREE.Box2: .getSize() target is now required"), e = new U()), this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
  },
  expandByPoint: function(e) {
    return this.min.min(e), this.max.max(e), this;
  },
  expandByVector: function(e) {
    return this.min.sub(e), this.max.add(e), this;
  },
  expandByScalar: function(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  },
  containsPoint: function(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y);
  },
  containsBox: function(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
  },
  getParameter: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box2: .getParameter() target is now required"), t = new U()), t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y)
    );
  },
  intersectsBox: function(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y);
  },
  clampPoint: function(e, t) {
    return t === void 0 && (console.warn("THREE.Box2: .clampPoint() target is now required"), t = new U()), t.copy(e).clamp(this.min, this.max);
  },
  distanceToPoint: function(e) {
    var t = nu.copy(e).clamp(this.min, this.max);
    return t.sub(e).length();
  },
  intersect: function(e) {
    return this.min.max(e.min), this.max.min(e.max), this;
  },
  union: function(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  },
  translate: function(e) {
    return this.min.add(e), this.max.add(e), this;
  },
  equals: function(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
});
var ru = new M(), ka = new M();
function sh(e, t) {
  this.start = e !== void 0 ? e : new M(), this.end = t !== void 0 ? t : new M();
}
Object.assign(sh.prototype, {
  set: function(e, t) {
    return this.start.copy(e), this.end.copy(t), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  },
  copy: function(e) {
    return this.start.copy(e.start), this.end.copy(e.end), this;
  },
  getCenter: function(e) {
    return e === void 0 && (console.warn("THREE.Line3: .getCenter() target is now required"), e = new M()), e.addVectors(this.start, this.end).multiplyScalar(0.5);
  },
  delta: function(e) {
    return e === void 0 && (console.warn("THREE.Line3: .delta() target is now required"), e = new M()), e.subVectors(this.end, this.start);
  },
  distanceSq: function() {
    return this.start.distanceToSquared(this.end);
  },
  distance: function() {
    return this.start.distanceTo(this.end);
  },
  at: function(e, t) {
    return t === void 0 && (console.warn("THREE.Line3: .at() target is now required"), t = new M()), this.delta(t).multiplyScalar(e).add(this.start);
  },
  closestPointToPointParameter: function(e, t) {
    ru.subVectors(e, this.start), ka.subVectors(this.end, this.start);
    var n = ka.dot(ka), r = ka.dot(ru), i = r / n;
    return t && (i = Ae.clamp(i, 0, 1)), i;
  },
  closestPointToPoint: function(e, t, n) {
    var r = this.closestPointToPointParameter(e, t);
    return n === void 0 && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new M()), this.delta(n).multiplyScalar(r).add(this.start);
  },
  applyMatrix4: function(e) {
    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
  },
  equals: function(e) {
    return e.start.equals(this.start) && e.end.equals(this.end);
  }
});
function Io(e) {
  Q.call(this), this.material = e, this.render = function() {
  }, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0;
}
Io.prototype = Object.create(Q.prototype);
Io.prototype.constructor = Io;
Io.prototype.isImmediateRenderObject = !0;
var iu = new M();
function ra(e, t) {
  Q.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
  for (var n = new te(), r = [
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    -1,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    -1,
    1
  ], i = 0, a = 1, o = 32; i < o; i++, a++) {
    var s = i / o * Math.PI * 2, c = a / o * Math.PI * 2;
    r.push(
      Math.cos(s),
      Math.sin(s),
      1,
      Math.cos(c),
      Math.sin(c),
      1
    );
  }
  n.setAttribute("position", new $(r, 3));
  var l = new at({ fog: !1, toneMapped: !1 });
  this.cone = new ct(n, l), this.add(this.cone), this.update();
}
ra.prototype = Object.create(Q.prototype);
ra.prototype.constructor = ra;
ra.prototype.dispose = function() {
  this.cone.geometry.dispose(), this.cone.material.dispose();
};
ra.prototype.update = function() {
  this.light.updateMatrixWorld();
  var e = this.light.distance ? this.light.distance : 1e3, t = e * Math.tan(this.light.angle);
  this.cone.scale.set(t, t, e), iu.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(iu), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
};
var Dn = new M(), Wa = new Ce(), _s = new Ce();
function ch(e) {
  var t = [];
  e && e.isBone && t.push(e);
  for (var n = 0; n < e.children.length; n++)
    t.push.apply(t, ch(e.children[n]));
  return t;
}
function ti(e) {
  for (var t = ch(e), n = new te(), r = [], i = [], a = new ee(0, 0, 1), o = new ee(0, 1, 0), s = 0; s < t.length; s++) {
    var c = t[s];
    c.parent && c.parent.isBone && (r.push(0, 0, 0), r.push(0, 0, 0), i.push(a.r, a.g, a.b), i.push(o.r, o.g, o.b));
  }
  n.setAttribute("position", new $(r, 3)), n.setAttribute("color", new $(i, 3));
  var l = new at({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 });
  ct.call(this, n, l), this.type = "SkeletonHelper", this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
}
ti.prototype = Object.create(ct.prototype);
ti.prototype.constructor = ti;
ti.prototype.isSkeletonHelper = !0;
ti.prototype.updateMatrixWorld = function(e) {
  var t = this.bones, n = this.geometry, r = n.getAttribute("position");
  _s.getInverse(this.root.matrixWorld);
  for (var i = 0, a = 0; i < t.length; i++) {
    var o = t[i];
    o.parent && o.parent.isBone && (Wa.multiplyMatrices(_s, o.matrixWorld), Dn.setFromMatrixPosition(Wa), r.setXYZ(a, Dn.x, Dn.y, Dn.z), Wa.multiplyMatrices(_s, o.parent.matrixWorld), Dn.setFromMatrixPosition(Wa), r.setXYZ(a + 1, Dn.x, Dn.y, Dn.z), a += 2);
  }
  n.getAttribute("position").needsUpdate = !0, Q.prototype.updateMatrixWorld.call(this, e);
};
function ia(e, t, n) {
  this.light = e, this.light.updateMatrixWorld(), this.color = n;
  var r = new kr(t, 4, 2), i = new $t({ wireframe: !0, fog: !1, toneMapped: !1 });
  tt.call(this, r, i), this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
}
ia.prototype = Object.create(tt.prototype);
ia.prototype.constructor = ia;
ia.prototype.dispose = function() {
  this.geometry.dispose(), this.material.dispose();
};
ia.prototype.update = function() {
  this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
};
var jg = new M(), au = new ee(), ou = new ee();
function aa(e, t, n) {
  Q.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
  var r = new zr(t);
  r.rotateY(Math.PI * 0.5), this.material = new $t({ wireframe: !0, fog: !1, toneMapped: !1 }), this.color === void 0 && (this.material.vertexColors = !0);
  var i = r.getAttribute("position"), a = new Float32Array(i.count * 3);
  r.setAttribute("color", new pe(a, 3)), this.add(new tt(r, this.material)), this.update();
}
aa.prototype = Object.create(Q.prototype);
aa.prototype.constructor = aa;
aa.prototype.dispose = function() {
  this.children[0].geometry.dispose(), this.children[0].material.dispose();
};
aa.prototype.update = function() {
  var e = this.children[0];
  if (this.color !== void 0)
    this.material.color.set(this.color);
  else {
    var t = e.geometry.getAttribute("color");
    au.copy(this.light.color), ou.copy(this.light.groundColor);
    for (var n = 0, r = t.count; n < r; n++) {
      var i = n < r / 2 ? au : ou;
      t.setXYZ(n, i.r, i.g, i.b);
    }
    t.needsUpdate = !0;
  }
  e.lookAt(jg.setFromMatrixPosition(this.light.matrixWorld).negate());
};
function yc(e, t, n, r) {
  e = e || 10, t = t || 10, n = new ee(n !== void 0 ? n : 4473924), r = new ee(r !== void 0 ? r : 8947848);
  for (var i = t / 2, a = e / t, o = e / 2, s = [], c = [], l = 0, u = 0, h = -o; l <= t; l++, h += a) {
    s.push(-o, 0, h, o, 0, h), s.push(h, 0, -o, h, 0, o);
    var f = l === i ? n : r;
    f.toArray(c, u), u += 3, f.toArray(c, u), u += 3, f.toArray(c, u), u += 3, f.toArray(c, u), u += 3;
  }
  var d = new te();
  d.setAttribute("position", new $(s, 3)), d.setAttribute("color", new $(c, 3));
  var m = new at({ vertexColors: !0, toneMapped: !1 });
  ct.call(this, d, m), this.type = "GridHelper";
}
yc.prototype = Object.assign(Object.create(ct.prototype), {
  constructor: yc,
  copy: function(e) {
    return ct.prototype.copy.call(this, e), this.geometry.copy(e.geometry), this.material.copy(e.material), this;
  },
  clone: function() {
    return new this.constructor().copy(this);
  }
});
function xc(e, t, n, r, i, a) {
  e = e || 10, t = t || 16, n = n || 8, r = r || 64, i = new ee(i !== void 0 ? i : 4473924), a = new ee(a !== void 0 ? a : 8947848);
  var o = [], s = [], c, l, u, h, f, d, m;
  for (h = 0; h <= t; h++)
    u = h / t * (Math.PI * 2), c = Math.sin(u) * e, l = Math.cos(u) * e, o.push(0, 0, 0), o.push(c, 0, l), m = h & 1 ? i : a, s.push(m.r, m.g, m.b), s.push(m.r, m.g, m.b);
  for (h = 0; h <= n; h++)
    for (m = h & 1 ? i : a, d = e - e / n * h, f = 0; f < r; f++)
      u = f / r * (Math.PI * 2), c = Math.sin(u) * d, l = Math.cos(u) * d, o.push(c, 0, l), s.push(m.r, m.g, m.b), u = (f + 1) / r * (Math.PI * 2), c = Math.sin(u) * d, l = Math.cos(u) * d, o.push(c, 0, l), s.push(m.r, m.g, m.b);
  var g = new te();
  g.setAttribute("position", new $(o, 3)), g.setAttribute("color", new $(s, 3));
  var y = new at({ vertexColors: !0, toneMapped: !1 });
  ct.call(this, g, y), this.type = "PolarGridHelper";
}
xc.prototype = Object.create(ct.prototype);
xc.prototype.constructor = xc;
var su = new M(), qa = new M(), cu = new M();
function oa(e, t, n) {
  Q.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, t === void 0 && (t = 1);
  var r = new te();
  r.setAttribute("position", new $([
    -t,
    t,
    0,
    t,
    t,
    0,
    t,
    -t,
    0,
    -t,
    -t,
    0,
    -t,
    t,
    0
  ], 3));
  var i = new at({ fog: !1, toneMapped: !1 });
  this.lightPlane = new zt(r, i), this.add(this.lightPlane), r = new te(), r.setAttribute("position", new $([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new zt(r, i), this.add(this.targetLine), this.update();
}
oa.prototype = Object.create(Q.prototype);
oa.prototype.constructor = oa;
oa.prototype.dispose = function() {
  this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
};
oa.prototype.update = function() {
  su.setFromMatrixPosition(this.light.matrixWorld), qa.setFromMatrixPosition(this.light.target.matrixWorld), cu.subVectors(qa, su), this.lightPlane.lookAt(qa), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(qa), this.targetLine.scale.z = cu.length();
};
var Xa = new M(), nt = new gn();
function Oo(e) {
  var t = new te(), n = new at({ color: 16777215, vertexColors: !0, toneMapped: !1 }), r = [], i = [], a = {}, o = new ee(16755200), s = new ee(16711680), c = new ee(43775), l = new ee(16777215), u = new ee(3355443);
  h("n1", "n2", o), h("n2", "n4", o), h("n4", "n3", o), h("n3", "n1", o), h("f1", "f2", o), h("f2", "f4", o), h("f4", "f3", o), h("f3", "f1", o), h("n1", "f1", o), h("n2", "f2", o), h("n3", "f3", o), h("n4", "f4", o), h("p", "n1", s), h("p", "n2", s), h("p", "n3", s), h("p", "n4", s), h("u1", "u2", c), h("u2", "u3", c), h("u3", "u1", c), h("c", "t", l), h("p", "c", u), h("cn1", "cn2", u), h("cn3", "cn4", u), h("cf1", "cf2", u), h("cf3", "cf4", u);
  function h(d, m, g) {
    f(d, g), f(m, g);
  }
  function f(d, m) {
    r.push(0, 0, 0), i.push(m.r, m.g, m.b), a[d] === void 0 && (a[d] = []), a[d].push(r.length / 3 - 1);
  }
  t.setAttribute("position", new $(r, 3)), t.setAttribute("color", new $(i, 3)), ct.call(this, t, n), this.type = "CameraHelper", this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update();
}
Oo.prototype = Object.create(ct.prototype);
Oo.prototype.constructor = Oo;
Oo.prototype.update = function() {
  var e = this.geometry, t = this.pointMap, n = 1, r = 1;
  nt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), it("c", t, e, nt, 0, 0, -1), it("t", t, e, nt, 0, 0, 1), it("n1", t, e, nt, -n, -r, -1), it("n2", t, e, nt, n, -r, -1), it("n3", t, e, nt, -n, r, -1), it("n4", t, e, nt, n, r, -1), it("f1", t, e, nt, -n, -r, 1), it("f2", t, e, nt, n, -r, 1), it("f3", t, e, nt, -n, r, 1), it("f4", t, e, nt, n, r, 1), it("u1", t, e, nt, n * 0.7, r * 1.1, -1), it("u2", t, e, nt, -n * 0.7, r * 1.1, -1), it("u3", t, e, nt, 0, r * 2, -1), it("cf1", t, e, nt, -n, 0, 1), it("cf2", t, e, nt, n, 0, 1), it("cf3", t, e, nt, 0, -r, 1), it("cf4", t, e, nt, 0, r, 1), it("cn1", t, e, nt, -n, 0, -1), it("cn2", t, e, nt, n, 0, -1), it("cn3", t, e, nt, 0, -r, -1), it("cn4", t, e, nt, 0, r, -1), e.getAttribute("position").needsUpdate = !0;
};
function it(e, t, n, r, i, a, o) {
  Xa.set(i, a, o).unproject(r);
  var s = t[e];
  if (s !== void 0)
    for (var c = n.getAttribute("position"), l = 0, u = s.length; l < u; l++)
      c.setXYZ(s[l], Xa.x, Xa.y, Xa.z);
}
var ja = new un();
function cr(e, t) {
  this.object = e, t === void 0 && (t = 16776960);
  var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), r = new Float32Array(8 * 3), i = new te();
  i.setIndex(new pe(n, 1)), i.setAttribute("position", new pe(r, 3)), ct.call(this, i, new at({ color: t, toneMapped: !1 })), this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
}
cr.prototype = Object.create(ct.prototype);
cr.prototype.constructor = cr;
cr.prototype.update = function(e) {
  if (e !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && ja.setFromObject(this.object), !ja.isEmpty()) {
    var t = ja.min, n = ja.max, r = this.geometry.attributes.position, i = r.array;
    i[0] = n.x, i[1] = n.y, i[2] = n.z, i[3] = t.x, i[4] = n.y, i[5] = n.z, i[6] = t.x, i[7] = t.y, i[8] = n.z, i[9] = n.x, i[10] = t.y, i[11] = n.z, i[12] = n.x, i[13] = n.y, i[14] = t.z, i[15] = t.x, i[16] = n.y, i[17] = t.z, i[18] = t.x, i[19] = t.y, i[20] = t.z, i[21] = n.x, i[22] = t.y, i[23] = t.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere();
  }
};
cr.prototype.setFromObject = function(e) {
  return this.object = e, this.update(), this;
};
cr.prototype.copy = function(e) {
  return ct.prototype.copy.call(this, e), this.object = e.object, this;
};
cr.prototype.clone = function() {
  return new this.constructor().copy(this);
};
function No(e, t) {
  this.type = "Box3Helper", this.box = e, t = t || 16776960;
  var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), r = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], i = new te();
  i.setIndex(new pe(n, 1)), i.setAttribute("position", new $(r, 3)), ct.call(this, i, new at({ color: t, toneMapped: !1 })), this.type = "Box3Helper", this.geometry.computeBoundingSphere();
}
No.prototype = Object.create(ct.prototype);
No.prototype.constructor = No;
No.prototype.updateMatrixWorld = function(e) {
  var t = this.box;
  t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(0.5), Q.prototype.updateMatrixWorld.call(this, e));
};
function Fo(e, t, n) {
  this.plane = e, this.size = t === void 0 ? 1 : t;
  var r = n !== void 0 ? n : 16776960, i = [1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], a = new te();
  a.setAttribute("position", new $(i, 3)), a.computeBoundingSphere(), zt.call(this, a, new at({ color: r, toneMapped: !1 })), this.type = "PlaneHelper";
  var o = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], s = new te();
  s.setAttribute("position", new $(o, 3)), s.computeBoundingSphere(), this.add(new tt(s, new $t({ color: r, opacity: 0.2, transparent: !0, depthWrite: !1, toneMapped: !1 })));
}
Fo.prototype = Object.create(zt.prototype);
Fo.prototype.constructor = Fo;
Fo.prototype.updateMatrixWorld = function(e) {
  var t = -this.plane.constant;
  Math.abs(t) < 1e-8 && (t = 1e-8), this.scale.set(0.5 * this.size, 0.5 * this.size, t), this.children[0].material.side = t < 0 ? ft : sa, this.lookAt(this.plane.normal), Q.prototype.updateMatrixWorld.call(this, e);
};
var lu = new M(), Ya, Ms;
function Wn(e, t, n, r, i, a) {
  Q.call(this), this.type = "ArrowHelper", e === void 0 && (e = new M(0, 0, 1)), t === void 0 && (t = new M(0, 0, 0)), n === void 0 && (n = 1), r === void 0 && (r = 16776960), i === void 0 && (i = 0.2 * n), a === void 0 && (a = 0.2 * i), Ya === void 0 && (Ya = new te(), Ya.setAttribute("position", new $([0, 0, 0, 0, 1, 0], 3)), Ms = new Vn(0, 0.5, 1, 5, 1), Ms.translate(0, -0.5, 0)), this.position.copy(t), this.line = new zt(Ya, new at({ color: r, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new tt(Ms, new $t({ color: r, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, i, a);
}
Wn.prototype = Object.create(Q.prototype);
Wn.prototype.constructor = Wn;
Wn.prototype.setDirection = function(e) {
  if (e.y > 0.99999)
    this.quaternion.set(0, 0, 0, 1);
  else if (e.y < -0.99999)
    this.quaternion.set(1, 0, 0, 0);
  else {
    lu.set(e.z, 0, -e.x).normalize();
    var t = Math.acos(e.y);
    this.quaternion.setFromAxisAngle(lu, t);
  }
};
Wn.prototype.setLength = function(e, t, n) {
  t === void 0 && (t = 0.2 * e), n === void 0 && (n = 0.2 * t), this.line.scale.set(1, Math.max(1e-4, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix();
};
Wn.prototype.setColor = function(e) {
  this.line.material.color.set(e), this.cone.material.color.set(e);
};
Wn.prototype.copy = function(e) {
  return Q.prototype.copy.call(this, e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this;
};
Wn.prototype.clone = function() {
  return new this.constructor().copy(this);
};
function _c(e) {
  e = e || 1;
  var t = [
    0,
    0,
    0,
    e,
    0,
    0,
    0,
    0,
    0,
    0,
    e,
    0,
    0,
    0,
    0,
    0,
    0,
    e
  ], n = [
    1,
    0,
    0,
    1,
    0.6,
    0,
    0,
    1,
    0,
    0.6,
    1,
    0,
    0,
    0,
    1,
    0,
    0.6,
    1
  ], r = new te();
  r.setAttribute("position", new $(t, 3)), r.setAttribute("color", new $(n, 3));
  var i = new at({ vertexColors: !0, toneMapped: !1 });
  ct.call(this, r, i), this.type = "AxesHelper";
}
_c.prototype = Object.create(ct.prototype);
_c.prototype.constructor = _c;
var Nr = 4, Un = 8, en = Math.pow(2, Un), lh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], uh = Un - Nr + 1 + lh.length, Lr = 20, rn = {
  [At]: 0,
  [zo]: 1,
  [Lc]: 2,
  [Eu]: 3,
  [Tu]: 4,
  [Au]: 5,
  [Ac]: 6
}, bs = new ta(), { _lodPlanes: yi, _sizeLods: uu, _sigmas: Za } = Zg(), ws = null, Kn = (1 + Math.sqrt(5)) / 2, Tr = 1 / Kn, hu = [
  new M(1, 1, 1),
  new M(-1, 1, 1),
  new M(1, 1, -1),
  new M(-1, 1, -1),
  new M(0, Kn, Tr),
  new M(0, Kn, -Tr),
  new M(Tr, 0, Kn),
  new M(-Tr, 0, Kn),
  new M(Kn, Tr, 0),
  new M(-Kn, Tr, 0)
];
function fu(e) {
  this._renderer = e, this._pingPongRenderTarget = null, this._blurMaterial = Jg(Lr), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial);
}
fu.prototype = {
  constructor: fu,
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene: function(e, t = 0, n = 0.1, r = 100) {
    ws = this._renderer.getRenderTarget();
    var i = this._allocateTargets();
    return this._sceneToCubeUV(e, n, r, i), t > 0 && this._blur(i, 0, 0, t), this._applyPMREM(i), this._cleanup(i), i;
  },
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * (RGBFormat) or HDR (RGBEFormat). The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular: function(e) {
    return e.magFilter = st, e.minFilter = st, e.generateMipmaps = !1, this.fromCubemap(e);
  },
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * (RGBFormat) or HDR (RGBEFormat). The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap: function(e) {
    ws = this._renderer.getRenderTarget();
    var t = this._allocateTargets(e);
    return this._textureToCubeUV(e, t), this._applyPMREM(t), this._cleanup(t), t;
  },
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader: function() {
    this._cubemapShader === null && (this._cubemapShader = vu(), this._compileMaterial(this._cubemapShader));
  },
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader: function() {
    this._equirectShader === null && (this._equirectShader = pu(), this._compileMaterial(this._equirectShader));
  },
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose: function() {
    this._blurMaterial.dispose(), this._cubemapShader !== null && this._cubemapShader.dispose(), this._equirectShader !== null && this._equirectShader.dispose();
    for (var e = 0; e < yi.length; e++)
      yi[e].dispose();
  },
  // private interface
  _cleanup: function(e) {
    this._pingPongRenderTarget.dispose(), this._renderer.setRenderTarget(ws), e.scissorTest = !1, e.setSize(e.width, e.height);
  },
  _allocateTargets: function(e) {
    var t = {
      magFilter: st,
      minFilter: st,
      generateMipmaps: !1,
      type: la,
      format: $h,
      encoding: Yg(e) ? e.encoding : Lc,
      depthBuffer: !1,
      stencilBuffer: !1
    }, n = du(t);
    return n.depthBuffer = !e, this._pingPongRenderTarget = du(t), n;
  },
  _compileMaterial: function(e) {
    var t = new tt(yi[0], e);
    this._renderer.compile(t, bs);
  },
  _sceneToCubeUV: function(e, t, n, r) {
    var i = 90, a = 1, o = new ht(i, a, t, n), s = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], l = this._renderer, u = l.outputEncoding, h = l.toneMapping, f = l.toneMappingExposure, d = l.getClearColor(), m = l.getClearAlpha();
    l.toneMapping = _u, l.toneMappingExposure = 1, l.outputEncoding = At;
    var g = e.background;
    if (g && g.isColor) {
      g.convertSRGBToLinear();
      var y = Math.max(g.r, g.g, g.b), p = Math.min(Math.max(Math.ceil(Math.log2(y)), -128), 127);
      g = g.multiplyScalar(Math.pow(2, -p));
      var v = (p + 128) / 255;
      l.setClearColor(g, v), e.background = null;
    }
    for (var _ = 0; _ < 6; _++) {
      var b = _ % 3;
      b == 0 ? (o.up.set(0, s[_], 0), o.lookAt(c[_], 0, 0)) : b == 1 ? (o.up.set(0, 0, s[_]), o.lookAt(0, c[_], 0)) : (o.up.set(0, s[_], 0), o.lookAt(0, 0, c[_])), Ss(
        r,
        b * en,
        _ > 2 ? en : 0,
        en,
        en
      ), l.setRenderTarget(r), l.render(e, o);
    }
    l.toneMapping = h, l.toneMappingExposure = f, l.outputEncoding = u, l.setClearColor(d, m);
  },
  _textureToCubeUV: function(e, t) {
    var n = this._renderer;
    e.isCubeTexture ? this._cubemapShader == null && (this._cubemapShader = vu()) : this._equirectShader == null && (this._equirectShader = pu());
    var r = e.isCubeTexture ? this._cubemapShader : this._equirectShader, i = new tt(yi[0], r), a = r.uniforms;
    a.envMap.value = e, e.isCubeTexture || a.texelSize.value.set(1 / e.image.width, 1 / e.image.height), a.inputEncoding.value = rn[e.encoding], a.outputEncoding.value = rn[t.texture.encoding], Ss(t, 0, 0, 3 * en, 2 * en), n.setRenderTarget(t), n.render(i, bs);
  },
  _applyPMREM: function(e) {
    var t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (var r = 1; r < uh; r++) {
      var i = Math.sqrt(Za[r] * Za[r] - Za[r - 1] * Za[r - 1]), a = hu[(r - 1) % hu.length];
      this._blur(e, r - 1, r, i, a);
    }
    t.autoClear = n;
  },
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur: function(e, t, n, r, i) {
    var a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      r,
      "latitudinal",
      i
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      r,
      "longitudinal",
      i
    );
  },
  _halfBlur: function(e, t, n, r, i, a, o) {
    var s = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    var l = 3, u = new tt(yi[r], c), h = c.uniforms, f = uu[n] - 1, d = isFinite(i) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * Lr - 1), m = i / d, g = isFinite(i) ? 1 + Math.floor(l * m) : Lr;
    g > Lr && console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Lr}`);
    for (var y = [], p = 0, v = 0; v < Lr; ++v) {
      var x = v / m, _ = Math.exp(-x * x / 2);
      y.push(_), v == 0 ? p += _ : v < g && (p += 2 * _);
    }
    for (var v = 0; v < y.length; v++)
      y[v] = y[v] / p;
    h.envMap.value = e.texture, h.samples.value = g, h.weights.value = y, h.latitudinal.value = a === "latitudinal", o && (h.poleAxis.value = o), h.dTheta.value = d, h.mipInt.value = Un - n, h.inputEncoding.value = rn[e.texture.encoding], h.outputEncoding.value = rn[e.texture.encoding];
    var b = uu[r], x = 3 * Math.max(0, en - 2 * b), T = (r === 0 ? 0 : 2 * en) + 2 * b * (r > Un - Nr ? r - Un + Nr : 0);
    Ss(t, x, T, 3 * b, 2 * b), s.setRenderTarget(t), s.render(u, bs);
  }
};
function Yg(e) {
  return e === void 0 || e.type !== la ? !1 : e.encoding === At || e.encoding === zo || e.encoding === Ac;
}
function Zg() {
  for (var e = [], t = [], n = [], r = Un, i = 0; i < uh; i++) {
    var a = Math.pow(2, r);
    t.push(a);
    var o = 1 / a;
    i > Un - Nr ? o = lh[i - Un + Nr - 1] : i == 0 && (o = 0), n.push(o);
    for (var s = 1 / (a - 1), c = -s / 2, l = 1 + s / 2, u = [c, c, l, c, l, l, c, c, l, l, c, l], h = 6, f = 6, d = 3, m = 2, g = 1, y = new Float32Array(d * f * h), p = new Float32Array(m * f * h), v = new Float32Array(g * f * h), _ = 0; _ < h; _++) {
      var b = _ % 3 * 2 / 3 - 1, x = _ > 2 ? 0 : -1, T = [
        b,
        x,
        0,
        b + 2 / 3,
        x,
        0,
        b + 2 / 3,
        x + 1,
        0,
        b,
        x,
        0,
        b + 2 / 3,
        x + 1,
        0,
        b,
        x + 1,
        0
      ];
      y.set(T, d * f * _), p.set(u, m * f * _);
      var A = [_, _, _, _, _, _];
      v.set(A, g * f * _);
    }
    var D = new te();
    D.setAttribute("position", new pe(y, d)), D.setAttribute("uv", new pe(p, m)), D.setAttribute("faceIndex", new pe(v, g)), e.push(D), r > Nr && r--;
  }
  return { _lodPlanes: e, _sizeLods: t, _sigmas: n };
}
function du(e) {
  var t = new Bt(3 * en, 3 * en, e);
  return t.texture.mapping = ca, t.texture.name = "PMREM.cubeUv", t.scissorTest = !0, t;
}
function Ss(e, t, n, r, i) {
  e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i);
}
function Jg(e) {
  var t = new Float32Array(e), n = new M(0, 1, 0), r = new kn({
    defines: { n: e },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: t },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: n },
      inputEncoding: { value: rn[At] },
      outputEncoding: { value: rn[At] }
    },
    vertexShader: Oc(),
    fragmentShader: `
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform int samples;
uniform float weights[n];
uniform bool latitudinal;
uniform float dTheta;
uniform float mipInt;
uniform vec3 poleAxis;

${Nc()}

#define ENVMAP_TYPE_CUBE_UV
#include <cube_uv_reflection_fragment>

vec3 getSample(float theta, vec3 axis) {
	float cosTheta = cos(theta);
	// Rodrigues' axis-angle rotation
	vec3 sampleDirection = vOutputDirection * cosTheta
		+ cross(axis, vOutputDirection) * sin(theta)
		+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);
	return bilinearCubeUV(envMap, sampleDirection, mipInt);
}

void main() {
	vec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);
	if (all(equal(axis, vec3(0.0))))
		axis = vec3(vOutputDirection.z, 0.0, - vOutputDirection.x);
	axis = normalize(axis);
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb += weights[0] * getSample(0.0, axis);
	for (int i = 1; i < n; i++) {
		if (i >= samples)
			break;
		float theta = dTheta * float(i);
		gl_FragColor.rgb += weights[i] * getSample(-1.0 * theta, axis);
		gl_FragColor.rgb += weights[i] * getSample(theta, axis);
	}
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,
    blending: Nn,
    depthTest: !1,
    depthWrite: !1
  });
  return r.type = "SphericalGaussianBlur", r;
}
function pu() {
  var e = new U(1, 1), t = new kn({
    uniforms: {
      envMap: { value: null },
      texelSize: { value: e },
      inputEncoding: { value: rn[At] },
      outputEncoding: { value: rn[At] }
    },
    vertexShader: Oc(),
    fragmentShader: `
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform vec2 texelSize;

${Nc()}

#include <common>

void main() {
	gl_FragColor = vec4(0.0);
	vec3 outputDirection = normalize(vOutputDirection);
	vec2 uv = equirectUv( outputDirection );
	vec2 f = fract(uv / texelSize - 0.5);
	uv -= f * texelSize;
	vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.x += texelSize.x;
	vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.y += texelSize.y;
	vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.x -= texelSize.x;
	vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	vec3 tm = mix(tl, tr, f.x);
	vec3 bm = mix(bl, br, f.x);
	gl_FragColor.rgb = mix(tm, bm, f.y);
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,
    blending: Nn,
    depthTest: !1,
    depthWrite: !1
  });
  return t.type = "EquirectangularToCubeUV", t;
}
function vu() {
  var e = new kn({
    uniforms: {
      envMap: { value: null },
      inputEncoding: { value: rn[At] },
      outputEncoding: { value: rn[At] }
    },
    vertexShader: Oc(),
    fragmentShader: `
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform samplerCube envMap;

${Nc()}

void main() {
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,
    blending: Nn,
    depthTest: !1,
    depthWrite: !1
  });
  return e.type = "CubemapToCubeUV", e;
}
function Oc() {
  return `
precision mediump float;
precision mediump int;
attribute vec3 position;
attribute vec2 uv;
attribute float faceIndex;
varying vec3 vOutputDirection;

// RH coordinate system; PMREM face-indexing convention
vec3 getDirection(vec2 uv, float face) {
	uv = 2.0 * uv - 1.0;
	vec3 direction = vec3(uv, 1.0);
	if (face == 0.0) {
		direction = direction.zyx; // ( 1, v, u ) pos x
	} else if (face == 1.0) {
		direction = direction.xzy;
		direction.xz *= -1.0; // ( -u, 1, -v ) pos y
	} else if (face == 2.0) {
		direction.x *= -1.0; // ( -u, v, 1 ) pos z
	} else if (face == 3.0) {
		direction = direction.zyx;
		direction.xz *= -1.0; // ( -1, v, -u ) neg x
	} else if (face == 4.0) {
		direction = direction.xzy;
		direction.xy *= -1.0; // ( -u, -1, v ) neg y
	} else if (face == 5.0) {
		direction.z *= -1.0; // ( u, v, -1 ) neg z
	}
	return direction;
}

void main() {
	vOutputDirection = getDirection(uv, faceIndex);
	gl_Position = vec4( position, 1.0 );
}
	`;
}
function Nc() {
  return `
uniform int inputEncoding;
uniform int outputEncoding;

#include <encodings_pars_fragment>

vec4 inputTexelToLinear(vec4 value){
	if(inputEncoding == 0){
		return value;
	}else if(inputEncoding == 1){
		return sRGBToLinear(value);
	}else if(inputEncoding == 2){
		return RGBEToLinear(value);
	}else if(inputEncoding == 3){
		return RGBMToLinear(value, 7.0);
	}else if(inputEncoding == 4){
		return RGBMToLinear(value, 16.0);
	}else if(inputEncoding == 5){
		return RGBDToLinear(value, 256.0);
	}else{
		return GammaToLinear(value, 2.2);
	}
}

vec4 linearToOutputTexel(vec4 value){
	if(outputEncoding == 0){
		return value;
	}else if(outputEncoding == 1){
		return LinearTosRGB(value);
	}else if(outputEncoding == 2){
		return LinearToRGBE(value);
	}else if(outputEncoding == 3){
		return LinearToRGBM(value, 7.0);
	}else if(outputEncoding == 4){
		return LinearToRGBM(value, 16.0);
	}else if(outputEncoding == 5){
		return LinearToRGBD(value, 256.0);
	}else{
		return LinearToGamma(value, 2.2);
	}
}

vec4 envMapTexelToLinear(vec4 color) {
	return inputTexelToLinear(color);
}
	`;
}
fe.create = function(e, t) {
  return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(fe.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e;
};
Object.assign(On.prototype, {
  createPointsGeometry: function(e) {
    console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    var t = this.getPoints(e);
    return this.createGeometry(t);
  },
  createSpacedPointsGeometry: function(e) {
    console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    var t = this.getSpacedPoints(e);
    return this.createGeometry(t);
  },
  createGeometry: function(e) {
    console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    for (var t = new ge(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.vertices.push(new M(i.x, i.y, i.z || 0));
    }
    return t;
  }
});
Object.assign(nn.prototype, {
  fromPoints: function(e) {
    return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e);
  }
});
Object.create(Nt.prototype);
Object.create(Nt.prototype);
function hh(e) {
  console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Nt.call(this, e), this.type = "catmullrom";
}
hh.prototype = Object.create(Nt.prototype);
Object.assign(hh.prototype, {
  initFromArray: function() {
    console.error("THREE.Spline: .initFromArray() has been removed.");
  },
  getControlPointsArray: function() {
    console.error("THREE.Spline: .getControlPointsArray() has been removed.");
  },
  reparametrizeByArcLength: function() {
    console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");
  }
});
yc.prototype.setColors = function() {
  console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
};
ti.prototype.update = function() {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
Object.assign(ke.prototype, {
  extractUrlBase: function(e) {
    return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Ju.extractUrlBase(e);
  }
});
ke.Handlers = {
  add: function() {
    console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
  },
  get: function() {
    console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
  }
};
Object.assign(pc.prototype, {
  setTexturePath: function(e) {
    return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(e);
  }
});
Object.assign(oh.prototype, {
  center: function(e) {
    return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e);
  },
  empty: function() {
    return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  },
  isIntersectionBox: function(e) {
    return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e);
  },
  size: function(e) {
    return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e);
  }
});
Object.assign(un.prototype, {
  center: function(e) {
    return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e);
  },
  empty: function() {
    return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  },
  isIntersectionBox: function(e) {
    return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e);
  },
  isIntersectionSphere: function(e) {
    return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e);
  },
  size: function(e) {
    return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e);
  }
});
Object.assign(Sn.prototype, {
  empty: function() {
    return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty();
  }
});
ua.prototype.setFromMatrix = function(e) {
  return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(e);
};
sh.prototype.center = function(e) {
  return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e);
};
Object.assign(Ae, {
  random16: function() {
    return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random();
  },
  nearestPowerOfTwo: function(e) {
    return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Ae.floorPowerOfTwo(e);
  },
  nextPowerOfTwo: function(e) {
    return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Ae.ceilPowerOfTwo(e);
  }
});
Object.assign(wt.prototype, {
  flattenToArrayOffset: function(e, t) {
    return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t);
  },
  multiplyVector3: function(e) {
    return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this);
  },
  multiplyVector3Array: function() {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
  },
  applyToBufferAttribute: function(e) {
    return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), e.applyMatrix3(this);
  },
  applyToVector3Array: function() {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
  }
});
Object.assign(Ce.prototype, {
  extractPosition: function(e) {
    return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e);
  },
  flattenToArrayOffset: function(e, t) {
    return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t);
  },
  getPosition: function() {
    return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new M().setFromMatrixColumn(this, 3);
  },
  setRotationFromQuaternion: function(e) {
    return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e);
  },
  multiplyToArray: function() {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
  },
  multiplyVector3: function(e) {
    return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this);
  },
  multiplyVector4: function(e) {
    return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this);
  },
  multiplyVector3Array: function() {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
  },
  rotateAxis: function(e) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this);
  },
  crossVector: function(e) {
    return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this);
  },
  translate: function() {
    console.error("THREE.Matrix4: .translate() has been removed.");
  },
  rotateX: function() {
    console.error("THREE.Matrix4: .rotateX() has been removed.");
  },
  rotateY: function() {
    console.error("THREE.Matrix4: .rotateY() has been removed.");
  },
  rotateZ: function() {
    console.error("THREE.Matrix4: .rotateZ() has been removed.");
  },
  rotateByAxis: function() {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
  },
  applyToBufferAttribute: function(e) {
    return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), e.applyMatrix4(this);
  },
  applyToVector3Array: function() {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
  },
  makeFrustum: function(e, t, n, r, i, a) {
    return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, r, n, i, a);
  }
});
tn.prototype.isIntersectionLine = function(e) {
  return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e);
};
dt.prototype.multiplyVector3 = function(e) {
  return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this);
};
Object.assign(ii.prototype, {
  isIntersectionBox: function(e) {
    return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e);
  },
  isIntersectionPlane: function(e) {
    return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e);
  },
  isIntersectionSphere: function(e) {
    return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e);
  }
});
Object.assign(mt.prototype, {
  area: function() {
    return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea();
  },
  barycoordFromPoint: function(e, t) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e, t);
  },
  midpoint: function(e) {
    return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e);
  },
  normal: function(e) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e);
  },
  plane: function(e) {
    return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e);
  }
});
Object.assign(mt, {
  barycoordFromPoint: function(e, t, n, r, i) {
    return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), mt.getBarycoord(e, t, n, r, i);
  },
  normal: function(e, t, n, r) {
    return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), mt.getNormal(e, t, n, r);
  }
});
Object.assign(tr.prototype, {
  extractAllPoints: function(e) {
    return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e);
  },
  extrude: function(e) {
    return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Vr(this, e);
  },
  makeGeometry: function(e) {
    return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Wr(this, e);
  }
});
Object.assign(U.prototype, {
  fromAttribute: function(e, t, n) {
    return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n);
  },
  distanceToManhattan: function(e) {
    return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e);
  },
  lengthManhattan: function() {
    return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }
});
Object.assign(M.prototype, {
  setEulerFromRotationMatrix: function() {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
  },
  setEulerFromQuaternion: function() {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
  },
  getPositionFromMatrix: function(e) {
    return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e);
  },
  getScaleFromMatrix: function(e) {
    return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e);
  },
  getColumnFromMatrix: function(e, t) {
    return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e);
  },
  applyProjection: function(e) {
    return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e);
  },
  fromAttribute: function(e, t, n) {
    return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n);
  },
  distanceToManhattan: function(e) {
    return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e);
  },
  lengthManhattan: function() {
    return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }
});
Object.assign(Ve.prototype, {
  fromAttribute: function(e, t, n) {
    return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n);
  },
  lengthManhattan: function() {
    return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength();
  }
});
Object.assign(ge.prototype, {
  computeTangents: function() {
    console.error("THREE.Geometry: .computeTangents() has been removed.");
  },
  computeLineDistances: function() {
    console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");
  },
  applyMatrix: function(e) {
    return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e);
  }
});
Object.assign(Q.prototype, {
  getChildByName: function(e) {
    return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e);
  },
  renderDepth: function() {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
  },
  translate: function(e, t) {
    return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e);
  },
  getWorldRotation: function() {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
  },
  applyMatrix: function(e) {
    return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e);
  }
});
Object.defineProperties(Q.prototype, {
  eulerOrder: {
    get: function() {
      return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order;
    },
    set: function(e) {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e;
    }
  },
  useQuaternion: {
    get: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    },
    set: function() {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    }
  }
});
Object.assign(tt.prototype, {
  setDrawMode: function() {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
  }
});
Object.defineProperties(tt.prototype, {
  drawMode: {
    get: function() {
      return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), Uf;
    },
    set: function() {
      console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }
  }
});
Object.defineProperties(co.prototype, {
  objects: {
    get: function() {
      return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels;
    }
  }
});
Object.defineProperty(zs.prototype, "useVertexTexture", {
  get: function() {
    console.warn("THREE.Skeleton: useVertexTexture has been removed.");
  },
  set: function() {
    console.warn("THREE.Skeleton: useVertexTexture has been removed.");
  }
});
Gs.prototype.initBones = function() {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
Object.defineProperty(fe.prototype, "__arcLengthDivisions", {
  get: function() {
    return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions;
  },
  set: function(e) {
    console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = e;
  }
});
ht.prototype.setLens = function(e, t) {
  console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), t !== void 0 && (this.filmGauge = t), this.setFocalLength(e);
};
Object.defineProperties(Ze.prototype, {
  onlyShadow: {
    set: function() {
      console.warn("THREE.Light: .onlyShadow has been removed.");
    }
  },
  shadowCameraFov: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e;
    }
  },
  shadowCameraLeft: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e;
    }
  },
  shadowCameraRight: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e;
    }
  },
  shadowCameraTop: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e;
    }
  },
  shadowCameraBottom: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e;
    }
  },
  shadowCameraNear: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e;
    }
  },
  shadowCameraFar: {
    set: function(e) {
      console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e;
    }
  },
  shadowCameraVisible: {
    set: function() {
      console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
    }
  },
  shadowBias: {
    set: function(e) {
      console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e;
    }
  },
  shadowDarkness: {
    set: function() {
      console.warn("THREE.Light: .shadowDarkness has been removed.");
    }
  },
  shadowMapWidth: {
    set: function(e) {
      console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e;
    }
  },
  shadowMapHeight: {
    set: function(e) {
      console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e;
    }
  }
});
Object.defineProperties(pe.prototype, {
  length: {
    get: function() {
      return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length;
    }
  },
  dynamic: {
    get: function() {
      return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === Li;
    },
    set: function() {
      console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(Li);
    }
  }
});
Object.assign(pe.prototype, {
  setDynamic: function(e) {
    return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(e === !0 ? Li : Ho), this;
  },
  copyIndicesArray: function() {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
  },
  setArray: function() {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
  }
});
Object.assign(te.prototype, {
  addIndex: function(e) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e);
  },
  addAttribute: function(e, t) {
    return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), !(t && t.isBufferAttribute) && !(t && t.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(e, new pe(arguments[1], arguments[2]))) : e === "index" ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : this.setAttribute(e, t);
  },
  addDrawCall: function(e, t, n) {
    n !== void 0 && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t);
  },
  clearDrawCalls: function() {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups();
  },
  computeTangents: function() {
    console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");
  },
  computeOffsets: function() {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
  },
  removeAttribute: function(e) {
    return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(e);
  },
  applyMatrix: function(e) {
    return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e);
  }
});
Object.defineProperties(te.prototype, {
  drawcalls: {
    get: function() {
      return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups;
    }
  },
  offsets: {
    get: function() {
      return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups;
    }
  }
});
Object.defineProperties(Do.prototype, {
  maxInstancedCount: {
    get: function() {
      return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount;
    },
    set: function(e) {
      console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount = e;
    }
  }
});
Object.defineProperties(ah.prototype, {
  linePrecision: {
    get: function() {
      return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold;
    },
    set: function(e) {
      console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold = e;
    }
  }
});
Object.defineProperties(zn.prototype, {
  dynamic: {
    get: function() {
      return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.usage === Li;
    },
    set: function(e) {
      console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(e);
    }
  }
});
Object.assign(zn.prototype, {
  setDynamic: function(e) {
    return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(e === !0 ? Li : Ho), this;
  },
  setArray: function() {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
  }
});
Object.assign(yn.prototype, {
  getArrays: function() {
    console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");
  },
  addShapeList: function() {
    console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");
  },
  addShape: function() {
    console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");
  }
});
Object.defineProperties(mc.prototype, {
  dynamic: {
    set: function() {
      console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");
    }
  },
  onUpdate: {
    value: function() {
      return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this;
    }
  }
});
Object.defineProperties(ve.prototype, {
  wrapAround: {
    get: function() {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
    set: function() {
      console.warn("THREE.Material: .wrapAround has been removed.");
    }
  },
  overdraw: {
    get: function() {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
    set: function() {
      console.warn("THREE.Material: .overdraw has been removed.");
    }
  },
  wrapRGB: {
    get: function() {
      return console.warn("THREE.Material: .wrapRGB has been removed."), new ee();
    }
  },
  shading: {
    get: function() {
      console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
    },
    set: function(e) {
      console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = e === gu;
    }
  },
  stencilMask: {
    get: function() {
      return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask;
    },
    set: function(e) {
      console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = e;
    }
  }
});
Object.defineProperties(sr.prototype, {
  metal: {
    get: function() {
      return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1;
    },
    set: function() {
      console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");
    }
  }
});
Object.defineProperties(Lt.prototype, {
  derivatives: {
    get: function() {
      return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives;
    },
    set: function(e) {
      console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e;
    }
  }
});
Object.assign(Vu.prototype, {
  clearTarget: function(e, t, n, r) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(e), this.clear(t, n, r);
  },
  animate: function(e) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e);
  },
  getCurrentRenderTarget: function() {
    return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget();
  },
  getMaxAnisotropy: function() {
    return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy();
  },
  getPrecision: function() {
    return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision;
  },
  resetGLState: function() {
    return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset();
  },
  supportsFloatTextures: function() {
    return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float");
  },
  supportsHalfFloatTextures: function() {
    return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float");
  },
  supportsStandardDerivatives: function() {
    return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives");
  },
  supportsCompressedTextureS3TC: function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc");
  },
  supportsCompressedTexturePVRTC: function() {
    return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc");
  },
  supportsBlendMinMax: function() {
    return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax");
  },
  supportsVertexTextures: function() {
    return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures;
  },
  supportsInstancedArrays: function() {
    return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays");
  },
  enableScissorTest: function(e) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e);
  },
  initMaterial: function() {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
  },
  addPrePlugin: function() {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
  },
  addPostPlugin: function() {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
  },
  updateShadowMap: function() {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
  },
  setFaceCulling: function() {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
  },
  allocTextureUnit: function() {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
  },
  setTexture: function() {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
  },
  setTexture2D: function() {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
  },
  setTextureCube: function() {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
  },
  getActiveMipMapLevel: function() {
    return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel();
  }
});
Object.defineProperties(Vu.prototype, {
  shadowMapEnabled: {
    get: function() {
      return this.shadowMap.enabled;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e;
    }
  },
  shadowMapType: {
    get: function() {
      return this.shadowMap.type;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e;
    }
  },
  shadowMapCullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  context: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext();
    }
  },
  vr: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr;
    }
  },
  gammaInput: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1;
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
    }
  },
  gammaOutput: {
    get: function() {
      return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = e === !0 ? zo : At;
    }
  }
});
Object.defineProperties(zu.prototype, {
  cullFace: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  renderReverseSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    }
  },
  renderSingleSided: {
    get: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    },
    set: function() {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    }
  }
});
Object.defineProperties(Bt.prototype, {
  wrapS: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e;
    }
  },
  wrapT: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e;
    }
  },
  magFilter: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e;
    }
  },
  minFilter: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e;
    }
  },
  anisotropy: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e;
    }
  },
  offset: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e;
    }
  },
  repeat: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e;
    }
  },
  format: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e;
    }
  },
  type: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e;
    }
  },
  generateMipmaps: {
    get: function() {
      return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps;
    },
    set: function(e) {
      console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e;
    }
  }
});
Object.defineProperties(na.prototype, {
  load: {
    value: function(e) {
      console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
      var t = this, n = new vc();
      return n.load(e, function(r) {
        t.setBuffer(r);
      }), this;
    }
  },
  startTime: {
    set: function() {
      console.warn("THREE.Audio: .startTime is now .play( delay ).");
    }
  }
});
th.prototype.getData = function() {
  return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData();
};
Di.prototype.updateCubeMap = function(e, t) {
  return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t);
};
nr.crossOrigin = void 0;
nr.loadTexture = function(e, t, n, r) {
  console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
  var i = new ec();
  i.setCrossOrigin(this.crossOrigin);
  var a = i.load(e, n, void 0, r);
  return t && (a.mapping = t), a;
};
nr.loadTextureCube = function(e, t, n, r) {
  console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
  var i = new Ks();
  i.setCrossOrigin(this.crossOrigin);
  var a = i.load(e, n, void 0, r);
  return t && (a.mapping = t), a;
};
nr.loadCompressedTexture = function() {
  console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
};
nr.loadCompressedTextureCube = function() {
  console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
};
typeof __THREE_DEVTOOLS__ != "undefined" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: dh
} }));
export {
  un as Box3,
  $ as Float32BufferAttribute,
  Do as InstancedBufferGeometry,
  eu as InstancedInterleavedBuffer,
  so as InterleavedBufferAttribute,
  Sn as Sphere,
  M as Vector3,
  ho as WireframeGeometry
};
