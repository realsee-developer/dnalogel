import { SvelteComponent as _, init as h, safe_not_equal as z, append_styles as x, element as m, space as F, attr as r, src_url_equal as p, set_style as a, insert as d, append as g, noop as c, detach as v, text as w, set_data as C } from "../../vendor/svelte/internal/index.js";
function b(s) {
  x(s, "svelte-3vzs9z", ".missing-floor.svelte-3vzs9z{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);display:flex;flex-direction:column;align-items:center}.text.svelte-3vzs9z{margin-top:0.75rem;color:#fff;opacity:0.3;white-space:nowrap}");
}
function u(s) {
  let e, t = (
    /*missingFloorConfig*/
    s[0].text + ""
  ), l;
  return {
    c() {
      e = m("span"), l = w(t), r(e, "class", "text svelte-3vzs9z"), a(
        e,
        "font-size",
        /*missingFloorConfig*/
        s[0].textFontSize + "px"
      );
    },
    m(n, i) {
      d(n, e, i), g(e, l);
    },
    p(n, i) {
      i & /*missingFloorConfig*/
      1 && t !== (t = /*missingFloorConfig*/
      n[0].text + "") && C(l, t), i & /*missingFloorConfig*/
      1 && a(
        e,
        "font-size",
        /*missingFloorConfig*/
        n[0].textFontSize + "px"
      );
    },
    d(n) {
      n && v(e);
    }
  };
}
function S(s) {
  let e, t, l, n, i = (
    /*missingFloorConfig*/
    s[0].text && u(s)
  );
  return {
    c() {
      e = m("div"), t = m("img"), n = F(), i && i.c(), r(t, "class", "image"), r(t, "alt", "缺省楼层展位图"), p(t.src, l = /*missingFloorConfig*/
      s[0].imageURL) || r(t, "src", l), a(
        t,
        "width",
        /*missingFloorConfig*/
        s[0].imageWidth + "px"
      ), a(
        t,
        "height",
        /*missingFloorConfig*/
        s[0].imageHeight + "px"
      ), a(t, "max-width", "none"), r(e, "class", "missing-floor svelte-3vzs9z");
    },
    m(o, f) {
      d(o, e, f), g(e, t), g(e, n), i && i.m(e, null);
    },
    p(o, [f]) {
      f & /*missingFloorConfig*/
      1 && !p(t.src, l = /*missingFloorConfig*/
      o[0].imageURL) && r(t, "src", l), f & /*missingFloorConfig*/
      1 && a(
        t,
        "width",
        /*missingFloorConfig*/
        o[0].imageWidth + "px"
      ), f & /*missingFloorConfig*/
      1 && a(
        t,
        "height",
        /*missingFloorConfig*/
        o[0].imageHeight + "px"
      ), /*missingFloorConfig*/
      o[0].text ? i ? i.p(o, f) : (i = u(o), i.c(), i.m(e, null)) : i && (i.d(1), i = null);
    },
    i: c,
    o: c,
    d(o) {
      o && v(e), i && i.d();
    }
  };
}
function k(s, e, t) {
  let { missingFloorConfig: l } = e;
  return s.$$set = (n) => {
    "missingFloorConfig" in n && t(0, l = n.missingFloorConfig);
  }, [l];
}
class H extends _ {
  constructor(e) {
    super(), h(this, e, k, S, z, { missingFloorConfig: 0 }, b);
  }
}
export {
  H as MissingFloor
};
