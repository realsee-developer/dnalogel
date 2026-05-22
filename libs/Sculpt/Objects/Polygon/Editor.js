var x = Object.defineProperty;
var S = (h, a, t) => a in h ? x(h, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[a] = t;
var d = (h, a, t) => (S(h, typeof a != "symbol" ? a + "" : a, t), t);
import { Sculpt as c } from "../../index.js";
import { getIntersectByRaycaster as C } from "../../../shared-utils/five/getPosition.js";
import { LineEditorAbstract as L } from "../Line/Editor.js";
import { PointMesh as w } from "../../Meshes/Point.js";
class A extends L {
  constructor(t) {
    super(t);
    d(this, "onDragstart", (t) => {
      const n = t.target;
      this.draggingPoints = this.pointMeshes.filter((i) => i.position.equals(n.position));
    });
    d(this, "onDrag", (t) => {
      var e, r;
      if (!this.draggingPoints || this.draggingPoints.length === 0)
        return;
      const n = C(c.modules.five, t.raycaster);
      if (!n)
        return;
      const i = this.originObject.areaMesh.projectPoint(n.point);
      this.draggingPoints.forEach((s) => s.position.copy(i)), this.originObject.areaMesh.setPoints(this.pointMeshes.map((s) => s.position)), this.hooks.emit("objectUpdate"), c.modules.five && (c.modules.five.needsRender = !0);
      const o = (r = (e = this.originObject.areaMesh) == null ? void 0 : e.userData) == null ? void 0 : r.syncCreationPointMeshes;
      typeof o == "function" && o();
    });
    d(this, "onDragend", (t) => {
      this.draggingPoints = [], this.originObject.recordHistory(), this.hooks.emit("objectUpdate");
    });
  }
  get points() {
    return this.originObject.areaMesh.points;
  }
  enable() {
    super.enable(), this.updatePointMeshes();
  }
  disable() {
    this.pointMeshes.forEach((t) => this.disposePointMesh(t)), super.disable();
  }
  /**
   * 更新所有 PointMesh 的位置
   */
  updatePointMeshes() {
    var g, u, M, p, P, l, f, D, y, m, v, b;
    const t = this.originObject.areaMesh.points, n = (M = (u = (g = this.originObject.areaMesh) == null ? void 0 : g.userData) == null ? void 0 : u.dragSelectPixelDistance) != null ? M : 10, i = this.originObject.areaMesh, o = (P = (p = i.lineColor) == null ? void 0 : p.getHex) == null ? void 0 : P.call(p), e = (f = (l = i.color) == null ? void 0 : l.getHex) == null ? void 0 : f.call(l), r = (D = o != null ? o : e) != null ? D : 16777215, s = (b = (v = (m = (y = i.line) == null ? void 0 : y.style) == null ? void 0 : m.opacity) != null ? v : i.opacity) != null ? b : 1;
    this.syncPointMeshCount(t, {
      dragSelectPixelDistance: n,
      pointColor: r,
      pointOpacity: s
    }), this.pointMeshes.forEach((E, j) => {
      const O = t[j];
      O && (E.position.copy(O), E.visible = !0);
    });
  }
  syncPointMeshCount(t, n) {
    const i = [...this.pointMeshes], { dragSelectPixelDistance: o, pointColor: e, pointOpacity: r } = n;
    for (i.length > t.length && i.slice(t.length).forEach((s) => this.disposePointMesh(s)); this.pointMeshes.length < t.length; ) {
      const s = this.createPointMesh({ dragSelectPixelDistance: o, pointColor: e, pointOpacity: r });
      this.add(s);
    }
    this.pointMeshes.forEach((s) => {
      var g;
      s.userData = (g = s.userData) != null ? g : {}, s.userData.dragSelectPixelDistance = o, s.setStyle({
        color: e,
        opacity: r
      });
    });
  }
  createPointMesh(t) {
    var r;
    const { dragSelectPixelDistance: n, pointColor: i, pointOpacity: o } = t, e = new w();
    return e.visible = !0, e.userData = (r = e.userData) != null ? r : {}, e.userData.dragSelectPixelDistance = n, e.draggable = !0, e.setStyle({
      color: i,
      opacity: o
    }), c.modules.fiveDomEvents.addEventListener(e, "drag", this.onDrag), c.modules.fiveDomEvents.addEventListener(e, "dragstart", this.onDragstart), c.modules.fiveDomEvents.addEventListener(e, "dragend", this.onDragend), e;
  }
  disposePointMesh(t) {
    c.modules.fiveDomEvents.removeEventListener(t), this.remove(t);
  }
}
export {
  A as PolygonEditor
};
