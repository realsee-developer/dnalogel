var P = Object.defineProperty;
var g = (h, t, e) => t in h ? P(h, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[t] = e;
var s = (h, t, e) => (g(h, typeof t != "symbol" ? t + "" : t, e), e);
import { anyPositionToVector3 as d } from "./positionToVector3.js";
import * as b from "three";
import { vector3ToScreen as l } from "./five/vector3ToScreen.js";
import { getFiveModel as U } from "./five/getFiveModel.js";
import { FiveUtil as x } from "./Utils/FiveUtil.js";
import { _raycaster as m } from "./three/temp.js";
import { resizeObserver as E } from "./dom/resizeObserver.js";
const v = "LightTagContainer_shgjakdhwakjdhsja", w = new b.Vector2();
class R {
  constructor(t, e, o) {
    s(this, "container");
    s(this, "visible", !1);
    s(this, "enabled", !1);
    s(this, "wrapper");
    s(this, "positionsForRotate");
    /**
     * @description 碰撞检测
     * @default true
     */
    s(this, "intersectCheck", !0);
    /**
     * @description 模拟3D
     * @default true
     */
    s(this, "simulate3D", !1);
    s(this, "tagWrapper");
    s(this, "five");
    s(this, "originPosition");
    s(this, "transformedPosition");
    s(this, "disposer");
    s(this, "config");
    s(this, "fiveUtil");
    s(this, "disposers", []);
    s(this, "onCameraUpdate", () => {
      this.visible !== !1 && this.updateScreenPosition();
    });
    s(this, "onFiveEveryReady", () => {
      var t;
      if (this.intersectCheck && this.visible && this.five.state.mode !== "Panorama") {
        let e = 0.01;
        this.fiveUtil.workUtil.fromType === "poincare" && (e = 0.05), m.set(this.five.camera.position, this.transformedPosition.clone().sub(this.five.camera.position));
        const o = (t = U(this.five).intersectRaycaster(m)) == null ? void 0 : t[0];
        (o == null ? void 0 : o.distance) + e > this.transformedPosition.distanceTo(this.five.camera.position) ? (this.container.style.opacity = "1", this.container.style.pointerEvents = "auto") : (this.container.style.opacity = "0", this.container.style.pointerEvents = "none");
      }
    });
    var n, r, a;
    this.five = t, this.fiveUtil = (n = t.__fiveUtil__) != null ? n : t.__fiveUtil__ = new x(t), this.originPosition = e ? d(e).clone() : void 0, this.transformedPosition = (r = this.originPosition) == null ? void 0 : r.clone(), this.positionsForRotate = (a = o == null ? void 0 : o.positionsForRotate) == null ? void 0 : a.map((i) => d(i).clone()), this.container = (() => {
      const i = document.createElement("div");
      return i.style.width = "0", i.style.height = "0", i.style.position = "absolute", i.style.transition = "opacity 0.2s linear", i;
    })(), this.config = o != null ? o : {}, this.enable(), this.show(), this.addResizeListener();
  }
  show() {
    this.visible = !0, this.container.style.opacity = "1", this.container.style.pointerEvents = "auto", this.onCameraUpdate();
  }
  hide() {
    this.visible = !1, this.container.style.opacity = "0", this.container.style.pointerEvents = "none";
  }
  enable() {
    var o, n, r, a;
    if (this.enabled)
      return;
    this.enabled = !0, this.wrapper = (r = (n = this.config.wrapper) != null ? n : (o = this.five.getElement()) == null ? void 0 : o.parentElement) != null ? r : document.body, this.tagWrapper || (this.tagWrapper = (a = document.getElementById(v)) != null ? a : (() => {
      const i = document.createElement("div");
      return i.id = v, i.style.position = "absolute", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.pointerEvents = "none", i.style.zIndex = "1", i;
    })(), this.wrapper.contains(this.tagWrapper) || this.wrapper.appendChild(this.tagWrapper)), this.tagWrapper.appendChild(this.container);
    let t = !1;
    const e = () => {
      t || (t = !0, this.five.ready().then(() => {
        this.onFiveEveryReady(), t = !1;
      }));
    };
    this.five.on("cameraUpdate", e), this.five.on("cameraUpdate", this.onCameraUpdate), this.disposer = () => {
      this.five.off("cameraUpdate", e), this.five.off("cameraUpdate", this.onCameraUpdate);
    };
  }
  disable() {
    var t;
    this.enabled && (this.enabled = !1, this.tagWrapper.removeChild(this.container), (t = this.disposer) == null || t.call(this));
  }
  destroy() {
    this.disable(), this.container.remove(), this.disposers.forEach((t) => t());
  }
  setTransformMatrix(t) {
    var e;
    this.transformedPosition = (e = this.originPosition) == null ? void 0 : e.clone().applyMatrix4(t), this.onCameraUpdate();
  }
  setPosition(t, e) {
    this.transformedPosition = t, this.positionsForRotate = e, this.onCameraUpdate(), setTimeout(() => this.onCameraUpdate(), 0);
  }
  updateScreenPosition() {
    if (!this.transformedPosition) {
      this.container.style.left = "-100%", this.container.style.top = "-100%";
      return;
    }
    const t = this.five.renderer.getSize(w), e = l(this.five.camera, this.transformedPosition, t);
    if (!e) {
      this.container.style.left = "-100%", this.container.style.top = "-100%";
      return;
    }
    const o = (() => {
      if (!this.simulate3D)
        return 1;
      const r = 2 * Math.tan(0.5 * this.five.camera.fov / 180 * Math.PI), a = this.transformedPosition.distanceTo(this.five.camera.position);
      return Math.max(Math.min(1 - r * a / 40, 1), 0.5);
    })(), n = (() => {
      if (this.positionsForRotate === void 0 || this.positionsForRotate.length !== 2)
        return 0;
      const [r, a] = this.positionsForRotate, i = l(this.five.camera, r, t), c = l(this.five.camera, a, t);
      if (!i || !c)
        return 0;
      const p = i.leftPx > c.leftPx ? c : i, f = i.leftPx > c.leftPx ? i : c, y = f.leftPx - p.leftPx, u = f.topPx - p.topPx;
      return Math.atan2(u, y) * (180 / Math.PI);
    })();
    this.container.style.left = e.leftPx + "px", this.container.style.top = e.topPx + "px", this.container.style.transformOrigin = "center", this.container.style.transform = `scale(${o})`, n && (this.container.style.transform += ` rotate(${n}deg)`);
  }
  addResizeListener() {
    const t = this.five.getElement();
    if (t) {
      const { observe: e, unobserve: o } = E(this.onCameraUpdate, t);
      e(), this.disposers.push(o);
    }
  }
}
function z(h, t, e) {
  return new R(h, t, e);
}
export {
  R as LightTag,
  z as tag
};
