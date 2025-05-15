function o(e) {
  return e.stickType ? e.stickType : e.pointType === "PointTag" && e.dimensionType === "3D" ? "3DPoint" : e.pointType === "PlaneTag" ? "Plane" : "2DPoint";
}
function p(e) {
  var t, i, r, a;
  if (e.stickType || (e.stickType = o(e)), e.contentType === "VRLink" || e.contentType === "PanoLink" || e.contentType === "Link") {
    const n = e;
    !((i = (t = n.data) == null ? void 0 : t.icon) != null && i.url) && !((a = (r = n.style) == null ? void 0 : r.point) != null && a.url) && (n.data.icon = {
      url: "//vr-static.realsee-cdn.cn/release/web/test.09dee741.png",
      steps: 28
    });
  }
  return e.extraData && (e.data ? e.data.extraData = e.extraData : e.data = {
    extraData: e.extraData
  }), e;
}
export {
  p as default,
  o as getTagStickType
};
