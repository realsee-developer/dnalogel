import { SvelteComponent as d, init as b, safe_not_equal as v, append_styles as k, element as h, attr as y, insert as I, group_outros as D, transition_out as u, check_outros as x, transition_in as c, detach as z, create_component as _, mount_component as g, destroy_component as p } from "../../vendor/svelte/internal/index.js";
import { Normalmage as w } from "./Normalmage.js";
import { SvgImage as C } from "./SvgImage.js";
function S(l) {
  k(l, "svelte-ozpg4a", ".floorplan-plugin__base-image.svelte-ozpg4a{position:absolute;z-index:10;width:100%;height:100%;pointer-events:none}");
}
function $(l) {
  let n, t;
  return n = new w({ props: { url: (
    /*imageData*/
    l[1].url
  ) } }), {
    c() {
      _(n.$$.fragment);
    },
    m(e, r) {
      g(n, e, r), t = !0;
    },
    p(e, r) {
      const i = {};
      r & /*imageData*/
      2 && (i.url = /*imageData*/
      e[1].url), n.$set(i);
    },
    i(e) {
      t || (c(n.$$.fragment, e), t = !0);
    },
    o(e) {
      u(n.$$.fragment, e), t = !1;
    },
    d(e) {
      p(n, e);
    }
  };
}
function q(l) {
  let n, t;
  return n = new C({
    props: { content: (
      /*svgContent*/
      l[0]
    ) }
  }), {
    c() {
      _(n.$$.fragment);
    },
    m(e, r) {
      g(n, e, r), t = !0;
    },
    p(e, r) {
      const i = {};
      r & /*svgContent*/
      1 && (i.content = /*svgContent*/
      e[0]), n.$set(i);
    },
    i(e) {
      t || (c(n.$$.fragment, e), t = !0);
    },
    o(e) {
      u(n.$$.fragment, e), t = !1;
    },
    d(e) {
      p(n, e);
    }
  };
}
function B(l) {
  let n, t, e, r;
  const i = [q, $], a = [];
  function f(o, s) {
    return (
      /*svgContent*/
      o[0] ? 0 : (
        /*imageData*/
        o[1] ? 1 : -1
      )
    );
  }
  return ~(t = f(l)) && (e = a[t] = i[t](l)), {
    c() {
      n = h("div"), e && e.c(), y(n, "class", "floorplan-plugin__base-image svelte-ozpg4a");
    },
    m(o, s) {
      I(o, n, s), ~t && a[t].m(n, null), r = !0;
    },
    p(o, [s]) {
      let m = t;
      t = f(o), t === m ? ~t && a[t].p(o, s) : (e && (D(), u(a[m], 1, 1, () => {
        a[m] = null;
      }), x()), ~t ? (e = a[t], e ? e.p(o, s) : (e = a[t] = i[t](o), e.c()), c(e, 1), e.m(n, null)) : e = null);
    },
    i(o) {
      r || (c(e), r = !0);
    },
    o(o) {
      u(e), r = !1;
    },
    d(o) {
      o && z(n), ~t && a[t].d();
    }
  };
}
function N(l, n, t) {
  let e, r, { floorIndex: i } = n, { floorplanData: a } = n;
  return l.$$set = (f) => {
    "floorIndex" in f && t(2, i = f.floorIndex), "floorplanData" in f && t(3, a = f.floorplanData);
  }, l.$$.update = () => {
    var f, o;
    l.$$.dirty & /*floorplanData, floorIndex*/
    12 && t(1, e = a.outlines[i]), l.$$.dirty & /*floorplanData, floorIndex*/
    12 && t(0, r = (o = (f = a.outlines) == null ? void 0 : f[i]) == null ? void 0 : o.svgContent);
  }, [r, e, i, a];
}
class F extends d {
  constructor(n) {
    super(), b(this, n, N, B, v, { floorIndex: 2, floorplanData: 3 }, S);
  }
}
export {
  F as BaseImage
};
