var M = Object.defineProperty, E = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var g = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var p = (e, l, t) => l in e ? M(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t, r = (e, l) => {
  for (var t in l || (l = {}))
    g.call(l, t) && p(e, t, l[t]);
  if (a)
    for (var t of a(l))
      f.call(l, t) && p(e, t, l[t]);
  return e;
}, c = (e, l) => E(e, b(l));
var S = (e, l) => {
  var t = {};
  for (var i in e)
    g.call(e, i) && l.indexOf(i) < 0 && (t[i] = e[i]);
  if (e != null && a)
    for (var i of a(e))
      l.indexOf(i) < 0 && f.call(e, i) && (t[i] = e[i]);
  return t;
};
var h = (e, l, t) => (p(e, typeof l != "symbol" ? l + "" : l, t), t);
import { anyPositionToVector3 as D } from "../../shared-utils/positionToVector3.js";
import { IObject3D as V } from "../../shared-utils/three/IObject3D.js";
import { LineWithDotsMesh as W } from "./LineWithDots.js";
import * as w from "three";
import { closeVectors as C } from "../../shared-utils/three/closeVectors.js";
class P extends V {
  constructor(t) {
    super();
    h(this, "name", "PolylineBaseMesh");
    h(this, "lines", []);
    h(this, "withDots");
    h(this, "paramsStyle");
    const n = t, { withDots: i, points: s } = n, o = S(n, ["withDots", "points"]);
    this.withDots = i != null ? i : !0, s && this.setPoints(s), o && this.setStyle(o);
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
    return (s = (t = this.lines[0]) == null ? void 0 : t.lineOpacity) != null ? s : (i = this.paramsStyle) == null ? void 0 : i.lineOpacity;
  }
  get lineColor() {
    var t, i, s;
    return (s = (t = this.lines[0]) == null ? void 0 : t.color) != null ? s : (i = this.paramsStyle) != null && i.lineColor ? new w.Color(this.paramsStyle.lineColor) : void 0;
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
    var t, i, s;
    return this.lines.map((o) => o.points[0]).concat((s = (i = this.lines) == null ? void 0 : i[((t = this.lines) == null ? void 0 : t.length) - 1]) == null ? void 0 : s.points[1]).filter(Boolean);
  }
  setPoints(t, i = { closed: !1 }) {
    let s = t.map(D);
    i.closed && (s = C(s)), s.forEach((o, n) => {
      var d;
      const m = s[n + 1];
      if (n !== 0 && m === void 0)
        return;
      const u = (d = this.lines[n]) != null ? d : (() => {
        const y = new W(c(r({}, this.style), {
          pointVisibility: this.withDots ? { startPoint: n === 0, endPoint: !0 } : !1
        }));
        return this.lines[n] = y, this.add(y), y;
      })();
      u.setStyle(this.style), u.setPoints([o, m]);
    }), s.length === 0 ? (this.lines.forEach((o) => o.removeFromParent()), this.lines = []) : s.length === 1 || this.lines.length > s.length - 1 && this.lines.splice(s.length - 1).forEach((o) => o.removeFromParent());
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
class j extends P {
  constructor(...t) {
    super(c(r({}, t[0]), { withDots: !1 }));
    h(this, "name", "PolylineMesh");
  }
}
class x extends P {
  constructor(...t) {
    super(c(r({}, t[0]), { withDots: !0 }));
    h(this, "name", "PolylineWithDotsMesh");
  }
}
export {
  j as PolylineMesh,
  x as PolylineWithDotsMesh
};
