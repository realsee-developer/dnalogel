function r(o) {
  o.sort(function(e, x) {
    return e.x != x.x ? e.x - x.x : e.y - x.y;
  });
  const t = o.length, n = [];
  for (let e = 0; e < 2 * t; e++) {
    const x = e < t ? e : 2 * t - 1 - e;
    for (; n.length >= 2 && l(n[n.length - 2], n[n.length - 1], o[x]); )
      n.pop();
    n.push(o[x]);
  }
  return n.pop(), n;
}
function l(o, t, n) {
  const e = (o.x - t.x) * (n.y - t.y) - (o.y - t.y) * (n.x - t.x), x = (o.x - t.x) * (n.x - t.x) + (o.y - t.y) * (n.y - t.y);
  return e < 0 || e == 0 && x <= 0;
}
export {
  r as convexHull
};
