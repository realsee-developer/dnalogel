var T = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var m = (r, o, e) => o in r ? T(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, g = (r, o) => {
  for (var e in o || (o = {}))
    w.call(o, e) && m(r, e, o[e]);
  if (L)
    for (var e of L(o))
      k.call(o, e) && m(r, e, o[e]);
  return r;
};
var h = (r, o, e) => (m(r, typeof o != "symbol" ? o + "" : o, e), e);
import * as f from "three";
import { DEFAULT_LINE_COLOR as p, DEFAULT_LINE_WIDTH as C, DEFAULT_HIGHLIGHT_OPACITY as S } from "../typings/style.js";
import { LineMaterial as H, THREE_Line2 as I } from "../../shared-utils/five/FiveLine.js";
import { LineGeometry as b } from "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import { anyPositionToVector3 as v } from "../../shared-utils/positionToVector3.js";
import { IObject3D as x } from "../../shared-utils/three/IObject3D.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import { centerPoint as R } from "../../shared-utils/three/centerPoint.js";
import { LightTag as W } from "../../shared-utils/tag.js";
import { removeAllTag as O } from "../utils/removeAllTag.js";
import { getLengthHTML as P } from "../utils/Meshes/getLengthHTML.js";
import { applyObjectMatrixWorld as _ } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/three/core/Sphere.js";
import "animejs";
import { notNil as c } from "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
class D extends H {
  constructor(e) {
    var i, t;
    super(e);
    h(this, "_three_color");
    c(e == null ? void 0 : e.color) && (this.three_color = (i = e == null ? void 0 : e.color) != null ? i : 16777215), Object.keys(e).forEach((s) => {
      ["color", "dashed", "dashScale", "dashSize", "gapSize", "resolution"].includes(s) || s in this && (this[s] = e[s]);
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
class E extends I {
  constructor(e, i) {
    super(e, i);
    h(this, "name", "Line3");
  }
}
class ee extends x {
  constructor(e) {
    var l, d, a, u, n;
    super();
    h(this, "name", "LineMesh");
    h(this, "points");
    h(this, "doms", []);
    h(this, "highlighted", !1);
    h(this, "line");
    h(this, "backLine");
    h(this, "opacityBeforeHighlight");
    h(this, "paramsStyle", {});
    h(this, "lastRenderDomItem");
    h(this, "_visible", !0);
    this.paramsStyle = e != null ? e : {};
    const i = new b(), t = new D({
      color: new f.Color((l = e == null ? void 0 : e.lineColor) != null ? l : p),
      linewidth: (d = e == null ? void 0 : e.lineWidth) != null ? d : C,
      dashScale: 40,
      opacity: (a = e == null ? void 0 : e.opacity) != null ? a : 1,
      transparent: !0,
      dashed: (u = e == null ? void 0 : e.dashed) != null ? u : !1
    }), s = new D({
      color: new f.Color((n = e == null ? void 0 : e.lineColor) != null ? n : p),
      linewidth: t.linewidth * 0.9,
      dashScale: t.dashScale,
      opacity: t.opacity * 0.7,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0,
      resolution: t.resolution
    });
    this.line = new E(i, t), this.backLine = new E(i, s), this.line.renderOrder = 1, this.backLine.renderOrder = 0, this.line.name = "lineFrontMaterial", this.backLine.name = "lineBackMaterial", e && this.setStyle(e), e != null && e.points && this.setPoints(e.points), this.addEventListener("removed", () => {
      O(this);
    }), Object.defineProperty(this, "visible", {
      set: (y) => {
        this.doms && this.doms.forEach((M) => M.container.style.visibility = y ? "visible" : "hidden"), this._visible = y;
      },
      get: () => this._visible
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
      const t = (i = _(this, this.points)) == null ? void 0 : i.map((s) => s.toArray().join(",")).join(",");
      t !== this.lastRenderDomItem && (this.updateDomItems(), this.lastRenderDomItem = t);
    }
  }
  setPoints(e) {
    const i = e.map(v).filter(c);
    if (this.points = i, i.length < 2) {
      this.line.geometry = new b(), this.backLine.geometry = this.line.geometry, this.updateDomItems();
      return;
    }
    this.addIfNotExists(this.line, this.backLine);
    const t = i.flatMap((s) => [s.x, s.y, s.z]);
    t.length > 2 && (this.line.geometry.dispose(), this.line.geometry = new b(), this.backLine.geometry = this.line.geometry), this.line.geometry.setPositions(t), this.line.computeLineDistances(), this.updateDomItems(), this.needsRender = !0;
  }
  setResolution(e, i) {
    const t = this.line.material.resolution;
    (t.x !== e || t.y !== i) && (t.set(e, i), this.needsRender = !0);
    const s = this.backLine.material.resolution;
    (s.x !== e || s.y !== i) && (s.set(e, i), this.needsRender = !0);
  }
  setStyle(e) {
    var s, l, d;
    this.paramsStyle = g(g({}, this.paramsStyle), e), c(e.lineColor) && (this.line.material.three_color = new f.Color(e.lineColor), this.backLine.material.three_color = new f.Color(e.lineColor)), c(e.lineWidth) && (this.line.material.linewidth = e.lineWidth), c(e.dashed) && this.line.material.setDashed(e.dashed), c(e.opacity) && (this.line.material.opacity = e.opacity, this.backLine.material.opacity = this.line.material.opacity * 0.7), this.updateDomItems();
    const i = (s = e.occlusionVisibility) != null ? s : this.paramsStyle.occlusionVisibility, t = (d = (l = e.occlusionMode) != null ? l : this.paramsStyle.occlusionMode) != null ? d : "translucence";
    i ? t === "depthTest" ? (this.line.material.depthTest = !1, this.backLine.visible = !1) : t === "translucence" && (this.line.material.depthTest = !0, this.backLine.visible = !0, this.line.material.opacity === 1 ? this.backLine.material.setDashed(!0) : this.backLine.material.setDashed(this.line.material.dashed)) : (this.line.material.depthTest = !0, this.backLine.visible = !1), this.needsRender = !0;
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.opacityBeforeHighlight = this.line.material.opacity, this.line.material.opacity = this.opacityBeforeHighlight * S, this.backLine.material.opacity = this.backLine.material.opacity * S, this.needsRender = !0);
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
    const i = this.points.map((t, s) => {
      if (s !== 0)
        return [this.points[s - 1], t];
    }).filter(c).map((t) => _(this, t));
    i.forEach(([t, s], l) => {
      var u;
      const d = R(t, s);
      this.doms[l] = (u = this.doms[l]) != null ? u : (() => {
        const n = new W(this.five);
        return n.intersectCheck = !1, n.simulate3D = !0, n;
      })(), this.doms[l].setPosition(d, [t, s]);
      const a = (n) => {
        var y;
        this.doms[l].__text !== n && (this.doms[l].__text = n, n ? this.doms[l].container.innerHTML = P(n, {
          style: `color: #${c((y = this.style) == null ? void 0 : y.lineColor) ? new f.Color(this.style.lineColor).getHexString() : "ffffff"}`
        }) : this.doms[l].container.innerHTML = "");
      };
      if (this.paramsStyle.tip)
        a(this.paramsStyle.tip);
      else {
        const n = t.distanceTo(s).toFixed(2);
        a(n === "0.00" ? null : n + "m");
      }
    }), this.doms.length > i.length && (this.doms.slice(i.length).forEach((t) => t.destroy()), this.doms.length = i.length);
  }
}
export {
  ee as LineMesh
};
