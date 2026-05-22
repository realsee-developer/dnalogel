import { SvelteComponent as I, init as k, safe_not_equal as D, append_styles as x, element as g, attr as v, insert as b, update_keyed_each as y, noop as u, detach as p, set_style as a, destroy_block as q } from "../../../vendor/svelte/internal/index.js";
function z(r) {
  x(r, "svelte-6v429q", ".floorplan-guide-plugin__observer-dots.svelte-6v429q{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10}.floorplan-guide-plugin__observer-dot.svelte-6v429q{position:absolute;background:#7dacff80;border:0.0375rem solid #96cfff;border-radius:50%;pointer-events:none;transform:translate(-50%, -50%);transition:opacity 0.8s ease-in-out}");
}
function h(r, t, e) {
  const i = r.slice();
  return i[6] = t[e], i;
}
function _(r, t) {
  let e;
  return {
    key: r,
    first: null,
    c() {
      e = g("div"), v(e, "class", "floorplan-guide-plugin__observer-dot svelte-6v429q"), a(
        e,
        "left",
        /*observer*/
        t[6].positionInImage.x * /*contentWidth*/
        t[0] + "px"
      ), a(
        e,
        "top",
        /*observer*/
        t[6].positionInImage.y * /*contentHeight*/
        t[1] + "px"
      ), a(
        e,
        "width",
        /*observerDotSize*/
        t[2] + "px"
      ), a(
        e,
        "height",
        /*observerDotSize*/
        t[2] + "px"
      ), this.first = e;
    },
    m(i, n) {
      b(i, e, n);
    },
    p(i, n) {
      t = i, n & /*currentFloorObservers, contentWidth*/
      9 && a(
        e,
        "left",
        /*observer*/
        t[6].positionInImage.x * /*contentWidth*/
        t[0] + "px"
      ), n & /*currentFloorObservers, contentHeight*/
      10 && a(
        e,
        "top",
        /*observer*/
        t[6].positionInImage.y * /*contentHeight*/
        t[1] + "px"
      ), n & /*observerDotSize*/
      4 && a(
        e,
        "width",
        /*observerDotSize*/
        t[2] + "px"
      ), n & /*observerDotSize*/
      4 && a(
        e,
        "height",
        /*observerDotSize*/
        t[2] + "px"
      );
    },
    d(i) {
      i && p(e);
    }
  };
}
function S(r) {
  let t, e = [], i = /* @__PURE__ */ new Map(), n = (
    /*currentFloorObservers*/
    r[3]
  );
  const d = (o) => (
    /*observer*/
    o[6].index
  );
  for (let o = 0; o < n.length; o += 1) {
    let l = h(r, n, o), f = d(l);
    i.set(f, e[o] = _(f, l));
  }
  return {
    c() {
      t = g("div");
      for (let o = 0; o < e.length; o += 1)
        e[o].c();
      v(t, "class", "floorplan-guide-plugin__observer-dots svelte-6v429q");
    },
    m(o, l) {
      b(o, t, l);
      for (let f = 0; f < e.length; f += 1)
        e[f] && e[f].m(t, null);
    },
    p(o, [l]) {
      l & /*currentFloorObservers, contentWidth, contentHeight, observerDotSize*/
      15 && (n = /*currentFloorObservers*/
      o[3], e = y(e, l, d, 1, o, n, i, t, q, _, null, h));
    },
    i: u,
    o: u,
    d(o) {
      o && p(t);
      for (let l = 0; l < e.length; l += 1)
        e[l].d();
    }
  };
}
function w(r, t, e) {
  let i, { floorplanData: n } = t, { floorIndex: d } = t, { contentWidth: o } = t, { contentHeight: l } = t, { observerDotSize: f = 12 } = t;
  return r.$$set = (s) => {
    "floorplanData" in s && e(4, n = s.floorplanData), "floorIndex" in s && e(5, d = s.floorIndex), "contentWidth" in s && e(0, o = s.contentWidth), "contentHeight" in s && e(1, l = s.contentHeight), "observerDotSize" in s && e(2, f = s.observerDotSize);
  }, r.$$.update = () => {
    var s, c;
    r.$$.dirty & /*floorplanData, floorIndex*/
    48 && e(3, i = (c = (s = n.observers) == null ? void 0 : s.filter((m) => m.floorIndex === d)) != null ? c : []);
  }, [
    o,
    l,
    f,
    i,
    n,
    d
  ];
}
class W extends I {
  constructor(t) {
    super(), k(
      this,
      t,
      w,
      S,
      D,
      {
        floorplanData: 4,
        floorIndex: 5,
        contentWidth: 0,
        contentHeight: 1,
        observerDotSize: 2
      },
      z
    );
  }
}
export {
  W as default
};
