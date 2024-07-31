var x = Object.defineProperty, B = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var h = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var d = (s, e, i) => e in s ? x(s, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[e] = i, a = (s, e) => {
  for (var i in e || (e = {}))
    C.call(e, i) && d(s, i, e[i]);
  if (h)
    for (var i of h(e))
      w.call(e, i) && d(s, i, e[i]);
  return s;
}, c = (s, e) => B(s, T(e));
var E = (s, e) => {
  var i = {};
  for (var t in s)
    C.call(s, t) && e.indexOf(t) < 0 && (i[t] = s[t]);
  if (s != null && h)
    for (var t of h(s))
      e.indexOf(t) < 0 && w.call(s, t) && (i[t] = s[t]);
  return i;
};
var l = (s, e, i) => (d(s, typeof e != "symbol" ? e + "" : e, i), i);
import { anyPositionToVector3 as j } from "../../shared-utils/positionToVector3.js";
import { IObject3D as F } from "../../shared-utils/three/IObject3D.js";
import "hammerjs";
import * as H from "three";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { notNil as I } from "../../shared-utils/isNil.js";
import { LineWithDotsMesh as L } from "./LineWithDots.js";
import { closeVectors as N } from "../../shared-utils/three/closeVectors.js";
class v extends F {
  constructor(i) {
    super();
    l(this, "name", "PolylineBaseMesh");
    l(this, "lines", []);
    l(this, "withDots");
    l(this, "paramsStyle");
    const n = i, { withDots: t, points: o } = n, r = E(n, ["withDots", "points"]);
    this.withDots = t != null ? t : !0, o && this.setPoints(o), r && this.setStyle(r);
  }
  get lineColor() {
    var i, t, o;
    return (o = (i = this.lines[0]) == null ? void 0 : i.color) != null ? o : (t = this.paramsStyle) != null && t.lineColor ? new H.Color(this.paramsStyle.lineColor) : void 0;
  }
  get lineWidth() {
    var i, t, o;
    return (o = (i = this.lines[0]) == null ? void 0 : i.lineWidth) != null ? o : (t = this.paramsStyle) == null ? void 0 : t.lineWidth;
  }
  get dashed() {
    var i, t, o;
    return (o = (i = this.lines[0]) == null ? void 0 : i.dashed) != null ? o : (t = this.paramsStyle) == null ? void 0 : t.dashed;
  }
  get occlusionVisibility() {
    var i, t, o;
    return (o = (i = this.lines[0]) == null ? void 0 : i.occlusionVisibility) != null ? o : (t = this.paramsStyle) == null ? void 0 : t.occlusionVisibility;
  }
  get occlusionMode() {
    var i, t, o;
    return (o = (i = this.lines[0]) == null ? void 0 : i.occlusionMode) != null ? o : (t = this.paramsStyle) == null ? void 0 : t.occlusionMode;
  }
  get points() {
    var i;
    return this.lines.map((t) => t.points[0]).concat((i = this.lines.at(-1)) == null ? void 0 : i.points[1]).filter(Boolean);
  }
  setPoints(i, t = { closed: !1 }) {
    var n, u, y, f, S, g, P, M, V, W;
    let o = i.map(j);
    t.closed && (o = N(o));
    const r = {
      lineWidth: (u = (n = this.paramsStyle) == null ? void 0 : n.lineWidth) != null ? u : this.lineWidth,
      lineColor: (f = (y = this.paramsStyle) == null ? void 0 : y.lineColor) != null ? f : this.lineColor,
      dashed: (g = (S = this.paramsStyle) == null ? void 0 : S.dashed) != null ? g : this.dashed,
      occlusionVisibility: (M = (P = this.paramsStyle) == null ? void 0 : P.occlusionVisibility) != null ? M : this.occlusionVisibility,
      occlusionMode: (W = (V = this.paramsStyle) == null ? void 0 : V.occlusionMode) != null ? W : this.occlusionMode
    };
    this.lines.length && this.lines.forEach((m) => m.removeFromParent()), this.lines = o.map((m, p) => {
      const b = o[p + 1];
      if (p !== 0 && b === void 0)
        return null;
      const D = new L(c(a({}, r), {
        pointVisibility: this.withDots ? { startPoint: p === 0, endPoint: !0 } : !1
      }));
      return D.setPoints([m, b]), D;
    }).filter(I), this.add(...this.lines);
  }
  setStyle(i) {
    this.paramsStyle = i, this.lines.forEach((t) => t.setStyle(i));
  }
  highlight() {
    this.lines.forEach((i) => i.highlight());
  }
  unhighlight() {
    this.lines.forEach((i) => i.unhighlight());
  }
}
class X extends v {
  constructor(...i) {
    super(c(a({}, i[0]), { withDots: !1 }));
    l(this, "name", "PolylineMesh");
  }
}
class Y extends v {
  constructor(...i) {
    super(c(a({}, i[0]), { withDots: !0 }));
    l(this, "name", "PolylineWithDotsMesh");
  }
}
export {
  X as PolylineMesh,
  Y as PolylineWithDotsMesh
};
