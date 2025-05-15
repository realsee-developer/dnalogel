var g = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var u = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var n = (i, e, t) => e in i ? g(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, l = (i, e) => {
  for (var t in e || (e = {}))
    u.call(e, t) && n(i, t, e[t]);
  if (d)
    for (var t of d(e))
      p.call(e, t) && n(i, t, e[t]);
  return i;
};
var o = (i, e, t) => (n(i, typeof e != "symbol" ? e + "" : e, t), t);
import { IObject3D as b } from "../../shared-utils/three/IObject3D.js";
import * as h from "three";
import "../../shared-utils/tag.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { anyPositionToVector3 as m } from "../../shared-utils/positionToVector3.js";
import "@realsee/five/line";
import { notNil as f } from "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/five/FivePuppet.js";
import { CircleWithEdgeMesh as C } from "./CircleWithEdge.js";
import { radiusToSegments as M } from "../utils/radiusToSegments.js";
import { ColoredMesh as _ } from "../utils/three/ColoredMesh.js";
class H extends b {
  constructor(t) {
    super();
    o(this, "bottomCircle");
    o(this, "topCircle");
    o(this, "edgeMesh");
    o(this, "highlighted", !1);
    o(this, "params");
    o(this, "_topCenter");
    o(this, "_bottomCenter");
    o(this, "_radius");
    this.params = t, this.bottomCircle = new C(t), this.bottomCircle.name = "bottomCircle", this.topCircle = new C(t), this.topCircle.name = "topCircle", this.edgeMesh = new _(t), t != null && t.bottomCenter && (t != null && t.topCenter) && (t != null && t.radius) && this.setPoints(t), this.addIfNotExists(this.bottomCircle);
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
    var s, r;
    if (this._topCenter = (s = m(t.topCenter)) != null ? s : this.topCenter, this._bottomCenter = (r = m(t.bottomCenter)) != null ? r : this.bottomCenter, this._radius = f(t.radius) ? t.radius : this.radius, this._topCenter && this._bottomCenter) {
      const c = this._topCenter.clone().sub(this._bottomCenter).normalize();
      this.bottomCircle.setPoints({ center: this._bottomCenter, normal: c, radius: this._radius }), this.setTopCenter(this._topCenter);
    }
    this.needsRender = !0;
  }
  setTopCenter(t) {
    this.addIfNotExists(this.topCircle), this.topCircle.setPoints({ center: t, normal: this.normal, radius: this.radius }), this.setEdgeMesh();
  }
  setBottomCenter(t) {
    this.addIfNotExists(this.bottomCircle), this.bottomCircle.setPoints({ center: t, normal: this.normal, radius: this.radius }), this.setEdgeMesh();
  }
  setStyle(t) {
    this.params = l(l({}, this.params), t), this.bottomCircle.setStyle(this.params), this.topCircle.setStyle(this.params);
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.edgeMesh.highlight(), this.bottomCircle.highlight(), this.topCircle.highlight(), this.needsRender = !0);
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, this.edgeMesh.unhighlight(), this.bottomCircle.unhighlight(), this.topCircle.unhighlight(), this.needsRender = !0);
  }
  setEdgeMesh() {
    this.addIfNotExists(this.edgeMesh);
    const t = this.topCircle.center, s = this.bottomCircle.center;
    this.edgeMesh.geometry.dispose(), this.edgeMesh.geometry = new h.CylinderGeometry(
      this.radius,
      this.radius,
      t.distanceTo(s),
      M(this.radius),
      1,
      !0
    );
    const r = new h.Quaternion().setFromUnitVectors(new h.Vector3(0, 1, 0), this.normal.clone().normalize());
    this.edgeMesh.position.copy(new h.Vector3().lerpVectors(s, t, 0.5)), this.edgeMesh.quaternion.copy(r);
  }
}
export {
  H as CylinderMesh
};
