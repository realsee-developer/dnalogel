var i = Object.defineProperty;
var o = (n, e, a) => e in n ? i(n, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[e] = a;
var r = (n, e, a) => (o(n, typeof e != "symbol" ? e + "" : e, a), a);
import * as t from "three";
class s extends t.ShaderMaterial {
  constructor(a) {
    super();
    r(this, "transparent", !0);
    r(this, "depthWrite", !1);
    r(this, "blending", t.CustomBlending);
    r(this, "blendSrc", t.SrcAlphaFactor);
    r(this, "blendDst", t.OneMinusSrcAlphaFactor);
    r(this, "blendSrcAlpha", t.OneFactor);
    r(this, "blendDstAlpha", t.OneMinusSrcAlphaFactor);
    r(
      this,
      "vertexShader",
      /* glsl */
      `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `
    );
    r(
      this,
      "fragmentShader",
      /* glsl */
      `
    uniform sampler2D map;
    // 纹理坐标
    varying vec2 vUv;
    void main() {
      gl_FragColor = texture2D(map, vUv);
    }
  `
    );
    this.uniforms = {
      map: { value: a }
    };
  }
}
export {
  s as FragmentTransparencyMaterial
};
