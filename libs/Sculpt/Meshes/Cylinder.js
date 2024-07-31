var u = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var n = (i, e, t) => e in i ? u(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, l = (i, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && n(i, t, e[t]);
  if (c)
    for (var t of c(e))
      b.call(e, t) && n(i, t, e[t]);
  return i;
};
var o = (i, e, t) => (n(i, typeof e != "symbol" ? e + "" : e, t), t);
import { IObject3D as f } from "../../shared-utils/three/IObject3D.js";
import * as h from "three";
import "hammerjs";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { notNil as d } from "../../shared-utils/isNil.js";
import { CircleWithEdgeMesh as g } from "./CircleWithEdge.js";
import { radiusToSegments as M } from "../utils/radiusToSegments.js";
import { ColoredMesh as y } from "../utils/three/ColoredMesh.js";
import { anyPositionToVector3 as C } from "../../shared-utils/positionToVector3.js";
import { DEFAULT_HIGHLIGHT_OPACITY as a } from "../utils/color.js";
class q extends f {
  constructor(t) {
    super();
    o(this, "bottomCircle");
    o(this, "topCircle");
    o(this, "edgeMesh");
    o(this, "opacityBeforeHighlight");
    o(this, "highlighted", !1);
    o(this, "params");
    this.params = t, this.bottomCircle = new g(t), this.bottomCircle.name = "bottomCircle", this.topCircle = new g(t), this.topCircle.name = "topCircle", this.edgeMesh = new y(t), t != null && t.bottomCenter && (t != null && t.topCenter) && (t != null && t.radius) && this.setPoints(t), this.addIfNotExists(this.bottomCircle);
  }
  get bottomCenter() {
    return this.bottomCircle.center;
  }
  get topCenter() {
    return this.topCircle.center;
  }
  get normal() {
    return this.bottomCircle.normal;
  }
  get radius() {
    return this.bottomCircle.radius;
  }
  get color() {
    return this.bottomCircle.color;
  }
  setPoints(t) {
    const r = C(t.topCenter), s = C(t.bottomCenter), m = r.clone().sub(s).normalize();
    this.bottomCircle.setPoints({ center: s, normal: m, radius: t.radius }), this.setTopCenter(r), this.needsRender = !0;
  }
  setTopCenter(t) {
    this.addIfNotExists(this.topCircle), this.topCircle.setPoints({ center: t, normal: this.normal, radius: this.radius }), this.setEdgeMesh();
  }
  setBottomCenter(t) {
    this.addIfNotExists(this.bottomCircle), this.bottomCircle.setPoints({ center: t, normal: this.normal, radius: this.radius }), this.setEdgeMesh();
  }
  setStyle(t) {
    this.params = l(l({}, this.params), t), d(t.color) && this.bottomCircle.setStyle({ color: t.color }), d(t.color) && this.topCircle.setStyle({ color: t.color });
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.opacityBeforeHighlight = this.edgeMesh.opacity, this.edgeMesh.setStyle({ opacity: this.edgeMesh.opacity * a }), this.bottomCircle.highlight(), this.topCircle.highlight(), this.needsRender = !0);
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, this.edgeMesh.setStyle({ opacity: this.opacityBeforeHighlight }), this.bottomCircle.unhighlight(), this.topCircle.unhighlight(), this.needsRender = !0);
  }
  setEdgeMesh() {
    this.addIfNotExists(this.edgeMesh);
    const t = this.topCircle.center, r = this.bottomCircle.center;
    this.edgeMesh.geometry.dispose(), this.edgeMesh.geometry = new h.CylinderGeometry(
      this.radius,
      this.radius,
      t.distanceTo(r),
      M(this.radius),
      1,
      !0
    );
    const s = new h.Quaternion().setFromUnitVectors(new h.Vector3(0, 1, 0), this.normal.clone().normalize());
    this.edgeMesh.position.copy(new h.Vector3().lerpVectors(r, t, 0.5)), this.edgeMesh.quaternion.copy(s);
  }
}
export {
  q as CylinderMesh
};
