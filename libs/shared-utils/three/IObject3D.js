var s = Object.defineProperty;
var h = (n, t, e) => t in n ? s(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var i = (n, t, e) => (h(n, typeof t != "symbol" ? t + "" : t, e), e);
import { Object3D as o } from "three";
class c extends o {
  constructor() {
    super();
    i(this, "name", "IObject3D");
    i(this, "needsRender");
  }
  removeChildren() {
    for (; this.children.length > 0; )
      this.remove(this.children[0]);
    return this;
  }
  add(...e) {
    const r = e.filter(Boolean);
    return r.length === 0 ? this : super.add(...r);
  }
  addIfNotExists(...e) {
    return e.forEach((r) => {
      this.children.includes(r) || this.add(r);
    }), this;
  }
  remove(...e) {
    if (e.length === 0)
      return this;
    const r = e.filter(Boolean);
    return super.remove(...r);
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
}
export {
  c as IObject3D
};
