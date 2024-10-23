var x = Object.defineProperty;
var D = Object.getOwnPropertySymbols;
var S = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
var M = (u, e, t) => e in u ? x(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t, L = (u, e) => {
  for (var t in e || (e = {}))
    S.call(e, t) && M(u, t, e[t]);
  if (D)
    for (var t of D(e))
      I.call(e, t) && M(u, t, e[t]);
  return u;
};
var r = (u, e, t) => (M(u, typeof e != "symbol" ? e + "" : e, t), t);
import { getObjectVisible as $ } from "../three/getObjectVisible.js";
import { calculateThreeMouse as T } from "./calculateThreeMouse.js";
import { getFiveModel as W } from "./getFiveModel.js";
import { THREERaycaster as w } from "../three/core/Raycaster.js";
import { isTouchDevice as H } from "../isTouchDevice.js";
class G {
  // 事件由five触发时，用来补充 originEvent 属性
  constructor(e, t) {
    r(this, "five");
    /**
     * @description: 拖动中
     */
    r(this, "dragging", !1);
    r(this, "boundObject", {});
    r(this, "config");
    r(this, "lastMouseDownEvent");
    // 事件由five触发时，用来补充 originEvent 属性
    r(this, "lastTouchEvent");
    r(this, "handleWantsGesture", (e, t) => {
      if (t.length !== 1)
        return;
      const n = t[0];
      if (n.raycaster) {
        const i = new w();
        i.ray = n.raycaster.ray, i.near = n.raycaster.near, i.far = n.raycaster.far, i.camera = n.raycaster.camera, i.layers = n.raycaster.layers, i.params = n.raycaster.params, n.raycaster = i;
      }
      if (n) {
        if (e === "mouseMove" && this.onDomEvent("hover", n), e === "tap") {
          let i;
          !i && !H && (i = this.lastMouseDownEvent), !i && H && (i = this.lastTouchEvent), i || (i = new MouseEvent("click", { clientX: n.x, clientY: n.y }));
          const a = this.onDomEvent("click", n, i), d = this.onDomEvent("wantDblclick", n, i, this.boundObject.dblclick);
          if (a === !1 || d === !1)
            return !1;
        }
        if (this.dragging)
          return !1;
      }
    });
    r(this, "handleDomEvent", (e, t, n) => {
      const i = { x: t.clientX, y: t.clientY };
      this.onDomEvent(e, i, t, n);
    });
    r(this, "handleMouseEvent", (e) => {
      this.handleDomEvent(e.type, e);
    });
    r(this, "handleMousedown", (e) => {
      this.lastMouseDownEvent = e, this.handleDomEvent("mousedown", e), this.handleDomEvent("dragstart", e, this.haveDragEventObject);
    });
    r(this, "handleTouchStart", (e) => {
      this.lastTouchEvent = e;
    });
    r(this, "handleMouseup", (e) => {
      var t;
      this.dragging = !1, (t = this.haveDragEventObject) == null || t.forEach((n) => {
        n._dragging && (n._dragging = !1, this.notify({
          eventName: "dragend",
          object: n,
          originEvent: e,
          raycaster: this.getRaycaster({ x: e.clientX, y: e.clientY })
        }));
      }), this.handleDomEvent("mouseup", e);
    });
    r(this, "handleMousemove", (e) => {
      var t;
      this.dragging && ((t = this.boundObject.drag) == null || t.forEach((n) => {
        n._dragging && this.notify({
          eventName: "drag",
          object: n,
          originEvent: e,
          raycaster: this.getRaycaster({ x: e.clientX, y: e.clientY })
        });
      }));
    });
    // eslint-disable-next-line complexity
    r(this, "onDomEvent", (e, t, n, i = this.boundObject[e]) => {
      var m, g, p, o, y;
      if (!t || !i || (i == null ? void 0 : i.length) === 0)
        return;
      const a = [];
      ((m = this.config) == null ? void 0 : m.fiveModels) !== null && ((g = this.config) != null && g.fiveModels ? a.push(...this.config.fiveModels) : a.push(this.model));
      const d = a.filter((v) => v.loaded), l = (p = t.raycaster) != null ? p : this.getRaycaster(t);
      l.params.Points.threshold = 0.02;
      const s = l.intersectObjects(i, !0), h = [];
      d.forEach((v) => {
        const _ = v.intersectRaycaster(l);
        h.push(..._);
      });
      const f = 0.01;
      if (h.length > 0 && s.length > 0 && h[0].distance + f < s[0].distance)
        return;
      const c = (o = s == null ? void 0 : s[0]) == null ? void 0 : o.object;
      if (e === "wantDblclick")
        return !1;
      if ((!c || !this.objectIsBound(c)) && e === "hover")
        for (const v of (y = this.boundObject.hover) != null ? y : [])
          v._hovered && this.notify({ eventName: "unHover", object: v });
      if (c && c && this.notify({ eventName: e, object: c, originEvent: n, raycaster: l, intersects: s }))
        return !1;
    });
    r(this, "objectIsBound", (e) => {
      let t = e._domEvent, n = e.parent;
      for (; typeof t == "undefined" && n; )
        t = n._domEvent, n = n.parent;
      return !!t;
    });
    r(this, "notify", (e) => {
      var m, g, p;
      const { eventName: t, object: n, originEvent: i, raycaster: a, intersects: d } = e;
      let l = !1, s = [];
      const h = [];
      let f = n;
      for (h.push(f); f.parent; )
        f = f.parent, h.push(f);
      const c = h.at(-1);
      if (!((m = this.config) != null && m.noEmitWhenNotInScene && c.type !== "Scene")) {
        for (const o of h) {
          if (l)
            break;
          o.draggable && (t === "dragstart" && (o._dragging = !0, this.dragging = !0), t === "dragend" && (o._dragging = !1, this.dragging = !1));
          const y = o._domEvent;
          if (!y)
            continue;
          const v = y[`${t}Handler`];
          if (v)
            for (const [_, E] of v) {
              if (E != null && E.noEmitWhenNotInScene && c.type !== "Scene" || ((g = this.config) != null && g.noEmitWhenHide || E != null && E.noEmitWhenHide) && !$(o))
                continue;
              if (t === "hover") {
                if (o._hovered)
                  continue;
                o._hovered = !0;
                for (const b of (p = this.boundObject.hover) != null ? p : [])
                  b !== o && b._hovered && this.notify({ eventName: "unHover", object: b });
              }
              if (t === "unHover") {
                if (!o._hovered)
                  continue;
                o._hovered = !1;
              }
              const O = _({
                type: t,
                target: o,
                origDomEvent: i,
                raycaster: a,
                intersects: d,
                stopPropagation: () => {
                  l = !0;
                }
              });
              s.push(O != null ? O : !0);
            }
        }
        if (t === "click" || t === "wantDblclick")
          return s.some((o) => o === !0);
      }
    });
    this.five = e, this.config = t, e.on("wantsGesture", this.handleWantsGesture), document.addEventListener("mousedown", this.handleMousedown), document.addEventListener("touchstart", this.handleTouchStart), document.addEventListener("dblclick", this.handleMouseEvent), document.addEventListener("mouseup", this.handleMouseup), document.addEventListener("mousemove", this.handleMousemove);
  }
  get haveDragEventObject() {
    return [...new Set([this.boundObject.dragend, this.boundObject.drag, this.boundObject.dragstart].flat())].filter(Boolean);
  }
  get model() {
    return W(this.five);
  }
  /**
   * @description: added 时自动绑定事件，removed时自动解绑事件，也就是说只有物体在场景中的时候才会触发事件
   * @note: 注意：目前需要触发物体的 added 事件和 removed 事件才会生效
   * @todo: added 和 removed 还是不太智能
   */
  addAutoBindEventListener(e, t, n, i) {
    const a = () => this.addEventListener(e, t, n, i), d = () => this.removeEventListener(e, t, n, i);
    return e.addEventListener("added", a), e.addEventListener("removed", d), e.addEventListener("dispose", d), () => {
      e.removeEventListener("added", a), e.removeEventListener("removed", d), e.removeEventListener("dispose", d);
    };
  }
  /**
   * @description: add event listener
   * @param params.object: object
   * @param params.event: event name
   * @param params.callback: 返回 false 可以不阻止 five 的 tap 事件; default: true
   * @return {void}
   */
  addEventListener(e, t, n, i) {
    e._domEvent || (e._domEvent = {}), e._domEvent[`${t}Handler`] || (e._domEvent[`${t}Handler`] = []), this.boundObject[t] || (this.boundObject[t] = []), this.boundObject[t].includes(e) || this.boundObject[t].push(e), e._domEvent[`${t}Handler`].push([n, L({ noEmitWhenHide: !1, noEmitWhenNotInScene: !1 }, i)]);
  }
  removeEventListener(e, t, n, ...i) {
    var d, l;
    if (!e._domEvent || (t === void 0 && (Object.keys(this.boundObject).forEach((s) => {
      var f, c;
      const h = (f = this.boundObject[s]) == null ? void 0 : f.findIndex((m) => m === e);
      h !== -1 && ((c = this.boundObject[s]) == null || c.splice(h, 1));
    }), e._domEvent = {}), !e._domEvent[`${t}Handler`]))
      return;
    if (n === void 0) {
      delete e._domEvent[`${t}Handler`];
      return;
    }
    const a = e._domEvent[`${t}Handler`].findIndex((s) => s[0] === n);
    if (a !== -1 && (e._domEvent[`${t}Handler`].splice(a, 1), e._domEvent[`${t}Handler`].length === 0 && delete e._domEvent[`${t}Handler`], e._domEvent && Object.keys(e._domEvent).length === 0 && delete e._domEvent, !e._domEvent)) {
      const s = (d = this.boundObject[t]) == null ? void 0 : d.findIndex((h) => h === e);
      s !== -1 && ((l = this.boundObject[t]) == null || l.splice(s, 1));
    }
  }
  clear() {
    this.boundObject = {};
  }
  dispose() {
    var e;
    (e = this.five) == null || e.off("wantsGesture", this.handleWantsGesture), document.removeEventListener("mousedown", this.handleMousedown), document.removeEventListener("touchstart", this.handleTouchStart), document.removeEventListener("mouseup", this.handleMouseup), document.removeEventListener("mousemove", this.handleMousemove), this.boundObject = {};
  }
  toJSON() {
    return {
      boundObject: this.boundObject
    };
  }
  getRaycaster(e) {
    const t = this.five.getElement();
    if (!t)
      return;
    const n = T(e, t), i = new w();
    return i.setFromCamera(n, this.five.camera), i;
  }
}
export {
  G as FiveDomEvents
};
