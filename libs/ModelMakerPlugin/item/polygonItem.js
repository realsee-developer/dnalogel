var r = Object.defineProperty;
var s = (t, i, e) => i in t ? r(t, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[i] = e;
var o = (t, i, e) => (s(t, typeof i != "symbol" ? i + "" : i, e), e);
import { ModelMakerBaseItem as p } from "./baseItem.js";
import "three";
import "../../shared-utils/three/addIfNotExists.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/three/boundingBox.js";
import "../../shared-utils/three/core/Sphere.js";
import "../utils/getFiveDomEvent.js";
import "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/isTouchDevice.js";
class R extends p {
  constructor(...e) {
    super(...e);
    o(this, "hideTag", () => {
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
    return this.tag.visible ? this.tag.hide() : this.tag.show(), super.onClick(), !0;
  }
}
export {
  R as ModelMakerPolygonItem
};
