var T = Object.defineProperty, S = Object.defineProperties;
var q = Object.getOwnPropertyDescriptors;
var E = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
var $ = (r, e, n) => e in r ? T(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n, R = (r, e) => {
  for (var n in e || (e = {}))
    C.call(e, n) && $(r, n, e[n]);
  if (E)
    for (var n of E(e))
      F.call(e, n) && $(r, n, e[n]);
  return r;
}, z = (r, e) => S(r, q(e));
import { SvelteComponent as H, init as N, safe_not_equal as P, append_styles as W, element as j, attr as p, insert as d, transition_in as c, group_outros as A, check_outros as D, transition_out as h, detach as g, destroy_each as G, svg_element as B, space as J, empty as K, create_component as k, mount_component as v, destroy_component as y } from "../../../vendor/svelte/internal/index.js";
import { formatFloorplanPoint as O } from "../../utils/formatPosition.js";
import { RoomMaterial_0 as Q } from "./RoomMaterial_0.js";
import { RoomMaterial_1 as U } from "./RoomMaterial_1.js";
import { RoomMaterial_2 as V } from "./RoomMaterial_2.js";
import { RoomTriangle as X } from "./RoomTriangle.js";
function Y(r) {
  W(r, "svelte-1dykexu", ".floorplan-plugin__room-material.svelte-1dykexu{position:absolute;left:0;top:0;width:100%;height:100%}svg.svelte-1dykexu{position:absolute;left:0;top:0;width:100%;height:100%;overflow:visible}");
}
function I(r, e, n) {
  const o = r.slice();
  return o[8] = e[n], o;
}
function Z(r) {
  let e, n;
  return e = new U({ props: { path: (
    /*room*/
    r[8].path
  ) } }), {
    c() {
      k(e.$$.fragment);
    },
    m(o, t) {
      v(e, o, t), n = !0;
    },
    p(o, t) {
      const m = {};
      t & /*rooms*/
      1 && (m.path = /*room*/
      o[8].path), e.$set(m);
    },
    i(o) {
      n || (c(e.$$.fragment, o), n = !0);
    },
    o(o) {
      h(e.$$.fragment, o), n = !1;
    },
    d(o) {
      y(e, o);
    }
  };
}
function x(r) {
  let e, n;
  return e = new V({ props: { path: (
    /*room*/
    r[8].path
  ) } }), {
    c() {
      k(e.$$.fragment);
    },
    m(o, t) {
      v(e, o, t), n = !0;
    },
    p(o, t) {
      const m = {};
      t & /*rooms*/
      1 && (m.path = /*room*/
      o[8].path), e.$set(m);
    },
    i(o) {
      n || (c(e.$$.fragment, o), n = !0);
    },
    o(o) {
      h(e.$$.fragment, o), n = !1;
    },
    d(o) {
      y(e, o);
    }
  };
}
function ee(r) {
  let e, n;
  return e = new Q({ props: { path: (
    /*room*/
    r[8].path
  ) } }), {
    c() {
      k(e.$$.fragment);
    },
    m(o, t) {
      v(e, o, t), n = !0;
    },
    p(o, t) {
      const m = {};
      t & /*rooms*/
      1 && (m.path = /*room*/
      o[8].path), e.$set(m);
    },
    i(o) {
      n || (c(e.$$.fragment, o), n = !0);
    },
    o(o) {
      h(e.$$.fragment, o), n = !1;
    },
    d(o) {
      y(e, o);
    }
  };
}
function L(r) {
  let e, n, o;
  return n = new X({
    props: { dimension: (
      /*room*/
      r[8].dimension
    ) }
  }), {
    c() {
      e = B("svg"), k(n.$$.fragment), p(e, "width", "100%"), p(e, "height", "100%"), p(e, "viewBox", `0 0 ${/*boundingWidth*/
      r[1]} ${/*boundingHeight*/
      r[2]}`), p(e, "class", "svelte-1dykexu");
    },
    m(t, m) {
      d(t, e, m), v(n, e, null), o = !0;
    },
    p(t, m) {
      const l = {};
      m & /*rooms*/
      1 && (l.dimension = /*room*/
      t[8].dimension), n.$set(l);
    },
    i(t) {
      o || (c(n.$$.fragment, t), o = !0);
    },
    o(t) {
      h(n.$$.fragment, t), o = !1;
    },
    d(t) {
      t && g(e), y(n);
    }
  };
}
function M(r) {
  let e, n, o, t, m = (
    /*allowShowArrow*/
    r[3] && /*room*/
    r[8].dimension && Array.isArray(
      /*room*/
      r[8].dimension.vertical
    ) && /*room*/
    r[8].dimension.vertical.length > 0 && Array.isArray(
      /*room*/
      r[8].dimension.horizontal
    ) && /*room*/
    r[8].dimension.horizontal.length > 0
  ), l, s;
  const f = [ee, x, Z], u = [];
  function b(a, _) {
    return (
      /*room*/
      a[8].floorType === 1 ? 0 : (
        /*room*/
        a[8].floorType === 0 ? 1 : 2
      )
    );
  }
  n = b(r), o = u[n] = f[n](r);
  let i = m && L(r);
  return {
    c() {
      e = B("svg"), o.c(), t = J(), i && i.c(), l = K(), p(e, "width", "100%"), p(e, "height", "100%"), p(e, "viewBox", `0 0 ${/*boundingWidth*/
      r[1]} ${/*boundingHeight*/
      r[2]}`), p(e, "class", "svelte-1dykexu");
    },
    m(a, _) {
      d(a, e, _), u[n].m(e, null), d(a, t, _), i && i.m(a, _), d(a, l, _), s = !0;
    },
    p(a, _) {
      let w = n;
      n = b(a), n === w ? u[n].p(a, _) : (A(), h(u[w], 1, 1, () => {
        u[w] = null;
      }), D(), o = u[n], o ? o.p(a, _) : (o = u[n] = f[n](a), o.c()), c(o, 1), o.m(e, null)), _ & /*rooms*/
      1 && (m = /*allowShowArrow*/
      a[3] && /*room*/
      a[8].dimension && Array.isArray(
        /*room*/
        a[8].dimension.vertical
      ) && /*room*/
      a[8].dimension.vertical.length > 0 && Array.isArray(
        /*room*/
        a[8].dimension.horizontal
      ) && /*room*/
      a[8].dimension.horizontal.length > 0), m ? i ? (i.p(a, _), _ & /*rooms*/
      1 && c(i, 1)) : (i = L(a), i.c(), c(i, 1), i.m(l.parentNode, l)) : i && (A(), h(i, 1, 1, () => {
        i = null;
      }), D());
    },
    i(a) {
      s || (c(o), c(i), s = !0);
    },
    o(a) {
      h(o), h(i), s = !1;
    },
    d(a) {
      a && g(e), u[n].d(), a && g(t), i && i.d(a), a && g(l);
    }
  };
}
function oe(r) {
  let e, n, o = (
    /*rooms*/
    r[0]
  ), t = [];
  for (let l = 0; l < o.length; l += 1)
    t[l] = M(I(r, o, l));
  const m = (l) => h(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      e = j("div");
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      p(e, "class", "floorplan-plugin__room-material svelte-1dykexu");
    },
    m(l, s) {
      d(l, e, s);
      for (let f = 0; f < t.length; f += 1)
        t[f] && t[f].m(e, null);
      n = !0;
    },
    p(l, [s]) {
      if (s & /*boundingWidth, boundingHeight, rooms, allowShowArrow, Array*/
      15) {
        o = /*rooms*/
        l[0];
        let f;
        for (f = 0; f < o.length; f += 1) {
          const u = I(l, o, f);
          t[f] ? (t[f].p(u, s), c(t[f], 1)) : (t[f] = M(u), t[f].c(), c(t[f], 1), t[f].m(e, null));
        }
        for (A(), f = o.length; f < t.length; f += 1)
          m(f);
        D();
      }
    },
    i(l) {
      if (!n) {
        for (let s = 0; s < o.length; s += 1)
          c(t[s]);
        n = !0;
      }
    },
    o(l) {
      t = t.filter(Boolean);
      for (let s = 0; s < t.length; s += 1)
        h(t[s]);
      n = !1;
    },
    d(l) {
      l && g(e), G(t, l);
    }
  };
}
function ne(r, e, n) {
  let o, { roomLabelsEnable: t } = e, { roomDimensionEnable: m } = e, { floorIndex: l } = e, { floorplanData: s } = e;
  const f = s.bounding.max.x - s.bounding.min.x, u = s.bounding.max.y - s.bounding.min.y, b = t && m;
  return r.$$set = (i) => {
    "roomLabelsEnable" in i && n(4, t = i.roomLabelsEnable), "roomDimensionEnable" in i && n(5, m = i.roomDimensionEnable), "floorIndex" in i && n(6, l = i.floorIndex), "floorplanData" in i && n(7, s = i.floorplanData);
  }, r.$$.update = () => {
    r.$$.dirty & /*floorplanData, floorIndex*/
    192 && n(0, o = s.floorDatas[l].rooms.map((i) => z(R({}, i), {
      path: i.path.map((a) => O(a, s.bounding))
    })));
  }, [
    o,
    f,
    u,
    b,
    t,
    m,
    l,
    s
  ];
}
class me extends H {
  constructor(e) {
    super(), N(
      this,
      e,
      ne,
      oe,
      P,
      {
        roomLabelsEnable: 4,
        roomDimensionEnable: 5,
        floorIndex: 6,
        floorplanData: 7
      },
      Y
    );
  }
}
export {
  me as RoomMaterial
};
