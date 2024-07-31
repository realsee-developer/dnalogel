var L = Object.defineProperty, j = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable;
var p = (n, t, e) => t in n ? L(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, h = (n, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && p(n, e, t[e]);
  if (g)
    for (var e of g(t))
      U.call(t, e) && p(n, e, t[e]);
  return n;
}, M = (n, t) => j(n, T(t));
var y = (n, t, e) => (p(n, typeof t != "symbol" ? t + "" : t, e), e);
var f = (n, t, e) => new Promise((r, s) => {
  var c = (o) => {
    try {
      i(e.next(o));
    } catch (a) {
      s(a);
    }
  }, m = (o) => {
    try {
      i(e.throw(o));
    } catch (a) {
      s(a);
    }
  }, i = (o) => o.done ? r(o.value) : Promise.resolve(o.value).then(c, m);
  i((e = e.apply(n, t)).next());
});
import { Sculpt as W } from "../../index.js";
import { CylinderMesh as v } from "../../Meshes/Cylinder.js";
import { LineMesh as z } from "../../Meshes/Line.js";
import { rayOnLine as B } from "../../utils/three/rayOnLine.js";
import { BaseObject as D } from "../Base/index.js";
import { createCircle as F } from "../Circle/index.js";
import * as b from "three";
import { CylinderEditor as N } from "./Editor.js";
import { vector3ToArray as O } from "../../../shared-utils/three/vector3ToArray.js";
class Z extends D {
  constructor(e, r) {
    super(e, r);
    y(this, "type", "Cylinder");
    y(this, "cylinderMesh");
    this.editor = new N(this), e && (this.cylinderMesh = new v(h(h({}, e.style), e)), this.add(this.cylinderMesh));
  }
  get data() {
    return M(h({}, this.baseData), {
      bottomCenter: O(this.applyObjectMatrixWorld(this.cylinderMesh.bottomCenter)),
      topCenter: O(this.applyObjectMatrixWorld(this.cylinderMesh.topCenter)),
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
    return f(this, null, function* () {
      this.cylinderMesh = new v(e), this.add(this.cylinderMesh), yield R(this.cylinderMesh, this.pointSelector), this.editor.enable();
    });
  }
}
function R(n, t) {
  return f(this, null, function* () {
    const e = n.parent;
    yield F(n.bottomCircle, t);
    const r = new z();
    r.name = "LineHelper", e.add(r);
    const s = t.position.point, c = n.normal.clone().normalize(), m = s.clone().add(c.clone().multiplyScalar(10)), i = s.clone().sub(c.clone().multiplyScalar(10));
    return r.setPoints([m, i]), t.enable(), new Promise((o, a) => {
      const C = (l) => {
        P(), o();
      }, u = (l) => {
        if (!(l != null && l.raycaster))
          return;
        const d = B({
          cameraPosition: W.modules.five.camera.position,
          raycaster: l.raycaster,
          line: new b.Line3(m, i)
        }), x = new b.Plane().setFromNormalAndCoplanarPoint(n.normal, n.bottomCenter).projectPoint(d, new b.Vector3()), E = d.clone().sub(x), H = n.bottomCenter.clone().add(E);
        d && n.setTopCenter(H);
      }, P = () => {
        t.off("select", C), t.off("intersectionUpdate", u), t.off("disable", w), e.remove(r), t.disable();
      }, w = () => {
        P(), e.remove(n), a(new Error("Cancelled"));
      };
      t.on("select", C), t.on("intersectionUpdate", u), t.on("disable", w);
    });
  });
}
export {
  Z as Cylinder
};
