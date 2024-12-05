var h = Object.defineProperty;
var y = Object.getOwnPropertySymbols;
var b = Object.prototype.hasOwnProperty, g = Object.prototype.propertyIsEnumerable;
var c = (i, t, e) => t in i ? h(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, n = (i, t) => {
  for (var e in t || (t = {}))
    b.call(t, e) && c(i, e, t[e]);
  if (y)
    for (var e of y(t))
      g.call(t, e) && c(i, e, t[e]);
  return i;
};
var o = (i, t, e) => (c(i, typeof t != "symbol" ? t + "" : t, e), e);
class l {
  constructor() {
    /**
     * @description 射线碰撞检测的距离缓存
     */
    o(this, "cache_raycasterDistance", /* @__PURE__ */ new Map());
    /**
     * @description 标签是否可见缓存
     */
    o(this, "cache_visible", /* @__PURE__ */ new Map());
  }
  clear() {
    this.cache_visible.clear(), this.cache_raycasterDistance.clear();
  }
  static generateCameraTagKey(t, e, a = 3) {
    const s = n(n({}, e.five.getCurrentState()), t), r = s.mode === "Panorama" ? e.workUtil.getObserverPosition(s.panoIndex) : e.five.camera.position;
    return r ? [
      //
      r.x.toFixed(a),
      r.y.toFixed(a),
      r.z.toFixed(a),
      e.id
    ].join(",") : void 0;
  }
  getVisible(t, e, a = 1) {
    const s = l.generateCameraTagKey(e, t, a);
    if (s)
      return this.cache_visible.get(s);
  }
  setVisible(t, e, a, s = 1) {
    const r = l.generateCameraTagKey(e, t, s);
    r && this.cache_visible.set(r, a);
  }
}
export {
  l as Cache
};
