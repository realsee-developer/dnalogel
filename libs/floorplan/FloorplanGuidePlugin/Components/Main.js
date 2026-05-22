import { SvelteComponent as he, init as _e, safe_not_equal as de, append_styles as Ee, empty as fe, insert as d, transition_in as g, transition_out as h, check_outros as F, detach as E, element as me, attr as se, action_destroyer as De, listen as p, group_outros as I, run_all as ke, assign as C, create_component as L, space as U, set_style as v, mount_component as q, append as ve, get_spread_update as z, destroy_component as N } from "../../../vendor/svelte/internal/index.js";
import Fe from "./Camera.js";
import Ie from "./CurrentFloor/CurrentFloor.js";
import Oe from "./ObserverDots.js";
import Re from "./RoomLabels.js";
import Se from "./FloorplanCompass.js";
import { svelteResizeObserver as Ce } from "../../../shared-utils/svelte/resizeObserver.js";
import "../../Assets/camera.js";
import "../../../shared-utils/throttle.js";
import "./CurrentFloor/ExtraObjects.js";
import "../../Components/BaseImage.js";
import "../../Components/Normalmage.js";
import "../../Components/SvgImage.js";
import "../../Components/RoomHighlight/RoomHighlight.js";
import "../../Components/RoomHighlight/Room.js";
import "../../utils/formatPosition.js";
import "../../Components/MissingFloor.js";
import "./RoomLabelItem.js";
import "../../Assets/compass.js";
import "../../../shared-utils/math/rad2Deg.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
function Le(i) {
  Ee(i, "svelte-1mvqyqq", ".plugin-floorplan-radar.svelte-1mvqyqq{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.plugin-floorplan-radar-container.svelte-1mvqyqq{position:relative}");
}
function oe(i) {
  let l, n, r, a, e = (
    /*clientWidth*/
    i[25] !== 0 && ne(i)
  );
  return {
    c() {
      l = me("div"), e && e.c(), se(l, "class", "plugin-floorplan-radar svelte-1mvqyqq");
    },
    m(m, c) {
      d(m, l, c), e && e.m(l, null), n = !0, r || (a = [
        De(Ce.call(null, l)),
        p(
          l,
          "clientWidth",
          /*clientWidth_handler*/
          i[33]
        ),
        p(
          l,
          "clientHeight",
          /*clientHeight_handler*/
          i[34]
        )
      ], r = !0);
    },
    p(m, c) {
      /*clientWidth*/
      m[25] !== 0 ? e ? (e.p(m, c), c[0] & /*clientWidth*/
      33554432 && g(e, 1)) : (e = ne(m), e.c(), g(e, 1), e.m(l, null)) : e && (I(), h(e, 1, 1, () => {
        e = null;
      }), F());
    },
    i(m) {
      n || (g(e), n = !0);
    },
    o(m) {
      h(e), n = !1;
    },
    d(m) {
      m && E(l), e && e.d(), r = !1, ke(a);
    }
  };
}
function ne(i) {
  let l, n, r, a = `${/*contentWidth*/
  i[27]}px`, e = `${/*contentHeight*/
  i[29]}px`, m, c, _;
  const u = [
    {
      five: (
        /*five*/
        i[0]
      ),
      pxmm: (
        /*pxmm*/
        i[28]
      ),
      floorIndex: (
        /*displayedFloorIndex*/
        i[21]
      ),
      floorplanData: (
        /*floorplanData*/
        i[3]
      ),
      hoverEnable: (
        /*hoverEnable*/
        i[2]
      ),
      extraObjects: (
        /*extraObjects*/
        i[5]
      ),
      highlightData: (
        /*highlightData*/
        i[6]
      ),
      missingFloorImageUrl: (
        /*missingFloorImageUrl*/
        i[7]
      ),
      missingFloorConfig: (
        /*missingFloorConfig*/
        i[8]
      )
    }
  ];
  let b = {};
  for (let o = 0; o < u.length; o += 1)
    b = C(b, u[o]);
  n = new Ie({ props: b });
  let f = (
    /*hasCurrentFloorData*/
    i[30] && te(i)
  );
  return {
    c() {
      l = me("div"), L(n.$$.fragment), r = U(), f && f.c(), se(l, "class", "plugin-floorplan-radar-container svelte-1mvqyqq"), v(l, "width", a), v(l, "height", e), v(
        l,
        "cursor",
        /*clickEnable*/
        i[9] ? "pointer" : "default"
      );
    },
    m(o, s) {
      d(o, l, s), q(n, l, null), ve(l, r), f && f.m(l, null), m = !0, c || (_ = p(
        l,
        "click",
        /*handleFloorplanClick*/
        i[31]
      ), c = !0);
    },
    p(o, s) {
      const D = s[0] & /*five, pxmm, displayedFloorIndex, floorplanData, hoverEnable, extraObjects, highlightData, missingFloorImageUrl, missingFloorConfig*/
      270533101 ? z(u, [
        {
          five: (
            /*five*/
            o[0]
          ),
          pxmm: (
            /*pxmm*/
            o[28]
          ),
          floorIndex: (
            /*displayedFloorIndex*/
            o[21]
          ),
          floorplanData: (
            /*floorplanData*/
            o[3]
          ),
          hoverEnable: (
            /*hoverEnable*/
            o[2]
          ),
          extraObjects: (
            /*extraObjects*/
            o[5]
          ),
          highlightData: (
            /*highlightData*/
            o[6]
          ),
          missingFloorImageUrl: (
            /*missingFloorImageUrl*/
            o[7]
          ),
          missingFloorConfig: (
            /*missingFloorConfig*/
            o[8]
          )
        }
      ]) : {};
      n.$set(D), /*hasCurrentFloorData*/
      o[30] ? f ? (f.p(o, s), s[0] & /*hasCurrentFloorData*/
      1073741824 && g(f, 1)) : (f = te(o), f.c(), g(f, 1), f.m(l, null)) : f && (I(), h(f, 1, 1, () => {
        f = null;
      }), F()), s[0] & /*contentWidth*/
      134217728 && a !== (a = `${/*contentWidth*/
      o[27]}px`) && v(l, "width", a), s[0] & /*contentHeight*/
      536870912 && e !== (e = `${/*contentHeight*/
      o[29]}px`) && v(l, "height", e), s[0] & /*clickEnable*/
      512 && v(
        l,
        "cursor",
        /*clickEnable*/
        o[9] ? "pointer" : "default"
      );
    },
    i(o) {
      m || (g(n.$$.fragment, o), g(f), m = !0);
    },
    o(o) {
      h(n.$$.fragment, o), h(f), m = !1;
    },
    d(o) {
      o && E(l), N(n), f && f.d(), c = !1, _();
    }
  };
}
function te(i) {
  let l, n, r, a, e, m;
  const c = [
    {
      floorplanData: (
        /*floorplanData*/
        i[3]
      ),
      floorIndex: (
        /*displayedFloorIndex*/
        i[21]
      ),
      contentWidth: (
        /*contentWidth*/
        i[27]
      ),
      contentHeight: (
        /*contentHeight*/
        i[29]
      ),
      observerDotSize: (
        /*observerDotSize*/
        i[20]
      )
    }
  ];
  let _ = {};
  for (let o = 0; o < c.length; o += 1)
    _ = C(_, c[o]);
  l = new Oe({ props: _ });
  let u = (
    /*roomLabelsEnable*/
    i[10] && ie(i)
  ), b = (
    /*compassEnable*/
    i[17] && re(i)
  ), f = (
    /*shouldShowRadar*/
    i[22] && ae(i)
  );
  return {
    c() {
      L(l.$$.fragment), n = U(), u && u.c(), r = U(), b && b.c(), a = U(), f && f.c(), e = fe();
    },
    m(o, s) {
      q(l, o, s), d(o, n, s), u && u.m(o, s), d(o, r, s), b && b.m(o, s), d(o, a, s), f && f.m(o, s), d(o, e, s), m = !0;
    },
    p(o, s) {
      const D = s[0] & /*floorplanData, displayedFloorIndex, contentWidth, contentHeight, observerDotSize*/
      674234376 ? z(c, [
        {
          floorplanData: (
            /*floorplanData*/
            o[3]
          ),
          floorIndex: (
            /*displayedFloorIndex*/
            o[21]
          ),
          contentWidth: (
            /*contentWidth*/
            o[27]
          ),
          contentHeight: (
            /*contentHeight*/
            o[29]
          ),
          observerDotSize: (
            /*observerDotSize*/
            o[20]
          )
        }
      ]) : {};
      l.$set(D), /*roomLabelsEnable*/
      o[10] ? u ? (u.p(o, s), s[0] & /*roomLabelsEnable*/
      1024 && g(u, 1)) : (u = ie(o), u.c(), g(u, 1), u.m(r.parentNode, r)) : u && (I(), h(u, 1, 1, () => {
        u = null;
      }), F()), /*compassEnable*/
      o[17] ? b ? (b.p(o, s), s[0] & /*compassEnable*/
      131072 && g(b, 1)) : (b = re(o), b.c(), g(b, 1), b.m(a.parentNode, a)) : b && (I(), h(b, 1, 1, () => {
        b = null;
      }), F()), /*shouldShowRadar*/
      o[22] ? f ? (f.p(o, s), s[0] & /*shouldShowRadar*/
      4194304 && g(f, 1)) : (f = ae(o), f.c(), g(f, 1), f.m(e.parentNode, e)) : f && (I(), h(f, 1, 1, () => {
        f = null;
      }), F());
    },
    i(o) {
      m || (g(l.$$.fragment, o), g(u), g(b), g(f), m = !0);
    },
    o(o) {
      h(l.$$.fragment, o), h(u), h(b), h(f), m = !1;
    },
    d(o) {
      N(l, o), o && E(n), u && u.d(o), o && E(r), b && b.d(o), o && E(a), f && f.d(o), o && E(e);
    }
  };
}
function ie(i) {
  let l, n;
  const r = [
    {
      floorplanData: (
        /*floorplanData*/
        i[3]
      ),
      floorIndex: (
        /*displayedFloorIndex*/
        i[21]
      ),
      roomNameEnable: (
        /*roomNameEnable*/
        i[11]
      ),
      roomNameOtherTypeEnable: (
        /*roomNameOtherTypeEnable*/
        i[12]
      ),
      roomAreaEnable: (
        /*roomAreaEnable*/
        i[13]
      ),
      adaptiveRoomLabelVisibleEnable: (
        /*adaptiveRoomLabelVisibleEnable*/
        i[14]
      ),
      getRoomAreaText: (
        /*getRoomAreaText*/
        i[15]
      ),
      getLabelElement: (
        /*getLabelElement*/
        i[16]
      )
    }
  ];
  let a = {};
  for (let e = 0; e < r.length; e += 1)
    a = C(a, r[e]);
  return l = new Re({ props: a }), {
    c() {
      L(l.$$.fragment);
    },
    m(e, m) {
      q(l, e, m), n = !0;
    },
    p(e, m) {
      const c = m[0] & /*floorplanData, displayedFloorIndex, roomNameEnable, roomNameOtherTypeEnable, roomAreaEnable, adaptiveRoomLabelVisibleEnable, getRoomAreaText, getLabelElement*/
      2226184 ? z(r, [
        {
          floorplanData: (
            /*floorplanData*/
            e[3]
          ),
          floorIndex: (
            /*displayedFloorIndex*/
            e[21]
          ),
          roomNameEnable: (
            /*roomNameEnable*/
            e[11]
          ),
          roomNameOtherTypeEnable: (
            /*roomNameOtherTypeEnable*/
            e[12]
          ),
          roomAreaEnable: (
            /*roomAreaEnable*/
            e[13]
          ),
          adaptiveRoomLabelVisibleEnable: (
            /*adaptiveRoomLabelVisibleEnable*/
            e[14]
          ),
          getRoomAreaText: (
            /*getRoomAreaText*/
            e[15]
          ),
          getLabelElement: (
            /*getLabelElement*/
            e[16]
          )
        }
      ]) : {};
      l.$set(c);
    },
    i(e) {
      n || (g(l.$$.fragment, e), n = !0);
    },
    o(e) {
      h(l.$$.fragment, e), n = !1;
    },
    d(e) {
      N(l, e);
    }
  };
}
function re(i) {
  let l, n;
  const r = [
    {
      floorplanData: (
        /*floorplanData*/
        i[3]
      ),
      northDesc: (
        /*northDesc*/
        i[18]
      ),
      containerWidth: (
        /*contentWidth*/
        i[27]
      ),
      containerHeight: (
        /*contentHeight*/
        i[29]
      ),
      height: (
        /*compassHeight*/
        i[19]
      )
    }
  ];
  let a = {};
  for (let e = 0; e < r.length; e += 1)
    a = C(a, r[e]);
  return l = new Se({ props: a }), {
    c() {
      L(l.$$.fragment);
    },
    m(e, m) {
      q(l, e, m), n = !0;
    },
    p(e, m) {
      const c = m[0] & /*floorplanData, northDesc, contentWidth, contentHeight, compassHeight*/
      671875080 ? z(r, [
        {
          floorplanData: (
            /*floorplanData*/
            e[3]
          ),
          northDesc: (
            /*northDesc*/
            e[18]
          ),
          containerWidth: (
            /*contentWidth*/
            e[27]
          ),
          containerHeight: (
            /*contentHeight*/
            e[29]
          ),
          height: (
            /*compassHeight*/
            e[19]
          )
        }
      ]) : {};
      l.$set(c);
    },
    i(e) {
      n || (g(l.$$.fragment, e), n = !0);
    },
    o(e) {
      h(l.$$.fragment, e), n = !1;
    },
    d(e) {
      N(l, e);
    }
  };
}
function ae(i) {
  let l, n;
  const r = [
    {
      pxmm: (
        /*pxmm*/
        i[28]
      ),
      five: (
        /*five*/
        i[0]
      ),
      floorplanData: (
        /*floorplanData*/
        i[3]
      ),
      cameraImageUrl: (
        /*cameraImageUrl*/
        i[4]
      ),
      cameraSize: (
        /*cameraSize*/
        i[23]
      ),
      cameraOffset: (
        /*cameraOffset*/
        i[24]
      )
    }
  ];
  let a = {};
  for (let e = 0; e < r.length; e += 1)
    a = C(a, r[e]);
  return l = new Fe({ props: a }), {
    c() {
      L(l.$$.fragment);
    },
    m(e, m) {
      q(l, e, m), n = !0;
    },
    p(e, m) {
      const c = m[0] & /*pxmm, five, floorplanData, cameraImageUrl, cameraSize, cameraOffset*/
      293601305 ? z(r, [
        {
          pxmm: (
            /*pxmm*/
            e[28]
          ),
          five: (
            /*five*/
            e[0]
          ),
          floorplanData: (
            /*floorplanData*/
            e[3]
          ),
          cameraImageUrl: (
            /*cameraImageUrl*/
            e[4]
          ),
          cameraSize: (
            /*cameraSize*/
            e[23]
          ),
          cameraOffset: (
            /*cameraOffset*/
            e[24]
          )
        }
      ]) : {};
      l.$set(c);
    },
    i(e) {
      n || (g(l.$$.fragment, e), n = !0);
    },
    o(e) {
      h(l.$$.fragment, e), n = !1;
    },
    d(e) {
      N(l, e);
    }
  };
}
function qe(i) {
  let l, n, r = (
    /*visible*/
    i[1] && oe(i)
  );
  return {
    c() {
      r && r.c(), l = fe();
    },
    m(a, e) {
      r && r.m(a, e), d(a, l, e), n = !0;
    },
    p(a, e) {
      /*visible*/
      a[1] ? r ? (r.p(a, e), e[0] & /*visible*/
      2 && g(r, 1)) : (r = oe(a), r.c(), g(r, 1), r.m(l.parentNode, l)) : r && (I(), h(r, 1, 1, () => {
        r = null;
      }), F());
    },
    i(a) {
      n || (g(r), n = !0);
    },
    o(a) {
      h(r), n = !1;
    },
    d(a) {
      r && r.d(a), a && E(l);
    }
  };
}
function ze(i, l, n) {
  let r, { five: a } = l, { visible: e } = l, { hoverEnable: m } = l, { floorplanData: c } = l, { cameraImageUrl: _ } = l, { extraObjects: u = [] } = l, { highlightData: b } = l, { missingFloorImageUrl: f } = l, { missingFloorConfig: o } = l, { clickEnable: s = !0 } = l, { roomLabelsEnable: D = !1 } = l, { roomNameEnable: X = !0 } = l, { roomNameOtherTypeEnable: Y = !0 } = l, { roomAreaEnable: M = !0 } = l, { adaptiveRoomLabelVisibleEnable: B = !0 } = l, { getRoomAreaText: G = (t) => (t / 1e6).toFixed(1) + "㎡" } = l, { getLabelElement: J = void 0 } = l, { compassEnable: K = !1 } = l, { northDesc: P = "北" } = l, { compassHeight: Q = 50 } = l, { observerDotSize: Z = 12 } = l, { displayedFloorIndex: y } = l, { shouldShowRadar: x = !0 } = l, { cameraSize: $ = 36 } = l, { cameraOffset: ee = 28.5 } = l, { onFloorplanClick: w = void 0 } = l, le = 0, W = 0, j = 0, H = 0, V = 0;
  function ue(t) {
    if (!s || !w)
      return;
    const R = t.currentTarget.getBoundingClientRect(), T = t.clientX - R.left, k = t.clientY - R.top, S = T / H, A = k / V;
    w({
      imageX: S,
      imageY: A,
      floorIndex: y,
      originalEvent: t
    });
  }
  const be = (t) => {
    n(25, W = t.detail);
  }, ce = (t) => {
    n(26, j = t.detail);
  };
  return i.$$set = (t) => {
    "five" in t && n(0, a = t.five), "visible" in t && n(1, e = t.visible), "hoverEnable" in t && n(2, m = t.hoverEnable), "floorplanData" in t && n(3, c = t.floorplanData), "cameraImageUrl" in t && n(4, _ = t.cameraImageUrl), "extraObjects" in t && n(5, u = t.extraObjects), "highlightData" in t && n(6, b = t.highlightData), "missingFloorImageUrl" in t && n(7, f = t.missingFloorImageUrl), "missingFloorConfig" in t && n(8, o = t.missingFloorConfig), "clickEnable" in t && n(9, s = t.clickEnable), "roomLabelsEnable" in t && n(10, D = t.roomLabelsEnable), "roomNameEnable" in t && n(11, X = t.roomNameEnable), "roomNameOtherTypeEnable" in t && n(12, Y = t.roomNameOtherTypeEnable), "roomAreaEnable" in t && n(13, M = t.roomAreaEnable), "adaptiveRoomLabelVisibleEnable" in t && n(14, B = t.adaptiveRoomLabelVisibleEnable), "getRoomAreaText" in t && n(15, G = t.getRoomAreaText), "getLabelElement" in t && n(16, J = t.getLabelElement), "compassEnable" in t && n(17, K = t.compassEnable), "northDesc" in t && n(18, P = t.northDesc), "compassHeight" in t && n(19, Q = t.compassHeight), "observerDotSize" in t && n(20, Z = t.observerDotSize), "displayedFloorIndex" in t && n(21, y = t.displayedFloorIndex), "shouldShowRadar" in t && n(22, x = t.shouldShowRadar), "cameraSize" in t && n(23, $ = t.cameraSize), "cameraOffset" in t && n(24, ee = t.cameraOffset), "onFloorplanClick" in t && n(32, w = t.onFloorplanClick);
  }, i.$$.update = () => {
    var t;
    if (i.$$.dirty[0] & /*clientWidth, clientHeight, floorplanData, contentWidth*/
    234881032) {
      const O = Math.min(W, j), { max: R, min: T } = c.bounding, k = R.x - T.x, S = R.y - T.y, A = function() {
        return k > S ? [O, O / k * S] : [O / S * k, O];
      }();
      n(27, H = A[0]), n(29, V = A[1]), n(28, le = H / k);
    }
    i.$$.dirty[0] & /*floorplanData, displayedFloorIndex*/
    2097160 && n(30, r = ((t = c.floorDatas[y]) == null ? void 0 : t.rooms.length) > 0);
  }, [
    a,
    e,
    m,
    c,
    _,
    u,
    b,
    f,
    o,
    s,
    D,
    X,
    Y,
    M,
    B,
    G,
    J,
    K,
    P,
    Q,
    Z,
    y,
    x,
    $,
    ee,
    W,
    j,
    H,
    le,
    V,
    r,
    ue,
    w,
    be,
    ce
  ];
}
class xe extends he {
  constructor(l) {
    super(), _e(
      this,
      l,
      ze,
      qe,
      de,
      {
        five: 0,
        visible: 1,
        hoverEnable: 2,
        floorplanData: 3,
        cameraImageUrl: 4,
        extraObjects: 5,
        highlightData: 6,
        missingFloorImageUrl: 7,
        missingFloorConfig: 8,
        clickEnable: 9,
        roomLabelsEnable: 10,
        roomNameEnable: 11,
        roomNameOtherTypeEnable: 12,
        roomAreaEnable: 13,
        adaptiveRoomLabelVisibleEnable: 14,
        getRoomAreaText: 15,
        getLabelElement: 16,
        compassEnable: 17,
        northDesc: 18,
        compassHeight: 19,
        observerDotSize: 20,
        displayedFloorIndex: 21,
        shouldShowRadar: 22,
        cameraSize: 23,
        cameraOffset: 24,
        onFloorplanClick: 32
      },
      Le,
      [-1, -1]
    );
  }
}
export {
  xe as default
};
