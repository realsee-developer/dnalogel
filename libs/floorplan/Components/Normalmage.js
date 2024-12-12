import { SvelteComponent as a, init as c, safe_not_equal as u, append_styles as f, element as m, src_url_equal as l, attr as s, insert as g, noop as o, detach as _ } from "../../vendor/svelte/internal/index.js";
function d(n) {
  f(n, "svelte-1gfoniz", "img.svelte-1gfoniz{width:100%;height:100%}");
}
function p(n) {
  let e, r;
  return {
    c() {
      e = m("img"), l(e.src, r = /*url*/
      n[0]) || s(e, "src", r), s(e, "alt", "floorplan iamge"), s(e, "class", "svelte-1gfoniz");
    },
    m(t, i) {
      g(t, e, i);
    },
    p(t, [i]) {
      i & /*url*/
      1 && !l(e.src, r = /*url*/
      t[0]) && s(e, "src", r);
    },
    i: o,
    o,
    d(t) {
      t && _(e);
    }
  };
}
function h(n, e, r) {
  let { url: t } = e;
  return n.$$set = (i) => {
    "url" in i && r(0, t = i.url);
  }, [t];
}
class z extends a {
  constructor(e) {
    super(), c(this, e, h, p, u, { url: 0 }, d);
  }
}
export {
  z as Normalmage
};
