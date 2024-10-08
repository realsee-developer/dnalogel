var A = Object.defineProperty;
var D = (p, h, t) => h in p ? A(p, h, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[h] = t;
var o = (p, h, t) => (D(p, typeof h != "symbol" ? h + "" : h, t), t);
import { CSS3DObject as N } from "three/examples/jsm/renderers/CSS3DRenderer";
import { Vector3 as n } from "three";
import { even as E } from "../even.js";
import { Subscribe as Q } from "../../../shared-utils/Subscribe.js";
import R from "./OpacityMesh.js";
import { centerPoint as L } from "../../../shared-utils/three/centerPoint.js";
import { getObjectVisible as T } from "../../../shared-utils/three/getObjectVisible.js";
import "hammerjs";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import { isNil as O } from "../../../shared-utils/isNil.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../../vendor/three/build/three.module.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/dom/resizeObserver.js";
const $ = 1, W = `CSS3DObjectPlus@${$}`, k = 216e-5, z = 3e-3;
class Pt extends N {
  constructor(t) {
    var x, b, w, g, V;
    if (O(t.cornerPoints) && O(t.width))
      throw new Error("cornerPoints and width cannot be both empty");
    const e = (x = t.container) != null ? x : document.createElement("div"), s = (b = t.cornerPoints) != null ? b : (() => {
      const i = t.width / 2;
      return [
        new n(-i, i, 0),
        new n(-i, -i, 0),
        new n(i, -i, 0),
        new n(i, i, 0)
      ];
    })(), r = (w = t.ratio) != null ? w : z, P = (g = t.dpr) != null ? g : 1, F = (V = t.pointerEvents) != null ? V : "auto", c = Math.max(k, r), m = s[0].distanceTo(s[1]), d = s[1].distanceTo(s[2]), a = E(m / r * P), l = E(d / r * P), y = L(...s);
    let u;
    if (c === r)
      e.style.width = `${a}px`, e.style.height = `${l}px`, u = e;
    else {
      const i = document.createElement("div");
      i.style.width = `${a}px`, i.style.height = `${l}px`, i.style.pointerEvents = "none";
      const S = r / c;
      e.style.position = "absolute", e.style.left = "0", e.style.top = "0", e.style.width = `${S * a}px`, e.style.height = `${S * l}px`, i.appendChild(e), u = i;
    }
    super(u);
    o(this, "version", $);
    o(this, "isCSS3DObjectPlus", !0);
    o(this, "isCSS3DObject", !0);
    o(this, "name", W);
    o(this, "container");
    o(this, "width");
    o(this, "height");
    o(this, "domWidthPx");
    o(this, "domHeightPx");
    o(this, "cornerPoints");
    o(this, "centerPosition");
    o(this, "ratio");
    o(this, "mode", "front");
    o(this, "hooks", new Q());
    o(this, "opacityMesh");
    o(this, "selfVisible", !0);
    o(this, "setVisible", (t) => {
      this.selfVisible = t, this.visible = T(this.parent) && this.selfVisible, this.opacityMesh && (this.opacityMesh.visible = this.visible);
    });
    o(this, "updateVisible", () => {
      this.setVisible(this.selfVisible);
    });
    /**
     * @description: 生成透明Mesh
     */
    o(this, "createOpacityMesh", (t) => {
      const { domWidthPx: e, domHeightPx: s } = t, r = new R(e, s);
      return r.position.copy(t.position), r.rotation.copy(t.rotation), r.scale.copy(t.scale), r;
    });
    if (e.style.pointerEvents = F, Object.assign(e.style, t.style), this.scale.set(c, c, c), this.cornerPoints = s, this.ratio = r, this.container = e, t.mode && (this.mode = t.mode), c === r)
      this.width = m, this.height = d, this.domWidthPx = a, this.domHeightPx = l, this.centerPosition = y;
    else {
      const i = r / c;
      this.width = i * m, this.height = i * d, this.domWidthPx = i * a, this.domHeightPx = i * l, this.centerPosition = new n().subVectors(y, s[0]).multiplyScalar(i).add(s[0]);
    }
    e.classList.add(`${W}__container`);
    const C = new n().subVectors(s[1], s[0]), M = new n().subVectors(s[3], s[0]), H = new n().crossVectors(C, M).normalize();
    this.lookAt(H);
    const f = this.up.clone().applyQuaternion(this.quaternion), v = M.clone(), j = new n().crossVectors(f, v).normalize();
    this.rotateOnWorldAxis(j, f.angleTo(v)), this.position.copy(y), this.addEventListener("added", () => {
      var i;
      this.mode === "front" && ((i = this.opacityMesh) == null || i.removeFromParent());
    }), this.addEventListener("removed", () => {
      var i;
      (i = this.opacityMesh) == null || i.removeFromParent();
    });
  }
  removeFromParent() {
    var e;
    const t = this.parent;
    return t !== null && t.remove(this), (e = this.opacityMesh) == null || e.removeFromParent(), this;
  }
  removeOpacityMesh() {
    var t;
    return (t = this.opacityMesh) == null || t.removeFromParent(), this.opacityMesh = void 0, this;
  }
  dispose() {
    var t;
    this.container.remove(), this.removeFromParent(), (t = this.opacityMesh) == null || t.removeFromParent();
  }
  getOpacityMesh() {
    if (this.opacityMesh)
      return this.opacityMesh;
    {
      const t = this.createOpacityMesh(this);
      return this.opacityMesh = t, t;
    }
  }
  applyMatrix4(t) {
    var e;
    super.applyMatrix4(t), (e = this.opacityMesh) == null || e.applyMatrix4(t);
  }
  applyQuaternion(t) {
    var e;
    return super.applyQuaternion(t), (e = this.opacityMesh) == null || e.applyQuaternion(t), this;
  }
  applyScaleMatrix4(t) {
    var e;
    this.scale.applyMatrix4(t), (e = this.opacityMesh) == null || e.scale.applyMatrix4(t);
  }
}
export {
  Pt as CSS3DObjectPlus,
  z as DefaultRatio,
  k as MinRatio
};
