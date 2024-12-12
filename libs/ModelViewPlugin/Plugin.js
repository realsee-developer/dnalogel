var U = Object.defineProperty;
var R = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var z = (t, o, r) => o in t ? U(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, y = (t, o) => {
  for (var r in o || (o = {}))
    G.call(o, r) && z(t, r, o[r]);
  if (R)
    for (var r of R(o))
      H.call(o, r) && z(t, r, o[r]);
  return t;
};
var D = (t, o, r) => new Promise((s, u) => {
  var g = (i) => {
    try {
      x(r.next(i));
    } catch (d) {
      u(d);
    }
  }, n = (i) => {
    try {
      x(r.throw(i));
    } catch (d) {
      u(d);
    }
  }, x = (i) => i.done ? s(i.value) : Promise.resolve(i.value).then(g, n);
  x((r = r.apply(t, o)).next());
});
import { Camera as q, loadAt3d as X } from "@realsee/five";
import { Subscribe as Y } from "../shared-utils/Subscribe.js";
import "../shared-utils/tag.js";
import * as m from "three";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import { boundingBox as _ } from "../shared-utils/three/boundingBox.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../shared-utils/five/FivePuppet.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/three/core/Raycaster.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/throttle.js";
import "../shared-utils/three/core/Sphere.js";
import "../shared-utils/five/fiveModelLoad.js";
import "../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../shared-utils/three/Magnifier.js";
import "../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../shared-utils/three/Assets/index.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../shared-utils/even.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/isNil.js";
import "../shared-utils/three/PointSelector/utils/html.js";
import "../shared-utils/five/initialCSS3DRender.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/utils/removeAllTag.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/util.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
const $e = (t, o) => {
  var M, N;
  const r = new Y();
  let s = (N = (M = o == null ? void 0 : o.initialState) == null ? void 0 : M.enabled) != null ? N : !0, u = !1, g = !0, n = null;
  const i = y(y({}, {
    lookAtCurrentCamera: !1,
    lockedPanoIndex: null,
    lockedLatitude: null,
    lockedLongitude: null
  }), o == null ? void 0 : o.config), d = new m.Scene(), l = new q(60);
  l.near = 1, l.updateTime(Date.now());
  let p = new m.Object3D(), b, k;
  {
    const e = new m.DirectionalLight(16777215, 0.5);
    e.position.copy(new m.Vector3(1, 1, 1)), d.add(e);
  }
  {
    const e = new m.DirectionalLight(16777215, 0.3);
    d.add(e);
  }
  {
    const e = new m.AmbientLight(16777215, 0.3);
    d.add(e);
  }
  d.add(p);
  const C = () => D(void 0, null, function* () {
    var c, h;
    if (u)
      return;
    d.remove(p), p = yield X(t.work.model.file, {
      textureOptions: { size: 256, quality: 70 },
      textureArray: (c = t.work.model) == null ? void 0 : c.textures,
      textureBaseUri: (h = t.work.model) == null ? void 0 : h.textureBase
    }).then((W) => {
      const E = W.scene;
      return E.rotateX(-Math.PI / 2), E;
    });
    const e = _(p);
    e.min = new m.Vector3(e.min.x, e.min.z, e.min.y), e.max = new m.Vector3(e.max.x, e.max.z, e.max.y);
    const w = Math.pow(
      Math.pow(e.max.x - e.min.x + 1, 2) + Math.pow(e.max.y - e.min.y + 1, 2) + Math.pow(e.max.z - e.min.z + 1, 2),
      1 / 2
    );
    let a = w / 2 / Math.tan(Math.PI * l.fov / 360);
    l.aspect < 1 && (a = b / l.aspect), b = isNaN(a) ? w : a, k = e.getCenter(new m.Vector3()), d.add(p), u = !0, r.emit("loaded"), f();
  }), I = () => {
    if (t.renderer)
      return n || (n = new m.WebGLRenderer({ antialias: !1, alpha: !0 }), n.setPixelRatio(t.renderer.getPixelRatio()), n.outputEncoding = m.sRGBEncoding, n.setClearColor(1579548, 0), n.autoClear = !0), n;
  }, S = () => {
    d.remove(p), p = new m.Object3D(), d.add(p), u = !1, r.emit("willLoad"), f();
  }, A = () => {
    s && (u || C());
  }, V = () => {
    s || (s = !0, d.add(p), !u && t.work && C(), f());
  }, j = () => {
    s && (d.remove(p), g = !0, P(), s = !1);
  }, B = (e, w = {}) => {
    const a = I();
    if (!a)
      return;
    e.appendChild(a.domElement), L(w);
    const c = window.getComputedStyle(e).position;
    c !== "relative" && c !== "absolute" && c !== "fixed" && c !== "sticky" && (e.style.position = "relative");
  }, L = (e = {}) => {
    if (!n)
      return;
    const a = n.domElement.parentNode;
    if (a != null && a.nodeName) {
      const { width: c = a.offsetWidth, height: h = a.offsetHeight } = e;
      n.setSize(c, h), l.aspect = c / h, l.updateProjectionMatrix();
    }
    f();
  }, f = () => {
    if (!s || !b || !k)
      return;
    const e = t.getPose();
    e.fov = l.fov, e.offset = k, e.distance = b, typeof i.lockedLatitude == "number" && (e.latitude = i.lockedLatitude), typeof i.lockedLongitude == "number" && (e.longitude = i.lockedLongitude), typeof i.lockedPanoIndex == "number" && (e.offset = t.work.observers[i.lockedPanoIndex].standingPosition.clone()), i.lookAtCurrentCamera && (e.offset = t.camera.position.clone().setY(t.camera.position.y + 1)), l.setFromPose(e), g = !0;
  }, P = () => {
    !s || g !== !0 || !n || !n.domElement.parentNode || n.domElement.parentNode.offsetWidth === 0 || (n.render(d, l), g = !1);
  }, F = () => {
    n && n.dispose(), n = null;
  }, O = (e) => {
    Object.assign(i, e), f();
  }, T = () => ({
    enabled: s
  });
  return t.on("loaded", A), t.on("willLoad", S), t.on("cameraDirectionUpdate", f), t.on("dispose", F), t.on("renderFrame", P), t.on("cameraPositionUpdate", f), { appendTo: B, refresh: L, changeConfigs: O, enable: V, disable: j, getCurrentState: T, hooks: r };
};
export {
  $e as ModelViewPlugin,
  $e as default
};
