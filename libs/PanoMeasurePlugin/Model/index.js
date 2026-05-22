var t = Object.defineProperty;
var l = (s, e, i) => e in s ? t(s, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[e] = i;
var r = (s, e, i) => (l(s, typeof e != "symbol" ? e + "" : e, i), i);
import { Subscribe as n } from "../../shared-utils/Subscribe.js";
import { Polyline as p } from "./polyline.js";
import "./line.js";
import "../../shared-utils/uuid.js";
import "../utils/line.js";
import "../../shared-utils/five/FiveLine.js";
import "@realsee/five/line";
import "../utils/constants.js";
import "three";
import "@realsee/five";
import "../utils/dom/distanceItem.js";
import "../utils/dom/base.js";
import "../utils/isNDCPointInScreen.js";
import "../../shared-utils/three/centerPoint.js";
import "./point.js";
class x {
  constructor(e) {
    r(this, "config");
    r(this, "polylines", []);
    r(this, "areas", []);
    r(this, "hook", new n());
    this.config = e;
  }
  addPolyline(e) {
    if (this.includes(e)) {
      console.error(new Error("不能重复添加 polyline"));
      return;
    }
    this.polylines.push(e), this.hook.emit("polylineAdded", e);
  }
  addArea(e) {
    if (this.areas.find(({ id: i }) => i === e.id) !== void 0) {
      console.error(new Error("不能重复添加 area"));
      return;
    }
    this.areas.push(e), this.hook.emit("areaAdded", e);
  }
  replacePolylineByID(e, i) {
    const o = this.getPolylineByID(e);
    o == null || o.replace(i);
  }
  removePolyline(e) {
    const i = this.polylines.findIndex(({ id: o }) => o === e.id);
    if (i === -1) {
      console.error(new Error("polyline 不存在"));
      return;
    }
    this.polylines.splice(i, 1), this.hook.emit("polylineRemoved", e);
  }
  removeArea(e) {
    const i = this.areas.findIndex(({ id: o }) => o === e.id);
    if (i === -1) {
      console.error(new Error("area 不存在"));
      return;
    }
    this.areas.splice(i, 1);
  }
  getPolylineByID(e) {
    return this.polylines.find((i) => i.id === e);
  }
  getPolylineByLine(e) {
    return this.polylines.find((i) => i.includes(e));
  }
  getLineByID(e) {
    return this.getAllLines().find((i) => i.id === e);
  }
  getAllLines() {
    return this.polylines.map((e) => e.lines).flat(1);
  }
  getAllAreas() {
    return this.areas;
  }
  getAllPoints() {
    return this.polylines.map((e) => e.points).flat(1);
  }
  includes(e) {
    return this.polylines.find(({ id: i }) => i === e.id) !== void 0;
  }
  clear() {
    this.polylines.forEach((e) => this.hook.emit("polylineRemoved", e)), this.areas.forEach((e) => e.dispose()), this.polylines.splice(0, this.polylines.length), this.areas.splice(0, this.areas.length);
  }
  dispose() {
    this.clear();
  }
  getClosestPoint() {
  }
  parse(e) {
    this.clear(), this.polylines.push(...e.polylines.map((i) => new p({ model: this }).fromJson(i))), this.polylines.forEach((i) => this.hook.emit("polylineAdded", i));
  }
  toJson() {
    return {
      polylines: this.polylines.map((e) => e.toJson()).filter((e) => e.lines.length > 0)
    };
  }
}
export {
  x as Model
};
