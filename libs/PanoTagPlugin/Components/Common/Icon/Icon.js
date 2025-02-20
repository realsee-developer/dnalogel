var x = Object.defineProperty, ee = Object.defineProperties;
var ie = Object.getOwnPropertyDescriptors;
var K = Object.getOwnPropertySymbols;
var te = Object.prototype.hasOwnProperty, ne = Object.prototype.propertyIsEnumerable;
var V = (e, t, n) => t in e ? x(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, C = (e, t) => {
  for (var n in t || (t = {}))
    te.call(t, n) && V(e, n, t[n]);
  if (K)
    for (var n of K(t))
      ne.call(t, n) && V(e, n, t[n]);
  return e;
}, I = (e, t) => ee(e, ie(t));
var M = (e, t, n) => new Promise((o, i) => {
  var r = (f) => {
    try {
      d(n.next(f));
    } catch (s) {
      i(s);
    }
  }, l = (f) => {
    try {
      d(n.throw(f));
    } catch (s) {
      i(s);
    }
  }, d = (f) => f.done ? o(f.value) : Promise.resolve(f.value).then(r, l);
  d((n = n.apply(e, t)).next());
});
import { SvelteComponent as oe, init as re, safe_not_equal as le, append_styles as ae, empty as z, insert as p, transition_in as k, transition_out as y, check_outros as X, detach as b, createEventDispatcher as fe, onMount as ue, element as w, space as F, attr as m, set_style as u, append as L, group_outros as Q, create_component as de, mount_component as ce, destroy_component as se, handle_promise as W, update_await_block_branch as q, noop as c, src_url_equal as D } from "../../../../vendor/svelte/internal/index.js";
import "three";
import { noTypecheck as v } from "../../../utils/noTypecheck.js";
import { getKeyframeInfo as ge, getImageInfo as me } from "../../../utils/getImageInfo.js";
import _ from "../../../utils/px2rem.js";
import he from "../Shadow.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
function pe(e) {
  ae(e, "svelte-ixfgdn", "@keyframes svelte-ixfgdn-sprites-animation{0%{background-position:0 0}100%{background-position:100% 0}}.icon-bg.svelte-ixfgdn{position:absolute;width:141%;height:141%;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:50%;overflow:hidden}.icon-bg-circle.svelte-ixfgdn,.icon-bg-color.svelte-ixfgdn{position:absolute;width:100%;height:100%}.icon-bg-circle.svelte-ixfgdn{background-image:url(data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABOFBMVEUBAQEAAAAZGRk7OztMTEx5eXktLS1lZWVsbGxUVFR/f39zc3NcXFyFhYWmpqaUlJTs7Ozd3d3h4eGLi4vo6Ojo6Oje3t7Z2dnV1dXh4eH39/f29vb19fXs7Ozj4+Px8fGdnZ39/f36+vrv7+/t7e3p6eno6OjY2NjLy8vExMTo6Oitra3k5OSgoKDb29v9/f38/Pz19fXy8vLv7+/v7+/i4uLc3NzR0dHPz8/c3Nza2tre3t76+vr39/f19fX09PTz8/Pu7u7y8vLx8fHt7e3Y2NjNzc3o6Ojs7Ozm5ubk5OTi4uLc3Nz+/v79/f38/Pz6+vr5+fny8vLy8vLy8vLp6eno6Ojd3d3U1NTv7+/Z2dnf39++vr68vLzq6uri4uLb29vj4+Pj4+O6urra2trV1dXS0tLR0dGhC/hLAAAAaHRSTlMaABwgIy0eJyklLysnMD02lAl8MoqFd29nDMO/vJiBZDnl06GakI1pWFNBQT87EOnjuaWkinh1Y2A5MyLax7WtqJ2FdHFsXVpRSB4UB/jt393Ms7KwgG5sZGFcVE9LeXJybGROMDAtHJK07SIAAAKcSURBVEjHlZbVdvJAFIWntClhAjGiuLu71A2tu/0u7/8GnZBVKAMhYV+xVvbHmZPM7DNgAxeXOakdRitRf6Le64wXHmNAoceWy4cCL7fOFFkKJMRfbW4FoJ54PLEk7YKQQILQFUqf8nxubAQEPbt8CBIURZJ2JJKkKAIy6cZjZykw9EXiNCRIu9Ph2JrI4XDaSYSkGsnCIpCLeN41OzJvToUgDaFlqYsDwdJdXrMj9/b2tm0i9AMxGsIkA+15IHjBugnSqdltc9IQJ0m4W0L7K5C5iLko9Pe6HUylI6gI5WoK3RnQDfvcyD+xA0wTBBHuhjCaApErmsD9OEEw4v0ncHyeJkjcjxMkkfUPdEAtVSHqF/mBgRCBOocyy02Ao2KWsG9t2lYBts0tO5E/7GnAqBSH+oKAofRFwWS1gIBgKa8XACukl2AqAwQc3OoFwErpJQRxA6g7El7AuMTTHQf6O1kKe0WGL4qi9zLgqOyi9BWZr4lyRY9BJTprwbwJlgXlBCT1FsybIKG4D7z8rGfzrnkf8JyuA5zuAm9yHUC+BjfSOkBgF1QC6zQd94KasM5rrR6AB/86H85XA7kD2vrWyF72ARdtWd989SsVbHwLWN/ee/voPAxijNUDlA8HEaCyTatHNB4eaSHwGg9ZC4Fs8WiSGpyoWIuZaljVgywn0FaCLH1+/BmV3yXGPCrpncg0Wwt1xTyMfeHuLO6H9ZRZ3PuLma8DpSOlVw8UthicH1l/5RRjPLLy+5fP+FD8/3QWMhqK797r3OLYVVOt38yysUsnInvDpYP934vyxuCDPcR7vM+Gd43244/mW2h2daAV1uc94VZcTrjOCx+QZKWZOlMaov/2ptYv4JcTXOM/rz/vE/5YjBUfMtzC4w9Upk5IbvRgEQAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-size:100% 100%}.icon-image.svelte-ixfgdn{position:relative;display:block;width:auto}.icon-keyframe.svelte-ixfgdn{background-repeat:no-repeat;background-size:auto 100%;animation-direction:normal;animation-iteration-count:infinite;animation-name:svelte-ixfgdn-sprites-animation;animation-delay:0}");
}
function N(e) {
  e[1] = e[21].width;
}
function U(e) {
  e[1] = e[21].width, e[18] = e[21].height, e[19] = e[21].steps, e[20] = e[21].duration;
}
function Z(e) {
  let t, n, o, i = (
    /*shadow*/
    e[0] && P()
  );
  function r(f, s) {
    return (
      /*isKeyframe*/
      f[8] ? ke : be
    );
  }
  let l = r(e), d = l(e);
  return {
    c() {
      t = w("div"), i && i.c(), n = F(), d.c(), m(t, "class", "icon"), u(
        t,
        "width",
        /*width*/
        e[1]
      );
    },
    m(f, s) {
      p(f, t, s), i && i.m(t, null), L(t, n), d.m(t, null), o = !0;
    },
    p(f, s) {
      /*shadow*/
      f[0] ? i ? s & /*shadow*/
      1 && k(i, 1) : (i = P(), i.c(), k(i, 1), i.m(t, n)) : i && (Q(), y(i, 1, 1, () => {
        i = null;
      }), X()), l === (l = r(f)) && d ? d.p(f, s) : (d.d(1), d = l(f), d && (d.c(), d.m(t, null))), s & /*width*/
      2 && u(
        t,
        "width",
        /*width*/
        f[1]
      );
    },
    i(f) {
      o || (k(i), o = !0);
    },
    o(f) {
      y(i), o = !1;
    },
    d(f) {
      f && b(t), i && i.d(), d.d();
    }
  };
}
function P(e) {
  let t, n;
  return t = new he({
    props: {
      center: !0,
      blurRadius: 24,
      spreadRadius: 16
    }
  }), {
    c() {
      de(t.$$.fragment);
    },
    m(o, i) {
      ce(t, o, i), n = !0;
    },
    i(o) {
      n || (k(t.$$.fragment, o), n = !0);
    },
    o(o) {
      y(t.$$.fragment, o), n = !1;
    },
    d(o) {
      se(t, o);
    }
  };
}
function be(e) {
  let t, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: we,
    then: Ae,
    catch: _e,
    value: 21
  };
  return W(
    n = /*getImage*/
    e[13](v({
      url: (
        /*iconUrl*/
        e[7]
      ),
      ratio: (
        /*iconRatio*/
        e[5]
      )
    })),
    o
  ), {
    c() {
      t = z(), o.block.c();
    },
    m(i, r) {
      p(i, t, r), o.block.m(i, o.anchor = r), o.mount = () => t.parentNode, o.anchor = t;
    },
    p(i, r) {
      e = i, o.ctx = e, r & /*iconUrl, iconRatio*/
      160 && n !== (n = /*getImage*/
      e[13](v({
        url: (
          /*iconUrl*/
          e[7]
        ),
        ratio: (
          /*iconRatio*/
          e[5]
        )
      }))) && W(n, o) || q(o, e, r);
    },
    d(i) {
      i && b(t), o.block.d(i), o.token = null, o = null;
    }
  };
}
function ke(e) {
  let t, n, o = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: Le,
    then: ve,
    catch: ye,
    value: 21
  };
  return W(
    n = /*getKeyframe*/
    e[12](v({
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
    o
  ), {
    c() {
      t = z(), o.block.c();
    },
    m(i, r) {
      p(i, t, r), o.block.m(i, o.anchor = r), o.mount = () => t.parentNode, o.anchor = t;
    },
    p(i, r) {
      e = i, o.ctx = e, r & /*iconUrl, iconSteps, iconFps, iconRatio*/
      228 && n !== (n = /*getKeyframe*/
      e[12](v({
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
      }))) && W(n, o) || q(o, e, r);
    },
    d(i) {
      i && b(t), o.block.d(i), o.token = null, o = null;
    }
  };
}
function _e(e) {
  return { c, m: c, p: c, d: c };
}
function Ae(e) {
  N(e);
  let t, n, o, i = (
    /*bgcolor*/
    e[11] && T(e)
  );
  return {
    c() {
      i && i.c(), t = F(), n = w("img"), m(n, "alt", "tag-icon"), m(n, "class", "icon-image svelte-ixfgdn"), D(n.src, o = /*iconUrl*/
      e[7]) || m(n, "src", o), u(n, "width", _(A({
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
      }).width)), u(n, "max-width", "initial");
    },
    m(r, l) {
      i && i.m(r, l), p(r, t, l), p(r, n, l);
    },
    p(r, l) {
      N(r), /*bgcolor*/
      r[11] ? i ? i.p(r, l) : (i = T(r), i.c(), i.m(t.parentNode, t)) : i && (i.d(1), i = null), l & /*iconUrl*/
      128 && !D(n.src, o = /*iconUrl*/
      r[7]) && m(n, "src", o), l & /*iconUrl, iconRatio, iconScale, iconWidth*/
      184 && u(n, "width", _(A({
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
      i && i.d(r), r && b(t), r && b(n);
    }
  };
}
function T(e) {
  let t, n, o, i;
  return {
    c() {
      t = w("div"), n = w("div"), o = F(), i = w("div"), m(n, "class", "icon-bg-color svelte-ixfgdn"), u(
        n,
        "opacity",
        /*bgopacity*/
        e[10]
      ), u(
        n,
        "background",
        /*bgcolor*/
        e[11]
      ), m(i, "class", "icon-bg-circle svelte-ixfgdn"), m(t, "class", "icon-bg svelte-ixfgdn");
    },
    m(r, l) {
      p(r, t, l), L(t, n), L(t, o), L(t, i);
    },
    p(r, l) {
      l & /*bgopacity*/
      1024 && u(
        n,
        "opacity",
        /*bgopacity*/
        r[10]
      ), l & /*bgcolor*/
      2048 && u(
        n,
        "background",
        /*bgcolor*/
        r[11]
      );
    },
    d(r) {
      r && b(t);
    }
  };
}
function we(e) {
  return { c, m: c, p: c, d: c };
}
function ye(e) {
  return { c, m: c, p: c, d: c };
}
function ve(e) {
  U(e);
  let t, n = `url(${/*iconUrl*/
  e[7]})`, o = `steps(${/*steps*/
  e[19] - 1})`;
  return {
    c() {
      t = w("div"), m(t, "class", "icon-keyframe svelte-ixfgdn"), u(t, "width", _(A({
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
      }).width)), u(t, "height", _(A({
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
      }).height)), u(t, "background-image", n), u(
        t,
        "animation-duration",
        /*duration*/
        e[20]
      ), u(t, "animation-timing-function", o);
    },
    m(i, r) {
      p(i, t, r);
    },
    p(i, r) {
      U(i), r & /*iconUrl, iconSteps, iconFps, iconRatio, iconScale, iconWidth*/
      252 && u(t, "width", _(A({
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
      252 && u(t, "height", _(A({
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
      128 && n !== (n = `url(${/*iconUrl*/
      i[7]})`) && u(t, "background-image", n), r & /*iconUrl, iconSteps, iconFps, iconRatio*/
      228 && u(
        t,
        "animation-duration",
        /*duration*/
        i[20]
      ), r & /*iconUrl, iconSteps, iconFps, iconRatio*/
      228 && o !== (o = `steps(${/*steps*/
      i[19] - 1})`) && u(t, "animation-timing-function", o);
    },
    d(i) {
      i && b(t);
    }
  };
}
function Le(e) {
  return { c, m: c, p: c, d: c };
}
function We(e) {
  let t, n, o = (
    /*iconCopy*/
    e[9] && Z(e)
  );
  return {
    c() {
      o && o.c(), t = z();
    },
    m(i, r) {
      o && o.m(i, r), p(i, t, r), n = !0;
    },
    p(i, [r]) {
      /*iconCopy*/
      i[9] ? o ? (o.p(i, r), r & /*iconCopy*/
      512 && k(o, 1)) : (o = Z(i), o.c(), k(o, 1), o.m(t.parentNode, t)) : o && (Q(), y(o, 1, 1, () => {
        o = null;
      }), X());
    },
    i(i) {
      n || (k(o), n = !0);
    },
    o(i) {
      y(o), n = !1;
    },
    d(i) {
      o && o.d(i), i && b(t);
    }
  };
}
function A(e) {
  const { originWidth: t, originHeight: n, scale: o = 1, wantedWidth: i } = e, r = (i != null ? i : t) * o, l = typeof n == "number" ? r * (n / t) : void 0;
  return I(C({}, e), { width: r, height: l });
}
function Oe(e, t, n) {
  let o, i, r, l, d, f, s, O, J, B, H, { width: R = null } = t, { icon: a = null } = t, { shadow: S = !1 } = t;
  const j = fe();
  function Y(g) {
    return M(this, null, function* () {
      const h = yield ge(g);
      return j("iconLoaded", h), h;
    });
  }
  function $(g) {
    return M(this, null, function* () {
      if (typeof H == "number")
        return I(C({}, g), { width: H });
      const h = yield me(g);
      return j("iconLoaded", h), h;
    });
  }
  function E() {
    B || j("iconLoaded");
  }
  return ue(() => {
    E();
  }), e.$$set = (g) => {
    "width" in g && n(1, R = g.width), "icon" in g && n(14, a = g.icon), "shadow" in g && n(0, S = g.shadow);
  }, e.$$.update = () => {
    var g, h, G;
    e.$$.dirty & /*icon*/
    16384 && n(7, o = a == null ? void 0 : a.url), e.$$.dirty & /*icon*/
    16384 && n(11, i = a == null ? void 0 : a.bgcolor), e.$$.dirty & /*icon*/
    16384 && n(10, r = (g = a == null ? void 0 : a.bgopacity) != null ? g : 0.6), e.$$.dirty & /*icon*/
    16384 && n(2, l = (h = a == null ? void 0 : a.steps) != null ? h : 1), e.$$.dirty & /*icon*/
    16384 && n(6, d = a == null ? void 0 : a.fps), e.$$.dirty & /*icon*/
    16384 && n(5, f = a == null ? void 0 : a.ratio), e.$$.dirty & /*icon*/
    16384 && n(4, s = (G = a == null ? void 0 : a.scale) != null ? G : 1), e.$$.dirty & /*icon*/
    16384 && n(3, O = a == null ? void 0 : a.width), e.$$.dirty & /*iconUrl, iconSteps, iconFps, iconRatio, iconScale, iconWidth*/
    252 && n(9, J = v({
      url: o,
      steps: l,
      fps: d,
      ratio: f,
      scale: s,
      width: O
    })), e.$$.dirty & /*iconSteps*/
    4 && n(8, B = l > 1), e.$$.dirty & /*width*/
    2 && (H = R);
  }, E(), [
    S,
    R,
    l,
    O,
    s,
    f,
    d,
    o,
    B,
    J,
    r,
    i,
    Y,
    $,
    a
  ];
}
class Je extends oe {
  constructor(t) {
    super(), re(this, t, Oe, We, le, { width: 1, icon: 14, shadow: 0 }, pe);
  }
}
export {
  Je as default
};
