import { SvelteComponent as w, init as k, safe_not_equal as S, append_styles as C, empty as H, insert as y, noop as b, detach as D, element as _, space as W, text as O, attr as u, set_style as s, append as m, set_data as X } from "../../../vendor/svelte/internal/index.js";
import { COMPASS_IMAGE as Y } from "../../Assets/compass.js";
import { rad2Deg as x } from "../../../shared-utils/math/rad2Deg.js";
function z(n) {
  C(n, "svelte-19jnco7", ".floorplan-plugin__compass.svelte-19jnco7{position:absolute;will-change:opacity}.floorplan-plugin__compass-image.svelte-19jnco7{width:14.4375rem;height:2.5625rem;position:absolute;left:50%;top:50%;transform:translateX(-50%) translateY(-50%);opacity:0.1;background-repeat:no-repeat;background-size:100% 100%}.floorplan-plugin__compass-text.svelte-19jnco7{position:absolute;left:50%;top:50%;transform:translateX(-50%) translateY(-50%);opacity:0.2;font-weight:bold;font-size:0.625rem;color:#fff}");
}
function A(n) {
  let t, e, o, a, h, r = `${/*containerWidth*/
  n[1]}px`, f = `${/*height*/
  n[2]}px`, c = `-${/*height*/
  n[2]}px`, g = `${/*transformOriginX*/
  n[5]}px ${/*transformOriginY*/
  n[6]}px`;
  return {
    c() {
      t = _("div"), e = _("div"), o = W(), a = _("span"), h = O(
        /*northDesc*/
        n[0]
      ), u(e, "class", "floorplan-plugin__compass-image svelte-19jnco7"), s(e, "background-image", `url(${Y})`), u(a, "class", "floorplan-plugin__compass-text svelte-19jnco7"), u(t, "class", "floorplan-plugin__compass svelte-19jnco7"), s(
        t,
        "transform",
        /*compassTransformStyle*/
        n[4]
      ), s(t, "width", r), s(t, "height", f), s(t, "top", c), s(t, "transform-origin", g);
    },
    m(l, p) {
      y(l, t, p), m(t, e), m(t, o), m(t, a), m(a, h);
    },
    p(l, p) {
      p & /*northDesc*/
      1 && X(
        h,
        /*northDesc*/
        l[0]
      ), p & /*containerWidth*/
      2 && r !== (r = `${/*containerWidth*/
      l[1]}px`) && s(t, "width", r), p & /*height*/
      4 && f !== (f = `${/*height*/
      l[2]}px`) && s(t, "height", f), p & /*height*/
      4 && c !== (c = `-${/*height*/
      l[2]}px`) && s(t, "top", c);
    },
    d(l) {
      l && D(t);
    }
  };
}
function M(n) {
  let t, e = (
    /*canCompassShow*/
    n[3] && A(n)
  );
  return {
    c() {
      e && e.c(), t = H();
    },
    m(o, a) {
      e && e.m(o, a), y(o, t, a);
    },
    p(o, [a]) {
      /*canCompassShow*/
      o[3] && e.p(o, a);
    },
    i: b,
    o: b,
    d(o) {
      e && e.d(o), o && D(t);
    }
  };
}
function R(n, t, e) {
  var d;
  let { floorplanData: o } = t, { northDesc: a } = t, { containerWidth: h } = t, { containerHeight: r } = t, { height: f = 50 } = t;
  const c = (d = o.entrance) == null ? void 0 : d.northRad, g = typeof c == "number", p = `rotate(${-(c ? x(c) : 0) + 90}deg)`, v = h / 2, j = f + r / 2;
  return n.$$set = (i) => {
    "floorplanData" in i && e(7, o = i.floorplanData), "northDesc" in i && e(0, a = i.northDesc), "containerWidth" in i && e(1, h = i.containerWidth), "containerHeight" in i && e(8, r = i.containerHeight), "height" in i && e(2, f = i.height);
  }, [
    a,
    h,
    f,
    g,
    p,
    v,
    j,
    o,
    r
  ];
}
class G extends w {
  constructor(t) {
    super(), k(
      this,
      t,
      R,
      M,
      S,
      {
        floorplanData: 7,
        northDesc: 0,
        containerWidth: 1,
        containerHeight: 8,
        height: 2
      },
      z
    );
  }
}
export {
  G as default
};
