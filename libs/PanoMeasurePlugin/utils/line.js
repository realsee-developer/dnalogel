import { FiveLine as u } from "../../shared-utils/five/FiveLine.js";
import { lightLineOpts as C, normalLineOpts as R } from "./constants.js";
import { Color as T } from "three";
import "@realsee/five/line";
function v(i, t, e) {
  var d, c, m, f, h;
  const a = (d = e == null ? void 0 : e.lineWidth) != null ? d : 2, o = (c = e == null ? void 0 : e.lineColor) != null ? c : new T(16777215), r = (m = e == null ? void 0 : e.pointSize) != null ? m : 5, L = (f = e == null ? void 0 : e.lineRenderOrder) != null ? f : 10, O = (h = e == null ? void 0 : e.lineRenderOrder) != null ? h : 20, n = new u(i, t);
  n.setMaterial({ linewidth: a, color: o }), n.line.material.depthTest = !1, n.line.material.transparent = !0, n.line.renderOrder = L, n.points.renderOrder = O;
  const l = n.points.material;
  return l.depthTest = !1, l.size = r, e != null && e.pointColor && l.color.set(e.pointColor).convertSRGBToLinear(), e != null && e.pointTexture && (l.map = e.pointTexture), n;
}
function S(i, t) {
  const [e, a] = i.points, o = t === "light" ? C : R, r = v(e.position, a.position, o);
  return r.name = "normalLine_" + i.id, r;
}
export {
  v as createLine,
  S as createLineMesh
};
