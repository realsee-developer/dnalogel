var l = Object.defineProperty;
var c = (r, e, t) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var i = (r, e, t) => (c(r, typeof e != "symbol" ? e + "" : e, t), t);
import { anyPositionToVector3 as a } from "../../shared-utils/positionToVector3.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/three/core/Sphere.js";
import "animejs";
import { notNil as h } from "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { PolygonMesh as u } from "./Polygon.js";
import { RectangleGeometry as g } from "../utils/three/RectangleGeometry.js";
import { getBetterNormal as f } from "../utils/getBetterNormal.js";
import { Sculpt as d } from "../index.js";
class T extends u {
  constructor(t) {
    super(t);
    i(this, "name", "RectangleMesh");
  }
  get color() {
    return this.meshFont.material.color;
  }
  /**
   * @description: 构造矩形所需的三个点
   */
  get builtPoints() {
    var t, o;
    return (o = (t = this.meshFont) == null ? void 0 : t.geometry) == null ? void 0 : o.points.slice(0, 3);
  }
  setPoints(t) {
    const o = t.map(a).filter(h);
    if (o.length < 3) {
      console.error("Invalid position");
      return;
    }
    if (t.length === 3) {
      const [m, s, n] = o, p = m.clone().add(n).sub(s);
      o.push(p);
    }
    this.up.copy(f(o, d.modules.five.camera.position)), this.points = o, this.geometry = new g(o), this.planeHelperNeedUpdate = !0, this.geometryInfoNeedUpdate = !0;
  }
}
export {
  T as RectangleMesh
};
