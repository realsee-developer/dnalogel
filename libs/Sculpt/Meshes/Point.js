var E = Object.defineProperty, N = Object.defineProperties;
var P = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var f = (e, i, t) => i in e ? E(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t, a = (e, i) => {
  for (var t in i || (i = {}))
    b.call(i, t) && f(e, t, i[t]);
  if (A)
    for (var t of A(i))
      v.call(i, t) && f(e, t, i[t]);
  return e;
}, m = (e, i) => N(e, P(i));
var k = (e, i) => {
  var t = {};
  for (var o in e)
    b.call(e, o) && i.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && A)
    for (var o of A(e))
      i.indexOf(o) < 0 && v.call(e, o) && (t[o] = e[o]);
  return t;
};
var s = (e, i, t) => (f(e, typeof i != "symbol" ? i + "" : i, t), t);
import * as n from "three";
import { DEFAULT_HIGHLIGHT_OPACITY as I } from "../typings/style.js";
import { IObject3D as T } from "../../shared-utils/three/IObject3D.js";
import { anyPositionToVector3 as W } from "../../shared-utils/positionToVector3.js";
import { LightTag as B } from "../../shared-utils/tag.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { getLengthHTML as H } from "../utils/Meshes/getLengthHTML.js";
import { localToWorld as S } from "../../shared-utils/three/applyObjectMatrixWorld.js";
import "@realsee/five/line";
import { notNil as g } from "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import { RenderDom as c } from "../utils/renderDom.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/five/FivePuppet.js";
const x = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sHDgwCEMBJZu0AAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAABM5JREFUWMO1V0tPG2cUPZ4Hxh6DazIOrjFNqJs0FIMqWFgWQkatsmvVbtggKlSVRVf5AWz4AWz4AUSKEChll19QJYSXkECuhFxsHjEhxCYm+DWGMZ5HF72DJq4bAzFXurI0M/I5997v3u9cC65vTJVn2lX/xHINQOYSBLTLEuIuCWw4Z3IGAEvf6ASmVHjNzHCXBG4A0AjACsAOwEbO0nsFQBnAGYASAIl+ZRMR7SolMEdsByD09fV5R0ZGgg8ePPjW5/N1iqLYpuu6RZblciKR2I9Go69evnwZnZ+fjwI4IS8AKBIRzeQfJWCANwKwh0KhtrGxsYehUOin1tbW+zzP23ietzY2NnIAoGmaLsuyUiqVyvl8XtrY2NiamZn589mzZxsAUgCOAeQAnFI2tI+VxIjaAeDzoaGh7xYWFuZOTk6OZVk+12uYqqq6JEnn0Wg0OT4+/geAXwGEAdwDIFJQXC1wO4DWR48e/RCPxxclSSroVzRFUbSDg4P848ePFwH8DuAhkWih83TRQWxFOXgAwvDwcOfo6OhvXV1d39tsNtuVBwTDWBwOh1UUxVsMw1hXVlbSdCgNV43uYSvrHg6H24aHh38eHBz85TrgF9FYLHA4HLzH43FvbW2d7u/vG+dANp8FpqIlbd3d3V8Fg8EfBUFw4BONZVmL3+9vHhkZCQL4AoAHgJPK8G+yzC0XDofdoVAo5PP5vkadTBAEtr+/39ff3x8gAp/RPOEqx2qjx+NpvXv3bk9DQ0NDvQgwDIOWlhZrMBj8kgi0UJdxRgYMArzL5XJ7vd57qLPZ7Xamp6fnNgBXtQxcjFuHw+Hyer3t9SYgCAITCAScAJoBNNEY/08GOFVVrfVMv7kMNDntFD1vjIAPrlRN0xjckOm6biFQ3jwNPwDMZrOnqVTqfb3Bi8Wivru7W/VCYkwPlKOjo0IikXh7EwQikYgE4Nw0CfXKDCipVCoTj8df3QABbW1tLUc6oUgkFPMkVACUNjc337148eKvw8PDbJ2jP1taWkoCyNDVXDSECmNSK4qiKNLq6urW8+fPI/UicHx8rD59+jSVy+WOAKSJhKENwFItLtoxk8mwsixzHR0dHe3t7c5PAU+n09rs7OzJkydPYqVSaQfANoDXALIk31S2smU1TWMPDg7K5XKZ7+3t9TudTut1U7+wsFCcmJiIpdPpbQBxADsAknQWymYCOukBHYCuKApisdhpMpnURFEU79y503TVyKenpzOTk5M7e3t7MQKPV0Zv1gNm+awB0MvlshqLxfLb29uyJElWURSbXC4XXyvqxcXFs6mpqeTc3Nzu3t7e3wQcA7BPZ8Cov1pNlJplmQtAG8MwHV6v95tAINA5MDBwPxAIuLu6upr8fr/VAN3c3JQjkcjZ+vp6fnl5+d2bN29SuVzuNYAEpf01CdRChUL+X1VskHACuA3Ay3Fcu9vt7nA6nZ7m5uYWQRCaNE3jVVW15PP580KhIGUymWw2m00DOAJwSP4WwPtq4LX2Ao6USxNlQyS/RcQcdLGwlNIz6vEMAaZpNzCk2Pll94LK/cDYimxERiBwG10sxjgvEZBE0UpE6vxj+0Ct5bTaXthgEhRmja8QWNkkPGsuIpfdjpkK+cZUWTC0KredVmtD/gdlSl6EG4AMvQAAAABJRU5ErkJggg==";
let C = null;
class ot extends T {
  constructor(t) {
    var w, y, V;
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
    s(this, "_onAdded", () => {
      this.dom || this.updateDom();
    });
    s(this, "_onRemoved", () => {
      var t;
      (t = this.dom) == null || t.destroy(), this.dom = void 0;
    });
    s(this, "_onShowed", () => {
      this.dom && (this.dom.container.style.display = "block");
    });
    s(this, "_onHidden", () => {
      this.dom && (this.dom.container.style.display = "none");
    });
    const p = t != null ? t : {}, { point: o } = p, h = k(p, ["point"]);
    this.paramsStyle = h != null ? h : {};
    const u = new n.BufferGeometry();
    u.setAttribute("position", new n.Float32BufferAttribute([0, 0, 0], 3));
    const M = {
      transparent: !0,
      side: n.DoubleSide,
      size: (w = t == null ? void 0 : t.size) != null ? w : 8,
      map: C || (C = new n.TextureLoader().load(x)),
      sizeAttenuation: !1
    }, l = new n.PointsMaterial(m(a({}, M), {
      color: (y = t == null ? void 0 : t.color) != null ? y : 16777215,
      depthTest: !0,
      opacity: (V = t == null ? void 0 : t.opacity) != null ? V : 1
    })), D = new n.PointsMaterial(m(a({}, M), {
      size: l.size,
      color: l.color,
      depthWrite: !1,
      depthTest: !1,
      opacity: l.opacity * 0.5
    })), r = new n.Points(u, l), d = new n.Points(u, D);
    this.fontMesh = r, this.backgroundMesh = d, r.name = "FontMesh", d.name = "BackgroundMesh", r.renderOrder = 10, d.renderOrder = 0, this.add(r, d), t != null && t.point && this.position.copy(W(t.point)), t && this.setStyle(t), this.addEventListener("removed", () => {
      c.cacheObject.delete(this), c.checkDom(this);
    }), this.addEventListener("added", () => {
      c.cacheObject.add(this);
    }), c.checkDomEveryFrame();
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
      opacity: this.fontMesh.material.opacity,
      occlusionVisibility: this.fontMesh.material.depthTest,
      occlusionMode: this.backgroundMesh.visible ? "depthWrite" : "depthTest"
    };
  }
  get five() {
    var t, o;
    return (o = (t = window.globalModules) == null ? void 0 : t.five) != null ? o : window.$five;
  }
  setStyle(t) {
    g(t.color) && (this.fontMesh.material.setValues({ color: t.color }), this.backgroundMesh.material.setValues({ color: t.color })), g(t.size) && (this.fontMesh.material.setValues({ side: t.size }), this.backgroundMesh.material.setValues({ side: t.size })), g(t.occlusionVisibility) && (t.occlusionVisibility ? t.occlusionMode === "depthTest" ? (this.fontMesh.material.depthTest = !1, this.backgroundMesh.visible = !1) : (this.fontMesh.material.depthTest = !0, this.backgroundMesh.visible = !0) : (this.fontMesh.material.depthTest = !0, this.backgroundMesh.visible = !1));
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
    t && !this.dom && (this.dom = new B(this.five), this.dom.intersectCheck = !1, this.dom.simulate3D = !0, this.dom.container.style.display = this.visible ? "block" : "none");
    const o = (h) => {
      this.dom && this.dom.__text !== h && (this.dom.__text = h, h instanceof HTMLElement ? (this.dom.container.innerHTML = "", this.dom.container.appendChild(h)) : h ? this.dom.container.innerHTML = H(h, {
        style: ""
      }) : this.dom.container.innerHTML = "");
    };
    t ? (o(t), this.dom.setPosition(this.position.clone())) : o(null);
  }
}
export {
  ot as PointMesh
};
