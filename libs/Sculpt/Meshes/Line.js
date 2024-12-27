var _ = Object.defineProperty, w = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var p = (r, o, e) => o in r ? _(r, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[o] = e, f = (r, o) => {
  for (var e in o || (o = {}))
    b.call(o, e) && p(r, e, o[e]);
  if (S)
    for (var e of S(o))
      v.call(o, e) && p(r, e, o[e]);
  return r;
}, g = (r, o) => w(r, E(o));
var h = (r, o, e) => (p(r, typeof o != "symbol" ? o + "" : o, e), e);
import * as y from "three";
import { DEFAULT_LINE_COLOR as D, DEFAULT_LINE_WIDTH as I, DEFAULT_HIGHLIGHT_OPACITY as H } from "../typings/style.js";
import { anyPositionToVector3 as C } from "../../shared-utils/positionToVector3.js";
import { IObject3D as O } from "../../shared-utils/three/IObject3D.js";
import { LightTag as R } from "../../shared-utils/tag.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import { centerPoint as W } from "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { removeAllTag as x } from "../utils/removeAllTag.js";
import { getLengthHTML as P } from "../utils/Meshes/getLengthHTML.js";
import { localToWorld as L } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import { LineGeometry as T } from "../../shared-utils/three/core/LineGeometry.js";
import { LineMaterial as V } from "../../shared-utils/three/core/LineMaterial.js";
import { THREE_Line2 as M } from "../../shared-utils/three/core/Line2.js";
import { LineMaterial2 as A } from "../../shared-utils/three/core/LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import { notNil as c } from "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/five/FivePuppet.js";
class le extends O {
  constructor(e) {
    var l, m, a, d;
    super();
    h(this, "name", "LineMesh");
    h(this, "type", "Line2");
    h(this, "points", []);
    h(this, "doms", []);
    h(this, "highlighted", !1);
    h(this, "_geometry");
    h(this, "line1");
    h(this, "line2");
    h(this, "opacityBeforeHighlight");
    h(this, "paramsStyle", {});
    h(this, "lastRenderDomItem");
    h(this, "_visible", !0);
    this.paramsStyle = f({ dashed: !1 }, e), this.geometry = new T();
    const i = {
      color: new y.Color((l = e == null ? void 0 : e.lineColor) != null ? l : D),
      linewidth: (m = e == null ? void 0 : e.lineWidth) != null ? m : I,
      dashScale: 40,
      opacity: (a = e == null ? void 0 : e.lineOpacity) != null ? a : 1,
      depthWrite: !1,
      transparent: !0
    }, t = new V(g(f({}, i), { dashed: !1, depthTest: !0 })), s = new A(g(f({}, i), { dashed: !0, depthTest: !1 }));
    if (this.line1 = new M(this.geometry, t), this.line2 = new M(this.geometry, s), this.line1.renderOrder = 2, this.line2.renderOrder = 2, this.line1.name = "line1", this.line2.name = "line2", this.add(this.line1), this.five) {
      const n = (d = this.five.renderer) == null ? void 0 : d.getSize(new y.Vector2());
      n && this.setResolution(n.width, n.height);
    }
    e && this.setStyle(e), e != null && e.points && this.setPoints(e.points), this.addEventListener("removed", () => {
      x(this);
    }), Object.defineProperty(this, "visible", {
      set: (n) => {
        this.doms && this.doms.forEach((u) => u.container.style.display = n ? "block" : "none"), this._visible = n;
      },
      get: () => this._visible
    });
  }
  get style() {
    return {
      lineColor: this.color,
      lineWidth: this.lineWidth,
      lineOpacity: this.lineOpacity,
      dashed: this.dashed,
      occlusionVisibility: this.occlusionVisibility,
      occlusionMode: this.occlusionMode,
      lengthEnable: this.paramsStyle.lengthEnable,
      tip: this.paramsStyle.tip
    };
  }
  get lineOpacity() {
    var e;
    return (e = this.line1.material.opacity) != null ? e : this.paramsStyle.lineOpacity;
  }
  get lineWidth() {
    var e;
    return (e = this.line1.material.linewidth) != null ? e : this.paramsStyle.lineWidth;
  }
  get color() {
    var e;
    return new y.Color((e = this.line1.material.three_color) != null ? e : this.paramsStyle.lineColor);
  }
  get dashed() {
    return this.paramsStyle.dashed;
  }
  get occlusionVisibility() {
    return this.paramsStyle.occlusionVisibility;
  }
  get occlusionMode() {
    return this.paramsStyle.occlusionMode;
  }
  get five() {
    var i, t;
    const e = (t = (i = window.globalModules) == null ? void 0 : i.five) != null ? t : window.$five;
    return e || console.error("请先调用 Sculpt.modules.init(five) "), e;
  }
  set geometry(e) {
    var i;
    this._geometry = e, this.line1 && (this.line1.geometry = e), this.line2 && (this.line2.geometry = e), (i = this.line1) == null || i.computeLineDistances();
  }
  get geometry() {
    return this._geometry;
  }
  updateMatrixWorld(e) {
    var i;
    if (super.updateMatrixWorld(e), this.points) {
      const t = (i = L(this, this.points)) == null ? void 0 : i.map((s) => s.toArray().join(",")).join(",");
      t !== this.lastRenderDomItem && (this.updateDomItems(), this.lastRenderDomItem = t);
    }
  }
  setPoints(e) {
    if (this.points.length === 0 && e.length === 0)
      return;
    const i = e.map(C).filter(c);
    if (this.points = i, i.length < 2) {
      const s = new T();
      this.line1.geometry = s, this.line2.geometry = s, this.updateDomItems();
      return;
    }
    const t = i.flatMap((s) => [s.x, s.y, s.z]);
    if (t.length > 2) {
      this.line1.geometry.dispose();
      const s = new T();
      this.line1.geometry = s, this.line2.geometry = s;
    }
    this.line1.geometry.setPositions(t), this.line1.computeLineDistances(), this.updateDomItems(), this.needsRender = !0;
  }
  setResolution(e, i) {
    const t = this.line1.material.resolution;
    (t.x !== e || t.y !== i) && (t.set(e, i), this.needsRender = !0);
    const s = this.line2.material.resolution;
    (s.x !== e || s.y !== i) && (s.set(e, i), this.needsRender = !0);
  }
  setStyle(e) {
    var s, l, m, a;
    if (this.paramsStyle = f(f({}, this.paramsStyle), e), c(e.lineColor)) {
      const d = new y.Color(e.lineColor);
      this.line1.material.three_color = d, this.line2.material.three_color = d;
    }
    c(e.lineWidth) && (this.line1.material.linewidth = e.lineWidth, this.line2.material.linewidth = e.lineWidth), c(e.dashed) && (this.line1.material.dashed = e.dashed), c(e.lineOpacity) && (this.line1.material.opacity = e.lineOpacity, this.line2.material.opacity = e.lineOpacity), this.updateDomItems();
    const i = (l = (s = e.occlusionVisibility) != null ? s : this.paramsStyle.occlusionVisibility) != null ? l : !0, t = (a = (m = e.occlusionMode) != null ? m : this.paramsStyle.occlusionMode) != null ? a : "translucence";
    i ? this.dashed ? (this.remove(this.line2), this.line1.material.dashed = !0, this.line1.material.depthTest = !1) : t === "depthTest" ? (this.remove(this.line2), this.line1.material.dashed = !1, this.line1.material.depthTest = !1) : t === "translucence" && (this.line1.material.depthTest = !0, this.line2.material.depthTest = !1, this.line1.material.dashed = !0, this.line2.material.dashed = !0, this.addIfNotExists(this.line2)) : (this.remove(this.line2), this.line1.material.depthTest = !0, this.line1.material.dashed = this.paramsStyle.dashed), this.needsRender = !0;
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.opacityBeforeHighlight = this.line1.material.opacity, this.line1.material.opacity = this.opacityBeforeHighlight * H, this.line2.material.opacity = this.line1.material.opacity, this.needsRender = !0);
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, this.line1.material.opacity = this.opacityBeforeHighlight, this.line2.material.opacity = this.line1.material.opacity, this.needsRender = !0);
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
    }).filter(c).map((t) => L(this, t));
    i.forEach(([t, s], l) => {
      var d;
      const m = W(t, s);
      this.doms[l] = (d = this.doms[l]) != null ? d : (() => {
        const n = new R(this.five);
        return n.intersectCheck = !1, n.simulate3D = !0, n;
      })(), this.doms[l].setPosition(m, [t, s]);
      const a = (n) => {
        var u;
        this.doms[l].__text !== n && (this.doms[l].__text = n, n instanceof HTMLElement ? (this.doms[l].container.innerHTML = "", this.doms[l].container.appendChild(n)) : n ? this.doms[l].container.innerHTML = P(n, {
          style: `color: #${c((u = this.style) == null ? void 0 : u.lineColor) ? new y.Color(this.style.lineColor).getHexString() : "ffffff"}`
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
  le as LineMesh
};
