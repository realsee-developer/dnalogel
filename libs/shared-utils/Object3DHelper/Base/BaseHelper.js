var h = Object.defineProperty;
var c = (i, s, t) => s in i ? h(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var n = (i, s, t) => (c(i, typeof s != "symbol" ? s + "" : s, t), t);
import * as l from "three";
import { Vector3 as a } from "three";
import { setObjectQuaternion as d } from "../utils/setObjectQuaternion.js";
import { IObject3D as b } from "../../three/IObject3D.js";
import { boundingBox as m, boundingSphere as u } from "../../three/boundingBox.js";
class r extends b {
  constructor(t, e) {
    var o, p;
    super();
    n(this, "originObject3D");
    n(this, "onRender");
    n(this, "positionFrom");
    this.originObject3D = t, this.onRender = (o = e == null ? void 0 : e.onRender) != null ? o : () => {
    }, this.positionFrom = (p = e == null ? void 0 : e.positionFrom) != null ? p : "objectPosition";
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
    var e, o;
    this.positionFrom === "objectPosition" ? this.position.copy(this.originObject3D.position) : this.positionFrom === "boundingBox" ? this.position.copy((e = m(this.originObject3D)) == null ? void 0 : e.getCenter(new l.Vector3())) : this.positionFrom === "boundingSphere" ? this.position.copy((o = u(this.originObject3D)) == null ? void 0 : o.center) : this.positionFrom instanceof a ? this.position.copy(this.positionFrom) : this.positionFrom instanceof Function && this.position.copy(this.positionFrom(this.originObject3D)), t && this.position.add(t);
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
    d(this, t, e);
  }
  applyHelperQuaternion(t, e) {
    if (e) {
      const o = new a().subVectors(this.position, e).applyQuaternion(t).add(e);
      this.position.copy(o);
    }
    this.applyQuaternion(t);
  }
  dispose() {
    this.removeFromParent();
  }
}
class H extends r {
}
class D extends r {
}
class R extends r {
}
class v extends r {
}
class B extends r {
}
export {
  D as BoundingBoxHelperAbstract,
  H as MoveHelperAbstract,
  B as RectangleScaleHelperAbstract,
  R as RotateHelperAbstract,
  v as ScaleHelperAbstract
};
