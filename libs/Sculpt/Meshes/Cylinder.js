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
import "three/examples/jsm/renderers/CSS3DRenderer";
import { DEFAULT_HIGHLIGHT_OPACITY as M } from "../typings/style.js";
import "@realsee/five/line";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import { anyPositionToVector3 as d } from "../../shared-utils/positionToVector3.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/three/core/Sphere.js";
import "animejs";
import { notNil as g } from "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { CircleWithEdgeMesh as m } from "./CircleWithEdge.js";
import { radiusToSegments as y } from "../utils/radiusToSegments.js";
import { ColoredMesh as a } from "../utils/three/ColoredMesh.js";
class D extends f {
  constructor(t) {
    super();
    o(this, "bottomCircle");
    o(this, "topCircle");
    o(this, "edgeMesh");
    o(this, "opacityBeforeHighlight");
    o(this, "highlighted", !1);
    o(this, "params");
    this.params = t, this.bottomCircle = new m(t), this.bottomCircle.name = "bottomCircle", this.topCircle = new m(t), this.topCircle.name = "topCircle", this.edgeMesh = new a(t), t != null && t.bottomCenter && (t != null && t.topCenter) && (t != null && t.radius) && this.setPoints(t), this.addIfNotExists(this.bottomCircle);
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
    const r = d(t.topCenter), s = d(t.bottomCenter), C = r.clone().sub(s).normalize();
    this.bottomCircle.setPoints({ center: s, normal: C, radius: t.radius }), this.setTopCenter(r), this.needsRender = !0;
  }
  setTopCenter(t) {
    this.addIfNotExists(this.topCircle), this.topCircle.setPoints({ center: t, normal: this.normal, radius: this.radius }), this.setEdgeMesh();
  }
  setBottomCenter(t) {
    this.addIfNotExists(this.bottomCircle), this.bottomCircle.setPoints({ center: t, normal: this.normal, radius: this.radius }), this.setEdgeMesh();
  }
  setStyle(t) {
    this.params = l(l({}, this.params), t), g(t.color) && this.bottomCircle.setStyle({ color: t.color }), g(t.color) && this.topCircle.setStyle({ color: t.color });
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.opacityBeforeHighlight = this.edgeMesh.opacity, this.edgeMesh.setStyle({ opacity: this.edgeMesh.opacity * M }), this.bottomCircle.highlight(), this.topCircle.highlight(), this.needsRender = !0);
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
      y(this.radius),
      1,
      !0
    );
    const s = new h.Quaternion().setFromUnitVectors(new h.Vector3(0, 1, 0), this.normal.clone().normalize());
    this.edgeMesh.position.copy(new h.Vector3().lerpVectors(r, t, 0.5)), this.edgeMesh.quaternion.copy(s);
  }
}
export {
  D as CylinderMesh
};
