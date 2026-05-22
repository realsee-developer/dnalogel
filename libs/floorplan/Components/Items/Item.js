import { SvelteComponent as d, init as h, safe_not_equal as v, append_styles as w, element as g, space as y, text as b, attr as p, src_url_equal as I, set_style as f, insert as $, append as m, set_data as q, noop as u, detach as X } from "../../../vendor/svelte/internal/index.js";
function Y(n) {
  w(n, "svelte-2r6702", ".floorplan-plugin__item.svelte-2r6702{position:absolute;display:flex;flex-flow:column;align-items:center;line-height:1;color:#fff;transform:translate(-50%, -50%);white-space:nowrap;will-change:opacity;transition:opacity 300ms}.floorplan-plugin__img.svelte-2r6702{width:100%;height:100%}.floorplan-plugin__notes.svelte-2r6702{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:0.25rem;line-height:1;border-radius:0.25rem;color:#fff;background:rgba(0,0,0,.6);font-size:0.75rem}");
}
function k(n) {
  let t, o, e, c, l, i = (
    /*item*/
    n[0].notes + ""
  ), r;
  return {
    c() {
      t = g("div"), o = g("img"), c = y(), l = g("span"), r = b(i), p(o, "class", "floorplan-plugin__img svelte-2r6702"), I(o.src, e = /*src*/
      n[6]) || p(o, "src", e), p(o, "alt", ""), f(
        o,
        "transform",
        /*transform*/
        n[5]
      ), p(l, "class", "floorplan-plugin__notes svelte-2r6702"), p(t, "class", "floorplan-plugin__item svelte-2r6702"), f(
        t,
        "left",
        /*left*/
        n[1]
      ), f(
        t,
        "top",
        /*top*/
        n[2]
      ), f(
        t,
        "width",
        /*width*/
        n[3]
      ), f(
        t,
        "height",
        /*height*/
        n[4]
      );
    },
    m(s, a) {
      $(s, t, a), m(t, o), m(t, c), m(t, l), m(l, r);
    },
    p(s, [a]) {
      a & /*item*/
      1 && i !== (i = /*item*/
      s[0].notes + "") && q(r, i);
    },
    i: u,
    o: u,
    d(s) {
      s && X(t);
    }
  };
}
function z(n, t, o) {
  let { item: e } = t;
  const c = e.positionInImage.x * 100 + "%", l = e.positionInImage.y * 100 + "%", i = e.width * 100 + "%", r = e.height * 100 + "%", s = `rotate(${e.rotateZ}deg) scaleX(${e.rotateX ? -1 : 1}) scaleY(${e.rotateY ? -1 : 1})`, a = e.src;
  return n.$$set = (_) => {
    "item" in _ && o(0, e = _.item);
  }, [e, c, l, i, r, s, a];
}
class S extends d {
  constructor(t) {
    super(), h(this, t, z, k, v, { item: 0 }, Y);
  }
}
export {
  S as Item
};
