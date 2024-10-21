var c = Object.defineProperty;
var l = (r, t, e) => t in r ? c(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var a = (r, t, e) => (l(r, typeof t != "symbol" ? t + "" : t, e), e);
import * as s from "three";
class p extends s.Mesh {
  constructor(e, o) {
    const n = new s.MeshBasicMaterial({ opacity: 0, color: 0, transparent: !1, side: s.DoubleSide }), i = new s.PlaneGeometry(e, o);
    super(i, n);
    a(this, "name", "opacity-mesh");
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
}
export {
  p as default
};
