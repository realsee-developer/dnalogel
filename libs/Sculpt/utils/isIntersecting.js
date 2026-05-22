function q(n, t) {
  const s = Array.isArray(t) ? t : [t];
  for (let r = 0; r < s.length; r++) {
    const e = n.start, c = n.end, o = s[r].start, u = s[r].end;
    if (!(f(e, o) || f(e, u) || f(c, o) || f(c, u) || f(e, c)) && V([e.x, e.y, e.z], [c.x, c.y, c.z], [o.x, o.y, o.z], [u.x, u.y, u.z]))
      return !0;
  }
  return !1;
}
function M(n) {
  if (n.length < 2)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (q(n[t], n.slice(t + 1)))
      return !0;
  return !1;
}
function w(n) {
  const t = [];
  for (let s = 1; s < n.length; s++) {
    const r = { start: n[s - 1], end: n[s] };
    t.push(r);
  }
  return M(t);
}
function V(n, t, s, r) {
  const e = [t[0] - n[0], t[1] - n[1], t[2] - n[2]], c = [r[0] - s[0], r[1] - s[1], r[2] - s[2]], o = [
    { a: [e[0], -c[0]], b: s[0] - n[0] },
    { a: [e[1], -c[1]], b: s[1] - n[1] },
    { a: [e[2], -c[2]], b: s[2] - n[2] }
  ], u = [
    [0, 1],
    // X 和 Y
    [0, 2],
    // X 和 Z
    [1, 2]
    // Y 和 Z
  ];
  for (const [i, a] of u) {
    const g = [o[i].a, o[a].a], h = [o[i].b, o[a].b], y = L(g);
    if (Math.abs(y) < 1e-10)
      continue;
    const I = j(g, y), [x, z] = m(I, h);
    return !!(b(x) && b(z));
  }
  return !1;
}
function L(n) {
  return n[0][0] * n[1][1] - n[0][1] * n[1][0];
}
function j(n, t) {
  return [
    [n[1][1] / t, -n[0][1] / t],
    [-n[1][0] / t, n[0][0] / t]
  ];
}
function m(n, t) {
  return [n[0][0] * t[0] + n[0][1] * t[1], n[1][0] * t[0] + n[1][1] * t[1]];
}
function b(n) {
  return n >= 0 && n <= 1;
}
function f(n, t) {
  return n.x === t.x && n.y === t.y && n.z === t.z;
}
export {
  w as isPolygenIntersecting
};
