function e(n) {
  return n.stickType === "2DPoint" || n.stickType === "3DPoint";
}
function i(n) {
  return n.stickType === "Plane";
}
function t(n) {
  return n.stickType === "2DPoint";
}
function o(n) {
  return n.stickType === "3DPoint";
}
function c(n) {
  return n.stickType === "2DPoint";
}
function T(n) {
  return n.stickType === "3DPoint" || n.stickType === "Plane";
}
function s(n) {
  return n.stickType === "Model" && n.contentType === "MediaModel";
}
function r(n) {
  return n.stickType === "Model" && n.contentType === "Model";
}
function u(n) {
  return n.stickType === "Model";
}
function p(n) {
  return n.stickType === "Plane" && n.contentType === "MediaPlane";
}
export {
  c as is2DTag,
  T as is3DTag,
  s as isMediaModelTag,
  p as isMediaPlaneTag,
  r as isModelTag,
  i as isPlaneTag,
  t as isPoint2DTag,
  o as isPoint3DTag,
  e as isPointTag,
  u as isStickModelTag
};
