function t() {
  return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
}
function r() {
  return (t() + t() + "-" + t() + "-4" + t().substr(0, 3) + "-" + t() + "-" + t() + t() + t()).toLowerCase();
}
export {
  r as uuid
};
