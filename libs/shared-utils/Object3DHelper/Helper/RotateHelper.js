var A = Object.defineProperty;
var M = (h, a, t) => a in h ? A(h, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[a] = t;
var l = (h, a, t) => (M(h, typeof a != "symbol" ? a + "" : a, t), t);
import * as e from "three";
import { RotateHelperAbstract as S } from "../Base/BaseHelper.js";
import { AXES_THREE_COLOR as w } from "../Constants/color.js";
import { RENDER_ORDER as P } from "../Constants/RenderOrder.js";
import { tipsDom as u } from "./HTML/tipsDom.js";
import { calculateScaleByCamera as I } from "../utils/calculateScaleByCamera.js";
class H extends S {
  constructor(t, i) {
    super(t, i);
    l(this, "name", "RotateHelper");
    l(this, "xCircle");
    l(this, "yCircle");
    l(this, "zCircle");
    l(this, "children", []);
    l(this, "angleTips");
    l(this, "container");
    (i == null ? void 0 : i.yzCircleEnable) !== !1 && (this.xCircle = new f({ direction: "x", color: w.X })), (i == null ? void 0 : i.xzCircleEnable) !== !1 && (this.yCircle = new f({ direction: "y", color: w.Y })), (i == null ? void 0 : i.xyCircleEnable) !== !1 && (this.zCircle = new f({ direction: "z", color: w.Z })), i != null && i.container && (i == null ? void 0 : i.angleTipsEnable) !== !1 && (this.container = i == null ? void 0 : i.container, this.angleTips = u({ display: "none" }), this.container.appendChild(this.angleTips.element)), this.add(...[this.xCircle, this.yCircle, this.zCircle].filter(Boolean)), this.show();
  }
  hide() {
    this.children.forEach((t) => t.hide());
  }
  show() {
    var t;
    this.children.forEach((i) => i.showCircle()), (t = this.angleTips) == null || t.hide();
  }
  setScaleByCamera(t) {
    this.scale.setScalar(I(t, this.position));
  }
  update(t) {
    if (t.type === "OrthographicCamera")
      return;
    const i = this.helperObject.position.clone().sub(t.position).normalize(), g = new e.Vector3(1, 0, 0).applyQuaternion(this.quaternion), x = new e.Vector3(0, 1, 0).applyQuaternion(this.quaternion), d = new e.Vector3(0, 0, 1).applyQuaternion(this.quaternion), m = i.angleTo(g), y = i.angleTo(x), C = i.angleTo(d), p = Math.PI / 2, c = y >= p, n = C >= p, o = m >= p;
    if (this.xCircle) {
      const r = this.xCircle.circle.gapAngle;
      c && n ? this.xCircle.circle.geometry = new e.RingGeometry(0.25, 0.3, 20, 8, r, Math.PI / 2 - r * 2) : c && !n ? this.xCircle.circle.geometry = new e.RingGeometry(0.25, 0.3, 20, 8, Math.PI / 2 + r, Math.PI / 2 - r * 2) : !c && n ? this.xCircle.circle.geometry = new e.RingGeometry(0.25, 0.3, 20, 8, Math.PI / 2 * 3 + r, Math.PI / 2 - r * 2) : !c && !n && (this.xCircle.circle.geometry = new e.RingGeometry(0.25, 0.3, 20, 8, Math.PI + r, Math.PI / 2 - r * 2)), this.xCircle.angleSector && (this.xCircle.angleSector.offsetAngle = (s) => s, c && n ? this.xCircle.angleSector.baseAxes = new e.Vector3(0, 0, 1) : c && !n ? this.xCircle.angleSector.baseAxes = new e.Vector3(0, 0, 1) : !c && n ? (this.xCircle.angleSector.baseAxes = new e.Vector3(0, -1, 0), this.xCircle.angleSector.offsetAngle = (s) => s - Math.PI / 2) : !c && !n && (this.xCircle.angleSector.baseAxes = new e.Vector3(0, 0, -1), this.xCircle.angleSector.offsetAngle = (s) => s - Math.PI));
    }
    if (this.yCircle) {
      this.yCircle.angleSector.offsetAngle = (s) => s;
      const r = this.yCircle.circle.gapAngle;
      o && n ? this.yCircle.circle.geometry = new e.RingGeometry(0.25, 0.3, 20, 8, r, Math.PI / 2 - r * 2) : o && !n ? this.yCircle.circle.geometry = new e.RingGeometry(0.25, 0.3, 20, 8, Math.PI / 2 * 3 + r, Math.PI / 2 - r * 2) : !o && n ? this.yCircle.circle.geometry = new e.RingGeometry(0.25, 0.3, 20, 8, Math.PI / 2 + r, Math.PI / 2 - r * 2) : !o && !n && (this.yCircle.circle.geometry = new e.RingGeometry(0.25, 0.3, 20, 8, Math.PI + r, Math.PI / 2 - r * 2)), o && n ? this.yCircle.angleSector.baseAxes = new e.Vector3(1, 0, 0) : o && !n ? (this.yCircle.angleSector.baseAxes = new e.Vector3(0, 0, -1), this.yCircle.angleSector.offsetAngle = (s) => s - Math.PI / 2) : !o && n ? (this.yCircle.angleSector.baseAxes = new e.Vector3(0, 0, 1), this.yCircle.angleSector.offsetAngle = (s) => s + Math.PI / 2) : !o && !n && (this.yCircle.angleSector.baseAxes = new e.Vector3(-1, 0, 0), this.yCircle.angleSector.offsetAngle = (s) => s + Math.PI);
    }
    if (this.zCircle) {
      this.zCircle.angleSector.offsetAngle = (s) => s;
      const r = this.zCircle.circle.gapAngle;
      o && c ? this.zCircle.circle.geometry = new e.RingGeometry(0.25, 0.3, 20, 8, r, Math.PI / 2 - r * 2) : o && !c ? this.zCircle.circle.geometry = new e.RingGeometry(0.25, 0.3, 20, 8, Math.PI / 2 * 3 + r, Math.PI / 2 - r * 2) : !o && c ? this.zCircle.circle.geometry = new e.RingGeometry(0.25, 0.3, 20, 8, Math.PI / 2 + r, Math.PI / 2 - r * 2) : !o && !c && (this.zCircle.circle.geometry = new e.RingGeometry(0.25, 0.3, 20, 8, Math.PI + r, Math.PI / 2 - r * 2)), this.zCircle.angleSector && (o && c ? this.zCircle.angleSector.baseAxes = new e.Vector3(1, 0, 0) : o && !c ? (this.zCircle.angleSector.baseAxes = new e.Vector3(0, -1, 0), this.zCircle.angleSector.offsetAngle = (s) => s - Math.PI / 2) : !o && c ? (this.zCircle.angleSector.baseAxes = new e.Vector3(0, 1, 0), this.zCircle.angleSector.offsetAngle = (s) => s + Math.PI / 2) : !o && !c && (this.zCircle.angleSector.baseAxes = new e.Vector3(-1, 0, 0), this.zCircle.angleSector.offsetAngle = (s) => s + Math.PI));
    }
  }
  showDraggingHelper(t) {
    var i;
    this.hide(), this.children.filter((g) => t.includes(g.direction)).forEach((g) => g.showRing()), (i = this.angleTips) == null || i.show();
  }
  dispose() {
    var t, i;
    this.removeFromParent(), (i = (t = this.angleTips) == null ? void 0 : t.element) == null || i.remove();
  }
}
class f extends e.Group {
  constructor(t) {
    super();
    l(this, "direction");
    /** 1/4 圆 */
    l(this, "circle");
    /** 旋转过程中展示的背景圆环 */
    l(this, "ring");
    /** 旋转过程中表示角度的扇形 */
    l(this, "angleSector");
    this.direction = t.direction, this.circle = new R(t), this.ring = new b(t), this.angleSector = new z(t), this.add(this.circle, this.ring, this.angleSector), this.direction === "y" ? this.rotation.x = Math.PI / 2 : this.direction === "x" && (this.rotation.y = -Math.PI / 2);
  }
  showCircle() {
    this.add(this.circle), this.remove(this.ring, this.angleSector);
  }
  showRing() {
    this.add(this.ring, this.angleSector), this.remove(this.circle);
  }
  hide() {
    this.remove(this.ring, this.angleSector, this.circle);
  }
}
class R extends e.Mesh {
  constructor(t) {
    var i;
    super();
    l(this, "direction");
    l(this, "gapAngle", 0.02);
    l(this, "geometry", new e.RingGeometry(0.25, 0.3, 20, 8, this.gapAngle, Math.PI / 2 - this.gapAngle * 2));
    this.material = new e.MeshBasicMaterial({
      opacity: 0.6,
      transparent: !0,
      // 设置为透明材质，确保在透明渲染队列中
      color: (i = t.color) != null ? i : 16777215,
      side: e.DoubleSide,
      depthTest: !1
    }), this.direction = t.direction, this.renderOrder = P.ROTATE_HELPER, this.geometry.name = `RotateHelperCircleGeometry-${this.direction}`;
  }
}
class b extends e.Group {
  constructor(t) {
    super();
    l(this, "direction");
    this.direction = t.direction;
    const i = 0.015, g = new Array(8).fill(null).map((x, d) => {
      const m = new e.RingGeometry(0.25, 0.3, 20, 8, Math.PI / 4 * d + i, Math.PI / 4 - i * 2), y = new e.MeshBasicMaterial({
        opacity: 1,
        color: 16777215,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0,
        side: e.DoubleSide
      }), C = new e.Mesh(m, y);
      return C.name = `AxesDashedRing-${this.direction}-${d}`, C;
    });
    this.add(...g);
  }
}
class z extends e.Mesh {
  constructor(t) {
    var g;
    super();
    l(this, "direction");
    l(this, "baseAxes");
    l(this, "offsetAngle", (t) => t);
    l(this, "angleDirection");
    switch (t.direction) {
      case "x":
        this.baseAxes = new e.Vector3(0, 0, 1);
        break;
      case "y":
        this.baseAxes = new e.Vector3(1, 0, 0);
        break;
      case "z":
        this.baseAxes = new e.Vector3(1, 0, 0);
        break;
    }
    const i = 0.3 + 5e-4;
    this.geometry = new e.CircleGeometry(i, 48, 0, 1e-4), this.material = new e.MeshBasicMaterial({
      opacity: 0.4,
      color: (g = t.color) != null ? g : 16777215,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0,
      side: e.DoubleSide
    }), this.direction = t.direction, this.angleDirection = this.direction === "z" ? 1 : -1;
  }
  /**
   * 设置扇形旋转方向为顺时针
   */
  setClockwiseDirection() {
    this.angleDirection = -1;
  }
  /**
   * 设置扇形旋转方向为逆时针
   */
  setCounterClockwiseDirection() {
    this.angleDirection = 1;
  }
  /**
   * 切换扇形旋转方向
   */
  toggleDirection() {
    this.angleDirection = this.angleDirection === 1 ? -1 : 1;
  }
  /**
   * 设置扇形的基础轴向
   * @param axes 新的基础轴向向量
   */
  setBaseAxes(t) {
    this.baseAxes = t.clone().normalize();
  }
  /**
   * 获取当前旋转方向
   * @returns 'clockwise' | 'counterclockwise'
   */
  getDirection() {
    return this.angleDirection === -1 ? "clockwise" : "counterclockwise";
  }
}
export {
  H as RotateHelper
};
