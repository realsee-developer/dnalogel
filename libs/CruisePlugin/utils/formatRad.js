const n = Math.PI * 2;
function o(t) {
  return t >= 0 && t < n ? t : (t % n + n) % n;
}
export {
  o as formatRad
};
