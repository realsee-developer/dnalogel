var f = Object.defineProperty, g = Object.defineProperties;
var v = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
var d = (o, e, t) => e in o ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, m = (o, e) => {
  for (var t in e || (e = {}))
    E.call(e, t) && d(o, t, e[t]);
  if (l)
    for (var t of l(e))
      I.call(e, t) && d(o, t, e[t]);
  return o;
}, u = (o, e) => g(o, v(e));
var i = (o, e, t) => (d(o, typeof e != "symbol" ? e + "" : e, t), t);
import { Color as M } from "three";
import p from "../Model/line.js";
import n from "../Model/point.js";
import { preventDefault as a } from "../utils/ironbox.js";
import "../../shared-utils/uuid.js";
import "../utils/line.js";
import "../../shared-utils/five/FiveLine.js";
import "@realsee/five/line";
import "../utils/constants.js";
import "@realsee/five";
import "../utils/dom/distanceItem.js";
import "../utils/dom/base.js";
import "../utils/isNDCPointInScreen.js";
import "../../shared-utils/three/centerPoint.js";
class V {
  constructor(e) {
    i(this, "model");
    i(this, "five");
    i(this, "group");
    i(this, "config");
    i(this, "dashed");
    i(this, "perpendicularDashed");
    i(this, "disposed", !1);
    i(this, "isMobile");
    i(this, "editParams");
    i(this, "magnifierParams");
    i(this, "mouseGroup");
    i(this, "container");
    i(this, "hook");
    i(this, "magnifier");
    i(this, "userDistanceItemCreator");
    i(this, "pointSelectorConfig");
    i(this, "workUtil");
    i(this, "getMeasureType");
    i(this, "updateDistanceUI", () => {
      this.dashed.distanceItem.update(this.five), this.model.getAllLines().forEach((e) => e.distanceItem.update(this.five));
    });
    i(this, "updateAreaUI", () => {
      this.dashed.distanceItem.update(this.five), this.model.getAllAreas().forEach((e) => {
        e.areaItem.updateArea(this.five), e.polyline.lines.forEach((t) => {
          t.distanceItem.update(this.five);
        });
      });
    });
    var s, r, h;
    this.five = e.five, this.hook = e.hook, this.model = e.model, this.getMeasureType = e.getMeasureType, this.config = e.config, this.editParams = e.editParams, this.magnifierParams = e.magnifierParams, this.magnifier = e.magnifier, this.pointSelectorConfig = u(m({}, e.pointSelectorConfig), {
      helper: m({ magnifierParams: e.magnifierParams }, (s = e.pointSelectorConfig) == null ? void 0 : s.helper)
    }), this.container = e.container, this.isMobile = (h = (r = e.openParams) == null ? void 0 : r.isMobile) != null ? h : !1, this.workUtil = e.workUtil, this.userDistanceItemCreator = e.userDistanceItemCreator, this.group = e.group, this.mouseGroup = e.mouseGroup, this.dashed = new p(new n([0, 0, 0]), new n([0, 0, 0]), this.model), this.dashed.distanceItem.setCanSelect(!1), this.dashed.mesh.setMaterial({ dashed: !0, dashScale: 100 }), this.dashed.mesh.name = "dashLine", this.perpendicularDashed = new p(new n([0, 0, 0]), new n([0, 0, 0]), this.model), this.perpendicularDashed.distanceItem.setCanSelect(!1), this.perpendicularDashed.mesh.setMaterial({ dashed: !0, dashScale: 40, color: new M(10218089) }), this.perpendicularDashed.mesh.name = "perpendicularDashLine";
    const t = this.five.getElement();
    t && (t.addEventListener("touchstart", a), t.addEventListener("contextmenu", a));
  }
  get currentMeasureType() {
    return this.getMeasureType();
  }
  removeLine(e) {
    this.group.remove(e.mesh, e.lightMesh), e.distanceItem.remove(), this.five.needsRender = !0;
  }
  updateMouseGroup(e, t) {
    if (!e)
      return this.mouseGroup;
    if (this.mouseGroup.position.copy(e.point), t)
      this.mouseGroup.quaternion.copy(t.quaternion);
    else if (e.face) {
      const r = e.face.normal.clone().multiplyScalar(0.05), c = e.point.clone().add(r).clone().add(r);
      this.mouseGroup.lookAt(c);
    }
    return this.mouseGroup;
  }
  dispose() {
    var t;
    this.disposed = !0, (t = this.magnifier) == null || t.disable(), this.model.getAllLines().forEach((s) => this.removeLine(s)), this.model.areas.forEach((s) => s.remove());
    const e = this.five.getElement();
    e && (e.removeEventListener("touchstart", a), e.removeEventListener("contextmenu", a));
  }
}
export {
  V as default
};
