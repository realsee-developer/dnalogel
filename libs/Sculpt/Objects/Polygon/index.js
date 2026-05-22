var Pt = Object.defineProperty, yt = Object.defineProperties;
var mt = Object.getOwnPropertyDescriptors;
var it = Object.getOwnPropertySymbols;
var xt = Object.prototype.hasOwnProperty, ft = Object.prototype.propertyIsEnumerable;
var v = Math.pow, T = (s, e, t) => e in s ? Pt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, _ = (s, e) => {
  for (var t in e || (e = {}))
    xt.call(e, t) && T(s, t, e[t]);
  if (it)
    for (var t of it(e))
      ft.call(e, t) && T(s, t, e[t]);
  return s;
}, R = (s, e) => yt(s, mt(e));
var C = (s, e, t) => (T(s, typeof e != "symbol" ? e + "" : e, t), t);
var ot = (s, e, t) => new Promise((r, n) => {
  var x = (c) => {
    try {
      w(t.next(c));
    } catch (u) {
      n(u);
    }
  }, a = (c) => {
    try {
      w(t.throw(c));
    } catch (u) {
      n(u);
    }
  }, w = (c) => c.done ? r(c.value) : Promise.resolve(c.value).then(x, a);
  w((t = t.apply(s, e)).next());
});
import { BaseObject as bt } from "../Base/index.js";
import * as H from "three";
import { PolylineMesh as rt } from "../../Meshes/Polyline.js";
import { AreaMesh as nt } from "../../Meshes/Area.js";
import { PolygonEditor as Ct } from "./Editor.js";
import { vector3ToArray as wt } from "../../../shared-utils/three/vector3ToArray.js";
import { withResolvers as Dt } from "../../../shared-utils/promise/withResolvers.js";
import { anyPositionToVector3 as _t } from "../../../shared-utils/positionToVector3.js";
import { PointMesh as Ht } from "../../Meshes/Point.js";
import { isPolygenIntersecting as lt } from "../../utils/isIntersecting.js";
class At extends bt {
  constructor(t, r) {
    var n;
    super(t, r);
    C(this, "type", "Polygon");
    C(this, "areaMesh");
    // 新增：Polygon 专属的历史记录
    C(this, "historyStack", []);
    C(this, "currentHistoryIndex", -1);
    C(this, "maxHistorySize", 50);
    C(this, "_editor");
    C(this, "creatingObject");
    t && (this.areaMesh = new nt(_(_({}, t.style), t)), this.areaMesh.userData = (n = this.areaMesh.userData) != null ? n : {}, typeof this.areaMesh.userData.dragSelectPixelDistance != "number" && (this.areaMesh.userData.dragSelectPixelDistance = 10), this.add(this.areaMesh));
  }
  get editor() {
    return this._editor || (this._editor = new Ct(this)), this._editor;
  }
  updateCreationPointMeshes() {
    var r, n;
    const t = (n = (r = this.areaMesh) == null ? void 0 : r.userData) == null ? void 0 : n.syncCreationPointMeshes;
    typeof t == "function" && t(), this._editor && this._editor.updatePointMeshes();
  }
  get data() {
    return this.updateMatrixWorld(), R(_({}, this.baseData), {
      points: wt(this.applyObjectMatrixWorld(this.areaMesh.points)),
      style: {
        color: this.areaMesh.color.getHex(),
        lineColor: this.areaMesh.lineColor.getHex(),
        lineWidth: this.areaMesh.lineWidth
      }
    });
  }
  setData(t) {
    t.points && this.areaMesh.setPoints(this.applyObjectReversalMatrixWorld(t.points.map(_t))), this.areaMesh.setStyle(t.style), this.updateCreationPointMeshes();
  }
  highlight() {
    var t;
    (t = this.areaMesh) == null || t.highlight();
  }
  unhighlight() {
    var t;
    (t = this.areaMesh) == null || t.unhighlight();
  }
  canUndo() {
    var r, n, x;
    return this.creatingObject ? (x = (n = (r = this.creatingObject) == null ? void 0 : r.canUndo) == null ? void 0 : n.call(r)) != null ? x : !1 : this.currentHistoryIndex > 0;
  }
  canRedo() {
    var t, r, n;
    return this.creatingObject ? (n = (r = (t = this.creatingObject) == null ? void 0 : t.canRedo) == null ? void 0 : r.call(t)) != null ? n : !1 : this.currentHistoryIndex < this.historyStack.length - 1;
  }
  undo() {
    var t, r;
    if (this.creatingObject)
      return (r = (t = this.creatingObject) == null ? void 0 : t.undo) == null ? void 0 : r.call(t);
    if (this.canUndo()) {
      this.currentHistoryIndex--;
      const n = this.historyStack[this.currentHistoryIndex];
      this.restoreSnapshot(n);
    } else
      console.log("[Polygon] undo: 无法撤销", { uuid: this.uuid });
  }
  redo() {
    var t, r;
    if (this.creatingObject)
      return (r = (t = this.creatingObject) == null ? void 0 : t.redo) == null ? void 0 : r.call(t);
    if (this.canRedo()) {
      this.currentHistoryIndex++;
      const n = this.historyStack[this.currentHistoryIndex];
      this.restoreSnapshot(n);
    }
  }
  /**
   * 记录当前状态到历史记录
   */
  recordHistory() {
    if (this.creatingObject)
      return;
    this.historyStack = this.historyStack.slice(0, this.currentHistoryIndex + 1);
    const t = {
      points: this.areaMesh.points.map((r) => r.clone())
    };
    this.historyStack.push(t), this.historyStack.length > this.maxHistorySize ? this.historyStack.shift() : this.currentHistoryIndex++;
  }
  /**
   * 恢复快照
   */
  restoreSnapshot(t) {
    this.areaMesh.setPoints(t.points.map((r) => r.clone())), this.updateCreationPointMeshes(), this._editor && this._editor.updatePointMeshes();
  }
  create(t) {
    return ot(this, null, function* () {
      var n;
      this.children.forEach((x) => {
        x.parent === this && this.remove(x);
      }), this.children.length = 0;
      const r = new nt(t);
      this.areaMesh = r, this.add(this.areaMesh), this.creatingObject = jt(this.areaMesh, this.pointSelector, t), yield (n = this.creatingObject) == null ? void 0 : n.finished, this.creatingObject = null, this.recordHistory(), this.updateCreationPointMeshes(), this.config.defaultAction && this.editor.enable();
    });
  }
}
function jt(s, e, t) {
  var $, B, G, J, K, Q, X, Z, g;
  const { promise: r, resolve: n, reject: x } = Dt(), a = s.parent;
  if (!a) {
    x(new Error("No container"));
    return;
  }
  const w = ($ = t == null ? void 0 : t.limit) != null ? $ : "none", c = t == null ? void 0 : t.simpleMode, u = (Q = (K = (G = s.five) != null ? G : (B = s.get) == null ? void 0 : B.call(s, "five")) != null ? K : (J = window.globalModules) == null ? void 0 : J.five) != null ? Q : window.$five, V = (X = t == null ? void 0 : t.autoClosePixelDistance) != null ? X : 10;
  s.userData = (Z = s.userData) != null ? Z : {}, s.userData.dragSelectPixelDistance = V;
  let M = 0;
  c && u && u.model && u.model.bounding && typeof ((g = u.model.bounding.max) == null ? void 0 : g.y) == "number" && (M = u.model.bounding.max.y + 1);
  const P = new rt(s.style);
  a == null || a.add(P);
  const y = new rt(R(_({}, s.style), { dashed: !0, lengthEnable: !1 }));
  a == null || a.add(y);
  let j = [];
  const at = (i = o) => {
    j.forEach((d, p) => {
      const h = i[p];
      h && d.position.copy(h);
    });
  };
  function D() {
    var d, p;
    j.forEach((h) => {
      var f;
      return (f = h.parent) == null ? void 0 : f.remove(h);
    });
    const i = (p = (d = s.line) == null ? void 0 : d.style) != null ? p : s.style;
    j = o.map((h, f) => {
      var S, I;
      const b = new Ht(R(_({}, i), {
        color: (S = i.pointColor) != null ? S : i.lineColor,
        tip: void 0,
        point: h
      }));
      return b.name = `PolygonPointMesh_${f}`, b.userData = (I = b.userData) != null ? I : {}, b.userData.dragSelectPixelDistance = V, a == null || a.add(b), b;
    }), at();
  }
  function Y() {
    j.forEach((i) => {
      var d;
      return (d = i.parent) == null ? void 0 : d.remove(i);
    }), j = [], s.userData && (delete s.userData.creationPointMeshes, delete s.userData.syncCreationPointMeshes, delete s.userData.disposeCreationPointMeshes);
  }
  e.enable(), c && e.setAdherePoints([]);
  const o = [];
  let l, m, W = !1, U;
  const E = [], z = () => o.length > 0, q = () => E.length > 0, ht = () => {
    var i;
    z() && (E.push(o.pop()), O(U), D(), (i = t == null ? void 0 : t.onUndo) == null || i.call(t), e.pointSelectorHelper && e.pointSelectorHelper.magnifier && e.pointSelectorHelper.magnifier.render());
  }, dt = () => {
    var i;
    q() && (o.push(E.pop()), O(U), D(), (i = t == null ? void 0 : t.onRedo) == null || i.call(t), e.pointSelectorHelper && e.pointSelectorHelper.magnifier && e.pointSelectorHelper.magnifier.render());
  }, F = (i) => {
    var p, h;
    E.length = 0;
    let d = o.length === 0 ? i.point : l.clone();
    if (c && (d = d.clone().setY(M)), t.__onWillAddPoint(d, o), !((t == null ? void 0 : t.experimental_max_point_count) != null && o.length === t.experimental_max_point_count)) {
      if (o.push(d), s.setPoints(o, { closed: !1 }), t != null && t.experimental_self_intersect_check && lt(o)) {
        const f = o.pop();
        s.setPoints(o, { closed: !1 }), D(), console.warn("[Polygon] 检测到自相交，无法添加该点"), (p = t == null ? void 0 : t.__onSelfIntersect) == null || p.call(t, f);
        return;
      }
      D(), (h = t == null ? void 0 : t.onPointPlaced) == null || h.call(t, o), W && (L(), n());
    }
  }, O = (i) => {
    const d = () => {
      P.setPoints([]), y.setPoints([]), s.setPoints(o), e.pointSelectorHelper && e.pointSelectorHelper.magnifier && e.pointSelectorHelper.magnifier.render();
    };
    if (!i) {
      d(), D();
      return;
    }
    if (U = i, !(o != null && o.length))
      return d();
    const p = o.at(-1).clone();
    if (o.length < 3 && (c ? (l = i.point.clone().setY(M), P.setPoints([p, l]), y.setPoints([])) : w === "none" ? (l = i.point, P.setPoints([p, l]), y.setPoints([])) : w === "xoz" ? (m = m != null ? m : new H.Plane().setFromNormalAndCoplanarPoint(new H.Vector3(0, 1, 0), o[0]), e.plane = m, l = m.projectPoint(i.point, new H.Vector3()), P.setPoints([p, l]), y.setPoints([l, i.point])) : w === "y" && (o.length === 1 ? (l = i.point, P.setPoints([p, l]), y.setPoints([])) : (m = m != null ? m : new H.Plane().setFromCoplanarPoints(o[0], o[1], new H.Vector3(0, 1, 0).add(o[0])), e.plane = m, l = m.projectPoint(i.point, new H.Vector3()), P.setPoints([p, l]), y.setPoints([l, i.point])))), o.length >= 3) {
      c ? l = i.point.clone().setY(M) : l = s.projectPoint(i.point);
      const h = o[0];
      let f = !1;
      if (typeof (t == null ? void 0 : t.autoClosePixelDistance) == "number") {
        if (u && u.camera && u.getElement) {
          const b = u.getElement(), S = b.clientWidth, I = b.clientHeight, A = (ct) => {
            const st = ct.clone().project(u.camera);
            return {
              x: (st.x * 0.5 + 0.5) * S,
              y: (1 - (st.y * 0.5 + 0.5)) * I
            };
          }, k = A(h), tt = A(l), et = A(i.point), ut = Math.sqrt(v(k.x - tt.x, 2) + v(k.y - tt.y, 2)), pt = Math.sqrt(v(k.x - et.x, 2) + v(k.y - et.y, 2));
          (ut < t.autoClosePixelDistance || pt < t.autoClosePixelDistance) && (f = !0);
        }
      } else
        (h.distanceTo(l) < 0.2 || h.distanceTo(i.point) < 0.2) && (f = !0);
      f ? (l = h, i.point.copy(h), e.pointSelectorHelper.updateWithIntersect(i, { emitEvent: !1 }), W = !0) : W = !1, P.setPoints([p, l]), y.setPoints([l, i.point]);
    }
    o.length >= 2 ? (s.setPoints([...o, l], { closed: !1 }), s.line.setPoints(s.points.slice(0, -1)), t != null && t.experimental_self_intersect_check && lt([...o, l]) ? (e.cursorError = !0, P.setStyle({ lineColor: 16734553 }), y.setStyle({ lineColor: 16734553 })) : (e.cursorError = !1, P.setStyle({ lineColor: s.lineColor }), y.setStyle({ lineColor: s.lineColor }))) : s.setPoints([]), D();
  }, L = () => {
    e.off("select", F), e.off("intersectionUpdate", O), e.off("disable", N), e.plane = null, e.disable(), a == null || a.remove(P, y), Y();
  }, N = () => {
    L(), a == null || a.remove(s, y, P), Y(), x(new Error("Cancelled"));
  };
  return e.on("select", F), e.on("intersectionUpdate", O), e.on("disable", N), {
    finished: r,
    canUndo: z,
    canRedo: q,
    undo: ht,
    redo: dt
  };
}
export {
  At as Polygon,
  jt as createPolygon
};
