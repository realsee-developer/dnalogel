function m(t, n) {
  const e = Array.isArray(n) ? n : [n];
  for (let o = 0; o < e.length; o++) {
    const x = e[o], r = t.start, u = t.end, s = x.start, i = x.end;
    if (c(r, s) || c(r, i) || c(u, s) || c(u, i) || c(r, u))
      continue;
    const z = f(r, u, s), d = f(r, u, i), l = f(s, i, r), h = f(s, i, u);
    if (z !== d && l !== h || z === 0 && a(r, u, s) || d === 0 && a(r, u, i) || l === 0 && a(s, i, r) || h === 0 && a(s, i, u))
      return !0;
  }
  return !1;
}
function c(t, n) {
  return t.x === n.x && t.z === n.z && t.y === n.y;
}
function f(t, n, e) {
  const o = (e.z - t.z) * (n.x - t.x) - (n.z - t.z) * (e.x - t.x);
  return o === 0 ? 0 : o < 0 ? 2 : 1;
}
function a(t, n, e) {
  return n.x <= Math.max(t.x, e.x) && n.x >= Math.min(t.x, e.x) && n.z <= Math.max(t.z, e.z) && n.z >= Math.min(t.z, e.z);
}
export {
  m as default
};
