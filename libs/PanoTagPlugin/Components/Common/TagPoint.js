import { SvelteComponent as j, init as q, safe_not_equal as O, append_styles as U, element as h, space as _, create_component as S, attr as z, set_style as y, toggle_class as b, insert as W, append as m, mount_component as A, listen as X, transition_in as D, transition_out as I, detach as B, destroy_component as R, getContext as E, bubble as G } from "../../../vendor/svelte/internal/index.js";
import H from "./Shadow.js";
import J from "./Icon/Icon.js";
import { Image_Default_Point as K } from "../../Assets/Icon.js";
import { isModelLike as N } from "../../../shared-utils/five/mode.js";
import "three";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../utils/noTypecheck.js";
import "../../utils/getImageInfo.js";
import "../../utils/px2rem.js";
import "../../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../../vendor/three/build/three.module.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/dom/resizeObserver.js";
function Q(t) {
  U(t, "svelte-7aiuwz", '@charset "UTF-8";.tag-point-click-helper.svelte-7aiuwz.svelte-7aiuwz{position:absolute;pointer-events:auto;cursor:pointer;width:calc(100% + 0.75rem);height:calc(100% + 0.75rem);left:50%;top:50%;transform:translate(-50%, -50%)}.tag-point-wrapper.svelte-7aiuwz.svelte-7aiuwz{pointer-events:none;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.tag-folded-point.svelte-7aiuwz.svelte-7aiuwz,.tag-unfolded-point.svelte-7aiuwz.svelte-7aiuwz{transition:all 0.5s}.tag-point-wrapper.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz{display:flex;justify-content:center;align-items:center;position:absolute;width:100%;height:100%;border-radius:50%}.tag-point-wrapper.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:0.3125rem;height:0.3125rem;border-radius:50%;background-color:white}.tag-point-wrapper.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz:before{content:"";position:absolute;width:0.875rem;height:0.875rem;border-radius:50%;background-color:rgba(0, 0, 0, 0.2)}.tag-point-wrapper.folded.svelte-7aiuwz .tag-folded-point.svelte-7aiuwz{opacity:1;scale:1}.tag-point-wrapper.folded.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz{opacity:0;scale:1}.tag-point-wrapper.unfolded.svelte-7aiuwz .tag-folded-point.svelte-7aiuwz{opacity:0;scale:0.2}.tag-point-wrapper.unfolded.svelte-7aiuwz .tag-unfolded-point.svelte-7aiuwz{opacity:1;scale:1}');
}
function V(t) {
  let o, a, u, p, c, d, w, e, r, l, g, v;
  return p = new H({
    props: {
      center: !0,
      blurRadius: 15,
      spreadRadius: 5,
      opacity: 0.3
    }
  }), r = new J({
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
  }), r.$on(
    "iconLoaded",
    /*iconLoaded_handler*/
    t[7]
  ), {
    c() {
      o = h("div"), a = h("div"), u = _(), S(p.$$.fragment), c = _(), d = h("div"), w = _(), e = h("div"), S(r.$$.fragment), z(a, "class", "tag-point-click-helper svelte-7aiuwz"), z(d, "class", "tag-unfolded-point svelte-7aiuwz"), y(
        d,
        "transition-delay",
        /*folded*/
        (t[3] ? (
          /*foldDelay*/
          t[5]
        ) : 0) + "ms"
      ), z(e, "class", "tag-folded-point svelte-7aiuwz"), y(
        e,
        "transition-delay",
        /*folded*/
        (t[3] ? (
          /*foldDelay*/
          t[5]
        ) : 0) + "ms"
      ), z(o, "class", "tag-point-wrapper svelte-7aiuwz"), b(
        o,
        "unfolded",
        /*unfolded*/
        t[0]
      ), b(
        o,
        "folded",
        /*folded*/
        t[3]
      );
    },
    m(i, s) {
      W(i, o, s), m(o, a), m(o, u), A(p, o, null), m(o, c), m(o, d), m(o, w), m(o, e), A(r, e, null), l = !0, g || (v = X(
        a,
        "click",
        /*handlePointClick*/
        t[4]
      ), g = !0);
    },
    p(i, [s]) {
      s & /*folded*/
      8 && y(
        d,
        "transition-delay",
        /*folded*/
        (i[3] ? (
          /*foldDelay*/
          i[5]
        ) : 0) + "ms"
      );
      const n = {};
      s & /*url*/
      4 && (n.icon = /*url*/
      i[2]), s & /*width*/
      2 && (n.width = /*width*/
      i[1]), r.$set(n), s & /*folded*/
      8 && y(
        e,
        "transition-delay",
        /*folded*/
        (i[3] ? (
          /*foldDelay*/
          i[5]
        ) : 0) + "ms"
      ), (!l || s & /*unfolded*/
      1) && b(
        o,
        "unfolded",
        /*unfolded*/
        i[0]
      ), (!l || s & /*folded*/
      8) && b(
        o,
        "folded",
        /*folded*/
        i[3]
      );
    },
    i(i) {
      l || (D(p.$$.fragment, i), D(r.$$.fragment, i), l = !0);
    },
    o(i) {
      I(p.$$.fragment, i), I(r.$$.fragment, i), l = !1;
    },
    d(i) {
      i && B(o), R(p), R(r), g = !1, v();
    }
  };
}
function Y(t, o, a) {
  let u, p, c, d;
  const w = E("hooks");
  let { tag: e } = o, r, l = !1;
  const g = () => {
    r !== void 0 && clearTimeout(r), l = !0, r = setTimeout(
      () => {
        l = !1;
      },
      800
    );
  }, v = (n) => {
    l || (e.entryFromModel && N(e.five.state.mode) ? e.find({ targetMode: "Panorama" }).then(() => e.unfoldAndFoldOthers()) : w.emit("click", { event: n, target: "TagPoint", tag: e }));
  }, i = (() => e.contentType === "Text" && e.data.appearance === "plane" ? 500 : 800)();
  function s(n) {
    G.call(this, t, n);
  }
  return t.$$set = (n) => {
    "tag" in n && a(6, e = n.tag);
  }, t.$$.update = () => {
    var n, k, T, L;
    t.$$.dirty & /*tag*/
    64 && a(0, u = (n = e.state) == null ? void 0 : n.unfolded), t.$$.dirty & /*unfolded*/
    1 && a(3, p = !u), t.$$.dirty & /*tag*/
    64 && a(2, c = (T = (k = e.style) == null ? void 0 : k.point) != null && T.url ? (L = e.style) == null ? void 0 : L.point : { url: K }), t.$$.dirty & /*tag*/
    64 && a(1, d = (() => {
      var M, $, C, F;
      const P = ($ = (M = e.style) == null ? void 0 : M.point) == null ? void 0 : $.width;
      if (typeof P == "number")
        return P;
      const f = (F = (C = e.style) == null ? void 0 : C.point) == null ? void 0 : F.size;
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
    u,
    d,
    c,
    p,
    v,
    i,
    e,
    s
  ];
}
class Ct extends j {
  constructor(o) {
    super(), q(this, o, Y, V, O, { tag: 6 }, Q);
  }
}
export {
  Ct as default
};
