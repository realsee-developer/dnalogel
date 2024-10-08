var i = Object.defineProperty;
var a = (n, r, e) => r in n ? i(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e;
var s = (n, r, e) => (a(n, typeof r != "symbol" ? r + "" : r, e), e);
import * as t from "three";
import { POINT_HELPER_TEXTURE_URL as l } from "../../Assets/index.js";
import { CSS3DObjectPlus as h } from "../../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import { rangePieceImg as c } from "./html.js";
import { initialCSS3DRender as d } from "../../../five/initialCSS3DRender.js";
const p = `
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1);
  gl_Position = projectionMatrix * mvPosition;
}
`, u = `
varying vec2 vUv;
void main() {
  vec2 uv = vec2(vUv.x, vUv.y);
  float a = 1.0;
  float match = 1.0 - uv.x;
  gl_FragColor = vec4(1.0,1.0,1.0,match);
}
`;
function M() {
  const n = new t.PlaneGeometry(0.4, 0.4), r = l, e = new t.TextureLoader().load(r);
  e.encoding = t.sRGBEncoding, e.minFilter = t.LinearFilter;
  const o = new t.MeshBasicMaterial({
    map: e,
    transparent: !0,
    depthTest: !1
  });
  return new t.Mesh(n, o);
}
function m() {
  const n = new t.CurvePath();
  n.add(new t.LineCurve3(new t.Vector3(0, 0, 0), new t.Vector3(0, 0, 0.1)));
  const r = new t.TubeGeometry(n, 8, 3e-3), e = new t.ShaderMaterial({
    vertexShader: p,
    fragmentShader: u,
    depthTest: !1,
    transparent: !0
  });
  return new t.Mesh(r, e);
}
function v() {
  const n = new t.SphereGeometry(0.01, 20, 20), r = new t.MeshBasicMaterial({
    color: 10349931,
    depthTest: !1,
    transparent: !0,
    side: t.DoubleSide
  }), e = new t.Mesh(n, r);
  return e.position.set(0, 0, 0.1), e;
}
function w() {
  const r = new h({
    pointerEvents: "none",
    cornerPoints: [
      new t.Vector3(-0.2, 0.2, 0),
      new t.Vector3(-0.2, -0.2, 0),
      new t.Vector3(0.2, -0.2, 0),
      new t.Vector3(0.2, 0.2, 0)
    ]
  }), e = document.createElement("div");
  return e.style.width = "100%", e.style.height = "100%", e.style.backgroundImage = `url(${c})`, e.style.backgroundSize = "100%", e.style.backgroundRepeat = "no-repeat", r.container.appendChild(e), r;
}
class x extends t.Object3D {
  constructor(e) {
    super();
    s(this, "planeMesh");
    s(this, "lineMesh");
    s(this, "ballMesh");
    s(this, "borderMesh");
    this.planeMesh = M(), this.lineMesh = m(), this.ballMesh = v(), this.borderMesh = w(), this.add(this.planeMesh, this.lineMesh, this.ballMesh, this.borderMesh), d(e);
  }
  updateWithIntersect(e) {
    if (!e.face)
      return;
    const o = new t.Vector3().addVectors(e.point, e.face.normal);
    this.position.copy(e.point), this.lookAt(o);
  }
  show() {
    this.visible = !0, this.borderMesh.parent || this.add(this.borderMesh);
  }
  hide() {
    this.visible = !1, this.remove(this.borderMesh);
  }
  dispose() {
    var e;
    (e = this.planeMesh.material.map) == null || e.dispose();
  }
}
export {
  x as PointHelper
};
