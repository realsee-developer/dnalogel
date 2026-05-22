import { SvelteComponent as S, init as j, safe_not_equal as z, append_styles as G, empty as H, insert as v, transition_in as g, transition_out as E, check_outros as w, detach as B, element as J, attr as K, group_outros as M, add_render_callback as Q, create_in_transition as W, identity as X, destroy_each as Y, assign as Z, create_component as x, mount_component as p, get_spread_update as $, destroy_component as ee } from "../../vendor/svelte/internal/index.js";
import { fade as ne } from "../../vendor/svelte/transition/index.js";
import { CurrentFloor as le } from "./CurrentFloor.js";
function ae(a) {
  G(a, "svelte-86bqav", ".floorplan-main.svelte-86bqav{width:100%;height:100%;pointer-events:none}");
}
function V(a, n, o) {
  const t = a.slice();
  return t[26] = n[o], t;
}
function y(a) {
  let n, o, t, i = (
    /*floorplanData*/
    a[15].floorDatas
  ), e = [];
  for (let m = 0; m < i.length; m += 1)
    e[m] = q(V(a, i, m));
  const f = (m) => E(e[m], 1, 1, () => {
    e[m] = null;
  });
  return {
    c() {
      n = J("div");
      for (let m = 0; m < e.length; m += 1)
        e[m].c();
      K(n, "class", "floorplan-main svelte-86bqav");
    },
    m(m, b) {
      v(m, n, b);
      for (let r = 0; r < e.length; r += 1)
        e[r] && e[r].m(n, null);
      t = !0;
    },
    p(m, b) {
      if (a = m, b & /*hoverEnable, highlightEnable, floorplanData, getRoomAreaText, getRoomDimensionText, getLabelElement, getRuleDistanceText, roomLabelsEnable, roomAreaEnable, roomNameEnable, roomNameOtherTypeEnable, roomDimensionEnable, ruleLabelsEnable, adaptiveRoomLabelVisibleEnable, highlightData, missingFloorConfig, panoIndex, cameraEnable, cameraImageUrl, lastPanoramaLongitude, compassEnable, northDesc, store, floorIndex*/
      67108860) {
        i = /*floorplanData*/
        a[15].floorDatas;
        let r;
        for (r = 0; r < i.length; r += 1) {
          const h = V(a, i, r);
          e[r] ? (e[r].p(h, b), g(e[r], 1)) : (e[r] = q(h), e[r].c(), g(e[r], 1), e[r].m(n, null));
        }
        for (M(), r = i.length; r < e.length; r += 1)
          f(r);
        w();
      }
    },
    i(m) {
      if (!t) {
        for (let b = 0; b < i.length; b += 1)
          g(e[b]);
        o || Q(() => {
          o = W(n, ne, {
            duration: (
              /*duration*/
              a[0]
            ),
            easing: X
          }), o.start();
        }), t = !0;
      }
    },
    o(m) {
      e = e.filter(Boolean);
      for (let b = 0; b < e.length; b += 1)
        E(e[b]);
      t = !1;
    },
    d(m) {
      m && B(n), Y(e, m);
    }
  };
}
function q(a) {
  let n, o;
  const t = [
    {
      hoverEnable: (
        /*hoverEnable*/
        a[6]
      ),
      highlightEnable: (
        /*highlightEnable*/
        a[7]
      ),
      floorplanData: (
        /*floorplanData*/
        a[15]
      ),
      getRoomAreaText: (
        /*getRoomAreaText*/
        a[18]
      ),
      getRoomDimensionText: (
        /*getRoomDimensionText*/
        a[19]
      ),
      getLabelElement: (
        /*getLabelElement*/
        a[20]
      ),
      getRuleDistanceText: (
        /*getRuleDistanceText*/
        a[21]
      ),
      roomLabelsEnable: (
        /*roomLabelsEnable*/
        a[9]
      ),
      roomAreaEnable: (
        /*roomAreaEnable*/
        a[10]
      ),
      roomNameEnable: (
        /*roomNameEnable*/
        a[11]
      ),
      roomNameOtherTypeEnable: (
        /*roomNameOtherTypeEnable*/
        a[12]
      ),
      roomDimensionEnable: (
        /*roomDimensionEnable*/
        a[13]
      ),
      ruleLabelsEnable: (
        /*ruleLabelsEnable*/
        a[14]
      ),
      adaptiveRoomLabelVisibleEnable: (
        /*adaptiveRoomLabelVisibleEnable*/
        a[22]
      ),
      highlightData: (
        /*highlightData*/
        a[23]
      ),
      missingFloorConfig: (
        /*missingFloorConfig*/
        a[24]
      ),
      panoIndex: (
        /*panoIndex*/
        a[3]
      ),
      cameraEnable: (
        /*cameraEnable*/
        a[5]
      ),
      cameraImageUrl: (
        /*cameraImageUrl*/
        a[17]
      ),
      lastPanoramaLongitude: (
        /*lastPanoramaLongitude*/
        a[16]
      ),
      compassEnable: (
        /*compassEnable*/
        a[8]
      ),
      northDesc: (
        /*northDesc*/
        a[2]
      ),
      store: (
        /*store*/
        a[25]
      )
    },
    {
      floorIndex: (
        /*floorData*/
        a[26].floorIndex
      )
    },
    {
      isCurrent: (
        /*floorData*/
        a[26].floorIndex === /*floorIndex*/
        a[4]
      )
    },
    { items: (
      /*floorData*/
      a[26].items
    ) }
  ];
  let i = {};
  for (let e = 0; e < t.length; e += 1)
    i = Z(i, t[e]);
  return n = new le({ props: i }), {
    c() {
      x(n.$$.fragment);
    },
    m(e, f) {
      p(n, e, f), o = !0;
    },
    p(e, f) {
      const m = f & /*hoverEnable, highlightEnable, floorplanData, getRoomAreaText, getRoomDimensionText, getLabelElement, getRuleDistanceText, roomLabelsEnable, roomAreaEnable, roomNameEnable, roomNameOtherTypeEnable, roomDimensionEnable, ruleLabelsEnable, adaptiveRoomLabelVisibleEnable, highlightData, missingFloorConfig, panoIndex, cameraEnable, cameraImageUrl, lastPanoramaLongitude, compassEnable, northDesc, store, floorIndex*/
      67108860 ? $(t, [
        f & /*hoverEnable, highlightEnable, floorplanData, getRoomAreaText, getRoomDimensionText, getLabelElement, getRuleDistanceText, roomLabelsEnable, roomAreaEnable, roomNameEnable, roomNameOtherTypeEnable, roomDimensionEnable, ruleLabelsEnable, adaptiveRoomLabelVisibleEnable, highlightData, missingFloorConfig, panoIndex, cameraEnable, cameraImageUrl, lastPanoramaLongitude, compassEnable, northDesc, store*/
        67108844 && {
          hoverEnable: (
            /*hoverEnable*/
            e[6]
          ),
          highlightEnable: (
            /*highlightEnable*/
            e[7]
          ),
          floorplanData: (
            /*floorplanData*/
            e[15]
          ),
          getRoomAreaText: (
            /*getRoomAreaText*/
            e[18]
          ),
          getRoomDimensionText: (
            /*getRoomDimensionText*/
            e[19]
          ),
          getLabelElement: (
            /*getLabelElement*/
            e[20]
          ),
          getRuleDistanceText: (
            /*getRuleDistanceText*/
            e[21]
          ),
          roomLabelsEnable: (
            /*roomLabelsEnable*/
            e[9]
          ),
          roomAreaEnable: (
            /*roomAreaEnable*/
            e[10]
          ),
          roomNameEnable: (
            /*roomNameEnable*/
            e[11]
          ),
          roomNameOtherTypeEnable: (
            /*roomNameOtherTypeEnable*/
            e[12]
          ),
          roomDimensionEnable: (
            /*roomDimensionEnable*/
            e[13]
          ),
          ruleLabelsEnable: (
            /*ruleLabelsEnable*/
            e[14]
          ),
          adaptiveRoomLabelVisibleEnable: (
            /*adaptiveRoomLabelVisibleEnable*/
            e[22]
          ),
          highlightData: (
            /*highlightData*/
            e[23]
          ),
          missingFloorConfig: (
            /*missingFloorConfig*/
            e[24]
          ),
          panoIndex: (
            /*panoIndex*/
            e[3]
          ),
          cameraEnable: (
            /*cameraEnable*/
            e[5]
          ),
          cameraImageUrl: (
            /*cameraImageUrl*/
            e[17]
          ),
          lastPanoramaLongitude: (
            /*lastPanoramaLongitude*/
            e[16]
          ),
          compassEnable: (
            /*compassEnable*/
            e[8]
          ),
          northDesc: (
            /*northDesc*/
            e[2]
          ),
          store: (
            /*store*/
            e[25]
          )
        },
        f & /*floorplanData*/
        32768 && {
          floorIndex: (
            /*floorData*/
            e[26].floorIndex
          )
        },
        f & /*floorplanData, floorIndex*/
        32784 && {
          isCurrent: (
            /*floorData*/
            e[26].floorIndex === /*floorIndex*/
            e[4]
          )
        },
        f & /*floorplanData*/
        32768 && { items: (
          /*floorData*/
          e[26].items
        ) }
      ]) : {};
      n.$set(m);
    },
    i(e) {
      o || (g(n.$$.fragment, e), o = !0);
    },
    o(e) {
      E(n.$$.fragment, e), o = !1;
    },
    d(e) {
      ee(n, e);
    }
  };
}
function oe(a) {
  let n, o, t = (
    /*visible*/
    a[1] && y(a)
  );
  return {
    c() {
      t && t.c(), n = H();
    },
    m(i, e) {
      t && t.m(i, e), v(i, n, e), o = !0;
    },
    p(i, [e]) {
      /*visible*/
      i[1] ? t ? (t.p(i, e), e & /*visible*/
      2 && g(t, 1)) : (t = y(i), t.c(), g(t, 1), t.m(n.parentNode, n)) : t && (M(), E(t, 1, 1, () => {
        t = null;
      }), w());
    },
    i(i) {
      o || (g(t), o = !0);
    },
    o(i) {
      E(t), o = !1;
    },
    d(i) {
      t && t.d(i), i && B(n);
    }
  };
}
function te(a, n, o) {
  let { duration: t = 0 } = n, { visible: i } = n, { northDesc: e } = n, { panoIndex: f } = n, { floorIndex: m } = n, { cameraEnable: b } = n, { hoverEnable: r } = n, { highlightEnable: h } = n, { compassEnable: u } = n, { roomLabelsEnable: s } = n, { roomAreaEnable: D } = n, { roomNameEnable: _ } = n, { roomNameOtherTypeEnable: c } = n, { roomDimensionEnable: L } = n, { ruleLabelsEnable: d } = n, { floorplanData: R } = n, { lastPanoramaLongitude: T } = n, { cameraImageUrl: I } = n, { getRoomAreaText: N } = n, { getRoomDimensionText: A } = n, { getLabelElement: C } = n, { getRuleDistanceText: k } = n, { adaptiveRoomLabelVisibleEnable: F } = n, { highlightData: O } = n, { missingFloorConfig: P } = n, { store: U = void 0 } = n;
  return a.$$set = (l) => {
    "duration" in l && o(0, t = l.duration), "visible" in l && o(1, i = l.visible), "northDesc" in l && o(2, e = l.northDesc), "panoIndex" in l && o(3, f = l.panoIndex), "floorIndex" in l && o(4, m = l.floorIndex), "cameraEnable" in l && o(5, b = l.cameraEnable), "hoverEnable" in l && o(6, r = l.hoverEnable), "highlightEnable" in l && o(7, h = l.highlightEnable), "compassEnable" in l && o(8, u = l.compassEnable), "roomLabelsEnable" in l && o(9, s = l.roomLabelsEnable), "roomAreaEnable" in l && o(10, D = l.roomAreaEnable), "roomNameEnable" in l && o(11, _ = l.roomNameEnable), "roomNameOtherTypeEnable" in l && o(12, c = l.roomNameOtherTypeEnable), "roomDimensionEnable" in l && o(13, L = l.roomDimensionEnable), "ruleLabelsEnable" in l && o(14, d = l.ruleLabelsEnable), "floorplanData" in l && o(15, R = l.floorplanData), "lastPanoramaLongitude" in l && o(16, T = l.lastPanoramaLongitude), "cameraImageUrl" in l && o(17, I = l.cameraImageUrl), "getRoomAreaText" in l && o(18, N = l.getRoomAreaText), "getRoomDimensionText" in l && o(19, A = l.getRoomDimensionText), "getLabelElement" in l && o(20, C = l.getLabelElement), "getRuleDistanceText" in l && o(21, k = l.getRuleDistanceText), "adaptiveRoomLabelVisibleEnable" in l && o(22, F = l.adaptiveRoomLabelVisibleEnable), "highlightData" in l && o(23, O = l.highlightData), "missingFloorConfig" in l && o(24, P = l.missingFloorConfig), "store" in l && o(25, U = l.store);
  }, [
    t,
    i,
    e,
    f,
    m,
    b,
    r,
    h,
    u,
    s,
    D,
    _,
    c,
    L,
    d,
    R,
    T,
    I,
    N,
    A,
    C,
    k,
    F,
    O,
    P,
    U
  ];
}
class be extends S {
  constructor(n) {
    super(), j(
      this,
      n,
      te,
      oe,
      z,
      {
        duration: 0,
        visible: 1,
        northDesc: 2,
        panoIndex: 3,
        floorIndex: 4,
        cameraEnable: 5,
        hoverEnable: 6,
        highlightEnable: 7,
        compassEnable: 8,
        roomLabelsEnable: 9,
        roomAreaEnable: 10,
        roomNameEnable: 11,
        roomNameOtherTypeEnable: 12,
        roomDimensionEnable: 13,
        ruleLabelsEnable: 14,
        floorplanData: 15,
        lastPanoramaLongitude: 16,
        cameraImageUrl: 17,
        getRoomAreaText: 18,
        getRoomDimensionText: 19,
        getLabelElement: 20,
        getRuleDistanceText: 21,
        adaptiveRoomLabelVisibleEnable: 22,
        highlightData: 23,
        missingFloorConfig: 24,
        store: 25
      },
      ae
    );
  }
}
export {
  be as Main
};
