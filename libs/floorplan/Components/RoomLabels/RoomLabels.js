import { SvelteComponent as I, init as W, safe_not_equal as w, append_styles as z, empty as T, insert as g, transition_in as _, group_outros as v, transition_out as d, check_outros as y, detach as h, element as q, attr as C, action_destroyer as M, listen as O, update_keyed_each as S, outro_and_destroy_block as j, run_all as B, assign as F, create_component as G, mount_component as H, get_spread_update as J, destroy_component as K } from "../../../vendor/svelte/internal/index.js";
import { RoomLabel as P } from "./RoomLabel.js";
import { svelteResizeObserver as Q } from "../../../shared-utils/svelte/resizeObserver.js";
function U(r) {
  z(r, "svelte-13xux0b", ".floorplan-plugin__room-labels.svelte-13xux0b{width:100%;height:100%;position:absolute;left:0;top:0;z-index:20;pointer-events:none}");
}
function L(r, e, o) {
  const l = r.slice();
  return l[14] = e[o], l;
}
function k(r) {
  let e, o = [], l = /* @__PURE__ */ new Map(), t, f, u, n = (
    /*rooms*/
    r[10]
  );
  const b = (i) => (
    /*room*/
    i[14].id
  );
  for (let i = 0; i < n.length; i += 1) {
    let m = L(r, n, i), s = b(m);
    l.set(s, o[i] = A(s, m));
  }
  return {
    c() {
      e = q("div");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      C(e, "class", "floorplan-plugin__room-labels svelte-13xux0b");
    },
    m(i, m) {
      g(i, e, m);
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(e, null);
      t = !0, f || (u = [
        M(Q.call(null, e)),
        O(
          e,
          "clientWidth",
          /*clientWidth_handler*/
          r[13]
        )
      ], f = !0);
    },
    p(i, m) {
      m & /*pxmm, rooms, hoveredRoom, roomAreaEnable, roomNameEnable, roomDimensionEnable, getLabelElement, getRoomAreaText, getRoomDimensionText, adaptiveRoomLabelVisibleEnable*/
      1791 && (n = /*rooms*/
      i[10], v(), o = S(o, m, b, 1, i, n, l, e, j, A, null, L), y());
    },
    i(i) {
      if (!t) {
        for (let m = 0; m < n.length; m += 1)
          _(o[m]);
        t = !0;
      }
    },
    o(i) {
      for (let m = 0; m < o.length; m += 1)
        d(o[m]);
      t = !1;
    },
    d(i) {
      i && h(e);
      for (let m = 0; m < o.length; m += 1)
        o[m].d();
      f = !1, B(u);
    }
  };
}
function A(r, e) {
  let o, l, t;
  const f = [
    {
      pxmm: (
        /*pxmm*/
        e[9]
      ),
      room: (
        /*room*/
        e[14]
      ),
      hoveredRoom: (
        /*hoveredRoom*/
        e[3]
      ),
      roomAreaEnable: (
        /*roomAreaEnable*/
        e[0]
      ),
      roomNameEnable: (
        /*roomNameEnable*/
        e[1]
      ),
      roomDimensionEnable: (
        /*roomDimensionEnable*/
        e[2]
      ),
      getLabelElement: (
        /*getLabelElement*/
        e[6]
      ),
      getRoomAreaText: (
        /*getRoomAreaText*/
        e[4]
      ),
      getRoomDimensionText: (
        /*getRoomDimensionText*/
        e[5]
      ),
      adaptiveRoomLabelVisibleEnable: (
        /*adaptiveRoomLabelVisibleEnable*/
        e[7]
      )
    }
  ];
  let u = {};
  for (let n = 0; n < f.length; n += 1)
    u = F(u, f[n]);
  return l = new P({ props: u }), {
    key: r,
    first: null,
    c() {
      o = T(), G(l.$$.fragment), this.first = o;
    },
    m(n, b) {
      g(n, o, b), H(l, n, b), t = !0;
    },
    p(n, b) {
      e = n;
      const i = b & /*pxmm, rooms, hoveredRoom, roomAreaEnable, roomNameEnable, roomDimensionEnable, getLabelElement, getRoomAreaText, getRoomDimensionText, adaptiveRoomLabelVisibleEnable*/
      1791 ? J(f, [
        {
          pxmm: (
            /*pxmm*/
            e[9]
          ),
          room: (
            /*room*/
            e[14]
          ),
          hoveredRoom: (
            /*hoveredRoom*/
            e[3]
          ),
          roomAreaEnable: (
            /*roomAreaEnable*/
            e[0]
          ),
          roomNameEnable: (
            /*roomNameEnable*/
            e[1]
          ),
          roomDimensionEnable: (
            /*roomDimensionEnable*/
            e[2]
          ),
          getLabelElement: (
            /*getLabelElement*/
            e[6]
          ),
          getRoomAreaText: (
            /*getRoomAreaText*/
            e[4]
          ),
          getRoomDimensionText: (
            /*getRoomDimensionText*/
            e[5]
          ),
          adaptiveRoomLabelVisibleEnable: (
            /*adaptiveRoomLabelVisibleEnable*/
            e[7]
          )
        }
      ]) : {};
      l.$set(i);
    },
    i(n) {
      t || (_(l.$$.fragment, n), t = !0);
    },
    o(n) {
      d(l.$$.fragment, n), t = !1;
    },
    d(n) {
      n && h(o), K(l, n);
    }
  };
}
function X(r) {
  let e, o, l = (
    /*rooms*/
    r[10] && k(r)
  );
  return {
    c() {
      l && l.c(), e = T();
    },
    m(t, f) {
      l && l.m(t, f), g(t, e, f), o = !0;
    },
    p(t, [f]) {
      /*rooms*/
      t[10] ? l ? (l.p(t, f), f & /*rooms*/
      1024 && _(l, 1)) : (l = k(t), l.c(), _(l, 1), l.m(e.parentNode, e)) : l && (v(), d(l, 1, 1, () => {
        l = null;
      }), y());
    },
    i(t) {
      o || (_(l), o = !0);
    },
    o(t) {
      d(l), o = !1;
    },
    d(t) {
      l && l.d(t), t && h(e);
    }
  };
}
function Y(r, e, o) {
  let l, { floorIndex: t } = e, { roomAreaEnable: f } = e, { roomNameEnable: u } = e, { roomDimensionEnable: n } = e, { floorplanData: b } = e, { hoveredRoom: i } = e, { getRoomAreaText: m } = e, { getRoomDimensionText: s } = e, { getLabelElement: E } = e, { adaptiveRoomLabelVisibleEnable: R } = e, c = 0, D = 0;
  const x = (a) => {
    o(8, c = a.detail);
  };
  return r.$$set = (a) => {
    "floorIndex" in a && o(11, t = a.floorIndex), "roomAreaEnable" in a && o(0, f = a.roomAreaEnable), "roomNameEnable" in a && o(1, u = a.roomNameEnable), "roomDimensionEnable" in a && o(2, n = a.roomDimensionEnable), "floorplanData" in a && o(12, b = a.floorplanData), "hoveredRoom" in a && o(3, i = a.hoveredRoom), "getRoomAreaText" in a && o(4, m = a.getRoomAreaText), "getRoomDimensionText" in a && o(5, s = a.getRoomDimensionText), "getLabelElement" in a && o(6, E = a.getLabelElement), "adaptiveRoomLabelVisibleEnable" in a && o(7, R = a.adaptiveRoomLabelVisibleEnable);
  }, r.$$.update = () => {
    if (r.$$.dirty & /*floorplanData, floorIndex*/
    6144 && o(10, l = b.floorDatas[t].rooms), r.$$.dirty & /*floorplanData, clientWidth*/
    4352) {
      const { max: a, min: N } = b.bounding, V = a.x - N.x;
      o(9, D = c / V);
    }
  }, [
    f,
    u,
    n,
    i,
    m,
    s,
    E,
    R,
    c,
    D,
    l,
    t,
    b,
    x
  ];
}
class ee extends I {
  constructor(e) {
    super(), W(
      this,
      e,
      Y,
      X,
      w,
      {
        floorIndex: 11,
        roomAreaEnable: 0,
        roomNameEnable: 1,
        roomDimensionEnable: 2,
        floorplanData: 12,
        hoveredRoom: 3,
        getRoomAreaText: 4,
        getRoomDimensionText: 5,
        getLabelElement: 6,
        adaptiveRoomLabelVisibleEnable: 7
      },
      U
    );
  }
}
export {
  ee as RoomLabels
};
