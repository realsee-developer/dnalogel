var b = Object.defineProperty, v = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var H = (r, l, e) => l in r ? b(r, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[l] = e, y = (r, l) => {
  for (var e in l || (l = {}))
    O.call(l, e) && H(r, e, l[e]);
  if (M)
    for (var e of M(l))
      C.call(l, e) && H(r, e, l[e]);
  return r;
}, _ = (r, l) => v(r, I(l));
var s = (r, l, e) => (H(r, typeof l != "symbol" ? l + "" : l, e), e);
import * as g from "three";
import { DEFAULT_LINE_COLOR as R, DEFAULT_LINE_WIDTH as B, DEFAULT_HIGHLIGHT_OPACITY as W } from "../typings/style.js";
import { anyPositionToVector3 as x } from "../../shared-utils/positionToVector3.js";
import { IObject3D as V } from "../../shared-utils/three/IObject3D.js";
import { LightTag as P } from "../../shared-utils/tag.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import { centerPoint as j } from "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { getLengthHTML as A } from "../utils/Meshes/getLengthHTML.js";
import { localToWorld as w } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import { LineGeometry as E } from "../../shared-utils/three/core/LineGeometry.js";
import { LineMaterial as k } from "../../shared-utils/three/core/LineMaterial.js";
import { THREE_Line2 as D } from "../../shared-utils/three/core/Line2.js";
import { LineMaterial2 as z } from "../../shared-utils/three/core/LineMaterial2.js";
import { transformUnit as F } from "../utils/unit.js";
import { RenderDom as S } from "../utils/renderDom.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import { notNil as d } from "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/five/FivePuppet.js";
class me extends V {
  constructor(e) {
    var c, n, m, a;
    super();
    s(this, "name", "LineMesh");
    s(this, "type", "Line2");
    s(this, "object");
    s(this, "points", []);
    s(this, "doms", []);
    s(this, "highlighted", !1);
    s(this, "_geometry");
    s(this, "line1");
    s(this, "line2");
    s(this, "opacityBeforeHighlight");
    s(this, "colorBeforeHighlight");
    s(this, "paramsStyle", {});
    s(this, "lastRenderDomItem");
    s(this, "_onAdded", () => {
      this.doms.length === 0 && this.paramsStyle.lengthEnable && this.updateDomItems();
    });
    s(this, "_onRemoved", () => {
      this.doms.forEach((e) => e.destroy()), this.doms = [];
    });
    s(this, "_onShowed", () => {
      this.doms.forEach((e) => e.container.style.display = "block");
    });
    s(this, "_onHidden", () => {
      this.doms.forEach((e) => e.container.style.display = "none");
    });
    this.paramsStyle = y({ dashed: !1, lineOpacity: 1 }, e), this.geometry = new E();
    const i = {
      color: new g.Color((c = e == null ? void 0 : e.lineColor) != null ? c : R),
      linewidth: (n = e == null ? void 0 : e.lineWidth) != null ? n : B,
      dashScale: 1,
      dashSize: 0.02,
      gapSize: 0.02,
      opacity: (m = e == null ? void 0 : e.lineOpacity) != null ? m : 1,
      depthWrite: !1,
      transparent: !0
    }, o = new k(_(y({}, i), { dashed: !1, depthTest: !0 })), t = new z(_(y({}, i), { dashed: !0, depthTest: !1 }));
    if (this.line1 = new D(this.geometry, o), this.line2 = new D(this.geometry, t), this.line1.renderOrder = 2, this.line2.renderOrder = 2, this.line1.name = "line1", this.line2.name = "line2", this.add(this.line1), this.five) {
      const f = (a = this.five.renderer) == null ? void 0 : a.getSize(new g.Vector2());
      f && this.setResolution(f.width, f.height);
    }
    e && this.setStyle(e), e != null && e.points && this.setPoints(e.points), this.addEventListener("removed", () => {
      S.cacheObject.delete(this), S.checkDom(this);
    }), this.addEventListener("added", () => {
      S.cacheObject.add(this);
    }), S.checkDomEveryFrame();
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
    return new g.Color((e = this.line1.material.three_color) != null ? e : this.paramsStyle.lineColor);
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
    var i, o;
    const e = (o = (i = window.globalModules) == null ? void 0 : i.five) != null ? o : window.$five;
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
      const o = (i = w(this, this.points)) == null ? void 0 : i.map((t) => t.toArray().join(",")).join(",");
      o !== this.lastRenderDomItem && (this.updateDomItems(), this.lastRenderDomItem = o);
    }
  }
  setPoints(e) {
    if (this.points.length === 0 && e.length === 0)
      return;
    const i = e.map(x).filter(d);
    if (this.points = i, i.length < 2) {
      const t = new E();
      this.line1.geometry = t, this.line2.geometry = t, this.updateDomItems();
      return;
    }
    const o = i.flatMap((t) => [t.x, t.y, t.z]);
    if (o.length > 2) {
      this.line1.geometry.dispose();
      const t = new E();
      this.line1.geometry = t, this.line2.geometry = t;
    }
    this.line1.geometry.setPositions(o), this.line1.computeLineDistances(), this.updateDomItems(), this.needsRender = !0;
  }
  setResolution(e, i) {
    const o = this.line1.material.resolution;
    (o.x !== e || o.y !== i) && (o.set(e, i), this.needsRender = !0);
    const t = this.line2.material.resolution;
    (t.x !== e || t.y !== i) && (t.set(e, i), this.needsRender = !0);
  }
  setStyle(e) {
    var t, c, n, m;
    if (this.paramsStyle = y(y({}, this.paramsStyle), e), d(e.lineColor)) {
      const a = new g.Color(e.lineColor);
      this.line1.material.three_color = a, this.line2.material.three_color = a;
    }
    d(e.lineWidth) && (this.line1.material.linewidth = e.lineWidth, this.line2.material.linewidth = e.lineWidth), d(e.dashed) && (this.line1.material.dashed = e.dashed), d(e.lineOpacity) && (this.line1.material.opacity = e.lineOpacity, this.line2.material.opacity = e.lineOpacity), this.updateDomItems({ force: !0 });
    const i = (c = (t = e.occlusionVisibility) != null ? t : this.paramsStyle.occlusionVisibility) != null ? c : !0, o = (m = (n = e.occlusionMode) != null ? n : this.paramsStyle.occlusionMode) != null ? m : "translucence";
    i ? this.dashed ? (this.remove(this.line2), this.line1.material.dashed = !0, this.line1.material.depthTest = !1) : o === "depthTest" ? (this.remove(this.line2), this.line1.material.dashed = !1, this.line1.material.depthTest = !1) : o === "translucence" && (this.line1.material.depthTest = !0, this.line2.material.depthTest = !1, this.line1.material.dashed = !0, this.line2.material.dashed = !0, this.addIfNotExists(this.line2)) : (this.remove(this.line2), this.line1.material.depthTest = !0, this.line1.material.dashed = this.paramsStyle.dashed), this.doms.forEach((a) => a.intersectCheck = !i), this.needsRender = !0;
  }
  highlight(e) {
    var i, o;
    if (this.highlighted = !0, e != null && e.color) {
      const t = new g.Color(e.color);
      this.colorBeforeHighlight = (i = this.colorBeforeHighlight) != null ? i : this.line1.material.three_color, this.line1.material.three_color = t, this.line2.material.three_color = t;
    } else {
      this.opacityBeforeHighlight = (o = this.opacityBeforeHighlight) != null ? o : this.line1.material.opacity;
      const t = this.opacityBeforeHighlight * W;
      this.line1.material.opacity = t, this.line2.material.opacity = t;
    }
    this.needsRender = !0;
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, d(this.opacityBeforeHighlight) && (this.line1.material.opacity = this.opacityBeforeHighlight, this.line2.material.opacity = this.line1.material.opacity, this.opacityBeforeHighlight = void 0), d(this.colorBeforeHighlight) && (this.line1.material.three_color = this.colorBeforeHighlight, this.line2.material.three_color = this.colorBeforeHighlight, this.colorBeforeHighlight = void 0), this.needsRender = !0);
  }
  updateDomItems(e) {
    const i = () => {
      this.doms.forEach((t) => t.destroy()), this.doms = [];
    };
    if (!this.points || this.points.length < 2 || !this.paramsStyle.lengthEnable && !this.paramsStyle.tip)
      return i();
    if (!this.five)
      return console.error("Five not found");
    const o = this.points.map((t, c) => {
      if (c !== 0)
        return [this.points[c - 1], t];
    }).filter(d).map((t) => w(this, t));
    o.forEach(([t, c], n) => {
      var f;
      const m = j(t, c);
      this.doms[n] = (f = this.doms[n]) != null ? f : (() => {
        var p;
        const h = new P(this.five), u = (p = this.paramsStyle.occlusionVisibility) != null ? p : !0;
        return h.intersectCheck = !u, h.simulate3D = !0, h;
      })(), this.doms[n].setPosition(m, [t, c]);
      const a = (h, u) => {
        var L, T;
        const p = (L = u == null ? void 0 : u.force) != null ? L : !1;
        this.doms[n].__text === h && !p || (this.doms[n].__text = h, h instanceof HTMLElement ? (this.doms[n].container.innerHTML = "", this.doms[n].container.appendChild(h)) : h ? this.doms[n].container.innerHTML = A(h, {
          style: `color: #${d((T = this.style) == null ? void 0 : T.lineColor) ? new g.Color(this.style.lineColor).getHexString() : "ffffff"}; ${this.paramsStyle.cssStyle}`
        }) : this.doms[n].container.innerHTML = "");
      };
      if (this.paramsStyle.tip)
        a(this.paramsStyle.tip, e);
      else {
        const h = F(t.distanceTo(c), this.paramsStyle.lengthUnit);
        a(h || null, e);
      }
    }), this.doms.length > o.length && (this.doms.slice(o.length).forEach((t) => t.destroy()), this.doms.length = o.length);
  }
}
export {
  me as LineMesh
};
