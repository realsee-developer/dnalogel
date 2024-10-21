function c(n) {
  return n < 0.5 ? 4 * n * n * n : 0.5 * Math.pow(2 * n - 2, 3) + 1;
}
function o(n) {
  const u = n - 1;
  return u * u * u + 1;
}
export {
  c as cubicInOut,
  o as cubicOut
};
