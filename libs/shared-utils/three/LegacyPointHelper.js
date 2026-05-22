var r = Object.defineProperty;
var i = (a, n, e) => n in a ? r(a, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[n] = e;
var o = (a, n, e) => (i(a, typeof n != "symbol" ? n + "" : n, e), e);
import * as t from "three";
import { POINT_HELPER_TEXTURE_URL as l } from "./Assets/index.js";
const c = `
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1);
  gl_Position = projectionMatrix * mvPosition;
}
`, h = `
varying vec2 vUv;
void main() {
  vec2 uv = vec2(vUv.x, vUv.y);
  float a = 1.0;
  float match = 1.0 - uv.x;
  gl_FragColor = vec4(1.0,1.0,1.0,match);
}
`;
function p() {
  const a = new t.PlaneGeometry(0.4, 0.4), n = l, e = new t.TextureLoader().load(n);
  e.encoding = t.sRGBEncoding, e.minFilter = t.LinearFilter;
  const s = new t.MeshBasicMaterial({
    map: e,
    transparent: !0,
    depthTest: !1
  });
  return new t.Mesh(a, s);
}
function M() {
  const a = new t.CurvePath();
  a.add(new t.LineCurve3(new t.Vector3(0, 0, 0), new t.Vector3(0, 0, 0.1)));
  const n = new t.TubeGeometry(a, 8, 3e-3), e = new t.ShaderMaterial({
    vertexShader: c,
    fragmentShader: h,
    depthTest: !1,
    transparent: !0
  });
  return new t.Mesh(n, e);
}
function v() {
  const a = new t.SphereGeometry(0.01, 20, 20), n = new t.MeshBasicMaterial({
    color: 10349931,
    depthTest: !1,
    transparent: !0,
    side: t.DoubleSide
  }), e = new t.Mesh(a, n);
  return e.position.set(0, 0, 0.1), e;
}
class w extends t.Object3D {
  constructor() {
    super();
    o(this, "planeMesh");
    o(this, "lineMesh");
    o(this, "ballMesh");
    this.planeMesh = p(), this.lineMesh = M(), this.ballMesh = v(), this.add(this.planeMesh, this.lineMesh, this.ballMesh);
  }
  updateWithIntersect(e) {
    if (!e.face)
      return;
    const s = new t.Vector3().addVectors(e.point, e.face.normal);
    this.position.copy(e.point), this.lookAt(s);
  }
  dispose() {
    var e;
    (e = this.planeMesh.material.map) == null || e.dispose();
  }
}
export {
  w as LegacyPointHelper
};
