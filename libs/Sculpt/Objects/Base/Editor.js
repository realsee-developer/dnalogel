var b = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var c = (o, t, e) => t in o ? b(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, n = (o, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && c(o, e, t[e]);
  if (l)
    for (var e of l(t))
      j.call(t, e) && c(o, e, t[e]);
  return o;
};
var r = (o, t, e) => (c(o, typeof t != "symbol" ? t + "" : t, e), e);
import { Sculpt as s } from "../../index.js";
import { IObject3D as a } from "../../../shared-utils/three/IObject3D.js";
import { Subscribe as d } from "../../../shared-utils/Subscribe.js";
class O extends a {
  constructor(e) {
    super();
    r(this, "hooks", new d());
    r(this, "originObject");
    this.originObject = e;
  }
  /**
   * @description: 开启编辑器
   */
  enable() {
    this.originObject.add(this);
  }
  /**
   * @description: 禁用编辑器
   */
  disable() {
    this.originObject.remove(this);
  }
}
class u extends O {
  constructor(e, i) {
    super(e);
    r(this, "objectHelperConfig");
    r(this, "onObjectUpdate", () => {
      this.hooks.emit("objectUpdate");
    });
    this.objectHelperConfig = i;
  }
  get helper() {
    var e;
    return (e = s.modules.object3DHelper.getObject3DHelper(this.originObject)) == null ? void 0 : e.helper;
  }
  enable() {
    super.enable();
    const e = typeof this.objectHelperConfig == "function" ? this.objectHelperConfig() : this.objectHelperConfig;
    s.modules.object3DHelper.addObject3DHelper(this.originObject, n({ positionFrom: "boundingBox" }, e));
    const i = s.modules.object3DHelper.getObject3DHelper(this.originObject).helper;
    i.hooks.on("move", this.onObjectUpdate), i.hooks.on("rotate", this.onObjectUpdate), i.hooks.on("scale", this.onObjectUpdate);
  }
  disable() {
    var e, i, p;
    super.disable(), (e = this.helper) == null || e.hooks.off("move", this.onObjectUpdate), (i = this.helper) == null || i.hooks.off("rotate", this.onObjectUpdate), (p = this.helper) == null || p.hooks.off("scale", this.onObjectUpdate), s.modules.object3DHelper.removeObject3DHelper(this.originObject);
  }
  initialHelperMatrix() {
    var e;
    (e = this.helper) == null || e.initialHelperMatrix();
  }
}
export {
  O as BaseEditor,
  u as BaseEditorWithObjectHelper
};
