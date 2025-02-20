var B = {}, N = {
  get exports() {
    return B;
  },
  set exports(e) {
    B = e;
  }
};
N.exports = P;
B.default = P;
function P(e, r, n) {
  n = n || 2;
  var t = r && r.length, x = t ? r[0] * n : e.length, u = G(e, 0, x, n, !0), f = [];
  if (!u || u.next === u.prev)
    return f;
  var v, o, i, c, s, l, w;
  if (t && (u = I(e, r, u, n)), e.length > 80 * n) {
    v = i = e[0], o = c = e[1];
    for (var p = n; p < x; p += n)
      s = e[p], l = e[p + 1], s < v && (v = s), l < o && (o = l), s > i && (i = s), l > c && (c = l);
    w = Math.max(i - v, c - o), w = w !== 0 ? 32767 / w : 0;
  }
  return k(u, f, n, v, o, w, 0), f;
}
function G(e, r, n, t, x) {
  var u, f;
  if (x === R(e, r, n, t) > 0)
    for (u = r; u < n; u += t)
      f = $(u, e[u], e[u + 1], f);
  else
    for (u = n - t; u >= r; u -= t)
      f = $(u, e[u], e[u + 1], f);
  return f && C(f, f.next) && (z(f), f = f.next), f;
}
function g(e, r) {
  if (!e)
    return e;
  r || (r = e);
  var n = e, t;
  do
    if (t = !1, !n.steiner && (C(n, n.next) || Z(n.prev, n, n.next) === 0)) {
      if (z(n), n = r = n.prev, n === n.next)
        break;
      t = !0;
    } else
      n = n.next;
  while (t || n !== r);
  return r;
}
function k(e, r, n, t, x, u, f) {
  if (e) {
    !f && u && q(e, t, x, u);
    for (var v = e, o, i; e.prev !== e.next; ) {
      if (o = e.prev, i = e.next, u ? U(e, t, x, u) : Q(e)) {
        r.push(o.i / n | 0), r.push(e.i / n | 0), r.push(i.i / n | 0), z(e), e = i.next, v = i.next;
        continue;
      }
      if (e = i, e === v) {
        f ? f === 1 ? (e = W(g(e), r, n), k(e, r, n, t, x, u, 2)) : f === 2 && _(e, r, n, t, x, u) : k(g(e), r, n, t, x, u, 1);
        break;
      }
    }
  }
}
function Q(e) {
  var r = e.prev, n = e, t = e.next;
  if (Z(r, n, t) >= 0)
    return !1;
  for (var x = r.x, u = n.x, f = t.x, v = r.y, o = n.y, i = t.y, c = x < u ? x < f ? x : f : u < f ? u : f, s = v < o ? v < i ? v : i : o < i ? o : i, l = x > u ? x > f ? x : f : u > f ? u : f, w = v > o ? v > i ? v : i : o > i ? o : i, p = t.next; p !== r; ) {
    if (p.x >= c && p.x <= l && p.y >= s && p.y <= w && F(x, v, u, o, f, i, p.x, p.y) && Z(p.prev, p, p.next) >= 0)
      return !1;
    p = p.next;
  }
  return !0;
}
function U(e, r, n, t) {
  var x = e.prev, u = e, f = e.next;
  if (Z(x, u, f) >= 0)
    return !1;
  for (var v = x.x, o = u.x, i = f.x, c = x.y, s = u.y, l = f.y, w = v < o ? v < i ? v : i : o < i ? o : i, p = c < s ? c < l ? c : l : s < l ? s : l, M = v > o ? v > i ? v : i : o > i ? o : i, L = c > s ? c > l ? c : l : s > l ? s : l, T = D(w, p, r, n, t), V = D(M, L, r, n, t), y = e.prevZ, h = e.nextZ; y && y.z >= T && h && h.z <= V; ) {
    if (y.x >= w && y.x <= M && y.y >= p && y.y <= L && y !== x && y !== f && F(v, c, o, s, i, l, y.x, y.y) && Z(y.prev, y, y.next) >= 0 || (y = y.prevZ, h.x >= w && h.x <= M && h.y >= p && h.y <= L && h !== x && h !== f && F(v, c, o, s, i, l, h.x, h.y) && Z(h.prev, h, h.next) >= 0))
      return !1;
    h = h.nextZ;
  }
  for (; y && y.z >= T; ) {
    if (y.x >= w && y.x <= M && y.y >= p && y.y <= L && y !== x && y !== f && F(v, c, o, s, i, l, y.x, y.y) && Z(y.prev, y, y.next) >= 0)
      return !1;
    y = y.prevZ;
  }
  for (; h && h.z <= V; ) {
    if (h.x >= w && h.x <= M && h.y >= p && h.y <= L && h !== x && h !== f && F(v, c, o, s, i, l, h.x, h.y) && Z(h.prev, h, h.next) >= 0)
      return !1;
    h = h.nextZ;
  }
  return !0;
}
function W(e, r, n) {
  var t = e;
  do {
    var x = t.prev, u = t.next.next;
    !C(x, u) && J(x, t, t.next, u) && H(x, u) && H(u, x) && (r.push(x.i / n | 0), r.push(t.i / n | 0), r.push(u.i / n | 0), z(t), z(t.next), t = e = u), t = t.next;
  } while (t !== e);
  return g(t);
}
function _(e, r, n, t, x, u) {
  var f = e;
  do {
    for (var v = f.next.next; v !== f.prev; ) {
      if (f.i !== v.i && m(f, v)) {
        var o = K(f, v);
        f = g(f, f.next), o = g(o, o.next), k(f, r, n, t, x, u, 0), k(o, r, n, t, x, u, 0);
        return;
      }
      v = v.next;
    }
    f = f.next;
  } while (f !== e);
}
function I(e, r, n, t) {
  var x = [], u, f, v, o, i;
  for (u = 0, f = r.length; u < f; u++)
    v = r[u] * t, o = u < f - 1 ? r[u + 1] * t : e.length, i = G(e, v, o, t, !1), i === i.next && (i.steiner = !0), x.push(b(i));
  for (x.sort(S), u = 0; u < x.length; u++)
    n = X(x[u], n);
  return n;
}
function S(e, r) {
  return e.x - r.x;
}
function X(e, r) {
  var n = j(e, r);
  if (!n)
    return r;
  var t = K(n, e);
  return g(t, t.next), g(n, n.next);
}
function j(e, r) {
  var n = r, t = e.x, x = e.y, u = -1 / 0, f;
  do {
    if (x <= n.y && x >= n.next.y && n.next.y !== n.y) {
      var v = n.x + (x - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
      if (v <= t && v > u && (u = v, f = n.x < n.next.x ? n : n.next, v === t))
        return f;
    }
    n = n.next;
  } while (n !== r);
  if (!f)
    return null;
  var o = f, i = f.x, c = f.y, s = 1 / 0, l;
  n = f;
  do
    t >= n.x && n.x >= i && t !== n.x && F(x < c ? t : u, x, i, c, x < c ? u : t, x, n.x, n.y) && (l = Math.abs(x - n.y) / (t - n.x), H(n, e) && (l < s || l === s && (n.x > f.x || n.x === f.x && Y(f, n))) && (f = n, s = l)), n = n.next;
  while (n !== o);
  return f;
}
function Y(e, r) {
  return Z(e.prev, e, r.prev) < 0 && Z(r.next, e, e.next) < 0;
}
function q(e, r, n, t) {
  var x = e;
  do
    x.z === 0 && (x.z = D(x.x, x.y, r, n, t)), x.prevZ = x.prev, x.nextZ = x.next, x = x.next;
  while (x !== e);
  x.prevZ.nextZ = null, x.prevZ = null, a(x);
}
function a(e) {
  var r, n, t, x, u, f, v, o, i = 1;
  do {
    for (n = e, e = null, u = null, f = 0; n; ) {
      for (f++, t = n, v = 0, r = 0; r < i && (v++, t = t.nextZ, !!t); r++)
        ;
      for (o = i; v > 0 || o > 0 && t; )
        v !== 0 && (o === 0 || !t || n.z <= t.z) ? (x = n, n = n.nextZ, v--) : (x = t, t = t.nextZ, o--), u ? u.nextZ = x : e = x, x.prevZ = u, u = x;
      n = t;
    }
    u.nextZ = null, i *= 2;
  } while (f > 1);
  return e;
}
function D(e, r, n, t, x) {
  return e = (e - n) * x | 0, r = (r - t) * x | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r = (r | r << 8) & 16711935, r = (r | r << 4) & 252645135, r = (r | r << 2) & 858993459, r = (r | r << 1) & 1431655765, e | r << 1;
}
function b(e) {
  var r = e, n = e;
  do
    (r.x < n.x || r.x === n.x && r.y < n.y) && (n = r), r = r.next;
  while (r !== e);
  return n;
}
function F(e, r, n, t, x, u, f, v) {
  return (x - f) * (r - v) >= (e - f) * (u - v) && (e - f) * (t - v) >= (n - f) * (r - v) && (n - f) * (u - v) >= (x - f) * (t - v);
}
function m(e, r) {
  return e.next.i !== r.i && e.prev.i !== r.i && !d(e, r) && // dones't intersect other edges
  (H(e, r) && H(r, e) && ee(e, r) && // locally visible
  (Z(e.prev, e, r.prev) || Z(e, r.prev, r)) || // does not create opposite-facing sectors
  C(e, r) && Z(e.prev, e, e.next) > 0 && Z(r.prev, r, r.next) > 0);
}
function Z(e, r, n) {
  return (r.y - e.y) * (n.x - r.x) - (r.x - e.x) * (n.y - r.y);
}
function C(e, r) {
  return e.x === r.x && e.y === r.y;
}
function J(e, r, n, t) {
  var x = A(Z(e, r, n)), u = A(Z(e, r, t)), f = A(Z(n, t, e)), v = A(Z(n, t, r));
  return !!(x !== u && f !== v || x === 0 && E(e, n, r) || u === 0 && E(e, t, r) || f === 0 && E(n, e, t) || v === 0 && E(n, r, t));
}
function E(e, r, n) {
  return r.x <= Math.max(e.x, n.x) && r.x >= Math.min(e.x, n.x) && r.y <= Math.max(e.y, n.y) && r.y >= Math.min(e.y, n.y);
}
function A(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function d(e, r) {
  var n = e;
  do {
    if (n.i !== e.i && n.next.i !== e.i && n.i !== r.i && n.next.i !== r.i && J(n, n.next, e, r))
      return !0;
    n = n.next;
  } while (n !== e);
  return !1;
}
function H(e, r) {
  return Z(e.prev, e, e.next) < 0 ? Z(e, r, e.next) >= 0 && Z(e, e.prev, r) >= 0 : Z(e, r, e.prev) < 0 || Z(e, e.next, r) < 0;
}
function ee(e, r) {
  var n = e, t = !1, x = (e.x + r.x) / 2, u = (e.y + r.y) / 2;
  do
    n.y > u != n.next.y > u && n.next.y !== n.y && x < (n.next.x - n.x) * (u - n.y) / (n.next.y - n.y) + n.x && (t = !t), n = n.next;
  while (n !== e);
  return t;
}
function K(e, r) {
  var n = new O(e.i, e.x, e.y), t = new O(r.i, r.x, r.y), x = e.next, u = r.prev;
  return e.next = r, r.prev = e, n.next = x, x.prev = n, t.next = n, n.prev = t, u.next = t, t.prev = u, t;
}
function $(e, r, n, t) {
  var x = new O(e, r, n);
  return t ? (x.next = t.next, x.prev = t, t.next.prev = x, t.next = x) : (x.prev = x, x.next = x), x;
}
function z(e) {
  e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function O(e, r, n) {
  this.i = e, this.x = r, this.y = n, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
P.deviation = function(e, r, n, t) {
  var x = r && r.length, u = x ? r[0] * n : e.length, f = Math.abs(R(e, 0, u, n));
  if (x)
    for (var v = 0, o = r.length; v < o; v++) {
      var i = r[v] * n, c = v < o - 1 ? r[v + 1] * n : e.length;
      f -= Math.abs(R(e, i, c, n));
    }
  var s = 0;
  for (v = 0; v < t.length; v += 3) {
    var l = t[v] * n, w = t[v + 1] * n, p = t[v + 2] * n;
    s += Math.abs(
      (e[l] - e[p]) * (e[w + 1] - e[l + 1]) - (e[l] - e[w]) * (e[p + 1] - e[l + 1])
    );
  }
  return f === 0 && s === 0 ? 0 : Math.abs((s - f) / f);
};
function R(e, r, n, t) {
  for (var x = 0, u = r, f = n - t; u < n; u += t)
    x += (e[f] - e[u]) * (e[u + 1] + e[f + 1]), f = u;
  return x;
}
P.flatten = function(e) {
  for (var r = e[0][0].length, n = { vertices: [], holes: [], dimensions: r }, t = 0, x = 0; x < e.length; x++) {
    for (var u = 0; u < e[x].length; u++)
      for (var f = 0; f < r; f++)
        n.vertices.push(e[x][u][f]);
    x > 0 && (t += e[x - 1].length, n.holes.push(t));
  }
  return n;
};
export {
  B as earcutExports
};
