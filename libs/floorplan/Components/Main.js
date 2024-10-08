import { SvelteComponent as S, init as j, safe_not_equal as y, append_styles as z, empty as G, insert as q, transition_in as g, transition_out as u, check_outros as w, detach as B, element as H, attr as J, group_outros as M, add_render_callback as K, create_in_transition as O, identity as Q, destroy_each as W, assign as X, create_component as Y, mount_component as Z, get_spread_update as x, destroy_component as p } from "../../vendor/svelte/internal/index.js";
import { fade as $ } from "../../vendor/svelte/transition/index.js";
import { CurrentFloor as ee } from "./CurrentFloor.js";
function ne(a) {
  z(a, "svelte-86bqav", ".floorplan-main.svelte-86bqav{width:100%;height:100%;pointer-events:none}");
}
function P(a, n, o) {
  const t = a.slice();
  return t[24] = n[o], t;
}
function U(a) {
  let n, o, t, i = (
    /*floorplanData*/
    a[14].floorDatas
  ), e = [];
  for (let m = 0; m < i.length; m += 1)
    e[m] = V(P(a, i, m));
  const f = (m) => u(e[m], 1, 1, () => {
    e[m] = null;
  });
  return {
    c() {
      n = H("div");
      for (let m = 0; m < e.length; m += 1)
        e[m].c();
      J(n, "class", "floorplan-main svelte-86bqav");
    },
    m(m, b) {
      q(m, n, b);
      for (let r = 0; r < e.length; r += 1)
        e[r] && e[r].m(n, null);
      t = !0;
    },
    p(m, b) {
      if (a = m, b & /*hoverEnable, highlightEnable, floorplanData, getRoomAreaText, getRoomDimensionText, getLabelElement, getRuleDistanceText, roomLabelsEnable, roomAreaEnable, roomNameEnable, roomDimensionEnable, ruleLabelsEnable, adaptiveRoomLabelVisibleEnable, highlightData, missingFloorConfig, panoIndex, cameraEnable, cameraImageUrl, lastPanoramaLongitude, compassEnable, northDesc, floorIndex*/
      16777212) {
        i = /*floorplanData*/
        a[14].floorDatas;
        let r;
        for (r = 0; r < i.length; r += 1) {
          const h = P(a, i, r);
          e[r] ? (e[r].p(h, b), g(e[r], 1)) : (e[r] = V(h), e[r].c(), g(e[r], 1), e[r].m(n, null));
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
        o || K(() => {
          o = O(n, $, {
            duration: (
              /*duration*/
              a[0]
            ),
            easing: Q
          }), o.start();
        }), t = !0;
      }
    },
    o(m) {
      e = e.filter(Boolean);
      for (let b = 0; b < e.length; b += 1)
        u(e[b]);
      t = !1;
    },
    d(m) {
      m && B(n), W(e, m);
    }
  };
}
function V(a) {
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
        a[14]
      ),
      getRoomAreaText: (
        /*getRoomAreaText*/
        a[17]
      ),
      getRoomDimensionText: (
        /*getRoomDimensionText*/
        a[18]
      ),
      getLabelElement: (
        /*getLabelElement*/
        a[19]
      ),
      getRuleDistanceText: (
        /*getRuleDistanceText*/
        a[20]
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
      roomDimensionEnable: (
        /*roomDimensionEnable*/
        a[12]
      ),
      ruleLabelsEnable: (
        /*ruleLabelsEnable*/
        a[13]
      ),
      adaptiveRoomLabelVisibleEnable: (
        /*adaptiveRoomLabelVisibleEnable*/
        a[21]
      ),
      highlightData: (
        /*highlightData*/
        a[22]
      ),
      missingFloorConfig: (
        /*missingFloorConfig*/
        a[23]
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
        a[16]
      ),
      lastPanoramaLongitude: (
        /*lastPanoramaLongitude*/
        a[15]
      ),
      compassEnable: (
        /*compassEnable*/
        a[8]
      ),
      northDesc: (
        /*northDesc*/
        a[2]
      )
    },
    {
      floorIndex: (
        /*floorData*/
        a[24].floorIndex
      )
    },
    {
      isCurrent: (
        /*floorData*/
        a[24].floorIndex === /*floorIndex*/
        a[4]
      )
    }
  ];
  let i = {};
  for (let e = 0; e < t.length; e += 1)
    i = X(i, t[e]);
  return n = new ee({ props: i }), {
    c() {
      Y(n.$$.fragment);
    },
    m(e, f) {
      Z(n, e, f), o = !0;
    },
    p(e, f) {
      const m = f & /*hoverEnable, highlightEnable, floorplanData, getRoomAreaText, getRoomDimensionText, getLabelElement, getRuleDistanceText, roomLabelsEnable, roomAreaEnable, roomNameEnable, roomDimensionEnable, ruleLabelsEnable, adaptiveRoomLabelVisibleEnable, highlightData, missingFloorConfig, panoIndex, cameraEnable, cameraImageUrl, lastPanoramaLongitude, compassEnable, northDesc, floorIndex*/
      16777212 ? x(t, [
        f & /*hoverEnable, highlightEnable, floorplanData, getRoomAreaText, getRoomDimensionText, getLabelElement, getRuleDistanceText, roomLabelsEnable, roomAreaEnable, roomNameEnable, roomDimensionEnable, ruleLabelsEnable, adaptiveRoomLabelVisibleEnable, highlightData, missingFloorConfig, panoIndex, cameraEnable, cameraImageUrl, lastPanoramaLongitude, compassEnable, northDesc*/
        16777196 && {
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
            e[14]
          ),
          getRoomAreaText: (
            /*getRoomAreaText*/
            e[17]
          ),
          getRoomDimensionText: (
            /*getRoomDimensionText*/
            e[18]
          ),
          getLabelElement: (
            /*getLabelElement*/
            e[19]
          ),
          getRuleDistanceText: (
            /*getRuleDistanceText*/
            e[20]
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
          roomDimensionEnable: (
            /*roomDimensionEnable*/
            e[12]
          ),
          ruleLabelsEnable: (
            /*ruleLabelsEnable*/
            e[13]
          ),
          adaptiveRoomLabelVisibleEnable: (
            /*adaptiveRoomLabelVisibleEnable*/
            e[21]
          ),
          highlightData: (
            /*highlightData*/
            e[22]
          ),
          missingFloorConfig: (
            /*missingFloorConfig*/
            e[23]
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
            e[16]
          ),
          lastPanoramaLongitude: (
            /*lastPanoramaLongitude*/
            e[15]
          ),
          compassEnable: (
            /*compassEnable*/
            e[8]
          ),
          northDesc: (
            /*northDesc*/
            e[2]
          )
        },
        f & /*floorplanData*/
        16384 && {
          floorIndex: (
            /*floorData*/
            e[24].floorIndex
          )
        },
        f & /*floorplanData, floorIndex*/
        16400 && {
          isCurrent: (
            /*floorData*/
            e[24].floorIndex === /*floorIndex*/
            e[4]
          )
        }
      ]) : {};
      n.$set(m);
    },
    i(e) {
      o || (g(n.$$.fragment, e), o = !0);
    },
    o(e) {
      u(n.$$.fragment, e), o = !1;
    },
    d(e) {
      p(n, e);
    }
  };
}
function le(a) {
  let n, o, t = (
    /*visible*/
    a[1] && U(a)
  );
  return {
    c() {
      t && t.c(), n = G();
    },
    m(i, e) {
      t && t.m(i, e), q(i, n, e), o = !0;
    },
    p(i, [e]) {
      /*visible*/
      i[1] ? t ? (t.p(i, e), e & /*visible*/
      2 && g(t, 1)) : (t = U(i), t.c(), g(t, 1), t.m(n.parentNode, n)) : t && (M(), u(t, 1, 1, () => {
        t = null;
      }), w());
    },
    i(i) {
      o || (g(t), o = !0);
    },
    o(i) {
      u(t), o = !1;
    },
    d(i) {
      t && t.d(i), i && B(n);
    }
  };
}
function ae(a, n, o) {
  let { duration: t = 0 } = n, { visible: i } = n, { northDesc: e } = n, { panoIndex: f } = n, { floorIndex: m } = n, { cameraEnable: b } = n, { hoverEnable: r } = n, { highlightEnable: h } = n, { compassEnable: E } = n, { roomLabelsEnable: s } = n, { roomAreaEnable: c } = n, { roomNameEnable: D } = n, { roomDimensionEnable: _ } = n, { ruleLabelsEnable: L } = n, { floorplanData: d } = n, { lastPanoramaLongitude: R } = n, { cameraImageUrl: I } = n, { getRoomAreaText: T } = n, { getRoomDimensionText: A } = n, { getLabelElement: C } = n, { getRuleDistanceText: k } = n, { adaptiveRoomLabelVisibleEnable: F } = n, { highlightData: N } = n, { missingFloorConfig: v } = n;
  return a.$$set = (l) => {
    "duration" in l && o(0, t = l.duration), "visible" in l && o(1, i = l.visible), "northDesc" in l && o(2, e = l.northDesc), "panoIndex" in l && o(3, f = l.panoIndex), "floorIndex" in l && o(4, m = l.floorIndex), "cameraEnable" in l && o(5, b = l.cameraEnable), "hoverEnable" in l && o(6, r = l.hoverEnable), "highlightEnable" in l && o(7, h = l.highlightEnable), "compassEnable" in l && o(8, E = l.compassEnable), "roomLabelsEnable" in l && o(9, s = l.roomLabelsEnable), "roomAreaEnable" in l && o(10, c = l.roomAreaEnable), "roomNameEnable" in l && o(11, D = l.roomNameEnable), "roomDimensionEnable" in l && o(12, _ = l.roomDimensionEnable), "ruleLabelsEnable" in l && o(13, L = l.ruleLabelsEnable), "floorplanData" in l && o(14, d = l.floorplanData), "lastPanoramaLongitude" in l && o(15, R = l.lastPanoramaLongitude), "cameraImageUrl" in l && o(16, I = l.cameraImageUrl), "getRoomAreaText" in l && o(17, T = l.getRoomAreaText), "getRoomDimensionText" in l && o(18, A = l.getRoomDimensionText), "getLabelElement" in l && o(19, C = l.getLabelElement), "getRuleDistanceText" in l && o(20, k = l.getRuleDistanceText), "adaptiveRoomLabelVisibleEnable" in l && o(21, F = l.adaptiveRoomLabelVisibleEnable), "highlightData" in l && o(22, N = l.highlightData), "missingFloorConfig" in l && o(23, v = l.missingFloorConfig);
  }, [
    t,
    i,
    e,
    f,
    m,
    b,
    r,
    h,
    E,
    s,
    c,
    D,
    _,
    L,
    d,
    R,
    I,
    T,
    A,
    C,
    k,
    F,
    N,
    v
  ];
}
class me extends S {
  constructor(n) {
    super(), j(
      this,
      n,
      ae,
      le,
      y,
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
        roomDimensionEnable: 12,
        ruleLabelsEnable: 13,
        floorplanData: 14,
        lastPanoramaLongitude: 15,
        cameraImageUrl: 16,
        getRoomAreaText: 17,
        getRoomDimensionText: 18,
        getLabelElement: 19,
        getRuleDistanceText: 20,
        adaptiveRoomLabelVisibleEnable: 21,
        highlightData: 22,
        missingFloorConfig: 23
      },
      ne
    );
  }
}
export {
  me as Main
};
