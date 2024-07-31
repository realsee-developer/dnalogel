var p = Object.defineProperty;
var u = (l, a, t) => a in l ? p(l, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[a] = t;
var c = (l, a, t) => (u(l, typeof a != "symbol" ? a + "" : a, t), t);
import { BaseController as b } from "../Base/BaseController.js";
import * as m from "three";
import { getMouseRaycaster as P } from "../utils/getMouseRaycaster.js";
import { rayOnLine as f } from "../../../Sculpt/utils/three/rayOnLine.js";
class H extends b {
  constructor(...t) {
    super(...t);
    c(this, "name", "ScaleController");
    c(this, "startInfo");
    c(this, "dragStart", (t) => {
      if (this.isDragging)
        return;
      this.isDragging = !0;
      const { intersect: e } = t, s = this.camera.position, n = e.object, i = n.scalePosition.basePosition.clone(), h = n.scalePosition.handlePosition.clone().clone().sub(i).clone(), o = new m.Line3(i, i.clone().add(h.normalize().multiplyScalar(5)));
      o.applyMatrix4(this.helperObject3D.matrixWorld);
      const r = new m.Raycaster(s, e.point.clone().sub(s)), g = f({ cameraPosition: s, raycaster: r, line: o });
      this.startInfo = { line: o, scaleStartPoint: g, draggingObject: n }, this.hooks.emit("scaleStart");
    });
    c(this, "dragging", (t) => {
      if (!this.isDragging || !this.startInfo)
        return;
      const e = P(this.camera, t, this.container);
      return e ? (this.scale(e), !1) : this.dragEnd();
    });
    c(this, "scale", (t) => {
      var r, g;
      if (!this.startInfo)
        return;
      const { line: e, scaleStartPoint: s, draggingObject: n } = this.startInfo, { scalePosition: i } = n, { basePosition: d } = i, h = this.camera.position, o = f({ cameraPosition: h, raycaster: t, line: e });
      o.applyMatrix4(new m.Matrix4().getInverse(this.helperObject3D.matrixWorld.clone())), (g = (r = this.config) == null ? void 0 : r.scaleCallback) == null || g.call(r, {
        ratio: o.distanceTo(d) / s.distanceTo(d),
        intersectPoint: o,
        scalePosition: i
      }), n.position.copy(o.clone());
    });
    c(this, "dragEnd", () => {
      this.isDragging && (this.startInfo = void 0, this.isDragging = !1, this.internalHooks.emit("initialHelperPosition"), this.hooks.emit("scaleEnd"));
    });
    this.domEvents.addEventListener(this.helperObject3D, "mousedown", this.dragStart), document.addEventListener("mousemove", this.dragging), document.addEventListener("mouseup", this.dragEnd);
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
    var h, o, r;
    let e = 1, s = 1, n = 1;
    typeof t == "number" ? (e = t, s = t, n = t) : typeof t == "object" && (e = (h = t.x) != null ? h : 1, s = (o = t.y) != null ? o : 1, n = (r = t.z) != null ? r : 1);
    const i = new m.Vector3(e, s, n);
    this.hooks.emit("wantToScale", i) || (this.originObject3D.scale.copy(i), this.internalHooks.emit("setObjectScale", i), this.hooks.emit("scale", i), this.render());
  }
}
export {
  H as ScaleController
};
