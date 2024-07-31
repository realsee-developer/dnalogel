var l = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var i = (o, t, e) => t in o ? l(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, c = (o, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(o, e, t[e]);
  if (s)
    for (var e of s(t))
      j.call(t, e) && i(o, e, t[e]);
  return o;
};
var r = (o, t, e) => (i(o, typeof t != "symbol" ? t + "" : t, e), e);
import { Sculpt as b } from "../../index.js";
import { IObject3D as d } from "../../../shared-utils/three/IObject3D.js";
class g extends d {
  constructor(e) {
    super();
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
class H extends g {
  constructor(e, n) {
    super(e);
    r(this, "objectHelperConfig");
    this.objectHelperConfig = n;
  }
  enable() {
    super.enable();
    const e = typeof this.objectHelperConfig == "function" ? this.objectHelperConfig() : this.objectHelperConfig;
    b.modules.object3DHelper.addObject3DHelper(this.originObject, c({ positionFrom: "boundingBox" }, e));
  }
  disable() {
    super.disable(), b.modules.object3DHelper.removeObject3DHelper(this.originObject);
  }
}
export {
  g as BaseEditor,
  H as BaseEditorWithObjectHelper
};
