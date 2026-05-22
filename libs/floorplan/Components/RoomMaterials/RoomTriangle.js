import { SvelteComponent as d, init as m, safe_not_equal as v, svg_element as u, attr as i, insert as z, noop as a, detach as f } from "../../../vendor/svelte/internal/index.js";
import { pathD as r } from "../../utils/formatPosition.js";
function g(n) {
  let e;
  return {
    c() {
      e = u("path"), i(
        e,
        "d",
        /*mergedPath*/
        n[0]
      ), i(e, "fill", "#969696"), i(e, "stroke", "#969696"), i(e, "stroke-width", "1"), i(e, "fill-rule", "evenodd");
    },
    m(o, t) {
      z(o, e, t);
    },
    p: a,
    i: a,
    o: a,
    d(o) {
      o && f(e);
    }
  };
}
function p(n, e, o) {
  let { dimension: t } = e;
  const c = r(
    [
      {
        x: t.vertical[1].x,
        y: t.vertical[1].y + 53
      },
      {
        x: t.vertical[1].x - 60,
        y: t.vertical[1].y + 124
      },
      {
        x: t.vertical[1].x + 60,
        y: t.vertical[1].y + 124
      }
    ],
    { needZ: !0 }
  ), x = r(
    [
      {
        x: t.vertical[0].x,
        y: t.vertical[0].y - 53
      },
      {
        x: t.vertical[0].x - 60,
        y: t.vertical[0].y - 124
      },
      {
        x: t.vertical[0].x + 60,
        y: t.vertical[0].y - 124
      }
    ],
    { needZ: !0 }
  ), y = r(
    [
      {
        x: t.horizontal[0].x + 53,
        y: t.horizontal[0].y
      },
      {
        x: t.horizontal[0].x + 124,
        y: t.horizontal[0].y + 60
      },
      {
        x: t.horizontal[0].x + 124,
        y: t.horizontal[0].y - 60
      }
    ],
    { needZ: !0 }
  ), s = r(
    [
      {
        x: t.horizontal[1].x - 53,
        y: t.horizontal[1].y
      },
      {
        x: t.horizontal[1].x - 124,
        y: t.horizontal[1].y + 60
      },
      {
        x: t.horizontal[1].x - 124,
        y: t.horizontal[1].y - 60
      }
    ],
    { needZ: !0 }
  ), h = `${c} ${x} ${y} ${s}`;
  return n.$$set = (l) => {
    "dimension" in l && o(1, t = l.dimension);
  }, [h, t];
}
class _ extends d {
  constructor(e) {
    super(), m(this, e, p, g, v, { dimension: 1 });
  }
}
export {
  _ as RoomTriangle
};
