var F = Object.defineProperty, U = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var z = Object.getOwnPropertySymbols;
var I = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var b = (s, t, e) => t in s ? F(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, d = (s, t) => {
  for (var e in t || (t = {}))
    I.call(t, e) && b(s, e, t[e]);
  if (z)
    for (var e of z(t))
      j.call(t, e) && b(s, e, t[e]);
  return s;
}, u = (s, t) => U(s, B(t));
var E = (s, t, e) => (b(s, typeof t != "symbol" ? t + "" : t, e), e);
var A = (s, t, e) => new Promise((c, p) => {
  var a = (l) => {
    try {
      g(e.next(l));
    } catch (h) {
      p(h);
    }
  }, w = (l) => {
    try {
      g(e.throw(l));
    } catch (h) {
      p(h);
    }
  }, g = (l) => l.done ? c(l.value) : Promise.resolve(l.value).then(a, w);
  g((e = e.apply(s, t)).next());
});
import { BaseObject as k } from "../Base/index.js";
import * as o from "three";
import { PolylineWithDotsMesh as L } from "../../Meshes/Polyline.js";
import { RectangleEditor as q } from "./Editor.js";
import { RectangleWithEdgeMesh as D } from "../../Meshes/RectangleWithEdge.js";
class Z extends k {
  constructor(e, c) {
    super(e, c);
    E(this, "type", "Rectangle");
    E(this, "rectangleMesh");
    this.config.canEdit && (this.editor = new q(this)), e && (this.rectangleMesh = new D(d(d({}, e.style), e)), this.add(this.rectangleMesh));
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
    return A(this, null, function* () {
      this.removeChildren();
      const c = new D(e);
      this.rectangleMesh = c, this.add(this.rectangleMesh), yield G(this.rectangleMesh, this.pointSelector, e);
    });
  }
}
function G(s, t, e) {
  return new Promise((c, p) => {
    var R, N;
    const a = s.parent;
    if (!a)
      return p(new Error("No container"));
    const w = (R = e == null ? void 0 : e.limit) != null ? R : "none", g = (N = e == null ? void 0 : e.drawMethod) != null ? N : "diagonal", l = new L(u(d({}, s.style), { dashed: !0, lengthEnable: !0 })), h = new L(u(d({}, s.style), { dashed: !0, lengthEnable: !1 })), P = new L(u(d({}, s.style), { dashed: !1, lengthEnable: !1 }));
    a.add(l, P, h), t.enable();
    const n = [];
    let i = new o.Vector3(), M = new o.Vector3();
    const m = new o.Plane(), v = () => {
      n.push(i.clone()), n.length === 1 ? (w === "xoz" && m.setFromNormalAndCoplanarPoint(new o.Vector3(0, 1, 0), n[0]), w === "none" && m.setFromNormalAndCoplanarPoint(M, n[0])) : n.length === 2 ? w === "y" ? (y(), c()) : P.setPoints([n[0], n[1]]) : n.length === 3 && (y(), c());
    }, x = (r) => {
      var T;
      if (!(r != null && r.raycaster))
        return;
      const H = (T = n.at(-1)) == null ? void 0 : T.clone();
      if (n.length === 0) {
        i = r.point.clone(), M = r.face.normal;
        return;
      }
      if (n.length === 1 && w === "y") {
        const f = new o.Line3(new o.Vector3(0, 1, 0).add(n[0]), new o.Vector3(0, -1, 0).add(n[0])).closestPointToPoint(r.point, !1, new o.Vector3());
        s.setPoints([n[0], f, r.point]);
        return;
      }
      if (n.length === 1) {
        m ? (i = r.raycaster.ray.intersectPlane(m, new o.Vector3()), h.setPoints([i, r.point])) : i = r.point.clone(), l.setPoints([H, i]);
        return;
      }
      if (n.length === 2) {
        a.remove(l);
        const W = r.raycaster.ray.intersectPlane(m, new o.Vector3());
        if (g === "diagonal") {
          const f = n[0].distanceTo(n[1]) / 2, V = new o.Vector3().lerpVectors(n[0], n[1], 0.5), O = new o.Vector3().subVectors(W, V).normalize();
          i = new o.Vector3().addVectors(V, O.multiplyScalar(f)), s.setPoints([n[0], i, n[1]]);
        } else if (g === "vertex") {
          const f = new o.Vector3().crossVectors(n[0].clone().sub(n[1]), m.normal).normalize();
          i = new o.Line3(n[1].clone().add(f), n[1].clone().sub(f)).closestPointToPoint(r.point, !1, new o.Vector3()), s.setPoints([n[0], n[1], i]);
        }
        return;
      }
    }, y = () => {
      t.off("select", v), t.off("intersectionUpdate", x), t.off("disable", C), t.disable(), a == null || a.remove(l, P, h);
    }, C = () => {
      y(), a == null || a.remove(s), p(new Error("Cancelled"));
    };
    t.on("select", v), t.on("intersectionUpdate", x), t.on("disable", C);
  });
}
export {
  Z as Rectangle,
  G as createRectangle
};
