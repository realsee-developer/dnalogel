var $ = Object.defineProperty, Y = Object.defineProperties;
var q = Object.getOwnPropertyDescriptors;
var B = Object.getOwnPropertySymbols;
var J = Object.prototype.hasOwnProperty, K = Object.prototype.propertyIsEnumerable;
var L = (a, n, e) => n in a ? $(a, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[n] = e, p = (a, n) => {
  for (var e in n || (n = {}))
    J.call(n, e) && L(a, e, n[e]);
  if (B)
    for (var e of B(n))
      K.call(n, e) && L(a, e, n[e]);
  return a;
}, E = (a, n) => Y(a, q(n));
var o = (a, n, e) => (L(a, typeof n != "symbol" ? n + "" : n, e), e);
import * as v from "three";
import { DEFAULT_LINE_COLOR as Q, DEFAULT_LINE_WIDTH as X, DEFAULT_HIGHLIGHT_OPACITY as Z } from "../typings/style.js";
import { anyPositionToVector3 as ee } from "../../shared-utils/positionToVector3.js";
import { IObject3D as te } from "../../shared-utils/three/IObject3D.js";
import { LightTag as ie } from "../../shared-utils/tag.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import { centerPoint as U } from "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { getLengthHTML as se } from "../utils/Meshes/getLengthHTML.js";
import { localToWorld as V } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import { LineGeometry as H } from "../../shared-utils/three/core/LineGeometry.js";
import { LineMaterial as oe } from "../../shared-utils/three/core/LineMaterial.js";
import { THREE_Line2 as F } from "../../shared-utils/three/core/Line2.js";
import { LineMaterial2 as ne } from "../../shared-utils/three/core/LineMaterial2.js";
import { transformUnit as le } from "../utils/unit.js";
import { RenderDom as T } from "../utils/renderDom.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { notNil as m } from "../../shared-utils/isNil.js";
import "../../shared-utils/five/FivePuppet.js";
class Oe extends te {
  constructor(e) {
    var h, l, f, d;
    super();
    o(this, "name", "LineMesh");
    o(this, "type", "Line2");
    o(this, "object");
    o(this, "points", []);
    o(this, "doms", []);
    o(this, "highlighted", !1);
    o(this, "_geometry");
    o(this, "line1");
    o(this, "line2");
    o(this, "opacityBeforeHighlight");
    o(this, "colorBeforeHighlight");
    o(this, "paramsStyle", {});
    o(this, "lastRenderDomItem");
    o(this, "lastFOV");
    o(this, "_onAdded", () => {
      this.doms.length === 0 && this.paramsStyle.lengthEnable && this.updateDomItems();
    });
    o(this, "_onRemoved", () => {
      this.doms.forEach((e) => e.destroy()), this.doms = [];
    });
    o(this, "_onShowed", () => {
      this.doms.forEach((e) => e.container.style.display = "block");
    });
    o(this, "_onHidden", () => {
      this.doms.forEach((e) => e.container.style.display = "none");
    });
    // Handle camera updates (zoom changes)
    o(this, "onCameraUpdate", () => {
      var e;
      (e = this.five) != null && e.camera && this.lastFOV !== this.five.camera.fov && (this.lastFOV = this.five.camera.fov, this.updateDomItems({ force: !0 }));
    });
    // Handle panorama point changes
    o(this, "onPanoArrived", () => {
      setTimeout(() => this.updateDomItems({ force: !0 }), 100);
    });
    this.paramsStyle = p({ dashed: !1, lineOpacity: 1 }, e), this.geometry = new H();
    const i = {
      color: new v.Color((h = e == null ? void 0 : e.lineColor) != null ? h : Q),
      linewidth: (l = e == null ? void 0 : e.lineWidth) != null ? l : X,
      dashScale: 1,
      dashSize: 0.02,
      gapSize: 0.02,
      opacity: (f = e == null ? void 0 : e.lineOpacity) != null ? f : 1,
      depthWrite: !1,
      transparent: !0
    }, s = new oe(E(p({}, i), { dashed: !1, depthTest: !0 })), t = new ne(E(p({}, i), { dashed: !0, depthTest: !1 }));
    if (this.line1 = new F(this.geometry, s), this.line2 = new F(this.geometry, t), this.line1.renderOrder = 2, this.line2.renderOrder = 2, this.line1.name = "line1", this.line2.name = "line2", this.add(this.line1), this.five) {
      const y = (d = this.five.renderer) == null ? void 0 : d.getSize(new v.Vector2());
      y && this.setResolution(y.width, y.height), this.five.on("cameraUpdate", this.onCameraUpdate), this.five.on("cameraFovUpdate", this.onCameraUpdate), this.five.on("panoArrived", this.onPanoArrived);
    }
    e && this.setStyle(e), e != null && e.points && this.setPoints(e.points), this.addEventListener("removed", () => {
      this.five && (this.five.off("cameraUpdate", this.onCameraUpdate), this.five.off("cameraFovUpdate", this.onCameraUpdate), this.five.off("panoArrived", this.onPanoArrived)), T.cacheObject.delete(this), T.checkDom(this);
    }), this.addEventListener("added", () => {
      T.cacheObject.add(this);
    }), T.checkDomEveryFrame();
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
    return new v.Color((e = this.line1.material.three_color) != null ? e : this.paramsStyle.lineColor);
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
    var i, s;
    const e = (s = (i = window.globalModules) == null ? void 0 : i.five) != null ? s : window.$five;
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
      const s = (i = V(this, this.points)) == null ? void 0 : i.map((t) => t.toArray().join(",")).join(",");
      s !== this.lastRenderDomItem && (this.updateDomItems(), this.lastRenderDomItem = s);
    }
  }
  setPoints(e) {
    if (this.points.length === 0 && e.length === 0)
      return;
    const i = e.map(ee).filter(m);
    if (this.points = i, i.length < 2) {
      const t = new H();
      this.line1.geometry = t, this.line2.geometry = t, this.updateDomItems();
      return;
    }
    const s = i.flatMap((t) => [t.x, t.y, t.z]);
    if (s.length > 2) {
      this.line1.geometry.dispose();
      const t = new H();
      this.line1.geometry = t, this.line2.geometry = t;
    }
    this.line1.geometry.setPositions(s), this.line1.computeLineDistances(), this.updateDomItems(), this.needsRender = !0;
  }
  setResolution(e, i) {
    const s = this.line1.material.resolution;
    (s.x !== e || s.y !== i) && (s.set(e, i), this.needsRender = !0);
    const t = this.line2.material.resolution;
    (t.x !== e || t.y !== i) && (t.set(e, i), this.needsRender = !0);
  }
  setStyle(e) {
    var t, h, l, f;
    if (this.paramsStyle = p(p({}, this.paramsStyle), e), m(e.lineColor)) {
      const d = new v.Color(e.lineColor);
      this.line1.material.three_color = d, this.line2.material.three_color = d;
    }
    m(e.lineWidth) && (this.line1.material.linewidth = e.lineWidth, this.line2.material.linewidth = e.lineWidth), m(e.dashed) && (this.line1.material.dashed = e.dashed), m(e.lineOpacity) && (this.line1.material.opacity = e.lineOpacity, this.line2.material.opacity = e.lineOpacity), this.updateDomItems({ force: !0 });
    const i = (h = (t = e.occlusionVisibility) != null ? t : this.paramsStyle.occlusionVisibility) != null ? h : !0, s = (f = (l = e.occlusionMode) != null ? l : this.paramsStyle.occlusionMode) != null ? f : "translucence";
    i ? this.dashed ? (this.remove(this.line2), this.line1.material.dashed = !0, this.line1.material.depthTest = !1) : s === "depthTest" ? (this.remove(this.line2), this.line1.material.dashed = !1, this.line1.material.depthTest = !1) : s === "translucence" && (this.line1.material.depthTest = !0, this.line2.material.depthTest = !1, this.line1.material.dashed = !0, this.line2.material.dashed = !0, this.addIfNotExists(this.line2)) : (this.remove(this.line2), this.line1.material.depthTest = !0, this.line1.material.dashed = this.paramsStyle.dashed), this.doms.forEach((d) => d.intersectCheck = !i), this.needsRender = !0;
  }
  highlight(e) {
    var i, s;
    if (this.highlighted = !0, e != null && e.color) {
      const t = new v.Color(e.color);
      this.colorBeforeHighlight = (i = this.colorBeforeHighlight) != null ? i : this.line1.material.three_color, this.line1.material.three_color = t, this.line2.material.three_color = t;
    } else {
      this.opacityBeforeHighlight = (s = this.opacityBeforeHighlight) != null ? s : this.line1.material.opacity;
      const t = this.opacityBeforeHighlight * Z;
      this.line1.material.opacity = t, this.line2.material.opacity = t;
    }
    this.needsRender = !0;
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, m(this.opacityBeforeHighlight) && (this.line1.material.opacity = this.opacityBeforeHighlight, this.line2.material.opacity = this.line1.material.opacity, this.opacityBeforeHighlight = void 0), m(this.colorBeforeHighlight) && (this.line1.material.three_color = this.colorBeforeHighlight, this.line2.material.three_color = this.colorBeforeHighlight, this.colorBeforeHighlight = void 0), this.needsRender = !0);
  }
  updateDomItems(e) {
    const i = () => {
      this.doms.forEach((t) => t.destroy()), this.doms = [];
    };
    if (!this.points || this.points.length < 2 || !this.paramsStyle.lengthEnable && !this.paramsStyle.tip)
      return i();
    if (!this.five)
      return console.error("Five not found");
    const s = this.points.map((t, h) => h !== 0 ? [this.points[h - 1], t] : null).filter(m).map((t) => V(this, t));
    s.forEach(([t, h], l) => {
      var y;
      const f = U(t, h);
      this.doms[l] = (y = this.doms[l]) != null ? y : (() => {
        var S;
        const r = new ie(this.five), u = (S = this.paramsStyle.occlusionVisibility) != null ? S : !0;
        return r.intersectCheck = !u, r.simulate3D = !0, r;
      })(), this.doms[l].setPosition(f, [t, h]);
      const d = (r, u) => {
        var _, D, b;
        const S = (_ = u == null ? void 0 : u.force) != null ? _ : !1;
        if (!(this.doms[l].__text === r && !S))
          if (this.doms[l].__text = r, r instanceof HTMLElement)
            this.doms[l].container.innerHTML = "", this.doms[l].container.appendChild(r);
          else if (r) {
            const w = (() => {
              if (!this.five || !this.five.camera)
                return 0;
              const g = this.five.getElement();
              if (!g)
                return 0;
              const c = g.clientWidth, M = g.clientHeight, C = c / 2, I = M / 2, O = t.clone().project(this.five.camera), W = h.clone().project(this.five.camera), P = {
                x: O.x * C,
                y: O.y * I
              }, R = {
                x: W.x * C,
                y: W.y * I
              };
              return Math.sqrt(Math.pow(R.x - P.x, 2) + Math.pow(R.y - P.y, 2));
            })(), A = (() => !this.five || !this.five.camera ? 20 : U(t, h).distanceTo(this.five.camera.position))(), j = ((b = (D = this.five) == null ? void 0 : D.camera) == null ? void 0 : b.fov) || 60, z = 2 * Math.tan(0.5 * j / 180 * Math.PI), k = `--distance-scale: ${Math.max(Math.min(1 - z * A / 40, 1), 0)};`, G = (g) => {
              const c = document.createElement("div");
              c.classList.add("LineLengthTag"), c.style.visibility = "hidden", c.style.position = "absolute", c.style.padding = "2px 8px", c.style.fontFamily = "Arial-BoldMT", c.style.fontSize = "14px", c.innerText = g, document.body.appendChild(c);
              const M = c.offsetWidth;
              return document.body.removeChild(c), M;
            };
            let x = 0;
            const N = G(r);
            w > 0 && N > w && (x = -20), this.doms[l].container.innerHTML = se(r, {
              style: `${k} ${this.paramsStyle.cssStyle || ""}`,
              offsetY: x
            });
          } else
            this.doms[l].container.innerHTML = "";
      };
      if (this.paramsStyle.tip)
        d(this.paramsStyle.tip, e);
      else {
        const r = le(t.distanceTo(h), this.paramsStyle.lengthUnit);
        d(r || null, e);
      }
    }), this.doms.length > s.length && (this.doms.slice(s.length).forEach((t) => t.destroy()), this.doms.length = s.length);
  }
}
export {
  Oe as LineMesh
};
