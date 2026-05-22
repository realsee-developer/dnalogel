function I(x, r) {
  return x.x === r.x && x.y === r.y;
}
function b(x, r) {
  return Math.abs(x) === 1 / 0 && Math.abs(r) === 1 / 0 ? !0 : Math.abs(x - r) < 1e-3;
}
function M(x, r) {
  return (r.y - x.y) / (r.x - x.x);
}
function g(x, r, y) {
  const a = M(x[1], x[0]), u = M(r[1], r[0]);
  if (isNaN(a) || isNaN(u) || b(a, u))
    return !1;
  if (m(x[0], r))
    return x[0];
  if (m(x[1], r))
    return x[1];
  if (m(r[0], x))
    return r[0];
  if (m(r[1], x))
    return r[1];
  if (y && !O(x, r))
    return !1;
  const f = x[0], c = r[0];
  if (Math.abs(a) === 1 / 0)
    return { x: f.x, y: r[1].y - (r[1].x - f.x) * u };
  if (Math.abs(u) === 1 / 0)
    return { x: c.x, y: x[1].y - (x[1].x - c.x) * a };
  const t = (c.y - f.y + a * f.x - u * c.x) / (a - u), N = a * t - a * f.x + f.y;
  return { x: t, y: N };
}
function m(x, r) {
  return I(x, r[0]) || I(x, r[1]) ? !0 : (r[0].x - x.x) * (x.x - r[1].x) >= 0 && (r[0].y - x.y) * (x.y - r[1].y) >= 0 && b(M(r[0], x), M(x, r[1]));
}
function K(x) {
  let r = 1 / 0, y = -1 / 0, a = 1 / 0, u = -1 / 0;
  return x.forEach((f) => {
    r = Math.min(r, f.x), y = Math.max(y, f.x), a = Math.min(a, f.y), u = Math.max(u, f.y);
  }), { x: (r + y) / 2, y: (a + u) / 2 };
}
function h(x, r, y) {
  return (x.x - y.x) * (r.y - y.y) - (r.x - y.x) * (x.y - y.y);
}
function O(x, r) {
  return Math.max(x[0].x, x[1].x) >= Math.min(r[0].x, r[1].x) && Math.max(r[0].x, r[1].x) >= Math.min(x[0].x, x[1].x) && Math.max(x[0].y, x[1].y) >= Math.min(r[0].y, r[1].y) && h(r[0], x[1], x[0]) * h(x[1], r[1], x[0]) > 0 && h(x[0], r[1], r[0]) * h(r[1], x[1], r[0]) > 0 ? 1 : 0;
}
export {
  K as getCenterPointOfPoints,
  g as intersectionOfLine
};
