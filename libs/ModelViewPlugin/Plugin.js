var Y = Object.defineProperty;
var I = Object.getOwnPropertySymbols;
var J = Object.prototype.hasOwnProperty, K = Object.prototype.propertyIsEnumerable;
var S = (e, o, r) => o in e ? Y(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, C = (e, o) => {
  for (var r in o || (o = {}))
    J.call(o, r) && S(e, r, o[r]);
  if (I)
    for (var r of I(o))
      K.call(o, r) && S(e, r, o[r]);
  return e;
};
var V = (e, o, r) => new Promise((s, f) => {
  var h = (n) => {
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
  }, x = (n) => n.done ? s(n.value) : Promise.resolve(n.value).then(h, i);
  x((r = r.apply(e, o)).next());
});
import { Camera as Q, loadAt3d as Z } from "@realsee/five";
import { Subscribe as $ } from "../shared-utils/Subscribe.js";
import "../shared-utils/tag.js";
import * as a from "three";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import { boundingBox as v } from "../shared-utils/three/boundingBox.js";
import "../shared-utils/three/blink.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../vendor/earcut/src/earcut.js";
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
import "../shared-utils/five/getFiveFromParentChain.js";
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
import "../vendor/animejs/lib/anime.es.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
const fe = (e, o) => {
  var N, R;
  const r = new $();
  let s = (R = (N = o == null ? void 0 : o.initialState) == null ? void 0 : N.enabled) != null ? R : !0, f = !1, h = !0, i = null;
  const n = C(C({}, {
    lookAtCurrentCamera: !1,
    lockedPanoIndex: null,
    lockedLatitude: null,
    lockedLongitude: null
  }), o == null ? void 0 : o.config), d = new a.Scene(), c = new Q(60);
  c.near = 1, c.updateTime(Date.now());
  let u = new a.Object3D(), k, b;
  {
    const t = new a.DirectionalLight(16777215, 0.5);
    t.position.copy(new a.Vector3(1, 1, 1)), d.add(t);
  }
  {
    const t = new a.DirectionalLight(16777215, 0.3);
    d.add(t);
  }
  {
    const t = new a.AmbientLight(16777215, 0.3);
    d.add(t);
  }
  d.add(u);
  const y = () => V(void 0, null, function* () {
    var E, U, z, A;
    if (f || !((U = (E = e.work) == null ? void 0 : E.model) != null && U.file))
      return;
    d.remove(u);
    const t = e.work.getURL(e.work.model.file), w = e.work.getURL(e.work.model.textureBase), l = [...((z = e.work.model) == null ? void 0 : z.textures) || []];
    if (!t || !w || !l)
      return;
    u = yield Z(t, {
      textureOptions: { size: 128, quality: 70 },
      textureArray: l,
      textureBaseUri: w,
      fetcher: (A = n.fetcher) != null ? A : void 0
    }).then((X) => {
      const D = X.scene;
      return D.rotateX(-Math.PI / 2), D;
    });
    const m = v(u), p = new a.Box3();
    p.expandByPoint(new a.Vector3(m.min.x, m.min.z, -m.min.y)), p.expandByPoint(new a.Vector3(m.max.x, m.max.z, -m.max.y));
    const B = Math.pow(
      Math.pow(p.max.x - p.min.x + 1, 2) + Math.pow(p.max.y - p.min.y + 1, 2) + Math.pow(p.max.z - p.min.z + 1, 2),
      1 / 2
    );
    let L = B / 2 / Math.tan(Math.PI * c.fov / 360);
    c.aspect < 1 && (L = k / c.aspect), k = isNaN(L) ? B : L, b = p.getCenter(new a.Vector3()), d.add(u), f = !0, r.emit("loaded"), g();
  });
  s && y();
  const j = () => {
    if (e.renderer)
      return i || (i = new a.WebGLRenderer({ antialias: !1, alpha: !0 }), i.setPixelRatio(e.renderer.getPixelRatio()), i.outputEncoding = a.sRGBEncoding, i.setClearColor(1579548, 0), i.autoClear = !0), i;
  }, F = () => {
    d.remove(u), u = new a.Object3D(), d.add(u), f = !1, r.emit("willLoad"), g();
  }, O = () => {
    s && (f || y());
  }, T = () => {
    var t, w;
    s || (s = !0, d.add(u), !f && ((w = (t = e.work) == null ? void 0 : t.model) != null && w.file) && y(), g());
  }, W = () => {
    s && (d.remove(u), h = !0, M(), s = !1);
  }, G = (t, w = {}) => {
    const l = j();
    if (!l)
      return;
    t.appendChild(l.domElement), P(w);
    const m = window.getComputedStyle(t).position;
    m !== "relative" && m !== "absolute" && m !== "fixed" && m !== "sticky" && (t.style.position = "relative");
  }, P = (t = {}) => {
    if (!i)
      return;
    const l = i.domElement.parentNode;
    if (l != null && l.nodeName) {
      const { width: m = l.offsetWidth, height: p = l.offsetHeight } = t;
      i.setSize(m, p), c.aspect = m / p, c.updateProjectionMatrix();
    }
    g();
  }, g = () => {
    if (!s || !k || !b)
      return;
    const t = e.getPose();
    t.fov = c.fov, t.offset = b, t.distance = k, typeof n.lockedLatitude == "number" && (t.latitude = n.lockedLatitude), typeof n.lockedLongitude == "number" && (t.longitude = n.lockedLongitude), typeof n.lockedPanoIndex == "number" && (t.offset = e.work.observers[n.lockedPanoIndex].standingPosition.clone()), n.lookAtCurrentCamera && (t.offset = e.camera.position.clone().setY(e.camera.position.y + 1)), c.setFromPose(t), h = !0;
  }, M = () => {
    !s || h !== !0 || !i || !i.domElement.parentNode || i.domElement.parentNode.offsetWidth === 0 || (i.render(d, c), h = !1);
  }, H = () => {
    i && i.dispose(), i = null;
  }, _ = (t) => {
    Object.assign(n, t), g();
  }, q = () => ({
    enabled: s
  });
  return e.on("loaded", O), e.on("willLoad", F), e.on("cameraDirectionUpdate", g), e.on("dispose", H), e.on("renderFrame", M), e.on("cameraPositionUpdate", g), { appendTo: G, refresh: P, changeConfigs: _, enable: T, disable: W, getCurrentState: q, hooks: r };
};
export {
  fe as ModelViewPlugin,
  fe as default
};
