var T = Object.defineProperty, S = Object.defineProperties;
var q = Object.getOwnPropertyDescriptors;
var D = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
var E = (i, e, n) => e in i ? T(i, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : i[e] = n, B = (i, e) => {
  for (var n in e || (e = {}))
    C.call(e, n) && E(i, n, e[n]);
  if (D)
    for (var n of D(e))
      F.call(e, n) && E(i, n, e[n]);
  return i;
}, R = (i, e) => S(i, q(e));
import { SvelteComponent as H, init as N, safe_not_equal as P, append_styles as W, element as j, attr as h, insert as d, transition_in as _, group_outros as $, check_outros as A, transition_out as g, detach as p, destroy_each as G, svg_element as M, space as J, empty as K, create_component as v, mount_component as y, destroy_component as k } from "../../../vendor/svelte/internal/index.js";
import { formatFloorplanPoint as O } from "../../utils/formatPosition.js";
import { RoomMaterial_0 as Q } from "./RoomMaterial_0.js";
import { RoomMaterial_1 as U } from "./RoomMaterial_1.js";
import { RoomMaterial_2 as V } from "./RoomMaterial_2.js";
import { RoomTriangle as X } from "./RoomTriangle.js";
function Y(i) {
  W(i, "svelte-1dykexu", ".floorplan-plugin__room-material.svelte-1dykexu{position:absolute;left:0;top:0;width:100%;height:100%}svg.svelte-1dykexu{position:absolute;left:0;top:0;width:100%;height:100%;overflow:visible}");
}
function z(i, e, n) {
  const o = i.slice();
  return o[8] = e[n], o;
}
function Z(i) {
  let e, n;
  return e = new U({ props: { path: (
    /*room*/
    i[8].path
  ) } }), {
    c() {
      v(e.$$.fragment);
    },
    m(o, t) {
      y(e, o, t), n = !0;
    },
    p(o, t) {
      const r = {};
      t & /*rooms*/
      2 && (r.path = /*room*/
      o[8].path), e.$set(r);
    },
    i(o) {
      n || (_(e.$$.fragment, o), n = !0);
    },
    o(o) {
      g(e.$$.fragment, o), n = !1;
    },
    d(o) {
      k(e, o);
    }
  };
}
function x(i) {
  let e, n;
  return e = new V({ props: { path: (
    /*room*/
    i[8].path
  ) } }), {
    c() {
      v(e.$$.fragment);
    },
    m(o, t) {
      y(e, o, t), n = !0;
    },
    p(o, t) {
      const r = {};
      t & /*rooms*/
      2 && (r.path = /*room*/
      o[8].path), e.$set(r);
    },
    i(o) {
      n || (_(e.$$.fragment, o), n = !0);
    },
    o(o) {
      g(e.$$.fragment, o), n = !1;
    },
    d(o) {
      k(e, o);
    }
  };
}
function ee(i) {
  let e, n;
  return e = new Q({ props: { path: (
    /*room*/
    i[8].path
  ) } }), {
    c() {
      v(e.$$.fragment);
    },
    m(o, t) {
      y(e, o, t), n = !0;
    },
    p(o, t) {
      const r = {};
      t & /*rooms*/
      2 && (r.path = /*room*/
      o[8].path), e.$set(r);
    },
    i(o) {
      n || (_(e.$$.fragment, o), n = !0);
    },
    o(o) {
      g(e.$$.fragment, o), n = !1;
    },
    d(o) {
      k(e, o);
    }
  };
}
function I(i) {
  let e, n, o, t;
  return n = new X({
    props: { dimension: (
      /*room*/
      i[8].dimension
    ) }
  }), {
    c() {
      e = M("svg"), v(n.$$.fragment), h(e, "width", "100%"), h(e, "height", "100%"), h(e, "viewBox", o = `${/*floorplanData*/
      i[0].bounding.min.x} ${/*floorplanData*/
      i[0].bounding.min.y} ${/*boundingWidth*/
      i[2]} ${/*boundingHeight*/
      i[3]}`), h(e, "class", "svelte-1dykexu");
    },
    m(r, l) {
      d(r, e, l), y(n, e, null), t = !0;
    },
    p(r, l) {
      const m = {};
      l & /*rooms*/
      2 && (m.dimension = /*room*/
      r[8].dimension), n.$set(m), (!t || l & /*floorplanData*/
      1 && o !== (o = `${/*floorplanData*/
      r[0].bounding.min.x} ${/*floorplanData*/
      r[0].bounding.min.y} ${/*boundingWidth*/
      r[2]} ${/*boundingHeight*/
      r[3]}`)) && h(e, "viewBox", o);
    },
    i(r) {
      t || (_(n.$$.fragment, r), t = !0);
    },
    o(r) {
      g(n.$$.fragment, r), t = !1;
    },
    d(r) {
      r && p(e), k(n);
    }
  };
}
function L(i) {
  let e, n, o, t, r = (
    /*allowShowArrow*/
    i[4] && /*room*/
    i[8].dimension && Array.isArray(
      /*room*/
      i[8].dimension.vertical
    ) && /*room*/
    i[8].dimension.vertical.length > 0 && Array.isArray(
      /*room*/
      i[8].dimension.horizontal
    ) && /*room*/
    i[8].dimension.horizontal.length > 0
  ), l, m;
  const f = [ee, x, Z], u = [];
  function b(s, c) {
    return (
      /*room*/
      s[8].floorType === 1 ? 0 : (
        /*room*/
        s[8].floorType === 0 ? 1 : 2
      )
    );
  }
  n = b(i), o = u[n] = f[n](i);
  let a = r && I(i);
  return {
    c() {
      e = M("svg"), o.c(), t = J(), a && a.c(), l = K(), h(e, "width", "100%"), h(e, "height", "100%"), h(e, "viewBox", `0 0 ${/*boundingWidth*/
      i[2]} ${/*boundingHeight*/
      i[3]}`), h(e, "class", "svelte-1dykexu");
    },
    m(s, c) {
      d(s, e, c), u[n].m(e, null), d(s, t, c), a && a.m(s, c), d(s, l, c), m = !0;
    },
    p(s, c) {
      let w = n;
      n = b(s), n === w ? u[n].p(s, c) : ($(), g(u[w], 1, 1, () => {
        u[w] = null;
      }), A(), o = u[n], o ? o.p(s, c) : (o = u[n] = f[n](s), o.c()), _(o, 1), o.m(e, null)), c & /*rooms*/
      2 && (r = /*allowShowArrow*/
      s[4] && /*room*/
      s[8].dimension && Array.isArray(
        /*room*/
        s[8].dimension.vertical
      ) && /*room*/
      s[8].dimension.vertical.length > 0 && Array.isArray(
        /*room*/
        s[8].dimension.horizontal
      ) && /*room*/
      s[8].dimension.horizontal.length > 0), r ? a ? (a.p(s, c), c & /*rooms*/
      2 && _(a, 1)) : (a = I(s), a.c(), _(a, 1), a.m(l.parentNode, l)) : a && ($(), g(a, 1, 1, () => {
        a = null;
      }), A());
    },
    i(s) {
      m || (_(o), _(a), m = !0);
    },
    o(s) {
      g(o), g(a), m = !1;
    },
    d(s) {
      s && p(e), u[n].d(), s && p(t), a && a.d(s), s && p(l);
    }
  };
}
function oe(i) {
  let e, n, o = (
    /*rooms*/
    i[1]
  ), t = [];
  for (let l = 0; l < o.length; l += 1)
    t[l] = L(z(i, o, l));
  const r = (l) => g(t[l], 1, 1, () => {
    t[l] = null;
  });
  return {
    c() {
      e = j("div");
      for (let l = 0; l < t.length; l += 1)
        t[l].c();
      h(e, "class", "floorplan-plugin__room-material svelte-1dykexu");
    },
    m(l, m) {
      d(l, e, m);
      for (let f = 0; f < t.length; f += 1)
        t[f] && t[f].m(e, null);
      n = !0;
    },
    p(l, [m]) {
      if (m & /*floorplanData, boundingWidth, boundingHeight, rooms, allowShowArrow, Array*/
      31) {
        o = /*rooms*/
        l[1];
        let f;
        for (f = 0; f < o.length; f += 1) {
          const u = z(l, o, f);
          t[f] ? (t[f].p(u, m), _(t[f], 1)) : (t[f] = L(u), t[f].c(), _(t[f], 1), t[f].m(e, null));
        }
        for ($(), f = o.length; f < t.length; f += 1)
          r(f);
        A();
      }
    },
    i(l) {
      if (!n) {
        for (let m = 0; m < o.length; m += 1)
          _(t[m]);
        n = !0;
      }
    },
    o(l) {
      t = t.filter(Boolean);
      for (let m = 0; m < t.length; m += 1)
        g(t[m]);
      n = !1;
    },
    d(l) {
      l && p(e), G(t, l);
    }
  };
}
function ne(i, e, n) {
  let o, { roomLabelsEnable: t } = e, { roomDimensionEnable: r } = e, { floorIndex: l } = e, { floorplanData: m } = e;
  const f = m.bounding.max.x - m.bounding.min.x, u = m.bounding.max.y - m.bounding.min.y, b = t && r;
  return i.$$set = (a) => {
    "roomLabelsEnable" in a && n(5, t = a.roomLabelsEnable), "roomDimensionEnable" in a && n(6, r = a.roomDimensionEnable), "floorIndex" in a && n(7, l = a.floorIndex), "floorplanData" in a && n(0, m = a.floorplanData);
  }, i.$$.update = () => {
    i.$$.dirty & /*floorplanData, floorIndex*/
    129 && n(1, o = m.floorDatas[l].rooms.map((a) => R(B({}, a), {
      path: a.path.map((s) => O(s, m.bounding))
    })));
  }, [
    m,
    o,
    f,
    u,
    b,
    t,
    r,
    l
  ];
}
class fe extends H {
  constructor(e) {
    super(), N(
      this,
      e,
      ne,
      oe,
      P,
      {
        roomLabelsEnable: 5,
        roomDimensionEnable: 6,
        floorIndex: 7,
        floorplanData: 0
      },
      Y
    );
  }
}
export {
  fe as RoomMaterial
};
