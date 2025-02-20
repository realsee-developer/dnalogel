import { SvelteComponent as I, init as W, safe_not_equal as w, append_styles as z, empty as k, insert as g, transition_in as _, group_outros as A, transition_out as d, check_outros as v, detach as E, element as q, attr as C, action_destroyer as M, listen as S, update_keyed_each as j, outro_and_destroy_block as B, run_all as F, assign as G, create_component as H, mount_component as J, get_spread_update as K, destroy_component as P } from "../../../vendor/svelte/internal/index.js";
import { RoomLabel as Q } from "./RoomLabel.js";
import { svelteResizeObserver as U } from "../../../shared-utils/svelte/resizeObserver.js";
function X(r) {
  z(r, "svelte-13xux0b", ".floorplan-plugin__room-labels.svelte-13xux0b{width:100%;height:100%;position:absolute;left:0;top:0;z-index:20;pointer-events:none}");
}
function y(r, e, o) {
  const l = r.slice();
  return l[15] = e[o], l;
}
function L(r) {
  let e, o = [], l = /* @__PURE__ */ new Map(), a, b, u, m = (
    /*rooms*/
    r[11]
  );
  const f = (t) => (
    /*room*/
    t[15].id
  );
  for (let t = 0; t < m.length; t += 1) {
    let i = y(r, m, t), s = f(i);
    l.set(s, o[t] = N(s, i));
  }
  return {
    c() {
      e = q("div");
      for (let t = 0; t < o.length; t += 1)
        o[t].c();
      C(e, "class", "floorplan-plugin__room-labels svelte-13xux0b");
    },
    m(t, i) {
      g(t, e, i);
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(e, null);
      a = !0, b || (u = [
        M(U.call(null, e)),
        S(
          e,
          "clientWidth",
          /*clientWidth_handler*/
          r[14]
        )
      ], b = !0);
    },
    p(t, i) {
      i & /*pxmm, rooms, hoveredRoom, roomAreaEnable, roomNameEnable, roomNameOtherTypeEnable, roomDimensionEnable, getLabelElement, getRoomAreaText, getRoomDimensionText, adaptiveRoomLabelVisibleEnable*/
      3583 && (m = /*rooms*/
      t[11], A(), o = j(o, i, f, 1, t, m, l, e, B, N, null, y), v());
    },
    i(t) {
      if (!a) {
        for (let i = 0; i < m.length; i += 1)
          _(o[i]);
        a = !0;
      }
    },
    o(t) {
      for (let i = 0; i < o.length; i += 1)
        d(o[i]);
      a = !1;
    },
    d(t) {
      t && E(e);
      for (let i = 0; i < o.length; i += 1)
        o[i].d();
      b = !1, F(u);
    }
  };
}
function N(r, e) {
  let o, l, a;
  const b = [
    {
      pxmm: (
        /*pxmm*/
        e[10]
      ),
      room: (
        /*room*/
        e[15]
      ),
      hoveredRoom: (
        /*hoveredRoom*/
        e[4]
      ),
      roomAreaEnable: (
        /*roomAreaEnable*/
        e[0]
      ),
      roomNameEnable: (
        /*roomNameEnable*/
        e[1]
      ),
      roomNameOtherTypeEnable: (
        /*roomNameOtherTypeEnable*/
        e[2]
      ),
      roomDimensionEnable: (
        /*roomDimensionEnable*/
        e[3]
      ),
      getLabelElement: (
        /*getLabelElement*/
        e[7]
      ),
      getRoomAreaText: (
        /*getRoomAreaText*/
        e[5]
      ),
      getRoomDimensionText: (
        /*getRoomDimensionText*/
        e[6]
      ),
      adaptiveRoomLabelVisibleEnable: (
        /*adaptiveRoomLabelVisibleEnable*/
        e[8]
      )
    }
  ];
  let u = {};
  for (let m = 0; m < b.length; m += 1)
    u = G(u, b[m]);
  return l = new Q({ props: u }), {
    key: r,
    first: null,
    c() {
      o = k(), H(l.$$.fragment), this.first = o;
    },
    m(m, f) {
      g(m, o, f), J(l, m, f), a = !0;
    },
    p(m, f) {
      e = m;
      const t = f & /*pxmm, rooms, hoveredRoom, roomAreaEnable, roomNameEnable, roomNameOtherTypeEnable, roomDimensionEnable, getLabelElement, getRoomAreaText, getRoomDimensionText, adaptiveRoomLabelVisibleEnable*/
      3583 ? K(b, [
        {
          pxmm: (
            /*pxmm*/
            e[10]
          ),
          room: (
            /*room*/
            e[15]
          ),
          hoveredRoom: (
            /*hoveredRoom*/
            e[4]
          ),
          roomAreaEnable: (
            /*roomAreaEnable*/
            e[0]
          ),
          roomNameEnable: (
            /*roomNameEnable*/
            e[1]
          ),
          roomNameOtherTypeEnable: (
            /*roomNameOtherTypeEnable*/
            e[2]
          ),
          roomDimensionEnable: (
            /*roomDimensionEnable*/
            e[3]
          ),
          getLabelElement: (
            /*getLabelElement*/
            e[7]
          ),
          getRoomAreaText: (
            /*getRoomAreaText*/
            e[5]
          ),
          getRoomDimensionText: (
            /*getRoomDimensionText*/
            e[6]
          ),
          adaptiveRoomLabelVisibleEnable: (
            /*adaptiveRoomLabelVisibleEnable*/
            e[8]
          )
        }
      ]) : {};
      l.$set(t);
    },
    i(m) {
      a || (_(l.$$.fragment, m), a = !0);
    },
    o(m) {
      d(l.$$.fragment, m), a = !1;
    },
    d(m) {
      m && E(o), P(l, m);
    }
  };
}
function Y(r) {
  let e, o, l = (
    /*rooms*/
    r[11] && L(r)
  );
  return {
    c() {
      l && l.c(), e = k();
    },
    m(a, b) {
      l && l.m(a, b), g(a, e, b), o = !0;
    },
    p(a, [b]) {
      /*rooms*/
      a[11] ? l ? (l.p(a, b), b & /*rooms*/
      2048 && _(l, 1)) : (l = L(a), l.c(), _(l, 1), l.m(e.parentNode, e)) : l && (A(), d(l, 1, 1, () => {
        l = null;
      }), v());
    },
    i(a) {
      o || (_(l), o = !0);
    },
    o(a) {
      d(l), o = !1;
    },
    d(a) {
      l && l.d(a), a && E(e);
    }
  };
}
function Z(r, e, o) {
  let l, { floorIndex: a } = e, { roomAreaEnable: b } = e, { roomNameEnable: u } = e, { roomNameOtherTypeEnable: m } = e, { roomDimensionEnable: f } = e, { floorplanData: t } = e, { hoveredRoom: i } = e, { getRoomAreaText: s } = e, { getRoomDimensionText: c } = e, { getLabelElement: R } = e, { adaptiveRoomLabelVisibleEnable: T } = e, h = 0, D = 0;
  const O = (n) => {
    o(9, h = n.detail);
  };
  return r.$$set = (n) => {
    "floorIndex" in n && o(12, a = n.floorIndex), "roomAreaEnable" in n && o(0, b = n.roomAreaEnable), "roomNameEnable" in n && o(1, u = n.roomNameEnable), "roomNameOtherTypeEnable" in n && o(2, m = n.roomNameOtherTypeEnable), "roomDimensionEnable" in n && o(3, f = n.roomDimensionEnable), "floorplanData" in n && o(13, t = n.floorplanData), "hoveredRoom" in n && o(4, i = n.hoveredRoom), "getRoomAreaText" in n && o(5, s = n.getRoomAreaText), "getRoomDimensionText" in n && o(6, c = n.getRoomDimensionText), "getLabelElement" in n && o(7, R = n.getLabelElement), "adaptiveRoomLabelVisibleEnable" in n && o(8, T = n.adaptiveRoomLabelVisibleEnable);
  }, r.$$.update = () => {
    if (r.$$.dirty & /*floorplanData, floorIndex*/
    12288 && o(11, l = t.floorDatas[a].rooms), r.$$.dirty & /*floorplanData, clientWidth*/
    8704) {
      const { max: n, min: x } = t.bounding, V = n.x - x.x;
      o(10, D = h / V);
    }
  }, [
    b,
    u,
    m,
    f,
    i,
    s,
    c,
    R,
    T,
    h,
    D,
    l,
    a,
    t,
    O
  ];
}
class oe extends I {
  constructor(e) {
    super(), W(
      this,
      e,
      Z,
      Y,
      w,
      {
        floorIndex: 12,
        roomAreaEnable: 0,
        roomNameEnable: 1,
        roomNameOtherTypeEnable: 2,
        roomDimensionEnable: 3,
        floorplanData: 13,
        hoveredRoom: 4,
        getRoomAreaText: 5,
        getRoomDimensionText: 6,
        getLabelElement: 7,
        adaptiveRoomLabelVisibleEnable: 8
      },
      X
    );
  }
}
export {
  oe as RoomLabels
};
