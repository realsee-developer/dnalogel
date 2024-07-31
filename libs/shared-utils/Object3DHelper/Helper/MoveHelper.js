var l = Object.defineProperty;
var A = (o, i, r) => i in o ? l(o, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[i] = r;
var e = (o, i, r) => (A(o, typeof i != "symbol" ? i + "" : i, r), r);
import { MoveHelperAbstract as h } from "../Base/BaseHelper.js";
import { ArrowGroup as t } from "./Objects/ArrowGroup.js";
import { AXES_THREE_COLOR as w } from "../Constants/color.js";
import { calculateScaleByCamera as a } from "../utils/calculateScaleByCamera.js";
import "three";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
class u extends h {
  constructor(r, s) {
    super(r, s);
    e(this, "xArrow");
    e(this, "yArrow");
    e(this, "zArrow");
    s.xArrowEnable !== !1 && (this.xArrow = new t({ direction: "x", color: w.X })), s.yArrowEnable !== !1 && (this.yArrow = new t({ direction: "y", color: w.Y })), s.zArrowEnable !== !1 && (this.zArrow = new t({ direction: "z", color: w.Z })), this.add(...[this.xArrow, this.yArrow, this.zArrow].filter(Boolean));
  }
  show() {
    super.show(), this.xArrow && (this.xArrow.visible = !0), this.yArrow && (this.yArrow.visible = !0), this.zArrow && (this.zArrow.visible = !0);
  }
  setScaleByCamera(r) {
    this.scale.setScalar(a(r, this.position));
  }
  showDraggingHelper(r) {
    this.xArrow && (this.xArrow.visible = r.includes("x")), this.yArrow && (this.yArrow.visible = r.includes("y")), this.zArrow && (this.zArrow.visible = r.includes("z"));
  }
  dispose() {
    this.remove(...[this.xArrow, this.yArrow, this.zArrow].filter(Boolean)), super.dispose();
  }
}
export {
  u as MoveHelper
};
