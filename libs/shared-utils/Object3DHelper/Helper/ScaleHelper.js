var p = Object.defineProperty;
var h = (i, t, e) => t in i ? p(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => (h(i, typeof t != "symbol" ? t + "" : t, e), e);
import * as n from "three";
import { ScaleHelperAbstract as d } from "../Base/BaseHelper.js";
import { calculateScaleByCamera as u } from "../utils/calculateScaleByCamera.js";
class S extends d {
  constructor(e, s) {
    super(e, s);
    c(this, "name", "ScaleHelper");
    c(this, "scaleMeshes", []);
    c(this, "positions", []);
    s && (this.positions = s.positions);
  }
  initQuaternion() {
    this.quaternion.copy(this.originObject3D.quaternion);
  }
  initialPosition(e) {
    this.position.copy(this.originObject3D.position);
    const s = typeof this.positions == "function" ? this.positions() : this.positions;
    s && (this.scaleMeshes = s.map((a, r) => {
      var l;
      const o = (l = this.scaleMeshes[r]) != null ? l : m();
      return o.position.copy(a.handlePosition), o.scalePosition = a, this.addIfNotExists(o), o;
    }));
  }
  setScaleByCamera(e) {
    this.scaleMeshes.forEach((s) => {
      s.scale.setScalar(
        u(e, s.scalePosition.handlePosition.clone().applyMatrix4(this.matrixWorld))
      );
    });
  }
}
function m() {
  const i = new n.Group();
  i.name = "ScaleHelperCube";
  const t = 0.05, e = new n.BoxGeometry(t, t, t), s = new n.MeshBasicMaterial({
    color: 16776960,
    transparent: !0,
    side: n.DoubleSide
  }), a = new n.MeshBasicMaterial({
    color: 16776960,
    opacity: 0.4,
    depthTest: !1,
    depthWrite: !1,
    transparent: !0,
    side: n.DoubleSide
  }), r = new n.Mesh(e, s), o = new n.Mesh(e, a);
  return r.name = "ScaleHelperCube-front", o.name = "ScaleHelperCube-behind", r.renderOrder = 11, o.renderOrder = 10, i.add(r, o), i;
}
export {
  S as ScaleHelper
};
