var a = Object.defineProperty;
var c = (o, i, t) => i in o ? a(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var r = (o, i, t) => (c(o, typeof i != "symbol" ? i + "" : i, t), t);
import { Sculpt as g } from "../../index.js";
import { getIntersectByRaycaster as p } from "../../../shared-utils/five/getPosition.js";
import { LineEditorAbstract as h } from "../Line/Editor.js";
class u extends h {
  constructor(t) {
    super(t);
    r(this, "onDrag", (t) => {
      if (!this.draggingPoints || this.draggingPoints.length === 0)
        return;
      const e = p(g.modules.five, t.raycaster), n = this.originObject.areaMesh.projectPoint(e.point);
      this.draggingPoints.forEach((s) => s.position.copy(n)), this.originObject.areaMesh.setPoints(this.pointMeshes.map((s) => s.position));
    });
  }
  get points() {
    return this.originObject.areaMesh.points;
  }
}
export {
  u as PolygonEditor
};
