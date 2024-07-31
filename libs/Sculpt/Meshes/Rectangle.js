var c = Object.defineProperty;
var h = (r, e, t) => e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var i = (r, e, t) => (h(r, typeof e != "symbol" ? e + "" : e, t), t);
import { anyPositionToVector3 as a } from "../../shared-utils/positionToVector3.js";
import "hammerjs";
import * as u from "three";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { notNil as s } from "../../shared-utils/isNil.js";
import { PolygonMesh as f } from "./Polygon.js";
import { RectangleGeometry as g } from "../utils/three/RectangleGeometry.js";
import { getBetterNormal as d } from "../utils/getBetterNormal.js";
import { Sculpt as v } from "../index.js";
class T extends f {
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
  get sortedPoint() {
    return [this.points[0], this.points[2], this.points[1], this.points[3]].filter(s);
  }
  setPoints(t) {
    const o = t.map(a).filter(s);
    if (o.length < 3) {
      console.error("Invalid position");
      return;
    }
    if (t.length === 3) {
      const [n, m, p] = o, l = new u.Vector3().addVectors(n, m).sub(p);
      o.push(l);
    }
    this.up.copy(d(o, v.modules.five.camera.position)), this.points = o, this.geometry = new g(o), this.planeHelperNeedUpdate = !0;
  }
}
export {
  T as RectangleMesh
};
