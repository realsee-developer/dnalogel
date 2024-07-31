var w = Object.defineProperty;
var a = (e, s, r) => s in e ? w(e, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[s] = r;
var f = (e, s, r) => (a(e, typeof s != "symbol" ? s + "" : s, r), r);
import { BaseUtil as h } from "./BaseUtil.js";
import * as m from "three";
import { transformPosition as k } from "../five/transformPosition.js";
class p extends h {
  constructor(r) {
    super(r);
    f(this, "_workCode");
  }
  /**
   * @description: 设置插件当前的 workCode
   */
  set workCode(r) {
    this._workCode = r;
  }
  /**
   * @description: 获取插件当前的 workCode
   */
  get workCode() {
    var r;
    return (r = this._workCode) != null ? r : this.five.state.workCode;
  }
  /**
   * @description: 获取当前的 work
   */
  get work() {
    var r, t;
    return (t = (r = this.five.works) == null ? void 0 : r.find((o) => o.workCode === this.workCode)) != null ? t : this.five.work;
  }
  get observers() {
    return this.work.observers;
  }
  get transform() {
    var t, o, i, n;
    const r = (n = (t = this.work) == null ? void 0 : t.transform) != null ? n : (i = (o = this.work) == null ? void 0 : o.options) == null ? void 0 : i.transform;
    return r ? r.clone() : new m.Matrix4();
  }
  /**
   * @description: 获取全景点坐标
   */
  getObserverPosition(r) {
    var o;
    const t = (o = this.getObserver(r)) == null ? void 0 : o.position;
    if (t)
      return k(t, this.transform);
  }
  /**
   * @description: 获取全景点位和模型的地面坐标
   */
  getObserverStandingPosition(r) {
    var o;
    const t = (o = this.getObserver(r)) == null ? void 0 : o.standingPosition;
    if (t)
      return k(t, this.transform);
  }
  /**
   * @description: 获取observer
   */
  getObserver(r) {
    var t;
    return (t = this.observers) == null ? void 0 : t[r];
  }
}
export {
  p as WorkUtil
};
