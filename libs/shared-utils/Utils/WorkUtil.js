var a = Object.defineProperty;
var h = (s, t, r) => t in s ? a(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[t] = r;
var k = (s, t, r) => (h(s, typeof t != "symbol" ? t + "" : t, r), r);
import { BaseUtil as d } from "./BaseUtil.js";
import * as v from "three";
import { transformPosition as f } from "../five/transformPosition.js";
const n = /* @__PURE__ */ new Map();
class c extends d {
  constructor(r) {
    super(r);
    k(this, "_workCode");
  }
  get fromType() {
    var e, i;
    const r = this.workCode;
    if (n.has(r))
      return n.get(r);
    const o = (i = (e = JSON.parse(this.work.raw.works[0])) == null ? void 0 : e.from_type) != null ? i : "vr";
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
    return (o = (r = this.five.works) == null ? void 0 : r.find((e) => e.workCode === this.workCode)) != null ? o : this.five.work;
  }
  get observers() {
    var r;
    return (r = this.work) == null ? void 0 : r.observers;
  }
  get transform() {
    var o, e, i, w;
    const r = (w = (o = this.work) == null ? void 0 : o.transform) != null ? w : (i = (e = this.work) == null ? void 0 : e.options) == null ? void 0 : i.transform;
    return r ? r.clone() : new v.Matrix4();
  }
  getResolvedObserver(r) {
    return this.five.works.getResolvedObserver({ workCode: this.workCode, panoIndex: r });
  }
  /**
   * @description 获取全景点坐标
   */
  getObserverPosition(r) {
    var e;
    const o = (e = this.getObserver(r)) == null ? void 0 : e.position;
    if (o)
      return f(o, this.transform);
  }
  /**
   * @description 获取全景点位和模型的地面坐标
   */
  getObserverStandingPosition(r) {
    var e;
    const o = (e = this.getObserver(r)) == null ? void 0 : e.standingPosition;
    if (o)
      return f(o, this.transform);
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
  c as WorkUtil
};
