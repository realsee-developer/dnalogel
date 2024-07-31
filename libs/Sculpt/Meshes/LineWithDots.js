var f = Object.defineProperty, g = Object.defineProperties;
var c = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var n = (s, i, t) => i in s ? f(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t, o = (s, i) => {
  for (var t in i || (i = {}))
    b.call(i, t) && n(s, t, i[t]);
  if (y)
    for (var t of y(i))
      P.call(i, t) && n(s, t, i[t]);
  return s;
}, r = (s, i) => g(s, c(i));
var e = (s, i, t) => (n(s, typeof i != "symbol" ? i + "" : i, t), t);
import { anyPositionToVector3 as M } from "../../shared-utils/positionToVector3.js";
import { PointMesh as m } from "./Point.js";
import "hammerjs";
import "three";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { notNil as u } from "../../shared-utils/isNil.js";
import { LineMesh as V } from "./Line.js";
import { IObject3D as E } from "../../shared-utils/three/IObject3D.js";
class R extends V {
  constructor(t) {
    super();
    e(this, "name", "LineWithDotsMesh");
    e(this, "pointGroup", new E());
    e(this, "style");
    e(this, "setStyle", (t) => {
      super.setStyle(t), this.style = o(o({}, this.style), t), this.pointMeshes.forEach((h) => h.setStyle(r(o({}, this.style), { color: t.lineColor }))), this.updateEdgePointsVisibility(), this.needsRender = !0;
    });
    e(this, "highlight", () => {
      super.highlight(), this.pointMeshes.forEach((t) => t.highlight());
    });
    e(this, "unhighlight", () => {
      super.unhighlight(), this.pointMeshes.forEach((t) => t.unhighlight());
    });
    e(this, "updateEdgePointsVisibility", () => {
      var t;
      u((t = this.style) == null ? void 0 : t.pointVisibility) && (this.startPoint && (this.startPoint.visible = typeof this.style.pointVisibility == "object" ? this.style.pointVisibility.startPoint : this.style.pointVisibility), this.endPoint && (this.endPoint.visible = typeof this.style.pointVisibility == "object" ? this.style.pointVisibility.endPoint : this.style.pointVisibility));
    });
    this.add(this.pointGroup), t && this.setStyle(t), t != null && t.points && this.setPoints(t.points);
  }
  get startPoint() {
    return this.pointMeshes[0];
  }
  get endPoint() {
    return this.pointMeshes.length < 2 ? null : this.pointMeshes.at(-1);
  }
  get visiblePointMeshes() {
    return this.pointMeshes.filter((t) => t.visible);
  }
  get pointMeshes() {
    return this.pointGroup.children;
  }
  setPoints(t) {
    super.setPoints(t);
    const h = t.map(M).filter(u);
    this.pointGroup.removeChildren(), this.addIfNotExists(this.pointGroup), h.forEach((d) => {
      var p;
      const l = new m(r(o({}, this.style), { color: (p = this.style) == null ? void 0 : p.lineColor }));
      l.position.copy(d), this.pointGroup.add(l);
    }), this.updateEdgePointsVisibility(), this.needsRender = !0;
  }
}
export {
  R as LineWithDotsMesh
};
