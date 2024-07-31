var w = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var b = (f, e, t) => e in f ? w(f, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : f[e] = t, D = (f, e) => {
  for (var t in e || (e = {}))
    M.call(e, t) && b(f, t, e[t]);
  if (L)
    for (var t of L(e))
      x.call(e, t) && b(f, t, e[t]);
  return f;
};
var d = (f, e, t) => (b(f, typeof e != "symbol" ? e + "" : e, t), t);
import * as I from "three";
import { getObjectVisible as $ } from "../three/getObjectVisible.js";
import { calculateThreeMouse as W } from "./calculateThreeMouse.js";
import { getFiveModel as j } from "./getFiveModel.js";
class N {
  constructor(e, t) {
    d(this, "five");
    /**
     * @description: 拖动中
     */
    d(this, "dragging", !1);
    d(this, "boundObject", {});
    d(this, "config");
    d(this, "handleWantsGesture", (e, t) => {
      if (t.length !== 1)
        return;
      const n = t[0];
      if (n) {
        if (e === "mouseMove" && this.onDomEvent("hover", n), e === "tap") {
          const i = this.onDomEvent("click", n), s = this.onDomEvent("wantDblclick", n, void 0, this.boundObject.dblclick);
          if (i === !1 || s === !1)
            return !1;
        }
        if (this.dragging)
          return !1;
      }
    });
    d(this, "handleDomEvent", (e, t, n) => {
      const i = { x: t.clientX, y: t.clientY };
      this.onDomEvent(e, i, t, n);
    });
    d(this, "handleMouseEvent", (e) => {
      this.handleDomEvent(e.type, e);
    });
    d(this, "handleMousedown", (e) => {
      this.handleDomEvent("mousedown", e), this.handleDomEvent("dragstart", e, this.haveDragEventObject);
    });
    d(this, "handleMouseup", (e) => {
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
    d(this, "handleMousemove", (e) => {
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
    d(this, "onDomEvent", (e, t, n, i = this.boundObject[e]) => {
      var u, c, v;
      if (!t || !i || (i == null ? void 0 : i.length) === 0 || !this.model.loaded)
        return;
      const s = (u = t.raycaster) != null ? u : this.getRaycaster(t);
      s.params.Points.threshold = 0.02;
      const o = s.intersectObjects(i, !0), l = this.model.intersectRaycaster(s), h = 0.01;
      if (l.length > 0 && o.length > 0 && l[0].distance + h < o[0].distance)
        return;
      const r = (c = o == null ? void 0 : o[0]) == null ? void 0 : c.object;
      if (e === "wantDblclick")
        return !1;
      if ((!r || !this.objectIsBound(r)) && e === "hover")
        for (const m of (v = this.boundObject.hover) != null ? v : [])
          m._hovered && this.notify({ eventName: "unHover", object: m });
      if (r && r && this.notify({ eventName: e, object: r, originEvent: n, raycaster: s, intersects: o }))
        return !1;
    });
    d(this, "objectIsBound", (e) => {
      let t = e._domEvent, n = e.parent;
      for (; typeof t == "undefined" && n; )
        t = n._domEvent, n = n.parent;
      return !!t;
    });
    d(this, "notify", (e) => {
      var v, m, _;
      const { eventName: t, object: n, originEvent: i, raycaster: s, intersects: o } = e;
      let l = !1, h = [];
      const r = [];
      let u = n;
      for (r.push(u); u.parent; )
        u = u.parent, r.push(u);
      const c = r.at(-1);
      if (!((v = this.config) != null && v.noEmitWhenNotInScene && c.type !== "Scene")) {
        for (const a of r) {
          if (l)
            break;
          a.draggable && (t === "dragstart" && (a._dragging = !0, this.dragging = !0), t === "dragend" && (a._dragging = !1, this.dragging = !1));
          const O = a._domEvent;
          if (!O)
            continue;
          const y = O[`${t}Handler`];
          if (y)
            for (const [H, E] of y) {
              if (E != null && E.noEmitWhenNotInScene && c.type !== "Scene" || ((m = this.config) != null && m.noEmitWhenHide || E != null && E.noEmitWhenHide) && !$(a))
                continue;
              if (t === "hover") {
                if (a._hovered)
                  continue;
                a._hovered = !0;
                for (const g of (_ = this.boundObject.hover) != null ? _ : [])
                  g !== a && g._hovered && this.notify({ eventName: "unHover", object: g });
              }
              if (t === "unHover") {
                if (!a._hovered)
                  continue;
                a._hovered = !1;
              }
              const p = H({
                type: t,
                target: a,
                origDomEvent: i,
                raycaster: s,
                intersects: o,
                stopPropagation: () => {
                  l = !0;
                }
              });
              h.push(p != null ? p : !0);
            }
        }
        if (t === "click" || t === "wantDblclick")
          return h.some((a) => a === !0);
      }
    });
    this.five = e, this.config = t, e.on("wantsGesture", this.handleWantsGesture), document.addEventListener("mousedown", this.handleMousedown), document.addEventListener("dblclick", this.handleMouseEvent), document.addEventListener("mouseup", this.handleMouseup), document.addEventListener("mousemove", this.handleMousemove);
  }
  get haveDragEventObject() {
    return [...new Set([this.boundObject.dragend, this.boundObject.drag, this.boundObject.dragstart].flat())].filter(Boolean);
  }
  get model() {
    return j(this.five);
  }
  /**
   * @description: added 时自动绑定事件，removed时自动解绑事件，也就是说只有物体在场景中的时候才会触发事件
   * @note: 注意：目前需要触发物体的 added 事件和 removed 事件才会生效
   * @todo: added 和 removed 还是不太智能
   */
  addAutoBindEventListener(e, t, n, i) {
    const s = () => this.addEventListener(e, t, n, i), o = () => this.removeEventListener(e, t, n, i);
    return e.addEventListener("added", s), e.addEventListener("removed", o), e.addEventListener("dispose", o), () => {
      e.removeEventListener("added", s), e.removeEventListener("removed", o), e.removeEventListener("dispose", o);
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
    e._domEvent || (e._domEvent = {}), e._domEvent[`${t}Handler`] || (e._domEvent[`${t}Handler`] = []), this.boundObject[t] || (this.boundObject[t] = []), this.boundObject[t].includes(e) || this.boundObject[t].push(e), e._domEvent[`${t}Handler`].push([n, D({ noEmitWhenHide: !1, noEmitWhenNotInScene: !1 }, i)]);
  }
  removeEventListener(e, t, n, ...i) {
    var o, l;
    if (!e._domEvent || (t === void 0 && (Object.keys(this.boundObject).forEach((h) => {
      var u, c;
      const r = (u = this.boundObject[h]) == null ? void 0 : u.findIndex((v) => v === e);
      r !== -1 && ((c = this.boundObject[h]) == null || c.splice(r, 1));
    }), e._domEvent = {}), !e._domEvent[`${t}Handler`]))
      return;
    if (n === void 0) {
      delete e._domEvent[`${t}Handler`];
      return;
    }
    const s = e._domEvent[`${t}Handler`].findIndex((h) => h[0] === n);
    if (s !== -1 && (e._domEvent[`${t}Handler`].splice(s, 1), e._domEvent[`${t}Handler`].length === 0 && delete e._domEvent[`${t}Handler`], e._domEvent && Object.keys(e._domEvent).length === 0 && delete e._domEvent, !e._domEvent)) {
      const h = (o = this.boundObject[t]) == null ? void 0 : o.findIndex((r) => r === e);
      h !== -1 && ((l = this.boundObject[t]) == null || l.splice(h, 1));
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
    const n = W(e, t), i = new I.Raycaster();
    return i.setFromCamera(n, this.five.camera), i;
  }
}
export {
  N as FiveDomEvents
};
