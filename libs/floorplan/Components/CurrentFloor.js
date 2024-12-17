import { SvelteComponent as p, init as y, safe_not_equal as x, append_styles as $, element as ee, attr as J, null_to_empty as K, insert as I, group_outros as v, transition_out as c, check_outros as P, transition_in as u, detach as k, assign as U, create_component as T, space as F, empty as le, mount_component as C, get_spread_update as V, destroy_component as A } from "../../vendor/svelte/internal/index.js";
import { writable as oe } from "../../vendor/svelte/store/index.js";
import { BaseImage as ne } from "./BaseImage.js";
import { RoomLabels as ae } from "./RoomLabels/RoomLabels.js";
import { RuleLabels as re } from "./RuleLabels/RuleLabels.js";
import { RoomMaterial as te } from "./RoomMaterials/RoomMaterial.js";
import { RoomHighlight as ie } from "./RoomHighlight/RoomHighlight.js";
import { MissingFloor as fe } from "./MissingFloor.js";
import { Camera as me } from "./Camera.js";
import { Compass as se } from "./Compass.js";
function ue(r) {
  $(r, "svelte-bl8zrz", ".floorplan-plugin__floor.svelte-bl8zrz{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;pointer-events:none}.floorplan-plugin__floor--is-current.svelte-bl8zrz{opacity:1;pointer-events:auto}");
}
function be(r) {
  let l, o, a, i, e, m, s, d, b, R;
  const L = [
    {
      floorIndex: (
        /*floorIndex*/
        r[2]
      ),
      floorplanData: (
        /*floorplanData*/
        r[11]
      )
    }
  ];
  let N = {};
  for (let n = 0; n < L.length; n += 1)
    N = U(N, L[n]);
  l = new te({ props: N });
  let _ = (
    /*highlightEnable*/
    (r[3] || /*hoverEnable*/
    r[5]) && Q(r)
  );
  const w = [
    {
      floorplanData: (
        /*floorplanData*/
        r[11]
      ),
      floorIndex: (
        /*floorIndex*/
        r[2]
      )
    }
  ];
  let z = {};
  for (let n = 0; n < w.length; n += 1)
    z = U(z, w[n]);
  i = new ne({ props: z });
  let g = (
    /*roomLabelsEnable*/
    r[6] && W(r)
  ), h = (
    /*ruleLabelsEnable*/
    r[10] && X(r)
  ), E = (
    /*cameraEnable*/
    r[4] && Y(r)
  ), D = (
    /*compassEnable*/
    r[22] && Z(r)
  );
  return {
    c() {
      T(l.$$.fragment), o = F(), _ && _.c(), a = F(), T(i.$$.fragment), e = F(), g && g.c(), m = F(), h && h.c(), s = F(), E && E.c(), d = F(), D && D.c(), b = le();
    },
    m(n, f) {
      C(l, n, f), I(n, o, f), _ && _.m(n, f), I(n, a, f), C(i, n, f), I(n, e, f), g && g.m(n, f), I(n, m, f), h && h.m(n, f), I(n, s, f), E && E.m(n, f), I(n, d, f), D && D.m(n, f), I(n, b, f), R = !0;
    },
    p(n, f) {
      const q = f & /*floorIndex, floorplanData*/
      2052 ? V(L, [
        {
          floorIndex: (
            /*floorIndex*/
            n[2]
          ),
          floorplanData: (
            /*floorplanData*/
            n[11]
          )
        }
      ]) : {};
      l.$set(q), /*highlightEnable*/
      n[3] || /*hoverEnable*/
      n[5] ? _ ? (_.p(n, f), f & /*highlightEnable, hoverEnable*/
      40 && u(_, 1)) : (_ = Q(n), _.c(), u(_, 1), _.m(a.parentNode, a)) : _ && (v(), c(_, 1, 1, () => {
        _ = null;
      }), P());
      const B = f & /*floorplanData, floorIndex*/
      2052 ? V(w, [
        {
          floorplanData: (
            /*floorplanData*/
            n[11]
          ),
          floorIndex: (
            /*floorIndex*/
            n[2]
          )
        }
      ]) : {};
      i.$set(B), /*roomLabelsEnable*/
      n[6] ? g ? (g.p(n, f), f & /*roomLabelsEnable*/
      64 && u(g, 1)) : (g = W(n), g.c(), u(g, 1), g.m(m.parentNode, m)) : g && (v(), c(g, 1, 1, () => {
        g = null;
      }), P()), /*ruleLabelsEnable*/
      n[10] ? h ? (h.p(n, f), f & /*ruleLabelsEnable*/
      1024 && u(h, 1)) : (h = X(n), h.c(), u(h, 1), h.m(s.parentNode, s)) : h && (v(), c(h, 1, 1, () => {
        h = null;
      }), P()), /*cameraEnable*/
      n[4] ? E ? (E.p(n, f), f & /*cameraEnable*/
      16 && u(E, 1)) : (E = Y(n), E.c(), u(E, 1), E.m(d.parentNode, d)) : E && (v(), c(E, 1, 1, () => {
        E = null;
      }), P()), /*compassEnable*/
      n[22] ? D ? (D.p(n, f), f & /*compassEnable*/
      4194304 && u(D, 1)) : (D = Z(n), D.c(), u(D, 1), D.m(b.parentNode, b)) : D && (v(), c(D, 1, 1, () => {
        D = null;
      }), P());
    },
    i(n) {
      R || (u(l.$$.fragment, n), u(_), u(i.$$.fragment, n), u(g), u(h), u(E), u(D), R = !0);
    },
    o(n) {
      c(l.$$.fragment, n), c(_), c(i.$$.fragment, n), c(g), c(h), c(E), c(D), R = !1;
    },
    d(n) {
      A(l, n), n && k(o), _ && _.d(n), n && k(a), A(i, n), n && k(e), g && g.d(n), n && k(m), h && h.d(n), n && k(s), E && E.d(n), n && k(d), D && D.d(n), n && k(b);
    }
  };
}
function ge(r) {
  let l, o;
  return l = new fe({
    props: {
      missingFloorConfig: (
        /*missingFloorConfig*/
        r[18]
      )
    }
  }), {
    c() {
      T(l.$$.fragment);
    },
    m(a, i) {
      C(l, a, i), o = !0;
    },
    p(a, i) {
      const e = {};
      i & /*missingFloorConfig*/
      262144 && (e.missingFloorConfig = /*missingFloorConfig*/
      a[18]), l.$set(e);
    },
    i(a) {
      o || (u(l.$$.fragment, a), o = !0);
    },
    o(a) {
      c(l.$$.fragment, a), o = !1;
    },
    d(a) {
      A(l, a);
    }
  };
}
function Q(r) {
  let l, o;
  const a = [
    {
      floorIndex: (
        /*floorIndex*/
        r[2]
      ),
      floorplanData: (
        /*floorplanData*/
        r[11]
      ),
      hoveredRoom: (
        /*hoveredRoom*/
        r[24]
      ),
      highlightData: (
        /*highlightData*/
        r[17]
      )
    }
  ];
  let i = {};
  for (let e = 0; e < a.length; e += 1)
    i = U(i, a[e]);
  return l = new ie({ props: i }), {
    c() {
      T(l.$$.fragment);
    },
    m(e, m) {
      C(l, e, m), o = !0;
    },
    p(e, m) {
      const s = m & /*floorIndex, floorplanData, hoveredRoom, highlightData*/
      16910340 ? V(a, [
        {
          floorIndex: (
            /*floorIndex*/
            e[2]
          ),
          floorplanData: (
            /*floorplanData*/
            e[11]
          ),
          hoveredRoom: (
            /*hoveredRoom*/
            e[24]
          ),
          highlightData: (
            /*highlightData*/
            e[17]
          )
        }
      ]) : {};
      l.$set(s);
    },
    i(e) {
      o || (u(l.$$.fragment, e), o = !0);
    },
    o(e) {
      c(l.$$.fragment, e), o = !1;
    },
    d(e) {
      A(l, e);
    }
  };
}
function W(r) {
  let l, o;
  const a = [
    {
      floorplanData: (
        /*floorplanData*/
        r[11]
      ),
      roomAreaEnable: (
        /*roomAreaEnable*/
        r[7]
      ),
      roomNameEnable: (
        /*roomNameEnable*/
        r[8]
      ),
      roomDimensionEnable: (
        /*roomDimensionEnable*/
        r[9]
      ),
      floorIndex: (
        /*floorIndex*/
        r[2]
      ),
      getRoomAreaText: (
        /*getRoomAreaText*/
        r[12]
      ),
      getRoomDimensionText: (
        /*getRoomDimensionText*/
        r[13]
      ),
      getLabelElement: (
        /*getLabelElement*/
        r[14]
      ),
      hoveredRoom: (
        /*hoveredRoom*/
        r[24]
      ),
      adaptiveRoomLabelVisibleEnable: (
        /*adaptiveRoomLabelVisibleEnable*/
        r[16]
      )
    }
  ];
  let i = {};
  for (let e = 0; e < a.length; e += 1)
    i = U(i, a[e]);
  return l = new ae({ props: i }), {
    c() {
      T(l.$$.fragment);
    },
    m(e, m) {
      C(l, e, m), o = !0;
    },
    p(e, m) {
      const s = m & /*floorplanData, roomAreaEnable, roomNameEnable, roomDimensionEnable, floorIndex, getRoomAreaText, getRoomDimensionText, getLabelElement, hoveredRoom, adaptiveRoomLabelVisibleEnable*/
      16874372 ? V(a, [
        {
          floorplanData: (
            /*floorplanData*/
            e[11]
          ),
          roomAreaEnable: (
            /*roomAreaEnable*/
            e[7]
          ),
          roomNameEnable: (
            /*roomNameEnable*/
            e[8]
          ),
          roomDimensionEnable: (
            /*roomDimensionEnable*/
            e[9]
          ),
          floorIndex: (
            /*floorIndex*/
            e[2]
          ),
          getRoomAreaText: (
            /*getRoomAreaText*/
            e[12]
          ),
          getRoomDimensionText: (
            /*getRoomDimensionText*/
            e[13]
          ),
          getLabelElement: (
            /*getLabelElement*/
            e[14]
          ),
          hoveredRoom: (
            /*hoveredRoom*/
            e[24]
          ),
          adaptiveRoomLabelVisibleEnable: (
            /*adaptiveRoomLabelVisibleEnable*/
            e[16]
          )
        }
      ]) : {};
      l.$set(s);
    },
    i(e) {
      o || (u(l.$$.fragment, e), o = !0);
    },
    o(e) {
      c(l.$$.fragment, e), o = !1;
    },
    d(e) {
      A(l, e);
    }
  };
}
function X(r) {
  let l, o;
  const a = [
    {
      floorplanData: (
        /*floorplanData*/
        r[11]
      ),
      floorIndex: (
        /*floorIndex*/
        r[2]
      ),
      getRuleDistanceText: (
        /*getRuleDistanceText*/
        r[15]
      )
    }
  ];
  let i = {};
  for (let e = 0; e < a.length; e += 1)
    i = U(i, a[e]);
  return l = new re({ props: i }), {
    c() {
      T(l.$$.fragment);
    },
    m(e, m) {
      C(l, e, m), o = !0;
    },
    p(e, m) {
      const s = m & /*floorplanData, floorIndex, getRuleDistanceText*/
      34820 ? V(a, [
        {
          floorplanData: (
            /*floorplanData*/
            e[11]
          ),
          floorIndex: (
            /*floorIndex*/
            e[2]
          ),
          getRuleDistanceText: (
            /*getRuleDistanceText*/
            e[15]
          )
        }
      ]) : {};
      l.$set(s);
    },
    i(e) {
      o || (u(l.$$.fragment, e), o = !0);
    },
    o(e) {
      c(l.$$.fragment, e), o = !1;
    },
    d(e) {
      A(l, e);
    }
  };
}
function Y(r) {
  let l, o;
  const a = [
    {
      panoIndex: (
        /*panoIndex*/
        r[0]
      ),
      floorplanData: (
        /*floorplanData*/
        r[11]
      ),
      lastPanoramaLongitude: (
        /*lastPanoramaLongitude*/
        r[19]
      ),
      cameraImageUrl: (
        /*cameraImageUrl*/
        r[20]
      )
    }
  ];
  let i = {};
  for (let e = 0; e < a.length; e += 1)
    i = U(i, a[e]);
  return l = new me({ props: i }), {
    c() {
      T(l.$$.fragment);
    },
    m(e, m) {
      C(l, e, m), o = !0;
    },
    p(e, m) {
      const s = m & /*panoIndex, floorplanData, lastPanoramaLongitude, cameraImageUrl*/
      1574913 ? V(a, [
        {
          panoIndex: (
            /*panoIndex*/
            e[0]
          ),
          floorplanData: (
            /*floorplanData*/
            e[11]
          ),
          lastPanoramaLongitude: (
            /*lastPanoramaLongitude*/
            e[19]
          ),
          cameraImageUrl: (
            /*cameraImageUrl*/
            e[20]
          )
        }
      ]) : {};
      l.$set(s);
    },
    i(e) {
      o || (u(l.$$.fragment, e), o = !0);
    },
    o(e) {
      c(l.$$.fragment, e), o = !1;
    },
    d(e) {
      A(l, e);
    }
  };
}
function Z(r) {
  let l, o;
  return l = new se({
    props: {
      floorplanData: (
        /*floorplanData*/
        r[11]
      ),
      northDesc: (
        /*northDesc*/
        r[21]
      )
    }
  }), {
    c() {
      T(l.$$.fragment);
    },
    m(a, i) {
      C(l, a, i), o = !0;
    },
    p(a, i) {
      const e = {};
      i & /*floorplanData*/
      2048 && (e.floorplanData = /*floorplanData*/
      a[11]), i & /*northDesc*/
      2097152 && (e.northDesc = /*northDesc*/
      a[21]), l.$set(e);
    },
    i(a) {
      o || (u(l.$$.fragment, a), o = !0);
    },
    o(a) {
      c(l.$$.fragment, a), o = !1;
    },
    d(a) {
      A(l, a);
    }
  };
}
function _e(r) {
  let l, o, a, i, e;
  const m = [ge, be], s = [];
  function d(b, R) {
    return (
      /*hasCurrentFloorData*/
      b[23] ? 1 : 0
    );
  }
  return o = d(r), a = s[o] = m[o](r), {
    c() {
      l = ee("div"), a.c(), J(l, "class", i = K(`floorplan-plugin__floor${/*isCurrent*/
      r[1] ? " floorplan-plugin__floor--is-current" : ""}`) + " svelte-bl8zrz");
    },
    m(b, R) {
      I(b, l, R), s[o].m(l, null), e = !0;
    },
    p(b, [R]) {
      let L = o;
      o = d(b), o === L ? s[o].p(b, R) : (v(), c(s[L], 1, 1, () => {
        s[L] = null;
      }), P(), a = s[o], a ? a.p(b, R) : (a = s[o] = m[o](b), a.c()), u(a, 1), a.m(l, null)), (!e || R & /*isCurrent*/
      2 && i !== (i = K(`floorplan-plugin__floor${/*isCurrent*/
      b[1] ? " floorplan-plugin__floor--is-current" : ""}`) + " svelte-bl8zrz")) && J(l, "class", i);
    },
    i(b) {
      e || (u(a), e = !0);
    },
    o(b) {
      c(a), e = !1;
    },
    d(b) {
      b && k(l), s[o].d();
    }
  };
}
function he(r, l, o) {
  let a, i, { panoIndex: e } = l, { isCurrent: m } = l, { floorIndex: s } = l, { highlightEnable: d } = l, { cameraEnable: b } = l, { hoverEnable: R } = l, { roomLabelsEnable: L } = l, { roomAreaEnable: N } = l, { roomNameEnable: _ } = l, { roomDimensionEnable: w } = l, { ruleLabelsEnable: z } = l, { floorplanData: g } = l, { getRoomAreaText: h } = l, { getRoomDimensionText: E } = l, { getLabelElement: D } = l, { getRuleDistanceText: n } = l, { adaptiveRoomLabelVisibleEnable: f } = l, { highlightData: q } = l, { missingFloorConfig: B } = l, { lastPanoramaLongitude: H } = l, { cameraImageUrl: O } = l, { northDesc: S } = l, { compassEnable: j } = l, { store: M = void 0 } = l;
  const G = oe(void 0);
  return G.subscribe((t) => {
    M && o(25, M.roomOnMouse = t, M);
  }), r.$$set = (t) => {
    "panoIndex" in t && o(0, e = t.panoIndex), "isCurrent" in t && o(1, m = t.isCurrent), "floorIndex" in t && o(2, s = t.floorIndex), "highlightEnable" in t && o(3, d = t.highlightEnable), "cameraEnable" in t && o(4, b = t.cameraEnable), "hoverEnable" in t && o(5, R = t.hoverEnable), "roomLabelsEnable" in t && o(6, L = t.roomLabelsEnable), "roomAreaEnable" in t && o(7, N = t.roomAreaEnable), "roomNameEnable" in t && o(8, _ = t.roomNameEnable), "roomDimensionEnable" in t && o(9, w = t.roomDimensionEnable), "ruleLabelsEnable" in t && o(10, z = t.ruleLabelsEnable), "floorplanData" in t && o(11, g = t.floorplanData), "getRoomAreaText" in t && o(12, h = t.getRoomAreaText), "getRoomDimensionText" in t && o(13, E = t.getRoomDimensionText), "getLabelElement" in t && o(14, D = t.getLabelElement), "getRuleDistanceText" in t && o(15, n = t.getRuleDistanceText), "adaptiveRoomLabelVisibleEnable" in t && o(16, f = t.adaptiveRoomLabelVisibleEnable), "highlightData" in t && o(17, q = t.highlightData), "missingFloorConfig" in t && o(18, B = t.missingFloorConfig), "lastPanoramaLongitude" in t && o(19, H = t.lastPanoramaLongitude), "cameraImageUrl" in t && o(20, O = t.cameraImageUrl), "northDesc" in t && o(21, S = t.northDesc), "compassEnable" in t && o(22, j = t.compassEnable), "store" in t && o(25, M = t.store);
  }, r.$$.update = () => {
    r.$$.dirty & /*floorplanData, floorIndex*/
    2052 && o(26, a = g.floorDatas[s]), r.$$.dirty & /*floorData*/
    67108864 && o(23, i = a.rooms.length > 0);
  }, [
    e,
    m,
    s,
    d,
    b,
    R,
    L,
    N,
    _,
    w,
    z,
    g,
    h,
    E,
    D,
    n,
    f,
    q,
    B,
    H,
    O,
    S,
    j,
    i,
    G,
    M,
    a
  ];
}
class Ae extends p {
  constructor(l) {
    super(), y(
      this,
      l,
      he,
      _e,
      x,
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
        roomDimensionEnable: 9,
        ruleLabelsEnable: 10,
        floorplanData: 11,
        getRoomAreaText: 12,
        getRoomDimensionText: 13,
        getLabelElement: 14,
        getRuleDistanceText: 15,
        adaptiveRoomLabelVisibleEnable: 16,
        highlightData: 17,
        missingFloorConfig: 18,
        lastPanoramaLongitude: 19,
        cameraImageUrl: 20,
        northDesc: 21,
        compassEnable: 22,
        store: 25
      },
      ue
    );
  }
}
export {
  Ae as CurrentFloor
};
