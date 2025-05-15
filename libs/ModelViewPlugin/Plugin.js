var _ = Object.defineProperty;
var D = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty, X = Object.prototype.propertyIsEnumerable;
var I = (e, o, r) => o in e ? _(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, C = (e, o) => {
  for (var r in o || (o = {}))
    q.call(o, r) && I(e, r, o[r]);
  if (D)
    for (var r of D(o))
      X.call(o, r) && I(e, r, o[r]);
  return e;
};
var S = (e, o, r) => new Promise((p, f) => {
  var g = (n) => {
    try {
      x(r.next(n));
    } catch (d) {
      f(d);
    }
  }, i = (n) => {
    try {
      x(r.throw(n));
    } catch (d) {
      f(d);
    }
  }, x = (n) => n.done ? p(n.value) : Promise.resolve(n.value).then(g, i);
  x((r = r.apply(e, o)).next());
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
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
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
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
const me = (e, o) => {
  var M, N;
  const r = new K();
  let p = (N = (M = o == null ? void 0 : o.initialState) == null ? void 0 : M.enabled) != null ? N : !0, f = !1, g = !0, i = null;
  const n = C(C({}, {
    lookAtCurrentCamera: !1,
    lockedPanoIndex: null,
    lockedLatitude: null,
    lockedLongitude: null
  }), o == null ? void 0 : o.config), d = new m.Scene(), c = new Y(60);
  c.near = 1, c.updateTime(Date.now());
  let u = new m.Object3D(), b, k;
  {
    const t = new m.DirectionalLight(16777215, 0.5);
    t.position.copy(new m.Vector3(1, 1, 1)), d.add(t);
  }
  {
    const t = new m.DirectionalLight(16777215, 0.3);
    d.add(t);
  }
  {
    const t = new m.AmbientLight(16777215, 0.3);
    d.add(t);
  }
  d.add(u);
  const y = () => S(void 0, null, function* () {
    var h, E, B, R;
    if (f || !((E = (h = e.work) == null ? void 0 : h.model) != null && E.file))
      return;
    d.remove(u), u = yield J(e.work.model.file, {
      textureOptions: { size: 128, quality: 70 },
      textureArray: (B = e.work.model) == null ? void 0 : B.textures,
      textureBaseUri: (R = e.work.model) == null ? void 0 : R.textureBase
    }).then((H) => {
      const z = H.scene;
      return z.rotateX(-Math.PI / 2), z;
    });
    const t = Q(u), a = new m.Box3();
    a.expandByPoint(new m.Vector3(t.min.x, t.min.z, -t.min.y)), a.expandByPoint(new m.Vector3(t.max.x, t.max.z, -t.max.y));
    const s = Math.pow(
      Math.pow(a.max.x - a.min.x + 1, 2) + Math.pow(a.max.y - a.min.y + 1, 2) + Math.pow(a.max.z - a.min.z + 1, 2),
      1 / 2
    );
    let l = s / 2 / Math.tan(Math.PI * c.fov / 360);
    c.aspect < 1 && (l = b / c.aspect), b = isNaN(l) ? s : l, k = a.getCenter(new m.Vector3()), d.add(u), f = !0, r.emit("loaded"), w();
  });
  p && y();
  const A = () => {
    if (e.renderer)
      return i || (i = new m.WebGLRenderer({ antialias: !1, alpha: !0 }), i.setPixelRatio(e.renderer.getPixelRatio()), i.outputEncoding = m.sRGBEncoding, i.setClearColor(1579548, 0), i.autoClear = !0), i;
  }, V = () => {
    d.remove(u), u = new m.Object3D(), d.add(u), f = !1, r.emit("willLoad"), w();
  }, j = () => {
    p && (f || y());
  }, F = () => {
    var t, a;
    p || (p = !0, d.add(u), !f && ((a = (t = e.work) == null ? void 0 : t.model) != null && a.file) && y(), w());
  }, O = () => {
    p && (d.remove(u), g = !0, P(), p = !1);
  }, T = (t, a = {}) => {
    const s = A();
    if (!s)
      return;
    t.appendChild(s.domElement), L(a);
    const l = window.getComputedStyle(t).position;
    l !== "relative" && l !== "absolute" && l !== "fixed" && l !== "sticky" && (t.style.position = "relative");
  }, L = (t = {}) => {
    if (!i)
      return;
    const s = i.domElement.parentNode;
    if (s != null && s.nodeName) {
      const { width: l = s.offsetWidth, height: h = s.offsetHeight } = t;
      i.setSize(l, h), c.aspect = l / h, c.updateProjectionMatrix();
    }
    w();
  }, w = () => {
    if (!p || !b || !k)
      return;
    const t = e.getPose();
    t.fov = c.fov, t.offset = k, t.distance = b, typeof n.lockedLatitude == "number" && (t.latitude = n.lockedLatitude), typeof n.lockedLongitude == "number" && (t.longitude = n.lockedLongitude), typeof n.lockedPanoIndex == "number" && (t.offset = e.work.observers[n.lockedPanoIndex].standingPosition.clone()), n.lookAtCurrentCamera && (t.offset = e.camera.position.clone().setY(e.camera.position.y + 1)), c.setFromPose(t), g = !0;
  }, P = () => {
    !p || g !== !0 || !i || !i.domElement.parentNode || i.domElement.parentNode.offsetWidth === 0 || (i.render(d, c), g = !1);
  }, W = () => {
    i && i.dispose(), i = null;
  }, U = (t) => {
    Object.assign(n, t), w();
  }, G = () => ({
    enabled: p
  });
  return e.on("loaded", j), e.on("willLoad", V), e.on("cameraDirectionUpdate", w), e.on("dispose", W), e.on("renderFrame", P), e.on("cameraPositionUpdate", w), { appendTo: T, refresh: L, changeConfigs: U, enable: F, disable: O, getCurrentState: G, hooks: r };
};
export {
  me as ModelViewPlugin,
  me as default
};
