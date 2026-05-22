function c(r, n) {
  const e = 1 - r;
  return e * e * n;
}
function t(r, n) {
  return 2 * (1 - r) * r * n;
}
function o(r, n) {
  return r * r * n;
}
function P(r, n, e, i) {
  return c(r, n) + t(r, e) + o(r, i);
}
function f(r, n) {
  const e = 1 - r;
  return e * e * e * n;
}
function z(r, n) {
  const e = 1 - r;
  return 3 * e * e * r * n;
}
function B(r, n) {
  return 3 * (1 - r) * r * r * n;
}
function a(r, n) {
  return r * r * r * n;
}
function b(r, n, e, i, u) {
  return f(r, n) + z(r, e) + B(r, i) + a(r, u);
}
export {
  b as CubicBezier,
  P as QuadraticBezier
};
