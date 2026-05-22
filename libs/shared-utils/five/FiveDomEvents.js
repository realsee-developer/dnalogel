var F = Object.defineProperty, N = Object.defineProperties;
var V = Object.getOwnPropertyDescriptors;
var j = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty, X = Object.prototype.propertyIsEnumerable;
var S = (v, e, t) => e in v ? F(v, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : v[e] = t, H = (v, e) => {
  for (var t in e || (e = {}))
    B.call(e, t) && S(v, t, e[t]);
  if (j)
    for (var t of j(e))
      X.call(e, t) && S(v, t, e[t]);
  return v;
}, k = (v, e) => N(v, V(e));
var l = (v, e, t) => (S(v, typeof e != "symbol" ? e + "" : e, t), t);
import * as T from "three";
import { getObjectVisible as Y } from "../three/getObjectVisible.js";
import { calculateThreeMouse as C } from "./calculateThreeMouse.js";
import { getFiveModel as A } from "./getFiveModel.js";
import { THREERaycaster as G } from "../three/core/Raycaster.js";
class U {
  constructor(e, t) {
    l(this, "_five");
    /**
     * @description: 拖动中
     */
    l(this, "dragging", !1);
    l(this, "boundObject", {});
    l(this, "config");
    l(this, "dragSelectTempWorld", new T.Vector3());
    l(this, "dragSelectTempProjected", new T.Vector3());
    l(this, "handleWantsGesture", (e, t) => {
      if (t.length !== 1)
        return;
      const n = t[0];
      if (n.raycaster) {
        const i = new G();
        i.ray = n.raycaster.ray, i.near = n.raycaster.near, i.far = n.raycaster.far, i.camera = n.raycaster.camera, i.layers = n.raycaster.layers, i.params = n.raycaster.params, n.raycaster = i;
      }
      if (n) {
        if (e === "mouseMove" && this.onDomEvent("hover", n), e === "tap") {
          const i = new MouseEvent("click", { clientX: n.x, clientY: n.y }), r = this.onDomEvent("click", n, i), a = this.onDomEvent("wantDblclick", n, i, this.boundObject.dblclick);
          if (r === !1 || a === !1)
            return !1;
        }
        if (this.dragging)
          return !1;
      }
    });
    l(this, "handleDomEvent", (e, t, n) => {
      const i = { x: t.clientX, y: t.clientY };
      this.onDomEvent(e, i, t, n);
    });
    l(this, "handleMouseEvent", (e) => {
      this.handleDomEvent(e.type, e);
    });
    l(this, "handleMousedown", (e) => {
      this.handleDomEvent("mousedown", e), this.handleDomEvent("dragstart", e, this.haveDragEventObject);
    });
    l(this, "handleMouseup", (e) => {
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
    l(this, "handleMousemove", (e) => {
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
    l(this, "onDomEvent", (e, t, n, i = this.boundObject[e]) => {
      var h, p, E, _, g;
      if (!t || !i || (i == null ? void 0 : i.length) === 0)
        return;
      const r = [];
      ((h = this.config) == null ? void 0 : h.fiveModels) !== null && ((p = this.config) != null && p.fiveModels ? r.push(...this.config.fiveModels) : r.push(this.model));
      const a = r.filter((c) => c.loaded), u = (E = t.raycaster) != null ? E : this.getRaycaster(t);
      u.params.Points.threshold = 0.04;
      let s = u.intersectObjects(i, !0);
      if ((e === "dragstart" || e === "mousedown") && (!s || s.length === 0)) {
        const c = this.findDragSelectIntersect(i, t, u);
        c && (s = [c]);
      }
      const f = [];
      a.forEach((c) => {
        const w = c.intersectRaycaster(u);
        f.push(...w);
      });
      const m = 0.01;
      if (f.length > 0 && s.length > 0 && f[0].distance + m < s[0].distance)
        return;
      const o = (_ = s == null ? void 0 : s[0]) == null ? void 0 : _.object;
      if (e === "wantDblclick")
        return !1;
      if ((!o || !this.objectIsBound(o)) && e === "hover")
        for (const c of (g = this.boundObject.hover) != null ? g : [])
          c._hovered && this.notify({ eventName: "unHover", object: c });
      if (o && o && this.notify({ eventName: e, object: o, originEvent: n, raycaster: u, intersects: s, fiveModelIntersects: f }))
        return !1;
    });
    l(this, "objectIsBound", (e) => {
      let t = e._domEvent, n = e.parent;
      for (; typeof t == "undefined" && n; )
        t = n._domEvent, n = n.parent;
      return !!t;
    });
    l(this, "notify", (e) => {
      var _, g, c, w, D, O, M;
      const { eventName: t, object: n, originEvent: i, raycaster: r, intersects: a, fiveModelIntersects: u } = e;
      if (!n)
        return !1;
      let s = !1, f = [];
      const m = [], o = () => {
        if (!a)
          return !1;
        const d = a.slice(1);
        return d[0] ? this.notify(k(H({}, e), { object: d[0].object, intersects: d })) : !1;
      };
      let h = n;
      for (m.push(h); h.parent; )
        h = h.parent, m.push(h);
      const p = m[m.length - 1];
      if ((_ = this.config) != null && _.noEmitWhenNotInScene && p.type !== "Scene")
        return o();
      let E = !1;
      for (const d of m) {
        if (s)
          break;
        d.draggable && (t === "dragstart" && (d._dragging = !0, this.dragging = !0), t === "dragend" && (d._dragging = !1, this.dragging = !1));
        const I = d._domEvent;
        if (!I)
          continue;
        const P = I[`${t}Handler`];
        if (P)
          for (const [R, y] of P) {
            if (y != null && y.noEmitWhenNotInScene && p.type !== "Scene")
              continue;
            if (y.skipPano && u) {
              const b = (g = u[0]) == null ? void 0 : g.point;
              if (b && ((D = (w = (c = this.five.observers) == null ? void 0 : c[this.five.panoIndex]) == null ? void 0 : w.accessibleNodes) != null && D.some(($) => {
                var W;
                const L = (W = this.five.works.getResolvedObserver({
                  workCode: this.five.state.workCode,
                  panoIndex: $
                })) == null ? void 0 : W.standingPosition;
                return (L == null ? void 0 : L.distanceTo(b)) < 0.3;
              })))
                continue;
            }
            if (((O = this.config) != null && O.noEmitWhenHide || y != null && y.noEmitWhenHide) && !Y(d))
              continue;
            if (E = !0, t === "hover") {
              if (d._hovered)
                continue;
              d._hovered = !0;
              for (const b of (M = this.boundObject.hover) != null ? M : [])
                b !== d && b._hovered && this.notify({ eventName: "unHover", object: b });
            }
            if (t === "unHover") {
              if (!d._hovered)
                continue;
              d._hovered = !1;
            }
            const x = R({
              type: t,
              target: d,
              origDomEvent: i,
              raycaster: r,
              intersects: a,
              stopPropagation: () => {
                s = !0;
              }
            });
            f.push(x != null ? x : !0);
          }
      }
      if (E === !1)
        return o();
      if (t === "click" || t === "wantDblclick")
        return f.some((d) => d === !0);
    });
    var n;
    this.five = e, this.config = t, e.off("wantsGesture", this.handleWantsGesture), e.on("wantsGesture", this.handleWantsGesture), document.addEventListener("mousedown", this.handleMousedown), document.addEventListener("dblclick", this.handleMouseEvent), document.addEventListener("mouseup", this.handleMouseup), document.addEventListener("mousemove", this.handleMousemove), window.__FIVE_DOM_EVENTS__ = (n = window.__FIVE_DOM_EVENTS__) != null ? n : [], window.__FIVE_DOM_EVENTS__.push(this);
  }
  get five() {
    return this._five;
  }
  set five(e) {
    var t;
    (t = this._five) == null || t.off("wantsGesture", this.handleWantsGesture), this._five = e, this._five.on("wantsGesture", this.handleWantsGesture);
  }
  get haveDragEventObject() {
    return [...new Set([this.boundObject.dragend, this.boundObject.drag, this.boundObject.dragstart].flat())].filter(Boolean);
  }
  get model() {
    return A(this.five);
  }
  /**
   * @description: added 时自动绑定事件，removed时自动解绑事件，也就是说只有物体在场景中的时候才会触发事件
   * @note: 注意：目前需要触发物体的 added 事件和 removed 事件才会生效
   * @todo: added 和 removed 还是不太智能
   */
  addAutoBindEventListener(e, t, n, i) {
    const r = () => this.addEventListener(e, t, n, i), a = () => this.removeEventListener(e, t, n, i);
    return e.addEventListener("added", r), e.addEventListener("removed", a), e.addEventListener("dispose", a), () => {
      e.removeEventListener("added", r), e.removeEventListener("removed", a), e.removeEventListener("dispose", a);
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
    e._domEvent || (e._domEvent = {}), e._domEvent[`${t}Handler`] || (e._domEvent[`${t}Handler`] = []), this.boundObject[t] || (this.boundObject[t] = []), this.boundObject[t].includes(e) || this.boundObject[t].push(e), e._domEvent[`${t}Handler`].push([n, H({ noEmitWhenHide: !1, noEmitWhenNotInScene: !1 }, i)]);
  }
  removeEventListener(e, t, n, ...i) {
    var a, u;
    if (!e._domEvent || (t === void 0 && (Object.keys(this.boundObject).forEach((s) => {
      var m, o;
      const f = (m = this.boundObject[s]) == null ? void 0 : m.findIndex((h) => h === e);
      f !== -1 && ((o = this.boundObject[s]) == null || o.splice(f, 1));
    }), e._domEvent = {}), !e._domEvent[`${t}Handler`]))
      return;
    if (n === void 0) {
      delete e._domEvent[`${t}Handler`];
      return;
    }
    const r = e._domEvent[`${t}Handler`].findIndex((s) => s[0] === n);
    if (r !== -1 && (e._domEvent[`${t}Handler`].splice(r, 1), e._domEvent[`${t}Handler`].length === 0 && delete e._domEvent[`${t}Handler`], e._domEvent && Object.keys(e._domEvent).length === 0 && delete e._domEvent, !e._domEvent)) {
      const s = (a = this.boundObject[t]) == null ? void 0 : a.findIndex((f) => f === e);
      s !== -1 && ((u = this.boundObject[t]) == null || u.splice(s, 1));
    }
  }
  clear() {
    this.boundObject = {};
  }
  dispose() {
    var e;
    (e = this.five) == null || e.off("wantsGesture", this.handleWantsGesture), document.removeEventListener("mousedown", this.handleMousedown), document.removeEventListener("mouseup", this.handleMouseup), document.removeEventListener("mousemove", this.handleMousemove), this.boundObject = {};
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
    const n = C(e, t), i = new G();
    return i.setFromCamera(n, this.five.camera), i;
  }
  getDragSelectPixelDistance(e) {
    var n, i;
    let t = e;
    for (; t; ) {
      const r = (n = t.userData) == null ? void 0 : n.dragSelectPixelDistance;
      if (typeof r == "number")
        return r;
      t = (i = t.parent) != null ? i : null;
    }
  }
  findDragSelectIntersect(e, t, n) {
    var h, p;
    if (!e || e.length === 0)
      return;
    const i = (p = (h = this.five) == null ? void 0 : h.getElement) == null ? void 0 : p.call(h), r = n.camera;
    if (!i || !r)
      return;
    const a = i.clientWidth, u = i.clientHeight, s = i.getBoundingClientRect(), f = t.x - s.left, m = t.y - s.top;
    let o;
    for (const E of e) {
      const _ = this.getDragSelectPixelDistance(E);
      if (typeof _ != "number")
        continue;
      const g = this.dragSelectTempWorld;
      E.getWorldPosition(g);
      const c = this.dragSelectTempProjected.copy(g).project(r), w = (c.x * 0.5 + 0.5) * a, D = (1 - (c.y * 0.5 + 0.5)) * u, O = Math.hypot(w - f, D - m);
      if (O > _)
        continue;
      const M = n.ray.distanceToPoint(g);
      (!o || O < o.pixelDistance) && (o = {
        pixelDistance: O,
        object: E,
        worldPoint: g.clone(),
        distance: M
      });
    }
    if (o)
      return {
        distance: o.distance,
        object: o.object,
        point: o.worldPoint
      };
  }
}
export {
  U as FiveDomEvents
};
