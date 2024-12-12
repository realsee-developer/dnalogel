var k = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var P = Object.prototype.hasOwnProperty, D = Object.prototype.propertyIsEnumerable;
var b = (l, n, e) => n in l ? k(l, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[n] = e, g = (l, n) => {
  for (var e in n || (n = {}))
    P.call(n, e) && b(l, e, n[e]);
  if (V)
    for (var e of V(n))
      D.call(n, e) && b(l, e, n[e]);
  return l;
};
var h = (l, n, e) => (b(l, typeof n != "symbol" ? n + "" : n, e), e);
var E = (l, n, e) => new Promise((i, a) => {
  var o = (t) => {
    try {
      s(e.next(t));
    } catch (p) {
      a(p);
    }
  }, r = (t) => {
    try {
      s(e.throw(t));
    } catch (p) {
      a(p);
    }
  }, s = (t) => t.done ? i(t.value) : Promise.resolve(t.value).then(o, r);
  s((e = e.apply(l, n)).next());
});
import { Controller as j } from "../base/BasePluginWithData.js";
import * as d from "three";
import { ModelMakerBoxItem as S } from "./item/boxItem.js";
import { PrismMesh as F } from "../Sculpt/Meshes/Prism.js";
import { anyPositionToVector3 as L } from "../shared-utils/positionToVector3.js";
import { PolygonWithEdgeMesh as A } from "../Sculpt/Meshes/PolygonWithEdge.js";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "@realsee/five/line";
import { notNil as T } from "../shared-utils/isNil.js";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import { boxVertex as v } from "../shared-utils/three/boundingBox.js";
import "../vendor/animejs/lib/anime.es.js";
import { waitFiveModelLoaded as H } from "../shared-utils/five/fiveModelLoad.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../shared-utils/five/FivePuppet.js";
import { tagRendererMap as O } from "./utils/tagRenderer.js";
import { ModelMakerPrismItem as I } from "./item/prismItem.js";
import { ModelMakerPolygonItem as B } from "./item/polygonItem.js";
import { getFiveDomEvent as z } from "./utils/getFiveDomEvent.js";
import { fiveEveryReadyListener as G } from "../shared-utils/five/fiveEveryReadyListener.js";
import { sleep as N } from "../CruisePlugin/utils/sleep.js";
import { CONST as Q } from "../shared-utils/constants.js";
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
import "../Sculpt/utils/removeAllTag.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/util.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
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
import "../shared-utils/five/initialCSS3DRender.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "@realsee/five";
import "./utils/Text.js";
import "../vendor/svelte/internal/index.js";
import "../components/AreaLabel/LabelItem.js";
import "../components/AreaLabel/Assets/roomLabelBg.js";
import "../shared-utils/math/rad2Deg.js";
import "../shared-utils/five/FiveDomEvents.js";
import "../shared-utils/five/calculateThreeMouse.js";
class Wt extends j {
  constructor(e, i) {
    var a, o;
    super(e);
    h(this, "state");
    h(this, "items", []);
    h(this, "group", new d.Group());
    h(this, "data");
    h(this, "tagRendererMap", {});
    h(this, "fiveDomEvents");
    h(this, "zFightingOffset", 0);
    h(this, "tagWrapper");
    h(this, "occlusionVisibility");
    h(this, "occlusionMode");
    h(this, "fiveEveryReadyListenerDisposer");
    h(this, "onFiveModeChange", (e) => {
      const i = this.occlusionVisibility;
      Array.isArray(i) && this.items.forEach((a) => {
        a.model.setStyle instanceof Function && a.model.setStyle({ occlusionVisibility: i.includes(e) });
      });
    });
    h(this, "handleEnable", () => {
      var e, i;
      this.five.scene.add(this.group), (i = (e = this.five.getElement()) == null ? void 0 : e.parentElement) == null || i.appendChild(this.tagWrapper), this.five.needsRender = !0, this.onFiveModeChange(this.five.getCurrentState().mode), this.onFiveEveryReady(), this.five.on("modeChange", this.onFiveModeChange), this.fiveEveryReadyListenerDisposer = G(this.five, this.onFiveEveryReady);
    });
    h(this, "handleDisable", () => {
      this.five.scene.remove(this.group), this.tagWrapper.remove(), this.five.needsRender = !0, this.five.off("modeChange", this.onFiveModeChange), this.fiveEveryReadyListenerDisposer();
    });
    h(this, "onFiveEveryReady", () => E(this, null, function* () {
      if (this.five.state.mode === "Panorama")
        return;
      const e = this.items.filter((t) => t instanceof I).map((t) => t.tag), i = e.filter((t) => t.position && t.visible && t.enabled);
      yield N(0);
      const a = this.five.camera.position.clone(), o = i.sort((t, p) => a.distanceTo(t.position) - a.distanceTo(p.position)), r = [], s = (t, p) => !(t.right < p.left || t.left > p.right || t.bottom < p.top || t.top > p.bottom);
      e.forEach((t) => {
        t.visibles[2] = void 0;
      }), o.forEach((t) => {
        if (t.visibles[1] === !1)
          return;
        const p = t.container.getElementsByClassName("room-label-item__text")[0];
        if (!p)
          return;
        const c = p.getBoundingClientRect();
        r.every((m) => !s(m.boundingClientRect, c)) ? (r.push({ tag: t, boundingClientRect: c }), t.visibles[2] = !0) : t.visibles[2] = !1, t.needsRender = !0;
      });
    }));
    h(this, "updateTagRenderer", () => {
      this.items.forEach((e) => {
        var a;
        const i = (a = this.tagRendererMap[e.type]) != null ? a : O[e.type];
        i && e.__renderer !== i && (e.__renderer = i, typeof e.__disposeRenderer == "function" && e.__disposeRenderer(), e.tag.container.innerHTML = "", e.__disposeRenderer = i(e.tag.container, e, this.five));
      });
    });
    this.group.name = "ModelMakerPluginGroup", this.state = { enabled: !0, visible: !0 }, this.occlusionVisibility = (a = i == null ? void 0 : i.occlusionVisibility) != null ? a : !1, this.occlusionMode = (o = i == null ? void 0 : i.occlusionMode) != null ? o : "translucence", this.fiveDomEvents = z(e), this.tagWrapper = (() => {
      var s;
      const r = document.createElement("div");
      return r.style.position = "absolute", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.height = "100%", r.style.pointerEvents = "none", r.style.zIndex = `${(s = i == null ? void 0 : i.tagContainerZIndex) != null ? s : ""}`, r;
    })(), e.scene.add(this.group), this.handleEnable(), window.__MODELMAKER_DEBUG__ = this;
  }
  load(e) {
    return E(this, null, function* () {
      var a;
      if (this.clear(), this.data = e, yield H(this.five), this.data !== e)
        return;
      this.clear();
      const i = (o) => {
        var s;
        const r = o.object_data.color ? new d.Color().setHex(parseInt(o.object_data.color.slice(1), 16)) : new d.Color(1, 1, 1);
        return {
          color: r,
          lineColor: r,
          opacity: ((s = o.object_data.opacity) != null ? s : 0.4) / 2,
          lineOpacity: 1,
          lineWidth: 1,
          occlusionVisibility: typeof this.occlusionVisibility == "boolean" ? this.occlusionVisibility : !1,
          occlusionMode: this.occlusionMode
        };
      };
      (a = e == null ? void 0 : e.list) == null || a.forEach((o) => {
        var r;
        if (o.type === "triangles") {
          const s = new A();
          s.setPoints(o.object_data.points), s.setStyle(i(o)), this.fiveDomEvents.addEventListener(s, "hover", () => s.highlight()), this.fiveDomEvents.addEventListener(s, "unHover", () => s.unhighlight());
          const t = new B({
            five: this.five,
            tagWrapper: this.tagWrapper,
            model: s,
            group: this.group,
            type: o.type,
            rawData: o
          });
          this.items.push(t);
        } else if (o.type === "prism") {
          const s = new F();
          this.zFightingOffset += Q.Z_FIGHTING_OFFSET;
          const t = o.object_data.points.map((m) => {
            var y;
            return [m[0], m[1] + ((y = o.object_data.fixedY) != null ? y : 0), m[2]];
          });
          t.push(t[0]);
          const p = o.object_data.height + ((r = o.object_data.fixedHeight) != null ? r : 0) + this.zFightingOffset, c = L(t[0]).add(new d.Vector3().setY(p));
          s.setPoints({ points: t, heightPoint: c }), s.setStyle(i(o));
          const u = new I({
            five: this.five,
            tagWrapper: this.tagWrapper,
            model: s,
            group: this.group,
            type: o.type,
            rawData: o
          });
          this.items.push(u);
        } else if (o.type === "box") {
          const s = new F(), { start: t, end: p, rotation: c = [0, 0, 0, 0] } = o.object_data, u = new d.Vector3().fromArray(t), m = new d.Vector3().fromArray(p), y = new d.Euler().fromArray(c), w = new d.Quaternion().setFromEuler(y), R = w.clone().inverse(), M = new d.Vector3().lerpVectors(u, m, 0.5), _ = M.clone().negate(), C = u.clone().add(_).applyQuaternion(R), x = m.clone().add(_).applyQuaternion(R), f = new d.Box3(C.clone().max(x), C.clone().min(x));
          s.setPoints({
            points: [v(f, 2), v(f, 3), v(f, 7), v(f, 6)],
            heightPoint: v(f, 1)
          }), s.position.copy(M), s.quaternion.copy(w), s.setStyle(i(o));
          const W = new S({
            five: this.five,
            tagWrapper: this.tagWrapper,
            model: s,
            group: this.group,
            type: o.type,
            rawData: o
          });
          this.items.push(W);
        }
      }), this.state.enabled ? this.handleEnable() : this.handleDisable(), this.state.visible ? this.handleShow() : this.handleHide(), this.updateTagRenderer(), this.hooks.emit("dataLoaded", e), this.five.needsRender = !0;
    });
  }
  setState(e) {
    T(e.enabled) && this.state.enabled !== e.enabled && (this.state.enabled = e.enabled, e.enabled ? this.handleEnable() : this.handleDisable(), this.hooks.emit(e.enabled ? "enable" : "disable", { userAction: "我不知道捏" }), this.hooks.emit("stateChange", { state: this.state, userAction: "我不知道捏" })), T(e.visible) && this.state.visible !== e.visible && (this.state.visible = e.visible, e.visible ? this.handleShow() : this.handleHide(), this.hooks.emit(e.visible ? "show" : "hide", { userAction: "我不知道捏" }), this.hooks.emit("stateChange", { state: this.state, userAction: "我不知道捏" }));
  }
  getItemById(e) {
    return this.items.find((i) => i.rawData.id === e);
  }
  registerTagRenderer(e) {
    this.tagRendererMap = g(g({}, this.tagRendererMap), e), this.updateTagRenderer();
  }
  hasCustomTagRenderer(e) {
    return !!this.tagRendererMap[e];
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
    this.zFightingOffset = 0, this.handleDisable(), this.group.children.length = 0, this.five.needsRender = !0, this.items = [], this.tagWrapper.innerHTML = "", this.fiveDomEvents.clear();
  }
  dispose() {
    this.hooks.emit("dispose"), this.clear();
  }
  onWorkCodeChange() {
    this.group.matrix.copy(this.workUtil.transform.clone()), this.group.matrix.decompose(this.group.position, this.group.quaternion, this.group.scale), this.group.updateMatrixWorld();
  }
  handleShow() {
    this.group.visible = !0, this.tagWrapper.style.display = "block", this.five.needsRender = !0;
  }
  handleHide() {
    this.group.visible = !1, this.tagWrapper.style.display = "none", this.five.needsRender = !0;
  }
}
export {
  Wt as Controller
};
