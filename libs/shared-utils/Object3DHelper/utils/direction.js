var n = Object.defineProperty;
var d = (e, r, t) => r in e ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var i = (e, r, t) => (d(e, typeof r != "symbol" ? r + "" : r, t), t);
import * as o from "three";
class u extends o.Group {
  constructor(t) {
    super();
    i(this, "direction");
    this.direction = t || "x";
  }
}
class x extends o.Mesh {
  constructor(t, s, c) {
    super(t, s);
    i(this, "direction");
    this.direction = c || "x";
  }
}
export {
  u as DirectionGroup,
  x as DirectionMesh
};
