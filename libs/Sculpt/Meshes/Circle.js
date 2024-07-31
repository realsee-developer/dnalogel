var g = Object.defineProperty;
var c = (i, e, t) => e in i ? g(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var o = (i, e, t) => (c(i, typeof e != "symbol" ? e + "" : e, t), t);
import * as d from "three";
import { DEFAULT_HIGHLIGHT_OPACITY as u } from "../utils/color.js";
import { radiusToSegments as y } from "../utils/radiusToSegments.js";
import { ColoredMesh as f } from "../utils/three/ColoredMesh.js";
import { anyPositionToVector3 as s } from "../../shared-utils/positionToVector3.js";
class P extends f {
  constructor(t) {
    super(t);
    o(this, "_normal");
    o(this, "opacityBeforeHighlight");
    o(this, "highlighted", !1);
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
    return this.meshFont.geometry.parameters.radius;
  }
  setPoints(t) {
    const h = s(t.center), n = s(t.normal), r = t.radius, l = y(r);
    this.geometry = new d.CircleGeometry(r, l), this.position.copy(h), this.lookAt(n.clone().add(h)), this.normal = n.clone().normalize(), this.needsRender = !0;
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.opacityBeforeHighlight = this.opacity, this.setStyle({ opacity: this.opacity * u }), this.needsRender = !0);
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, this.setStyle({ opacity: this.opacityBeforeHighlight }), this.needsRender = !0);
  }
}
export {
  P as CircleMesh
};
