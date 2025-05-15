import { SvelteComponent as Q, init as X, safe_not_equal as Z, element as $, insert as tt, transition_in as C, check_outros as et, transition_out as k, detach as ot, destroy_each as nt, onMount as rt, onDestroy as it, create_component as st, mount_component as at, destroy_component as ct, group_outros as mt } from "../vendor/svelte/internal/index.js";
import { Five as lt } from "@realsee/five";
import { nextFrame as pt } from "../shared-utils/animationFrame/index.js";
import "../shared-utils/tag.js";
import { Vector3 as M } from "three";
import "../vendor/hammerjs/hammer.js";
import "../shared-utils/three/PointSelector/index.js";
import "../shared-utils/three/CSS3DRenderer/index.js";
import "../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../shared-utils/three/core/Five_LineMaterial2.js";
import "../shared-utils/three/core/Sphere.js";
import "../vendor/animejs/lib/anime.es.js";
import "../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import { equal as z } from "../shared-utils/equal.js";
import "../shared-utils/five/FivePuppet.js";
import { intersectionOfLine as ft } from "../shared-utils/math/planimetry.js";
import { throttle as ut } from "../shared-utils/throttle.js";
import ht from "./RulerItem.js";
import "../shared-utils/positionToVector3.js";
import "../shared-utils/five/vector3ToScreen.js";
import "../shared-utils/five/getFiveModel.js";
import "../shared-utils/Utils/FiveUtil.js";
import "../shared-utils/Utils/BaseUtil.js";
import "../shared-utils/Subscribe.js";
import "../shared-utils/Utils/WorkUtil.js";
import "../shared-utils/five/transformPosition.js";
import "../shared-utils/three/temp.js";
import "../shared-utils/three/core/Raycaster.js";
import "../shared-utils/dom/resizeObserver.js";
import "../shared-utils/five/fiveEveryReadyListener.js";
import "../shared-utils/five/fiveModelLoad.js";
import "../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../shared-utils/three/Magnifier.js";
import "../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../shared-utils/three/Assets/index.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../shared-utils/even.js";
import "../shared-utils/CSS3DRender/OpacityMesh.js";
import "../shared-utils/three/centerPoint.js";
import "../shared-utils/three/getObjectVisible.js";
import "../shared-utils/isNil.js";
import "../shared-utils/three/PointSelector/utils/html.js";
import "../shared-utils/CSS3DRender/index.js";
import "../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../shared-utils/createResizeObserver.js";
import "../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../Sculpt/Meshes/Line.js";
import "../Sculpt/typings/style.js";
import "../shared-utils/three/IObject3D.js";
import "../Sculpt/utils/Meshes/getLengthHTML.js";
import "../shared-utils/three/applyObjectMatrixWorld.js";
import "../shared-utils/util.js";
import "../shared-utils/three/core/LineGeometry.js";
import "../shared-utils/three/core/LineMaterial.js";
import "../shared-utils/three/core/Line2.js";
import "../shared-utils/three/core/LineMaterial2.js";
import "../Sculpt/utils/unit.js";
import "../Sculpt/utils/renderDom.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../shared-utils/isTouchDevice.js";
import "../shared-utils/five/getPosition.js";
import "../shared-utils/five/getRaycasterByNdcPosition.js";
import "../shared-utils/three/PointSelector/utils/contents.js";
import "../Sculpt/utils/three/rayOnLine.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../shared-utils/isTruelyObject.js";
function J(d, r, c) {
  const t = d.slice();
  return t[12] = r[c], t;
}
function K(d) {
  let r, c;
  return r = new ht({
    props: { rulerItemProp: (
      /*itemData*/
      d[12]
    ) }
  }), {
    c() {
      st(r.$$.fragment);
    },
    m(t, e) {
      at(r, t, e), c = !0;
    },
    p(t, e) {
      const w = {};
      e & /*rulerItemProp*/
      1 && (w.rulerItemProp = /*itemData*/
      t[12]), r.$set(w);
    },
    i(t) {
      c || (C(r.$$.fragment, t), c = !0);
    },
    o(t) {
      k(r.$$.fragment, t), c = !1;
    },
    d(t) {
      ct(r, t);
    }
  };
}
function dt(d) {
  let r, c, t = (
    /*rulerItemProp*/
    d[0]
  ), e = [];
  for (let n = 0; n < t.length; n += 1)
    e[n] = K(J(d, t, n));
  const w = (n) => k(e[n], 1, 1, () => {
    e[n] = null;
  });
  return {
    c() {
      r = $("div");
      for (let n = 0; n < e.length; n += 1)
        e[n].c();
    },
    m(n, s) {
      tt(n, r, s);
      for (let o = 0; o < e.length; o += 1)
        e[o] && e[o].m(r, null);
      c = !0;
    },
    p(n, [s]) {
      if (s & /*rulerItemProp*/
      1) {
        t = /*rulerItemProp*/
        n[0];
        let o;
        for (o = 0; o < t.length; o += 1) {
          const A = J(n, t, o);
          e[o] ? (e[o].p(A, s), C(e[o], 1)) : (e[o] = K(A), e[o].c(), C(e[o], 1), e[o].m(r, null));
        }
        for (mt(), o = t.length; o < e.length; o += 1)
          w(o);
        et();
      }
    },
    i(n) {
      if (!c) {
        for (let s = 0; s < t.length; s += 1)
          C(e[s]);
        c = !0;
      }
    },
    o(n) {
      e = e.filter(Boolean);
      for (let s = 0; s < e.length; s += 1)
        k(e[s]);
      c = !1;
    },
    d(n) {
      n && ot(r), nt(e, n);
    }
  };
}
function gt(d, r, c) {
  var B, G, H, U;
  let { five: t } = r, { rulerDatas: e } = r, { options: w } = r, n = [];
  const s = ((G = (B = t.getElement()) == null ? void 0 : B.parentElement) == null ? void 0 : G.clientWidth) || 0, o = ((U = (H = t.getElement()) == null ? void 0 : H.parentElement) == null ? void 0 : U.clientHeight) || 0, A = (a, m) => {
    const l = [
      [{ x: 0, y: 0 }, { x: s, y: 0 }],
      [{ x: 0, y: 0 }, { x: 0, y: o }],
      [{ x: s, y: 0 }, { x: s, y: o }],
      [{ x: 0, y: o }, { x: s, y: o }]
    ], f = [];
    for (let u = 0; u < l.length; u++) {
      const g = ft([a, m], [l[u][0], l[u][1]], !0);
      g && f.push(g);
    }
    return f.length === 0 ? !1 : f;
  }, j = (a, m) => {
    const l = a.clone().project(t.camera), f = (l.x + 1) / 2 * s, u = (-l.y + 1) / 2 * o, g = m.clone().project(t.camera), L = (g.x + 1) / 2 * s, y = (-g.y + 1) / 2 * o, i = Math.sqrt(Math.pow(L - f, 2) + Math.pow(y - u, 2));
    return {
      startLeft: f,
      startTop: u,
      endLeft: L,
      endTop: y,
      distance: i
    };
  }, N = (a, m, l) => {
    const f = t.camera.position, u = t.camera.getWorldDirection(new M()), g = a.clone().sub(f).normalize().angleTo(u), L = m.clone().sub(f).normalize().angleTo(u), y = a.distanceTo(m), T = m.clone().sub(m.clone().sub(a).divide(new M(2, 2, 2))).distanceTo(f), { startLeft: h, startTop: x, endLeft: v, endTop: q, distance: D } = j(a, m), S = -((Math.PI / 2 - Math.atan2(v - h, x - q)) / Math.PI) * 180;
    let P = !0;
    l || (P = !1), !z(a, l) && !z(m, l) && (P = !1), y < 0.3 && (P = !1), g > Math.PI / 2 && (P = !1), L > Math.PI / 2 && (P = !1), T / y > 8 && (P = !1);
    let I = 50, b = D;
    const p = A({ x: ~~h, y: ~~x }, { x: ~~v, y: ~~q });
    if (p && p.length === 1 && (z(a, l) ? (b = Math.sqrt(Math.pow(p[0].x - h, 2) + Math.pow(p[0].y - x, 2)), I = b / D * 50) : z(m, l) && (b = Math.sqrt(Math.pow(p[0].x - v, 2) + Math.pow(p[0].y - q, 2)), I = 100 - b / D * 50)), p && p.length === 2) {
      const F = {
        x: (p[0].x + p[1].x) / 2,
        y: (p[0].y + p[1].y) / 2
      };
      I = Math.sqrt(Math.pow(F.x - h, 2) + Math.pow(F.y - x, 2)) / D * 100;
    }
    return {
      startLeft: h,
      startTop: x,
      distance: D,
      deg: S,
      visible: P,
      labelOffset: I,
      ruleLength: y
    };
  }, _ = () => {
    const a = t.panoIndex, m = e.find((i) => i.panoIndex === a);
    if (!m)
      return c(0, n = []);
    if (t.currentMode !== lt.Mode.Panorama)
      return c(0, n = []);
    const l = t.camera.position, f = t.camera.getWorldDirection(new M()), u = m.lines.map((i) => new M(i.start[0], -i.start[1], -i.start[2])), g = m.lines.map((i) => new M(i.end[0], -i.end[1], -i.end[2])), [L] = u.concat(g).sort((i, T) => {
      const h = i.clone().setY(0).sub(l).normalize().angleTo(f.clone().setY(0)), x = T.clone().setY(0).sub(l).normalize().angleTo(f.clone().setY(0));
      return h - x;
    }), y = m.lines.map((i) => {
      var b, p;
      const T = i.start, h = i.end, { startLeft: x, startTop: v, distance: q, deg: D, visible: V, labelOffset: S, ruleLength: P } = N(new M(T[0], -T[1], -T[2]), new M(h[0], -h[1], -h[2]), L), I = [];
      return i.children && ((b = i.children) == null ? void 0 : b.length) > 0 && ((p = i.children) == null || p.forEach((F) => {
        const W = F.start, Y = F.end, { distance: O } = j(new M(W[0], -W[1], -W[2]), new M(Y[0], -Y[1], -Y[2]));
        I.push({ width: O, state: F.state });
      })), {
        width: q,
        left: x,
        top: v,
        rotateDeg: D,
        state: i.state,
        children: I,
        labelOffset: S,
        visible: V,
        labelElement: w.distanceText(P)
      };
    });
    c(0, n = y);
  }, E = () => pt(_), R = ut(_, 80);
  return rt(() => {
    _(), t.on("panoArrived", _), t.on("modeChange", _), t.on("cameraDirectionUpdate", E), t.on("movingToPano", E), t.on("mouseWheel", () => R()), t.on("pinchGesture", () => R());
  }), it(() => {
    t.off("panoArrived", _), t.off("modeChange", _), t.off("cameraDirectionUpdate", E), t.off("movingToPano", E), t.off("mouseWheel", () => R()), t.off("pinchGesture", () => R());
  }), d.$$set = (a) => {
    "five" in a && c(1, t = a.five), "rulerDatas" in a && c(2, e = a.rulerDatas), "options" in a && c(3, w = a.options);
  }, [n, t, e, w];
}
class Re extends Q {
  constructor(r) {
    super(), X(this, r, gt, dt, Z, { five: 1, rulerDatas: 2, options: 3 });
  }
}
export {
  Re as default
};
