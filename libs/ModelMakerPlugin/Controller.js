var H = Object.defineProperty;
var P = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var w = (h, o, e) => o in h ? H(h, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[o] = e, E = (h, o) => {
  for (var e in o || (o = {}))
    L.call(o, e) && w(h, e, o[e]);
  if (P)
    for (var e of P(o))
      S.call(o, e) && w(h, e, o[e]);
  return h;
};
var n = (h, o, e) => (w(h, typeof o != "symbol" ? o + "" : o, e), e);
var F = (h, o, e) => new Promise((t, r) => {
  var p = (l) => {
    try {
      i(e.next(l));
    } catch (m) {
      r(m);
    }
  }, a = (l) => {
    try {
      i(e.throw(l));
    } catch (m) {
      r(m);
    }
  }, i = (l) => l.done ? t(l.value) : Promise.resolve(l.value).then(p, a);
  i((e = e.apply(h, o)).next());
});
import { Controller as z } from "../base/BasePluginWithData.js";
import * as c from "three";
import { ModelMakerBoxItem as B } from "./item/boxItem.js";
import { PrismMesh as A } from "../Sculpt/Meshes/Prism.js";
import { anyPositionToVector3 as O } from "../shared-utils/positionToVector3.js";
import { PolygonWithEdgeMesh as Q } from "../Sculpt/Meshes/PolygonWithEdge.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../shared-utils/tag.js";
import { boxVertex as g } from "../shared-utils/three/boundingBox.js";
import "animejs";
import { notNil as I } from "../shared-utils/isNil.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { tagRendererMap as q } from "./utils/tagRenderer.js";
import { ModelMakerPrismItem as G } from "./item/prismItem.js";
import { ModelMakerPolygonItem as U } from "./item/polygonItem.js";
import { getFiveDomEvent as Y } from "./utils/getFiveDomEvent.js";
import { waitFiveModelLoaded as $ } from "../shared-utils/five/fiveModelLoad.js";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/three/core/Sphere.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/five/FiveLine.js";
import "../shared-utils/three/centerPoint.js";
import "../Sculpt/utils/removeAllTag.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/util.js";
import "../Sculpt/Meshes/Polygon.js";
import "../shared-utils/three/generatePolygonGeometry.js";
import "../shared-utils/three/earcut3D.js";
import "earcut";
import "../shared-utils/three/getNormal.js";
import "../PanoMeasurePlugin/utils/isIntersecting.js";
import "../Sculpt/utils/three/ColoredMesh.js";
import "../shared-utils/three/geometryUtil.js";
import "../shared-utils/three/core/Raycaster.js";
import "../Sculpt/Meshes/Polyline.js";
import "../Sculpt/Meshes/LineWithDots.js";
import "../Sculpt/Meshes/Point.js";
import "../shared-utils/three/closeVectors.js";
import "../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../vendor/three/build/three.module.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/dom/resizeObserver.js";
import "./utils/Text.js";
import "../vendor/svelte/internal/index.js";
import "../components/AreaLabel/LabelItem.js";
import "../components/AreaLabel/Assets/roomLabelBg.js";
import "./item/baseItem.js";
import "../shared-utils/three/addIfNotExists.js";
import "../shared-utils/five/FiveDomEvents.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/five/calculateThreeMouse.js";
import "../shared-utils/isTouchDevice.js";
class at extends z {
  constructor(e, t) {
    var r, p;
    super(e);
    n(this, "state");
    n(this, "items", []);
    n(this, "group", new c.Group());
    n(this, "data");
    n(this, "tagRendererMap", {});
    n(this, "fiveDomEvents");
    n(this, "zFightingOffset", 0);
    n(this, "tagWrapper");
    n(this, "occlusionVisibility");
    n(this, "occlusionMode");
    n(this, "onFiveModeChange", (e) => {
      const t = this.occlusionVisibility;
      Array.isArray(t) && this.items.forEach((r) => {
        r.model.setStyle instanceof Function && r.model.setStyle({ occlusionVisibility: t.includes(e) });
      });
    });
    n(this, "handleEnable", () => {
      var e, t;
      this.five.scene.add(this.group), (t = (e = this.five.getElement()) == null ? void 0 : e.parentElement) == null || t.appendChild(this.tagWrapper), this.five.needsRender = !0, this.onFiveModeChange(this.five.getCurrentState().mode), this.five.on("modeChange", this.onFiveModeChange);
    });
    n(this, "handleDisable", () => {
      this.five.scene.remove(this.group), this.tagWrapper.remove(), this.five.needsRender = !0, this.five.off("modeChange", this.onFiveModeChange);
    });
    n(this, "updateTagRenderer", () => {
      this.items.forEach((e) => {
        var r;
        const t = (r = this.tagRendererMap[e.type]) != null ? r : q[e.type];
        t && e.__renderer !== t && (e.__renderer = t, typeof e.__disposeRenderer == "function" && e.__disposeRenderer(), e.tag.container.innerHTML = "", e.__disposeRenderer = t(e.tag.container, e));
      });
    });
    this.group.name = "ModelMakerPluginGroup", this.state = { enabled: !0, visible: !0 }, this.occlusionVisibility = (r = t == null ? void 0 : t.occlusionVisibility) != null ? r : !1, this.occlusionMode = (p = t == null ? void 0 : t.occlusionMode) != null ? p : "translucence", this.fiveDomEvents = Y(e), this.tagWrapper = (() => {
      var i;
      const a = document.createElement("div");
      return a.style.position = "absolute", a.style.top = "0", a.style.left = "0", a.style.width = "100%", a.style.height = "100%", a.style.pointerEvents = "none", a.style.zIndex = `${(i = t == null ? void 0 : t.tagContainerZIndex) != null ? i : ""}`, a;
    })(), e.scene.add(this.group), this.handleEnable(), window.__MODELMAKER_DEBUG__ = this;
  }
  load(e) {
    return F(this, null, function* () {
      var a;
      if (this.clear(), this.data = e, yield $(this.five), this.data !== e)
        return;
      this.clear();
      const t = typeof this.occlusionVisibility == "boolean" ? this.occlusionVisibility : !1, r = this.occlusionMode, p = 1.6;
      (a = e == null ? void 0 : e.list) == null || a.forEach((i) => {
        var l, m, _;
        if (i.type === "triangles") {
          const s = new Q();
          s.setPoints(i.object_data.points), s.setStyle({
            color: i.object_data.color,
            opacity: ((l = i.object_data.opacity) != null ? l : 0.4) / 2,
            lineColor: i.object_data.color,
            lineWidth: p,
            occlusionVisibility: t,
            occlusionMode: r
          }), this.fiveDomEvents.addEventListener(s, "hover", () => s.highlight()), this.fiveDomEvents.addEventListener(s, "unHover", () => s.unhighlight());
          const d = new U({
            five: this.five,
            tagWrapper: this.tagWrapper,
            model: s,
            group: this.group,
            type: i.type,
            rawData: i
          });
          this.items.push(d);
        } else if (i.type === "prism") {
          const s = new A();
          this.zFightingOffset += 1e-4;
          const d = i.object_data.points.map((u) => {
            var y;
            return [u[0], u[1] + ((y = i.object_data.fixedY) != null ? y : 0), u[2]];
          });
          d.push(d[0]);
          const v = i.object_data.height + ((m = i.object_data.fixedHeight) != null ? m : 0) + this.zFightingOffset, M = O(d[0]).add(new c.Vector3().setY(v));
          s.setPoints({ points: d, heightPoint: M }), s.setStyle({
            color: i.object_data.color,
            opacity: ((_ = i.object_data.opacity) != null ? _ : 0.4) / 2,
            lineColor: i.object_data.color,
            lineWidth: p,
            occlusionVisibility: t,
            occlusionMode: r
          });
          const f = new G({
            five: this.five,
            tagWrapper: this.tagWrapper,
            model: s,
            group: this.group,
            type: i.type,
            rawData: i
          });
          this.items.push(f);
        } else if (i.type === "box") {
          const s = new A(), { start: d, end: v, rotation: M = [0, 0, 0, 0], opacity: f, color: u } = i.object_data, y = new c.Vector3().fromArray(d), R = new c.Vector3().fromArray(v), T = new c.Euler().fromArray(M), x = new c.Quaternion().setFromEuler(T), C = x.clone().inverse(), V = new c.Vector3().lerpVectors(y, R, 0.5), W = V.clone().negate(), j = y.clone().add(W).applyQuaternion(C), k = R.clone().add(W).applyQuaternion(C), b = new c.Box3(j.clone().max(k), j.clone().min(k));
          s.setPoints({
            points: [g(b, 2), g(b, 3), g(b, 7), g(b, 6), g(b, 2)],
            heightPoint: g(b, 0)
          }), s.position.copy(V), s.quaternion.copy(x), s.setStyle({
            color: u,
            opacity: (f != null ? f : 0.4) / 2,
            lineColor: u,
            lineWidth: p,
            occlusionVisibility: t,
            occlusionMode: r
          });
          const D = new B({
            five: this.five,
            tagWrapper: this.tagWrapper,
            model: s,
            group: this.group,
            type: i.type,
            rawData: i
          });
          this.items.push(D);
        }
      }), this.five.needsRender = !0, this.state.enabled ? this.handleEnable() : this.handleDisable(), this.state.visible ? this.handleShow() : this.handleHide(), this.updateTagRenderer(), this.hooks.emit("dataLoaded", e);
    });
  }
  setState(e) {
    I(e.enabled) && this.state.enabled !== e.enabled && (this.state.enabled = e.enabled, e.enabled ? this.handleEnable() : this.handleDisable(), this.hooks.emit(e.enabled ? "enable" : "disable", { userAction: "我不知道捏" }), this.hooks.emit("stateChange", { state: this.state, userAction: "我不知道捏" })), I(e.visible) && this.state.visible !== e.visible && (this.state.visible = e.visible, e.visible ? this.handleShow() : this.handleHide(), this.hooks.emit(e.visible ? "show" : "hide", { userAction: "我不知道捏" }), this.hooks.emit("stateChange", { state: this.state, userAction: "我不知道捏" }));
  }
  getItemById(e) {
    return this.items.find((t) => t.rawData.id === e);
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
    this.group.visible = !0, this.tagWrapper.style.visibility = "visible", this.five.needsRender = !0;
  }
  handleHide() {
    this.group.visible = !1, this.tagWrapper.style.visibility = "hidden", this.five.needsRender = !0;
  }
}
export {
  at as Controller
};
