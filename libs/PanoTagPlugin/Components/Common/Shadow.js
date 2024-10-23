import { SvelteComponent as S, init as q, safe_not_equal as N, append_styles as j, empty as A, insert as X, transition_in as h, transition_out as R, check_outros as B, detach as v, element as E, attr as m, set_style as s, add_render_callback as F, create_in_transition as G, create_out_transition as H, group_outros as J } from "../../../vendor/svelte/internal/index.js";
import { fade as k } from "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
function K(e) {
  j(e, "svelte-faoauy", ".shadow.svelte-faoauy{position:absolute}");
}
function I(e) {
  let i, t, l, f, u;
  return {
    c() {
      i = E("div"), m(i, "class", "shadow svelte-faoauy"), m(i, "style", t = `
      left: ${r(
        /*left*/
        e[5]
      )};
      bottom: ${r(
        /*bottom*/
        e[6]
      )};
      border-radius: ${/*round*/
      e[10] ? "9999px" : "0"};
      box-shadow: 0 0 ${r(
        /*blurRadius*/
        e[11]
      )} ${r(
        /*spreadRadius*/
        e[12]
      )} rgba(0, 0, 0, ${/*opacity*/
      e[13]});
      ${/*horizontalCenter*/
      e[8] ? "transform: translateX(-50%); left: 50%" : ""}
      ${/*verticalCenter*/
      e[9] ? "transform: translateX(-50%); top: 50%" : ""}
      ${/*center*/
      e[7] ? "transform: translate(-50%, -50%); left: 50%; top: 50%;" : ""}
    `), s(i, "width", r(
        /*width*/
        e[3]
      )), s(i, "height", r(
        /*height*/
        e[4]
      )), s(
        i,
        "z-index",
        /*zIndex*/
        e[14]
      );
    },
    m(a, o) {
      X(a, i, o), u = !0;
    },
    p(a, o) {
      e = a, (!u || o & /*left, bottom, round, blurRadius, spreadRadius, opacity, horizontalCenter, verticalCenter, center*/
      16352 && t !== (t = `
      left: ${r(
        /*left*/
        e[5]
      )};
      bottom: ${r(
        /*bottom*/
        e[6]
      )};
      border-radius: ${/*round*/
      e[10] ? "9999px" : "0"};
      box-shadow: 0 0 ${r(
        /*blurRadius*/
        e[11]
      )} ${r(
        /*spreadRadius*/
        e[12]
      )} rgba(0, 0, 0, ${/*opacity*/
      e[13]});
      ${/*horizontalCenter*/
      e[8] ? "transform: translateX(-50%); left: 50%" : ""}
      ${/*verticalCenter*/
      e[9] ? "transform: translateX(-50%); top: 50%" : ""}
      ${/*center*/
      e[7] ? "transform: translate(-50%, -50%); left: 50%; top: 50%;" : ""}
    `)) && m(i, "style", t);
      const d = o & /*left, bottom, round, blurRadius, spreadRadius, opacity, horizontalCenter, verticalCenter, center*/
      16352;
      (d || o & /*width, left, bottom, round, blurRadius, spreadRadius, opacity, horizontalCenter, verticalCenter, center*/
      16360) && s(i, "width", r(
        /*width*/
        e[3]
      )), (d || o & /*height, left, bottom, round, blurRadius, spreadRadius, opacity, horizontalCenter, verticalCenter, center*/
      16368) && s(i, "height", r(
        /*height*/
        e[4]
      )), (d || o & /*zIndex, left, bottom, round, blurRadius, spreadRadius, opacity, horizontalCenter, verticalCenter, center*/
      32736) && s(
        i,
        "z-index",
        /*zIndex*/
        e[14]
      );
    },
    i(a) {
      u || (a && F(() => {
        u && (f && f.end(1), l = G(i, k, { duration: (
          /*inDelay*/
          e[0]
        ) }), l.start());
      }), u = !0);
    },
    o(a) {
      l && l.invalidate(), a && (f = H(i, k, { duration: (
        /*outDelay*/
        e[1]
      ) })), u = !1;
    },
    d(a) {
      a && v(i), a && f && f.end();
    }
  };
}
function L(e) {
  let i, t = (
    /*visible*/
    e[2] && I(e)
  );
  return {
    c() {
      t && t.c(), i = A();
    },
    m(l, f) {
      t && t.m(l, f), X(l, i, f);
    },
    p(l, [f]) {
      /*visible*/
      l[2] ? t ? (t.p(l, f), f & /*visible*/
      4 && h(t, 1)) : (t = I(l), t.c(), h(t, 1), t.m(i.parentNode, i)) : t && (J(), R(t, 1, 1, () => {
        t = null;
      }), B());
    },
    i(l) {
      h(t);
    },
    o(l) {
      R(t);
    },
    d(l) {
      t && t.d(l), l && v(i);
    }
  };
}
function r(e) {
  return typeof e == "number" ? e / 16 + "rem" : e;
}
function M(e, i, t) {
  let { inDelay: l = 1e3 } = i, { outDelay: f = 1e3 } = i, { visible: u = !0 } = i, { width: a = 0 } = i, { height: o = 0 } = i, { left: d = 0 } = i, { bottom: b = 0 } = i, { center: _ = !1 } = i, { horizontalCenter: y = !1 } = i, { verticalCenter: c = !1 } = i, { round: w = !1 } = i, { blurRadius: z } = i, { spreadRadius: C } = i, { opacity: g = 0.15 } = i, { zIndex: D = -1 } = i;
  return e.$$set = (n) => {
    "inDelay" in n && t(0, l = n.inDelay), "outDelay" in n && t(1, f = n.outDelay), "visible" in n && t(2, u = n.visible), "width" in n && t(3, a = n.width), "height" in n && t(4, o = n.height), "left" in n && t(5, d = n.left), "bottom" in n && t(6, b = n.bottom), "center" in n && t(7, _ = n.center), "horizontalCenter" in n && t(8, y = n.horizontalCenter), "verticalCenter" in n && t(9, c = n.verticalCenter), "round" in n && t(10, w = n.round), "blurRadius" in n && t(11, z = n.blurRadius), "spreadRadius" in n && t(12, C = n.spreadRadius), "opacity" in n && t(13, g = n.opacity), "zIndex" in n && t(14, D = n.zIndex);
  }, [
    l,
    f,
    u,
    a,
    o,
    d,
    b,
    _,
    y,
    c,
    w,
    z,
    C,
    g,
    D
  ];
}
class T extends S {
  constructor(i) {
    super(), q(
      this,
      i,
      M,
      L,
      N,
      {
        inDelay: 0,
        outDelay: 1,
        visible: 2,
        width: 3,
        height: 4,
        left: 5,
        bottom: 6,
        center: 7,
        horizontalCenter: 8,
        verticalCenter: 9,
        round: 10,
        blurRadius: 11,
        spreadRadius: 12,
        opacity: 13,
        zIndex: 14
      },
      K
    );
  }
}
export {
  T as default
};
