var f = Object.defineProperty;
var v = (d, a, t) => a in d ? f(d, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : d[a] = t;
var c = (d, a, t) => (v(d, typeof a != "symbol" ? a + "" : a, t), t);
import { BaseController as p } from "../Base/BaseController.js";
import * as m from "three";
import { getMouseRaycaster as E } from "../utils/getMouseRaycaster.js";
import { rayOnLine as g } from "../../../Sculpt/utils/three/rayOnLine.js";
class S extends p {
  constructor(...t) {
    super(...t);
    c(this, "name", "ScaleController");
    c(this, "startInfo");
    c(this, "dragStart", (t) => {
      if (this.isDragging)
        return;
      this.isDragging = !0;
      const { intersect: e } = t, o = this.camera.position, s = e.object, i = s.scalePosition.basePosition.clone(), r = s.scalePosition.handlePosition.clone().clone().sub(i).clone(), n = new m.Line3(i, i.clone().add(r.normalize().multiplyScalar(5)));
      n.applyMatrix4(this.helperObject3D.matrixWorld);
      const h = new m.Raycaster(o, e.point.clone().sub(o)), u = g({ raycaster: h, line: n });
      this.startInfo = { line: n, scaleStartPoint: u, draggingObject: s }, this.hooks.emit("scaleStart");
    });
    c(this, "dragging", (t) => {
      if (!this.isDragging || !this.startInfo)
        return;
      const e = "touches" in t ? t.touches[0].clientX : t.x, o = "touches" in t ? t.touches[0].clientY : t.y, s = E(this.camera, { x: e, y: o }, this.container);
      return s ? (this.scale(s), !1) : this.dragEnd();
    });
    c(this, "scale", (t) => {
      var n, h;
      if (!this.startInfo)
        return;
      const { line: e, scaleStartPoint: o, draggingObject: s } = this.startInfo, { scalePosition: i } = s, { basePosition: l } = i, r = g({ raycaster: t, line: e });
      r.applyMatrix4(new m.Matrix4().getInverse(this.helperObject3D.matrixWorld.clone())), (h = (n = this.config) == null ? void 0 : n.scaleCallback) == null || h.call(n, {
        ratio: r.distanceTo(l) / o.distanceTo(l),
        intersectPoint: r,
        scalePosition: i
      }), s.position.copy(r.clone());
    });
    c(this, "dragEnd", () => {
      this.isDragging && (this.startInfo = void 0, this.isDragging = !1, this.internalHooks.emit("initialHelperPosition"), this.hooks.emit("scaleEnd"));
    });
    const e = this.show.bind(this), o = this.hide.bind(this);
    this.domEvents.addEventListener(this.helperObject3D, "mousedown", this.dragStart), document.addEventListener("mousemove", this.dragging), document.addEventListener("mouseup", this.dragEnd), this.domEvents.addEventListener(this.helperObject3D, "touchstart", this.dragStart), document.addEventListener("touchmove", this.dragging), document.addEventListener("touchend", this.dragEnd), this.hooks.on("rotateStart", o), this.hooks.on("rotateEnd", e), this.hooks.on("moveStart", o), this.hooks.on("moveEnd", e), this.hooks.on("moveByMouseEnable", o), this.hooks.on("moveByMouseDisable", e), this.disposers.push(() => {
      this.domEvents.removeEventListener(this.helperObject3D, "mousedown", this.dragStart), document.removeEventListener("mousemove", this.dragging), document.removeEventListener("mouseup", this.dragEnd), this.domEvents.removeEventListener(this.helperObject3D, "touchstart", this.dragStart), document.removeEventListener("touchmove", this.dragging), document.removeEventListener("touchend", this.dragEnd), this.hooks.off("rotateStart", o), this.hooks.off("rotateEnd", e), this.hooks.off("moveStart", o), this.hooks.off("moveEnd", e), this.hooks.off("moveByMouseEnable", o), this.hooks.off("moveByMouseDisable", e);
    });
  }
  initialHelperQuaternion() {
    this.helperObject3D.initQuaternion();
  }
  initialHelperPosition() {
    this.helperObject3D.initialPosition();
    const t = this;
    t.offHoverListener && t.offHoverListener(), t.offHoverListener = this.hoverListener(this.helperObject3D.scaleMeshes);
  }
  setScale(t) {
    var r, n, h;
    let e = 1, o = 1, s = 1;
    typeof t == "number" ? (e = t, o = t, s = t) : typeof t == "object" && (e = (r = t.x) != null ? r : 1, o = (n = t.y) != null ? n : 1, s = (h = t.z) != null ? h : 1);
    const i = new m.Vector3(e, o, s);
    this.hooks.emit("wantToScale", i) || (this.originObject3D.scale.copy(i), this.internalHooks.emit("setObjectScale", i), this.hooks.emit("scale", i), this.render());
  }
}
export {
  S as ScaleController
};
