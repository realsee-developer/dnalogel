var P = Object.defineProperty;
var g = (p, e, t) => e in p ? P(p, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[e] = t;
var r = (p, e, t) => (g(p, typeof e != "symbol" ? e + "" : e, t), t);
var u = (p, e, t) => new Promise((o, n) => {
  var a = (i) => {
    try {
      s(t.next(i));
    } catch (l) {
      n(l);
    }
  }, h = (i) => {
    try {
      s(t.throw(i));
    } catch (l) {
      n(l);
    }
  }, s = (i) => i.done ? o(i.value) : Promise.resolve(i.value).then(a, h);
  s((t = t.apply(p, e)).next());
});
import { anyPositionToVector3 as f } from "./positionToVector3.js";
import * as C from "three";
import { vector3ToScreen as m } from "./five/vector3ToScreen.js";
import { getFiveModel as U } from "./five/getFiveModel.js";
import { FiveUtil as w } from "./Utils/FiveUtil.js";
import { _raycaster as v } from "./three/temp.js";
import { resizeObserver as x } from "./dom/resizeObserver.js";
import { fiveEveryReadyListener as E } from "./five/fiveEveryReadyListener.js";
import "../vendor/hammerjs/hammer.js";
import "./three/PointSelector/index.js";
import "./three/CSS3DRenderer/index.js";
import { waitFiveModelLoaded as F } from "./five/fiveModelLoad.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "./three/core/Five_LineMaterial2.js";
import "./three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "./five/FivePuppet.js";
const R = new C.Vector2();
class M {
  constructor(e, t, o) {
    /**
     * @description 单个标签 dom
     */
    r(this, "container");
    r(this, "visible", !1);
    r(this, "enabled", !1);
    /**
     * @description 标签的可见性数组
     * ```
     * [0] this.visible
     * [1] 碰撞检测
     * [2] 元素遮挡
     * [3] 强制显示
     * ```
     */
    r(this, "visibles", []);
    /**
     * @description 标签容器的父容器
     * @default this.five.getElement()?.parentElement
     */
    r(this, "wrapper");
    r(this, "positionsForRotate");
    /**
     * @description 碰撞检测
     * @default true
     */
    r(this, "intersectCheck", !0);
    /**
     * @description 用于碰撞检测的额外 Object3D
     */
    r(this, "extraObjectsForIntersectCheck", []);
    /**
     * @description 模拟3D
     * @default false
     */
    r(this, "simulate3D", !1);
    /**
     * @description 标签的容器，根据 namespace 区分
     */
    r(this, "tagWrapper");
    r(this, "five");
    r(this, "originPosition");
    r(this, "transformedPosition");
    r(this, "disposer");
    r(this, "config");
    r(this, "fiveUtil");
    r(this, "disposers", []);
    r(this, "onModeChange", () => {
      this.visibles[3] = void 0, this.updateVisible();
    });
    r(this, "onPanoArrived", () => {
      this.visibles[3] = void 0, this.updateVisible();
    });
    r(this, "onCameraUpdate", () => {
      this.visible !== !1 && this.updateScreenPosition();
    });
    r(this, "onCameraFovUpdate", () => {
      this.onCameraUpdate(), this.five.off("render.prepare", this.onCameraUpdate), this.five.on("render.prepare", this.onCameraUpdate), setTimeout(() => {
        this.five.off("render.prepare", this.onCameraUpdate);
      }, 1e3);
    });
    r(this, "onFiveEveryReady", () => {
      this.five.state.mode !== "Panorama" && this.updateVisible();
    });
    r(this, "updateVisible", () => {
      this.visible && (this.updateIntersectCheckVisible(), this.needsRender = !0);
    });
    r(this, "applyVisible", () => {
      this.visibles[3] === !0 || this.visibles.every((t) => t !== !1) ? (this.container.style.opacity = "1", this.container.style.pointerEvents = "auto") : (this.container.style.opacity = "0", this.container.style.pointerEvents = "none");
    });
    r(this, "updateIntersectCheckVisible", () => {
      var i, l;
      if (!this.position)
        return;
      if (!this.intersectCheck) {
        this.visibles[1] = !0;
        return;
      }
      let e = !1, t = 0.01;
      this.fiveUtil.workUtil.fromType === "poincare" && (t = 0.05);
      const o = this.transformedPosition.clone().sub(this.five.camera.position).normalize();
      v.set(this.five.camera.position, o);
      const n = (i = U(this.five).intersectRaycaster(v)) != null ? i : [], a = (l = v.intersectObjects(this.extraObjectsForIntersectCheck, !0)) != null ? l : [], s = [...n, ...a].sort((c, d) => c.distance - d.distance)[0];
      s ? e = (s == null ? void 0 : s.distance) + t > this.transformedPosition.distanceTo(this.five.camera.position) : e = !0, this.visibles[1] = e;
    });
    var n, a, h;
    this.five = e, this.fiveUtil = (n = e.__fiveUtil__) != null ? n : e.__fiveUtil__ = new w(e), this.originPosition = t ? f(t).clone() : void 0, this.transformedPosition = (a = this.originPosition) == null ? void 0 : a.clone(), this.positionsForRotate = (h = o == null ? void 0 : o.positionsForRotate) == null ? void 0 : h.map((s) => f(s).clone()), this.config = o != null ? o : {}, this.container = (() => {
      const s = document.createElement("div");
      return s.classList.add("light-tag"), s.style.width = "0", s.style.height = "0", s.style.position = "absolute", s.style.transition = "opacity 0.2s linear", s;
    })(), this.addResizeListener(), this.show(), this.enable(), setTimeout(() => {
      this.updateVisible(), this.needsRender = !0;
    }, 0);
  }
  get position() {
    return this.transformedPosition;
  }
  set needsRender(e) {
    this.applyVisible();
  }
  /**
   * @description 显示标签
   */
  show(e) {
    this.visible = !0, this.visibles[0] = !0, e != null && e.force && (this.visibles[3] = !0), this.container.style.opacity = "1", this.container.style.pointerEvents = "auto", this.updateVisible(), this.onCameraUpdate();
  }
  /**
   * @description 隐藏标签
   */
  hide() {
    this.visible = !1, this.visibles[0] = !1, this.container.style.opacity = "0", this.container.style.pointerEvents = "none";
  }
  /**
   * @description 启用标签
   */
  enable() {
    return u(this, null, function* () {
      var o, n, a, h;
      if (this.enabled || (this.enabled = !0, yield F(this.five), !this.enabled))
        return;
      if (this.wrapper = (n = this.config.wrapper) != null ? n : (o = this.five.getElement()) == null ? void 0 : o.parentElement, !this.wrapper) {
        console.error("lighttag: wrapper is required");
        return;
      }
      const e = `light-tag-wrapper-${(h = (a = this.config) == null ? void 0 : a.namespace) != null ? h : "default"}`;
      if (!this.tagWrapper) {
        let s = Array.from(this.wrapper.children).find((i) => i.id === e);
        if (!s) {
          const i = document.createElement("div");
          s = i, i.id = e, i.style.position = "absolute", i.style.overflow = "hidden", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.pointerEvents = "none", i.style.zIndex = "1", this.wrapper.appendChild(s);
        }
        this.tagWrapper = s;
      }
      this.tagWrapper.appendChild(this.container), this.updateVisible();
      const t = E(this.five, this.onFiveEveryReady);
      this.five.on("cameraUpdate", this.onCameraUpdate), this.five.on("cameraFovUpdate", this.onCameraFovUpdate), this.five.on("panoArrived", this.onPanoArrived), this.five.on("modeChange", this.onModeChange), this.disposer = () => {
        t(), this.five.off("cameraUpdate", this.onCameraUpdate), this.five.off("cameraFovUpdate", this.onCameraFovUpdate), this.five.off("panoArrived", this.onPanoArrived), this.five.off("modeChange", this.onModeChange);
      };
    });
  }
  /**
   * @description 禁用标签
   */
  disable() {
    var e, t;
    this.enabled && (this.enabled = !1, (e = this.tagWrapper) == null || e.removeChild(this.container), (t = this.disposer) == null || t.call(this));
  }
  /**
   * @description 销毁标签，并释放相关资源
   */
  destroy() {
    this.disable(), this.container.remove(), this.disposers.forEach((e) => e());
  }
  /**
   * @description 设置标签位置
   * @param position 位置
   * @param positionsForRotate 用于 css 旋转的斜线的两个端点
   */
  setPosition(e, t) {
    this.transformedPosition = f(e).clone(), this.positionsForRotate = t == null ? void 0 : t.map((o) => f(o).clone()), this.onCameraUpdate(), setTimeout(() => this.onCameraUpdate(), 0);
  }
  setTransformMatrix(e) {
    var t;
    this.transformedPosition = (t = this.originPosition) == null ? void 0 : t.clone().applyMatrix4(e), this.onCameraUpdate();
  }
  updateScreenPosition() {
    var a;
    if (!this.transformedPosition) {
      this.container.style.left = "-100%", this.container.style.top = "-100%";
      return;
    }
    const e = (a = this.five.renderer) == null ? void 0 : a.getSize(R);
    if (!e) {
      this.container.style.left = "-100%", this.container.style.top = "-100%";
      return;
    }
    const t = m(this.five.camera, this.transformedPosition, e);
    if (!t) {
      this.container.style.left = "-100%", this.container.style.top = "-100%";
      return;
    }
    const o = (() => {
      if (!this.simulate3D)
        return 1;
      const h = 2 * Math.tan(0.5 * this.five.camera.fov / 180 * Math.PI), s = this.transformedPosition.distanceTo(this.five.camera.position);
      return Math.max(Math.min(1 - h * s / 40, 1), 0.5);
    })(), n = (() => {
      if (this.positionsForRotate === void 0 || this.positionsForRotate.length !== 2)
        return 0;
      const [h, s] = this.positionsForRotate, i = m(this.five.camera, h, e), l = m(this.five.camera, s, e);
      if (!i || !l)
        return 0;
      const c = i.leftPx > l.leftPx ? l : i, d = i.leftPx > l.leftPx ? i : l, y = d.leftPx - c.leftPx, b = d.topPx - c.topPx;
      return Math.atan2(b, y) * (180 / Math.PI);
    })();
    this.container.style.left = t.leftPx + "px", this.container.style.top = t.topPx + "px", this.container.style.transformOrigin = "center", this.container.style.transform = `scale(${o})`, n && (this.container.style.transform += ` rotate(${n}deg)`);
  }
  addResizeListener() {
    const e = this.five.getElement();
    if (e) {
      const { observe: t, unobserve: o } = x(this.onCameraUpdate, e);
      t(), this.disposers.push(o);
    }
  }
}
function K(...p) {
  return new M(...p);
}
export {
  M as LightTag,
  K as tag
};