var D = Object.defineProperty, k = Object.defineProperties;
var z = Object.getOwnPropertyDescriptors;
var R = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
var j = (n, t, e) => t in n ? D(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, f = (n, t) => {
  for (var e in t || (t = {}))
    B.call(t, e) && j(n, e, t[e]);
  if (R)
    for (var e of R(t))
      F.call(t, e) && j(n, e, t[e]);
  return n;
}, v = (n, t) => k(n, z(t));
var w = (n, t, e) => (j(n, typeof t != "symbol" ? t + "" : t, e), e);
var U = (n, t, e) => new Promise((s, p) => {
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
import { BaseObject as I } from "../Base/index.js";
import * as a from "three";
import { LineEditor as N } from "./Editor.js";
import { vector3ToArray as q } from "../../../shared-utils/three/vector3ToArray.js";
import { LineWithDotsMesh as T } from "../../Meshes/LineWithDots.js";
import { rayOnLine as G } from "../../utils/three/rayOnLine.js";
import { withResolvers as J } from "../../../shared-utils/promise/withResolvers.js";
class ne extends I {
  constructor(e, s) {
    super(e, s);
    w(this, "type", "Line");
    w(this, "lineMesh");
    w(this, "creatingObject");
    e && (this.lineMesh = new T(f(f({}, e.style), e)), this.add(this.lineMesh)), this.editor = new N(this);
  }
  get data() {
    return v(f({}, this.baseData), {
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
    return U(this, null, function* () {
      this.removeChildren();
      const s = new T(e);
      this.lineMesh = s, this.add(this.lineMesh), this.creatingObject = K(s, this.pointSelector, e), yield this.creatingObject.finished, this.editor.enable();
    });
  }
}
function K(n, t, e) {
  var C;
  const s = n.parent;
  if (!s)
    return;
  const { promise: p, resolve: P, reject: b } = J(), c = (C = e == null ? void 0 : e.limit) != null ? C : "none", o = new H(n.style);
  s.add(o);
  const l = new H(v(f({}, n.style), { dashed: !0, lengthEnable: !1 }));
  s.add(l), t.enable();
  const i = [];
  let h, d, y;
  const m = [], O = () => i.length > 0, M = () => m.length > 0, W = () => {
    O() && (m.push(i.pop()), n.setPoints(i), g(y), t.pointSelectorHelper.magnifier.render());
  }, A = () => {
    M() && (i.push(m.pop()), n.setPoints(i), g(y), t.pointSelectorHelper.magnifier.render());
  }, E = (r) => {
    if (!r)
      return;
    m.length = 0;
    const u = i.length === 0 ? r.point : h.clone();
    i.push(u), n.setPoints(i), i.length === 2 && (V(), P());
  }, g = (r) => {
    const u = () => {
      o.setPoints([]), l.setPoints([]), t.pointSelectorHelper.magnifier.render();
    };
    if (!(i != null && i.length) || !r)
      return u();
    y = r;
    const L = i.at(-1).clone();
    c === "none" ? (h = r.point, o.setPoints([L, h])) : c === "xoz" ? (t.plane = d, d = d != null ? d : new a.Plane().setFromNormalAndCoplanarPoint(new a.Vector3(0, 1, 0), i[0]), h = d.projectPoint(r.point, new a.Vector3()), o.setPoints([L, h]), l.setPoints([h, r.point])) : c === "y" && (r.isVirtual ? (h = G({
      raycaster: r.raycaster,
      line: new a.Line3(i[0].clone(), new a.Vector3(0, 1, 0).add(i[0])),
      clampToLine: !1
    }), l.setPoints([])) : (h = new a.Line3(i[0].clone(), new a.Vector3(0, 1, 0).add(i[0])).closestPointToPoint(r.point, !1, new a.Vector3()), l.setPoints([h, r.point])), o.setPoints([L, h]));
  }, V = () => {
    t.off("select", E), t.off("intersectionUpdate", g), t.off("disable", x), t.plane = null, t.disable(), s == null || s.remove(o, l);
  }, x = () => {
    V(), i.length !== 2 && (s == null || s.remove(n)), b(new Error("Cancelled"));
  };
  return t.on("select", E), t.on("intersectionUpdate", g), t.on("disable", x), {
    finished: p,
    canUndo: O,
    canRedo: M,
    undo: W,
    redo: A
  };
}
export {
  ne as Line,
  K as createLine
};
