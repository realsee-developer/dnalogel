function n(e, t) {
  e.addEventListener("touchstart", t, { passive: !0 });
}
function o(e, t) {
  e.removeEventListener("touchstart", t);
}
function r(e, t) {
  e.addEventListener("touchend", t);
}
function s(e, t) {
  e.removeEventListener("touchend", t);
}
export {
  n as addFocusinEventListener,
  r as addFocusoutEventListener,
  o as removeFocusinEventListener,
  s as removeFocusoutEventListener
};
