var m = Object.defineProperty;
var l = (s, e, i) => e in s ? m(s, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[e] = i;
var t = (s, e, i) => (l(s, typeof e != "symbol" ? e + "" : e, i), i);
import { Color as u } from "three";
import h from "../Model/line.js";
import r from "../Model/point.js";
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
class C {
  constructor(e) {
    t(this, "model");
    t(this, "five");
    t(this, "group");
    t(this, "config");
    t(this, "dashed");
    t(this, "perpendicularDashed");
    t(this, "disposed", !1);
    t(this, "isMobile");
    t(this, "editParams");
    t(this, "magnifierParams");
    t(this, "mouseGroup");
    t(this, "container");
    t(this, "hook");
    t(this, "magnifier");
    t(this, "userDistanceItemCreator");
    t(this, "workUtil");
    t(this, "getMeasureType");
    t(this, "updateDistanceUI", () => {
      this.dashed.distanceItem.update(this.five), this.model.getAllLines().forEach((e) => e.distanceItem.update(this.five));
    });
    t(this, "updateAreaUI", () => {
      this.dashed.distanceItem.update(this.five), this.model.getAllAreas().forEach((e) => {
        e.areaItem.updateArea(this.five), e.polyline.lines.forEach((i) => {
          i.distanceItem.update(this.five);
        });
      });
    });
    var n, o;
    this.five = e.five, this.hook = e.hook, this.model = e.model, this.getMeasureType = e.getMeasureType, this.config = e.config, this.magnifierParams = e.magnifierParams, this.editParams = e.editParams, this.magnifier = e.magnifier, this.container = e.container, this.isMobile = (o = (n = e.openParams) == null ? void 0 : n.isMobile) != null ? o : !1, this.workUtil = e.workUtil, this.userDistanceItemCreator = e.userDistanceItemCreator, this.group = e.group, this.mouseGroup = e.mouseGroup, this.dashed = new h(new r([0, 0, 0]), new r([0, 0, 0]), this.model), this.dashed.distanceItem.setCanSelect(!1), this.dashed.mesh.setMaterial({ dashed: !0, dashScale: 100 }), this.dashed.mesh.name = "dashLine", this.perpendicularDashed = new h(new r([0, 0, 0]), new r([0, 0, 0]), this.model), this.perpendicularDashed.distanceItem.setCanSelect(!1), this.perpendicularDashed.mesh.setMaterial({ dashed: !0, dashScale: 40, color: new u(10218089) }), this.perpendicularDashed.mesh.name = "perpendicularDashLine";
    const i = this.five.getElement();
    i && (i.addEventListener("touchstart", a), i.addEventListener("contextmenu", a));
  }
  get currentMeasureType() {
    return this.getMeasureType();
  }
  removeLine(e) {
    this.group.remove(e.mesh, e.lightMesh), e.distanceItem.remove(), this.five.needsRender = !0;
  }
  updateMouseGroup(e, i) {
    if (!e)
      return this.mouseGroup;
    if (this.mouseGroup.position.copy(e.point), i)
      this.mouseGroup.quaternion.copy(i.quaternion);
    else if (e.face) {
      const o = e.face.normal.clone().multiplyScalar(0.05), d = e.point.clone().add(o).clone().add(o);
      this.mouseGroup.lookAt(d);
    }
    return this.mouseGroup;
  }
  dispose() {
    this.disposed = !0, this.magnifier.disable(), this.model.getAllLines().forEach((i) => this.removeLine(i)), this.model.areas.forEach((i) => i.remove());
    const e = this.five.getElement();
    e && (e.removeEventListener("touchstart", a), e.removeEventListener("contextmenu", a));
  }
}
export {
  C as default
};
