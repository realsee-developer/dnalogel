function n(e, t) {
  e.addEventListener("mousedown", t), e.addEventListener("touchstart", t, { passive: !0 });
}
function v(e, t) {
  e.removeEventListener("mousedown", t), e.removeEventListener("touchstart", t);
}
function o(e, t) {
  e.addEventListener("mouseup", t), e.addEventListener("touchend", t);
}
function r(e, t) {
  e.removeEventListener("mouseup", t), e.removeEventListener("touchend", t);
}
function i(e, t) {
  e.addEventListener("mousemove", t), e.addEventListener("touchmove", t);
}
function d(e, t) {
  e.removeEventListener("mousemove", t), e.removeEventListener("touchmove", t);
}
export {
  o as addEndEventListener,
  i as addMoveEventListener,
  n as addStartEventListener,
  r as removeEndEventListener,
  d as removeMoveEventListener,
  v as removeStartEventListener
};
