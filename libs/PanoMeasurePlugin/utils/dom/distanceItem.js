var j = Object.defineProperty, w = Object.defineProperties;
var H = Object.getOwnPropertyDescriptors;
var P = Object.getOwnPropertySymbols;
var z = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
var u = (n, e, t) => e in n ? j(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, y = (n, e) => {
  for (var t in e || (e = {}))
    z.call(e, t) && u(n, t, e[t]);
  if (P)
    for (var t of P(e))
      F.call(e, t) && u(n, t, e[t]);
  return n;
}, b = (n, e) => w(n, H(e));
var C = (n, e, t) => (u(n, typeof e != "symbol" ? e + "" : e, t), t);
import { ItemDom as Y } from "./base.js";
import { Vector2 as I } from "three";
import { isNDCPointInFront as g } from "../isNDCPointInScreen.js";
import { centerPoint as k } from "../../../shared-utils/three/centerPoint.js";
class B extends Y {
  constructor(t) {
    var o;
    t.contentStyle = b(y({}, t.contentStyle), {
      background: "rgba(195,195,195,0.70)",
      border: "0.5px solid rgba(255,255,255,0.6)",
      borderRadius: "999px"
    });
    super(t);
    C(this, "line");
    this.line = t.line, (o = this.params.userDistanceItem) != null && o.element ? this.containerDom.appendChild(this.params.userDistanceItem.element) : this.containerDom.appendChild(this.contentDom);
  }
  update(t) {
    var D;
    if (this.line.mesh.visible === !1) {
      this.hide();
      return;
    }
    const o = t.getElement();
    if (!o)
      return;
    const a = o.clientWidth, r = o.clientHeight, d = a / 2, c = r / 2;
    if (this.line.points.length < 2)
      return;
    const [l, h] = this.line.points.map(($) => $.position.clone().applyMatrix4(this.line.mesh.matrixWorld)), i = l.clone().project(t.camera), s = h.clone().project(t.camera), m = k(l, h).clone().project(t.camera), p = new I(i.x * d, i.y * c), f = new I(s.x * d, s.y * c), x = p.distanceTo(f);
    if ((() => !(Math.abs(i.z) > 1 || Math.abs(s.z) > 1 || !g(i) && !g(s) || !g(m) || x === 0))() === !1) {
      this.hide();
      return;
    }
    const S = (m.x + 1) / 2 * a, E = -(m.y - 1) / 2 * r, M = -(Math.atan((p.y - f.y) / (p.x - f.x)) * 180) / Math.PI, W = this.containerDom.parentElement && this.contentDom.clientWidth > x ? -20 : 0;
    this.containerDom.style.transform = `translate(${S}px, ${E}px) rotate(${M}deg) translateY(${W}px)`, this.show(), (D = this.params.userDistanceItem) == null || D.update({ line: this.line, polyline: this.line.getPolyline() });
    const T = this.getCurrentContent();
    this.contentDom.innerText = T;
  }
  /** 获取内容文本 */
  getCurrentContent() {
    var l, h, i, s;
    if (this.line.points.length < 2)
      return "";
    const [t, o] = this.line.points, a = t.position.clone().distanceTo(o.position), r = (h = this.line.text) != null ? h : (l = this.line.model.config) == null ? void 0 : l.defaultText, d = (s = (i = this.line.model.config) == null ? void 0 : i.getDistanceText) == null ? void 0 : s.call(i, a), c = r != null ? r : d;
    return c != null ? c : a.toFixed(2) + "m";
  }
}
export {
  B as DistanceItem
};
