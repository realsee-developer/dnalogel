var m = Object.defineProperty;
var h = (e, t, o) => t in e ? m(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var n = (e, t, o) => (h(e, typeof t != "symbol" ? t + "" : t, o), o);
import { centerPoint as f } from "../../shared-utils/three/centerPoint.js";
import { PrismMesh as a } from "./Prism.js";
class p extends a {
  constructor() {
    super(...arguments);
    n(this, "name", "BoxMesh");
  }
  get geometryInfo() {
    if (this.geometryInfoNeedUpdate) {
      this.geometryInfoNeedUpdate = !1;
      const o = this.bottomPositions, s = this.topPosition;
      if (!o || o.length < 3 || !s) {
        this._geometryInfoCache = void 0;
        return;
      }
      const i = f(...o), r = s.clone().sub(o[0]), c = i.clone().add(r.clone().divideScalar(2));
      this._geometryInfoCache = { center: c };
    }
    return this._geometryInfoCache;
  }
}
export {
  p as BoxMesh
};
