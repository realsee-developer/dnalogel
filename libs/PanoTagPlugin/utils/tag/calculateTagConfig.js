var z = Object.defineProperty, B = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var E = Object.getOwnPropertySymbols;
var J = Object.prototype.hasOwnProperty, K = Object.prototype.propertyIsEnumerable;
var x = (o, i, t) => i in o ? z(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t, F = (o, i) => {
  for (var t in i || (i = {}))
    J.call(i, t) && x(o, t, i[t]);
  if (E)
    for (var t of E(i))
      K.call(i, t) && x(o, t, i[t]);
  return o;
}, _ = (o, i) => B(o, H(i));
import { objectAssignDeepExports as l } from "../../../vendor/object-assign-deep/objectAssignDeep.js";
import { entries as I } from "../../../shared-utils/typescript/entries.js";
import P from "./adaptConfig.js";
import { defaultGlobalConfig as N } from "../../typings/tag/TagConfig.js";
import { Five as Q } from "@realsee/five";
import "../../../shared-utils/tag.js";
import { isPanoramaLike as R, isModelLike as S } from "../../../shared-utils/five/mode.js";
import "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../shared-utils/five/FivePuppet.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/three/core/Raycaster.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../shared-utils/throttle.js";
import "../../../shared-utils/five/fiveModelLoad.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/CSS3DRender/index.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../shared-utils/three/IObject3D.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../Sculpt/utils/unit.js";
import "../../../Sculpt/utils/renderDom.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
function ui(o, i, t) {
  var v, b, j, C, A;
  const D = (v = t == null ? void 0 : t.useCache) != null ? v : !0;
  if (!o)
    return (b = i.globalConfig) != null ? b : {};
  if (D) {
    if ((j = o == null ? void 0 : o.computedConfig) != null && j._isMerged)
      return o.computedConfig;
    if ((C = o == null ? void 0 : o.config) != null && C._isMerged)
      return o.config;
  }
  const k = {}, d = {}, y = {};
  i.contentTypeConfig && Object.entries(i.contentTypeConfig).forEach(([e, p]) => {
    var O, W;
    const r = e, a = r.split("-"), g = e.startsWith("["), c = g ? a[0].slice(1, -1) : void 0, m = g ? a.slice(1) : a, s = c ? ["PanoramaLike", "ModelLike"].includes(c) ? (O = d[c]) != null ? O : d[c] = {} : (W = y[c]) != null ? W : y[c] = {} : k;
    if (!s[r]) {
      if (m.length === 0 && (s[r] = p), m.length === 1) {
        const [n] = m;
        (o.contentType === n || n === "Any") && (s[r] = p);
      }
      if (m.length === 2) {
        const [n = "Any", u = "Any"] = m;
        n === "Mixin" && o.contentType === u && (s[r] = p), (o.stickType === n || n === "Any") && (o.contentType === u || u === "Any") && (s[r] = p);
      }
      if (m.length === 3) {
        const [n = "Any", u, w] = m;
        if (u === "Audio" && o.contentType === "Audio") {
          const L = o;
          (L.stickType === n || n === "Any") && L.data.appearance === w && (s[r] = p);
        }
      }
    }
  });
  const h = (A = o.initialConfig) != null ? A : {}, M = l({}, N, i.globalConfig, ...Object.values(k)), G = l({}, M, h), f = {}, q = Object.values(Q.Mode);
  I(d).forEach(([e, p]) => {
    q.forEach((r) => {
      (e === "PanoramaLike" && R(r) || e === "ModelLike" && S(r)) && (f[r] = l({}, M, ...Object.values(p), h, { _isMerged: !0 }));
    });
  }), I(y).forEach(([e, p]) => {
    const r = f[e];
    f[e] = l({}, M, r, ...Object.values(p), h, { _isMerged: !0 });
  });
  const T = _(F({}, G), { configWithFiveMode: f });
  return P(T), Object.values(f).forEach((e) => P(e)), T._isMerged = !0, T;
}
export {
  ui as calculateTagConfig
};
