var g = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
var d = (i, t, e) => t in i ? g(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, u = (i, t) => {
  for (var e in t || (t = {}))
    f.call(t, e) && d(i, e, t[e]);
  if (a)
    for (var e of a(t))
      F.call(t, e) && d(i, e, t[e]);
  return i;
};
var c = (i, t, e) => (d(i, typeof t != "symbol" ? t + "" : t, e), e);
import * as s from "three";
import { DEFAULT_COLOR as M } from "../color.js";
import { IObject3D as B } from "../../../shared-utils/three/IObject3D.js";
import "hammerjs";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { notNil as m } from "../../../shared-utils/isNil.js";
class E extends B {
  constructor(e) {
    var h, y;
    super();
    c(this, "name", "ColoredMesh");
    c(this, "meshFont");
    c(this, "meshBackground");
    c(this, "paramsStyle", {});
    c(this, "_geometry", new s.BufferGeometry());
    this.paramsStyle = e != null ? e : {};
    const r = new s.MeshBasicMaterial({
      color: (h = e == null ? void 0 : e.color) != null ? h : M,
      transparent: !0,
      side: s.DoubleSide,
      depthTest: !0,
      opacity: (y = e == null ? void 0 : e.opacity) != null ? y : 0.5
    }), l = new s.MeshBasicMaterial({
      color: 16777215,
      transparent: !0,
      side: s.DoubleSide,
      depthTest: !1,
      depthWrite: !1,
      opacity: 0.3 / 0.5 * r.opacity
    }), o = new s.Mesh(this.geometry, r), n = new s.Mesh(this.geometry, l);
    o.name = "MeshFront", n.name = "MeshBackground", o.renderOrder = 1, n.renderOrder = 0, this.meshFont = o, this.meshBackground = n, this.add(o), this.setOcclusionVisibility({ occlusionVisibility: e == null ? void 0 : e.occlusionVisibility, occlusionMode: e == null ? void 0 : e.occlusionMode });
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
  set geometry(e) {
    this._geometry = e, this.meshFont.geometry = e, this.meshBackground.geometry = e;
  }
  get geometry() {
    return this._geometry;
  }
  setStyle(e) {
    this.paramsStyle = u(u({}, this.paramsStyle), e), m(e.color) && (this.meshFont.material.color.set(e.color), this.needsRender = !0), m(e.opacity) && (this.meshFont.material.opacity = e.opacity, this.meshBackground.material.opacity = 0.3 / 0.5 * e.opacity, this.needsRender = !0), this.setOcclusionVisibility(e);
  }
  setOcclusionVisibility(e) {
    var o, n, h;
    const r = (n = (o = e.occlusionMode) != null ? o : this.paramsStyle.occlusionMode) != null ? n : "translucence", l = (h = e.occlusionVisibility) != null ? h : this.paramsStyle.occlusionVisibility;
    m(l) && (l ? r === "depthTest" ? (this.meshFont.material.depthTest = !1, this.remove(this.meshBackground)) : r === "translucence" && (this.meshFont.material.depthTest = !0, this.addIfNotExists(this.meshBackground)) : (this.meshFont.material.depthTest = !0, this.remove(this.meshBackground)));
  }
}
export {
  E as ColoredMesh
};
