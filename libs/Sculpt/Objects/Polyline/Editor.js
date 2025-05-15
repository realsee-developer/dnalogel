var n = Object.defineProperty;
var p = (o, i, t) => i in o ? n(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var r = (o, i, t) => (p(o, typeof i != "symbol" ? i + "" : i, t), t);
import { Sculpt as g } from "../../index.js";
import { getIntersectByRaycaster as c } from "../../../shared-utils/five/getPosition.js";
import { LineEditorAbstract as a } from "../Line/Editor.js";
class y extends a {
  constructor(t) {
    super(t);
    r(this, "onDrag", (t) => {
      if (!this.draggingPoints || this.draggingPoints.length === 0)
        return;
      const e = c(g.modules.five, t.raycaster);
      this.draggingPoints.forEach((s) => s.position.copy(e.point)), this.originObject.polyLineMesh.setPoints(this.pointMeshes.map((s) => s.position));
    });
  }
  get points() {
    return this.originObject.polyLineMesh.points;
  }
}
export {
  y as PolylineEditor
};
