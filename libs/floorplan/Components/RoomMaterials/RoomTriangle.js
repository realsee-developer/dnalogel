import { SvelteComponent as d, init as m, safe_not_equal as v, svg_element as u, attr as n, insert as z, noop as l, detach as f } from "../../../vendor/svelte/internal/index.js";
import { pathD as r } from "../../utils/formatPosition.js";
function g(i) {
  let e;
  return {
    c() {
      e = u("path"), n(
        e,
        "d",
        /*mergedPath*/
        i[0]
      ), n(e, "fill", "#969696"), n(e, "stroke", "#969696"), n(e, "stroke-width", "1"), n(e, "fill-rule", "evenodd");
    },
    m(o, t) {
      z(o, e, t);
    },
    p: l,
    i: l,
    o: l,
    d(o) {
      o && f(e);
    }
  };
}
function p(i, e, o) {
  let { dimension: t } = e;
  const x = r(
    [
      {
        x: t.vertical[1].x,
        y: t.vertical[1].y - 53
      },
      {
        x: t.vertical[1].x - 60,
        y: t.vertical[1].y - 124
      },
      {
        x: t.vertical[1].x + 60,
        y: t.vertical[1].y - 124
      }
    ],
    { needZ: !0 }
  ), y = r(
    [
      {
        x: t.vertical[0].x,
        y: t.vertical[0].y + 53
      },
      {
        x: t.vertical[0].x - 60,
        y: t.vertical[0].y + 124
      },
      {
        x: t.vertical[0].x + 60,
        y: t.vertical[0].y + 124
      }
    ],
    { needZ: !0 }
  ), s = r(
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
  ), h = r(
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
  ), a = `${x} ${y} ${s} ${h}`;
  return console.log("绘制三角形：", a), i.$$set = (c) => {
    "dimension" in c && o(1, t = c.dimension);
  }, [a, t];
}
class _ extends d {
  constructor(e) {
    super(), m(this, e, p, g, v, { dimension: 1 });
  }
}
export {
  _ as RoomTriangle
};
