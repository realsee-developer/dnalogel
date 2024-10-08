var M = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
var y = (h, s, e) => s in h ? M(h, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[s] = e, m = (h, s) => {
  for (var e in s || (s = {}))
    E.call(s, e) && y(h, e, s[e]);
  if (L)
    for (var e of L(s))
      T.call(s, e) && y(h, e, s[e]);
  return h;
};
var r = (h, s, e) => (y(h, typeof s != "symbol" ? s + "" : s, e), e);
import * as f from "three";
import { DEFAULT_LINE_COLOR as p, DEFAULT_LINE_WIDTH as k, DEFAULT_HIGHLIGHT_OPACITY as b } from "../typings/style.js";
import { LineMaterial as w, THREE_Line2 as I } from "../../shared-utils/five/FiveLine.js";
import { LineGeometry as g } from "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import { anyPositionToVector3 as H } from "../../shared-utils/positionToVector3.js";
import { IObject3D as C } from "../../shared-utils/three/IObject3D.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import { centerPoint as R } from "../../shared-utils/three/centerPoint.js";
import { LightTag as x } from "../../shared-utils/tag.js";
import { removeAllTag as W } from "../utils/removeAllTag.js";
import { getLengthHTML as v } from "../utils/Meshes/getLengthHTML.js";
import { applyObjectMatrixWorld as S } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/three/core/Sphere.js";
import "animejs";
import { notNil as d } from "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
class _ extends w {
  constructor(e) {
    var i, t;
    super(e);
    r(this, "_three_color");
    d(e == null ? void 0 : e.color) && (this.three_color = (i = e == null ? void 0 : e.color) != null ? i : 16777215), Object.keys(e).forEach((o) => {
      ["color", "dashed", "dashScale", "dashSize", "gapSize", "resolution"].includes(o) || o in this && (this[o] = e[o]);
    }), this.setDashed((t = e == null ? void 0 : e.dashed) != null ? t : !1);
  }
  get three_color() {
    return this._three_color;
  }
  set three_color(e) {
    this._three_color = e, this.color = e;
  }
  setDashed(e) {
    this.dashed = e, e ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH, this.needsUpdate = !0;
  }
}
class D extends I {
  constructor(e, i) {
    super(e, i);
    r(this, "name", "Line3");
  }
}
class X extends C {
  constructor(e) {
    var l, c, a, u, n;
    super();
    r(this, "name", "LineMesh");
    r(this, "points");
    r(this, "doms", []);
    r(this, "highlighted", !1);
    r(this, "line");
    r(this, "backLine");
    r(this, "opacityBeforeHighlight");
    r(this, "paramsStyle", {});
    r(this, "lastRenderDomItem");
    this.paramsStyle = e != null ? e : {};
    const i = new g(), t = new _({
      color: new f.Color((l = e == null ? void 0 : e.lineColor) != null ? l : p),
      linewidth: (c = e == null ? void 0 : e.lineWidth) != null ? c : k,
      dashScale: 40,
      opacity: (a = e == null ? void 0 : e.opacity) != null ? a : 1,
      transparent: !0,
      dashed: (u = e == null ? void 0 : e.dashed) != null ? u : !1
    }), o = new _({
      color: new f.Color((n = e == null ? void 0 : e.lineColor) != null ? n : p),
      linewidth: t.linewidth * 0.9,
      dashScale: t.dashScale,
      opacity: t.opacity * 0.7,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0,
      resolution: t.resolution
    });
    this.line = new D(i, t), this.backLine = new D(i, o), this.line.renderOrder = 1, this.backLine.renderOrder = 0, this.line.name = "lineFrontMaterial", this.backLine.name = "lineBackMaterial", e && this.setStyle(e), e != null && e.points && this.setPoints(e.points), this.addEventListener("removed", () => {
      W(this);
    });
  }
  get style() {
    return {
      lineColor: this.color,
      lineWidth: this.lineWidth,
      opacity: this.opacity,
      dashed: this.dashed,
      occlusionVisibility: this.occlusionVisibility,
      occlusionMode: this.occlusionMode,
      lengthEnable: this.paramsStyle.lengthEnable,
      tip: this.paramsStyle.tip
    };
  }
  get opacity() {
    var e;
    return (e = this.line.material.opacity) != null ? e : this.paramsStyle.opacity;
  }
  get lineWidth() {
    var e;
    return (e = this.line.material.linewidth) != null ? e : this.paramsStyle.lineWidth;
  }
  get color() {
    var e;
    return new f.Color((e = this.line.material.three_color) != null ? e : this.paramsStyle.lineColor);
  }
  get dashed() {
    var e;
    return (e = this.line.material.dashed) != null ? e : this.paramsStyle.dashed;
  }
  get occlusionVisibility() {
    return this.paramsStyle.occlusionVisibility;
  }
  get occlusionMode() {
    return this.paramsStyle.occlusionMode;
  }
  get five() {
    var e, i;
    return (i = (e = window.globalModules) == null ? void 0 : e.five) != null ? i : window.$five;
  }
  updateMatrixWorld(e) {
    var i;
    if (super.updateMatrixWorld(e), this.points) {
      const t = (i = S(this, this.points)) == null ? void 0 : i.map((o) => o.toArray().join(",")).join(",");
      t !== this.lastRenderDomItem && (this.updateDomItems(), this.lastRenderDomItem = t);
    }
  }
  setPoints(e) {
    const i = e.map(H).filter(d);
    if (this.points = i, i.length < 2) {
      this.line.geometry = new g(), this.backLine.geometry = this.line.geometry, this.updateDomItems();
      return;
    }
    this.addIfNotExists(this.line, this.backLine);
    const t = i.flatMap((o) => [o.x, o.y, o.z]);
    t.length > 2 && (this.line.geometry.dispose(), this.line.geometry = new g(), this.backLine.geometry = this.line.geometry), this.line.geometry.setPositions(t), this.line.computeLineDistances(), this.updateDomItems(), this.needsRender = !0;
  }
  setResolution(e, i) {
    const t = this.line.material.resolution;
    (t.x !== e || t.y !== i) && (t.set(e, i), this.needsRender = !0);
    const o = this.backLine.material.resolution;
    (o.x !== e || o.y !== i) && (o.set(e, i), this.needsRender = !0);
  }
  setStyle(e) {
    var o, l, c;
    this.paramsStyle = m(m({}, this.paramsStyle), e), d(e.lineColor) && (this.line.material.three_color = new f.Color(e.lineColor), this.backLine.material.three_color = new f.Color(e.lineColor)), d(e.lineWidth) && (this.line.material.linewidth = e.lineWidth), d(e.dashed) && this.line.material.setDashed(e.dashed), d(e.opacity) && (this.line.material.opacity = e.opacity, this.backLine.material.opacity = this.line.material.opacity * 0.7), this.updateDomItems();
    const i = (o = e.occlusionVisibility) != null ? o : this.paramsStyle.occlusionVisibility, t = (c = (l = e.occlusionMode) != null ? l : this.paramsStyle.occlusionMode) != null ? c : "translucence";
    i ? t === "depthTest" ? (this.line.material.depthTest = !1, this.backLine.visible = !1) : t === "translucence" && (this.line.material.depthTest = !0, this.backLine.visible = !0, this.line.material.opacity === 1 ? this.backLine.material.setDashed(!0) : this.backLine.material.setDashed(this.line.material.dashed)) : (this.line.material.depthTest = !0, this.backLine.visible = !1), this.needsRender = !0;
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.opacityBeforeHighlight = this.line.material.opacity, this.line.material.opacity = this.opacityBeforeHighlight * b, this.backLine.material.opacity = this.backLine.material.opacity * b, this.needsRender = !0);
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, this.line.material.opacity = this.opacityBeforeHighlight, this.backLine.material.opacity = 0.2, this.needsRender = !0);
  }
  updateDomItems() {
    const e = () => {
      this.doms.forEach((t) => t.destroy()), this.doms = [];
    };
    if (!this.points || this.points.length < 2 || !this.paramsStyle.lengthEnable && !this.paramsStyle.tip)
      return e();
    if (!this.five)
      return console.error("Five not found");
    const i = this.points.map((t, o) => {
      if (o !== 0)
        return [this.points[o - 1], t];
    }).filter(d).map((t) => S(this, t));
    i.forEach(([t, o], l) => {
      var u;
      const c = R(t, o);
      this.doms[l] = (u = this.doms[l]) != null ? u : (() => {
        const n = new x(this.five);
        return n.intersectCheck = !1, n.simulate3D = !0, n;
      })(), this.doms[l].setPosition(c, [t, o]);
      const a = (n) => {
        this.doms[l].__text !== n && (this.doms[l].__text = n, n ? this.doms[l].container.innerHTML = v(n) : this.doms[l].container.innerHTML = "");
      };
      if (this.paramsStyle.tip)
        a(this.paramsStyle.tip);
      else {
        const n = t.distanceTo(o).toFixed(2);
        a(n === "0.00" ? null : n + "m");
      }
    }), this.doms.length > i.length && (this.doms.slice(i.length).forEach((t) => t.destroy()), this.doms.length = i.length);
  }
}
export {
  X as LineMesh
};
