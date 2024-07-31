var n = Object.defineProperty;
var d = (s, t, e) => t in s ? n(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var i = (s, t, e) => (d(s, typeof t != "symbol" ? t + "" : t, e), e);
import * as m from "three";
import { addIfNotExists as l } from "../../shared-utils/three/addIfNotExists.js";
import { Subscribe as a } from "../../shared-utils/Subscribe.js";
import { tag as v } from "../../shared-utils/tag.js";
import { boundingBox as p } from "../../shared-utils/Object3DHelper/utils/boundingBox.js";
import { getFiveDomEvent as c } from "../utils/getFiveDomEvent.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/five/calculateThreeMouse.js";
class C extends a {
  constructor(e) {
    var o, r;
    super();
    i(this, "type");
    i(this, "tag");
    i(this, "rawData");
    i(this, "model");
    i(this, "five");
    i(this, "group");
    i(this, "fiveDomEvents");
    this.five = e.five, this.model = e.model, this.group = e.group, this.type = e.type, this.rawData = e.rawData, this.fiveDomEvents = c(this.five);
    const h = (r = (o = e.position) != null ? o : this.model.center) != null ? r : p(this.model).getCenter(new m.Vector3());
    this.tag = v(this.five, h, { wrapper: e.tagWrapper });
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
    const e = this.onClick.bind(this);
    this.fiveDomEvents.addEventListener(this.model, "click", e), this.emit("enable");
  }
  disable() {
    this.group.remove(this.model), this.five.needsRender = !0, this.tag.disable(), this.fiveDomEvents.removeEventListener(this.model, "click"), this.emit("disable");
  }
  onClick() {
    return this.emit("click", this);
  }
}
export {
  C as ModelMakerBaseItem
};
