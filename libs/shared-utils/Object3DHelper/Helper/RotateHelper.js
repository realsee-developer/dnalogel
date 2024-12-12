var m = Object.defineProperty;
var w = (a, s, t) => s in a ? m(a, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[s] = t;
var i = (a, s, t) => (w(a, typeof s != "symbol" ? s + "" : s, t), t);
import * as r from "three";
import { RotateHelperAbstract as u } from "../Base/BaseHelper.js";
import { AXES_THREE_COLOR as l } from "../Constants/color.js";
import { tipsDom as y } from "./HTML/tipsDom.js";
import { calculateScaleByCamera as C } from "../utils/calculateScaleByCamera.js";
class D extends u {
  constructor(t, e) {
    super(t, e);
    i(this, "name", "RotateHelper");
    i(this, "xCircle");
    i(this, "yCircle");
    i(this, "zCircle");
    i(this, "children", []);
    i(this, "angleTips");
    i(this, "container");
    (e == null ? void 0 : e.yzCircleEnable) !== !1 && (this.xCircle = new n({ direction: "x", color: l.X })), (e == null ? void 0 : e.xzCircleEnable) !== !1 && (this.yCircle = new n({ direction: "y", color: l.Y })), (e == null ? void 0 : e.xyCircleEnable) !== !1 && (this.zCircle = new n({ direction: "z", color: l.Z })), e != null && e.container && (e == null ? void 0 : e.angleTipsEnable) !== !1 && (this.container = e == null ? void 0 : e.container, this.angleTips = y({ display: "none" }), this.container.appendChild(this.angleTips.element)), this.add(...[this.xCircle, this.yCircle, this.zCircle].filter(Boolean)), this.show();
  }
  hide() {
    this.children.forEach((t) => t.hide());
  }
  show() {
    var t;
    this.children.forEach((e) => e.showCircle()), (t = this.angleTips) == null || t.hide();
  }
  setScaleByCamera(t) {
    this.scale.setScalar(C(t, this.position));
  }
  showDraggingHelper(t) {
    var e;
    this.hide(), this.children.filter((h) => t.includes(h.direction)).forEach((h) => h.showRing()), (e = this.angleTips) == null || e.show();
  }
  dispose() {
    var t, e;
    this.removeFromParent(), (e = (t = this.angleTips) == null ? void 0 : t.element) == null || e.remove();
  }
}
class n extends r.Group {
  constructor(t) {
    super();
    i(this, "direction");
    /** 1/4 圆 */
    i(this, "circle");
    /** 旋转过程中展示的背景圆环 */
    i(this, "ring");
    /** 旋转过程中表示角度的扇形 */
    i(this, "angleSector");
    this.direction = t.direction, this.circle = new x(t), this.ring = new b(t), this.angleSector = new M(t), this.add(this.circle, this.ring, this.angleSector), this.direction === "y" ? this.rotateX(Math.PI / 2) : this.direction === "x" && this.rotateY(-Math.PI / 2);
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
class x extends r.Mesh {
  constructor(t) {
    var e;
    super();
    i(this, "direction");
    i(this, "gapAngle", 0.02);
    i(this, "geometry", new r.RingGeometry(0.25, 0.3, 20, 8, this.gapAngle, Math.PI / 2 - this.gapAngle * 2));
    this.material = new r.MeshBasicMaterial({
      opacity: 0.6,
      color: (e = t.color) != null ? e : 16777215,
      transparent: !0,
      side: r.DoubleSide,
      depthTest: !1,
      depthWrite: !1
    }), this.renderOrder = 50, this.direction = t.direction, this.geometry.name = `RotateHelperCircleGeometry-${this.direction}`;
  }
}
class b extends r.Group {
  constructor(t) {
    super();
    i(this, "direction");
    this.direction = t.direction;
    const e = 0.015, h = new Array(8).fill(null).map((R, c) => {
      const d = new r.RingGeometry(0.25, 0.3, 20, 8, Math.PI / 4 * c + e, Math.PI / 4 - e * 2), p = new r.MeshBasicMaterial({
        opacity: 1,
        color: 16777215,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0,
        side: r.DoubleSide
      });
      this.renderOrder = 50;
      const o = new r.Mesh(d, p);
      return o.name = `AxesDashedRing-${this.direction}-${c}`, o;
    });
    this.add(...h);
  }
}
class M extends r.Mesh {
  constructor(t) {
    var h;
    super();
    i(this, "direction");
    i(this, "baseAxes");
    i(this, "angleDirection");
    switch (t.direction) {
      case "x":
        this.baseAxes = new r.Vector3(0, 0, 1);
        break;
      case "y":
        this.baseAxes = new r.Vector3(1, 0, 0);
        break;
      case "z":
        this.baseAxes = new r.Vector3(1, 0, 0);
        break;
    }
    const e = 0.3 + 5e-4;
    this.geometry = new r.CircleGeometry(e, 48, 0, 1e-4), this.material = new r.MeshBasicMaterial({
      opacity: 0.4,
      color: (h = t.color) != null ? h : 16777215,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0,
      side: r.DoubleSide
    }), this.renderOrder = 50, this.direction = t.direction, this.angleDirection = this.direction === "z" ? 1 : -1;
  }
}
export {
  D as RotateHelper
};
