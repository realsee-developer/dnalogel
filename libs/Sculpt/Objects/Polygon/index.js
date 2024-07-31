var H = Object.defineProperty, T = Object.defineProperties;
var j = Object.getOwnPropertyDescriptors;
var b = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, D = Object.prototype.propertyIsEnumerable;
var g = (i, t, e) => t in i ? H(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, c = (i, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && g(i, e, t[e]);
  if (b)
    for (var e of b(t))
      D.call(t, e) && g(i, e, t[e]);
  return i;
}, W = (i, t) => T(i, j(t));
var m = (i, t, e) => (g(i, typeof t != "symbol" ? t + "" : t, e), e);
var E = (i, t, e) => new Promise((r, s) => {
  var d = (o) => {
    try {
      n(e.next(o));
    } catch (a) {
      s(a);
    }
  }, l = (o) => {
    try {
      n(e.throw(o));
    } catch (a) {
      s(a);
    }
  }, n = (o) => o.done ? r(o.value) : Promise.resolve(o.value).then(d, l);
  n((e = e.apply(i, t)).next());
});
import { hotkeys as L } from "../../../vendor/hotkeys-js/dist/hotkeys.esm.js";
import { BaseObject as O } from "../Base/index.js";
import { PolylineMesh as x } from "../../Meshes/Polyline.js";
import { AreaMesh as M } from "../../Meshes/Area.js";
import { PolygonEditor as U } from "./Editor.js";
import { vector3ToArray as k } from "../../../shared-utils/three/vector3ToArray.js";
class K extends O {
  constructor(e, r) {
    super(e, r);
    m(this, "type", "Polygon");
    m(this, "areaMesh");
    this.editor = new U(this), e && (this.areaMesh = new M(c(c({}, e.style), e)), this.add(this.areaMesh)), L("esc", () => {
      this.stopCreating();
    });
  }
  get data() {
    return W(c({}, this.baseData), {
      points: k(this.applyObjectMatrixWorld(this.areaMesh.points)),
      style: {
        color: this.areaMesh.color.getHex(),
        lineColor: this.areaMesh.lineColor.getHex(),
        lineWidth: this.areaMesh.lineWidth
      }
    });
  }
  highlight() {
    var e;
    (e = this.areaMesh) == null || e.highlight();
  }
  unhighlight() {
    var e;
    (e = this.areaMesh) == null || e.unhighlight();
  }
  create(e) {
    return E(this, null, function* () {
      this.children.forEach((s) => {
        s.parent === this && this.remove(s);
      }), this.children.length = 0;
      const r = new M(e);
      this.areaMesh = r, this.add(this.areaMesh), yield B(this.areaMesh, this.pointSelector), this.editor.enable();
    });
  }
}
function B(i, t) {
  return new Promise((e, r) => {
    const s = i.parent;
    if (!s) {
      r(new Error("No container"));
      return;
    }
    const d = new x({ dashed: !0, lineColor: i.lineColor, lineWidth: i.lineWidth });
    s == null || s.add(d);
    const l = new x({ dashed: !0, lineColor: i.lineColor, lineWidth: i.lineWidth });
    s == null || s.add(l), t.enable();
    const n = [];
    let o, a = !1;
    const u = (h) => {
      const f = n.length === 0 ? h.point : o.clone();
      n.push(f.clone()), i.setPoints(n, { closed: !1 }), a && (y(), e());
    }, P = (h) => {
      var v;
      if (!((v = i.points) != null && v.length) || !h)
        return;
      const f = n.at(-1).clone();
      if (i.points.length <= 2)
        o = h.point, d.setPoints([f, o]), s != null && s.children.includes(l) && s.remove(l);
      else {
        o = i.projectPoint(h.point);
        const p = i.points[0], C = 0.2;
        p.distanceTo(o) < C || p.distanceTo(h.point) < C ? (o = p, h.point.copy(p), t.pointSelectorHelper.updateWithIntersect(h, { emitEvent: !1 }), a = !0) : a = !1, l.setPoints([o, h.point]), s != null && s.children.includes(l) || s == null || s.add(l);
      }
      d.setPoints([f, o]), n.length >= 2 && i.setPoints([...n, o], { closed: !1 });
    }, y = () => {
      t.off("select", u), t.off("intersectionUpdate", P), t.off("disable", w), t.disable(), s == null || s.remove(d, l);
    }, w = () => {
      y(), s == null || s.remove(i, l, d), r(new Error("Cancelled"));
    };
    t.on("select", u), t.on("intersectionUpdate", P), t.on("disable", w);
  });
}
export {
  K as Polygon,
  B as createPolygon
};
