const t = Math.PI * 2;
function o(n) {
  return (n % t + t) % t;
}
function r(n) {
  return n % t;
}
export {
  r as formatLatitude,
  o as formatLongitude
};
