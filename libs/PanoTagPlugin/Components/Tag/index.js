import { SvelteComponent as tA, init as nA, safe_not_equal as iA, append_styles as oA, empty as rA, insert as U, transition_out as Q, check_outros as $, transition_in as C, detach as W, setContext as R, group_outros as AA, binding_callbacks as X, element as I, attr as _, noop as j, toggle_class as w, null_to_empty as J, set_style as Y, append as x, listen as eA, stop_propagation as aA, create_component as D, mount_component as v, destroy_component as E } from "../../../vendor/svelte/internal/index.js";
import lA from "./TextTag/index.js";
import fA from "./ImageTextTag.js";
import sA from "./MarketingTag.js";
import "three";
import { noTypecheck as p } from "../../utils/noTypecheck.js";
import mA from "./AudioTag/index.js";
import gA from "./MediaPlane.js";
import uA from "./LinkTag.js";
import cA from "./PanoramaTag.js";
import pA from "./CustomTag.js";
import { classnames as H } from "../../../vendor/classnames/index.js";
import "./TextTag/TextTag.js";
import "../Common/Line/Straight.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../../shared-utils/uuid.js";
import "../Common/Shadow.js";
import "../Common/Text/FlyMText.js";
import "../Common/Text/FlyText.js";
import "animejs";
import "../../../shared-utils/isNil.js";
import "../../utils/search.js";
import "../../utils/constants.js";
import "../Common/Arrow.js";
import "../../Assets/Icon.js";
import "../../utils/doUtil.js";
import "../../../shared-utils/svelte/resizeObserver.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "./TextTag/TextPlaneTag.js";
import "../Common/Text/MText.js";
import "../../utils/px2rem.js";
import "../Common/Line/Polyline.js";
import "../Common/Media.js";
import "../../../vendor/svelte-carousel/src/components/Carousel/Carousel.js";
import "../../../vendor/svelte-carousel/src/components/Dots/Dots.js";
import "../../../vendor/svelte-carousel/src/components/Dot/Dot.js";
import "../../../vendor/svelte-carousel/src/components/Arrow/Arrow.js";
import "../../../vendor/svelte-carousel/src/direction.js";
import "../../../vendor/svelte-carousel/src/components/Progress/Progress.js";
import "../../../vendor/svelte-carousel/src/actions/swipeable/swipeable.js";
import "../../../vendor/svelte-carousel/src/actions/swipeable/event.js";
import "../../../vendor/svelte-carousel/src/utils/event.js";
import "../../../vendor/svelte-carousel/src/units.js";
import "../../../vendor/svelte-carousel/src/actions/hoverable/hoverable.js";
import "../../../vendor/svelte-carousel/src/actions/hoverable/event.js";
import "../../../vendor/svelte-carousel/src/actions/tappable/tappable.js";
import "../../../vendor/svelte-carousel/src/utils/math.js";
import "../../../vendor/svelte-carousel/src/actions/tappable/event.js";
import "../../../vendor/svelte-carousel/src/utils/page.js";
import "../../../vendor/svelte-carousel/src/utils/clones.js";
import "../../../vendor/svelte-carousel/src/utils/object.js";
import "../../../vendor/svelte-carousel/src/components/Carousel/createCarousel.js";
import "../../../vendor/easy-reactive/src/simply-reactive.js";
import "../../../vendor/lodash.get/index.js";
import "../../../_commonjsHelpers.js";
import "../../../vendor/lodash.clonedeep/index.js";
import "../../../vendor/easy-reactive/src/utils/subscription.js";
import "../../../vendor/easy-reactive/src/utils/object.js";
import "../../../vendor/lodash.isequal/index.js";
import "../../../vendor/easy-reactive/src/utils/watcher.js";
import "../../../vendor/svelte-carousel/src/utils/lazy.js";
import "../../../vendor/svelte-carousel/src/utils/ProgressManager.js";
import "../../../vendor/svelte-carousel/src/utils/interval.js";
import "../Common/MediaItem.js";
import "hammerjs";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../shared-utils/util.js";
import "../../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../../CSS3DRenderPlugin/utils/even.js";
import "../../../shared-utils/Subscribe.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "./AudioTag/AudioTag.js";
import "../Common/Audio.js";
import "../../utils/audio/SharedAudio.js";
import "../../../shared-utils/audio.js";
import "../Common/Icon/audioIcon.js";
import "./AudioTag/AudioPlaneTag.js";
import "../Common/Icon/Icon.js";
import "../../utils/getImageInfo.js";
function dA(n) {
  oA(n, "svelte-qz1wo5", '@font-face{font-family:"TG-TYPE";font-style:normal;font-weight:400;src:local("TG-TYPE-Bold"), url(data:application/font-woff2;charset=utf-8;base64,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) format("woff2")}*{-webkit-tap-highlight-color:transparent}.content__container.svelte-qz1wo5{position:relative;left:50%;top:50%;transform:translate(-50%, -50%);font-family:PingFangSC, Segoe UI, Rototo, sans-serif}.content__container.withAnimation.svelte-qz1wo5{transition:opacity 0.2s linear}.content__container.unClickable.svelte-qz1wo5{pointer-events:none !important}.content__container.unClickable.svelte-qz1wo5 *{pointer-events:none !important}.content__wrapper.svelte-qz1wo5{pointer-events:none;width:100%;height:100%}.content__container.hide.svelte-qz1wo5{opacity:0;pointer-events:none}.content__container.hide.svelte-qz1wo5 *{pointer-events:none !important}.content__container.disable.svelte-qz1wo5{display:none}.content.svelte-qz1wo5{position:relative;width:100%;height:100%;font-size:0.75rem;color:#fff}.content.svelte-qz1wo5:not(.unfolded){pointer-events:none}.content.svelte-qz1wo5:not(.unfolded) *{pointer-events:none !important}.content.unfolded.svelte-qz1wo5{pointer-events:auto}');
}
function BA(n) {
  let A, t;
  return {
    c() {
      A = I("div"), _(A, "data-info", "tag content is keep folded"), _(A, "data-id", t = /*tag*/
      n[0].id);
    },
    m(e, i) {
      U(e, A, i);
    },
    p(e, i) {
      i & /*tag*/
      1 && t !== (t = /*tag*/
      e[0].id) && _(A, "data-id", t);
    },
    i: j,
    o: j,
    d(e) {
      e && W(A);
    }
  };
}
function wA(n) {
  let A, t, e, i, r, d, u, m, l, a, s, c, M, b, B, h, T;
  const y = [
    vA,
    DA,
    hA,
    bA,
    kA,
    CA,
    QA
  ], k = [];
  function P(o, g) {
    return g & /*tag, contentTypeMap*/
    17 && (i = null), g & /*tag, contentTypeMap*/
    17 && (r = null), g & /*tag, contentTypeMap*/
    17 && (d = null), g & /*tag, contentTypeMap*/
    17 && (u = null), g & /*tag, contentTypeMap*/
    17 && (m = null), g & /*tag, contentTypeMap*/
    17 && (l = null), g & /*tag, contentTypeMap*/
    17 && (a = null), i == null && (i = !!(["Text"].includes(
      /*tag*/
      o[0].contentType
    ) || ["Text"].includes(
      /*contentTypeMap*/
      o[4].get(
        /*tag*/
        o[0].contentType
      )
    ))), i ? 0 : (r == null && (r = !!(["ImageText", "Image", "Video"].includes(
      /*tag*/
      o[0].contentType
    ) || ["ImageText", "Image", "Video"].includes(
      /*contentTypeMap*/
      o[4].get(
        /*tag*/
        o[0].contentType
      )
    ))), r ? 1 : (d == null && (d = !!(["Audio"].includes(
      /*tag*/
      o[0].contentType
    ) || ["Audio"].includes(
      /*contentTypeMap*/
      o[4].get(
        /*tag*/
        o[0].contentType
      )
    ))), d ? 2 : (u == null && (u = !!(["Marketing"].includes(
      /*tag*/
      o[0].contentType
    ) || ["Marketing"].includes(
      /*contentTypeMap*/
      o[4].get(
        /*tag*/
        o[0].contentType
      )
    ))), u ? 3 : (m == null && (m = !!(["Link", "VRLink", "PanoLink", "Sticker"].includes(
      /*tag*/
      o[0].contentType
    ) || ["Link", "VRLink", "PanoLink", "Sticker"].includes(
      /*contentTypeMap*/
      o[4].get(
        /*tag*/
        o[0].contentType
      )
    ))), m ? 4 : (l == null && (l = !!(["MediaPlane", "MediaModel"].includes(
      /*tag*/
      o[0].contentType
    ) || ["MediaPlane", "MediaModel"].includes(
      /*contentTypeMap*/
      o[4].get(
        /*tag*/
        o[0].contentType
      )
    ))), l ? 5 : (a == null && (a = !!(["Panorama"].includes(
      /*tag*/
      o[0].contentType
    ) || ["Panorama"].includes(
      /*contentTypeMap*/
      o[4].get(
        /*tag*/
        o[0].contentType
      )
    ))), a ? 6 : -1))))));
  }
  return ~(s = P(n, -1)) && (c = k[s] = y[s](n)), {
    c() {
      var o;
      A = I("div"), t = I("div"), e = I("div"), c && c.c(), _(e, "class", "content svelte-qz1wo5"), w(
        e,
        "unfolded",
        /*tag*/
        (o = n[0].state) == null ? void 0 : o.unfolded
      ), _(t, "class", "content__wrapper svelte-qz1wo5"), _(A, "class", M = J(H(
        "content__container",
        /*tag*/
        n[0].className
      )) + " svelte-qz1wo5"), _(A, "data-id", b = /*tag*/
      n[0].id), w(
        A,
        "disable",
        /*tag*/
        n[0].enabled === !1
      ), w(
        A,
        "hide",
        /*isHide*/
        n[6]
      ), w(
        A,
        "withAnimation",
        /*withAnimation*/
        n[1]
      ), w(
        A,
        "unClickable",
        /*tag*/
        n[0].config.clickable === !1
      ), Y(
        A,
        "width",
        /*tag*/
        n[0].stickType === "Plane" || /*tag*/
        n[0].contentType === "MediaModel" ? "100%" : 0
      ), Y(
        A,
        "height",
        /*tag*/
        n[0].stickType === "Plane" || /*tag*/
        n[0].contentType === "MediaModel" ? "100%" : 0
      );
    },
    m(o, g) {
      U(o, A, g), x(A, t), x(t, e), ~s && k[s].m(e, null), n[17](A), B = !0, h || (T = eA(A, "click", aA(
        /*click_handler_1*/
        n[18]
      )), h = !0);
    },
    p(o, g) {
      var f;
      let G = s;
      s = P(o, g), s === G ? ~s && k[s].p(o, g) : (c && (AA(), Q(k[G], 1, 1, () => {
        k[G] = null;
      }), $()), ~s ? (c = k[s], c ? c.p(o, g) : (c = k[s] = y[s](o), c.c()), C(c, 1), c.m(e, null)) : c = null), (!B || g & /*tag*/
      1) && w(
        e,
        "unfolded",
        /*tag*/
        (f = o[0].state) == null ? void 0 : f.unfolded
      ), (!B || g & /*tag*/
      1 && M !== (M = J(H(
        "content__container",
        /*tag*/
        o[0].className
      )) + " svelte-qz1wo5")) && _(A, "class", M), (!B || g & /*tag*/
      1 && b !== (b = /*tag*/
      o[0].id)) && _(A, "data-id", b), (!B || g & /*tag, tag*/
      1) && w(
        A,
        "disable",
        /*tag*/
        o[0].enabled === !1
      ), (!B || g & /*tag, isHide*/
      65) && w(
        A,
        "hide",
        /*isHide*/
        o[6]
      ), (!B || g & /*tag, withAnimation*/
      3) && w(
        A,
        "withAnimation",
        /*withAnimation*/
        o[1]
      ), (!B || g & /*tag, tag*/
      1) && w(
        A,
        "unClickable",
        /*tag*/
        o[0].config.clickable === !1
      ), g & /*tag*/
      1 && Y(
        A,
        "width",
        /*tag*/
        o[0].stickType === "Plane" || /*tag*/
        o[0].contentType === "MediaModel" ? "100%" : 0
      ), g & /*tag*/
      1 && Y(
        A,
        "height",
        /*tag*/
        o[0].stickType === "Plane" || /*tag*/
        o[0].contentType === "MediaModel" ? "100%" : 0
      );
    },
    i(o) {
      B || (C(c), B = !0);
    },
    o(o) {
      Q(c), B = !1;
    },
    d(o) {
      o && W(A), ~s && k[s].d(), n[17](null), h = !1, T();
    }
  };
}
function _A(n) {
  let A, t, e, i, r, d, u;
  return t = new pA({
    props: {
      tag: p(
        /*tag*/
        n[0]
      ),
      rendererMap: (
        /*rendererMap*/
        n[3]
      )
    }
  }), {
    c() {
      A = I("div"), D(t.$$.fragment), _(A, "class", e = J(H(
        "content__container",
        /*tag*/
        n[0].className
      )) + " svelte-qz1wo5"), _(A, "data-id", i = /*tag*/
      n[0].id), w(
        A,
        "custom-tag-disable",
        /*tag*/
        n[0].enabled === !1
      ), w(
        A,
        "custom-tag-hide",
        /*isHide*/
        n[6]
      );
    },
    m(m, l) {
      U(m, A, l), v(t, A, null), n[15](A), r = !0, d || (u = eA(
        A,
        "click",
        /*click_handler*/
        n[16]
      ), d = !0);
    },
    p(m, l) {
      const a = {};
      l & /*tag*/
      1 && (a.tag = p(
        /*tag*/
        m[0]
      )), l & /*rendererMap*/
      8 && (a.rendererMap = /*rendererMap*/
      m[3]), t.$set(a), (!r || l & /*tag*/
      1 && e !== (e = J(H(
        "content__container",
        /*tag*/
        m[0].className
      )) + " svelte-qz1wo5")) && _(A, "class", e), (!r || l & /*tag*/
      1 && i !== (i = /*tag*/
      m[0].id)) && _(A, "data-id", i), (!r || l & /*tag, tag*/
      1) && w(
        A,
        "custom-tag-disable",
        /*tag*/
        m[0].enabled === !1
      ), (!r || l & /*tag, isHide*/
      65) && w(
        A,
        "custom-tag-hide",
        /*isHide*/
        m[6]
      );
    },
    i(m) {
      r || (C(t.$$.fragment, m), r = !0);
    },
    o(m) {
      Q(t.$$.fragment, m), r = !1;
    },
    d(m) {
      m && W(A), E(t), n[15](null), d = !1, u();
    }
  };
}
function QA(n) {
  let A, t;
  return A = new cA({
    props: { tag: p(
      /*tag*/
      n[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, i) {
      v(A, e, i), t = !0;
    },
    p(e, i) {
      const r = {};
      i & /*tag*/
      1 && (r.tag = p(
        /*tag*/
        e[0]
      )), A.$set(r);
    },
    i(e) {
      t || (C(A.$$.fragment, e), t = !0);
    },
    o(e) {
      Q(A.$$.fragment, e), t = !1;
    },
    d(e) {
      E(A, e);
    }
  };
}
function CA(n) {
  let A, t;
  return A = new gA({
    props: { tag: p(
      /*tag*/
      n[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, i) {
      v(A, e, i), t = !0;
    },
    p(e, i) {
      const r = {};
      i & /*tag*/
      1 && (r.tag = p(
        /*tag*/
        e[0]
      )), A.$set(r);
    },
    i(e) {
      t || (C(A.$$.fragment, e), t = !0);
    },
    o(e) {
      Q(A.$$.fragment, e), t = !1;
    },
    d(e) {
      E(A, e);
    }
  };
}
function kA(n) {
  let A, t;
  return A = new uA({
    props: { tag: p(
      /*tag*/
      n[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, i) {
      v(A, e, i), t = !0;
    },
    p(e, i) {
      const r = {};
      i & /*tag*/
      1 && (r.tag = p(
        /*tag*/
        e[0]
      )), A.$set(r);
    },
    i(e) {
      t || (C(A.$$.fragment, e), t = !0);
    },
    o(e) {
      Q(A.$$.fragment, e), t = !1;
    },
    d(e) {
      E(A, e);
    }
  };
}
function bA(n) {
  let A, t;
  return A = new sA({
    props: { tag: p(
      /*tag*/
      n[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, i) {
      v(A, e, i), t = !0;
    },
    p(e, i) {
      const r = {};
      i & /*tag*/
      1 && (r.tag = p(
        /*tag*/
        e[0]
      )), A.$set(r);
    },
    i(e) {
      t || (C(A.$$.fragment, e), t = !0);
    },
    o(e) {
      Q(A.$$.fragment, e), t = !1;
    },
    d(e) {
      E(A, e);
    }
  };
}
function hA(n) {
  let A, t;
  return A = new mA({
    props: { tag: p(
      /*tag*/
      n[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, i) {
      v(A, e, i), t = !0;
    },
    p(e, i) {
      const r = {};
      i & /*tag*/
      1 && (r.tag = p(
        /*tag*/
        e[0]
      )), A.$set(r);
    },
    i(e) {
      t || (C(A.$$.fragment, e), t = !0);
    },
    o(e) {
      Q(A.$$.fragment, e), t = !1;
    },
    d(e) {
      E(A, e);
    }
  };
}
function DA(n) {
  let A, t;
  return A = new fA({
    props: { tag: p(
      /*tag*/
      n[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, i) {
      v(A, e, i), t = !0;
    },
    p(e, i) {
      const r = {};
      i & /*tag*/
      1 && (r.tag = p(
        /*tag*/
        e[0]
      )), A.$set(r);
    },
    i(e) {
      t || (C(A.$$.fragment, e), t = !0);
    },
    o(e) {
      Q(A.$$.fragment, e), t = !1;
    },
    d(e) {
      E(A, e);
    }
  };
}
function vA(n) {
  let A, t;
  return A = new lA({
    props: { tag: p(
      /*tag*/
      n[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, i) {
      v(A, e, i), t = !0;
    },
    p(e, i) {
      const r = {};
      i & /*tag*/
      1 && (r.tag = p(
        /*tag*/
        e[0]
      )), A.$set(r);
    },
    i(e) {
      t || (C(A.$$.fragment, e), t = !0);
    },
    o(e) {
      Q(A.$$.fragment, e), t = !1;
    },
    d(e) {
      E(A, e);
    }
  };
}
function EA(n) {
  let A, t, e, i, r;
  const d = [_A, wA, BA], u = [];
  function m(l, a) {
    return a & /*tag, rendererMap*/
    9 && (A = null), A == null && (A = !!/*tag*/
    (l[0].element || /*rendererMap*/
    l[3].has(
      /*tag*/
      l[0].contentType
    ))), A ? 0 : (
      /*haveContent*/
      l[5] ? 1 : 2
    );
  }
  return t = m(n, -1), e = u[t] = d[t](n), {
    c() {
      e.c(), i = rA();
    },
    m(l, a) {
      u[t].m(l, a), U(l, i, a), r = !0;
    },
    p(l, [a]) {
      let s = t;
      t = m(l, a), t === s ? u[t].p(l, a) : (AA(), Q(u[s], 1, 1, () => {
        u[s] = null;
      }), $(), e = u[t], e ? e.p(l, a) : (e = u[t] = d[t](l), e.c()), C(e, 1), e.m(i.parentNode, i));
    },
    i(l) {
      r || (C(e), r = !0);
    },
    o(l) {
      Q(e), r = !1;
    },
    d(l) {
      u[t].d(l), l && W(i);
    }
  };
}
function MA(n, A, t) {
  var e, i;
  return !(!A.visible || !A.enabled || !t.visible || !((e = n.state) != null && e.visible) || ((i = n.temporaryState) == null ? void 0 : i.visible) === !1 || n.loading);
}
function TA(n, A, t) {
  let e, i, r, d, u, m, { withAnimation: l = !1 } = A, { tag: a } = A, { hooks: s } = A, { rendererMap: c = /* @__PURE__ */ new Map() } = A, { contentTypeMap: M = /* @__PURE__ */ new Map() } = A, { state: b } = A, { mediaStore: B } = A, { temporaryState: h } = A;
  R("hooks", s), R("mediaStore", B);
  let T, y;
  function k(f) {
    f ? s.emit("exposure", { id: d, type: "start" }) : s.emit("exposure", { id: d, type: "end" });
  }
  function P(f) {
    X[f ? "unshift" : "push"](() => {
      a.contentDom = f, t(0, a);
    });
  }
  const o = (f) => s.emit("click", { event: f, target: "TagContent", tag: a });
  function g(f) {
    X[f ? "unshift" : "push"](() => {
      a.contentDom = f, t(0, a);
    });
  }
  const G = (f) => s.emit("click", { event: f, target: "TagContent", tag: a });
  return n.$$set = (f) => {
    "withAnimation" in f && t(1, l = f.withAnimation), "tag" in f && t(0, a = f.tag), "hooks" in f && t(2, s = f.hooks), "rendererMap" in f && t(3, c = f.rendererMap), "contentTypeMap" in f && t(4, M = f.contentTypeMap), "state" in f && t(7, b = f.state), "mediaStore" in f && t(8, B = f.mediaStore), "temporaryState" in f && t(9, h = f.temporaryState);
  }, n.$$.update = () => {
    var f, S, z, F, L, O, q, V, Z, K, N;
    n.$$.dirty & /*tag*/
    1 && t(13, e = (f = a.state) == null ? void 0 : f.unfolded), n.$$.dirty & /*tag*/
    1 && t(12, i = (S = a.state) == null ? void 0 : S.visible), n.$$.dirty & /*state, temporaryState, tag*/
    641 && t(14, r = b.visible && h.visible && ((z = a.state) == null ? void 0 : z.visible)), n.$$.dirty & /*tag*/
    1 && (d = a.id), n.$$.dirty & /*tag, state, temporaryState*/
    641 && t(6, u = !MA(a, b, h)), n.$$.dirty & /*isVisible*/
    16384 && k(r), n.$$.dirty & /*tag, unfolded, lastUnfoldedState, visible, lastVisibleState*/
    15361 && a.hooks && (e !== void 0 && e !== y && (t(11, y = e), e ? (L = (F = a.hooks).emit) == null || L.call(F, "unfolded") : (q = a == null ? void 0 : (O = a.hooks).emit) == null || q.call(O, "folded")), i !== void 0 && i !== T && (t(10, T = i), i ? (Z = (V = a.hooks).emit) == null || Z.call(V, "show") : (N = (K = a.hooks).emit) == null || N.call(K, "hide"))), n.$$.dirty & /*tag*/
    1 && t(5, m = (() => !(typeof a.config.unfoldedConfig == "object" && a.config.unfoldedConfig.keep === "folded"))());
  }, [
    a,
    l,
    s,
    c,
    M,
    m,
    u,
    b,
    B,
    h,
    T,
    y,
    i,
    e,
    r,
    P,
    o,
    g,
    G
  ];
}
class ut extends tA {
  constructor(A) {
    super(), nA(
      this,
      A,
      TA,
      EA,
      iA,
      {
        withAnimation: 1,
        tag: 0,
        hooks: 2,
        rendererMap: 3,
        contentTypeMap: 4,
        state: 7,
        mediaStore: 8,
        temporaryState: 9
      },
      dA
    );
  }
}
export {
  ut as default
};
