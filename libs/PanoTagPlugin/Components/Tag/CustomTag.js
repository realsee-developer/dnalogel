import { SvelteComponent as h, init as k, safe_not_equal as y, append_styles as M, element as b, attr as v, toggle_class as m, insert as _, noop as d, detach as p, onMount as E, onDestroy as j, empty as z, binding_callbacks as C, HtmlTag as w } from "../../../vendor/svelte/internal/index.js";
function T(i) {
  M(i, "svelte-kzl2aj", ".customElement__container.svelte-kzl2aj{position:relative}");
}
function q(i) {
  let e, t;
  return {
    c() {
      e = new w(!1), t = z(), e.a = t;
    },
    m(n, l) {
      e.m(
        /*renderer*/
        i[2],
        n,
        l
      ), _(n, t, l);
    },
    p: d,
    d(n) {
      n && p(t), n && e.d();
    }
  };
}
function D(i) {
  let e, t = typeof /*renderer*/
  i[2] == "string" && q(i);
  return {
    c() {
      e = b("div"), t && t.c(), v(e, "class", "customElement__container svelte-kzl2aj"), m(
        e,
        "unfolded",
        /*unfolded*/
        i[1]
      );
    },
    m(n, l) {
      _(n, e, l), t && t.m(e, null), i[5](e);
    },
    p(n, [l]) {
      typeof /*renderer*/
      n[2] == "string" && t.p(n, l), l & /*unfolded*/
      2 && m(
        e,
        "unfolded",
        /*unfolded*/
        n[1]
      );
    },
    i: d,
    o: d,
    d(n) {
      n && p(e), t && t.d(), i[5](null);
    }
  };
}
function H(i, e, t) {
  var u, c;
  let n, { tag: l } = e, { rendererMap: s = /* @__PURE__ */ new Map() } = e, r, o = (c = l.element) != null ? c : (u = s.get(l.contentType)) == null ? void 0 : u.renderer, a;
  E(() => {
    r && (o instanceof Element ? (r.appendChild(o), a = () => {
      o instanceof Element && o.remove();
    }) : typeof o == "function" && (a = o(r, l)));
  }), j(() => {
    a == null || a();
  });
  function g(f) {
    C[f ? "unshift" : "push"](() => {
      r = f, t(0, r);
    });
  }
  return i.$$set = (f) => {
    "tag" in f && t(3, l = f.tag), "rendererMap" in f && t(4, s = f.rendererMap);
  }, i.$$.update = () => {
    i.$$.dirty & /*tag*/
    8 && t(1, n = l.state.unfolded);
  }, [r, n, o, l, s, g];
}
class A extends h {
  constructor(e) {
    super(), k(this, e, H, D, y, { tag: 3, rendererMap: 4 }, T);
  }
}
export {
  A as default
};
