var c = Object.defineProperty;
var h = (o, t, e) => t in o ? c(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var s = (o, t, e) => (h(o, typeof t != "symbol" ? t + "" : t, e), e);
import * as r from "three";
import { IObject3D as l } from "../../shared-utils/three/IObject3D.js";
import { generatePolygonGeometry as p } from "../../shared-utils/three/generatePolygonGeometry.js";
import "../../shared-utils/three/earcut3D.js";
import "../../vendor/earcut/src/earcut.js";
import "../../shared-utils/three/getNormal.js";
import "../utils/isIntersecting.js";
const d = new r.BufferGeometry();
class k extends l {
  constructor(e) {
    super();
    s(this, "isPolygonMesh", !0);
    s(this, "geometry", new r.BufferGeometry());
    s(this, "isBlank", !0);
    s(this, "points", []);
    const i = new r.MeshBasicMaterial({
      color: 4090367,
      transparent: !0,
      side: r.DoubleSide,
      depthTest: !0,
      opacity: 0.5
    }), m = new r.MeshBasicMaterial({
      color: 16777215,
      transparent: !0,
      side: r.DoubleSide,
      depthTest: !1,
      depthWrite: !1,
      opacity: 0.3
    }), n = new r.Mesh(this.geometry, i), a = new r.Mesh(this.geometry, m);
    n.renderOrder = 1, a.renderOrder = 0, e && this.updatePoints(e), this.add(n, a);
  }
  /**
   * @description: 按照新的端点来更新多边形的geometry
   */
  updatePoints(e) {
    this.points = e;
    const i = p(e);
    i ? (this.geometry.copy(i), this.isBlank = !1) : (this.geometry.copy(d), this.isBlank = !0);
  }
}
export {
  k as PolygonMesh,
  d as blankGeometry
};
