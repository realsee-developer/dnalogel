var N = Object.defineProperty, Q = Object.defineProperties;
var j = Object.getOwnPropertyDescriptors;
var O = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, $ = Object.prototype.propertyIsEnumerable;
var L = (a, l, t) => l in a ? N(a, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[l] = t, E = (a, l) => {
  for (var t in l || (l = {}))
    R.call(l, t) && L(a, t, l[t]);
  if (O)
    for (var t of O(l))
      $.call(l, t) && L(a, t, l[t]);
  return a;
}, U = (a, l) => Q(a, j(l));
var B = (a, l) => {
  var t = {};
  for (var i in a)
    R.call(a, i) && l.indexOf(i) < 0 && (t[i] = a[i]);
  if (a != null && O)
    for (var i of O(a))
      l.indexOf(i) < 0 && $.call(a, i) && (t[i] = a[i]);
  return t;
};
var p = (a, l, t) => (L(a, typeof l != "symbol" ? l + "" : l, t), t);
import { Raycaster as q, Vector3 as A, Quaternion as X, Euler as G } from "three";
import { Controller as Y } from "../base/BasePlugin.js";
import Z from "./DoorLabelItem.js";
import { getCameraToward as J, isTwoRectOverlaped as K, getDistance as tt, getToward as it } from "./utils.js";
import "../shared-utils/tag.js";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import { waitFiveModelLoaded as et } from "../shared-utils/five/fiveModelLoad.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../shared-utils/five/FivePuppet.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/url/absoluteUrl.js";
import "../vendor/svelte/internal/index.js";
import "../vendor/classnames/index.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/three/core/Raycaster.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/throttle.js";
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
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
const ot = { userAction: !0 };
class Ii extends Y {
  constructor(t) {
    super(t);
    p(this, "state", { enabled: !0, visible: !0 });
    p(this, "container");
    p(this, "MinVisibledistance", 1.8);
    p(this, "MaxVisibledistance", 5);
    p(this, "OffsetHeight", -1.3);
    // 标签页面高度偏移值
    p(this, "floorplanServerData");
    /** 每个点位 visible 标签的缓存 */
    p(this, "visibleLabelMap", /* @__PURE__ */ new Map());
    /** 标签项Prop值 */
    p(this, "labelItems", []);
    /** 数据 */
    p(this, "doorLabels");
    p(this, "roomObservers");
    p(this, "loadData", (t, i) => {
      i && (this.MaxVisibledistance = i.MaxVisibledistance, this.MinVisibledistance = i.MinVisibledistance, this.OffsetHeight = i.OffsetHeight), this.labelItems = [], this.doorLabels = [], this.floorplanServerData = t, et(this.five).then(() => {
        this.initData(), this.fixDoorVisibleAndPosition(), this.applyState();
      });
    });
    p(this, "dispose", () => {
      var t, i, r, o, n, s, e;
      (t = this.five) == null || t.off("wantsToMoveToPano", this.hideAllLabels), (i = this.five) == null || i.off("modelLoaded", this.fixDoorVisibleAndPosition), (r = this.five) == null || r.off("panoArrived", this.fixDoorVisibleAndPosition), (o = this.five) == null || o.off("initAnimationEnded", this.fixDoorPosition), (n = this.five) == null || n.off("cameraUpdate", this.fixDoorPosition), (s = this.five) == null || s.off("mouseWheel", this.fixDoorPosition), (e = this.five) == null || e.off("pinchGesture", this.fixDoorPosition), this.applyState({ enabled: !1 });
    });
    p(this, "initRoomObservers", () => {
      var o, n;
      const t = this.floorplanServerData.computed_data.floor_datas || [], r = (((n = (o = this.five) == null ? void 0 : o.work) == null ? void 0 : n.observers) || []).map((s) => {
        const e = s.panoIndex, v = s.floorIndex, c = t == null ? void 0 : t.find((h) => h.floor_index === v);
        if (c) {
          const h = c.rooms.find((m) => m.observer_indexs.includes(e));
          if (h)
            return { panoIndex: e, floorIndex: v, name: h.name };
        }
      }).filter(Boolean);
      this.roomObservers = r;
    });
    p(this, "hideAllLabels", () => {
      this.labelItems.forEach((t) => {
        t.visible = !1, t.inSight = !1;
      });
    });
    p(this, "fixDoorVisibleAndPosition", () => {
      this.initRoomObservers();
      const { panoIndex: t } = this.five;
      if (!this.state.visible || this.five.model.empty || t === null || !this.roomObservers.find((s) => s.panoIndex === t))
        return;
      const i = this.roomObservers.find((s) => s.panoIndex === t), o = this.five.work.observers.find((s) => s.panoIndex === t).position.clone(), n = (() => {
        if (this.visibleLabelMap.has(t))
          return this.visibleLabelMap.get(t);
        {
          const s = [];
          return this.doorLabels.forEach((e, v) => {
            if (e.roomName === i.name)
              return;
            const c = e.position.clone(), h = c.distanceTo(o);
            if (h < this.MinVisibledistance || h > this.MaxVisibledistance)
              return;
            const m = new q(), d = c.clone().sub(o).normalize();
            m.set(o, d);
            const [b] = this.five.model.intersectRaycaster(m);
            b && b.distance + 0.1 < h || s.push(v);
          }), this.visibleLabelMap.set(t, s), s;
        }
      })();
      this.labelItems.forEach((s, e) => {
        s.visible = n.includes(e);
      }), this.fixDoorPosition();
    });
    p(this, "fixDoorPosition", () => {
      var v, c, h, m, d, b, x, _, k, H, W, z;
      if (!this.state.enabled || !this.state.visible)
        return;
      const { panoIndex: t, camera: i } = this.five;
      if (t === null)
        return;
      if (this.five.currentMode !== "Panorama")
        return this.hideAllLabels();
      const r = this.five.getElement(), o = r.clientWidth, n = r.clientHeight, s = i.getWorldDirection(new A()), e = [];
      if (this.labelItems.forEach((f, u) => {
        var I;
        if (f.visible) {
          const g = i.position.distanceTo(f.position), S = f.position.clone().add(new A(0, this.OffsetHeight, 0)), w = S.clone().sub(i.position).normalize().angleTo(s), y = S.clone().project(i), P = (y.x + 1) / 2.2 * 100, T = (-y.y + 1) / 2.2 * 100, F = P >= 0 && P <= 100 && T >= 0 && T <= 100 && g > this.MinVisibledistance && g <= this.MaxVisibledistance;
          f.left = P, f.top = T, f.inSight = F && w < Math.PI / 2, f.cameraToward = J(this.five), F ? e.push({ disFromCameraToLabel: g, left: P, top: T, index: u }) : f.transform = "translate(-50%, -50%)";
        } else
          f.inSight = !1;
        const M = f, { svelteApp: D } = M, C = B(M, ["svelteApp"]);
        (I = f.svelteApp) == null || I.$set({ props: C });
      }), e.length > 1) {
        let f = 0;
        e.sort((u, D) => D.disFromCameraToLabel - u.disFromCameraToLabel);
        for (let u = 1; u < e.length; u++) {
          const { index: D, left: C, top: M } = e[u - 1], { index: I, left: g, top: S } = e[u], V = this.container.children[D], w = this.container.children[I];
          if (!V || !w)
            return;
          const y = {
            left: o * C / 100,
            top: n * M / 100,
            width: (h = (c = (v = V.children) == null ? void 0 : v[0]) == null ? void 0 : c.clientWidth) != null ? h : 0,
            height: (b = (d = (m = V.children) == null ? void 0 : m[0]) == null ? void 0 : d.clientHeight) != null ? b : 0
          }, P = {
            left: o * g / 100,
            top: n * S / 100,
            width: (k = (_ = (x = w.children) == null ? void 0 : x[0]) == null ? void 0 : _.clientWidth) != null ? k : 0,
            height: (z = (W = (H = w.children) == null ? void 0 : H[0]) == null ? void 0 : W.clientHeight) != null ? z : 0
          };
          K(y, P) && (f++, this.labelItems[D].transform = `translate(-50%, ${(f - 1) * 100 - 50}%)`, this.labelItems[I].transform = `translate(-50%, ${f * 100 - 50}%)`);
        }
      }
    });
    p(this, "onClick", (t, i) => {
      if (!this.roomObservers)
        return;
      const { work: r } = this.five;
      let o, n, s = 1 / 0;
      for (const e of r.observers)
        if (this.roomObservers.find((c) => c.panoIndex === e.panoIndex && c.name === t)) {
          const c = e.standingPosition, h = i.distanceTo(c);
          h < s && (o = e.panoIndex, n = c.clone().sub(i).normalize(), s = h);
        }
      if (n !== void 0 && o !== void 0) {
        const e = {};
        if (s > 0) {
          const c = new A(0, 0, -1), h = n.clone(), m = new X();
          m.setFromUnitVectors(c, h);
          const d = new G();
          d.setFromQuaternion(m, "YXZ"), e.longitude = d.y;
        }
        this.five.emit("wantsToMoveToPano", o, {}, !0) || this.five.moveToPano(o, { longitude: e.longitude });
      }
    });
    p(this, "initData", () => {
      var o;
      this.doorLabels = [], this.labelItems.forEach((n) => {
        var s;
        return (s = n.svelteApp) == null ? void 0 : s.$destroy();
      }), this.labelItems = [];
      const t = this.five.panoIndex, i = this.floorplanServerData.computed_data.observers[t].floor_index, r = this.floorplanServerData.computed_data.floor_datas[i];
      (o = this.floorplanServerData.computed_data.doors) == null || o.forEach((n) => {
        const s = this.five.work.observers.filter((m, d) => {
          var b;
          return !!((b = r == null ? void 0 : r.rooms) != null && b.find((x) => x.observer_indexs.includes(d)));
        }), e = n.position;
        let v = 1 / 0, c;
        s.forEach((m) => {
          const d = m.standingPosition, b = {
            x: d.x,
            y: d.y,
            z: d.z
          }, x = tt(e, b);
          x < v && (v = x, c = b);
        }), c && (e.y = c.y + 0.01);
        const h = new A(e.x, e.y, e.z);
        h.add(new A(-0.2, 1.8, 0).applyEuler(new G(0, n.rad, 0))), this.doorLabels.push({
          roomName: n.name,
          name: n.name,
          position: h,
          toward: it(n.rad)
        });
      }), this.labelItems = this.doorLabels.map((n) => U(E({}, n), {
        left: 0,
        top: 0,
        visible: !1,
        inSight: !1,
        transform: "",
        cameraToward: ""
      })), this.five.on("wantsToMoveToPano", this.hideAllLabels), this.five.on("panoArrived", this.fixDoorVisibleAndPosition), this.five.on("initAnimationEnded", this.fixDoorPosition), this.five.on("cameraUpdate", this.fixDoorPosition), this.five.on("mouseWheel", this.fixDoorPosition), this.five.on("pinchGesture", this.fixDoorPosition), this.fixDoorVisibleAndPosition();
    });
  }
  appendTo(t) {
    this.state.enabled && (this.container = t);
  }
  setState(t, i) {
    const r = this.state;
    this.state = E(E({}, r), t);
    const o = r.enabled && r.visible, n = this.state.enabled && this.state.visible;
    o !== n && this.applyState();
  }
  show() {
    this.setState({ visible: !0 });
  }
  hide() {
    this.setState({ visible: !1 });
  }
  enable() {
    this.setState({ enabled: !0 });
  }
  disable() {
    this.setState({ enabled: !1 });
  }
  stateChangedCallback(t, i) {
    if (this.hooks.hasListener("stateChange")) {
      const r = {
        state: this.state,
        prevState: t,
        userAction: i ? i.userAction : ot.userAction
      };
      this.hooks.emit("stateChange", r);
    }
  }
  applyState(t) {
    const i = t != null ? t : this.state;
    i.enabled !== !1 && i.visible !== !1 ? (this.labelItems.forEach((o) => {
      o.svelteApp = new Z({
        target: this.container,
        props: {
          props: o,
          onClick: () => {
            this.onClick(o.name, o.position);
          }
        }
      });
    }), this.fixDoorPosition()) : this.labelItems.forEach((o) => {
      o.svelteApp.$destroy();
    });
  }
  initState() {
    return { enabled: !0, visible: !0 };
  }
}
export {
  Ii as PanoDoorLabelPluginController
};
