var N = Object.defineProperty, Q = Object.defineProperties;
var j = Object.getOwnPropertyDescriptors;
var O = Object.getOwnPropertySymbols;
var F = Object.prototype.hasOwnProperty, R = Object.prototype.propertyIsEnumerable;
var L = (a, l, t) => l in a ? N(a, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[l] = t, E = (a, l) => {
  for (var t in l || (l = {}))
    F.call(l, t) && L(a, t, l[t]);
  if (O)
    for (var t of O(l))
      R.call(l, t) && L(a, t, l[t]);
  return a;
}, U = (a, l) => Q(a, j(l));
var B = (a, l) => {
  var t = {};
  for (var i in a)
    F.call(a, i) && l.indexOf(i) < 0 && (t[i] = a[i]);
  if (a != null && O)
    for (var i of O(a))
      l.indexOf(i) < 0 && R.call(a, i) && (t[i] = a[i]);
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
import "../shared-utils/three/blink.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../vendor/earcut/src/earcut.js";
import "../shared-utils/five/FivePuppet.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/url/defaultUrls.js";
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
import "../shared-utils/five/getFiveFromParentChain.js";
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
import "../vendor/animejs/lib/anime.es.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
const ot = { userAction: !0 };
class Ai extends Y {
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
      i && (this.MaxVisibledistance = i.MaxVisibledistance, this.MinVisibledistance = i.MinVisibledistance, this.OffsetHeight = i.OffsetHeight), this.labelItems.forEach((r) => {
        var e;
        return (e = r.svelteApp) == null ? void 0 : e.$destroy();
      }), this.labelItems = [], this.doorLabels = [], this.floorplanServerData = t, et(this.five).then(() => {
        this.initData(), this.fixDoorVisibleAndPosition(), this.applyState();
      });
    });
    p(this, "dispose", () => {
      var t, i, r, e, n, s, o;
      (t = this.five) == null || t.off("wantsToMoveToPano", this.hideAllLabels), (i = this.five) == null || i.off("modelLoaded", this.fixDoorVisibleAndPosition), (r = this.five) == null || r.off("panoArrived", this.fixDoorVisibleAndPosition), (e = this.five) == null || e.off("initAnimationEnded", this.fixDoorPosition), (n = this.five) == null || n.off("cameraUpdate", this.fixDoorPosition), (s = this.five) == null || s.off("mouseWheel", this.fixDoorPosition), (o = this.five) == null || o.off("pinchGesture", this.fixDoorPosition), this.applyState({ enabled: !1 });
    });
    p(this, "initRoomObservers", () => {
      var e, n;
      const t = this.floorplanServerData.computed_data.floor_datas || [], r = (((n = (e = this.five) == null ? void 0 : e.work) == null ? void 0 : n.observers) || []).map((s) => {
        const o = s.panoIndex, v = s.floorIndex, c = t == null ? void 0 : t.find((h) => h.floor_index === v);
        if (c) {
          const h = c.rooms.find((f) => f.observer_indexs.includes(o));
          if (h)
            return { panoIndex: o, floorIndex: v, name: h.name };
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
      const i = this.roomObservers.find((s) => s.panoIndex === t), e = this.five.work.observers.find((s) => s.panoIndex === t).position.clone(), n = (() => {
        if (this.visibleLabelMap.has(t))
          return this.visibleLabelMap.get(t);
        {
          const s = [];
          return this.doorLabels.forEach((o, v) => {
            if (o.roomName === i.name)
              return;
            const c = o.position.clone(), h = c.distanceTo(e);
            if (h < this.MinVisibledistance || h > this.MaxVisibledistance)
              return;
            const f = new q(), d = c.clone().sub(e).normalize();
            f.set(e, d);
            const [b] = this.five.model.intersectRaycaster(f);
            b && b.distance + 0.1 < h || s.push(v);
          }), this.visibleLabelMap.set(t, s), s;
        }
      })();
      this.labelItems.forEach((s, o) => {
        s.visible = n.includes(o);
      }), this.fixDoorPosition();
    });
    p(this, "fixDoorPosition", () => {
      var v, c, h, f, d, b, x, _, k, H, W, $;
      if (!this.state.enabled || !this.state.visible)
        return;
      const { panoIndex: t, camera: i } = this.five;
      if (t === null)
        return;
      if (this.five.currentMode !== "Panorama")
        return this.hideAllLabels();
      const r = this.five.getElement(), e = r.clientWidth, n = r.clientHeight, s = i.getWorldDirection(new A()), o = [];
      if (this.labelItems.forEach((m, u) => {
        var I;
        if (m.visible) {
          const g = i.position.distanceTo(m.position), M = m.position.clone().add(new A(0, this.OffsetHeight, 0)), w = M.clone().sub(i.position).normalize().angleTo(s), V = M.clone().project(i), P = (V.x + 1) / 2.2 * 100, T = (-V.y + 1) / 2.2 * 100, z = P >= 0 && P <= 100 && T >= 0 && T <= 100 && g > this.MinVisibledistance && g <= this.MaxVisibledistance;
          m.left = P, m.top = T, m.inSight = z && w < Math.PI / 2, m.cameraToward = J(this.five), z ? o.push({ disFromCameraToLabel: g, left: P, top: T, index: u }) : m.transform = "translate(-50%, -50%)";
        } else
          m.inSight = !1;
        const y = m, { svelteApp: D } = y, C = B(y, ["svelteApp"]);
        (I = m.svelteApp) == null || I.$set({ props: C });
      }), o.length > 1) {
        let m = 0;
        o.sort((u, D) => D.disFromCameraToLabel - u.disFromCameraToLabel);
        for (let u = 1; u < o.length; u++) {
          const { index: D, left: C, top: y } = o[u - 1], { index: I, left: g, top: M } = o[u], S = this.container.children[D], w = this.container.children[I];
          if (!S || !w)
            return;
          const V = {
            left: e * C / 100,
            top: n * y / 100,
            width: (h = (c = (v = S.children) == null ? void 0 : v[0]) == null ? void 0 : c.clientWidth) != null ? h : 0,
            height: (b = (d = (f = S.children) == null ? void 0 : f[0]) == null ? void 0 : d.clientHeight) != null ? b : 0
          }, P = {
            left: e * g / 100,
            top: n * M / 100,
            width: (k = (_ = (x = w.children) == null ? void 0 : x[0]) == null ? void 0 : _.clientWidth) != null ? k : 0,
            height: ($ = (W = (H = w.children) == null ? void 0 : H[0]) == null ? void 0 : W.clientHeight) != null ? $ : 0
          };
          K(V, P) && (m++, this.labelItems[D].transform = `translate(-50%, ${(m - 1) * 100 - 50}%)`, this.labelItems[I].transform = `translate(-50%, ${m * 100 - 50}%)`);
        }
      }
    });
    p(this, "onClick", (t, i) => {
      if (!this.roomObservers)
        return;
      const { work: r } = this.five;
      let e, n, s = 1 / 0;
      for (const o of r.observers)
        if (this.roomObservers.find((c) => c.panoIndex === o.panoIndex && c.name === t)) {
          const c = o.standingPosition, h = i.distanceTo(c);
          h < s && (e = o.panoIndex, n = c.clone().sub(i).normalize(), s = h);
        }
      if (n !== void 0 && e !== void 0) {
        const o = {};
        if (s > 0) {
          const c = new A(0, 0, -1), h = n.clone(), f = new X();
          f.setFromUnitVectors(c, h);
          const d = new G();
          d.setFromQuaternion(f, "YXZ"), o.longitude = d.y;
        }
        this.five.emit("wantsToMoveToPano", e, {}, !0) || this.five.moveToPano(e, { longitude: o.longitude });
      }
    });
    p(this, "initData", () => {
      var e;
      this.doorLabels = [], this.labelItems.forEach((n) => {
        var s;
        return (s = n.svelteApp) == null ? void 0 : s.$destroy();
      }), this.labelItems = [];
      const t = this.five.panoIndex, i = this.floorplanServerData.computed_data.observers[t].floor_index, r = this.floorplanServerData.computed_data.floor_datas[i];
      (e = this.floorplanServerData.computed_data.doors) == null || e.forEach((n) => {
        const s = this.five.work.observers.filter((f, d) => {
          var b;
          return !!((b = r == null ? void 0 : r.rooms) != null && b.find((x) => x.observer_indexs.includes(d)));
        }), o = n.position;
        let v = 1 / 0, c;
        s.forEach((f) => {
          const d = f.standingPosition, b = {
            x: d.x,
            y: d.y,
            z: d.z
          }, x = tt(o, b);
          x < v && (v = x, c = b);
        }), c && (o.y = c.y + 0.01);
        const h = new A(o.x, o.y, o.z);
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
    const e = r.enabled && r.visible, n = this.state.enabled && this.state.visible;
    e !== n && this.applyState();
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
    i.enabled !== !1 && i.visible !== !1 ? (this.labelItems.forEach((e) => {
      e.svelteApp = new Z({
        target: this.container,
        props: {
          props: e,
          onClick: () => {
            this.onClick(e.name, e.position);
          }
        }
      });
    }), this.fixDoorPosition()) : this.labelItems.forEach((e) => {
      e.svelteApp.$destroy();
    });
  }
  initState() {
    return { enabled: !0, visible: !0 };
  }
}
export {
  Ai as PanoDoorLabelPluginController
};
