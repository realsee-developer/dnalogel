var j = Object.defineProperty;
var w = (g, h, t) => h in g ? j(g, h, { enumerable: !0, configurable: !0, writable: !0, value: t }) : g[h] = t;
var d = (g, h, t) => (w(g, typeof h != "symbol" ? h + "" : h, t), t);
import { BaseController as D } from "../Base/BaseController.js";
import * as c from "three";
import { getMouseRaycaster as O } from "../utils/getMouseRaycaster.js";
import { setObjectQuaternion as C } from "../utils/setObjectQuaternion.js";
import { rad2Deg as L } from "../../math/rad2Deg.js";
import { deg2Rad as f } from "../../math/deg2Rad.js";
const y = new c.Quaternion();
class x extends D {
  constructor(...t) {
    var l, a, m;
    super(...t);
    d(this, "name", "RotateController");
    d(this, "startInfo");
    d(this, "removeListener");
    const n = this.helperObject3D;
    this.hoverListener([(l = n.xCircle) == null ? void 0 : l.circle, (a = n.yCircle) == null ? void 0 : a.circle, (m = n.zCircle) == null ? void 0 : m.circle].filter(Boolean));
    const e = this.dragStart.bind(this), o = this.dragging.bind(this), s = this.dragEnd.bind(this), i = this.show.bind(this), r = this.hide.bind(this);
    this.domEvents.addEventListener(this.helperObject3D, "mousedown", e), document.addEventListener("mousemove", o), document.addEventListener("mouseup", s), this.domEvents.addEventListener(this.helperObject3D, "touchstart", e), document.addEventListener("touchmove", o), document.addEventListener("touchend", s), this.hooks.on("moveStart", r), this.hooks.on("moveEnd", i), this.hooks.on("scaleStart", r), this.hooks.on("scaleEnd", i), this.hooks.on("moveByMouseEnable", r), this.hooks.on("moveByMouseDisable", i), this.disposers.push(() => {
      this.domEvents.removeEventListener(this.helperObject3D, "mousedown", e), document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", s), this.domEvents.removeEventListener(this.helperObject3D, "touchstart", e), document.removeEventListener("touchmove", o), document.removeEventListener("touchend", s), this.hooks.off("moveStart", r), this.hooks.off("moveEnd", i), this.hooks.off("scaleStart", r), this.hooks.off("scaleEnd", i), this.hooks.off("moveByMouseEnable", r), this.hooks.off("moveByMouseDisable", i);
    });
  }
  get rotateCenter() {
    return this.helperObject3D.position.clone();
  }
  setRotateAngle(t) {
    const { x: n = 0, y: e = 0, z: o = 0 } = t, s = new c.Euler(f(n), f(e), f(o)), i = new c.Quaternion().setFromEuler(s);
    if (this.hooks.emit("wantToRotate", i))
      return;
    const { originObject3D: l, rotateCenter: a } = this;
    C(l, i, a), this.internalHooks.emit("setObjectRotate", i, a), this.hooks.emit("rotate", i), this.render();
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
    const n = t == null ? void 0 : t.intersect;
    if (!n)
      return this.dragEnd();
    const e = (n == null ? void 0 : n.object).direction;
    if (!e)
      return this.dragEnd();
    const o = n.point, s = this.getAngleHelper(e);
    this.setTipsAngle(0);
    const i = o.clone();
    i.y += 0.2, this.setTipsPosition(i);
    const r = this.helperObject3D.quaternion.clone(), l = (() => {
      if (e === "x")
        return new c.Vector3(1, 0, 0).applyQuaternion(r);
      if (e === "y")
        return new c.Vector3(0, 1, 0).applyQuaternion(r);
      if (e === "z")
        return new c.Vector3(0, 0, 1).applyQuaternion(r);
    })(), a = new c.Plane().setFromNormalAndCoplanarPoint(l, o), p = a.projectPoint(o.clone(), new c.Vector3()).clone().sub(this.rotateCenter), u = p.angleTo(s.baseAxes.clone().applyQuaternion(r));
    this.setAngleHelperStart(e, u), this.setAngleHelperLength(e, 0), this.startInfo = { direction: e, startVector: p, plane: a, angleHelper: s, angle: 0, helperQuaternion: r.clone() }, y.copy(r), this.helperObject3D.showDraggingHelper([e]), this.hooks.emit("rotateStart"), this.isDragging = !0;
  }
  dragging(t) {
    if (!this.isDragging)
      return;
    const n = "touches" in t ? t.touches[0].clientX : t.x, e = "touches" in t ? t.touches[0].clientY : t.y, o = O(this.camera, { x: n, y: e }, this.container);
    return o ? (this.rotate(o), !1) : this.dragEnd();
  }
  rotate(t) {
    if (!this.startInfo)
      return this.dragEnd();
    const { startVector: n, plane: e, angleHelper: o, direction: s, helperQuaternion: i } = this.startInfo, { originObject3D: r } = this, l = t.ray.intersectPlane(e, new c.Vector3());
    if (!l)
      return;
    const a = this.rotateCenter.clone(), p = e.projectPoint(l.clone(), new c.Vector3()).clone().sub(a);
    if (n.angleTo(p) === 0)
      return;
    const u = new c.Quaternion().setFromUnitVectors(n.clone().normalize(), p.clone().normalize()), v = r.quaternion.clone().premultiply(u);
    if (this.hooks.emit("wantToRotate", v))
      return;
    const E = new c.Euler().setFromQuaternion(
      new c.Quaternion().setFromUnitVectors(
        n.clone().normalize().applyQuaternion(i.clone().inverse()),
        p.clone().normalize().applyQuaternion(i.clone().inverse())
      ),
      `${s.toUpperCase()}${"XZY".replace(s.toUpperCase(), "")}`
    )[s] * o.angleDirection;
    if (this.startInfo.angle += E, this.setAngleHelperLength(s, this.startInfo.angle), this.setTipsAngle(L(this.startInfo.angle)), a) {
      const b = new c.Vector3().subVectors(r.position, a).applyQuaternion(u).add(a);
      r.position.copy(b);
    }
    r.applyQuaternion(u), y.premultiply(u), this.internalHooks.emit("applyObjectRotate", { quaternion: u, origin: a }), this.hooks.emit("rotate", r.quaternion), this.startInfo.startVector = p;
  }
  dragEnd() {
    this.isDragging && (this.internalHooks.emit("setObjectRotate", y, this.rotateCenter), this.startInfo = void 0, this.isDragging = !1, this.helperObject3D.show(), this.hooks.emit("rotateEnd"));
  }
  getAngleHelper(t) {
    var n, e, o;
    switch (t) {
      case "x":
        return (n = this.helperObject3D.xCircle) == null ? void 0 : n.angleSector;
      case "y":
        return (e = this.helperObject3D.yCircle) == null ? void 0 : e.angleSector;
      case "z":
        return (o = this.helperObject3D.zCircle) == null ? void 0 : o.angleSector;
    }
  }
  setAngleHelperStart(t, n) {
    const e = this.getAngleHelper(t);
    if (!e) {
      console.warn("angleHelper is undefined");
      return;
    }
    if (e instanceof c.Mesh && e.geometry instanceof c.CircleGeometry) {
      const { radius: o, segments: s, thetaLength: i } = e.geometry.parameters;
      e.geometry = new c.CircleGeometry(o, s, n, i);
    } else
      console.warn("only support THREE.CircleGeometry");
  }
  setAngleHelperLength(t, n) {
    const o = n >= 0 ? Math.max(n, 1e-3) : Math.min(n, -1e-3), s = this.getAngleHelper(t);
    if (s instanceof c.Mesh && s.geometry instanceof c.CircleGeometry) {
      const { radius: i, thetaStart: r } = s.geometry.parameters, l = Math.ceil(Math.abs(o) * (40 / (2 * Math.PI)));
      s.geometry = new c.CircleGeometry(i, l, r, o);
    } else
      console.warn("only support THREE.CircleGeometry");
  }
  setTipsAngle(t) {
    var e;
    const n = (e = this.helperObject3D.angleTips) == null ? void 0 : e.element;
    n && (n.innerText = `${t.toFixed(0)}°`);
  }
  setTipsPosition(t) {
    const n = this.helperObject3D.angleTips;
    if (!n)
      return;
    const e = t.project(this.camera), { x: o, y: s, z: i } = e;
    if (i > 1)
      return;
    const r = (o + 1) / 2 * 100 + "%", l = (-s + 1) / 2 * 100 + "%";
    n.setLeftTop(r, l);
  }
}
export {
  x as RotateController
};
