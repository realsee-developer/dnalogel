import { SvelteComponent as Le, init as He, safe_not_equal as ke, append_styles as Te, element as E, attr as w, set_style as d, insert as h, action_destroyer as ne, listen as D, noop as $, detach as g, run_all as oe, empty as fe, space as ee, append as V, text as F, set_data as M, HtmlTag as ve } from "../../../vendor/svelte/internal/index.js";
import { svelteResizeObserver as re } from "../../../shared-utils/svelte/resizeObserver.js";
function De(i) {
  Te(i, "svelte-9vzn2f", ".floorplan-plugin__room-label-item.svelte-9vzn2f{position:absolute;display:flex;flex-flow:column;align-items:center;line-height:1;color:#fff;transform:translate(-50%, -50%);white-space:nowrap;will-change:opacity;transition:opacity 300ms}.floorplan-plugin__room-part1.svelte-9vzn2f{display:flex;flex-flow:column;align-items:center;color:#fff;white-space:nowrap}.floorplan-plugin__room-area.svelte-9vzn2f{opacity:0.6;line-height:1.25;margin-top:0.125rem}");
}
function Ve(i) {
  let e, t = (
    /*userConfigElement*/
    i[15].outerHTML + ""
  ), o;
  return {
    c() {
      e = new ve(!1), o = fe(), e.a = o;
    },
    m(l, m) {
      e.m(t, l, m), h(l, o, m);
    },
    p(l, m) {
      m[0] & /*userConfigElement*/
      32768 && t !== (t = /*userConfigElement*/
      l[15].outerHTML + "") && e.p(t);
    },
    d(l) {
      l && g(o), l && e.d();
    }
  };
}
function We(i) {
  let e, t, o, l, m, s, n = (
    /*roomNameEnable*/
    i[1] && te(i)
  ), r = (
    /*roomAreaEnable*/
    i[0] && ie(i)
  ), c = (
    /*roomDimensionEnable*/
    i[2] && le(i)
  );
  return {
    c() {
      e = E("div"), n && n.c(), t = ee(), r && r.c(), o = ee(), c && c.c(), l = fe(), w(e, "class", "floorplan-plugin__room-part1 svelte-9vzn2f"), d(
        e,
        "opacity",
        /*level1_labelVisible*/
        i[11] ? "1" : "0"
      );
    },
    m(a, u) {
      h(a, e, u), n && n.m(e, null), V(e, t), r && r.m(e, null), h(a, o, u), c && c.m(a, u), h(a, l, u), m || (s = [
        ne(re.call(null, e)),
        D(
          e,
          "clientWidth",
          /*clientWidth_handler*/
          i[32]
        ),
        D(
          e,
          "clientHeight",
          /*clientHeight_handler*/
          i[33]
        )
      ], m = !0);
    },
    p(a, u) {
      /*roomNameEnable*/
      a[1] ? n ? n.p(a, u) : (n = te(a), n.c(), n.m(e, t)) : n && (n.d(1), n = null), /*roomAreaEnable*/
      a[0] ? r ? r.p(a, u) : (r = ie(a), r.c(), r.m(e, null)) : r && (r.d(1), r = null), u[0] & /*level1_labelVisible*/
      2048 && d(
        e,
        "opacity",
        /*level1_labelVisible*/
        a[11] ? "1" : "0"
      ), /*roomDimensionEnable*/
      a[2] ? c ? c.p(a, u) : (c = le(a), c.c(), c.m(l.parentNode, l)) : c && (c.d(1), c = null);
    },
    d(a) {
      a && g(e), n && n.d(), r && r.d(), a && g(o), c && c.d(a), a && g(l), m = !1, oe(s);
    }
  };
}
function te(i) {
  let e, t = (
    /*room*/
    i[3].name + ""
  ), o;
  return {
    c() {
      e = E("span"), o = F(t), w(e, "class", "floorplan-plugin__room-name");
    },
    m(l, m) {
      h(l, e, m), V(e, o);
    },
    p(l, m) {
      m[0] & /*room*/
      8 && t !== (t = /*room*/
      l[3].name + "") && M(o, t);
    },
    d(l) {
      l && g(e);
    }
  };
}
function ie(i) {
  let e, t;
  return {
    c() {
      e = E("span"), t = F(
        /*roomAreaSize*/
        i[14]
      ), w(e, "class", "floorplan-plugin__room-area svelte-9vzn2f"), d(
        e,
        "font-size",
        /*txtFontSize*/
        i[19]
      );
    },
    m(o, l) {
      h(o, e, l), V(e, t);
    },
    p(o, l) {
      l[0] & /*roomAreaSize*/
      16384 && M(
        t,
        /*roomAreaSize*/
        o[14]
      );
    },
    d(o) {
      o && g(e);
    }
  };
}
function le(i) {
  let e, t;
  return {
    c() {
      e = E("span"), t = F(
        /*roomDimension*/
        i[13]
      ), w(e, "class", "floorplan-plugin__room-size"), d(
        e,
        "font-size",
        /*txtFontSize*/
        i[19]
      ), d(
        e,
        "opacity",
        /*level2_labelVisible*/
        i[10] ? "0.6" : "0"
      );
    },
    m(o, l) {
      h(o, e, l), V(e, t);
    },
    p(o, l) {
      l[0] & /*roomDimension*/
      8192 && M(
        t,
        /*roomDimension*/
        o[13]
      ), l[0] & /*level2_labelVisible*/
      1024 && d(
        e,
        "opacity",
        /*level2_labelVisible*/
        o[10] ? "0.6" : "0"
      );
    },
    d(o) {
      o && g(e);
    }
  };
}
function Ae(i) {
  let e, t, o;
  function l(n, r) {
    if (
      /*getLabelElement*/
      n[4] === void 0
    )
      return We;
    if (
      /*userConfigElement*/
      n[15]
    )
      return Ve;
  }
  let m = l(i), s = m && m(i);
  return {
    c() {
      e = E("div"), s && s.c(), w(e, "class", "floorplan-plugin__room-label-item svelte-9vzn2f"), d(
        e,
        "left",
        /*left*/
        i[16]
      ), d(
        e,
        "top",
        /*top*/
        i[17]
      ), d(
        e,
        "font-size",
        /*titleFontSize*/
        i[18]
      ), d(
        e,
        "opacity",
        /*level0_labelVisible*/
        i[12] ? "1" : "0"
      ), d(
        e,
        "transform",
        /*transformInner*/
        i[9] ? "translate(-50%, calc(-50% + 6px))" : "translate(-50%, -50%)"
      );
    },
    m(n, r) {
      h(n, e, r), s && s.m(e, null), t || (o = [
        ne(re.call(null, e)),
        D(
          e,
          "clientWidth",
          /*clientWidth_handler_1*/
          i[34]
        ),
        D(
          e,
          "clientHeight",
          /*clientHeight_handler_1*/
          i[35]
        )
      ], t = !0);
    },
    p(n, r) {
      m === (m = l(n)) && s ? s.p(n, r) : (s && s.d(1), s = m && m(n), s && (s.c(), s.m(e, null))), r[0] & /*level0_labelVisible*/
      4096 && d(
        e,
        "opacity",
        /*level0_labelVisible*/
        n[12] ? "1" : "0"
      ), r[0] & /*transformInner*/
      512 && d(
        e,
        "transform",
        /*transformInner*/
        n[9] ? "translate(-50%, calc(-50% + 6px))" : "translate(-50%, -50%)"
      );
    },
    i: $,
    o: $,
    d(n) {
      n && g(e), s && s.d(), t = !1, oe(o);
    }
  };
}
function Ce(i, e) {
  const t = i[0], o = i[1];
  let l = !1;
  for (let m = 0, s = e.length - 1; m < e.length; s = m++) {
    const n = e[m][0], r = e[m][1], c = e[s][0], a = e[s][1];
    r > o != a > o && t < (c - n) * (o - r) / (a - r) + n && (l = !l);
  }
  return l;
}
function Ie(i, e, t) {
  let o, l, m, s, n, r, c, a, u, q, O, U, X, { pxmm: z } = e, { roomAreaEnable: Y } = e, { roomNameEnable: B } = e, { roomDimensionEnable: G } = e, { room: b } = e, { hoveredRoom: W } = e, { getRoomAreaText: A } = e, { getRoomDimensionText: C } = e, { getLabelElement: y } = e, { adaptiveRoomLabelVisibleEnable: L } = e;
  function J(f, _) {
    if (_.width === 0 || _.height === 0)
      return () => !1;
    const he = f.path.map(({ x, y: p }) => [x, p]), ge = f.roomLabel.position, { x: pe, y: ye } = ge, { width: Re, height: Ee } = _, H = Re / 2, k = Ee / 2;
    return function(p) {
      const T = pe * p, v = ye * p, we = he.map(([j, ze]) => [j * p, ze * p]);
      return [
        [T + H, v - k],
        [T - H, v - k],
        [T - H, v + k],
        [T + H, v + k]
      ].every((j) => Ce(j, we));
    };
  }
  const K = document.body.clientWidth, Q = document.body.clientHeight, Z = b.roomLabel, ae = Z.positionInImage.x * 100 + "%", me = Z.positionInImage.y * 100 + "%", se = (K < 500 || Q < 500 ? 10 : 14) + "px", ce = (K < 500 || Q < 500 ? 8 : 12) + "px";
  let I = 0, P = 0, N = 0, S = 0, R = !1;
  W.subscribe(function(_) {
    t(25, R = !!_ && _.id === b.id);
  });
  const ue = (f) => {
    t(7, N = f.detail);
  }, be = (f) => {
    t(8, S = f.detail);
  }, de = (f) => {
    t(5, I = f.detail);
  }, _e = (f) => {
    t(6, P = f.detail);
  };
  return i.$$set = (f) => {
    "pxmm" in f && t(20, z = f.pxmm), "roomAreaEnable" in f && t(0, Y = f.roomAreaEnable), "roomNameEnable" in f && t(1, B = f.roomNameEnable), "roomDimensionEnable" in f && t(2, G = f.roomDimensionEnable), "room" in f && t(3, b = f.room), "hoveredRoom" in f && t(21, W = f.hoveredRoom), "getRoomAreaText" in f && t(22, A = f.getRoomAreaText), "getRoomDimensionText" in f && t(23, C = f.getRoomDimensionText), "getLabelElement" in f && t(4, y = f.getLabelElement), "adaptiveRoomLabelVisibleEnable" in f && t(24, L = f.adaptiveRoomLabelVisibleEnable);
  }, i.$$.update = () => {
    var f, _;
    i.$$.dirty[0] & /*getLabelElement, room*/
    24 && t(15, o = y == null ? void 0 : y(b)), i.$$.dirty[0] & /*room, getRoomAreaText*/
    4194312 && t(14, l = b.size ? A(b.size) : ""), i.$$.dirty[0] & /*room, getRoomDimensionText*/
    8388616 && t(13, m = b != null && b.dimension ? C((f = b.dimension) == null ? void 0 : f.width, (_ = b.dimension) == null ? void 0 : _.height) : ""), i.$$.dirty[0] & /*clientWidth, clientHeight*/
    384 && t(31, s = { width: N, height: S }), i.$$.dirty[0] & /*room*/
    8 | i.$$.dirty[1] & /*labelElementSize*/
    1 && t(30, n = s ? J(b, s) : void 0), i.$$.dirty[0] & /*adaptiveRoomLabelVisibleEnable, isLabelInRoom, pxmm*/
    1091567616 && t(27, r = L ? !!(n != null && n(z)) : !0), i.$$.dirty[0] & /*wrapperClientWidth, wrapperClientHeight*/
    96 && t(29, c = {
      width: I,
      height: P
    }), i.$$.dirty[0] & /*wrapperLabelElementSize, room*/
    536870920 && t(28, a = c ? J(b, c) : void 0), i.$$.dirty[0] & /*adaptiveRoomLabelVisibleEnable, isAllLabelInRoom, pxmm*/
    286261248 && t(26, u = L ? !!(a != null && a(z)) : !0), i.$$.dirty[0] & /*wrapperLabelVisible, mainLabelVisible, isHovered*/
    234881024 && t(12, q = u || r || R), i.$$.dirty[0] & /*mainLabelVisible, isHovered*/
    167772160 && t(11, O = r || R), i.$$.dirty[0] & /*wrapperLabelVisible, isHovered*/
    100663296 && t(10, U = u || R), i.$$.dirty[0] & /*mainLabelVisible, wrapperLabelVisible*/
    201326592 && t(9, X = r && !u);
  }, [
    Y,
    B,
    G,
    b,
    y,
    I,
    P,
    N,
    S,
    X,
    U,
    O,
    q,
    m,
    l,
    o,
    ae,
    me,
    se,
    ce,
    z,
    W,
    A,
    C,
    L,
    R,
    u,
    r,
    a,
    c,
    n,
    s,
    ue,
    be,
    de,
    _e
  ];
}
class je extends Le {
  constructor(e) {
    super(), He(
      this,
      e,
      Ie,
      Ae,
      ke,
      {
        pxmm: 20,
        roomAreaEnable: 0,
        roomNameEnable: 1,
        roomDimensionEnable: 2,
        room: 3,
        hoveredRoom: 21,
        getRoomAreaText: 22,
        getRoomDimensionText: 23,
        getLabelElement: 4,
        adaptiveRoomLabelVisibleEnable: 24
      },
      De,
      [-1, -1]
    );
  }
}
export {
  je as RoomLabel
};
