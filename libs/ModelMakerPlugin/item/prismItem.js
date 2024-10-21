var c = Object.defineProperty, l = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var i = (t, o, r) => o in t ? c(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, e = (t, o) => {
  for (var r in o || (o = {}))
    d.call(o, r) && i(t, r, o[r]);
  if (p)
    for (var r of p(o))
      b.call(o, r) && i(t, r, o[r]);
  return t;
}, s = (t, o) => l(t, x(o));
import { boundingBox as M, boxVertex as n } from "../../shared-utils/three/boundingBox.js";
import { ModelMakerBaseItem as f } from "./baseItem.js";
import * as u from "three";
import "../../shared-utils/three/core/Sphere.js";
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
import "../utils/getFiveDomEvent.js";
import "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/five/calculateThreeMouse.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/isTouchDevice.js";
class J extends f {
  constructor(...o) {
    const r = o[0], m = M(r.model), a = new u.Vector3().lerpVectors(n(m, 0), n(m, 5), 0.5);
    super(s(e({}, r), { position: a })), this.enable();
  }
}
export {
  J as ModelMakerPrismItem
};
