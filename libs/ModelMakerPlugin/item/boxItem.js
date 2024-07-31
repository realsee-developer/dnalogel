import { ModelMakerPolygonItem as r } from "./polygonItem.js";
import "./baseItem.js";
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
class I extends r {
  constructor(...o) {
    super(...o);
  }
}
export {
  I as ModelMakerBoxItem
};
