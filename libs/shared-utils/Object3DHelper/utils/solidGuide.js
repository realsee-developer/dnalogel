var b = Object.defineProperty;
var y = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var g = (o, t, e) => t in o ? b(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, m = (o, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && g(o, e, t[e]);
  if (y)
    for (var e of y(t))
      w.call(t, e) && g(o, e, t[e]);
  return o;
};
var p = (o, t, e) => (g(o, typeof t != "symbol" ? t + "" : t, e), e);
import { RENDER_ORDER as M } from "../Constants/RenderOrder.js";
import * as u from "three";
function x(o, t) {
  let e = 10, r = 10;
  const i = o.isPerspectiveCamera, l = o.isOrthographicCamera;
  if (i) {
    const n = o, f = n.position.distanceTo(t), L = n.fov * Math.PI / 180;
    r = 2 * Math.tan(L / 2) * f, e = r * n.aspect;
  } else if (l) {
    const n = o;
    e = Math.abs(n.right - n.left), r = Math.abs(n.top - n.bottom);
  }
  const c = Math.sqrt(e * e + r * r), s = c * 0.8, a = Math.min(e, r) * 0.25, d = c * 1.2;
  return Math.max(a, Math.min(s, d));
}
class v {
  constructor(t, e, r) {
    p(this, "camera");
    p(this, "container");
    p(this, "defaults");
    this.camera = t, this.container = e, this.defaults = m({}, r || {});
  }
  /** 创建无限长直线（Line + LineBasicMaterial），穿过整个平面 */
  createSolidLine(t, e, r) {
    const i = m(m({ color: 16777215, renderOrder: M.DRAG_GUIDE_LINE }, this.defaults), r || {}), l = e.clone().normalize(), c = this.computeInfiniteLineLength(t), s = t.clone().add(l.clone().multiplyScalar(-c)), a = t.clone().add(l.clone().multiplyScalar(c)), d = new Float32Array([s.x, s.y, s.z, a.x, a.y, a.z]), h = new u.BufferGeometry();
    h.setAttribute("position", new u.BufferAttribute(d, 3));
    const n = new u.LineBasicMaterial({
      color: i.color,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0,
      opacity: 0.65
    }), f = new u.Line(h, n);
    return f.renderOrder = i.renderOrder, f;
  }
  /** 更新已创建的直线，使其始终穿过整个平面 */
  updateSolidLine(t, e, r, i) {
    const l = r.clone().normalize(), c = this.computeInfiniteLineLength(e), s = e.clone().add(l.clone().multiplyScalar(-c)), a = e.clone().add(l.clone().multiplyScalar(c)), d = new Float32Array([s.x, s.y, s.z, a.x, a.y, a.z]), h = t.geometry, n = h.getAttribute("position");
    n && n.itemSize === 3 && n.array.length === d.length ? (n.array.set(d), n.needsUpdate = !0) : h.setAttribute("position", new u.BufferAttribute(d, 3)), (i == null ? void 0 : i.color) !== void 0 && t.material.color.setHex(i.color);
  }
  /** 计算"无限"直线的长度，确保穿过整个可视区域 */
  computeInfiniteLineLength(t) {
    return x(this.camera, t) * 10;
  }
  /** 释放直线的几何与材质 */
  dispose(t) {
    if (!t)
      return;
    t.geometry.dispose();
    const e = t.material;
    Array.isArray(e) ? e.forEach((r) => r.dispose()) : e.dispose();
  }
  /** 更新默认配置 */
  updateDefaults(t) {
    this.defaults = m(m({}, this.defaults), t);
  }
}
export {
  v as SolidGuideLine
};
