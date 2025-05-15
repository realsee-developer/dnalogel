const s = (t, n) => {
  const e = n.x - t.x, a = n.y - t.y;
  return Math.sqrt(e * e + a * a);
};
function r(t, n, e) {
  return Math.max(t, Math.min(n, e));
}
export {
  s as getDistance,
  r as getValueInRange
};
