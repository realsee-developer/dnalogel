var a = Object.defineProperty;
var h = (r, s, e) => s in r ? a(r, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[s] = e;
var n = (r, s, e) => (h(r, typeof s != "symbol" ? s + "" : s, e), e);
import * as t from "three";
import { POINT_HELPER_TEXTURE_URL as l } from "../../Assets/index.js";
import { CSS3DObjectPlus as d } from "../../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import { rangePieceImg as c } from "./html.js";
import { initialCSS3DRender as p } from "../../../CSS3DRender/index.js";
const M = `
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
function v() {
  const r = new t.PlaneGeometry(0.4, 0.4), s = l, e = new t.TextureLoader().load(s);
  e.encoding = t.sRGBEncoding, e.minFilter = t.LinearFilter;
  const o = new t.MeshBasicMaterial({
    map: e,
    transparent: !0,
    depthTest: !1
  });
  return new t.Mesh(r, o);
}
function m() {
  const r = new t.CurvePath();
  r.add(new t.LineCurve3(new t.Vector3(0, 0, 0), new t.Vector3(0, 0, 0.1)));
  const s = new t.TubeGeometry(r, 8, 3e-3), e = new t.ShaderMaterial({
    vertexShader: M,
    fragmentShader: u,
    depthTest: !1,
    transparent: !0
  });
  return new t.Mesh(s, e);
}
function b() {
  const r = new t.SphereGeometry(0.01, 20, 20), s = new t.MeshBasicMaterial({
    color: 10349931,
    depthTest: !1,
    transparent: !0,
    side: t.DoubleSide
  }), e = new t.Mesh(r, s);
  return e.position.set(0, 0, 0.1), e;
}
function w() {
  const s = new d({
    pointerEvents: "none",
    cornerPoints: [
      new t.Vector3(-0.2, 0.2, 0),
      new t.Vector3(-0.2, -0.2, 0),
      new t.Vector3(0.2, -0.2, 0),
      new t.Vector3(0.2, 0.2, 0)
    ]
  }), e = document.createElement("div");
  return e.style.width = "100%", e.style.height = "100%", e.style.backgroundImage = `url(${c})`, e.style.backgroundSize = "100%", e.style.backgroundRepeat = "no-repeat", s.container.appendChild(e), s;
}
class T extends t.Object3D {
  constructor(e) {
    super();
    n(this, "planeMesh");
    n(this, "lineMesh");
    n(this, "ballMesh");
    n(this, "borderMesh");
    n(this, "five");
    this.planeMesh = v(), this.lineMesh = m(), this.ballMesh = b(), this.borderMesh = w(), this.addEventListener("added", () => {
      this.add(this.planeMesh, this.lineMesh, this.ballMesh, this.borderMesh);
    }), this.addEventListener("removed", () => {
      this.remove(this.planeMesh, this.lineMesh, this.ballMesh, this.borderMesh);
    }), p(e), this.five = e;
  }
  updateWithIntersect(e) {
    var i;
    const o = (i = e == null ? void 0 : e.face) != null && i.normal ? new t.Vector3().addVectors(e.point, e.face.normal) : this.five.camera.position;
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
  T as PointHelper
};
