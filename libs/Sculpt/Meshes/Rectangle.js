var l = Object.defineProperty;
var c = (e, o, t) => o in e ? l(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var i = (e, o, t) => (c(e, typeof o != "symbol" ? o + "" : o, t), t);
import { anyPositionToVector3 as a } from "../../shared-utils/positionToVector3.js";
import "../../shared-utils/tag.js";
import "three";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as h } from "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/five/FivePuppet.js";
import { PolygonMesh as g } from "./Polygon.js";
import { RectangleGeometry as d } from "../utils/three/RectangleGeometry.js";
class j extends g {
  constructor(t) {
    super(t);
    i(this, "name", "RectangleMesh");
  }
  get color() {
    return this.meshFont.material.color;
  }
  setPoints(t) {
    const r = t.map(a).filter(h);
    if (r.length < 3) {
      console.error("Invalid position");
      return;
    }
    if (t.length === 3) {
      const [m, n, p] = r, s = m.clone().add(p).sub(n);
      r.push(s);
    }
    this.points = r, this.geometry = new d(r), this.planeHelperNeedUpdate = !0, this.geometryInfoNeedUpdate = !0;
  }
}
export {
  j as RectangleMesh
};
