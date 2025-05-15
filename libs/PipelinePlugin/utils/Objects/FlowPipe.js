var v = Object.defineProperty;
var u = (r, o, t) => o in r ? v(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t;
var m = (r, o, t) => (u(r, typeof o != "symbol" ? o + "" : o, t), t);
import "../../../shared-utils/tag.js";
import "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { requestAnimationFrameInterval as c } from "../../../shared-utils/animationFrame/index.js";
import "../../../shared-utils/five/FivePuppet.js";
import { ObjectPipe as h } from "./Pipe.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
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
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/isNil.js";
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
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../Sculpt/utils/unit.js";
import "../../../Sculpt/utils/renderDom.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "../../../shared-utils/animationFrame/BetterTween.js";
import "../../../shared-utils/three/Extras/Curves/BezierCurve3.js";
import "../../../shared-utils/three/Extras/Core/Interpolations.js";
import "../../../shared-utils/three/Extras/Core/Interpolations2.js";
const d = (
  /* glsl */
  `
  varying vec2 vUv;
  uniform float uOffset;
  uniform float vOffset;
  uniform float opacity;
  uniform mediump sampler2D envMap;

  void main(){
    // u > 0 时，不显示。即贴图不向前移动时，全部使用 u = 0 的值进行平铺
    float u = min(vUv.x + uOffset, 0.0);
    float v = vUv.y + vOffset;
    vec2 uv = vec2(u, v);
    gl_FragColor = texture2D(envMap, uv);
    gl_FragColor.a = gl_FragColor.a * opacity;
  }
`
);
class Et extends h {
  constructor(t) {
    super(t, d);
    /** 初始状态下，当前水管内的水流在整体管道上的位移
     * @description 因为水管是不连续的，而要达到水流的连续效果，需要用过贴图的 uOffset 控制每根水管的初始状态
     */
    m(this, "initialDisplacement", 0);
    m(this, "oldTime", (/* @__PURE__ */ new Date()).getTime());
    /** 横向流动速度：m / s */
    m(this, "flowSpeed", 0.6);
    /** 纵向旋转速度：deg / s */
    m(this, "rotateSpeed", 0);
    m(this, "flowAnimationDisposer", () => {
    });
  }
  setInitialDisplacement(t, i = "backward") {
    this.initialDisplacement = Math.abs(t) * (i === "forward" ? -1 : 1), this.moveFromOrigin(this.initialDisplacement);
  }
  /** 水流移动「基于初始位置」
   * @description 因为贴图的运动与 u 的 uOffset 相反，比较反直觉，所以封装方法易于理解
   * @param displacement 位移：米 * 方向(向前 -> 正, 向后 -> 负)
   */
  moveFromOrigin(t) {
    const i = t * this.uPreMeter;
    return this.material.uniforms.uOffset.value = i, this.material.needsUpdate = !0, this.needsRender = !0, !0;
  }
  /** 水流移动「基于调整管道差值之后的位置」
   *
   * @param distance 位移：米 * 方向
   */
  moveForwardFromInitialOffset(t) {
    const i = t * -1, e = this.initialDisplacement + i;
    this.moveFromOrigin(e);
  }
  flow() {
    this.flowAnimationDisposer(), this.oldTime = (/* @__PURE__ */ new Date()).getTime();
    let t = 0, i = 0;
    const e = c(() => {
      const p = (/* @__PURE__ */ new Date()).getTime(), n = p - this.oldTime, s = this.flowSpeed * (n / 1e3), a = this.rotateSpeed * (n / 1e3);
      t = t + s, i = i + a;
      const l = 1 / 360, f = i * l;
      this.material.uniforms.vOffset.value = f, this.moveForwardFromInitialOffset(t), this.oldTime = p;
    });
    this.flowAnimationDisposer = function() {
      e(), this.moveForwardFromInitialOffset(0);
    };
  }
  stopFlow() {
    this.flowAnimationDisposer();
  }
  setSpeed(t) {
    typeof (t == null ? void 0 : t.flowSpeed) == "number" && (this.flowSpeed = t.flowSpeed), typeof (t == null ? void 0 : t.rotateSpeed) == "number" && (this.rotateSpeed = t.rotateSpeed);
  }
  disposeAnime() {
    super.disposeAnime(), this.flowAnimationDisposer();
  }
}
export {
  Et as ObjectFlowPipe
};
