var l = Object.defineProperty;
var m = (s, t, i) => t in s ? l(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i;
var e = (s, t, i) => (m(s, typeof t != "symbol" ? t + "" : t, i), i);
import { uuid as p } from "../../shared-utils/uuid.js";
import { createLineMesh as n } from "../utils/line.js";
import { Subscribe as c } from "@realsee/five";
import { DistanceItem as d } from "../utils/dom/distanceItem.js";
import "../../shared-utils/five/FiveLine.js";
import "@realsee/five/line";
import "../utils/constants.js";
import "three";
import "../utils/dom/base.js";
import "../utils/isNDCPointInScreen.js";
import "../../shared-utils/three/centerPoint.js";
class r {
  constructor(t, i, o) {
    e(this, "id");
    e(this, "selected", !1);
    e(this, "text");
    e(this, "type", "line");
    e(this, "model");
    e(this, "mesh");
    e(this, "points");
    e(this, "lightMesh");
    e(this, "hook");
    e(this, "distanceItem");
    e(this, "polyline");
    e(this, "visible");
    var h;
    if (this.id = p(), this.model = o, t.id === i.id)
      throw new Error("无效的线段, 一个点无法构成线段");
    typeof o.config.defaultText == "string" && (this.text = o.config.defaultText), this.hook = new c(), this.points = [t, i], this.mesh = n(this, "normal"), this.lightMesh = n(this, "light"), this.distanceItem = new d({
      line: this,
      clickCallback: () => this.hook.emit("selected", this),
      userDistanceItem: (h = this.model.config) != null && h.userDistanceItemCreator ? this.model.config.userDistanceItemCreator() : void 0
    });
  }
  hide() {
    this.visible && (this.visible = !1, this.mesh.visible = !1, this.distanceItem.hide());
  }
  show() {
    this.visible || (this.visible = !0, this.mesh.visible = !0, this.distanceItem.show());
  }
  setPoints(t, i) {
    this.points[0].position.copy(t), this.points[1].position.copy(i), this.mesh.setPoints(t, i);
  }
  remove() {
    this.mesh.parent && this.mesh.parent.remove(this.mesh), this.distanceItem.remove();
  }
  clear() {
    this.selected = !1, this.polyline = void 0;
  }
  isEmpty() {
    return this.points.length === 0;
  }
  getPolyline() {
    if (this.polyline)
      return this.polyline;
    const t = this.model.polylines.find((i) => i.lines.includes(this));
    if (t)
      return this.polyline = t, t;
  }
  findAnotherPoint(t) {
    return this.points.find(({ id: i }) => i !== t.id);
  }
  setText(t) {
    this.text = t, this.hook.emit("textChanged", t);
  }
  toJSON() {
    return this.toJson();
  }
  toJson() {
    return { id: this.id, points: this.points.map((t) => t.toJson()), text: this.text };
  }
  clone() {
    const t = new r(this.points[0].clone(), this.points[1].clone(), this.model);
    return t.text = this.text, t;
  }
}
export {
  r as default
};
