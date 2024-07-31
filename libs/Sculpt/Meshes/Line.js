var k = Object.defineProperty;
var y = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var u = (o, n, e) => n in o ? k(o, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[n] = e, f = (o, n) => {
  for (var e in n || (n = {}))
    E.call(n, e) && u(o, e, n[e]);
  if (y)
    for (var e of y(n))
      w.call(n, e) && u(o, e, n[e]);
  return o;
};
var s = (o, n, e) => (u(o, typeof n != "symbol" ? n + "" : n, e), e);
import * as d from "three";
import { DEFAULT_LINE_COLOR as L, DEFAULT_LINE_WIDTH as H, DEFAULT_HIGHLIGHT_OPACITY as b } from "../utils/color.js";
import { LineGeometry as _, LineMaterial as C, THREE_Line2 as D } from "../../shared-utils/five/FiveLine.js";
import { anyPositionToVector3 as M } from "../../shared-utils/positionToVector3.js";
import { IObject3D as R } from "../../shared-utils/three/IObject3D.js";
import "hammerjs";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { notNil as h } from "../../shared-utils/isNil.js";
class S extends C {
  constructor(e) {
    var t, i;
    super(e);
    s(this, "_three_color");
    h(e == null ? void 0 : e.color) && (this.three_color = (t = e == null ? void 0 : e.color) != null ? t : 16777215), Object.keys(e).forEach((l) => {
      ["color", "dashed", "dashScale", "dashSize", "gapSize", "resolution"].includes(l) || l in this && (this[l] = e[l]);
    }), this.setDashed((i = e == null ? void 0 : e.dashed) != null ? i : !1);
  }
  get three_color() {
    return this._three_color;
  }
  set three_color(e) {
    this._three_color = e, this.color = e;
  }
  setDashed(e) {
    e ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH, this.needsUpdate = !0;
  }
}
class T extends D {
  constructor(e, t) {
    super(e, t);
    s(this, "name", "Line3");
  }
}
class z extends R {
  constructor(e) {
    var r, c, a, g;
    super();
    s(this, "name", "LineMesh");
    s(this, "points");
    s(this, "highlighted", !1);
    s(this, "line");
    s(this, "backLine");
    s(this, "opacityBeforeHighlight");
    s(this, "paramsStyle", {});
    this.paramsStyle = e != null ? e : {};
    const t = new _(), i = new S({
      color: new d.Color((r = e == null ? void 0 : e.lineColor) != null ? r : L),
      linewidth: (c = e == null ? void 0 : e.lineWidth) != null ? c : H,
      dashScale: 40,
      opacity: 1,
      transparent: !0,
      dashed: (a = e == null ? void 0 : e.dashed) != null ? a : !1
    }), l = new S({
      color: new d.Color((g = e == null ? void 0 : e.lineColor) != null ? g : L),
      linewidth: i == null ? void 0 : i.linewidth,
      dashScale: i.dashScale,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0,
      opacity: 0.2,
      dashed: i.dashed,
      resolution: i.resolution
    });
    this.line = new T(t, i), this.backLine = new T(t, l), this.line.renderOrder = 1, this.backLine.renderOrder = 0, this.line.name = "lineFrontMaterial", this.backLine.name = "lineBackMaterial", e && this.setStyle(e), e != null && e.points && this.setPoints(e.points);
  }
  get lineWidth() {
    return this.line.material.linewidth;
  }
  get color() {
    return new d.Color(this.line.material.three_color);
  }
  get dashed() {
    return this.line.material.dashed;
  }
  get occlusionVisibility() {
    return this.backLine.visible || this.line.material.depthTest === !1;
  }
  get occlusionMode() {
    return this.line.material.depthTest === !1 ? "depthTest" : "translucence";
  }
  setPoints(e) {
    const t = e.map(M).filter(h);
    if (this.points = t, t.length < 2)
      return;
    this.addIfNotExists(this.line, this.backLine);
    const i = t.flatMap((l) => [l.x, l.y, l.z]);
    i.length > 2 && (this.line.geometry.dispose(), this.line.geometry = new _(), this.backLine.geometry = this.line.geometry), this.line.geometry.setPositions(i), this.line.computeLineDistances(), this.needsRender = !0;
  }
  setResolution(e, t) {
    const i = this.line.material.resolution;
    (i.x !== e || i.y !== t) && (i.set(e, t), this.needsRender = !0);
    const l = this.backLine.material.resolution;
    (l.x !== e || l.y !== t) && (l.set(e, t), this.needsRender = !0);
  }
  setStyle(e) {
    var l, r, c;
    this.paramsStyle = f(f({}, this.paramsStyle), e), h(e.lineColor) && (this.line.material.three_color = new d.Color(e.lineColor), this.backLine.material.three_color = new d.Color(e.lineColor)), h(e.lineWidth) && (this.line.material.linewidth = e.lineWidth, this.backLine.material.linewidth = e.lineWidth), h(e.dashed) && (this.line.material.setDashed(e.dashed), this.backLine.material.setDashed(e.dashed));
    const t = (l = e.occlusionVisibility) != null ? l : this.paramsStyle.occlusionVisibility, i = (c = (r = e.occlusionMode) != null ? r : this.paramsStyle.occlusionMode) != null ? c : "translucence";
    h(t) && (t ? i === "depthTest" ? (this.line.material.depthTest = !1, this.backLine.visible = !1) : i === "translucence" && (this.line.material.depthTest = !0, this.backLine.visible = !0) : (this.line.material.depthTest = !0, this.backLine.visible = !1)), this.needsRender = !0;
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.opacityBeforeHighlight = this.line.material.opacity, this.line.material.opacity = this.opacityBeforeHighlight * b, this.backLine.material.opacity = this.backLine.material.opacity * b, this.needsRender = !0);
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, this.line.material.opacity = this.opacityBeforeHighlight, this.backLine.material.opacity = 0.2, this.needsRender = !0);
  }
}
export {
  z as LineMesh
};
