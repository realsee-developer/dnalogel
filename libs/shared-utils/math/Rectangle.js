var r = Object.defineProperty;
var s = (e, t, n) => t in e ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var a = (e, t, n) => (s(e, typeof t != "symbol" ? t + "" : t, n), n);
import { Interval as i } from "./Interval.js";
class h {
  constructor(t, n) {
    a(this, "min");
    a(this, "max");
    a(this, "xInterval");
    a(this, "yInterval");
    a(this, "isRectangle", !0);
    this.min = t, this.max = n, this.xInterval = new i(this.min.x, this.max.x), this.yInterval = new i(this.min.y, this.max.y);
  }
  /** 是否与矩形是否重叠 */
  isOverlapWithRectangle(t) {
    return !this.xInterval.isOverlap(t.xInterval) && !this.yInterval.isOverlap(t.yInterval);
  }
  /** 是否包含目标矩形 */
  containsRect(t) {
    return this.xInterval.contains(t.xInterval) && this.yInterval.contains(t.yInterval);
  }
}
export {
  h as Rectangle
};
