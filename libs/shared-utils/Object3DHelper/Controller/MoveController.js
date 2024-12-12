var v = Object.defineProperty;
var f = (c, h, e) => h in c ? v(c, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[h] = e;
var a = (c, h, e) => (f(c, typeof h != "symbol" ? h + "" : h, e), e);
import { BaseController as g } from "../Base/BaseController.js";
import * as m from "three";
import { getMouseRaycaster as p } from "../utils/getMouseRaycaster.js";
import { rayOnLine as y } from "../../../Sculpt/utils/three/rayOnLine.js";
class w extends g {
  constructor(...e) {
    super(...e);
    a(this, "name", "MoveController");
    a(this, "startInfo");
    a(this, "_moveByMouse", {
      enabled: !1
    });
    a(this, "mouseInfo");
    a(this, "mousedownEventListenerDisposer");
    /**
     * @description: 拖动开始，找出拖的Direction
     */
    a(this, "dragStart", (e) => {
      if (this.moveByMouseEnable || this.isDragging)
        return;
      const t = e == null ? void 0 : e.intersect;
      if (!t)
        return this.dragEnd();
      const o = (t == null ? void 0 : t.object).direction;
      if (!o)
        return this.dragEnd();
      const s = new m.Vector3(1, 0, 0).applyQuaternion(this.helperObject3D.quaternion), n = new m.Vector3(0, 1, 0).applyQuaternion(this.helperObject3D.quaternion), u = new m.Vector3(0, 0, 1).applyQuaternion(this.helperObject3D.quaternion), i = (() => {
        switch (o) {
          case "x":
            return s;
          case "y":
            return n;
          case "z":
            return u;
        }
      })(), r = t.point.clone(), d = new m.Line3(
        r.clone().sub(i.normalize()),
        r.clone().add(i.normalize())
      );
      this.startInfo = { startVectorProject: r, line: d }, this.helperObject3D.showDraggingHelper([o]), this.hooks.emit("moveStart"), this.isDragging = !0;
    });
    a(this, "dragging", (e) => {
      if (!this.isDragging || !this.startInfo)
        return;
      const t = "touches" in e ? e.touches[0].clientX : e.x, o = "touches" in e ? e.touches[0].clientY : e.y, s = p(this.camera, { x: t, y: o }, this.container);
      return s ? (this.move(s), !1) : this.dragEnd();
    });
    a(this, "dragEnd", () => {
      this.isDragging && (this.startInfo = void 0, this.isDragging = !1, this.helperObject3D.show(), this.hooks.emit("moveEnd"));
    });
    const t = this.helperObject3D;
    this.hoverListener([t.xArrow, t.yArrow, t.zArrow]);
    const o = this.show.bind(this), s = this.hide.bind(this), n = () => {
      this.helperObject3D.update(this.camera), this.render();
    };
    n(), this.domEvents.addEventListener(this.helperObject3D, "mousedown", this.dragStart), document.addEventListener("mousemove", this.dragging), document.addEventListener("mouseup", this.dragEnd), this.domEvents.addEventListener(this.helperObject3D, "touchstart", this.dragStart), document.addEventListener("touchmove", this.dragging), document.addEventListener("touchend", this.dragEnd), this.hooks.on("rotateStart", s), this.hooks.on("rotateEnd", o), this.hooks.on("scaleStart", s), this.hooks.on("scaleEnd", o), this.hooks.on("moveByMouseEnable", s), this.hooks.on("moveByMouseDisable", o), this.cameraHooks.on("cameraUpdate", n), this.disposers.push(() => {
      this.domEvents.removeEventListener(this.helperObject3D, "mousedown", this.dragStart), document.removeEventListener("mousemove", this.dragging), document.removeEventListener("mouseup", this.dragEnd), this.domEvents.removeEventListener(this.helperObject3D, "touchstart", this.dragStart), document.removeEventListener("touchmove", this.dragging), document.removeEventListener("touchend", this.dragEnd), this.hooks.off("rotateStart", s), this.hooks.off("rotateEnd", o), this.hooks.off("scaleStart", s), this.hooks.off("scaleEnd", o), this.hooks.off("moveByMouseEnable", s), this.hooks.off("moveByMouseDisable", o), this.cameraHooks.off("cameraUpdate", n);
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
    var n, u, i;
    if (!this.moveByMouseEnable)
      return;
    const { point: t, face: o } = e;
    if (!this.hooks.emit("wantToMove", t)) {
      if (this.originObject3D.position.copy(t), (this._moveByMouse.useFaceNormal === !0 || typeof this._moveByMouse.useFaceNormal == "object" && this._moveByMouse.useFaceNormal.enable !== !1) && o != null && o.normal) {
        const r = (() => typeof this._moveByMouse.useFaceNormal == "object" && this._moveByMouse.useFaceNormal.alignmentVector ? this._moveByMouse.useFaceNormal.alignmentVector : { x: 0, y: 1, z: 0 })(), d = new m.Vector3((n = r.x) != null ? n : 0, (u = r.y) != null ? u : 0, (i = r.z) != null ? i : 0), l = (() => typeof this._moveByMouse.useFaceNormal == "object" && this._moveByMouse.useFaceNormal.fixedFaceNormal ? this._moveByMouse.useFaceNormal.fixedFaceNormal(o.normal) : o.normal)();
        this.originObject3D.quaternion.setFromUnitVectors(d, l), this.internalHooks.emit("setObjectRotate", this.originObject3D.quaternion.clone());
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
  move(e) {
    if (!this.startInfo)
      return this.dragEnd();
    const { line: t, startVectorProject: o } = this.startInfo, s = this.originObject3D, n = y({ raycaster: e, line: t, clampToLine: !1 }), u = n.clone().sub(o), i = new m.Matrix4();
    i.setPosition(u);
    const r = s.position.clone().applyMatrix4(i);
    this.hooks.emit("wantToMove", r) || (s.applyMatrix4(i), o.copy(n), this.internalHooks.emit("applyObjectPosition", { matrix: i }), this.hooks.emit("move", r));
  }
}
export {
  w as MoveController
};
