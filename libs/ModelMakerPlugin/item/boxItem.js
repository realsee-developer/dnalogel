import { ModelMakerPolygonItem as r } from "./polygonItem.js";
import "./baseItem.js";
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
class q extends r {
  constructor(...o) {
    super(...o);
  }
}
export {
  q as ModelMakerBoxItem
};
