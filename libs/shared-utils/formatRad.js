const t = Math.PI * 2;
function o(n) {
  return (n % t + t) % t;
}
export {
  o as formatRad
};
