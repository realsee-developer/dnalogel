var p = Object.defineProperty;
var m = (e, i, t) => i in e ? p(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t;
var s = (e, i, t) => (m(e, typeof i != "symbol" ? i + "" : i, t), t);
import { IObject3D as d } from "../../shared-utils/three/IObject3D.js";
import { anyPositionToVector3 as P } from "../../shared-utils/positionToVector3.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/three/core/Sphere.js";
import "animejs";
import { notNil as r } from "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { RectangleWithEdgeMesh as c } from "./RectangleWithEdge.js";
import { RectangleMesh as a } from "./Rectangle.js";
class N extends d {
  constructor(t) {
    super();
    s(this, "name", "BoxMesh");
    s(this, "bottomPlane");
    s(this, "topPlane");
    s(this, "heightPoint");
    s(this, "edgePlanes", []);
    this.bottomPlane = new c(t), this.topPlane = new c(t), this.add(this.bottomPlane), t != null && t.points && this.setPoints(t);
  }
  get planes() {
    return this.children.filter((t) => t instanceof a);
  }
  get color() {
    var t;
    return (t = this.bottomPlane) == null ? void 0 : t.color;
  }
  get lineColor() {
    var t;
    return (t = this.bottomPlane) == null ? void 0 : t.lineColor;
  }
  get lineWidth() {
    var t;
    return (t = this.bottomPlane) == null ? void 0 : t.lineWidth;
  }
  get occlusionVisibility() {
    var t;
    return (t = this.bottomPlane) == null ? void 0 : t.occlusionVisibility;
  }
  get occlusionMode() {
    var t;
    return (t = this.bottomPlane) == null ? void 0 : t.occlusionMode;
  }
  setPoints(t) {
    r(t.heightPoint) && this.setTopHeightPoint(t.heightPoint), r(t.points) && this.setBottomPoints(t.points);
  }
  setBottomPoints(t) {
    const o = t.map(P).filter(r);
    if (o.length < 3) {
      console.error("Invalid position");
      return;
    }
    this.bottomPlane.setPoints(o), this.heightPoint && this.setTopHeightPoint(this.heightPoint);
  }
  setTopHeightPoint(t) {
    if (!this.bottomPlane.points.length)
      return;
    const o = P(t);
    this.heightPoint = o, this.addIfNotExists(this.topPlane);
    const h = this.bottomPlane.projectPoint(o), n = o.clone().sub(h), l = this.bottomPlane.points.map((g) => g.clone().add(n));
    this.topPlane.setPoints(l), this.up.copy(n.clone().normalize()), this.setEdgePlanes();
  }
  setEdgePlanes() {
    for (let t = 0; t < 4; t++) {
      let o = this.edgePlanes[t];
      o || (this.edgePlanes[t] = new c({
        color: this.color,
        lineColor: this.lineColor,
        lineWidth: this.lineWidth,
        occlusionVisibility: this.occlusionVisibility,
        occlusionMode: this.occlusionMode
      }), o = this.edgePlanes[t]);
      const h = this.topPlane.points, n = this.bottomPlane.points, l = t === 3 ? 0 : t + 1;
      o.setPoints([h[t], n[t], n[l]]), o.line.setPoints([h[t], n[t]]), this.addIfNotExists(o);
    }
  }
  setStyle(t) {
    this.planes.forEach((o) => o.setStyle(t));
  }
  highlight() {
    this.planes.forEach((t) => t.highlight());
  }
  unhighlight() {
    this.planes.forEach((t) => t.unhighlight());
  }
}
export {
  N as BoxMesh
};
