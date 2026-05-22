import { SvelteComponent as p, init as r, safe_not_equal as g, append_styles as c, element as u, space as m, attr as _, insert as d, append as v, noop as o, detach as y, HtmlTag as i } from "../../vendor/svelte/internal/index.js";
function h(n) {
  c(n, "svelte-ub47ya", ".floorplan-plugin__base-image.svelte-ub47ya{width:100%;height:100%}");
}
function b(n) {
  let e, a, l, f;
  return {
    c() {
      e = u("div"), a = new i(!1), l = m(), f = new i(!1), a.a = l, f.a = null, _(e, "class", "floorplan-plugin__base-image svelte-ub47ya");
    },
    m(t, s) {
      d(t, e, s), a.m(
        /*svgStyle*/
        n[1],
        e
      ), v(e, l), f.m(
        /*content*/
        n[0],
        e
      );
    },
    p(t, [s]) {
      s & /*content*/
      1 && f.p(
        /*content*/
        t[0]
      );
    },
    i: o,
    o,
    d(t) {
      t && y(e);
    }
  };
}
function w(n, e, a) {
  let { content: l } = e;
  const f = `
    <style>
      svg [type='lineGroup'] path {
        fill: #ffffff;
        stroke: #ffffff;
      }
      svg [type='lineItemGroup'] g g g g {
        stroke: #ffffff;
      }</style>
  `;
  return n.$$set = (t) => {
    "content" in t && a(0, l = t.content);
  }, [l, f];
}
class k extends p {
  constructor(e) {
    super(), r(this, e, w, b, g, { content: 0 }, h);
  }
}
export {
  k as SvgImage
};
