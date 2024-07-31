import * as n from "three";
import { getCoordsFromElement as a } from "./getCoords.js";
function c(e, o) {
  const r = e.getElement();
  if (!r)
    return;
  const m = a(o, r), t = new n.Raycaster();
  return t.setFromCamera(m, e.camera), t;
}
export {
  c as getRaycasterFromFivePointer
};
