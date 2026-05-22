var W = Object.defineProperty;
var X = (h, a, t) => a in h ? W(h, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[a] = t;
var w = (h, a, t) => (X(h, typeof a != "symbol" ? a + "" : a, t), t);
import { BaseController as Y } from "../Base/BaseController.js";
import * as D from "three";
import { Vector3 as o } from "three";
import { getMouseRaycaster as T } from "../utils/getMouseRaycaster.js";
import { vectorIsEqual as G } from "../../three/vectorIsEqual.js";
class _ extends Y {
  constructor(...t) {
    super(...t);
    w(this, "startInfo");
    w(this, "name", "RectangleScaleController");
  }
  enable() {
    this.helperObject3D.enable(), super.enable();
  }
  disable() {
    this.helperObject3D.disable(), super.disable();
  }
  show() {
    this.helperObject3D.show(), super.show();
  }
  hide() {
    this.helperObject3D.hide(), super.hide();
  }
  onApplyOriginObjectPosition(t) {
    this.isDragging || super.onApplyOriginObjectPosition(t);
  }
  onApplyOriginObjectScale(t) {
    this.helperObject3D.applyHelperScaleMatrix4(t.matrix, t.origin);
  }
  getDragPlane() {
    const t = new D.Plane(), e = this.helperObject3D.cornerPositions;
    if (e.length !== 0)
      return e.length < 3 ? t.setFromNormalAndCoplanarPoint(this.originObject3D.getWorldDirection(new o()), e[0]) : t.setFromCoplanarPoints(e[0], e[1], e[2]), t;
  }
  dragStart(t, e) {
    var p, n;
    (n = (p = this.helperObject3D).updatePoints) == null || n.call(p);
    const f = this.getDragPlane();
    if (!f)
      return this.dragEnd();
    this.startInfo = { startPoint: { position: e.position.clone(), direction: e.direction }, plane: f }, this.hooks.emit("scaleStart", e.direction), this.render(), this.isDragging = !0;
  }
  dragging(t) {
    if (!this.isDragging)
      return;
    const e = T(this.camera, t, this.container);
    if (!e)
      return this.dragEnd();
    this.scale(e);
  }
  scale(t) {
    var C, E;
    if (!this.startInfo)
      return;
    const e = this.originObject3D, { startPoint: f, plane: p } = this.startInfo, n = this.helperObject3D.cornerPositions;
    if (n.length < 4)
      return this.dragEnd();
    const g = t.ray.intersectPlane(p, new o());
    if (!g || G(g, this.camera.position))
      return;
    const m = new o().addVectors(n[0], n[2]).divideScalar(2), { position: k, direction: z } = f, I = new o().subVectors(n[1], n[0]), y = new o().subVectors(n[3], n[0]), S = (r) => {
      const i = new o(0, 0, 0);
      if (!this.startInfo)
        return i;
      const s = (r === "ew" ? I : y).clone(), c = k.clone().projectOnVector(s), b = g.clone().projectOnVector(s), M = m.clone().projectOnVector(s);
      if (b.equals(c))
        return i;
      if (r === "ns" && typeof this.startInfo.dragPointInCenterBottom != "boolean") {
        const l = new o().subVectors(b, M), O = l.x < 0 && s.x >= 0, P = l.y < 0 && s.y >= 0, j = l.z < 0 && s.z >= 0;
        this.startInfo.dragPointInCenterBottom = O || P || j;
      }
      if (r === "ew" && typeof this.startInfo.dragPointInCenterLeft != "boolean") {
        const l = new o().subVectors(b, M), O = l.x < 0 && s.x >= 0, P = l.y < 0 && s.y >= 0, j = l.z < 0 && s.z >= 0;
        this.startInfo.dragPointInCenterLeft = O || P || j;
      }
      const v = new o().subVectors(b, c), N = v.length();
      return N > 0.3 ? (console.warn("offset.length() > 0.3, skipped", N), i) : v;
    }, A = S("ew"), B = S("ns"), V = () => {
      const r = A;
      this.helperObject3D.cornerPositions.forEach((i, s) => {
        var c;
        (c = this.startInfo) != null && c.dragPointInCenterLeft ? (s === 0 || s === 3) && i.add(r) : (s === 1 || s === 2) && i.add(r);
      });
    }, x = () => {
      const r = B;
      this.helperObject3D.cornerPositions.forEach((i, s) => {
        var c;
        (c = this.startInfo) != null && c.dragPointInCenterBottom ? (s === 0 || s === 1) && i.add(r) : (s === 2 || s === 3) && i.add(r);
      });
    };
    switch (z) {
      case "ew":
        V();
        break;
      case "ns":
        x();
        break;
      case "nesw":
      case "nwse":
        V(), x();
    }
    const H = new o().subVectors(n[1], n[0]).length() / I.length(), L = new o().subVectors(n[3], n[0]).length() / y.length(), R = new o(H, L, 1), u = new D.Matrix4().scale(R);
    e.isCSS3DObjectPlus && e.applyScaleMatrix4 ? e.applyScaleMatrix4(u) : e.scale.applyMatrix4(u), f.position.copy(g);
    const q = new o().addVectors(n[0], n[2]).divideScalar(2), F = new o().subVectors(q, m), d = new D.Matrix4().setPosition(F);
    e.applyMatrix4(d), (C = this.helperObject3D.css3DInstance) == null || C.css3DObject.applyMatrix4(d), (E = this.helperObject3D.plane) == null || E.applyMatrix4(d), this.internalHooks.emit("applyObjectScale", { matrix: u }), this.internalHooks.emit("applyObjectPosition", { matrix: d }), this.render();
  }
  dragEnd() {
    this.isDragging && (this.startInfo = void 0, this.isDragging = !1, "onScaleEnd" in this.helperObject3D && typeof this.helperObject3D.onScaleEnd == "function" && this.helperObject3D.onScaleEnd(), this.hooks.emit("scaleEnd"), this.render());
  }
}
export {
  _ as RectangleScaleController
};
