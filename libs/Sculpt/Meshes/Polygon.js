var l = Object.defineProperty;
var p = (o, i, e) => i in o ? l(o, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[i] = e;
var t = (o, i, e) => (p(o, typeof i != "symbol" ? i + "" : i, e), e);
import * as r from "three";
import { generatePolygonGeometry as g } from "../../shared-utils/three/generatePolygonGeometry.js";
import { DEFAULT_HIGHLIGHT_OPACITY as a } from "../utils/color.js";
import { anyPositionToVector3 as f } from "../../shared-utils/positionToVector3.js";
import { ColoredMesh as y } from "../utils/three/ColoredMesh.js";
import { getGeometryInfo as d } from "../../shared-utils/three/geometryUtil.js";
const n = new r.BufferGeometry();
n.name = "blankGeometry";
n.isBlank = !0;
class G extends y {
  constructor(e) {
    super(e);
    t(this, "name", "PolygonMesh");
    t(this, "points", []);
    t(this, "planeHelperNeedUpdate", !0);
    t(this, "geometryInfoNeedUpdate", !0);
    t(this, "planeHelper", null);
    t(this, "geometryInfo", null);
    t(this, "opacityBeforeHighlight");
    t(this, "highlighted", !1);
    e != null && e.points && this.setPoints(e.points);
  }
  get isBlank() {
    return !!this.geometry.isBlank;
  }
  get center() {
    return this.getGeometryInfo().center;
  }
  setPoints(e) {
    var s;
    const h = e.map(f);
    this.points = h, this.geometry = (s = g(this.points)) != null ? s : n, this.planeHelperNeedUpdate = !0, this.geometryInfoNeedUpdate = !0;
  }
  getGeometryInfo() {
    return this.geometryInfoNeedUpdate ? d(this.geometry) : this.geometryInfo;
  }
  /**
   * @description: 获取一个点投影在当前平面上的点
   */
  projectPoint(e) {
    return e && (this.planeHelperNeedUpdate && this.updatePlaneHelper(), this.planeHelper ? this.planeHelper.projectPoint(e, new r.Vector3()) : e);
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.opacityBeforeHighlight = this.opacity, this.setStyle({ opacity: this.opacity * a }), this.needsRender = !0);
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, this.setStyle({ opacity: this.opacityBeforeHighlight }), this.needsRender = !0);
  }
  updatePlaneHelper() {
    this.points.length >= 3 ? this.planeHelper = new r.Plane().setFromCoplanarPoints(this.points[0], this.points[1], this.points[2]) : this.planeHelper = null, this.planeHelperNeedUpdate = !1;
  }
}
export {
  G as PolygonMesh
};
