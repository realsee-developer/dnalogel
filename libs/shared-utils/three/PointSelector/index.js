var w = Object.defineProperty, I = Object.defineProperties;
var S = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
var f = (h, s, e) => s in h ? w(h, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[s] = e, l = (h, s) => {
  for (var e in s || (s = {}))
    b.call(s, e) && f(h, e, s[e]);
  if (m)
    for (var e of m(s))
      E.call(s, e) && f(h, e, s[e]);
  return h;
}, v = (h, s) => I(h, S(s));
var i = (h, s, e) => (f(h, typeof s != "symbol" ? s + "" : s, e), e);
import { PointSelectorHelper as H } from "./utils/PointSelectorHelper.js";
import { isTouchDevice as y } from "../../isTouchDevice.js";
import * as p from "three";
import { Subscribe as M } from "../../Subscribe.js";
import { getIntersectByRaycaster as D, getVirtualIntersectByRaycaster as L } from "../../five/getPosition.js";
import { getRaycasterByNdcPosition as T } from "../../five/getRaycasterByNdcPosition.js";
import { CURSOR_NOT_ALLOW_URL as P } from "./utils/contents.js";
const N = new p.Vector3(), d = () => !1;
class O extends M {
  constructor(e, t) {
    var a, c, r, u;
    super();
    i(this, "_cursorError", !1);
    i(this, "actionIfNoIntersection", "virtualPoint");
    i(this, "plane");
    i(this, "pointSelectorHelper");
    /** @deprecated directly use `pointSelector.on/off` instead */
    i(this, "hook", this);
    i(this, "five");
    i(this, "_outOfFive", !1);
    i(this, "_enabled", !1);
    i(this, "mode");
    /** 长按屏幕的动作触发后为true，手指抬起后为false */
    i(this, "pressDown", !1);
    /** 一组吸附的点，光标靠近这些点时，会将helper以及放大镜的位置设置为这些点 */
    i(this, "adherePoints");
    /** 吸附点的半径 */
    i(this, "adherePointsRadius", 0.1);
    /** 有值时表明处于按压检查阶段 */
    i(this, "setPressDown");
    i(this, "lastFiveHelperVisible");
    i(this, "lastIntersection");
    i(this, "mousePosition");
    i(this, "_mouseDownInfo");
    i(this, "_touchStartInfo");
    i(this, "config", {});
    /**
     * @description: 主动触发一次选点
     * @return: select 是否成功
     */
    i(this, "select", (e) => {
      e && this.updatePointSelectorHelperIntersect(e);
      const t = this.emit("wantsSelect", this.position);
      return t || (this.pointSelectorHelper.hide(), this.emit("select", this.position), console.debug(this.position)), !t;
    });
    i(this, "onMouseWheel", (e) => {
      this.updateByMousePosition(e);
      const t = () => this.updateByMousePosition();
      this.five.off("render.prepare", t), this.five.on("render.prepare", t), setTimeout(() => {
        this.five.off("render.prepare", t);
      }, 200);
    });
    /**
     * @description: 鼠标进入five canvas时
     */
    i(this, "onEnter", () => {
      this.cursorError || this.pointSelectorHelper.show(), this.outOfFive = !1, this.emit("intersectionUpdate", this.position);
    });
    /**
     * @description: 鼠标离开five canvas时
     */
    i(this, "onLeave", () => {
      this.pointSelectorHelper.hide(), this.outOfFive = !0, this.emit("intersectionUpdate", null);
    });
    i(this, "onClick", () => {
      this.select();
    });
    i(this, "onMouseDown", (e) => {
      this._mouseDownInfo = {
        clientX: e.clientX,
        clientY: e.clientY,
        timestamp: performance.now()
      };
    });
    i(this, "onMouseUp", (e) => {
      if (!this._mouseDownInfo)
        return;
      const { clientX: t, clientY: o, timestamp: n } = this._mouseDownInfo;
      Math.abs(e.clientX - t) < 2 && Math.abs(e.clientY - o) < 2 && performance.now() - n < 500 ? this.select() : this._mouseDownInfo = null;
    });
    i(this, "onTouchStart", (e) => {
      this._touchStartInfo = {
        clientX: e.touches[0].clientX,
        clientY: e.touches[0].clientY,
        timestamp: performance.now()
      }, this.setPressDown = setTimeout(() => {
        if (this.setPressDown = void 0, this.mousePosition = {
          clientX: e.touches[0].clientX,
          clientY: e.touches[0].clientY
        }, !this.mouseNdcPosition)
          return;
        const t = this.updateByNdcPosition(this.mouseNdcPosition);
        this.pressDown = t;
      }, 200);
    });
    i(this, "onTouchMove", (e) => {
      if (this.setPressDown) {
        let t = !1;
        if (this._touchStartInfo) {
          const { clientX: o, clientY: n } = this._touchStartInfo;
          (Math.abs(e.touches[0].clientX - o) > 2 || Math.abs(e.touches[0].clientY - n) > 2) && (t = !0);
        }
        t && (clearTimeout(this.setPressDown), this.setPressDown = void 0);
        return;
      }
      if (this.pressDown) {
        if (this.mousePosition = {
          clientX: e.touches[0].clientX,
          clientY: e.touches[0].clientY
        }, !this.mouseNdcPosition)
          return;
        this.updateByNdcPosition(this.mouseNdcPosition);
      }
    });
    i(this, "onTouchEnd", (e) => {
      if (this.setPressDown) {
        clearTimeout(this.setPressDown), this.setPressDown = void 0;
        return;
      }
      this.pressDown && (setTimeout(() => {
        this.pressDown = !1;
      }, 100), this.select());
    });
    i(this, "updateByMousePosition", (e) => {
      this.five.getElement() && (e && (this.mousePosition = e), this.updateByNdcPosition(this.mouseNdcPosition));
    });
    /**
     * @description: 根据鼠标位置计算焦点位置并更新
     */
    i(this, "updateByNdcPosition", (e) => {
      var n, a, c;
      const t = T(this.five, e), o = D(this.five, t);
      if (o)
        return this.updatePointSelectorHelperIntersect(o), this.lastIntersection = o, !0;
      if (this.plane) {
        const r = t.ray.intersectPlane(this.plane, N);
        if (r) {
          const u = {
            distance: this.five.camera.position.distanceTo(r),
            point: r.clone(),
            object: new p.Object3D(),
            face: new p.Face3(0, 0, 0, this.plane.normal.clone()),
            raycaster: t,
            isVirtual: !0
          };
          return this.updatePointSelectorHelperIntersect(u), !0;
        }
      }
      if (this.actionIfNoIntersection === "lastPoint")
        return this.updatePointSelectorHelperIntersect(this.lastIntersection), !0;
      if (this.actionIfNoIntersection === "virtualPoint") {
        const r = L(t, (n = this.lastIntersection) == null ? void 0 : n.distance);
        return r.face = new p.Face3(0, 0, 0, (c = (a = this.lastIntersection) == null ? void 0 : a.face) == null ? void 0 : c.normal), r.isVirtual = !0, this.lastIntersection = r, this.updatePointSelectorHelperIntersect(r), !0;
      } else if (this.actionIfNoIntersection === "disable")
        return this.updatePointSelectorHelperIntersect(null), !1;
    });
    /**
     * @description: 更新 pointSelectorHelper 的焦点位置
     */
    i(this, "updatePointSelectorHelperIntersect", (e) => {
      if (!e) {
        this.onLeave(), this.five.getElement().style.cursor = P;
        return;
      }
      this.onEnter(), this.cursorError || (this.five.getElement().style.cursor = "");
      const t = l({}, e);
      let o = !1;
      if (typeof this.adherePoints == "function" && typeof this.adherePointsRadius == "number") {
        for (const n of this.adherePoints({ intersection: e, pointSelectorInstance: this }))
          if (n.distanceTo(e.point) < this.adherePointsRadius) {
            t.point = n.clone(), o = !0;
            break;
          }
      }
      this.pointSelectorHelper.updateWithIntersect(t, { emitEvent: !1 }), this.emit("intersectionUpdate", t, o);
    });
    i(this, "mousePositionToNdcPosition", (e) => {
      const t = this.five.getElement();
      if (!t)
        return null;
      const { top: o, left: n, width: a, height: c } = t.getBoundingClientRect(), { clientX: r, clientY: u } = e;
      return {
        x: (r - n) / a,
        y: 1 - (u - o) / c
      };
    });
    i(this, "onFiveWantsPanGesture", () => {
      if (this.pressDown)
        return !1;
    });
    i(this, "renderScreenCenter", () => {
      this.updateByNdcPosition({ x: 0.5, y: 0.5 });
    });
    i(this, "emitIntersectionUpdate", (e) => {
      this.emit("intersectionUpdate", e);
    });
    this.five = e, this.config = l(l({}, this.config), t), this.actionIfNoIntersection = (c = (a = t == null ? void 0 : t.actionIfNoIntersection) != null ? a : t == null ? void 0 : t.actionIfNoModelUnderMouse) != null ? c : "virtualPoint";
    const o = (r = t == null ? void 0 : t.mode) != null ? r : "auto";
    o === "auto" ? this.mode = y ? "fixed" : "cursor" : this.mode = o;
    const n = {
      autoFixPCPosition: this.mode === "cursor",
      initialPosition: this.mode === "fixed" ? { left: "35%", top: "20%" } : void 0
    };
    this.pointSelectorHelper = new H(this.five, v(l({}, t == null ? void 0 : t.helper), {
      magnifierParams: l(l({}, n), (u = t == null ? void 0 : t.helper) == null ? void 0 : u.magnifierParams)
    })), this.pointSelectorHelper.hide();
  }
  get position() {
    return this.outOfFive ? null : this.pointSelectorHelper.position;
  }
  /**
   * @description: 不在 five canvas 上时为 true
   */
  get outOfFive() {
    return this._outOfFive;
  }
  get enabled() {
    return this._enabled;
  }
  get cursorError() {
    return this._cursorError;
  }
  set cursorError(e) {
    this._cursorError = e, this.five.getElement().style.cursor = e ? P : "", e ? this.pointSelectorHelper.hide() : this.pointSelectorHelper.show();
  }
  set outOfFive(e) {
    this._outOfFive = e;
  }
  set enabled(e) {
    this._enabled = e;
  }
  get mouseNdcPosition() {
    return this.mousePosition ? this.mousePositionToNdcPosition(this.mousePosition) : null;
  }
  enable() {
    if (this.enabled)
      return;
    this.enabled = !0, this.outOfFive = !1, this.pointSelectorHelper.enable(), this.pointSelectorHelper.hide();
    const e = this.five.getElement();
    if (!e)
      throw new Error("five element not found");
    this.mode === "cursor" ? (this.five.on("wantsMoveToPano", d), this.five.on("wantsChangeMode", d), this.five.on("wantsTapGesture", d), e.addEventListener("touchstart", this.onTouchStart, { passive: !0 }), e.addEventListener("touchmove", this.onTouchMove), e.addEventListener("touchend", this.onTouchEnd), e.addEventListener("mousedown", this.onMouseDown), e.addEventListener("mouseup", this.onMouseUp), e.addEventListener("mousemove", this.updateByMousePosition), e.addEventListener("wheel", this.onMouseWheel), e.addEventListener("mouseenter", this.onEnter), e.addEventListener("mouseout", this.onLeave), this.five.on("wantsPanGesture", this.onFiveWantsPanGesture)) : this.mode === "fixed" && (this.five.on("panoArrived", this.renderScreenCenter), this.five.on("panGesture", this.renderScreenCenter), this.five.on("interiaPan", this.renderScreenCenter), this.renderScreenCenter(), this.pointSelectorHelper.show()), this.pointSelectorHelper.hooks.on("intersectionUpdate", this.emitIntersectionUpdate), this.lastFiveHelperVisible = this.five.helperVisible, this.five.helperVisible = !1, this.emit("enable");
  }
  disable() {
    if (!this.enabled)
      return;
    this.enabled = !1, this.pointSelectorHelper.disable(), this.five.getElement().style.cursor = "";
    const e = this.five.getElement();
    this.five.off("wantsPanGesture", this.onFiveWantsPanGesture), this.five.off("wantsMoveToPano", d), this.five.off("wantsChangeMode", d), this.five.off("wantsTapGesture", d), this.five.helperVisible = this.lastFiveHelperVisible, e == null || e.removeEventListener("touchstart", this.onTouchStart), e == null || e.removeEventListener("touchmove", this.onTouchMove), e == null || e.removeEventListener("touchend", this.onTouchEnd), e == null || e.removeEventListener("mousedown", this.onMouseDown), e == null || e.removeEventListener("mouseup", this.onMouseUp), e == null || e.removeEventListener("mousemove", this.updateByMousePosition), e == null || e.removeEventListener("wheel", this.onMouseWheel), e == null || e.removeEventListener("mouseenter", this.onEnter), e == null || e.removeEventListener("mouseout", this.onLeave), this.five.off("panoArrived", this.renderScreenCenter), this.five.off("panGesture", this.renderScreenCenter), this.five.off("interiaPan", this.renderScreenCenter), this.pointSelectorHelper.hooks.off("intersectionUpdate", this.emitIntersectionUpdate), this.emit("disable");
  }
  dispose() {
    this.disable(), this.pointSelectorHelper.dispose();
  }
  setAdherePoints(e, t) {
    e ? typeof e == "function" ? this.adherePoints = e : this.adherePoints = () => e : this.adherePoints = null, typeof t == "number" && (this.adherePointsRadius = t);
  }
}
export {
  O as PointSelector
};
