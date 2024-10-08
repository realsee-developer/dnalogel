var b = Object.defineProperty, k = Object.defineProperties;
var D = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var u = (e, i, t) => i in e ? b(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, f = (e, i) => {
  for (var t in i || (i = {}))
    V.call(i, t) && u(e, t, i[t]);
  if (l)
    for (var t of l(i))
      C.call(i, t) && u(e, t, i[t]);
  return e;
}, g = (e, i) => k(e, D(i));
var v = (e, i) => {
  var t = {};
  for (var o in e)
    V.call(e, o) && i.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && l)
    for (var o of l(e))
      i.indexOf(o) < 0 && C.call(e, o) && (t[o] = e[o]);
  return t;
};
var s = (e, i, t) => (u(e, typeof i != "symbol" ? i + "" : i, t), t);
import * as r from "three";
import { DEFAULT_HIGHLIGHT_OPACITY as I } from "../typings/style.js";
import { IObject3D as B } from "../../shared-utils/three/IObject3D.js";
import { anyPositionToVector3 as E } from "../../shared-utils/positionToVector3.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../vendor/three/examples/jsm/lines/LineGeometry.js";
import { LightTag as W } from "../../shared-utils/tag.js";
import { removeAllTag as x } from "../utils/removeAllTag.js";
import { getLengthHTML as y } from "../utils/Meshes/getLengthHTML.js";
import { applyObjectMatrixWorld as S } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/three/core/Sphere.js";
import "animejs";
import { notNil as a } from "../../shared-utils/isNil.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
const F = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sHDgwCEMBJZu0AAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAABM5JREFUWMO1V0tPG2cUPZ4Hxh6DazIOrjFNqJs0FIMqWFgWQkatsmvVbtggKlSVRVf5AWz4AWz4AUSKEChll19QJYSXkECuhFxsHjEhxCYm+DWGMZ5HF72DJq4bAzFXurI0M/I5997v3u9cC65vTJVn2lX/xHINQOYSBLTLEuIuCWw4Z3IGAEvf6ASmVHjNzHCXBG4A0AjACsAOwEbO0nsFQBnAGYASAIl+ZRMR7SolMEdsByD09fV5R0ZGgg8ePPjW5/N1iqLYpuu6RZblciKR2I9Go69evnwZnZ+fjwI4IS8AKBIRzeQfJWCANwKwh0KhtrGxsYehUOin1tbW+zzP23ietzY2NnIAoGmaLsuyUiqVyvl8XtrY2NiamZn589mzZxsAUgCOAeQAnFI2tI+VxIjaAeDzoaGh7xYWFuZOTk6OZVk+12uYqqq6JEnn0Wg0OT4+/geAXwGEAdwDIFJQXC1wO4DWR48e/RCPxxclSSroVzRFUbSDg4P848ePFwH8DuAhkWih83TRQWxFOXgAwvDwcOfo6OhvXV1d39tsNtuVBwTDWBwOh1UUxVsMw1hXVlbSdCgNV43uYSvrHg6H24aHh38eHBz85TrgF9FYLHA4HLzH43FvbW2d7u/vG+dANp8FpqIlbd3d3V8Fg8EfBUFw4BONZVmL3+9vHhkZCQL4AoAHgJPK8G+yzC0XDofdoVAo5PP5vkadTBAEtr+/39ff3x8gAp/RPOEqx2qjx+NpvXv3bk9DQ0NDvQgwDIOWlhZrMBj8kgi0UJdxRgYMArzL5XJ7vd57qLPZ7Xamp6fnNgBXtQxcjFuHw+Hyer3t9SYgCAITCAScAJoBNNEY/08GOFVVrfVMv7kMNDntFD1vjIAPrlRN0xjckOm6biFQ3jwNPwDMZrOnqVTqfb3Bi8Wivru7W/VCYkwPlKOjo0IikXh7EwQikYgE4Nw0CfXKDCipVCoTj8df3QABbW1tLUc6oUgkFPMkVACUNjc337148eKvw8PDbJ2jP1taWkoCyNDVXDSECmNSK4qiKNLq6urW8+fPI/UicHx8rD59+jSVy+WOAKSJhKENwFItLtoxk8mwsixzHR0dHe3t7c5PAU+n09rs7OzJkydPYqVSaQfANoDXALIk31S2smU1TWMPDg7K5XKZ7+3t9TudTut1U7+wsFCcmJiIpdPpbQBxADsAknQWymYCOukBHYCuKApisdhpMpnURFEU79y503TVyKenpzOTk5M7e3t7MQKPV0Zv1gNm+awB0MvlshqLxfLb29uyJElWURSbXC4XXyvqxcXFs6mpqeTc3Nzu3t7e3wQcA7BPZ8Cov1pNlJplmQtAG8MwHV6v95tAINA5MDBwPxAIuLu6upr8fr/VAN3c3JQjkcjZ+vp6fnl5+d2bN29SuVzuNYAEpf01CdRChUL+X1VskHACuA3Ay3Fcu9vt7nA6nZ7m5uYWQRCaNE3jVVW15PP580KhIGUymWw2m00DOAJwSP4WwPtq4LX2Ao6USxNlQyS/RcQcdLGwlNIz6vEMAaZpNzCk2Pll94LK/cDYimxERiBwG10sxjgvEZBE0UpE6vxj+0Ct5bTaXthgEhRmja8QWNkkPGsuIpfdjpkK+cZUWTC0KredVmtD/gdlSl6EG4AMvQAAAABJRU5ErkJggg==";
let N = null;
class _ extends B {
  constructor(t) {
    var w, p;
    super();
    s(this, "name", "PointMesh");
    s(this, "dom");
    s(this, "opacityBeforeHighlight");
    s(this, "highlighted", !1);
    s(this, "fontMesh");
    s(this, "backgroundMesh");
    s(this, "lastRenderDomItem");
    s(this, "paramsStyle");
    const M = t != null ? t : {}, { point: o } = M, h = v(M, ["point"]);
    this.paramsStyle = h != null ? h : {};
    const d = new r.BufferGeometry();
    d.setAttribute("position", new r.Float32BufferAttribute([0, 0, 0], 3));
    const m = {
      transparent: !0,
      side: r.DoubleSide,
      size: (w = t == null ? void 0 : t.size) != null ? w : 8,
      map: N || (N = new r.TextureLoader().load(F)),
      sizeAttenuation: !1
    }, c = new r.PointsMaterial(g(f({}, m), {
      color: (p = t == null ? void 0 : t.color) != null ? p : 16777215,
      depthTest: !0,
      opacity: 1
    })), P = new r.PointsMaterial(g(f({}, m), {
      size: c.size,
      color: c.color,
      depthWrite: !1,
      depthTest: !1,
      opacity: 0.5
    })), A = new r.Points(d, c), n = new r.Points(d, P);
    this.fontMesh = A, this.backgroundMesh = n, A.name = "FontMesh", n.name = "BackgroundMesh", A.renderOrder = 10, n.renderOrder = 0, this.add(A, n), t != null && t.point && this.position.copy(E(t.point)), t && this.setStyle(t), this.addEventListener("removed", () => {
      x(this);
    });
  }
  get color() {
    return this.fontMesh.material.color;
  }
  get size() {
    return this.fontMesh.material.size;
  }
  get five() {
    var t, o;
    return (o = (t = window.globalModules) == null ? void 0 : t.five) != null ? o : window.$five;
  }
  setStyle(t) {
    a(t.color) && (this.fontMesh.material.setValues({ color: t.color }), this.backgroundMesh.material.setValues({ color: t.color })), a(t.size) && (this.fontMesh.material.setValues({ side: t.size }), this.backgroundMesh.material.setValues({ side: t.size })), a(t.occlusionVisibility) && (t.occlusionVisibility ? t.occlusionMode === "depthTest" ? (this.fontMesh.material.depthTest = !1, this.backgroundMesh.visible = !1) : (this.fontMesh.material.depthTest = !0, this.backgroundMesh.visible = !0) : (this.fontMesh.material.depthTest = !0, this.backgroundMesh.visible = !1));
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
    t && !this.dom && (this.dom = new W(this.five), this.dom.intersectCheck = !1, this.dom.simulate3D = !0);
    const o = (h) => {
      this.dom && this.dom.__text !== h && (this.dom.__text = h, h ? this.dom.container.innerHTML = y(h) : this.dom.container.innerHTML = "");
    };
    t ? (o(t), this.dom.setPosition(this.position.clone())) : o(null);
  }
}
export {
  _ as PointMesh
};
