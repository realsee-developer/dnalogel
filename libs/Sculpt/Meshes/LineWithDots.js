var u = Object.defineProperty, d = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var n = (s, i, t) => i in s ? u(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t, o = (s, i) => {
  for (var t in i || (i = {}))
    f.call(i, t) && n(s, t, i[t]);
  if (y)
    for (var t of y(i))
      c.call(i, t) && n(s, t, i[t]);
  return s;
}, r = (s, i) => d(s, g(i));
var e = (s, i, t) => (n(s, typeof i != "symbol" ? i + "" : i, t), t);
import { anyPositionToVector3 as b } from "../../shared-utils/positionToVector3.js";
import { PointMesh as P } from "./Point.js";
import "../../shared-utils/tag.js";
import "three";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import { LineMesh as S } from "./Line.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import { notNil as a } from "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/five/FivePuppet.js";
import { IObject3D as M } from "../../shared-utils/three/IObject3D.js";
class O extends S {
  constructor(t) {
    super();
    e(this, "name", "LineWithDotsMesh");
    e(this, "pointGroup", new M());
    e(this, "_paramsStyle");
    e(this, "setStyle", (t) => {
      super.setStyle(t), this._paramsStyle = o(o({}, this._paramsStyle), t), this.pointMeshes.forEach((h) => h.setStyle(r(o({}, this._paramsStyle), { color: t.lineColor, tip: void 0 }))), this.updateEdgePointsVisibility(), this.needsRender = !0;
    });
    e(this, "highlight", () => {
      super.highlight(), this.pointMeshes.forEach((t) => t.highlight());
    });
    e(this, "unhighlight", () => {
      super.unhighlight(), this.pointMeshes.forEach((t) => t.unhighlight());
    });
    e(this, "updateEdgePointsVisibility", () => {
      var t;
      a((t = this._paramsStyle) == null ? void 0 : t.pointVisibility) && (this.startPoint && (this.startPoint.visible = typeof this._paramsStyle.pointVisibility == "object" ? this._paramsStyle.pointVisibility.startPoint : this._paramsStyle.pointVisibility), this.endPoint && (this.endPoint.visible = typeof this._paramsStyle.pointVisibility == "object" ? this._paramsStyle.pointVisibility.endPoint : this._paramsStyle.pointVisibility));
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
    const h = t.map(b).filter(a);
    this.pointGroup.removeChildren(), this.addIfNotExists(this.pointGroup), h.forEach((m) => {
      var l;
      const p = new P(r(o({}, this.style), { color: (l = this._paramsStyle) == null ? void 0 : l.lineColor, tip: void 0 }));
      p.position.copy(m), this.pointGroup.add(p);
    }), this.updateEdgePointsVisibility(), this.needsRender = !0;
  }
}
export {
  O as LineWithDotsMesh
};
