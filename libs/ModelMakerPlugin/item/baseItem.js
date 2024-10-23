var m = Object.defineProperty;
var n = (o, e, t) => e in o ? m(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var i = (o, e, t) => (n(o, typeof e != "symbol" ? e + "" : e, t), t);
import * as d from "three";
import { addIfNotExists as l } from "../../shared-utils/three/addIfNotExists.js";
import { Subscribe as p } from "../../shared-utils/Subscribe.js";
import { tag as a } from "../../shared-utils/tag.js";
import { boundingBox as v } from "../../shared-utils/three/boundingBox.js";
import { getFiveDomEvent as c } from "../utils/getFiveDomEvent.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/isTouchDevice.js";
class S extends p {
  constructor(t) {
    var s, r;
    super();
    i(this, "type");
    i(this, "tag");
    i(this, "rawData");
    i(this, "model");
    i(this, "five");
    i(this, "group");
    i(this, "fiveDomEvents");
    this.five = t.five, this.model = t.model, this.group = t.group, this.type = t.type, this.rawData = t.rawData, this.fiveDomEvents = c(this.five);
    const h = (r = (s = t.position) != null ? s : this.model.center) != null ? r : v(this.model).getCenter(new d.Vector3());
    this.tag = a(this.five, h, { wrapper: t.tagWrapper });
  }
  get container() {
    return this.tag.container;
  }
  get state() {
    return {
      visible: this.model.visible,
      enabled: this.group.children.includes(this.model)
    };
  }
  show() {
    this.tag.show(), this.model.visible = !0, this.five.needsRender = !0, this.emit("show");
  }
  hide() {
    this.tag.hide(), this.model.visible = !1, this.five.needsRender = !0, this.emit("hide");
  }
  enable() {
    l(this.group, this.model), this.five.needsRender = !0, this.model.updateMatrixWorld(!0), this.tag.setTransformMatrix(this.model.matrixWorld), this.tag.enable();
    const t = this.onClick.bind(this);
    this.fiveDomEvents.addEventListener(this.model, "click", t), this.emit("enable");
  }
  disable() {
    this.group.remove(this.model), this.five.needsRender = !0, this.tag.disable(), this.fiveDomEvents.removeEventListener(this.model, "click"), this.emit("disable");
  }
  onClick() {
    return this.emit("click", this);
  }
}
export {
  S as ModelMakerBaseItem
};
