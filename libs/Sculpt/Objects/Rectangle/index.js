var q = Object.defineProperty, G = Object.defineProperties;
var J = Object.getOwnPropertyDescriptors;
var W = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty, Q = Object.prototype.propertyIsEnumerable;
var T = (s, e, n) => e in s ? q(s, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : s[e] = n, p = (s, e) => {
  for (var n in e || (e = {}))
    K.call(e, n) && T(s, n, e[n]);
  if (W)
    for (var n of W(e))
      Q.call(e, n) && T(s, n, e[n]);
  return s;
}, P = (s, e) => G(s, J(e));
var N = (s, e, n) => (T(s, typeof e != "symbol" ? e + "" : e, n), n);
var D = (s, e, n) => new Promise((a, f) => {
  var u = (c) => {
    try {
      i(n.next(c));
    } catch (m) {
      f(m);
    }
  }, l = (c) => {
    try {
      i(n.throw(c));
    } catch (m) {
      f(m);
    }
  }, i = (c) => c.done ? a(c.value) : Promise.resolve(c.value).then(u, l);
  i((n = n.apply(s, e)).next());
});
import { BaseObject as X } from "../Base/index.js";
import * as r from "three";
import { PolylineWithDotsMesh as L } from "../../Meshes/Polyline.js";
import { RectangleMeshEditor as Y } from "../../Editors/RectangleMeshEditor.js";
import { RectangleMesh as Z } from "../../Meshes/Rectangle.js";
import { RectangleWithEdgeMesh as B } from "../../Meshes/RectangleWithEdge.js";
import { sortPositionsByCameraPosition as H } from "../../utils/sortPositionsByCameraPosition.js";
import { Sculpt as I } from "../../index.js";
import { vector3ToArray as $ } from "../../../shared-utils/three/vector3ToArray.js";
import { anyPositionToVector3 as j } from "../../../shared-utils/positionToVector3.js";
import { withResolvers as U } from "../../../shared-utils/promise/withResolvers.js";
import { PolygonMesh as S } from "../../Meshes/Polygon.js";
import { getNormal as ee } from "../../../shared-utils/three/getNormal.js";
class ge extends X {
  constructor(n, a) {
    super(n, a);
    N(this, "type", "Rectangle");
    N(this, "rectangleMesh");
    N(this, "_editor");
    n && (this.rectangleMesh = new B(p(p({}, n.style), n)), this.add(this.rectangleMesh));
  }
  get editor() {
    return this._editor || (this._editor = new Y(this.rectangleMesh)), this._editor;
  }
  get data() {
    return P(p({}, this.baseData), {
      points: $(this.applyObjectMatrixWorld(this.rectangleMesh.points, this.rectangleMesh)),
      style: {
        color: this.rectangleMesh.color.getHex(),
        opacity: this.rectangleMesh.opacity,
        lineWidth: this.rectangleMesh.lineWidth,
        lineColor: this.rectangleMesh.lineColor.getHex()
      }
    });
  }
  setData(n) {
    n.points && this.rectangleMesh.setPoints(this.applyObjectReversalMatrixWorld(n.points.map(j), this.rectangleMesh)), this.rectangleMesh.setStyle(n.style), this._editor && this._editor.initialHelperMatrix();
  }
  highlight() {
    var n;
    (n = this.rectangleMesh) == null || n.highlight();
  }
  unhighlight() {
    var n;
    (n = this.rectangleMesh) == null || n.unhighlight();
  }
  create(n) {
    return D(this, null, function* () {
      this.removeChildren();
      const a = new B(n);
      this.rectangleMesh = a, this.add(this.rectangleMesh), yield te(this.rectangleMesh, this.pointSelector, n), this.config.defaultAction && this.editor.enable();
    });
  }
}
function te(s, e, n) {
  var f;
  return ((f = n == null ? void 0 : n.drawMethod) != null ? f : "diagonal") === "diagonal" ? se(s, e, n) : oe(s, e, n);
}
function ne(s, e) {
  const n = [];
  return s.scene.traverse((a) => {
    var f;
    if (a.visible && !((f = e == null ? void 0 : e.excludes) != null && f.includes(a)) && (a instanceof Z || a instanceof S)) {
      const u = a.points.map((l) => {
        const i = new r.Face3(l.x, l.y, l.z, a.normal);
        return a.style.occlusionVisibility && (i.IsAlwaysVisible = !0), i;
      });
      n.push(...u);
    }
  }), n;
}
function se(s, e, n) {
  var C;
  const { promise: a, reject: f, resolve: u } = U(), l = s.parent;
  if (!l)
    return f(new Error("No container"));
  const i = (C = n == null ? void 0 : n.limit) != null ? C : "none", c = new L(P(p({}, s.style), { dashed: !0 })), m = new L(P(p({}, s.style), { dashed: !0, lengthEnable: !1 })), g = new L(P(p({}, s.style), { dashed: !1, lengthEnable: !1 }));
  l.add(c, g, m), e.enable();
  const t = [];
  let d = new r.Vector3(), M = new r.Vector3();
  const h = new r.Plane(), b = () => {
    t.push(d.clone()), t.length === 1 ? (i === "xoz" && h.setFromNormalAndCoplanarPoint(new r.Vector3(0, 1, 0), t[0]), i === "none" && h.setFromNormalAndCoplanarPoint(M, t[0])) : t.length === 2 ? i === "y" || i === "xoz" ? (v(), u()) : g.setPoints([t[0], t[1]]) : t.length === 3 && (v(), u());
  }, x = (o) => {
    var A, R;
    if (!(o != null && o.raycaster))
      return;
    const z = (A = t.at(-1)) == null ? void 0 : A.clone();
    if (t.length === 0) {
      d = o.point.clone(), M = (R = o.face) == null ? void 0 : R.normal;
      return;
    }
    if (t.length === 1 && i === "y") {
      const w = new r.Line3(new r.Vector3(0, 1, 0).add(t[0]), new r.Vector3(0, -1, 0).add(t[0])).closestPointToPoint(o.point, !1, new r.Vector3());
      s.setPoints([t[0], w, o.point]);
      return;
    }
    if (t.length === 1 && i === "xoz") {
      const y = new r.Line3(new r.Vector3(1, 0, 0).add(t[0]), new r.Vector3(-1, 0, 0).add(t[0])), w = o.raycaster.ray.intersectPlane(h, new r.Vector3()), V = y.closestPointToPoint(w, !1, new r.Vector3());
      s.setPoints([t[0], V, w]);
      return;
    }
    if (t.length === 1 && i === "none") {
      h ? (d = o.raycaster.ray.intersectPlane(h, new r.Vector3()), m.setPoints([d, o.point])) : d = o.point.clone(), c.setPoints([z, d]);
      return;
    }
    if (t.length === 2 && i === "none") {
      l.remove(c);
      const y = o.raycaster.ray.intersectPlane(h, new r.Vector3()), w = t[0].distanceTo(t[1]) / 2, V = new r.Vector3().lerpVectors(t[0], t[1], 0.5), _ = new r.Vector3().subVectors(y, V).normalize();
      d = new r.Vector3().addVectors(V, _.multiplyScalar(w));
      const F = [t[0], d, t[1]], O = H(F, I.modules.five.camera.position);
      s.setPoints(O);
      return;
    }
  }, v = () => {
    e.off("select", b), e.off("intersectionUpdate", x), e.off("disable", E), e.disable(), l == null || l.remove(c, g, m);
  }, E = () => {
    v(), l == null || l.remove(s), f(new Error("Cancelled"));
  };
  return e.on("select", b), e.on("intersectionUpdate", x), e.on("disable", E), a;
}
function oe(s, e, n) {
  var C;
  const { promise: a, reject: f, resolve: u } = U(), l = s.parent;
  if (!l)
    return f(new Error("No container"));
  const i = (C = n == null ? void 0 : n.limit) != null ? C : "none", c = new L(P(p({}, s.style), { dashed: !0 })), m = new L(P(p({}, s.style), { dashed: !0, lengthEnable: !1 })), g = new L(P(p({}, s.style), { dashed: !1, lengthEnable: !1 }));
  l.add(c, g, m), e.enable(), e.setAdherePoints(ne(e.five, { excludes: [s] }));
  const t = [];
  let d = new r.Vector3(), M = new r.Vector3();
  const h = new r.Plane(), b = () => {
    if (t.push(d.clone()), t.length === 1)
      e.planeMode = "onlyPlane", i === "y" && (e.adhereLine = [new r.Line3(t[0], new r.Vector3(0, 1, 0).add(t[0]))]), i === "xoz" && (h.setFromNormalAndCoplanarPoint(new r.Vector3(0, 1, 0), t[0]), e.plane = h), i === "none" && (h.setFromNormalAndCoplanarPoint(M, t[0]), e.plane = h);
    else if (t.length === 2) {
      e.planeMode = "vertical", i === "y" && (e.adhereLine = []);
      let o = !1;
      t[0].x === t[1].x && t[0].z === t[1].z && (o = !0), i === "y" && !o && (h.setFromCoplanarPoints(t[0], t[1], new r.Vector3(0, 1, 0).add(t[0])), e.plane = h), g.setPoints([t[0], t[1]]);
    } else
      t.length === 3 && (v(), u());
  }, x = (o) => {
    var A, R, y, w;
    if (!o || !(o != null && o.raycaster))
      return;
    const z = (A = t.at(-1)) == null ? void 0 : A.clone();
    if (t.length === 0) {
      d = o.point.clone(), M = (R = o.face) == null ? void 0 : R.normal;
      return;
    }
    if (t.length === 1) {
      d = o.point, m.setPoints([(y = o.originalPoint) != null ? y : o.point, o.point]), c.setPoints([z, d]);
      return;
    }
    if (t.length === 2) {
      if (!e.plane) {
        const k = ee([t[0], t[1], o.point]);
        h.setFromNormalAndCoplanarPoint(k, t[0]);
      }
      m.setPoints([(w = o.originalPoint) != null ? w : o.point, o.point]);
      const V = new r.Vector3().crossVectors(t[0].clone().sub(t[1]), h.normal).normalize();
      d = new r.Line3(t[1].clone().add(V), t[1].clone().sub(V)).closestPointToPoint(o.point, !1, new r.Vector3());
      const F = [t[0], t[1], d], O = H(F, I.modules.five.camera.position);
      s.setPoints(O);
      return;
    }
  }, v = () => {
    e.setAdherePoints([]), e.adhereLine = [], e.adherePlane = [], e.plane = void 0, e.off("select", b), e.off("intersectionUpdate", x), e.off("disable", E), e.disable(), l == null || l.remove(c, g, m);
  }, E = () => {
    v(), l == null || l.remove(s), f(new Error("Cancelled"));
  };
  return e.on("select", b), e.on("intersectionUpdate", x), e.on("disable", E), a;
}
export {
  ge as Rectangle,
  te as createRectangle
};
