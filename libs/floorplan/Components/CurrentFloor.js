import { SvelteComponent as Z, init as x, safe_not_equal as $, append_styles as ee, element as le, attr as G, null_to_empty as J, insert as L, group_outros as M, transition_out as c, check_outros as y, transition_in as s, detach as T, assign as F, create_component as k, space as z, empty as oe, mount_component as N, get_spread_update as v, destroy_component as C } from "../../vendor/svelte/internal/index.js";
import { writable as ne } from "../../vendor/svelte/store/index.js";
import { BaseImage as ae } from "./BaseImage.js";
import { Items as re } from "./Items/Items.js";
import { RoomLabels as te } from "./RoomLabels/RoomLabels.js";
import { RuleLabels as ie } from "./RuleLabels/RuleLabels.js";
import { RoomMaterial as me } from "./RoomMaterials/RoomMaterial.js";
import { RoomHighlight as fe } from "./RoomHighlight/RoomHighlight.js";
import { MissingFloor as se } from "./MissingFloor.js";
import { Camera as be } from "./Camera.js";
import { Compass as ue } from "./Compass.js";
function ge(a) {
  ee(a, "svelte-bl8zrz", ".floorplan-plugin__floor.svelte-bl8zrz{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;pointer-events:none}.floorplan-plugin__floor--is-current.svelte-bl8zrz{opacity:1;pointer-events:auto}");
}
function _e(a) {
  let l, n, r, i, e, f, b, I, u, R, d, w;
  const O = [
    {
      floorIndex: (
        /*floorIndex*/
        a[2]
      ),
      floorplanData: (
        /*floorplanData*/
        a[12]
      ),
      roomLabelsEnable: (
        /*roomLabelsEnable*/
        a[6]
      ),
      roomDimensionEnable: (
        /*roomDimensionEnable*/
        a[10]
      )
    }
  ];
  let P = {};
  for (let o = 0; o < O.length; o += 1)
    P = F(P, O[o]);
  l = new me({ props: P });
  let g = (
    /*highlightEnable*/
    (a[3] || /*hoverEnable*/
    a[5]) && K(a)
  );
  const U = [
    {
      floorplanData: (
        /*floorplanData*/
        a[12]
      ),
      floorIndex: (
        /*floorIndex*/
        a[2]
      )
    }
  ];
  let A = {};
  for (let o = 0; o < U.length; o += 1)
    A = F(A, U[o]);
  i = new ae({ props: A });
  const V = [
    {
      floorplanData: (
        /*floorplanData*/
        a[12]
      ),
      floorIndex: (
        /*floorIndex*/
        a[2]
      )
    }
  ];
  let p = {};
  for (let o = 0; o < V.length; o += 1)
    p = F(p, V[o]);
  f = new re({ props: p });
  let _ = (
    /*roomLabelsEnable*/
    a[6] && Q(a)
  ), E = (
    /*ruleLabelsEnable*/
    a[11] && W(a)
  ), h = (
    /*cameraEnable*/
    a[4] && X(a)
  ), D = (
    /*compassEnable*/
    a[23] && Y(a)
  );
  return {
    c() {
      k(l.$$.fragment), n = z(), g && g.c(), r = z(), k(i.$$.fragment), e = z(), k(f.$$.fragment), b = z(), _ && _.c(), I = z(), E && E.c(), u = z(), h && h.c(), R = z(), D && D.c(), d = oe();
    },
    m(o, m) {
      N(l, o, m), L(o, n, m), g && g.m(o, m), L(o, r, m), N(i, o, m), L(o, e, m), N(f, o, m), L(o, b, m), _ && _.m(o, m), L(o, I, m), E && E.m(o, m), L(o, u, m), h && h.m(o, m), L(o, R, m), D && D.m(o, m), L(o, d, m), w = !0;
    },
    p(o, m) {
      const B = m & /*floorIndex, floorplanData, roomLabelsEnable, roomDimensionEnable*/
      5188 ? v(O, [
        {
          floorIndex: (
            /*floorIndex*/
            o[2]
          ),
          floorplanData: (
            /*floorplanData*/
            o[12]
          ),
          roomLabelsEnable: (
            /*roomLabelsEnable*/
            o[6]
          ),
          roomDimensionEnable: (
            /*roomDimensionEnable*/
            o[10]
          )
        }
      ]) : {};
      l.$set(B), /*highlightEnable*/
      o[3] || /*hoverEnable*/
      o[5] ? g ? (g.p(o, m), m & /*highlightEnable, hoverEnable*/
      40 && s(g, 1)) : (g = K(o), g.c(), s(g, 1), g.m(r.parentNode, r)) : g && (M(), c(g, 1, 1, () => {
        g = null;
      }), y());
      const H = m & /*floorplanData, floorIndex*/
      4100 ? v(U, [
        {
          floorplanData: (
            /*floorplanData*/
            o[12]
          ),
          floorIndex: (
            /*floorIndex*/
            o[2]
          )
        }
      ]) : {};
      i.$set(H);
      const S = m & /*floorplanData, floorIndex*/
      4100 ? v(V, [
        {
          floorplanData: (
            /*floorplanData*/
            o[12]
          ),
          floorIndex: (
            /*floorIndex*/
            o[2]
          )
        }
      ]) : {};
      f.$set(S), /*roomLabelsEnable*/
      o[6] ? _ ? (_.p(o, m), m & /*roomLabelsEnable*/
      64 && s(_, 1)) : (_ = Q(o), _.c(), s(_, 1), _.m(I.parentNode, I)) : _ && (M(), c(_, 1, 1, () => {
        _ = null;
      }), y()), /*ruleLabelsEnable*/
      o[11] ? E ? (E.p(o, m), m & /*ruleLabelsEnable*/
      2048 && s(E, 1)) : (E = W(o), E.c(), s(E, 1), E.m(u.parentNode, u)) : E && (M(), c(E, 1, 1, () => {
        E = null;
      }), y()), /*cameraEnable*/
      o[4] ? h ? (h.p(o, m), m & /*cameraEnable*/
      16 && s(h, 1)) : (h = X(o), h.c(), s(h, 1), h.m(R.parentNode, R)) : h && (M(), c(h, 1, 1, () => {
        h = null;
      }), y()), /*compassEnable*/
      o[23] ? D ? (D.p(o, m), m & /*compassEnable*/
      8388608 && s(D, 1)) : (D = Y(o), D.c(), s(D, 1), D.m(d.parentNode, d)) : D && (M(), c(D, 1, 1, () => {
        D = null;
      }), y());
    },
    i(o) {
      w || (s(l.$$.fragment, o), s(g), s(i.$$.fragment, o), s(f.$$.fragment, o), s(_), s(E), s(h), s(D), w = !0);
    },
    o(o) {
      c(l.$$.fragment, o), c(g), c(i.$$.fragment, o), c(f.$$.fragment, o), c(_), c(E), c(h), c(D), w = !1;
    },
    d(o) {
      C(l, o), o && T(n), g && g.d(o), o && T(r), C(i, o), o && T(e), C(f, o), o && T(b), _ && _.d(o), o && T(I), E && E.d(o), o && T(u), h && h.d(o), o && T(R), D && D.d(o), o && T(d);
    }
  };
}
function Ee(a) {
  let l, n;
  return l = new se({
    props: {
      missingFloorConfig: (
        /*missingFloorConfig*/
        a[19]
      )
    }
  }), {
    c() {
      k(l.$$.fragment);
    },
    m(r, i) {
      N(l, r, i), n = !0;
    },
    p(r, i) {
      const e = {};
      i & /*missingFloorConfig*/
      524288 && (e.missingFloorConfig = /*missingFloorConfig*/
      r[19]), l.$set(e);
    },
    i(r) {
      n || (s(l.$$.fragment, r), n = !0);
    },
    o(r) {
      c(l.$$.fragment, r), n = !1;
    },
    d(r) {
      C(l, r);
    }
  };
}
function K(a) {
  let l, n;
  const r = [
    {
      floorIndex: (
        /*floorIndex*/
        a[2]
      ),
      floorplanData: (
        /*floorplanData*/
        a[12]
      ),
      hoveredRoom: (
        /*hoveredRoom*/
        a[25]
      ),
      highlightData: (
        /*highlightData*/
        a[18]
      )
    }
  ];
  let i = {};
  for (let e = 0; e < r.length; e += 1)
    i = F(i, r[e]);
  return l = new fe({ props: i }), {
    c() {
      k(l.$$.fragment);
    },
    m(e, f) {
      N(l, e, f), n = !0;
    },
    p(e, f) {
      const b = f & /*floorIndex, floorplanData, hoveredRoom, highlightData*/
      33820676 ? v(r, [
        {
          floorIndex: (
            /*floorIndex*/
            e[2]
          ),
          floorplanData: (
            /*floorplanData*/
            e[12]
          ),
          hoveredRoom: (
            /*hoveredRoom*/
            e[25]
          ),
          highlightData: (
            /*highlightData*/
            e[18]
          )
        }
      ]) : {};
      l.$set(b);
    },
    i(e) {
      n || (s(l.$$.fragment, e), n = !0);
    },
    o(e) {
      c(l.$$.fragment, e), n = !1;
    },
    d(e) {
      C(l, e);
    }
  };
}
function Q(a) {
  let l, n;
  const r = [
    {
      floorplanData: (
        /*floorplanData*/
        a[12]
      ),
      roomAreaEnable: (
        /*roomAreaEnable*/
        a[7]
      ),
      roomNameEnable: (
        /*roomNameEnable*/
        a[8]
      ),
      roomNameOtherTypeEnable: (
        /*roomNameOtherTypeEnable*/
        a[9]
      ),
      roomDimensionEnable: (
        /*roomDimensionEnable*/
        a[10]
      ),
      floorIndex: (
        /*floorIndex*/
        a[2]
      ),
      getRoomAreaText: (
        /*getRoomAreaText*/
        a[13]
      ),
      getRoomDimensionText: (
        /*getRoomDimensionText*/
        a[14]
      ),
      getLabelElement: (
        /*getLabelElement*/
        a[15]
      ),
      hoveredRoom: (
        /*hoveredRoom*/
        a[25]
      ),
      adaptiveRoomLabelVisibleEnable: (
        /*adaptiveRoomLabelVisibleEnable*/
        a[17]
      )
    }
  ];
  let i = {};
  for (let e = 0; e < r.length; e += 1)
    i = F(i, r[e]);
  return l = new te({ props: i }), {
    c() {
      k(l.$$.fragment);
    },
    m(e, f) {
      N(l, e, f), n = !0;
    },
    p(e, f) {
      const b = f & /*floorplanData, roomAreaEnable, roomNameEnable, roomNameOtherTypeEnable, roomDimensionEnable, floorIndex, getRoomAreaText, getRoomDimensionText, getLabelElement, hoveredRoom, adaptiveRoomLabelVisibleEnable*/
      33748868 ? v(r, [
        {
          floorplanData: (
            /*floorplanData*/
            e[12]
          ),
          roomAreaEnable: (
            /*roomAreaEnable*/
            e[7]
          ),
          roomNameEnable: (
            /*roomNameEnable*/
            e[8]
          ),
          roomNameOtherTypeEnable: (
            /*roomNameOtherTypeEnable*/
            e[9]
          ),
          roomDimensionEnable: (
            /*roomDimensionEnable*/
            e[10]
          ),
          floorIndex: (
            /*floorIndex*/
            e[2]
          ),
          getRoomAreaText: (
            /*getRoomAreaText*/
            e[13]
          ),
          getRoomDimensionText: (
            /*getRoomDimensionText*/
            e[14]
          ),
          getLabelElement: (
            /*getLabelElement*/
            e[15]
          ),
          hoveredRoom: (
            /*hoveredRoom*/
            e[25]
          ),
          adaptiveRoomLabelVisibleEnable: (
            /*adaptiveRoomLabelVisibleEnable*/
            e[17]
          )
        }
      ]) : {};
      l.$set(b);
    },
    i(e) {
      n || (s(l.$$.fragment, e), n = !0);
    },
    o(e) {
      c(l.$$.fragment, e), n = !1;
    },
    d(e) {
      C(l, e);
    }
  };
}
function W(a) {
  let l, n;
  const r = [
    {
      floorplanData: (
        /*floorplanData*/
        a[12]
      ),
      floorIndex: (
        /*floorIndex*/
        a[2]
      ),
      getRuleDistanceText: (
        /*getRuleDistanceText*/
        a[16]
      )
    }
  ];
  let i = {};
  for (let e = 0; e < r.length; e += 1)
    i = F(i, r[e]);
  return l = new ie({ props: i }), {
    c() {
      k(l.$$.fragment);
    },
    m(e, f) {
      N(l, e, f), n = !0;
    },
    p(e, f) {
      const b = f & /*floorplanData, floorIndex, getRuleDistanceText*/
      69636 ? v(r, [
        {
          floorplanData: (
            /*floorplanData*/
            e[12]
          ),
          floorIndex: (
            /*floorIndex*/
            e[2]
          ),
          getRuleDistanceText: (
            /*getRuleDistanceText*/
            e[16]
          )
        }
      ]) : {};
      l.$set(b);
    },
    i(e) {
      n || (s(l.$$.fragment, e), n = !0);
    },
    o(e) {
      c(l.$$.fragment, e), n = !1;
    },
    d(e) {
      C(l, e);
    }
  };
}
function X(a) {
  let l, n;
  const r = [
    {
      panoIndex: (
        /*panoIndex*/
        a[0]
      ),
      floorplanData: (
        /*floorplanData*/
        a[12]
      ),
      lastPanoramaLongitude: (
        /*lastPanoramaLongitude*/
        a[20]
      ),
      cameraImageUrl: (
        /*cameraImageUrl*/
        a[21]
      )
    }
  ];
  let i = {};
  for (let e = 0; e < r.length; e += 1)
    i = F(i, r[e]);
  return l = new be({ props: i }), {
    c() {
      k(l.$$.fragment);
    },
    m(e, f) {
      N(l, e, f), n = !0;
    },
    p(e, f) {
      const b = f & /*panoIndex, floorplanData, lastPanoramaLongitude, cameraImageUrl*/
      3149825 ? v(r, [
        {
          panoIndex: (
            /*panoIndex*/
            e[0]
          ),
          floorplanData: (
            /*floorplanData*/
            e[12]
          ),
          lastPanoramaLongitude: (
            /*lastPanoramaLongitude*/
            e[20]
          ),
          cameraImageUrl: (
            /*cameraImageUrl*/
            e[21]
          )
        }
      ]) : {};
      l.$set(b);
    },
    i(e) {
      n || (s(l.$$.fragment, e), n = !0);
    },
    o(e) {
      c(l.$$.fragment, e), n = !1;
    },
    d(e) {
      C(l, e);
    }
  };
}
function Y(a) {
  let l, n;
  return l = new ue({
    props: {
      floorplanData: (
        /*floorplanData*/
        a[12]
      ),
      northDesc: (
        /*northDesc*/
        a[22]
      )
    }
  }), {
    c() {
      k(l.$$.fragment);
    },
    m(r, i) {
      N(l, r, i), n = !0;
    },
    p(r, i) {
      const e = {};
      i & /*floorplanData*/
      4096 && (e.floorplanData = /*floorplanData*/
      r[12]), i & /*northDesc*/
      4194304 && (e.northDesc = /*northDesc*/
      r[22]), l.$set(e);
    },
    i(r) {
      n || (s(l.$$.fragment, r), n = !0);
    },
    o(r) {
      c(l.$$.fragment, r), n = !1;
    },
    d(r) {
      C(l, r);
    }
  };
}
function he(a) {
  let l, n, r, i, e;
  const f = [Ee, _e], b = [];
  function I(u, R) {
    return (
      /*hasCurrentFloorData*/
      u[24] ? 1 : 0
    );
  }
  return n = I(a), r = b[n] = f[n](a), {
    c() {
      l = le("div"), r.c(), G(l, "class", i = J(`floorplan-plugin__floor${/*isCurrent*/
      a[1] ? " floorplan-plugin__floor--is-current" : ""}`) + " svelte-bl8zrz");
    },
    m(u, R) {
      L(u, l, R), b[n].m(l, null), e = !0;
    },
    p(u, [R]) {
      let d = n;
      n = I(u), n === d ? b[n].p(u, R) : (M(), c(b[d], 1, 1, () => {
        b[d] = null;
      }), y(), r = b[n], r ? r.p(u, R) : (r = b[n] = f[n](u), r.c()), s(r, 1), r.m(l, null)), (!e || R & /*isCurrent*/
      2 && i !== (i = J(`floorplan-plugin__floor${/*isCurrent*/
      u[1] ? " floorplan-plugin__floor--is-current" : ""}`) + " svelte-bl8zrz")) && G(l, "class", i);
    },
    i(u) {
      e || (s(r), e = !0);
    },
    o(u) {
      c(r), e = !1;
    },
    d(u) {
      u && T(l), b[n].d();
    }
  };
}
function De(a, l, n) {
  let r, i, { panoIndex: e } = l, { isCurrent: f } = l, { floorIndex: b } = l, { highlightEnable: I } = l, { cameraEnable: u } = l, { hoverEnable: R } = l, { roomLabelsEnable: d } = l, { roomAreaEnable: w } = l, { roomNameEnable: O } = l, { roomNameOtherTypeEnable: P } = l, { roomDimensionEnable: g } = l, { ruleLabelsEnable: U } = l, { floorplanData: A } = l, { getRoomAreaText: V } = l, { getRoomDimensionText: p } = l, { getLabelElement: _ } = l, { getRuleDistanceText: E } = l, { adaptiveRoomLabelVisibleEnable: h } = l, { highlightData: D } = l, { missingFloorConfig: o } = l, { lastPanoramaLongitude: m } = l, { cameraImageUrl: B } = l, { northDesc: H } = l, { compassEnable: S } = l, { store: q = void 0 } = l;
  const j = ne(void 0);
  return j.subscribe((t) => {
    q && n(26, q.roomOnMouse = t, q);
  }), a.$$set = (t) => {
    "panoIndex" in t && n(0, e = t.panoIndex), "isCurrent" in t && n(1, f = t.isCurrent), "floorIndex" in t && n(2, b = t.floorIndex), "highlightEnable" in t && n(3, I = t.highlightEnable), "cameraEnable" in t && n(4, u = t.cameraEnable), "hoverEnable" in t && n(5, R = t.hoverEnable), "roomLabelsEnable" in t && n(6, d = t.roomLabelsEnable), "roomAreaEnable" in t && n(7, w = t.roomAreaEnable), "roomNameEnable" in t && n(8, O = t.roomNameEnable), "roomNameOtherTypeEnable" in t && n(9, P = t.roomNameOtherTypeEnable), "roomDimensionEnable" in t && n(10, g = t.roomDimensionEnable), "ruleLabelsEnable" in t && n(11, U = t.ruleLabelsEnable), "floorplanData" in t && n(12, A = t.floorplanData), "getRoomAreaText" in t && n(13, V = t.getRoomAreaText), "getRoomDimensionText" in t && n(14, p = t.getRoomDimensionText), "getLabelElement" in t && n(15, _ = t.getLabelElement), "getRuleDistanceText" in t && n(16, E = t.getRuleDistanceText), "adaptiveRoomLabelVisibleEnable" in t && n(17, h = t.adaptiveRoomLabelVisibleEnable), "highlightData" in t && n(18, D = t.highlightData), "missingFloorConfig" in t && n(19, o = t.missingFloorConfig), "lastPanoramaLongitude" in t && n(20, m = t.lastPanoramaLongitude), "cameraImageUrl" in t && n(21, B = t.cameraImageUrl), "northDesc" in t && n(22, H = t.northDesc), "compassEnable" in t && n(23, S = t.compassEnable), "store" in t && n(26, q = t.store);
  }, a.$$.update = () => {
    a.$$.dirty & /*floorplanData, floorIndex*/
    4100 && n(27, r = A.floorDatas[b]), a.$$.dirty & /*floorData*/
    134217728 && n(24, i = r.rooms.length > 0 || r.is_has_wall);
  }, [
    e,
    f,
    b,
    I,
    u,
    R,
    d,
    w,
    O,
    P,
    g,
    U,
    A,
    V,
    p,
    _,
    E,
    h,
    D,
    o,
    m,
    B,
    H,
    S,
    i,
    j,
    q,
    r
  ];
}
class ze extends Z {
  constructor(l) {
    super(), x(
      this,
      l,
      De,
      he,
      $,
      {
        panoIndex: 0,
        isCurrent: 1,
        floorIndex: 2,
        highlightEnable: 3,
        cameraEnable: 4,
        hoverEnable: 5,
        roomLabelsEnable: 6,
        roomAreaEnable: 7,
        roomNameEnable: 8,
        roomNameOtherTypeEnable: 9,
        roomDimensionEnable: 10,
        ruleLabelsEnable: 11,
        floorplanData: 12,
        getRoomAreaText: 13,
        getRoomDimensionText: 14,
        getLabelElement: 15,
        getRuleDistanceText: 16,
        adaptiveRoomLabelVisibleEnable: 17,
        highlightData: 18,
        missingFloorConfig: 19,
        lastPanoramaLongitude: 20,
        cameraImageUrl: 21,
        northDesc: 22,
        compassEnable: 23,
        store: 26
      },
      ge
    );
  }
}
export {
  ze as CurrentFloor
};
