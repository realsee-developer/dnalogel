var x = Object.defineProperty;
var b = (o, p, t) => p in o ? x(o, p, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[p] = t;
var u = (o, p, t) => (b(o, typeof p != "symbol" ? p + "" : p, t), t);
import * as n from "three";
import { Vector3 as m } from "three";
import { setObjectQuaternion as y } from "../utils/setObjectQuaternion.js";
import { IObject3D as F } from "../../three/IObject3D.js";
import { boundingBox as w, boundingSphere as Q } from "../../three/boundingBox.js";
import { notNil as j } from "../../isNil.js";
class h extends F {
  constructor(t, e) {
    var s, l;
    super();
    u(this, "originObject3D");
    u(this, "onRender");
    u(this, "positionFrom");
    this.originObject3D = t, this.onRender = (s = e == null ? void 0 : e.onRender) != null ? s : () => {
    }, this.positionFrom = (l = e == null ? void 0 : e.positionFrom) != null ? l : "objectPosition";
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
    var e, s;
    this.positionFrom === "objectPosition" ? this.position.copy(this.originObject3D.position) : this.positionFrom === "boundingBox" ? this.position.copy((e = w(this.originObject3D)) == null ? void 0 : e.getCenter(new n.Vector3()).applyMatrix4(this.originObject3D.matrixWorld)) : this.positionFrom === "boundingSphere" ? this.position.copy((s = Q(this.originObject3D)) == null ? void 0 : s.center.clone().applyMatrix4(this.originObject3D.matrixWorld)) : this.positionFrom instanceof m ? this.position.copy(this.positionFrom) : this.positionFrom instanceof Function && this.position.copy(this.positionFrom(this.originObject3D)), t && this.position.add(t);
  }
  setScaleByCamera(t) {
  }
  initQuaternion(t) {
    if (this.quaternion.copy(this.originObject3D.quaternion), t && (t.xAxis || t.yAxis || t.zAxis)) {
      const e = t.xAxis instanceof Function ? t.xAxis() : t.xAxis, s = t.yAxis instanceof Function ? t.yAxis() : t.yAxis, l = t.zAxis instanceof Function ? t.zAxis() : t.zAxis;
      let r = e == null ? void 0 : e.clone(), i = s == null ? void 0 : s.clone(), a = l == null ? void 0 : l.clone();
      if (r && !i && !i) {
        const c = new n.Quaternion().setFromUnitVectors(new n.Vector3(1, 0, 0), r.normalize());
        this.applyQuaternion(c);
      }
      if (i && !r && !a) {
        const c = new n.Quaternion().setFromUnitVectors(new n.Vector3(0, 1, 0), i.normalize());
        this.applyQuaternion(c);
      }
      if (a && !r && !i) {
        const c = new n.Quaternion().setFromUnitVectors(new n.Vector3(0, 0, 1), a.normalize());
        this.applyQuaternion(c);
      }
      if ([r, i, a].filter(j).length >= 2) {
        r || (r = new n.Vector3().crossVectors(i, a).normalize()), i || (i = new n.Vector3().crossVectors(r, a).normalize()), a || (a = new n.Vector3().crossVectors(r, i).normalize()), r.applyQuaternion(this.quaternion), i.applyQuaternion(this.quaternion), a.applyQuaternion(this.quaternion);
        const c = new n.Matrix4().makeBasis(r, i, a), d = new n.Quaternion().setFromRotationMatrix(c);
        this.quaternion.copy(d);
      }
    }
  }
  applyHelperScaleMatrix4(t, e) {
    this.scale.applyMatrix4(t);
  }
  setHelperQuaternion(t, e) {
    this.initQuaternion(), y(this, this.quaternion.clone().premultiply(t), e);
  }
  applyHelperQuaternion(t, e) {
    if (e) {
      const s = new m().subVectors(this.position, e).applyQuaternion(t).add(e);
      this.position.copy(s);
    }
    this.applyQuaternion(t);
  }
  dispose() {
    this.removeFromParent();
  }
}
class z extends h {
}
class M extends h {
}
class R extends h {
}
class f extends h {
}
class B extends h {
}
export {
  M as BoundingBoxHelperAbstract,
  z as MoveHelperAbstract,
  B as RectangleScaleHelperAbstract,
  R as RotateHelperAbstract,
  f as ScaleHelperAbstract
};
