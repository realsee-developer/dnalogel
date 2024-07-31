var v = Object.defineProperty, x = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var d = (t, r, e) => r in t ? v(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, m = (t, r) => {
  for (var e in r || (r = {}))
    T.call(r, e) && d(t, e, r[e]);
  if (M)
    for (var e of M(r))
      j.call(r, e) && d(t, e, r[e]);
  return t;
}, g = (t, r) => x(t, O(r));
var f = (t, r, e) => (d(t, typeof r != "symbol" ? r + "" : r, e), e);
var w = (t, r, e) => new Promise((o, i) => {
  var a = (n) => {
    try {
      c(e.next(n));
    } catch (h) {
      i(h);
    }
  }, s = (n) => {
    try {
      c(e.throw(n));
    } catch (h) {
      i(h);
    }
  }, c = (n) => n.done ? o(n.value) : Promise.resolve(n.value).then(a, s);
  c((e = e.apply(t, r)).next());
});
import { hotkeys as A } from "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { BaseObject as H } from "../Base/index.js";
import * as y from "three";
import { PolylineMesh as N } from "../../Meshes/Polyline.js";
import { CircleEditor as U } from "./Editor.js";
import { CircleWithEdgeMesh as b } from "../../Meshes/CircleWithEdge.js";
import { vector3ToArray as C } from "../../../shared-utils/three/vector3ToArray.js";
class V extends H {
  constructor(e, o) {
    super(e, o);
    f(this, "type", "Circle");
    f(this, "circleMesh");
    this.editor = new U(this), e && (this.circleMesh = new b(m(m({}, e.style), e)), this.add(this.circleMesh)), A("esc", () => {
      this.stopCreating();
    });
  }
  get data() {
    return g(m({}, this.baseData), {
      center: C(this.applyObjectMatrixWorld(this.circleMesh.center)),
      normal: C(this.applyObjectQuaternion(this.circleMesh.normal)),
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
      const o = new b(e);
      this.circleMesh = o, this.add(this.circleMesh), yield W(this.circleMesh, this.pointSelector), this.editor.enable();
    });
  }
}
function W(t, r) {
  return new Promise((e, o) => {
    const i = t.parent;
    if (!i) {
      o(new Error("No container"));
      return;
    }
    const a = new N({ dashed: !0 });
    i.add(a), r.enable();
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
      const E = new y.Plane().setFromNormalAndCoplanarPoint(s.normal, s.point);
      if (c = l.raycaster.ray.intersectPlane(E, new y.Vector3()), c) {
        const P = s.point.distanceTo(c);
        t.setPoints({ center: s.point, normal: s.normal, radius: P });
      }
    }, p = () => {
      r.off("select", n), r.off("intersectionUpdate", h), r.off("disable", u), r.disable(), i == null || i.remove(a);
    }, u = () => {
      p(), i == null || i.remove(t, a), o(new Error("Cancelled"));
    };
    r.on("select", n), r.on("intersectionUpdate", h), r.on("disable", u);
  });
}
export {
  V as Circle,
  W as createCircle
};
