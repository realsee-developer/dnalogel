import { SvelteComponent as p, init as k, safe_not_equal as D, append_styles as b, element as y, svg_element as R, attr as g, insert as d, append as w, group_outros as q, update_keyed_each as I, outro_and_destroy_block as H, check_outros as B, transition_in as _, transition_out as c, detach as v, assign as C, empty as M, create_component as S, mount_component as W, get_spread_update as j, destroy_component as x } from "../../../vendor/svelte/internal/index.js";
import { Room as z } from "./Room.js";
function A(r) {
  b(r, "svelte-1kqo6e4", ".floorplan-plugin__room-highlight.svelte-1kqo6e4{position:absolute;width:100%;height:100%}svg.svelte-1kqo6e4{width:100%;height:100%;overflow:visible}");
}
function u(r, l, n) {
  const o = r.slice();
  return o[6] = l[n], o;
}
function m(r, l) {
  let n, o, a;
  const s = [
    {
      room: (
        /*room*/
        l[6]
      ),
      floorplanData: (
        /*floorplanData*/
        l[1]
      ),
      hoveredRoom: (
        /*hoveredRoom*/
        l[3]
      ),
      floorIndex: (
        /*floorIndex*/
        l[0]
      ),
      highlightData: (
        /*highlightData*/
        l[2]
      )
    }
  ];
  let h = {};
  for (let i = 0; i < s.length; i += 1)
    h = C(h, s[i]);
  return o = new z({ props: h }), {
    key: r,
    first: null,
    c() {
      n = M(), S(o.$$.fragment), this.first = n;
    },
    m(i, t) {
      d(i, n, t), W(o, i, t), a = !0;
    },
    p(i, t) {
      l = i;
      const e = t & /*floorplanData, floorIndex, hoveredRoom, highlightData*/
      15 ? j(s, [
        {
          room: (
            /*room*/
            l[6]
          ),
          floorplanData: (
            /*floorplanData*/
            l[1]
          ),
          hoveredRoom: (
            /*hoveredRoom*/
            l[3]
          ),
          floorIndex: (
            /*floorIndex*/
            l[0]
          ),
          highlightData: (
            /*highlightData*/
            l[2]
          )
        }
      ]) : {};
      o.$set(e);
    },
    i(i) {
      a || (_(o.$$.fragment, i), a = !0);
    },
    o(i) {
      c(o.$$.fragment, i), a = !1;
    },
    d(i) {
      i && v(n), x(o, i);
    }
  };
}
function E(r) {
  let l, n, o = [], a = /* @__PURE__ */ new Map(), s, h = (
    /*floorplanData*/
    r[1].floorDatas[
      /*floorIndex*/
      r[0]
    ].rooms
  );
  const i = (t) => (
    /*room*/
    t[6].id
  );
  for (let t = 0; t < h.length; t += 1) {
    let e = u(r, h, t), f = i(e);
    a.set(f, o[t] = m(f, e));
  }
  return {
    c() {
      l = y("div"), n = R("svg");
      for (let t = 0; t < o.length; t += 1)
        o[t].c();
      g(n, "width", "100%"), g(n, "height", "100%"), g(n, "viewBox", `0 0 ${/*boundingWidth*/
      r[4]} ${/*boundingHeight*/
      r[5]}`), g(n, "class", "svelte-1kqo6e4"), g(l, "class", "floorplan-plugin__room-highlight svelte-1kqo6e4");
    },
    m(t, e) {
      d(t, l, e), w(l, n);
      for (let f = 0; f < o.length; f += 1)
        o[f] && o[f].m(n, null);
      s = !0;
    },
    p(t, [e]) {
      e & /*floorplanData, floorIndex, hoveredRoom, highlightData*/
      15 && (h = /*floorplanData*/
      t[1].floorDatas[
        /*floorIndex*/
        t[0]
      ].rooms, q(), o = I(o, e, i, 1, t, h, a, n, H, m, null, u), B());
    },
    i(t) {
      if (!s) {
        for (let e = 0; e < h.length; e += 1)
          _(o[e]);
        s = !0;
      }
    },
    o(t) {
      for (let e = 0; e < o.length; e += 1)
        c(o[e]);
      s = !1;
    },
    d(t) {
      t && v(l);
      for (let e = 0; e < o.length; e += 1)
        o[e].d();
    }
  };
}
function F(r, l, n) {
  let { floorIndex: o } = l, { floorplanData: a } = l, { highlightData: s } = l, { hoveredRoom: h } = l;
  const i = a.bounding.max.x - a.bounding.min.x, t = a.bounding.max.y - a.bounding.min.y;
  return r.$$set = (e) => {
    "floorIndex" in e && n(0, o = e.floorIndex), "floorplanData" in e && n(1, a = e.floorplanData), "highlightData" in e && n(2, s = e.highlightData), "hoveredRoom" in e && n(3, h = e.hoveredRoom);
  }, [
    o,
    a,
    s,
    h,
    i,
    t
  ];
}
class K extends p {
  constructor(l) {
    super(), k(
      this,
      l,
      F,
      E,
      D,
      {
        floorIndex: 0,
        floorplanData: 1,
        highlightData: 2,
        hoveredRoom: 3
      },
      A
    );
  }
}
export {
  K as RoomHighlight
};
