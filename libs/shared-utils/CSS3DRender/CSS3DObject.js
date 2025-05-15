var A = Object.defineProperty;
var H = (m, r, t) => r in m ? A(m, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : m[r] = t;
var o = (m, r, t) => (H(m, typeof r != "symbol" ? r + "" : r, t), t);
import { Vector3 as n } from "three";
import { even as M } from "../even.js";
import { OpecityMesh as N } from "./OpacityMesh.js";
import { centerPoint as R } from "../three/centerPoint.js";
import "../tag.js";
import "../../vendor/hammerjs/hammer.js";
import "../three/PointSelector/index.js";
import { CSS3DObject as T } from "../three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { isNil as O } from "../isNil.js";
import "../three/core/Five_LineMaterial2.js";
import "../three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../five/FivePuppet.js";
const $ = 1, V = `CSS3DObject@${$}`, z = 216e-5, F = 3e-3;
class nt extends T {
  constructor(t) {
    var b, f, v, S, _;
    if (O(t.cornerPoints) && O(t.width))
      throw new Error("cornerPoints and width cannot be both empty");
    const i = (b = t.container) != null ? b : document.createElement("div"), s = (f = t.cornerPoints) != null ? f : (() => {
      const e = t.width / 2;
      return [
        new n(-e, e, 0),
        new n(-e, -e, 0),
        new n(e, -e, 0),
        new n(e, e, 0)
      ];
    })(), c = (v = t.ratio) != null ? v : F, w = (S = t.dpr) != null ? S : 1, j = (_ = t.pointerEvents) != null ? _ : "auto", h = Math.max(z, c), a = s[0].distanceTo(s[1]), y = s[1].distanceTo(s[2]);
    let l = M(a / c * w), d = M(y / c * w);
    const u = R(...s);
    let p;
    if (h === c)
      i.style.width = `${l}px`, i.style.height = `${d}px`, p = i;
    else {
      const e = document.createElement("div");
      e.style.width = `${l}px`, e.style.height = `${d}px`, e.style.pointerEvents = "none";
      const E = c / h;
      i.style.position = "absolute", i.style.left = "0", i.style.top = "0", i.style.width = `${E * l}px`, i.style.height = `${E * d}px`, e.appendChild(i), p = e;
    }
    super(p);
    o(this, "version", $);
    o(this, "isCSS3DObject", !0);
    o(this, "name", V);
    /**
     * @description object dom
     */
    o(this, "container");
    o(this, "width");
    o(this, "height");
    o(this, "domWidthPx");
    o(this, "domHeightPx");
    o(this, "cornerPoints");
    o(this, "centerPosition");
    o(this, "ratio");
    o(this, "_mode", "front");
    o(this, "_opacityMesh");
    if (p.id = this.id.toString(), i.style.pointerEvents = j, Object.assign(i.style, t.style), this.scale.set(h, h, h), this.cornerPoints = s, this.ratio = c, this.container = i, t.mode && (this.mode = t.mode), h === c)
      this.width = a, this.height = y, this.centerPosition = u;
    else {
      const e = c / h;
      this.width = e * a, this.height = e * y, l = e * l, d = e * d, this.centerPosition = new n().subVectors(u, s[0]).multiplyScalar(e).add(s[0]);
    }
    this.domWidthPx = l, this.domHeightPx = d, i.classList.add(`${V}__container`);
    const D = new n().subVectors(s[1], s[0]), P = new n().subVectors(s[3], s[0]), W = new n().crossVectors(D, P).normalize();
    this.lookAt(W);
    const g = this.up.clone().applyQuaternion(this.quaternion), x = P.clone(), C = new n().crossVectors(g, x).normalize();
    this.rotateOnWorldAxis(C, g.angleTo(x)), this.position.copy(u), this._opacityMesh = new N(l, d), this._opacityMesh.visible = t.mode === "behind", this.add(this._opacityMesh);
  }
  get mode() {
    return this._mode;
  }
  set mode(t) {
    this._mode = t, this._opacityMesh && (this._opacityMesh.visible = t === "behind");
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  dispose() {
    this.container.remove(), this.removeFromParent();
  }
}
export {
  nt as CSS3DObjectPlus
};
