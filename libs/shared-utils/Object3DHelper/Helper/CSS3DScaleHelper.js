var D = Object.defineProperty;
var b = (o, a, e) => a in o ? D(o, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[a] = e;
var i = (o, a, e) => (b(o, typeof a != "symbol" ? a + "" : a, e), e);
import { CSS3DRender as S } from "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import * as r from "three";
import { RectangleScaleHelperAbstract as u } from "../Base/BaseHelper.js";
import "../utils/getOrthographicCameraDirection.js";
import { rectangleScaleDom as y } from "./HTML/rectangleScaleDom.js";
import { cameraHooks as f } from "../utils/cameraHooks.js";
import "../../three/core/Sphere.js";
class H extends u {
  // 记录初始缩放值
  // eslint-disable-next-line max-params
  constructor(e, t, s, n) {
    super(e);
    i(this, "name", "CSS3DScaleHelper");
    i(this, "points", []);
    i(this, "cornerPositions", []);
    i(this, "css3DInstance");
    i(this, "plane");
    i(this, "css3DRenderer", new S());
    i(this, "camera");
    i(this, "scene");
    i(this, "container");
    i(this, "enabled", !1);
    i(this, "initialScale");
    this.camera = s, this.scene = n, this.container = t, this.initRectangleScaleHelper();
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
    (s = this.plane) == null || s.scale.applyMatrix4(e), this.helperObject.applyScaleMatrix4(e), setTimeout(() => {
      this.updateSphereCorrection();
    }, 0);
  }
  updatePoints() {
    const e = this.calculatePointPosition(this.cornerPositions);
    this.points.forEach((t, s) => {
      t.position.copy(e[s]);
    });
  }
  update(e) {
    var t;
    (t = this.css3DInstance) != null && t.css3DObject && this.helperObject.position.copy(this.originObject3D.position), this.plane && this.plane.position.copy(this.originObject3D.position), this.updatePoints(), this.css3DInstance && this.css3DInstance.show(), this.plane && (this.plane.visible = !0);
  }
  applyHelperQuaternion(e, t) {
    var n;
    const s = (n = this.css3DInstance) == null ? void 0 : n.css3DObject;
    if (s) {
      const c = new r.Vector3().subVectors(s.position, t).applyQuaternion(e).add(t);
      s.position.copy(c), s.applyQuaternion(e);
    }
    if (this.plane) {
      const c = new r.Vector3().subVectors(this.plane.position, t).applyQuaternion(e).add(t);
      this.plane.position.copy(c), this.plane.applyQuaternion(e);
    }
    this.cornerPositions.forEach((c) => {
      const l = new r.Vector3().subVectors(c, t).applyQuaternion(e).add(t);
      c.copy(l);
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
  /**
   * 缩放结束时的回调方法
   * 触发相机更新事件
   */
  onScaleEnd() {
    f(this.camera).emit("cameraUpdate");
  }
  updateSphereCorrection() {
    if (!this.css3DInstance)
      return;
    this.initialScale || (this.initialScale = {
      x: this.originObject3D.scale.x,
      y: this.originObject3D.scale.y
    });
    const e = this.originObject3D.scale, t = e.x / this.initialScale.x, s = e.y / this.initialScale.y, n = this.css3DInstance.css3DObject.container;
    n.style.setProperty("--parent-scaleX", t.toString()), n.style.setProperty("--parent-scaleY", s.toString());
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
    const s = t.css3DObject.container, { container: n, spheres: c } = y();
    this.points = c.map((h, d) => ({
      direction: h.direction,
      point: h.element,
      position: this.calculatePointPosition(e)[d]
    })), s.insertBefore(n, (l = s.children[0]) != null ? l : null), this.helperObject.position.copy(this.originObject3D.position), (p = this.plane) == null || p.position.copy(this.originObject3D.position);
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
  H as CSS3DScaleHelper
};
