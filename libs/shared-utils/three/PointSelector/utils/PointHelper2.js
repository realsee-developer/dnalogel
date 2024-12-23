var M = Object.defineProperty, v = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var d = Object.getOwnPropertySymbols;
var f = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var l = (s, e, r) => e in s ? M(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r, c = (s, e) => {
  for (var r in e || (e = {}))
    f.call(e, r) && l(s, r, e[r]);
  if (d)
    for (var r of d(e))
      m.call(e, r) && l(s, r, e[r]);
  return s;
}, h = (s, e) => v(s, p(e));
var o = (s, e, r) => (l(s, typeof e != "symbol" ? e + "" : e, r), r);
import * as t from "three";
import { initialCSS3DRender as A } from "../../../CSS3DRender/index.js";
import { LineMesh as u } from "../../../../Sculpt/Meshes/Line.js";
import { ICSS3DSprite as g } from "../../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
const w = (
  /* glsl */
  `
varying vec2 vUv;
varying float vRadius;
varying float vDistanceToCamera;
varying float vCenterDistanceToCamera;
void main() {
  vUv = uv;
  // 计算顶点到圆心的距离
  vRadius = length(position.xy);
  // 计算顶点到摄像机的距离
  vec3 worldPosition = vec3(modelViewMatrix * vec4(position, 1.0));
  vDistanceToCamera = distance(cameraPosition, worldPosition);
  vCenterDistanceToCamera = distance(cameraPosition, vec3(0.0));

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
}
`
), y = (
  /* glsl */
  `
varying vec2 vUv;
varying float vRadius;

uniform float borderWidth;
uniform float radius;

void main() {
  vec2 uv = vUv;

  if (vRadius > radius - borderWidth && vRadius < radius) {
    // 如果顶点在边框区域，则使用边框颜色
    gl_FragColor = vec4(1.0, 1.0, 1.0, 0.3);
  } else {
    // 如果顶点在填充区域，则使用填充颜色
    gl_FragColor = vec4(1.0, 1.0, 1.0, 0.2);
  }
}
`
);
function P() {
  const e = new t.CircleGeometry(0.2, 64), r = new t.ShaderMaterial({
    uniforms: {
      borderWidth: { value: 0.01 },
      radius: { value: 0.2 }
    },
    vertexShader: w,
    fragmentShader: y,
    depthTest: !1,
    transparent: !0,
    blending: t.CustomBlending,
    blendEquation: t.AddEquation,
    blendSrc: t.DstColorFactor,
    blendDst: t.SrcAlphaFactor,
    blendDstAlpha: t.DstAlphaFactor
  });
  return new t.Mesh(e, r);
}
function b() {
  const e = new t.Group(), r = {
    lineWidth: 1,
    lineColor: 3407837,
    lineOpacity: 0.7,
    occlusionVisibility: !0
  }, i = new u(h(c({ points: [{ x: -0.5 }, { x: 0.5 }] }, r), { lineColor: 3407837 })), a = new u(h(c({ points: [{ y: -0.5 }, { y: 0.5 }] }, r), { lineColor: 3407837 }));
  return e.add(i, a), e;
}
function V(s) {
  const e = new t.CurvePath();
  e.add(new t.LineCurve3(new t.Vector3(0, 0, 0), new t.Vector3(0, 0, s)));
  const r = new t.TubeGeometry(e, 32, 3e-3), i = new t.MeshBasicMaterial({
    color: 10994687,
    depthTest: !1,
    transparent: !0
    // 必须要开启透明度，要和PlaneMesh一起渲染
  });
  return new t.Mesh(r, i);
}
function C() {
  const s = new t.RingGeometry(0.03, 0.035, 64), e = new t.MeshBasicMaterial({
    color: 16777215,
    depthTest: !1,
    transparent: !0
    // 必须要开启透明度，要和PlaneMesh一起渲染
  });
  return new t.Mesh(s, e);
}
function x() {
  const s = new t.SphereGeometry(0.018, 32, 32), e = new t.MeshBasicMaterial({
    color: 5085183,
    depthTest: !1,
    transparent: !0
    // 必须要开启透明度，要和PlaneMesh一起渲染
  });
  return new t.Mesh(s, e);
}
function S() {
  const s = document.createElement("img");
  s.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAMAAAB8FU7dAAAAw1BMVEUAAACDuuiAsu11q/x8r/+HxtKHxtKIx9J4ut6Hx9Jcn/uNwNlmmf+RuP9ppf9orel3ud2HxtJrpf9oremev/9ppP9orelQmP9ZoPWSuP92q/9cnv9prel4ut53qv9orelYoPWIxdJPmP+HxtGRuP9oo/+Suf9Qmf92q/+RuP+DsP9Pmv+FxdFtre2SyMiRuP9PmP+evv9ppf9cnv+rxf9orepZofV4ut52q/+Dsf+Esv+5y/93q/9aofbF0f93rP9qpf8IzZ1iAAAAL3RSTlMAEg4s3dK5nodgVQoF/Pf39vbt7evr39rV1NTOzs6srJ+fiIZ9fWlpW09ERCwcHMH8LhIAAADRSURBVBjTjdDHkoMwEIThBrzOm3POOQwSYCRhe/f9n2p75FD2zX/VXL5qOAjzkixLsFL6fOFF5PwpXUj/eEwx7Oh9Jq+FdV5MqZkXlU9K4KZsmqY02x/A8LSwv14o0ylJWkP087WVhDfcjmjj5b/E3+CEpDPdGY58C7tKfzSiiA9uB4dV/NIF7yVQ7AGuq0lOIzrvnLP2Et2aMzUqryge8FVX0Zjl5XkG3KsR593pM2zVEScjvbMU7IdGjF19IzZ43Ceyve4Ai5Jep93u9BJs3j/gXjHbRgy31AAAAABJRU5ErkJggg==";
  const e = new g(s);
  return s.style.pointerEvents = "none", e.scale.set(3e-3, 3e-3, 3e-3), e;
}
class E extends t.Object3D {
  constructor(r) {
    super();
    o(this, "planeMesh");
    o(this, "ringMesh");
    o(this, "crossline");
    o(this, "lineMesh");
    o(this, "ballMesh");
    o(this, "cssBallMesh");
    const i = 0.18;
    this.planeMesh = P(), this.ringMesh = C(), this.crossline = b(), this.lineMesh = V(i), this.ballMesh = x(), this.cssBallMesh = S(), this.ballMesh.position.setZ(i), this.cssBallMesh.position.setZ(i), this.planeMesh.renderOrder = 0, this.ringMesh.renderOrder = 1, this.crossline.renderOrder = 2, this.lineMesh.renderOrder = 3, this.ballMesh.renderOrder = 4, this.add(this.planeMesh, this.crossline, this.lineMesh, this.ballMesh, this.ringMesh, this.cssBallMesh), A(r);
  }
  updateWithIntersect(r) {
    if (!r.face)
      return;
    const i = (() => {
      const n = r.face.normal.clone().normalize();
      return n.y > 0.99 ? new t.Vector3(0, 1, 0) : n.y < -0.99 ? new t.Vector3(0, -1, 0) : n.x > 0.99 ? new t.Vector3(1, 0, 0) : n.x < -0.99 ? new t.Vector3(-1, 0, 0) : n.z > 0.99 ? new t.Vector3(0, 0, 1) : n.z < -0.99 ? new t.Vector3(0, 0, -1) : n.y < 0.01 && n.y > -0.01 ? new t.Vector3(n.x, 0, n.z) : n;
    })(), a = new t.Vector3().addVectors(r.point, i);
    this.position.copy(r.point), this.lookAt(a);
  }
  show() {
    this.visible = !0, this.add(this.cssBallMesh);
  }
  hide() {
    this.visible = !1, this.remove(this.cssBallMesh);
  }
  dispose() {
  }
}
export {
  E as PointHelper2
};
