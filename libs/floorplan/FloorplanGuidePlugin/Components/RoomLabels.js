import { SvelteComponent as P, init as V, safe_not_equal as w, append_styles as D, element as O, attr as W, insert as y, action_destroyer as j, listen as H, update_keyed_each as M, check_outros as q, transition_in as A, transition_out as N, detach as v, run_all as S, empty as X, create_component as Y, mount_component as B, destroy_component as F, group_outros as G, outro_and_destroy_block as J } from "../../../vendor/svelte/internal/index.js";
import { svelteResizeObserver as K } from "../../../shared-utils/svelte/resizeObserver.js";
import Q from "./RoomLabelItem.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
function U(s) {
  D(s, "svelte-k2rax0", ".floorplan-guide-plugin__room-labels.svelte-k2rax0{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:15}");
}
function I(s, e, o) {
  const a = s.slice();
  return a[17] = e[o], a;
}
function k(s, e) {
  let o, a, f;
  function b() {
    return (
      /*mouseenter_handler*/
      e[15](
        /*room*/
        e[17]
      )
    );
  }
  return a = new Q({
    props: {
      room: (
        /*room*/
        e[17]
      ),
      isHovered: (
        /*hoveredRoomId*/
        e[7] === /*room*/
        e[17].id
      ),
      roomNameEnable: (
        /*roomNameEnable*/
        e[0]
      ),
      roomAreaEnable: (
        /*roomAreaEnable*/
        e[1]
      ),
      roomAreaSize: (
        /*room*/
        e[17].size ? (
          /*getRoomAreaText*/
          e[3](
            /*room*/
            e[17].size
          )
        ) : ""
      ),
      userConfigElement: (
        /*getLabelElement*/
        e[4] ? (
          /*getLabelElement*/
          e[4](
            /*room*/
            e[17]
          )
        ) : null
      ),
      adaptiveRoomLabelVisibleEnable: (
        /*adaptiveRoomLabelVisibleEnable*/
        e[2]
      ),
      pxmm: (
        /*pxmm*/
        e[6]
      ),
      left: (
        /*room*/
        e[17].roomLabel.positionInImage.x * 100 + "%"
      ),
      top: (
        /*room*/
        e[17].roomLabel.positionInImage.y * 100 + "%"
      ),
      createLabelInRoomChecker: $
    }
  }), a.$on("mouseenter", b), a.$on(
    "mouseleave",
    /*handleMouseLeave*/
    e[10]
  ), {
    key: s,
    first: null,
    c() {
      o = X(), Y(a.$$.fragment), this.first = o;
    },
    m(m, l) {
      y(m, o, l), B(a, m, l), f = !0;
    },
    p(m, l) {
      e = m;
      const i = {};
      l & /*rooms*/
      256 && (i.room = /*room*/
      e[17]), l & /*hoveredRoomId, rooms*/
      384 && (i.isHovered = /*hoveredRoomId*/
      e[7] === /*room*/
      e[17].id), l & /*roomNameEnable*/
      1 && (i.roomNameEnable = /*roomNameEnable*/
      e[0]), l & /*roomAreaEnable*/
      2 && (i.roomAreaEnable = /*roomAreaEnable*/
      e[1]), l & /*rooms, getRoomAreaText*/
      264 && (i.roomAreaSize = /*room*/
      e[17].size ? (
        /*getRoomAreaText*/
        e[3](
          /*room*/
          e[17].size
        )
      ) : ""), l & /*getLabelElement, rooms*/
      272 && (i.userConfigElement = /*getLabelElement*/
      e[4] ? (
        /*getLabelElement*/
        e[4](
          /*room*/
          e[17]
        )
      ) : null), l & /*adaptiveRoomLabelVisibleEnable*/
      4 && (i.adaptiveRoomLabelVisibleEnable = /*adaptiveRoomLabelVisibleEnable*/
      e[2]), l & /*pxmm*/
      64 && (i.pxmm = /*pxmm*/
      e[6]), l & /*rooms*/
      256 && (i.left = /*room*/
      e[17].roomLabel.positionInImage.x * 100 + "%"), l & /*rooms*/
      256 && (i.top = /*room*/
      e[17].roomLabel.positionInImage.y * 100 + "%"), a.$set(i);
    },
    i(m) {
      f || (A(a.$$.fragment, m), f = !0);
    },
    o(m) {
      N(a.$$.fragment, m), f = !1;
    },
    d(m) {
      m && v(o), F(a, m);
    }
  };
}
function Z(s) {
  let e, o = [], a = /* @__PURE__ */ new Map(), f, b, m, l = (
    /*rooms*/
    s[8]
  );
  const i = (t) => (
    /*room*/
    t[17].id
  );
  for (let t = 0; t < l.length; t += 1) {
    let n = I(s, l, t), u = i(n);
    a.set(u, o[t] = k(u, n));
  }
  return {
    c() {
      e = O("div");
      for (let t = 0; t < o.length; t += 1)
        o[t].c();
      W(e, "class", "floorplan-guide-plugin__room-labels svelte-k2rax0");
    },
    m(t, n) {
      y(t, e, n);
      for (let u = 0; u < o.length; u += 1)
        o[u] && o[u].m(e, null);
      f = !0, b || (m = [
        j(K.call(null, e)),
        H(
          e,
          "clientWidth",
          /*clientWidth_handler*/
          s[16]
        )
      ], b = !0);
    },
    p(t, [n]) {
      n & /*rooms, hoveredRoomId, roomNameEnable, roomAreaEnable, getRoomAreaText, getLabelElement, adaptiveRoomLabelVisibleEnable, pxmm, createLabelInRoomChecker, handleMouseEnter, handleMouseLeave*/
      2015 && (l = /*rooms*/
      t[8], G(), o = M(o, n, i, 1, t, l, a, e, J, k, null, I), q());
    },
    i(t) {
      if (!f) {
        for (let n = 0; n < l.length; n += 1)
          A(o[n]);
        f = !0;
      }
    },
    o(t) {
      for (let n = 0; n < o.length; n += 1)
        N(o[n]);
      f = !1;
    },
    d(t) {
      t && v(e);
      for (let n = 0; n < o.length; n += 1)
        o[n].d();
      b = !1, S(m);
    }
  };
}
function x(s, e) {
  const o = s[0], a = s[1];
  let f = !1;
  for (let b = 0, m = e.length - 1; b < e.length; m = b++) {
    const l = e[b][0], i = e[b][1], t = e[m][0], n = e[m][1];
    i > a != n > a && o < (t - l) * (a - i) / (n - i) + l && (f = !f);
  }
  return f;
}
function $(s, e) {
  if (e.width === 0 || e.height === 0)
    return () => !1;
  const o = s.path.map(({ x: n, y: u }) => [n, u]), a = s.roomLabel.position, { x: f, y: b } = a, { width: m, height: l } = e, i = m / 2, t = l / 2;
  return function(u) {
    const h = f * u, c = b * u, _ = o.map(([d, E]) => [d * u, E * u]);
    return [
      [h + i, c - t],
      [h - i, c - t],
      [h - i, c + t],
      [h + i, c + t]
    ].every((d) => x(d, _));
  };
}
function ee(s, e, o) {
  let a, f, { floorplanData: b } = e, { floorIndex: m } = e, { roomNameEnable: l = !0 } = e, { roomNameOtherTypeEnable: i = !0 } = e, { roomAreaEnable: t = !0 } = e, { adaptiveRoomLabelVisibleEnable: n = !0 } = e, { getRoomAreaText: u } = e, { getLabelElement: h } = e, c = 0, _ = 0, g = null;
  function d(r) {
    o(7, g = r.id);
  }
  function E() {
    o(7, g = null);
  }
  const T = (r) => d(r), p = (r) => {
    o(5, c = r.detail);
  };
  return s.$$set = (r) => {
    "floorplanData" in r && o(11, b = r.floorplanData), "floorIndex" in r && o(12, m = r.floorIndex), "roomNameEnable" in r && o(0, l = r.roomNameEnable), "roomNameOtherTypeEnable" in r && o(13, i = r.roomNameOtherTypeEnable), "roomAreaEnable" in r && o(1, t = r.roomAreaEnable), "adaptiveRoomLabelVisibleEnable" in r && o(2, n = r.adaptiveRoomLabelVisibleEnable), "getRoomAreaText" in r && o(3, u = r.getRoomAreaText), "getLabelElement" in r && o(4, h = r.getLabelElement);
  }, s.$$.update = () => {
    var r, R;
    if (s.$$.dirty & /*floorplanData, floorIndex*/
    6144 && o(14, a = (R = (r = b.floorDatas[m]) == null ? void 0 : r.rooms) != null ? R : []), s.$$.dirty & /*roomNameOtherTypeEnable, allRooms*/
    24576 && o(8, f = i ? a : a.filter((L) => L.roomType !== "100900000012")), s.$$.dirty & /*floorplanData, clientWidth*/
    2080) {
      const { max: L, min: z } = b.bounding, C = L.x - z.x;
      o(6, _ = c / C);
    }
  }, [
    l,
    t,
    n,
    u,
    h,
    c,
    _,
    g,
    f,
    d,
    E,
    b,
    m,
    i,
    a,
    T,
    p
  ];
}
class ie extends P {
  constructor(e) {
    super(), V(
      this,
      e,
      ee,
      Z,
      w,
      {
        floorplanData: 11,
        floorIndex: 12,
        roomNameEnable: 0,
        roomNameOtherTypeEnable: 13,
        roomAreaEnable: 1,
        adaptiveRoomLabelVisibleEnable: 2,
        getRoomAreaText: 3,
        getLabelElement: 4
      },
      U
    );
  }
}
export {
  ie as default
};
