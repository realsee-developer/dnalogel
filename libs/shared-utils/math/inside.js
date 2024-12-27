function u(r, t) {
  const j = r[0], s = r[1];
  let c = !1;
  for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
    const f = t[e][0], n = t[e][1], d = t[i][0], x = t[i][1];
    n > s != x > s && j < (d - f) * (s - n) / (x - n) + f && (c = !c);
  }
  return c;
}
export {
  u as inside
};
