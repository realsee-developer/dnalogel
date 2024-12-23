var I = Object.defineProperty, k = Object.defineProperties;
var q = Object.getOwnPropertyDescriptors;
var W = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty, J = Object.prototype.propertyIsEnumerable;
var A = (o, n, e) => n in o ? I(o, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[n] = e, p = (o, n) => {
  for (var e in n || (n = {}))
    G.call(n, e) && A(o, e, n[e]);
  if (W)
    for (var e of W(n))
      J.call(n, e) && A(o, e, n[e]);
  return o;
}, w = (o, n) => k(o, q(n));
var O = (o, n, e) => (A(o, typeof n != "symbol" ? n + "" : n, e), e);
var _ = (o, n, e) => new Promise((m, f) => {
  var y = (c) => {
    try {
      i(e.next(c));
    } catch (h) {
      f(h);
    }
  }, l = (c) => {
    try {
      i(e.throw(c));
    } catch (h) {
      f(h);
    }
  }, i = (c) => c.done ? m(c.value) : Promise.resolve(c.value).then(y, l);
  i((e = e.apply(o, n)).next());
});
import { BaseObject as K } from "../Base/index.js";
import * as s from "three";
import { PolylineWithDotsMesh as b } from "../../Meshes/Polyline.js";
import { RectangleMeshEditor as Q } from "../../Editors/RectangleMeshEditor.js";
import { RectangleWithEdgeMesh as j } from "../../Meshes/RectangleWithEdge.js";
import { sortPositionsByCameraPosition as D } from "../../utils/sortPositionsByCameraPosition.js";
import { Sculpt as F } from "../../index.js";
import { vector3ToArray as X } from "../../../shared-utils/three/vector3ToArray.js";
import { anyPositionToVector3 as Y } from "../../../shared-utils/positionToVector3.js";
import { withResolvers as B } from "../../../shared-utils/promise/withResolvers.js";
class he extends K {
  constructor(e, m) {
    super(e, m);
    O(this, "type", "Rectangle");
    O(this, "rectangleMesh");
    O(this, "_editor");
    e && (this.rectangleMesh = new j(p(p({}, e.style), e)), this.add(this.rectangleMesh));
  }
  get editor() {
    return this._editor || (this._editor = new Q(this.rectangleMesh)), this._editor;
  }
  get data() {
    return w(p({}, this.baseData), {
      points: X(this.applyObjectMatrixWorld(this.rectangleMesh.points, this.rectangleMesh)),
      style: {
        color: this.rectangleMesh.color.getHex(),
        opacity: this.rectangleMesh.opacity,
        lineWidth: this.rectangleMesh.lineWidth,
        lineColor: this.rectangleMesh.lineColor.getHex()
      }
    });
  }
  setData(e) {
    e.points && this.rectangleMesh.setPoints(this.applyObjectReversalMatrixWorld(e.points.map(Y), this.rectangleMesh)), this.rectangleMesh.setStyle(e.style), this._editor && this._editor.initialHelperMatrix();
  }
  highlight() {
    var e;
    (e = this.rectangleMesh) == null || e.highlight();
  }
  unhighlight() {
    var e;
    (e = this.rectangleMesh) == null || e.unhighlight();
  }
  create(e) {
    return _(this, null, function* () {
      this.removeChildren();
      const m = new j(e);
      this.rectangleMesh = m, this.add(this.rectangleMesh), yield Z(this.rectangleMesh, this.pointSelector, e), this.config.defaultAction && this.editor.enable();
    });
  }
}
function Z(o, n, e) {
  var f;
  return ((f = e == null ? void 0 : e.drawMethod) != null ? f : "diagonal") === "diagonal" ? $(o, n, e) : S(o, n, e);
}
function $(o, n, e) {
  var C;
  const { promise: m, reject: f, resolve: y } = B(), l = o.parent;
  if (!l)
    return f(new Error("No container"));
  const i = (C = e == null ? void 0 : e.limit) != null ? C : "none", c = new b(w(p({}, o.style), { dashed: !0 })), h = new b(w(p({}, o.style), { dashed: !0, lengthEnable: !1 })), P = new b(w(p({}, o.style), { dashed: !1, lengthEnable: !1 }));
  l.add(c, P, h), n.enable();
  const t = [];
  let a = new s.Vector3(), L = new s.Vector3();
  const d = new s.Plane(), M = () => {
    t.push(a.clone()), t.length === 1 ? (i === "xoz" && d.setFromNormalAndCoplanarPoint(new s.Vector3(0, 1, 0), t[0]), i === "none" && d.setFromNormalAndCoplanarPoint(L, t[0])) : t.length === 2 ? i === "y" || i === "xoz" ? (V(), y()) : P.setPoints([t[0], t[1]]) : t.length === 3 && (V(), y());
  }, E = (r) => {
    var N, z;
    if (!(r != null && r.raycaster))
      return;
    const R = (N = t.at(-1)) == null ? void 0 : N.clone();
    if (t.length === 0) {
      a = r.point.clone(), L = (z = r.face) == null ? void 0 : z.normal;
      return;
    }
    if (t.length === 1 && i === "y") {
      const u = new s.Line3(new s.Vector3(0, 1, 0).add(t[0]), new s.Vector3(0, -1, 0).add(t[0])).closestPointToPoint(r.point, !1, new s.Vector3());
      o.setPoints([t[0], u, r.point]);
      return;
    }
    if (t.length === 1 && i === "xoz") {
      const g = new s.Line3(new s.Vector3(1, 0, 0).add(t[0]), new s.Vector3(-1, 0, 0).add(t[0])), u = r.raycaster.ray.intersectPlane(d, new s.Vector3()), v = g.closestPointToPoint(u, !1, new s.Vector3());
      o.setPoints([t[0], v, u]);
      return;
    }
    if (t.length === 1 && i === "none") {
      d ? (a = r.raycaster.ray.intersectPlane(d, new s.Vector3()), h.setPoints([a, r.point])) : a = r.point.clone(), c.setPoints([R, a]);
      return;
    }
    if (t.length === 2 && i === "none") {
      l.remove(c);
      const g = r.raycaster.ray.intersectPlane(d, new s.Vector3()), u = t[0].distanceTo(t[1]) / 2, v = new s.Vector3().lerpVectors(t[0], t[1], 0.5), T = new s.Vector3().subVectors(g, v).normalize();
      a = new s.Vector3().addVectors(v, T.multiplyScalar(u));
      const H = [t[0], a, t[1]], U = D(H, F.modules.five.camera.position);
      o.setPoints(U);
      return;
    }
  }, V = () => {
    n.off("select", M), n.off("intersectionUpdate", E), n.off("disable", x), n.disable(), l == null || l.remove(c, P, h);
  }, x = () => {
    V(), l == null || l.remove(o), f(new Error("Cancelled"));
  };
  return n.on("select", M), n.on("intersectionUpdate", E), n.on("disable", x), m;
}
function S(o, n, e) {
  var C;
  const { promise: m, reject: f, resolve: y } = B(), l = o.parent;
  if (!l)
    return f(new Error("No container"));
  const i = (C = e == null ? void 0 : e.limit) != null ? C : "none", c = new b(w(p({}, o.style), { dashed: !0 })), h = new b(w(p({}, o.style), { dashed: !0, lengthEnable: !1 })), P = new b(w(p({}, o.style), { dashed: !1, lengthEnable: !1 }));
  l.add(c, P, h), n.enable();
  const t = [];
  let a = new s.Vector3(), L = new s.Vector3();
  const d = new s.Plane(), M = () => {
    t.push(a.clone()), t.length === 1 ? (i === "xoz" && d.setFromNormalAndCoplanarPoint(new s.Vector3(0, 1, 0), t[0]), i === "none" && d.setFromNormalAndCoplanarPoint(L, t[0])) : t.length === 2 ? (i === "y" && d.setFromCoplanarPoints(t[0], t[1], new s.Vector3(0, 1, 0).add(t[0])), P.setPoints([t[0], t[1]])) : t.length === 3 && (V(), y());
  }, E = (r) => {
    var N, z;
    if (!(r != null && r.raycaster))
      return;
    const R = (N = t.at(-1)) == null ? void 0 : N.clone();
    if (t.length === 0) {
      a = r.point.clone(), L = (z = r.face) == null ? void 0 : z.normal;
      return;
    }
    if (t.length === 1 && i === "y") {
      a = r.point, h.setPoints([]), c.setPoints([R, a]);
      return;
    }
    if (t.length === 1 && i === "xoz") {
      a = r.raycaster.ray.intersectPlane(d, new s.Vector3()), h.setPoints([a, r.point]), c.setPoints([R, a]);
      return;
    }
    if (t.length === 1 && i === "none") {
      a = r.raycaster.ray.intersectPlane(d, new s.Vector3()), h.setPoints([a, r.point]), c.setPoints([R, a]);
      return;
    }
    if (t.length === 2) {
      l.remove(c);
      const g = new s.Vector3().crossVectors(t[0].clone().sub(t[1]), d.normal).normalize();
      a = new s.Line3(t[1].clone().add(g), t[1].clone().sub(g)).closestPointToPoint(r.point, !1, new s.Vector3());
      const v = [t[0], t[1], a], T = D(v, F.modules.five.camera.position);
      o.setPoints(T);
      return;
    }
  }, V = () => {
    n.off("select", M), n.off("intersectionUpdate", E), n.off("disable", x), n.disable(), l == null || l.remove(c, P, h);
  }, x = () => {
    V(), l == null || l.remove(o), f(new Error("Cancelled"));
  };
  return n.on("select", M), n.on("intersectionUpdate", E), n.on("disable", x), m;
}
export {
  he as Rectangle,
  Z as createRectangle
};
