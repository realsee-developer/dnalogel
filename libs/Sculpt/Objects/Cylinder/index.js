var L = Object.defineProperty, j = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable;
var p = (n, t, e) => t in n ? L(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, d = (n, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && p(n, e, t[e]);
  if (g)
    for (var e of g(t))
      U.call(t, e) && p(n, e, t[e]);
  return n;
}, M = (n, t) => j(n, T(t));
var y = (n, t, e) => (p(n, typeof t != "symbol" ? t + "" : t, e), e);
var b = (n, t, e) => new Promise((r, s) => {
  var c = (o) => {
    try {
      i(e.next(o));
    } catch (a) {
      s(a);
    }
  }, h = (o) => {
    try {
      i(e.throw(o));
    } catch (a) {
      s(a);
    }
  }, i = (o) => o.done ? r(o.value) : Promise.resolve(o.value).then(c, h);
  i((e = e.apply(n, t)).next());
});
import { CylinderMesh as O } from "../../Meshes/Cylinder.js";
import { LineMesh as W } from "../../Meshes/Line.js";
import { rayOnLine as z } from "../../utils/three/rayOnLine.js";
import { BaseObject as B } from "../Base/index.js";
import { createCircle as D } from "../Circle/index.js";
import * as f from "three";
import { CylinderEditor as F } from "./Editor.js";
import { vector3ToArray as v } from "../../../shared-utils/three/vector3ToArray.js";
class X extends B {
  constructor(e, r) {
    super(e, r);
    y(this, "type", "Cylinder");
    y(this, "cylinderMesh");
    this.editor = new F(this), e && (this.cylinderMesh = new O(d(d({}, e.style), e)), this.add(this.cylinderMesh));
  }
  get data() {
    return M(d({}, this.baseData), {
      bottomCenter: v(this.applyObjectMatrixWorld(this.cylinderMesh.bottomCenter)),
      topCenter: v(this.applyObjectMatrixWorld(this.cylinderMesh.topCenter)),
      radius: this.cylinderMesh.radius,
      style: {
        color: this.cylinderMesh.color.getHex()
      }
    });
  }
  highlight() {
    var e;
    (e = this.cylinderMesh) == null || e.highlight();
  }
  unhighlight() {
    var e;
    (e = this.cylinderMesh) == null || e.unhighlight();
  }
  create(e) {
    return b(this, null, function* () {
      this.cylinderMesh = new O(e), this.add(this.cylinderMesh), yield N(this.cylinderMesh, this.pointSelector), this.editor.enable();
    });
  }
}
function N(n, t) {
  return b(this, null, function* () {
    const e = n.parent;
    yield D(n.bottomCircle, t);
    const r = new W();
    r.name = "LineHelper", e.add(r);
    const s = t.position.point, c = n.normal.clone().normalize(), h = s.clone().add(c.clone().multiplyScalar(10)), i = s.clone().sub(c.clone().multiplyScalar(10));
    return r.setPoints([h, i]), t.enable(), new Promise((o, a) => {
      const C = (l) => {
        w(), o();
      }, u = (l) => {
        if (!(l != null && l.raycaster))
          return;
        const m = z({
          raycaster: l.raycaster,
          line: new f.Line3(h, i)
        }), x = new f.Plane().setFromNormalAndCoplanarPoint(n.normal, n.bottomCenter).projectPoint(m, new f.Vector3()), E = m.clone().sub(x), H = n.bottomCenter.clone().add(E);
        m && n.setTopCenter(H);
      }, w = () => {
        t.off("select", C), t.off("intersectionUpdate", u), t.off("disable", P), e.remove(r), t.disable();
      }, P = () => {
        w(), e.remove(n), a(new Error("Cancelled"));
      };
      t.on("select", C), t.on("intersectionUpdate", u), t.on("disable", P);
    });
  });
}
export {
  X as Cylinder,
  N as createCylinder
};
