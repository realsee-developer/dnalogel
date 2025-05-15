var u = Object.defineProperty;
var c = (s, n, e) => n in s ? u(s, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[n] = e;
var r = (s, n, e) => (c(s, typeof n != "symbol" ? n + "" : n, e), e);
import * as o from "three";
import { BoundingBoxHelperAbstract as p } from "../Base/BaseHelper.js";
import { boundingBox as b } from "../../three/boundingBox.js";
import { setObjectQuaternion as h } from "../utils/setObjectQuaternion.js";
class d extends p {
  constructor(e) {
    super(e);
    r(this, "name", "BoundingBoxHelper");
    r(this, "box");
    r(this, "outline");
    r(this, "positionAttribute");
    this.positionAttribute = new o.BufferAttribute(new Float32Array(8 * 3), 3), this.box = this.createBox(), this.outline = this.createOutline(), this.add(this.box, this.outline), this.update();
  }
  initQuaternion() {
    this.quaternion.copy(this.originObject3D.quaternion);
  }
  setHelperQuaternion(e, t) {
    h(this, e, t);
  }
  raycasterIntersectObject(e, t) {
    return e.intersectObject(this, !1, t);
  }
  raycast(e, t) {
    this.box.raycast(e, t);
  }
  update() {
    const e = b(this.originObject3D);
    if (!e)
      return;
    const { min: t, max: i } = e;
    this.positionAttribute.setXYZ(0, i.x, i.y, i.z), this.positionAttribute.setXYZ(1, t.x, i.y, i.z), this.positionAttribute.setXYZ(2, t.x, t.y, i.z), this.positionAttribute.setXYZ(3, i.x, t.y, i.z), this.positionAttribute.setXYZ(4, i.x, i.y, t.z), this.positionAttribute.setXYZ(5, t.x, i.y, t.z), this.positionAttribute.setXYZ(6, t.x, t.y, t.z), this.positionAttribute.setXYZ(7, i.x, t.y, t.z), this.positionAttribute.needsUpdate = !0;
  }
  createOutline() {
    const e = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), t = new o.BufferGeometry();
    t.setIndex(new o.BufferAttribute(e, 1)), t.setAttribute("position", this.positionAttribute);
    const i = new o.LineBasicMaterial({
      color: 64767,
      linewidth: 1,
      opacity: 1,
      toneMapped: !1
    }), a = new o.LineSegments(t, i);
    return a.matrixAutoUpdate = !1, a;
  }
  createBox() {
    const e = new Uint16Array([
      0,
      1,
      2,
      0,
      2,
      3,
      0,
      3,
      7,
      0,
      7,
      4,
      0,
      4,
      5,
      0,
      5,
      1,
      6,
      1,
      5,
      6,
      2,
      1,
      6,
      5,
      4,
      6,
      4,
      7,
      6,
      3,
      2,
      6,
      7,
      3
    ]), t = new o.BufferGeometry();
    t.setIndex(new o.BufferAttribute(e, 1)), t.setAttribute("position", this.positionAttribute);
    const i = new o.MeshBasicMaterial({
      color: 64767,
      opacity: 0.1,
      depthTest: !1,
      transparent: !0
    });
    return new o.Mesh(t, i);
  }
}
export {
  d as BoundingBoxHelper
};
