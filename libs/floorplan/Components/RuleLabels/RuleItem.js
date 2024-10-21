import { SvelteComponent as N, init as O, safe_not_equal as P, append_styles as S, element as h, space as R, attr as d, toggle_class as x, set_style as j, insert as D, append as c, update_keyed_each as X, destroy_block as Y, noop as T, detach as z, destroy_each as A, text as B, set_data as E } from "../../../vendor/svelte/internal/index.js";
function F(i) {
  S(i, "svelte-djlmk4", ".floorplan-plugin__rule-labels.svelte-djlmk4.svelte-djlmk4{position:absolute;display:flex}.floorplan-plugin__rule-labels--top.svelte-djlmk4.svelte-djlmk4{left:0;top:-1.25rem}.floorplan-plugin__rule-labels--bottom.svelte-djlmk4.svelte-djlmk4{left:0;bottom:-1.25rem}.floorplan-plugin__rule-labels--left.svelte-djlmk4.svelte-djlmk4{top:0;left:-1.25rem}.floorplan-plugin__rule-labels--right.svelte-djlmk4.svelte-djlmk4{top:0;right:-1.25rem}.floorplan-plugin__rule-line.svelte-djlmk4.svelte-djlmk4{background:#fff;opacity:0.05;width:100%;height:100%}.floorplan-plugin__rule-scale-wrapper.svelte-djlmk4.svelte-djlmk4{position:absolute;width:0.3125rem;height:100%;left:50%;top:0;transform:translateX(-50%)}.floorplan-plugin__rule-labels.is-row.svelte-djlmk4 .floorplan-plugin__rule-scale-wrapper.svelte-djlmk4{width:100%;height:0.3125rem;top:50%;left:0;transform:translateY(-50%)}.floorplan-plugin__rule-scale.svelte-djlmk4.svelte-djlmk4{position:absolute;background:#fff;opacity:0.05;width:100%;height:0.0625rem}.floorplan-plugin__rule-labels.is-row.svelte-djlmk4 .floorplan-plugin__rule-scale.svelte-djlmk4{width:0.0625rem;height:100%}.floorplan-plugin__rule-text-wrapper.svelte-djlmk4.svelte-djlmk4{position:absolute}.floorplan-plugin__rule-labels--top.svelte-djlmk4 .floorplan-plugin__rule-text-wrapper.svelte-djlmk4{width:100%;height:0;top:0.625rem}.floorplan-plugin__rule-labels--bottom.svelte-djlmk4 .floorplan-plugin__rule-text-wrapper.svelte-djlmk4{width:100%;height:0;bottom:0.625rem}.floorplan-plugin__rule-labels--left.svelte-djlmk4 .floorplan-plugin__rule-text-wrapper.svelte-djlmk4{width:0;height:100%;left:0.625rem}.floorplan-plugin__rule-labels--right.svelte-djlmk4 .floorplan-plugin__rule-text-wrapper.svelte-djlmk4{width:0;height:100%;right:0.625rem}.floorplan-plugin__rule-text-item.svelte-djlmk4.svelte-djlmk4{width:0;height:0;position:absolute;transform:rotate(90deg)}.floorplan-plugin__rule-labels.is-row.svelte-djlmk4 .floorplan-plugin__rule-text-item.svelte-djlmk4{transform:rotate(0)}.floorplan-plugin__rule-text.svelte-djlmk4.svelte-djlmk4{width:-moz-max-content;width:max-content;transform:translate(-50%, -50%);font-size:0.625rem;color:#fff;opacity:0.2}");
}
function q(i, e, n) {
  const s = i.slice();
  return s[11] = e[n], s[13] = n, s;
}
function C(i, e, n) {
  const s = i.slice();
  return s[14] = e[n], s;
}
function H(i) {
  let e;
  return {
    c() {
      e = h("div"), d(e, "class", "floorplan-plugin__rule-scale svelte-djlmk4"), j(
        e,
        "left",
        /*rulerLabel*/
        i[14].left * 100 + "%"
      ), j(
        e,
        "bottom",
        /*rulerLabel*/
        i[14].bottom * 100 + "%"
      );
    },
    m(n, s) {
      D(n, e, s);
    },
    p: T,
    d(n) {
      n && z(e);
    }
  };
}
function I(i, e) {
  let n, s, p = (
    /*getRuleDistanceText*/
    e[1](
      /*textItem*/
      e[11].distance
    ) + ""
  ), u, m;
  return {
    key: i,
    first: null,
    c() {
      n = h("div"), s = h("div"), u = B(p), m = R(), d(s, "class", "floorplan-plugin__rule-text svelte-djlmk4"), x(
        s,
        "is-row",
        /*isRow*/
        e[2]
      ), d(n, "class", "floorplan-plugin__rule-text-item svelte-djlmk4"), j(
        n,
        "left",
        /*textItem*/
        e[11].left * 100 + "%"
      ), j(
        n,
        "bottom",
        /*textItem*/
        e[11].bottom * 100 + "%"
      ), this.first = n;
    },
    m(r, _) {
      D(r, n, _), c(n, s), c(s, u), c(n, m);
    },
    p(r, _) {
      e = r, _ & /*getRuleDistanceText*/
      2 && p !== (p = /*getRuleDistanceText*/
      e[1](
        /*textItem*/
        e[11].distance
      ) + "") && E(u, p);
    },
    d(r) {
      r && z(n);
    }
  };
}
function G(i) {
  let e, n, s, p, u, m, r = [], _ = /* @__PURE__ */ new Map(), g, f = (
    /*rulerLabels*/
    i[3]
  ), a = [];
  for (let l = 0; l < f.length; l += 1)
    a[l] = H(C(i, f, l));
  let v = (
    /*rulerTexts*/
    i[4]
  );
  const w = (l) => (
    /*textItemIndex*/
    l[13]
  );
  for (let l = 0; l < v.length; l += 1) {
    let o = q(i, v, l), t = w(o);
    _.set(t, r[l] = I(t, o));
  }
  return {
    c() {
      e = h("div"), n = h("div"), s = R(), p = h("div");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      u = R(), m = h("div");
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      d(n, "class", "floorplan-plugin__rule-line svelte-djlmk4"), d(p, "class", "floorplan-plugin__rule-scale-wrapper svelte-djlmk4"), x(
        p,
        "is-row",
        /*isRow*/
        i[2]
      ), d(m, "class", "floorplan-plugin__rule-text-wrapper svelte-djlmk4"), d(e, "class", g = "floorplan-plugin__rule-labels floorplan-plugin__rule-labels--" + /*type*/
      i[0] + " svelte-djlmk4"), x(
        e,
        "is-row",
        /*isRow*/
        i[2]
      ), j(
        e,
        "width",
        /*isRow*/
        i[2] ? "100%" : 1 / 16 + "rem"
      ), j(e, "height", /*isRow*/
      i[2] ? 1 / 16 + "rem" : "100%");
    },
    m(l, o) {
      D(l, e, o), c(e, n), c(e, s), c(e, p);
      for (let t = 0; t < a.length; t += 1)
        a[t] && a[t].m(p, null);
      c(e, u), c(e, m);
      for (let t = 0; t < r.length; t += 1)
        r[t] && r[t].m(m, null);
    },
    p(l, [o]) {
      if (o & /*rulerLabels*/
      8) {
        f = /*rulerLabels*/
        l[3];
        let t;
        for (t = 0; t < f.length; t += 1) {
          const y = C(l, f, t);
          a[t] ? a[t].p(y, o) : (a[t] = H(y), a[t].c(), a[t].m(p, null));
        }
        for (; t < a.length; t += 1)
          a[t].d(1);
        a.length = f.length;
      }
      o & /*rulerTexts, isRow, getRuleDistanceText*/
      22 && (v = /*rulerTexts*/
      l[4], r = X(r, o, w, 1, l, v, _, m, Y, I, null, q)), o & /*type*/
      1 && g !== (g = "floorplan-plugin__rule-labels floorplan-plugin__rule-labels--" + /*type*/
      l[0] + " svelte-djlmk4") && d(e, "class", g), o & /*type, isRow*/
      5 && x(
        e,
        "is-row",
        /*isRow*/
        l[2]
      );
    },
    i: T,
    o: T,
    d(l) {
      l && z(e), A(a, l);
      for (let o = 0; o < r.length; o += 1)
        r[o].d();
    }
  };
}
const k = 1e3, b = 180;
function J(i, e, n) {
  let { type: s } = e, { data: p } = e, { bounding: u } = e, { getRuleDistanceText: m } = e;
  const r = s === "top" || s === "bottom", _ = u.max.x - u.min.x - (k - b) * 2, g = u.max.y - u.min.y - (k - b) * 2, f = p.map(([l, o]) => r ? [l.x, o.x] : [l.y, o.y]).flat().sort().filter((l, o, t) => o === 0 ? !0 : l !== t[o - 1]), a = f.map((l) => {
    const o = r ? (l - u.min.x - k + b) / _ : 0, t = r ? 0 : (l - u.min.y - k + b) / g;
    return { left: o, bottom: t };
  });
  a.unshift({ left: 0, bottom: 0 }), a.push(r ? { left: 1, bottom: 0 } : { left: 0, bottom: 1 });
  const v = f[f.length - 1] - f[0], w = f.map((l, o, t) => {
    const y = o === 0 ? 0 : l - t[o - 1], W = o === 0 ? 0 : (l + t[o - 1]) / 2, L = r ? (W - u.min.x - k + b) / _ : 0, M = r ? 0 : (W - u.min.y - k + b) / g;
    return { left: L, bottom: M, distance: y };
  }).filter(({ distance: l }) => l / v > 0.1);
  return i.$$set = (l) => {
    "type" in l && n(0, s = l.type), "data" in l && n(5, p = l.data), "bounding" in l && n(6, u = l.bounding), "getRuleDistanceText" in l && n(1, m = l.getRuleDistanceText);
  }, [s, m, r, a, w, p, u];
}
class Q extends N {
  constructor(e) {
    super(), O(
      this,
      e,
      J,
      G,
      P,
      {
        type: 0,
        data: 5,
        bounding: 6,
        getRuleDistanceText: 1
      },
      F
    );
  }
}
export {
  Q as RuleItem
};
