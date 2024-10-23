var g = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var u = (i, e, t) => e in i ? g(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, d = (i, e) => {
  for (var t in e || (e = {}))
    f.call(e, t) && u(i, t, e[t]);
  if (a)
    for (var t of a(e))
      M.call(e, t) && u(i, t, e[t]);
  return i;
};
var n = (i, e, t) => (u(i, typeof e != "symbol" ? e + "" : e, t), t);
import * as s from "three";
import { DEFAULT_COLOR as F } from "../../typings/style.js";
import { IObject3D as p } from "../../../shared-utils/three/IObject3D.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import { notNil as y } from "../../../shared-utils/isNil.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
class x extends p {
  constructor(t) {
    var h, m;
    super();
    n(this, "name", "ColoredMesh");
    n(this, "meshFont");
    n(this, "meshBackground");
    n(this, "paramsStyle", {});
    n(this, "_geometry", new s.BufferGeometry());
    this.paramsStyle = t != null ? t : {};
    const r = new s.MeshBasicMaterial({
      color: (h = t == null ? void 0 : t.color) != null ? h : F,
      transparent: !0,
      side: s.DoubleSide,
      depthTest: !0,
      opacity: (m = t == null ? void 0 : t.opacity) != null ? m : 0.5
    }), l = new s.MeshBasicMaterial({
      color: 16777215,
      transparent: !0,
      side: s.DoubleSide,
      depthTest: !1,
      depthWrite: !1,
      opacity: 0.3 / 0.5 * r.opacity
    }), o = new s.Mesh(this.geometry, r), c = new s.Mesh(this.geometry, l);
    o.name = "MeshFront", c.name = "MeshBackground", o.renderOrder = 1, c.renderOrder = 0, this.meshFont = o, this.meshBackground = c, this.add(o), this.setOcclusionVisibility({ occlusionVisibility: t == null ? void 0 : t.occlusionVisibility, occlusionMode: t == null ? void 0 : t.occlusionMode });
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
    this.paramsStyle = d(d({}, this.paramsStyle), t), y(t.color) && (this.meshFont.material.color.set(t.color), this.needsRender = !0), y(t.opacity) && (this.meshFont.material.opacity = t.opacity, this.meshBackground.material.opacity = 0.3 / 0.5 * t.opacity, this.needsRender = !0), this.setOcclusionVisibility(t);
  }
  setOcclusionVisibility(t) {
    var o, c, h;
    const r = (c = (o = t.occlusionMode) != null ? o : this.paramsStyle.occlusionMode) != null ? c : "translucence", l = (h = t.occlusionVisibility) != null ? h : this.paramsStyle.occlusionVisibility;
    y(l) && (l ? r === "depthTest" ? (this.meshFont.material.depthTest = !1, this.remove(this.meshBackground)) : r === "translucence" && (this.meshFont.material.depthTest = !0, this.addIfNotExists(this.meshBackground)) : (this.meshFont.material.depthTest = !0, this.remove(this.meshBackground)));
  }
}
export {
  x as ColoredMesh
};
