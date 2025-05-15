var g = Object.defineProperty, f = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var l = (s, i, t) => i in s ? g(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t, r = (s, i) => {
  for (var t in i || (i = {}))
    c.call(i, t) && l(s, t, i[t]);
  if (u)
    for (var t of u(i))
      b.call(i, t) && l(s, t, i[t]);
  return s;
}, a = (s, i) => f(s, S(i));
var e = (s, i, t) => (l(s, typeof i != "symbol" ? i + "" : i, t), t);
import { anyPositionToVector3 as P } from "../../shared-utils/positionToVector3.js";
import { PointMesh as M } from "./Point.js";
import "../../shared-utils/tag.js";
import "three";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { LineMesh as _ } from "./Line.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { notNil as d } from "../../shared-utils/isNil.js";
import "../../shared-utils/five/FivePuppet.js";
import { IObject3D as V } from "../../shared-utils/three/IObject3D.js";
class z extends _ {
  constructor(t) {
    super();
    e(this, "name", "LineWithDotsMesh");
    e(this, "pointGroup", new V());
    e(this, "_paramsStyle");
    e(this, "setStyle", (t) => {
      super.setStyle(t), this._paramsStyle = r(r({}, this._paramsStyle), t), this.pointMeshes.forEach(
        (o) => {
          var p, h, n;
          return o.setStyle(a(r({}, this._paramsStyle), { color: (n = (p = this._paramsStyle) == null ? void 0 : p.pointColor) != null ? n : (h = this._paramsStyle) == null ? void 0 : h.lineColor, tip: void 0 }));
        }
      ), this.updateEdgePointsVisibility(), this.needsRender = !0;
    });
    e(this, "highlight", (t) => {
      super.highlight(t), this.pointMeshes.forEach((o) => o.highlight());
    });
    e(this, "unhighlight", () => {
      super.unhighlight(), this.pointMeshes.forEach((t) => t.unhighlight());
    });
    e(this, "updateEdgePointsVisibility", () => {
      var t;
      d((t = this._paramsStyle) == null ? void 0 : t.pointVisibility) && (this.startPoint && (this.startPoint.visible = typeof this._paramsStyle.pointVisibility == "object" ? this._paramsStyle.pointVisibility.startPoint : this._paramsStyle.pointVisibility), this.endPoint && (this.endPoint.visible = typeof this._paramsStyle.pointVisibility == "object" ? this._paramsStyle.pointVisibility.endPoint : this._paramsStyle.pointVisibility));
    });
    this.add(this.pointGroup), t && this.setStyle(t), t != null && t.points && this.setPoints(t.points);
  }
  get startPoint() {
    return this.pointMeshes[0];
  }
  get endPoint() {
    return this.pointMeshes.length < 2 ? null : this.pointMeshes[this.pointMeshes.length - 1];
  }
  get visiblePointMeshes() {
    return this.pointMeshes.filter((t) => t.visible);
  }
  get pointMeshes() {
    return this.pointGroup.children;
  }
  setPoints(t) {
    super.setPoints(t);
    const o = t.map(P).filter(d);
    this.pointGroup.removeChildren(), this.addIfNotExists(this.pointGroup), o.forEach((p) => {
      var n, y, m;
      const h = new M(a(r({}, this.style), {
        color: (m = (n = this._paramsStyle) == null ? void 0 : n.pointColor) != null ? m : (y = this._paramsStyle) == null ? void 0 : y.lineColor,
        tip: void 0
      }));
      h.position.copy(p), this.pointGroup.add(h);
    }), this.updateEdgePointsVisibility(), this.needsRender = !0;
  }
}
export {
  z as LineWithDotsMesh
};
