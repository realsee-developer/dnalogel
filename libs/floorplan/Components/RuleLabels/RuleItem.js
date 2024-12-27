import { SvelteComponent as O, init as P, safe_not_equal as S, append_styles as X, element as v, space as x, attr as g, toggle_class as k, set_style as z, insert as T, append as h, update_keyed_each as Y, destroy_block as j, noop as R, detach as D, destroy_each as A, text as B, set_data as E } from "../../../vendor/svelte/internal/index.js";
function F(i) {
  X(i, "svelte-1fuyezq", ".floorplan-plugin__rule-labels.svelte-1fuyezq.svelte-1fuyezq{position:absolute;display:flex}.floorplan-plugin__rule-labels--top.svelte-1fuyezq.svelte-1fuyezq{left:0;top:-1.25rem}.floorplan-plugin__rule-labels--bottom.svelte-1fuyezq.svelte-1fuyezq{left:0;bottom:-1.25rem}.floorplan-plugin__rule-labels--left.svelte-1fuyezq.svelte-1fuyezq{top:0;left:-1.25rem}.floorplan-plugin__rule-labels--right.svelte-1fuyezq.svelte-1fuyezq{top:0;right:-1.25rem}.floorplan-plugin__rule-line.svelte-1fuyezq.svelte-1fuyezq{background:#fff;opacity:0.2;width:100%;height:100%}.floorplan-plugin__rule-scale-wrapper.svelte-1fuyezq.svelte-1fuyezq{position:absolute;width:0.3125rem;height:100%;left:50%;top:0;transform:translateX(-50%)}.floorplan-plugin__rule-labels.is-row.svelte-1fuyezq .floorplan-plugin__rule-scale-wrapper.svelte-1fuyezq{width:100%;height:0.3125rem;top:50%;left:0;transform:translateY(-50%)}.floorplan-plugin__rule-scale.svelte-1fuyezq.svelte-1fuyezq{position:absolute;background:#fff;opacity:0.2;width:100%;height:0.0625rem}.floorplan-plugin__rule-labels.is-row.svelte-1fuyezq .floorplan-plugin__rule-scale.svelte-1fuyezq{width:0.0625rem;height:100%}.floorplan-plugin__rule-text-wrapper.svelte-1fuyezq.svelte-1fuyezq{position:absolute}.floorplan-plugin__rule-labels--top.svelte-1fuyezq .floorplan-plugin__rule-text-wrapper.svelte-1fuyezq{width:100%;height:0;top:0.625rem}.floorplan-plugin__rule-labels--bottom.svelte-1fuyezq .floorplan-plugin__rule-text-wrapper.svelte-1fuyezq{width:100%;height:0;bottom:0.625rem}.floorplan-plugin__rule-labels--left.svelte-1fuyezq .floorplan-plugin__rule-text-wrapper.svelte-1fuyezq{width:0;height:100%;left:0.625rem}.floorplan-plugin__rule-labels--right.svelte-1fuyezq .floorplan-plugin__rule-text-wrapper.svelte-1fuyezq{width:0;height:100%;right:0.625rem}.floorplan-plugin__rule-text-item.svelte-1fuyezq.svelte-1fuyezq{width:0;height:0;position:absolute;transform:rotate(90deg)}.floorplan-plugin__rule-labels.is-row.svelte-1fuyezq .floorplan-plugin__rule-text-item.svelte-1fuyezq{transform:rotate(0)}.floorplan-plugin__rule-text.svelte-1fuyezq.svelte-1fuyezq{width:-moz-max-content;width:max-content;transform:translate(-50%, -50%);font-size:0.625rem;color:#fff;opacity:0.35}");
}
function C(i, l, n) {
  const s = i.slice();
  return s[11] = l[n], s[13] = n, s;
}
function H(i, l, n) {
  const s = i.slice();
  return s[14] = l[n], s;
}
function I(i) {
  let l;
  return {
    c() {
      l = v("div"), g(l, "class", "floorplan-plugin__rule-scale svelte-1fuyezq"), z(
        l,
        "left",
        /*rulerLabel*/
        i[14].left * 100 + "%"
      ), z(
        l,
        "bottom",
        /*rulerLabel*/
        i[14].bottom * 100 + "%"
      );
    },
    m(n, s) {
      T(n, l, s);
    },
    p: R,
    d(n) {
      n && D(l);
    }
  };
}
function L(i, l) {
  let n, s, a = (
    /*getRuleDistanceText*/
    l[1](
      /*textItem*/
      l[11].distance
    ) + ""
  ), f, _;
  return {
    key: i,
    first: null,
    c() {
      n = v("div"), s = v("div"), f = B(a), _ = x(), g(s, "class", "floorplan-plugin__rule-text svelte-1fuyezq"), k(
        s,
        "is-row",
        /*isRow*/
        l[2]
      ), g(n, "class", "floorplan-plugin__rule-text-item svelte-1fuyezq"), z(
        n,
        "left",
        /*textItem*/
        l[11].left * 100 + "%"
      ), z(
        n,
        "bottom",
        /*textItem*/
        l[11].bottom * 100 + "%"
      ), this.first = n;
    },
    m(r, c) {
      T(r, n, c), h(n, s), h(s, f), h(n, _);
    },
    p(r, c) {
      l = r, c & /*getRuleDistanceText*/
      2 && a !== (a = /*getRuleDistanceText*/
      l[1](
        /*textItem*/
        l[11].distance
      ) + "") && E(f, a);
    },
    d(r) {
      r && D(n);
    }
  };
}
function G(i) {
  let l, n, s, a, f, _, r = [], c = /* @__PURE__ */ new Map(), m, p = (
    /*rulerLabels*/
    i[3]
  ), u = [];
  for (let e = 0; e < p.length; e += 1)
    u[e] = I(H(i, p, e));
  let y = (
    /*rulerTexts*/
    i[4]
  );
  const q = (e) => (
    /*textItemIndex*/
    e[13]
  );
  for (let e = 0; e < y.length; e += 1) {
    let o = C(i, y, e), t = q(o);
    c.set(t, r[e] = L(t, o));
  }
  return {
    c() {
      l = v("div"), n = v("div"), s = x(), a = v("div");
      for (let e = 0; e < u.length; e += 1)
        u[e].c();
      f = x(), _ = v("div");
      for (let e = 0; e < r.length; e += 1)
        r[e].c();
      g(n, "class", "floorplan-plugin__rule-line svelte-1fuyezq"), g(a, "class", "floorplan-plugin__rule-scale-wrapper svelte-1fuyezq"), k(
        a,
        "is-row",
        /*isRow*/
        i[2]
      ), g(_, "class", "floorplan-plugin__rule-text-wrapper svelte-1fuyezq"), g(l, "class", m = "floorplan-plugin__rule-labels floorplan-plugin__rule-labels--" + /*type*/
      i[0] + " svelte-1fuyezq"), k(
        l,
        "is-row",
        /*isRow*/
        i[2]
      ), z(
        l,
        "width",
        /*isRow*/
        i[2] ? "100%" : 1 / 16 + "rem"
      ), z(l, "height", /*isRow*/
      i[2] ? 1 / 16 + "rem" : "100%");
    },
    m(e, o) {
      T(e, l, o), h(l, n), h(l, s), h(l, a);
      for (let t = 0; t < u.length; t += 1)
        u[t] && u[t].m(a, null);
      h(l, f), h(l, _);
      for (let t = 0; t < r.length; t += 1)
        r[t] && r[t].m(_, null);
    },
    p(e, [o]) {
      if (o & /*rulerLabels*/
      8) {
        p = /*rulerLabels*/
        e[3];
        let t;
        for (t = 0; t < p.length; t += 1) {
          const w = H(e, p, t);
          u[t] ? u[t].p(w, o) : (u[t] = I(w), u[t].c(), u[t].m(a, null));
        }
        for (; t < u.length; t += 1)
          u[t].d(1);
        u.length = p.length;
      }
      o & /*rulerTexts, isRow, getRuleDistanceText*/
      22 && (y = /*rulerTexts*/
      e[4], r = Y(r, o, q, 1, e, y, c, _, j, L, null, C)), o & /*type*/
      1 && m !== (m = "floorplan-plugin__rule-labels floorplan-plugin__rule-labels--" + /*type*/
      e[0] + " svelte-1fuyezq") && g(l, "class", m), o & /*type, isRow*/
      5 && k(
        l,
        "is-row",
        /*isRow*/
        e[2]
      );
    },
    i: R,
    o: R,
    d(e) {
      e && D(l), A(u, e);
      for (let o = 0; o < r.length; o += 1)
        r[o].d();
    }
  };
}
const d = 1e3, b = 180;
function J(i, l, n) {
  let { type: s } = l, { data: a } = l, { bounding: f } = l, { getRuleDistanceText: _ } = l;
  const r = s === "top" || s === "bottom", c = f.max.x - f.min.x - (d - b) * 2, m = f.max.y - f.min.y - (d - b) * 2, p = a.map(([e, o]) => r ? [e.x, o.x] : [e.y, o.y]).flat().sort().filter((e, o, t) => o === 0 ? !0 : e !== t[o - 1]), u = p.map((e) => {
    const o = r ? (e - f.min.x - d + b) / c : 0, t = r ? 0 : (e - f.min.y - d + b) / m;
    return { left: o, bottom: t };
  });
  u.unshift({ left: 0, bottom: 0 }), u.push(r ? { left: 1, bottom: 0 } : { left: 0, bottom: 1 });
  const y = p[p.length - 1] - p[0], q = p.map((e, o, t) => {
    const w = o === 0 ? 0 : e - t[o - 1], W = o === 0 ? 0 : (e + t[o - 1]) / 2, M = r ? (W - f.min.x - d + b) / c : 0, N = r ? 0 : (W - f.min.y - d + b) / m;
    return { left: M, bottom: N, distance: w };
  }).filter(({ distance: e }) => e / y > 0.1);
  return i.$$set = (e) => {
    "type" in e && n(0, s = e.type), "data" in e && n(5, a = e.data), "bounding" in e && n(6, f = e.bounding), "getRuleDistanceText" in e && n(1, _ = e.getRuleDistanceText);
  }, [s, _, r, u, q, a, f];
}
class Q extends O {
  constructor(l) {
    super(), P(
      this,
      l,
      J,
      G,
      S,
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
