var C = Object.defineProperty;
var S = (v, m, e) => m in v ? C(v, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : v[m] = e;
var g = (v, m, e) => (S(v, typeof m != "symbol" ? m + "" : m, e), e);
import { BaseController as G } from "../Base/BaseController.js";
import { RENDER_ORDER as E } from "../Constants/RenderOrder.js";
import * as c from "three";
import { getMouseRaycaster as A } from "../utils/getMouseRaycaster.js";
import { SolidGuideLine as k } from "../utils/solidGuide.js";
import { rayOnLine as P } from "../../../Sculpt/utils/three/rayOnLine.js";
import { worldBoundingBox as I } from "../../three/boundingBox.js";
import { getNormal as H } from "../../three/getNormal.js";
var L, w;
class Y extends G {
  constructor(...e) {
    super(...e);
    g(this, "name", "ScaleController");
    /** 拖拽时用于显示方向参考的直线（使用 Line 实现无限长穿透整个平面的直线） */
    g(this, "dragGuideLine");
    /** 当前拖拽时显示的面片 */
    g(this, "currentFacePatch");
    g(this, "solidGuide", new k(this.camera, this.container, (w = (L = this.config) == null ? void 0 : L.solidGuide) != null ? w : {}));
    g(this, "startInfo");
    g(this, "dragStart", (e) => {
      if (this.isDragging)
        return;
      this.isDragging = !0;
      const { intersect: t } = e, r = this.camera.position, s = new Set(this.helperObject3D.scaleMeshes.map((u) => u.uuid));
      let i = t.object;
      for (; i.parent && !s.has(i.uuid); )
        i = i.parent;
      const n = i, o = n.scalePosition.basePosition.clone(), h = n.scalePosition.handlePosition.clone(), l = h.clone().sub(o).clone(), a = new c.Line3(o, o.clone().add(l.normalize().multiplyScalar(5)));
      a.applyMatrix4(this.helperObject3D.matrixWorld);
      const d = new c.Raycaster(r, t.point.clone().sub(r)), p = P({ raycaster: d, line: a });
      this.startInfo = { line: a, scaleStartPoint: p, draggingObject: n }, this.helperObject3D.scaleMeshes.forEach((u) => {
        u.uuid !== n.uuid && (u.visible = !1);
      }), "hideLineConnections" in this.helperObject3D && typeof this.helperObject3D.hideLineConnections == "function" && this.helperObject3D.hideLineConnections();
      try {
        this.originObject3D.updateMatrixWorld(!0), this.helperObject3D.updateMatrixWorld(!0);
        const u = this.getObjectWorldCenter(), M = h.clone().applyMatrix4(this.helperObject3D.matrixWorld).clone().sub(u).normalize(), b = u, y = this.solidGuide.createSolidLine(b, M, { color: 16777215, renderOrder: E.DRAG_GUIDE_LINE });
        this.isRectangleWithEdgeMesh() || this.scene.add(y), this.dragGuideLine = y, this.addFaceMesh();
      } catch (u) {
      }
      n.visible = !0, this.hooks.emit("scaleStart");
    });
    g(this, "dragging", (e) => {
      const t = "touches" in e ? e.touches[0].clientX : e.x, r = "touches" in e ? e.touches[0].clientY : e.y, s = A(this.camera, { x: t, y: r }, this.container), i = this.isMoveControllerDragging();
      if (!this.isDragging && !i && s) {
        this.addHoverFaceMesh(s);
        return;
      }
      if (this.startInfo)
        return s ? (this.scale(s), this.updateDragGuideLineDirection(), this.removeFaceMesh(), this.addFaceMesh(), !1) : this.dragEnd();
    });
    g(this, "isRectangleWithEdgeMesh", () => this.originObject3D.name === "RectangleWithEdgeMesh" && ["topleft", "topright", "bottomleft", "bottomright"].includes(this.startInfo.draggingObject.scalePosition.id));
    g(this, "scale", (e) => {
      var o, h, l, a;
      if (!this.startInfo)
        return;
      const { line: t, scaleStartPoint: r, draggingObject: s } = this.startInfo, { scalePosition: i } = s;
      if (this.isRectangleWithEdgeMesh()) {
        const d = this.originObject3D, u = d.geometry.attributes.position;
        if (!u)
          return [];
        const D = [], M = u.count;
        for (let f = 0; f < M; f++) {
          const j = new c.Vector3().fromBufferAttribute(u, f);
          d.updateMatrixWorld(!0), j.applyMatrix4(d.matrixWorld), D.push(j);
        }
        const b = D.slice(0, 4);
        if (!b || b.length < 4)
          return;
        const y = H(b).normalize(), x = new c.Plane().setFromNormalAndCoplanarPoint(y, b[0]), F = Math.abs(e.ray.direction.dot(y)) < 0.1;
        let O;
        if (F)
          O = P({ raycaster: e, line: t, clampToLine: !1 }).applyMatrix4(new c.Matrix4().getInverse(this.helperObject3D.matrixWorld.clone()));
        else {
          const f = new c.Vector3();
          if (e.ray.intersectPlane(x, f), !f)
            return;
          const j = new c.Matrix4().getInverse(this.helperObject3D.matrixWorld);
          O = f.clone().applyMatrix4(j);
        }
        const W = r.clone().applyMatrix4(new c.Matrix4().getInverse(this.helperObject3D.matrixWorld));
        (h = (o = this.config) == null ? void 0 : o.scaleCallback) == null || h.call(o, {
          intersectPoint: O,
          scalePosition: i,
          offset: O.clone().sub(W)
        }), s.position.copy(O), this.hooks.emit("scale", new c.Vector3(1, 1, 1));
        return;
      }
      const n = P({ raycaster: e, line: t, clampToLine: !1 });
      n.applyMatrix4(new c.Matrix4().getInverse(this.helperObject3D.matrixWorld.clone())), (a = (l = this.config) == null ? void 0 : l.scaleCallback) == null || a.call(l, {
        intersectPoint: n,
        scalePosition: i,
        offset: n.clone().sub(r)
      }), s.position.copy(n.clone()), this.hooks.emit("scale", new c.Vector3(1, 1, 1));
    });
    g(this, "dragEnd", () => {
      if (this.isDragging) {
        if (this.startInfo = void 0, this.isDragging = !1, this.helperObject3D.scaleMeshes.forEach((e) => {
          e.visible = !0;
        }), "showLineConnections" in this.helperObject3D && typeof this.helperObject3D.showLineConnections == "function" && this.helperObject3D.showLineConnections(), this.dragGuideLine) {
          this.scene.remove(this.dragGuideLine), this.dragGuideLine.geometry.dispose();
          const e = this.dragGuideLine.material;
          Array.isArray(e) ? e.forEach((t) => t.dispose()) : e.dispose(), this.dragGuideLine = void 0;
        }
        this.removeFaceMesh(), this.internalHooks.emit("initialHelperPosition"), this.hooks.emit("scaleEnd");
      }
    });
    const t = this.show.bind(this), r = this.hide.bind(this), s = () => {
      "update" in this.helperObject3D && typeof this.helperObject3D.update == "function" && this.helperObject3D.update(this.camera), this.isDragging && this.updateDragGuideLineScale(), this.render();
    };
    s(), this.domEvents.addEventListener(this.helperObject3D, "mousedown", this.dragStart), document.addEventListener("mousemove", this.dragging), document.addEventListener("mouseup", this.dragEnd), this.domEvents.addEventListener(this.helperObject3D, "touchstart", this.dragStart), document.addEventListener("touchmove", this.dragging), document.addEventListener("touchend", this.dragEnd), this.hooks.on("rotateStart", r), this.hooks.on("rotateEnd", t), this.hooks.on("moveStart", () => {
      r(), this.removeFaceMesh();
    }), this.hooks.on("moveEnd", t), this.hooks.on("moveByMouseEnable", r), this.hooks.on("moveByMouseDisable", t), this.hooks.on("updateOtherHelpers", (i) => {
      "update" in this.helperObject3D && typeof this.helperObject3D.update == "function" && this.helperObject3D.update(i.camera), this.isDragging && this.updateDragGuideLineScale(), this.render();
    }), this.cameraHooks.on("cameraUpdate", s), this.disposers.push(() => {
      if (this.domEvents.removeEventListener(this.helperObject3D, "mousedown", this.dragStart), document.removeEventListener("mousemove", this.dragging), document.removeEventListener("mouseup", this.dragEnd), this.domEvents.removeEventListener(this.helperObject3D, "touchstart", this.dragStart), document.removeEventListener("touchmove", this.dragging), document.removeEventListener("touchend", this.dragEnd), this.hooks.off("rotateStart", r), this.hooks.off("rotateEnd", t), this.hooks.off("moveStart", r), this.hooks.off("moveEnd", t), this.hooks.off("moveByMouseEnable", r), this.hooks.off("moveByMouseDisable", t), this.hooks.off("updateOtherHelpers"), this.cameraHooks.off("cameraUpdate", s), this.currentFacePatch) {
        this.scene.remove(this.currentFacePatch), this.currentFacePatch.geometry.dispose();
        const i = this.currentFacePatch.material;
        Array.isArray(i) ? i.forEach((n) => n.dispose()) : i.dispose(), this.currentFacePatch = void 0;
      }
    });
  }
  initialHelperPosition() {
    this.helperObject3D.initialPosition();
    const e = this;
    e.offHoverListener && e.offHoverListener(), e.offHoverListener = this.hoverListener(this.helperObject3D.scaleMeshes);
  }
  /**
   * 获取物体的真正几何中心（世界坐标）
   * 优先使用 worldCenter 属性（对于 PrismMesh 等），否则使用包围盒中心
   */
  getObjectWorldCenter() {
    if ("worldCenter" in this.originObject3D && typeof this.originObject3D.worldCenter == "object")
      return this.originObject3D.worldCenter.clone();
    const e = I(this.originObject3D);
    return e ? e.getCenter(new c.Vector3()) : this.originObject3D.getWorldPosition(new c.Vector3());
  }
  getMoveMeshes() {
    var r, s, i, n;
    const e = [], t = (n = (i = (s = (r = this.helperObject3D.parent) == null ? void 0 : r.children) == null ? void 0 : s.find((o) => o.name === "MoveHelper")) == null ? void 0 : i.children) != null ? n : [];
    for (const o of t)
      o.name === "ArrowGroup" ? e.push(...o.children) : o.name === "center-plane-handle" && e.push(o);
    return e;
  }
  addHoverFaceMesh(e) {
    var o, h;
    if (this.isMoveControllerDragging() || (this.removeFaceMesh(), !((o = this.originObject3D.parent) != null && o.getWorldFacesGeometry)))
      return;
    const t = (h = this.originObject3D.parent) == null ? void 0 : h.getWorldFacesGeometry(), r = this.helperObject3D.scaleMeshes, s = this.getMoveMeshes();
    if (e.intersectObjects(s, !1), e.intersectObjects(s, !1).length > 0)
      return;
    let i = null, n = null;
    for (const l of r) {
      if (!l.visible)
        continue;
      const a = e.intersectObject(l, !1);
      if (a && a.length > 0) {
        i = l, n = a[0].point.clone();
        break;
      }
    }
    if (i && n && Array.isArray(t) && t.length > 0) {
      let l = null, a = 1 / 0;
      for (const d of t) {
        if (!d.vertices || d.vertices.length < 3)
          continue;
        const p = new c.Vector3();
        for (const D of d.vertices)
          p.add(D);
        p.divideScalar(d.vertices.length);
        const u = n.distanceTo(p);
        u < a && (a = u, l = d);
      }
      l && this.addFacePatch(l);
    }
  }
  addFaceMesh() {
    var r, s, i;
    if (this.isMoveControllerDragging())
      return;
    const e = (r = this.startInfo) == null ? void 0 : r.draggingObject;
    if (!e || !((s = this.originObject3D.parent) != null && s.getWorldFacesGeometry))
      return;
    const t = (i = this.originObject3D.parent) == null ? void 0 : i.getWorldFacesGeometry();
    if (t && t.length > 0) {
      const n = e.getWorldPosition(new c.Vector3());
      let o = 1 / 0, h = t[0];
      for (const l of t) {
        const a = l.center;
        let d;
        if (a instanceof c.Vector3)
          d = a;
        else if (Array.isArray(a) && a.length === 3)
          d = new c.Vector3(a[0], a[1], a[2]);
        else
          continue;
        const p = d.distanceTo(n);
        p < o && (o = p, h = l);
      }
      this.addFacePatch(h);
    }
  }
  removeFaceMesh() {
    if (this.currentFacePatch) {
      this.scene.remove(this.currentFacePatch), this.currentFacePatch.geometry.dispose();
      const e = this.currentFacePatch.material;
      Array.isArray(e) ? e.forEach((t) => t.dispose()) : e.dispose(), this.currentFacePatch = void 0;
    }
  }
  setScale(e) {
    var o, h, l;
    let t = 1, r = 1, s = 1;
    typeof e == "number" ? (t = e, r = e, s = e) : typeof e == "object" && (t = (o = e.x) != null ? o : 1, r = (h = e.y) != null ? h : 1, s = (l = e.z) != null ? l : 1);
    const i = new c.Vector3(t, r, s);
    this.hooks.emit("wantToScale", i) || (this.originObject3D.scale.copy(i), this.internalHooks.emit("setObjectScale", i), this.hooks.emit("scale", i), this.render());
  }
  /**
   * 更新直线方向，保持直线始终经过物体中心和当前拉伸球位置
   */
  updateDragGuideLineDirection() {
    if (!this.dragGuideLine || !this.startInfo)
      return;
    const { draggingObject: e } = this.startInfo;
    this.originObject3D.updateMatrixWorld(!0), this.helperObject3D.updateMatrixWorld(!0);
    const t = this.getObjectWorldCenter(), s = e.position.clone().applyMatrix4(this.helperObject3D.matrixWorld).clone().sub(t).normalize(), i = t;
    this.solidGuide.updateSolidLine(this.dragGuideLine, i, s);
  }
  /**
   * 更新直线缩放，保持视觉上的恒定大小
   */
  updateDragGuideLineScale() {
    if (!this.dragGuideLine || !this.startInfo)
      return;
    const { scalePosition: e } = this.startInfo.draggingObject, t = e.handlePosition.clone().applyMatrix4(this.helperObject3D.matrixWorld), r = e.basePosition.clone().applyMatrix4(this.helperObject3D.matrixWorld), s = t, i = t.clone().sub(r).normalize();
    this.solidGuide.updateSolidLine(this.dragGuideLine, s, i);
  }
  /**
   * 检查 MoveController 是否正在拖拽中
   */
  isMoveControllerDragging() {
    var e, t, r;
    return (r = (t = (e = this.otherControllers) == null ? void 0 : e.moveController) == null ? void 0 : t.getIsDragging()) != null ? r : !1;
  }
  /**
   * 向场景添加一个表示 face 的面片，红色，位置与 face.center 一致，使用两个三角形拼成矩形
   */
  addFacePatch(e) {
    if (this.currentFacePatch) {
      this.scene.remove(this.currentFacePatch), this.currentFacePatch.geometry.dispose();
      const i = this.currentFacePatch.material;
      Array.isArray(i) ? i.forEach((n) => n.dispose()) : i.dispose(), this.currentFacePatch = void 0;
    }
    if (!e.vertices || e.vertices.length < 3) {
      console.warn("Face has no vertices, cannot create patch");
      return;
    }
    const t = new c.BufferGeometry();
    if (e.vertices.length === 4) {
      const i = new Float32Array([
        // 第一个三角形
        e.vertices[0].x,
        e.vertices[0].y,
        e.vertices[0].z,
        e.vertices[1].x,
        e.vertices[1].y,
        e.vertices[1].z,
        e.vertices[2].x,
        e.vertices[2].y,
        e.vertices[2].z,
        // 第二个三角形
        e.vertices[0].x,
        e.vertices[0].y,
        e.vertices[0].z,
        e.vertices[2].x,
        e.vertices[2].y,
        e.vertices[2].z,
        e.vertices[3].x,
        e.vertices[3].y,
        e.vertices[3].z
      ]);
      t.setAttribute("position", new c.BufferAttribute(i, 3)), t.setIndex([0, 1, 2, 3, 4, 5]);
    } else {
      const i = new Float32Array(e.vertices.length * 3), n = new Uint16Array(e.vertices.length);
      e.vertices.forEach((o, h) => {
        i[h * 3] = o.x, i[h * 3 + 1] = o.y, i[h * 3 + 2] = o.z, n[h] = h;
      }), t.setAttribute("position", new c.BufferAttribute(i, 3)), t.setIndex(new c.BufferAttribute(n, 1));
    }
    t.computeVertexNormals();
    const r = new c.MeshBasicMaterial({
      color: 16777215,
      side: c.DoubleSide,
      depthTest: !1,
      // 禁用深度测试，避免被其他对象遮挡
      depthWrite: !1,
      // 禁用深度写入
      transparent: !0,
      opacity: 0.45
    }), s = new c.Mesh(t, r);
    return s.renderOrder = E.DRAG_FACE_PATCH, this.scene.add(s), this.currentFacePatch = s, this.render(), s;
  }
}
export {
  Y as ScaleController
};
