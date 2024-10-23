var c = Object.defineProperty;
var h = (e, s, t) => s in e ? c(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var n = (e, s, t) => (h(e, typeof s != "symbol" ? s + "" : s, t), t);
import * as l from "three";
import { Vector3 as a } from "three";
import { setObjectQuaternion as d } from "../utils/setObjectQuaternion.js";
import { IObject3D as b } from "../../three/IObject3D.js";
import { boundingBox as m, boundingSphere as u } from "../../three/boundingBox.js";
class r extends b {
  constructor(t, i) {
    var o, p;
    super();
    n(this, "originObject3D");
    n(this, "onRender");
    n(this, "positionFrom");
    this.originObject3D = t, this.onRender = (o = i == null ? void 0 : i.onRender) != null ? o : () => {
    }, this.positionFrom = (p = i == null ? void 0 : i.positionFrom) != null ? p : "objectPosition";
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
  raycasterIntersectObject(t, i = []) {
    return t.intersectObject(this, !0, i);
  }
  initialPosition(t) {
    var i, o;
    this.positionFrom === "objectPosition" ? this.position.copy(this.originObject3D.position) : this.positionFrom === "boundingBox" ? this.position.copy((i = m(this.originObject3D)) == null ? void 0 : i.getCenter(new l.Vector3()).applyMatrix4(this.originObject3D.matrixWorld)) : this.positionFrom === "boundingSphere" ? this.position.copy((o = u(this.originObject3D)) == null ? void 0 : o.center.clone().applyMatrix4(this.originObject3D.matrixWorld)) : this.positionFrom instanceof a ? this.position.copy(this.positionFrom) : this.positionFrom instanceof Function && this.position.copy(this.positionFrom(this.originObject3D)), t && this.position.add(t);
  }
  setScaleByCamera(t) {
  }
  initQuaternion() {
    this.quaternion.copy(this.originObject3D.quaternion);
  }
  applyHelperScaleMatrix4(t, i) {
    this.scale.applyMatrix4(t);
  }
  setHelperQuaternion(t, i) {
    d(this, t, i);
  }
  applyHelperQuaternion(t, i) {
    if (i) {
      const o = new a().subVectors(this.position, i).applyQuaternion(t).add(i);
      this.position.copy(o);
    }
    this.applyQuaternion(t);
  }
  dispose() {
    this.removeFromParent();
  }
}
class D extends r {
}
class H extends r {
}
class g extends r {
}
class R extends r {
}
class v extends r {
}
export {
  H as BoundingBoxHelperAbstract,
  D as MoveHelperAbstract,
  v as RectangleScaleHelperAbstract,
  g as RotateHelperAbstract,
  R as ScaleHelperAbstract
};
