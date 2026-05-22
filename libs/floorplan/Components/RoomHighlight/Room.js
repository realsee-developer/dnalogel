import { SvelteComponent as D, init as q, safe_not_equal as v, append_styles as p, svg_element as I, attr as r, insert as b, listen as d, noop as c, detach as M, run_all as C } from "../../../vendor/svelte/internal/index.js";
import { pathD as E, formatFloorplanPoint as F } from "../../utils/formatPosition.js";
function L(e) {
  p(e, "svelte-qq2273", "path.svelte-qq2273{--opacity:0;opacity:var(--opacity)}path.svelte-qq2273:hover{opacity:calc(var(--opacity) + 0.1)}");
}
function P(e) {
  let t, n, l, h;
  return {
    c() {
      t = I("path"), r(
        t,
        "d",
        /*_pathD*/
        e[5]
      ), r(t, "fill", "#fff"), r(
        t,
        "style",
        /*style*/
        e[2]
      ), r(t, "id", n = `${/*floorIndex*/
      e[1]}_${/*room*/
      e[0].id}`), r(t, "class", "svelte-qq2273");
    },
    m(o, a) {
      b(o, t, a), l || (h = [
        d(
          t,
          "mouseenter",
          /*onMouseEnter*/
          e[3]
        ),
        d(
          t,
          "mouseleave",
          /*onMouseLeave*/
          e[4]
        )
      ], l = !0);
    },
    p(o, [a]) {
      a & /*style*/
      4 && r(
        t,
        "style",
        /*style*/
        o[2]
      ), a & /*floorIndex, room*/
      3 && n !== (n = `${/*floorIndex*/
      o[1]}_${/*room*/
      o[0].id}`) && r(t, "id", n);
    },
    i: c,
    o: c,
    d(o) {
      o && M(t), l = !1, C(h);
    }
  };
}
function R(e, t, n) {
  let l, h, { room: o } = t, { floorIndex: a } = t, { floorplanData: u } = t, { highlightData: s } = t, { hoveredRoom: f } = t;
  function m() {
    f == null || f.set(o);
  }
  function g() {
    f == null || f.set(void 0);
  }
  const { bounding: _ } = u, y = E(o.path, {
    needZ: !0,
    format: (i) => F(i, _)
  });
  return e.$$set = (i) => {
    "room" in i && n(0, o = i.room), "floorIndex" in i && n(1, a = i.floorIndex), "floorplanData" in i && n(6, u = i.floorplanData), "highlightData" in i && n(7, s = i.highlightData), "hoveredRoom" in i && n(8, f = i.hoveredRoom);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlightData, floorIndex, room*/
    131 && n(9, l = s[`${a}_${o.id}`]), e.$$.dirty & /*highlight*/
    512 && n(2, h = l ? `fill: ${l.color}; --opacity: ${l.opacity}; pointer-events: ${l.disabled ? "none" : "auto"}` : null);
  }, [
    o,
    a,
    h,
    m,
    g,
    y,
    u,
    s,
    f,
    l
  ];
}
class j extends D {
  constructor(t) {
    super(), q(
      this,
      t,
      R,
      P,
      v,
      {
        room: 0,
        floorIndex: 1,
        floorplanData: 6,
        highlightData: 7,
        hoveredRoom: 8
      },
      L
    );
  }
}
export {
  j as Room
};
