var R = Object.defineProperty, _ = Object.defineProperties;
var C = Object.getOwnPropertyDescriptors;
var O = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
var x = (e, o, t) => o in e ? R(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t, d = (e, o) => {
  for (var t in o || (o = {}))
    L.call(o, t) && x(e, t, o[t]);
  if (O)
    for (var t of O(o))
      T.call(o, t) && x(e, t, o[t]);
  return e;
}, M = (e, o) => _(e, C(o));
var p = (e, o, t) => (x(e, typeof o != "symbol" ? o + "" : o, t), t);
var c = (e, o, t) => new Promise((n, a) => {
  var s = (h) => {
    try {
      i(t.next(h));
    } catch (l) {
      a(l);
    }
  }, r = (h) => {
    try {
      i(t.throw(h));
    } catch (l) {
      a(l);
    }
  }, i = (h) => h.done ? n(h.value) : Promise.resolve(h.value).then(s, r);
  i((t = t.apply(e, o)).next());
});
import { BaseObject as N } from "../Base/index.js";
import * as P from "three";
import { BoxMeshEditor as A } from "../../Editors/BoxMeshEditor.js";
import { BoxMesh as E } from "../../Meshes/Box.js";
import { createRectangle as D } from "../Rectangle/index.js";
import { LineMesh as F } from "../../Meshes/Line.js";
import { getNormal as U } from "../../../shared-utils/three/getNormal.js";
import { rayOnLine as V } from "../../utils/three/rayOnLine.js";
import { vector3ToArray as j } from "../../../shared-utils/three/vector3ToArray.js";
import { RectangleWithEdgeMesh as G } from "../../Meshes/RectangleWithEdge.js";
import { centerPoint as B } from "../../../shared-utils/three/centerPoint.js";
import { anyPositionToVector3 as v } from "../../../shared-utils/positionToVector3.js";
class ot extends N {
  constructor(t, n) {
    super(t, n);
    p(this, "type", "Box");
    p(this, "boxMesh");
    p(this, "_editor");
    t && (this.boxMesh = new E(d(d({}, t.style), t)), this.add(this.boxMesh));
  }
  get editor() {
    return this._editor || (this._editor = new A(this.boxMesh)), this._editor;
  }
  get data() {
    return M(d({}, this.baseData), {
      points: j(this.applyObjectMatrixWorld(this.boxMesh.bottomPositions, this.boxMesh)),
      heightPoint: j(this.applyObjectMatrixWorld(this.boxMesh.topPosition, this.boxMesh)),
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
      points: t.points ? this.applyObjectReversalMatrixWorld(t.points.map(v), this.boxMesh) : void 0,
      heightPoint: t.heightPoint ? this.applyObjectReversalMatrixWorld(v(t.heightPoint), this.boxMesh) : void 0
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
    return c(this, null, function* () {
      this.removeChildren(), this.boxMesh = new E(t), this.add(this.boxMesh), yield $(this.boxMesh, this.pointSelector, t), this.config.defaultAction && this.editor.enable();
    });
  }
  /**
   * 获取盒子在世界坐标中的6个面的几何信息
   * 返回顺序：bottom、top、side0~side3（自底面第0点起顺时针）
   */
  getWorldFacesGeometry() {
    if (!this.boxMesh)
      return [];
    const t = this.applyObjectMatrixWorld(this.boxMesh.bottomPositions, this.boxMesh), n = this.applyObjectMatrixWorld(this.boxMesh.topPositions, this.boxMesh);
    if (!t || !n || t.length !== 4 || n.length !== 4)
      return [];
    const a = [], s = (r, i) => {
      const h = new P.Triangle(i[0], i[1], i[2]).getNormal(new P.Vector3()), l = B(...i);
      a.push({ name: r, vertices: i, center: l, normal: h });
    };
    s("bottom", [t[0], t[1], t[2], t[3]]), s("top", [n[0], n[1], n[2], n[3]]);
    for (let r = 0; r < 4; r++) {
      const i = (r + 1) % 4;
      s(`side${r}`, [t[r], t[i], n[i], n[r]]);
    }
    return a;
  }
}
function $(e, o, t) {
  return c(this, null, function* () {
    return new Promise((n, a) => c(this, null, function* () {
      const s = e.parent;
      if (!s) {
        a(new Error("No container"));
        return;
      }
      const r = new G(e.style);
      s.add(r), yield D(r, o, M(d({}, t), {
        onPointPlaced: () => {
          var m;
          (m = t == null ? void 0 : t.onPointPlaced) == null || m.call(t);
        }
      })), s.remove(r), e.setPoints({ points: r.points });
      const i = new F(), h = U(e.bottomPositions), l = B(...e.bottomPositions), y = l.clone().add(h.clone().multiplyScalar(100)), u = l.clone().sub(h.clone().multiplyScalar(100));
      i.setPoints([y, u]), s.add(i), o.enable();
      const f = (m) => {
        var b;
        (b = t == null ? void 0 : t.onPointPlaced) == null || b.call(t), g(), n();
      }, w = (m) => {
        if (!(m != null && m.raycaster))
          return;
        const b = V({
          raycaster: m.raycaster,
          line: new P.Line3(y, u)
        });
        if (b) {
          const H = b.clone().sub(l);
          e.setPoints({ heightPoint: e.bottomPositions[0].clone().add(H) });
        }
      }, g = () => {
        o.off("select", f), o.off("intersectionUpdate", w), o.off("disable", W), o.disable(), s == null || s.remove(i);
      }, W = () => {
        g(), s == null || s.remove(e), a(new Error("Cancelled"));
      };
      o.on("select", f), o.on("intersectionUpdate", w), o.on("disable", W);
    }));
  });
}
export {
  ot as Box,
  $ as createBox
};
