var c = Object.defineProperty;
var l = (i, t, s) => t in i ? c(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var r = (i, t, s) => (l(i, typeof t != "symbol" ? t + "" : t, s), s);
import * as o from "three";
import { ScaleHelperAbstract as h } from "../Base/BaseHelper.js";
import { calculateScaleByCamera as p } from "../utils/calculateScaleByCamera.js";
class M extends h {
  constructor(s, e) {
    super(s, e);
    r(this, "scaleMeshes", []);
    r(this, "positions", []);
    e && (this.positions = e.positions);
  }
  initialPosition(s) {
    this.position.copy(this.originObject3D.position), this.scaleMeshes.length && this.remove(...this.scaleMeshes);
    const e = typeof this.positions == "function" ? this.positions() : this.positions;
    e && (this.scaleMeshes = e.map((n) => {
      const a = m();
      return a.position.copy(n.handlePosition), a.scalePosition = n, a;
    }), this.add(...this.scaleMeshes));
  }
  setScaleByCamera(s) {
    this.scaleMeshes.forEach((e) => {
      e.scale.setScalar(
        p(s, e.scalePosition.handlePosition.clone().applyMatrix4(this.matrixWorld))
      );
    });
  }
}
function m() {
  const t = new o.BoxGeometry(0.05, 0.05, 0.05), s = new o.MeshBasicMaterial({
    color: 16776960,
    depthTest: !1,
    depthWrite: !1,
    transparent: !0,
    side: o.DoubleSide
  }), e = new o.Mesh(t, s);
  return e.renderOrder = 10, e;
}
export {
  M as ScaleHelper
};
