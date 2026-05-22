function e(t) {
  const { x: n, y: r, z: a } = t;
  return !(Math.abs(n) > 1 || Math.abs(r) > 1 || Math.abs(a) > 1);
}
function s(t) {
  const { z: n } = t;
  return !(Math.abs(n) > 1);
}
export {
  e as default,
  s as isNDCPointInFront
};
