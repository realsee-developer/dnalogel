import { SvelteComponent as I, init as W, safe_not_equal as w, append_styles as C, empty as v, insert as h, transition_in as _, group_outros as z, transition_out as g, check_outros as O, detach as E, element as F, attr as M, action_destroyer as j, listen as q, update_keyed_each as G, outro_and_destroy_block as B, run_all as H, assign as J, create_component as K, mount_component as P, get_spread_update as Q, destroy_component as U } from "../../../vendor/svelte/internal/index.js";
import { RoomLabel as X } from "./RoomLabel.js";
import { svelteResizeObserver as Y } from "../../../shared-utils/svelte/resizeObserver.js";
import { getGlobalResponsiveFontSize as Z, getCurrentFontSize as p } from "../../../shared-utils/fontSize.js";
function $(r) {
  C(r, "svelte-13xux0b", ".floorplan-plugin__room-labels.svelte-13xux0b{width:100%;height:100%;position:absolute;left:0;top:0;z-index:20;pointer-events:none}");
}
function N(r, e, o) {
  const l = r.slice();
  return l[17] = e[o], l;
}
function k(r) {
  let e, o = [], l = /* @__PURE__ */ new Map(), i, f, u, m = (
    /*rooms*/
    r[12]
  );
  const b = (n) => (
    /*room*/
    n[17].id
  );
  for (let n = 0; n < m.length; n += 1) {
    let a = N(r, m, n), s = b(a);
    l.set(s, o[n] = A(s, a));
  }
  return {
    c() {
      e = F("div");
      for (let n = 0; n < o.length; n += 1)
        o[n].c();
      M(e, "class", "floorplan-plugin__room-labels svelte-13xux0b");
    },
    m(n, a) {
      h(n, e, a);
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(e, null);
      i = !0, f || (u = [
        j(Y.call(null, e)),
        q(
          e,
          "clientWidth",
          /*clientWidth_handler*/
          r[15]
        )
      ], f = !0);
    },
    p(n, a) {
      a & /*pxmm, rooms, hoveredRoom, roomAreaEnable, roomNameEnable, roomNameOtherTypeEnable, roomDimensionEnable, getLabelElement, getRoomAreaText, getRoomDimensionText, adaptiveRoomLabelVisibleEnable, fontSize*/
      7679 && (m = /*rooms*/
      n[12], z(), o = G(o, a, b, 1, n, m, l, e, B, A, null, N), O());
    },
    i(n) {
      if (!i) {
        for (let a = 0; a < m.length; a += 1)
          _(o[a]);
        i = !0;
      }
    },
    o(n) {
      for (let a = 0; a < o.length; a += 1)
        g(o[a]);
      i = !1;
    },
    d(n) {
      n && E(e);
      for (let a = 0; a < o.length; a += 1)
        o[a].d();
      f = !1, H(u);
    }
  };
}
function A(r, e) {
  let o, l, i;
  const f = [
    {
      pxmm: (
        /*pxmm*/
        e[10]
      ),
      room: (
        /*room*/
        e[17]
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
      ),
      fontSize: (
        /*fontSize*/
        e[11]
      )
    }
  ];
  let u = {};
  for (let m = 0; m < f.length; m += 1)
    u = J(u, f[m]);
  return l = new X({ props: u }), {
    key: r,
    first: null,
    c() {
      o = v(), K(l.$$.fragment), this.first = o;
    },
    m(m, b) {
      h(m, o, b), P(l, m, b), i = !0;
    },
    p(m, b) {
      e = m;
      const n = b & /*pxmm, rooms, hoveredRoom, roomAreaEnable, roomNameEnable, roomNameOtherTypeEnable, roomDimensionEnable, getLabelElement, getRoomAreaText, getRoomDimensionText, adaptiveRoomLabelVisibleEnable, fontSize*/
      7679 ? Q(f, [
        {
          pxmm: (
            /*pxmm*/
            e[10]
          ),
          room: (
            /*room*/
            e[17]
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
          ),
          fontSize: (
            /*fontSize*/
            e[11]
          )
        }
      ]) : {};
      l.$set(n);
    },
    i(m) {
      i || (_(l.$$.fragment, m), i = !0);
    },
    o(m) {
      g(l.$$.fragment, m), i = !1;
    },
    d(m) {
      m && E(o), U(l, m);
    }
  };
}
function ee(r) {
  let e, o, l = (
    /*rooms*/
    r[12] && k(r)
  );
  return {
    c() {
      l && l.c(), e = v();
    },
    m(i, f) {
      l && l.m(i, f), h(i, e, f), o = !0;
    },
    p(i, [f]) {
      /*rooms*/
      i[12] ? l ? (l.p(i, f), f & /*rooms*/
      4096 && _(l, 1)) : (l = k(i), l.c(), _(l, 1), l.m(e.parentNode, e)) : l && (z(), g(l, 1, 1, () => {
        l = null;
      }), O());
    },
    i(i) {
      o || (_(l), o = !0);
    },
    o(i) {
      g(l), o = !1;
    },
    d(i) {
      l && l.d(i), i && E(e);
    }
  };
}
function oe(r, e, o) {
  let l, { floorIndex: i } = e, { roomAreaEnable: f } = e, { roomNameEnable: u } = e, { roomNameOtherTypeEnable: m } = e, { roomDimensionEnable: b } = e, { floorplanData: n } = e, { hoveredRoom: a } = e, { getRoomAreaText: s } = e, { getRoomDimensionText: R } = e, { getLabelElement: T } = e, { adaptiveRoomLabelVisibleEnable: D } = e, d = 0, y = 0;
  const c = Z();
  let L = p();
  typeof c == "object" && "subscribe" in c && c.subscribe((t) => {
    o(11, L = t);
  });
  const S = (t) => {
    o(9, d = t.detail);
  };
  return r.$$set = (t) => {
    "floorIndex" in t && o(13, i = t.floorIndex), "roomAreaEnable" in t && o(0, f = t.roomAreaEnable), "roomNameEnable" in t && o(1, u = t.roomNameEnable), "roomNameOtherTypeEnable" in t && o(2, m = t.roomNameOtherTypeEnable), "roomDimensionEnable" in t && o(3, b = t.roomDimensionEnable), "floorplanData" in t && o(14, n = t.floorplanData), "hoveredRoom" in t && o(4, a = t.hoveredRoom), "getRoomAreaText" in t && o(5, s = t.getRoomAreaText), "getRoomDimensionText" in t && o(6, R = t.getRoomDimensionText), "getLabelElement" in t && o(7, T = t.getLabelElement), "adaptiveRoomLabelVisibleEnable" in t && o(8, D = t.adaptiveRoomLabelVisibleEnable);
  }, r.$$.update = () => {
    if (r.$$.dirty & /*floorplanData, floorIndex*/
    24576 && o(12, l = n.floorDatas[i].rooms), r.$$.dirty & /*floorplanData, clientWidth*/
    16896) {
      const { max: t, min: V } = n.bounding, x = t.x - V.x;
      o(10, y = d / x);
    }
  }, [
    f,
    u,
    m,
    b,
    a,
    s,
    R,
    T,
    D,
    d,
    y,
    L,
    l,
    i,
    n,
    S
  ];
}
class me extends I {
  constructor(e) {
    super(), W(
      this,
      e,
      oe,
      ee,
      w,
      {
        floorIndex: 13,
        roomAreaEnable: 0,
        roomNameEnable: 1,
        roomNameOtherTypeEnable: 2,
        roomDimensionEnable: 3,
        floorplanData: 14,
        hoveredRoom: 4,
        getRoomAreaText: 5,
        getRoomDimensionText: 6,
        getLabelElement: 7,
        adaptiveRoomLabelVisibleEnable: 8
      },
      $
    );
  }
}
export {
  me as RoomLabels
};
