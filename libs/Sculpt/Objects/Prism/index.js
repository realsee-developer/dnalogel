var _ = Object.defineProperty, j = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var P = (s, i, t) => i in s ? _(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t, d = (s, i) => {
  for (var t in i || (i = {}))
    L.call(i, t) && P(s, t, i[t]);
  if (g)
    for (var t of g(i))
      A.call(i, t) && P(s, t, i[t]);
  return s;
}, w = (s, i) => j(s, E(i));
var c = (s, i, t) => (P(s, typeof i != "symbol" ? i + "" : i, t), t);
var M = (s, i, t) => new Promise((o, r) => {
  var n = (e) => {
    try {
      h(t.next(e));
    } catch (l) {
      r(l);
    }
  }, p = (e) => {
    try {
      h(t.throw(e));
    } catch (l) {
      r(l);
    }
  }, h = (e) => e.done ? o(e.value) : Promise.resolve(e.value).then(n, p);
  h((t = t.apply(s, i)).next());
});
import { BaseObject as C } from "../Base/index.js";
import * as R from "three";
import { createPolygon as T } from "../Polygon/index.js";
import { PrismMesh as v } from "../../Meshes/Prism.js";
import { LineMesh as D } from "../../Meshes/Line.js";
import { PrismMeshEditor as U } from "../../Editors/PrismMeshEditor.js";
import { rayOnLine as B } from "../../utils/three/rayOnLine.js";
import { getNormal as N } from "../../../shared-utils/three/getNormal.js";
import { vector3ToArray as x } from "../../../shared-utils/three/vector3ToArray.js";
import { AreaMesh as V } from "../../Meshes/Area.js";
import { anyPositionToVector3 as H } from "../../../shared-utils/positionToVector3.js";
class $ extends C {
  constructor(t, o) {
    super(t, o);
    c(this, "type", "Prism");
    c(this, "prismMesh");
    c(this, "_editor");
    t && (this.prismMesh = new v(d(d({}, t.style), t)), this.add(this.prismMesh));
  }
  get editor() {
    return this._editor || (this._editor = new U(this.prismMesh)), this._editor;
  }
  get data() {
    return w(d({}, this.baseData), {
      points: x(this.applyObjectMatrixWorld(this.prismMesh.bottomPositions, this.prismMesh)),
      heightPoint: x(this.applyObjectMatrixWorld(this.prismMesh.topPosition, this.prismMesh)),
      style: {
        color: this.prismMesh.color.getHex(),
        lineWidth: this.prismMesh.lineWidth,
        lineColor: this.prismMesh.lineColor.getHex()
      }
    });
  }
  setData(t) {
    this.prismMesh.setPoints({
      points: t.points ? this.applyObjectReversalMatrixWorld(t.points.map(H), this.prismMesh) : void 0,
      heightPoint: t.heightPoint ? this.applyObjectReversalMatrixWorld(H(t.heightPoint), this.prismMesh) : void 0
    }), this.prismMesh.setStyle(t.style), this._editor && this._editor.initialHelperMatrix();
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
    return M(this, null, function* () {
      this.prismMesh = new v(t), this.add(this.prismMesh), yield k(this.prismMesh, this.pointSelector, t), this.config.defaultAction && this.editor.enable();
    });
  }
}
function k(s, i, t) {
  return M(this, null, function* () {
    const o = s.parent, r = new V(s.style);
    o.add(r), yield T(r, i, t).finished, o.remove(r), s.setPoints({ points: r.points });
    const n = new D();
    n.name = "LineHelper", o.add(n);
    const p = r.points.at(-1), h = N(r.points), e = p.clone().add(h.clone().multiplyScalar(100)), l = p.clone().sub(h.clone().multiplyScalar(100));
    return n.setPoints([e, l]), i.enable(), new Promise((O, W) => {
      const y = (a) => {
        var m;
        (m = t == null ? void 0 : t.onPointPlaced) == null || m.call(t, s.bottomPositions), b(), O();
      }, f = (a) => {
        if (!(a != null && a.raycaster))
          return;
        const m = B({
          raycaster: a.raycaster,
          line: new R.Line3(e, l)
        });
        m && s.setPoints({ heightPoint: m });
      }, b = () => {
        i.off("select", y), i.off("intersectionUpdate", f), i.off("disable", u), o.remove(n), i.disable();
      }, u = () => {
        b(), o.remove(s), W(new Error("Cancelled"));
      };
      i.on("select", y), i.on("intersectionUpdate", f), i.on("disable", u);
    });
  });
}
export {
  $ as Prism,
  k as createPrism
};
