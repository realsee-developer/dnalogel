var g = Object.defineProperty;
var y = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var d = (i, e, t) => e in i ? g(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, a = (i, e) => {
  for (var t in e || (e = {}))
    p.call(e, t) && d(i, t, e[t]);
  if (y)
    for (var t of y(e))
      f.call(e, t) && d(i, t, e[t]);
  return i;
};
var s = (i, e, t) => (d(i, typeof e != "symbol" ? e + "" : e, t), t);
import * as o from "three";
import { DEFAULT_COLOR as F, DEFAULT_OPACITY as B, DEFAULT_HIGHLIGHT_OPACITY as M } from "../../typings/style.js";
import { IObject3D as T } from "../../../shared-utils/three/IObject3D.js";
import "../../../shared-utils/tag.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "@realsee/five/line";
import { notNil as u } from "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../shared-utils/five/FivePuppet.js";
class A extends T {
  constructor(t) {
    var c, m;
    super();
    s(this, "name", "ColoredMesh");
    s(this, "meshFont");
    s(this, "meshBackground");
    s(this, "paramsStyle", {});
    s(this, "_geometry", new o.BufferGeometry());
    s(this, "highlighted", !1);
    s(this, "opacityBeforeHighlight");
    this.paramsStyle = t != null ? t : {};
    const n = new o.MeshBasicMaterial({
      color: new o.Color((c = t == null ? void 0 : t.color) != null ? c : F).convertSRGBToLinear(),
      // 给 MeshBasicMaterial 的颜色必须是 linear，要不颜色不对
      transparent: !0,
      side: o.DoubleSide,
      depthTest: !0,
      depthWrite: !1,
      opacity: (m = t == null ? void 0 : t.opacity) != null ? m : B
    }), l = new o.MeshBasicMaterial({
      color: 16777215,
      transparent: !0,
      side: o.DoubleSide,
      depthTest: !1,
      depthWrite: !1,
      opacity: 0.3 / 0.5 * n.opacity
    }), h = new o.Mesh(this.geometry, n), r = new o.Mesh(this.geometry, l);
    h.name = "MeshFront", r.name = "MeshBackground", h.renderOrder = 1, r.renderOrder = 0, this.meshFont = h, this.meshBackground = r, this.add(h), this.setOcclusionVisibility({ occlusionVisibility: t == null ? void 0 : t.occlusionVisibility, occlusionMode: t == null ? void 0 : t.occlusionMode });
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
    this.paramsStyle = a(a({}, this.paramsStyle), t), u(t.color) && (this.meshFont.material.color.set(new o.Color(t.color).convertSRGBToLinear()), this.needsRender = !0), u(t.opacity) && (this.meshFont.material.opacity = t.opacity, this.meshBackground.material.opacity = 0.3 / 0.5 * this.meshFont.material.opacity, this.needsRender = !0), this.setOcclusionVisibility(t);
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.opacityBeforeHighlight = this.opacity, this.meshFont.material.opacity = this.opacity * M, this.meshBackground.material.opacity = 0.3 / 0.5 * this.meshFont.material.opacity, this.needsRender = !0);
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, this.meshFont.material.opacity = this.opacityBeforeHighlight, this.meshBackground.material.opacity = 0.3 / 0.5 * this.meshFont.material.opacity, this.needsRender = !0);
  }
  setOcclusionVisibility(t) {
    var h, r, c;
    const n = (r = (h = t.occlusionMode) != null ? h : this.paramsStyle.occlusionMode) != null ? r : "translucence", l = (c = t.occlusionVisibility) != null ? c : this.paramsStyle.occlusionVisibility;
    u(l) && (l ? n === "depthTest" ? (this.meshFont.material.depthTest = !1, this.remove(this.meshBackground)) : n === "translucence" && (this.meshFont.material.depthTest = !0, this.addIfNotExists(this.meshBackground)) : (this.meshFont.material.depthTest = !0, this.remove(this.meshBackground)));
  }
}
export {
  A as ColoredMesh
};
