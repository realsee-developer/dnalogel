var t = Object.defineProperty;
var l = (n, o, r) => o in n ? t(n, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[o] = r;
var e = (n, o, r) => (l(n, typeof o != "symbol" ? o + "" : o, r), r);
import { BaseController as s } from "../Base/BaseController.js";
class x extends s {
  constructor(...r) {
    super(...r);
    e(this, "name", "BoundingBoxController");
  }
}
export {
  x as BoundingBoxController
};
