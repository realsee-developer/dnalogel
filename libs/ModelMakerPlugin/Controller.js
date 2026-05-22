var A = Object.defineProperty;
var _ = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var I = (c, p, t) => p in c ? A(c, p, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[p] = t, E = (c, p) => {
  for (var t in p || (p = {}))
    B.call(p, t) && I(c, t, p[t]);
  if (_)
    for (var t of _(p))
      P.call(p, t) && I(c, t, p[t]);
  return c;
};
var l = (c, p, t) => (I(c, typeof p != "symbol" ? p + "" : p, t), t);
var M = (c, p, t) => new Promise((i, e) => {
  var r = (s) => {
    try {
      n(t.next(s));
    } catch (a) {
      e(a);
    }
  }, o = (s) => {
    try {
      n(t.throw(s));
    } catch (a) {
      e(a);
    }
  }, n = (s) => s.done ? i(s.value) : Promise.resolve(s.value).then(r, o);
  n((t = t.apply(c, p)).next());
});
import { Controller as H } from "../base/BasePluginWithData.js";
import { Group as W, Vector3 as w, Euler as V, Quaternion as L, Box3 as j, Color as y } from "three";
import { ModelMakerBoxItem as T } from "./item/boxItem.js";
import { PrismMesh as O } from "../Sculpt/Meshes/Prism.js";
import { anyPositionToVector3 as q } from "../shared-utils/positionToVector3.js";
import { PolygonWithEdgeMesh as k } from "../Sculpt/Meshes/PolygonWithEdge.js";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import { waitFiveModelLoaded as N } from "../shared-utils/five/fiveModelLoad.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as f } from "../shared-utils/isNil.js";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import { boxVertex as u } from "../shared-utils/three/boundingBox.js";
import "../shared-utils/three/blink.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../vendor/earcut/src/earcut.js";
import { FiveDomEvents as z } from "../shared-utils/five/FiveDomEvents.js";
import "../shared-utils/five/FivePuppet.js";
import { tagRendererMap as G } from "./utils/tagRenderer.js";
import { ModelMakerPrismItem as S } from "./item/prismItem.js";
import { ModelMakerPolygonItem as F } from "./item/polygonItem.js";
import { fiveEveryReadyListener as Q } from "../shared-utils/five/fiveEveryReadyListener.js";
import { sleep as U } from "../CruisePlugin/utils/sleep.js";
import { CONST as Y } from "../shared-utils/constants.js";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/three/core/Sphere.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/url/defaultUrls.js";
import "./item/baseItem.js";
import "../shared-utils/three/addIfNotExists.js";
import "../shared-utils/three/IObject3D.js";
import "../shared-utils/three/core/Raycaster.js";
import "../Sculpt/utils/three/ColoredMesh.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/core/PrismGeometry.js";
import "../shared-utils/three/core/polygonVertex.js";
import "../shared-utils/three/earcut3D.js";
import "../shared-utils/three/getNormal.js";
import "../shared-utils/three/core/PrismAnimationGeometry.js";
import "../shared-utils/three/geometryUtil.js";
import "../shared-utils/three/centerPoint.js";
import "../Sculpt/Meshes/Line.js";
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
import "@realsee/five";
import "../Sculpt/Meshes/Polyline.js";
import "../Sculpt/Meshes/LineWithDots.js";
import "../Sculpt/Meshes/Point.js";
import "../shared-utils/three/closeVectors.js";
import "../Sculpt/Meshes/Polygon.js";
import "../shared-utils/three/generatePolygonGeometry.js";
import "../PanoMeasurePlugin/utils/isIntersecting.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../shared-utils/three/Magnifier.js";
import "../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../shared-utils/three/Assets/index.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../shared-utils/even.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/throttle.js";
import "../shared-utils/three/PointSelector/utils/html.js";
import "../shared-utils/CSS3DRender/index.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
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
import "../shared-utils/five/calculateThreeMouse.js";
import "./utils/Text.js";
import "../vendor/svelte/internal/index.js";
import "../components/AreaLabel/LabelItem.js";
import "../components/AreaLabel/Assets/roomLabelBg.js";
import "../shared-utils/math/rad2Deg.js";
import "../components/AreaLabel/Assets/fontSize.js";
import "../shared-utils/px2rem.js";
import "../shared-utils/fontSize.js";
class Ye extends H {
  constructor(t, i) {
    var e, r;
    super(t);
    l(this, "state");
    l(this, "items", []);
    l(this, "group", new W());
    l(this, "data");
    l(this, "tagRendererMap", {});
    l(this, "fiveDomEvents");
    l(this, "zFightingOffset", 0);
    l(this, "tagWrapper");
    l(this, "occlusionVisibility");
    l(this, "occlusionMode");
    l(this, "fiveEveryReadyListenerDisposer");
    // 存储每个模型的原始透明度
    l(this, "originalOpacities", /* @__PURE__ */ new Map());
    // 存储标签原始透明度
    l(this, "originalTagOpacities", /* @__PURE__ */ new Map());
    // 存储当前高亮的项目
    l(this, "highlightedItem", null);
    // 存储标签原始样式用于高亮恢复
    l(this, "originalTagStyles", /* @__PURE__ */ new Map());
    // 存储模型原始颜色用于高亮恢复（包括表面颜色、线条颜色和透明度）
    l(this, "originalModelColors", /* @__PURE__ */ new Map());
    l(this, "onFiveModeChange", (t) => {
      const i = this.occlusionVisibility;
      Array.isArray(i) && [...this.getPrismItems(), ...this.getBoxItems()].forEach((r) => {
        (r.model instanceof O || r.model instanceof k) && r.model.setStyle({ occlusionVisibility: i.includes(t) });
      });
    });
    l(this, "handleEnable", () => {
      var t, i;
      this.five.scene.add(this.group), (i = (t = this.five.getElement()) == null ? void 0 : t.parentElement) == null || i.appendChild(this.tagWrapper), this.five.needsRender = !0, this.onFiveModeChange(this.five.getCurrentState().mode), this.onFiveEveryReady(), this.five.on("modeChange", this.onFiveModeChange), this.fiveEveryReadyListenerDisposer = Q(this.five, this.onFiveEveryReady);
    });
    l(this, "handleDisable", () => {
      this.five.scene.remove(this.group), this.tagWrapper.remove(), this.five.needsRender = !0, this.five.off("modeChange", this.onFiveModeChange), this.fiveEveryReadyListenerDisposer();
    });
    l(this, "onFiveEveryReady", () => M(this, null, function* () {
      if (this.five.state.mode === "Panorama")
        return;
      const t = this.items.filter((s) => s instanceof S).map((s) => s.tag), i = t.filter((s) => s.position && s.visible && s.enabled);
      yield U(0);
      const e = this.five.camera.position.clone(), r = i.sort((s, a) => e.distanceTo(s.position) - e.distanceTo(a.position)), o = [], n = (s, a) => !(s.right < a.left || s.left > a.right || s.bottom < a.top || s.top > a.bottom);
      t.forEach((s) => {
        s.visibles[2] = void 0;
      }), r.forEach((s) => {
        if (s.visibles[1] === !1)
          return;
        const a = s.container.getElementsByClassName("room-label-item__text")[0];
        if (!a)
          return;
        const h = a.getBoundingClientRect();
        o.every((d) => !n(d.boundingClientRect, h)) ? (o.push({ tag: s, boundingClientRect: h }), s.visibles[2] = !0) : s.visibles[2] = !1, s.needsRender = !0;
      });
    }));
    l(this, "updateTagRenderer", () => {
      this.items.forEach((t) => {
        var e;
        const i = (e = this.tagRendererMap[t.type]) != null ? e : G[t.type];
        i && t.__renderer !== i && (t.__renderer = i, typeof t.__disposeRenderer == "function" && t.__disposeRenderer(), t.tag.container.innerHTML = "", t.__disposeRenderer = i(t.tag.container, t, this.five));
      });
    });
    this.group.name = "ModelMakerPluginGroup", this.state = { enabled: !0, visible: !0 }, this.occlusionVisibility = (e = i == null ? void 0 : i.occlusionVisibility) != null ? e : !1, this.occlusionMode = (r = i == null ? void 0 : i.occlusionMode) != null ? r : "translucence", this.fiveDomEvents = new z(t, { noEmitWhenHide: !0, noEmitWhenNotInScene: !0 }), this.tagWrapper = (() => {
      var n;
      const o = document.createElement("div");
      return o.style.position = "absolute", o.style.top = "0", o.style.left = "0", o.style.width = "100%", o.style.height = "100%", o.style.pointerEvents = "none", o.style.zIndex = `${(n = i == null ? void 0 : i.tagContainerZIndex) != null ? n : ""}`, o;
    })(), t.scene.add(this.group), this.handleEnable(), window.__MODELMAKER_DEBUG__ = this;
  }
  load(t) {
    return M(this, null, function* () {
      if (this.clear(), this.data = t, this.originalOpacities.clear(), this.resetHighlight(), yield N(this.five), this.data !== t)
        return;
      this.clear();
      const i = (e) => {
        var a;
        const r = e.object_data.color ? new y().setHex(parseInt(e.object_data.color.slice(1), 16)) : new y(1, 1, 1);
        let o = typeof this.occlusionVisibility == "boolean" ? this.occlusionVisibility : !1, n = this.occlusionMode;
        e.type === "triangles" && (o = !0, n = "depthTest");
        const s = ((a = e.object_data.opacity) != null ? a : 0.4) / 2;
        return e.id && this.originalOpacities.set(e.id.toString(), {
          opacity: s,
          lineOpacity: 1
        }), {
          color: r,
          lineColor: r,
          opacity: s,
          lineOpacity: 1,
          lineWidth: 1,
          occlusionVisibility: o,
          occlusionMode: n
        };
      };
      this.items = t.list.map((e) => {
        var r;
        switch (e.type) {
          case "triangles": {
            const o = new k();
            return f(e.id) && (o.uuid = e.id.toString()), o.setPoints(e.object_data.points, { checkLinesIntersect: !1 }), o.setStyle(i(e)), this.fiveDomEvents.addEventListener(o, "hover", () => o.highlight()), this.fiveDomEvents.addEventListener(o, "unHover", () => o.unhighlight()), new F({
              five: this.five,
              tagWrapper: this.tagWrapper,
              model: o,
              group: this.group,
              type: e.type,
              rawData: e,
              fiveDomEvents: this.fiveDomEvents
            });
          }
          case "prism": {
            const o = new O();
            f(e.id) && (o.uuid = e.id.toString()), this.zFightingOffset += Y.Z_FIGHTING_OFFSET;
            const n = e.object_data.points.map((m) => {
              var d;
              return [m[0], m[1] + ((d = e.object_data.fixedY) != null ? d : 0), m[2]];
            });
            n.push(n[0]);
            const s = e.object_data.height + ((r = e.object_data.fixedHeight) != null ? r : 0) + this.zFightingOffset, a = q(n[0]).add(new w().setY(s));
            return o.setPoints({ points: n, heightPoint: a }), o.setStyle(i(e)), new S({
              five: this.five,
              tagWrapper: this.tagWrapper,
              model: o,
              group: this.group,
              type: e.type,
              rawData: e,
              fiveDomEvents: this.fiveDomEvents
            });
          }
          case "box": {
            const o = new O({ five: this.five });
            f(e.id) && (o.uuid = e.id.toString());
            const { start: n, end: s, rotation: a = [0, 0, 0, 0] } = e.object_data, h = new w().fromArray(n), m = new w().fromArray(s), d = new V().fromArray(a), b = new L().setFromEuler(d), v = b.clone().inverse(), x = new w().lerpVectors(h, m, 0.5), C = x.clone().negate(), R = h.clone().add(C).applyQuaternion(v), D = m.clone().add(C).applyQuaternion(v), g = new j(R.clone().max(D), R.clone().min(D));
            return o.setPoints({
              points: [u(g, 2), u(g, 3), u(g, 7), u(g, 6)],
              heightPoint: u(g, 1)
            }), o.position.copy(x), o.quaternion.copy(b), o.setStyle(i(e)), new T({
              five: this.five,
              tagWrapper: this.tagWrapper,
              model: o,
              group: this.group,
              type: e.type,
              rawData: e,
              fiveDomEvents: this.fiveDomEvents
            });
          }
          default:
            return null;
        }
      }).filter(Boolean), this.state.enabled ? this.handleEnable() : this.handleDisable(), this.state.visible ? this.handleShow() : this.handleHide(), this.updateTagRenderer(), this.hooks.emit("dataLoaded", t), this.five.needsRender = !0;
    });
  }
  setState(t) {
    f(t.enabled) && this.state.enabled !== t.enabled && (this.state.enabled = t.enabled, t.enabled ? this.handleEnable() : this.handleDisable(), this.hooks.emit(t.enabled ? "enable" : "disable", { userAction: "我不知道捏" }), this.hooks.emit("stateChange", { state: this.state, userAction: "我不知道捏" })), f(t.visible) && this.state.visible !== t.visible && (this.state.visible = t.visible, t.visible ? this.handleShow() : this.handleHide(), this.hooks.emit(t.visible ? "show" : "hide", { userAction: "我不知道捏" }), this.hooks.emit("stateChange", { state: this.state, userAction: "我不知道捏" }));
  }
  getItemById(t) {
    return this.items.find((i) => i.rawData.id === t);
  }
  registerTagRenderer(t) {
    this.tagRendererMap = E(E({}, this.tagRendererMap), t), this.updateTagRenderer();
  }
  hasCustomTagRenderer(t) {
    return !!this.tagRendererMap[t];
  }
  /**
   * Force finish all active box animations immediately
   * @param id Optional box item ID. If not provided, finishes all active box animations.
   * @param restoreLabels Whether to restore labels immediately. Defaults to true.
   */
  forceFinishBoxAnimation(t, i = !0) {
    let e = [];
    if (t) {
      const r = this.getItemById(t);
      r && ["box", "prism"].includes(r.type) && (e = [r], r.model.forceFinishBoxAnimation(t));
    } else
      e = this.items.filter((r) => ["box", "prism"].includes(r.type)), e.forEach((r) => {
        r.model.forceFinishBoxAnimation(r.rawData.id);
      });
    i && e.forEach((r) => {
      r.tag && (r.tag.show(), r.tag.container.style.opacity = "1");
    }), this.five.needsRender = !0;
  }
  /**
   * Play the up-and-down animation for a box mesh
   * @param id Optional box item ID. If not provided, plays animation for all box items.
   * @param config Animation configuration options
   * @returns Promise that resolves when all animations are complete
   */
  playBoxAnimation(t, i = {}) {
    const { color: e = "#4DF0FF", hideLabels: r = !1 } = i;
    this.forceFinishBoxAnimation(t);
    const o = t ? [this.getItemById(t)].filter(Boolean) : this.items.filter((s) => ["box", "prism"].includes(s.type));
    if (o.length === 0)
      return console.warn("No box items found to animate"), Promise.resolve();
    r && this.hideItemLabels(o);
    const n = o.map((s) => !s || !["box", "prism"].includes(s.type) ? Promise.resolve() : s.model.playBoxAnimation(s.rawData.id, e));
    return Promise.all(n).then(() => {
      if (r)
        return this.easeInItemLabels(o);
    });
  }
  enable() {
    this.setState({ enabled: !0 });
  }
  disable() {
    this.setState({ enabled: !1 });
  }
  show() {
    this.setState({ visible: !0 });
  }
  hide() {
    this.setState({ visible: !1 });
  }
  clear() {
    this.zFightingOffset = 0, this.handleDisable(), this.group.children.length = 0, this.five.needsRender = !0, this.items = [], this.tagWrapper.innerHTML = "", this.fiveDomEvents.clear(), this.originalOpacities.clear(), this.originalTagOpacities.clear(), this.highlightedItem = null, this.originalTagStyles.clear(), this.originalModelColors.clear();
  }
  /**
   * 设置所有模型的透明度
   * @param opacityPercent 透明度系数，范围0-1，1表示保持原始透明度，0表示完全透明
   * @param options 可选参数
   * @param options.type 模型类型，可选值为'box'、'prism'、'triangles'
   * @param options.id 模型id
   */
  setModelsOpacity(t, i) {
    if (!this.state.enabled)
      return;
    const { type: e, id: r } = i || {}, o = e ? Array.isArray(e) ? e : [e] : [], n = t === 1;
    for (const s of this.items)
      if (!e || o.includes(s.type) || s.rawData.id === r) {
        switch (s.type) {
          case "box":
          case "prism": {
            this.setPrismModelOpacity(s.rawData.id, s.model, t);
            break;
          }
          case "triangles": {
            this.setPolygonModelOpacity(s.rawData.id, s.model, t);
            break;
          }
        }
        if (s.tag) {
          if (!s.tag.visible)
            continue;
          const h = s.rawData.id.toString();
          if (n) {
            const d = this.originalTagOpacities.get(h);
            d !== void 0 && (s.tag.container.style.opacity = d.toString());
          } else {
            if (!this.originalTagOpacities.has(h)) {
              const v = parseFloat(s.tag.container.style.opacity) || 1;
              this.originalTagOpacities.set(h, v);
            }
            const b = (this.originalTagOpacities.get(h) || 1) * t;
            s.tag.container.style.opacity = b.toString();
          }
          (parseFloat(s.tag.container.style.opacity) || 0) < 0.01 ? s.tag.container.style.pointerEvents = "none" : s.tag.container.style.pointerEvents = "auto";
        }
      }
    this.five.needsRender = !0;
  }
  /**
   * 隐藏指定类型的模型
   * @param itemTypes 模型类型数组
   */
  hideItemsByType(t) {
    const i = Array.isArray(t) ? t : [t];
    this.items.forEach((e) => {
      i.includes(e.type) && e.hide();
    });
  }
  /**
   * 显示指定类型的模型
   * @param itemTypes 模型类型数组
   */
  showItemsByType(t) {
    const i = Array.isArray(t) ? t : [t];
    this.items.forEach((e) => {
      i.includes(e.type) && e.show();
    });
  }
  /**
   * 根据条件隐藏模型项目
   * @param condition 判断函数，返回 true 的项目将被隐藏
   * @example
   * // 隐藏所有 ID 大于 10 的项目
   * controller.hideItemsByCondition(item => item.rawData.id > 10)
   * 
   * // 隐藏所有红色的盒子
   * controller.hideItemsByCondition(item => 
   *   item.type === 'box' && item.rawData.object_data.color === '#FF0000'
   * )
   */
  hideItemsByCondition(t) {
    this.items.forEach((i) => {
      t(i) && (i.hide(), i.tag.disable());
    });
  }
  /**
   * 根据条件显示模型项目
   * @param condition 判断函数，返回 true 的项目将被显示
   * @example
   * // 显示所有棱柱类型的项目
   * controller.showItemsByCondition(item => item.type === 'prism')
   * 
   * // 显示所有透明度大于 0.5 的项目
   * controller.showItemsByCondition(item => 
   *   (item.rawData.object_data.opacity ?? 0.4) > 0.5
   * )
   */
  showItemsByCondition(t) {
    this.items.forEach((i) => {
      t(i) && (i.show(), i.tag.enable());
    });
  }
  /**
   * 根据条件设置模型项目的可见性
   * @param condition 判断函数，返回 true 的项目将应用指定的可见性状态
   * @param visible 是否可见，true 为显示，false 为隐藏
   * @example
   * // 隐藏所有小于指定面积的项目
   * controller.setItemsVisibility(item => getItemArea(item) < 100, false)
   * 
   * // 显示所有包含特定标签的项目
   * controller.setItemsVisibility(item => 
   *   item.rawData.label?.includes('important'), true
   * )
   */
  setItemsVisibility(t, i) {
    this.items.forEach((e) => {
      t(e) && (i ? e.show() : e.hide(), i ? e.tag.enable() : e.tag.disable());
    });
  }
  /**
   * 显示所有模型项目
   * @example
   * // 恢复所有项目的可见性
   * controller.showAllItems()
   */
  showAllItems() {
    this.items.forEach((t) => {
      t.show(), t.tag.enable();
    });
  }
  /**
   * 隐藏所有模型项目
   * @example
   * // 隐藏所有项目
   * controller.hideAllItems()
   */
  hideAllItems() {
    this.items.forEach((t) => {
      t.hide(), t.tag.disable();
    });
  }
  dispose() {
    this.hooks.emit("dispose"), this.resetHighlight(), this.clear();
  }
  onWorkCodeChange() {
    this.group.matrix.copy(this.workUtil.transform.clone()), this.group.matrix.decompose(this.group.position, this.group.quaternion, this.group.scale), this.group.updateMatrixWorld();
  }
  /**
   * 应用高亮样式到指定项目
   * @param item 要高亮的项目
   * @param color 高亮颜色
   */
  applyHighlightStyles(t, i) {
    const e = t.rawData.id.toString(), r = t.tag.container;
    let o = null;
    if (t.type === "prism" ? o = r.querySelector(".room-label-item__text") : t.type === "box" && (o = r.querySelector(".model-maker-tag")), o) {
      const s = window.getComputedStyle(o);
      this.originalTagStyles.set(e, {
        background: o.style.background || s.background,
        borderImage: o.style.borderImage || s.borderImage
      }), o.style.background = i, o.style.borderImage = "none";
    }
    const n = t.model;
    if (n && typeof n.setStyle == "function") {
      const s = t.rawData.object_data.color ? new y().setHex(parseInt(t.rawData.object_data.color.slice(1), 16)) : new y(1, 1, 1), a = this.originalOpacities.get(e) || { opacity: 0.2, lineOpacity: 1 };
      this.originalModelColors.set(e, {
        color: s.clone(),
        lineColor: s.clone(),
        opacity: a.opacity,
        lineOpacity: a.lineOpacity
      });
      const h = new y(i);
      n.setStyle({
        color: h,
        lineColor: h,
        opacity: a.opacity,
        // 确保高亮时表面足够可见
        lineOpacity: a.lineOpacity
      });
    }
    this.five.needsRender = !0;
  }
  /**
   * 移除指定项目的高亮样式
   * @param item 要移除高亮的项目
   */
  removeHighlightStyles(t) {
    const i = t.rawData.id.toString(), e = t.tag.container, r = this.originalTagStyles.get(i);
    if (r) {
      let n = null;
      t.type === "prism" ? n = e.querySelector(".room-label-item__text") : t.type === "box" && (n = e.querySelector(".model-maker-tag")), n && (n.style.background = r.background, n.style.borderImage = r.borderImage), this.originalTagStyles.delete(i);
    }
    const o = this.originalModelColors.get(i);
    if (o) {
      const n = t.model;
      n && typeof n.setStyle == "function" && n.setStyle({
        color: o.color,
        lineColor: o.lineColor,
        opacity: o.opacity,
        lineOpacity: o.lineOpacity
      }), this.originalModelColors.delete(i);
    }
    this.five.needsRender = !0;
  }
  /**
   * 设置棱柱体模型的透明度
   * @param id 模型id
   * @param model 模型对象
   * @param opacityPercent 透明度系数，范围0-1
   */
  setPrismModelOpacity(t, i, e) {
    let { opacity: r, lineOpacity: o } = this.originalOpacities.get(t.toString()) || { opacity: 0.2, lineOpacity: 1 };
    r = r * e, o = o * e, i.setStyle({ opacity: r, lineOpacity: o });
  }
  /**
   * 设置多边形模型的透明度
   * @param id 模型id
   * @param model 模型对象
   * @param opacityPercent 透明度系数，范围0-1
   */
  setPolygonModelOpacity(t, i, e) {
    let { opacity: r, lineOpacity: o } = this.originalOpacities.get(t.toString()) || { opacity: 0.2, lineOpacity: 1 };
    r = r * e, o = o * e, i.setStyle({ opacity: r, lineOpacity: o });
  }
  handleShow() {
    this.group.visible = !0, this.tagWrapper.style.display = "block", this.five.needsRender = !0;
  }
  handleHide() {
    this.group.visible = !1, this.tagWrapper.style.display = "none", this.five.needsRender = !0;
  }
  /**
   * 高亮指定的模型项目
   * @param id 模型项目的ID
   * @param color 高亮颜色，默认为 #FF7700
   */
  highlightItem(t, i = "#FF7700") {
    if (!this.state.enabled)
      return;
    this.resetHighlight();
    const e = this.getItemById(t);
    !e || !e.tag || (this.highlightedItem = e, this.applyHighlightStyles(e, i));
  }
  /**
   * 重置所有高亮
   */
  resetHighlight() {
    this.highlightedItem && (this.removeHighlightStyles(this.highlightedItem), this.highlightedItem = null);
  }
  /**
   * 获取当前高亮的项目ID
   */
  getHighlightedItemId() {
    var t, i;
    return (i = (t = this.highlightedItem) == null ? void 0 : t.rawData.id) != null ? i : null;
  }
  getPrismItems() {
    return this.items.filter((t) => t instanceof S);
  }
  getPolygonItems() {
    return this.items.filter((t) => t instanceof F);
  }
  getBoxItems() {
    return this.items.filter((t) => t instanceof T);
  }
  /**
   * 隐藏指定项目的标签
   * @param items 要隐藏标签的项目数组
   */
  hideItemLabels(t) {
    t.forEach((i) => {
      i.tag && i.tag.hide();
    });
  }
  /**
   * 缓动显示指定项目的标签
   * @param items 要显示标签的项目数组
   * @param duration 缓动持续时间（毫秒）
   */
  easeInItemLabels(t, i = 500) {
    return new Promise((e) => {
      if (t.length === 0 || !this.state.enabled) {
        e();
        return;
      }
      t.forEach((n) => {
        n.tag && (n.tag.show(), n.tag.container.style.opacity = "0");
      });
      const r = Date.now(), o = () => {
        const n = Date.now() - r, s = Math.min(n / i, 1), a = 1 - Math.pow(1 - s, 3);
        t.forEach((h) => {
          h.tag && (h.tag.container.style.opacity = a.toString());
        }), s < 1 ? requestAnimationFrame(o) : (t.forEach((h) => {
          h.tag && (h.tag.container.style.opacity = "1");
        }), e());
      };
      requestAnimationFrame(o);
    });
  }
}
export {
  Ye as Controller
};
