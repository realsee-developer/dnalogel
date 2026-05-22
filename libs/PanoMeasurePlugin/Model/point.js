var e = Object.defineProperty;
var n = (t, o, i) => o in t ? e(t, o, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[o] = i;
var r = (t, o, i) => (n(t, typeof o != "symbol" ? o + "" : o, i), i);
import { Vector3 as p } from "three";
import { uuid as c } from "../../shared-utils/uuid.js";
class s {
  constructor(o) {
    r(this, "id");
    r(this, "position");
    r(this, "type", "point");
    if (this.id = c(), this.position = new p(), Array.isArray(o))
      this.position.fromArray(o);
    else if (typeof o == "object" && o.isVector3)
      this.position.copy(o);
    else
      throw new Error("position must be Vector3 or number[]");
  }
  toJson() {
    return { id: this.id, position: this.position.toArray() };
  }
  clone() {
    return new s(this.position);
  }
}
export {
  s as default
};
