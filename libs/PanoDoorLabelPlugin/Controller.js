var $ = Object.defineProperty, B = Object.defineProperties;
var U = Object.getOwnPropertyDescriptors;
var C = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty, N = Object.prototype.propertyIsEnumerable;
var T = (p, a, i) => a in p ? $(p, a, { enumerable: !0, configurable: !0, writable: !0, value: i }) : p[a] = i, H = (p, a) => {
  for (var i in a || (a = {}))
    G.call(a, i) && T(p, i, a[i]);
  if (C)
    for (var i of C(a))
      N.call(a, i) && T(p, i, a[i]);
  return p;
}, W = (p, a) => B(p, U(a));
var r = (p, a, i) => (T(p, typeof a != "symbol" ? a + "" : a, i), i);
import { Raycaster as Q, Vector3 as V, Quaternion as j, Euler as z } from "three";
import { BasePanoPluginController as q } from "./BaseController.js";
import X from "./DoorLabelItem.js";
import { getCameraToward as Y, isTwoRectOverlaped as Z, getDistance as J, getToward as K } from "./utils.js";
import "@realsee/five";
import "../base/BasePlugin.js";
import "../shared-utils/Subscribe.js";
import "hammerjs";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../shared-utils/positionToVector3.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../shared-utils/util.js";
import "../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../CSS3DRenderPlugin/utils/even.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import "../shared-utils/url/absoluteUrl.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/five/getFiveModel.js";
import "../vendor/svelte/internal/index.js";
import "../vendor/classnames/index.js";
const ii = { userAction: !0 };
class Ci extends q {
  constructor(i) {
    super(i);
    r(this, "MinVisibledistance", 1.8);
    r(this, "MaxVisibledistance", 5);
    r(this, "OffsetHeight", -1.3);
    // 标签页面高度偏移值
    r(this, "rooms");
    r(this, "floorplanServerData");
    /** 标签项 */
    r(this, "doorLabelItems");
    /** 每个点位 visible 标签的缓存 */
    r(this, "visibleLabelMap", /* @__PURE__ */ new Map());
    /** 标签项Prop值 */
    r(this, "labelItems", []);
    /** 数据 */
    r(this, "doorLabels");
    r(this, "roomObservers");
    r(this, "loadData", (i, n) => {
      n && (this.MaxVisibledistance = n.MaxVisibledistance, this.MinVisibledistance = n.MinVisibledistance, this.OffsetHeight = n.OffsetHeight), this.doorLabelItems && this.doorLabelItems.length > 0 && this.doorLabelItems.forEach((d) => {
        d.$destroy();
      }), this.labelItems = [], this.doorLabels = [], this.doorLabelItems = [], this.floorplanServerData = i, typeof this.five.ready == "function" ? this.five.ready().then(() => this.initData()) : this.five.once("panoArrived", () => {
        this.initData();
      });
    });
    r(this, "initRoomObservers", () => {
      var l, h;
      const i = this.floorplanServerData.computed_data.floor_datas || [], d = (((h = (l = this.five) == null ? void 0 : l.work) == null ? void 0 : h.observers) || []).map((o) => {
        const s = o.panoIndex, f = o.floorIndex, e = i == null ? void 0 : i.find((t) => t.floor_index === f);
        if (e) {
          const t = e.rooms.find((c) => c.observer_indexs.includes(s));
          if (t)
            return { panoIndex: s, floorIndex: f, name: t.name };
        }
      }).filter(Boolean);
      this.roomObservers = d;
    });
    r(this, "hideAllLabels", () => {
      this.labelItems.forEach((i) => {
        i.visible = !1, i.inSight = !1;
      }), this.render();
    });
    r(this, "fixDoorVisibleAndPosition", () => {
      this.initRoomObservers();
      const { panoIndex: i } = this.five;
      if (!this.visible || this.five.model.empty || i === null || !this.roomObservers.find((o) => o.panoIndex === i))
        return;
      const n = this.roomObservers.find((o) => o.panoIndex === i), l = this.five.work.observers.find((o) => o.panoIndex === i).position.clone(), h = (() => {
        if (this.visibleLabelMap.has(i))
          return this.visibleLabelMap.get(i);
        {
          const o = [];
          return this.doorLabels.forEach((s, f) => {
            if (s.roomName === n.name)
              return;
            const e = s.position.clone(), t = e.distanceTo(l);
            if (t < this.MinVisibledistance || t > this.MaxVisibledistance)
              return;
            const c = new Q(), v = e.clone().sub(l).normalize();
            c.set(l, v);
            const [b] = this.five.model.intersectRaycaster(c);
            b && b.distance + 0.1 < t || o.push(f);
          }), this.visibleLabelMap.set(i, o), o;
        }
      })();
      this.labelItems.forEach((o, s) => {
        o.visible = h.includes(s);
      }), this.fixDoorPosition();
    });
    r(this, "fixDoorPosition", () => {
      var e, t, c, v, b, y, g, w, L, E, _, S;
      const { panoIndex: i, camera: n } = this.five;
      if (i === null)
        return;
      if (this.five.currentMode !== "Panorama")
        return this.hideAllLabels();
      const d = this.five.getElement(), l = d.clientWidth, h = d.clientHeight, o = n.getWorldDirection(new V()), s = [], f = [...this.labelItems];
      if (f.forEach((m, u) => {
        if (m.visible) {
          const x = n.position.distanceTo(m.position), M = m.position.clone().add(new V(0, this.OffsetHeight, 0)), A = M.clone().sub(n.position).normalize().angleTo(o), O = M.clone().project(n), P = (O.x + 1) / 2.2 * 100, I = (-O.y + 1) / 2.2 * 100, D = P >= 0 && P <= 100 && I >= 0 && I <= 100 && x > this.MinVisibledistance && x <= this.MaxVisibledistance;
          m.left = P, m.top = I, m.inSight = D && A < Math.PI / 2, m.cameraToward = Y(this.five), D ? s.push({ disFromCameraToLabel: x, left: P, top: I, index: u }) : m.transform = "translate(-50%, -50%)";
        } else
          m.inSight = !1;
      }), s.length > 1) {
        let m = 0;
        s.sort((u, x) => x.disFromCameraToLabel - u.disFromCameraToLabel);
        for (let u = 1; u < s.length; u++) {
          const { index: x, left: M, top: k } = s[u - 1], { index: A, left: O, top: P } = s[u], I = this.container.children[x], D = this.container.children[A];
          if (!I || !D)
            return;
          const R = {
            left: l * M / 100,
            top: h * k / 100,
            width: (c = (t = (e = I.children) == null ? void 0 : e[0]) == null ? void 0 : t.clientWidth) != null ? c : 0,
            height: (y = (b = (v = I.children) == null ? void 0 : v[0]) == null ? void 0 : b.clientHeight) != null ? y : 0
          }, F = {
            left: l * O / 100,
            top: h * P / 100,
            width: (L = (w = (g = D.children) == null ? void 0 : g[0]) == null ? void 0 : w.clientWidth) != null ? L : 0,
            height: (S = (_ = (E = D.children) == null ? void 0 : E[0]) == null ? void 0 : _.clientHeight) != null ? S : 0
          };
          Z(R, F) && (m++, f[x].transform = `translate(-50%, ${(m - 1) * 100 - 50}%)`, f[A].transform = `translate(-50%, ${m * 100 - 50}%)`);
        }
      }
      this.labelItems = f, this.render();
    });
    r(this, "onClick", (i, n) => {
      if (!this.roomObservers)
        return;
      const { work: d } = this.five;
      let l, h, o = 1 / 0;
      for (const s of d.observers)
        if (this.roomObservers.find((e) => e.panoIndex === s.panoIndex && e.name === i)) {
          const e = s.standingPosition, t = n.distanceTo(e);
          t < o && (l = s.panoIndex, h = e.clone().sub(n).normalize(), o = t);
        }
      if (h !== null && l !== null) {
        const s = {};
        if (o > 0) {
          const e = new V(0, 0, -1), t = h.clone(), c = new j();
          c.setFromUnitVectors(e, t);
          const v = new z();
          v.setFromQuaternion(c, "YXZ"), s.longitude = v.y;
        }
        this.five.emit("wantsToMoveToPano", l, {}, !0) || this.five.moveToPano(l, { longitude: s.longitude });
      }
    });
    r(this, "initData", () => {
      var l;
      this.doorLabels = [];
      const i = this.five.panoIndex, n = this.floorplanServerData.computed_data.observers[i].floor_index, d = n !== void 0 && ((l = this.floorplanServerData.computed_data.floor_datas[n]) == null ? void 0 : l.rooms);
      this.rooms = d, this.rooms && this.rooms.length > 0 && this.rooms.forEach((h) => {
        var f;
        const o = (f = this.floorplanServerData.computed_data.doors) == null ? void 0 : f.filter((e) => !!(e && e.name === h.name)), s = this.five.work.observers.filter((e, t) => !!h.observer_indexs.find((c) => c === t));
        o && o.forEach((e) => {
          const t = e.position;
          let c = 1 / 0, v;
          s.forEach((y) => {
            const g = y.standingPosition, w = {
              x: g.x,
              y: g.y,
              z: g.z
            }, L = J(t, w);
            L < c && (c = L, v = w);
          }), v && (t.y = v.y + 0.01);
          const b = new V(t.x, t.y, t.z);
          b.add(new V(-0.2, 1.8, 0).applyEuler(new z(0, e.rad, 0))), this.doorLabels.push({
            roomName: h.name,
            name: e.name,
            position: b,
            toward: K(e.rad)
          });
        });
      }), this.labelItems = this.doorLabels.map((h) => W(H({}, h), {
        left: 0,
        top: 0,
        visible: !1,
        inSight: !1,
        transform: "",
        cameraToward: ""
      })), this.five.on("wantsToMoveToPano", this.hideAllLabels), this.five.on("modelLoaded", this.fixDoorVisibleAndPosition), this.five.on("panoArrived", this.fixDoorVisibleAndPosition), this.five.on("initAnimationEnded", this.fixDoorPosition), this.five.on("cameraUpdate", this.fixDoorPosition), this.five.on("mouseWheel", this.fixDoorPosition), this.five.on("pinchGesture", this.fixDoorPosition), this.fixDoorVisibleAndPosition();
    });
  }
  stateChangedCallback(i, n) {
    if (this.hooks.hasListener("stateChange")) {
      const d = {
        state: this.state,
        prevState: i,
        userAction: n ? n.userAction : ii.userAction
      };
      this.hooks.emit("stateChange", d);
    }
  }
  render() {
    if (!this.enabled) {
      this.doorLabelItems && this.doorLabelItems.length > 0 && this.doorLabelItems.forEach((i) => {
        i == null || i.$destroy();
      }), this.doorLabels = void 0;
      return;
    }
    this.doorLabelItems && this.doorLabelItems.forEach((i) => {
      i.$destroy();
    }), this.doorLabelItems = [], this.labelItems.forEach((i) => {
      this.doorLabelItems.push(
        new X({
          target: this.container,
          props: {
            props: i,
            onClick: () => {
              this.onClick(i.name, i.position);
            }
          }
        })
      );
    });
  }
  initState() {
    return { enabled: !0, visible: !0 };
  }
  dispose() {
    this && this.five && (this.five.off("wantsToMoveToPano", this.hideAllLabels), this.five.off("modelLoaded", this.fixDoorVisibleAndPosition), this.five.off("panoArrived", this.fixDoorVisibleAndPosition), this.five.off("initAnimationEnded", this.fixDoorPosition), this.five.off("cameraUpdate", this.fixDoorPosition), this.five.off("mouseWheel", this.fixDoorPosition), this.five.off("pinchGesture", this.fixDoorPosition), super.dispose());
  }
}
export {
  Ci as PanoDoorLabelPluginController
};
