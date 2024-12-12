var a = Object.defineProperty;
var n = (r, e, t) => e in r ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var o = (r, e, t) => (n(r, typeof e != "symbol" ? e + "" : e, t), t);
import { BaseEditor as c } from "../Base/Editor.js";
import { Sculpt as g } from "../../index.js";
import { getIntersectByRaycaster as p } from "../../../shared-utils/five/getPosition.js";
class f extends c {
  constructor(t) {
    super(t);
    o(this, "onDrag", (t) => {
      var i;
      const s = p(g.modules.five, t.raycaster);
      (i = this.originObject.pointMesh) == null || i.position.copy(s.point);
    });
  }
  enable() {
    super.enable(), this.originObject.draggable = !0, this.originObject.on("drag", this.onDrag);
  }
  disable() {
    super.disable(), this.originObject.draggable = !1, this.originObject.off("drag", this.onDrag);
  }
}
export {
  f as PointEditor
};
