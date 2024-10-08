var U = Object.defineProperty, B = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var _ = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var E = (s, t, e) => t in s ? U(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, d = (s, t) => {
  for (var e in t || (t = {}))
    _.call(t, e) && E(s, e, t[e]);
  if (A)
    for (var e of A(t))
      j.call(t, e) && E(s, e, t[e]);
  return s;
}, u = (s, t) => B(s, I(t));
var L = (s, t, e) => (E(s, typeof t != "symbol" ? t + "" : t, e), e);
var D = (s, t, e) => new Promise((c, p) => {
  var a = (l) => {
    try {
      m(e.next(l));
    } catch (h) {
      p(h);
    }
  }, g = (l) => {
    try {
      m(e.throw(l));
    } catch (h) {
      p(h);
    }
  }, m = (l) => l.done ? c(l.value) : Promise.resolve(l.value).then(a, g);
  m((e = e.apply(s, t)).next());
});
import { BaseObject as k } from "../Base/index.js";
import * as o from "three";
import { PolylineWithDotsMesh as M } from "../../Meshes/Polyline.js";
import { RectangleEditor as q } from "./Editor.js";
import { RectangleWithEdgeMesh as H } from "../../Meshes/RectangleWithEdge.js";
const P = new o.Vector3();
class Z extends k {
  constructor(e, c) {
    super(e, c);
    L(this, "type", "Rectangle");
    L(this, "rectangleMesh");
    this.config.canEdit && (this.editor = new q(this)), e && (this.rectangleMesh = new H(d(d({}, e.style), e)), this.add(this.rectangleMesh));
  }
  get data() {
    return u(d({}, this.baseData), {
      points: this.rectangleMesh.builtPoints.map((e) => e.toArray()),
      style: {
        color: this.rectangleMesh.color.getHex(),
        lineWidth: this.rectangleMesh.lineWidth,
        lineColor: this.rectangleMesh.lineColor.getHex()
      }
    });
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
      const c = new H(e);
      this.rectangleMesh = c, this.add(this.rectangleMesh), yield G(this.rectangleMesh, this.pointSelector, e);
    });
  }
}
function G(s, t, e) {
  return new Promise((c, p) => {
    var N, T;
    const a = s.parent;
    if (!a)
      return p(new Error("No container"));
    const g = (N = e == null ? void 0 : e.limit) != null ? N : "none", m = (T = e == null ? void 0 : e.drawMethod) != null ? T : "diagonal", l = new M(u(d({}, s.style), { dashed: !0, lengthEnable: !0 })), h = new M(u(d({}, s.style), { dashed: !0, lengthEnable: !1 })), y = new M(u(d({}, s.style), { dashed: !1, lengthEnable: !1 }));
    a.add(l, y, h), t.enable();
    const n = [];
    let i = new o.Vector3(), v = new o.Vector3();
    const w = new o.Plane(), x = () => {
      n.push(i.clone()), n.length === 1 ? (g === "xoz" && w.setFromNormalAndCoplanarPoint(new o.Vector3(0, 1, 0), n[0]), g === "none" && w.setFromNormalAndCoplanarPoint(v, n[0])) : n.length === 2 ? g === "y" ? (V(), c()) : y.setPoints([n[0], n[1]]) : n.length === 3 && (V(), c());
    }, C = (r) => {
      var W;
      if (!(r != null && r.raycaster))
        return;
      const O = (W = n.at(-1)) == null ? void 0 : W.clone();
      if (n.length === 0) {
        i = r.point.clone(), v = r.face.normal;
        return;
      }
      if (n.length === 1 && g === "y") {
        const f = new o.Line3(new o.Vector3(0, 1, 0).add(n[0]), new o.Vector3(0, -1, 0).add(n[0])).closestPointToPoint(r.point, !1, new o.Vector3());
        s.setPoints([n[0], f, r.point]);
        return;
      }
      if (n.length === 1) {
        w ? (i = r.raycaster.ray.intersectPlane(w, P), h.setPoints([i, r.point])) : i = r.point.clone(), l.setPoints([O, i]);
        return;
      }
      if (n.length === 2) {
        a.remove(l);
        const z = r.raycaster.ray.intersectPlane(w, P);
        if (m === "diagonal") {
          const f = n[0].distanceTo(n[1]) / 2, b = new o.Vector3().lerpVectors(n[0], n[1], 0.5), F = new o.Vector3().subVectors(z, b).normalize();
          i = new o.Vector3().addVectors(b, F.multiplyScalar(f)), s.setPoints([n[0], i, n[1]]);
        } else if (m === "vertex") {
          const f = P.crossVectors(n[0].clone().sub(n[1]), w.normal).normalize();
          i = new o.Line3(n[1].clone().add(f), n[1].clone().sub(f)).closestPointToPoint(r.point, !1, P), s.setPoints([n[0], n[1], i]);
        }
        return;
      }
    }, V = () => {
      t.off("select", x), t.off("intersectionUpdate", C), t.off("disable", R), t.disable(), a == null || a.remove(l, y, h);
    }, R = () => {
      V(), a == null || a.remove(s), p(new Error("Cancelled"));
    };
    t.on("select", x), t.on("intersectionUpdate", C), t.on("disable", R);
  });
}
export {
  Z as Rectangle,
  G as createRectangle
};
