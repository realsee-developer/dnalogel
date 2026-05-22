var x = Object.defineProperty;
var D = (m, p, t) => p in m ? x(m, p, { enumerable: !0, configurable: !0, writable: !0, value: t }) : m[p] = t;
var E = (m, p, t) => (D(m, typeof p != "symbol" ? p + "" : p, t), t);
import { BaseController as Q } from "../Base/BaseController.js";
import * as o from "three";
import { getMouseRaycaster as H } from "../utils/getMouseRaycaster.js";
import { setObjectQuaternion as A } from "../utils/setObjectQuaternion.js";
import { rad2Deg as u } from "../../math/rad2Deg.js";
import { deg2Rad as g } from "../../math/deg2Rad.js";
let w = new o.Quaternion();
class I extends Q {
  constructor(...t) {
    var l, y, h;
    super(...t);
    E(this, "name", "RotateController");
    E(this, "startInfo");
    E(this, "removeListener");
    const e = this.helperObject3D;
    this.hoverListener([(l = e.xCircle) == null ? void 0 : l.circle, (y = e.yCircle) == null ? void 0 : y.circle, (h = e.zCircle) == null ? void 0 : h.circle].filter(Boolean));
    const n = this.dragStart.bind(this), r = this.dragging.bind(this), s = this.dragEnd.bind(this), i = this.show.bind(this), a = this.hide.bind(this), c = () => {
      this.helperObject3D.update(this.camera), this.render();
    };
    c(), this.domEvents.addEventListener(this.helperObject3D, "mousedown", n), document.addEventListener("mousemove", r), document.addEventListener("mouseup", s), this.domEvents.addEventListener(this.helperObject3D, "touchstart", n), document.addEventListener("touchmove", r), document.addEventListener("touchend", s), this.hooks.on("moveStart", a), this.hooks.on("moveEnd", i), this.hooks.on("scaleStart", a), this.hooks.on("scaleEnd", i), this.hooks.on("moveByMouseEnable", a), this.hooks.on("moveByMouseDisable", i), this.hooks.on("updateOtherHelpers", (d) => {
      this.helperObject3D.update(d.camera), this.render();
    }), this.cameraHooks.on("cameraUpdate", c), this.disposers.push(() => {
      this.domEvents.removeEventListener(this.helperObject3D, "mousedown", n), document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", s), this.domEvents.removeEventListener(this.helperObject3D, "touchstart", n), document.removeEventListener("touchmove", r), document.removeEventListener("touchend", s), this.hooks.off("moveStart", a), this.hooks.off("moveEnd", i), this.hooks.off("scaleStart", a), this.hooks.off("scaleEnd", i), this.hooks.off("moveByMouseEnable", a), this.hooks.off("moveByMouseDisable", i), this.hooks.off("updateOtherHelpers"), this.cameraHooks.off("cameraUpdate", c);
    });
  }
  get rotateCenter() {
    return this.helperObject3D.position.clone();
  }
  setRotateAngle(t) {
    const { x: e = 0, y: n = 0, z: r = 0 } = t, s = new o.Euler(g(e), g(n), g(r)), i = new o.Quaternion().setFromEuler(s);
    if (this.hooks.emit("wantToRotate", i))
      return;
    const { originObject3D: c, rotateCenter: l } = this;
    A(c, i, l), this.internalHooks.emit("setObjectRotate", i, l), this.hooks.emit("rotate", i), this.render();
  }
  /**
   * @description 通过改变欧拉角中的某一个值来改变旋转，但保持其他两个轴的旋转不变
   * @param axis 要修改的轴 ('x' | 'y' | 'z')
   * @param angle 新的角度值（度）
   * @returns 新的四元数值
   */
  getEulerAngle(t, e) {
    const { originObject3D: n } = this, r = new o.Euler().setFromQuaternion(n.quaternion), s = {
      x: u(r.x),
      y: u(r.y),
      z: u(r.z)
    }, i = {
      x: t === "x" ? e : s.x,
      y: t === "y" ? e : s.y,
      z: t === "z" ? e : s.z
    }, a = new o.Euler(g(i.x), g(i.y), g(i.z));
    return new o.Quaternion().setFromEuler(a);
  }
  onApplyOriginObjectRotate(t) {
    this.isDragging || super.onApplyOriginObjectRotate(t);
  }
  onApplyOriginObjectScale(t) {
  }
  /**
   * @description: 拖动开始，找出拖的Direction
   */
  dragStart(t) {
    if (this.isDragging)
      return;
    this.helperObject3D.update(this.camera);
    const e = t == null ? void 0 : t.intersect;
    if (!e)
      return this.dragEnd();
    const n = (e == null ? void 0 : e.object).direction;
    if (!n)
      return this.dragEnd();
    const r = e.point, s = this.getAngleHelper(n);
    this.setTipsAngle(0);
    const i = r.clone();
    i.y += 0.2, this.setTipsPosition(i);
    const a = this.helperObject3D.quaternion.clone(), c = (() => {
      if (n === "x")
        return new o.Vector3(1, 0, 0).applyQuaternion(a);
      if (n === "y")
        return new o.Vector3(0, 1, 0).applyQuaternion(a);
      if (n === "z")
        return new o.Vector3(0, 0, 1).applyQuaternion(a);
    })(), l = new o.Plane().setFromNormalAndCoplanarPoint(c, r), h = l.projectPoint(r.clone(), new o.Vector3()).clone().sub(this.rotateCenter), d = h.angleTo(s.baseAxes.clone().applyQuaternion(a)), b = s.offsetAngle(d);
    this.setAngleHelperStart(n, b), this.setAngleHelperLength(n, 0), this.startInfo = {
      direction: n,
      startVector: h,
      directionVector: c,
      plane: l,
      angleHelper: s,
      angle: 0,
      helperQuaternion: a.clone()
    }, w = new o.Quaternion(), this.helperObject3D.showDraggingHelper([n]), this.hooks.emit("rotateStart", n), this.isDragging = !0;
  }
  getMatrix() {
    var e, n;
    return (n = (e = this.originObject3D) == null ? void 0 : e.ext) == null ? void 0 : n.matrix;
  }
  getMatrixAngle(t, e) {
    let n;
    if (t && t.isMatrix4) {
      n = new o.Quaternion(), t.decompose(new o.Vector3(), n, new o.Vector3());
      const r = new o.Euler().setFromQuaternion(n);
      if (e === "x")
        return Math.round(u(r.z));
      if (e === "y")
        return Math.round(u(r.y));
      if (e === "z")
        return Math.round(u(r.x));
    }
  }
  parseAngleByDirection(t) {
    var r, s;
    const e = (s = (r = this.originObject3D) == null ? void 0 : r.ext) == null ? void 0 : s.matrix;
    let n;
    if (e && e.isMatrix4) {
      n = new o.Quaternion(), e.decompose(new o.Vector3(), n, new o.Vector3());
      const i = new o.Euler().setFromQuaternion(n);
      if (t === "x")
        return Math.round(u(i.z));
      if (t === "y")
        return Math.round(u(i.y));
      if (t === "z")
        return Math.round(u(i.x));
    }
  }
  dragging(t) {
    if (!this.isDragging)
      return;
    const e = "touches" in t ? t.touches[0].clientX : t.x, n = "touches" in t ? t.touches[0].clientY : t.y, r = H(this.camera, { x: e, y: n }, this.container);
    return r ? (this.rotate(r), !1) : this.dragEnd();
  }
  rotate(t) {
    if (!this.startInfo)
      return this.dragEnd();
    const { startVector: e, plane: n, angleHelper: r, direction: s, helperQuaternion: i } = this.startInfo, { originObject3D: a } = this, c = t.ray.intersectPlane(n, new o.Vector3());
    if (!c)
      return;
    const l = this.rotateCenter.clone();
    let h = n.projectPoint(c.clone(), new o.Vector3()).clone().sub(l);
    const d = this.startInfo.directionVector.clone().normalize();
    h = h.clone().projectOnPlane(d).normalize().multiplyScalar(h.length());
    const f = new o.Quaternion().setFromUnitVectors(e.clone().normalize(), h.clone().normalize()), v = a.quaternion.clone().premultiply(f);
    if (e.angleTo(h) === 0 || this.hooks.emit("wantToRotate", v))
      return;
    const j = new o.Euler().setFromQuaternion(
      new o.Quaternion().setFromUnitVectors(
        e.clone().normalize().applyQuaternion(i.clone().inverse()),
        h.clone().normalize().applyQuaternion(i.clone().inverse())
      ),
      `${s.toUpperCase()}${"XZY".replace(s.toUpperCase(), "")}`
    )[s] * r.angleDirection;
    if (this.startInfo.angle += j, this.setAngleHelperLength(s, this.startInfo.angle), this.setTipsAngle(u(this.startInfo.angle)), l) {
      const O = new o.Vector3().subVectors(a.position, l).applyQuaternion(f).add(l);
      a.position.copy(O);
    }
    a.applyQuaternion(f), w.premultiply(f), this.internalHooks.emit("applyObjectRotate", { quaternion: f, origin: l }), this.hooks.emit("rotate", a.quaternion), this.startInfo.startVector = h;
  }
  dragEnd() {
    var t;
    this.isDragging && (this.applyHelperQuaternion(w, this.rotateCenter), (t = this.startInfo) != null && t.lineMeshes && this.startInfo.lineMeshes.forEach((e) => {
      this.scene.remove(e), e.geometry.dispose(), e.material instanceof o.Material && e.material.dispose();
    }), this.startInfo = void 0, this.isDragging = !1, this.helperObject3D.show(), this.updateOtherHelpers(), this.hooks.emit("rotateEnd"));
  }
  updateOtherHelpers() {
    this.hooks.emit("updateOtherHelpers", { camera: this.camera });
  }
  getAngleHelper(t) {
    var e, n, r;
    switch (t) {
      case "x":
        return (e = this.helperObject3D.xCircle) == null ? void 0 : e.angleSector;
      case "y":
        return (n = this.helperObject3D.yCircle) == null ? void 0 : n.angleSector;
      case "z":
        return (r = this.helperObject3D.zCircle) == null ? void 0 : r.angleSector;
    }
  }
  setAngleHelperStart(t, e) {
    const n = this.getAngleHelper(t);
    if (!n) {
      console.warn("angleHelper is undefined");
      return;
    }
    if (n instanceof o.Mesh && n.geometry instanceof o.CircleGeometry) {
      const { radius: r, segments: s, thetaLength: i } = n.geometry.parameters;
      n.geometry = new o.CircleGeometry(r, s, e, i);
    } else
      console.warn("only support THREE.CircleGeometry");
  }
  setAngleHelperLength(t, e) {
    const r = e >= 0 ? Math.max(e, 1e-3) : Math.min(e, -1e-3), s = this.getAngleHelper(t);
    if (s instanceof o.Mesh && s.geometry instanceof o.CircleGeometry) {
      const { radius: i, thetaStart: a } = s.geometry.parameters, c = Math.ceil(Math.abs(r) * (40 / (2 * Math.PI)));
      s.geometry = new o.CircleGeometry(i, c, a, r);
    } else
      console.warn("only support THREE.CircleGeometry");
  }
  setTipsAngle(t) {
    var n;
    const e = (n = this.helperObject3D.angleTips) == null ? void 0 : n.element;
    e && (e.innerText = `${t.toFixed(0)}°`);
  }
  setTipsPosition(t) {
    const e = this.helperObject3D.angleTips;
    if (!e)
      return;
    const n = t.project(this.camera), { x: r, y: s, z: i } = n;
    if (i > 1)
      return;
    const a = (r + 1) / 2 * 100 + "%", c = (-s + 1) / 2 * 100 + "%";
    e.setLeftTop(a, c);
  }
}
export {
  I as RotateController
};
