var _ = Object.defineProperty;
var D = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty, X = Object.prototype.propertyIsEnumerable;
var I = (t, o, r) => o in t ? _(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, C = (t, o) => {
  for (var r in o || (o = {}))
    q.call(o, r) && I(t, r, o[r]);
  if (D)
    for (var r of D(o))
      X.call(o, r) && I(t, r, o[r]);
  return t;
};
var S = (t, o, r) => new Promise((s, f) => {
  var g = (i) => {
    try {
      x(r.next(i));
    } catch (d) {
      f(d);
    }
  }, n = (i) => {
    try {
      x(r.throw(i));
    } catch (d) {
      f(d);
    }
  }, x = (i) => i.done ? s(i.value) : Promise.resolve(i.value).then(g, n);
  x((r = r.apply(t, o)).next());
});
import { Camera as Y, loadAt3d as J } from "@realsee/five";
import { Subscribe as K } from "../shared-utils/Subscribe.js";
import "../shared-utils/tag.js";
import * as m from "three";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import { boundingBox as Q } from "../shared-utils/three/boundingBox.js";
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
import "../shared-utils/five/fiveModelLoad.js";
import "../shared-utils/three/core/Sphere.js";
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
import "../shared-utils/CSS3DRender/index.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/util.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../Sculpt/utils/unit.js";
import "../Sculpt/utils/renderDom.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "../Sculpt/utils/three/rayOnLine.js";
const nt = (t, o) => {
  var M, N;
  const r = new K();
  let s = (N = (M = o == null ? void 0 : o.initialState) == null ? void 0 : M.enabled) != null ? N : !0, f = !1, g = !0, n = null;
  const i = C(C({}, {
    lookAtCurrentCamera: !1,
    lockedPanoIndex: null,
    lockedLatitude: null,
    lockedLongitude: null
  }), o == null ? void 0 : o.config), d = new m.Scene(), c = new Y(60);
  c.near = 1, c.updateTime(Date.now());
  let u = new m.Object3D(), b, k;
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
  d.add(u);
  const y = () => S(void 0, null, function* () {
    var h, E, B, R;
    if (f || !((E = (h = t.work) == null ? void 0 : h.model) != null && E.file))
      return;
    d.remove(u), u = yield J(t.work.model.file, {
      textureOptions: { size: 128, quality: 70 },
      textureArray: (B = t.work.model) == null ? void 0 : B.textures,
      textureBaseUri: (R = t.work.model) == null ? void 0 : R.textureBase
    }).then((H) => {
      const z = H.scene;
      return z.rotateX(-Math.PI / 2), z;
    });
    const e = Q(u), a = new m.Box3();
    a.expandByPoint(new m.Vector3(e.min.x, e.min.z, -e.min.y)), a.expandByPoint(new m.Vector3(e.max.x, e.max.z, -e.max.y));
    const l = Math.pow(
      Math.pow(a.max.x - a.min.x + 1, 2) + Math.pow(a.max.y - a.min.y + 1, 2) + Math.pow(a.max.z - a.min.z + 1, 2),
      1 / 2
    );
    let p = l / 2 / Math.tan(Math.PI * c.fov / 360);
    c.aspect < 1 && (p = b / c.aspect), b = isNaN(p) ? l : p, k = a.getCenter(new m.Vector3()), d.add(u), f = !0, r.emit("loaded"), w();
  });
  s && y();
  const A = () => {
    if (t.renderer)
      return n || (n = new m.WebGLRenderer({ antialias: !1, alpha: !0 }), n.setPixelRatio(t.renderer.getPixelRatio()), n.outputEncoding = m.sRGBEncoding, n.setClearColor(1579548, 0), n.autoClear = !0), n;
  }, V = () => {
    d.remove(u), u = new m.Object3D(), d.add(u), f = !1, r.emit("willLoad"), w();
  }, j = () => {
    s && (f || y());
  }, F = () => {
    var e, a;
    s || (s = !0, d.add(u), !f && ((a = (e = t.work) == null ? void 0 : e.model) != null && a.file) && y(), w());
  }, O = () => {
    s && (d.remove(u), g = !0, P(), s = !1);
  }, T = (e, a = {}) => {
    const l = A();
    if (!l)
      return;
    e.appendChild(l.domElement), L(a);
    const p = window.getComputedStyle(e).position;
    p !== "relative" && p !== "absolute" && p !== "fixed" && p !== "sticky" && (e.style.position = "relative");
  }, L = (e = {}) => {
    if (!n)
      return;
    const l = n.domElement.parentNode;
    if (l != null && l.nodeName) {
      const { width: p = l.offsetWidth, height: h = l.offsetHeight } = e;
      n.setSize(p, h), c.aspect = p / h, c.updateProjectionMatrix();
    }
    w();
  }, w = () => {
    if (!s || !b || !k)
      return;
    const e = t.getPose();
    e.fov = c.fov, e.offset = k, e.distance = b, typeof i.lockedLatitude == "number" && (e.latitude = i.lockedLatitude), typeof i.lockedLongitude == "number" && (e.longitude = i.lockedLongitude), typeof i.lockedPanoIndex == "number" && (e.offset = t.work.observers[i.lockedPanoIndex].standingPosition.clone()), i.lookAtCurrentCamera && (e.offset = t.camera.position.clone().setY(t.camera.position.y + 1)), c.setFromPose(e), g = !0;
  }, P = () => {
    !s || g !== !0 || !n || !n.domElement.parentNode || n.domElement.parentNode.offsetWidth === 0 || (n.render(d, c), g = !1);
  }, W = () => {
    n && n.dispose(), n = null;
  }, U = (e) => {
    Object.assign(i, e), w();
  }, G = () => ({
    enabled: s
  });
  return t.on("loaded", j), t.on("willLoad", V), t.on("cameraDirectionUpdate", w), t.on("dispose", W), t.on("renderFrame", P), t.on("cameraPositionUpdate", w), { appendTo: T, refresh: L, changeConfigs: U, enable: F, disable: O, getCurrentState: G, hooks: r };
};
export {
  nt as ModelViewPlugin,
  nt as default
};
