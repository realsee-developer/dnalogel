var L = Object.defineProperty, O = Object.defineProperties;
var z = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var D = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
var M = (d, e, i) => e in d ? L(d, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : d[e] = i, h = (d, e) => {
  for (var i in e || (e = {}))
    D.call(e, i) && M(d, i, e[i]);
  if (C)
    for (var i of C(e))
      F.call(e, i) && M(d, i, e[i]);
  return d;
}, R = (d, e) => O(d, z(e));
var S = (d, e) => {
  var i = {};
  for (var s in d)
    D.call(d, s) && e.indexOf(s) < 0 && (i[s] = d[s]);
  if (d != null && C)
    for (var s of C(d))
      e.indexOf(s) < 0 && F.call(d, s) && (i[s] = d[s]);
  return i;
};
import * as w from "three";
import { is3DTag as Z, isMediaModelTag as j } from "../utils/tag/tagCheck.js";
import { getTagCenterPosition as k, getTagPosition as q } from "../utils/tagPosition.js";
import { checkRange as P } from "../utils/checkRange.js";
import { isPanoramaLike as x, isModelLike as H } from "../../shared-utils/five/mode.js";
import "hammerjs";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { toArray as V } from "../../shared-utils/util.js";
import { notNil as N } from "../../shared-utils/isNil.js";
import { TagUtil as W } from "./TagUtil.js";
import { getFloorIndex as X } from "../../shared-utils/five/getFloorIndex.js";
import { safeObj as A } from "../../shared-utils/safeObj.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/positionToVector3.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../shared-utils/Subscribe.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../typings/tag/TagConfig.js";
import "../../vendor/object-assign-deep/objectAssignDeep.js";
import "../tag.config.js";
import "../utils/planeNormal.js";
import "../utils/normalPositionToPositions.js";
import "./TagCache.js";
import "../../base/BasePlugin.js";
import "../../shared-utils/url/absoluteUrl.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../vendor/svelte/store/index.js";
import "../../vendor/svelte/internal/index.js";
import "../../shared-utils/device.js";
import "../../CSS3DRenderPlugin/index.js";
import "../../CSS3DRenderPlugin/Controller.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "@realsee/five";
import "../utils/model/mediaPlane.js";
import "../../shared-utils/three/loadTexture.js";
import "../../shared-utils/three/Quadrangle.js";
import "../../shared-utils/math/pointIsRectangle.js";
import "../../shared-utils/three/loadVideoTexture.js";
import "../Assets/Icon.js";
import "../../shared-utils/three/getPositionsByObjectFit.js";
import "../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../shared-utils/three/getNormal.js";
import "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../utils/tag/adaptConfig.js";
import "../../shared-utils/typescript/entries.js";
import "../../shared-utils/url/getUrl.js";
const T = new w.Raycaster();
T.params.Points.threshold = 0.1;
class si extends W {
  constructor(e) {
    super(e);
  }
  /**
   * @description 获取是否可见
   */
  getVisible(e, i) {
    if (!e.enabled || !this.fiveUtil.model)
      return !1;
    const s = h(h({}, this.five.getCurrentState()), i), { panoIndex: t, mode: r } = s, n = x(r) ? this.getPanoIndexCache({ panoIndex: t, id: e.id }) : void 0;
    if ((n == null ? void 0 : n.visible) !== void 0)
      return n.visible;
    {
      const c = this.computeTagVisible(e, s);
      return n && c.do_not_cache !== !0 && (n.visible = c.value, n.__debug_visible_reason__ = c), c.value;
    }
  }
  computeTagVisible(e, i) {
    const s = h(h({}, this.five.getCurrentState()), i), { panoIndex: t, mode: r } = s, n = [];
    return (() => {
      var a, f, u, p, v, I, y;
      const o = (a = this.getTagConfig(e).visibleConfig) != null ? a : {};
      if (typeof o == "function")
        return {
          value: o(this.five, { tag: e, distance: this.getDistance(e, s) }),
          checkedList: n,
          reason: "config function result"
        };
      if (o.keep === "hidden")
        return { value: !1, checkedList: n, reason: "config.keep is hidden" };
      if (o.keep === "visible")
        return { value: !0, checkedList: n, reason: "config.keep is visible" };
      if (o.visibleFiveMode !== void 0) {
        const l = typeof o.visibleFiveMode == "function" ? o.visibleFiveMode(e) : o.visibleFiveMode;
        let m = !1;
        if (Array.isArray(l) ? m = l.includes(r) : l === "ModelLike" ? m = H(r) : l === "PanoramaLike" ? m = !x(r) : l === "all" ? m = !0 : typeof l == "string" && (m = l === r), m === !1)
          return {
            value: !1,
            checkedList: n,
            reason: "current mode is not included in visibleFiveMode",
            visibleFiveMode: o.visibleFiveMode,
            mode: r
          };
      } else if (o.visibleFiveMode === void 0 && ((f = this.five.getCurrentState()) == null ? void 0 : f.mode) !== ((p = (u = e.fiveState) == null ? void 0 : u.mode) != null ? p : "Panorama"))
        return {
          value: !1,
          checkedList: n,
          reason: "current mode is not equal to tag.fiveState.mode",
          tagFiveMode: (v = e.fiveState) == null ? void 0 : v.mode,
          mode: r
        };
      if (o.followModelVisibility === !0 && (r === "Floorplan" || r === "Mapview")) {
        const b = this.getVisibleByFloorIndex(e), { value: l } = b, m = S(b, ["value"]);
        if (l === !1)
          return h({ value: !1, checkedList: n, reason: "followModelVisibility check failed" }, m);
      }
      if (x(r) && o.visiblePanoIndex !== void 0 && o.visiblePanoIndex !== "all" && t !== void 0) {
        if (n.push("visiblePanoIndex"), Array.isArray(o.visiblePanoIndex) && !o.visiblePanoIndex.includes(t))
          return {
            value: !1,
            checkedList: n,
            reason: `current panoIndex is not included in visiblePano. currentPanoIndex: ${t}, visiblePanoIndex: ${o.visiblePanoIndex}`
          };
        if (o.visiblePanoIndex === "current" && t !== ((I = e.fiveState) == null ? void 0 : I.panoIndex))
          return {
            value: !1,
            checkedList: n,
            reason: `current panoIndex is not equal to tag.panoIndex. currentPanoIndex: ${t}, tag.panoIndex: ${(y = e.fiveState) == null ? void 0 : y.panoIndex}`
          };
      }
      if (o.visibleDistance !== void 0 && (n.push("visibleDistance"), o.visibleDistance !== "unLimited")) {
        const l = this.getDistance(e, s);
        if (P(l, o.visibleDistance) === !1)
          return {
            value: !1,
            checkedList: n,
            panoIndex: t,
            visibleDistance: o.visibleDistance,
            reason: `distance is not in visibleDistance. distance: ${l}, visibleDistance: ${o.visibleDistance.min} - ${o.visibleDistance.max}`
          };
      }
      if (x(r) && o.angleRange && Z(e)) {
        n.push("angleRange");
        const l = this.getAngle(e, t);
        if (P(l, o.angleRange) === !1)
          return { value: !1, checkedList: n, reason: `angle is not in angleRange. angle: ${l}, angleRange: ${o.angleRange}` };
      }
      if (o.intersectRaycaster !== !1 && (typeof o.intersectRaycaster != "object" || o.intersectRaycaster.enabled !== !1)) {
        if (n.push("intersectRaycaster"), t === void 0)
          return {
            value: !1,
            checkedList: n,
            reason: `intersectRaycaster check failed: panoIndex is ${t}`
          };
        const l = this.getTagEnableByIntersect(e, t);
        if (l.value === !1)
          return Object.assign(l, { checkedList: n });
      }
      return {
        value: !0,
        checkedList: n,
        reason: "all check passed"
      };
    })();
  }
  /**
   * @description 获取是否展开
   */
  // eslint-disable-next-line @typescript-eslint/member-ordering
  getUnfoldedByPanoIndex(e, i) {
    if (!this.getCurrentVisibleState(e))
      return;
    const t = this.getPanoIndexCache({ panoIndex: i, id: e.id });
    if (t.unfolded !== void 0)
      return t.unfolded;
    {
      const r = this.getTagConfig(e).unfoldedConfig;
      if (!r)
        return;
      const n = (() => {
        if (typeof r == "function")
          return r(this.five, { tag: e, distance: this.getDistance(e, { panoIndex: i }) });
        if (r.keep === "folded")
          return !1;
        if (r.keep === "unfolded")
          return !0;
        if (r.unfoldDistance && P(this.getDistance(e, { panoIndex: i }), r.unfoldDistance) === !1)
          return !1;
      })();
      t.unfolded = n;
      const c = this.getUnfoldedByCamera(e);
      return c !== void 0 ? c : t.unfolded;
    }
  }
  /**
   * @description 获取是否展开
   */
  // eslint-disable-next-line @typescript-eslint/member-ordering
  getUnfoldedByCamera(e) {
    return this.getCurrentVisibleState(e) ? (() => {
      var r;
      const t = this.getTagConfig(e).unfoldedConfig;
      if (t) {
        if (typeof t == "function")
          return t(this.five, { tag: e, distance: this.getDistance(e) });
        if (t.keep === "folded")
          return !1;
        if (t.keep === "unfolded")
          return !0;
        if (t.autoUnfold === void 0 || t.autoUnfold === !1 || t.autoUnfold.enable === !1 || !t.autoUnfold.strategy)
          return;
        if (t.autoUnfold.strategy === "ScreenPostion") {
          const n = this.getTagProject(e);
          if (n && P(n.x, t.autoUnfold.autoUnfoldProjectX) === !1)
            return !1;
        }
        if (t.autoUnfold.strategy === "MinimumDistance") {
          const g = this.filterPointTag.filter((a) => this.getCurrentVisibleState(a)).filter((a) => {
            const f = this.getTagProject(a);
            if (!f)
              return !1;
            const { x: u, y: p, z: v } = f;
            return !(Math.abs(v) > 1 || Math.abs(u) > 1 || Math.abs(p) > 1);
          }).map((a) => ({ tag: a, id: a.id, tagConfig: this.getTagConfig(a).unfoldedConfig })).filter(({ tag: a, tagConfig: f }) => {
            var u, p;
            return !(typeof f == "function" || f.keep || f.autoUnfold === !1 || ((u = f.autoUnfold) == null ? void 0 : u.enable) === !1 || ((p = f.autoUnfold) == null ? void 0 : p.strategy) !== "MinimumDistance");
          }).map((a) => R(h({}, a), { distance: this.getDistance(a.tag) })).filter(({ distance: a, tagConfig: f }) => {
            const u = f.autoUnfold.distance;
            return !(u && P(a, u) === !1);
          }).sort((a, f) => a.distance - f.distance).findIndex((a) => a.id === e.id);
          if (g === -1 || g <= ((r = t.autoUnfold.maxNumber) != null ? r : 1) - 1 === !1)
            return !1;
        }
        return t.autoUnfold.strategy !== "FoldWhenMove";
      }
    })() : void 0;
  }
  setTagZIndex(e) {
    return e.forEach((i) => {
      i.zIndex = this.calculateTagZIndex(i);
    });
  }
  calculateTagZIndex(e) {
    const i = this.getDistance(e);
    return Math.round((1e4 - (i != null ? i : 0)) * 100);
  }
  setVisible(e) {
    (e ? V(e) : this.tags).forEach((s) => {
      const t = this.getVisible(s);
      s.state && (s.state.visible = t);
    });
  }
  setUnfoldedByPanoIndex() {
    this.tags.forEach((e) => {
      const i = this.getUnfoldedByPanoIndex(e);
      if (e.state && (i !== void 0 && (e.state.unfolded = i), i && !e.state.visible)) {
        const s = this.getTagConfig(e);
        typeof s.unfoldedConfig == "object" && s.unfoldedConfig.autoFoldWhenHide !== !1 && (e.state.unfolded = !1);
      }
    });
  }
  /**
   * @description 一个点的标签
   */
  getTagProject(e) {
    const i = k(e);
    if (!i)
      return;
    const { x: s, y: t, z: r } = i.project(this.five.camera);
    if (!(r > 1))
      return { x: s, y: t, z: r };
  }
  /** 通过射线检测标签可用性 */
  getTagEnableByIntersect(e, i) {
    var o, a, f, u, p;
    const s = A(A((o = this.getTagConfig(e).visibleConfig) != null ? o : {}).intersectRaycaster), t = i != null ? i : this.five.getCurrentState().panoIndex, r = x(this.five.getCurrentState().mode) ? this.workUtil.getObserverPosition(t) : this.five.camera.position;
    if (r === void 0)
      return { value: !1, reason: { type: "startPosition is undefined", fivePanoIndex: t } };
    const n = V(
      (() => {
        var b;
        const v = (b = s.checkPoints) != null ? b : "center";
        return v === "center" ? k(e) : v === "corner" ? q(e) : Array.isArray(v) ? v : [];
      })()
    );
    let c = 0, g = 0;
    for (const v of n) {
      const b = new w.Vector3().subVectors(v, r).normalize();
      T.set(r, b);
      const I = r.distanceTo(v), [y] = this.fiveUtil.model.intersectRaycaster(T), l = (() => {
        if (!j(e))
          return;
        const $ = this.tags.filter(j).map((_) => {
          var U;
          return (U = _.model) == null ? void 0 : U.object;
        }).filter(N), [E] = T.intersectObjects($, !0);
        return E;
      })(), m = (a = s.distanceAccuracy) != null ? a : 0.01;
      Math.min((f = y == null ? void 0 : y.distance) != null ? f : 1 / 0, (u = l == null ? void 0 : l.distance) != null ? u : 1 / 0) + m >= I ? c++ : g++;
      const B = (p = s.needPassed) != null ? p : 1;
      if (c >= B)
        return { value: !0 };
    }
    return g === 0 ? { value: !0 } : {
      value: !1,
      reason: {
        type: "intersectRaycaster check failed",
        passedCount: c,
        needPassed: s.needPassed
      }
    };
  }
  /** 检测是否匹配当前楼层 */
  getVisibleByFloorIndex(e) {
    var r, n, c, g, o, a, f;
    let i = 0;
    const s = (r = e.fiveState) == null ? void 0 : r.panoIndex;
    s !== void 0 ? i = (n = this.workUtil.getObserver(s)) == null ? void 0 : n.floorIndex : i = X(this.workUtil.work, (f = (a = (g = (c = e.model) == null ? void 0 : c.object) == null ? void 0 : g.position) != null ? a : (o = e.mediaPlane) == null ? void 0 : o.position) != null ? f : k(e));
    const t = this.fiveUtil.model.shownFloor;
    return {
      value: t === null || t === i,
      currentFiveFloorIndex: t,
      tagFloorIndex: i
    };
  }
}
export {
  si as TagComputer
};
