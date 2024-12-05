var w = Object.defineProperty, S = Object.defineProperties;
var M = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var f = (r, i, e) => i in r ? w(r, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[i] = e, u = (r, i) => {
  for (var e in i || (i = {}))
    I.call(i, e) && f(r, e, i[e]);
  if (m)
    for (var e of m(i))
      b.call(i, e) && f(r, e, i[e]);
  return r;
}, v = (r, i) => S(r, M(i));
var s = (r, i, e) => (f(r, typeof i != "symbol" ? i + "" : i, e), e);
import { PointSelectorHelper as E } from "./utils/PointSelectorHelper.js";
import { isTouchDevice as H } from "../../isTouchDevice.js";
import * as d from "three";
import { Subscribe as y } from "../../Subscribe.js";
import { getIntersectByRaycaster as D, getVirtualIntersectByRaycaster as L } from "../../five/getPosition.js";
import { getRaycasterByNdcPosition as T } from "../../five/getRaycasterByNdcPosition.js";
import { CURSOR_NOT_ALLOW_URL as P } from "./utils/contents.js";
const N = new d.Vector3(), c = () => !1;
class V extends y {
  constructor(e, t) {
    var a, l, n;
    super();
    s(this, "_cursorError", !1);
    s(this, "actionIfNoModelUnderMouse", "virtualPoint");
    s(this, "plane");
    s(this, "pointSelectorHelper");
    /** @deprecated directly use `pointSelector.on/off` instead */
    s(this, "hook", this);
    s(this, "five");
    s(this, "_outOfFive", !1);
    s(this, "_enabled", !1);
    s(this, "mode");
    /** 长按屏幕的动作触发后为true，手指抬起后为false */
    s(this, "pressDown", !1);
    /** 一组吸附的点，光标靠近这些点时，会将helper以及放大镜的位置设置为这些点 */
    s(this, "adherePoints");
    /** 吸附点的半径 */
    s(this, "adherePointsRadius", 0.1);
    /** 有值时表明处于按压检查阶段 */
    s(this, "setPressDown");
    s(this, "lastFiveHelperVisible");
    s(this, "lastIntersection");
    s(this, "mousePosition");
    s(this, "_mouseDownInfo");
    s(this, "config", {});
    /**
     * @description: 主动触发一次选点
     * @return: select 是否成功
     */
    s(this, "select", (e) => {
      e && this.updatePointSelectorHelperIntersect(e);
      const t = this.emit("wantsSelect", this.position);
      return t || (this.pointSelectorHelper.hide(), this.emit("select", this.position), console.debug(this.position)), !t;
    });
    s(this, "onMouseWheel", (e) => {
      this.updateByMousePosition(e);
      const t = () => this.updateByMousePosition();
      this.five.off("render.prepare", t), this.five.on("render.prepare", t), setTimeout(() => {
        this.five.off("render.prepare", t);
      }, 200);
    });
    /**
     * @description: 鼠标进入five canvas时
     */
    s(this, "onEnter", () => {
      this.cursorError || this.pointSelectorHelper.show(), this.outOfFive = !1, this.emit("intersectionUpdate", this.position);
    });
    /**
     * @description: 鼠标离开five canvas时
     */
    s(this, "onLeave", () => {
      this.pointSelectorHelper.hide(), this.outOfFive = !0, this.emit("intersectionUpdate", null);
    });
    s(this, "onClick", () => {
      this.select();
    });
    s(this, "onMouseDown", (e) => {
      this._mouseDownInfo = {
        clientX: e.clientX,
        clientY: e.clientY,
        timestamp: performance.now()
      };
    });
    s(this, "onMouseUp", (e) => {
      if (!this._mouseDownInfo)
        return;
      const { clientX: t, clientY: o, timestamp: h } = this._mouseDownInfo;
      Math.abs(e.clientX - t) < 2 && Math.abs(e.clientY - o) < 2 && performance.now() - h < 500 ? this.select() : this._mouseDownInfo = null;
    });
    s(this, "onTouchStart", (e) => {
      this.setPressDown = setTimeout(() => {
        if (this.setPressDown = void 0, this.mousePosition = {
          clientX: e.touches[0].clientX,
          clientY: e.touches[0].clientY
        }, !this.mouseNdcPosition)
          return;
        const t = this.updateByNdcPosition(this.mouseNdcPosition);
        this.pressDown = t;
      }, 300);
    });
    s(this, "onTouchMove", (e) => {
      if (this.setPressDown) {
        clearTimeout(this.setPressDown), this.setPressDown = void 0;
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
    s(this, "onTouchEnd", (e) => {
      if (this.setPressDown) {
        clearTimeout(this.setPressDown), this.setPressDown = void 0;
        return;
      }
      this.pressDown && (setTimeout(() => {
        this.pressDown = !1;
      }, 100), this.select());
    });
    s(this, "updateByMousePosition", (e) => {
      this.five.getElement() && (e && (this.mousePosition = e), this.updateByNdcPosition(this.mouseNdcPosition));
    });
    /**
     * @description: 根据鼠标位置计算焦点位置并更新
     */
    s(this, "updateByNdcPosition", (e) => {
      var h, a, l;
      const t = T(this.five, e), o = D(this.five, t);
      if (o)
        return this.updatePointSelectorHelperIntersect(o), this.lastIntersection = o, !0;
      if (this.plane) {
        const n = t.ray.intersectPlane(this.plane, N);
        if (n) {
          const p = {
            distance: this.five.camera.position.distanceTo(n),
            point: n.clone(),
            object: new d.Object3D(),
            face: new d.Face3(0, 0, 0, this.plane.normal.clone()),
            raycaster: t,
            isVirtual: !0
          };
          return this.updatePointSelectorHelperIntersect(p), !0;
        }
      }
      if (this.actionIfNoModelUnderMouse === "lastPoint")
        return this.updatePointSelectorHelperIntersect(this.lastIntersection), !0;
      if (this.actionIfNoModelUnderMouse === "virtualPoint") {
        const n = L(t, (h = this.lastIntersection) == null ? void 0 : h.distance);
        return n.face = new d.Face3(0, 0, 0, (l = (a = this.lastIntersection) == null ? void 0 : a.face) == null ? void 0 : l.normal), n.isVirtual = !0, this.lastIntersection = n, this.updatePointSelectorHelperIntersect(n), !0;
      } else if (this.actionIfNoModelUnderMouse === "disable")
        return this.updatePointSelectorHelperIntersect(null), !1;
    });
    /**
     * @description: 更新 pointSelectorHelper 的焦点位置
     */
    s(this, "updatePointSelectorHelperIntersect", (e) => {
      if (!e) {
        this.onLeave(), this.five.getElement().style.cursor = P;
        return;
      }
      this.onEnter(), this.cursorError || (this.five.getElement().style.cursor = "");
      const t = u({}, e);
      let o = !1;
      if (typeof this.adherePoints == "function" && typeof this.adherePointsRadius == "number") {
        for (const h of this.adherePoints({ intersection: e, pointSelectorInstance: this }))
          if (h.distanceTo(e.point) < this.adherePointsRadius) {
            t.point = h.clone(), o = !0;
            break;
          }
      }
      this.pointSelectorHelper.updateWithIntersect(t, { emitEvent: !1 }), this.emit("intersectionUpdate", t, o);
    });
    s(this, "mousePositionToNdcPosition", (e) => {
      const t = this.five.getElement();
      if (!t)
        return null;
      const { top: o, left: h, width: a, height: l } = t.getBoundingClientRect(), { clientX: n, clientY: p } = e;
      return {
        x: (n - h) / a,
        y: 1 - (p - o) / l
      };
    });
    s(this, "onFiveWantsPanGesture", () => {
      if (this.pressDown)
        return !1;
    });
    s(this, "renderScreenCenter", () => {
      this.updateByNdcPosition({ x: 0.5, y: 0.5 });
    });
    s(this, "emitIntersectionUpdate", (e) => {
      this.emit("intersectionUpdate", e);
    });
    this.five = e, this.config = u(u({}, this.config), t), this.actionIfNoModelUnderMouse = (a = t == null ? void 0 : t.actionIfNoModelUnderMouse) != null ? a : "virtualPoint";
    const o = (l = t == null ? void 0 : t.mode) != null ? l : "auto";
    o === "auto" ? this.mode = H ? "fixed" : "cursor" : this.mode = o;
    const h = {
      autoFixPCPosition: this.mode === "cursor",
      initialPosition: this.mode === "fixed" ? { left: "35%", top: "20%" } : void 0
    };
    this.pointSelectorHelper = new E(this.five, v(u({}, t == null ? void 0 : t.helper), {
      magnifierParams: u(u({}, h), (n = t == null ? void 0 : t.helper) == null ? void 0 : n.magnifierParams)
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
    this.mode === "cursor" ? (this.five.on("wantsMoveToPano", c), this.five.on("wantsChangeMode", c), this.five.on("wantsTapGesture", c), e.addEventListener("touchstart", this.onTouchStart, { passive: !0 }), e.addEventListener("touchmove", this.onTouchMove), e.addEventListener("touchend", this.onTouchEnd), e.addEventListener("mousedown", this.onMouseDown), e.addEventListener("mouseup", this.onMouseUp), e.addEventListener("mousemove", this.updateByMousePosition), e.addEventListener("wheel", this.onMouseWheel), e.addEventListener("mouseenter", this.onEnter), e.addEventListener("mouseout", this.onLeave), this.five.on("wantsPanGesture", this.onFiveWantsPanGesture)) : this.mode === "fixed" && (this.five.on("panoArrived", this.renderScreenCenter), this.five.on("panGesture", this.renderScreenCenter), this.five.on("interiaPan", this.renderScreenCenter), this.renderScreenCenter(), this.pointSelectorHelper.show()), this.pointSelectorHelper.hooks.on("intersectionUpdate", this.emitIntersectionUpdate), this.lastFiveHelperVisible = this.five.helperVisible, this.five.helperVisible = !1, this.emit("enable");
  }
  disable() {
    if (!this.enabled)
      return;
    this.enabled = !1, this.pointSelectorHelper.disable(), this.five.getElement().style.cursor = "";
    const e = this.five.getElement();
    this.five.off("wantsPanGesture", this.onFiveWantsPanGesture), this.five.off("wantsMoveToPano", c), this.five.off("wantsChangeMode", c), this.five.off("wantsTapGesture", c), this.five.helperVisible = this.lastFiveHelperVisible, e == null || e.removeEventListener("touchstart", this.onTouchStart), e == null || e.removeEventListener("touchmove", this.onTouchMove), e == null || e.removeEventListener("touchend", this.onTouchEnd), e == null || e.removeEventListener("mousedown", this.onMouseDown), e == null || e.removeEventListener("mouseup", this.onMouseUp), e == null || e.removeEventListener("mousemove", this.updateByMousePosition), e == null || e.removeEventListener("wheel", this.onMouseWheel), e == null || e.removeEventListener("mouseenter", this.onEnter), e == null || e.removeEventListener("mouseout", this.onLeave), this.five.off("panoArrived", this.renderScreenCenter), this.five.off("panGesture", this.renderScreenCenter), this.five.off("interiaPan", this.renderScreenCenter), this.pointSelectorHelper.hooks.off("intersectionUpdate", this.emitIntersectionUpdate), this.emit("disable");
  }
  dispose() {
    this.disable(), this.pointSelectorHelper.dispose();
  }
  setAdherePoints(e, t) {
    e ? typeof e == "function" ? this.adherePoints = e : this.adherePoints = () => e : this.adherePoints = null, typeof t == "number" && (this.adherePointsRadius = t);
  }
}
export {
  V as PointSelector
};
