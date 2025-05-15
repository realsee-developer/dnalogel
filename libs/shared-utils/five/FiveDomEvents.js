var R = Object.defineProperty, P = Object.defineProperties;
var V = Object.getOwnPropertyDescriptors;
var N = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var D = (h, e, t) => e in h ? R(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t, L = (h, e) => {
  for (var t in e || (e = {}))
    T.call(e, t) && D(h, t, e[t]);
  if (N)
    for (var t of N(e))
      B.call(e, t) && D(h, t, e[t]);
  return h;
}, S = (h, e) => P(h, V(e));
var a = (h, e, t) => (D(h, typeof e != "symbol" ? e + "" : e, t), t);
import { getObjectVisible as X } from "../three/getObjectVisible.js";
import { calculateThreeMouse as Y } from "./calculateThreeMouse.js";
import { getFiveModel as C } from "./getFiveModel.js";
import { THREERaycaster as $ } from "../three/core/Raycaster.js";
class Q {
  constructor(e, t) {
    a(this, "_five");
    /**
     * @description: 拖动中
     */
    a(this, "dragging", !1);
    a(this, "boundObject", {});
    a(this, "config");
    a(this, "handleWantsGesture", (e, t) => {
      if (t.length !== 1)
        return;
      const n = t[0];
      if (n.raycaster) {
        const i = new $();
        i.ray = n.raycaster.ray, i.near = n.raycaster.near, i.far = n.raycaster.far, i.camera = n.raycaster.camera, i.layers = n.raycaster.layers, i.params = n.raycaster.params, n.raycaster = i;
      }
      if (n) {
        if (e === "mouseMove" && this.onDomEvent("hover", n), e === "tap") {
          const i = new MouseEvent("click", { clientX: n.x, clientY: n.y }), d = this.onDomEvent("click", n, i), o = this.onDomEvent("wantDblclick", n, i, this.boundObject.dblclick);
          if (d === !1 || o === !1)
            return !1;
        }
        if (this.dragging)
          return !1;
      }
    });
    a(this, "handleDomEvent", (e, t, n) => {
      const i = { x: t.clientX, y: t.clientY };
      this.onDomEvent(e, i, t, n);
    });
    a(this, "handleMouseEvent", (e) => {
      this.handleDomEvent(e.type, e);
    });
    a(this, "handleMousedown", (e) => {
      this.handleDomEvent("mousedown", e), this.handleDomEvent("dragstart", e, this.haveDragEventObject);
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
    a(this, "onDomEvent", (e, t, n, i = this.boundObject[e]) => {
      var v, _, p, b, y;
      if (!t || !i || (i == null ? void 0 : i.length) === 0)
        return;
      const d = [];
      ((v = this.config) == null ? void 0 : v.fiveModels) !== null && ((_ = this.config) != null && _.fiveModels ? d.push(...this.config.fiveModels) : d.push(this.model));
      const o = d.filter((m) => m.loaded), u = (p = t.raycaster) != null ? p : this.getRaycaster(t);
      u.params.Points.threshold = 0.04;
      const s = u.intersectObjects(i, !0), f = [];
      o.forEach((m) => {
        const O = m.intersectRaycaster(u);
        f.push(...O);
      });
      const l = 0.01;
      if (f.length > 0 && s.length > 0 && f[0].distance + l < s[0].distance)
        return;
      const c = (b = s == null ? void 0 : s[0]) == null ? void 0 : b.object;
      if (e === "wantDblclick")
        return !1;
      if ((!c || !this.objectIsBound(c)) && e === "hover")
        for (const m of (y = this.boundObject.hover) != null ? y : [])
          m._hovered && this.notify({ eventName: "unHover", object: m });
      if (c && c && this.notify({ eventName: e, object: c, originEvent: n, raycaster: u, intersects: s, fiveModelIntersects: f }))
        return !1;
    });
    a(this, "objectIsBound", (e) => {
      let t = e._domEvent, n = e.parent;
      for (; typeof t == "undefined" && n; )
        t = n._domEvent, n = n.parent;
      return !!t;
    });
    a(this, "notify", (e) => {
      var b, y, m, O, H, I, x;
      const { eventName: t, object: n, originEvent: i, raycaster: d, intersects: o, fiveModelIntersects: u } = e;
      if (!n)
        return !1;
      let s = !1, f = [];
      const l = [], c = () => {
        if (!o)
          return !1;
        const r = o.slice(1);
        return r[0] ? this.notify(S(L({}, e), { object: r[0].object, intersects: r })) : !1;
      };
      let v = n;
      for (l.push(v); v.parent; )
        v = v.parent, l.push(v);
      const _ = l[l.length - 1];
      if ((b = this.config) != null && b.noEmitWhenNotInScene && _.type !== "Scene")
        return c();
      let p = !1;
      for (const r of l) {
        if (s)
          break;
        r.draggable && (t === "dragstart" && (r._dragging = !0, this.dragging = !0), t === "dragend" && (r._dragging = !1, this.dragging = !1));
        const k = r._domEvent;
        if (!k)
          continue;
        const W = k[`${t}Handler`];
        if (W)
          for (const [j, E] of W) {
            if (E != null && E.noEmitWhenNotInScene && _.type !== "Scene")
              continue;
            if (E.skipPano && u) {
              const g = (y = u[0]) == null ? void 0 : y.point;
              if (g && ((H = (O = (m = this.five.observers) == null ? void 0 : m[this.five.panoIndex]) == null ? void 0 : O.accessibleNodes) != null && H.some((F) => {
                var G;
                const M = (G = this.five.works.getResolvedObserver({
                  workCode: this.five.state.workCode,
                  panoIndex: F
                })) == null ? void 0 : G.standingPosition;
                return (M == null ? void 0 : M.distanceTo(g)) < 0.3;
              })))
                continue;
            }
            if (((I = this.config) != null && I.noEmitWhenHide || E != null && E.noEmitWhenHide) && !X(r))
              continue;
            if (p = !0, t === "hover") {
              if (r._hovered)
                continue;
              r._hovered = !0;
              for (const g of (x = this.boundObject.hover) != null ? x : [])
                g !== r && g._hovered && this.notify({ eventName: "unHover", object: g });
            }
            if (t === "unHover") {
              if (!r._hovered)
                continue;
              r._hovered = !1;
            }
            const w = j({
              type: t,
              target: r,
              origDomEvent: i,
              raycaster: d,
              intersects: o,
              stopPropagation: () => {
                s = !0;
              }
            });
            f.push(w != null ? w : !0);
          }
      }
      if (p === !1)
        return c();
      if (t === "click" || t === "wantDblclick")
        return f.some((r) => r === !0);
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
    return C(this.five);
  }
  /**
   * @description: added 时自动绑定事件，removed时自动解绑事件，也就是说只有物体在场景中的时候才会触发事件
   * @note: 注意：目前需要触发物体的 added 事件和 removed 事件才会生效
   * @todo: added 和 removed 还是不太智能
   */
  addAutoBindEventListener(e, t, n, i) {
    const d = () => this.addEventListener(e, t, n, i), o = () => this.removeEventListener(e, t, n, i);
    return e.addEventListener("added", d), e.addEventListener("removed", o), e.addEventListener("dispose", o), () => {
      e.removeEventListener("added", d), e.removeEventListener("removed", o), e.removeEventListener("dispose", o);
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
    var o, u;
    if (!e._domEvent || (t === void 0 && (Object.keys(this.boundObject).forEach((s) => {
      var l, c;
      const f = (l = this.boundObject[s]) == null ? void 0 : l.findIndex((v) => v === e);
      f !== -1 && ((c = this.boundObject[s]) == null || c.splice(f, 1));
    }), e._domEvent = {}), !e._domEvent[`${t}Handler`]))
      return;
    if (n === void 0) {
      delete e._domEvent[`${t}Handler`];
      return;
    }
    const d = e._domEvent[`${t}Handler`].findIndex((s) => s[0] === n);
    if (d !== -1 && (e._domEvent[`${t}Handler`].splice(d, 1), e._domEvent[`${t}Handler`].length === 0 && delete e._domEvent[`${t}Handler`], e._domEvent && Object.keys(e._domEvent).length === 0 && delete e._domEvent, !e._domEvent)) {
      const s = (o = this.boundObject[t]) == null ? void 0 : o.findIndex((f) => f === e);
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
    const n = Y(e, t), i = new $();
    return i.setFromCamera(n, this.five.camera), i;
  }
}
export {
  Q as FiveDomEvents
};
