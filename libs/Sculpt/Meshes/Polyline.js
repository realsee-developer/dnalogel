var M = Object.defineProperty, E = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var m = (e, o, t) => o in e ? M(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, r = (e, o) => {
  for (var t in o || (o = {}))
    g.call(o, t) && m(e, t, o[t]);
  if (a)
    for (var t of a(o))
      f.call(o, t) && m(e, t, o[t]);
  return e;
}, c = (e, o) => E(e, b(o));
var S = (e, o) => {
  var t = {};
  for (var i in e)
    g.call(e, i) && o.indexOf(i) < 0 && (t[i] = e[i]);
  if (e != null && a)
    for (var i of a(e))
      o.indexOf(i) < 0 && f.call(e, i) && (t[i] = e[i]);
  return t;
};
var h = (e, o, t) => (m(e, typeof o != "symbol" ? o + "" : o, t), t);
import { anyPositionToVector3 as v } from "../../shared-utils/positionToVector3.js";
import { IObject3D as D } from "../../shared-utils/three/IObject3D.js";
import { LineWithDotsMesh as V } from "./LineWithDots.js";
import * as W from "three";
import { closeVectors as w } from "../../shared-utils/three/closeVectors.js";
import { removeAllTag as C } from "../utils/removeAllTag.js";
class P extends D {
  constructor(t) {
    super();
    h(this, "name", "PolylineBaseMesh");
    h(this, "lines", []);
    h(this, "withDots");
    h(this, "paramsStyle");
    const n = t, { withDots: i, points: s } = n, l = S(n, ["withDots", "points"]);
    this.withDots = i != null ? i : !0, s && this.setPoints(s), l && this.setStyle(l), this.addEventListener("removed", () => {
      C(this);
    });
  }
  get style() {
    var t;
    return {
      lineColor: this.lineColor,
      lineWidth: this.lineWidth,
      opacity: this.opacity,
      dashed: this.dashed,
      occlusionVisibility: this.occlusionVisibility,
      occlusionMode: this.occlusionMode,
      lengthEnable: (t = this.paramsStyle) == null ? void 0 : t.lengthEnable
    };
  }
  get opacity() {
    var t, i, s;
    return (s = (t = this.lines[0]) == null ? void 0 : t.opacity) != null ? s : (i = this.paramsStyle) == null ? void 0 : i.opacity;
  }
  get lineColor() {
    var t, i, s;
    return (s = (t = this.lines[0]) == null ? void 0 : t.color) != null ? s : (i = this.paramsStyle) != null && i.lineColor ? new W.Color(this.paramsStyle.lineColor) : void 0;
  }
  get lineWidth() {
    var t, i, s;
    return (s = (t = this.lines[0]) == null ? void 0 : t.lineWidth) != null ? s : (i = this.paramsStyle) == null ? void 0 : i.lineWidth;
  }
  get dashed() {
    var t, i, s;
    return (s = (t = this.lines[0]) == null ? void 0 : t.dashed) != null ? s : (i = this.paramsStyle) == null ? void 0 : i.dashed;
  }
  get occlusionVisibility() {
    var t, i, s;
    return (s = (t = this.lines[0]) == null ? void 0 : t.occlusionVisibility) != null ? s : (i = this.paramsStyle) == null ? void 0 : i.occlusionVisibility;
  }
  get occlusionMode() {
    var t, i, s;
    return (s = (t = this.lines[0]) == null ? void 0 : t.occlusionMode) != null ? s : (i = this.paramsStyle) == null ? void 0 : i.occlusionMode;
  }
  get points() {
    var t;
    return this.lines.map((i) => i.points[0]).concat((t = this.lines.at(-1)) == null ? void 0 : t.points[1]).filter(Boolean);
  }
  setPoints(t, i = { closed: !1 }) {
    let s = t.map(v);
    i.closed && (s = w(s)), s.forEach((l, n) => {
      var d;
      const p = s[n + 1];
      if (n !== 0 && p === void 0)
        return;
      const u = (d = this.lines[n]) != null ? d : (() => {
        const y = new V(c(r({}, this.style), {
          pointVisibility: this.withDots ? { startPoint: n === 0, endPoint: !0 } : !1
        }));
        return this.lines[n] = y, this.add(y), y;
      })();
      u.setStyle(this.style), u.setPoints([l, p]);
    }), s.length === 0 ? (this.lines.forEach((l) => l.removeFromParent()), this.lines = []) : s.length === 1 || this.lines.length > s.length - 1 && this.lines.splice(s.length - 1).forEach((l) => l.removeFromParent());
  }
  setStyle(t) {
    this.paramsStyle = r(r({}, this.paramsStyle), t), this.lines.forEach((i) => i.setStyle(this.paramsStyle));
  }
  highlight() {
    this.lines.forEach((t) => t.highlight());
  }
  unhighlight() {
    this.lines.forEach((t) => t.unhighlight());
  }
}
class A extends P {
  constructor(...t) {
    super(c(r({}, t[0]), { withDots: !1 }));
    h(this, "name", "PolylineMesh");
  }
}
class H extends P {
  constructor(...t) {
    super(c(r({}, t[0]), { withDots: !0 }));
    h(this, "name", "PolylineWithDotsMesh");
  }
}
export {
  A as PolylineMesh,
  H as PolylineWithDotsMesh
};
