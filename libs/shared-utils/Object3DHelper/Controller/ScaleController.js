var v = Object.defineProperty;
var p = (c, a, t) => a in c ? v(c, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[a] = t;
var h = (c, a, t) => (p(c, typeof a != "symbol" ? a + "" : a, t), t);
import { BaseController as E } from "../Base/BaseController.js";
import * as d from "three";
import { getMouseRaycaster as b } from "../utils/getMouseRaycaster.js";
import { rayOnLine as g } from "../../../Sculpt/utils/three/rayOnLine.js";
class S extends E {
  constructor(...t) {
    super(...t);
    h(this, "name", "ScaleController");
    h(this, "startInfo");
    h(this, "dragStart", (t) => {
      if (this.isDragging)
        return;
      this.isDragging = !0;
      const { intersect: e } = t, s = this.camera.position;
      let o = e.object;
      o.scalePosition || (o = e.object.parent);
      const i = o.scalePosition.basePosition.clone(), n = o.scalePosition.handlePosition.clone().clone().sub(i).clone(), r = new d.Line3(i, i.clone().add(n.normalize().multiplyScalar(5)));
      r.applyMatrix4(this.helperObject3D.matrixWorld);
      const m = new d.Raycaster(s, e.point.clone().sub(s)), f = g({ raycaster: m, line: r });
      this.startInfo = { line: r, scaleStartPoint: f, draggingObject: o }, this.helperObject3D.scaleMeshes.forEach((u) => {
        u.uuid !== o.uuid && (u.visible = !1);
      }), o.visible = !0, this.hooks.emit("scaleStart");
    });
    h(this, "dragging", (t) => {
      if (!this.isDragging || !this.startInfo)
        return;
      const e = "touches" in t ? t.touches[0].clientX : t.x, s = "touches" in t ? t.touches[0].clientY : t.y, o = b(this.camera, { x: e, y: s }, this.container);
      return o ? (this.scale(o), !1) : this.dragEnd();
    });
    h(this, "scale", (t) => {
      var n, r;
      if (!this.startInfo)
        return;
      const { line: e, scaleStartPoint: s, draggingObject: o } = this.startInfo, { scalePosition: i } = o, l = g({ raycaster: t, line: e, clampToLine: !1 });
      l.applyMatrix4(new d.Matrix4().getInverse(this.helperObject3D.matrixWorld.clone())), (r = (n = this.config) == null ? void 0 : n.scaleCallback) == null || r.call(n, {
        intersectPoint: l,
        scalePosition: i,
        offset: l.clone().sub(s)
      }), o.position.copy(l.clone()), this.hooks.emit("scale", new d.Vector3(1, 1, 1));
    });
    h(this, "dragEnd", () => {
      this.isDragging && (this.startInfo = void 0, this.isDragging = !1, this.helperObject3D.scaleMeshes.forEach((t) => {
        t.visible = !0;
      }), this.internalHooks.emit("initialHelperPosition"), this.hooks.emit("scaleEnd"));
    });
    const e = this.show.bind(this), s = this.hide.bind(this);
    this.domEvents.addEventListener(this.helperObject3D, "mousedown", this.dragStart), document.addEventListener("mousemove", this.dragging), document.addEventListener("mouseup", this.dragEnd), this.domEvents.addEventListener(this.helperObject3D, "touchstart", this.dragStart), document.addEventListener("touchmove", this.dragging), document.addEventListener("touchend", this.dragEnd), this.hooks.on("rotateStart", s), this.hooks.on("rotateEnd", e), this.hooks.on("moveStart", s), this.hooks.on("moveEnd", e), this.hooks.on("moveByMouseEnable", s), this.hooks.on("moveByMouseDisable", e), this.disposers.push(() => {
      this.domEvents.removeEventListener(this.helperObject3D, "mousedown", this.dragStart), document.removeEventListener("mousemove", this.dragging), document.removeEventListener("mouseup", this.dragEnd), this.domEvents.removeEventListener(this.helperObject3D, "touchstart", this.dragStart), document.removeEventListener("touchmove", this.dragging), document.removeEventListener("touchend", this.dragEnd), this.hooks.off("rotateStart", s), this.hooks.off("rotateEnd", e), this.hooks.off("moveStart", s), this.hooks.off("moveEnd", e), this.hooks.off("moveByMouseEnable", s), this.hooks.off("moveByMouseDisable", e);
    });
  }
  initialHelperPosition() {
    this.helperObject3D.initialPosition();
    const t = this;
    t.offHoverListener && t.offHoverListener(), t.offHoverListener = this.hoverListener(this.helperObject3D.scaleMeshes);
  }
  setScale(t) {
    var n, r, m;
    let e = 1, s = 1, o = 1;
    typeof t == "number" ? (e = t, s = t, o = t) : typeof t == "object" && (e = (n = t.x) != null ? n : 1, s = (r = t.y) != null ? r : 1, o = (m = t.z) != null ? m : 1);
    const i = new d.Vector3(e, s, o);
    this.hooks.emit("wantToScale", i) || (this.originObject3D.scale.copy(i), this.internalHooks.emit("setObjectScale", i), this.hooks.emit("scale", i), this.render());
  }
}
export {
  S as ScaleController
};
