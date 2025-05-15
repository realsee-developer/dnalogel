var W = Object.defineProperty;
var T = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
var E = (h, l, t) => l in h ? W(h, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[l] = t, w = (h, l) => {
  for (var t in l || (l = {}))
    A.call(l, t) && E(h, t, l[t]);
  if (T)
    for (var t of T(l))
      P.call(l, t) && E(h, t, l[t]);
  return h;
};
var p = (h, l, t) => (E(h, typeof l != "symbol" ? l + "" : l, t), t);
var M = (h, l, t) => new Promise((s, e) => {
  var r = (i) => {
    try {
      n(t.next(i));
    } catch (a) {
      e(a);
    }
  }, o = (i) => {
    try {
      n(t.throw(i));
    } catch (a) {
      e(a);
    }
  }, n = (i) => i.done ? s(i.value) : Promise.resolve(i.value).then(r, o);
  n((t = t.apply(h, l)).next());
});
import { Controller as V } from "../base/BasePluginWithData.js";
import { Group as j, Vector3 as b, Euler as B, Quaternion as L, Box3 as H, Color as C } from "three";
import { ModelMakerBoxItem as S } from "./item/boxItem.js";
import { PrismMesh as O } from "../Sculpt/Meshes/Prism.js";
import { anyPositionToVector3 as z } from "../shared-utils/positionToVector3.js";
import { PolygonWithEdgeMesh as k } from "../Sculpt/Meshes/PolygonWithEdge.js";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import { waitFiveModelLoaded as G } from "../shared-utils/five/fiveModelLoad.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as y } from "../shared-utils/isNil.js";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import { boxVertex as u } from "../shared-utils/three/boundingBox.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { FiveDomEvents as N } from "../shared-utils/five/FiveDomEvents.js";
import "../shared-utils/five/FivePuppet.js";
import { tagRendererMap as Q } from "./utils/tagRenderer.js";
import { ModelMakerPrismItem as R } from "./item/prismItem.js";
import { ModelMakerPolygonItem as F } from "./item/polygonItem.js";
import { fiveEveryReadyListener as q } from "../shared-utils/five/fiveEveryReadyListener.js";
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
import "../shared-utils/url/absoluteUrl.js";
import "./item/baseItem.js";
import "../shared-utils/three/addIfNotExists.js";
import "../shared-utils/three/IObject3D.js";
import "../shared-utils/three/core/Raycaster.js";
import "../Sculpt/utils/three/ColoredMesh.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/core/PrismGeometry.js";
import "../shared-utils/three/core/polygonVertex.js";
import "../shared-utils/three/earcut3D.js";
import "../vendor/earcut/src/earcut.js";
import "../shared-utils/three/getNormal.js";
import "../shared-utils/three/geometryUtil.js";
import "../shared-utils/three/centerPoint.js";
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/util.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../Sculpt/utils/unit.js";
import "../Sculpt/utils/renderDom.js";
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
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "../shared-utils/five/calculateThreeMouse.js";
import "./utils/Text.js";
import "../vendor/svelte/internal/index.js";
import "../components/AreaLabel/LabelItem.js";
import "../components/AreaLabel/Assets/roomLabelBg.js";
import "../shared-utils/math/rad2Deg.js";
class ze extends V {
  constructor(t, s) {
    var e, r;
    super(t);
    p(this, "state");
    p(this, "items", []);
    p(this, "group", new j());
    p(this, "data");
    p(this, "tagRendererMap", {});
    p(this, "fiveDomEvents");
    p(this, "zFightingOffset", 0);
    p(this, "tagWrapper");
    p(this, "occlusionVisibility");
    p(this, "occlusionMode");
    p(this, "fiveEveryReadyListenerDisposer");
    // 存储每个模型的原始透明度
    p(this, "originalOpacities", /* @__PURE__ */ new Map());
    // 存储标签原始透明度
    p(this, "originalTagOpacities", /* @__PURE__ */ new Map());
    p(this, "onFiveModeChange", (t) => {
      const s = this.occlusionVisibility;
      Array.isArray(s) && [...this.getPrismItems(), ...this.getBoxItems()].forEach((r) => {
        (r.model instanceof O || r.model instanceof k) && r.model.setStyle({ occlusionVisibility: s.includes(t) });
      });
    });
    p(this, "handleEnable", () => {
      var t, s;
      this.five.scene.add(this.group), (s = (t = this.five.getElement()) == null ? void 0 : t.parentElement) == null || s.appendChild(this.tagWrapper), this.five.needsRender = !0, this.onFiveModeChange(this.five.getCurrentState().mode), this.onFiveEveryReady(), this.five.on("modeChange", this.onFiveModeChange), this.fiveEveryReadyListenerDisposer = q(this.five, this.onFiveEveryReady);
    });
    p(this, "handleDisable", () => {
      this.five.scene.remove(this.group), this.tagWrapper.remove(), this.five.needsRender = !0, this.five.off("modeChange", this.onFiveModeChange), this.fiveEveryReadyListenerDisposer();
    });
    p(this, "onFiveEveryReady", () => M(this, null, function* () {
      if (this.five.state.mode === "Panorama")
        return;
      const t = this.items.filter((i) => i instanceof R).map((i) => i.tag), s = t.filter((i) => i.position && i.visible && i.enabled);
      yield U(0);
      const e = this.five.camera.position.clone(), r = s.sort((i, a) => e.distanceTo(i.position) - e.distanceTo(a.position)), o = [], n = (i, a) => !(i.right < a.left || i.left > a.right || i.bottom < a.top || i.top > a.bottom);
      t.forEach((i) => {
        i.visibles[2] = void 0;
      }), r.forEach((i) => {
        if (i.visibles[1] === !1)
          return;
        const a = i.container.getElementsByClassName("room-label-item__text")[0];
        if (!a)
          return;
        const d = a.getBoundingClientRect();
        o.every((c) => !n(c.boundingClientRect, d)) ? (o.push({ tag: i, boundingClientRect: d }), i.visibles[2] = !0) : i.visibles[2] = !1, i.needsRender = !0;
      });
    }));
    p(this, "updateTagRenderer", () => {
      this.items.forEach((t) => {
        var e;
        const s = (e = this.tagRendererMap[t.type]) != null ? e : Q[t.type];
        s && t.__renderer !== s && (t.__renderer = s, typeof t.__disposeRenderer == "function" && t.__disposeRenderer(), t.tag.container.innerHTML = "", t.__disposeRenderer = s(t.tag.container, t, this.five));
      });
    });
    this.group.name = "ModelMakerPluginGroup", this.state = { enabled: !0, visible: !0 }, this.occlusionVisibility = (e = s == null ? void 0 : s.occlusionVisibility) != null ? e : !1, this.occlusionMode = (r = s == null ? void 0 : s.occlusionMode) != null ? r : "translucence", this.fiveDomEvents = new N(t, { noEmitWhenHide: !0, noEmitWhenNotInScene: !0 }), this.tagWrapper = (() => {
      var n;
      const o = document.createElement("div");
      return o.style.position = "absolute", o.style.top = "0", o.style.left = "0", o.style.width = "100%", o.style.height = "100%", o.style.pointerEvents = "none", o.style.zIndex = `${(n = s == null ? void 0 : s.tagContainerZIndex) != null ? n : ""}`, o;
    })(), t.scene.add(this.group), this.handleEnable(), window.__MODELMAKER_DEBUG__ = this;
  }
  load(t) {
    return M(this, null, function* () {
      if (this.clear(), this.data = t, this.originalOpacities.clear(), yield G(this.five), this.data !== t)
        return;
      this.clear();
      const s = (e) => {
        var a;
        const r = e.object_data.color ? new C().setHex(parseInt(e.object_data.color.slice(1), 16)) : new C(1, 1, 1);
        let o = typeof this.occlusionVisibility == "boolean" ? this.occlusionVisibility : !1, n = this.occlusionMode;
        e.type === "triangles" && (o = !0, n = "depthTest");
        const i = ((a = e.object_data.opacity) != null ? a : 0.4) / 2;
        return e.id && this.originalOpacities.set(e.id.toString(), {
          opacity: i,
          lineOpacity: 1
        }), {
          color: r,
          lineColor: r,
          opacity: i,
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
            return y(e.id) && (o.uuid = e.id.toString()), o.setPoints(e.object_data.points, { checkLinesIntersect: !1 }), o.setStyle(s(e)), this.fiveDomEvents.addEventListener(o, "hover", () => o.highlight()), this.fiveDomEvents.addEventListener(o, "unHover", () => o.unhighlight()), new F({
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
            y(e.id) && (o.uuid = e.id.toString()), this.zFightingOffset += Y.Z_FIGHTING_OFFSET;
            const n = e.object_data.points.map((m) => {
              var c;
              return [m[0], m[1] + ((c = e.object_data.fixedY) != null ? c : 0), m[2]];
            });
            n.push(n[0]);
            const i = e.object_data.height + ((r = e.object_data.fixedHeight) != null ? r : 0) + this.zFightingOffset, a = z(n[0]).add(new b().setY(i));
            return o.setPoints({ points: n, heightPoint: a }), o.setStyle(s(e)), new R({
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
            const o = new O();
            y(e.id) && (o.uuid = e.id.toString());
            const { start: n, end: i, rotation: a = [0, 0, 0, 0] } = e.object_data, d = new b().fromArray(n), m = new b().fromArray(i), c = new B().fromArray(a), f = new L().setFromEuler(c), v = f.clone().inverse(), I = new b().lerpVectors(d, m, 0.5), _ = I.clone().negate(), D = d.clone().add(_).applyQuaternion(v), x = m.clone().add(_).applyQuaternion(v), g = new H(D.clone().max(x), D.clone().min(x));
            return o.setPoints({
              points: [u(g, 2), u(g, 3), u(g, 7), u(g, 6)],
              heightPoint: u(g, 1)
            }), o.position.copy(I), o.quaternion.copy(f), o.setStyle(s(e)), new S({
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
    y(t.enabled) && this.state.enabled !== t.enabled && (this.state.enabled = t.enabled, t.enabled ? this.handleEnable() : this.handleDisable(), this.hooks.emit(t.enabled ? "enable" : "disable", { userAction: "我不知道捏" }), this.hooks.emit("stateChange", { state: this.state, userAction: "我不知道捏" })), y(t.visible) && this.state.visible !== t.visible && (this.state.visible = t.visible, t.visible ? this.handleShow() : this.handleHide(), this.hooks.emit(t.visible ? "show" : "hide", { userAction: "我不知道捏" }), this.hooks.emit("stateChange", { state: this.state, userAction: "我不知道捏" }));
  }
  getItemById(t) {
    return this.items.find((s) => s.rawData.id === t);
  }
  registerTagRenderer(t) {
    this.tagRendererMap = w(w({}, this.tagRendererMap), t), this.updateTagRenderer();
  }
  hasCustomTagRenderer(t) {
    return !!this.tagRendererMap[t];
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
    this.zFightingOffset = 0, this.handleDisable(), this.group.children.length = 0, this.five.needsRender = !0, this.items = [], this.tagWrapper.innerHTML = "", this.fiveDomEvents.clear(), this.originalOpacities.clear(), this.originalTagOpacities.clear();
  }
  /**
   * 设置所有模型的透明度
   * @param opacityPercent 透明度系数，范围0-1，1表示保持原始透明度，0表示完全透明
   * @param options 可选参数
   * @param options.type 模型类型，可选值为'box'、'prism'、'triangles'
   * @param options.id 模型id
   */
  setModelsOpacity(t, s) {
    if (!this.state.enabled)
      return;
    const { type: e, id: r } = s || {}, o = e ? Array.isArray(e) ? e : [e] : [], n = t === 1;
    for (const i of this.items)
      if (!e || o.includes(i.type) || i.rawData.id === r) {
        switch (i.type) {
          case "box":
          case "prism": {
            this.setPrismModelOpacity(i.rawData.id, i.model, t);
            break;
          }
          case "triangles": {
            this.setPolygonModelOpacity(i.rawData.id, i.model, t);
            break;
          }
        }
        if (i.tag) {
          if (!i.tag.visible)
            continue;
          const d = i.rawData.id.toString();
          if (n) {
            const c = this.originalTagOpacities.get(d);
            c !== void 0 && (i.tag.container.style.opacity = c.toString());
          } else {
            if (!this.originalTagOpacities.has(d)) {
              const v = parseFloat(i.tag.container.style.opacity) || 1;
              this.originalTagOpacities.set(d, v);
            }
            const f = (this.originalTagOpacities.get(d) || 1) * t;
            i.tag.container.style.opacity = f.toString();
          }
          (parseFloat(i.tag.container.style.opacity) || 0) < 0.01 ? i.tag.container.style.pointerEvents = "none" : i.tag.container.style.pointerEvents = "auto";
        }
      }
    this.five.needsRender = !0;
  }
  /**
   * 隐藏指定类型的模型
   * @param itemTypes 模型类型数组
   */
  hideItemsByType(t) {
    const s = Array.isArray(t) ? t : [t];
    this.items.forEach((e) => {
      s.includes(e.type) && e.hide();
    });
  }
  /**
   * 显示指定类型的模型
   * @param itemTypes 模型类型数组
   */
  showItemsByType(t) {
    const s = Array.isArray(t) ? t : [t];
    this.items.forEach((e) => {
      s.includes(e.type) && e.show();
    });
  }
  dispose() {
    this.hooks.emit("dispose"), this.clear();
  }
  onWorkCodeChange() {
    this.group.matrix.copy(this.workUtil.transform.clone()), this.group.matrix.decompose(this.group.position, this.group.quaternion, this.group.scale), this.group.updateMatrixWorld();
  }
  /**
   * 设置棱柱体模型的透明度
   * @param id 模型id
   * @param model 模型对象
   * @param opacityPercent 透明度系数，范围0-1
   */
  setPrismModelOpacity(t, s, e) {
    let { opacity: r, lineOpacity: o } = this.originalOpacities.get(t.toString()) || { opacity: 0.2, lineOpacity: 1 };
    r = r * e, o = o * e, s.setStyle({ opacity: r, lineOpacity: o });
  }
  /**
   * 设置多边形模型的透明度
   * @param id 模型id
   * @param model 模型对象
   * @param opacityPercent 透明度系数，范围0-1
   */
  setPolygonModelOpacity(t, s, e) {
    let { opacity: r, lineOpacity: o } = this.originalOpacities.get(t.toString()) || { opacity: 0.2, lineOpacity: 1 };
    r = r * e, o = o * e, s.setStyle({ opacity: r, lineOpacity: o });
  }
  handleShow() {
    this.group.visible = !0, this.tagWrapper.style.display = "block", this.five.needsRender = !0;
  }
  handleHide() {
    this.group.visible = !1, this.tagWrapper.style.display = "none", this.five.needsRender = !0;
  }
  getPrismItems() {
    return this.items.filter((t) => t instanceof R);
  }
  getPolygonItems() {
    return this.items.filter((t) => t instanceof F);
  }
  getBoxItems() {
    return this.items.filter((t) => t instanceof S);
  }
}
export {
  ze as Controller
};
