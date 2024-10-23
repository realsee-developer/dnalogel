var n = Object.defineProperty;
var a = (r, t, i) => t in r ? n(r, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[t] = i;
var o = (r, t, i) => (a(r, typeof t != "symbol" ? t + "" : t, i), i);
import { BaseEditor as c } from "../Base/Editor.js";
import { Sculpt as g } from "../../index.js";
import { getIntersectByRaycaster as b } from "../../../shared-utils/five/getPosition.js";
class l extends c {
  constructor(i) {
    super(i);
    o(this, "onDrag", (i) => {
      var e;
      const s = b(g.modules.five, i.raycaster);
      (e = this.originObject.pointMesh) == null || e.position.copy(s.point);
    });
  }
  enable() {
    super.enable(), this.originObject.config.canEdit && (this.originObject.draggable = !0, this.originObject.on("drag", this.onDrag));
  }
  disable() {
    super.disable(), this.originObject.config.canEdit && (this.originObject.draggable = !1, this.originObject.off("drag", this.onDrag));
  }
}
export {
  l as PointEditor
};
