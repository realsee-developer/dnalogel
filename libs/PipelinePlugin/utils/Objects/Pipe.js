var d = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var f = (a, e, t) => e in a ? d(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, y = (a, e) => {
  for (var t in e || (e = {}))
    A.call(e, t) && f(a, t, e[t]);
  if (v)
    for (var t of v(e))
      w.call(e, t) && f(a, t, e[t]);
  return a;
};
var m = (a, e, t) => (f(a, typeof e != "symbol" ? e + "" : e, t), t);
var l = (a, e, t) => new Promise((i, s) => {
  var o = (p) => {
    try {
      n(t.next(p));
    } catch (c) {
      s(c);
    }
  }, r = (p) => {
    try {
      n(t.throw(p));
    } catch (c) {
      s(c);
    }
  }, n = (p) => p.done ? i(p.value) : Promise.resolve(p.value).then(o, r);
  n((t = t.apply(a, e)).next());
});
import * as u from "three";
import "hammerjs";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { BetterTween as g } from "../../../shared-utils/animationFrame/BetterTween.js";
import { CustomBezierCurve3 as x } from "../../../shared-utils/three/Extras/Curves/BezierCurve3.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../shared-utils/util.js";
import "../../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../../CSS3DRenderPlugin/utils/even.js";
import "../../../shared-utils/Subscribe.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../../shared-utils/animationFrame/index.js";
import "../../../shared-utils/three/Extras/Core/Interpolations.js";
import "../../../shared-utils/three/Extras/Core/Interpolations2.js";
const C = (
  /* glsl */
  `
  varying vec2 vUv;
  void main() {
    vUv = uv; 
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
), O = (
  /* glsl */
  `
  varying vec2 vUv;
  uniform float uOffset;
  uniform float vOffset;
  uniform float opacity;
  uniform mediump sampler2D envMap;

  void main(){
    float u = vUv.x + uOffset;
    float v = vUv.y + vOffset;
    vec2 uv = vec2(u, v);
    gl_FragColor = texture2D(envMap, uv);
    gl_FragColor.a = gl_FragColor.a * opacity;
  }
`
);
class h extends u.Mesh {
  constructor(t, i = O) {
    super();
    m(this, "geometryConfig", {
      radius: 1.5 / 100,
      tubularSegments: 20,
      radialSegments: 8
    });
    m(this, "customID");
    m(this, "path");
    m(this, "pathLength", 0);
    m(this, "pathPoints");
    m(this, "texture");
    m(this, "opacityAnime");
    /** u / m: 每米水管对应到贴图上，应该对应的 u 的长度 */
    m(this, "uPreMeter", 1);
    t.geometryConfig && (this.geometryConfig = y(y({}, this.geometryConfig), t.geometryConfig)), this.customID = t.id || this.uuid, this.pathPoints = t.path, this.path = h.calculatePath(t.path.map((p) => new u.Vector3().fromArray(p))), this.pathLength = this.path.getLength(), this.texture = h.formatTexture(t.texture);
    const { radius: s, tubularSegments: o, radialSegments: r } = this.geometryConfig, n = h.formatTexture(t.texture);
    this.geometry = h.formatGeometryUV(
      new u.TubeBufferGeometry(this.path, o, s, r),
      this.pathLength,
      this.uPreMeter
    ), this.material = new u.ShaderMaterial({
      uniforms: {
        opacity: { value: 1 },
        uOffset: { value: 0 },
        vOffset: { value: 0 },
        envMap: {
          value: n
        }
      },
      transparent: !0,
      vertexShader: C,
      fragmentShader: i
    });
  }
  /** 根据控制点数量计算管道路径
   *
   * @description 两个控制点使用直线路径，多个控制点使用贝塞尔路径
   */
  static calculatePath(t) {
    return t.length === 2 ? new u.LineCurve3(t[0], t[1]) : new x(t);
  }
  static formatGeometryUV(t, i, s) {
    const o = t.getAttribute("uv");
    for (let r = 0; r < o.count; r++) {
      const n = o.getX(r) * i * s;
      o.setX(r, n);
    }
    return t;
  }
  /**
   * 管道的 Texture 需要满足一定的要求，需要使用 formatTexture 先 format
   */
  static formatTexture(t) {
    return t.wrapS = u.RepeatWrapping, t.wrapT = u.RepeatWrapping, t;
  }
  hide(t) {
    return l(this, null, function* () {
      var o;
      (o = this.opacityAnime) == null || o.dispose();
      const i = 0;
      if (typeof (t == null ? void 0 : t.duration) != "number")
        return this.setOpacity(i);
      const s = this.material.uniforms.opacity.value;
      return s === i ? !0 : new Promise((r) => {
        this.opacityAnime = new g({ progress: s }).to({ progress: i }).onUpdate(({ progress: n }) => this.setOpacity(n)).onComplete(() => r(!0)).onDispose(() => {
          this.setOpacity(i), r(!1);
        }).play();
      });
    });
  }
  show(t) {
    return l(this, null, function* () {
      var o;
      (o = this.opacityAnime) == null || o.dispose();
      const i = 1;
      if (typeof (t == null ? void 0 : t.duration) != "number")
        return this.setOpacity(i);
      const s = this.material.uniforms.opacity.value;
      return new Promise((r) => {
        this.opacityAnime = new g({ progress: s }).to({ progress: i }).onUpdate(({ progress: n }) => this.setOpacity(n)).onComplete(() => r(!0)).onDispose(() => {
          this.setOpacity(i), r(!1);
        }).play();
      });
    });
  }
  setOpacity(t) {
    return this.material.uniforms.opacity.value = t, this.material.needsUpdate = !0, this.needsRender = !0, !0;
  }
  disposeAnime() {
    var t;
    (t = this.opacityAnime) == null || t.dispose(), this.opacityAnime = void 0;
  }
  dispose() {
    this.disposeAnime(), this.geometry.dispose(), this.material.dispose();
  }
}
export {
  h as ObjectPipe
};
