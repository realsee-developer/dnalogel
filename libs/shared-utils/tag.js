var P = Object.defineProperty;
var C = (p, e, t) => e in p ? P(p, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[e] = t;
var r = (p, e, t) => (C(p, typeof e != "symbol" ? e + "" : e, t), t);
var u = (p, e, t) => new Promise((o, n) => {
  var a = (i) => {
    try {
      s(t.next(i));
    } catch (h) {
      n(h);
    }
  }, l = (i) => {
    try {
      s(t.throw(i));
    } catch (h) {
      n(h);
    }
  }, s = (i) => i.done ? o(i.value) : Promise.resolve(i.value).then(a, l);
  s((t = t.apply(p, e)).next());
});
import { anyPositionToVector3 as f } from "./positionToVector3.js";
import { vector3ToScreen as m } from "./five/vector3ToScreen.js";
import { getFiveModel as g } from "./five/getFiveModel.js";
import { FiveUtil as U } from "./Utils/FiveUtil.js";
import { _raycaster as v } from "./three/temp.js";
import { resizeObserver as w } from "./dom/resizeObserver.js";
import { fiveEveryReadyListener as x } from "./five/fiveEveryReadyListener.js";
import { Vector2 as E } from "three";
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
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "./five/FivePuppet.js";
const M = new E();
class R {
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
      var i, h;
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
      const n = (i = g(this.five).intersectRaycaster(v)) != null ? i : [], a = (h = v.intersectObjects(this.extraObjectsForIntersectCheck, !0)) != null ? h : [], s = [...n, ...a].sort((c, d) => c.distance - d.distance)[0];
      s ? e = (s == null ? void 0 : s.distance) + t > this.transformedPosition.distanceTo(this.five.camera.position) : e = !0, this.visibles[1] = e;
    });
    var n, a, l;
    this.five = e, this.fiveUtil = (n = e.__fiveUtil__) != null ? n : e.__fiveUtil__ = new U(e), this.originPosition = t ? f(t).clone() : void 0, this.transformedPosition = (a = this.originPosition) == null ? void 0 : a.clone(), this.positionsForRotate = (l = o == null ? void 0 : o.positionsForRotate) == null ? void 0 : l.map((s) => f(s).clone()), this.config = o != null ? o : {}, this.container = (() => {
      const s = document.createElement("div");
      return s.classList.add("light-tag"), s.style.width = "0", s.style.height = "0", s.style.position = "absolute", o != null && o.disableOpacityTransition || (s.style.transition = "opacity 0.2s linear"), s;
    })(), this.addResizeListener(), this.show(), this.enable(), setTimeout(() => {
      this.updateVisible(), this.needsRender = !0;
    }, 0);
  }
  get position() {
    return this.transformedPosition;
  }
  // eslint-disable-next-line accessor-pairs
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
      var o, n, a, l;
      if (this.enabled || (this.enabled = !0, yield F(this.five), !this.enabled))
        return;
      if (this.wrapper = (n = this.config.wrapper) != null ? n : (o = this.five.getElement()) == null ? void 0 : o.parentElement, !this.wrapper) {
        console.error("lighttag: wrapper is required");
        return;
      }
      const e = `light-tag-wrapper-${(l = (a = this.config) == null ? void 0 : a.namespace) != null ? l : "default"}`;
      if (!this.tagWrapper) {
        let s = Array.from(this.wrapper.children).find((i) => i.id === e);
        if (!s) {
          const i = document.createElement("div");
          s = i, i.id = e, i.style.position = "absolute", i.style.overflow = "hidden", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%", i.style.pointerEvents = "none", i.style.zIndex = "1", this.wrapper.appendChild(s);
        }
        this.tagWrapper = s;
      }
      this.tagWrapper.appendChild(this.container), this.updateVisible();
      const t = x(this.five, this.onFiveEveryReady);
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
    const e = (a = this.five.renderer) == null ? void 0 : a.getSize(M);
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
      const s = 3 * Math.tan(0.5 * this.five.camera.fov / 180 * Math.PI), i = this.transformedPosition.distanceTo(this.five.camera.position);
      return Math.max(Math.min(1 - s * i / 40, 1), 0.75);
    })(), n = (() => {
      if (this.positionsForRotate === void 0 || this.positionsForRotate.length !== 2)
        return 0;
      const [l, s] = this.positionsForRotate, i = m(this.five.camera, l, e), h = m(this.five.camera, s, e);
      if (!i || !h)
        return 0;
      const c = i.leftPx > h.leftPx ? h : i, d = i.leftPx > h.leftPx ? i : h, y = d.leftPx - c.leftPx, b = d.topPx - c.topPx;
      return Math.atan2(b, y) * (180 / Math.PI);
    })();
    this.container.style.left = t.leftPx + "px", this.container.style.top = t.topPx + "px", this.container.style.transformOrigin = "center", this.container.style.transform = `scale(${o})`, n && (this.container.style.transform += ` rotate(${n}deg)`);
  }
  addResizeListener() {
    const e = this.five.getElement();
    if (e) {
      const { observe: t, unobserve: o } = w(this.onCameraUpdate, e);
      t(), this.disposers.push(o);
    }
  }
}
function Q(...p) {
  return new R(...p);
}
export {
  R as LightTag,
  Q as tag
};
