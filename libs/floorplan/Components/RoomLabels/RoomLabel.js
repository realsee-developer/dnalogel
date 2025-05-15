import { SvelteComponent as Le, init as He, safe_not_equal as ke, append_styles as Ne, element as R, attr as z, set_style as d, insert as h, action_destroyer as oe, listen as v, noop as ee, detach as y, run_all as re, empty as fe, space as te, append as D, text as j, set_data as F, HtmlTag as ve } from "../../../vendor/svelte/internal/index.js";
import { svelteResizeObserver as me } from "../../../shared-utils/svelte/resizeObserver.js";
function De(t) {
  Ne(t, "svelte-9vzn2f", ".floorplan-plugin__room-label-item.svelte-9vzn2f{position:absolute;display:flex;flex-flow:column;align-items:center;line-height:1;color:#fff;transform:translate(-50%, -50%);white-space:nowrap;will-change:opacity;transition:opacity 300ms}.floorplan-plugin__room-part1.svelte-9vzn2f{display:flex;flex-flow:column;align-items:center;color:#fff;white-space:nowrap}.floorplan-plugin__room-area.svelte-9vzn2f{opacity:0.6;line-height:1.25;margin-top:0.125rem}");
}
function Ve(t) {
  let e, i = (
    /*userConfigElement*/
    t[16].outerHTML + ""
  ), r;
  return {
    c() {
      e = new ve(!1), r = fe(), e.a = r;
    },
    m(n, a) {
      e.m(i, n, a), h(n, r, a);
    },
    p(n, a) {
      a[0] & /*userConfigElement*/
      65536 && i !== (i = /*userConfigElement*/
      n[16].outerHTML + "") && e.p(i);
    },
    d(n) {
      n && y(r), n && e.d();
    }
  };
}
function We(t) {
  let e, i, r, n, a, s, o = (
    /*roomNameEnable*/
    t[1] && ie(t)
  ), f = (
    /*roomAreaEnable*/
    t[0] && ne(t)
  ), c = (
    /*roomDimensionEnable*/
    t[3] && le(t)
  );
  return {
    c() {
      e = R("div"), o && o.c(), i = te(), f && f.c(), r = te(), c && c.c(), n = fe(), z(e, "class", "floorplan-plugin__room-part1 svelte-9vzn2f"), d(
        e,
        "opacity",
        /*level1_labelVisible*/
        t[12] ? "1" : "0"
      );
    },
    m(m, u) {
      h(m, e, u), o && o.m(e, null), D(e, i), f && f.m(e, null), h(m, r, u), c && c.m(m, u), h(m, n, u), a || (s = [
        oe(me.call(null, e)),
        v(
          e,
          "clientWidth",
          /*clientWidth_handler*/
          t[33]
        ),
        v(
          e,
          "clientHeight",
          /*clientHeight_handler*/
          t[34]
        )
      ], a = !0);
    },
    p(m, u) {
      /*roomNameEnable*/
      m[1] ? o ? o.p(m, u) : (o = ie(m), o.c(), o.m(e, i)) : o && (o.d(1), o = null), /*roomAreaEnable*/
      m[0] ? f ? f.p(m, u) : (f = ne(m), f.c(), f.m(e, null)) : f && (f.d(1), f = null), u[0] & /*level1_labelVisible*/
      4096 && d(
        e,
        "opacity",
        /*level1_labelVisible*/
        m[12] ? "1" : "0"
      ), /*roomDimensionEnable*/
      m[3] ? c ? c.p(m, u) : (c = le(m), c.c(), c.m(n.parentNode, n)) : c && (c.d(1), c = null);
    },
    d(m) {
      m && y(e), o && o.d(), f && f.d(), m && y(r), c && c.d(m), m && y(n), a = !1, re(s);
    }
  };
}
function ie(t) {
  let e, i = (
    /*roomNameOtherTypeEnable*/
    (t[2] ? (
      /*room*/
      t[4].name
    ) : (
      /*room*/
      t[4].roomType === "100900000012" ? (
        /*room*/
        t[4].customizedName
      ) : (
        /*room*/
        t[4].name
      )
    )) + ""
  ), r;
  return {
    c() {
      e = R("span"), r = j(i), z(e, "class", "floorplan-plugin__room-name");
    },
    m(n, a) {
      h(n, e, a), D(e, r);
    },
    p(n, a) {
      a[0] & /*roomNameOtherTypeEnable, room*/
      20 && i !== (i = /*roomNameOtherTypeEnable*/
      (n[2] ? (
        /*room*/
        n[4].name
      ) : (
        /*room*/
        n[4].roomType === "100900000012" ? (
          /*room*/
          n[4].customizedName
        ) : (
          /*room*/
          n[4].name
        )
      )) + "") && F(r, i);
    },
    d(n) {
      n && y(e);
    }
  };
}
function ne(t) {
  let e, i;
  return {
    c() {
      e = R("span"), i = j(
        /*roomAreaSize*/
        t[15]
      ), z(e, "class", "floorplan-plugin__room-area svelte-9vzn2f"), d(
        e,
        "font-size",
        /*txtFontSize*/
        t[20]
      );
    },
    m(r, n) {
      h(r, e, n), D(e, i);
    },
    p(r, n) {
      n[0] & /*roomAreaSize*/
      32768 && F(
        i,
        /*roomAreaSize*/
        r[15]
      );
    },
    d(r) {
      r && y(e);
    }
  };
}
function le(t) {
  let e, i;
  return {
    c() {
      e = R("span"), i = j(
        /*roomDimension*/
        t[14]
      ), z(e, "class", "floorplan-plugin__room-size"), d(
        e,
        "font-size",
        /*txtFontSize*/
        t[20]
      ), d(
        e,
        "opacity",
        /*level2_labelVisible*/
        t[11] ? "0.6" : "0"
      );
    },
    m(r, n) {
      h(r, e, n), D(e, i);
    },
    p(r, n) {
      n[0] & /*roomDimension*/
      16384 && F(
        i,
        /*roomDimension*/
        r[14]
      ), n[0] & /*level2_labelVisible*/
      2048 && d(
        e,
        "opacity",
        /*level2_labelVisible*/
        r[11] ? "0.6" : "0"
      );
    },
    d(r) {
      r && y(e);
    }
  };
}
function Ae(t) {
  let e, i, r;
  function n(o, f) {
    if (
      /*getLabelElement*/
      o[5] === void 0
    )
      return We;
    if (
      /*userConfigElement*/
      o[16]
    )
      return Ve;
  }
  let a = n(t), s = a && a(t);
  return {
    c() {
      e = R("div"), s && s.c(), z(e, "class", "floorplan-plugin__room-label-item svelte-9vzn2f"), d(
        e,
        "left",
        /*left*/
        t[17]
      ), d(
        e,
        "top",
        /*top*/
        t[18]
      ), d(
        e,
        "font-size",
        /*titleFontSize*/
        t[19]
      ), d(
        e,
        "opacity",
        /*level0_labelVisible*/
        t[13] ? "1" : "0"
      ), d(
        e,
        "transform",
        /*transformInner*/
        t[10] ? "translate(-50%, calc(-50% + 6px))" : "translate(-50%, -50%)"
      );
    },
    m(o, f) {
      h(o, e, f), s && s.m(e, null), i || (r = [
        oe(me.call(null, e)),
        v(
          e,
          "clientWidth",
          /*clientWidth_handler_1*/
          t[35]
        ),
        v(
          e,
          "clientHeight",
          /*clientHeight_handler_1*/
          t[36]
        )
      ], i = !0);
    },
    p(o, f) {
      a === (a = n(o)) && s ? s.p(o, f) : (s && s.d(1), s = a && a(o), s && (s.c(), s.m(e, null))), f[0] & /*level0_labelVisible*/
      8192 && d(
        e,
        "opacity",
        /*level0_labelVisible*/
        o[13] ? "1" : "0"
      ), f[0] & /*transformInner*/
      1024 && d(
        e,
        "transform",
        /*transformInner*/
        o[10] ? "translate(-50%, calc(-50% + 6px))" : "translate(-50%, -50%)"
      );
    },
    i: ee,
    o: ee,
    d(o) {
      o && y(e), s && s.d(), i = !1, re(r);
    }
  };
}
function Ce(t, e) {
  const i = t[0], r = t[1];
  let n = !1;
  for (let a = 0, s = e.length - 1; a < e.length; s = a++) {
    const o = e[a][0], f = e[a][1], c = e[s][0], m = e[s][1];
    f > r != m > r && i < (c - o) * (r - f) / (m - f) + o && (n = !n);
  }
  return n;
}
function Ie(t, e, i) {
  let r, n, a, s, o, f, c, m, u, M, q, U, X, { pxmm: w } = e, { roomAreaEnable: Y } = e, { roomNameEnable: B } = e, { roomNameOtherTypeEnable: G } = e, { roomDimensionEnable: J } = e, { room: b } = e, { hoveredRoom: V } = e, { getRoomAreaText: W } = e, { getRoomDimensionText: A } = e, { getLabelElement: p } = e, { adaptiveRoomLabelVisibleEnable: T } = e;
  function K(l, _) {
    if (_.width === 0 || _.height === 0)
      return () => !1;
    const ye = l.path.map(({ x: $, y: g }) => [$, g]), ge = l.roomLabel.position, { x: pe, y: Ee } = ge, { width: Re, height: ze } = _, L = Re / 2, H = ze / 2;
    return function(g) {
      const k = pe * g, N = Ee * g, we = ye.map(([S, Te]) => [S * g, Te * g]);
      return [
        [k + L, N - H],
        [k - L, N - H],
        [k - L, N + H],
        [k + L, N + H]
      ].every((S) => Ce(S, we));
    };
  }
  const Q = document.body.clientWidth, Z = document.body.clientHeight, x = b.roomLabel, ae = x.positionInImage.x * 100 + "%", se = x.positionInImage.y * 100 + "%", ce = (Q < 500 || Z < 500 ? 10 : 14) + "px", ue = (Q < 500 || Z < 500 ? 8 : 12) + "px";
  let C = 0, I = 0, P = 0, O = 0, E = !1;
  V.subscribe(function(_) {
    i(26, E = !!_ && _.id === b.id);
  });
  const be = (l) => {
    i(8, P = l.detail);
  }, de = (l) => {
    i(9, O = l.detail);
  }, _e = (l) => {
    i(6, C = l.detail);
  }, he = (l) => {
    i(7, I = l.detail);
  };
  return t.$$set = (l) => {
    "pxmm" in l && i(21, w = l.pxmm), "roomAreaEnable" in l && i(0, Y = l.roomAreaEnable), "roomNameEnable" in l && i(1, B = l.roomNameEnable), "roomNameOtherTypeEnable" in l && i(2, G = l.roomNameOtherTypeEnable), "roomDimensionEnable" in l && i(3, J = l.roomDimensionEnable), "room" in l && i(4, b = l.room), "hoveredRoom" in l && i(22, V = l.hoveredRoom), "getRoomAreaText" in l && i(23, W = l.getRoomAreaText), "getRoomDimensionText" in l && i(24, A = l.getRoomDimensionText), "getLabelElement" in l && i(5, p = l.getLabelElement), "adaptiveRoomLabelVisibleEnable" in l && i(25, T = l.adaptiveRoomLabelVisibleEnable);
  }, t.$$.update = () => {
    var l, _;
    t.$$.dirty[0] & /*getLabelElement, room*/
    48 && i(16, r = p == null ? void 0 : p(b)), t.$$.dirty[0] & /*room, getRoomAreaText*/
    8388624 && i(15, n = b.size ? W(b.size) : ""), t.$$.dirty[0] & /*room, getRoomDimensionText*/
    16777232 && i(14, a = b != null && b.dimension ? A((l = b.dimension) == null ? void 0 : l.width, (_ = b.dimension) == null ? void 0 : _.height) : ""), t.$$.dirty[0] & /*clientWidth, clientHeight*/
    768 && i(32, s = { width: P, height: O }), t.$$.dirty[0] & /*room*/
    16 | t.$$.dirty[1] & /*labelElementSize*/
    2 && i(31, o = s ? K(b, s) : void 0), t.$$.dirty[0] & /*adaptiveRoomLabelVisibleEnable, pxmm*/
    35651584 | t.$$.dirty[1] & /*isLabelInRoom*/
    1 && i(28, f = T ? !!(o != null && o(w)) : !0), t.$$.dirty[0] & /*wrapperClientWidth, wrapperClientHeight*/
    192 && i(30, c = {
      width: C,
      height: I
    }), t.$$.dirty[0] & /*wrapperLabelElementSize, room*/
    1073741840 && i(29, m = c ? K(b, c) : void 0), t.$$.dirty[0] & /*adaptiveRoomLabelVisibleEnable, isAllLabelInRoom, pxmm*/
    572522496 && i(27, u = T ? !!(m != null && m(w)) : !0), t.$$.dirty[0] & /*wrapperLabelVisible, mainLabelVisible, isHovered*/
    469762048 && i(13, M = u || f || E), t.$$.dirty[0] & /*mainLabelVisible, isHovered*/
    335544320 && i(12, q = f || E), t.$$.dirty[0] & /*wrapperLabelVisible, isHovered*/
    201326592 && i(11, U = u || E), t.$$.dirty[0] & /*mainLabelVisible, wrapperLabelVisible*/
    402653184 && i(10, X = f && !u);
  }, [
    Y,
    B,
    G,
    J,
    b,
    p,
    C,
    I,
    P,
    O,
    X,
    U,
    q,
    M,
    a,
    n,
    r,
    ae,
    se,
    ce,
    ue,
    w,
    V,
    W,
    A,
    T,
    E,
    u,
    f,
    m,
    c,
    o,
    s,
    be,
    de,
    _e,
    he
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
        pxmm: 21,
        roomAreaEnable: 0,
        roomNameEnable: 1,
        roomNameOtherTypeEnable: 2,
        roomDimensionEnable: 3,
        room: 4,
        hoveredRoom: 22,
        getRoomAreaText: 23,
        getRoomDimensionText: 24,
        getLabelElement: 5,
        adaptiveRoomLabelVisibleEnable: 25
      },
      De,
      [-1, -1]
    );
  }
}
export {
  je as RoomLabel
};
