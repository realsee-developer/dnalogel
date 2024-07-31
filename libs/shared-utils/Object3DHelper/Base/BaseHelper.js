var h = Object.defineProperty;
var c = (i, s, t) => s in i ? h(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var n = (i, s, t) => (c(i, typeof s != "symbol" ? s + "" : s, t), t);
import { Vector3 as p } from "three";
import { setObjectQuaternion as l } from "../utils/setObjectQuaternion.js";
import { IObject3D as d } from "../../three/IObject3D.js";
import { boundingBox as b } from "../utils/boundingBox.js";
class o extends d {
  constructor(t, e) {
    var r, a;
    super();
    n(this, "originObject3D");
    n(this, "onRender");
    n(this, "positionFrom");
    this.originObject3D = t, this.onRender = (r = e == null ? void 0 : e.onRender) != null ? r : () => {
    }, this.positionFrom = (a = e == null ? void 0 : e.positionFrom) != null ? a : "objectPosition";
  }
  get helperObject() {
    return this;
  }
  render() {
    this.onRender();
  }
  enable() {
    this.parent.children.includes(this) || this.parent.add(this);
  }
  disable() {
    this.removeFromParent();
  }
  show() {
    this.visible = !0, this.render();
  }
  hide() {
    this.visible = !1, this.render();
  }
  raycasterIntersectObject(t, e = []) {
    return t.intersectObject(this, !0, e);
  }
  initialPosition(t) {
    var e;
    this.positionFrom === "objectPosition" ? this.position.copy(this.originObject3D.position) : this.positionFrom === "boundingBox" ? (e = b(this.originObject3D)) == null || e.getCenter(this.position) : this.positionFrom instanceof p ? this.position.copy(this.positionFrom) : this.positionFrom instanceof Function && this.position.copy(this.positionFrom()), t && this.position.add(t);
  }
  setScaleByCamera(t) {
  }
  initQuaternion() {
    this.quaternion.copy(this.originObject3D.quaternion);
  }
  applyHelperScaleMatrix4(t, e) {
    this.scale.applyMatrix4(t);
  }
  setHelperQuaternion(t, e) {
    l(this, t, e);
  }
  applyHelperQuaternion(t, e) {
    if (e) {
      const r = new p().subVectors(this.position, e).applyQuaternion(t).add(e);
      this.position.copy(r);
    }
    this.applyQuaternion(t);
  }
  dispose() {
    this.removeFromParent();
  }
}
class F extends o {
}
class O extends o {
}
class H extends o {
}
class v extends o {
}
class B extends o {
}
export {
  O as BoundingBoxHelperAbstract,
  F as MoveHelperAbstract,
  B as RectangleScaleHelperAbstract,
  H as RotateHelperAbstract,
  v as ScaleHelperAbstract
};
