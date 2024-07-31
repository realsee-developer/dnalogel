var c = Object.defineProperty, l = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var m = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, b = Object.prototype.propertyIsEnumerable;
var p = (t, o, r) => o in t ? c(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, i = (t, o) => {
  for (var r in o || (o = {}))
    d.call(o, r) && p(t, r, o[r]);
  if (m)
    for (var r of m(o))
      b.call(o, r) && p(t, r, o[r]);
  return t;
}, s = (t, o) => l(t, x(o));
import { boundingBox as M, boxVertex as n } from "../../shared-utils/Object3DHelper/utils/boundingBox.js";
import { ModelMakerBaseItem as f } from "./baseItem.js";
import * as u from "three";
import "../../shared-utils/three/addIfNotExists.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../utils/getFiveDomEvent.js";
import "../../shared-utils/five/FiveDomEvents.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/five/calculateThreeMouse.js";
class j extends f {
  constructor(...o) {
    const r = o[0], e = M(r.model), a = new u.Vector3().lerpVectors(n(e, 0), n(e, 5), 0.5);
    super(s(i({}, r), { position: a })), this.enable();
  }
}
export {
  j as ModelMakerPrismItem
};
