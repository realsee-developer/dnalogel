var g = Object.defineProperty;
var d = (s, e, t) => e in s ? g(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var o = (s, e, t) => (d(s, typeof e != "symbol" ? e + "" : e, t), t);
import { BaseEditor as p } from "../Base/Editor.js";
import { Sculpt as n } from "../../index.js";
import { PointMesh as a } from "../../Meshes/Point.js";
import { getIntersectByRaycaster as h } from "../../../shared-utils/five/getPosition.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import { notNil as m } from "../../../shared-utils/isNil.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
class l extends p {
  constructor(t) {
    super(t);
    o(this, "draggingPoints", []);
    o(this, "onDragstart", (t) => {
      const i = t.target;
      this.draggingPoints = this.pointMeshes.filter((r) => r.position.equals(i.position));
    });
    o(this, "onDragend", (t) => {
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
    super.enable(), this.points.filter(m).forEach((t) => {
      const i = new a();
      i.visible = !1, i.position.copy(t), i.draggable = !0, n.modules.fiveDomEvents.addEventListener(i, "drag", this.onDrag), n.modules.fiveDomEvents.addEventListener(i, "dragstart", this.onDragstart), n.modules.fiveDomEvents.addEventListener(i, "dragend", this.onDragend), this.add(i);
    });
  }
  disable() {
    super.disable(), this.removeChildren();
  }
}
class q extends l {
  constructor(t) {
    super(t);
    o(this, "onDrag", (t) => {
      if (!this.draggingPoints || this.draggingPoints.length === 0)
        return;
      const i = h(n.modules.five, t.raycaster);
      this.draggingPoints.forEach((r) => r.position.copy(i.point)), this.originObject.lineMesh.setPoints(this.pointMeshes.map((r) => r.position));
    });
  }
  get points() {
    return this.originObject.lineMesh.points;
  }
}
export {
  q as LineEditor,
  l as LineEditorAbstract
};
