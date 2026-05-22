var g = Object.defineProperty;
var c = (r, t, e) => t in r ? g(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var d = (r, t, e) => (c(r, typeof t != "symbol" ? t + "" : t, e), e);
import { RectangleScaleController as l } from "./RectangleScaleController.js";
class E extends l {
  constructor(...e) {
    super(...e);
    d(this, "name", "CSS3DScaleController");
    this.addHTMLEventListener();
  }
  addHTMLEventListener() {
    this.helperObject3D.points.forEach((e) => {
      if (!e)
        return;
      const n = e.point, a = (o) => this.dragStart(o, e), s = this.dragging.bind(this), i = this.dragEnd.bind(this);
      n.addEventListener("dragstart", a), n.addEventListener("drag", s), n.addEventListener("dragend", i);
    });
  }
}
export {
  E as CSS3DScaleController
};
