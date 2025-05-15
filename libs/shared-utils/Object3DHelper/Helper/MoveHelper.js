var p = Object.defineProperty;
var c = (t, i, r) => i in t ? p(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r;
var a = (t, i, r) => (c(t, typeof i != "symbol" ? i + "" : i, r), r);
import { MoveHelperAbstract as d } from "../Base/BaseHelper.js";
import { ArrowGroup as h } from "./Objects/ArrowGroup.js";
import { AXES_THREE_COLOR as w } from "../Constants/color.js";
import { calculateScaleByCamera as m } from "../utils/calculateScaleByCamera.js";
import { getPoseFromCamera as y } from "../utils/getPoseFromCamera.js";
import { getOrthographicCameraDirection as u } from "../utils/getOrthographicCameraDirection.js";
import * as l from "three";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../three/core/Sphere.js";
class D extends d {
  constructor(r, o) {
    super(r, o);
    a(this, "name", "MoveHelper");
    a(this, "xArrow");
    a(this, "yArrow");
    a(this, "zArrow");
    o.xArrowEnable !== !1 && (this.xArrow = new h({ direction: "x", color: w.X })), o.yArrowEnable !== !1 && (this.yArrow = new h({ direction: "y", color: w.Y })), o.zArrowEnable !== !1 && (this.zArrow = new h({ direction: "z", color: w.Z })), this.add(...[this.xArrow, this.yArrow, this.zArrow].filter(Boolean));
  }
  update(r) {
    if (this.xArrow && (this.xArrow.visible = !0), this.yArrow && (this.yArrow.visible = !0), this.zArrow && (this.zArrow.visible = !0), r.type === "OrthographicCamera") {
      const o = new l.Vector3(1, 0, 0).applyQuaternion(this.quaternion), n = new l.Vector3(0, 1, 0).applyQuaternion(this.quaternion), A = new l.Vector3(0, 0, 1).applyQuaternion(this.quaternion), f = y(r), e = u(f), s = 0.0872665;
      Math.abs(o.angleTo(e) - 0) < s || Math.abs(o.angleTo(e) - Math.PI) < s ? this.xArrow && (this.xArrow.visible = !1) : Math.abs(n.angleTo(e) - 0) < s || Math.abs(n.angleTo(e) - Math.PI) < s ? this.yArrow && (this.yArrow.visible = !1) : (Math.abs(A.angleTo(e) - 0) < s || Math.abs(A.angleTo(e) - Math.PI) < s) && this.zArrow && (this.zArrow.visible = !1);
    }
  }
  show() {
    super.show(), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow);
  }
  setScaleByCamera(r) {
    this.scale.setScalar(m(r, this.position));
  }
  showDraggingHelper(r) {
    this.xArrow && (r.includes("x") ? this.add(this.xArrow) : this.remove(this.xArrow)), this.yArrow && (r.includes("y") ? this.add(this.yArrow) : this.remove(this.yArrow)), this.zArrow && (r.includes("z") ? this.add(this.zArrow) : this.remove(this.zArrow));
  }
  dispose() {
    this.remove(...[this.xArrow, this.yArrow, this.zArrow].filter(Boolean)), super.dispose();
  }
}
export {
  D as MoveHelper
};
