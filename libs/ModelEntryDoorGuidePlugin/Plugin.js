var L = (i, r, o) => new Promise((y, j) => {
  var D = (n) => {
    try {
      l(o.next(n));
    } catch (u) {
      j(u);
    }
  }, h = (n) => {
    try {
      l(o.throw(n));
    } catch (u) {
      j(u);
    }
  }, l = (n) => n.done ? y(n.value) : Promise.resolve(n.value).then(D, h);
  l((o = o.apply(i, r)).next());
});
import * as O from "three";
import { MeshBasicMaterial as U, AnimationMixer as q } from "three";
import { createCanvasTextTexture as C } from "../shared-utils/createCanvasTextTexture.js";
import { transformPositionToVector3 as S } from "../shared-utils/three/transformPositionToVector3.js";
import { transfromToMeshBasicMaterial as z } from "../shared-utils/three/transformToMeshBasicMaterial.js";
import { FBXLoader as B } from "../shared-utils/three/FBXLoader/index.js";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../shared-utils/three/blink.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../vendor/earcut/src/earcut.js";
import { MODEL_ENTRY_DOOR_GUIDE_PLUGIN_DEFAULT_MODEL as H } from "../shared-utils/url/defaultUrls.js";
import "../shared-utils/five/FivePuppet.js";
import "../shared-utils/three/libs/inflate.js";
import "../shared-utils/three/libs/NURBSCurve.js";
import "../shared-utils/three/libs/NURBSUtils.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/three/core/Raycaster.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/throttle.js";
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
import "@realsee/five";
const ut = (i, r) => {
  var w, _, g;
  const o = {}, y = (w = r == null ? void 0 : r.animationEnabled) != null ? w : !0, j = (_ = r == null ? void 0 : r.position) != null ? _ : void 0, D = (g = r == null ? void 0 : r.rad) != null ? g : void 0, h = (r == null ? void 0 : r.fbx_url) || H, l = [], n = (t) => L(void 0, null, function* () {
    var d, a, M, b, f, E, P, R;
    const c = (d = t == null ? void 0 : t.position) != null ? d : j;
    if (!c)
      return Promise.reject(new Error("ModelEntryDoorGuidePlugin.load(): position is undefined"));
    const m = S(c), e = (a = t == null ? void 0 : t.rad) != null ? a : D, A = (M = t == null ? void 0 : t.fbx_url) != null ? M : h;
    if (o.rad = e, e === void 0)
      return Promise.reject(new Error(`ModelEntryDoorGuidePlugin.load(): rad is ${e}`));
    const p = yield new B().loadAsync(A);
    p.position.copy(m), p.rotation.z = e, p.scale.set(0.8, 0.8, 0.8), z(p, { transparent: !0, side: O.DoubleSide });
    const s = (P = (E = (f = (b = p.children) == null ? void 0 : b[0]) == null ? void 0 : f.children) == null ? void 0 : E[3]) == null ? void 0 : P.clone();
    if (!s)
      return Promise.reject(new Error(`ModelEntryDoorGuidePlugin.load(): textMesh is ${s}`));
    const G = (R = r.name) != null ? R : "入户门";
    return s.material = new U({ transparent: !0, map: C(G) }), s.renderOrder = 3, p.children[0].add(s), o.object = p, !0;
  }), u = () => {
    if (o.animation)
      return;
    if (!o.object)
      return console.error("ModelEntryDoorGuidePlugin.initAnimation(): state.object is ", o.object);
    const t = 1, c = new q(o.object);
    l.push(c);
    const m = c.clipAction(o.object.animations[0]);
    m.timeScale = t;
    let e;
    const A = () => {
      let d = 0, a = 0;
      const M = 1e3 / 30, b = (f) => {
        d = requestAnimationFrame(b);
        const E = f - a;
        E < M || (a = f, l.forEach((P) => P.update(E / 1e3)), i.needsRender = !0);
      };
      return d = requestAnimationFrame(b), () => {
        cancelAnimationFrame(d);
      };
    }, G = { play: () => {
      e || (m.play(), e = A(), requestAnimationFrame(() => {
        o.object && o.object.rotation.z !== o.rad && (o.object.rotation.z = o.rad);
      }));
    }, stop: () => {
      m.stop(), e == null || e(), e = void 0;
    } };
    o.animation = G;
  }, T = (t) => {
    var m;
    if (!o.object)
      return console.error("ModelEntryDoorGuidePlugin.enable(): object is ", o.object);
    ((m = t == null ? void 0 : t.animationEnable) != null ? m : y) && (o.animation || u(), o.animation.play()), i.scene.add(o.object), i.needsRender = !0;
  }, F = () => {
    o.object && (o.animation && o.animation.stop(), i.scene.remove(o.object), i.needsRender = !0);
  }, x = (t) => t === "Floorplan" ? T() : F();
  return { load: n, enable: (t) => (o.enabled || (o.enabled = !0, x(i.currentMode), i.on("modeChange", x), T(t)), !0), disable: () => (o.enabled && (o.enabled = !1, F(), i.off("modeChange", x)), !0) };
}, at = {
  name: "ModelEntryDoorGuidePlugin",
  version: 0
};
export {
  ut as ModelEntryDoorGuidePlugin,
  ut as default,
  at as modelEntryDoorGuidePluginServerParams
};
