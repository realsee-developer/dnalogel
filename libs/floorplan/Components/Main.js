import { SvelteComponent as j, init as y, safe_not_equal as z, append_styles as G, empty as H, insert as w, transition_in as g, transition_out as u, check_outros as B, detach as M, element as J, attr as K, group_outros as S, add_render_callback as O, create_in_transition as Q, identity as W, destroy_each as X, assign as Y, create_component as Z, mount_component as x, get_spread_update as p, destroy_component as $ } from "../../vendor/svelte/internal/index.js";
import { fade as ee } from "../../vendor/svelte/transition/index.js";
import { CurrentFloor as ne } from "./CurrentFloor.js";
function le(a) {
  G(a, "svelte-86bqav", ".floorplan-main.svelte-86bqav{width:100%;height:100%;pointer-events:none}");
}
function V(a, n, o) {
  const t = a.slice();
  return t[25] = n[o], t;
}
function v(a) {
  let n, o, t, i = (
    /*floorplanData*/
    a[14].floorDatas
  ), e = [];
  for (let r = 0; r < i.length; r += 1)
    e[r] = q(V(a, i, r));
  const f = (r) => u(e[r], 1, 1, () => {
    e[r] = null;
  });
  return {
    c() {
      n = J("div");
      for (let r = 0; r < e.length; r += 1)
        e[r].c();
      K(n, "class", "floorplan-main svelte-86bqav");
    },
    m(r, b) {
      w(r, n, b);
      for (let m = 0; m < e.length; m += 1)
        e[m] && e[m].m(n, null);
      t = !0;
    },
    p(r, b) {
      if (a = r, b & /*hoverEnable, highlightEnable, floorplanData, getRoomAreaText, getRoomDimensionText, getLabelElement, getRuleDistanceText, roomLabelsEnable, roomAreaEnable, roomNameEnable, roomDimensionEnable, ruleLabelsEnable, adaptiveRoomLabelVisibleEnable, highlightData, missingFloorConfig, panoIndex, cameraEnable, cameraImageUrl, lastPanoramaLongitude, compassEnable, northDesc, store, floorIndex*/
      33554428) {
        i = /*floorplanData*/
        a[14].floorDatas;
        let m;
        for (m = 0; m < i.length; m += 1) {
          const h = V(a, i, m);
          e[m] ? (e[m].p(h, b), g(e[m], 1)) : (e[m] = q(h), e[m].c(), g(e[m], 1), e[m].m(n, null));
        }
        for (S(), m = i.length; m < e.length; m += 1)
          f(m);
        B();
      }
    },
    i(r) {
      if (!t) {
        for (let b = 0; b < i.length; b += 1)
          g(e[b]);
        o || O(() => {
          o = Q(n, ee, {
            duration: (
              /*duration*/
              a[0]
            ),
            easing: W
          }), o.start();
        }), t = !0;
      }
    },
    o(r) {
      e = e.filter(Boolean);
      for (let b = 0; b < e.length; b += 1)
        u(e[b]);
      t = !1;
    },
    d(r) {
      r && M(n), X(e, r);
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
      ),
      store: (
        /*store*/
        a[24]
      )
    },
    {
      floorIndex: (
        /*floorData*/
        a[25].floorIndex
      )
    },
    {
      isCurrent: (
        /*floorData*/
        a[25].floorIndex === /*floorIndex*/
        a[4]
      )
    }
  ];
  let i = {};
  for (let e = 0; e < t.length; e += 1)
    i = Y(i, t[e]);
  return n = new ne({ props: i }), {
    c() {
      Z(n.$$.fragment);
    },
    m(e, f) {
      x(n, e, f), o = !0;
    },
    p(e, f) {
      const r = f & /*hoverEnable, highlightEnable, floorplanData, getRoomAreaText, getRoomDimensionText, getLabelElement, getRuleDistanceText, roomLabelsEnable, roomAreaEnable, roomNameEnable, roomDimensionEnable, ruleLabelsEnable, adaptiveRoomLabelVisibleEnable, highlightData, missingFloorConfig, panoIndex, cameraEnable, cameraImageUrl, lastPanoramaLongitude, compassEnable, northDesc, store, floorIndex*/
      33554428 ? p(t, [
        f & /*hoverEnable, highlightEnable, floorplanData, getRoomAreaText, getRoomDimensionText, getLabelElement, getRuleDistanceText, roomLabelsEnable, roomAreaEnable, roomNameEnable, roomDimensionEnable, ruleLabelsEnable, adaptiveRoomLabelVisibleEnable, highlightData, missingFloorConfig, panoIndex, cameraEnable, cameraImageUrl, lastPanoramaLongitude, compassEnable, northDesc, store*/
        33554412 && {
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
          ),
          store: (
            /*store*/
            e[24]
          )
        },
        f & /*floorplanData*/
        16384 && {
          floorIndex: (
            /*floorData*/
            e[25].floorIndex
          )
        },
        f & /*floorplanData, floorIndex*/
        16400 && {
          isCurrent: (
            /*floorData*/
            e[25].floorIndex === /*floorIndex*/
            e[4]
          )
        }
      ]) : {};
      n.$set(r);
    },
    i(e) {
      o || (g(n.$$.fragment, e), o = !0);
    },
    o(e) {
      u(n.$$.fragment, e), o = !1;
    },
    d(e) {
      $(n, e);
    }
  };
}
function ae(a) {
  let n, o, t = (
    /*visible*/
    a[1] && v(a)
  );
  return {
    c() {
      t && t.c(), n = H();
    },
    m(i, e) {
      t && t.m(i, e), w(i, n, e), o = !0;
    },
    p(i, [e]) {
      /*visible*/
      i[1] ? t ? (t.p(i, e), e & /*visible*/
      2 && g(t, 1)) : (t = v(i), t.c(), g(t, 1), t.m(n.parentNode, n)) : t && (S(), u(t, 1, 1, () => {
        t = null;
      }), B());
    },
    i(i) {
      o || (g(t), o = !0);
    },
    o(i) {
      u(t), o = !1;
    },
    d(i) {
      t && t.d(i), i && M(n);
    }
  };
}
function oe(a, n, o) {
  let { duration: t = 0 } = n, { visible: i } = n, { northDesc: e } = n, { panoIndex: f } = n, { floorIndex: r } = n, { cameraEnable: b } = n, { hoverEnable: m } = n, { highlightEnable: h } = n, { compassEnable: E } = n, { roomLabelsEnable: s } = n, { roomAreaEnable: D } = n, { roomNameEnable: c } = n, { roomDimensionEnable: _ } = n, { ruleLabelsEnable: d } = n, { floorplanData: L } = n, { lastPanoramaLongitude: R } = n, { cameraImageUrl: I } = n, { getRoomAreaText: T } = n, { getRoomDimensionText: A } = n, { getLabelElement: C } = n, { getRuleDistanceText: k } = n, { adaptiveRoomLabelVisibleEnable: F } = n, { highlightData: N } = n, { missingFloorConfig: P } = n, { store: U = void 0 } = n;
  return a.$$set = (l) => {
    "duration" in l && o(0, t = l.duration), "visible" in l && o(1, i = l.visible), "northDesc" in l && o(2, e = l.northDesc), "panoIndex" in l && o(3, f = l.panoIndex), "floorIndex" in l && o(4, r = l.floorIndex), "cameraEnable" in l && o(5, b = l.cameraEnable), "hoverEnable" in l && o(6, m = l.hoverEnable), "highlightEnable" in l && o(7, h = l.highlightEnable), "compassEnable" in l && o(8, E = l.compassEnable), "roomLabelsEnable" in l && o(9, s = l.roomLabelsEnable), "roomAreaEnable" in l && o(10, D = l.roomAreaEnable), "roomNameEnable" in l && o(11, c = l.roomNameEnable), "roomDimensionEnable" in l && o(12, _ = l.roomDimensionEnable), "ruleLabelsEnable" in l && o(13, d = l.ruleLabelsEnable), "floorplanData" in l && o(14, L = l.floorplanData), "lastPanoramaLongitude" in l && o(15, R = l.lastPanoramaLongitude), "cameraImageUrl" in l && o(16, I = l.cameraImageUrl), "getRoomAreaText" in l && o(17, T = l.getRoomAreaText), "getRoomDimensionText" in l && o(18, A = l.getRoomDimensionText), "getLabelElement" in l && o(19, C = l.getLabelElement), "getRuleDistanceText" in l && o(20, k = l.getRuleDistanceText), "adaptiveRoomLabelVisibleEnable" in l && o(21, F = l.adaptiveRoomLabelVisibleEnable), "highlightData" in l && o(22, N = l.highlightData), "missingFloorConfig" in l && o(23, P = l.missingFloorConfig), "store" in l && o(24, U = l.store);
  }, [
    t,
    i,
    e,
    f,
    r,
    b,
    m,
    h,
    E,
    s,
    D,
    c,
    _,
    d,
    L,
    R,
    I,
    T,
    A,
    C,
    k,
    F,
    N,
    P,
    U
  ];
}
class me extends j {
  constructor(n) {
    super(), y(
      this,
      n,
      oe,
      ae,
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
        missingFloorConfig: 23,
        store: 24
      },
      le
    );
  }
}
export {
  me as Main
};
