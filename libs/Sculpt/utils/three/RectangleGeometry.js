var i = Object.defineProperty;
var a = (r, t, e) => t in r ? i(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var n = (r, t, e) => (a(r, typeof t != "symbol" ? t + "" : t, e), e);
import * as o from "three";
class l extends o.BufferGeometry {
  constructor(e) {
    super();
    n(this, "name", "RectangleGeometry");
    n(this, "points");
    if (e.length !== 4) {
      console.error("Invalid number of points, it's not a rectangle");
      return;
    }
    this.points = e.slice(0, 4), this.setAttribute("position", new o.BufferAttribute(new Float32Array(this.points.flatMap((s) => s.toArray())), 3)), this.setIndex(new o.BufferAttribute(new Uint16Array([0, 1, 2, 0, 2, 3]), 1));
  }
}
export {
  l as RectangleGeometry
};
