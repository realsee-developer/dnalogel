var N = Object.defineProperty, Q = Object.defineProperties;
var j = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, $ = Object.prototype.propertyIsEnumerable;
var H = (l, h, t) => h in l ? N(l, h, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[h] = t, L = (l, h) => {
  for (var t in h || (h = {}))
    R.call(h, t) && H(l, t, h[t]);
  if (C)
    for (var t of C(h))
      $.call(h, t) && H(l, t, h[t]);
  return l;
}, U = (l, h) => Q(l, j(h));
var B = (l, h) => {
  var t = {};
  for (var i in l)
    R.call(l, i) && h.indexOf(i) < 0 && (t[i] = l[i]);
  if (l != null && C)
    for (var i of C(l))
      h.indexOf(i) < 0 && $.call(l, i) && (t[i] = l[i]);
  return t;
};
var c = (l, h, t) => (H(l, typeof h != "symbol" ? h + "" : h, t), t);
import { Raycaster as q, Vector3 as S, Quaternion as X, Euler as G } from "three";
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
import "../Sculpt/utils/removeAllTag.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/util.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "@realsee/five";
const ot = { userAction: !0 };
class vi extends Y {
  constructor(t) {
    super(t);
    c(this, "state", { enabled: !0, visible: !0 });
    c(this, "container");
    c(this, "MinVisibledistance", 1.8);
    c(this, "MaxVisibledistance", 5);
    c(this, "OffsetHeight", -1.3);
    // 标签页面高度偏移值
    c(this, "rooms");
    c(this, "floorplanServerData");
    /** 每个点位 visible 标签的缓存 */
    c(this, "visibleLabelMap", /* @__PURE__ */ new Map());
    /** 标签项Prop值 */
    c(this, "labelItems", []);
    /** 数据 */
    c(this, "doorLabels");
    c(this, "roomObservers");
    c(this, "loadData", (t, i) => {
      i && (this.MaxVisibledistance = i.MaxVisibledistance, this.MinVisibledistance = i.MinVisibledistance, this.OffsetHeight = i.OffsetHeight), this.labelItems = [], this.doorLabels = [], this.floorplanServerData = t, et(this.five).then(() => {
        this.initData(), this.fixDoorVisibleAndPosition(), this.applyState();
      });
    });
    c(this, "dispose", () => {
      var t, i, f, e, a, o, s;
      (t = this.five) == null || t.off("wantsToMoveToPano", this.hideAllLabels), (i = this.five) == null || i.off("modelLoaded", this.fixDoorVisibleAndPosition), (f = this.five) == null || f.off("panoArrived", this.fixDoorVisibleAndPosition), (e = this.five) == null || e.off("initAnimationEnded", this.fixDoorPosition), (a = this.five) == null || a.off("cameraUpdate", this.fixDoorPosition), (o = this.five) == null || o.off("mouseWheel", this.fixDoorPosition), (s = this.five) == null || s.off("pinchGesture", this.fixDoorPosition), this.applyState({ enabled: !1 });
    });
    c(this, "initRoomObservers", () => {
      var e, a;
      const t = this.floorplanServerData.computed_data.floor_datas || [], f = (((a = (e = this.five) == null ? void 0 : e.work) == null ? void 0 : a.observers) || []).map((o) => {
        const s = o.panoIndex, d = o.floorIndex, n = t == null ? void 0 : t.find((r) => r.floor_index === d);
        if (n) {
          const r = n.rooms.find((p) => p.observer_indexs.includes(s));
          if (r)
            return { panoIndex: s, floorIndex: d, name: r.name };
        }
      }).filter(Boolean);
      this.roomObservers = f;
    });
    c(this, "hideAllLabels", () => {
      this.labelItems.forEach((t) => {
        t.visible = !1, t.inSight = !1;
      });
    });
    c(this, "fixDoorVisibleAndPosition", () => {
      this.initRoomObservers();
      const { panoIndex: t } = this.five;
      if (!this.state.visible || this.five.model.empty || t === null || !this.roomObservers.find((o) => o.panoIndex === t))
        return;
      const i = this.roomObservers.find((o) => o.panoIndex === t), e = this.five.work.observers.find((o) => o.panoIndex === t).position.clone(), a = (() => {
        if (this.visibleLabelMap.has(t))
          return this.visibleLabelMap.get(t);
        {
          const o = [];
          return this.doorLabels.forEach((s, d) => {
            if (s.roomName === i.name)
              return;
            const n = s.position.clone(), r = n.distanceTo(e);
            if (r < this.MinVisibledistance || r > this.MaxVisibledistance)
              return;
            const p = new q(), v = n.clone().sub(e).normalize();
            p.set(e, v);
            const [b] = this.five.model.intersectRaycaster(p);
            b && b.distance + 0.1 < r || o.push(d);
          }), this.visibleLabelMap.set(t, o), o;
        }
      })();
      this.labelItems.forEach((o, s) => {
        o.visible = a.includes(s);
      }), this.fixDoorPosition();
    });
    c(this, "fixDoorPosition", () => {
      var d, n, r, p, v, b, V, x, P, g, W, z;
      if (!this.state.enabled || !this.state.visible)
        return;
      const { panoIndex: t, camera: i } = this.five;
      if (t === null)
        return;
      if (this.five.currentMode !== "Panorama")
        return this.hideAllLabels();
      const f = this.five.getElement(), e = f.clientWidth, a = f.clientHeight, o = i.getWorldDirection(new S()), s = [];
      if (this.labelItems.forEach((m, u) => {
        var w;
        if (m.visible) {
          const A = i.position.distanceTo(m.position), y = m.position.clone().add(new S(0, this.OffsetHeight, 0)), M = y.clone().sub(i.position).normalize().angleTo(o), E = y.clone().project(i), D = (E.x + 1) / 2.2 * 100, _ = (-E.y + 1) / 2.2 * 100, F = D >= 0 && D <= 100 && _ >= 0 && _ <= 100 && A > this.MinVisibledistance && A <= this.MaxVisibledistance;
          m.left = D, m.top = _, m.inSight = F && M < Math.PI / 2, m.cameraToward = J(this.five), F ? s.push({ disFromCameraToLabel: A, left: D, top: _, index: u }) : m.transform = "translate(-50%, -50%)";
        } else
          m.inSight = !1;
        const T = m, { svelteApp: I } = T, k = B(T, ["svelteApp"]);
        (w = m.svelteApp) == null || w.$set({ props: k });
      }), s.length > 1) {
        let m = 0;
        s.sort((u, I) => I.disFromCameraToLabel - u.disFromCameraToLabel);
        for (let u = 1; u < s.length; u++) {
          const { index: I, left: k, top: T } = s[u - 1], { index: w, left: A, top: y } = s[u], O = this.container.children[I], M = this.container.children[w];
          if (!O || !M)
            return;
          const E = {
            left: e * k / 100,
            top: a * T / 100,
            width: (r = (n = (d = O.children) == null ? void 0 : d[0]) == null ? void 0 : n.clientWidth) != null ? r : 0,
            height: (b = (v = (p = O.children) == null ? void 0 : p[0]) == null ? void 0 : v.clientHeight) != null ? b : 0
          }, D = {
            left: e * A / 100,
            top: a * y / 100,
            width: (P = (x = (V = M.children) == null ? void 0 : V[0]) == null ? void 0 : x.clientWidth) != null ? P : 0,
            height: (z = (W = (g = M.children) == null ? void 0 : g[0]) == null ? void 0 : W.clientHeight) != null ? z : 0
          };
          K(E, D) && (m++, this.labelItems[I].transform = `translate(-50%, ${(m - 1) * 100 - 50}%)`, this.labelItems[w].transform = `translate(-50%, ${m * 100 - 50}%)`);
        }
      }
    });
    c(this, "onClick", (t, i) => {
      if (!this.roomObservers)
        return;
      const { work: f } = this.five;
      let e, a, o = 1 / 0;
      for (const s of f.observers)
        if (this.roomObservers.find((n) => n.panoIndex === s.panoIndex && n.name === t)) {
          const n = s.standingPosition, r = i.distanceTo(n);
          r < o && (e = s.panoIndex, a = n.clone().sub(i).normalize(), o = r);
        }
      if (a !== null && e !== null) {
        const s = {};
        if (o > 0) {
          const n = new S(0, 0, -1), r = a.clone(), p = new X();
          p.setFromUnitVectors(n, r);
          const v = new G();
          v.setFromQuaternion(p, "YXZ"), s.longitude = v.y;
        }
        this.five.emit("wantsToMoveToPano", e, {}, !0) || this.five.moveToPano(e, { longitude: s.longitude });
      }
    });
    c(this, "initData", () => {
      var e;
      this.doorLabels = [];
      const t = this.five.panoIndex, i = this.floorplanServerData.computed_data.observers[t].floor_index, f = i !== void 0 && ((e = this.floorplanServerData.computed_data.floor_datas[i]) == null ? void 0 : e.rooms);
      this.rooms = f, this.rooms && this.rooms.length > 0 && this.rooms.forEach((a) => {
        var d;
        const o = (d = this.floorplanServerData.computed_data.doors) == null ? void 0 : d.filter((n) => !!(n && n.name === a.name)), s = this.five.work.observers.filter((n, r) => !!a.observer_indexs.find((p) => p === r));
        o && o.forEach((n) => {
          const r = n.position;
          let p = 1 / 0, v;
          s.forEach((V) => {
            const x = V.standingPosition, P = {
              x: x.x,
              y: x.y,
              z: x.z
            }, g = tt(r, P);
            g < p && (p = g, v = P);
          }), v && (r.y = v.y + 0.01);
          const b = new S(r.x, r.y, r.z);
          b.add(new S(-0.2, 1.8, 0).applyEuler(new G(0, n.rad, 0))), this.doorLabels.push({
            roomName: a.name,
            name: n.name,
            position: b,
            toward: it(n.rad)
          });
        });
      }), this.labelItems = this.doorLabels.map((a) => U(L({}, a), {
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
    const f = this.state;
    this.state = L(L({}, f), t);
    const e = f.enabled && f.visible, a = this.state.enabled && this.state.visible;
    e !== a && this.applyState();
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
      const f = {
        state: this.state,
        prevState: t,
        userAction: i ? i.userAction : ot.userAction
      };
      this.hooks.emit("stateChange", f);
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
  vi as PanoDoorLabelPluginController
};
