var u = Object.defineProperty;
var j = (b, e, t) => e in b ? u(b, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : b[e] = t;
var s = (b, e, t) => (j(b, typeof e != "symbol" ? e + "" : e, t), t);
import * as c from "three";
import { Subscribe as f } from "../../Subscribe.js";
import { DomEvents as m } from "../../threex/domevents/index.js";
import { notNil as y } from "../../isNil.js";
import { boundingBox as g } from "../utils/boundingBox.js";
import { toArray as H } from "../../util.js";
class E {
  constructor(e, t) {
    s(this, "originObject3D");
    s(this, "hooks");
    s(this, "preventTapDefaultEvent", !1);
    s(this, "internalHooks");
    s(this, "disposers", []);
    s(this, "helperObject3D");
    s(this, "camera");
    s(this, "model");
    s(this, "scene");
    s(this, "container");
    s(this, "domEvents");
    s(this, "isDragging", !1);
    s(this, "enabled", !1);
    s(this, "name", "BaseController");
    s(this, "boundingBox");
    s(this, "config");
    s(this, "onRender");
    s(this, "onWantsTapGesture", (e) => {
      if (this.getIntersectObject(e))
        return !1;
    });
    s(this, "onWantsUpdateCameraDistance", () => {
      if (this.camera.isPerspectiveCamera) {
        const e = this.camera;
        this.helperObject3D.setScaleByCamera(e);
      }
    });
    s(this, "getBox", () => this.boundingBox ? this.boundingBox : (this.boundingBox = g(this.originObject3D), this.boundingBox));
    var d, O, n;
    this.hooks = (d = e.sharedHooks) != null ? d : new f(), this.internalHooks = (O = e.sharedInternalHooks) != null ? O : new f(), this.camera = e.camera, this.model = e.model, this.originObject3D = e.originObject3D, this.helperObject3D = e.helperObject3D, this.container = e.container, this.scene = e.scene, this.domEvents = new m(e.camera, e.container), this.onRender = (n = e.onRender) != null ? n : () => {
    }, this.config = t != null ? t : {}, this.initialHelperPosition(), this.initialHelperQuaternion(), this.onWantsUpdateCameraDistance(), this.enable();
    const o = this.onSetOriginObjectScale.bind(this), a = this.onSetOriginObjectRotate.bind(this), i = this.onSetOriginObjectPosition.bind(this), r = this.onApplyOriginObjectScale.bind(this), h = this.onApplyOriginObjectRotate.bind(this), p = this.onApplyOriginObjectPosition.bind(this), l = this.initialHelperPosition.bind(this);
    this.internalHooks.on("setObjectPosition", this.onWantsUpdateCameraDistance), this.internalHooks.on("initialHelperPosition", this.onWantsUpdateCameraDistance), this.internalHooks.on("initialHelperPosition", l), this.internalHooks.on("setObjectScale", o), this.internalHooks.on("setObjectRotate", a), this.internalHooks.on("setObjectPosition", i), this.internalHooks.on("applyObjectPosition", p), this.internalHooks.on("applyObjectRotate", h), this.internalHooks.on("applyObjectScale", r), this.disposers.push(() => {
      this.internalHooks.off("setObjectPosition", this.onWantsUpdateCameraDistance), this.internalHooks.off("initialHelperPosition", this.onWantsUpdateCameraDistance), this.internalHooks.off("initialHelperPosition", l), this.internalHooks.off("setObjectScale", o), this.internalHooks.off("setObjectRotate", a), this.internalHooks.off("setObjectPosition", i), this.internalHooks.off("applyObjectPosition", p), this.internalHooks.off("applyObjectRotate", h), this.internalHooks.off("applyObjectScale", r);
    });
  }
  initialHelperPosition() {
    this.helperObject3D.initialPosition(this.calculateOffset(this.config.offset));
  }
  initialHelperQuaternion() {
    var h, p, l;
    this.helperObject3D.initQuaternion();
    const e = (h = this.config.xAxis) != null ? h : new c.Vector3(1, 0, 0), t = (p = this.config.yAxis) != null ? p : new c.Vector3(0, 1, 0), o = (l = this.config.zAxis) != null ? l : new c.Vector3(0, 0, 1), a = new c.Quaternion();
    a.setFromUnitVectors(new c.Vector3(1, 0, 0), e.normalize());
    const i = new c.Quaternion();
    i.setFromUnitVectors(new c.Vector3(0, 1, 0), t.normalize());
    const r = new c.Quaternion();
    r.setFromUnitVectors(new c.Vector3(0, 0, 1), o.normalize()), this.helperObject3D.quaternion.premultiply(a), this.helperObject3D.quaternion.premultiply(i), this.helperObject3D.quaternion.premultiply(r);
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
  onWantsGesture(e, t, o) {
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
      const t = this.originObject3D.position, o = new c.Vector3().subVectors(this.boundingBox.max, t).multiply(e).add(t), a = new c.Vector3().subVectors(this.boundingBox.min, t).multiply(e).add(t), i = this.calculateOffset(this.config.offset, { min: a, max: o });
      this.helperObject3D.initialPosition(i);
    }
  }
  hoverListener(e, t = 16777215, o = 1) {
    const a = H(e).filter(y), i = [];
    for (const r of a)
      if (r.material || r instanceof c.Group) {
        const h = r instanceof c.Group ? r.children.filter((n) => n instanceof c.Mesh) : [r];
        h.forEach((n) => {
          n.__originalColor__ = n.material.color.clone(), n.__originalOpacity__ = n.material.opacity;
        });
        const p = () => {
          h.forEach((n) => {
            n.material.color.set(t), n.material.opacity = o;
          }), this.render();
        }, l = () => {
          h.forEach((n) => {
            n.material.color.copy(n.__originalColor__), n.material.opacity = n.__originalOpacity__;
          }), this.render();
        }, d = () => {
          this.isDragging || p();
        }, O = () => {
          this.isDragging || l();
        };
        for (const n of h)
          this.domEvents.addEventListener(n, "mouseover", d), this.domEvents.addEventListener(n, "mouseout", O), this.hooks.on("moveStart", p), this.hooks.on("moveEnd", l), this.hooks.on("rotateEnd", l), i.push(() => {
            this.domEvents.removeEventListener(n, "mouseover", d), this.domEvents.removeEventListener(n, "mouseout", O), this.hooks.off("moveStart", p), this.hooks.off("moveEnd", l), this.hooks.off("rotateEnd", l);
          });
      }
    return () => i.forEach((r) => r == null ? void 0 : r());
  }
  getIntersectObject(e) {
    const t = this.camera.position, o = this.helperObject3D;
    if (!o)
      return;
    const a = this.helperObject3D.raycasterIntersectObject(e)[0];
    if (!a)
      return;
    const i = a;
    if (i.object = o, this.model.intersectRaycaster) {
      const r = this.model.intersectRaycaster(e)[0];
      if (r && r.point.distanceTo(t) < i.point.distanceTo(t))
        return;
    }
    return i.object;
  }
  calculateOffset(e, t) {
    const o = new c.Vector3(0, 0, 0);
    if (!e)
      return o;
    const a = () => t || this.getBox();
    if (typeof e.x == "number")
      o.setX(e.x);
    else if (typeof e.x == "object") {
      const i = a();
      o.setX((i.max.x - i.min.x) * e.x.percents);
    }
    if (typeof e.y == "number")
      o.setY(e.y);
    else if (typeof e.y == "object") {
      const i = a();
      o.setY((i.max.y - i.min.y) * e.y.percents);
    }
    if (typeof e.z == "number")
      o.setZ(e.z);
    else if (typeof e.z == "object") {
      const i = a();
      o.setZ((i.max.z - i.min.z) * e.z.percents);
    }
    return o;
  }
}
export {
  E as BaseController
};
