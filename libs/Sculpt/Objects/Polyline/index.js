var A = Object.defineProperty, D = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var R = Object.getOwnPropertySymbols;
var F = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var v = (n, t, e) => t in n ? A(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, p = (n, t) => {
  for (var e in t || (t = {}))
    F.call(t, e) && v(n, e, t[e]);
  if (R)
    for (var e of R(t))
      k.call(t, e) && v(n, e, t[e]);
  return n;
}, M = (n, t) => D(n, T(t));
var f = (n, t, e) => (v(n, typeof t != "symbol" ? t + "" : t, e), e);
var E = (n, t, e) => new Promise((s, P) => {
  var w = (o) => {
    try {
      c(e.next(o));
    } catch (a) {
      P(a);
    }
  }, b = (o) => {
    try {
      c(e.throw(o));
    } catch (a) {
      P(a);
    }
  }, c = (o) => o.done ? s(o.value) : Promise.resolve(o.value).then(w, b);
  c((e = e.apply(n, t)).next());
});
import { PolylineMesh as U, PolylineWithDotsMesh as V } from "../../Meshes/Polyline.js";
import { BaseObject as z } from "../Base/index.js";
import * as d from "three";
import { PolylineEditor as B } from "./Editor.js";
import { vector3ToArray as H } from "../../../shared-utils/three/vector3ToArray.js";
import { withResolvers as I } from "../../../shared-utils/promise/withResolvers.js";
import { anyPositionToVector3 as N } from "../../../shared-utils/positionToVector3.js";
class $ extends z {
  constructor(e, s) {
    super(e, s);
    f(this, "type", "Polyline");
    f(this, "polyLineMesh");
    f(this, "_editor");
    f(this, "creatingObject");
    e && (this.polyLineMesh = new V(p(p({}, e.style), e)), this.add(this.polyLineMesh));
  }
  get editor() {
    return this._editor || (this._editor = new B(this)), this._editor;
  }
  get data() {
    return M(p({}, this.baseData), {
      points: H(this.applyObjectMatrixWorld(this.polyLineMesh.points)),
      style: {
        lineColor: new d.Color(this.polyLineMesh.lineColor).getHex(),
        lineWidth: this.polyLineMesh.lineWidth,
        dashed: this.polyLineMesh.dashed
      }
    });
  }
  setData(e) {
    e.points && this.polyLineMesh.setPoints(this.applyObjectReversalMatrixWorld(e.points.map(N))), this.polyLineMesh.setStyle(e.style);
  }
  highlight() {
    var e;
    (e = this.polyLineMesh) == null || e.highlight();
  }
  unhighlight() {
    var e;
    (e = this.polyLineMesh) == null || e.unhighlight();
  }
  canUndo() {
    var e;
    (e = this.creatingObject) == null || e.canUndo();
  }
  canRedo() {
    var e;
    (e = this.creatingObject) == null || e.canRedo();
  }
  undo() {
    var e;
    (e = this.creatingObject) == null || e.undo();
  }
  redo() {
    var e;
    (e = this.creatingObject) == null || e.redo();
  }
  create(e) {
    return E(this, null, function* () {
      this.removeChildren();
      const s = new V(e);
      this.polyLineMesh = s, this.add(this.polyLineMesh), this.creatingObject = q(s, this.pointSelector, e), yield this.creatingObject.finished, this.config.defaultAction && this.editor.enable();
    });
  }
}
function q(n, t, e) {
  var x;
  const s = n.parent;
  if (!s)
    return;
  const { promise: P, resolve: w, reject: b } = I(), c = (x = e == null ? void 0 : e.limit) != null ? x : "none", o = new U(n.style);
  s.add(o);
  const a = new U(M(p({}, n.style), { dashed: !0, lengthEnable: !1 }));
  s.add(a), t.enable();
  const i = [];
  let r, l, j;
  const y = [], L = () => i.length > 0, O = () => y.length > 0, W = () => {
    L() && (y.push(i.pop()), n.setPoints(i), m(j), t.pointSelectorHelper.magnifier.render());
  }, _ = () => {
    O() && (i.push(y.pop()), n.setPoints(i), m(j), t.pointSelectorHelper.magnifier.render());
  }, C = (h) => {
    y.length = 0;
    const g = i.length === 0 ? h.point : r.clone();
    i.push(g), n.setPoints(i);
  }, m = (h) => {
    const g = () => {
      o.setPoints([]), a.setPoints([]), r = null;
    };
    if (!h || (j = h, !(i != null && i.length)))
      return g();
    const u = i.at(-1).clone();
    c === "none" ? (r = h.point, o.setPoints([u, r])) : c === "xoz" ? (l = l != null ? l : new d.Plane().setFromNormalAndCoplanarPoint(new d.Vector3(0, 1, 0), i[0]), t.plane = l, r = l.projectPoint(h.point, new d.Vector3()), o.setPoints([u, r]), a.setPoints([r, h.point])) : c === "y" && (i.length === 1 ? (r = h.point, o.setPoints([u, r])) : (l = l != null ? l : new d.Plane().setFromCoplanarPoints(i[0], i[1], new d.Vector3(0, 1, 0).add(i[0])), t.plane = l, r = l.projectPoint(h.point, new d.Vector3()), o.setPoints([u, r]), a.setPoints([r, h.point])));
  };
  return t.on("select", C), t.on("intersectionUpdate", m), t.on("disable", () => {
    if (t.off("select", C), t.off("intersectionUpdate", m), t.plane = null, s.remove(o), s.remove(a), i.length < 2)
      return s.remove(n), b(new Error("Cancelled"));
    w();
  }), {
    finished: P,
    canUndo: L,
    canRedo: O,
    undo: W,
    redo: _
  };
}
export {
  $ as Polyline,
  q as createPolyline
};
