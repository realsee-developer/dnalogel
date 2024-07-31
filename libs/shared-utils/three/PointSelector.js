var v = Object.defineProperty, S = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var f = (o, s, e) => s in o ? v(o, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[s] = e, d = (o, s) => {
  for (var e in s || (s = {}))
    b.call(s, e) && f(o, e, s[e]);
  if (c)
    for (var e of c(s))
      w.call(s, e) && f(o, e, s[e]);
  return o;
}, u = (o, s) => S(o, H(s));
var i = (o, s, e) => (f(o, typeof s != "symbol" ? s + "" : s, e), e);
import { PointSelectorHelper as E } from "./PointSelectorHelper.js";
import { isTouchDevice as y } from "../isTouchDevice.js";
import N from "hammerjs";
import { Subscribe as F } from "../Subscribe.js";
import { getIntersectByNdcPosition as p } from "../five/getPosition.js";
const a = () => !1;
class U extends F {
  constructor(e, t) {
    var r, l;
    super();
    /**
     * @description: 不在 five canvas 上时为 true
     */
    i(this, "outOfFive", !1);
    i(this, "enabled", !1);
    i(this, "pointSelectorHelper");
    /** @deprecated directly use `pointSelector.on/off` instead */
    i(this, "hook", this);
    i(this, "five");
    i(this, "hammer");
    i(this, "mode");
    /** 长按屏幕的动作触发后为true，手指抬起后为false */
    i(this, "pressDown", !1);
    /** 一组吸附的点，光标靠近这些点时，会将helper以及放大镜的位置设置为这些点 */
    i(this, "adherePoints");
    /** 吸附点的半径 */
    i(this, "adherePointsRadius", 0.1);
    i(this, "lastFiveHelperVisible");
    i(this, "mousePosition");
    /**
     * @description: 主动触发一次选点
     * @return: select 是否成功
     */
    i(this, "select", (e) => {
      e && this.updatePointSelectorHelperIntersect(e);
      const t = this.emit("wantsSelect", this.position);
      return t || (this.pointSelectorHelper.hide(), this.emit("select", this.position), console.debug(this.position)), !t;
    });
    /**
     * @description: 鼠标进入five canvas时
     */
    i(this, "onEnter", () => {
      this.pointSelectorHelper.show(), this.outOfFive = !1, this.emit("intersectionUpdate", this.position);
    });
    /**
     * @description: 鼠标离开five canvas时
     */
    i(this, "onLeave", () => {
      this.pointSelectorHelper.hide(), this.outOfFive = !0, this.emit("intersectionUpdate", null);
    });
    i(this, "onTap", (e) => {
      if (e != null && e.center && (this.mousePosition = {
        clientX: e.center.x,
        clientY: e.center.y
      }), !this.mouseNdcPosition)
        return;
      const t = p(this.five, this.mouseNdcPosition);
      t != null && t.face && this.select(t);
    });
    /**
     * 1. 如果之前没有长按行为「即没有长按点时」-> 滑动全景
     * 2. 如果有长按点，把长按点位置更新为当前位置
     */
    i(this, "onPan", (e) => {
      if (!this.pressDown || (e != null && e.center && (this.mousePosition = {
        clientX: e.center.x,
        clientY: e.center.y
      }), !this.mouseNdcPosition))
        return;
      const t = p(this.five, this.mouseNdcPosition);
      t != null && t.face && this.updatePointSelectorHelperIntersect(t);
    });
    /**
     * @description: 长按屏幕后，更新长按点的位置
     */
    i(this, "onPress", (e) => {
      if (e != null && e.center && (this.mousePosition = {
        clientX: e.center.x,
        clientY: e.center.y
      }), !this.mouseNdcPosition)
        return;
      const t = p(this.five, this.mouseNdcPosition);
      t != null && t.face && (this.pressDown = !0, this.updatePointSelectorHelperIntersect(t));
    });
    /**
     * @description: 手指抬起后，重置pressDown状态
     */
    i(this, "onPanEnd", () => {
      this.pressDown && (this.pressDown = !1, this.select());
    });
    i(this, "updateByMousePosition", (e) => {
      this.five.getElement() && (this.mousePosition = e, this.updateByNdcPosition(this.mouseNdcPosition));
    });
    /**
     * @description: 根据鼠标位置更新helper位置
     */
    i(this, "updateByNdcPosition", (e) => {
      const t = p(this.five, e);
      this.updatePointSelectorHelperIntersect(t);
    });
    /**
     * @description: 更新 pointSelectorHelper 的焦点位置
     */
    i(this, "updatePointSelectorHelperIntersect", (e) => {
      var h;
      this.pointSelectorHelper.show();
      const t = d({}, e);
      let n = !1;
      if (((h = this.adherePoints) == null ? void 0 : h.length) > 0 && typeof this.adherePointsRadius == "number") {
        for (const r of this.adherePoints(e))
          if (r.distanceTo(e.point) < this.adherePointsRadius) {
            t.point = r.clone(), n = !0;
            break;
          }
      }
      this.pointSelectorHelper.updateWithIntersect(t, { emitEvent: !1 }), this.emit("intersectionUpdate", t, n);
    });
    i(this, "mousePositionToNdcPosition", (e) => {
      const t = this.five.getElement();
      if (!t)
        return null;
      const { top: n, left: h, width: r, height: l } = t.getBoundingClientRect(), { clientX: m, clientY: P } = e;
      return {
        x: (m - h) / r,
        y: 1 - (P - n) / l
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
    this.five = e;
    const n = (r = t == null ? void 0 : t.mode) != null ? r : "auto";
    n === "auto" ? this.mode = y ? "fixed" : "cursor" : this.mode = n;
    const h = {
      autoFixPCPosition: this.mode === "cursor",
      initialPosition: this.mode === "fixed" ? { left: "35%", top: "20%" } : void 0
    };
    this.pointSelectorHelper = new E(e, u(d({}, t == null ? void 0 : t.pointSelectorHelperParams), {
      magnifierParams: d(d({}, h), (l = t == null ? void 0 : t.pointSelectorHelperParams) == null ? void 0 : l.magnifierParams)
    })), this.pointSelectorHelper.hide();
  }
  get position() {
    return this.outOfFive ? null : this.pointSelectorHelper.position;
  }
  get mouseNdcPosition() {
    return this.mousePosition ? this.mousePositionToNdcPosition(this.mousePosition) : null;
  }
  enable() {
    if (this.enabled)
      return;
    this.enabled = !0, this.outOfFive = !1, this.pointSelectorHelper.enable();
    const e = this.five.getElement();
    if (!e)
      throw new Error("five element not found");
    this.hammer || (this.hammer = new N(e)), this.mode === "cursor" ? (this.five.on("wantsPanGesture", this.onFiveWantsPanGesture), this.five.on("wantsMoveToPano", a), this.five.on("wantsChangeMode", a), this.five.on("wantsTapGesture", a), e.addEventListener("mousemove", this.updateByMousePosition), e.addEventListener("mouseenter", this.onEnter), e.addEventListener("mouseout", this.onLeave), this.hammer.on("tap", this.onTap), this.hammer.on("pan", this.onPan), this.hammer.on("press", this.onPress), this.hammer.on("panend", this.onPanEnd)) : this.mode === "fixed" && (this.five.on("panoArrived", this.renderScreenCenter), this.five.on("panGesture", this.renderScreenCenter), this.five.on("interiaPan", this.renderScreenCenter), this.renderScreenCenter(), this.pointSelectorHelper.show()), this.pointSelectorHelper.hooks.on("intersectionUpdate", this.emitIntersectionUpdate), this.lastFiveHelperVisible = this.five.helperVisible, this.five.helperVisible = !1, this.emit("enable");
  }
  disable() {
    if (!this.enabled)
      return;
    this.enabled = !1, this.pointSelectorHelper.disable();
    const e = this.five.getElement();
    this.five.off("wantsPanGesture", this.onFiveWantsPanGesture), this.five.off("wantsMoveToPano", a), this.five.off("wantsChangeMode", a), this.five.off("wantsTapGesture", a), this.five.helperVisible = this.lastFiveHelperVisible, e == null || e.removeEventListener("mousemove", this.updateByMousePosition), e == null || e.removeEventListener("mouseenter", this.onEnter), e == null || e.removeEventListener("mouseout", this.onLeave), this.hammer.off("tap", this.onTap), this.hammer.off("pan", this.onPan), this.hammer.off("press", this.onPress), this.hammer.off("panend", this.onPanEnd), this.five.off("panoArrived", this.renderScreenCenter), this.five.off("panGesture", this.renderScreenCenter), this.five.off("interiaPan", this.renderScreenCenter), this.pointSelectorHelper.hooks.off("intersectionUpdate", this.emitIntersectionUpdate), this.emit("disable");
  }
  dispose() {
    this.disable(), this.pointSelectorHelper.dispose();
  }
  setAdherePoints(e, t) {
    e ? typeof e == "function" ? this.adherePoints = e : this.adherePoints = () => e : this.adherePoints = null, typeof t == "number" && (this.adherePointsRadius = t);
  }
}
export {
  U as PointSelector
};
