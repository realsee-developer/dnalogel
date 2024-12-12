import { SvelteComponent as h, init as v, safe_not_equal as x, append_styles as F, element as r, space as C, attr as f, src_url_equal as p, set_style as m, insert as d, append as g, noop as c, detach as _, text as z, set_data as b } from "../../vendor/svelte/internal/index.js";
function S(s) {
  F(s, "svelte-1lm20n5", ".missing-floor.svelte-1lm20n5{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);display:flex;flex-direction:column;align-items:center}.text.svelte-1lm20n5{margin-top:0.75rem;color:#fff;opacity:0.3}");
}
function u(s) {
  let e, t = (
    /*missingFloorConfig*/
    s[0].text + ""
  ), n;
  return {
    c() {
      e = r("span"), n = z(t), f(e, "class", "text svelte-1lm20n5"), m(
        e,
        "font-size",
        /*missingFloorConfig*/
        s[0].textFontSize + "px"
      );
    },
    m(l, i) {
      d(l, e, i), g(e, n);
    },
    p(l, i) {
      i & /*missingFloorConfig*/
      1 && t !== (t = /*missingFloorConfig*/
      l[0].text + "") && b(n, t), i & /*missingFloorConfig*/
      1 && m(
        e,
        "font-size",
        /*missingFloorConfig*/
        l[0].textFontSize + "px"
      );
    },
    d(l) {
      l && _(e);
    }
  };
}
function k(s) {
  let e, t, n, l, i = (
    /*missingFloorConfig*/
    s[0].text && u(s)
  );
  return {
    c() {
      e = r("div"), t = r("img"), l = C(), i && i.c(), f(t, "class", "image"), f(t, "alt", "缺省楼层展位图"), p(t.src, n = /*missingFloorConfig*/
      s[0].imageURL) || f(t, "src", n), m(
        t,
        "width",
        /*missingFloorConfig*/
        s[0].imageWidth + "px"
      ), m(
        t,
        "height",
        /*missingFloorConfig*/
        s[0].imageHeight + "px"
      ), f(e, "class", "missing-floor svelte-1lm20n5");
    },
    m(o, a) {
      d(o, e, a), g(e, t), g(e, l), i && i.m(e, null);
    },
    p(o, [a]) {
      a & /*missingFloorConfig*/
      1 && !p(t.src, n = /*missingFloorConfig*/
      o[0].imageURL) && f(t, "src", n), a & /*missingFloorConfig*/
      1 && m(
        t,
        "width",
        /*missingFloorConfig*/
        o[0].imageWidth + "px"
      ), a & /*missingFloorConfig*/
      1 && m(
        t,
        "height",
        /*missingFloorConfig*/
        o[0].imageHeight + "px"
      ), /*missingFloorConfig*/
      o[0].text ? i ? i.p(o, a) : (i = u(o), i.c(), i.m(e, null)) : i && (i.d(1), i = null);
    },
    i: c,
    o: c,
    d(o) {
      o && _(e), i && i.d();
    }
  };
}
function q(s, e, t) {
  let { missingFloorConfig: n } = e;
  return s.$$set = (l) => {
    "missingFloorConfig" in l && t(0, n = l.missingFloorConfig);
  }, [n];
}
class H extends h {
  constructor(e) {
    super(), v(this, e, q, k, x, { missingFloorConfig: 0 }, S);
  }
}
export {
  H as MissingFloor
};
