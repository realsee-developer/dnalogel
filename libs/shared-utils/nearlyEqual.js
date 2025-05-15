function r(t, a, n = 4) {
  return Math.abs(t - a) < Math.pow(10, -n);
}
function h(t, a, n = 4) {
  const o = Math.PI * 2, s = t % o, e = a % o, i = Math.min(s, e), c = Math.max(s, e);
  return r(i, c, n) || r(i + o, c, n);
}
Object.assign(window, { nearlyEqual: r, nearlyEqualRad: h });
export {
  r as nearlyEqual,
  h as nearlyEqualRad
};
