var M = Object.defineProperty, R = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var d = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty, q = Object.prototype.propertyIsEnumerable;
var b = (l, e, o) => e in l ? M(l, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : l[e] = o, k = (l, e) => {
  for (var o in e || (e = {}))
    T.call(e, o) && b(l, o, e[o]);
  if (d)
    for (var o of d(e))
      q.call(e, o) && b(l, o, e[o]);
  return l;
}, v = (l, e) => R(l, B(e));
import { SvelteComponent as C, init as F, safe_not_equal as H, append_styles as P, element as S, attr as m, insert as x, transition_in as u, group_outros as w, check_outros as D, transition_out as s, detach as I, destroy_each as W, svg_element as j, create_component as p, mount_component as h, destroy_component as g } from "../../../vendor/svelte/internal/index.js";
import { formatFloorplanPoint as z } from "../../utils/formatPosition.js";
import { RoomMaterial_0 as A } from "./RoomMaterial_0.js";
import { RoomMaterial_1 as E } from "./RoomMaterial_1.js";
import { RoomMaterial_2 as G } from "./RoomMaterial_2.js";
function J(l) {
  P(l, "svelte-1dykexu", ".floorplan-plugin__room-material.svelte-1dykexu{position:absolute;left:0;top:0;width:100%;height:100%}svg.svelte-1dykexu{position:absolute;left:0;top:0;width:100%;height:100%;overflow:visible}");
}
function y(l, e, o) {
  const t = l.slice();
  return t[5] = e[o], t;
}
function K(l) {
  let e, o;
  return e = new E({ props: { path: (
    /*room*/
    l[5].path
  ) } }), {
    c() {
      p(e.$$.fragment);
    },
    m(t, n) {
      h(e, t, n), o = !0;
    },
    p(t, n) {
      const i = {};
      n & /*rooms*/
      1 && (i.path = /*room*/
      t[5].path), e.$set(i);
    },
    i(t) {
      o || (u(e.$$.fragment, t), o = !0);
    },
    o(t) {
      s(e.$$.fragment, t), o = !1;
    },
    d(t) {
      g(e, t);
    }
  };
}
function L(l) {
  let e, o;
  return e = new G({ props: { path: (
    /*room*/
    l[5].path
  ) } }), {
    c() {
      p(e.$$.fragment);
    },
    m(t, n) {
      h(e, t, n), o = !0;
    },
    p(t, n) {
      const i = {};
      n & /*rooms*/
      1 && (i.path = /*room*/
      t[5].path), e.$set(i);
    },
    i(t) {
      o || (u(e.$$.fragment, t), o = !0);
    },
    o(t) {
      s(e.$$.fragment, t), o = !1;
    },
    d(t) {
      g(e, t);
    }
  };
}
function N(l) {
  let e, o;
  return e = new A({ props: { path: (
    /*room*/
    l[5].path
  ) } }), {
    c() {
      p(e.$$.fragment);
    },
    m(t, n) {
      h(e, t, n), o = !0;
    },
    p(t, n) {
      const i = {};
      n & /*rooms*/
      1 && (i.path = /*room*/
      t[5].path), e.$set(i);
    },
    i(t) {
      o || (u(e.$$.fragment, t), o = !0);
    },
    o(t) {
      s(e.$$.fragment, t), o = !1;
    },
    d(t) {
      g(e, t);
    }
  };
}
function $(l) {
  let e, o, t, n;
  const i = [N, L, K], a = [];
  function f(r, c) {
    return (
      /*room*/
      r[5].floorType === 1 ? 0 : (
        /*room*/
        r[5].floorType === 0 ? 1 : 2
      )
    );
  }
  return o = f(l), t = a[o] = i[o](l), {
    c() {
      e = j("svg"), t.c(), m(e, "width", "100%"), m(e, "height", "100%"), m(e, "viewBox", `0 0 ${/*boundingWidth*/
      l[1]} ${/*boundingHeight*/
      l[2]}`), m(e, "class", "svelte-1dykexu");
    },
    m(r, c) {
      x(r, e, c), a[o].m(e, null), n = !0;
    },
    p(r, c) {
      let _ = o;
      o = f(r), o === _ ? a[o].p(r, c) : (w(), s(a[_], 1, 1, () => {
        a[_] = null;
      }), D(), t = a[o], t ? t.p(r, c) : (t = a[o] = i[o](r), t.c()), u(t, 1), t.m(e, null));
    },
    i(r) {
      n || (u(t), n = !0);
    },
    o(r) {
      s(t), n = !1;
    },
    d(r) {
      r && I(e), a[o].d();
    }
  };
}
function O(l) {
  let e, o, t = (
    /*rooms*/
    l[0]
  ), n = [];
  for (let a = 0; a < t.length; a += 1)
    n[a] = $(y(l, t, a));
  const i = (a) => s(n[a], 1, 1, () => {
    n[a] = null;
  });
  return {
    c() {
      e = S("div");
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      m(e, "class", "floorplan-plugin__room-material svelte-1dykexu");
    },
    m(a, f) {
      x(a, e, f);
      for (let r = 0; r < n.length; r += 1)
        n[r] && n[r].m(e, null);
      o = !0;
    },
    p(a, [f]) {
      if (f & /*boundingWidth, boundingHeight, rooms*/
      7) {
        t = /*rooms*/
        a[0];
        let r;
        for (r = 0; r < t.length; r += 1) {
          const c = y(a, t, r);
          n[r] ? (n[r].p(c, f), u(n[r], 1)) : (n[r] = $(c), n[r].c(), u(n[r], 1), n[r].m(e, null));
        }
        for (w(), r = t.length; r < n.length; r += 1)
          i(r);
        D();
      }
    },
    i(a) {
      if (!o) {
        for (let f = 0; f < t.length; f += 1)
          u(n[f]);
        o = !0;
      }
    },
    o(a) {
      n = n.filter(Boolean);
      for (let f = 0; f < n.length; f += 1)
        s(n[f]);
      o = !1;
    },
    d(a) {
      a && I(e), W(n, a);
    }
  };
}
function Q(l, e, o) {
  let t, { floorIndex: n } = e, { floorplanData: i } = e;
  const a = i.bounding.max.x - i.bounding.min.x, f = i.bounding.max.y - i.bounding.min.y;
  return l.$$set = (r) => {
    "floorIndex" in r && o(3, n = r.floorIndex), "floorplanData" in r && o(4, i = r.floorplanData);
  }, l.$$.update = () => {
    l.$$.dirty & /*floorplanData, floorIndex*/
    24 && o(0, t = i.floorDatas[n].rooms.map((r) => v(k({}, r), {
      path: r.path.map((c) => z(c, i.bounding))
    })));
  }, [t, a, f, n, i];
}
class te extends C {
  constructor(e) {
    super(), F(this, e, Q, O, H, { floorIndex: 3, floorplanData: 4 }, J);
  }
}
export {
  te as RoomMaterial
};
