import { SvelteComponent as F, init as M, safe_not_equal as U, append_styles as W, element as h, space as _, create_component as I, attr as z, set_style as y, toggle_class as b, insert as X, append as c, mount_component as R, listen as B, transition_in as j, transition_out as q, detach as E, destroy_component as A, getContext as G, bubble as H } from "../../../vendor/svelte/internal/index.js";
import J from "./Shadow.js";
import K from "./Icon/Icon.js";
import { Image_Default_Point as N } from "../../Assets/Icon.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "three";
import "../../utils/noTypecheck.js";
import "../../utils/getImageInfo.js";
import "../../utils/px2rem.js";
function O(t) {
  W(t, "svelte-7aiuwz", '@charset "UTF-8";.tag-point-click-helper.svelte-7aiuwz.svelte-7aiuwz{position:absolute;pointer-events:auto;cursor:pointer;width:calc(100% + 0.75rem);height:calc(100% + 0.75rem);left:50%;top:50%;transform:translate(-50%, -50%)}.tag-point-wrapper.svelte-7aiuwz.svelte-7aiuwz{pointer-events:none;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.tag-folded-point.svelte-7aiuwz.svelte-7aiuwz,.tag-unfolded-point.svelte-7aiuwz.svelte-7aiuwz{transition:all 0.5s}.tag-point-wrapper.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz{display:flex;justify-content:center;align-items:center;position:absolute;width:100%;height:100%;border-radius:50%}.tag-point-wrapper.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:0.3125rem;height:0.3125rem;border-radius:50%;background-color:white}.tag-point-wrapper.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz:before{content:"";position:absolute;width:0.875rem;height:0.875rem;border-radius:50%;background-color:rgba(0, 0, 0, 0.2)}.tag-point-wrapper.folded.svelte-7aiuwz .tag-folded-point.svelte-7aiuwz{opacity:1;scale:1}.tag-point-wrapper.folded.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz{opacity:0;scale:1}.tag-point-wrapper.unfolded.svelte-7aiuwz .tag-folded-point.svelte-7aiuwz{opacity:0;scale:0.2}.tag-point-wrapper.unfolded.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz{opacity:1;scale:1}');
}
function Q(t) {
  let i, r, d, u, m, p, w, o, a, l, g, v;
  return u = new J({
    props: {
      center: !0,
      blurRadius: 15,
      spreadRadius: 5,
      opacity: 0.3
    }
  }), a = new K({
    props: {
      icon: (
        /*url*/
        t[2]
      ),
      width: (
        /*width*/
        t[1]
      )
    }
  }), a.$on(
    "iconLoaded",
    /*iconLoaded_handler*/
    t[7]
  ), {
    c() {
      i = h("div"), r = h("div"), d = _(), I(u.$$.fragment), m = _(), p = h("div"), w = _(), o = h("div"), I(a.$$.fragment), z(r, "class", "tag-point-click-helper svelte-7aiuwz"), z(p, "class", "tag-unfolded-point svelte-7aiuwz"), y(
        p,
        "transition-delay",
        /*folded*/
        (t[3] ? (
          /*foldDelay*/
          t[5]
        ) : 0) + "ms"
      ), z(o, "class", "tag-folded-point svelte-7aiuwz"), y(
        o,
        "transition-delay",
        /*folded*/
        (t[3] ? (
          /*foldDelay*/
          t[5]
        ) : 0) + "ms"
      ), z(i, "class", "tag-point-wrapper svelte-7aiuwz"), b(
        i,
        "unfolded",
        /*unfolded*/
        t[0]
      ), b(
        i,
        "folded",
        /*folded*/
        t[3]
      );
    },
    m(e, s) {
      X(e, i, s), c(i, r), c(i, d), R(u, i, null), c(i, m), c(i, p), c(i, w), c(i, o), R(a, o, null), l = !0, g || (v = B(
        r,
        "click",
        /*handlePointClick*/
        t[4]
      ), g = !0);
    },
    p(e, [s]) {
      s & /*folded*/
      8 && y(
        p,
        "transition-delay",
        /*folded*/
        (e[3] ? (
          /*foldDelay*/
          e[5]
        ) : 0) + "ms"
      );
      const n = {};
      s & /*url*/
      4 && (n.icon = /*url*/
      e[2]), s & /*width*/
      2 && (n.width = /*width*/
      e[1]), a.$set(n), s & /*folded*/
      8 && y(
        o,
        "transition-delay",
        /*folded*/
        (e[3] ? (
          /*foldDelay*/
          e[5]
        ) : 0) + "ms"
      ), (!l || s & /*unfolded*/
      1) && b(
        i,
        "unfolded",
        /*unfolded*/
        e[0]
      ), (!l || s & /*folded*/
      8) && b(
        i,
        "folded",
        /*folded*/
        e[3]
      );
    },
    i(e) {
      l || (j(u.$$.fragment, e), j(a.$$.fragment, e), l = !0);
    },
    o(e) {
      q(u.$$.fragment, e), q(a.$$.fragment, e), l = !1;
    },
    d(e) {
      e && E(i), A(u), A(a), g = !1, v();
    }
  };
}
function V(t, i, r) {
  let d, u, m, p;
  const w = G("hooks");
  let { tag: o } = i, a, l = !1;
  const g = () => {
    a !== void 0 && clearTimeout(a), l = !0, a = setTimeout(
      () => {
        l = !1;
      },
      800
    );
  }, v = (n) => {
    l || w.emit("click", { event: n, target: "TagPoint", tag: o });
  }, e = (() => o.contentType === "Text" && o.data.appearance === "plane" ? 500 : 800)();
  function s(n) {
    H.call(this, t, n);
  }
  return t.$$set = (n) => {
    "tag" in n && r(6, o = n.tag);
  }, t.$$.update = () => {
    var n, k, T, L;
    t.$$.dirty & /*tag*/
    64 && r(0, d = (n = o.state) == null ? void 0 : n.unfolded), t.$$.dirty & /*unfolded*/
    1 && r(3, u = !d), t.$$.dirty & /*tag*/
    64 && r(2, m = (T = (k = o.style) == null ? void 0 : k.point) != null && T.url ? (L = o.style) == null ? void 0 : L.point : { url: N }), t.$$.dirty & /*tag*/
    64 && r(1, p = (() => {
      var $, C, S, D;
      const P = (C = ($ = o.style) == null ? void 0 : $.point) == null ? void 0 : C.width;
      if (typeof P == "number")
        return P;
      const f = (D = (S = o.style) == null ? void 0 : S.point) == null ? void 0 : D.size;
      if (typeof f == "number")
        return f;
      if (f === "S")
        return 18;
      if (f === "M")
        return 20;
      if (f === "L")
        return 24;
      if (f === "XL")
        return 28;
    })());
  }, g(), [
    d,
    p,
    m,
    u,
    v,
    e,
    o,
    s
  ];
}
class lt extends F {
  constructor(i) {
    super(), M(this, i, V, Q, U, { tag: 6 }, O);
  }
}
export {
  lt as default
};
