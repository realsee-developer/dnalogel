var a = Object.defineProperty;
var n = (s, e, t) => e in s ? a(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => (n(s, typeof e != "symbol" ? e + "" : e, t), t);
import * as i from "three";
class y extends i.Object3D {
  constructor() {
    super(...arguments);
    r(this, "children", []);
  }
  /** 获取 raycaster 与当前物体的交点 */
  getRaycastIntersects(t) {
    const c = [];
    return this.raycast(t, c), c;
  }
  /** 获取 raycaster 与当前物体的第一个交点 */
  getRaycastIntersection(t) {
    return this.getRaycastIntersects(t)[0];
  }
}
export {
  y as Object3D
};
