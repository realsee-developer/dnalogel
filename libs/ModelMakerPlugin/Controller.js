var I = Object.defineProperty;
var D = (l, a, e) => a in l ? I(l, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[a] = e;
var r = (l, a, e) => (D(l, typeof a != "symbol" ? a + "" : a, e), e);
var j = (l, a, e) => new Promise((t, s) => {
  var p = (h) => {
    try {
      i(e.next(h));
    } catch (m) {
      s(m);
    }
  }, n = (h) => {
    try {
      i(e.throw(h));
    } catch (m) {
      s(m);
    }
  }, i = (h) => h.done ? t(h.value) : Promise.resolve(h.value).then(p, n);
  i((e = e.apply(l, a)).next());
});
import { Controller as T } from "../base/BasePluginWithData.js";
import * as c from "three";
import { ModelMakerBoxItem as H } from "./item/boxItem.js";
import { PrismMesh as k } from "../Sculpt/Meshes/Prism.js";
import { anyPositionToVector3 as L } from "../shared-utils/positionToVector3.js";
import { PolygonWithEdgeMesh as S } from "../Sculpt/Meshes/PolygonWithEdge.js";
import "hammerjs";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import { waitFiveModelLoaded as z } from "../shared-utils/five/fiveModelLoad.js";
import "animejs";
import { notNil as P } from "../shared-utils/isNil.js";
import { tagRendererMap as O } from "./utils/tagRenderer.js";
import { ModelMakerPrismItem as B } from "./item/prismItem.js";
import { ModelMakerPolygonItem as Q } from "./item/polygonItem.js";
import { boxVertex as g } from "../shared-utils/Object3DHelper/utils/boundingBox.js";
import { getFiveDomEvent as q } from "./utils/getFiveDomEvent.js";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/Meshes/Polygon.js";
import "../shared-utils/three/generatePolygonGeometry.js";
import "../shared-utils/three/earcut3D.js";
import "earcut";
import "../shared-utils/three/getNormal.js";
import "../Sculpt/utils/color.js";
import "../Sculpt/utils/three/ColoredMesh.js";
import "../shared-utils/three/geometryUtil.js";
import "../shared-utils/three/centerPoint.js";
import "../Sculpt/Meshes/Line.js";
import "../shared-utils/five/FiveLine.js";
import "@realsee/five/line";
import "../Sculpt/Meshes/Polyline.js";
import "../Sculpt/Meshes/LineWithDots.js";
import "../Sculpt/Meshes/Point.js";
import "../shared-utils/three/closeVectors.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../shared-utils/util.js";
import "../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../CSS3DRenderPlugin/utils/even.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../shared-utils/three/getObjectVisible.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "./utils/Text.js";
import "../vendor/svelte/internal/index.js";
import "../components/AreaLabel/LabelItem.js";
import "../components/AreaLabel/Assets/roomLabelBg.js";
import "./item/baseItem.js";
import "../shared-utils/three/addIfNotExists.js";
import "../shared-utils/tag.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/FiveDomEvents.js";
import "../shared-utils/five/calculateThreeMouse.js";
class tt extends T {
  constructor(e, t) {
    var s, p;
    super(e);
    r(this, "state");
    r(this, "items", []);
    r(this, "group", new c.Group());
    r(this, "data");
    r(this, "tagRendererMap", {});
    r(this, "fiveDomEvents");
    r(this, "zFightingOffset", 0);
    r(this, "tagWrapper");
    r(this, "occlusionVisibility");
    r(this, "occlusionMode");
    r(this, "onFiveModeChange", (e) => {
      const t = this.occlusionVisibility;
      Array.isArray(t) && this.items.forEach((s) => {
        s.model.setStyle instanceof Function && s.model.setStyle({ occlusionVisibility: t.includes(e) });
      });
    });
    r(this, "handleEnable", () => {
      var e, t;
      this.five.scene.add(this.group), (t = (e = this.five.getElement()) == null ? void 0 : e.parentElement) == null || t.appendChild(this.tagWrapper), this.five.needsRender = !0, this.onFiveModeChange(this.five.getCurrentState().mode), this.five.on("modeChange", this.onFiveModeChange);
    });
    r(this, "handleDisable", () => {
      this.five.scene.remove(this.group), this.tagWrapper.remove(), this.five.needsRender = !0, this.five.off("modeChange", this.onFiveModeChange);
    });
    r(this, "updateTagRenderer", () => {
      this.items.forEach((e) => {
        var s;
        const t = (s = this.tagRendererMap[e.type]) != null ? s : O[e.type];
        t && e.__renderer !== t && (e.__renderer = t, typeof e.__disposeRenderer == "function" && e.__disposeRenderer(), e.tag.container.innerHTML = "", e.__disposeRenderer = t(e.tag.container, e));
      });
    });
    this.group.name = "ModelMakerPluginGroup", this.state = { enabled: !0, visible: !0 }, this.occlusionVisibility = (s = t == null ? void 0 : t.occlusionVisibility) != null ? s : !1, this.occlusionMode = (p = t == null ? void 0 : t.occlusionMode) != null ? p : "translucence", this.fiveDomEvents = q(e), this.tagWrapper = (() => {
      var i;
      const n = document.createElement("div");
      return n.style.position = "absolute", n.style.top = "0", n.style.left = "0", n.style.width = "100%", n.style.height = "100%", n.style.pointerEvents = "none", n.style.zIndex = `${(i = t == null ? void 0 : t.tagContainerZIndex) != null ? i : ""}`, n;
    })(), e.scene.add(this.group), this.handleEnable(), window.__MODELMAKER_DEBUG__ = this;
  }
  load(e) {
    return j(this, null, function* () {
      var n;
      if (this.clear(), this.data = e, yield z(this.five), this.data !== e)
        return;
      this.clear();
      const t = typeof this.occlusionVisibility == "boolean" ? this.occlusionVisibility : !1, s = this.occlusionMode, p = 1.6;
      (n = e == null ? void 0 : e.list) == null || n.forEach((i) => {
        var h, m, w;
        if (i.type === "triangles") {
          const o = new S();
          o.setPoints(i.object_data.points), o.setStyle({
            color: i.object_data.color,
            opacity: ((h = i.object_data.opacity) != null ? h : 0.4) / 2,
            lineColor: i.object_data.color,
            lineWidth: p,
            occlusionVisibility: t,
            occlusionMode: s
          }), this.fiveDomEvents.addEventListener(o, "hover", () => o.highlight()), this.fiveDomEvents.addEventListener(o, "unHover", () => o.unhighlight());
          const d = new Q({
            five: this.five,
            tagWrapper: this.tagWrapper,
            model: o,
            group: this.group,
            type: i.type,
            rawData: i
          });
          this.items.push(d);
        } else if (i.type === "prism") {
          const o = new k();
          this.zFightingOffset += 1e-4;
          const d = i.object_data.points.map((u) => {
            var y;
            return [u[0], u[1] + ((y = i.object_data.fixedY) != null ? y : 0), u[2]];
          });
          d.push(d[0]);
          const v = i.object_data.height + ((m = i.object_data.fixedHeight) != null ? m : 0) + this.zFightingOffset, M = L(d[0]).add(new c.Vector3().setY(v));
          o.setPoints({ points: d, heightPoint: M }), o.setStyle({
            color: i.object_data.color,
            opacity: ((w = i.object_data.opacity) != null ? w : 0.4) / 2,
            lineColor: i.object_data.color,
            lineWidth: p,
            occlusionVisibility: t,
            occlusionMode: s
          });
          const f = new B({
            five: this.five,
            tagWrapper: this.tagWrapper,
            model: o,
            group: this.group,
            type: i.type,
            rawData: i
          });
          this.items.push(f);
        } else if (i.type === "box") {
          const o = new k(), { start: d, end: v, rotation: M = [0, 0, 0, 0], opacity: f, color: u } = i.object_data, y = new c.Vector3().fromArray(d), E = new c.Vector3().fromArray(v), F = new c.Euler().fromArray(M), _ = new c.Quaternion().setFromEuler(F), x = _.clone().inverse(), V = new c.Vector3().lerpVectors(y, E, 0.5), C = V.clone().negate(), R = y.clone().add(C).applyQuaternion(x), W = E.clone().add(C).applyQuaternion(x), b = new c.Box3(R.clone().max(W), R.clone().min(W));
          o.setPoints({
            points: [g(b, 2), g(b, 3), g(b, 7), g(b, 6), g(b, 2)],
            heightPoint: g(b, 0)
          }), o.position.copy(V), o.quaternion.copy(_), o.setStyle({
            color: u,
            opacity: (f != null ? f : 0.4) / 2,
            lineColor: u,
            lineWidth: p,
            occlusionVisibility: t,
            occlusionMode: s
          });
          const A = new H({
            five: this.five,
            tagWrapper: this.tagWrapper,
            model: o,
            group: this.group,
            type: i.type,
            rawData: i
          });
          this.items.push(A);
        }
      }), this.five.needsRender = !0, this.state.enabled ? this.handleEnable() : this.handleDisable(), this.state.visible ? this.handleShow() : this.handleHide(), this.updateTagRenderer(), this.hooks.emit("dataLoaded", e);
    });
  }
  setState(e) {
    P(e.enabled) && this.state.enabled !== e.enabled && (this.state.enabled = e.enabled, e.enabled ? this.handleEnable() : this.handleDisable(), this.hooks.emit(e.enabled ? "enable" : "disable", { userAction: "我不知道捏" }), this.hooks.emit("stateChange", { state: this.state, userAction: "我不知道捏" })), P(e.visible) && this.state.visible !== e.visible && (this.state.visible = e.visible, e.visible ? this.handleShow() : this.handleHide(), this.hooks.emit(e.visible ? "show" : "hide", { userAction: "我不知道捏" }), this.hooks.emit("stateChange", { state: this.state, userAction: "我不知道捏" }));
  }
  getItemById(e) {
    return this.items.find((t) => t.rawData.id === e);
  }
  registerTagRenderer(e) {
    this.tagRendererMap = e, this.updateTagRenderer();
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
  tt as Controller
};
