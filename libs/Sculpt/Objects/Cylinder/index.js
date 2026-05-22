var E = Object.defineProperty, L = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var p = (i, t, e) => t in i ? E(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, d = (i, t) => {
  for (var e in t || (t = {}))
    W.call(t, e) && p(i, e, t[e]);
  if (g)
    for (var e of g(t))
      A.call(t, e) && p(i, e, t[e]);
  return i;
}, w = (i, t) => L(i, T(t));
var m = (i, t, e) => (p(i, typeof t != "symbol" ? t + "" : t, e), e);
var f = (i, t, e) => new Promise((o, s) => {
  var c = (r) => {
    try {
      n(e.next(r));
    } catch (l) {
      s(l);
    }
  }, h = (r) => {
    try {
      n(e.throw(r));
    } catch (l) {
      s(l);
    }
  }, n = (r) => r.done ? o(r.value) : Promise.resolve(r.value).then(c, h);
  n((e = e.apply(i, t)).next());
});
import { CylinderMesh as v } from "../../Meshes/Cylinder.js";
import { LineMesh as R } from "../../Meshes/Line.js";
import { rayOnLine as D } from "../../utils/three/rayOnLine.js";
import { BaseObject as U } from "../Base/index.js";
import { createCircle as V } from "../Circle/index.js";
import * as b from "three";
import { vector3ToArray as x } from "../../../shared-utils/three/vector3ToArray.js";
import { CylinderMeshEditor as z } from "../../Editors/CylinderMeshEditor.js";
import { anyPositionToVector3 as O } from "../../../shared-utils/positionToVector3.js";
class Y extends U {
  constructor(e, o) {
    super(e, o);
    m(this, "type", "Cylinder");
    m(this, "cylinderMesh");
    m(this, "_editor");
    e && (this.cylinderMesh = new v(d(d({}, e.style), e)), this.add(this.cylinderMesh));
  }
  get editor() {
    return this._editor || (this._editor = new z(this.cylinderMesh)), this._editor;
  }
  get data() {
    return w(d({}, this.baseData), {
      bottomCenter: x(this.applyObjectMatrixWorld(this.cylinderMesh.bottomCenter, this.cylinderMesh)),
      topCenter: x(this.applyObjectMatrixWorld(this.cylinderMesh.topCenter, this.cylinderMesh)),
      radius: this.cylinderMesh.radius,
      style: {
        color: this.cylinderMesh.color.getHex()
      }
    });
  }
  setData(e) {
    this.cylinderMesh.setPoints({
      bottomCenter: e.bottomCenter ? this.applyObjectReversalMatrixWorld(O(e.bottomCenter), this.cylinderMesh) : void 0,
      topCenter: e.topCenter ? this.applyObjectReversalMatrixWorld(O(e.topCenter), this.cylinderMesh) : void 0
    }), this.cylinderMesh.setStyle(e.style), this._editor && this._editor.initialHelperMatrix();
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
      this.cylinderMesh = new v(e), this.add(this.cylinderMesh), yield B(this.cylinderMesh, this.pointSelector), this.config.defaultAction && this.editor.enable();
    });
  }
}
function B(i, t) {
  return f(this, null, function* () {
    const e = i.parent;
    yield V(i.bottomCircle, t);
    const o = new R();
    o.name = "LineHelper", e.add(o);
    const s = t.position.point, c = i.normal.clone().normalize(), h = s.clone().add(c.clone().multiplyScalar(100)), n = s.clone().sub(c.clone().multiplyScalar(100));
    return o.setPoints([h, n]), t.enable(), new Promise((r, l) => {
      const C = (a) => {
        u(), r();
      }, M = (a) => {
        if (!(a != null && a.raycaster))
          return;
        const y = D({
          raycaster: a.raycaster,
          line: new b.Line3(h, n)
        }), j = new b.Plane().setFromNormalAndCoplanarPoint(i.normal, i.bottomCenter).projectPoint(y, new b.Vector3()), H = y.clone().sub(j), _ = i.bottomCenter.clone().add(H);
        y && i.setTopCenter(_);
      }, u = () => {
        t.off("select", C), t.off("intersectionUpdate", M), t.off("disable", P), e.remove(o), t.disable();
      }, P = () => {
        u(), e.remove(i), l(new Error("Cancelled"));
      };
      t.on("select", C), t.on("intersectionUpdate", M), t.on("disable", P);
    });
  });
}
export {
  Y as Cylinder,
  B as createCylinder
};
