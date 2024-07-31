import { FiveDomEvents as n } from "../../shared-utils/five/FiveDomEvents.js";
import "three";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../../shared-utils/five/getFiveModel.js";
let t;
const s = (e) => ((!t || e !== t.five) && (t = {
  instance: new n(e, { noEmitWhenHide: !0, noEmitWhenNotInScene: !0 }),
  five: e
}), t.instance);
export {
  s as getFiveDomEvent
};
