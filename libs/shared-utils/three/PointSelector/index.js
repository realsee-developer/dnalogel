var R = Object.defineProperty, O = Object.defineProperties;
var X = Object.getOwnPropertyDescriptors;
var N = Object.getOwnPropertySymbols;
var Y = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var E = (l, h, e) => h in l ? R(l, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[h] = e, P = (l, h) => {
  for (var e in h || (h = {}))
    Y.call(h, e) && E(l, e, h[e]);
  if (N)
    for (var e of N(h))
      B.call(h, e) && E(l, e, h[e]);
  return l;
}, M = (l, h) => O(l, X(h));
var i = (l, h, e) => (E(l, typeof h != "symbol" ? h + "" : h, e), e);
import { PointSelectorHelper as C } from "./utils/PointSelectorHelper.js";
import { isTouchDevice as j } from "../../isTouchDevice.js";
import * as o from "three";
import { Subscribe as A } from "../../Subscribe.js";
import { getIntersectByRaycaster as k, getVirtualIntersectByRaycaster as g } from "../../five/getPosition.js";
import { getRaycasterByNdcPosition as G } from "../../five/getRaycasterByNdcPosition.js";
import { CURSOR_NOT_ALLOW_URL as V } from "./utils/contents.js";
import { rayOnLine as W } from "../../../Sculpt/utils/three/rayOnLine.js";
import { THREERaycaster as z } from "../core/Raycaster.js";
const _ = new o.Vector3(), w = () => !1;
class se extends A {
  constructor(e, t) {
    var u, d, n, f;
    super();
    i(this, "_cursorError", !1);
    i(this, "actionIfNoIntersection", "virtualPoint");
    i(this, "plane");
    /**
     * @description 结果区别：vertical: 射线和模型的交点在plane上的投影点；onlyPlane: 不论射线和模型是否有交点，都为射线和plane的焦点；onlyVirtual: 仅当射线和模型没有交点时，为射线和plane的焦点
     */
    i(this, "planeMode", "onlyVirtual");
    i(this, "pointSelectorHelper");
    i(this, "five");
    /** @deprecated directly use `pointSelector.on/off` instead */
    i(this, "hook", this);
    /**
     * @description 吸附功能总开关，方便临时的一键开启/关闭
     */
    i(this, "adhereEnabled", !0);
    /**
     * @description 吸附半径
     */
    i(this, "adhereRadius", 0.1);
    /**
     * @description 吸附面
     */
    i(this, "adherePlane", []);
    /**
     * @description 吸附线
     */
    i(this, "adhereLine", []);
    i(this, "_outOfFive", !1);
    i(this, "_enabled", !1);
    i(this, "mode");
    /** 长按屏幕的动作触发后为true，手指抬起后为false */
    i(this, "pressDown", !1);
    /** 一组吸附的点，光标靠近这些点时，会将helper以及放大镜的位置设置为这些点 */
    i(this, "adherePoints");
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
    i(this, "onKeyDown", (e) => {
      e.key === "Shift" && (this.adhereEnabled = !1);
    });
    i(this, "onKeyUp", (e) => {
      e.key === "Shift" && (this.adhereEnabled = !0);
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
      this.cursorError || this.pointSelectorHelper.show(), this.outOfFive = !1;
    });
    /**
     * @description: 鼠标进入five canvas时
     */
    i(this, "onMouseEnter", () => {
      this.onEnter(), this.emit("intersectionUpdate", this.position);
    });
    /**
     * @description: 鼠标离开five canvas时
     */
    i(this, "onMouseLeave", () => {
      this.pointSelectorHelper.hide(), this.outOfFive = !0, this.emit("intersectionUpdate", void 0);
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
      const { clientX: t, clientY: s, timestamp: c } = this._mouseDownInfo;
      Math.abs(e.clientX - t) < 2 && Math.abs(e.clientY - s) < 2 && performance.now() - c < 500 ? this.select() : this._mouseDownInfo = null;
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
          const { clientX: s, clientY: c } = this._touchStartInfo;
          (Math.abs(e.touches[0].clientX - s) > 2 || Math.abs(e.touches[0].clientY - c) > 2) && (t = !0);
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
      if (this.five.getElement()) {
        if (!e || (e == null ? void 0 : e.buttons) !== 0) {
          this.pointSelectorHelper.hide();
          return;
        } else
          this.pointSelectorHelper.show();
        e && (this.mousePosition = {
          clientX: e.clientX,
          clientY: e.clientY
        }), this.updateByNdcPosition(this.mouseNdcPosition);
      }
    });
    /**
     * @description: 根据鼠标位置计算焦点位置并更新
     */
    i(this, "updateByNdcPosition", (e) => {
      var c, u, d;
      const t = G(this.five, e);
      let s = k(this.five, t);
      if (s) {
        if (this.plane && this.planeMode === "vertical" && (s = M(P({}, s), {
          point: this.plane.projectPoint(s.point, new o.Vector3()),
          face: new o.Face3(0, 0, 0, this.plane.normal.clone()),
          originalPoint: s.point.clone()
        })), this.plane && this.planeMode === "onlyPlane") {
          const n = t.ray.intersectPlane(this.plane, _);
          if (!n)
            return !1;
          s = {
            distance: this.five.camera.position.distanceTo(n),
            point: n.clone(),
            originalPoint: s.point.clone(),
            face: new o.Face3(0, 0, 0, this.plane.normal.clone()),
            raycaster: t
          };
        }
        return this.updatePointSelectorHelperIntersect(s), this.lastIntersection = s, !0;
      }
      if (this.plane) {
        const n = t.ray.intersectPlane(this.plane, _);
        if (n) {
          const f = {
            distance: this.five.camera.position.distanceTo(n),
            point: n.clone(),
            object: new o.Object3D(),
            face: new o.Face3(0, 0, 0, this.plane.normal.clone()),
            raycaster: t,
            isVirtual: !0
          };
          return this.updatePointSelectorHelperIntersect(f), !0;
        }
      }
      if (this.actionIfNoIntersection === "lastPoint")
        return this.updatePointSelectorHelperIntersect(this.lastIntersection), !0;
      if (this.actionIfNoIntersection === "virtualPoint") {
        const n = g(t, (c = this.lastIntersection) == null ? void 0 : c.distance);
        return n.face = new o.Face3(0, 0, 0, (d = (u = this.lastIntersection) == null ? void 0 : u.face) == null ? void 0 : d.normal), n.isVirtual = !0, this.lastIntersection = n, this.updatePointSelectorHelperIntersect(n), !0;
      } else if (this.actionIfNoIntersection === "disable")
        return this.updatePointSelectorHelperIntersect(null), !1;
    });
    /**
     * @description: 更新 pointSelectorHelper 的焦点位置
     */
    i(this, "updatePointSelectorHelperIntersect", (e) => {
      var s, c, u, d, n, f, T, L;
      if (!e) {
        this.pointSelectorHelper.hide(), this.pointSelectorHelper.position = e, this.emit("intersectionUpdate", e), this.five.getElement().style.cursor = V;
        return;
      }
      this.onEnter(), this.cursorError || (this.five.getElement().style.cursor = "");
      const t = P({}, e);
      if (this.adhereEnabled && this.mouseNdcPosition && this.five.renderer) {
        const S = {
          x: this.mouseNdcPosition.x,
          y: 1 - this.mouseNdcPosition.y
        }, H = this.five.renderer.getSize(new o.Vector2());
        if (this.adhereEnabled && typeof this.adherePoints == "function" && typeof this.adhereRadius == "number") {
          for (const r of this.adherePlane) {
            const a = r.distanceToPoint(e.point);
            let p = r.projectPoint(e.point, new o.Vector3());
            (!this.plane || this.plane.distanceToPoint(p) < 0.01) && (p = (c = (s = this.plane) == null ? void 0 : s.projectPoint(p, new o.Vector3())) != null ? c : p, a < this.adhereRadius && (t.point = p.clone(), t.adherePoint = p.clone(), this.plane || (t.face = new o.Face3(0, 0, 0, r.normal.clone())), t.isAdsorbed = !0));
          }
          for (const r of this.adhereLine) {
            let a = r.closestPointToPoint(e.point, !1, new o.Vector3());
            if (a.distanceTo(e.point) < this.adhereRadius)
              (!this.plane || this.plane.distanceToPoint(a) < 0.01) && (a = (d = (u = this.plane) == null ? void 0 : u.projectPoint(a, new o.Vector3())) != null ? d : a, t.point = a.clone(), t.adhereLine = r.clone(), t.isAdsorbed = !0);
            else {
              const p = W({
                raycaster: new z(this.five.camera.position, e.point.clone().sub(this.five.camera.position).normalize()),
                line: r,
                clampToLine: !1
              }), v = p.clone().project(this.five.camera);
              if (v.z <= 1) {
                const y = {
                  x: (v.x + 1) / 2,
                  y: (1 - v.y) / 2
                }, b = {
                  x: Math.abs(y.x - S.x) * H.width,
                  y: Math.abs(y.y - S.y) * H.height
                };
                let m = p.clone();
                b.x < 10 && b.y < 10 && (!this.plane || this.plane.distanceToPoint(m) < 0.01) && (m = (f = (n = this.plane) == null ? void 0 : n.projectPoint(m, new o.Vector3())) != null ? f : m, t.point = m.clone(), t.adhereLine = r.clone(), t.isAdsorbed = !0);
              }
            }
          }
          for (const r of this.adherePoints({ intersection: e, pointSelectorInstance: this })) {
            const a = r instanceof o.Face3 ? new o.Vector3(r.a, r.b, r.c) : r;
            if (a.IsAlwaysVisible = r.IsAlwaysVisible, this.plane && this.plane.distanceToPoint(a) > 0.01)
              continue;
            if (a.distanceTo(e.point) < this.adhereRadius) {
              t.point = (L = (T = this.plane) == null ? void 0 : T.projectPoint(a, new o.Vector3())) != null ? L : a.clone(), !this.plane && r instanceof o.Face3 && (t.face = r), t.isAdsorbed = !0;
              break;
            } else {
              const v = a.clone().project(this.five.camera);
              if (v.z > 1)
                continue;
              const y = this.five.renderer.getSize(new o.Vector2()), b = {
                x: (v.x + 1) / 2,
                y: (1 - v.y) / 2
              }, m = {
                x: Math.abs(b.x - S.x) * y.width,
                y: Math.abs(b.y - S.y) * y.height
              };
              if (m.x < 10 && m.y < 10) {
                let I = !1;
                if (a.IsAlwaysVisible)
                  I = !0;
                else {
                  const D = new o.Raycaster();
                  D.setFromCamera(a.clone(), this.five.camera);
                  const F = this.five.model.intersectRaycaster(D, void 0, !0)[0], x = 0.1, U = this.five.camera.position.distanceTo(a);
                  F && F.distance < U + x && (I = !0);
                }
                if (I) {
                  t.point = a.clone(), !this.plane && r instanceof o.Face3 && (t.face = r), t.isAdsorbed = !0;
                  break;
                }
              }
            }
          }
        }
      }
      this.pointSelectorHelper.updateWithIntersect(t, { emitEvent: !1 }), this.emit("intersectionUpdate", t);
    });
    i(this, "mousePositionToNdcPosition", (e) => {
      const t = this.five.getElement();
      if (!t)
        return null;
      const { top: s, left: c, width: u, height: d } = t.getBoundingClientRect(), { clientX: n, clientY: f } = e;
      return {
        x: (n - c) / u,
        y: 1 - (f - s) / d
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
    this.five = e, this.config = P(P({}, this.config), t), this.actionIfNoIntersection = (d = (u = t == null ? void 0 : t.actionIfNoIntersection) != null ? u : t == null ? void 0 : t.actionIfNoModelUnderMouse) != null ? d : "virtualPoint";
    const s = (n = t == null ? void 0 : t.mode) != null ? n : "auto";
    s === "auto" ? this.mode = j ? "fixed" : "cursor" : this.mode = s;
    const c = {
      autoFixPCPosition: this.mode === "cursor",
      initialPosition: this.mode === "fixed" ? { left: "35%", top: "20%" } : void 0
    };
    this.pointSelectorHelper = new C(this.five, M(P({}, t == null ? void 0 : t.helper), {
      magnifierParams: P(P({}, c), (f = t == null ? void 0 : t.helper) == null ? void 0 : f.magnifierParams)
    })), this.pointSelectorHelper.hide();
  }
  get position() {
    if (!this.outOfFive)
      return this.pointSelectorHelper.position;
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
    this._cursorError = e, this.five.getElement().style.cursor = e ? V : "", e ? this.pointSelectorHelper.hide() : this.pointSelectorHelper.show();
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
    this.mode === "cursor" ? (this.five.on("wantsMoveToPano", w), this.five.on("wantsChangeMode", w), this.five.on("wantsTapGesture", w), e.addEventListener("touchstart", this.onTouchStart, { passive: !0 }), e.addEventListener("touchmove", this.onTouchMove), e.addEventListener("touchend", this.onTouchEnd), e.addEventListener("mousedown", this.onMouseDown), e.addEventListener("mouseup", this.onMouseUp), e.addEventListener("mousemove", this.updateByMousePosition), e.addEventListener("wheel", this.onMouseWheel), e.addEventListener("mouseenter", this.onMouseEnter), e.addEventListener("mouseout", this.onMouseLeave), this.five.on("wantsPanGesture", this.onFiveWantsPanGesture)) : this.mode === "fixed" && (this.five.on("panoArrived", this.renderScreenCenter), this.five.on("panGesture", this.renderScreenCenter), this.five.on("interiaPan", this.renderScreenCenter), this.renderScreenCenter(), this.pointSelectorHelper.show()), document.addEventListener("keydown", this.onKeyDown), document.addEventListener("keyup", this.onKeyUp), this.pointSelectorHelper.hooks.on("intersectionUpdate", this.emitIntersectionUpdate), this.lastFiveHelperVisible = this.five.helperVisible, this.five.helperVisible = !1, this.emit("enable");
  }
  disable() {
    if (!this.enabled)
      return;
    this.enabled = !1, this.adherePoints = null, this.adhereLine = [], this.adherePlane = [], this.plane = void 0, this.pointSelectorHelper.disable(), this.five.getElement().style.cursor = "";
    const e = this.five.getElement();
    this.five.off("wantsPanGesture", this.onFiveWantsPanGesture), this.five.off("wantsMoveToPano", w), this.five.off("wantsChangeMode", w), this.five.off("wantsTapGesture", w), this.five.helperVisible = this.lastFiveHelperVisible, e == null || e.removeEventListener("touchstart", this.onTouchStart), e == null || e.removeEventListener("touchmove", this.onTouchMove), e == null || e.removeEventListener("touchend", this.onTouchEnd), e == null || e.removeEventListener("mousedown", this.onMouseDown), e == null || e.removeEventListener("mouseup", this.onMouseUp), e == null || e.removeEventListener("mousemove", this.updateByMousePosition), e == null || e.removeEventListener("wheel", this.onMouseWheel), e == null || e.removeEventListener("mouseenter", this.onMouseEnter), e == null || e.removeEventListener("mouseout", this.onMouseLeave), this.five.off("panoArrived", this.renderScreenCenter), this.five.off("panGesture", this.renderScreenCenter), this.five.off("interiaPan", this.renderScreenCenter), document.removeEventListener("keydown", this.onKeyDown), document.removeEventListener("keyup", this.onKeyUp), this.pointSelectorHelper.hooks.off("intersectionUpdate", this.emitIntersectionUpdate), this.emit("disable");
  }
  dispose() {
    this.disable(), this.pointSelectorHelper.dispose();
  }
  setAdherePoints(e, t) {
    e ? typeof e == "function" ? this.adherePoints = e : this.adherePoints = () => e : this.adherePoints = null;
  }
}
export {
  se as PointSelector
};
