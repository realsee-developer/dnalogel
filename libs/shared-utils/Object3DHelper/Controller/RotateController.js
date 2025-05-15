var j = Object.defineProperty;
var w = (g, h, t) => h in g ? j(g, h, { enumerable: !0, configurable: !0, writable: !0, value: t }) : g[h] = t;
var d = (g, h, t) => (w(g, typeof h != "symbol" ? h + "" : h, t), t);
import { BaseController as D } from "../Base/BaseController.js";
import * as a from "three";
import { getMouseRaycaster as O } from "../utils/getMouseRaycaster.js";
import { setObjectQuaternion as C } from "../utils/setObjectQuaternion.js";
import { rad2Deg as L } from "../../math/rad2Deg.js";
import { deg2Rad as f } from "../../math/deg2Rad.js";
let y = new a.Quaternion();
class P extends D {
  constructor(...t) {
    var l, c, m;
    super(...t);
    d(this, "name", "RotateController");
    d(this, "startInfo");
    d(this, "removeListener");
    const n = this.helperObject3D;
    this.hoverListener([(l = n.xCircle) == null ? void 0 : l.circle, (c = n.yCircle) == null ? void 0 : c.circle, (m = n.zCircle) == null ? void 0 : m.circle].filter(Boolean));
    const e = this.dragStart.bind(this), o = this.dragging.bind(this), r = this.dragEnd.bind(this), s = this.show.bind(this), i = this.hide.bind(this);
    this.domEvents.addEventListener(this.helperObject3D, "mousedown", e), document.addEventListener("mousemove", o), document.addEventListener("mouseup", r), this.domEvents.addEventListener(this.helperObject3D, "touchstart", e), document.addEventListener("touchmove", o), document.addEventListener("touchend", r), this.hooks.on("moveStart", i), this.hooks.on("moveEnd", s), this.hooks.on("scaleStart", i), this.hooks.on("scaleEnd", s), this.hooks.on("moveByMouseEnable", i), this.hooks.on("moveByMouseDisable", s), this.disposers.push(() => {
      this.domEvents.removeEventListener(this.helperObject3D, "mousedown", e), document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", r), this.domEvents.removeEventListener(this.helperObject3D, "touchstart", e), document.removeEventListener("touchmove", o), document.removeEventListener("touchend", r), this.hooks.off("moveStart", i), this.hooks.off("moveEnd", s), this.hooks.off("scaleStart", i), this.hooks.off("scaleEnd", s), this.hooks.off("moveByMouseEnable", i), this.hooks.off("moveByMouseDisable", s);
    });
  }
  get rotateCenter() {
    return this.helperObject3D.position.clone();
  }
  setRotateAngle(t) {
    const { x: n = 0, y: e = 0, z: o = 0 } = t, r = new a.Euler(f(n), f(e), f(o)), s = new a.Quaternion().setFromEuler(r);
    if (this.hooks.emit("wantToRotate", s))
      return;
    const { originObject3D: l, rotateCenter: c } = this;
    C(l, s, c), this.internalHooks.emit("setObjectRotate", s, c), this.hooks.emit("rotate", s), this.render();
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
    const o = n.point, r = this.getAngleHelper(e);
    this.setTipsAngle(0);
    const s = o.clone();
    s.y += 0.2, this.setTipsPosition(s);
    const i = this.helperObject3D.quaternion.clone(), l = (() => {
      if (e === "x")
        return new a.Vector3(1, 0, 0).applyQuaternion(i);
      if (e === "y")
        return new a.Vector3(0, 1, 0).applyQuaternion(i);
      if (e === "z")
        return new a.Vector3(0, 0, 1).applyQuaternion(i);
    })(), c = new a.Plane().setFromNormalAndCoplanarPoint(l, o), p = c.projectPoint(o.clone(), new a.Vector3()).clone().sub(this.rotateCenter), u = p.angleTo(r.baseAxes.clone().applyQuaternion(i));
    this.setAngleHelperStart(e, u), this.setAngleHelperLength(e, 0), this.startInfo = { direction: e, startVector: p, plane: c, angleHelper: r, angle: 0, helperQuaternion: i.clone() }, y = new a.Quaternion(), this.helperObject3D.showDraggingHelper([e]), this.hooks.emit("rotateStart"), this.isDragging = !0;
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
    const { startVector: n, plane: e, angleHelper: o, direction: r, helperQuaternion: s } = this.startInfo, { originObject3D: i } = this, l = t.ray.intersectPlane(e, new a.Vector3());
    if (!l)
      return;
    const c = this.rotateCenter.clone(), p = e.projectPoint(l.clone(), new a.Vector3()).clone().sub(c);
    if (n.angleTo(p) === 0)
      return;
    const u = new a.Quaternion().setFromUnitVectors(n.clone().normalize(), p.clone().normalize()), v = i.quaternion.clone().premultiply(u);
    if (this.hooks.emit("wantToRotate", v))
      return;
    const E = new a.Euler().setFromQuaternion(
      new a.Quaternion().setFromUnitVectors(
        n.clone().normalize().applyQuaternion(s.clone().inverse()),
        p.clone().normalize().applyQuaternion(s.clone().inverse())
      ),
      `${r.toUpperCase()}${"XZY".replace(r.toUpperCase(), "")}`
    )[r] * o.angleDirection;
    if (this.startInfo.angle += E, this.setAngleHelperLength(r, this.startInfo.angle), this.setTipsAngle(L(this.startInfo.angle)), c) {
      const b = new a.Vector3().subVectors(i.position, c).applyQuaternion(u).add(c);
      i.position.copy(b);
    }
    i.applyQuaternion(u), y.premultiply(u), this.internalHooks.emit("applyObjectRotate", { quaternion: u, origin: c }), this.hooks.emit("rotate", i.quaternion), this.startInfo.startVector = p;
  }
  dragEnd() {
    this.isDragging && (this.applyHelperQuaternion(y, this.rotateCenter), this.startInfo = void 0, this.isDragging = !1, this.helperObject3D.show(), this.hooks.emit("rotateEnd"));
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
    if (e instanceof a.Mesh && e.geometry instanceof a.CircleGeometry) {
      const { radius: o, segments: r, thetaLength: s } = e.geometry.parameters;
      e.geometry = new a.CircleGeometry(o, r, n, s);
    } else
      console.warn("only support THREE.CircleGeometry");
  }
  setAngleHelperLength(t, n) {
    const o = n >= 0 ? Math.max(n, 1e-3) : Math.min(n, -1e-3), r = this.getAngleHelper(t);
    if (r instanceof a.Mesh && r.geometry instanceof a.CircleGeometry) {
      const { radius: s, thetaStart: i } = r.geometry.parameters, l = Math.ceil(Math.abs(o) * (40 / (2 * Math.PI)));
      r.geometry = new a.CircleGeometry(s, l, i, o);
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
    const e = t.project(this.camera), { x: o, y: r, z: s } = e;
    if (s > 1)
      return;
    const i = (o + 1) / 2 * 100 + "%", l = (-r + 1) / 2 * 100 + "%";
    n.setLeftTop(i, l);
  }
}
export {
  P as RotateController
};
