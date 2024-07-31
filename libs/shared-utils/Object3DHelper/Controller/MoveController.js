var f = Object.defineProperty;
var v = (c, a, e) => a in c ? f(c, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[a] = e;
var u = (c, a, e) => (v(c, typeof a != "symbol" ? a + "" : a, e), e);
import { BaseController as p } from "../Base/BaseController.js";
import * as m from "three";
import { getMouseRaycaster as g } from "../utils/getMouseRaycaster.js";
import { rayOnLine as y } from "../../../Sculpt/utils/three/rayOnLine.js";
class w extends p {
  constructor(...e) {
    super(...e);
    u(this, "name", "MoveController");
    u(this, "startInfo");
    u(this, "_moveByMouse", {
      enabled: !1
    });
    u(this, "mouseInfo");
    u(this, "mousedownEventListenerDisposer");
    const t = this.helperObject3D;
    this.hoverListener([t.xArrow, t.yArrow, t.zArrow]);
    const o = this.dragStart.bind(this), h = this.dragging.bind(this), i = this.dragEnd.bind(this), n = this.show.bind(this), s = this.hide.bind(this);
    this.domEvents.addEventListener(this.helperObject3D, "mousedown", o), document.addEventListener("mousemove", h), document.addEventListener("mouseup", i), this.hooks.on("rotateStart", s), this.hooks.on("rotateEnd", n), this.hooks.on("scaleStart", s), this.hooks.on("scaleEnd", n), this.hooks.on("moveByMouseEnable", s), this.hooks.on("moveByMouseDisable", n), this.disposers.push(() => {
      this.domEvents.removeEventListener(this.helperObject3D, "mousedown", o), document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", i), this.hooks.off("rotateStart", s), this.hooks.off("rotateEnd", n), this.hooks.off("scaleStart", s), this.hooks.off("scaleEnd", n), this.hooks.off("moveByMouseEnable", s), this.hooks.off("moveByMouseDisable", n);
    }), this.moveByMouseEnable && this.moveByMouse();
  }
  get moveByMouseEnable() {
    return this._moveByMouse.enabled;
  }
  dispose() {
    var e;
    super.dispose(), (e = this.disposers) == null || e.forEach((t) => t == null ? void 0 : t());
  }
  /**
   * @description: 跟随鼠标移动
   * @param {boolean} params.useFaceNormal 是否使用面的法线，默认为false
   * @param {boolean} params.useFaceNormal.enable 是否使用面的法线，默认为true
   * @param {Vector3} params.useFaceNormal.alignmentVector 期望对齐的方向，默认为Y轴对齐Face的法向向量，即 `{ x: 0, y: 1, z: 0 }`
   * @param {Function} params.useFaceNormal.fixedFaceNormal 修正后的face normal
   */
  moveByMouse(e) {
    this._moveByMouse = { enabled: !0, useFaceNormal: e == null ? void 0 : e.useFaceNormal }, this.preventTapDefaultEvent = !0;
    const t = this.handleMouseDown.bind(this), o = this.handleMouseUp.bind(this);
    this.hooks.emit("moveByMouseEnable"), setTimeout(() => {
      this.container.addEventListener("mousedown", t), this.container.addEventListener("mouseup", o);
    }), this.mousedownEventListenerDisposer = () => {
      this.container.removeEventListener("mousedown", t), this.container.removeEventListener("mouseup", o);
    };
  }
  /**
   * @description: 禁用跟随鼠标移动
   */
  disableMoveByMouse() {
    var e;
    this._moveByMouse = { enabled: !1 }, this.preventTapDefaultEvent = !1, this.hooks.emit("moveByMouseDisable"), (e = this.mousedownEventListenerDisposer) == null || e.call(this);
  }
  onIntersectionOnModelUpdate(e) {
    var i, n, s;
    if (!this.moveByMouseEnable)
      return;
    const { point: t, face: o } = e;
    if (!this.hooks.emit("wantToMove", t)) {
      if (this.originObject3D.position.copy(t), (this._moveByMouse.useFaceNormal === !0 || typeof this._moveByMouse.useFaceNormal == "object" && this._moveByMouse.useFaceNormal.enable !== !1) && o != null && o.normal) {
        const r = (() => typeof this._moveByMouse.useFaceNormal == "object" && this._moveByMouse.useFaceNormal.alignmentVector ? this._moveByMouse.useFaceNormal.alignmentVector : { x: 0, y: 1, z: 0 })(), l = new m.Vector3((i = r.x) != null ? i : 0, (n = r.y) != null ? n : 0, (s = r.z) != null ? s : 0), d = (() => typeof this._moveByMouse.useFaceNormal == "object" && this._moveByMouse.useFaceNormal.fixedFaceNormal ? this._moveByMouse.useFaceNormal.fixedFaceNormal(o.normal) : o.normal)();
        this.originObject3D.quaternion.setFromUnitVectors(l, d), this.internalHooks.emit("setObjectRotate", this.originObject3D.quaternion.clone());
      }
      this.internalHooks.emit("setObjectPosition", t), this.hooks.emit("move", t);
    }
  }
  handleMouseDown(e) {
    const { x: t, y: o } = e;
    this.mouseInfo = { x: t, y: o, mouseDownTimestamp: Date.now() };
  }
  handleMouseUp(e) {
    if (!this.mouseInfo)
      return;
    const { x: t, y: o } = e;
    this.mouseInfo.x === t && this.mouseInfo.y === o && Date.now() - this.mouseInfo.mouseDownTimestamp < 500 && (this.disableMoveByMouse(), this.mouseInfo = void 0);
  }
  /**
   * @description: 拖动开始，找出拖的Direction
   */
  dragStart(e) {
    if (this.moveByMouseEnable || this.isDragging)
      return;
    const t = e == null ? void 0 : e.intersect;
    if (!t)
      return this.dragEnd();
    const o = (t == null ? void 0 : t.object).direction;
    if (!o)
      return this.dragEnd();
    const h = new m.Vector3(1, 0, 0).applyQuaternion(this.helperObject3D.quaternion), i = new m.Vector3(0, 1, 0).applyQuaternion(this.helperObject3D.quaternion), n = new m.Vector3(0, 0, 1).applyQuaternion(this.helperObject3D.quaternion), s = (() => {
      switch (o) {
        case "x":
          return h;
        case "y":
          return i;
        case "z":
          return n;
      }
    })(), r = t.point.clone(), l = new m.Line3(
      r.clone().sub(s.normalize()),
      r.clone().add(s.normalize())
    );
    this.startInfo = { startVectorProject: r, line: l }, this.helperObject3D.showDraggingHelper([o]), this.hooks.emit("moveStart"), this.isDragging = !0;
  }
  dragging(e) {
    if (!this.isDragging || !this.startInfo)
      return;
    const t = g(this.camera, e, this.container);
    return t ? (this.move(t), !1) : this.dragEnd();
  }
  move(e) {
    if (!this.startInfo)
      return this.dragEnd();
    const { line: t, startVectorProject: o } = this.startInfo, h = this.originObject3D, i = y({ cameraPosition: this.camera.position, raycaster: e, line: t, clampToLine: !1 }), n = i.clone().sub(o), s = new m.Matrix4();
    s.setPosition(n);
    const r = h.position.clone().applyMatrix4(s);
    this.hooks.emit("wantToMove", r) || (h.applyMatrix4(s), o.copy(i), this.internalHooks.emit("applyObjectPosition", { matrix: s }), this.hooks.emit("move", r));
  }
  dragEnd() {
    this.isDragging && (this.startInfo = void 0, this.isDragging = !1, this.helperObject3D.show(), this.hooks.emit("moveEnd"));
  }
}
export {
  w as MoveController
};
