import { FiveDomEvents as n } from "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "three";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/three/core/Raycaster.js";
let t;
const v = (e) => ((!t || e !== t.five) && (t = {
  instance: new n(e, { noEmitWhenHide: !0, noEmitWhenNotInScene: !0 }),
  five: e
}), t.instance);
export {
  v as getFiveDomEvent
};