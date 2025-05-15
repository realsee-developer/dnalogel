function r(o) {
  if (o.length !== 4)
    return !1;
  const [n, t, p, c] = o, s = n.distanceTo(t), e = t.distanceTo(p), a = p.distanceTo(c), i = c.distanceTo(n), d = n.distanceTo(p), T = t.distanceTo(c);
  return s === a && e === i && d === T;
}
export {
  r as pointsIsRectangle
};
