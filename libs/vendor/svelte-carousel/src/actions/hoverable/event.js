function t(e, n) {
  e.addEventListener("mouseenter", n);
}
function r(e, n) {
  e.removeEventListener("mouseenter", n);
}
function v(e, n) {
  e.addEventListener("mouseleave", n);
}
function o(e, n) {
  e.removeEventListener("mouseleave", n);
}
export {
  t as addHoverInEventListener,
  v as addHoverOutEventListener,
  r as removeHoverInEventListener,
  o as removeHoverOutEventListener
};
