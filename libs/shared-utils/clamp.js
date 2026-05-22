function f(r, t, n) {
  return r < t ? t : r > n ? n : r;
}
export {
  f as clamp
};
