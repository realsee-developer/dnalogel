var F = Object.defineProperty, I = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var N = Object.prototype.hasOwnProperty, z = Object.prototype.propertyIsEnumerable;
var E = (s, t, e) => t in s ? F(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, g = (s, t) => {
  for (var e in t || (t = {}))
    N.call(t, e) && E(s, e, t[e]);
  if (A)
    for (var e of A(t))
      z.call(t, e) && E(s, e, t[e]);
  return s;
}, O = (s, t) => I(s, L(t));
var u = (s, t, e) => (E(s, typeof t != "symbol" ? t + "" : t, e), e);
var H = (s, t, e) => new Promise((c, d) => {
  var m = (i) => {
    try {
      f(e.next(i));
    } catch (l) {
      d(l);
    }
  }, r = (i) => {
    try {
      f(e.throw(i));
    } catch (l) {
      d(l);
    }
  }, f = (i) => i.done ? c(i.value) : Promise.resolve(i.value).then(m, r);
  f((e = e.apply(s, t)).next());
});
import { BaseObject as q } from "../Base/index.js";
import * as p from "three";
import { PolylineMesh as _ } from "../../Meshes/Polyline.js";
import { AreaMesh as D } from "../../Meshes/Area.js";
import { PolygonEditor as G } from "./Editor.js";
import { vector3ToArray as J } from "../../../shared-utils/three/vector3ToArray.js";
import { withResolvers as K } from "../../../shared-utils/promise/withResolvers.js";
import { anyPositionToVector3 as Q } from "../../../shared-utils/positionToVector3.js";
class ie extends q {
  constructor(e, c) {
    super(e, c);
    u(this, "type", "Polygon");
    u(this, "areaMesh");
    u(this, "_editor");
    u(this, "creatingObject");
    e && (this.areaMesh = new D(g(g({}, e.style), e)), this.add(this.areaMesh));
  }
  get editor() {
    return this._editor || (this._editor = new G(this)), this._editor;
  }
  get data() {
    return this.updateMatrixWorld(), O(g({}, this.baseData), {
      points: J(this.applyObjectMatrixWorld(this.areaMesh.points)),
      style: {
        color: this.areaMesh.color.getHex(),
        lineColor: this.areaMesh.lineColor.getHex(),
        lineWidth: this.areaMesh.lineWidth
      }
    });
  }
  setData(e) {
    e.points && this.areaMesh.setPoints(this.applyObjectReversalMatrixWorld(e.points.map(Q))), this.areaMesh.setStyle(e.style);
  }
  highlight() {
    var e;
    (e = this.areaMesh) == null || e.highlight();
  }
  unhighlight() {
    var e;
    (e = this.areaMesh) == null || e.unhighlight();
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
    return H(this, null, function* () {
      this.children.forEach((d) => {
        d.parent === this && this.remove(d);
      }), this.children.length = 0;
      const c = new D(e);
      this.areaMesh = c, this.add(this.areaMesh), this.creatingObject = X(this.areaMesh, this.pointSelector, e), yield this.creatingObject.finished, this.config.defaultAction && this.editor.enable();
    });
  }
}
function X(s, t, e) {
  var U;
  const { promise: c, resolve: d, reject: m } = K(), r = s.parent;
  if (!r) {
    m(new Error("No container"));
    return;
  }
  const f = (U = e == null ? void 0 : e.limit) != null ? U : "none", i = new _(s.style);
  r == null || r.add(i);
  const l = new _(O(g({}, s.style), { dashed: !0, lengthEnable: !1 }));
  r == null || r.add(l), t.enable();
  const o = [];
  let n, h, v = !1, C;
  const y = [], x = () => o.length > 0, M = () => y.length > 0, k = () => {
    x() && (y.push(o.pop()), w(C), t.pointSelectorHelper.magnifier.render());
  }, B = () => {
    M() && (o.push(y.pop()), w(C), t.pointSelectorHelper.magnifier.render());
  }, R = (a) => {
    y.length = 0;
    const b = o.length === 0 ? a.point : n.clone();
    o.push(b), s.setPoints(o, { closed: !1 }), v && (W(), d());
  }, w = (a) => {
    const b = () => {
      i.setPoints([]), l.setPoints([]), s.setPoints(o), t.pointSelectorHelper.magnifier.render();
    };
    if (!a || (C = a, !(o != null && o.length)))
      return b();
    const P = o.at(-1).clone();
    if (o.length < 3 && (f === "none" ? (n = a.point, i.setPoints([P, n]), l.setPoints([])) : f === "xoz" ? (h = h != null ? h : new p.Plane().setFromNormalAndCoplanarPoint(new p.Vector3(0, 1, 0), o[0]), t.plane = h, n = h.projectPoint(a.point, new p.Vector3()), i.setPoints([P, n]), l.setPoints([n, a.point])) : f === "y" && (o.length === 1 ? (n = a.point, i.setPoints([P, n]), l.setPoints([])) : (h = h != null ? h : new p.Plane().setFromCoplanarPoints(o[0], o[1], new p.Vector3(0, 1, 0).add(o[0])), t.plane = h, n = h.projectPoint(a.point, new p.Vector3()), i.setPoints([P, n]), l.setPoints([n, a.point])))), o.length >= 3) {
      n = s.projectPoint(a.point);
      const j = o[0], V = 0.2;
      j.distanceTo(n) < V || j.distanceTo(a.point) < V ? (n = j, a.point.copy(j), t.pointSelectorHelper.updateWithIntersect(a, { emitEvent: !1 }), v = !0) : v = !1, i.setPoints([P, n]), l.setPoints([n, a.point]);
    }
    o.length >= 2 ? (s.setPoints([...o, n], { closed: !1 }), s.line.setPoints(s.points.slice(0, -1)), s.isBlank ? (t.cursorError = !0, i.setStyle({ lineColor: 16734553 }), l.setStyle({ lineColor: 16734553 })) : (t.cursorError = !1, i.setStyle({ lineColor: s.lineColor }), l.setStyle({ lineColor: s.lineColor }))) : s.setPoints([]);
  }, W = () => {
    t.off("select", R), t.off("intersectionUpdate", w), t.off("disable", T), t.plane = null, t.disable(), r == null || r.remove(i, l);
  }, T = () => {
    W(), r == null || r.remove(s, l, i), m(new Error("Cancelled"));
  };
  return t.on("select", R), t.on("intersectionUpdate", w), t.on("disable", T), {
    finished: c,
    canUndo: x,
    canRedo: M,
    undo: k,
    redo: B
  };
}
export {
  ie as Polygon,
  X as createPolygon
};
