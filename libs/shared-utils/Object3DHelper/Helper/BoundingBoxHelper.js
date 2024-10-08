var u = Object.defineProperty;
var c = (n, o, e) => o in n ? u(n, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[o] = e;
var r = (n, o, e) => (c(n, typeof o != "symbol" ? o + "" : o, e), e);
import * as s from "three";
import { BoundingBoxHelperAbstract as b } from "../Base/BaseHelper.js";
import { boundingBox as p } from "../../three/boundingBox.js";
class A extends b {
  constructor(e) {
    super(e);
    r(this, "box");
    r(this, "outline");
    r(this, "originObject");
    r(this, "positionAttribute");
    this.originObject = e, this.positionAttribute = new s.BufferAttribute(new Float32Array(8 * 3), 3), this.box = this.createBox(), this.outline = this.createOutline(), this.add(this.box, this.outline), this.update();
  }
  raycasterIntersectObject(e, t) {
    return e.intersectObject(this, !1, t);
  }
  raycast(e, t) {
    this.box.raycast(e, t);
  }
  update() {
    const e = p(this.originObject);
    if (!e)
      return;
    const { min: t, max: i } = e;
    this.positionAttribute.setXYZ(0, i.x, i.y, i.z), this.positionAttribute.setXYZ(1, t.x, i.y, i.z), this.positionAttribute.setXYZ(2, t.x, t.y, i.z), this.positionAttribute.setXYZ(3, i.x, t.y, i.z), this.positionAttribute.setXYZ(4, i.x, i.y, t.z), this.positionAttribute.setXYZ(5, t.x, i.y, t.z), this.positionAttribute.setXYZ(6, t.x, t.y, t.z), this.positionAttribute.setXYZ(7, i.x, t.y, t.z), this.positionAttribute.needsUpdate = !0;
  }
  createOutline() {
    const e = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), t = new s.BufferGeometry();
    t.setIndex(new s.BufferAttribute(e, 1)), t.setAttribute("position", this.positionAttribute);
    const i = new s.LineBasicMaterial({
      color: 64767,
      linewidth: 1,
      opacity: 1,
      toneMapped: !1
    }), a = new s.LineSegments(t, i);
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
    ]), t = new s.BufferGeometry();
    t.setIndex(new s.BufferAttribute(e, 1)), t.setAttribute("position", this.positionAttribute);
    const i = new s.MeshBasicMaterial({
      color: 64767,
      opacity: 0.1,
      depthTest: !1,
      transparent: !0
    });
    return new s.Mesh(t, i);
  }
}
export {
  A as BoundingBoxHelper
};
