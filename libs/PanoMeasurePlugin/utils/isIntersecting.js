function m(n, s) {
  const o = Array.isArray(s) ? s : [s];
  for (let u = 0; u < o.length; u++) {
    const t = n.start, c = n.end, r = o[u].start, e = o[u].end;
    if (!(f(t, r) || f(t, e) || f(c, r) || f(c, e) || f(t, c)) && M([t.x, t.y, t.z], [c.x, c.y, c.z], [r.x, r.y, r.z], [e.x, e.y, e.z]))
      return !0;
  }
  return !1;
}
function M(n, s, o, u) {
  const t = [s[0] - n[0], s[1] - n[1], s[2] - n[2]], c = [u[0] - o[0], u[1] - o[1], u[2] - o[2]], r = [
    { a: [t[0], -c[0]], b: o[0] - n[0] },
    { a: [t[1], -c[1]], b: o[1] - n[1] },
    { a: [t[2], -c[2]], b: o[2] - n[2] }
  ], e = [
    [0, 1],
    // X 和 Y
    [0, 2],
    // X 和 Z
    [1, 2]
    // Y 和 Z
  ];
  for (const [i, y] of e) {
    const b = [r[i].a, r[y].a], z = [r[i].b, r[y].b], a = V(b);
    if (Math.abs(a) < 1e-10)
      continue;
    const g = h(b, a), [q, I] = j(g, z);
    return !!(x(q) && x(I));
  }
  return !1;
}
function V(n) {
  return n[0][0] * n[1][1] - n[0][1] * n[1][0];
}
function h(n, s) {
  return [
    [n[1][1] / s, -n[0][1] / s],
    [-n[1][0] / s, n[0][0] / s]
  ];
}
function j(n, s) {
  return [n[0][0] * s[0] + n[0][1] * s[1], n[1][0] * s[0] + n[1][1] * s[1]];
}
function x(n) {
  return n >= 0 && n <= 1;
}
function f(n, s) {
  return n.x === s.x && n.y === s.y && n.z === s.z;
}
export {
  m as isIntersecting
};
