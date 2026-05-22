var o = Object.defineProperty;
var a = (s, t, e) => t in s ? o(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var r = (s, t, e) => (a(s, typeof t != "symbol" ? t + "" : t, e), e);
import * as i from "three";
class n {
  constructor() {
    r(this, "tracePoints");
    r(this, "curve");
    this.tracePoints = [], this.curve = new i.CatmullRomCurve3(this.tracePoints);
  }
  addPoint(t) {
    this.tracePoints.push(t), this.curve = new i.CatmullRomCurve3(this.tracePoints, !1);
  }
  clear() {
    this.tracePoints = [], this.curve = new i.CatmullRomCurve3(this.tracePoints);
  }
  getPoints() {
    return this.tracePoints;
  }
}
export {
  n as Trace
};
