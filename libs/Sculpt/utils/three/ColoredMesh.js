var y = Object.defineProperty;
var u = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var g = (o, e, t) => e in o ? y(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, a = (o, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && g(o, t, e[t]);
  if (u)
    for (var t of u(e))
      B.call(e, t) && g(o, t, e[t]);
  return o;
};
var s = (o, e, t) => (g(o, typeof e != "symbol" ? e + "" : e, t), t);
import * as i from "three";
import { DEFAULT_COLOR as p, DEFAULT_OPACITY as F, DEFAULT_HIGHLIGHT_OPACITY as T } from "../../typings/style.js";
import { IObject3D as M } from "../../../shared-utils/three/IObject3D.js";
import "../../../shared-utils/tag.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as n } from "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../shared-utils/five/FivePuppet.js";
class A extends M {
  constructor(t) {
    var d, m;
    super();
    s(this, "name", "ColoredMesh");
    s(this, "meshFont");
    s(this, "meshBackground");
    s(this, "paramsStyle", {});
    s(this, "_geometry", new i.BufferGeometry());
    s(this, "highlighted", !1);
    s(this, "opacityBeforeHighlight");
    s(this, "colorBeforeHighlight");
    this.paramsStyle = t != null ? t : {};
    const h = new i.MeshBasicMaterial({
      color: new i.Color((d = t == null ? void 0 : t.color) != null ? d : p).convertSRGBToLinear(),
      // 给 MeshBasicMaterial 的颜色必须是 linear，要不颜色不对
      transparent: !0,
      side: i.DoubleSide,
      depthTest: !0,
      depthWrite: !1,
      opacity: (m = t == null ? void 0 : t.opacity) != null ? m : F
    }), r = new i.MeshBasicMaterial({
      color: 16777215,
      transparent: !0,
      side: i.DoubleSide,
      depthTest: !1,
      depthWrite: !1,
      opacity: 0.3 / 0.5 * h.opacity
    }), l = new i.Mesh(this.geometry, h), c = new i.Mesh(this.geometry, r);
    l.name = "MeshFront", c.name = "MeshBackground", l.renderOrder = 1, c.renderOrder = 0, this.meshFont = l, this.meshBackground = c, this.add(l), this.setOcclusionVisibility({ occlusionVisibility: t == null ? void 0 : t.occlusionVisibility, occlusionMode: t == null ? void 0 : t.occlusionMode });
  }
  get style() {
    return {
      color: this.color,
      opacity: this.opacity,
      occlusionVisibility: this.occlusionVisibility,
      occlusionMode: this.occlusionMode
    };
  }
  get color() {
    return this.meshFont.material.color;
  }
  get opacity() {
    return this.meshFont.material.opacity;
  }
  get occlusionVisibility() {
    return !!this.meshBackground.parent || this.meshFont.material.depthTest === !1;
  }
  get occlusionMode() {
    return this.meshFont.material.depthTest === !1 ? "depthTest" : "translucence";
  }
  set geometry(t) {
    this._geometry = t, this.meshFont.geometry = t, this.meshBackground.geometry = t;
  }
  get geometry() {
    return this._geometry;
  }
  setStyle(t) {
    this.paramsStyle = a(a({}, this.paramsStyle), t), n(t.color) && (this.meshFont.material.color.set(new i.Color(t.color).convertSRGBToLinear()), this.needsRender = !0), n(t.opacity) && (this.meshFont.material.opacity = t.opacity, this.meshBackground.material.opacity = 0.3 / 0.5 * this.meshFont.material.opacity, this.needsRender = !0), this.setOcclusionVisibility(t);
  }
  highlight(t) {
    var h, r;
    this.highlighted = !0, n(t == null ? void 0 : t.color) ? (this.colorBeforeHighlight = (h = this.colorBeforeHighlight) != null ? h : this.meshFont.material.color.clone(), this.meshFont.material.color.set(new i.Color(t.color).convertSRGBToLinear())) : (this.opacityBeforeHighlight = (r = this.opacityBeforeHighlight) != null ? r : this.opacity, this.meshFont.material.opacity = this.opacity * T, this.meshBackground.material.opacity = 0.3 / 0.5 * this.meshFont.material.opacity), this.needsRender = !0;
  }
  unhighlight() {
    this.highlighted = !1, n(this.opacityBeforeHighlight) && (this.meshFont.material.opacity = this.opacityBeforeHighlight, this.meshBackground.material.opacity = 0.3 / 0.5 * this.meshFont.material.opacity, this.opacityBeforeHighlight = void 0), n(this.colorBeforeHighlight) && (this.meshFont.material.color = new i.Color(this.colorBeforeHighlight), this.colorBeforeHighlight = void 0), this.needsRender = !0;
  }
  setOcclusionVisibility(t) {
    var l, c, d;
    const h = (c = (l = t.occlusionMode) != null ? l : this.paramsStyle.occlusionMode) != null ? c : "translucence", r = (d = t.occlusionVisibility) != null ? d : this.paramsStyle.occlusionVisibility;
    n(r) && (r ? h === "depthTest" ? (this.meshFont.material.depthTest = !1, this.remove(this.meshBackground)) : h === "translucence" && (this.meshFont.material.depthTest = !0, this.addIfNotExists(this.meshBackground)) : (this.meshFont.material.depthTest = !0, this.remove(this.meshBackground)));
  }
}
export {
  A as ColoredMesh
};
