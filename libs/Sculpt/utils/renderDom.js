var s = Object.defineProperty;
var m = (a, e, c) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: c }) : a[e] = c;
var n = (a, e, c) => (m(a, typeof e != "symbol" ? e + "" : e, c), c);
const t = class {
  static checkDom(e) {
    let c = e, i = !0;
    for (; c.parent; )
      i === !0 && c.visible === !1 && (i = !1), c = c.parent;
    c.type === "Scene" ? (e._onAdded(), i ? e._onShowed() : e._onHidden()) : e._onRemoved();
  }
  static checkDomEveryFrame() {
    t.checkDomEveryFrameIsRunning || (t.checkDomEveryFrameIsRunning = !0, t._checkDomEveryFrame());
  }
  static _checkDomEveryFrame() {
    t.cacheObject.forEach((e) => t.checkDom(e)), requestAnimationFrame(t._checkDomEveryFrame);
  }
};
let r = t;
n(r, "cacheObject", /* @__PURE__ */ new Set()), n(r, "checkDomEveryFrameIsRunning", !1);
export {
  r as RenderDom
};
