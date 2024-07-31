var o = Object.defineProperty;
var r = (t, e, i) => e in t ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var s = (t, e, i) => (r(t, typeof e != "symbol" ? e + "" : e, i), i);
import { ModelMakerBaseItem as h } from "./baseItem.js";
import "three";
import "../../shared-utils/three/addIfNotExists.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Object3DHelper/utils/boundingBox.js";
import "../utils/getFiveDomEvent.js";
import "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/five/calculateThreeMouse.js";
class q extends h {
  constructor(...i) {
    super(...i);
    s(this, "hideTag", () => {
      this.tag.hide();
    });
    this.enable(), this.tag.hide();
  }
  enable() {
    super.enable(), this.five.on("mode.change.request", this.hideTag), this.five.on("pano.request", this.hideTag);
  }
  disable() {
    super.disable(), this.five.off("mode.change.request", this.hideTag), this.five.off("pano.request", this.hideTag);
  }
  show() {
    this.model.visible = !0, this.five.needsRender = !0;
  }
  onClick() {
    return this.tag.visible ? this.tag.hide({ withAnimation: !0 }) : this.tag.show(), super.onClick(), !0;
  }
}
export {
  q as ModelMakerPolygonItem
};
