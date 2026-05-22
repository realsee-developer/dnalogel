var me = Object.defineProperty, _e = Object.defineProperties;
var pe = Object.getOwnPropertyDescriptors;
var $ = Object.getOwnPropertySymbols;
var ge = Object.prototype.hasOwnProperty, be = Object.prototype.propertyIsEnumerable;
var x = (e, n, o) => n in e ? me(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, G = (e, n) => {
  for (var o in n || (n = {}))
    ge.call(n, o) && x(e, o, n[o]);
  if ($)
    for (var o of $(n))
      be.call(n, o) && x(e, o, n[o]);
  return e;
}, J = (e, n) => _e(e, pe(n));
var K = (e, n, o) => new Promise((i, t) => {
  var r = (l) => {
    try {
      c(o.next(l));
    } catch (d) {
      t(d);
    }
  }, a = (l) => {
    try {
      c(o.throw(l));
    } catch (d) {
      t(d);
    }
  }, c = (l) => l.done ? i(l.value) : Promise.resolve(l.value).then(r, a);
  c((o = o.apply(e, n)).next());
});
import { SvelteComponent as ke, init as we, safe_not_equal as ve, append_styles as ye, empty as R, insert as _, transition_in as I, transition_out as M, check_outros as ce, detach as p, createEventDispatcher as We, onMount as Se, onDestroy as He, element as g, space as q, attr as m, set_style as u, append as w, group_outros as se, create_component as Ie, mount_component as Ce, destroy_component as Ne, tick as ee, binding_callbacks as ze, handle_promise as N, update_await_block_branch as P, noop as h, src_url_equal as D, HtmlTag as Ae } from "../../../../vendor/svelte/internal/index.js";
import "three";
import { noTypecheck as z } from "../../../utils/noTypecheck.js";
import { getKeyframeInfo as Ke, getImageInfo as Le } from "../../../utils/getImageInfo.js";
import y from "../../../utils/px2rem.js";
import Me from "../Shadow.js";
import { applySvgAnimation as Re, clearSvgAnimation as O } from "./animationUtils.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
function qe(e) {
  ye(e, "svelte-o1ee3r", '@keyframes svelte-o1ee3r-sprites-animation{0%{background-position:0 0}100%{background-position:100% 0}}.icon-bg.svelte-o1ee3r{position:absolute;width:141%;height:141%;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:50%;overflow:hidden}.icon-bg-circle.svelte-o1ee3r{border-radius:50%;position:absolute;top:0;left:0;width:100%;height:100%}.icon-bg-circle-inner.svelte-o1ee3r{border-radius:50%;position:absolute;top:0;left:0;width:100%;height:100%}.icon-bg-circle-inner-shadow.svelte-o1ee3r{border-radius:50%;position:absolute;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at center, transparent 20%, rgba(255,255,255,0.3))}.icon-bg-circle.svelte-o1ee3r::before{content:"";position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;border-radius:50%;z-index:1;border:0.0625rem solid rgba(255,255,255,0.6)}.icon-image.svelte-o1ee3r{position:relative;display:block;width:auto}.icon-keyframe.svelte-o1ee3r{background-repeat:no-repeat;background-size:auto 100%;animation-direction:normal;animation-iteration-count:infinite;animation-name:svelte-o1ee3r-sprites-animation;animation-delay:0}.icon-svg.svelte-o1ee3r{position:relative;display:block;font-size:0}');
}
function ie(e) {
  e[1] = e[30].width;
}
function te(e) {
  e[1] = e[30].width;
}
function ne(e) {
  e[1] = e[30].width, e[27] = e[30].height, e[28] = e[30].steps, e[29] = e[30].duration;
}
function oe(e) {
  let n, o, i, t = (
    /*shadow*/
    e[0] && re()
  );
  function r(l, d) {
    return (
      /*isKeyframe*/
      l[7] ? Ee : (
        /*iconAnimation*/
        l[5] ? De : Ue
      )
    );
  }
  let a = r(e), c = a(e);
  return {
    c() {
      n = g("div"), t && t.c(), o = q(), c.c(), m(n, "class", "icon"), u(
        n,
        "width",
        /*width*/
        e[1]
      );
    },
    m(l, d) {
      _(l, n, d), t && t.m(n, null), w(n, o), c.m(n, null), i = !0;
    },
    p(l, d) {
      /*shadow*/
      l[0] ? t ? d & /*shadow*/
      1 && I(t, 1) : (t = re(), t.c(), I(t, 1), t.m(n, o)) : t && (se(), M(t, 1, 1, () => {
        t = null;
      }), ce()), a === (a = r(l)) && c ? c.p(l, d) : (c.d(1), c = a(l), c && (c.c(), c.m(n, null))), d & /*width*/
      2 && u(
        n,
        "width",
        /*width*/
        l[1]
      );
    },
    i(l) {
      i || (I(t), i = !0);
    },
    o(l) {
      M(t), i = !1;
    },
    d(l) {
      l && p(n), t && t.d(), c.d();
    }
  };
}
function re(e) {
  let n, o;
  return n = new Me({
    props: {
      center: !0,
      blurRadius: 24,
      spreadRadius: 16
    }
  }), {
    c() {
      Ie(n.$$.fragment);
    },
    m(i, t) {
      Ce(n, i, t), o = !0;
    },
    i(i) {
      o || (I(n.$$.fragment, i), o = !0);
    },
    o(i) {
      M(n.$$.fragment, i), o = !1;
    },
    d(i) {
      Ne(n, i);
    }
  };
}
function Ue(e) {
  let n, o, i = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: je,
    then: Fe,
    catch: Te,
    value: 30
  };
  return N(
    o = /*getImage*/
    e[16](z({
      url: (
        /*iconUrl*/
        e[4]
      ),
      ratio: (
        /*iconRatio*/
        e[11]
      )
    })),
    i
  ), {
    c() {
      n = R(), i.block.c();
    },
    m(t, r) {
      _(t, n, r), i.block.m(t, i.anchor = r), i.mount = () => n.parentNode, i.anchor = n;
    },
    p(t, r) {
      e = t, i.ctx = e, r & /*iconUrl, iconRatio*/
      2064 && o !== (o = /*getImage*/
      e[16](z({
        url: (
          /*iconUrl*/
          e[4]
        ),
        ratio: (
          /*iconRatio*/
          e[11]
        )
      }))) && N(o, i) || P(i, e, r);
    },
    d(t) {
      t && p(n), i.block.d(t), i.token = null, i = null;
    }
  };
}
function De(e) {
  let n, o, i = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Pe,
    then: Ge,
    catch: Be,
    value: 30
  };
  return N(
    o = /*getImage*/
    e[16](z({
      url: (
        /*iconUrl*/
        e[4]
      ),
      ratio: (
        /*iconRatio*/
        e[11]
      )
    })),
    i
  ), {
    c() {
      n = R(), i.block.c();
    },
    m(t, r) {
      _(t, n, r), i.block.m(t, i.anchor = r), i.mount = () => n.parentNode, i.anchor = n;
    },
    p(t, r) {
      e = t, i.ctx = e, r & /*iconUrl, iconRatio*/
      2064 && o !== (o = /*getImage*/
      e[16](z({
        url: (
          /*iconUrl*/
          e[4]
        ),
        ratio: (
          /*iconRatio*/
          e[11]
        )
      }))) && N(o, i) || P(i, e, r);
    },
    d(t) {
      t && p(n), i.block.d(t), i.token = null, i = null;
    }
  };
}
function Ee(e) {
  let n, o, i = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Xe,
    then: Ve,
    catch: Qe,
    value: 30
  };
  return N(
    o = /*getKeyframe*/
    e[15](z({
      url: (
        /*iconUrl*/
        e[4]
      ),
      steps: (
        /*iconSteps*/
        e[6]
      ),
      fps: (
        /*iconFps*/
        e[12]
      ),
      ratio: (
        /*iconRatio*/
        e[11]
      )
    })),
    i
  ), {
    c() {
      n = R(), i.block.c();
    },
    m(t, r) {
      _(t, n, r), i.block.m(t, i.anchor = r), i.mount = () => n.parentNode, i.anchor = n;
    },
    p(t, r) {
      e = t, i.ctx = e, r & /*iconUrl, iconSteps, iconFps, iconRatio*/
      6224 && o !== (o = /*getKeyframe*/
      e[15](z({
        url: (
          /*iconUrl*/
          e[4]
        ),
        steps: (
          /*iconSteps*/
          e[6]
        ),
        fps: (
          /*iconFps*/
          e[12]
        ),
        ratio: (
          /*iconRatio*/
          e[11]
        )
      }))) && N(o, i) || P(i, e, r);
    },
    d(t) {
      t && p(n), i.block.d(t), i.token = null, i = null;
    }
  };
}
function Te(e) {
  return { c: h, m: h, p: h, d: h };
}
function Fe(e) {
  ie(e);
  let n, o, i, t = (
    /*bgcolor*/
    e[14] && le(e)
  );
  return {
    c() {
      t && t.c(), n = q(), o = g("img"), m(o, "alt", "tag-icon"), m(o, "class", "icon-image svelte-o1ee3r"), D(o.src, i = /*iconUrl*/
      e[4]) || m(o, "src", i), u(o, "width", y(W({
        originWidth: (
          /*width*/
          e[1]
        ),
        scale: (
          /*iconScale*/
          e[10]
        ),
        wantedWidth: (
          /*iconWidth*/
          e[9]
        )
      }).width)), u(o, "max-width", "initial");
    },
    m(r, a) {
      t && t.m(r, a), _(r, n, a), _(r, o, a);
    },
    p(r, a) {
      ie(r), /*bgcolor*/
      r[14] ? t ? t.p(r, a) : (t = le(r), t.c(), t.m(n.parentNode, n)) : t && (t.d(1), t = null), a & /*iconUrl*/
      16 && !D(o.src, i = /*iconUrl*/
      r[4]) && m(o, "src", i), a & /*iconUrl, iconRatio, iconScale, iconWidth*/
      3600 && u(o, "width", y(W({
        originWidth: (
          /*width*/
          r[1]
        ),
        scale: (
          /*iconScale*/
          r[10]
        ),
        wantedWidth: (
          /*iconWidth*/
          r[9]
        )
      }).width));
    },
    d(r) {
      t && t.d(r), r && p(n), r && p(o);
    }
  };
}
function le(e) {
  let n, o, i, t, r;
  return {
    c() {
      n = g("div"), o = g("div"), i = g("div"), t = q(), r = g("div"), m(i, "class", "icon-bg-circle-inner svelte-o1ee3r"), u(
        i,
        "background",
        /*bgcolor*/
        e[14]
      ), u(
        i,
        "opacity",
        /*bgopacity*/
        e[13]
      ), m(r, "class", "icon-bg-circle-inner-shadow svelte-o1ee3r"), m(o, "class", "icon-bg-circle svelte-o1ee3r"), m(n, "class", "icon-bg svelte-o1ee3r");
    },
    m(a, c) {
      _(a, n, c), w(n, o), w(o, i), w(o, t), w(o, r);
    },
    p(a, c) {
      c & /*bgcolor*/
      16384 && u(
        i,
        "background",
        /*bgcolor*/
        a[14]
      ), c & /*bgopacity*/
      8192 && u(
        i,
        "opacity",
        /*bgopacity*/
        a[13]
      );
    },
    d(a) {
      a && p(n);
    }
  };
}
function je(e) {
  return { c: h, m: h, p: h, d: h };
}
function Be(e) {
  return { c: h, m: h, p: h, d: h };
}
function Ge(e) {
  te(e);
  let n, o, i, t = (
    /*bgcolor*/
    e[14] && ae(e)
  );
  function r(l, d) {
    return d & /*iconUrl*/
    16 && (i = null), i == null && (i = !!L(
      /*iconUrl*/
      l[4]
    )), i ? Oe : Je;
  }
  let a = r(e, -1), c = a(e);
  return {
    c() {
      t && t.c(), n = q(), o = g("div"), c.c(), m(o, "class", "icon-svg svelte-o1ee3r"), u(o, "width", y(W({
        originWidth: (
          /*width*/
          e[1]
        ),
        scale: (
          /*iconScale*/
          e[10]
        ),
        wantedWidth: (
          /*iconWidth*/
          e[9]
        )
      }).width));
    },
    m(l, d) {
      t && t.m(l, d), _(l, n, d), _(l, o, d), c.m(o, null), e[20](o);
    },
    p(l, d) {
      te(l), /*bgcolor*/
      l[14] ? t ? t.p(l, d) : (t = ae(l), t.c(), t.m(n.parentNode, n)) : t && (t.d(1), t = null), a === (a = r(l, d)) && c ? c.p(l, d) : (c.d(1), c = a(l), c && (c.c(), c.m(o, null))), d & /*iconUrl, iconRatio, iconScale, iconWidth*/
      3600 && u(o, "width", y(W({
        originWidth: (
          /*width*/
          l[1]
        ),
        scale: (
          /*iconScale*/
          l[10]
        ),
        wantedWidth: (
          /*iconWidth*/
          l[9]
        )
      }).width));
    },
    d(l) {
      t && t.d(l), l && p(n), l && p(o), c.d(), e[20](null);
    }
  };
}
function ae(e) {
  let n, o, i, t, r;
  return {
    c() {
      n = g("div"), o = g("div"), i = g("div"), t = q(), r = g("div"), m(i, "class", "icon-bg-circle-inner svelte-o1ee3r"), u(
        i,
        "background",
        /*bgcolor*/
        e[14]
      ), u(
        i,
        "opacity",
        /*bgopacity*/
        e[13]
      ), m(r, "class", "icon-bg-circle-inner-shadow svelte-o1ee3r"), m(o, "class", "icon-bg-circle svelte-o1ee3r"), m(n, "class", "icon-bg svelte-o1ee3r");
    },
    m(a, c) {
      _(a, n, c), w(n, o), w(o, i), w(o, t), w(o, r);
    },
    p(a, c) {
      c & /*bgcolor*/
      16384 && u(
        i,
        "background",
        /*bgcolor*/
        a[14]
      ), c & /*bgopacity*/
      8192 && u(
        i,
        "opacity",
        /*bgopacity*/
        a[13]
      );
    },
    d(a) {
      a && p(n);
    }
  };
}
function Je(e) {
  let n, o;
  return {
    c() {
      n = g("img"), m(n, "alt", "tag-icon"), m(n, "class", "icon-image svelte-o1ee3r"), D(n.src, o = /*iconUrl*/
      e[4]) || m(n, "src", o), u(n, "width", "100%"), u(n, "max-width", "initial");
    },
    m(i, t) {
      _(i, n, t);
    },
    p(i, t) {
      t & /*iconUrl*/
      16 && !D(n.src, o = /*iconUrl*/
      i[4]) && m(n, "src", o);
    },
    d(i) {
      i && p(n);
    }
  };
}
function Oe(e) {
  let n, o;
  return {
    c() {
      n = new Ae(!1), o = R(), n.a = o;
    },
    m(i, t) {
      n.m(
        /*svgHtml*/
        e[3],
        i,
        t
      ), _(i, o, t);
    },
    p(i, t) {
      t & /*svgHtml*/
      8 && n.p(
        /*svgHtml*/
        i[3]
      );
    },
    d(i) {
      i && p(o), i && n.d();
    }
  };
}
function Pe(e) {
  return { c: h, m: h, p: h, d: h };
}
function Qe(e) {
  return { c: h, m: h, p: h, d: h };
}
function Ve(e) {
  ne(e);
  let n, o = `url(${/*iconUrl*/
  e[4]})`, i = `steps(${/*steps*/
  e[28] - 1})`;
  return {
    c() {
      n = g("div"), m(n, "class", "icon-keyframe svelte-o1ee3r"), u(n, "width", y(W({
        originWidth: (
          /*width*/
          e[1]
        ),
        originHeight: (
          /*height*/
          e[27]
        ),
        scale: (
          /*iconScale*/
          e[10]
        ),
        wantedWidth: (
          /*iconWidth*/
          e[9]
        )
      }).width)), u(n, "height", y(W({
        originWidth: (
          /*width*/
          e[1]
        ),
        originHeight: (
          /*height*/
          e[27]
        ),
        scale: (
          /*iconScale*/
          e[10]
        ),
        wantedWidth: (
          /*iconWidth*/
          e[9]
        )
      }).height)), u(n, "background-image", o), u(
        n,
        "animation-duration",
        /*duration*/
        e[29]
      ), u(n, "animation-timing-function", i);
    },
    m(t, r) {
      _(t, n, r);
    },
    p(t, r) {
      ne(t), r & /*iconUrl, iconSteps, iconFps, iconRatio, iconScale, iconWidth*/
      7760 && u(n, "width", y(W({
        originWidth: (
          /*width*/
          t[1]
        ),
        originHeight: (
          /*height*/
          t[27]
        ),
        scale: (
          /*iconScale*/
          t[10]
        ),
        wantedWidth: (
          /*iconWidth*/
          t[9]
        )
      }).width)), r & /*iconUrl, iconSteps, iconFps, iconRatio, iconScale, iconWidth*/
      7760 && u(n, "height", y(W({
        originWidth: (
          /*width*/
          t[1]
        ),
        originHeight: (
          /*height*/
          t[27]
        ),
        scale: (
          /*iconScale*/
          t[10]
        ),
        wantedWidth: (
          /*iconWidth*/
          t[9]
        )
      }).height)), r & /*iconUrl*/
      16 && o !== (o = `url(${/*iconUrl*/
      t[4]})`) && u(n, "background-image", o), r & /*iconUrl, iconSteps, iconFps, iconRatio*/
      6224 && u(
        n,
        "animation-duration",
        /*duration*/
        t[29]
      ), r & /*iconUrl, iconSteps, iconFps, iconRatio*/
      6224 && i !== (i = `steps(${/*steps*/
      t[28] - 1})`) && u(n, "animation-timing-function", i);
    },
    d(t) {
      t && p(n);
    }
  };
}
function Xe(e) {
  return { c: h, m: h, p: h, d: h };
}
function Ye(e) {
  let n, o, i = (
    /*hasIcon*/
    e[8] && oe(e)
  );
  return {
    c() {
      i && i.c(), n = R();
    },
    m(t, r) {
      i && i.m(t, r), _(t, n, r), o = !0;
    },
    p(t, [r]) {
      /*hasIcon*/
      t[8] ? i ? (i.p(t, r), r & /*hasIcon*/
      256 && I(i, 1)) : (i = oe(t), i.c(), I(i, 1), i.m(n.parentNode, n)) : i && (se(), M(i, 1, 1, () => {
        i = null;
      }), ce());
    },
    i(t) {
      o || (I(i), o = !0);
    },
    o(t) {
      M(i), o = !1;
    },
    d(t) {
      i && i.d(t), t && p(n);
    }
  };
}
function W(e) {
  const { originWidth: n, originHeight: o, scale: i = 1, wantedWidth: t } = e, r = (t != null ? t : n) * i, a = typeof o == "number" ? r * (o / n) : void 0;
  return J(G({}, e), { width: r, height: a });
}
function L(e) {
  if (!e)
    return !1;
  try {
    return new URL(e).pathname.endsWith(".svg");
  } catch (n) {
    return e.endsWith(".svg");
  }
}
function Ze(e, n, o) {
  let i, t, r, a, c, l, d, Q, v, V, E, T, { width: F = null } = n, { icon: s = null } = n, { shadow: X = !1 } = n;
  const j = We();
  function ue(f) {
    return K(this, null, function* () {
      const k = yield Ke(f);
      return j("iconLoaded", k), k;
    });
  }
  function fe(f) {
    return K(this, null, function* () {
      if (typeof T == "number")
        return J(G({}, f), { width: T });
      const k = yield Le(f);
      return j("iconLoaded", k), k;
    });
  }
  function Y() {
    E || j("iconLoaded");
  }
  Se(() => {
    Y();
  });
  let S = null, U = null, b = null;
  const B = /* @__PURE__ */ new Map();
  let C = null;
  function de(f) {
    return K(this, null, function* () {
      const k = B.get(f);
      if (k)
        return yield k;
      const A = fetch(f, { cache: "force-cache" }).then((H) => H.text());
      B.set(f, A);
      try {
        return yield A;
      } catch (H) {
        throw B.delete(f), H;
      }
    });
  }
  function Z() {
    return K(this, null, function* () {
      if (!v || !S && (yield ee(), !S) || !L(i))
        return;
      b && (O(b), o(18, b = null)), i && (o(3, U = yield de(i)), yield ee());
      const f = S.querySelector("svg");
      f && (o(18, b = f), Re(b, v));
    });
  }
  He(() => {
    b && O(b);
  });
  function he(f) {
    ze[f ? "unshift" : "push"](() => {
      S = f, o(2, S);
    });
  }
  return e.$$set = (f) => {
    "width" in f && o(1, F = f.width), "icon" in f && o(17, s = f.icon), "shadow" in f && o(0, X = f.shadow);
  }, e.$$.update = () => {
    var f, k, A;
    if (e.$$.dirty & /*icon*/
    131072 && o(4, i = s == null ? void 0 : s.url), e.$$.dirty & /*icon*/
    131072 && o(14, t = s == null ? void 0 : s.bgcolor), e.$$.dirty & /*icon*/
    131072 && o(13, r = (f = s == null ? void 0 : s.bgopacity) != null ? f : 0.6), e.$$.dirty & /*icon*/
    131072 && o(6, a = (k = s == null ? void 0 : s.steps) != null ? k : 1), e.$$.dirty & /*icon*/
    131072 && o(12, c = s == null ? void 0 : s.fps), e.$$.dirty & /*icon*/
    131072 && o(11, l = s == null ? void 0 : s.ratio), e.$$.dirty & /*icon*/
    131072 && o(10, d = (A = s == null ? void 0 : s.scale) != null ? A : 1), e.$$.dirty & /*icon*/
    131072 && o(9, Q = s == null ? void 0 : s.width), e.$$.dirty & /*icon*/
    131072 && o(5, v = s == null ? void 0 : s.animation), e.$$.dirty & /*icon*/
    131072 && o(8, V = !!s), e.$$.dirty & /*iconSteps, iconAnimation*/
    96 && o(7, E = a > 1 && !v), e.$$.dirty & /*width*/
    2 && (T = F), e.$$.dirty & /*iconAnimation, iconUrl, prevAnimationKey*/
    524336) {
      const H = v && L(i) ? i : null;
      H && H !== C && (o(19, C = H), Z());
    }
    e.$$.dirty & /*iconAnimation, iconUrl, currentSvgEl, svgHtml, prevAnimationKey*/
    786488 && (!v || !L(i)) && (b && (O(b), o(18, b = null)), U !== null && o(3, U = null), C !== null && o(19, C = null)), e.$$.dirty & /*prevAnimationKey, svgContainer, iconAnimation, iconUrl, currentSvgEl*/
    786484 && C && S && v && L(i) && !b && Z();
  }, Y(), [
    X,
    F,
    S,
    U,
    i,
    v,
    a,
    E,
    V,
    Q,
    d,
    l,
    c,
    r,
    t,
    ue,
    fe,
    s,
    b,
    C,
    he
  ];
}
class ci extends ke {
  constructor(n) {
    super(), we(this, n, Ze, Ye, ve, { width: 1, icon: 17, shadow: 0 }, qe);
  }
}
export {
  ci as default
};
