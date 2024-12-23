var S = Object.defineProperty, j = Object.defineProperties;
var $ = Object.getOwnPropertyDescriptors;
var D = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var M = (u, e, t) => e in u ? S(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : u[e] = t, w = (u, e) => {
  for (var t in e || (e = {}))
    W.call(e, t) && M(u, t, e[t]);
  if (D)
    for (var t of D(e))
      k.call(e, t) && M(u, t, e[t]);
  return u;
}, H = (u, e) => j(u, $(e));
var a = (u, e, t) => (M(u, typeof e != "symbol" ? e + "" : e, t), t);
import { getObjectVisible as T } from "../three/getObjectVisible.js";
import { calculateThreeMouse as N } from "./calculateThreeMouse.js";
import { getFiveModel as R } from "./getFiveModel.js";
import { THREERaycaster as x } from "../three/core/Raycaster.js";
class Y {
  // 事件由five触发时，用来补充 originEvent 属性
  constructor(e, t) {
    a(this, "five");
    /**
     * @description: 拖动中
     */
    a(this, "dragging", !1);
    a(this, "boundObject", {});
    a(this, "config");
    a(this, "lastMouseDownEvent");
    // 事件由five触发时，用来补充 originEvent 属性
    a(this, "lastTouchEvent");
    a(this, "handleWantsGesture", (e, t) => {
      var r;
      if (t.length !== 1)
        return;
      const n = t[0];
      if (n.raycaster) {
        const i = new x();
        i.ray = n.raycaster.ray, i.near = n.raycaster.near, i.far = n.raycaster.far, i.camera = n.raycaster.camera, i.layers = n.raycaster.layers, i.params = n.raycaster.params, n.raycaster = i;
      }
      if (n) {
        if (e === "mouseMove" && this.onDomEvent("hover", n), e === "tap") {
          let i;
          i || (i = (r = this.lastMouseDownEvent) != null ? r : this.lastTouchEvent), i || (i = new MouseEvent("click", { clientX: n.x, clientY: n.y }));
          const d = this.onDomEvent("click", n, i), l = this.onDomEvent("wantDblclick", n, i, this.boundObject.dblclick);
          if (d === !1 || l === !1)
            return !1;
        }
        if (this.dragging)
          return !1;
      }
    });
    a(this, "handleDomEvent", (e, t, n) => {
      const r = { x: t.clientX, y: t.clientY };
      this.onDomEvent(e, r, t, n);
    });
    a(this, "handleMouseEvent", (e) => {
      this.handleDomEvent(e.type, e);
    });
    a(this, "handleMousedown", (e) => {
      this.lastMouseDownEvent = e, this.handleDomEvent("mousedown", e), this.handleDomEvent("dragstart", e, this.haveDragEventObject);
    });
    a(this, "handleTouchStart", (e) => {
      this.lastTouchEvent = e;
    });
    a(this, "handleMouseup", (e) => {
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
    a(this, "handleMousemove", (e) => {
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
    a(this, "onDomEvent", (e, t, n, r = this.boundObject[e]) => {
      var v, E, g, p, y;
      if (!t || !r || (r == null ? void 0 : r.length) === 0)
        return;
      const i = [];
      ((v = this.config) == null ? void 0 : v.fiveModels) !== null && ((E = this.config) != null && E.fiveModels ? i.push(...this.config.fiveModels) : i.push(this.model));
      const d = i.filter((s) => s.loaded), l = (g = t.raycaster) != null ? g : this.getRaycaster(t);
      l.params.Points.threshold = 0.02;
      const o = l.intersectObjects(r, !0), h = [];
      d.forEach((s) => {
        const b = s.intersectRaycaster(l);
        h.push(...b);
      });
      const f = 0.01;
      if (h.length > 0 && o.length > 0 && h[0].distance + f < o[0].distance)
        return;
      const c = (p = o == null ? void 0 : o[0]) == null ? void 0 : p.object;
      if (e === "wantDblclick")
        return !1;
      if ((!c || !this.objectIsBound(c)) && e === "hover")
        for (const s of (y = this.boundObject.hover) != null ? y : [])
          s._hovered && this.notify({ eventName: "unHover", object: s });
      if (c && c && this.notify({ eventName: e, object: c, originEvent: n, raycaster: l, intersects: o }))
        return !1;
    });
    a(this, "objectIsBound", (e) => {
      let t = e._domEvent, n = e.parent;
      for (; typeof t == "undefined" && n; )
        t = n._domEvent, n = n.parent;
      return !!t;
    });
    a(this, "notify", (e) => {
      var g, p, y;
      const { eventName: t, object: n, originEvent: r, raycaster: i, intersects: d } = e;
      if (!n)
        return !1;
      let l = !1, o = [];
      const h = [], f = () => {
        const s = d.slice(1);
        return s[0] ? this.notify(H(w({}, e), { object: s[0].object, intersects: s })) : !1;
      };
      let c = n;
      for (h.push(c); c.parent; )
        c = c.parent, h.push(c);
      const v = h[h.length - 1];
      if ((g = this.config) != null && g.noEmitWhenNotInScene && v.type !== "Scene")
        return f();
      let E = !1;
      for (const s of h) {
        if (l)
          break;
        s.draggable && (t === "dragstart" && (s._dragging = !0, this.dragging = !0), t === "dragend" && (s._dragging = !1, this.dragging = !1));
        const b = s._domEvent;
        if (!b)
          continue;
        const L = b[`${t}Handler`];
        if (L)
          for (const [I, m] of L) {
            if (m != null && m.noEmitWhenNotInScene && v.type !== "Scene" || ((p = this.config) != null && p.noEmitWhenHide || m != null && m.noEmitWhenHide) && !T(s))
              continue;
            if (E = !0, t === "hover") {
              if (s._hovered)
                continue;
              s._hovered = !0;
              for (const _ of (y = this.boundObject.hover) != null ? y : [])
                _ !== s && _._hovered && this.notify({ eventName: "unHover", object: _ });
            }
            if (t === "unHover") {
              if (!s._hovered)
                continue;
              s._hovered = !1;
            }
            const O = I({
              type: t,
              target: s,
              origDomEvent: r,
              raycaster: i,
              intersects: d,
              stopPropagation: () => {
                l = !0;
              }
            });
            o.push(O != null ? O : !0);
          }
      }
      if (E === !1)
        return f();
      if (t === "click" || t === "wantDblclick")
        return o.some((s) => s === !0);
    });
    this.five = e, this.config = t, e.on("wantsGesture", this.handleWantsGesture), document.addEventListener("mousedown", this.handleMousedown), document.addEventListener("touchstart", this.handleTouchStart), document.addEventListener("dblclick", this.handleMouseEvent), document.addEventListener("mouseup", this.handleMouseup), document.addEventListener("mousemove", this.handleMousemove);
  }
  get haveDragEventObject() {
    return [...new Set([this.boundObject.dragend, this.boundObject.drag, this.boundObject.dragstart].flat())].filter(Boolean);
  }
  get model() {
    return R(this.five);
  }
  /**
   * @description: added 时自动绑定事件，removed时自动解绑事件，也就是说只有物体在场景中的时候才会触发事件
   * @note: 注意：目前需要触发物体的 added 事件和 removed 事件才会生效
   * @todo: added 和 removed 还是不太智能
   */
  addAutoBindEventListener(e, t, n, r) {
    const i = () => this.addEventListener(e, t, n, r), d = () => this.removeEventListener(e, t, n, r);
    return e.addEventListener("added", i), e.addEventListener("removed", d), e.addEventListener("dispose", d), () => {
      e.removeEventListener("added", i), e.removeEventListener("removed", d), e.removeEventListener("dispose", d);
    };
  }
  /**
   * @description: add event listener
   * @param params.object: object
   * @param params.event: event name
   * @param params.callback: 返回 false 可以不阻止 five 的 tap 事件; default: true
   * @return {void}
   */
  addEventListener(e, t, n, r) {
    e._domEvent || (e._domEvent = {}), e._domEvent[`${t}Handler`] || (e._domEvent[`${t}Handler`] = []), this.boundObject[t] || (this.boundObject[t] = []), this.boundObject[t].includes(e) || this.boundObject[t].push(e), e._domEvent[`${t}Handler`].push([n, w({ noEmitWhenHide: !1, noEmitWhenNotInScene: !1 }, r)]);
  }
  removeEventListener(e, t, n, ...r) {
    var d, l;
    if (!e._domEvent || (t === void 0 && (Object.keys(this.boundObject).forEach((o) => {
      var f, c;
      const h = (f = this.boundObject[o]) == null ? void 0 : f.findIndex((v) => v === e);
      h !== -1 && ((c = this.boundObject[o]) == null || c.splice(h, 1));
    }), e._domEvent = {}), !e._domEvent[`${t}Handler`]))
      return;
    if (n === void 0) {
      delete e._domEvent[`${t}Handler`];
      return;
    }
    const i = e._domEvent[`${t}Handler`].findIndex((o) => o[0] === n);
    if (i !== -1 && (e._domEvent[`${t}Handler`].splice(i, 1), e._domEvent[`${t}Handler`].length === 0 && delete e._domEvent[`${t}Handler`], e._domEvent && Object.keys(e._domEvent).length === 0 && delete e._domEvent, !e._domEvent)) {
      const o = (d = this.boundObject[t]) == null ? void 0 : d.findIndex((h) => h === e);
      o !== -1 && ((l = this.boundObject[t]) == null || l.splice(o, 1));
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
    const n = N(e, t), r = new x();
    return r.setFromCamera(n, this.five.camera), r;
  }
}
export {
  Y as FiveDomEvents
};
