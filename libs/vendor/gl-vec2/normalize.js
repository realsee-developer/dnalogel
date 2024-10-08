var t = l;
function l(e, n) {
  var i = n[0], a = n[1], r = i * i + a * a;
  return r > 0 && (r = 1 / Math.sqrt(r), e[0] = n[0] * r, e[1] = n[1] * r), e;
}
export {
  t as normalize_1
};
