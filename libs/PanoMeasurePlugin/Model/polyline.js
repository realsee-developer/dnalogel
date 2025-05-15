var c = Object.defineProperty;
var f = (r, i, e) => i in r ? c(r, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[i] = e;
var t = (r, i, e) => (f(r, typeof i != "symbol" ? i + "" : i, e), e);
import m from "./line.js";
import a from "./point.js";
import { uuid as v } from "../../shared-utils/uuid.js";
import { Subscribe as P } from "@realsee/five";
import "../utils/line.js";
import "../../shared-utils/five/FiveLine.js";
import "@realsee/five/line";
import "../utils/constants.js";
import "three";
import "../utils/dom/distanceItem.js";
import "../utils/dom/base.js";
import "../utils/isNDCPointInScreen.js";
import "../../shared-utils/three/centerPoint.js";
class R {
  constructor(i) {
    t(this, "id", v());
    t(this, "lines", []);
    t(this, "visiblePanoIndexes");
    t(this, "visibleFiveMode");
    t(this, "model");
    t(this, "type", "polyline");
    t(this, "hook", new P());
    this.model = i.model;
  }
  get points() {
    const i = /* @__PURE__ */ new Set();
    return this.lines.forEach((e) => {
      i.add(e.points[0]), i.add(e.points[1]);
    }), Array.from(i);
  }
  addLine(i) {
    if (this.includes(i)) {
      console.error(new Error("不能重复添加线段"));
      return;
    }
    const e = this.getLastPoint(), l = e && i.findAnotherPoint(e);
    if (e && !l) {
      console.error(new Error("传入线段无法与当前折线进行连接"));
      return;
    }
    this.lines.push(i), this.hook.emit("lineAdded", i);
  }
  removeLine(i) {
    if (this.lines.length === 0)
      return;
    if (!this.isLastLine(i)) {
      console.error(new Error("传入线段不是当前折线的最后一段"));
      return;
    }
    this.lines.pop() && this.hook.emit("lineRemoved", i);
  }
  isLastLine(i) {
    const e = this.getLastLine();
    return e ? i.id === e.id : !1;
  }
  getLastLine() {
    return this.lines.slice(-1)[0];
  }
  /**
   * @description: 获取连续线段的顶点数量
   */
  getPointLength() {
    return this.lines.length + 1;
  }
  clear() {
    const i = this.lines.slice();
    this.lines.length = 0, i.reduceRight((e, l) => this.hook.emit("lineRemoved", l), void 0);
  }
  /** 是否产生重叠 */
  overlapWith(i) {
    return i.type === "point" ? this.includes(i) : i.type === "line" ? i.points.some((e) => this.includes(e)) : i.type === "polyline" ? i.points.some((e) => this.includes(e)) : !0;
  }
  includes(i) {
    return i.type === "point" ? this.points.find(({ id: e }) => e === i.id) !== void 0 : i.type === "line" ? this.lines.find(({ id: e }) => e === i.id) !== void 0 : !1;
  }
  isEmpty() {
    return this.lines.length === 0;
  }
  getLastPoint() {
    return this.points.slice(-1)[0];
  }
  toJSON() {
    return this.toJson();
  }
  toJson() {
    return {
      id: this.id,
      lines: this.lines.map((i) => i.toJson()),
      visiblePanoIndexes: this.visiblePanoIndexes,
      visibleFiveMode: this.visibleFiveMode
    };
  }
  getPointByID(i) {
    return this.points.find(({ id: e }) => e === i);
  }
  fromJson(i) {
    this.clear(), this.id = i.id;
    const { getPoint: e } = u(), l = i.lines.map((n) => {
      const [d, p] = n.points, s = e(d), h = e(p);
      if (!s || !h)
        throw new Error("线上的点不存在");
      const o = new m(s, h, this.model);
      return o.id = n.id, o.text = n.text, o;
    });
    this.lines.push(...l), this.visiblePanoIndexes = i.visiblePanoIndexes, this.visibleFiveMode = i.visibleFiveMode;
    function u() {
      const n = /* @__PURE__ */ new Map();
      function d(s) {
        const h = n.get(s.id);
        if (h)
          return h;
        const o = new a(s.position);
        return o.id = s.id, n.set(s.id, o), o;
      }
      function p() {
        return Array.from(n.values());
      }
      return { getPoint: d, getAllPoints: p };
    }
    return this;
  }
  replace(i) {
    this.id = i.id, this.clear(), this.lines.push(...i.lines);
  }
}
export {
  R as Polyline
};
