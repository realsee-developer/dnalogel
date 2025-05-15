import { SvelteComponent as k, init as y, safe_not_equal as x, append_styles as I, element as _, attr as h, insert as v, update_keyed_each as $, noop as g, detach as j, space as w, set_style as r, append as d, destroy_block as z } from "../../../../vendor/svelte/internal/index.js";
function O(s) {
  I(s, "svelte-1i87fz7", ".plugin-pano-floorplan__extra-objects.svelte-1i87fz7{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.plugin-pano-floorplan__extra-object-item--position.svelte-1i87fz7{position:absolute;width:0;height:0}.plugin-pano-floorplan__extra-object-item.svelte-1i87fz7{transform:translate(-50%, -50%)}");
}
function m(s, t, e) {
  const l = s.slice();
  return l[1] = t[e], l;
}
function b(s, t) {
  let e, l, a = `${/*extraObject*/
  t[1].icon.width / 16}rem`, p = `${/*extraObject*/
  t[1].icon.height / 16}rem`, i, n = `${/*extraObject*/
  t[1].positionInImage.y * 100}%`, o = `${/*extraObject*/
  t[1].positionInImage.x * 100}%`;
  return {
    key: s,
    first: null,
    c() {
      e = _("div"), l = _("div"), i = w(), h(l, "class", "plugin-pano-floorplan__extra-object-item svelte-1i87fz7"), r(l, "background-image", `url(${/*extraObject*/
      t[1].icon.url})`), r(l, "width", a), r(l, "height", p), h(e, "class", "plugin-pano-floorplan__extra-object-item--position svelte-1i87fz7"), r(e, "top", n), r(e, "left", o), this.first = e;
    },
    m(f, c) {
      v(f, e, c), d(e, l), d(e, i);
    },
    p(f, c) {
      t = f, c & /*extraObjects*/
      1 && r(l, "background-image", `url(${/*extraObject*/
      t[1].icon.url})`);
      const u = c & /*extraObjects*/
      1;
      u && r(l, "width", a), u && r(l, "height", p), c & /*extraObjects*/
      1 && n !== (n = `${/*extraObject*/
      t[1].positionInImage.y * 100}%`) && r(e, "top", n), c & /*extraObjects*/
      1 && o !== (o = `${/*extraObject*/
      t[1].positionInImage.x * 100}%`) && r(e, "left", o);
    },
    d(f) {
      f && j(e);
    }
  };
}
function q(s) {
  let t, e = [], l = /* @__PURE__ */ new Map(), a = (
    /*extraObjects*/
    s[0]
  );
  const p = (i) => (
    /*extraObject*/
    i[1].id
  );
  for (let i = 0; i < a.length; i += 1) {
    let n = m(s, a, i), o = p(n);
    l.set(o, e[i] = b(o, n));
  }
  return {
    c() {
      t = _("div");
      for (let i = 0; i < e.length; i += 1)
        e[i].c();
      h(t, "class", "plugin-pano-floorplan__extra-objects svelte-1i87fz7");
    },
    m(i, n) {
      v(i, t, n);
      for (let o = 0; o < e.length; o += 1)
        e[o] && e[o].m(t, null);
    },
    p(i, [n]) {
      n & /*extraObjects*/
      1 && (a = /*extraObjects*/
      i[0], e = $(e, n, p, 1, i, a, l, t, z, b, null, m));
    },
    i: g,
    o: g,
    d(i) {
      i && j(t);
      for (let n = 0; n < e.length; n += 1)
        e[n].d();
    }
  };
}
function C(s, t, e) {
  let { extraObjects: l = [] } = t;
  return s.$$set = (a) => {
    "extraObjects" in a && e(0, l = a.extraObjects);
  }, [l];
}
class M extends k {
  constructor(t) {
    super(), y(this, t, C, q, x, { extraObjects: 0 }, O);
  }
}
export {
  M as default
};
