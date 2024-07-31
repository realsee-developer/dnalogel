var d = Object.defineProperty;
var p = (e, i, t) => i in e ? d(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t;
var n = (e, i, t) => (p(e, typeof i != "symbol" ? i + "" : i, t), t);
import { IObject3D as a } from "../../shared-utils/three/IObject3D.js";
import { anyPositionToVector3 as c } from "../../shared-utils/positionToVector3.js";
import "hammerjs";
import "three";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { notNil as r } from "../../shared-utils/isNil.js";
import { RectangleWithEdgeMesh as P } from "./RectangleWithEdge.js";
import { RectangleMesh as m } from "./Rectangle.js";
class T extends a {
  constructor(t) {
    super();
    n(this, "name", "BoxMesh");
    n(this, "bottomPlane");
    n(this, "topPlane");
    n(this, "heightPoint");
    n(this, "edgePlanes", []);
    this.bottomPlane = new P(t), this.topPlane = new P(t), this.add(this.bottomPlane), t != null && t.points && this.setPoints(t);
  }
  get planes() {
    return this.children.filter((t) => t instanceof m);
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
    const o = t.map(c).filter(r);
    if (o.length < 3) {
      console.error("Invalid position");
      return;
    }
    this.bottomPlane.setPoints(o), this.heightPoint && this.setTopHeightPoint(this.heightPoint);
  }
  setTopHeightPoint(t) {
    if (!this.bottomPlane.points.length)
      return;
    const o = c(t);
    this.heightPoint = o, this.addIfNotExists(this.topPlane);
    const h = this.bottomPlane.projectPoint(o), s = o.clone().sub(h), l = this.bottomPlane.points.map((g) => g.clone().add(s));
    this.topPlane.setPoints(l), this.up.copy(s.clone().normalize()), this.setEdgePlanes();
  }
  setEdgePlanes() {
    for (let t = 0; t < 4; t++) {
      let o = this.edgePlanes[t];
      o || (this.edgePlanes[t] = new P({
        color: this.color,
        lineColor: this.lineColor,
        lineWidth: this.lineWidth,
        occlusionVisibility: this.occlusionVisibility,
        occlusionMode: this.occlusionMode
      }), o = this.edgePlanes[t]);
      const h = this.topPlane.sortedPoint, s = this.bottomPlane.sortedPoint, l = t === 3 ? 0 : t + 1;
      o.setPoints([h[t], s[l], s[t]]), this.addIfNotExists(o);
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
  T as BoxMesh
};
