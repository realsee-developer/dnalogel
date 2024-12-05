var k = Object.defineProperty;
var h = (s, e, r) => e in s ? k(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r;
var f = (s, e, r) => (h(s, typeof e != "symbol" ? e + "" : e, r), r);
import { BaseUtil as m } from "./BaseUtil.js";
import * as d from "three";
import { transformPosition as a } from "../five/transformPosition.js";
const n = /* @__PURE__ */ new Map();
class v extends m {
  constructor(r) {
    super(r);
    f(this, "_workCode");
  }
  get fromType() {
    var t, i;
    const r = this.workCode;
    if (n.has(r))
      return n.get(r);
    const o = (i = (t = JSON.parse(this.work.raw.works[0])) == null ? void 0 : t.from_type) != null ? i : "vr";
    return n.set(r, o), o;
  }
  /**
   * @description 设置插件当前的 workCode
   */
  set workCode(r) {
    this._workCode = r;
  }
  /**
   * @description 获取插件当前的 workCode
   */
  get workCode() {
    var r;
    return (r = this._workCode) != null ? r : this.five.state.workCode;
  }
  /**
   * @description 获取当前的 work
   */
  get work() {
    var r, o;
    return (o = (r = this.five.works) == null ? void 0 : r.find((t) => t.workCode === this.workCode)) != null ? o : this.five.work;
  }
  get observers() {
    var r;
    return (r = this.work) == null ? void 0 : r.observers;
  }
  get transform() {
    var o, t, i, w;
    const r = (w = (o = this.work) == null ? void 0 : o.transform) != null ? w : (i = (t = this.work) == null ? void 0 : t.options) == null ? void 0 : i.transform;
    return r ? r.clone() : new d.Matrix4();
  }
  /**
   * @description 获取全景点坐标
   */
  getObserverPosition(r) {
    var t;
    const o = (t = this.getObserver(r)) == null ? void 0 : t.position;
    if (o)
      return a(o, this.transform);
  }
  /**
   * @description 获取全景点位和模型的地面坐标
   */
  getObserverStandingPosition(r) {
    var t;
    const o = (t = this.getObserver(r)) == null ? void 0 : t.standingPosition;
    if (o)
      return a(o, this.transform);
  }
  /**
   * @description 获取observer
   */
  getObserver(r) {
    var o;
    return (o = this.observers) == null ? void 0 : o[r];
  }
}
export {
  v as WorkUtil
};
