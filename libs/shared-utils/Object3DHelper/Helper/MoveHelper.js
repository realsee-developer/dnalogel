var m = Object.defineProperty;
var z = (o, i, r) => i in o ? m(o, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[i] = r;
var a = (o, i, r) => (z(o, typeof i != "symbol" ? i + "" : i, r), r);
import { MoveHelperAbstract as u } from "../Base/BaseHelper.js";
import { ArrowGroup as A } from "./Objects/ArrowGroup.js";
import { CenterHandle as b } from "./Objects/CenterHandle.js";
import { AXES_THREE_COLOR as f } from "../Constants/color.js";
import { calculateScaleByCamera as H } from "../utils/calculateScaleByCamera.js";
import { getPoseFromCamera as g } from "../utils/getPoseFromCamera.js";
import { getOrthographicCameraDirection as v } from "../utils/getOrthographicCameraDirection.js";
import * as d from "three";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../three/core/Sphere.js";
class S extends u {
  constructor(r, e) {
    super(r, e);
    a(this, "name", "MoveHelper");
    a(this, "xArrow");
    a(this, "yArrow");
    a(this, "zArrow");
    a(this, "centerHandle");
    e.xArrowEnable !== !1 && (this.xArrow = new A({ direction: "x", color: f.X })), e.yArrowEnable !== !1 && (this.yArrow = new A({ direction: "y", color: f.Y })), e.zArrowEnable !== !1 && (this.zArrow = new A({ direction: "z", color: f.Z })), e.centerHandleEnable !== !1 && (this.centerHandle = new b()), this.add(...[this.xArrow, this.yArrow, this.zArrow, this.centerHandle].filter(Boolean));
  }
  update(r) {
    this.xArrow && (this.xArrow.visible = !0), this.yArrow && (this.yArrow.visible = !0), this.zArrow && (this.zArrow.visible = !0), this.centerHandle && this.centerHandle.update(r);
    const e = this.helperObject.position.clone().sub(r.position).normalize(), h = new d.Vector3(1, 0, 0).applyQuaternion(this.quaternion), l = new d.Vector3(0, 1, 0).applyQuaternion(this.quaternion), n = new d.Vector3(0, 0, 1).applyQuaternion(this.quaternion);
    if (r.type === "OrthographicCamera") {
      const w = g(r), s = v(w), t = 0.0872665;
      Math.abs(h.angleTo(s) - 0) < t || Math.abs(h.angleTo(s) - Math.PI) < t ? this.xArrow && (this.xArrow.visible = !1) : Math.abs(l.angleTo(s) - 0) < t || Math.abs(l.angleTo(s) - Math.PI) < t ? this.yArrow && (this.yArrow.visible = !1) : (Math.abs(n.angleTo(s) - 0) < t || Math.abs(n.angleTo(s) - Math.PI) < t) && this.zArrow && (this.zArrow.visible = !1);
    }
    if (r.type !== "OrthographicCamera") {
      const w = e.angleTo(h), s = e.angleTo(l), t = e.angleTo(n), c = Math.PI / 2, p = s < c, y = t < c, x = w < c;
      this.xArrow && (x ? (this.xArrow.scale.x = -1, this.xArrow.scale.y = 1, this.xArrow.scale.z = 1) : (this.xArrow.scale.x = 1, this.xArrow.scale.y = 1, this.xArrow.scale.z = 1)), this.yArrow && (p ? (this.yArrow.scale.x = 1, this.yArrow.scale.y = -1, this.yArrow.scale.z = 1) : (this.yArrow.scale.x = 1, this.yArrow.scale.y = 1, this.yArrow.scale.z = 1)), this.zArrow && (y ? (this.zArrow.scale.x = 1, this.zArrow.scale.y = 1, this.zArrow.scale.z = -1) : (this.zArrow.scale.x = 1, this.zArrow.scale.y = 1, this.zArrow.scale.z = 1));
    }
  }
  show() {
    super.show(), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.centerHandle && this.add(this.centerHandle);
  }
  setScaleByCamera(r) {
    this.scale.setScalar(H(r, this.position));
  }
  showDraggingHelper(r) {
    this.xArrow && (r.includes("x") ? this.add(this.xArrow) : this.remove(this.xArrow)), this.yArrow && (r.includes("y") ? this.add(this.yArrow) : this.remove(this.yArrow)), this.zArrow && (r.includes("z") ? this.add(this.zArrow) : this.remove(this.zArrow)), this.centerHandle && (r.includes("plane") ? this.add(this.centerHandle) : this.remove(this.centerHandle));
  }
  dispose() {
    this.remove(...[this.xArrow, this.yArrow, this.zArrow, this.centerHandle].filter(Boolean)), super.dispose();
  }
}
export {
  S as MoveHelper
};
