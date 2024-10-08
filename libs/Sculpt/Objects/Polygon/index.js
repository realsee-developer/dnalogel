var L = Object.defineProperty, N = Object.defineProperties;
var z = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty, q = Object.prototype.propertyIsEnumerable;
var O = (s, t, e) => t in s ? L(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, p = (s, t) => {
  for (var e in t || (t = {}))
    _.call(t, e) && O(s, e, t[e]);
  if (A)
    for (var e of A(t))
      q.call(t, e) && O(s, e, t[e]);
  return s;
}, j = (s, t) => N(s, z(t));
var v = (s, t, e) => (O(s, typeof t != "symbol" ? t + "" : t, e), e);
var V = (s, t, e) => new Promise((c, d) => {
  var u = (n) => {
    try {
      f(e.next(n));
    } catch (l) {
      d(l);
    }
  }, r = (n) => {
    try {
      f(e.throw(n));
    } catch (l) {
      d(l);
    }
  }, f = (n) => n.done ? c(n.value) : Promise.resolve(n.value).then(u, r);
  f((e = e.apply(s, t)).next());
});
import { BaseObject as G } from "../Base/index.js";
import * as g from "three";
import { PolylineMesh as k } from "../../Meshes/Polyline.js";
import { AreaMesh as B } from "../../Meshes/Area.js";
import { PolygonEditor as J } from "./Editor.js";
import { vector3ToArray as K } from "../../../shared-utils/three/vector3ToArray.js";
import { withResolvers as Q } from "../../../shared-utils/promise/withResolvers.js";
const D = new g.Vector3();
class oe extends G {
  constructor(e, c) {
    super(e, c);
    v(this, "type", "Polygon");
    v(this, "areaMesh");
    v(this, "creatingObject");
    this.editor = new J(this), e && (this.areaMesh = new B(p(p({}, e.style), e)), this.add(this.areaMesh));
  }
  get data() {
    return this.updateMatrixWorld(), j(p({}, this.baseData), {
      points: K(this.applyObjectMatrixWorld(this.areaMesh.points)),
      style: {
        color: this.areaMesh.color.getHex(),
        lineColor: this.areaMesh.lineColor.getHex(),
        lineWidth: this.areaMesh.lineWidth
      }
    });
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
    return V(this, null, function* () {
      this.children.forEach((d) => {
        d.parent === this && this.remove(d);
      }), this.children.length = 0;
      const c = new B(e);
      this.areaMesh = c, this.add(this.areaMesh), this.creatingObject = X(this.areaMesh, this.pointSelector, e), yield this.creatingObject.finished, this.editor.enable();
    });
  }
}
function X(s, t, e) {
  var M;
  const { promise: c, resolve: d, reject: u } = Q(), r = s.parent;
  if (!r) {
    u(new Error("No container"));
    return;
  }
  const f = (M = e == null ? void 0 : e.limit) != null ? M : "none", n = new k(j(p({}, s.style), { opacity: 1 }));
  r == null || r.add(n);
  const l = new k(j(p({}, s.style), { dashed: !0, lengthEnable: !1 }));
  r == null || r.add(l), t.enable();
  const o = [];
  let i, h, C = !1, E;
  const m = [], x = () => o.length > 0, R = () => m.length > 0, F = () => {
    x() && (m.push(o.pop()), y(E), t.pointSelectorHelper.magnifier.render());
  }, I = () => {
    R() && (o.push(m.pop()), y(E), t.pointSelectorHelper.magnifier.render());
  }, U = (a) => {
    m.length = 0;
    const w = o.length === 0 ? a.point : i.clone();
    o.push(w), s.setPoints(o, { closed: !1 }), C && (W(), d());
  }, y = (a) => {
    const w = () => {
      n.setPoints([]), l.setPoints([]), s.setPoints(o), t.pointSelectorHelper.magnifier.render();
    };
    if (!a || (E = a, !(o != null && o.length)))
      return w();
    const P = o.at(-1).clone();
    if (o.length < 3 && (f === "none" ? (i = a.point, n.setPoints([P, i]), l.setPoints([])) : f === "xoz" ? (h = h != null ? h : new g.Plane().setFromNormalAndCoplanarPoint(new g.Vector3(0, 1, 0), o[0]), t.plane = h, i = h.projectPoint(a.point, D), n.setPoints([P, i]), l.setPoints([i, a.point])) : f === "y" && (o.length === 1 ? (i = a.point, n.setPoints([P, i]), l.setPoints([])) : (h = h != null ? h : new g.Plane().setFromCoplanarPoints(o[0], o[1], new g.Vector3(0, 1, 0).add(o[0])), t.plane = h, i = h.projectPoint(a.point, D), n.setPoints([P, i]), l.setPoints([i, a.point])))), o.length >= 3) {
      i = s.projectPoint(a.point);
      const b = o[0], T = 0.2;
      b.distanceTo(i) < T || b.distanceTo(a.point) < T ? (i = b, a.point.copy(b), t.pointSelectorHelper.updateWithIntersect(a, { emitEvent: !1 }), C = !0) : C = !1, n.setPoints([P, i]), l.setPoints([i, a.point]);
    }
    o.length >= 2 ? (s.setPoints([...o, i], { closed: !1 }), s.line.setPoints(s.points.slice(0, -1)), s.isBlank ? (t.cursorError = !0, n.setStyle({ lineColor: 16734553 }), l.setStyle({ lineColor: 16734553 })) : (t.cursorError = !1, n.setStyle({ lineColor: s.lineColor }), l.setStyle({ lineColor: s.lineColor }))) : s.setPoints([]);
  }, W = () => {
    t.off("select", U), t.off("intersectionUpdate", y), t.off("disable", H), t.plane = null, t.disable(), r == null || r.remove(n, l);
  }, H = () => {
    W(), r == null || r.remove(s, l, n), u(new Error("Cancelled"));
  };
  return t.on("select", U), t.on("intersectionUpdate", y), t.on("disable", H), {
    finished: c,
    canUndo: x,
    canRedo: R,
    undo: F,
    redo: I
  };
}
export {
  oe as Polygon,
  X as createPolygon
};
