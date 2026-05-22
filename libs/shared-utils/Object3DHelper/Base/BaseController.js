var m = Object.defineProperty;
var _ = (b, e, i) => e in b ? m(b, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : b[e] = i;
var o = (b, e, i) => (_(b, typeof e != "symbol" ? e + "" : e, i), i);
import * as O from "three";
import { Subscribe as H } from "../../Subscribe.js";
import { notNil as S } from "../../isNil.js";
import { boundingBox as k } from "../../three/boundingBox.js";
import { toArray as D } from "../../util.js";
import { cameraHooks as x } from "../utils/cameraHooks.js";
class C {
  constructor(e, i) {
    o(this, "originObject3D");
    o(this, "hooks");
    o(this, "preventTapDefaultEvent", !1);
    o(this, "internalHooks");
    o(this, "disposers", []);
    o(this, "helperObject3D");
    o(this, "camera");
    o(this, "model");
    o(this, "scene");
    o(this, "container");
    o(this, "domEvents");
    o(this, "isDragging", !1);
    o(this, "enabled", !1);
    o(this, "name", "BaseController");
    o(this, "boundingBox");
    o(this, "config");
    o(this, "onRender");
    o(this, "cameraHooks");
    /** 其他控制器的引用，用于跨控制器状态检查 */
    o(this, "otherControllers");
    o(this, "onWantsTapGesture", (e) => {
      if (this.getIntersectObject(e))
        return !1;
    });
    o(this, "updateHelperScale", () => {
      "update" in this.helperObject3D && typeof this.helperObject3D.update == "function" && this.helperObject3D.update(this.camera), this.helperObject3D.setScaleByCamera(this.camera);
    });
    o(this, "getBox", () => this.boundingBox ? this.boundingBox : (this.boundingBox = k(this.originObject3D), this.boundingBox));
    var u, j, t;
    this.hooks = (u = e.sharedHooks) != null ? u : new H(), this.internalHooks = (j = e.sharedInternalHooks) != null ? j : new H(), this.camera = e.camera, this.model = e.model, this.originObject3D = e.originObject3D, this.helperObject3D = e.helperObject3D, this.container = e.container, this.scene = e.scene, this.domEvents = e.domEvents, this.onRender = (t = e.onRender) != null ? t : () => {
    }, this.config = i != null ? i : {}, this.otherControllers = e.otherControllers, this.initialHelperPosition(), this.initialHelperQuaternion(), this.updateHelperScale(), this.cameraHooks = x(this.camera), this.enable();
    const n = this.onSetOriginObjectScale.bind(this), a = this.onSetOriginObjectRotate.bind(this), r = this.onSetOriginObjectPosition.bind(this), s = this.onApplyOriginObjectScale.bind(this), h = this.onApplyOriginObjectRotate.bind(this), d = this.onApplyOriginObjectPosition.bind(this), l = this.initialHelperPosition.bind(this);
    this.cameraHooks.on("cameraUpdate", this.updateHelperScale), this.internalHooks.on("initialHelperPosition", l), this.internalHooks.on("setObjectScale", n), this.internalHooks.on("setObjectRotate", a), this.internalHooks.on("setObjectPosition", r), this.internalHooks.on("applyObjectPosition", d), this.internalHooks.on("applyObjectRotate", h), this.internalHooks.on("applyObjectScale", s), this.hooks.on("moveEnd", this.updateHelperScale), this.internalHooks.on("setObjectPosition", this.updateHelperScale), this.internalHooks.on("initialHelperPosition", this.updateHelperScale), this.disposers.push(() => {
      this.cameraHooks.off("cameraUpdate", this.updateHelperScale), this.internalHooks.off("initialHelperPosition", l), this.internalHooks.off("setObjectScale", n), this.internalHooks.off("setObjectRotate", a), this.internalHooks.off("setObjectPosition", r), this.internalHooks.off("applyObjectPosition", d), this.internalHooks.off("applyObjectRotate", h), this.internalHooks.off("applyObjectScale", s), this.hooks.off("moveEnd", this.updateHelperScale), this.internalHooks.off("setObjectPosition", this.updateHelperScale), this.internalHooks.off("initialHelperPosition", this.updateHelperScale);
    });
  }
  /**
   * 更新其他控制器的引用
   */
  updateOtherControllers(e) {
    this.otherControllers = e;
  }
  /**
   * 获取当前控制器的拖拽状态
   */
  getIsDragging() {
    return this.isDragging;
  }
  initialHelperPosition() {
    this.helperObject3D.initialPosition(this.calculateOffset(this.config.offset));
  }
  initialHelperQuaternion() {
    this.helperObject3D.initQuaternion(this.config);
  }
  enable() {
    this.enabled || (this.enabled = !0, this.scene.add(this.helperObject3D), this.helperObject3D.enable(), this.render());
  }
  disable() {
    this.enabled && (this.enabled = !1, this.helperObject3D.disable(), this.render());
  }
  show() {
    this.helperObject3D.show(), this.render();
  }
  hide() {
    this.helperObject3D.hide(), this.render();
  }
  dispose() {
    var e;
    (e = this.disposers) == null || e.forEach((i) => i == null ? void 0 : i()), this.helperObject3D.dispose(), this.render();
  }
  /**
   * @description: applyHelperMatrix4
   * @param {THREE.Matrix4} matrix position 偏移量
   */
  applyHelperMatrix4(e) {
    this.helperObject3D.applyMatrix4(e);
  }
  /**
   * @description: applyHelperQuaternion
   * @param {THREE.Quaternion} quaternion 旋转四元数
   * @param {THREE.Vector3} origin 旋转中心
   */
  applyHelperQuaternion(e, i) {
    this.helperObject3D.applyHelperQuaternion(e, i);
  }
  /**
   * @description: applyHelperScaleMatrix4
   * @param {THREE.Matrix4} matrix 缩放矩阵
   * @param {THREE.Vector3} origin 缩放中心
   */
  applyHelperScaleMatrix4(e, i) {
    this.helperObject3D.applyHelperScaleMatrix4(e, i);
  }
  onWantsGesture(e, i, n) {
    if (this.isDragging)
      return !1;
  }
  onIntersectionOnModelUpdate(e) {
  }
  /**
   * @description: onApplyOriginObjectScale
   * @param {THREE.Matrix4} params.matrix 缩放矩阵
   * @param {THREE.Vector3} params.origin 缩放中心
   */
  onApplyOriginObjectScale(e) {
    this.applyHelperScaleMatrix4(e.matrix, e.origin);
  }
  /**
   * @description: onApplyOriginObjectRotate
   * @param {THREE.Quaternion} params.quaternion 旋转四元数
   * @param {THREE.Vector3} params.origin 旋转中心
   */
  onApplyOriginObjectRotate(e) {
    this.applyHelperQuaternion(e.quaternion, e.origin);
  }
  /**
   * @description: onApplyOriginObjectPosition
   * @param {THREE.Matrix4} params.matrix position 偏移量
   */
  onApplyOriginObjectPosition(e) {
    this.applyHelperMatrix4(e.matrix);
  }
  onSetOriginObjectScale(e) {
    this.helperObject3D.scale.copy(e), this.updateOffsetByScale(e);
  }
  onSetOriginObjectRotate(e, i) {
    this.helperObject3D.setHelperQuaternion(e, i);
  }
  onSetOriginObjectPosition(e) {
    this.helperObject3D.position.copy(e.clone().add(this.calculateOffset(this.config.offset)));
  }
  render() {
    this.onRender();
  }
  updateOffsetByScale(e) {
    if (this.boundingBox && this.config.offset) {
      const i = this.originObject3D.position, n = new O.Vector3().subVectors(this.boundingBox.max, i).multiply(e).add(i), a = new O.Vector3().subVectors(this.boundingBox.min, i).multiply(e).add(i), r = this.calculateOffset(this.config.offset, { min: a, max: n });
      this.helperObject3D.initialPosition(r);
    }
  }
  hoverListener(e, i = 16777215, n = 1) {
    const a = D(e).filter(S), r = [];
    for (const s of a)
      if (s.material || s instanceof O.Group) {
        const h = s instanceof O.Group ? s.children.filter((t) => t instanceof O.Mesh) : [s];
        h.forEach((t) => {
          var c, f, g, p;
          Array.isArray(t.material) ? (t.__originalColor__ = (c = t.__originalColor__) != null ? c : t.material.map((y) => y.color.clone()), t.__originalOpacity__ = (f = t.__originalOpacity__) != null ? f : t.material.map((y) => y.opacity)) : (t.__originalColor__ = (g = t.__originalColor__) != null ? g : t.material.color.clone(), t.__originalOpacity__ = (p = t.__originalOpacity__) != null ? p : t.material.opacity);
        });
        const d = () => {
          h.forEach((t) => {
            t.name === "ScaleHelperTransparentGroup" ? t.children[0] && (t.children[0].material.color.set(i), t.children[0].material.opacity = n) : Array.isArray(t.material) ? t.material.forEach((c) => {
              c.color.set(i), c.opacity = n;
            }) : (t.material.color.set(i), t.material.opacity = n);
          }), this.render();
        }, l = () => {
          h.forEach((t) => {
            if (t.name === "ScaleHelperTransparentGroup")
              t.children[0] && (t.children[0].material.color.set(16776960), t.children[0].material.opacity = 1);
            else if (Array.isArray(t.material)) {
              const c = t.__originalColor__, f = t.__originalOpacity__;
              t.material.forEach((g, p) => {
                c && c[p] && g.color.copy(c[p]), f && f[p] !== void 0 && (g.opacity = f[p]);
              });
            } else
              t.material.color.copy(t.__originalColor__), t.material.opacity = t.__originalOpacity__;
          }), this.render();
        }, u = (t) => {
          this.isDragging || d();
        }, j = (t) => {
          this.isDragging || l();
        };
        for (const t of h)
          this.domEvents.addEventListener(t, "mouseover", u), this.domEvents.addEventListener(t, "mouseout", j), this.hooks.on("moveStart", d), this.hooks.on("moveEnd", l), this.hooks.on("rotateEnd", l), this.hooks.on("scaleEnd", l), r.push(() => {
            this.domEvents.removeEventListener(t, "mouseover", u), this.domEvents.removeEventListener(t, "mouseout", j), this.hooks.off("moveStart", d), this.hooks.off("moveEnd", l), this.hooks.off("rotateEnd", l), this.hooks.off("scaleEnd", l);
          });
      }
    return () => r.forEach((s) => s == null ? void 0 : s());
  }
  getIntersectObject(e) {
    const i = this.camera.position, n = this.helperObject3D;
    if (!n)
      return;
    const a = this.helperObject3D.raycasterIntersectObject(e)[0];
    if (!a)
      return;
    const r = a;
    if (r.object = n, this.model.intersectRaycaster) {
      const s = this.model.intersectRaycaster(e)[0];
      if (s && s.point.distanceTo(i) < r.point.distanceTo(i))
        return;
    }
    return r.object;
  }
  calculateOffset(e, i) {
    const n = new O.Vector3(0, 0, 0);
    if (!e)
      return n;
    const a = () => i || this.getBox();
    if (typeof e.x == "number")
      n.setX(e.x);
    else if (typeof e.x == "object") {
      const r = a();
      n.setX((r.max.x - r.min.x) * e.x.percents);
    }
    if (typeof e.y == "number")
      n.setY(e.y);
    else if (typeof e.y == "object") {
      const r = a();
      n.setY((r.max.y - r.min.y) * e.y.percents);
    }
    if (typeof e.z == "number")
      n.setZ(e.z);
    else if (typeof e.z == "object") {
      const r = a();
      n.setZ((r.max.z - r.min.z) * e.z.percents);
    }
    return n;
  }
}
export {
  C as BaseController
};
