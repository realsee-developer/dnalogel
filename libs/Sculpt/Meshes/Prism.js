var d = Object.defineProperty;
var a = (n, i, t) => i in n ? d(n, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[i] = t;
var h = (n, i, t) => (a(n, typeof i != "symbol" ? i + "" : i, t), t);
import { IObject3D as r } from "../../shared-utils/three/IObject3D.js";
import { anyPositionToVector3 as P } from "../../shared-utils/positionToVector3.js";
import "hammerjs";
import * as m from "three";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { notNil as c } from "../../shared-utils/isNil.js";
import { PolygonMesh as p } from "./Polygon.js";
import { LineMesh as y } from "./Line.js";
import { PolygonWithEdgeMesh as f } from "./PolygonWithEdge.js";
class N extends r {
  constructor(t) {
    super();
    h(this, "name", "PrismMesh");
    h(this, "heightPoint");
    h(this, "bottomPolygon", new f());
    h(this, "topPolygon", new f());
    h(this, "edgePlanes", new r());
    this.topPolygon.name = "TopPolygon", this.bottomPolygon.name = "BottomPolygon", this.edgePlanes.name = "EdgePlanes", this.addIfNotExists(this.bottomPolygon), t && this.setPoints(t), t && this.setStyle(t);
  }
  /**
   * @deprecated notice: please use specified center instead, such as `localCenter` or `worldCenter`
   */
  get center() {
    return this.localCenter;
  }
  get localCenter() {
    var s, e;
    const t = (s = this.topPolygon) == null ? void 0 : s.center, o = (e = this.bottomPolygon) == null ? void 0 : e.center;
    if (t && o)
      return new m.Vector3().lerpVectors(t, o, 0.5);
  }
  get worldCenter() {
    return this.updateMatrixWorld(), this.localToWorld(this.localCenter);
  }
  get color() {
    return this.bottomPolygon.color;
  }
  get lineWidth() {
    return this.bottomPolygon.lineWidth;
  }
  get lineColor() {
    return this.bottomPolygon.lineColor;
  }
  setStyle(t) {
    this.bottomPolygon.setStyle(t), this.topPolygon.setStyle(t), this.edgePlanes.children.forEach((o) => {
      (o instanceof y || o instanceof p) && o.setStyle(t);
    });
  }
  setPoints(t) {
    c(t.points) && this.setBottomPoints(t.points), c(t.heightPoint) && this.setTopHeightPoint(P(t.heightPoint));
  }
  highlight() {
    this.bottomPolygon.highlight(), this.topPolygon.highlight(), this.edgePlanes.children.forEach((t) => {
      typeof t.highlight == "function" && t.highlight();
    });
  }
  unhighlight() {
    this.bottomPolygon.unhighlight(), this.topPolygon.unhighlight(), this.edgePlanes.children.forEach((t) => {
      typeof t.unhighlight == "function" && t.unhighlight();
    });
  }
  setBottomPoints(t) {
    this.bottomPolygon.setPoints(t.map(P)), this.heightPoint && this.setTopHeightPoint(this.heightPoint);
  }
  setTopHeightPoint(t) {
    this.heightPoint = t, this.addIfNotExists(this.topPolygon);
    const o = this.bottomPolygon.projectPoint(t), s = new m.Vector3().subVectors(t, o);
    this.up.copy(s.clone().normalize());
    const g = this.bottomPolygon.points.map((l) => l.clone().add(s));
    this.topPolygon.setPoints(g), this.setEdgePlanes();
  }
  setEdgePlanes() {
    const t = this.bottomPolygon.points, o = this.topPolygon.points;
    this.addIfNotExists(this.edgePlanes), this.edgePlanes.removeChildren(), t.forEach((s, e) => {
      if (e === 0)
        return;
      const g = new p({ color: this.color });
      g.setPoints([t[e - 1], t[e], o[e], o[e - 1]]);
      const l = new y({ lineColor: this.lineColor, lineWidth: this.lineWidth });
      l.name = "EdgeLine", l.setPoints([t[e - 1], o[e - 1]]), this.edgePlanes.add(g, l);
    });
  }
}
export {
  N as PrismMesh
};
