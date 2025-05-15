var re = Object.defineProperty, ae = Object.defineProperties;
var ce = Object.getOwnPropertyDescriptors;
var R = Object.getOwnPropertySymbols;
var le = Object.prototype.hasOwnProperty, de = Object.prototype.propertyIsEnumerable;
var j = (r, t, e) => t in r ? re(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, k = (r, t) => {
  for (var e in t || (t = {}))
    le.call(t, e) && j(r, e, t[e]);
  if (R)
    for (var e of R(t))
      de.call(t, e) && j(r, e, t[e]);
  return r;
}, y = (r, t) => ae(r, ce(t));
import { SvelteComponent as me, init as fe, safe_not_equal as ue, append_styles as pe, element as he, attr as be, add_render_callback as _e, set_style as H, insert as V, add_resize_listener as Ie, update_keyed_each as ge, check_outros as Y, transition_in as w, transition_out as M, detach as v, beforeUpdate as ke, onMount as ye, onDestroy as Pe, empty as W, group_outros as Z, outro_and_destroy_block as we, create_component as Le, mount_component as ze, destroy_component as Me } from "../vendor/svelte/internal/index.js";
import { Five as P } from "@realsee/five";
import * as Ce from "three";
import Ee from "./ItemLabelItem.js";
import { debounce as Fe } from "../shared-utils/debounce.js";
import { isImpacted as A } from "./utils/isImpacted.js";
import { getStrokeLength as Oe } from "./utils/getStrokeLength.js";
import { getLabelTransform as Ve } from "./utils/getLabelTransform.js";
import { transform2RenderData as B } from "./utils/transform2RenderData.js";
import "../vendor/classnames/index.js";
import "./typings.js";
function ve(r) {
  pe(r, "svelte-f82itz", ".item-labels-container.svelte-f82itz{width:100%;height:100%;position:relative}");
}
function N(r, t, e) {
  const a = r.slice();
  return a[29] = t[e], a;
}
function q(r) {
  let t, e;
  return t = new Ee({
    props: {
      itemLabel: (
        /*itemLabelItem*/
        r[29]
      ),
      hooks: (
        /*hooks*/
        r[0]
      ),
      anchorEnabled: (
        /*anchorEnabled*/
        r[2]
      ),
      onIconClick: (
        /*onIconClick*/
        r[6]
      )
    }
  }), {
    c() {
      Le(t.$$.fragment);
    },
    m(a, i) {
      ze(t, a, i), e = !0;
    },
    p(a, i) {
      const s = {};
      i[0] & /*renderItemLabels*/
      2 && (s.itemLabel = /*itemLabelItem*/
      a[29]), i[0] & /*hooks*/
      1 && (s.hooks = /*hooks*/
      a[0]), i[0] & /*anchorEnabled*/
      4 && (s.anchorEnabled = /*anchorEnabled*/
      a[2]), t.$set(s);
    },
    i(a) {
      e || (w(t.$$.fragment, a), e = !0);
    },
    o(a) {
      M(t.$$.fragment, a), e = !1;
    },
    d(a) {
      Me(t, a);
    }
  };
}
function X(r, t) {
  let e, a, i, s = (
    /*itemLabelItem*/
    t[29].visible && q(t)
  );
  return {
    key: r,
    first: null,
    c() {
      e = W(), s && s.c(), a = W(), this.first = e;
    },
    m(l, h) {
      V(l, e, h), s && s.m(l, h), V(l, a, h), i = !0;
    },
    p(l, h) {
      t = l, /*itemLabelItem*/
      t[29].visible ? s ? (s.p(t, h), h[0] & /*renderItemLabels*/
      2 && w(s, 1)) : (s = q(t), s.c(), w(s, 1), s.m(a.parentNode, a)) : s && (Z(), M(s, 1, 1, () => {
        s = null;
      }), Y());
    },
    i(l) {
      i || (w(s), i = !0);
    },
    o(l) {
      M(s), i = !1;
    },
    d(l) {
      l && v(e), s && s.d(l), l && v(a);
    }
  };
}
function xe(r) {
  let t, e = [], a = /* @__PURE__ */ new Map(), i, s, l = (
    /*renderItemLabels*/
    r[1]
  );
  const h = (d) => (
    /*itemLabelItem*/
    d[29].id
  );
  for (let d = 0; d < l.length; d += 1) {
    let c = N(r, l, d), _ = h(c);
    a.set(_, e[d] = X(_, c));
  }
  return {
    c() {
      t = he("div");
      for (let d = 0; d < e.length; d += 1)
        e[d].c();
      be(t, "class", "item-labels-container svelte-f82itz"), _e(() => (
        /*div_elementresize_handler*/
        r[12].call(t)
      )), H(
        t,
        "opacity",
        /*itemsVisible*/
        r[5] ? 1 : 0
      );
    },
    m(d, c) {
      V(d, t, c);
      for (let _ = 0; _ < e.length; _ += 1)
        e[_] && e[_].m(t, null);
      i = Ie(
        t,
        /*div_elementresize_handler*/
        r[12].bind(t)
      ), s = !0;
    },
    p(d, c) {
      c[0] & /*renderItemLabels, hooks, anchorEnabled, onIconClick*/
      71 && (l = /*renderItemLabels*/
      d[1], Z(), e = ge(e, c, h, 1, d, l, a, t, we, X, null, N), Y()), c[0] & /*itemsVisible*/
      32 && H(
        t,
        "opacity",
        /*itemsVisible*/
        d[5] ? 1 : 0
      );
    },
    i(d) {
      if (!s) {
        for (let c = 0; c < l.length; c += 1)
          w(e[c]);
        s = !0;
      }
    },
    o(d) {
      for (let c = 0; c < e.length; c += 1)
        M(e[c]);
      s = !1;
    },
    d(d) {
      d && v(t);
      for (let c = 0; c < e.length; c += 1)
        e[c].d();
      i();
    }
  };
}
let Te = 11;
function De(r, t, e) {
  const { Vector3: a } = Ce;
  let { five: i } = t, { modelOcclusionEnable: s } = t, { itemLabels: l } = t, { hooks: h } = t, { displayStrategyType: d } = t, { maxVisibleDistance: c } = t, _ = null, g = null, G = (i == null ? void 0 : i.currentMode) === P.Mode.Panorama, C, E, x = [], F = !0;
  const J = (n, u) => {
    const p = n.camera.position.clone(), f = new a(u.modelPosition[0], u.modelPosition[1], u.modelPosition[2]), o = f.distanceTo(p);
    return c !== void 0 && n.state.mode === P.Mode.Panorama && o > c ? !1 : A(n, f.clone().sub(p).normalize(), p, o);
  }, K = (n) => {
    const { camera: u, model: p } = i, { x: f, y: o, z: m } = n.clone().project(u), b = (f + 1) / 2, I = (2 - (o + 1)) / 2;
    return !!(Math.abs(m) < 1 && [b, I].every((S) => S < 1 && S >= 0));
  }, Q = (n, u) => {
    const p = new a(u.modelPosition[0], u.modelPosition[1], u.modelPosition[2]), f = n.project2d(p), o = f == null ? void 0 : f.x, m = f == null ? void 0 : f.y;
    return [o, m];
  }, $ = (n, u) => {
    const p = u.map((o) => {
      if (n.state.panoIndex !== o.panoIndex)
        return y(k({}, o), { visible: !1 });
      const m = Q(n, o);
      o.name.length * Te;
      const b = Oe(o.modelPosition[1], d), I = n.currentMode === P.Mode.Panorama ? K(new a(o.position[0], o.position[1], o.position[2])) : !0, O = s ? J(n, o) : !1, z = I && !O;
      if (!z)
        return y(k({}, o), { visible: z });
      x.push(m);
      const U = Ve(m);
      return y(k({}, o), {
        visible: z,
        transform: U,
        strokeLength: b
      });
    }), f = p.filter(({ visible: o }) => o).map((o) => ({
      itemLabelItem: o,
      distance: new a(o.modelPosition[0], o.modelPosition[1], o.modelPosition[2]).clone().distanceTo(n.camera.position)
    })).sort((o, m) => o.distance - m.distance);
    return p.map((o) => {
      const m = f.findIndex((b) => b.itemLabelItem.id === o.id);
      return m !== void 0 ? y(k({}, o), { zIndex: m * 10 }) : o;
    });
  }, L = () => {
    x = [], e(1, g = $(i, g));
  }, T = () => {
    e(5, F = !1), ee();
  }, ee = Fe(
    () => {
      e(5, F = !0), L();
    },
    300
  ), D = () => {
    i.once("renderFrame", L);
  }, te = () => {
    window.addEventListener("resize", D, !1);
  }, oe = () => {
    _ !== l && (e(1, g = B(l)), _ = l, L());
  }, ne = (n, u) => {
    let p = [];
    for (const { position: o, panoIndex: m } of u) {
      const b = n.distanceTo(o);
      (c === void 0 || b <= c || i.state.mode !== P.Mode.Panorama) && p.push({ panoIndex: m, obVector: o, distance: b });
    }
    p = p.sort((o, m) => o.distance - m.distance);
    let f;
    for (const o of p) {
      const { obVector: m, distance: b, panoIndex: I } = o;
      if (!A(i, n, m, b)) {
        f = I;
        break;
      }
    }
    return typeof f == "number" ? u[f] : void 0;
  }, se = (n) => {
    if (i.state.mode === P.Mode.Panorama)
      return;
    const u = i.work.observers, p = new a().fromArray(n.position), f = ne(p, u);
    if (f && (n.observerIndex = f.panoIndex), typeof n.observerIndex == "number") {
      const o = u[n.observerIndex], m = p.clone().sub(o.position).normalize(), b = {
        longitude: Math.PI + Math.atan2(m.x, m.z),
        latitude: Math.acos(m.y / m.length()) - Math.PI / 2
      };
      i.setState(y(k({}, b), {
        mode: P.Mode.Panorama,
        panoIndex: n.observerIndex
      })), i.once("initAnimationEnded", () => {
        e(1, g = g.map((I) => y(k({}, I), {
          isFold: I.id !== n.id
        }))), i.once("cameraUpdate", () => {
          e(1, g = g.map((I) => y(k({}, I), { isFold: !1 })));
        });
      });
    }
  };
  ke(() => {
    oe();
  }), ye(() => {
    e(1, g = B(l)), _ = l, L(), te(), i.on("cameraUpdate", T);
  }), Pe(() => {
    i.off("cameraUpdate", T), window.removeEventListener("resize", D, !1);
  });
  function ie() {
    C = this.clientWidth, E = this.clientHeight, e(3, C), e(4, E);
  }
  return r.$$set = (n) => {
    "five" in n && e(7, i = n.five), "modelOcclusionEnable" in n && e(8, s = n.modelOcclusionEnable), "itemLabels" in n && e(9, l = n.itemLabels), "hooks" in n && e(0, h = n.hooks), "displayStrategyType" in n && e(10, d = n.displayStrategyType), "maxVisibleDistance" in n && e(11, c = n.maxVisibleDistance);
  }, [
    h,
    g,
    G,
    C,
    E,
    F,
    se,
    i,
    s,
    l,
    d,
    c,
    ie
  ];
}
class Ye extends me {
  constructor(t) {
    super(), fe(
      this,
      t,
      De,
      xe,
      ue,
      {
        five: 7,
        modelOcclusionEnable: 8,
        itemLabels: 9,
        hooks: 0,
        displayStrategyType: 10,
        maxVisibleDistance: 11
      },
      ve,
      [-1, -1]
    );
  }
}
export {
  Ye as default
};
