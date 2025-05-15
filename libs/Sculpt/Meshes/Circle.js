var l = Object.defineProperty;
var _ = (o, i, t) => i in o ? l(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var e = (o, i, t) => (_(o, typeof i != "symbol" ? i + "" : i, t), t);
import * as c from "three";
import { radiusToSegments as d } from "../utils/radiusToSegments.js";
import { ColoredMesh as u } from "../utils/three/ColoredMesh.js";
import { anyPositionToVector3 as h } from "../../shared-utils/positionToVector3.js";
import "../../shared-utils/tag.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as f } from "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/five/FivePuppet.js";
class N extends u {
  constructor(t) {
    super(t);
    e(this, "_normal");
    e(this, "_center");
    e(this, "_radius");
    t != null && t.center && (t != null && t.normal) && (t != null && t.radius) && this.setPoints(t);
  }
  get center() {
    return this.position.clone();
  }
  get normal() {
    return this._normal;
  }
  set normal(t) {
    this._normal = t;
  }
  get radius() {
    var t, r;
    return (r = (t = this.meshFont.geometry) == null ? void 0 : t.parameters) == null ? void 0 : r.radius;
  }
  setPoints(t) {
    var r, n, s;
    if (this._center = (r = h(t.center)) != null ? r : this._center, this._normal = ((n = h(t.normal)) != null ? n : this._normal).normalize(), this._radius = (s = t.radius) != null ? s : this._radius, f(this._radius) && this._radius !== this.radius) {
      const m = d(this._radius);
      this.geometry = new c.CircleGeometry(this._radius, m);
    }
    this._center && this.position.copy(this._center), this._normal && (this.lookAt(this._normal.clone().add(this._center)), this.normal = this._normal.clone()), this.needsRender = !0;
  }
}
export {
  N as CircleMesh
};
