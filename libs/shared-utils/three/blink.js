var P = Object.defineProperty, x = Object.defineProperties;
var F = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, _ = Object.prototype.propertyIsEnumerable;
var R = (r, e, t) => e in r ? P(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, o = (r, e) => {
  for (var t in e || (e = {}))
    I.call(e, t) && R(r, t, e[t]);
  if (p)
    for (var t of p(e))
      _.call(e, t) && R(r, t, e[t]);
  return r;
}, U = (r, e) => x(r, F(e));
var E = (r, e, t) => (R(r, typeof e != "symbol" ? e + "" : e, t), t);
import { anime as k } from "../../vendor/animejs/lib/anime.es.js";
import { toArray as N } from "../util.js";
import { ShaderMaterial as C } from "three";
const H = process.env.NODE_ENV === "development";
function T(r, e) {
  H && console.log(`[blink] ${r}`, e);
}
const L = {
  duration: 300,
  easing: "linear",
  direction: "alternate",
  loop: 4,
  autoplay: !1
}, A = {
  quick: { duration: 200, loop: 2 },
  normal: { duration: 300, loop: 4 },
  slow: { duration: 500, loop: 6 },
  attention: { duration: 400, loop: 8, easing: "easeInOutQuad" }
};
class W {
  constructor() {
    E(this, "materialsToUpdate", /* @__PURE__ */ new Set());
  }
  /**
   * 调度材质更新
   * @param material 需要更新的材质
   */
  scheduleUpdate(e) {
    this.materialsToUpdate.add(e);
  }
  /**
   * 批量执行材质更新
   */
  flushUpdates() {
    this.materialsToUpdate.forEach((e) => {
      e.needsUpdate = !0;
    }), this.materialsToUpdate.clear();
  }
  /**
   * 清空更新队列
   */
  clear() {
    this.materialsToUpdate.clear();
  }
}
class $ {
  constructor() {
    E(this, "startTime", 0);
    E(this, "measurements", /* @__PURE__ */ new Map());
  }
  /**
   * 开始计时
   * @param label 计时标签
   */
  start(e) {
    this.startTime = performance.now();
  }
  /**
   * 结束计时并记录
   * @param label 计时标签
   * @returns 耗时（毫秒）
   */
  end(e) {
    const t = performance.now() - this.startTime;
    return this.measurements.has(e) || this.measurements.set(e, []), this.measurements.get(e).push(t), H && T(`Performance [${e}]: ${t.toFixed(2)}ms`), t;
  }
  /**
   * 获取平均耗时
   * @param label 计时标签
   * @returns 平均耗时（毫秒）
   */
  getAverage(e) {
    const t = this.measurements.get(e);
    return !t || t.length === 0 ? 0 : t.reduce((c, l) => c + l, 0) / t.length;
  }
  /**
   * 清空所有测量数据
   */
  clear() {
    this.measurements.clear();
  }
}
class G {
  constructor() {
    E(this, "stateMap", /* @__PURE__ */ new WeakMap());
    E(this, "materialManager", new W());
    E(this, "performanceMonitor", new $());
  }
  /**
   * 存储物体状态
   * @param objects 要存储状态的对象数组
   */
  storeState(e) {
    this.performanceMonitor.start("storeState"), e.forEach((t) => {
      if (!this.stateMap.has(t)) {
        const s = this.createStateSnapshot(t);
        this.stateMap.set(t, s);
      }
    }), this.performanceMonitor.end("storeState");
  }
  /**
   * 恢复物体状态
   * @param objects 要恢复状态的对象数组
   */
  restoreState(e) {
    this.performanceMonitor.start("restoreState"), e.forEach((t) => {
      const s = this.stateMap.get(t);
      s && (this.restoreSingleState(t, s), this.stateMap.delete(t));
    }), this.materialManager.flushUpdates(), this.performanceMonitor.end("restoreState");
  }
  /**
   * 获取状态Map（用于内部访问）
   * @returns 状态Map
   * @private
   */
  getStateMap() {
    return this.stateMap;
  }
  /**
   * 创建状态快照
   * @param obj 目标对象
   * @returns 状态快照
   * @private
   */
  createStateSnapshot(e) {
    var t;
    if (e instanceof HTMLElement)
      return {
        opacity: e.style.opacity === "" ? void 0 : e.style.opacity,
        visible: {
          display: e.style.display,
          visibility: e.style.visibility
        }
      };
    if (g(e))
      if (!i(e) && e.children.length === 0 && e.name, i(e)) {
        if (n(e))
          return {
            opacity: (t = e.material.uniforms.opacity) == null ? void 0 : t.value,
            transparent: e.material.transparent,
            visible: e.visible
          };
        if (S(e))
          return {
            opacity: e.material.opacity,
            transparent: e.material.transparent,
            visible: e.visible
          };
      } else
        return {
          visible: e.visible
        };
    return {};
  }
  /**
   * 恢复单个对象状态
   * @param obj 目标对象
   * @param initialState 初始状态
   * @private
   */
  restoreSingleState(e, t) {
    e instanceof HTMLElement ? (e.style.opacity = t.opacity === void 0 ? "" : String(t.opacity), typeof t.visible == "object" && t.visible !== null && (e.style.display = t.visible.display, e.style.visibility = t.visible.visibility)) : g(e) && (typeof t.visible == "boolean" && (e.visible = t.visible), i(e) && (n(e) ? (e.material.uniforms.opacity !== void 0 && (e.material.uniforms.opacity.value = t.opacity !== void 0 ? Number(t.opacity) : 1), t.transparent !== void 0 && (e.material.transparent = t.transparent), this.materialManager.scheduleUpdate(e.material)) : S(e) && (e.material.opacity = t.opacity !== void 0 ? Number(t.opacity) : 1, t.transparent !== void 0 && (e.material.transparent = t.transparent), this.materialManager.scheduleUpdate(e.material))));
  }
  /**
   * 清空所有状态
   */
  clear() {
    this.materialManager.clear(), this.performanceMonitor.clear();
  }
}
const M = /* @__PURE__ */ new WeakMap(), v = new G();
function g(r) {
  return "isObject3D" in r && r.isObject3D === !0;
}
function i(r) {
  return g(r) && "material" in r && r.material !== void 0;
}
function n(r) {
  return i(r) && r.material instanceof C;
}
function S(r) {
  return i(r) && !(r.material instanceof C);
}
function q(r, e) {
  r instanceof HTMLElement ? r.style.opacity = String(e) : g(r) && i(r) && (n(r) ? (r.material.uniforms.opacity && (r.material.uniforms.opacity.value = e), r.material.transparent = !0) : S(r) && (r.material.opacity = e, r.material.transparent = !0));
}
function w() {
  const r = k({});
  return r.preComplete = () => {
  }, r;
}
function B(r) {
  if (!r)
    throw new Error("Invalid objects parameter: objects cannot be null or undefined");
  const e = N(r);
  if (e.length === 0)
    throw new Error("Invalid objects parameter: objects array cannot be empty");
  if (e.some((t) => t == null))
    throw new Error("Invalid objects parameter: objects array contains null or undefined values");
}
function D(r, e) {
  const t = N(r), s = [];
  return t.forEach((c) => {
    c && (c instanceof HTMLElement ? s.push(c) : g(c) && (e ? (s.push(c), c.traverse((l) => {
      l && s.push(l);
    })) : s.push(c)));
  }), Array.from(new Set(s.filter(Boolean)));
}
function Q(r, e) {
  const t = /* @__PURE__ */ new Map(), s = v.getStateMap();
  return r.forEach((c) => {
    var d;
    const l = s.get(c);
    l && t.set(c, {
      initialOpacity: Number((d = l.opacity) != null ? d : 1)
    });
  }), (c) => {
    var d, u;
    const l = c.progress;
    r.forEach((a) => {
      const f = t.get(a);
      if (!f)
        return;
      const y = f.initialOpacity * (100 - l) / 100;
      q(a, y);
    }), (d = e.onProgress) == null || d.call(e, l), (u = e.updateRender) == null || u.call(e);
  };
}
function V(r, e) {
  const t = /* @__PURE__ */ new Map(), s = v.getStateMap();
  return r.forEach((c) => {
    var u, a;
    const l = s.get(c), d = Number((a = (u = l == null ? void 0 : l.opacity) != null ? u : e == null ? void 0 : e.maxOpacity) != null ? a : 1);
    t.set(c, { maxOpacity: d });
  }), (c) => {
    var d, u;
    const l = c.progress;
    r.forEach((a) => {
      const f = t.get(a);
      if (!f)
        return;
      const y = f.maxOpacity * (l / 100);
      a instanceof HTMLElement ? (a.style.opacity = String(y), a.style.visibility = "visible") : g(a) && (N(r).includes(a) && (a.visible = !0), i(a) && (n(a) ? (a.material.uniforms.opacity && (a.material.uniforms.opacity.value = y), a.material.transparent = !0) : S(a) && (a.material.opacity = y, a.material.transparent = !0)));
    }), (d = e.onProgress) == null || d.call(e, l), (u = e.updateRender) == null || u.call(e);
  };
}
function m(r, e) {
  var t, s;
  try {
    B(r);
    const c = (t = e == null ? void 0 : e.traverseTHREEObject) != null ? t : !0, l = D(r, c);
    if (l.length === 0)
      return T("No valid targets found"), w();
    v.storeState(l);
    const d = U(o(o({}, L), e), {
      targets: l,
      update: Q(l, e || {})
    }), u = k(d);
    u.preComplete = () => {
      u.completed || (u.pause(), v.restoreState(l), setTimeout(() => {
        var f;
        return (f = e == null ? void 0 : e.updateRender) == null ? void 0 : f.call(e);
      }));
    };
    const a = M.get(r);
    return a == null || a.pause(), a == null || a.seek(0), M.set(r, u), (s = e == null ? void 0 : e.onStart) == null || s.call(e), u.play(), u.finished.then(() => {
      var f, y;
      v.restoreState(l), setTimeout(() => {
        M.get(r) === u && M.delete(r);
      }, 1e3), (f = e == null ? void 0 : e.onComplete) == null || f.call(e), (y = e == null ? void 0 : e.updateRender) == null || y.call(e), setTimeout(() => {
        var h;
        return (h = e == null ? void 0 : e.updateRender) == null ? void 0 : h.call(e);
      }, 50), setTimeout(() => {
        var h;
        return (h = e == null ? void 0 : e.updateRender) == null ? void 0 : h.call(e);
      }, 100);
    }), u;
  } catch (c) {
    return T("Blink animation failed:", c), w();
  }
}
function Y(r, e) {
  var t, s;
  try {
    B(r);
    const c = (t = e == null ? void 0 : e.traverseTHREEObject) != null ? t : !0, l = D(r, c);
    if (l.length === 0)
      return T("No valid targets found"), w();
    v.storeState(l);
    const d = U(o(o({}, L), e), {
      targets: l,
      update: V(l, e || {})
    }), u = k(d);
    u.preComplete = () => {
      u.completed || (u.pause(), v.restoreState(l), setTimeout(() => {
        var f;
        return (f = e == null ? void 0 : e.updateRender) == null ? void 0 : f.call(e);
      }));
    };
    const a = M.get(r);
    return a == null || a.pause(), a == null || a.seek(0), M.set(r, u), (s = e == null ? void 0 : e.onStart) == null || s.call(e), u.play(), u.finished.then(() => {
      var f, y;
      v.restoreState(l), setTimeout(() => {
        M.get(r) === u && M.delete(r);
      }, 1e3), (f = e == null ? void 0 : e.onComplete) == null || f.call(e), (y = e == null ? void 0 : e.updateRender) == null || y.call(e), setTimeout(() => {
        var h;
        return (h = e == null ? void 0 : e.updateRender) == null ? void 0 : h.call(e);
      }, 50), setTimeout(() => {
        var h;
        return (h = e == null ? void 0 : e.updateRender) == null ? void 0 : h.call(e);
      }, 100);
    }), u;
  } catch (c) {
    return T("ReBlink animation failed:", c), w();
  }
}
function Z(r, e, t) {
  const s = A[e];
  return m(r, o(o({}, s), t));
}
function b() {
  v.clear();
}
export {
  A as ANIME_PRESETS,
  L as DEFAULT_ANIME_CONFIG,
  M as animeMap,
  m as blink,
  Z as blinkWithPreset,
  b as cleanup,
  Y as reblink
};
