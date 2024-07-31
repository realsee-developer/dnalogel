var C = Object.defineProperty, N = Object.defineProperties;
var P = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var n = (i, e, t) => e in i ? C(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, c = (i, e) => {
  for (var t in e || (e = {}))
    k.call(e, t) && n(i, t, e[t]);
  if (M)
    for (var t of M(e))
      B.call(e, t) && n(i, t, e[t]);
  return i;
}, g = (i, e) => N(i, P(e));
var A = (i, e, t) => (n(i, typeof e != "symbol" ? e + "" : e, t), t);
import * as o from "three";
import { DEFAULT_HIGHLIGHT_OPACITY as b } from "../utils/color.js";
import { IObject3D as E } from "../../shared-utils/three/IObject3D.js";
import { anyPositionToVector3 as m } from "../../shared-utils/positionToVector3.js";
import "hammerjs";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { notNil as u } from "../../shared-utils/isNil.js";
const F = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sHDgwCEMBJZu0AAAAdaVRYdENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAABM5JREFUWMO1V0tPG2cUPZ4Hxh6DazIOrjFNqJs0FIMqWFgWQkatsmvVbtggKlSVRVf5AWz4AWz4AUSKEChll19QJYSXkECuhFxsHjEhxCYm+DWGMZ5HF72DJq4bAzFXurI0M/I5997v3u9cC65vTJVn2lX/xHINQOYSBLTLEuIuCWw4Z3IGAEvf6ASmVHjNzHCXBG4A0AjACsAOwEbO0nsFQBnAGYASAIl+ZRMR7SolMEdsByD09fV5R0ZGgg8ePPjW5/N1iqLYpuu6RZblciKR2I9Go69evnwZnZ+fjwI4IS8AKBIRzeQfJWCANwKwh0KhtrGxsYehUOin1tbW+zzP23ietzY2NnIAoGmaLsuyUiqVyvl8XtrY2NiamZn589mzZxsAUgCOAeQAnFI2tI+VxIjaAeDzoaGh7xYWFuZOTk6OZVk+12uYqqq6JEnn0Wg0OT4+/geAXwGEAdwDIFJQXC1wO4DWR48e/RCPxxclSSroVzRFUbSDg4P848ePFwH8DuAhkWih83TRQWxFOXgAwvDwcOfo6OhvXV1d39tsNtuVBwTDWBwOh1UUxVsMw1hXVlbSdCgNV43uYSvrHg6H24aHh38eHBz85TrgF9FYLHA4HLzH43FvbW2d7u/vG+dANp8FpqIlbd3d3V8Fg8EfBUFw4BONZVmL3+9vHhkZCQL4AoAHgJPK8G+yzC0XDofdoVAo5PP5vkadTBAEtr+/39ff3x8gAp/RPOEqx2qjx+NpvXv3bk9DQ0NDvQgwDIOWlhZrMBj8kgi0UJdxRgYMArzL5XJ7vd57qLPZ7Xamp6fnNgBXtQxcjFuHw+Hyer3t9SYgCAITCAScAJoBNNEY/08GOFVVrfVMv7kMNDntFD1vjIAPrlRN0xjckOm6biFQ3jwNPwDMZrOnqVTqfb3Bi8Wivru7W/VCYkwPlKOjo0IikXh7EwQikYgE4Nw0CfXKDCipVCoTj8df3QABbW1tLUc6oUgkFPMkVACUNjc337148eKvw8PDbJ2jP1taWkoCyNDVXDSECmNSK4qiKNLq6urW8+fPI/UicHx8rD59+jSVy+WOAKSJhKENwFItLtoxk8mwsixzHR0dHe3t7c5PAU+n09rs7OzJkydPYqVSaQfANoDXALIk31S2smU1TWMPDg7K5XKZ7+3t9TudTut1U7+wsFCcmJiIpdPpbQBxADsAknQWymYCOukBHYCuKApisdhpMpnURFEU79y503TVyKenpzOTk5M7e3t7MQKPV0Zv1gNm+awB0MvlshqLxfLb29uyJElWURSbXC4XXyvqxcXFs6mpqeTc3Nzu3t7e3wQcA7BPZ8Cov1pNlJplmQtAG8MwHV6v95tAINA5MDBwPxAIuLu6upr8fr/VAN3c3JQjkcjZ+vp6fnl5+d2bN29SuVzuNYAEpf01CdRChUL+X1VskHACuA3Ay3Fcu9vt7nA6nZ7m5uYWQRCaNE3jVVW15PP580KhIGUymWw2m00DOAJwSP4WwPtq4LX2Ao6USxNlQyS/RcQcdLGwlNIz6vEMAaZpNzCk2Pll94LK/cDYimxERiBwG10sxjgvEZBE0UpE6vxj+0Ct5bTaXthgEhRmja8QWNkkPGsuIpfdjpkK+cZUWTC0KredVmtD/gdlSl6EG4AMvQAAAABJRU5ErkJggg==";
let w = null;
class U extends E {
  constructor(t) {
    var f, a;
    super();
    A(this, "name", "PointMesh");
    A(this, "opacityBeforeHighlight");
    A(this, "highlighted", !1);
    A(this, "fontMesh");
    A(this, "backgroundMesh");
    const l = new o.BufferGeometry();
    l.setAttribute("position", new o.Float32BufferAttribute([0, 0, 0], 3));
    const d = {
      transparent: !0,
      side: o.DoubleSide,
      size: (f = t == null ? void 0 : t.size) != null ? f : 8,
      map: w || (w = new o.TextureLoader().load(F)),
      sizeAttenuation: !1
    }, r = new o.PointsMaterial(g(c({}, d), {
      color: (a = t == null ? void 0 : t.color) != null ? a : 16777215,
      depthTest: !0,
      opacity: 1
    })), V = new o.PointsMaterial(g(c({}, d), {
      size: r.size,
      color: r.color,
      depthWrite: !1,
      depthTest: !1,
      opacity: 0.5
    })), s = new o.Points(l, r), h = new o.Points(l, V);
    this.fontMesh = s, this.backgroundMesh = h, s.name = "FontMesh", h.name = "BackgroundMesh", s.renderOrder = 10, h.renderOrder = 0, this.add(s, h), t != null && t.point && this.position.copy(m(t.point)), t && this.setStyle(t);
  }
  get color() {
    return this.fontMesh.material.color;
  }
  get size() {
    return this.fontMesh.material.size;
  }
  setStyle(t) {
    u(t.color) && (this.fontMesh.material.setValues({ color: t.color }), this.backgroundMesh.material.setValues({ color: t.color })), u(t.size) && (this.fontMesh.material.setValues({ side: t.size }), this.backgroundMesh.material.setValues({ side: t.size })), u(t.occlusionVisibility) && (t.occlusionVisibility ? t.occlusionMode === "depthTest" ? (this.fontMesh.material.depthTest = !1, this.backgroundMesh.visible = !1) : (this.fontMesh.material.depthTest = !0, this.backgroundMesh.visible = !0) : (this.fontMesh.material.depthTest = !0, this.backgroundMesh.visible = !1));
  }
  highlight() {
    this.highlighted || (this.highlighted = !0, this.opacityBeforeHighlight = this.fontMesh.material.opacity, this.fontMesh.material.setValues({ opacity: this.opacityBeforeHighlight * b }));
  }
  unhighlight() {
    this.highlighted && (this.highlighted = !1, this.fontMesh.material.setValues({ opacity: this.opacityBeforeHighlight }));
  }
}
export {
  U as PointMesh
};
