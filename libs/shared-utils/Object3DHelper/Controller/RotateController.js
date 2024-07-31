var v = Object.defineProperty;
var w = (u, h, n) => h in u ? v(u, h, { enumerable: !0, configurable: !0, writable: !0, value: n }) : u[h] = n;
var d = (u, h, n) => (w(u, typeof h != "symbol" ? h + "" : h, n), n);
import { BaseController as C } from "../Base/BaseController.js";
import * as a from "three";
import { getMouseRaycaster as D } from "../utils/getMouseRaycaster.js";
import { setObjectQuaternion as O } from "../utils/setObjectQuaternion.js";
import { rad2Deg as k } from "../../math/rad2Deg.js";
import { deg2Rad as f } from "../../math/deg2Rad.js";
const y = new a.Quaternion();
class P extends C {
  constructor(...n) {
    var l, c, m;
    super(...n);
    d(this, "name", "RotateController");
    d(this, "startInfo");
    d(this, "removeListener");
    const e = this.helperObject3D;
    this.hoverListener([(l = e.xCircle) == null ? void 0 : l.circle, (c = e.yCircle) == null ? void 0 : c.circle, (m = e.zCircle) == null ? void 0 : m.circle].filter(Boolean));
    const t = this.dragStart.bind(this), i = this.dragging.bind(this), s = this.dragEnd.bind(this), r = this.show.bind(this), o = this.hide.bind(this);
    this.domEvents.addEventListener(this.helperObject3D, "mousedown", t), document.addEventListener("mousemove", i), document.addEventListener("mouseup", s), this.hooks.on("moveStart", o), this.hooks.on("moveEnd", r), this.hooks.on("scaleStart", o), this.hooks.on("scaleEnd", r), this.hooks.on("moveByMouseEnable", o), this.hooks.on("moveByMouseDisable", r), this.removeListener = () => {
      this.domEvents.removeEventListener(this.helperObject3D, "mousedown", t), document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", s), this.hooks.off("moveStart", o), this.hooks.off("moveEnd", r), this.hooks.off("scaleStart", o), this.hooks.off("scaleEnd", r), this.hooks.off("moveByMouseEnable", o), this.hooks.off("moveByMouseDisable", r);
    };
  }
  get rotateCenter() {
    return this.helperObject3D.position.clone();
  }
  // public initialHelperQuaternion() {
  //   this.helperObject3D.applyHelperQuaternion(this.originObject3D.quaternion)
  // }
  setRotateAngle(n) {
    const { x: e = 0, y: t = 0, z: i = 0 } = n, s = new a.Euler(f(e), f(t), f(i)), r = new a.Quaternion().setFromEuler(s);
    if (this.hooks.emit("wantToRotate", r))
      return;
    const { originObject3D: l, rotateCenter: c } = this;
    O(l, r, c), this.internalHooks.emit("setObjectRotate", r, c), this.hooks.emit("rotate", r), this.render();
  }
  dispose() {
    this.removeListener(), super.dispose();
  }
  onApplyOriginObjectRotate(n) {
    this.isDragging || super.onApplyOriginObjectRotate(n);
  }
  onApplyOriginObjectScale(n) {
  }
  /**
   * @description: 拖动开始，找出拖的Direction
   */
  dragStart(n) {
    if (this.isDragging)
      return;
    const e = n == null ? void 0 : n.intersect;
    if (!e)
      return this.dragEnd();
    const t = (e == null ? void 0 : e.object).direction;
    if (!t)
      return this.dragEnd();
    const i = e.point, s = this.getAngleHelper(t);
    this.setTipsAngle(0);
    const r = i.clone();
    r.y += 0.2, this.setTipsPosition(r);
    const o = this.helperObject3D.quaternion.clone(), l = (() => {
      if (t === "x")
        return new a.Vector3(1, 0, 0).applyQuaternion(o);
      if (t === "y")
        return new a.Vector3(0, 1, 0).applyQuaternion(o);
      if (t === "z")
        return new a.Vector3(0, 0, 1).applyQuaternion(o);
    })(), c = new a.Plane().setFromNormalAndCoplanarPoint(l, i), p = c.projectPoint(i.clone(), new a.Vector3()).clone().sub(this.rotateCenter), g = p.angleTo(s.baseAxes.clone().applyQuaternion(o));
    this.setAngleHelperStart(t, g), this.setAngleHelperLength(t, 0), this.startInfo = { direction: t, startVector: p, plane: c, angleHelper: s, angle: 0, helperQuaternion: o.clone() }, y.copy(o), this.helperObject3D.showDraggingHelper([t]), this.hooks.emit("rotateStart"), this.isDragging = !0;
  }
  dragging(n) {
    if (!this.isDragging)
      return;
    const e = D(this.camera, n, this.container);
    return e ? (this.rotate(e), !1) : this.dragEnd();
  }
  rotate(n) {
    if (!this.startInfo)
      return this.dragEnd();
    const { startVector: e, plane: t, angleHelper: i, direction: s, helperQuaternion: r } = this.startInfo, { originObject3D: o } = this, l = n.ray.intersectPlane(t, new a.Vector3());
    if (!l)
      return;
    const c = this.rotateCenter.clone(), p = t.projectPoint(l.clone(), new a.Vector3()).clone().sub(c);
    if (e.angleTo(p) === 0)
      return;
    const g = new a.Quaternion().setFromUnitVectors(e.clone().normalize(), p.clone().normalize()), b = o.quaternion.clone().premultiply(g);
    if (this.hooks.emit("wantToRotate", b))
      return;
    const E = new a.Euler().setFromQuaternion(
      new a.Quaternion().setFromUnitVectors(
        e.clone().normalize().applyQuaternion(r.clone().inverse()),
        p.clone().normalize().applyQuaternion(r.clone().inverse())
      ),
      `${s.toUpperCase()}${"XZY".replace(s.toUpperCase(), "")}`
    )[s] * i.angleDirection;
    if (this.startInfo.angle += E, this.setAngleHelperLength(s, this.startInfo.angle), this.setTipsAngle(k(this.startInfo.angle)), c) {
      const j = new a.Vector3().subVectors(o.position, c).applyQuaternion(g).add(c);
      o.position.copy(j);
    }
    o.applyQuaternion(g), y.premultiply(g), this.internalHooks.emit("applyObjectRotate", { quaternion: g, origin: c }), this.hooks.emit("rotate", o.quaternion), this.startInfo.startVector = p;
  }
  dragEnd() {
    this.isDragging && (this.internalHooks.emit("setObjectRotate", y, this.rotateCenter), this.startInfo = void 0, this.isDragging = !1, this.helperObject3D.show(), this.hooks.emit("rotateEnd"));
  }
  getAngleHelper(n) {
    var e, t, i;
    switch (n) {
      case "x":
        return (e = this.helperObject3D.xCircle) == null ? void 0 : e.angleSector;
      case "y":
        return (t = this.helperObject3D.yCircle) == null ? void 0 : t.angleSector;
      case "z":
        return (i = this.helperObject3D.zCircle) == null ? void 0 : i.angleSector;
    }
  }
  setAngleHelperStart(n, e) {
    const t = this.getAngleHelper(n);
    if (!t) {
      console.warn("angleHelper is undefined");
      return;
    }
    if (t instanceof a.Mesh && t.geometry instanceof a.CircleGeometry) {
      const { radius: i, segments: s, thetaLength: r } = t.geometry.parameters;
      t.geometry = new a.CircleGeometry(i, s, e, r);
    } else
      console.warn("only support THREE.CircleGeometry");
  }
  setAngleHelperLength(n, e) {
    const i = e >= 0 ? Math.max(e, 1e-3) : Math.min(e, -1e-3), s = this.getAngleHelper(n);
    if (s instanceof a.Mesh && s.geometry instanceof a.CircleGeometry) {
      const { radius: r, thetaStart: o } = s.geometry.parameters, l = Math.ceil(Math.abs(i) * (40 / (2 * Math.PI)));
      s.geometry = new a.CircleGeometry(r, l, o, i);
    } else
      console.warn("only support THREE.CircleGeometry");
  }
  setTipsAngle(n) {
    var t;
    const e = (t = this.helperObject3D.angleTips) == null ? void 0 : t.element;
    e && (e.innerText = `${n.toFixed(0)}°`);
  }
  setTipsPosition(n) {
    const e = this.helperObject3D.angleTips;
    if (!e)
      return;
    const t = n.project(this.camera), { x: i, y: s, z: r } = t;
    if (r > 1)
      return;
    const o = (i + 1) / 2 * 100 + "%", l = (-s + 1) / 2 * 100 + "%";
    e.setLeftTop(o, l);
  }
}
export {
  P as RotateController
};
