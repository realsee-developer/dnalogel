var E = Object.defineProperty, L = Object.defineProperties;
var O = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, W = Object.prototype.propertyIsEnumerable;
var p = (i, e, t) => e in i ? E(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, c = (i, e) => {
  for (var t in e || (e = {}))
    v.call(e, t) && p(i, t, e[t]);
  if (u)
    for (var t of u(e))
      W.call(e, t) && p(i, t, e[t]);
  return i;
}, w = (i, e) => L(i, O(e));
var d = (i, e, t) => (p(i, typeof e != "symbol" ? e + "" : e, t), t);
var f = (i, e, t) => new Promise((o, n) => {
  var l = (s) => {
    try {
      r(t.next(s));
    } catch (h) {
      n(h);
    }
  }, m = (s) => {
    try {
      r(t.throw(s));
    } catch (h) {
      n(h);
    }
  }, r = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(l, m);
  r((t = t.apply(i, e)).next());
});
import { BaseObject as j } from "../Base/index.js";
import * as C from "three";
import { createPolygon as T } from "../Polygon/index.js";
import { PrismMesh as x } from "../../Meshes/Prism.js";
import { LineMesh as U } from "../../Meshes/Line.js";
import { PrismEditor as z } from "./Editor.js";
import { rayOnLine as A } from "../../utils/three/rayOnLine.js";
import { getNormal as B } from "../../../shared-utils/three/getNormal.js";
import { vector3ToArray as H } from "../../../shared-utils/three/vector3ToArray.js";
class Q extends j {
  constructor(t, o) {
    super(t, o);
    d(this, "type", "Prism");
    d(this, "prismMesh");
    this.editor = new z(this), t && (this.prismMesh = new x(c(c({}, t.style), t)), this.add(this.prismMesh));
  }
  get data() {
    return w(c({}, this.baseData), {
      points: H(this.applyObjectMatrixWorld(this.prismMesh.bottomPolygon.points)),
      heightPoint: H(this.applyObjectMatrixWorld(this.prismMesh.heightPoint)),
      style: {
        color: this.prismMesh.color.getHex(),
        lineWidth: this.prismMesh.lineWidth,
        lineColor: this.prismMesh.lineColor.getHex()
      }
    });
  }
  highlight() {
    var t;
    (t = this.prismMesh) == null || t.highlight();
  }
  unhighlight() {
    var t;
    (t = this.prismMesh) == null || t.unhighlight();
  }
  create(t) {
    return f(this, null, function* () {
      this.prismMesh = new x(t), this.add(this.prismMesh), yield D(this.prismMesh, this.pointSelector), this.editor.enable();
    });
  }
}
function D(i, e) {
  return f(this, null, function* () {
    const t = i.parent;
    yield T(i.bottomPolygon, e).finished;
    const o = new U();
    o.name = "LineHelper", t.add(o);
    const n = i.bottomPolygon.points.at(-1), l = B(i.bottomPolygon.points).normalize(), m = n.clone().add(l.clone().multiplyScalar(10)), r = n.clone().sub(l.clone().multiplyScalar(10));
    return o.setPoints([m, r]), e.enable(), new Promise((s, h) => {
      const g = (a) => {
        y(), s();
      }, P = (a) => {
        if (!(a != null && a.raycaster))
          return;
        const M = A({
          raycaster: a.raycaster,
          line: new C.Line3(m, r)
        });
        M && i.setPoints({ heightPoint: M });
      }, y = () => {
        e.off("select", g), e.off("intersectionUpdate", P), e.off("disable", b), t.remove(o), e.disable();
      }, b = () => {
        y(), t.remove(i), h(new Error("Cancelled"));
      };
      e.on("select", g), e.on("intersectionUpdate", P), e.on("disable", b);
    });
  });
}
export {
  Q as Prism,
  D as createPrism
};
