var A = Object.defineProperty;
var D = (m, p, t) => p in m ? A(m, p, { enumerable: !0, configurable: !0, writable: !0, value: t }) : m[p] = t;
var e = (m, p, t) => (D(m, typeof p != "symbol" ? p + "" : p, t), t);
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
import "../../../shared-utils/three/blink.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "./CSS3DRender.js";
import "../../../vendor/earcut/src/earcut.js";
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
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/five/getFiveFromParentChain.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../Sculpt/utils/unit.js";
import "../../../Sculpt/utils/renderDom.js";
import "./CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "./CSS3DScene.js";
import "../getAllCSS3DObject.js";
import "./CSS3DGroup.js";
import "@realsee/five";
const $ = 1, W = `CSS3DObjectPlus@${$}`, k = 216e-5, z = 3e-3;
class ei extends T {
  constructor(t) {
    var x, b, w, g, V;
    if (O(t.cornerPoints) && O(t.width))
      throw new Error("cornerPoints and width cannot be both empty");
    const i = (x = t.container) != null ? x : document.createElement("div"), r = (b = t.cornerPoints) != null ? b : (() => {
      const o = t.width / 2;
      return [
        new n(-o, o, 0),
        new n(-o, -o, 0),
        new n(o, -o, 0),
        new n(o, o, 0)
      ];
    })(), s = (w = t.ratio) != null ? w : z, P = (g = t.dpr) != null ? g : 1, F = (V = t.pointerEvents) != null ? V : "auto", h = Math.max(k, s), l = r[0].distanceTo(r[1]), d = r[1].distanceTo(r[2]), c = E(l / s * P), a = E(d / s * P), y = R(...r);
    let u;
    if (h === s)
      i.style.width = `${c}px`, i.style.height = `${a}px`, u = i;
    else {
      const o = document.createElement("div");
      o.style.width = `${c}px`, o.style.height = `${a}px`, o.style.pointerEvents = "none";
      const S = s / h;
      i.style.position = "absolute", i.style.left = "0", i.style.top = "0", i.style.width = `${S * c}px`, i.style.height = `${S * a}px`, o.appendChild(i), u = o;
    }
    super(u);
    e(this, "version", $);
    e(this, "isCSS3DObjectPlus", !0);
    e(this, "isCSS3DObject", !0);
    e(this, "name", W);
    e(this, "container");
    e(this, "width");
    e(this, "height");
    e(this, "domWidthPx");
    e(this, "domHeightPx");
    e(this, "cornerPoints");
    e(this, "centerPosition");
    e(this, "ratio");
    e(this, "mode", "front");
    e(this, "hooks", new N());
    e(this, "opacityMesh");
    e(this, "selfVisible", !0);
    e(this, "setVisible", (t) => {
      this.selfVisible = t, this.visible = L(this.parent) && this.selfVisible, this.opacityMesh && (this.opacityMesh.visible = this.visible);
    });
    e(this, "updateVisible", () => {
      this.setVisible(this.selfVisible);
    });
    /**
     * @description: 生成透明Mesh
     */
    e(this, "createOpacityMesh", (t) => {
      const { domWidthPx: i, domHeightPx: r } = t, s = new Q(i, r);
      return s.position.copy(t.position), s.rotation.copy(t.rotation), s.scale.copy(t.scale), s;
    });
    if (i.style.pointerEvents = F, Object.assign(i.style, t.style), this.scale.set(h, h, h), this.cornerPoints = r, this.ratio = s, this.container = i, t.mode && (this.mode = t.mode), h === s)
      this.width = l, this.height = d, this.domWidthPx = c, this.domHeightPx = a, this.centerPosition = y;
    else {
      const o = s / h;
      this.width = o * l, this.height = o * d, this.domWidthPx = o * c, this.domHeightPx = o * a, this.centerPosition = new n().subVectors(y, r[0]).multiplyScalar(o).add(r[0]);
    }
    i.classList.add(`${W}__container`);
    const C = new n().subVectors(r[1], r[0]), M = new n().subVectors(r[3], r[0]), H = new n().crossVectors(C, M).normalize();
    this.lookAt(H);
    const f = this.up.clone().applyQuaternion(this.quaternion), v = M.clone(), j = new n().crossVectors(f, v).normalize();
    this.rotateOnWorldAxis(j, f.angleTo(v)), this.position.copy(y), this.addEventListener("added", () => {
      var o;
      this.mode === "front" && ((o = this.opacityMesh) == null || o.removeFromParent());
    }), this.addEventListener("removed", () => {
      var o;
      (o = this.opacityMesh) == null || o.removeFromParent();
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
  ei as CSS3DObjectPlus,
  z as DefaultRatio,
  k as MinRatio
};
