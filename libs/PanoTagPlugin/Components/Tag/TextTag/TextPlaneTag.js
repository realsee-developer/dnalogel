import { SvelteComponent as j, init as A, safe_not_equal as B, append_styles as E, empty as F, insert as b, transition_in as u, transition_out as c, check_outros as D, detach as $, create_component as L, space as T, element as v, attr as g, set_style as C, toggle_class as w, mount_component as M, append as h, group_outros as N, destroy_component as R } from "../../../../vendor/svelte/internal/index.js";
import G from "../../Common/Line/Straight.js";
import P from "../../Common/Text/MText.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
import "../../../../shared-utils/uuid.js";
import "../../../utils/px2rem.js";
function H(t) {
  E(t, "svelte-1oxrkr1", ".plane__container.svelte-1oxrkr1.svelte-1oxrkr1{position:absolute;left:50%;transform:translate(-50%, -100%);width:-moz-max-content;width:max-content}.plane__wrapper.svelte-1oxrkr1.svelte-1oxrkr1{transition:transform 500ms linear, opacity 200ms linear;padding:0.625rem;background-color:rgba(0, 0, 0, 0.5);border:0.03125rem solid rgba(255, 255, 255, 0.3);border-radius:0.25rem}.unfolded.svelte-1oxrkr1 .plane__wrapper.svelte-1oxrkr1{transition-delay:200ms, 500ms;opacity:1}.folded.svelte-1oxrkr1 .plane__wrapper.svelte-1oxrkr1{opacity:0}.plane.svelte-1oxrkr1.svelte-1oxrkr1{max-width:11.75rem}.title.svelte-1oxrkr1.svelte-1oxrkr1{white-space:pre-wrap;font-weight:bold;font-size:0.75rem;line-height:1.125rem}.description.svelte-1oxrkr1.svelte-1oxrkr1{margin-top:0.25rem;white-space:pre-wrap;font-size:0.6875rem;line-height:1rem}");
}
function S(t) {
  var _, k;
  let o, a, e, n, r, d, s, f, m;
  o = new G({
    props: {
      unfolded: (
        /*unfolded*/
        t[1]
      ),
      direction: "vertical",
      length: 15,
      duration: 500,
      inDelay: 200,
      useLinearColor: !0
    }
  }), s = new P({
    props: {
      text: (
        /*title*/
        t[4]
      ),
      edit: (
        /*tag*/
        (_ = t[0].data.edit) == null ? void 0 : _.title
      ),
      maxLine: (
        /*titleMaxRows*/
        t[2]
      )
    }
  });
  let l = (
    /*tag*/
    (t[0].data.description || /*tag*/
    ((k = t[0].data.edit) == null ? void 0 : k.description)) && q(t)
  );
  return {
    c() {
      L(o.$$.fragment), a = T(), e = v("div"), n = v("div"), r = v("div"), d = v("div"), L(s.$$.fragment), f = T(), l && l.c(), g(d, "class", "title svelte-1oxrkr1"), g(r, "class", "plane svelte-1oxrkr1"), g(n, "class", "plane__wrapper svelte-1oxrkr1"), C(
        n,
        "transform",
        /*unfolded*/
        t[1] ? "translateY(-15px)" : "translateY(0)"
      ), g(e, "class", "plane__container svelte-1oxrkr1"), w(
        e,
        "unfolded",
        /*unfolded*/
        t[1]
      ), w(
        e,
        "folded",
        /*folded*/
        t[5]
      );
    },
    m(i, p) {
      M(o, i, p), b(i, a, p), b(i, e, p), h(e, n), h(n, r), h(r, d), M(s, d, null), h(r, f), l && l.m(r, null), m = !0;
    },
    p(i, p) {
      var y, z;
      const Y = {};
      p & /*unfolded*/
      2 && (Y.unfolded = /*unfolded*/
      i[1]), o.$set(Y);
      const x = {};
      p & /*title*/
      16 && (x.text = /*title*/
      i[4]), p & /*tag*/
      1 && (x.edit = /*tag*/
      (y = i[0].data.edit) == null ? void 0 : y.title), p & /*titleMaxRows*/
      4 && (x.maxLine = /*titleMaxRows*/
      i[2]), s.$set(x), /*tag*/
      i[0].data.description || /*tag*/
      (z = i[0].data.edit) != null && z.description ? l ? (l.p(i, p), p & /*tag*/
      1 && u(l, 1)) : (l = q(i), l.c(), u(l, 1), l.m(r, null)) : l && (N(), c(l, 1, 1, () => {
        l = null;
      }), D()), p & /*unfolded*/
      2 && C(
        n,
        "transform",
        /*unfolded*/
        i[1] ? "translateY(-15px)" : "translateY(0)"
      ), (!m || p & /*unfolded*/
      2) && w(
        e,
        "unfolded",
        /*unfolded*/
        i[1]
      ), (!m || p & /*folded*/
      32) && w(
        e,
        "folded",
        /*folded*/
        i[5]
      );
    },
    i(i) {
      m || (u(o.$$.fragment, i), u(s.$$.fragment, i), u(l), m = !0);
    },
    o(i) {
      c(o.$$.fragment, i), c(s.$$.fragment, i), c(l), m = !1;
    },
    d(i) {
      R(o, i), i && $(a), i && $(e), R(s), l && l.d();
    }
  };
}
function q(t) {
  var n;
  let o, a, e;
  return a = new P({
    props: {
      text: (
        /*tag*/
        t[0].data.description
      ),
      edit: (
        /*tag*/
        (n = t[0].data.edit) == null ? void 0 : n.description
      ),
      maxLine: (
        /*descriptionMaxRows*/
        t[3]
      )
    }
  }), {
    c() {
      o = v("div"), L(a.$$.fragment), g(o, "class", "description svelte-1oxrkr1");
    },
    m(r, d) {
      b(r, o, d), M(a, o, null), e = !0;
    },
    p(r, d) {
      var f;
      const s = {};
      d & /*tag*/
      1 && (s.text = /*tag*/
      r[0].data.description), d & /*tag*/
      1 && (s.edit = /*tag*/
      (f = r[0].data.edit) == null ? void 0 : f.description), d & /*descriptionMaxRows*/
      8 && (s.maxLine = /*descriptionMaxRows*/
      r[3]), a.$set(s);
    },
    i(r) {
      e || (u(a.$$.fragment, r), e = !0);
    },
    o(r) {
      c(a.$$.fragment, r), e = !1;
    },
    d(r) {
      r && $(o), R(a);
    }
  };
}
function I(t) {
  let o, a, e = (
    /*tag*/
    t[0].state && S(t)
  );
  return {
    c() {
      e && e.c(), o = F();
    },
    m(n, r) {
      e && e.m(n, r), b(n, o, r), a = !0;
    },
    p(n, [r]) {
      /*tag*/
      n[0].state ? e ? (e.p(n, r), r & /*tag*/
      1 && u(e, 1)) : (e = S(n), e.c(), u(e, 1), e.m(o.parentNode, o)) : e && (N(), c(e, 1, 1, () => {
        e = null;
      }), D());
    },
    i(n) {
      a || (u(e), a = !0);
    },
    o(n) {
      c(e), a = !1;
    },
    d(n) {
      e && e.d(n), n && $(o);
    }
  };
}
function J(t, o, a) {
  let e, n, r, d, s, { tag: f } = o;
  return t.$$set = (m) => {
    "tag" in m && a(0, f = m.tag);
  }, t.$$.update = () => {
    var m, l, _, k, i;
    t.$$.dirty & /*tag*/
    1 && a(1, e = !!((m = f.state) != null && m.unfolded)), t.$$.dirty & /*unfolded*/
    2 && a(5, n = !e), t.$$.dirty & /*tag*/
    1 && a(4, r = (_ = (l = f.data.title) != null ? l : f.data.text) != null ? _ : ""), t.$$.dirty & /*tag*/
    1 && a(3, d = (k = f.data.descriptionMaxRows) != null ? k : null), t.$$.dirty & /*tag*/
    1 && a(2, s = (i = f.data.titleMaxRows) != null ? i : null);
  }, [f, e, s, d, r, n];
}
class Z extends j {
  constructor(o) {
    super(), A(this, o, J, I, B, { tag: 0 }, H);
  }
}
export {
  Z as default
};
