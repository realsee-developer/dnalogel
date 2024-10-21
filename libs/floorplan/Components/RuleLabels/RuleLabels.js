import { SvelteComponent as I, init as j, safe_not_equal as L, append_styles as z, element as W, attr as H, set_style as _, insert as k, group_outros as O, update_keyed_each as q, outro_and_destroy_block as A, check_outros as C, transition_in as R, transition_out as w, detach as T, assign as K, empty as M, create_component as S, mount_component as B, get_spread_update as E, destroy_component as F } from "../../../vendor/svelte/internal/index.js";
import { RuleItem as G } from "./RuleItem.js";
function J(o) {
  z(o, "svelte-1mzj9p3", ".floorplan-plugin__rule-labels-wrapper.svelte-1mzj9p3{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);pointer-events:none}");
}
function y(o, l, t) {
  const r = o.slice();
  return r[13] = l[t][0], r[14] = l[t][1], r;
}
function b(o, l) {
  let t, r, i;
  const a = [
    {
      type: (
        /*type*/
        l[13]
      ),
      data: (
        /*data*/
        l[14]
      ),
      bounding: (
        /*bounding*/
        l[1]
      ),
      getRuleDistanceText: (
        /*getRuleDistanceText*/
        l[0]
      )
    }
  ];
  let s = {};
  for (let e = 0; e < a.length; e += 1)
    s = K(s, a[e]);
  return r = new G({ props: s }), {
    key: o,
    first: null,
    c() {
      t = M(), S(r.$$.fragment), this.first = t;
    },
    m(e, n) {
      k(e, t, n), B(r, e, n), i = !0;
    },
    p(e, n) {
      l = e;
      const u = n & /*ruleLabelArray, bounding, getRuleDistanceText*/
      19 ? E(a, [
        {
          type: (
            /*type*/
            l[13]
          ),
          data: (
            /*data*/
            l[14]
          ),
          bounding: (
            /*bounding*/
            l[1]
          ),
          getRuleDistanceText: (
            /*getRuleDistanceText*/
            l[0]
          )
        }
      ]) : {};
      r.$set(u);
    },
    i(e) {
      i || (R(r.$$.fragment, e), i = !0);
    },
    o(e) {
      w(r.$$.fragment, e), i = !1;
    },
    d(e) {
      e && T(t), F(r, e);
    }
  };
}
function N(o) {
  let l, t = [], r = /* @__PURE__ */ new Map(), i, a = (
    /*ruleLabelArray*/
    o[4]
  );
  const s = (e) => (
    /*type*/
    e[13]
  );
  for (let e = 0; e < a.length; e += 1) {
    let n = y(o, a, e), u = s(n);
    r.set(u, t[e] = b(u, n));
  }
  return {
    c() {
      l = W("div");
      for (let e = 0; e < t.length; e += 1)
        t[e].c();
      H(l, "class", "floorplan-plugin__rule-labels-wrapper svelte-1mzj9p3"), _(
        l,
        "width",
        /*width*/
        o[3]
      ), _(
        l,
        "height",
        /*height*/
        o[2]
      );
    },
    m(e, n) {
      k(e, l, n);
      for (let u = 0; u < t.length; u += 1)
        t[u] && t[u].m(l, null);
      i = !0;
    },
    p(e, [n]) {
      n & /*ruleLabelArray, bounding, getRuleDistanceText*/
      19 && (a = /*ruleLabelArray*/
      e[4], O(), t = q(t, n, s, 1, e, a, r, l, A, b, null, y), C()), n & /*width*/
      8 && _(
        l,
        "width",
        /*width*/
        e[3]
      ), n & /*height*/
      4 && _(
        l,
        "height",
        /*height*/
        e[2]
      );
    },
    i(e) {
      if (!i) {
        for (let n = 0; n < a.length; n += 1)
          R(t[n]);
        i = !0;
      }
    },
    o(e) {
      for (let n = 0; n < t.length; n += 1)
        w(t[n]);
      i = !1;
    },
    d(e) {
      e && T(l);
      for (let n = 0; n < t.length; n += 1)
        t[n].d();
    }
  };
}
const D = 1e3, x = 180;
function P(o, l, t) {
  let r, i, a, s, e, n, u, m, d, p, { floorIndex: g } = l, { floorplanData: c } = l, { getRuleDistanceText: h } = l;
  return o.$$set = (f) => {
    "floorIndex" in f && t(5, g = f.floorIndex), "floorplanData" in f && t(6, c = f.floorplanData), "getRuleDistanceText" in f && t(0, h = f.getRuleDistanceText);
  }, o.$$.update = () => {
    o.$$.dirty & /*floorplanData*/
    64 && t(1, r = c.bounding), o.$$.dirty & /*floorplanData, floorIndex*/
    96 && t(11, i = c.floorDatas[g].rules), o.$$.dirty & /*ruleLabelData*/
    2048 && t(12, a = Object.keys(i)), o.$$.dirty & /*ruleLabelDataKeys, ruleLabelData*/
    6144 && t(4, s = a.map((f) => [f, i[f]])), o.$$.dirty & /*bounding*/
    2 && t(9, e = r.max.x - r.min.x), o.$$.dirty & /*bounding*/
    2 && t(7, n = r.max.y - r.min.y), o.$$.dirty & /*bounding*/
    2 && t(10, u = r.max.x - r.min.x - (D - x) * 2), o.$$.dirty & /*bounding*/
    2 && t(8, m = r.max.y - r.min.y - (D - x) * 2), o.$$.dirty & /*contentWidth, boundingWidth*/
    1536 && t(3, d = u / e * 100 + "%"), o.$$.dirty & /*contentHeight, boundingHeight*/
    384 && t(2, p = m / n * 100 + "%");
  }, [
    h,
    r,
    p,
    d,
    s,
    g,
    c,
    n,
    m,
    e,
    u,
    i,
    a
  ];
}
class V extends I {
  constructor(l) {
    super(), j(
      this,
      l,
      P,
      N,
      L,
      {
        floorIndex: 5,
        floorplanData: 6,
        getRuleDistanceText: 0
      },
      J
    );
  }
}
export {
  V as RuleLabels
};
