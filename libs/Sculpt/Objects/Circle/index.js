var x = Object.defineProperty, _ = Object.defineProperties;
var T = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (r, i, e) => i in r ? x(r, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[i] = e, d = (r, i) => {
  for (var e in i || (i = {}))
    A.call(i, e) && m(r, e, i[e]);
  if (u)
    for (var e of u(i))
      H.call(i, e) && m(r, e, i[e]);
  return r;
}, g = (r, i) => _(r, T(i));
var f = (r, i, e) => (m(r, typeof i != "symbol" ? i + "" : i, e), e);
var y = (r, i, e) => new Promise((o, t) => {
  var a = (n) => {
    try {
      c(e.next(n));
    } catch (h) {
      t(h);
    }
  }, s = (n) => {
    try {
      c(e.throw(n));
    } catch (h) {
      t(h);
    }
  }, c = (n) => n.done ? o(n.value) : Promise.resolve(n.value).then(a, s);
  c((e = e.apply(r, i)).next());
});
import { BaseObject as O } from "../Base/index.js";
import * as w from "three";
import { PolylineMesh as W } from "../../Meshes/Polyline.js";
import { CircleMeshEditor as j } from "../../Editors/CircleMeshEditor.js";
import { CircleWithEdgeMesh as v } from "../../Meshes/CircleWithEdge.js";
import { vector3ToArray as P } from "../../../shared-utils/three/vector3ToArray.js";
import { anyPositionToVector3 as b } from "../../../shared-utils/positionToVector3.js";
class L extends O {
  constructor(e, o) {
    super(e, o);
    f(this, "type", "Circle");
    f(this, "circleMesh");
    f(this, "_editor");
    e && (this.circleMesh = new v(d(d({}, e.style), e)), this.add(this.circleMesh));
  }
  get editor() {
    return this._editor || (this._editor = new j(this.circleMesh)), this._editor;
  }
  get data() {
    return g(d({}, this.baseData), {
      center: P(this.applyObjectMatrixWorld(this.circleMesh.center, this.circleMesh)),
      normal: P(this.circleMesh.normal.clone().applyQuaternion(this.circleMesh.quaternion)),
      radius: this.circleMesh.radius,
      style: {
        color: this.circleMesh.color.getHex()
      }
    });
  }
  setData(e) {
    this.circleMesh.setPoints({
      center: e.center ? this.applyObjectReversalMatrixWorld(b(e.center), this.circleMesh) : void 0,
      normal: e.normal ? b(e.normal) : void 0,
      radius: e.radius
    }), this.circleMesh.setStyle(e.style), this._editor && this._editor.initialHelperMatrix();
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
    return y(this, null, function* () {
      this.children.forEach((t) => {
        t.parent === this && this.remove(t);
      }), this.children.length = 0;
      const o = new v(e);
      this.circleMesh = o, this.add(this.circleMesh), yield D(this.circleMesh, this.pointSelector), this.config.defaultAction && this.editor.enable();
    });
  }
}
function D(r, i) {
  return new Promise((e, o) => {
    const t = r.parent;
    if (!t) {
      o(new Error("No container"));
      return;
    }
    const a = new W({ dashed: !0 });
    t.add(a), i.enable();
    let s, c;
    const n = (l) => {
      if (l) {
        if (!s) {
          s = {
            point: l.point,
            normal: l.face.normal
          };
          return;
        }
        s && c && (p(), e());
      }
    }, h = (l) => {
      if (!l || !s)
        return;
      const E = new w.Plane().setFromNormalAndCoplanarPoint(s.normal, s.point);
      if (c = l.raycaster.ray.intersectPlane(E, new w.Vector3()), c) {
        const C = s.point.distanceTo(c);
        r.setPoints({ center: s.point, normal: s.normal, radius: C });
      }
    }, p = () => {
      i.off("select", n), i.off("intersectionUpdate", h), i.off("disable", M), i.disable(), t == null || t.remove(a);
    }, M = () => {
      p(), t == null || t.remove(r, a), o(new Error("Cancelled"));
    };
    i.on("select", n), i.on("intersectionUpdate", h), i.on("disable", M);
  });
}
export {
  L as Circle,
  D as createCircle
};
