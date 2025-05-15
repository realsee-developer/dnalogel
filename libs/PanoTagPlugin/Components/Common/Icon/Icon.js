var x = Object.defineProperty, ee = Object.defineProperties;
var ie = Object.getOwnPropertyDescriptors;
var U = Object.getOwnPropertySymbols;
var te = Object.prototype.hasOwnProperty, ne = Object.prototype.propertyIsEnumerable;
var A = (e, t, o) => t in e ? x(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, N = (e, t) => {
  for (var o in t || (t = {}))
    te.call(t, o) && A(e, o, t[o]);
  if (U)
    for (var o of U(t))
      ne.call(t, o) && A(e, o, t[o]);
  return e;
}, K = (e, t) => ee(e, ie(t));
var R = (e, t, o) => new Promise((n, i) => {
  var r = (s) => {
    try {
      f(o.next(s));
    } catch (d) {
      i(d);
    }
  }, l = (s) => {
    try {
      f(o.throw(s));
    } catch (d) {
      i(d);
    }
  }, f = (s) => s.done ? n(s.value) : Promise.resolve(s.value).then(r, l);
  f((o = o.apply(e, t)).next());
});
import { SvelteComponent as oe, init as re, safe_not_equal as le, append_styles as ae, empty as q, insert as _, transition_in as k, transition_out as v, check_outros as V, detach as g, createEventDispatcher as se, onMount as fe, element as b, space as D, attr as m, set_style as c, append as y, group_outros as X, create_component as ce, mount_component as ue, destroy_component as de, handle_promise as W, update_await_block_branch as Y, noop as u, src_url_equal as B } from "../../../../vendor/svelte/internal/index.js";
import "three";
import { noTypecheck as z } from "../../../utils/noTypecheck.js";
import { getKeyframeInfo as he, getImageInfo as me } from "../../../utils/getImageInfo.js";
import w from "../../../utils/px2rem.js";
import pe from "../Shadow.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
function _e(e) {
  ae(e, "svelte-1j3azjf", '@keyframes svelte-1j3azjf-sprites-animation{0%{background-position:0 0}100%{background-position:100% 0}}.icon-bg.svelte-1j3azjf{position:absolute;width:141%;height:141%;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:50%;overflow:hidden}.icon-bg-circle.svelte-1j3azjf{border-radius:50%;position:absolute;top:0;left:0;width:100%;height:100%}.icon-bg-circle-inner.svelte-1j3azjf{border-radius:50%;position:absolute;top:0;left:0;width:100%;height:100%}.icon-bg-circle-inner-shadow.svelte-1j3azjf{border-radius:50%;position:absolute;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at center, transparent 20%, rgba(255,255,255,0.3))}.icon-bg-circle.svelte-1j3azjf::before{content:"";position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;border-radius:50%;z-index:1;border:0.0625rem solid rgba(255,255,255,0.6)}.icon-image.svelte-1j3azjf{position:relative;display:block;width:auto}.icon-keyframe.svelte-1j3azjf{background-repeat:no-repeat;background-size:auto 100%;animation-direction:normal;animation-iteration-count:infinite;animation-name:svelte-1j3azjf-sprites-animation;animation-delay:0}');
}
function G(e) {
  e[1] = e[21].width;
}
function J(e) {
  e[1] = e[21].width, e[18] = e[21].height, e[19] = e[21].steps, e[20] = e[21].duration;
}
function O(e) {
  let t, o, n, i = (
    /*shadow*/
    e[0] && P()
  );
  function r(s, d) {
    return (
      /*isKeyframe*/
      s[8] ? be : ge
    );
  }
  let l = r(e), f = l(e);
  return {
    c() {
      t = b("div"), i && i.c(), o = D(), f.c(), m(t, "class", "icon"), c(
        t,
        "width",
        /*width*/
        e[1]
      );
    },
    m(s, d) {
      _(s, t, d), i && i.m(t, null), y(t, o), f.m(t, null), n = !0;
    },
    p(s, d) {
      /*shadow*/
      s[0] ? i ? d & /*shadow*/
      1 && k(i, 1) : (i = P(), i.c(), k(i, 1), i.m(t, o)) : i && (X(), v(i, 1, 1, () => {
        i = null;
      }), V()), l === (l = r(s)) && f ? f.p(s, d) : (f.d(1), f = l(s), f && (f.c(), f.m(t, null))), d & /*width*/
      2 && c(
        t,
        "width",
        /*width*/
        s[1]
      );
    },
    i(s) {
      n || (k(i), n = !0);
    },
    o(s) {
      v(i), n = !1;
    },
    d(s) {
      s && g(t), i && i.d(), f.d();
    }
  };
}
function P(e) {
  let t, o;
  return t = new pe({
    props: {
      center: !0,
      blurRadius: 24,
      spreadRadius: 16
    }
  }), {
    c() {
      ce(t.$$.fragment);
    },
    m(n, i) {
      ue(t, n, i), o = !0;
    },
    i(n) {
      o || (k(t.$$.fragment, n), o = !0);
    },
    o(n) {
      v(t.$$.fragment, n), o = !1;
    },
    d(n) {
      de(t, n);
    }
  };
}
function ge(e) {
  let t, o, n = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: je,
    then: we,
    catch: ke,
    value: 21
  };
  return W(
    o = /*getImage*/
    e[13](z({
      url: (
        /*iconUrl*/
        e[7]
      ),
      ratio: (
        /*iconRatio*/
        e[5]
      )
    })),
    n
  ), {
    c() {
      t = q(), n.block.c();
    },
    m(i, r) {
      _(i, t, r), n.block.m(i, n.anchor = r), n.mount = () => t.parentNode, n.anchor = t;
    },
    p(i, r) {
      e = i, n.ctx = e, r & /*iconUrl, iconRatio*/
      160 && o !== (o = /*getImage*/
      e[13](z({
        url: (
          /*iconUrl*/
          e[7]
        ),
        ratio: (
          /*iconRatio*/
          e[5]
        )
      }))) && W(o, n) || Y(n, e, r);
    },
    d(i) {
      i && g(t), n.block.d(i), n.token = null, n = null;
    }
  };
}
function be(e) {
  let t, o, n = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: ze,
    then: ve,
    catch: ye,
    value: 21
  };
  return W(
    o = /*getKeyframe*/
    e[12](z({
      url: (
        /*iconUrl*/
        e[7]
      ),
      steps: (
        /*iconSteps*/
        e[2]
      ),
      fps: (
        /*iconFps*/
        e[6]
      ),
      ratio: (
        /*iconRatio*/
        e[5]
      )
    })),
    n
  ), {
    c() {
      t = q(), n.block.c();
    },
    m(i, r) {
      _(i, t, r), n.block.m(i, n.anchor = r), n.mount = () => t.parentNode, n.anchor = t;
    },
    p(i, r) {
      e = i, n.ctx = e, r & /*iconUrl, iconSteps, iconFps, iconRatio*/
      228 && o !== (o = /*getKeyframe*/
      e[12](z({
        url: (
          /*iconUrl*/
          e[7]
        ),
        steps: (
          /*iconSteps*/
          e[2]
        ),
        fps: (
          /*iconFps*/
          e[6]
        ),
        ratio: (
          /*iconRatio*/
          e[5]
        )
      }))) && W(o, n) || Y(n, e, r);
    },
    d(i) {
      i && g(t), n.block.d(i), n.token = null, n = null;
    }
  };
}
function ke(e) {
  return { c: u, m: u, p: u, d: u };
}
function we(e) {
  G(e);
  let t, o, n, i = (
    /*bgcolor*/
    e[11] && Q(e)
  );
  return {
    c() {
      i && i.c(), t = D(), o = b("img"), m(o, "alt", "tag-icon"), m(o, "class", "icon-image svelte-1j3azjf"), B(o.src, n = /*iconUrl*/
      e[7]) || m(o, "src", n), c(o, "width", w(j({
        originWidth: (
          /*width*/
          e[1]
        ),
        scale: (
          /*iconScale*/
          e[4]
        ),
        wantedWidth: (
          /*iconWidth*/
          e[3]
        )
      }).width)), c(o, "max-width", "initial");
    },
    m(r, l) {
      i && i.m(r, l), _(r, t, l), _(r, o, l);
    },
    p(r, l) {
      G(r), /*bgcolor*/
      r[11] ? i ? i.p(r, l) : (i = Q(r), i.c(), i.m(t.parentNode, t)) : i && (i.d(1), i = null), l & /*iconUrl*/
      128 && !B(o.src, n = /*iconUrl*/
      r[7]) && m(o, "src", n), l & /*iconUrl, iconRatio, iconScale, iconWidth*/
      184 && c(o, "width", w(j({
        originWidth: (
          /*width*/
          r[1]
        ),
        scale: (
          /*iconScale*/
          r[4]
        ),
        wantedWidth: (
          /*iconWidth*/
          r[3]
        )
      }).width));
    },
    d(r) {
      i && i.d(r), r && g(t), r && g(o);
    }
  };
}
function Q(e) {
  let t, o, n, i, r;
  return {
    c() {
      t = b("div"), o = b("div"), n = b("div"), i = D(), r = b("div"), m(n, "class", "icon-bg-circle-inner svelte-1j3azjf"), c(
        n,
        "background",
        /*bgcolor*/
        e[11]
      ), c(
        n,
        "opacity",
        /*bgopacity*/
        e[10]
      ), m(r, "class", "icon-bg-circle-inner-shadow svelte-1j3azjf"), m(o, "class", "icon-bg-circle svelte-1j3azjf"), m(t, "class", "icon-bg svelte-1j3azjf");
    },
    m(l, f) {
      _(l, t, f), y(t, o), y(o, n), y(o, i), y(o, r);
    },
    p(l, f) {
      f & /*bgcolor*/
      2048 && c(
        n,
        "background",
        /*bgcolor*/
        l[11]
      ), f & /*bgopacity*/
      1024 && c(
        n,
        "opacity",
        /*bgopacity*/
        l[10]
      );
    },
    d(l) {
      l && g(t);
    }
  };
}
function je(e) {
  return { c: u, m: u, p: u, d: u };
}
function ye(e) {
  return { c: u, m: u, p: u, d: u };
}
function ve(e) {
  J(e);
  let t, o = `url(${/*iconUrl*/
  e[7]})`, n = `steps(${/*steps*/
  e[19] - 1})`;
  return {
    c() {
      t = b("div"), m(t, "class", "icon-keyframe svelte-1j3azjf"), c(t, "width", w(j({
        originWidth: (
          /*width*/
          e[1]
        ),
        originHeight: (
          /*height*/
          e[18]
        ),
        scale: (
          /*iconScale*/
          e[4]
        ),
        wantedWidth: (
          /*iconWidth*/
          e[3]
        )
      }).width)), c(t, "height", w(j({
        originWidth: (
          /*width*/
          e[1]
        ),
        originHeight: (
          /*height*/
          e[18]
        ),
        scale: (
          /*iconScale*/
          e[4]
        ),
        wantedWidth: (
          /*iconWidth*/
          e[3]
        )
      }).height)), c(t, "background-image", o), c(
        t,
        "animation-duration",
        /*duration*/
        e[20]
      ), c(t, "animation-timing-function", n);
    },
    m(i, r) {
      _(i, t, r);
    },
    p(i, r) {
      J(i), r & /*iconUrl, iconSteps, iconFps, iconRatio, iconScale, iconWidth*/
      252 && c(t, "width", w(j({
        originWidth: (
          /*width*/
          i[1]
        ),
        originHeight: (
          /*height*/
          i[18]
        ),
        scale: (
          /*iconScale*/
          i[4]
        ),
        wantedWidth: (
          /*iconWidth*/
          i[3]
        )
      }).width)), r & /*iconUrl, iconSteps, iconFps, iconRatio, iconScale, iconWidth*/
      252 && c(t, "height", w(j({
        originWidth: (
          /*width*/
          i[1]
        ),
        originHeight: (
          /*height*/
          i[18]
        ),
        scale: (
          /*iconScale*/
          i[4]
        ),
        wantedWidth: (
          /*iconWidth*/
          i[3]
        )
      }).height)), r & /*iconUrl*/
      128 && o !== (o = `url(${/*iconUrl*/
      i[7]})`) && c(t, "background-image", o), r & /*iconUrl, iconSteps, iconFps, iconRatio*/
      228 && c(
        t,
        "animation-duration",
        /*duration*/
        i[20]
      ), r & /*iconUrl, iconSteps, iconFps, iconRatio*/
      228 && n !== (n = `steps(${/*steps*/
      i[19] - 1})`) && c(t, "animation-timing-function", n);
    },
    d(i) {
      i && g(t);
    }
  };
}
function ze(e) {
  return { c: u, m: u, p: u, d: u };
}
function We(e) {
  let t, o, n = (
    /*iconCopy*/
    e[9] && O(e)
  );
  return {
    c() {
      n && n.c(), t = q();
    },
    m(i, r) {
      n && n.m(i, r), _(i, t, r), o = !0;
    },
    p(i, [r]) {
      /*iconCopy*/
      i[9] ? n ? (n.p(i, r), r & /*iconCopy*/
      512 && k(n, 1)) : (n = O(i), n.c(), k(n, 1), n.m(t.parentNode, t)) : n && (X(), v(n, 1, 1, () => {
        n = null;
      }), V());
    },
    i(i) {
      o || (k(n), o = !0);
    },
    o(i) {
      v(n), o = !1;
    },
    d(i) {
      n && n.d(i), i && g(t);
    }
  };
}
function j(e) {
  const { originWidth: t, originHeight: o, scale: n = 1, wantedWidth: i } = e, r = (i != null ? i : t) * n, l = typeof o == "number" ? r * (o / t) : void 0;
  return K(N({}, e), { width: r, height: l });
}
function Ie(e, t, o) {
  let n, i, r, l, f, s, d, I, E, H, S, { width: C = null } = t, { icon: a = null } = t, { shadow: F = !1 } = t;
  const L = se();
  function Z(h) {
    return R(this, null, function* () {
      const p = yield he(h);
      return L("iconLoaded", p), p;
    });
  }
  function $(h) {
    return R(this, null, function* () {
      if (typeof S == "number")
        return K(N({}, h), { width: S });
      const p = yield me(h);
      return L("iconLoaded", p), p;
    });
  }
  function M() {
    H || L("iconLoaded");
  }
  return fe(() => {
    M();
  }), e.$$set = (h) => {
    "width" in h && o(1, C = h.width), "icon" in h && o(14, a = h.icon), "shadow" in h && o(0, F = h.shadow);
  }, e.$$.update = () => {
    var h, p, T;
    e.$$.dirty & /*icon*/
    16384 && o(7, n = a == null ? void 0 : a.url), e.$$.dirty & /*icon*/
    16384 && o(11, i = a == null ? void 0 : a.bgcolor), e.$$.dirty & /*icon*/
    16384 && o(10, r = (h = a == null ? void 0 : a.bgopacity) != null ? h : 0.6), e.$$.dirty & /*icon*/
    16384 && o(2, l = (p = a == null ? void 0 : a.steps) != null ? p : 1), e.$$.dirty & /*icon*/
    16384 && o(6, f = a == null ? void 0 : a.fps), e.$$.dirty & /*icon*/
    16384 && o(5, s = a == null ? void 0 : a.ratio), e.$$.dirty & /*icon*/
    16384 && o(4, d = (T = a == null ? void 0 : a.scale) != null ? T : 1), e.$$.dirty & /*icon*/
    16384 && o(3, I = a == null ? void 0 : a.width), e.$$.dirty & /*iconUrl, iconSteps, iconFps, iconRatio, iconScale, iconWidth*/
    252 && o(9, E = z({
      url: n,
      steps: l,
      fps: f,
      ratio: s,
      scale: d,
      width: I
    })), e.$$.dirty & /*iconSteps*/
    4 && o(8, H = l > 1), e.$$.dirty & /*width*/
    2 && (S = C);
  }, M(), [
    F,
    C,
    l,
    I,
    d,
    s,
    f,
    n,
    H,
    E,
    r,
    i,
    Z,
    $,
    a
  ];
}
class Ee extends oe {
  constructor(t) {
    super(), re(this, t, Ie, We, le, { width: 1, icon: 14, shadow: 0 }, _e);
  }
}
export {
  Ee as default
};
