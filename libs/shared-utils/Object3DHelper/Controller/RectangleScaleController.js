var W = Object.defineProperty;
var X = (h, a, t) => a in h ? W(h, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[a] = t;
var j = (h, a, t) => (X(h, typeof a != "symbol" ? a + "" : a, t), t);
import { BaseController as Y } from "../Base/BaseController.js";
import * as m from "three";
import { Vector3 as o } from "three";
import { getMouseRaycaster as T } from "../utils/getMouseRaycaster.js";
import { vectorIsEqual as G } from "../../three/vectorIsEqual.js";
class _ extends Y {
  constructor(...t) {
    super(...t);
    j(this, "startInfo");
    j(this, "name", "RectangleScaleController");
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
    const t = new m.Plane(), s = this.helperObject3D.cornerPositions;
    if (s.length !== 0)
      return s.length < 3 ? t.setFromNormalAndCoplanarPoint(this.originObject3D.getWorldDirection(new o()), s[0]) : t.setFromCoplanarPoints(s[0], s[1], s[2]), t;
  }
  dragStart(t, s) {
    var p, n;
    (n = (p = this.helperObject3D).updatePoints) == null || n.call(p);
    const f = this.getDragPlane();
    if (!f)
      return this.dragEnd();
    this.startInfo = { startPoint: { position: s.position.clone(), direction: s.direction }, plane: f }, this.hooks.emit("scaleStart"), this.render(), this.isDragging = !0;
  }
  dragging(t) {
    if (!this.isDragging)
      return;
    const s = T(this.camera, t, this.container);
    if (!s)
      return this.dragEnd();
    this.scale(s);
  }
  scale(t) {
    var C, M;
    if (!this.startInfo)
      return;
    const s = this.originObject3D, { startPoint: f, plane: p } = this.startInfo, n = this.helperObject3D.cornerPositions;
    if (n.length < 4)
      return this.dragEnd();
    const g = t.ray.intersectPlane(p, new o());
    if (!g || G(g, this.camera.position))
      return;
    const I = new o().addVectors(n[0], n[2]).divideScalar(2), { position: k, direction: z } = f, D = new o().subVectors(n[1], n[0]), y = new o().subVectors(n[3], n[0]), V = (r) => {
      const i = new o(0, 0, 0);
      if (!this.startInfo)
        return i;
      const e = (r === "ew" ? D : y).clone(), c = k.clone().projectOnVector(e), b = g.clone().projectOnVector(e), E = I.clone().projectOnVector(e);
      if (b.equals(c))
        return i;
      if (r === "ns" && typeof this.startInfo.dragPointInCenterBottom != "boolean") {
        const l = new o().subVectors(b, E), P = l.x < 0 && e.x >= 0, w = l.y < 0 && e.y >= 0, O = l.z < 0 && e.z >= 0;
        this.startInfo.dragPointInCenterBottom = P || w || O;
      }
      if (r === "ew" && typeof this.startInfo.dragPointInCenterLeft != "boolean") {
        const l = new o().subVectors(b, E), P = l.x < 0 && e.x >= 0, w = l.y < 0 && e.y >= 0, O = l.z < 0 && e.z >= 0;
        this.startInfo.dragPointInCenterLeft = P || w || O;
      }
      const v = new o().subVectors(b, c), N = v.length();
      return N > 0.3 ? (console.warn("offset.length() > 0.3, skipped", N), i) : v;
    }, A = V("ew"), B = V("ns"), x = () => {
      const r = A;
      this.helperObject3D.cornerPositions.forEach((i, e) => {
        var c;
        (c = this.startInfo) != null && c.dragPointInCenterLeft ? (e === 0 || e === 3) && i.add(r) : (e === 1 || e === 2) && i.add(r);
      });
    }, S = () => {
      const r = B;
      this.helperObject3D.cornerPositions.forEach((i, e) => {
        var c;
        (c = this.startInfo) != null && c.dragPointInCenterBottom ? (e === 0 || e === 1) && i.add(r) : (e === 2 || e === 3) && i.add(r);
      });
    };
    switch (z) {
      case "ew":
        x();
        break;
      case "ns":
        S();
        break;
      case "nesw":
      case "nwse":
        x(), S();
    }
    const H = new o().subVectors(n[1], n[0]).length() / D.length(), L = new o().subVectors(n[3], n[0]).length() / y.length(), R = new o(H, L, 1), u = new m.Matrix4().scale(R);
    s.isCSS3DObjectPlus && s.applyScaleMatrix4 ? s.applyScaleMatrix4(u) : s.scale.applyMatrix4(u), f.position.copy(g);
    const q = new o().addVectors(n[0], n[2]).divideScalar(2), F = new o().subVectors(q, I), d = new m.Matrix4().setPosition(F);
    s.applyMatrix4(d), (C = this.helperObject3D.css3DInstance) == null || C.css3DObject.applyMatrix4(d), (M = this.helperObject3D.plane) == null || M.applyMatrix4(d), this.internalHooks.emit("applyObjectScale", { matrix: u }), this.internalHooks.emit("applyObjectPosition", { matrix: d }), this.render();
  }
  dragEnd() {
    this.isDragging && (this.startInfo = void 0, this.isDragging = !1, this.hooks.emit("scaleEnd"), this.render());
  }
}
export {
  _ as RectangleScaleController
};
