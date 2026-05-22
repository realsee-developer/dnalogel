function e(n) {
  return n.stickType === "Plane";
}
function i(n) {
  return n.stickType === "3DPoint";
}
function t(n) {
  return n.stickType === "3DPoint" || n.stickType === "Plane";
}
function o(n) {
  return n.stickType === "Model" && n.contentType === "MediaModel";
}
function c(n) {
  return n.stickType === "Model" && n.contentType === "Model";
}
function T(n) {
  return n.stickType === "Plane" && n.contentType === "MediaPlane";
}
function s(n) {
  return n.stickType === "Polygon";
}
function r(n) {
  return n.stickType === "3DBox";
}
function u(n) {
  return n.stickType === "Mask";
}
export {
  r as is3DBoxTag,
  t as is3DTag,
  u as isMaskTag,
  o as isMediaModelTag,
  T as isMediaPlaneTag,
  c as isModelTag,
  e as isPlaneTag,
  i as isPoint3DTag,
  s as isPolygonTag
};
