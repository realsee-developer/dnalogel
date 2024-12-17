var Z = Object.defineProperty, $ = Object.defineProperties;
var ee = Object.getOwnPropertyDescriptors;
var A = Object.getOwnPropertySymbols;
var te = Object.prototype.hasOwnProperty, ne = Object.prototype.propertyIsEnumerable;
var O = (o, t, e) => t in o ? Z(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, k = (o, t) => {
  for (var e in t || (t = {}))
    te.call(t, e) && O(o, e, t[e]);
  if (A)
    for (var e of A(t))
      ne.call(t, e) && O(o, e, t[e]);
  return o;
}, I = (o, t) => $(o, ee(t));
import { SvelteComponent as oe, init as se, safe_not_equal as ie, append_styles as re, element as le, attr as ae, add_render_callback as ce, set_style as U, insert as V, add_resize_listener as me, update_keyed_each as de, check_outros as ue, transition_in as W, transition_out as G, detach as Y, beforeUpdate as fe, onMount as he, onDestroy as _e, empty as Le, create_component as be, mount_component as ye, destroy_component as ge, group_outros as pe, outro_and_destroy_block as ke } from "../vendor/svelte/internal/index.js";
import { DISPLAY_STRATEGY_TYPE as E } from "./typings.js";
import * as Ie from "three";
import Ee from "./ItemLabelItem.js";
import { debounce as we } from "../shared-utils/debounce.js";
import "../vendor/classnames/index.js";
function ze(o) {
  re(o, "svelte-f82itz", ".item-labels-container.svelte-f82itz{width:100%;height:100%;position:relative}");
}
function C(o, t, e) {
  const c = o.slice();
  return c[26] = t[e], c;
}
function S(o, t) {
  let e, c, h;
  return c = new Ee({
    props: {
      itemLabel: (
        /*itemLabelItem*/
        t[26]
      ),
      hooks: (
        /*hooks*/
        t[0]
      )
    }
  }), {
    key: o,
    first: null,
    c() {
      e = Le(), be(c.$$.fragment), this.first = e;
    },
    m(r, m) {
      V(r, e, m), ye(c, r, m), h = !0;
    },
    p(r, m) {
      t = r;
      const d = {};
      m & /*renderItemLabels*/
      2 && (d.itemLabel = /*itemLabelItem*/
      t[26]), m & /*hooks*/
      1 && (d.hooks = /*hooks*/
      t[0]), c.$set(d);
    },
    i(r) {
      h || (W(c.$$.fragment, r), h = !0);
    },
    o(r) {
      G(c.$$.fragment, r), h = !1;
    },
    d(r) {
      r && Y(e), ge(c, r);
    }
  };
}
function Pe(o) {
  let t, e = [], c = /* @__PURE__ */ new Map(), h, r, m = (
    /*renderItemLabels*/
    o[1]
  );
  const d = (l) => (
    /*itemLabelItem*/
    l[26].id
  );
  for (let l = 0; l < m.length; l += 1) {
    let s = C(o, m, l), _ = d(s);
    c.set(_, e[l] = S(_, s));
  }
  return {
    c() {
      t = le("div");
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      ae(t, "class", "item-labels-container svelte-f82itz"), ce(() => (
        /*div_elementresize_handler*/
        o[9].call(t)
      )), U(
        t,
        "opacity",
        /*itemsVisible*/
        o[4] ? 1 : 0
      );
    },
    m(l, s) {
      V(l, t, s);
      for (let _ = 0; _ < e.length; _ += 1)
        e[_] && e[_].m(t, null);
      h = me(
        t,
        /*div_elementresize_handler*/
        o[9].bind(t)
      ), r = !0;
    },
    p(l, [s]) {
      s & /*renderItemLabels, hooks*/
      3 && (m = /*renderItemLabels*/
      l[1], pe(), e = de(e, s, d, 1, l, m, c, t, ke, S, null, C), ue()), s & /*itemsVisible*/
      16 && U(
        t,
        "opacity",
        /*itemsVisible*/
        l[4] ? 1 : 0
      );
    },
    i(l) {
      if (!r) {
        for (let s = 0; s < m.length; s += 1)
          W(e[s]);
        r = !0;
      }
    },
    o(l) {
      for (let s = 0; s < e.length; s += 1)
        G(e[s]);
      r = !1;
    },
    d(l) {
      l && Y(t);
      for (let s = 0; s < e.length; s += 1)
        e[s].d();
      h();
    }
  };
}
let D = 26, Te = 11;
function Re(o, t, e) {
  const { Raycaster: c, Vector3: h } = Ie;
  let { five: r } = t, { modelOcclusionEnable: m } = t, { itemLabels: d } = t, { hooks: l } = t, { displayStrategyType: s } = t, _ = null, y = null, w, z, g = [], P = !0;
  const x = (n, f) => {
    const L = new c(), a = n.camera.position.clone(), i = new h().fromArray(f.modelPosition), u = i.distanceTo(a);
    L.set(a.clone(), i.clone().sub(a).normalize());
    const [b] = n.model.intersectRaycaster(L);
    return !(b && b.distance + 1 < u);
  }, F = (n, f) => {
    const L = new h(f.modelPosition[0], f.modelPosition[1], f.modelPosition[2]), a = n.project2d(L), i = a == null ? void 0 : a.x, u = a == null ? void 0 : a.y;
    return [i, u];
  }, j = (n) => `translate(${n[0]}px, ${n[1]}px)`, q = (n, f) => g.length === 0 ? !1 : !!g.find((a) => n[0] >= a[0] - f && n[0] <= a[0] + f || n[1] >= a[1] - D && n[1] <= a[1] + D);
  function H(n, f) {
    switch (f) {
      case E.SMALL:
        return Math.ceil(-27.78 * n + 85);
      case E.MIDLLE:
        return Math.ceil(-38.9 * n + 130);
      case E.LARGE:
        return Math.ceil(-44.44 * n + 140);
      case E.EXTRA_LARGE:
        return Math.ceil(-92.59 * n + 300);
    }
  }
  const X = (n, f) => {
    const L = f.map((i) => {
      const u = F(n, i), b = i.name.length * Te, M = H(i.modelPosition[1], s), T = (m ? x(n, i) : !0) && !q([u[0], u[1] + M], b);
      if (!T)
        return I(k({}, i), { visible: T });
      g.push(u);
      const Q = j(u);
      return I(k({}, i), {
        visible: T,
        transform: Q,
        strokeLength: M
      });
    }), a = L.filter(({ visible: i }) => i).map((i) => ({
      itemLabelItem: i,
      distance: new h(i.modelPosition[0], i.modelPosition[1], i.modelPosition[2]).clone().distanceTo(n.camera.position)
    })).sort((i, u) => i.distance - u.distance);
    return L.map((i) => {
      const u = a.findIndex((b) => b.itemLabelItem.id === i.id);
      return u !== void 0 ? I(k({}, i), { zIndex: u * 10 }) : i;
    });
  }, p = () => {
    g = [], e(1, y = X(r, y));
  };
  fe(() => {
    K();
  });
  const R = () => {
    e(4, P = !1), B();
  };
  he(() => {
    e(1, y = d), _ = d, p(), J(), r.on("cameraUpdate", R);
  });
  const B = we(
    () => {
      e(4, P = !0), p();
    },
    300
  ), J = () => {
    window.addEventListener("resize", v, !1);
  }, K = () => {
    _ !== d && (e(1, y = d), _ = d, p());
  }, v = () => {
    r.once("renderFrame", p);
  };
  _e(() => {
    r.off("cameraUpdate", R), window.removeEventListener("resize", v, !1);
  });
  function N() {
    w = this.clientWidth, z = this.clientHeight, e(2, w), e(3, z);
  }
  return o.$$set = (n) => {
    "five" in n && e(5, r = n.five), "modelOcclusionEnable" in n && e(6, m = n.modelOcclusionEnable), "itemLabels" in n && e(7, d = n.itemLabels), "hooks" in n && e(0, l = n.hooks), "displayStrategyType" in n && e(8, s = n.displayStrategyType);
  }, [
    l,
    y,
    w,
    z,
    P,
    r,
    m,
    d,
    s,
    N
  ];
}
class De extends oe {
  constructor(t) {
    super(), se(
      this,
      t,
      Re,
      Pe,
      ie,
      {
        five: 5,
        modelOcclusionEnable: 6,
        itemLabels: 7,
        hooks: 0,
        displayStrategyType: 8
      },
      ze
    );
  }
}
export {
  De as default
};
