var k = Object.defineProperty, z = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var U = Object.getOwnPropertySymbols;
var F = Object.prototype.hasOwnProperty, I = Object.prototype.propertyIsEnumerable;
var L = (n, t, e) => t in n ? k(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, f = (n, t) => {
  for (var e in t || (t = {}))
    F.call(t, e) && L(n, e, t[e]);
  if (U)
    for (var e of U(t))
      I.call(t, e) && L(n, e, t[e]);
  return n;
}, j = (n, t) => z(n, B(t));
var w = (n, t, e) => (L(n, typeof t != "symbol" ? t + "" : t, e), e);
var V = (n, t, e) => new Promise((s, p) => {
  var P = (o) => {
    try {
      c(e.next(o));
    } catch (l) {
      p(l);
    }
  }, b = (o) => {
    try {
      c(e.throw(o));
    } catch (l) {
      p(l);
    }
  }, c = (o) => o.done ? s(o.value) : Promise.resolve(o.value).then(P, b);
  c((e = e.apply(n, t)).next());
});
import { LineMesh as H } from "../../Meshes/Line.js";
import { BaseObject as N } from "../Base/index.js";
import * as a from "three";
import { LineEditor as _ } from "./Editor.js";
import { vector3ToArray as q } from "../../../shared-utils/three/vector3ToArray.js";
import { LineWithDotsMesh as T } from "../../Meshes/LineWithDots.js";
import { rayOnLine as G } from "../../utils/three/rayOnLine.js";
import { withResolvers as J } from "../../../shared-utils/promise/withResolvers.js";
const W = new a.Vector3();
class ie extends N {
  constructor(e, s) {
    super(e, s);
    w(this, "type", "Line");
    w(this, "lineMesh");
    w(this, "creatingObject");
    e && (this.lineMesh = new T(f(f({}, e.style), e)), this.add(this.lineMesh)), this.editor = new _(this);
  }
  get data() {
    return j(f({}, this.baseData), {
      points: q(this.applyObjectMatrixWorld(this.lineMesh.points)),
      style: {
        lineColor: new a.Color(this.lineMesh.color).getHex(),
        lineWidth: this.lineMesh.lineWidth,
        dashed: this.lineMesh.dashed
      }
    });
  }
  highlight() {
    var e;
    (e = this.lineMesh) == null || e.highlight();
  }
  unhighlight() {
    var e;
    (e = this.lineMesh) == null || e.unhighlight();
  }
  canUndo() {
    var e;
    (e = this.creatingObject) == null || e.canUndo();
  }
  canRedo() {
    var e;
    (e = this.creatingObject) == null || e.canRedo();
  }
  undo() {
    var e;
    (e = this.creatingObject) == null || e.undo();
  }
  redo() {
    var e;
    (e = this.creatingObject) == null || e.redo();
  }
  create(e) {
    return V(this, null, function* () {
      this.removeChildren();
      const s = new T(e);
      this.lineMesh = s, this.add(this.lineMesh), this.creatingObject = K(s, this.pointSelector, e), yield this.creatingObject.finished, this.editor.enable();
    });
  }
}
function K(n, t, e) {
  var R;
  const s = n.parent;
  if (!s)
    return;
  const { promise: p, resolve: P, reject: b } = J(), c = (R = e == null ? void 0 : e.limit) != null ? R : "none", o = new H(n.style);
  s.add(o);
  const l = new H(j(f({}, n.style), { dashed: !0, lengthEnable: !1 }));
  s.add(l), t.enable();
  const i = [];
  let h, d, v;
  const m = [], O = () => i.length > 0, M = () => m.length > 0, A = () => {
    O() && (m.push(i.pop()), n.setPoints(i), g(v), t.pointSelectorHelper.magnifier.render());
  }, D = () => {
    M() && (i.push(m.pop()), n.setPoints(i), g(v), t.pointSelectorHelper.magnifier.render());
  }, E = (r) => {
    if (!r)
      return;
    m.length = 0;
    const u = i.length === 0 ? r.point : h.clone();
    i.push(u), n.setPoints(i), i.length === 2 && (x(), P());
  }, g = (r) => {
    const u = () => {
      o.setPoints([]), l.setPoints([]), t.pointSelectorHelper.magnifier.render();
    };
    if (!(i != null && i.length) || !r)
      return u();
    v = r;
    const y = i.at(-1).clone();
    c === "none" ? (h = r.point, o.setPoints([y, h])) : c === "xoz" ? (t.plane = d, d = d != null ? d : new a.Plane().setFromNormalAndCoplanarPoint(new a.Vector3(0, 1, 0), i[0]), h = d.projectPoint(r.point, W), o.setPoints([y, h]), l.setPoints([h, r.point])) : c === "y" && (r.isVirtual ? (h = G({
      raycaster: r.raycaster,
      line: new a.Line3(i[0].clone(), new a.Vector3(0, 1, 0).add(i[0])),
      clampToLine: !1
    }), l.setPoints([])) : (h = new a.Line3(i[0].clone(), new a.Vector3(0, 1, 0).add(i[0])).closestPointToPoint(r.point, !1, W), l.setPoints([h, r.point])), o.setPoints([y, h]));
  }, x = () => {
    t.off("select", E), t.off("intersectionUpdate", g), t.off("disable", C), t.plane = null, t.disable(), s == null || s.remove(o, l);
  }, C = () => {
    x(), i.length !== 2 && (s == null || s.remove(n)), b(new Error("Cancelled"));
  };
  return t.on("select", E), t.on("intersectionUpdate", g), t.on("disable", C), {
    finished: p,
    canUndo: O,
    canRedo: M,
    undo: A,
    redo: D
  };
}
export {
  ie as Line,
  K as createLine
};
