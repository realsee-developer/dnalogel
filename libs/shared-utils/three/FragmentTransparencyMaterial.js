var i = Object.defineProperty;
var o = (n, a, e) => a in n ? i(n, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[a] = e;
var r = (n, a, e) => (o(n, typeof a != "symbol" ? a + "" : a, e), e);
import * as t from "three";
class s extends t.ShaderMaterial {
  constructor(e) {
    super();
    r(this, "transparent", !1);
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
      map: { value: e }
    };
  }
}
export {
  s as FragmentTransparencyMaterial
};
