var d = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var f = (p, i, t) => i in p ? d(p, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[i] = t, y = (p, i) => {
  for (var t in i || (i = {}))
    A.call(i, t) && f(p, t, i[t]);
  if (v)
    for (var t of v(i))
      w.call(i, t) && f(p, t, i[t]);
  return p;
};
var n = (p, i, t) => (f(p, typeof i != "symbol" ? i + "" : i, t), t);
var l = (p, i, t) => new Promise((e, m) => {
  var o = (s) => {
    try {
      a(t.next(s));
    } catch (c) {
      m(c);
    }
  }, r = (s) => {
    try {
      a(t.throw(s));
    } catch (c) {
      m(c);
    }
  }, a = (s) => s.done ? e(s.value) : Promise.resolve(s.value).then(o, r);
  a((t = t.apply(p, i)).next());
});
import * as u from "three";
import "../../../shared-utils/tag.js";
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
import { BetterTween as g } from "../../../shared-utils/animationFrame/BetterTween.js";
import "../../../shared-utils/five/FivePuppet.js";
import { CustomBezierCurve3 as x } from "../../../shared-utils/three/Extras/Curves/BezierCurve3.js";
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
  constructor(t, e = O) {
    super();
    n(this, "geometryConfig", {
      radius: 1.5 / 100,
      tubularSegments: 20,
      radialSegments: 8
    });
    n(this, "customID");
    n(this, "path");
    n(this, "pathLength", 0);
    n(this, "pathPoints");
    n(this, "texture");
    n(this, "opacityAnime");
    /** u / m: 每米水管对应到贴图上，应该对应的 u 的长度 */
    n(this, "uPreMeter", 1);
    t.geometryConfig && (this.geometryConfig = y(y({}, this.geometryConfig), t.geometryConfig)), this.customID = t.id || this.uuid, this.pathPoints = t.path, this.path = h.calculatePath(t.path.map((s) => new u.Vector3().fromArray(s))), this.pathLength = this.path.getLength(), this.texture = h.formatTexture(t.texture);
    const { radius: m, tubularSegments: o, radialSegments: r } = this.geometryConfig, a = h.formatTexture(t.texture);
    this.geometry = h.formatGeometryUV(
      new u.TubeBufferGeometry(this.path, o, m, r),
      this.pathLength,
      this.uPreMeter
    ), this.material = new u.ShaderMaterial({
      uniforms: {
        opacity: { value: 1 },
        uOffset: { value: 0 },
        vOffset: { value: 0 },
        envMap: {
          value: a
        }
      },
      transparent: !0,
      vertexShader: C,
      fragmentShader: e
    });
  }
  /** 根据控制点数量计算管道路径
   *
   * @description 两个控制点使用直线路径，多个控制点使用贝塞尔路径
   */
  static calculatePath(t) {
    return t.length === 2 ? new u.LineCurve3(t[0], t[1]) : new x(t);
  }
  static formatGeometryUV(t, e, m) {
    const o = t.getAttribute("uv");
    for (let r = 0; r < o.count; r++) {
      const a = o.getX(r) * e * m;
      o.setX(r, a);
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
      const e = 0;
      if (typeof (t == null ? void 0 : t.duration) != "number")
        return this.setOpacity(e);
      const m = this.material.uniforms.opacity.value;
      return m === e ? !0 : new Promise((r) => {
        this.opacityAnime = new g({ progress: m }).to({ progress: e }).onUpdate(({ progress: a }) => this.setOpacity(a)).onComplete(() => r(!0)).onDispose(() => {
          this.setOpacity(e), r(!1);
        }).play();
      });
    });
  }
  show(t) {
    return l(this, null, function* () {
      var o;
      (o = this.opacityAnime) == null || o.dispose();
      const e = 1;
      if (typeof (t == null ? void 0 : t.duration) != "number")
        return this.setOpacity(e);
      const m = this.material.uniforms.opacity.value;
      return new Promise((r) => {
        this.opacityAnime = new g({ progress: m }).to({ progress: e }).onUpdate(({ progress: a }) => this.setOpacity(a)).onComplete(() => r(!0)).onDispose(() => {
          this.setOpacity(e), r(!1);
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
