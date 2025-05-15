var m = Object.defineProperty;
var H = (h, e, t) => e in h ? m(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t;
var o = (h, e, t) => (H(h, typeof e != "symbol" ? e + "" : e, t), t);
import * as b from "three";
import { Subscribe as j } from "../../Subscribe.js";
import { notNil as g } from "../../isNil.js";
import { boundingBox as y } from "../../three/boundingBox.js";
import { toArray as k } from "../../util.js";
import { cameraHooks as S } from "../utils/cameraHooks.js";
class B {
  constructor(e, t) {
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
    o(this, "onWantsTapGesture", (e) => {
      if (this.getIntersectObject(e))
        return !1;
    });
    o(this, "updateHelperScale", () => {
      this.helperObject3D.setScaleByCamera(this.camera);
    });
    o(this, "getBox", () => this.boundingBox ? this.boundingBox : (this.boundingBox = y(this.originObject3D), this.boundingBox));
    var d, f, i;
    this.hooks = (d = e.sharedHooks) != null ? d : new j(), this.internalHooks = (f = e.sharedInternalHooks) != null ? f : new j(), this.camera = e.camera, this.model = e.model, this.originObject3D = e.originObject3D, this.helperObject3D = e.helperObject3D, this.container = e.container, this.scene = e.scene, this.domEvents = e.domEvents, this.onRender = (i = e.onRender) != null ? i : () => {
    }, this.config = t != null ? t : {}, this.initialHelperPosition(), this.initialHelperQuaternion(), this.updateHelperScale(), this.cameraHooks = S(this.camera), this.enable();
    const s = this.onSetOriginObjectScale.bind(this), a = this.onSetOriginObjectRotate.bind(this), n = this.onSetOriginObjectPosition.bind(this), r = this.onApplyOriginObjectScale.bind(this), c = this.onApplyOriginObjectRotate.bind(this), p = this.onApplyOriginObjectPosition.bind(this), l = this.initialHelperPosition.bind(this);
    this.cameraHooks.on("cameraUpdate", this.updateHelperScale), this.internalHooks.on("initialHelperPosition", l), this.internalHooks.on("setObjectScale", s), this.internalHooks.on("setObjectRotate", a), this.internalHooks.on("setObjectPosition", n), this.internalHooks.on("applyObjectPosition", p), this.internalHooks.on("applyObjectRotate", c), this.internalHooks.on("applyObjectScale", r), this.hooks.on("moveEnd", this.updateHelperScale), this.internalHooks.on("setObjectPosition", this.updateHelperScale), this.internalHooks.on("initialHelperPosition", this.updateHelperScale), this.disposers.push(() => {
      this.cameraHooks.off("cameraUpdate", this.updateHelperScale), this.internalHooks.off("initialHelperPosition", l), this.internalHooks.off("setObjectScale", s), this.internalHooks.off("setObjectRotate", a), this.internalHooks.off("setObjectPosition", n), this.internalHooks.off("applyObjectPosition", p), this.internalHooks.off("applyObjectRotate", c), this.internalHooks.off("applyObjectScale", r), this.hooks.off("moveEnd", this.updateHelperScale), this.internalHooks.off("setObjectPosition", this.updateHelperScale), this.internalHooks.off("initialHelperPosition", this.updateHelperScale);
    });
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
    (e = this.disposers) == null || e.forEach((t) => t == null ? void 0 : t()), this.helperObject3D.dispose(), this.render();
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
  applyHelperQuaternion(e, t) {
    this.helperObject3D.applyHelperQuaternion(e, t);
  }
  /**
   * @description: applyHelperScaleMatrix4
   * @param {THREE.Matrix4} matrix 缩放矩阵
   * @param {THREE.Vector3} origin 缩放中心
   */
  applyHelperScaleMatrix4(e, t) {
    this.helperObject3D.applyHelperScaleMatrix4(e, t);
  }
  onWantsGesture(e, t, s) {
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
  onSetOriginObjectRotate(e, t) {
    this.helperObject3D.setHelperQuaternion(e, t);
  }
  onSetOriginObjectPosition(e) {
    this.helperObject3D.position.copy(e.clone().add(this.calculateOffset(this.config.offset)));
  }
  render() {
    this.onRender();
  }
  updateOffsetByScale(e) {
    if (this.boundingBox && this.config.offset) {
      const t = this.originObject3D.position, s = new b.Vector3().subVectors(this.boundingBox.max, t).multiply(e).add(t), a = new b.Vector3().subVectors(this.boundingBox.min, t).multiply(e).add(t), n = this.calculateOffset(this.config.offset, { min: a, max: s });
      this.helperObject3D.initialPosition(n);
    }
  }
  hoverListener(e, t = 16777215, s = 1) {
    const a = k(e).filter(g), n = [];
    for (const r of a)
      if (r.material || r instanceof b.Group) {
        const c = r instanceof b.Group ? r.children.filter((i) => i instanceof b.Mesh) : [r];
        c.forEach((i) => {
          var O, u;
          i.__originalColor__ = (O = i.__originalColor__) != null ? O : i.material.color.clone(), i.__originalOpacity__ = (u = i.__originalOpacity__) != null ? u : i.material.opacity;
        });
        const p = () => {
          c.forEach((i) => {
            i.material.color.set(t), i.material.opacity = s;
          }), this.render();
        }, l = () => {
          c.forEach((i) => {
            i.material.color.copy(i.__originalColor__), i.material.opacity = i.__originalOpacity__;
          }), this.render();
        }, d = () => {
          this.isDragging || p();
        }, f = () => {
          this.isDragging || l();
        };
        for (const i of c)
          this.domEvents.addEventListener(i, "mouseover", d), this.domEvents.addEventListener(i, "mouseout", f), this.hooks.on("moveStart", p), this.hooks.on("moveEnd", l), this.hooks.on("rotateEnd", l), this.hooks.on("scaleEnd", l), n.push(() => {
            this.domEvents.removeEventListener(i, "mouseover", d), this.domEvents.removeEventListener(i, "mouseout", f), this.hooks.off("moveStart", p), this.hooks.off("moveEnd", l), this.hooks.off("rotateEnd", l), this.hooks.off("scaleEnd", l);
          });
      }
    return () => n.forEach((r) => r == null ? void 0 : r());
  }
  getIntersectObject(e) {
    const t = this.camera.position, s = this.helperObject3D;
    if (!s)
      return;
    const a = this.helperObject3D.raycasterIntersectObject(e)[0];
    if (!a)
      return;
    const n = a;
    if (n.object = s, this.model.intersectRaycaster) {
      const r = this.model.intersectRaycaster(e)[0];
      if (r && r.point.distanceTo(t) < n.point.distanceTo(t))
        return;
    }
    return n.object;
  }
  calculateOffset(e, t) {
    const s = new b.Vector3(0, 0, 0);
    if (!e)
      return s;
    const a = () => t || this.getBox();
    if (typeof e.x == "number")
      s.setX(e.x);
    else if (typeof e.x == "object") {
      const n = a();
      s.setX((n.max.x - n.min.x) * e.x.percents);
    }
    if (typeof e.y == "number")
      s.setY(e.y);
    else if (typeof e.y == "object") {
      const n = a();
      s.setY((n.max.y - n.min.y) * e.y.percents);
    }
    if (typeof e.z == "number")
      s.setZ(e.z);
    else if (typeof e.z == "object") {
      const n = a();
      s.setZ((n.max.z - n.min.z) * e.z.percents);
    }
    return s;
  }
}
export {
  B as BaseController
};
