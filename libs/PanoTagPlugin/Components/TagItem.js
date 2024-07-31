import { SvelteComponent as U, init as W, safe_not_equal as X, append_styles as Y, empty as x, insert as I, transition_in as h, transition_out as y, check_outros as L, detach as N, getContext as $, element as P, space as ee, attr as u, null_to_empty as E, set_style as w, toggle_class as b, append as F, group_outros as Z, binding_callbacks as te, noop as T, create_component as K, mount_component as O, destroy_component as Q } from "../../vendor/svelte/internal/index.js";
import ie from "./Tag/index.js";
import "three";
import { noTypecheck as G } from "../utils/noTypecheck.js";
import ne from "./Common/TagPoint.js";
import { classnames as H } from "../../vendor/classnames/index.js";
import "./Tag/TextTag/index.js";
import "./Tag/TextTag/TextTag.js";
import "./Common/Line/Straight.js";
import "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
import "../../shared-utils/uuid.js";
import "./Common/Shadow.js";
import "./Common/Text/FlyMText.js";
import "./Common/Text/FlyText.js";
import "animejs";
import "../../shared-utils/isNil.js";
import "../utils/search.js";
import "../utils/constants.js";
import "./Common/Arrow.js";
import "../Assets/Icon.js";
import "../utils/doUtil.js";
import "../../shared-utils/svelte/resizeObserver.js";
import "../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "./Tag/TextTag/TextPlaneTag.js";
import "./Common/Text/MText.js";
import "../utils/px2rem.js";
import "./Tag/ImageTextTag.js";
import "./Common/Line/Polyline.js";
import "./Common/Media.js";
import "../../vendor/svelte-carousel/src/components/Carousel/Carousel.js";
import "../../vendor/svelte-carousel/src/components/Dots/Dots.js";
import "../../vendor/svelte-carousel/src/components/Dot/Dot.js";
import "../../vendor/svelte-carousel/src/components/Arrow/Arrow.js";
import "../../vendor/svelte-carousel/src/direction.js";
import "../../vendor/svelte-carousel/src/components/Progress/Progress.js";
import "../../vendor/svelte-carousel/src/actions/swipeable/swipeable.js";
import "../../vendor/svelte-carousel/src/actions/swipeable/event.js";
import "../../vendor/svelte-carousel/src/utils/event.js";
import "../../vendor/svelte-carousel/src/units.js";
import "../../vendor/svelte-carousel/src/actions/hoverable/hoverable.js";
import "../../vendor/svelte-carousel/src/actions/hoverable/event.js";
import "../../vendor/svelte-carousel/src/actions/tappable/tappable.js";
import "../../vendor/svelte-carousel/src/utils/math.js";
import "../../vendor/svelte-carousel/src/actions/tappable/event.js";
import "../../vendor/svelte-carousel/src/utils/page.js";
import "../../vendor/svelte-carousel/src/utils/clones.js";
import "../../vendor/svelte-carousel/src/utils/object.js";
import "../../vendor/svelte-carousel/src/components/Carousel/createCarousel.js";
import "../../vendor/easy-reactive/src/simply-reactive.js";
import "../../vendor/lodash.get/index.js";
import "../../_commonjsHelpers.js";
import "../../vendor/lodash.clonedeep/index.js";
import "../../vendor/easy-reactive/src/utils/subscription.js";
import "../../vendor/easy-reactive/src/utils/object.js";
import "../../vendor/lodash.isequal/index.js";
import "../../vendor/easy-reactive/src/utils/watcher.js";
import "../../vendor/svelte-carousel/src/utils/lazy.js";
import "../../vendor/svelte-carousel/src/utils/ProgressManager.js";
import "../../vendor/svelte-carousel/src/utils/interval.js";
import "./Common/MediaItem.js";
import "./Tag/MarketingTag.js";
import "hammerjs";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/positionToVector3.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRenderer.js";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/even.js";
import "../../shared-utils/Subscribe.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../CSS3DRenderPlugin/utils/three/OpacityMesh.js";
import "../../shared-utils/three/centerPoint.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "./Tag/AudioTag/index.js";
import "./Tag/AudioTag/AudioTag.js";
import "./Common/Audio.js";
import "../utils/audio/SharedAudio.js";
import "../../shared-utils/audio.js";
import "./Common/Icon/audioIcon.js";
import "./Tag/AudioTag/AudioPlaneTag.js";
import "./Tag/MediaPlane.js";
import "./Tag/LinkTag.js";
import "./Common/Icon/Icon.js";
import "../utils/getImageInfo.js";
import "./Tag/PanoramaTag.js";
import "./Tag/CustomTag.js";
function oe(n) {
  Y(n, "svelte-g38zun", ".tag.svelte-g38zun{will-change:opacity}.tag.withAnimation.svelte-g38zun{transition:opacity 0.2s linear}.tag.enableZIndex.svelte-g38zun{position:absolute;left:0;top:0;width:100%;height:100%}.tag.hide.svelte-g38zun{opacity:0;pointer-events:none}.tag.hide.svelte-g38zun *{pointer-events:none !important}.tag.unClickable.svelte-g38zun{pointer-events:none !important}.tag.unClickable.svelte-g38zun *{pointer-events:none !important}.tag.disable.svelte-g38zun{display:none}.wrapper.svelte-g38zun{position:absolute;width:0rem;height:0rem;overflow:visible;pointer-events:auto}");
}
function J(n) {
  let e, i, t, o, l, s, c, k, d, v, f;
  const z = [ae, re], g = [];
  function a(r, p) {
    return (
      /*havePoint*/
      r[16] ? 0 : 1
    );
  }
  t = a(n), o = g[t] = z[t](n);
  const S = [le, pe], _ = [];
  function M(r, p) {
    return (
      /*haveContent*/
      r[15] ? 0 : 1
    );
  }
  return s = M(n), c = _[s] = S[s](n), {
    c() {
      e = P("div"), i = P("div"), o.c(), l = ee(), c.c(), u(i, "class", k = E(H(
        "wrapper",
        /*tag*/
        n[0].className ? `${/*tag*/
        n[0].className}__wrapper` : void 0
      )) + " svelte-g38zun"), u(
        i,
        "data-tag-unfolded",
        /*unfolded*/
        n[7]
      ), u(
        i,
        "data-tag-id",
        /*id*/
        n[14]
      ), u(i, "data-content-type", d = /*tag*/
      n[0].contentType), w(
        i,
        "left",
        /*left*/
        n[11]
      ), w(
        i,
        "top",
        /*top*/
        n[10]
      ), u(e, "class", "tag svelte-g38zun"), u(
        e,
        "data-tag-id",
        /*id*/
        n[14]
      ), u(e, "id", v = `tag-${/*id*/
      n[14]}`), b(
        e,
        "unClickable",
        /*tag*/
        n[0].config.clickable === !1
      ), b(
        e,
        "disable",
        /*disable*/
        n[13]
      ), b(
        e,
        "hide",
        /*hide*/
        n[12]
      ), b(
        e,
        "withAnimation",
        /*withAnimation*/
        n[1]
      ), b(
        e,
        "enableZIndex",
        /*zIndex*/
        n[9]
      ), w(
        e,
        "z-index",
        /*zIndex*/
        n[9]
      );
    },
    m(r, p) {
      I(r, e, p), F(e, i), g[t].m(i, null), F(i, l), _[s].m(i, null), n[18](e), f = !0;
    },
    p(r, p) {
      let A = t;
      t = a(r), t === A ? g[t].p(r, p) : (Z(), y(g[A], 1, 1, () => {
        g[A] = null;
      }), L(), o = g[t], o ? o.p(r, p) : (o = g[t] = z[t](r), o.c()), h(o, 1), o.m(i, l));
      let C = s;
      s = M(r), s === C ? _[s].p(r, p) : (Z(), y(_[C], 1, 1, () => {
        _[C] = null;
      }), L(), c = _[s], c ? c.p(r, p) : (c = _[s] = S[s](r), c.c()), h(c, 1), c.m(i, null)), (!f || p & /*tag*/
      1 && k !== (k = E(H(
        "wrapper",
        /*tag*/
        r[0].className ? `${/*tag*/
        r[0].className}__wrapper` : void 0
      )) + " svelte-g38zun")) && u(i, "class", k), (!f || p & /*unfolded*/
      128) && u(
        i,
        "data-tag-unfolded",
        /*unfolded*/
        r[7]
      ), (!f || p & /*id*/
      16384) && u(
        i,
        "data-tag-id",
        /*id*/
        r[14]
      ), (!f || p & /*tag*/
      1 && d !== (d = /*tag*/
      r[0].contentType)) && u(i, "data-content-type", d), p & /*left*/
      2048 && w(
        i,
        "left",
        /*left*/
        r[11]
      ), p & /*top*/
      1024 && w(
        i,
        "top",
        /*top*/
        r[10]
      ), (!f || p & /*id*/
      16384) && u(
        e,
        "data-tag-id",
        /*id*/
        r[14]
      ), (!f || p & /*id*/
      16384 && v !== (v = `tag-${/*id*/
      r[14]}`)) && u(e, "id", v), (!f || p & /*tag*/
      1) && b(
        e,
        "unClickable",
        /*tag*/
        r[0].config.clickable === !1
      ), (!f || p & /*disable*/
      8192) && b(
        e,
        "disable",
        /*disable*/
        r[13]
      ), (!f || p & /*hide*/
      4096) && b(
        e,
        "hide",
        /*hide*/
        r[12]
      ), (!f || p & /*withAnimation*/
      2) && b(
        e,
        "withAnimation",
        /*withAnimation*/
        r[1]
      ), (!f || p & /*zIndex*/
      512) && b(
        e,
        "enableZIndex",
        /*zIndex*/
        r[9]
      ), p & /*zIndex*/
      512 && w(
        e,
        "z-index",
        /*zIndex*/
        r[9]
      );
    },
    i(r) {
      f || (h(o), h(c), f = !0);
    },
    o(r) {
      y(o), y(c), f = !1;
    },
    d(r) {
      r && N(e), g[t].d(), _[s].d(), n[18](null);
    }
  };
}
function re(n) {
  let e;
  return {
    c() {
      e = P("div"), u(e, "data-info", "tag point is disable");
    },
    m(i, t) {
      I(i, e, t);
    },
    p: T,
    i: T,
    o: T,
    d(i) {
      i && N(e);
    }
  };
}
function ae(n) {
  let e, i;
  return e = new ne({ props: { tag: (
    /*tag*/
    n[0]
  ) } }), {
    c() {
      K(e.$$.fragment);
    },
    m(t, o) {
      O(e, t, o), i = !0;
    },
    p(t, o) {
      const l = {};
      o & /*tag*/
      1 && (l.tag = /*tag*/
      t[0]), e.$set(l);
    },
    i(t) {
      i || (h(e.$$.fragment, t), i = !0);
    },
    o(t) {
      y(e.$$.fragment, t), i = !1;
    },
    d(t) {
      Q(e, t);
    }
  };
}
function pe(n) {
  let e;
  return {
    c() {
      e = P("div"), u(e, "data-info", "tag content is disable");
    },
    m(i, t) {
      I(i, e, t);
    },
    p: T,
    i: T,
    o: T,
    d(i) {
      i && N(e);
    }
  };
}
function le(n) {
  let e, i;
  return e = new ie({
    props: {
      mediaStore: (
        /*mediaStore*/
        n[2]
      ),
      withAnimation: (
        /*withAnimation*/
        n[1]
      ),
      tag: G(
        /*tag*/
        n[0]
      ),
      hooks: (
        /*hooks*/
        n[17]
      ),
      state: (
        /*state*/
        n[5]
      ),
      temporaryState: (
        /*temporaryState*/
        n[6]
      ),
      rendererMap: (
        /*rendererMap*/
        n[3]
      ),
      contentTypeMap: (
        /*contentTypeMap*/
        n[4]
      )
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(t, o) {
      O(e, t, o), i = !0;
    },
    p(t, o) {
      const l = {};
      o & /*mediaStore*/
      4 && (l.mediaStore = /*mediaStore*/
      t[2]), o & /*withAnimation*/
      2 && (l.withAnimation = /*withAnimation*/
      t[1]), o & /*tag*/
      1 && (l.tag = G(
        /*tag*/
        t[0]
      )), o & /*state*/
      32 && (l.state = /*state*/
      t[5]), o & /*temporaryState*/
      64 && (l.temporaryState = /*temporaryState*/
      t[6]), o & /*rendererMap*/
      8 && (l.rendererMap = /*rendererMap*/
      t[3]), o & /*contentTypeMap*/
      16 && (l.contentTypeMap = /*contentTypeMap*/
      t[4]), e.$set(l);
    },
    i(t) {
      i || (h(e.$$.fragment, t), i = !0);
    },
    o(t) {
      y(e.$$.fragment, t), i = !1;
    },
    d(t) {
      Q(e, t);
    }
  };
}
function me(n) {
  let e, i, t = (
    /*screenPosition*/
    n[8] && J(n)
  );
  return {
    c() {
      t && t.c(), e = x();
    },
    m(o, l) {
      t && t.m(o, l), I(o, e, l), i = !0;
    },
    p(o, [l]) {
      /*screenPosition*/
      o[8] ? t ? (t.p(o, l), l & /*screenPosition*/
      256 && h(t, 1)) : (t = J(o), t.c(), h(t, 1), t.m(e.parentNode, e)) : t && (Z(), y(t, 1, 1, () => {
        t = null;
      }), L());
    },
    i(o) {
      i || (h(t), i = !0);
    },
    o(o) {
      y(t), i = !1;
    },
    d(o) {
      t && t.d(o), o && N(e);
    }
  };
}
function fe(n, e, i) {
  let t, o, l, s, c, k, d, v, f, z, { withAnimation: g = !1 } = e, { tag: a } = e, { mediaStore: S } = e, { rendererMap: _ = /* @__PURE__ */ new Map() } = e, { contentTypeMap: M = /* @__PURE__ */ new Map() } = e, { state: r } = e, { temporaryState: p } = e;
  const A = $("hooks");
  function C(m) {
    te[m ? "unshift" : "push"](() => {
      a.dom = m, i(0, a);
    });
  }
  return n.$$set = (m) => {
    "withAnimation" in m && i(1, g = m.withAnimation), "tag" in m && i(0, a = m.tag), "mediaStore" in m && i(2, S = m.mediaStore), "rendererMap" in m && i(3, _ = m.rendererMap), "contentTypeMap" in m && i(4, M = m.contentTypeMap), "state" in m && i(5, r = m.state), "temporaryState" in m && i(6, p = m.temporaryState);
  }, n.$$.update = () => {
    var m, q, D, R;
    n.$$.dirty & /*tag, rendererMap*/
    9 && i(16, t = (() => {
      var V, j, B;
      return !(((j = (V = a.style) == null ? void 0 : V.point) == null ? void 0 : j.enabled) === !1 || ((B = _.get(a.contentType)) == null ? void 0 : B.usePoint) === !1 || a.contentType === "Sticker" || a.contentType === "Link" || a.contentType === "VRLink" || a.contentType === "PanoLink" || a.contentType === "Panorama" || a.contentType === "Audio" && a.data.appearance === "plane");
    })()), n.$$.dirty & /*tag*/
    1 && i(15, o = (() => a.stickType === "2DPoint")()), n.$$.dirty & /*tag*/
    1 && i(14, l = a.id), n.$$.dirty & /*tag*/
    1 && i(13, s = a.enabled === !1 || !a.state), n.$$.dirty & /*tag*/
    1 && i(12, c = !((m = a.state) != null && m.visible) || ((q = a.temporaryState) == null ? void 0 : q.visible) === !1 || !a.screenPosition), n.$$.dirty & /*tag*/
    1 && i(7, k = (D = a.state) == null ? void 0 : D.unfolded), n.$$.dirty & /*tag*/
    1 && i(8, d = a.screenPosition), n.$$.dirty & /*screenPosition*/
    256 && i(11, v = (d == null ? void 0 : d.leftPercent) + "%"), n.$$.dirty & /*screenPosition*/
    256 && i(10, f = (d == null ? void 0 : d.topPercent) + "%"), n.$$.dirty & /*unfolded, tag*/
    129 && i(9, z = k ? ((R = a.zIndex) != null ? R : 0) + (k ? 1e6 : 0) : void 0);
  }, [
    a,
    g,
    S,
    _,
    M,
    r,
    p,
    k,
    d,
    z,
    f,
    v,
    c,
    s,
    l,
    o,
    t,
    A,
    C
  ];
}
class Xt extends U {
  constructor(e) {
    super(), W(
      this,
      e,
      fe,
      me,
      X,
      {
        withAnimation: 1,
        tag: 0,
        mediaStore: 2,
        rendererMap: 3,
        contentTypeMap: 4,
        state: 5,
        temporaryState: 6
      },
      oe
    );
  }
}
export {
  Xt as default
};
