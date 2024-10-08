var z = Object.defineProperty, B = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var E = Object.getOwnPropertySymbols;
var J = Object.prototype.hasOwnProperty, K = Object.prototype.propertyIsEnumerable;
var x = (o, i, e) => i in o ? z(o, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[i] = e, F = (o, i) => {
  for (var e in i || (i = {}))
    J.call(i, e) && x(o, e, i[e]);
  if (E)
    for (var e of E(i))
      K.call(i, e) && x(o, e, i[e]);
  return o;
}, _ = (o, i) => B(o, H(i));
import { objectAssignDeepExports as l } from "../../../vendor/object-assign-deep/objectAssignDeep.js";
import { entries as I } from "../../../shared-utils/typescript/entries.js";
import P from "./adaptConfig.js";
import { defaultGlobalConfig as N } from "../../typings/tag/TagConfig.js";
import { Five as Q } from "@realsee/five";
import { isPanoramaLike as R, isModelLike as S } from "../../../shared-utils/five/mode.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../../vendor/three/build/three.module.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/dom/resizeObserver.js";
function Co(o, i, e) {
  var v, b, j, C, A;
  const D = (v = e == null ? void 0 : e.useCache) != null ? v : !0;
  if (!o)
    return (b = i.globalConfig) != null ? b : {};
  if (D) {
    if ((j = o == null ? void 0 : o.computedConfig) != null && j._isMerged)
      return o.computedConfig;
    if ((C = o == null ? void 0 : o.config) != null && C._isMerged)
      return o.config;
  }
  const k = {}, d = {}, y = {};
  i.contentTypeConfig && Object.entries(i.contentTypeConfig).forEach(([n, r]) => {
    var O, W;
    const t = n, a = t.split("-"), g = n.startsWith("["), s = g ? a[0].slice(1, -1) : void 0, p = g ? a.slice(1) : a, f = s ? ["PanoramaLike", "ModelLike"].includes(s) ? (O = d[s]) != null ? O : d[s] = {} : (W = y[s]) != null ? W : y[s] = {} : k;
    if (!f[t]) {
      if (p.length === 0 && (f[t] = r), p.length === 1) {
        const [c] = p;
        (o.contentType === c || c === "Any") && (f[t] = r);
      }
      if (p.length === 2) {
        const [c = "Any", u = "Any"] = p;
        c === "Mixin" && o.contentType === u && (f[t] = r), (o.stickType === c || c === "Any") && (o.contentType === u || u === "Any") && (f[t] = r);
      }
      if (p.length === 3) {
        const [c = "Any", u, w] = p;
        if (u === "Audio" && o.contentType === "Audio") {
          const L = o;
          (L.stickType === c || c === "Any") && L.data.appearance === w && (f[t] = r);
        }
      }
    }
  });
  const h = (A = o.initialConfig) != null ? A : {}, M = l({}, N, i.globalConfig, ...Object.values(k)), G = l({}, M, h), m = {}, q = Object.values(Q.Mode);
  I(d).forEach(([n, r]) => {
    q.forEach((t) => {
      (n === "PanoramaLike" && R(t) || n === "ModelLike" && S(t)) && (m[t] = l({}, M, ...Object.values(r), h, { _isMerged: !0 }));
    });
  }), I(y).forEach(([n, r]) => {
    const t = m[n];
    m[n] = l({}, M, t, ...Object.values(r), h, { _isMerged: !0 });
  });
  const T = _(F({}, G), { configWithFiveMode: m });
  return P(T), Object.values(m).forEach((n) => P(n)), T._isMerged = !0, T;
}
export {
  Co as calculateTagConfig
};
