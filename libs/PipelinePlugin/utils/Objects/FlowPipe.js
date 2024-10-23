var v = Object.defineProperty;
var u = (o, e, t) => e in o ? v(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var r = (o, e, t) => (u(o, typeof e != "symbol" ? e + "" : e, t), t);
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import { requestAnimationFrameInterval as c } from "../../../shared-utils/animationFrame/index.js";
import { ObjectPipe as h } from "./Pipe.js";
import "../../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../../vendor/three/build/three.module.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
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
class K extends h {
  constructor(t) {
    super(t, d);
    /** 初始状态下，当前水管内的水流在整体管道上的位移
     * @description 因为水管是不连续的，而要达到水流的连续效果，需要用过贴图的 uOffset 控制每根水管的初始状态
     */
    r(this, "initialDisplacement", 0);
    r(this, "oldTime", (/* @__PURE__ */ new Date()).getTime());
    /** 横向流动速度：m / s */
    r(this, "flowSpeed", 0.6);
    /** 纵向旋转速度：deg / s */
    r(this, "rotateSpeed", 0);
    r(this, "flowAnimationDisposer", () => {
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
    const i = t * -1, m = this.initialDisplacement + i;
    this.moveFromOrigin(m);
  }
  flow() {
    this.flowAnimationDisposer(), this.oldTime = (/* @__PURE__ */ new Date()).getTime();
    let t = 0, i = 0;
    const m = c(() => {
      const n = (/* @__PURE__ */ new Date()).getTime(), s = n - this.oldTime, a = this.flowSpeed * (s / 1e3), l = this.rotateSpeed * (s / 1e3);
      t = t + a, i = i + l;
      const p = 1 / 360, f = i * p;
      this.material.uniforms.vOffset.value = f, this.moveForwardFromInitialOffset(t), this.oldTime = n;
    });
    this.flowAnimationDisposer = function() {
      m(), this.moveForwardFromInitialOffset(0);
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
  K as ObjectFlowPipe
};
