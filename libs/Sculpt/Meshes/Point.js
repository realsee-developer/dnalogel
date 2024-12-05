var P = Object.defineProperty, N = Object.defineProperties;
var D = Object.getOwnPropertyDescriptors;
var d = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var f = (e, i, t) => i in e ? P(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, g = (e, i) => {
  for (var t in i || (i = {}))
    V.call(i, t) && f(e, t, i[t]);
  if (d)
    for (var t of d(i))
      v.call(i, t) && f(e, t, i[t]);
  return e;
}, a = (e, i) => N(e, D(i));
var y = (e, i) => {
  var t = {};
  for (var o in e)
    V.call(e, o) && i.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && d)
    for (var o of d(e))
      i.indexOf(o) < 0 && v.call(e, o) && (t[o] = e[o]);
  return t;
};
var s = (e, i, t) => (f(e, typeof i != "symbol" ? i + "" : i, t), t);
import * as h from "three";
import { DEFAULT_HIGHLIGHT_OPACITY as I } from "../typings/style.js";
import { IObject3D as W } from "../../shared-utils/three/IObject3D.js";
import { anyPositionToVector3 as B } from "../../shared-utils/positionToVector3.js";
import { LightTag as E } from "../../shared-utils/tag.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import { removeAllTag as T } from "../utils/removeAllTag.js";
import { getLengthHTML as x } from "../utils/Meshes/getLengthHTML.js";
import { localToWorld as S } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import "@realsee/five/line";
import { notNil as c } from "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../shared-utils/five/FivePuppet.js";
const H = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sHDgwCEMBJZu0AAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAABM5JREFUWMO1V0tPG2cUPZ4Hxh6DazIOrjFNqJs0FIMqWFgWQkatsmvVbtggKlSVRVf5AWz4AWz4AUSKEChll19QJYSXkECuhFxsHjEhxCYm+DWGMZ5HF72DJq4bAzFXurI0M/I5997v3u9cC65vTJVn2lX/xHINQOYSBLTLEuIuCWw4Z3IGAEvf6ASmVHjNzHCXBG4A0AjACsAOwEbO0nsFQBnAGYASAIl+ZRMR7SolMEdsByD09fV5R0ZGgg8ePPjW5/N1iqLYpuu6RZblciKR2I9Go69evnwZnZ+fjwI4IS8AKBIRzeQfJWCANwKwh0KhtrGxsYehUOin1tbW+zzP23ietzY2NnIAoGmaLsuyUiqVyvl8XtrY2NiamZn589mzZxsAUgCOAeQAnFI2tI+VxIjaAeDzoaGh7xYWFuZOTk6OZVk+12uYqqq6JEnn0Wg0OT4+/geAXwGEAdwDIFJQXC1wO4DWR48e/RCPxxclSSroVzRFUbSDg4P848ePFwH8DuAhkWih83TRQWxFOXgAwvDwcOfo6OhvXV1d39tsNtuVBwTDWBwOh1UUxVsMw1hXVlbSdCgNV43uYSvrHg6H24aHh38eHBz85TrgF9FYLHA4HLzH43FvbW2d7u/vG+dANp8FpqIlbd3d3V8Fg8EfBUFw4BONZVmL3+9vHhkZCQL4AoAHgJPK8G+yzC0XDofdoVAo5PP5vkadTBAEtr+/39ff3x8gAp/RPOEqx2qjx+NpvXv3bk9DQ0NDvQgwDIOWlhZrMBj8kgi0UJdxRgYMArzL5XJ7vd57qLPZ7Xamp6fnNgBXtQxcjFuHw+Hyer3t9SYgCAITCAScAJoBNNEY/08GOFVVrfVMv7kMNDntFD1vjIAPrlRN0xjckOm6biFQ3jwNPwDMZrOnqVTqfb3Bi8Wivru7W/VCYkwPlKOjo0IikXh7EwQikYgE4Nw0CfXKDCipVCoTj8df3QABbW1tLUc6oUgkFPMkVACUNjc337148eKvw8PDbJ2jP1taWkoCyNDVXDSECmNSK4qiKNLq6urW8+fPI/UicHx8rD59+jSVy+WOAKSJhKENwFItLtoxk8mwsixzHR0dHe3t7c5PAU+n09rs7OzJkydPYqVSaQfANoDXALIk31S2smU1TWMPDg7K5XKZ7+3t9TudTut1U7+wsFCcmJiIpdPpbQBxADsAknQWymYCOukBHYCuKApisdhpMpnURFEU79y503TVyKenpzOTk5M7e3t7MQKPV0Zv1gNm+awB0MvlshqLxfLb29uyJElWURSbXC4XXyvqxcXFs6mpqeTc3Nzu3t7e3wQcA7BPZ8Cov1pNlJplmQtAG8MwHV6v95tAINA5MDBwPxAIuLu6upr8fr/VAN3c3JQjkcjZ+vp6fnl5+d2bN29SuVzuNYAEpf01CdRChUL+X1VskHACuA3Ay3Fcu9vt7nA6nZ7m5uYWQRCaNE3jVVW15PP580KhIGUymWw2m00DOAJwSP4WwPtq4LX2Ao6USxNlQyS/RcQcdLGwlNIz6vEMAaZpNzCk2Pll94LK/cDYimxERiBwG10sxjgvEZBE0UpE6vxj+0Ct5bTaXthgEhRmja8QWNkkPGsuIpfdjpkK+cZUWTC0KredVmtD/gdlSl6EG4AMvQAAAABJRU5ErkJggg==";
let C = null;
class et extends W {
  constructor(t) {
    var p, w;
    super();
    s(this, "name", "PointMesh");
    s(this, "dom");
    s(this, "opacityBeforeHighlight");
    s(this, "highlighted", !1);
    s(this, "fontMesh");
    s(this, "backgroundMesh");
    s(this, "lastRenderDomItem");
    s(this, "paramsStyle");
    s(this, "_visible", !0);
    const M = t != null ? t : {}, { point: o } = M, r = y(M, ["point"]);
    this.paramsStyle = r != null ? r : {};
    const l = new h.BufferGeometry();
    l.setAttribute("position", new h.Float32BufferAttribute([0, 0, 0], 3));
    const m = {
      transparent: !0,
      side: h.DoubleSide,
      size: (p = t == null ? void 0 : t.size) != null ? p : 8,
      map: C || (C = new h.TextureLoader().load(H)),
      sizeAttenuation: !1
    }, u = new h.PointsMaterial(a(g({}, m), {
      color: (w = t == null ? void 0 : t.color) != null ? w : 16777215,
      depthTest: !0,
      opacity: 1
    })), k = new h.PointsMaterial(a(g({}, m), {
      size: u.size,
      color: u.color,
      depthWrite: !1,
      depthTest: !1,
      opacity: 0.5
    })), n = new h.Points(l, u), A = new h.Points(l, k);
    this.fontMesh = n, this.backgroundMesh = A, n.name = "FontMesh", A.name = "BackgroundMesh", n.renderOrder = 10, A.renderOrder = 0, this.add(n, A), t != null && t.point && this.position.copy(B(t.point)), t && this.setStyle(t), this.addEventListener("removed", () => {
      T(this);
    }), Object.defineProperty(this, "visible", {
      set: (b) => {
        this.dom && (this.dom.container.style.display = b ? "block" : "none"), this._visible = b;
      },
      get: () => this._visible
    });
  }
  get color() {
    return this.fontMesh.material.color;
  }
  get size() {
    return this.fontMesh.material.size;
  }
  get style() {
    return {
      color: this.color,
      size: this.size,
      occlusionVisibility: this.fontMesh.material.depthTest,
      occlusionMode: this.backgroundMesh.visible ? "depthWrite" : "depthTest"
    };
  }
  get five() {
    var t, o;
    return (o = (t = window.globalModules) == null ? void 0 : t.five) != null ? o : window.$five;
  }
  setStyle(t) {
    c(t.color) && (this.fontMesh.material.setValues({ color: t.color }), this.backgroundMesh.material.setValues({ color: t.color })), c(t.size) && (this.fontMesh.material.setValues({ side: t.size }), this.backgroundMesh.material.setValues({ side: t.size })), c(t.occlusionVisibility) && (t.occlusionVisibility ? t.occlusionMode === "depthTest" ? (this.fontMesh.material.depthTest = !1, this.backgroundMesh.visible = !1) : (this.fontMesh.material.depthTest = !0, this.backgroundMesh.visible = !0) : (this.fontMesh.material.depthTest = !0, this.backgroundMesh.visible = !1));
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.opacityBeforeHighlight = this.fontMesh.material.opacity, this.fontMesh.material.setValues({ opacity: this.opacityBeforeHighlight * I }));
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, this.fontMesh.material.setValues({ opacity: this.opacityBeforeHighlight }));
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t);
    const o = S(this, this.position).toArray().join(",");
    o !== this.lastRenderDomItem && (this.updateDom(), this.lastRenderDomItem = o);
  }
  updateDom() {
    const t = this.paramsStyle.tip;
    t && !this.dom && (this.dom = new E(this.five), this.dom.intersectCheck = !1, this.dom.simulate3D = !0, this.dom.container.style.display = this.visible ? "block" : "none");
    const o = (r) => {
      var l;
      this.dom && this.dom.__text !== r && (this.dom.__text = r, r ? this.dom.container.innerHTML = x(r, {
        style: `color: #${c((l = this.style) == null ? void 0 : l.color) ? new h.Color(this.style.color).getHexString() : "ffffff"}`
      }) : this.dom.container.innerHTML = "");
    };
    t ? (o(t), this.dom.setPosition(this.position.clone())) : o(null);
  }
}
export {
  et as PointMesh
};
