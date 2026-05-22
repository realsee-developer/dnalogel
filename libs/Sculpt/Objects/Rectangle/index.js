var q = Object.defineProperty, G = Object.defineProperties;
var J = Object.getOwnPropertyDescriptors;
var W = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty, Q = Object.prototype.propertyIsEnumerable;
var T = (s, t, e) => t in s ? q(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, f = (s, t) => {
  for (var e in t || (t = {}))
    K.call(t, e) && T(s, e, t[e]);
  if (W)
    for (var e of W(t))
      Q.call(t, e) && T(s, e, t[e]);
  return s;
}, u = (s, t) => G(s, J(t));
var z = (s, t, e) => (T(s, typeof t != "symbol" ? t + "" : t, e), e);
var D = (s, t, e) => new Promise((i, m) => {
  var w = (d) => {
    try {
      a(e.next(d));
    } catch (P) {
      m(P);
    }
  }, l = (d) => {
    try {
      a(e.throw(d));
    } catch (P) {
      m(P);
    }
  }, a = (d) => d.done ? i(d.value) : Promise.resolve(d.value).then(w, l);
  a((e = e.apply(s, t)).next());
});
import { BaseObject as X } from "../Base/index.js";
import * as r from "three";
import { PolylineWithDotsMesh as M } from "../../Meshes/Polyline.js";
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
class ye extends X {
  constructor(e, i) {
    super(e, i);
    z(this, "type", "Rectangle");
    z(this, "rectangleMesh");
    z(this, "_editor");
    e && (this.rectangleMesh = new B(f(f({}, e.style), e)), this.add(this.rectangleMesh));
  }
  get editor() {
    return this._editor || (this._editor = new Y(this.rectangleMesh)), this._editor;
  }
  get data() {
    return u(f({}, this.baseData), {
      points: $(this.applyObjectMatrixWorld(this.rectangleMesh.points, this.rectangleMesh)),
      style: {
        color: this.rectangleMesh.color.getHex(),
        opacity: this.rectangleMesh.opacity,
        lineWidth: this.rectangleMesh.lineWidth,
        lineColor: this.rectangleMesh.lineColor.getHex()
      }
    });
  }
  setData(e) {
    e.points && this.rectangleMesh.setPoints(this.applyObjectReversalMatrixWorld(e.points.map(j), this.rectangleMesh)), this.rectangleMesh.setStyle(e.style), this._editor && this._editor.initialHelperMatrix();
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
    return D(this, null, function* () {
      this.removeChildren();
      const i = new B(e);
      this.rectangleMesh = i, this.add(this.rectangleMesh), yield te(this.rectangleMesh, this.pointSelector, e), this.config.defaultAction && this.editor.enable();
    });
  }
}
function te(s, t, e) {
  var m;
  return ((m = e == null ? void 0 : e.drawMethod) != null ? m : "diagonal") === "diagonal" ? se(s, t, e) : oe(s, t, e);
}
function ne(s, t) {
  const e = [];
  return s.scene.traverse((i) => {
    var m;
    if (i.visible && !((m = t == null ? void 0 : t.excludes) != null && m.includes(i)) && (i instanceof Z || i instanceof S)) {
      const w = i.points.map((l) => {
        const a = new r.Face3(l.x, l.y, l.z, i.normal);
        return i.style.occlusionVisibility && (a.IsAlwaysVisible = !0), a;
      });
      e.push(...w);
    }
  }), e;
}
function se(s, t, e) {
  var A;
  const { promise: i, reject: m, resolve: w } = U(), l = s.parent;
  if (!l)
    return m(new Error("No container"));
  const a = (A = e == null ? void 0 : e.limit) != null ? A : "none", d = new M(u(f({}, s.style), { dashed: !0 })), P = new M(u(f({}, s.style), { dashed: !0, lengthEnable: !1 })), y = new M(u(f({}, s.style), { dashed: !1, lengthEnable: !1 }));
  l.add(d, y, P), t.enable();
  const n = [];
  let h = new r.Vector3(), b = new r.Vector3();
  const c = new r.Plane(), x = () => {
    var o;
    n.push(h.clone()), (o = e == null ? void 0 : e.onPointPlaced) == null || o.call(e), n.length === 1 ? (a === "xoz" && c.setFromNormalAndCoplanarPoint(new r.Vector3(0, 1, 0), n[0]), a === "none" && c.setFromNormalAndCoplanarPoint(b, n[0])) : n.length === 2 ? a === "y" || a === "xoz" ? (v(), w()) : y.setPoints([n[0], n[1]]) : n.length === 3 && (v(), w());
  }, E = (o) => {
    var R, N;
    if (!(o != null && o.raycaster))
      return;
    const L = (R = n.at(-1)) == null ? void 0 : R.clone();
    if (n.length === 0) {
      h = o.point.clone(), b = (N = o.face) == null ? void 0 : N.normal;
      return;
    }
    if (n.length === 1 && a === "y") {
      const p = new r.Line3(new r.Vector3(0, 1, 0).add(n[0]), new r.Vector3(0, -1, 0).add(n[0])).closestPointToPoint(o.point, !1, new r.Vector3());
      s.setPoints([n[0], p, o.point]);
      return;
    }
    if (n.length === 1 && a === "xoz") {
      const V = new r.Line3(new r.Vector3(1, 0, 0).add(n[0]), new r.Vector3(-1, 0, 0).add(n[0])), p = o.raycaster.ray.intersectPlane(c, new r.Vector3()), g = V.closestPointToPoint(p, !1, new r.Vector3());
      s.setPoints([n[0], g, p]);
      return;
    }
    if (n.length === 1 && a === "none") {
      c ? (h = o.raycaster.ray.intersectPlane(c, new r.Vector3()), P.setPoints([h, o.point])) : h = o.point.clone(), d.setPoints([L, h]);
      return;
    }
    if (n.length === 2 && a === "none") {
      l.remove(d);
      const V = o.raycaster.ray.intersectPlane(c, new r.Vector3()), p = n[0].distanceTo(n[1]) / 2, g = new r.Vector3().lerpVectors(n[0], n[1], 0.5), _ = new r.Vector3().subVectors(V, g).normalize();
      h = new r.Vector3().addVectors(g, _.multiplyScalar(p));
      const F = [n[0], h, n[1]], O = H(F, I.modules.five.camera.position);
      s.setPoints(O);
      return;
    }
  }, v = () => {
    t.off("select", x), t.off("intersectionUpdate", E), t.off("disable", C), t.disable(), l == null || l.remove(d, y, P);
  }, C = () => {
    v(), l == null || l.remove(s), m(new Error("Cancelled"));
  };
  return t.on("select", x), t.on("intersectionUpdate", E), t.on("disable", C), i;
}
function oe(s, t, e) {
  var A;
  const { promise: i, reject: m, resolve: w } = U(), l = s.parent;
  if (!l)
    return m(new Error("No container"));
  const a = (A = e == null ? void 0 : e.limit) != null ? A : "none", d = new M(u(f({}, s.style), { dashed: !0 })), P = new M(u(f({}, s.style), { dashed: !0, lengthEnable: !1 })), y = new M(u(f({}, s.style), { dashed: !1, lengthEnable: !1 }));
  l.add(d, y, P), t.enable(), t.setAdherePoints(ne(t.five, { excludes: [s] }));
  const n = [];
  let h = new r.Vector3(), b = new r.Vector3();
  const c = new r.Plane(), x = () => {
    var o;
    if (n.push(h.clone()), (o = e == null ? void 0 : e.onPointPlaced) == null || o.call(e), n.length === 1)
      t.planeMode = "onlyPlane", a === "y" && (t.adhereLine = [new r.Line3(n[0], new r.Vector3(0, 1, 0).add(n[0]))]), a === "xoz" && (c.setFromNormalAndCoplanarPoint(new r.Vector3(0, 1, 0), n[0]), t.plane = c), a === "none" && (c.setFromNormalAndCoplanarPoint(b, n[0]), t.plane = c);
    else if (n.length === 2) {
      t.planeMode = "vertical", a === "y" && (t.adhereLine = []);
      let L = !1;
      n[0].x === n[1].x && n[0].z === n[1].z && (L = !0), a === "y" && !L && (c.setFromCoplanarPoints(n[0], n[1], new r.Vector3(0, 1, 0).add(n[0])), t.plane = c), y.setPoints([n[0], n[1]]);
    } else
      n.length === 3 && (v(), w());
  }, E = (o) => {
    var R, N, V, p;
    if (!o || !(o != null && o.raycaster))
      return;
    const L = (R = n.at(-1)) == null ? void 0 : R.clone();
    if (n.length === 0) {
      h = o.point.clone(), b = (N = o.face) == null ? void 0 : N.normal;
      return;
    }
    if (n.length === 1) {
      h = o.point, P.setPoints([(V = o.originalPoint) != null ? V : o.point, o.point]), d.setPoints([L, h]);
      return;
    }
    if (n.length === 2) {
      if (!t.plane) {
        const k = ee([n[0], n[1], o.point]);
        c.setFromNormalAndCoplanarPoint(k, n[0]);
      }
      P.setPoints([(p = o.originalPoint) != null ? p : o.point, o.point]);
      const g = new r.Vector3().crossVectors(n[0].clone().sub(n[1]), c.normal).normalize();
      h = new r.Line3(n[1].clone().add(g), n[1].clone().sub(g)).closestPointToPoint(o.point, !1, new r.Vector3());
      const F = [n[0], n[1], h], O = H(F, I.modules.five.camera.position);
      s.setPoints(O);
      return;
    }
  }, v = () => {
    t.setAdherePoints([]), t.adhereLine = [], t.adherePlane = [], t.plane = void 0, t.off("select", x), t.off("intersectionUpdate", E), t.off("disable", C), t.disable(), l == null || l.remove(d, y, P);
  }, C = () => {
    v(), l == null || l.remove(s), m(new Error("Cancelled"));
  };
  return t.on("select", x), t.on("intersectionUpdate", E), t.on("disable", C), i;
}
export {
  ye as Rectangle,
  te as createRectangle
};
