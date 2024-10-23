var C = Object.defineProperty, x = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var m = (t, r, e) => r in t ? C(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, d = (t, r) => {
  for (var e in r || (r = {}))
    T.call(r, e) && m(t, e, r[e]);
  if (M)
    for (var e of M(r))
      j.call(r, e) && m(t, e, r[e]);
  return t;
}, g = (t, r) => x(t, O(r));
var f = (t, r, e) => (m(t, typeof r != "symbol" ? r + "" : r, e), e);
var w = (t, r, e) => new Promise((c, i) => {
  var a = (n) => {
    try {
      o(e.next(n));
    } catch (h) {
      i(h);
    }
  }, s = (n) => {
    try {
      o(e.throw(n));
    } catch (h) {
      i(h);
    }
  }, o = (n) => n.done ? c(n.value) : Promise.resolve(n.value).then(a, s);
  o((e = e.apply(t, r)).next());
});
import { BaseObject as A } from "../Base/index.js";
import * as y from "three";
import { PolylineMesh as H } from "../../Meshes/Polyline.js";
import { CircleEditor as N } from "./Editor.js";
import { CircleWithEdgeMesh as b } from "../../Meshes/CircleWithEdge.js";
import { vector3ToArray as E } from "../../../shared-utils/three/vector3ToArray.js";
class R extends A {
  constructor(e, c) {
    super(e, c);
    f(this, "type", "Circle");
    f(this, "circleMesh");
    this.editor = new N(this), e && (this.circleMesh = new b(d(d({}, e.style), e)), this.add(this.circleMesh));
  }
  get data() {
    return g(d({}, this.baseData), {
      center: E(this.applyObjectMatrixWorld(this.circleMesh.center)),
      normal: E(this.applyObjectQuaternion(this.circleMesh.normal)),
      radius: this.circleMesh.radius,
      style: {
        color: this.circleMesh.color.getHex()
      }
    });
  }
  highlight() {
    var e;
    (e = this.circleMesh) == null || e.highlight();
  }
  unhighlight() {
    var e;
    (e = this.circleMesh) == null || e.unhighlight();
  }
  create(e) {
    return w(this, null, function* () {
      this.children.forEach((i) => {
        i.parent === this && this.remove(i);
      }), this.children.length = 0;
      const c = new b(e);
      this.circleMesh = c, this.add(this.circleMesh), yield U(this.circleMesh, this.pointSelector), this.editor.enable();
    });
  }
}
function U(t, r) {
  return new Promise((e, c) => {
    const i = t.parent;
    if (!i) {
      c(new Error("No container"));
      return;
    }
    const a = new H({ dashed: !0 });
    i.add(a), r.enable();
    let s, o;
    const n = (l) => {
      if (l) {
        if (!s) {
          s = {
            point: l.point,
            normal: l.face.normal
          };
          return;
        }
        s && o && (p(), e());
      }
    }, h = (l) => {
      if (!l || !s)
        return;
      const P = new y.Plane().setFromNormalAndCoplanarPoint(s.normal, s.point);
      if (o = l.raycaster.ray.intersectPlane(P, new y.Vector3()), o) {
        const v = s.point.distanceTo(o);
        t.setPoints({ center: s.point, normal: s.normal, radius: v });
      }
    }, p = () => {
      r.off("select", n), r.off("intersectionUpdate", h), r.off("disable", u), r.disable(), i == null || i.remove(a);
    }, u = () => {
      p(), i == null || i.remove(t, a), c(new Error("Cancelled"));
    };
    r.on("select", n), r.on("intersectionUpdate", h), r.on("disable", u);
  });
}
export {
  R as Circle,
  U as createCircle
};
