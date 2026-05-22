var w = Object.defineProperty;
var j = (g, l, e) => l in g ? w(g, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : g[l] = e;
var h = (g, l, e) => (j(g, typeof l != "symbol" ? l + "" : l, e), e);
import { BaseController as B } from "../Base/BaseController.js";
import { RENDER_ORDER as k } from "../Constants/RenderOrder.js";
import * as a from "three";
import { SolidGuideLine as O } from "../utils/solidGuide.js";
import { getMouseRaycaster as I } from "../utils/getMouseRaycaster.js";
import { rayOnLine as N } from "../../../Sculpt/utils/three/rayOnLine.js";
import { CenterHandle as P } from "../Helper/Objects/CenterHandle.js";
var M, L;
class z extends B {
  constructor(...e) {
    super(...e);
    h(this, "name", "MoveController");
    h(this, "startInfo");
    /** 拖拽时用于显示方向参考的直线（与 ScaleController 一致：Line + LineBasicMaterial） */
    h(this, "dragGuideLine");
    h(this, "solidGuide", new O(this.camera, this.container, (L = (M = this.config) == null ? void 0 : M.solidGuide) != null ? L : {}));
    h(this, "_moveByMouse", {
      enabled: !1
    });
    h(this, "mouseInfo");
    h(this, "mousedownEventListenerDisposer");
    /**
     * @description: 拖动开始，找出拖的Direction
     */
    h(this, "dragStart", (e) => {
      if (this.moveByMouseEnable || this.isDragging)
        return;
      const t = e == null ? void 0 : e.intersect;
      if (!t)
        return this.dragEnd();
      const o = (t == null ? void 0 : t.object).direction;
      if (!o)
        return this.dragEnd();
      const s = new a.Vector3(1, 0, 0).applyQuaternion(this.helperObject3D.quaternion), d = new a.Vector3(0, 1, 0).applyQuaternion(this.helperObject3D.quaternion), n = new a.Vector3(0, 0, 1).applyQuaternion(this.helperObject3D.quaternion), i = (() => {
        switch (o) {
          case "x":
            return s;
          case "y":
            return d;
          case "z":
            return n;
          case "plane":
            return;
        }
      })(), r = t.point.clone();
      if (o === "plane") {
        const c = this.camera.position.clone(), u = r.clone(), f = u.clone().sub(c).normalize(), v = new a.Plane().setFromNormalAndCoplanarPoint(f, u), p = u.clone();
        this.startInfo = {
          draggingDirection: o,
          startVectorProject: p,
          line: new a.Line3(p.clone(), p.clone()),
          // 保存固定的平面，拖拽过程中不变
          plane: v
        };
      } else {
        const c = new a.Line3(
          r.clone().sub(i.normalize()),
          r.clone().add(i.normalize())
        );
        this.startInfo = { draggingDirection: o, startVectorProject: r, line: c };
        try {
          const u = i.clone().normalize(), f = this.helperObject3D.getWorldPosition(new a.Vector3()), v = this.solidGuide.createSolidLine(f, u, { color: 16777215, renderOrder: k.DRAG_GUIDE_LINE });
          this.scene.add(v), this.dragGuideLine = v;
        } catch (u) {
        }
      }
      const m = o === "plane" ? [] : [o];
      this.helperObject3D.showDraggingHelper(m), this.hooks.emit("moveStart", o), this.isDragging = !0;
    });
    h(this, "dragging", (e) => {
      if (!this.isDragging || !this.startInfo)
        return;
      const t = "touches" in e ? e.touches[0].clientX : e.x, o = "touches" in e ? e.touches[0].clientY : e.y, s = I(this.camera, { x: t, y: o }, this.container);
      return s ? (this.move(s), !1) : this.dragEnd();
    });
    h(this, "dragEnd", () => {
      if (this.isDragging) {
        if (this.startInfo = void 0, this.isDragging = !1, this.dragGuideLine) {
          this.scene.remove(this.dragGuideLine), this.dragGuideLine.geometry.dispose();
          const e = this.dragGuideLine.material;
          Array.isArray(e) ? e.forEach((t) => t.dispose()) : e.dispose(), this.dragGuideLine = void 0;
        }
        this.helperObject3D.show(), this.hooks.emit("moveEnd");
      }
    });
    const t = this.helperObject3D;
    if (this.hoverListener([t.xArrow, t.yArrow, t.zArrow]), t.centerHandle && t.centerHandle instanceof P) {
      const n = t.centerHandle, i = n.cube, r = 16777215, m = () => {
        this.isDragging || (Array.isArray(i.material) && i.material.forEach((u) => {
          u.color.set(r);
        }), this.render());
      }, c = () => {
        this.isDragging || (n.update(this.camera), this.render());
      };
      this.domEvents.addEventListener(i, "mouseover", m), this.domEvents.addEventListener(i, "mouseout", c);
    }
    const o = this.show.bind(this), s = this.hide.bind(this), d = () => {
      this.helperObject3D.update(this.camera), this.isDragging && this.updateDragGuideLineScale(), this.render();
    };
    d(), this.domEvents.addEventListener(this.helperObject3D, "mousedown", this.dragStart), document.addEventListener("mousemove", this.dragging), document.addEventListener("mouseup", this.dragEnd), this.domEvents.addEventListener(this.helperObject3D, "touchstart", this.dragStart), document.addEventListener("touchmove", this.dragging), document.addEventListener("touchend", this.dragEnd), this.hooks.on("rotateStart", s), this.hooks.on("rotateEnd", o), this.hooks.on("scaleStart", s), this.hooks.on("scaleEnd", o), this.hooks.on("moveByMouseEnable", s), this.hooks.on("moveByMouseDisable", o), this.hooks.on("updateOtherHelpers", (n) => {
      this.helperObject3D.update(n.camera), this.render();
    }), this.cameraHooks.on("cameraUpdate", d), this.disposers.push(() => {
      this.domEvents.removeEventListener(this.helperObject3D, "mousedown", this.dragStart), document.removeEventListener("mousemove", this.dragging), document.removeEventListener("mouseup", this.dragEnd), this.domEvents.removeEventListener(this.helperObject3D, "touchstart", this.dragStart), document.removeEventListener("touchmove", this.dragging), document.removeEventListener("touchend", this.dragEnd), this.hooks.off("rotateStart", s), this.hooks.off("rotateEnd", o), this.hooks.off("scaleStart", s), this.hooks.off("scaleEnd", o), this.hooks.off("moveByMouseEnable", s), this.hooks.off("moveByMouseDisable", o), this.hooks.off("updateOtherHelpers"), this.cameraHooks.off("cameraUpdate", d);
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
    var d, n, i;
    if (!this.moveByMouseEnable)
      return;
    const { point: t, face: o } = e;
    if (!this.hooks.emit("wantToMove", t)) {
      if (this.originObject3D.position.copy(t), (this._moveByMouse.useFaceNormal === !0 || typeof this._moveByMouse.useFaceNormal == "object" && this._moveByMouse.useFaceNormal.enable !== !1) && o != null && o.normal) {
        const r = (() => typeof this._moveByMouse.useFaceNormal == "object" && this._moveByMouse.useFaceNormal.alignmentVector ? this._moveByMouse.useFaceNormal.alignmentVector : { x: 0, y: 1, z: 0 })(), m = new a.Vector3((d = r.x) != null ? d : 0, (n = r.y) != null ? n : 0, (i = r.z) != null ? i : 0), c = (() => typeof this._moveByMouse.useFaceNormal == "object" && this._moveByMouse.useFaceNormal.fixedFaceNormal ? this._moveByMouse.useFaceNormal.fixedFaceNormal(o.normal) : o.normal)();
        this.originObject3D.quaternion.setFromUnitVectors(m, c), this.internalHooks.emit("setObjectRotate", this.originObject3D.quaternion.clone());
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
   * 更新直线缩放，保持视觉上的恒定大小（与 ScaleController 保持一致）
   */
  updateDragGuideLineScale() {
    if (!this.dragGuideLine || !this.startInfo)
      return;
    const { line: e } = this.startInfo, t = e.end.clone().sub(e.start).normalize();
    if (t.lengthSq() < 1e-6)
      return;
    const o = this.helperObject3D.getWorldPosition(new a.Vector3());
    this.solidGuide.updateSolidLine(this.dragGuideLine, o, t);
  }
  move(e) {
    var p;
    if (!this.startInfo)
      return this.dragEnd();
    const { line: t, startVectorProject: o } = this.startInfo, s = this.originObject3D, d = this.startInfo.draggingDirection === "plane";
    let n;
    if (d) {
      const E = this.startInfo.plane;
      if (!E)
        return;
      const y = new a.Vector3(), b = E.normal.dot(e.ray.direction);
      if (Math.abs(b) < 1e-6)
        return;
      const D = -(E.normal.dot(e.ray.origin) + E.constant) / b;
      if (D < 0)
        return;
      y.copy(e.ray.origin.clone().add(e.ray.direction.clone().multiplyScalar(D))), n = y;
    } else
      n = N({ raycaster: e, line: t, clampToLine: !1 });
    const i = s.position.clone(), r = n.clone().sub(o), m = new a.Matrix4();
    m.setPosition(r);
    const c = s.position.clone().applyMatrix4(m);
    if (this.hooks.emit("wantToMove", c))
      return;
    const f = (p = this.hooks.emitWithResult("moveBefore", c)) != null ? p : c, v = new a.Matrix4();
    v.setPosition(f.clone().sub(i)), s.position.copy(f), o.copy(n), this.internalHooks.emit("applyObjectPosition", { matrix: v }), this.hooks.emit("move", f);
  }
}
export {
  z as MoveController
};
