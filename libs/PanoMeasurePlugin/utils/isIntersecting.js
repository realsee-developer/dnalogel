function a(n, t) {
  const s = Array.isArray(t) ? t : [t];
  for (let u = 0; u < s.length; u++) {
    const r = n.start, e = n.end, c = s[u].start, o = s[u].end;
    if (!(f(r, c) || f(r, o) || f(e, c) || f(e, o) || f(r, e)) && d([r.x, r.y, r.z], [e.x, e.y, e.z], [c.x, c.y, c.z], [o.x, o.y, o.z]))
      return !0;
  }
  return !1;
}
function d(n, t, s, u) {
  const r = [t[0] - n[0], t[1] - n[1], t[2] - n[2]], e = [u[0] - s[0], u[1] - s[1], u[2] - s[2]], c = [
    [r[0], -e[0]],
    [r[1], -e[1]],
    [r[2], -e[2]]
  ], o = [s[0] - n[0], s[1] - n[1], s[2] - n[2]], i = g(c, o);
  if (i === null)
    return !1;
  const [x, z] = i;
  return !!(y(x) && y(z));
}
function g(n, t) {
  if (q(n) === 0)
    return null;
  const u = I(n);
  return V(u, t);
}
function q(n) {
  return n[0][0] * n[1][1] - n[0][1] * n[1][0];
}
function I(n) {
  const t = n[0][0] * n[1][1] - n[0][1] * n[1][0];
  return [
    [n[1][1] / t, -n[0][1] / t],
    [-n[1][0] / t, n[0][0] / t]
  ];
}
function V(n, t) {
  return [n[0][0] * t[0] + n[0][1] * t[1], n[1][0] * t[0] + n[1][1] * t[1]];
}
function y(n) {
  return n >= 0 && n <= 1;
}
function f(n, t) {
  return n.x === t.x && n.y === t.y && n.z === t.z;
}
export {
  a as isIntersecting
};
