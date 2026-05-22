import { Curve as a, Vector3 as c, Vector4 as p } from "three";
import { NURBSUtils as l } from "./NURBSUtils.js";
var e = function(n, s, o, r, t) {
  a.call(this), this.degree = n, this.knots = s, this.controlPoints = [], this.startKnot = r || 0, this.endKnot = t || this.knots.length - 1;
  for (var i = 0; i < o.length; ++i) {
    var h = o[i];
    this.controlPoints[i] = new p(h.x, h.y, h.z, h.w);
  }
};
e.prototype = Object.create(a.prototype);
e.prototype.constructor = e;
e.prototype.getPoint = function(n, s) {
  var o = s || new c(), r = this.knots[this.startKnot] + n * (this.knots[this.endKnot] - this.knots[this.startKnot]), t = l.calcBSplinePoint(this.degree, this.knots, this.controlPoints, r);
  return t.w != 1 && t.divideScalar(t.w), o.set(t.x, t.y, t.z);
};
e.prototype.getTangent = function(n, s) {
  var o = s || new c(), r = this.knots[0] + n * (this.knots[this.knots.length - 1] - this.knots[0]), t = l.calcNURBSDerivatives(this.degree, this.knots, this.controlPoints, r, 1);
  return o.copy(t[1]).normalize(), o;
};
export {
  e as NURBSCurve
};
