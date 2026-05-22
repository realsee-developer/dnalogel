var s = Object.defineProperty;
var a = (t, i, m) => i in t ? s(t, i, { enumerable: !0, configurable: !0, writable: !0, value: m }) : t[i] = m;
var n = (t, i, m) => (a(t, typeof i != "symbol" ? i + "" : i, m), m);
class h {
  constructor(i = 0, m = 0) {
    n(this, "min");
    n(this, "max");
    n(this, "isInterval", !0);
    this.min = i, this.max = m;
  }
  fromArray(i) {
    return this.min = i[0], this.max = i[1], this;
  }
  /** 两个区间是否重叠 */
  isOverlap(i) {
    return Math.min(this.max, i.max) < Math.max(this.min, i.min);
  }
  /** 是否包含区间 */
  contains(i) {
    return this.min < i.min && this.max > i.max;
  }
}
export {
  h as Interval
};
