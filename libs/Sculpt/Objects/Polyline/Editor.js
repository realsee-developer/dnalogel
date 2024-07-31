var g = Object.defineProperty;
var d = (s, e, t) => e in s ? g(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => (d(s, typeof e != "symbol" ? e + "" : e, t), t);
import { BaseEditor as p } from "../Base/Editor.js";
import { Sculpt as r } from "../../index.js";
import { PointMesh as a } from "../../Meshes/Point.js";
import { getIntersectByRaycaster as h } from "../../../shared-utils/five/getPosition.js";
import "hammerjs";
import "three";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "animejs";
import { notNil as l } from "../../../shared-utils/isNil.js";
class m extends p {
  constructor(t) {
    super(t);
    n(this, "draggingPoints", []);
    n(this, "onDragstart", (t) => {
      const i = t.target;
      this.draggingPoints = this.pointMeshes.filter((o) => o.position.equals(i.position));
    });
    n(this, "onDragend", (t) => {
      this.draggingPoints = [];
    });
  }
  get pointMeshes() {
    return this.children.filter((t) => t instanceof a);
  }
  get pointHandles() {
    return this.children;
  }
  enable() {
    super.enable(), this.points.filter(l).forEach((t) => {
      const i = new a();
      i.visible = !1, i.position.copy(t), i.draggable = !0, r.modules.fiveDomEvents.addEventListener(i, "drag", this.onDrag), r.modules.fiveDomEvents.addEventListener(i, "dragstart", this.onDragstart), r.modules.fiveDomEvents.addEventListener(i, "dragend", this.onDragend), this.add(i);
    });
  }
  disable() {
    super.disable(), this.removeChildren();
  }
}
class j extends m {
  constructor(t) {
    super(t);
    n(this, "onDrag", (t) => {
      if (!this.draggingPoints || this.draggingPoints.length === 0)
        return;
      const i = h(r.modules.five, t.raycaster);
      this.draggingPoints.forEach((o) => o.position.copy(i.point)), this.originObject.polyLineMesh.setPoints(this.pointMeshes.map((o) => o.position));
    });
  }
  get points() {
    return this.originObject.polyLineMesh.points;
  }
}
export {
  m as LineEditor,
  j as PolylineEditor
};
