function n(e) {
  return e.stickType === "Plane";
}
function i(e) {
  return e.stickType === "3DPoint";
}
function t(e) {
  return e.stickType === "3DPoint" || e.stickType === "Plane";
}
function o(e) {
  return e.stickType === "Model" && e.contentType === "MediaModel";
}
function c(e) {
  return e.stickType === "Model" && e.contentType === "Model";
}
function T(e) {
  return e.stickType === "Plane" && e.contentType === "MediaPlane";
}
export {
  t as is3DTag,
  o as isMediaModelTag,
  T as isMediaPlaneTag,
  c as isModelTag,
  n as isPlaneTag,
  i as isPoint3DTag
};
