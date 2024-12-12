var b = Object.defineProperty;
var D = (c, n, e) => n in c ? b(c, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[n] = e;
var i = (c, n, e) => (D(c, typeof n != "symbol" ? n + "" : n, e), e);
import { CSS3DRender as u } from "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import * as r from "three";
import { RectangleScaleHelperAbstract as f } from "../Base/BaseHelper.js";
import "../utils/getOrthographicCameraDirection.js";
import { rectangleScaleDom as y } from "./HTML/rectangleScaleDom.js";
import "../../three/core/Sphere.js";
class v extends f {
  // eslint-disable-next-line max-params
  constructor(e, t, s, o) {
    super(e);
    i(this, "name", "CSS3DScaleHelper");
    i(this, "points", []);
    i(this, "cornerPositions", []);
    i(this, "css3DInstance");
    i(this, "plane");
    i(this, "css3DRenderer", new u());
    i(this, "camera");
    i(this, "scene");
    i(this, "container");
    i(this, "enabled", !1);
    this.camera = s, this.scene = o, this.container = t, this.initRectangleScaleHelper();
  }
  get helperObject() {
    var e;
    if (!((e = this.css3DInstance) != null && e.css3DObject))
      throw new Error("css3DInstance is not initialized");
    return this.css3DInstance.css3DObject;
  }
  initQuaternion() {
    this.quaternion.copy(this.originObject3D.quaternion);
  }
  applyMatrix4(e) {
    var t;
    super.applyMatrix4(e), this.helperObject.applyMatrix4(e), (t = this.plane) == null || t.applyMatrix4(e), this.cornerPositions.forEach((s) => s.applyMatrix4(e));
  }
  showDraggingHelper() {
  }
  applyHelperScaleMatrix4(e, t) {
    var s;
    (s = this.plane) == null || s.scale.applyMatrix4(e), this.helperObject.applyScaleMatrix4(e);
  }
  updatePoints() {
    const e = this.calculatePointPosition(this.cornerPositions);
    this.points.forEach((t, s) => {
      t.position.copy(e[s]);
    });
  }
  applyHelperQuaternion(e, t) {
    var o;
    const s = (o = this.css3DInstance) == null ? void 0 : o.css3DObject;
    if (s) {
      const a = new r.Vector3().subVectors(s.position, t).applyQuaternion(e).add(t);
      s.position.copy(a), s.applyQuaternion(e);
    }
    if (this.plane) {
      const a = new r.Vector3().subVectors(this.plane.position, t).applyQuaternion(e).add(t);
      this.plane.position.copy(a), this.plane.applyQuaternion(e);
    }
    this.cornerPositions.forEach((a) => {
      const l = new r.Vector3().subVectors(a, t).applyQuaternion(e).add(t);
      a.copy(l);
    });
  }
  enable() {
    var e;
    this.enabled || (this.enabled = !0, (e = this.css3DInstance) == null || e.enable(), this.plane && this.scene.add(this.plane));
  }
  disable() {
    var e;
    this.enabled && (this.enabled = !1, (e = this.css3DInstance) == null || e.disable(), this.plane && this.scene.remove(this.plane));
  }
  show() {
    var e;
    (e = this.css3DInstance) == null || e.show(), this.plane && (this.plane.visible = !0);
  }
  hide() {
    var e;
    (e = this.css3DInstance) == null || e.hide(), this.plane && (this.plane.visible = !1);
  }
  dispose() {
    this.disable(), this.css3DRenderer.dispose();
  }
  initRectangleScaleHelper() {
    var l, p;
    const e = this.getCornerPositions();
    if (!e)
      return;
    this.cornerPositions = e;
    const t = this.css3DRenderer.create3DElement(this.camera, e, { ratio: 3e-3 });
    if (!t)
      return;
    this.css3DInstance = t, t.appendToElement(this.container);
    const s = t.css3DObject.container, { container: o, squares: a } = y();
    this.points = a.map((h, d) => ({
      direction: h.direction,
      point: h.element,
      position: this.calculatePointPosition(e)[d]
    })), s.insertBefore(o, (l = s.children[0]) != null ? l : null), this.helperObject.position.copy(this.originObject3D.position), (p = this.plane) == null || p.position.copy(this.originObject3D.position);
  }
  getCornerPositions() {
    const { originObject3D: e } = this;
    if (e.isCSS3DObject && e.cornerPoints)
      return e.cornerPoints;
    console.error("当前物体暂时不支持 ScaleHelper");
  }
  calculatePointPosition(e) {
    return [
      e[0].clone(),
      e[0].clone().add(e[1]).divideScalar(2),
      e[1].clone(),
      e[1].clone().add(e[2]).divideScalar(2),
      e[2].clone(),
      e[2].clone().add(e[3]).divideScalar(2),
      e[3].clone(),
      e[3].clone().add(e[0]).divideScalar(2)
    ];
  }
}
export {
  v as CSS3DScaleHelper
};
