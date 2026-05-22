var p = Object.defineProperty;
var g = (r, e, t) => e in r ? p(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var o = (r, e, t) => (g(r, typeof e != "symbol" ? e + "" : e, t), t);
import { BaseEditor as d } from "../Base/Editor.js";
import { Sculpt as n } from "../../index.js";
import { PointMesh as a } from "../../Meshes/Point.js";
import { getIntersectByRaycaster as m } from "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/tag.js";
import "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import { notNil as h } from "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../shared-utils/three/blink.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../vendor/earcut/src/earcut.js";
import "../../../shared-utils/five/FivePuppet.js";
class l extends d {
  constructor(t) {
    super(t);
    o(this, "draggingPoints", []);
    o(this, "onDragstart", (t) => {
      const i = t.target;
      this.draggingPoints = this.pointMeshes.filter((s) => s.position.equals(i.position));
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
    super.enable(), this.points.filter(h).forEach((t) => {
      const i = new a();
      i.visible = !1, i.position.copy(t), i.draggable = !0, n.modules.fiveDomEvents.addEventListener(i, "drag", this.onDrag), n.modules.fiveDomEvents.addEventListener(i, "dragstart", this.onDragstart), n.modules.fiveDomEvents.addEventListener(i, "dragend", this.onDragend), this.add(i);
    });
  }
  disable() {
    super.disable(), this.removeChildren();
  }
}
class I extends l {
  constructor(t) {
    super(t);
    o(this, "onDrag", (t) => {
      if (!this.draggingPoints || this.draggingPoints.length === 0)
        return;
      const i = m(n.modules.five, t.raycaster);
      this.draggingPoints.forEach((s) => s.position.copy(i.point)), this.originObject.lineMesh.setPoints(this.pointMeshes.map((s) => s.position));
    });
  }
  get points() {
    return this.originObject.lineMesh.points;
  }
}
export {
  I as LineEditor,
  l as LineEditorAbstract
};
