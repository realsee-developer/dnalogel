var _ = (i, m, p) => new Promise((a, t) => {
  var f = (e) => {
    try {
      s(p.next(e));
    } catch (c) {
      t(c);
    }
  }, b = (e) => {
    try {
      s(p.throw(e));
    } catch (c) {
      t(c);
    }
  }, s = (e) => e.done ? a(e.value) : Promise.resolve(e.value).then(f, b);
  s((p = p.apply(i, m)).next());
});
import * as M from "three";
import { bject3d2LocalMatrix as O } from "../shared-utils/object3d2LocalMatrix.js";
import { transfromToMeshBasicMaterial as P } from "../shared-utils/three/transformToMeshBasicMaterial.js";
import { FBXLoader as D } from "../shared-utils/three/FBXLoader/index.js";
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
import { MODEL_CHASSIS_COMPASS_DEFAULT_MODEL as R } from "../shared-utils/url/defaultUrls.js";
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
const $t = (i, m) => {
  var L;
  const p = (m == null ? void 0 : m.fbx_url) || R, a = (L = m == null ? void 0 : m.north_rad) != null ? L : void 0, t = {};
  let f = { x: 0, y: 0, z: 0 }, b = [0, 0, 0], s = 1, e = a;
  i.on("modelLoaded", g);
  const c = (o) => _(void 0, null, function* () {
    var u;
    const r = (o == null ? void 0 : o.fbx_url) || p;
    if (e = (u = o == null ? void 0 : o.north_rad) != null ? u : a, typeof e != "number")
      throw new Error('"northRad"配置参数缺失：未配置指南针指向！');
    t.object && (t.object.parent && t.object.parent.remove(t.object), t.object.traverse((n) => {
      var x, j;
      n instanceof M.Mesh && ((x = n.geometry) == null || x.dispose(), Array.isArray(n.material) ? n.material.forEach((y) => y.dispose()) : (j = n.material) == null || j.dispose());
    }));
    const l = yield new D().loadAsync(r);
    return P(l, {
      transparent: !0,
      side: M.DoubleSide,
      blending: M.AdditiveBlending
    }), t.object = l, g(), !0;
  }), h = ({ latitude: o }) => {
    if (!t.object)
      return;
    const r = z(o);
    r && (t.object.position.y = r);
  }, z = (o) => {
    if (t.yBase === void 0)
      return;
    const r = 0.6;
    if (o >= Math.PI / 4)
      return t.yBase - (r + 1.6);
    const d = o * (4 / Math.PI);
    return t.yBase - (r * d + 1.6);
  }, A = () => {
    if (!t.object)
      return;
    const o = z(i.getPose().latitude);
    o && (t.object.position.y = o), i.scene.add(t.object), i.needsRender = !0, i.on("cameraDirectionUpdate", h);
  }, B = () => {
    t.object && (i.scene.remove(t.object), i.needsRender = !0, i.off("cameraDirectionUpdate", h));
  };
  function g() {
    const o = t.object;
    if (!o)
      return;
    const r = i.model.bounding, d = r.max.x - r.min.x, l = r.max.z - r.min.z, u = Math.max(d, l), {
      max: { x: n, z: x },
      min: { x: j, y, z: E }
    } = r;
    t.yBase = y, f = { x: (n + j) / 2, y: y - 1.6, z: (x + E) / 2 }, b = [0, e - Math.PI / 2, 0], s = 45e-4 * u, O(o, { position: f, rotation: b, scale: s });
  }
  return { load: c, disable: B, enable: A };
};
export {
  $t as ModelChassisCompassPlugin,
  $t as default
};
