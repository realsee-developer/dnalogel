var w = Object.defineProperty, b = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var p = (n, s, e) => s in n ? w(n, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[s] = e, l = (n, s) => {
  for (var e in s || (s = {}))
    I.call(s, e) && p(n, e, s[e]);
  if (f)
    for (var e of f(s))
      H.call(s, e) && p(n, e, s[e]);
  return n;
}, v = (n, s) => b(n, E(s));
var i = (n, s, e) => (p(n, typeof s != "symbol" ? s + "" : s, e), e);
import { PointSelectorHelper as y } from "./utils/PointSelectorHelper.js";
import { isTouchDevice as m } from "../../isTouchDevice.js";
import * as d from "three";
import { Subscribe as M } from "../../Subscribe.js";
import { getIntersectByRaycaster as T, getVirtualIntersectByRaycaster as L } from "../../five/getPosition.js";
import { getRaycasterByNdcPosition as N } from "../../five/getRaycasterByNdcPosition.js";
import { CURSOR_NOT_ALLOW_URL as P } from "./utils/contents.js";
const F = new d.Vector3(), u = () => !1;
class V extends M {
  constructor(e, t) {
    var a, o, c;
    super();
    i(this, "_cursorError", !1);
    i(this, "actionIfNoModelUnderMouse", "virtualPoint");
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
    i(this, "onTouchStart", (e) => {
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
    i(this, "onTouchMove", (e) => {
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
      var h, a;
      const t = N(this.five, e), r = T(this.five, t);
      if (r)
        return this.updatePointSelectorHelperIntersect(r), this.lastIntersection = r, !0;
      if (this.plane) {
        const o = t.ray.intersectPlane(this.plane, F);
        if (o) {
          const c = {
            distance: this.five.camera.position.distanceTo(o),
            point: o.clone(),
            object: new d.Object3D(),
            face: new d.Face3(0, 0, 0, this.plane.normal.clone()),
            raycaster: t,
            isVirtual: !0
          };
          return this.updatePointSelectorHelperIntersect(c), !0;
        }
      }
      if (this.actionIfNoModelUnderMouse === "lastPoint")
        return this.updatePointSelectorHelperIntersect(this.lastIntersection), !0;
      if (this.actionIfNoModelUnderMouse === "virtualPoint") {
        const o = L(t, (h = this.lastIntersection) == null ? void 0 : h.distance);
        return o.face = new d.Face3(0, 0, 0, (a = this.lastIntersection) == null ? void 0 : a.face.normal), o.isVirtual = !0, this.lastIntersection = o, this.updatePointSelectorHelperIntersect(o), !0;
      } else if (this.actionIfNoModelUnderMouse === "disable")
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
      let r = !1;
      if (typeof this.adherePoints == "function" && typeof this.adherePointsRadius == "number") {
        for (const h of this.adherePoints({ intersection: e, pointSelectorInstance: this }))
          if (h.distanceTo(e.point) < this.adherePointsRadius) {
            t.point = h.clone(), r = !0;
            break;
          }
      }
      this.pointSelectorHelper.updateWithIntersect(t, { emitEvent: !1 }), this.emit("intersectionUpdate", t, r);
    });
    i(this, "mousePositionToNdcPosition", (e) => {
      const t = this.five.getElement();
      if (!t)
        return null;
      const { top: r, left: h, width: a, height: o } = t.getBoundingClientRect(), { clientX: c, clientY: S } = e;
      return {
        x: (c - h) / a,
        y: 1 - (S - r) / o
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
    this.five = e, this.config = l(l({}, this.config), t), this.actionIfNoModelUnderMouse = (a = t == null ? void 0 : t.actionIfNoModelUnderMouse) != null ? a : "virtualPoint";
    const r = (o = t == null ? void 0 : t.mode) != null ? o : "auto";
    r === "auto" ? this.mode = m ? "fixed" : "cursor" : this.mode = r;
    const h = {
      autoFixPCPosition: this.mode === "cursor",
      initialPosition: this.mode === "fixed" ? { left: "35%", top: "20%" } : void 0
    };
    this.pointSelectorHelper = new y(this.five, v(l({}, t == null ? void 0 : t.helper), {
      magnifierParams: l(l({}, h), (c = t == null ? void 0 : t.helper) == null ? void 0 : c.magnifierParams)
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
    this.mode === "cursor" ? (this.five.on("wantsMoveToPano", u), this.five.on("wantsChangeMode", u), this.five.on("wantsTapGesture", u), m ? (e.addEventListener("touchstart", this.onTouchStart, { passive: !0 }), e.addEventListener("touchmove", this.onTouchMove), e.addEventListener("touchend", this.onTouchEnd)) : (e.addEventListener("click", this.onClick), e.addEventListener("mousemove", this.updateByMousePosition), e.addEventListener("wheel", this.onMouseWheel), e.addEventListener("mouseenter", this.onEnter), e.addEventListener("mouseout", this.onLeave)), this.five.on("wantsPanGesture", this.onFiveWantsPanGesture)) : this.mode === "fixed" && (this.five.on("panoArrived", this.renderScreenCenter), this.five.on("panGesture", this.renderScreenCenter), this.five.on("interiaPan", this.renderScreenCenter), this.renderScreenCenter(), this.pointSelectorHelper.show()), this.pointSelectorHelper.hooks.on("intersectionUpdate", this.emitIntersectionUpdate), this.lastFiveHelperVisible = this.five.helperVisible, this.five.helperVisible = !1, this.emit("enable");
  }
  disable() {
    if (!this.enabled)
      return;
    this.enabled = !1, this.pointSelectorHelper.disable(), this.five.getElement().style.cursor = "";
    const e = this.five.getElement();
    this.five.off("wantsPanGesture", this.onFiveWantsPanGesture), this.five.off("wantsMoveToPano", u), this.five.off("wantsChangeMode", u), this.five.off("wantsTapGesture", u), this.five.helperVisible = this.lastFiveHelperVisible, e == null || e.removeEventListener("touchstart", this.onTouchStart), e == null || e.removeEventListener("touchmove", this.onTouchMove), e == null || e.removeEventListener("touchend", this.onTouchEnd), e == null || e.removeEventListener("click", this.onClick), e == null || e.removeEventListener("mousemove", this.updateByMousePosition), e == null || e.removeEventListener("wheel", this.onMouseWheel), e == null || e.removeEventListener("mouseenter", this.onEnter), e == null || e.removeEventListener("mouseout", this.onLeave), this.five.off("panoArrived", this.renderScreenCenter), this.five.off("panGesture", this.renderScreenCenter), this.five.off("interiaPan", this.renderScreenCenter), this.pointSelectorHelper.hooks.off("intersectionUpdate", this.emitIntersectionUpdate), this.emit("disable");
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
