var A = Object.defineProperty;
var F = (m, r, t) => r in m ? A(m, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : m[r] = t;
var o = (m, r, t) => (F(m, typeof r != "symbol" ? r + "" : r, t), t);
import { Vector3 as s } from "three";
import { even as M } from "../even.js";
import { OpecityMesh as H } from "./OpacityMesh.js";
import { centerPoint as N } from "../three/centerPoint.js";
import "../tag.js";
import "../../vendor/hammerjs/hammer.js";
import "../three/PointSelector/index.js";
import { CSS3DObject as R } from "../three/CSS3DRenderer/index.js";
import { addFrontScene as T, addBehindScene as z, removeFrontScene as B, removeBehindScene as k } from "./index.js";
import "@realsee/five/line";
import { isNil as O } from "../isNil.js";
import "../three/core/Five_LineMaterial2.js";
import "../three/core/Sphere.js";
import "../three/blink.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../vendor/earcut/src/earcut.js";
import "../five/FivePuppet.js";
const $ = 1, V = `CSS3DObject@${$}`, q = 216e-5, I = 3e-3;
class mt extends R {
  constructor(t) {
    var g, x, v, S, _;
    if (O(t.cornerPoints) && O(t.width))
      throw new Error("cornerPoints and width cannot be both empty");
    const i = (g = t.container) != null ? g : document.createElement("div"), n = (x = t.cornerPoints) != null ? x : (() => {
      const e = t.width / 2;
      return [
        new s(-e, e, 0),
        new s(-e, -e, 0),
        new s(e, -e, 0),
        new s(e, e, 0)
      ];
    })(), c = (v = t.ratio) != null ? v : I, u = (S = t.dpr) != null ? S : 1, j = (_ = t.pointerEvents) != null ? _ : "auto", h = Math.max(q, c), a = n[0].distanceTo(n[1]), y = n[1].distanceTo(n[2]);
    let d = M(a / c * u), l = M(y / c * u);
    const f = N(...n);
    let p;
    if (h === c)
      i.style.width = `${d}px`, i.style.height = `${l}px`, p = i;
    else {
      const e = document.createElement("div");
      e.style.width = `${d}px`, e.style.height = `${l}px`, e.style.pointerEvents = "none";
      const E = c / h;
      i.style.position = "absolute", i.style.left = "0", i.style.top = "0", i.style.width = `${E * d}px`, i.style.height = `${E * l}px`, e.appendChild(i), p = e;
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
    if (p.id = this.id.toString(), i.style.pointerEvents = j, Object.assign(i.style, t.style), this.scale.set(h, h, h), this.cornerPoints = n, this.ratio = c, this.container = i, t.mode && (this.mode = t.mode), h === c)
      this.width = a, this.height = y, this.centerPosition = f;
    else {
      const e = c / h;
      this.width = e * a, this.height = e * y, d = e * d, l = e * l, this.centerPosition = new s().subVectors(f, n[0]).multiplyScalar(e).add(n[0]);
    }
    this.domWidthPx = d, this.domHeightPx = l, i.classList.add(`${V}__container`);
    const D = new s().subVectors(n[1], n[0]), w = new s().subVectors(n[3], n[0]), W = new s().crossVectors(D, w).normalize();
    this.lookAt(W);
    const P = this.up.clone().applyQuaternion(this.quaternion), b = w.clone(), C = new s().crossVectors(P, b).normalize();
    this.rotateOnWorldAxis(C, P.angleTo(b)), this.position.copy(f), this._opacityMesh = new H(d, l), this._opacityMesh.visible = t.mode === "behind", this.add(this._opacityMesh), t.mode === "front" ? T(this) : t.mode === "behind" && z(this);
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
    this.container.remove(), this.removeFromParent(), this.mode === "front" ? B(this) : this.mode === "behind" && k(this);
  }
}
export {
  mt as CSS3DObjectPlus
};
