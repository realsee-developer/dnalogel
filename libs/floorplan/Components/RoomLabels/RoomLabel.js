import { SvelteComponent as ke, init as He, safe_not_equal as Ne, append_styles as Ae, element as R, attr as w, set_style as u, insert as h, action_destroyer as me, listen as D, noop as te, detach as y, run_all as ae, empty as se, space as ne, append as S, text as q, set_data as F, HtmlTag as De } from "../../../vendor/svelte/internal/index.js";
import { svelteResizeObserver as ce } from "../../../shared-utils/svelte/resizeObserver.js";
import { FONT_SIZE_MAP as Se } from "../../../shared-utils/fontSize.js";
import { px2rem as le } from "../../../shared-utils/px2rem.js";
function Ve(i) {
  Ae(i, "svelte-9vzn2f", ".floorplan-plugin__room-label-item.svelte-9vzn2f{position:absolute;display:flex;flex-flow:column;align-items:center;line-height:1;color:#fff;transform:translate(-50%, -50%);white-space:nowrap;will-change:opacity;transition:opacity 300ms}.floorplan-plugin__room-part1.svelte-9vzn2f{display:flex;flex-flow:column;align-items:center;color:#fff;white-space:nowrap}.floorplan-plugin__room-area.svelte-9vzn2f{opacity:0.6;line-height:1.25;margin-top:0.125rem}");
}
function Ie(i) {
  let e, t = (
    /*userConfigElement*/
    i[18].outerHTML + ""
  ), l;
  return {
    c() {
      e = new De(!1), l = se(), e.a = l;
    },
    m(n, m) {
      e.m(t, n, m), h(n, l, m);
    },
    p(n, m) {
      m[0] & /*userConfigElement*/
      262144 && t !== (t = /*userConfigElement*/
      n[18].outerHTML + "") && e.p(t);
    },
    d(n) {
      n && y(l), n && e.d();
    }
  };
}
function Pe(i) {
  let e, t, l, n, m, s, r = (
    /*roomNameEnable*/
    i[1] && oe(i)
  ), f = (
    /*roomAreaEnable*/
    i[0] && re(i)
  ), c = (
    /*roomDimensionEnable*/
    i[3] && fe(i)
  );
  return {
    c() {
      e = R("div"), r && r.c(), t = ne(), f && f.c(), l = ne(), c && c.c(), n = se(), w(e, "class", "floorplan-plugin__room-part1 svelte-9vzn2f"), u(
        e,
        "opacity",
        /*level1_labelVisible*/
        i[14] ? "1" : "0"
      );
    },
    m(a, b) {
      h(a, e, b), r && r.m(e, null), S(e, t), f && f.m(e, null), h(a, l, b), c && c.m(a, b), h(a, n, b), m || (s = [
        me(ce.call(null, e)),
        D(
          e,
          "clientWidth",
          /*clientWidth_handler*/
          i[35]
        ),
        D(
          e,
          "clientHeight",
          /*clientHeight_handler*/
          i[36]
        )
      ], m = !0);
    },
    p(a, b) {
      /*roomNameEnable*/
      a[1] ? r ? r.p(a, b) : (r = oe(a), r.c(), r.m(e, t)) : r && (r.d(1), r = null), /*roomAreaEnable*/
      a[0] ? f ? f.p(a, b) : (f = re(a), f.c(), f.m(e, null)) : f && (f.d(1), f = null), b[0] & /*level1_labelVisible*/
      16384 && u(
        e,
        "opacity",
        /*level1_labelVisible*/
        a[14] ? "1" : "0"
      ), /*roomDimensionEnable*/
      a[3] ? c ? c.p(a, b) : (c = fe(a), c.c(), c.m(n.parentNode, n)) : c && (c.d(1), c = null);
    },
    d(a) {
      a && y(e), r && r.d(), f && f.d(), a && y(l), c && c.d(a), a && y(n), m = !1, ae(s);
    }
  };
}
function oe(i) {
  let e, t = (
    /*roomNameOtherTypeEnable*/
    (i[2] ? (
      /*room*/
      i[4].name
    ) : (
      /*room*/
      i[4].roomType === "100900000012" ? (
        /*room*/
        i[4].customizedName
      ) : (
        /*room*/
        i[4].name
      )
    )) + ""
  ), l;
  return {
    c() {
      e = R("span"), l = q(t), w(e, "class", "floorplan-plugin__room-name"), u(
        e,
        "font-size",
        /*nameSize*/
        i[11]
      );
    },
    m(n, m) {
      h(n, e, m), S(e, l);
    },
    p(n, m) {
      m[0] & /*roomNameOtherTypeEnable, room*/
      20 && t !== (t = /*roomNameOtherTypeEnable*/
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
      )) + "") && F(l, t), m[0] & /*nameSize*/
      2048 && u(
        e,
        "font-size",
        /*nameSize*/
        n[11]
      );
    },
    d(n) {
      n && y(e);
    }
  };
}
function re(i) {
  let e, t;
  return {
    c() {
      e = R("span"), t = q(
        /*roomAreaSize*/
        i[17]
      ), w(e, "class", "floorplan-plugin__room-area svelte-9vzn2f"), u(
        e,
        "font-size",
        /*areaSize*/
        i[10]
      );
    },
    m(l, n) {
      h(l, e, n), S(e, t);
    },
    p(l, n) {
      n[0] & /*roomAreaSize*/
      131072 && F(
        t,
        /*roomAreaSize*/
        l[17]
      ), n[0] & /*areaSize*/
      1024 && u(
        e,
        "font-size",
        /*areaSize*/
        l[10]
      );
    },
    d(l) {
      l && y(e);
    }
  };
}
function fe(i) {
  let e, t;
  return {
    c() {
      e = R("span"), t = q(
        /*roomDimension*/
        i[16]
      ), w(e, "class", "floorplan-plugin__room-size"), u(
        e,
        "font-size",
        /*areaSize*/
        i[10]
      ), u(
        e,
        "opacity",
        /*level2_labelVisible*/
        i[13] ? "0.6" : "0"
      );
    },
    m(l, n) {
      h(l, e, n), S(e, t);
    },
    p(l, n) {
      n[0] & /*roomDimension*/
      65536 && F(
        t,
        /*roomDimension*/
        l[16]
      ), n[0] & /*areaSize*/
      1024 && u(
        e,
        "font-size",
        /*areaSize*/
        l[10]
      ), n[0] & /*level2_labelVisible*/
      8192 && u(
        e,
        "opacity",
        /*level2_labelVisible*/
        l[13] ? "0.6" : "0"
      );
    },
    d(l) {
      l && y(e);
    }
  };
}
function We(i) {
  let e, t, l;
  function n(r, f) {
    if (
      /*getLabelElement*/
      r[5] === void 0
    )
      return Pe;
    if (
      /*userConfigElement*/
      r[18]
    )
      return Ie;
  }
  let m = n(i), s = m && m(i);
  return {
    c() {
      e = R("div"), s && s.c(), w(e, "class", "floorplan-plugin__room-label-item svelte-9vzn2f"), u(
        e,
        "left",
        /*left*/
        i[19]
      ), u(
        e,
        "top",
        /*top*/
        i[20]
      ), u(
        e,
        "font-size",
        /*nameSize*/
        i[11]
      ), u(
        e,
        "opacity",
        /*level0_labelVisible*/
        i[15] ? "1" : "0"
      ), u(
        e,
        "transform",
        /*transformInner*/
        i[12] ? "translate(-50%, calc(-50% + 6px))" : "translate(-50%, -50%)"
      );
    },
    m(r, f) {
      h(r, e, f), s && s.m(e, null), t || (l = [
        me(ce.call(null, e)),
        D(
          e,
          "clientWidth",
          /*clientWidth_handler_1*/
          i[37]
        ),
        D(
          e,
          "clientHeight",
          /*clientHeight_handler_1*/
          i[38]
        )
      ], t = !0);
    },
    p(r, f) {
      m === (m = n(r)) && s ? s.p(r, f) : (s && s.d(1), s = m && m(r), s && (s.c(), s.m(e, null))), f[0] & /*nameSize*/
      2048 && u(
        e,
        "font-size",
        /*nameSize*/
        r[11]
      ), f[0] & /*level0_labelVisible*/
      32768 && u(
        e,
        "opacity",
        /*level0_labelVisible*/
        r[15] ? "1" : "0"
      ), f[0] & /*transformInner*/
      4096 && u(
        e,
        "transform",
        /*transformInner*/
        r[12] ? "translate(-50%, calc(-50% + 6px))" : "translate(-50%, -50%)"
      );
    },
    i: te,
    o: te,
    d(r) {
      r && y(e), s && s.d(), t = !1, ae(l);
    }
  };
}
function Oe(i, e) {
  const t = i[0], l = i[1];
  let n = !1;
  for (let m = 0, s = e.length - 1; m < e.length; s = m++) {
    const r = e[m][0], f = e[m][1], c = e[s][0], a = e[s][1];
    f > l != a > l && t < (c - r) * (l - f) / (a - f) + r && (n = !n);
  }
  return n;
}
function ve(i, e, t) {
  let l, n, m, s, r, f, c, a, b, p, U, X, Y, Z, B, G, { pxmm: T } = e, { roomAreaEnable: J } = e, { roomNameEnable: K } = e, { roomNameOtherTypeEnable: Q } = e, { roomDimensionEnable: x } = e, { room: _ } = e, { hoveredRoom: V } = e, { getRoomAreaText: I } = e, { getRoomDimensionText: P } = e, { getLabelElement: z } = e, { adaptiveRoomLabelVisibleEnable: L } = e, { fontSize: W } = e;
  function $(o, d) {
    if (d.width === 0 || d.height === 0)
      return () => !1;
    const ge = o.path.map(({ x: ie, y: g }) => [ie, g]), pe = o.roomLabel.position, { x: ze, y: Ee } = pe, { width: Re, height: we } = d, k = Re / 2, H = we / 2;
    return function(g) {
      const N = ze * g, A = Ee * g, Te = ge.map(([M, Le]) => [M * g, Le * g]);
      return [
        [N + k, A - H],
        [N - k, A - H],
        [N - k, A + H],
        [N + k, A + H]
      ].every((M) => Oe(M, Te));
    };
  }
  const ee = _.roomLabel, ue = ee.positionInImage.x * 100 + "%", be = ee.positionInImage.y * 100 + "%";
  let O = 0, v = 0, C = 0, j = 0, E = !1;
  V.subscribe(function(d) {
    t(27, E = !!d && d.id === _.id);
  });
  const _e = (o) => {
    t(8, C = o.detail);
  }, de = (o) => {
    t(9, j = o.detail);
  }, he = (o) => {
    t(6, O = o.detail);
  }, ye = (o) => {
    t(7, v = o.detail);
  };
  return i.$$set = (o) => {
    "pxmm" in o && t(21, T = o.pxmm), "roomAreaEnable" in o && t(0, J = o.roomAreaEnable), "roomNameEnable" in o && t(1, K = o.roomNameEnable), "roomNameOtherTypeEnable" in o && t(2, Q = o.roomNameOtherTypeEnable), "roomDimensionEnable" in o && t(3, x = o.roomDimensionEnable), "room" in o && t(4, _ = o.room), "hoveredRoom" in o && t(22, V = o.hoveredRoom), "getRoomAreaText" in o && t(23, I = o.getRoomAreaText), "getRoomDimensionText" in o && t(24, P = o.getRoomDimensionText), "getLabelElement" in o && t(5, z = o.getLabelElement), "adaptiveRoomLabelVisibleEnable" in o && t(25, L = o.adaptiveRoomLabelVisibleEnable), "fontSize" in o && t(26, W = o.fontSize);
  }, i.$$.update = () => {
    var o, d;
    i.$$.dirty[0] & /*fontSize*/
    67108864 && t(28, l = Se[W]), i.$$.dirty[0] & /*getLabelElement, room*/
    48 && t(18, n = z == null ? void 0 : z(_)), i.$$.dirty[0] & /*room, getRoomAreaText*/
    8388624 && t(17, m = _.size ? I(_.size) : ""), i.$$.dirty[0] & /*room, getRoomDimensionText*/
    16777232 && t(16, s = _ != null && _.dimension ? P((o = _.dimension) == null ? void 0 : o.width, (d = _.dimension) == null ? void 0 : d.height) : ""), i.$$.dirty[0] & /*clientWidth, clientHeight*/
    768 && t(34, r = { width: C, height: j }), i.$$.dirty[0] & /*room*/
    16 | i.$$.dirty[1] & /*labelElementSize*/
    8 && t(33, f = r ? $(_, r) : void 0), i.$$.dirty[0] & /*adaptiveRoomLabelVisibleEnable, pxmm*/
    35651584 | i.$$.dirty[1] & /*isLabelInRoom*/
    4 && t(30, c = L ? !!(f != null && f(T)) : !0), i.$$.dirty[0] & /*wrapperClientWidth, wrapperClientHeight*/
    192 && t(32, a = {
      width: O,
      height: v
    }), i.$$.dirty[0] & /*room*/
    16 | i.$$.dirty[1] & /*wrapperLabelElementSize*/
    2 && t(31, b = a ? $(_, a) : void 0), i.$$.dirty[0] & /*adaptiveRoomLabelVisibleEnable, pxmm*/
    35651584 | i.$$.dirty[1] & /*isAllLabelInRoom*/
    1 && t(29, p = L ? !!(b != null && b(T)) : !0), i.$$.dirty[0] & /*wrapperLabelVisible, mainLabelVisible, isHovered*/
    1744830464 && t(15, U = p || c || E), i.$$.dirty[0] & /*mainLabelVisible, isHovered*/
    1207959552 && t(14, X = c || E), i.$$.dirty[0] & /*wrapperLabelVisible, isHovered*/
    671088640 && t(13, Y = p || E), i.$$.dirty[0] & /*mainLabelVisible, wrapperLabelVisible*/
    1610612736 && t(12, Z = c && !p), i.$$.dirty[0] & /*fontConfig*/
    268435456 && t(11, B = le((l == null ? void 0 : l.name) || 12)), i.$$.dirty[0] & /*fontConfig*/
    268435456 && t(10, G = le((l == null ? void 0 : l.area) || 10));
  }, [
    J,
    K,
    Q,
    x,
    _,
    z,
    O,
    v,
    C,
    j,
    G,
    B,
    Z,
    Y,
    X,
    U,
    s,
    m,
    n,
    ue,
    be,
    T,
    V,
    I,
    P,
    L,
    W,
    E,
    l,
    p,
    c,
    b,
    a,
    f,
    r,
    _e,
    de,
    he,
    ye
  ];
}
class Ue extends ke {
  constructor(e) {
    super(), He(
      this,
      e,
      ve,
      We,
      Ne,
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
        adaptiveRoomLabelVisibleEnable: 25,
        fontSize: 26
      },
      Ve,
      [-1, -1]
    );
  }
}
export {
  Ue as RoomLabel
};
