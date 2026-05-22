import { SvelteComponent as M, init as P, safe_not_equal as D, append_styles as O, element as g, attr as u, toggle_class as _, set_style as b, insert as c, listen as s, action_destroyer as j, noop as H, detach as d, run_all as B, createEventDispatcher as G, space as J, append as F, empty as K, text as S, set_data as I, HtmlTag as Q } from "../../../vendor/svelte/internal/index.js";
import { svelteResizeObserver as U } from "../../../shared-utils/svelte/resizeObserver.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
function X(n) {
  O(n, "svelte-qulme3", ".floorplan-guide-plugin__room-label.svelte-qulme3{position:absolute;display:flex;flex-direction:column;align-items:center;transform:translate(-50%, -50%);color:#fff;text-shadow:0.0625rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.8);line-height:1.2;white-space:nowrap;pointer-events:auto;cursor:pointer;transition:opacity 300ms;opacity:1}.floorplan-guide-plugin__room-label--hidden.svelte-qulme3{opacity:0}.floorplan-guide-plugin__room-label--hovered.svelte-qulme3{opacity:1 !important}.floorplan-guide-plugin__room-content.svelte-qulme3{display:flex;flex-direction:column;align-items:center}.floorplan-guide-plugin__room-name.svelte-qulme3{font-family:PingFangSC-Regular;font-weight:400;font-size:0.875rem;color:#FFFFFF;margin-bottom:0.125rem}.floorplan-guide-plugin__room-area.svelte-qulme3{opacity:0.6;font-family:PingFangSC-Regular;font-weight:400;font-size:0.75rem;color:#FFFFFF;text-align:center}");
}
function Y(n) {
  let e, o, t = (
    /*roomNameEnable*/
    n[2] && z(n)
  ), l = (
    /*roomAreaEnable*/
    n[3] && /*roomAreaSize*/
    n[4] && A(n)
  );
  return {
    c() {
      e = g("div"), t && t.c(), o = J(), l && l.c(), u(e, "class", "floorplan-guide-plugin__room-content svelte-qulme3");
    },
    m(i, r) {
      c(i, e, r), t && t.m(e, null), F(e, o), l && l.m(e, null);
    },
    p(i, r) {
      /*roomNameEnable*/
      i[2] ? t ? t.p(i, r) : (t = z(i), t.c(), t.m(e, o)) : t && (t.d(1), t = null), /*roomAreaEnable*/
      i[3] && /*roomAreaSize*/
      i[4] ? l ? l.p(i, r) : (l = A(i), l.c(), l.m(e, null)) : l && (l.d(1), l = null);
    },
    d(i) {
      i && d(e), t && t.d(), l && l.d();
    }
  };
}
function Z(n) {
  let e, o = (
    /*userConfigElement*/
    n[5].outerHTML + ""
  ), t;
  return {
    c() {
      e = new Q(!1), t = K(), e.a = t;
    },
    m(l, i) {
      e.m(o, l, i), c(l, t, i);
    },
    p(l, i) {
      i & /*userConfigElement*/
      32 && o !== (o = /*userConfigElement*/
      l[5].outerHTML + "") && e.p(o);
    },
    d(l) {
      l && d(t), l && e.d();
    }
  };
}
function z(n) {
  let e, o = (
    /*room*/
    n[0].name + ""
  ), t;
  return {
    c() {
      e = g("span"), t = S(o), u(e, "class", "floorplan-guide-plugin__room-name svelte-qulme3");
    },
    m(l, i) {
      c(l, e, i), F(e, t);
    },
    p(l, i) {
      i & /*room*/
      1 && o !== (o = /*room*/
      l[0].name + "") && I(t, o);
    },
    d(l) {
      l && d(e);
    }
  };
}
function A(n) {
  let e, o;
  return {
    c() {
      e = g("span"), o = S(
        /*roomAreaSize*/
        n[4]
      ), u(e, "class", "floorplan-guide-plugin__room-area svelte-qulme3");
    },
    m(t, l) {
      c(t, e, l), F(e, o);
    },
    p(t, l) {
      l & /*roomAreaSize*/
      16 && I(
        o,
        /*roomAreaSize*/
        t[4]
      );
    },
    d(t) {
      t && d(e);
    }
  };
}
function x(n) {
  let e, o, t;
  function l(m, f) {
    return (
      /*userConfigElement*/
      m[5] ? Z : Y
    );
  }
  let i = l(n), r = i(n);
  return {
    c() {
      e = g("div"), r.c(), u(e, "class", "floorplan-guide-plugin__room-label svelte-qulme3"), u(e, "role", "button"), u(e, "tabindex", "0"), _(
        e,
        "floorplan-guide-plugin__room-label--hovered",
        /*isHovered*/
        n[1]
      ), _(e, "floorplan-guide-plugin__room-label--hidden", !/*labelVisible*/
      n[10]), b(
        e,
        "left",
        /*left*/
        n[6]
      ), b(
        e,
        "top",
        /*top*/
        n[7]
      );
    },
    m(m, f) {
      c(m, e, f), r.m(e, null), o || (t = [
        s(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          n[17]
        ),
        s(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          n[18]
        ),
        s(e, "keydown", $),
        j(U.call(null, e)),
        s(
          e,
          "clientWidth",
          /*clientWidth_handler*/
          n[19]
        ),
        s(
          e,
          "clientHeight",
          /*clientHeight_handler*/
          n[20]
        )
      ], o = !0);
    },
    p(m, [f]) {
      i === (i = l(m)) && r ? r.p(m, f) : (r.d(1), r = i(m), r && (r.c(), r.m(e, null))), f & /*isHovered*/
      2 && _(
        e,
        "floorplan-guide-plugin__room-label--hovered",
        /*isHovered*/
        m[1]
      ), f & /*labelVisible*/
      1024 && _(e, "floorplan-guide-plugin__room-label--hidden", !/*labelVisible*/
      m[10]), f & /*left*/
      64 && b(
        e,
        "left",
        /*left*/
        m[6]
      ), f & /*top*/
      128 && b(
        e,
        "top",
        /*top*/
        m[7]
      );
    },
    i: H,
    o: H,
    d(m) {
      m && d(e), r.d(), o = !1, B(t);
    }
  };
}
const $ = () => {
};
function ee(n, e, o) {
  let t, l, i, { room: r } = e, { isHovered: m } = e, { roomNameEnable: f } = e, { roomAreaEnable: R } = e, { roomAreaSize: q } = e, { userConfigElement: C } = e, { adaptiveRoomLabelVisibleEnable: h } = e, { pxmm: p } = e, { left: L } = e, { top: w } = e, { createLabelInRoomChecker: v } = e;
  const E = G();
  let k = 0, y = 0;
  const V = () => E("mouseenter"), N = () => E("mouseleave"), T = (a) => {
    o(8, k = a.detail);
  }, W = (a) => {
    o(9, y = a.detail);
  };
  return n.$$set = (a) => {
    "room" in a && o(0, r = a.room), "isHovered" in a && o(1, m = a.isHovered), "roomNameEnable" in a && o(2, f = a.roomNameEnable), "roomAreaEnable" in a && o(3, R = a.roomAreaEnable), "roomAreaSize" in a && o(4, q = a.roomAreaSize), "userConfigElement" in a && o(5, C = a.userConfigElement), "adaptiveRoomLabelVisibleEnable" in a && o(12, h = a.adaptiveRoomLabelVisibleEnable), "pxmm" in a && o(13, p = a.pxmm), "left" in a && o(6, L = a.left), "top" in a && o(7, w = a.top), "createLabelInRoomChecker" in a && o(14, v = a.createLabelInRoomChecker);
  }, n.$$.update = () => {
    n.$$.dirty & /*labelWidth, labelHeight*/
    768 && o(16, t = { width: k, height: y }), n.$$.dirty & /*labelElementSize, createLabelInRoomChecker, room*/
    81921 && o(15, l = t ? v(r, t) : void 0), n.$$.dirty & /*adaptiveRoomLabelVisibleEnable, isHovered, isLabelInRoomChecker, pxmm*/
    45058 && o(10, i = h ? m || (l ? l(p) : !0) : !0);
  }, [
    r,
    m,
    f,
    R,
    q,
    C,
    L,
    w,
    k,
    y,
    i,
    E,
    h,
    p,
    v,
    l,
    t,
    V,
    N,
    T,
    W
  ];
}
class ne extends M {
  constructor(e) {
    super(), P(
      this,
      e,
      ee,
      x,
      D,
      {
        room: 0,
        isHovered: 1,
        roomNameEnable: 2,
        roomAreaEnable: 3,
        roomAreaSize: 4,
        userConfigElement: 5,
        adaptiveRoomLabelVisibleEnable: 12,
        pxmm: 13,
        left: 6,
        top: 7,
        createLabelInRoomChecker: 14
      },
      X
    );
  }
}
export {
  ne as default
};
