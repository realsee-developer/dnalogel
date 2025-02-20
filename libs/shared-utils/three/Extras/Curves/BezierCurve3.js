var p = Object.defineProperty;
var a = (n, o, t) => o in n ? p(n, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[o] = t;
var i = (n, o, t) => (a(n, typeof o != "symbol" ? o + "" : o, t), t);
import * as c from "three";
import { Bezier as u } from "../Core/Interpolations.js";
class P extends c.Curve {
  constructor(t = []) {
    super();
    i(this, "type");
    i(this, "controlPoints");
    this.type = "CustomBezierCurve3", this.controlPoints = t;
  }
  getPoint(t, r = new c.Vector3()) {
    const s = r, e = u(t, this.controlPoints);
    return s.copy(e), s;
  }
  copy(t) {
    return super.copy(t), this.controlPoints = t.controlPoints.map((r) => r.clone()), this;
  }
  toJSON() {
    const t = super.toJSON(), r = this.controlPoints.map((e) => e.toArray());
    return Object.assign(t, { controlPoints: r });
  }
  fromJSON(t) {
    return super.fromJSON(t), this.controlPoints = t.controlPoints.map((r) => new c.Vector3().fromArray(r)), this;
  }
}
export {
  P as CustomBezierCurve3
};
