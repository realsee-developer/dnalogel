import { SvelteComponent as pe, init as ue, flush as y, safe_not_equal as me, append_styles as fe, element as M, space as z, create_component as D, attr as T, set_style as x, toggle_class as w, insert as F, append as C, mount_component as S, transition_out as L, check_outros as ce, transition_in as E, detach as O, destroy_component as U, getContext as ge, createEventDispatcher as he, group_outros as _e, binding_callbacks as Y, bubble as ve, noop as $, listen as A, run_all as be } from "../../../vendor/svelte/internal/index.js";
import ke from "./Shadow.js";
import ye from "./Icon/Icon.js";
import { Image_Default_Point as we } from "../../Assets/Icon.js";
import "../../../shared-utils/tag.js";
import { isModelLike as Pe } from "../../../shared-utils/five/mode.js";
import "three";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../shared-utils/three/blink.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../../vendor/earcut/src/earcut.js";
import "../../../shared-utils/five/FivePuppet.js";
import Ce from "../Tag/AudioTag/AudioPoint.js";
import { noTypecheck as Z } from "../../utils/noTypecheck.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../utils/getImageInfo.js";
import "../../utils/px2rem.js";
import "./Icon/animationUtils.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/three/core/Raycaster.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../shared-utils/throttle.js";
import "../../../shared-utils/five/fiveModelLoad.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/isNil.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/CSS3DRender/index.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../shared-utils/three/IObject3D.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/five/getFiveFromParentChain.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../Sculpt/utils/unit.js";
import "../../../Sculpt/utils/renderDom.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "@realsee/five";
import "./Audio.js";
import "../../utils/audio/SharedAudio.js";
import "../../../shared-utils/audio.js";
import "../../utils/audio/AudioDiagnostics.js";
import "./Icon/audioIcon.js";
function Me(t) {
  fe(t, "svelte-dorxu0", '@charset "UTF-8";.tag-point-click-helper.svelte-dorxu0.svelte-dorxu0{position:absolute;pointer-events:auto;cursor:pointer;width:141%;height:141%;left:50%;top:50%;transform:translate(-50%, -50%);z-index:1000000}.audio-tag-point-click-helper.svelte-dorxu0.svelte-dorxu0{position:absolute;width:100%;height:100%;pointer-events:none;z-index:1}.tag-point-wrapper.svelte-dorxu0.svelte-dorxu0{pointer-events:none;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);cursor:pointer;z-index:1040}.tag-folded-point.svelte-dorxu0.svelte-dorxu0,.tag-unfolded-point.svelte-dorxu0.svelte-dorxu0{transition:all 0.5s}.tag-point-wrapper.svelte-dorxu0 .tag-unfolded-point.svelte-dorxu0{display:flex;justify-content:center;align-items:center;position:absolute;width:100%;height:100%;border-radius:50%}.tag-point-wrapper.svelte-dorxu0 .tag-unfolded-point.svelte-dorxu0:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:0.3125rem;height:0.3125rem;border-radius:50%;background-color:white}.tag-point-wrapper.svelte-dorxu0 .tag-unfolded-point.svelte-dorxu0:before{content:"";position:absolute;width:0.875rem;height:0.875rem;border-radius:50%;background-color:rgba(0, 0, 0, 0.2)}.tag-point-wrapper.folded.svelte-dorxu0 .tag-folded-point.svelte-dorxu0{opacity:1;scale:1}.tag-point-wrapper.folded.svelte-dorxu0 .tag-unfolded-point.svelte-dorxu0{opacity:0;scale:1}.tag-point-wrapper.unfolded.svelte-dorxu0 .tag-folded-point.svelte-dorxu0{opacity:0;scale:0.2}.tag-point-wrapper.unfolded.svelte-dorxu0 .tag-unfolded-point.svelte-dorxu0{opacity:1;scale:1}.tag-point-wrapper.disable-unfold.svelte-dorxu0 .tag-folded-point.svelte-dorxu0{opacity:1 !important;scale:1 !important}.tag-point-wrapper.disable-unfold.svelte-dorxu0 .tag-unfolded-point.svelte-dorxu0{opacity:0 !important;scale:1 !important}');
}
function Te(t) {
  let e;
  return {
    c() {
      e = M("div"), T(e, "class", "audio-tag-point-click-helper svelte-dorxu0");
    },
    m(n, i) {
      F(n, e, i), t[20](e);
    },
    p: $,
    d(n) {
      n && O(e), t[20](null);
    }
  };
}
function Le(t) {
  let e, n, i;
  return {
    c() {
      e = M("div"), T(e, "class", "tag-point-click-helper svelte-dorxu0");
    },
    m(a, s) {
      F(a, e, s), t[19](e), n || (i = [
        A(
          e,
          "click",
          /*click_handler*/
          t[16]
        ),
        A(
          e,
          "pointerenter",
          /*pointerenter_handler*/
          t[17]
        ),
        A(
          e,
          "pointerleave",
          /*pointerleave_handler*/
          t[18]
        )
      ], n = !0);
    },
    p: $,
    d(a) {
      a && O(e), t[19](null), n = !1, be(i);
    }
  };
}
function Ee(t) {
  let e, n;
  return e = new ye({
    props: {
      icon: (
        /*url*/
        t[8]
      ),
      width: (
        /*width*/
        t[7]
      )
    }
  }), e.$on(
    "iconLoaded",
    /*iconLoaded_handler*/
    t[23]
  ), {
    c() {
      D(e.$$.fragment);
    },
    m(i, a) {
      S(e, i, a), n = !0;
    },
    p(i, a) {
      const s = {};
      a & /*url*/
      256 && (s.icon = /*url*/
      i[8]), a & /*width*/
      128 && (s.width = /*width*/
      i[7]), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function He(t) {
  let e, n;
  return e = new Ce({
    props: {
      tag: Z(
        /*tag*/
        t[1]
      ),
      handlePointClick: (
        /*func*/
        t[21]
      ),
      handleMouseEnter: (
        /*func_1*/
        t[22]
      ),
      handleMouseLeave: (
        /*handleMouseLeave*/
        t[3]
      )
    }
  }), e.$on(
    "audioRef",
    /*audioEventHandlers*/
    t[14].audioRef
  ), e.$on(
    "play",
    /*audioEventHandlers*/
    t[14].play
  ), e.$on(
    "pause",
    /*audioEventHandlers*/
    t[14].pause
  ), e.$on(
    "timeupdate",
    /*audioEventHandlers*/
    t[14].timeupdate
  ), e.$on(
    "duration",
    /*audioEventHandlers*/
    t[14].duration
  ), {
    c() {
      D(e.$$.fragment);
    },
    m(i, a) {
      S(e, i, a), n = !0;
    },
    p(i, a) {
      const s = {};
      a & /*tag*/
      2 && (s.tag = Z(
        /*tag*/
        i[1]
      )), a & /*handleTagPointClick*/
      16 && (s.handlePointClick = /*func*/
      i[21]), a & /*tag, handleMouseEnter*/
      6 && (s.handleMouseEnter = /*func_1*/
      i[22]), a & /*handleMouseLeave*/
      8 && (s.handleMouseLeave = /*handleMouseLeave*/
      i[3]), e.$set(s);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      L(e.$$.fragment, i), n = !1;
    },
    d(i) {
      U(e, i);
    }
  };
}
function Ie(t) {
  let e, n, i, a, s, P, f, u, d, l;
  function v(r, p) {
    return (
      /*isAudioTag*/
      r[6] ? Te : Le
    );
  }
  let h = v(t), m = h(t);
  i = new ke({
    props: {
      center: !0,
      blurRadius: 15,
      spreadRadius: 5,
      opacity: 0.3
    }
  });
  const b = [He, Ee], c = [];
  function g(r, p) {
    return (
      /*isAudioTag*/
      r[6] ? 0 : 1
    );
  }
  return u = g(t), d = c[u] = b[u](t), {
    c() {
      e = M("div"), m.c(), n = z(), D(i.$$.fragment), a = z(), s = M("div"), P = z(), f = M("div"), d.c(), T(s, "class", "tag-unfolded-point svelte-dorxu0"), x(
        s,
        "transition-delay",
        /*folded*/
        (t[9] ? (
          /*foldDelay*/
          t[11]
        ) : 0) + "ms"
      ), T(f, "class", "tag-folded-point svelte-dorxu0"), x(
        f,
        "transition-delay",
        /*folded*/
        (t[9] ? (
          /*foldDelay*/
          t[11]
        ) : 0) + "ms"
      ), T(e, "class", "tag-point-wrapper svelte-dorxu0"), w(
        e,
        "unfolded",
        /*unfolded*/
        t[5]
      ), w(
        e,
        "folded",
        /*folded*/
        t[9]
      ), w(
        e,
        "disable-unfold",
        /*tag*/
        t[1].isPopoverConfigEnabled()
      );
    },
    m(r, p) {
      F(r, e, p), m.m(e, null), C(e, n), S(i, e, null), C(e, a), C(e, s), C(e, P), C(e, f), c[u].m(f, null), l = !0;
    },
    p(r, [p]) {
      h === (h = v(r)) && m ? m.p(r, p) : (m.d(1), m = h(r), m && (m.c(), m.m(e, n))), p & /*folded*/
      512 && x(
        s,
        "transition-delay",
        /*folded*/
        (r[9] ? (
          /*foldDelay*/
          r[11]
        ) : 0) + "ms"
      );
      let _ = u;
      u = g(r), u === _ ? c[u].p(r, p) : (_e(), L(c[_], 1, 1, () => {
        c[_] = null;
      }), ce(), d = c[u], d ? d.p(r, p) : (d = c[u] = b[u](r), d.c()), E(d, 1), d.m(f, null)), p & /*folded*/
      512 && x(
        f,
        "transition-delay",
        /*folded*/
        (r[9] ? (
          /*foldDelay*/
          r[11]
        ) : 0) + "ms"
      ), (!l || p & /*unfolded*/
      32) && w(
        e,
        "unfolded",
        /*unfolded*/
        r[5]
      ), (!l || p & /*folded*/
      512) && w(
        e,
        "folded",
        /*folded*/
        r[9]
      ), (!l || p & /*tag*/
      2) && w(
        e,
        "disable-unfold",
        /*tag*/
        r[1].isPopoverConfigEnabled()
      );
    },
    i(r) {
      l || (E(i.$$.fragment, r), E(d), l = !0);
    },
    o(r) {
      L(i.$$.fragment, r), L(d), l = !1;
    },
    d(r) {
      r && O(e), m.d(), U(i), c[u].d();
    }
  };
}
function xe(t, e, n) {
  var j, q, B;
  let i, a, s, P, f;
  const u = ge("hooks"), d = he();
  let { tag: l } = e, v, h = !1;
  const m = () => {
    v !== void 0 && clearTimeout(v), h = !0, v = setTimeout(
      () => {
        h = !1;
      },
      800
    );
  }, b = (o) => {
    h || (l.entryFromModel && Pe(l.five.state.mode) ? l.find({ targetMode: "Panorama" }).then(() => l.unfoldAndFoldOthers()) : u.emit("click", { event: o, target: "TagPoint", tag: l }));
  }, c = (() => l.contentType === "Text" && l.data.appearance === "plane" ? 500 : 800)();
  let { tagPointClickHelper: g = null } = e, { handleMouseEnter: r = () => {
  } } = e, { handleMouseLeave: p = () => {
  } } = e, { handleTagPointClick: _ = () => {
  } } = e;
  const ee = () => !0, R = (q = (j = l.config.popoverConfig) == null ? void 0 : j.beforeOpen) != null ? q : ee, H = (B = l.config.popoverConfig) == null ? void 0 : B.onHoverEnd;
  let { audioInstance: I = null } = e;
  const te = {
    audioRef: (o) => {
      n(15, I = o.detail), d("audioInstanceReady", I);
    },
    play: () => d("audioPlay"),
    pause: () => d("audioPause"),
    timeupdate: (o) => d("audioTimeUpdate", o.detail),
    duration: (o) => d("audioDuration", o.detail)
  }, oe = (o) => {
    _(o), b(o);
  }, ie = (o) => {
    R(l) && r(o);
  }, ne = (o) => {
    p(o), H == null || H(l, o);
  };
  function re(o) {
    Y[o ? "unshift" : "push"](() => {
      g = o, n(0, g);
    });
  }
  function le(o) {
    Y[o ? "unshift" : "push"](() => {
      g = o, n(0, g);
    });
  }
  const ae = (o) => {
    _(o), b(o);
  }, se = (o) => {
    R(l) && r(o);
  };
  function de(o) {
    ve.call(this, t, o);
  }
  return t.$$set = (o) => {
    "tag" in o && n(1, l = o.tag), "tagPointClickHelper" in o && n(0, g = o.tagPointClickHelper), "handleMouseEnter" in o && n(2, r = o.handleMouseEnter), "handleMouseLeave" in o && n(3, p = o.handleMouseLeave), "handleTagPointClick" in o && n(4, _ = o.handleTagPointClick), "audioInstance" in o && n(15, I = o.audioInstance);
  }, t.$$.update = () => {
    var o, W, X, G;
    t.$$.dirty & /*tag*/
    2 && n(5, i = (o = l.state) == null ? void 0 : o.unfolded), t.$$.dirty & /*unfolded*/
    32 && n(9, a = !i), t.$$.dirty & /*tag*/
    2 && n(8, s = (X = (W = l.style) == null ? void 0 : W.point) != null && X.url ? (G = l.style) == null ? void 0 : G.point : { url: we }), t.$$.dirty & /*tag*/
    2 && n(7, P = (() => {
      var K, N, Q, V;
      const J = (N = (K = l.style) == null ? void 0 : K.point) == null ? void 0 : N.width;
      if (typeof J == "number")
        return J;
      const k = (V = (Q = l.style) == null ? void 0 : Q.point) == null ? void 0 : V.size;
      if (typeof k == "number")
        return k;
      if (k === "S")
        return 18;
      if (k === "M")
        return 20;
      if (k === "L")
        return 24;
      if (k === "XL")
        return 28;
    })()), t.$$.dirty & /*tag*/
    2 && n(6, f = l.contentType === "Audio" && l.data.appearance === "plane");
  }, m(), [
    g,
    l,
    r,
    p,
    _,
    i,
    f,
    P,
    s,
    a,
    b,
    c,
    R,
    H,
    te,
    I,
    oe,
    ie,
    ne,
    re,
    le,
    ae,
    se,
    de
  ];
}
class so extends pe {
  constructor(e) {
    super(), ue(
      this,
      e,
      xe,
      Ie,
      me,
      {
        tag: 1,
        tagPointClickHelper: 0,
        handleMouseEnter: 2,
        handleMouseLeave: 3,
        handleTagPointClick: 4,
        audioInstance: 15
      },
      Me
    );
  }
  get tag() {
    return this.$$.ctx[1];
  }
  set tag(e) {
    this.$$set({ tag: e }), y();
  }
  get tagPointClickHelper() {
    return this.$$.ctx[0];
  }
  set tagPointClickHelper(e) {
    this.$$set({ tagPointClickHelper: e }), y();
  }
  get handleMouseEnter() {
    return this.$$.ctx[2];
  }
  set handleMouseEnter(e) {
    this.$$set({ handleMouseEnter: e }), y();
  }
  get handleMouseLeave() {
    return this.$$.ctx[3];
  }
  set handleMouseLeave(e) {
    this.$$set({ handleMouseLeave: e }), y();
  }
  get handleTagPointClick() {
    return this.$$.ctx[4];
  }
  set handleTagPointClick(e) {
    this.$$set({ handleTagPointClick: e }), y();
  }
  get audioInstance() {
    return this.$$.ctx[15];
  }
  set audioInstance(e) {
    this.$$set({ audioInstance: e }), y();
  }
}
export {
  so as default
};
