var Q = Object.defineProperty, V = Object.defineProperties;
var X = Object.getOwnPropertyDescriptors;
var E = Object.getOwnPropertySymbols;
var Y = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var F = (e, i, o) => i in e ? Q(e, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[i] = o, C = (e, i) => {
  for (var o in i || (i = {}))
    Y.call(i, o) && F(e, o, i[o]);
  if (E)
    for (var o of E(i))
      Z.call(i, o) && F(e, o, i[o]);
  return e;
}, L = (e, i) => V(e, X(i));
var K = (e, i, o) => new Promise((t, n) => {
  var r = (a) => {
    try {
      u(o.next(a));
    } catch (d) {
      n(d);
    }
  }, m = (a) => {
    try {
      u(o.throw(a));
    } catch (d) {
      n(d);
    }
  }, u = (a) => a.done ? t(a.value) : Promise.resolve(a.value).then(r, m);
  u((o = o.apply(e, i)).next());
});
import { SvelteComponent as $, init as x, safe_not_equal as ee, append_styles as ie, empty as N, insert as w, transition_in as _, transition_out as y, check_outros as B, detach as b, createEventDispatcher as ne, onMount as te, element as R, space as oe, attr as p, set_style as f, append as re, group_outros as G, create_component as ae, mount_component as le, destroy_component as ue, handle_promise as q, update_await_block_branch as J, noop as s, src_url_equal as M } from "../../../../vendor/svelte/internal/index.js";
import "three";
import { noTypecheck as W } from "../../../utils/noTypecheck.js";
import { getKeyframeInfo as se, getImageInfo as fe } from "../../../utils/getImageInfo.js";
import g from "../../../utils/px2rem.js";
import ce from "../Shadow.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
function de(e) {
  ie(e, "svelte-316sq3", "@keyframes svelte-316sq3-sprites-animation{0%{background-position:0 0}100%{background-position:100% 0}}.icon-image.svelte-316sq3{display:block;width:auto}.icon-keyframe.svelte-316sq3{background-repeat:no-repeat;background-size:auto 100%;animation-direction:normal;animation-iteration-count:infinite;animation-name:svelte-316sq3-sprites-animation;animation-delay:0}");
}
function T(e) {
  e[1] = e[19].width;
}
function U(e) {
  e[1] = e[19].width, e[16] = e[19].height, e[17] = e[19].steps, e[18] = e[19].duration;
}
function j(e) {
  let i, o, t, n = (
    /*shadow*/
    e[0] && A()
  );
  function r(a, d) {
    return (
      /*isKeyframe*/
      a[8] ? he : me
    );
  }
  let m = r(e), u = m(e);
  return {
    c() {
      i = R("div"), n && n.c(), o = oe(), u.c(), p(i, "class", "icon"), f(
        i,
        "width",
        /*width*/
        e[1]
      );
    },
    m(a, d) {
      w(a, i, d), n && n.m(i, null), re(i, o), u.m(i, null), t = !0;
    },
    p(a, d) {
      /*shadow*/
      a[0] ? n ? d & /*shadow*/
      1 && _(n, 1) : (n = A(), n.c(), _(n, 1), n.m(i, o)) : n && (G(), y(n, 1, 1, () => {
        n = null;
      }), B()), m === (m = r(a)) && u ? u.p(a, d) : (u.d(1), u = m(a), u && (u.c(), u.m(i, null))), d & /*width*/
      2 && f(
        i,
        "width",
        /*width*/
        a[1]
      );
    },
    i(a) {
      t || (_(n), t = !0);
    },
    o(a) {
      y(n), t = !1;
    },
    d(a) {
      a && b(i), n && n.d(), u.d();
    }
  };
}
function A(e) {
  let i, o;
  return i = new ce({
    props: {
      center: !0,
      blurRadius: 24,
      spreadRadius: 16
    }
  }), {
    c() {
      ae(i.$$.fragment);
    },
    m(t, n) {
      le(i, t, n), o = !0;
    },
    i(t) {
      o || (_(i.$$.fragment, t), o = !0);
    },
    o(t) {
      y(i.$$.fragment, t), o = !1;
    },
    d(t) {
      ue(i, t);
    }
  };
}
function me(e) {
  let i, o, t = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: ge,
    then: pe,
    catch: _e,
    value: 19
  };
  return q(
    o = /*getImage*/
    e[11](W({
      url: (
        /*iconUrl*/
        e[7]
      ),
      ratio: (
        /*iconRatio*/
        e[5]
      )
    })),
    t
  ), {
    c() {
      i = N(), t.block.c();
    },
    m(n, r) {
      w(n, i, r), t.block.m(n, t.anchor = r), t.mount = () => i.parentNode, t.anchor = i;
    },
    p(n, r) {
      e = n, t.ctx = e, r & /*iconUrl, iconRatio*/
      160 && o !== (o = /*getImage*/
      e[11](W({
        url: (
          /*iconUrl*/
          e[7]
        ),
        ratio: (
          /*iconRatio*/
          e[5]
        )
      }))) && q(o, t) || J(t, e, r);
    },
    d(n) {
      n && b(i), t.block.d(n), t.token = null, t = null;
    }
  };
}
function he(e) {
  let i, o, t = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: be,
    then: we,
    catch: ke,
    value: 19
  };
  return q(
    o = /*getKeyframe*/
    e[10](W({
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
    t
  ), {
    c() {
      i = N(), t.block.c();
    },
    m(n, r) {
      w(n, i, r), t.block.m(n, t.anchor = r), t.mount = () => i.parentNode, t.anchor = i;
    },
    p(n, r) {
      e = n, t.ctx = e, r & /*iconUrl, iconSteps, iconFps, iconRatio*/
      228 && o !== (o = /*getKeyframe*/
      e[10](W({
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
      }))) && q(o, t) || J(t, e, r);
    },
    d(n) {
      n && b(i), t.block.d(n), t.token = null, t = null;
    }
  };
}
function _e(e) {
  return { c: s, m: s, p: s, d: s };
}
function pe(e) {
  T(e);
  let i, o;
  return {
    c() {
      i = R("img"), p(i, "alt", "tag-icon"), p(i, "class", "icon-image svelte-316sq3"), M(i.src, o = /*iconUrl*/
      e[7]) || p(i, "src", o), f(i, "width", g(k({
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
      }).width)), f(i, "max-width", "initial");
    },
    m(t, n) {
      w(t, i, n);
    },
    p(t, n) {
      T(t), n & /*iconUrl*/
      128 && !M(i.src, o = /*iconUrl*/
      t[7]) && p(i, "src", o), n & /*iconUrl, iconRatio, iconScale, iconWidth*/
      184 && f(i, "width", g(k({
        originWidth: (
          /*width*/
          t[1]
        ),
        scale: (
          /*iconScale*/
          t[4]
        ),
        wantedWidth: (
          /*iconWidth*/
          t[3]
        )
      }).width));
    },
    d(t) {
      t && b(i);
    }
  };
}
function ge(e) {
  return { c: s, m: s, p: s, d: s };
}
function ke(e) {
  return { c: s, m: s, p: s, d: s };
}
function we(e) {
  U(e);
  let i, o = `url(${/*iconUrl*/
  e[7]})`, t = `steps(${/*steps*/
  e[17] - 1})`;
  return {
    c() {
      i = R("div"), p(i, "class", "icon-keyframe svelte-316sq3"), f(i, "width", g(k({
        originWidth: (
          /*width*/
          e[1]
        ),
        originHeight: (
          /*height*/
          e[16]
        ),
        scale: (
          /*iconScale*/
          e[4]
        ),
        wantedWidth: (
          /*iconWidth*/
          e[3]
        )
      }).width)), f(i, "height", g(k({
        originWidth: (
          /*width*/
          e[1]
        ),
        originHeight: (
          /*height*/
          e[16]
        ),
        scale: (
          /*iconScale*/
          e[4]
        ),
        wantedWidth: (
          /*iconWidth*/
          e[3]
        )
      }).height)), f(i, "background-image", o), f(
        i,
        "animation-duration",
        /*duration*/
        e[18]
      ), f(i, "animation-timing-function", t);
    },
    m(n, r) {
      w(n, i, r);
    },
    p(n, r) {
      U(n), r & /*iconUrl, iconSteps, iconFps, iconRatio, iconScale, iconWidth*/
      252 && f(i, "width", g(k({
        originWidth: (
          /*width*/
          n[1]
        ),
        originHeight: (
          /*height*/
          n[16]
        ),
        scale: (
          /*iconScale*/
          n[4]
        ),
        wantedWidth: (
          /*iconWidth*/
          n[3]
        )
      }).width)), r & /*iconUrl, iconSteps, iconFps, iconRatio, iconScale, iconWidth*/
      252 && f(i, "height", g(k({
        originWidth: (
          /*width*/
          n[1]
        ),
        originHeight: (
          /*height*/
          n[16]
        ),
        scale: (
          /*iconScale*/
          n[4]
        ),
        wantedWidth: (
          /*iconWidth*/
          n[3]
        )
      }).height)), r & /*iconUrl*/
      128 && o !== (o = `url(${/*iconUrl*/
      n[7]})`) && f(i, "background-image", o), r & /*iconUrl, iconSteps, iconFps, iconRatio*/
      228 && f(
        i,
        "animation-duration",
        /*duration*/
        n[18]
      ), r & /*iconUrl, iconSteps, iconFps, iconRatio*/
      228 && t !== (t = `steps(${/*steps*/
      n[17] - 1})`) && f(i, "animation-timing-function", t);
    },
    d(n) {
      n && b(i);
    }
  };
}
function be(e) {
  return { c: s, m: s, p: s, d: s };
}
function ye(e) {
  let i, o, t = (
    /*iconCopy*/
    e[9] && j(e)
  );
  return {
    c() {
      t && t.c(), i = N();
    },
    m(n, r) {
      t && t.m(n, r), w(n, i, r), o = !0;
    },
    p(n, [r]) {
      /*iconCopy*/
      n[9] ? t ? (t.p(n, r), r & /*iconCopy*/
      512 && _(t, 1)) : (t = j(n), t.c(), _(t, 1), t.m(i.parentNode, i)) : t && (G(), y(t, 1, 1, () => {
        t = null;
      }), B());
    },
    i(n) {
      o || (_(t), o = !0);
    },
    o(n) {
      y(t), o = !1;
    },
    d(n) {
      t && t.d(n), n && b(i);
    }
  };
}
function k(e) {
  const { originWidth: i, originHeight: o, scale: t = 1, wantedWidth: n } = e, r = (n != null ? n : i) * t, m = typeof o == "number" ? r * (o / i) : void 0;
  return L(C({}, e), { width: r, height: m });
}
function We(e, i, o) {
  let t, n, r, m, u, a, d, v, I, { width: H = null } = i, { icon: l = null } = i, { shadow: z = !1 } = i;
  const S = ne();
  function O(c) {
    return K(this, null, function* () {
      const h = yield se(c);
      return S("iconLoaded", h), h;
    });
  }
  function P(c) {
    return K(this, null, function* () {
      if (typeof I == "number")
        return L(C({}, c), { width: I });
      const h = yield fe(c);
      return S("iconLoaded", h), h;
    });
  }
  function D() {
    v || S("iconLoaded");
  }
  return te(() => {
    D();
  }), e.$$set = (c) => {
    "width" in c && o(1, H = c.width), "icon" in c && o(12, l = c.icon), "shadow" in c && o(0, z = c.shadow);
  }, e.$$.update = () => {
    var c, h;
    e.$$.dirty & /*icon*/
    4096 && o(7, t = l == null ? void 0 : l.url), e.$$.dirty & /*icon*/
    4096 && o(2, n = (c = l == null ? void 0 : l.steps) != null ? c : 1), e.$$.dirty & /*icon*/
    4096 && o(6, r = l == null ? void 0 : l.fps), e.$$.dirty & /*icon*/
    4096 && o(5, m = l == null ? void 0 : l.ratio), e.$$.dirty & /*icon*/
    4096 && o(4, u = (h = l == null ? void 0 : l.scale) != null ? h : 1), e.$$.dirty & /*icon*/
    4096 && o(3, a = l == null ? void 0 : l.width), e.$$.dirty & /*iconUrl, iconSteps, iconFps, iconRatio, iconScale, iconWidth*/
    252 && o(9, d = W({
      url: t,
      steps: n,
      fps: r,
      ratio: m,
      scale: u,
      width: a
    })), e.$$.dirty & /*iconSteps*/
    4 && o(8, v = n > 1), e.$$.dirty & /*width*/
    2 && (I = H);
  }, D(), [
    z,
    H,
    n,
    a,
    u,
    m,
    r,
    t,
    v,
    d,
    O,
    P,
    l
  ];
}
class Re extends $ {
  constructor(i) {
    super(), x(this, i, We, ye, ee, { width: 1, icon: 12, shadow: 0 }, de);
  }
}
export {
  Re as default
};
