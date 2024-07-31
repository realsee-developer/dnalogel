import { SvelteComponent as Q, init as X, safe_not_equal as Z, element as $, insert as tt, transition_in as C, check_outros as et, transition_out as k, detach as nt, destroy_each as ot, onMount as rt, onDestroy as st, create_component as at, mount_component as ct, destroy_component as it, group_outros as lt } from "../vendor/svelte/internal/index.js";
import { Five as ft } from "@realsee/five";
import { nextFrame as mt } from "../shared-utils/animationFrame/index.js";
import { equal as z } from "../shared-utils/equal.js";
import { intersectionOfLine as ut } from "../shared-utils/math/planimetry.js";
import { throttle as ht } from "../shared-utils/throttle.js";
import { Vector3 as M } from "three";
import dt from "./RulerItem.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../shared-utils/isTruelyObject.js";
function J(p, r, i) {
  const t = p.slice();
  return t[12] = r[i], t;
}
function K(p) {
  let r, i;
  return r = new dt({
    props: { rulerItemProp: (
      /*itemData*/
      p[12]
    ) }
  }), {
    c() {
      at(r.$$.fragment);
    },
    m(t, e) {
      ct(r, t, e), i = !0;
    },
    p(t, e) {
      const w = {};
      e & /*rulerItemProp*/
      1 && (w.rulerItemProp = /*itemData*/
      t[12]), r.$set(w);
    },
    i(t) {
      i || (C(r.$$.fragment, t), i = !0);
    },
    o(t) {
      k(r.$$.fragment, t), i = !1;
    },
    d(t) {
      it(r, t);
    }
  };
}
function pt(p) {
  let r, i, t = (
    /*rulerItemProp*/
    p[0]
  ), e = [];
  for (let o = 0; o < t.length; o += 1)
    e[o] = K(J(p, t, o));
  const w = (o) => k(e[o], 1, 1, () => {
    e[o] = null;
  });
  return {
    c() {
      r = $("div");
      for (let o = 0; o < e.length; o += 1)
        e[o].c();
    },
    m(o, a) {
      tt(o, r, a);
      for (let n = 0; n < e.length; n += 1)
        e[n] && e[n].m(r, null);
      i = !0;
    },
    p(o, [a]) {
      if (a & /*rulerItemProp*/
      1) {
        t = /*rulerItemProp*/
        o[0];
        let n;
        for (n = 0; n < t.length; n += 1) {
          const A = J(o, t, n);
          e[n] ? (e[n].p(A, a), C(e[n], 1)) : (e[n] = K(A), e[n].c(), C(e[n], 1), e[n].m(r, null));
        }
        for (lt(), n = t.length; n < e.length; n += 1)
          w(n);
        et();
      }
    },
    i(o) {
      if (!i) {
        for (let a = 0; a < t.length; a += 1)
          C(e[a]);
        i = !0;
      }
    },
    o(o) {
      e = e.filter(Boolean);
      for (let a = 0; a < e.length; a += 1)
        k(e[a]);
      i = !1;
    },
    d(o) {
      o && nt(r), ot(e, o);
    }
  };
}
function gt(p, r, i) {
  var B, G, H, U;
  let { five: t } = r, { rulerDatas: e } = r, { options: w } = r, o = [];
  const a = ((G = (B = t.getElement()) == null ? void 0 : B.parentElement) == null ? void 0 : G.clientWidth) || 0, n = ((U = (H = t.getElement()) == null ? void 0 : H.parentElement) == null ? void 0 : U.clientHeight) || 0, A = (c, l) => {
    const f = [
      [{ x: 0, y: 0 }, { x: a, y: 0 }],
      [{ x: 0, y: 0 }, { x: 0, y: n }],
      [{ x: a, y: 0 }, { x: a, y: n }],
      [{ x: 0, y: n }, { x: a, y: n }]
    ], u = [];
    for (let h = 0; h < f.length; h++) {
      const g = ut([c, l], [f[h][0], f[h][1]], !0);
      g && u.push(g);
    }
    return u.length === 0 ? !1 : u;
  }, j = (c, l) => {
    const f = c.clone().project(t.camera), u = (f.x + 1) / 2 * a, h = (-f.y + 1) / 2 * n, g = l.clone().project(t.camera), L = (g.x + 1) / 2 * a, y = (-g.y + 1) / 2 * n, s = Math.sqrt(Math.pow(L - u, 2) + Math.pow(y - h, 2));
    return {
      startLeft: u,
      startTop: h,
      endLeft: L,
      endTop: y,
      distance: s
    };
  }, N = (c, l, f) => {
    const u = t.camera.position, h = t.camera.getWorldDirection(new M()), g = c.clone().sub(u).normalize().angleTo(h), L = l.clone().sub(u).normalize().angleTo(h), y = c.distanceTo(l), T = l.clone().sub(l.clone().sub(c).divide(new M(2, 2, 2))).distanceTo(u), { startLeft: d, startTop: x, endLeft: v, endTop: q, distance: D } = j(c, l), S = -((Math.PI / 2 - Math.atan2(v - d, x - q)) / Math.PI) * 180;
    let P = !0;
    f || (P = !1), !z(c, f) && !z(l, f) && (P = !1), y < 0.3 && (P = !1), g > Math.PI / 2 && (P = !1), L > Math.PI / 2 && (P = !1), T / y > 8 && (P = !1);
    let I = 50, b = D;
    const m = A({ x: ~~d, y: ~~x }, { x: ~~v, y: ~~q });
    if (m && m.length === 1 && (z(c, f) ? (b = Math.sqrt(Math.pow(m[0].x - d, 2) + Math.pow(m[0].y - x, 2)), I = b / D * 50) : z(l, f) && (b = Math.sqrt(Math.pow(m[0].x - v, 2) + Math.pow(m[0].y - q, 2)), I = 100 - b / D * 50)), m && m.length === 2) {
      const F = {
        x: (m[0].x + m[1].x) / 2,
        y: (m[0].y + m[1].y) / 2
      };
      I = Math.sqrt(Math.pow(F.x - d, 2) + Math.pow(F.y - x, 2)) / D * 100;
    }
    return {
      startLeft: d,
      startTop: x,
      distance: D,
      deg: S,
      visible: P,
      labelOffset: I,
      ruleLength: y
    };
  }, _ = () => {
    const c = t.panoIndex, l = e.find((s) => s.panoIndex === c);
    if (!l)
      return i(0, o = []);
    if (t.currentMode !== ft.Mode.Panorama)
      return i(0, o = []);
    const f = t.camera.position, u = t.camera.getWorldDirection(new M()), h = l.lines.map((s) => new M(s.start[0], -s.start[1], -s.start[2])), g = l.lines.map((s) => new M(s.end[0], -s.end[1], -s.end[2])), [L] = h.concat(g).sort((s, T) => {
      const d = s.clone().setY(0).sub(f).normalize().angleTo(u.clone().setY(0)), x = T.clone().setY(0).sub(f).normalize().angleTo(u.clone().setY(0));
      return d - x;
    }), y = l.lines.map((s) => {
      var b, m;
      const T = s.start, d = s.end, { startLeft: x, startTop: v, distance: q, deg: D, visible: V, labelOffset: S, ruleLength: P } = N(new M(T[0], -T[1], -T[2]), new M(d[0], -d[1], -d[2]), L), I = [];
      return s.children && ((b = s.children) == null ? void 0 : b.length) > 0 && ((m = s.children) == null || m.forEach((F) => {
        const W = F.start, Y = F.end, { distance: O } = j(new M(W[0], -W[1], -W[2]), new M(Y[0], -Y[1], -Y[2]));
        I.push({ width: O, state: F.state });
      })), {
        width: q,
        left: x,
        top: v,
        rotateDeg: D,
        state: s.state,
        children: I,
        labelOffset: S,
        visible: V,
        labelElement: w.distanceText(P)
      };
    });
    i(0, o = y);
  }, E = () => mt(_), R = ht(_, 80);
  return rt(() => {
    _(), t.on("panoArrived", _), t.on("modeChange", _), t.on("cameraDirectionUpdate", E), t.on("movingToPano", E), t.on("mouseWheel", () => R()), t.on("pinchGesture", () => R());
  }), st(() => {
    t.off("panoArrived", _), t.off("modeChange", _), t.off("cameraDirectionUpdate", E), t.off("movingToPano", E), t.off("mouseWheel", () => R()), t.off("pinchGesture", () => R());
  }), p.$$set = (c) => {
    "five" in c && i(1, t = c.five), "rulerDatas" in c && i(2, e = c.rulerDatas), "options" in c && i(3, w = c.options);
  }, [o, t, e, w];
}
class Lt extends Q {
  constructor(r) {
    super(), X(this, r, gt, pt, Z, { five: 1, rulerDatas: 2, options: 3 });
  }
}
export {
  Lt as default
};
