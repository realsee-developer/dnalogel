function u(x, e) {
  const t = x[0], r = x[1], y = e[0], n = e[1];
  var s = (n.x - y.x) * (t.y - y.y) - (n.y - y.y) * (t.x - y.x), c = (r.x - t.x) * (t.y - y.y) - (r.y - t.y) * (t.x - y.x), a = (n.y - y.y) * (r.x - t.x) - (n.x - y.x) * (r.y - t.y);
  if (a !== 0) {
    var f = s / a, o = c / a;
    if (0 <= f && f <= 1 && 0 <= o && o <= 1)
      return !0;
  }
  return !1;
}
function v(x, e) {
  for (let t = 0; t < x.length - 1; t++)
    for (let r = 0; r < e.length - 1; r++)
      if (u([x[t], x[t + 1]], [e[r], e[r + 1]]))
        return {
          x: (x[t].x + x[t + 1].x) / 2,
          y: (x[t].y + x[t + 1].y) / 2,
          line1RelativeIndex: t,
          line2RelativeIndex: r
        };
}
export {
  v as findIntersectingOfLines,
  u as lineIsIntersecting
};
