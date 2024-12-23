var A = Object.defineProperty;
var D = (c, p, t) => p in c ? A(c, p, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[p] = t;
var o = (c, p, t) => (D(c, typeof p != "symbol" ? p + "" : p, t), t);
import { Vector3 as n } from "three";
import { even as E } from "../../../shared-utils/even.js";
import { Subscribe as N } from "../../../shared-utils/Subscribe.js";
import { OpecityMesh as Q } from "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import { centerPoint as R } from "../../../shared-utils/three/centerPoint.js";
import { getObjectVisible as L } from "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/tag.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import { CSS3DObject as T } from "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../generateBehindFiveElement.js";
import "@realsee/five/line";
import { isNil as O } from "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../shared-utils/five/FivePuppet.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/three/core/Raycaster.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../shared-utils/throttle.js";
import "../../../shared-utils/five/fiveModelLoad.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "./CSS3DObject.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/CSS3DRender/index.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../shared-utils/three/IObject3D.js";
import "../../../Sculpt/utils/removeAllTag.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "./CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "@realsee/five";
const $ = 1, W = `CSS3DObjectPlus@${$}`, k = 216e-5, z = 3e-3;
class Gt extends T {
  constructor(t) {
    var x, b, w, g, V;
    if (O(t.cornerPoints) && O(t.width))
      throw new Error("cornerPoints and width cannot be both empty");
    const i = (x = t.container) != null ? x : document.createElement("div"), s = (b = t.cornerPoints) != null ? b : (() => {
      const e = t.width / 2;
      return [
        new n(-e, e, 0),
        new n(-e, -e, 0),
        new n(e, -e, 0),
        new n(e, e, 0)
      ];
    })(), r = (w = t.ratio) != null ? w : z, P = (g = t.dpr) != null ? g : 1, F = (V = t.pointerEvents) != null ? V : "auto", h = Math.max(k, r), l = s[0].distanceTo(s[1]), d = s[1].distanceTo(s[2]), m = E(l / r * P), a = E(d / r * P), y = R(...s);
    let u;
    if (h === r)
      i.style.width = `${m}px`, i.style.height = `${a}px`, u = i;
    else {
      const e = document.createElement("div");
      e.style.width = `${m}px`, e.style.height = `${a}px`, e.style.pointerEvents = "none";
      const S = r / h;
      i.style.position = "absolute", i.style.left = "0", i.style.top = "0", i.style.width = `${S * m}px`, i.style.height = `${S * a}px`, e.appendChild(i), u = e;
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
    o(this, "hooks", new N());
    o(this, "opacityMesh");
    o(this, "selfVisible", !0);
    o(this, "setVisible", (t) => {
      this.selfVisible = t, this.visible = L(this.parent) && this.selfVisible, this.opacityMesh && (this.opacityMesh.visible = this.visible);
    });
    o(this, "updateVisible", () => {
      this.setVisible(this.selfVisible);
    });
    /**
     * @description: 生成透明Mesh
     */
    o(this, "createOpacityMesh", (t) => {
      const { domWidthPx: i, domHeightPx: s } = t, r = new Q(i, s);
      return r.position.copy(t.position), r.rotation.copy(t.rotation), r.scale.copy(t.scale), r;
    });
    if (i.style.pointerEvents = F, Object.assign(i.style, t.style), this.scale.set(h, h, h), this.cornerPoints = s, this.ratio = r, this.container = i, t.mode && (this.mode = t.mode), h === r)
      this.width = l, this.height = d, this.domWidthPx = m, this.domHeightPx = a, this.centerPosition = y;
    else {
      const e = r / h;
      this.width = e * l, this.height = e * d, this.domWidthPx = e * m, this.domHeightPx = e * a, this.centerPosition = new n().subVectors(y, s[0]).multiplyScalar(e).add(s[0]);
    }
    i.classList.add(`${W}__container`);
    const C = new n().subVectors(s[1], s[0]), M = new n().subVectors(s[3], s[0]), H = new n().crossVectors(C, M).normalize();
    this.lookAt(H);
    const f = this.up.clone().applyQuaternion(this.quaternion), v = M.clone(), j = new n().crossVectors(f, v).normalize();
    this.rotateOnWorldAxis(j, f.angleTo(v)), this.position.copy(y), this.addEventListener("added", () => {
      var e;
      this.mode === "front" && ((e = this.opacityMesh) == null || e.removeFromParent());
    }), this.addEventListener("removed", () => {
      var e;
      (e = this.opacityMesh) == null || e.removeFromParent();
    });
  }
  removeFromParent() {
    var i;
    const t = this.parent;
    return t !== null && t.remove(this), (i = this.opacityMesh) == null || i.removeFromParent(), this;
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
    var i;
    super.applyMatrix4(t), (i = this.opacityMesh) == null || i.applyMatrix4(t);
  }
  applyQuaternion(t) {
    var i;
    return super.applyQuaternion(t), (i = this.opacityMesh) == null || i.applyQuaternion(t), this;
  }
  applyScaleMatrix4(t) {
    var i;
    this.scale.applyMatrix4(t), (i = this.opacityMesh) == null || i.scale.applyMatrix4(t);
  }
}
export {
  Gt as CSS3DObjectPlus,
  z as DefaultRatio,
  k as MinRatio
};
