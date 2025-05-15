var H = Object.defineProperty, R = Object.defineProperties;
var _ = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, j = Object.prototype.propertyIsEnumerable;
var b = (e, o, t) => o in e ? H(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, m = (e, o) => {
  for (var t in o || (o = {}))
    C.call(o, t) && b(e, t, o[t]);
  if (w)
    for (var t of w(o))
      j.call(o, t) && b(e, t, o[t]);
  return e;
}, v = (e, o) => R(e, _(o));
var d = (e, o, t) => (b(e, typeof o != "symbol" ? o + "" : o, t), t);
var p = (e, o, t) => new Promise((l, a) => {
  var i = (s) => {
    try {
      n(t.next(s));
    } catch (r) {
      a(r);
    }
  }, h = (s) => {
    try {
      n(t.throw(s));
    } catch (r) {
      a(r);
    }
  }, n = (s) => s.done ? l(s.value) : Promise.resolve(s.value).then(i, h);
  n((t = t.apply(e, o)).next());
});
import { BaseObject as L } from "../Base/index.js";
import * as T from "three";
import { BoxMeshEditor as A } from "../../Editors/BoxMeshEditor.js";
import { BoxMesh as E } from "../../Meshes/Box.js";
import { createRectangle as D } from "../Rectangle/index.js";
import { LineMesh as N } from "../../Meshes/Line.js";
import { getNormal as U } from "../../../shared-utils/three/getNormal.js";
import { rayOnLine as V } from "../../utils/three/rayOnLine.js";
import { vector3ToArray as O } from "../../../shared-utils/three/vector3ToArray.js";
import { RectangleWithEdgeMesh as k } from "../../Meshes/RectangleWithEdge.js";
import { centerPoint as q } from "../../../shared-utils/three/centerPoint.js";
import { anyPositionToVector3 as W } from "../../../shared-utils/positionToVector3.js";
class ot extends L {
  constructor(t, l) {
    super(t, l);
    d(this, "type", "Box");
    d(this, "boxMesh");
    d(this, "_editor");
    t && (this.boxMesh = new E(m(m({}, t.style), t)), this.add(this.boxMesh));
  }
  get editor() {
    return this._editor || (this._editor = new A(this.boxMesh)), this._editor;
  }
  get data() {
    return v(m({}, this.baseData), {
      points: O(this.applyObjectMatrixWorld(this.boxMesh.bottomPositions, this.boxMesh)),
      heightPoint: O(this.applyObjectMatrixWorld(this.boxMesh.topPosition, this.boxMesh)),
      style: {
        color: this.boxMesh.color.getHex(),
        opacity: this.boxMesh.opacity,
        lineWidth: this.boxMesh.lineWidth,
        lineColor: this.boxMesh.lineColor.getHex()
      }
    });
  }
  setData(t) {
    this.boxMesh.setPoints({
      points: t.points ? this.applyObjectReversalMatrixWorld(t.points.map(W), this.boxMesh) : void 0,
      heightPoint: t.heightPoint ? this.applyObjectReversalMatrixWorld(W(t.heightPoint), this.boxMesh) : void 0
    }), this.boxMesh.setStyle(t.style), this._editor && this._editor.initialHelperMatrix();
  }
  highlight() {
    var t;
    (t = this.boxMesh) == null || t.highlight();
  }
  unhighlight() {
    var t;
    (t = this.boxMesh) == null || t.unhighlight();
  }
  create(t) {
    return p(this, null, function* () {
      this.removeChildren(), this.boxMesh = new E(t), this.add(this.boxMesh), yield z(this.boxMesh, this.pointSelector, t), this.config.defaultAction && this.editor.enable();
    });
  }
}
function z(e, o, t) {
  return p(this, null, function* () {
    return new Promise((l, a) => p(this, null, function* () {
      const i = e.parent;
      if (!i) {
        a(new Error("No container"));
        return;
      }
      const h = new k(e.style);
      i.add(h), yield D(h, o, t), i.remove(h), e.setPoints({ points: h.points });
      const n = new N(), s = U(e.bottomPositions), r = q(...e.bottomPositions), f = r.clone().add(s.clone().multiplyScalar(100)), x = r.clone().sub(s.clone().multiplyScalar(100));
      n.setPoints([f, x]), i.add(n), o.enable();
      const g = (c) => {
        M(), l();
      }, y = (c) => {
        if (!(c != null && c.raycaster))
          return;
        const u = V({
          raycaster: c.raycaster,
          line: new T.Line3(f, x)
        });
        if (u) {
          const B = u.clone().sub(r);
          e.setPoints({ heightPoint: e.bottomPositions[0].clone().add(B) });
        }
      }, M = () => {
        o.off("select", g), o.off("intersectionUpdate", y), o.off("disable", P), o.disable(), i == null || i.remove(n);
      }, P = () => {
        M(), i == null || i.remove(e), a(new Error("Cancelled"));
      };
      o.on("select", g), o.on("intersectionUpdate", y), o.on("disable", P);
    }));
  });
}
export {
  ot as Box,
  z as createBox
};
