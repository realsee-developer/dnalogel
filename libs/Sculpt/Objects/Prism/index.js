var W = Object.defineProperty, _ = Object.defineProperties;
var j = Object.getOwnPropertyDescriptors;
var u = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var d = (s, t, i) => t in s ? W(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i, p = (s, t) => {
  for (var i in t || (t = {}))
    E.call(t, i) && d(s, i, t[i]);
  if (u)
    for (var i of u(t))
      L.call(t, i) && d(s, i, t[i]);
  return s;
}, w = (s, t) => _(s, j(t));
var c = (s, t, i) => (d(s, typeof t != "symbol" ? t + "" : t, i), i);
var f = (s, t, i) => new Promise((e, r) => {
  var a = (o) => {
    try {
      n(i.next(o));
    } catch (h) {
      r(h);
    }
  }, m = (o) => {
    try {
      n(i.throw(o));
    } catch (h) {
      r(h);
    }
  }, n = (o) => o.done ? e(o.value) : Promise.resolve(o.value).then(a, m);
  n((i = i.apply(s, t)).next());
});
import { BaseObject as A } from "../Base/index.js";
import * as C from "three";
import { createPolygon as R } from "../Polygon/index.js";
import { PrismMesh as v } from "../../Meshes/Prism.js";
import { LineMesh as T } from "../../Meshes/Line.js";
import { PrismMeshEditor as D } from "../../Editors/PrismMeshEditor.js";
import { rayOnLine as U } from "../../utils/three/rayOnLine.js";
import { getNormal as B } from "../../../shared-utils/three/getNormal.js";
import { vector3ToArray as x } from "../../../shared-utils/three/vector3ToArray.js";
import { AreaMesh as N } from "../../Meshes/Area.js";
import { anyPositionToVector3 as H } from "../../../shared-utils/positionToVector3.js";
class Z extends A {
  constructor(i, e) {
    super(i, e);
    c(this, "type", "Prism");
    c(this, "prismMesh");
    c(this, "_editor");
    i && (this.prismMesh = new v(p(p({}, i.style), i)), this.add(this.prismMesh));
  }
  get editor() {
    return this._editor || (this._editor = new D(this.prismMesh)), this._editor;
  }
  get data() {
    return w(p({}, this.baseData), {
      points: x(this.applyObjectMatrixWorld(this.prismMesh.bottomPositions, this.prismMesh)),
      heightPoint: x(this.applyObjectMatrixWorld(this.prismMesh.topPosition, this.prismMesh)),
      style: {
        color: this.prismMesh.color.getHex(),
        lineWidth: this.prismMesh.lineWidth,
        lineColor: this.prismMesh.lineColor.getHex()
      }
    });
  }
  setData(i) {
    this.prismMesh.setPoints({
      points: i.points ? this.applyObjectReversalMatrixWorld(i.points.map(H), this.prismMesh) : void 0,
      heightPoint: i.heightPoint ? this.applyObjectReversalMatrixWorld(H(i.heightPoint), this.prismMesh) : void 0
    }), this.prismMesh.setStyle(i.style), this._editor && this._editor.initialHelperMatrix();
  }
  highlight() {
    var i;
    (i = this.prismMesh) == null || i.highlight();
  }
  unhighlight() {
    var i;
    (i = this.prismMesh) == null || i.unhighlight();
  }
  create(i) {
    return f(this, null, function* () {
      this.prismMesh = new v(i), this.add(this.prismMesh), yield V(this.prismMesh, this.pointSelector), this.config.defaultAction && this.editor.enable();
    });
  }
}
function V(s, t) {
  return f(this, null, function* () {
    const i = s.parent, e = new N(s.style);
    i.add(e), yield R(e, t).finished, i.remove(e), s.setPoints({ points: e.points });
    const r = new T();
    r.name = "LineHelper", i.add(r);
    const a = e.points.at(-1), m = B(e.points), n = a.clone().add(m.clone().multiplyScalar(100)), o = a.clone().sub(m.clone().multiplyScalar(100));
    return r.setPoints([n, o]), t.enable(), new Promise((h, O) => {
      const M = (l) => {
        y(), h();
      }, P = (l) => {
        if (!(l != null && l.raycaster))
          return;
        const b = U({
          raycaster: l.raycaster,
          line: new C.Line3(n, o)
        });
        b && s.setPoints({ heightPoint: b });
      }, y = () => {
        t.off("select", M), t.off("intersectionUpdate", P), t.off("disable", g), i.remove(r), t.disable();
      }, g = () => {
        y(), i.remove(s), O(new Error("Cancelled"));
      };
      t.on("select", M), t.on("intersectionUpdate", P), t.on("disable", g);
    });
  });
}
export {
  Z as Prism,
  V as createPrism
};
