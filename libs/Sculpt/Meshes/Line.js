var $ = Object.defineProperty, Y = Object.defineProperties;
var q = Object.getOwnPropertyDescriptors;
var P = Object.getOwnPropertySymbols;
var J = Object.prototype.hasOwnProperty, K = Object.prototype.propertyIsEnumerable;
var T = (a, n, e) => n in a ? $(a, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[n] = e, p = (a, n) => {
  for (var e in n || (n = {}))
    J.call(n, e) && T(a, e, n[e]);
  if (P)
    for (var e of P(n))
      K.call(n, e) && T(a, e, n[e]);
  return a;
}, M = (a, n) => Y(a, q(n));
var o = (a, n, e) => (T(a, typeof n != "symbol" ? n + "" : n, e), e);
import * as u from "three";
import { DEFAULT_LINE_COLOR as Q, DEFAULT_LINE_WIDTH as X, DEFAULT_HIGHLIGHT_OPACITY as Z } from "../typings/style.js";
import { anyPositionToVector3 as ee } from "../../shared-utils/positionToVector3.js";
import { IObject3D as te } from "../../shared-utils/three/IObject3D.js";
import { LightTag as ie } from "../../shared-utils/tag.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import { centerPoint as B } from "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { getLengthHTML as se } from "../utils/Meshes/getLengthHTML.js";
import { localToWorld as U } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import { getFiveFromParentChain as oe } from "../../shared-utils/five/getFiveFromParentChain.js";
import { LineGeometry as E } from "../../shared-utils/three/core/LineGeometry.js";
import { LineMaterial as ne } from "../../shared-utils/three/core/LineMaterial.js";
import { THREE_Line2 as V } from "../../shared-utils/three/core/Line2.js";
import { LineMaterial2 as he } from "../../shared-utils/three/core/LineMaterial2.js";
import { transformUnit as re } from "../utils/unit.js";
import { RenderDom as L } from "../utils/renderDom.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../shared-utils/three/blink.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../vendor/earcut/src/earcut.js";
import { notNil as m } from "../../shared-utils/isNil.js";
import "../../shared-utils/five/FivePuppet.js";
class We extends te {
  constructor(e) {
    var r, h, f;
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
    o(this, "fiveListenersInited", !1);
    o(this, "fiveRef");
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
    this.paramsStyle = p({ dashed: !1, lineOpacity: 1 }, e), this.geometry = new E();
    const i = {
      color: new u.Color((r = e == null ? void 0 : e.lineColor) != null ? r : Q),
      linewidth: (h = e == null ? void 0 : e.lineWidth) != null ? h : X,
      dashScale: 1,
      dashSize: 0.02,
      gapSize: 0.02,
      opacity: (f = e == null ? void 0 : e.lineOpacity) != null ? f : 1,
      depthWrite: !1,
      transparent: !0
    }, s = new ne(M(p({}, i), { dashed: !1, depthTest: !0 })), t = new he(M(p({}, i), { dashed: !0, depthTest: !1 }));
    this.line1 = new V(this.geometry, s), this.line2 = new V(this.geometry, t), this.line1.renderOrder = 2, this.line2.renderOrder = 2, this.line1.name = "line1", this.line2.name = "line2", this.add(this.line1), this.initFiveListeners(), e && this.setStyle(e), e != null && e.points && this.setPoints(e.points), this.addEventListener("removed", () => {
      this.removeFiveListeners(), L.cacheObject.delete(this), L.checkDom(this);
    }), this.addEventListener("added", () => {
      this.initFiveListeners(), L.cacheObject.add(this);
    }), L.checkDomEveryFrame();
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
    return new u.Color((e = this.line1.material.three_color) != null ? e : this.paramsStyle.lineColor);
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
    return oe(this);
  }
  set geometry(e) {
    var i;
    this._geometry = e, this.line1 && (this.line1.geometry = e), this.line2 && (this.line2.geometry = e), (i = this.line1) == null || i.computeLineDistances();
  }
  get geometry() {
    return this._geometry;
  }
  initFiveListeners() {
    var s;
    const e = this.five;
    if (!e || this.fiveListenersInited)
      return;
    this.fiveListenersInited = !0, this.fiveRef = e;
    const i = (s = e.renderer) == null ? void 0 : s.getSize(new u.Vector2());
    i && this.setResolution(i.width, i.height), e.on("cameraUpdate", this.onCameraUpdate), e.on("cameraFovUpdate", this.onCameraUpdate), e.on("panoArrived", this.onPanoArrived);
  }
  removeFiveListeners() {
    this.fiveRef && (this.fiveRef.off("cameraUpdate", this.onCameraUpdate), this.fiveRef.off("cameraFovUpdate", this.onCameraUpdate), this.fiveRef.off("panoArrived", this.onPanoArrived), this.fiveRef = void 0), this.fiveListenersInited = !1;
  }
  updateMatrixWorld(e) {
    var i;
    if (super.updateMatrixWorld(e), this.points) {
      const s = (i = U(this, this.points)) == null ? void 0 : i.map((t) => t.toArray().join(",")).join(",");
      s !== this.lastRenderDomItem && (this.updateDomItems(), this.lastRenderDomItem = s);
    }
  }
  setPoints(e) {
    if (this.points.length === 0 && e.length === 0)
      return;
    const i = e.map(ee).filter(m);
    if (this.points = i, i.length < 2) {
      const t = new E();
      this.line1.geometry = t, this.line2.geometry = t, this.updateDomItems();
      return;
    }
    const s = i.flatMap((t) => [t.x, t.y, t.z]);
    if (s.length > 2) {
      this.line1.geometry.dispose();
      const t = new E();
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
    var t, r, h, f;
    if (this.paramsStyle = p(p({}, this.paramsStyle), e), m(e.lineColor)) {
      const d = new u.Color(e.lineColor);
      this.line1.material.three_color = d, this.line2.material.three_color = d;
    }
    m(e.lineWidth) && (this.line1.material.linewidth = e.lineWidth, this.line2.material.linewidth = e.lineWidth), m(e.dashed) && (this.line1.material.dashed = e.dashed), m(e.lineOpacity) && (this.line1.material.opacity = e.lineOpacity, this.line2.material.opacity = e.lineOpacity), this.updateDomItems({ force: !0 });
    const i = (r = (t = e.occlusionVisibility) != null ? t : this.paramsStyle.occlusionVisibility) != null ? r : !0, s = (f = (h = e.occlusionMode) != null ? h : this.paramsStyle.occlusionMode) != null ? f : "translucence";
    i ? this.dashed ? (this.remove(this.line2), this.line1.material.dashed = !0, this.line1.material.depthTest = !1) : s === "depthTest" ? (this.remove(this.line2), this.line1.material.dashed = !1, this.line1.material.depthTest = !1) : s === "translucence" && (this.line1.material.depthTest = !0, this.line2.material.depthTest = !1, this.line1.material.dashed = !0, this.line2.material.dashed = !0, this.addIfNotExists(this.line2)) : (this.remove(this.line2), this.line1.material.depthTest = !0, this.line1.material.dashed = this.paramsStyle.dashed), this.doms.forEach((d) => d.intersectCheck = !i), this.needsRender = !0;
  }
  highlight(e) {
    var i, s;
    if (this.highlighted = !0, e != null && e.color) {
      const t = new u.Color(e.color);
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
    const s = this.points.map((t, r) => r !== 0 ? [this.points[r - 1], t] : null).filter(m).map((t) => U(this, t));
    s.forEach(([t, r], h) => {
      var H;
      const f = B(t, r);
      this.doms[h] = (H = this.doms[h]) != null ? H : (() => {
        var v;
        const l = new ie(this.five), g = (v = this.paramsStyle.occlusionVisibility) != null ? v : !0;
        return l.intersectCheck = !g, l.simulate3D = !0, l;
      })(), this.doms[h].setPosition(f, [t, r]);
      const d = (l, g) => {
        var _, I, D;
        const v = (_ = g == null ? void 0 : g.force) != null ? _ : !1;
        if (!(this.doms[h].__text === l && !v))
          if (this.doms[h].__text = l, l instanceof HTMLElement)
            this.doms[h].container.innerHTML = "", this.doms[h].container.appendChild(l);
          else if (l) {
            const R = (() => {
              if (!this.five || !this.five.camera)
                return 0;
              const y = this.five.getElement();
              if (!y)
                return 0;
              const c = y.clientWidth, S = y.clientHeight, C = c / 2, b = S / 2, O = t.clone().project(this.five.camera), F = r.clone().project(this.five.camera), w = {
                x: O.x * C,
                y: O.y * b
              }, W = {
                x: F.x * C,
                y: F.y * b
              };
              return Math.sqrt(Math.pow(W.x - w.x, 2) + Math.pow(W.y - w.y, 2));
            })(), A = (() => !this.five || !this.five.camera ? 20 : B(t, r).distanceTo(this.five.camera.position))(), j = ((D = (I = this.five) == null ? void 0 : I.camera) == null ? void 0 : D.fov) || 60, z = 2 * Math.tan(0.5 * j / 180 * Math.PI), k = `--distance-scale: ${Math.max(Math.min(1 - z * A / 40, 1), 0)};`, G = (y) => {
              const c = document.createElement("div");
              c.classList.add("LineLengthTag"), c.style.visibility = "hidden", c.style.position = "absolute", c.style.padding = "2px 8px", c.style.fontFamily = "Arial-BoldMT", c.style.fontSize = "14px", c.innerText = y, document.body.appendChild(c);
              const S = c.offsetWidth;
              return document.body.removeChild(c), S;
            };
            let x = 0;
            const N = G(l);
            R > 0 && N > R && (x = -20), this.doms[h].container.innerHTML = se(l, {
              style: `${k} ${this.paramsStyle.cssStyle || ""}`,
              offsetY: x
            });
          } else
            this.doms[h].container.innerHTML = "";
      };
      if (this.paramsStyle.tip)
        d(this.paramsStyle.tip, e);
      else {
        const l = re(t.distanceTo(r), this.paramsStyle.lengthUnit, this.paramsStyle.precision);
        d(l || null, e);
      }
    }), this.doms.length > s.length && (this.doms.slice(s.length).forEach((t) => t.destroy()), this.doms.length = s.length);
  }
}
export {
  We as LineMesh
};
