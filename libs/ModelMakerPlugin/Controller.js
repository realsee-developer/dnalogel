var F = Object.defineProperty;
var D = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var b = (l, p, e) => p in l ? F(l, p, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[p] = e, E = (l, p) => {
  for (var e in p || (p = {}))
    k.call(p, e) && b(l, e, p[e]);
  if (D)
    for (var e of D(p))
      S.call(p, e) && b(l, e, p[e]);
  return l;
};
var h = (l, p, e) => (b(l, typeof p != "symbol" ? p + "" : p, e), e);
var w = (l, p, e) => new Promise((s, a) => {
  var i = (t) => {
    try {
      o(e.next(t));
    } catch (r) {
      a(r);
    }
  }, n = (t) => {
    try {
      o(e.throw(t));
    } catch (r) {
      a(r);
    }
  }, o = (t) => t.done ? s(t.value) : Promise.resolve(t.value).then(i, n);
  o((e = e.apply(l, p)).next());
});
import { Controller as P } from "../base/BasePluginWithData.js";
import * as d from "three";
import { ModelMakerBoxItem as j } from "./item/boxItem.js";
import { PrismMesh as I } from "../Sculpt/Meshes/Prism.js";
import { anyPositionToVector3 as L } from "../shared-utils/positionToVector3.js";
import { PolygonWithEdgeMesh as H } from "../Sculpt/Meshes/PolygonWithEdge.js";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import { waitFiveModelLoaded as A } from "../shared-utils/five/fiveModelLoad.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as v } from "../shared-utils/isNil.js";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import { boxVertex as y } from "../shared-utils/three/boundingBox.js";
import "../vendor/animejs/lib/anime.es.js";
import { FiveDomEvents as O } from "../shared-utils/five/FiveDomEvents.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../shared-utils/five/FivePuppet.js";
import { tagRendererMap as B } from "./utils/tagRenderer.js";
import { ModelMakerPrismItem as T } from "./item/prismItem.js";
import { ModelMakerPolygonItem as z } from "./item/polygonItem.js";
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
import "@realsee/five";
import "../shared-utils/five/calculateThreeMouse.js";
import "./utils/Text.js";
import "../vendor/svelte/internal/index.js";
import "../components/AreaLabel/LabelItem.js";
import "../components/AreaLabel/Assets/roomLabelBg.js";
import "../shared-utils/math/rad2Deg.js";
class kt extends P {
  constructor(e, s) {
    var a, i;
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
      const s = this.occlusionVisibility;
      Array.isArray(s) && this.items.forEach((a) => {
        a.type !== "triangles" && a.model.setStyle instanceof Function && a.model.setStyle({ occlusionVisibility: s.includes(e) });
      });
    });
    h(this, "handleEnable", () => {
      var e, s;
      this.five.scene.add(this.group), (s = (e = this.five.getElement()) == null ? void 0 : e.parentElement) == null || s.appendChild(this.tagWrapper), this.five.needsRender = !0, this.onFiveModeChange(this.five.getCurrentState().mode), this.onFiveEveryReady(), this.five.on("modeChange", this.onFiveModeChange), this.fiveEveryReadyListenerDisposer = G(this.five, this.onFiveEveryReady);
    });
    h(this, "handleDisable", () => {
      this.five.scene.remove(this.group), this.tagWrapper.remove(), this.five.needsRender = !0, this.five.off("modeChange", this.onFiveModeChange), this.fiveEveryReadyListenerDisposer();
    });
    h(this, "onFiveEveryReady", () => w(this, null, function* () {
      if (this.five.state.mode === "Panorama")
        return;
      const e = this.items.filter((t) => t instanceof T).map((t) => t.tag), s = e.filter((t) => t.position && t.visible && t.enabled);
      yield N(0);
      const a = this.five.camera.position.clone(), i = s.sort((t, r) => a.distanceTo(t.position) - a.distanceTo(r.position)), n = [], o = (t, r) => !(t.right < r.left || t.left > r.right || t.bottom < r.top || t.top > r.bottom);
      e.forEach((t) => {
        t.visibles[2] = void 0;
      }), i.forEach((t) => {
        if (t.visibles[1] === !1)
          return;
        const r = t.container.getElementsByClassName("room-label-item__text")[0];
        if (!r)
          return;
        const c = r.getBoundingClientRect();
        n.every((m) => !o(m.boundingClientRect, c)) ? (n.push({ tag: t, boundingClientRect: c }), t.visibles[2] = !0) : t.visibles[2] = !1, t.needsRender = !0;
      });
    }));
    h(this, "updateTagRenderer", () => {
      this.items.forEach((e) => {
        var a;
        const s = (a = this.tagRendererMap[e.type]) != null ? a : B[e.type];
        s && e.__renderer !== s && (e.__renderer = s, typeof e.__disposeRenderer == "function" && e.__disposeRenderer(), e.tag.container.innerHTML = "", e.__disposeRenderer = s(e.tag.container, e, this.five));
      });
    });
    this.group.name = "ModelMakerPluginGroup", this.state = { enabled: !0, visible: !0 }, this.occlusionVisibility = (a = s == null ? void 0 : s.occlusionVisibility) != null ? a : !1, this.occlusionMode = (i = s == null ? void 0 : s.occlusionMode) != null ? i : "translucence", this.fiveDomEvents = new O(e, { noEmitWhenHide: !0, noEmitWhenNotInScene: !0 }), this.tagWrapper = (() => {
      var o;
      const n = document.createElement("div");
      return n.style.position = "absolute", n.style.top = "0", n.style.left = "0", n.style.width = "100%", n.style.height = "100%", n.style.pointerEvents = "none", n.style.zIndex = `${(o = s == null ? void 0 : s.tagContainerZIndex) != null ? o : ""}`, n;
    })(), e.scene.add(this.group), this.handleEnable(), window.__MODELMAKER_DEBUG__ = this;
  }
  load(e) {
    return w(this, null, function* () {
      var a;
      if (this.clear(), this.data = e, yield A(this.five), this.data !== e)
        return;
      this.clear();
      const s = (i) => {
        var r;
        const n = i.object_data.color ? new d.Color().setHex(parseInt(i.object_data.color.slice(1), 16)) : new d.Color(1, 1, 1);
        let o = typeof this.occlusionVisibility == "boolean" ? this.occlusionVisibility : !1, t = this.occlusionMode;
        return i.type === "triangles" && (o = !0, t = "depthTest"), {
          color: n,
          lineColor: n,
          opacity: ((r = i.object_data.opacity) != null ? r : 0.4) / 2,
          lineOpacity: 1,
          lineWidth: 1,
          occlusionVisibility: o,
          occlusionMode: t
        };
      };
      (a = e == null ? void 0 : e.list) == null || a.forEach((i) => {
        var n;
        if (i.type === "triangles") {
          const o = new H();
          v(i.id) && (o.uuid = i.id.toString()), o.setPoints(i.object_data.points, { checkLinesIntersect: !1 }), o.setStyle(s(i)), this.fiveDomEvents.addEventListener(o, "hover", () => o.highlight()), this.fiveDomEvents.addEventListener(o, "unHover", () => o.unhighlight());
          const t = new z({
            five: this.five,
            tagWrapper: this.tagWrapper,
            model: o,
            group: this.group,
            type: i.type,
            rawData: i,
            fiveDomEvents: this.fiveDomEvents
          });
          this.items.push(t);
        } else if (i.type === "prism") {
          const o = new I();
          v(i.id) && (o.uuid = i.id.toString()), this.zFightingOffset += Q.Z_FIGHTING_OFFSET;
          const t = i.object_data.points.map((m) => {
            var g;
            return [m[0], m[1] + ((g = i.object_data.fixedY) != null ? g : 0), m[2]];
          });
          t.push(t[0]);
          const r = i.object_data.height + ((n = i.object_data.fixedHeight) != null ? n : 0) + this.zFightingOffset, c = L(t[0]).add(new d.Vector3().setY(r));
          o.setPoints({ points: t, heightPoint: c }), o.setStyle(s(i));
          const u = new T({
            five: this.five,
            tagWrapper: this.tagWrapper,
            model: o,
            group: this.group,
            type: i.type,
            rawData: i,
            fiveDomEvents: this.fiveDomEvents
          });
          this.items.push(u);
        } else if (i.type === "box") {
          const o = new I();
          v(i.id) && (o.uuid = i.id.toString());
          const { start: t, end: r, rotation: c = [0, 0, 0, 0] } = i.object_data, u = new d.Vector3().fromArray(t), m = new d.Vector3().fromArray(r), g = new d.Euler().fromArray(c), R = new d.Quaternion().setFromEuler(g), M = R.clone().inverse(), _ = new d.Vector3().lerpVectors(u, m, 0.5), C = _.clone().negate(), x = u.clone().add(C).applyQuaternion(M), V = m.clone().add(C).applyQuaternion(M), f = new d.Box3(x.clone().max(V), x.clone().min(V));
          o.setPoints({
            points: [y(f, 2), y(f, 3), y(f, 7), y(f, 6)],
            heightPoint: y(f, 1)
          }), o.position.copy(_), o.quaternion.copy(R), o.setStyle(s(i));
          const W = new j({
            five: this.five,
            tagWrapper: this.tagWrapper,
            model: o,
            group: this.group,
            type: i.type,
            rawData: i,
            fiveDomEvents: this.fiveDomEvents
          });
          this.items.push(W);
        }
      }), this.state.enabled ? this.handleEnable() : this.handleDisable(), this.state.visible ? this.handleShow() : this.handleHide(), this.updateTagRenderer(), this.hooks.emit("dataLoaded", e), this.five.needsRender = !0;
    });
  }
  setState(e) {
    v(e.enabled) && this.state.enabled !== e.enabled && (this.state.enabled = e.enabled, e.enabled ? this.handleEnable() : this.handleDisable(), this.hooks.emit(e.enabled ? "enable" : "disable", { userAction: "我不知道捏" }), this.hooks.emit("stateChange", { state: this.state, userAction: "我不知道捏" })), v(e.visible) && this.state.visible !== e.visible && (this.state.visible = e.visible, e.visible ? this.handleShow() : this.handleHide(), this.hooks.emit(e.visible ? "show" : "hide", { userAction: "我不知道捏" }), this.hooks.emit("stateChange", { state: this.state, userAction: "我不知道捏" }));
  }
  getItemById(e) {
    return this.items.find((s) => s.rawData.id === e);
  }
  registerTagRenderer(e) {
    this.tagRendererMap = E(E({}, this.tagRendererMap), e), this.updateTagRenderer();
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
  kt as Controller
};
