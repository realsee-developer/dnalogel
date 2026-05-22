import { SvelteComponent as q, init as N, safe_not_equal as B, append_styles as S, empty as C, insert as d, transition_out as _, check_outros as E, transition_in as c, detach as p, group_outros as O, assign as R, create_component as k, space as j, mount_component as v, get_spread_update as H, destroy_component as I, element as w, attr as b, src_url_equal as x, append as z, noop as y } from "../../../../vendor/svelte/internal/index.js";
import A from "./ExtraObjects.js";
import { BaseImage as G } from "../../../Components/BaseImage.js";
import { RoomHighlight as J } from "../../../Components/RoomHighlight/RoomHighlight.js";
import "../../../Components/Normalmage.js";
import "../../../Components/SvgImage.js";
import "../../../Components/RoomHighlight/Room.js";
import "../../../utils/formatPosition.js";
function K(n) {
  S(n, "svelte-18287ai", ".missing-floor-wrapper.svelte-18287ai{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:flex;justify-content:center;align-items:center}.missing-floor-image.svelte-18287ai{max-width:100%;max-height:100%}");
}
function L(n) {
  let e, t, r, a, i, s;
  const u = [
    {
      floorIndex: (
        /*floorIndex*/
        n[2]
      ),
      floorplanData: (
        /*floorplanData*/
        n[4]
      )
    }
  ];
  let f = {};
  for (let o = 0; o < u.length; o += 1)
    f = R(f, u[o]);
  e = new G({ props: f }), r = new A({
    props: {
      extraObjects: (
        /*currentFloorExtraObjects*/
        n[7]
      )
    }
  });
  let l = (
    /*hoverEnable*/
    n[3] && F(n)
  );
  return {
    c() {
      k(e.$$.fragment), t = j(), k(r.$$.fragment), a = j(), l && l.c(), i = C();
    },
    m(o, g) {
      v(e, o, g), d(o, t, g), v(r, o, g), d(o, a, g), l && l.m(o, g), d(o, i, g), s = !0;
    },
    p(o, g) {
      const D = g & /*floorIndex, floorplanData*/
      20 ? H(u, [
        {
          floorIndex: (
            /*floorIndex*/
            o[2]
          ),
          floorplanData: (
            /*floorplanData*/
            o[4]
          )
        }
      ]) : {};
      e.$set(D);
      const h = {};
      g & /*currentFloorExtraObjects*/
      128 && (h.extraObjects = /*currentFloorExtraObjects*/
      o[7]), r.$set(h), /*hoverEnable*/
      o[3] ? l ? (l.p(o, g), g & /*hoverEnable*/
      8 && c(l, 1)) : (l = F(o), l.c(), c(l, 1), l.m(i.parentNode, i)) : l && (O(), _(l, 1, 1, () => {
        l = null;
      }), E());
    },
    i(o) {
      s || (c(e.$$.fragment, o), c(r.$$.fragment, o), c(l), s = !0);
    },
    o(o) {
      _(e.$$.fragment, o), _(r.$$.fragment, o), _(l), s = !1;
    },
    d(o) {
      I(e, o), o && p(t), I(r, o), o && p(a), l && l.d(o), o && p(i);
    }
  };
}
function M(n) {
  let e, t, r;
  return {
    c() {
      e = w("div"), t = w("img"), b(t, "class", "missing-floor-image svelte-18287ai"), x(t.src, r = /*missingFloorImageUrl*/
      n[6]) || b(t, "src", r), b(t, "alt", "缺省楼层"), b(e, "class", "missing-floor-wrapper svelte-18287ai");
    },
    m(a, i) {
      d(a, e, i), z(e, t);
    },
    p(a, i) {
      i & /*missingFloorImageUrl*/
      64 && !x(t.src, r = /*missingFloorImageUrl*/
      a[6]) && b(t, "src", r);
    },
    i: y,
    o: y,
    d(a) {
      a && p(e);
    }
  };
}
function F(n) {
  let e, t;
  const r = [
    {
      five: (
        /*five*/
        n[0]
      ),
      pxmm: (
        /*pxmm*/
        n[1]
      ),
      floorIndex: (
        /*floorIndex*/
        n[2]
      ),
      floorplanData: (
        /*floorplanData*/
        n[4]
      ),
      onRoomHeightClick: (
        /*onRoomHeightClick*/
        n[9]
      ),
      highlightData: (
        /*highlightData*/
        n[5]
      ),
      hoveredRoom: void 0
    }
  ];
  let a = {};
  for (let i = 0; i < r.length; i += 1)
    a = R(a, r[i]);
  return e = new J({ props: a }), {
    c() {
      k(e.$$.fragment);
    },
    m(i, s) {
      v(e, i, s), t = !0;
    },
    p(i, s) {
      const u = s & /*five, pxmm, floorIndex, floorplanData, onRoomHeightClick, highlightData, undefined*/
      567 ? H(r, [
        {
          five: (
            /*five*/
            i[0]
          ),
          pxmm: (
            /*pxmm*/
            i[1]
          ),
          floorIndex: (
            /*floorIndex*/
            i[2]
          ),
          floorplanData: (
            /*floorplanData*/
            i[4]
          ),
          onRoomHeightClick: (
            /*onRoomHeightClick*/
            i[9]
          ),
          highlightData: (
            /*highlightData*/
            i[5]
          ),
          hoveredRoom: void 0
        }
      ]) : {};
      e.$set(u);
    },
    i(i) {
      t || (c(e.$$.fragment, i), t = !0);
    },
    o(i) {
      _(e.$$.fragment, i), t = !1;
    },
    d(i) {
      I(e, i);
    }
  };
}
function P(n) {
  let e, t, r, a;
  const i = [M, L], s = [];
  function u(f, l) {
    return (
      /*hasCurrentFloorData*/
      f[8] ? 1 : 0
    );
  }
  return e = u(n), t = s[e] = i[e](n), {
    c() {
      t.c(), r = C();
    },
    m(f, l) {
      s[e].m(f, l), d(f, r, l), a = !0;
    },
    p(f, [l]) {
      let o = e;
      e = u(f), e === o ? s[e].p(f, l) : (O(), _(s[o], 1, 1, () => {
        s[o] = null;
      }), E(), t = s[e], t ? t.p(f, l) : (t = s[e] = i[e](f), t.c()), c(t, 1), t.m(r.parentNode, r));
    },
    i(f) {
      a || (c(t), a = !0);
    },
    o(f) {
      _(t), a = !1;
    },
    d(f) {
      s[e].d(f), f && p(r);
    }
  };
}
function Q(n, e, t) {
  let r, a, i, { five: s } = e, { pxmm: u } = e, { floorIndex: f } = e, { hoverEnable: l } = e, { floorplanData: o } = e, { extraObjects: g = [] } = e, { highlightData: D } = e, { missingFloorImageUrl: h } = e;
  const U = void 0;
  return n.$$set = (m) => {
    "five" in m && t(0, s = m.five), "pxmm" in m && t(1, u = m.pxmm), "floorIndex" in m && t(2, f = m.floorIndex), "hoverEnable" in m && t(3, l = m.hoverEnable), "floorplanData" in m && t(4, o = m.floorplanData), "extraObjects" in m && t(10, g = m.extraObjects), "highlightData" in m && t(5, D = m.highlightData), "missingFloorImageUrl" in m && t(6, h = m.missingFloorImageUrl);
  }, n.$$.update = () => {
    n.$$.dirty & /*floorplanData, floorIndex*/
    20 && t(11, r = o.floorDatas[f]), n.$$.dirty & /*floorData*/
    2048 && t(8, a = r.rooms.length > 0), n.$$.dirty & /*extraObjects, floorIndex*/
    1028 && t(7, i = g == null ? void 0 : g.filter((m) => m.floorIndex === f));
  }, [
    s,
    u,
    f,
    l,
    o,
    D,
    h,
    i,
    a,
    U,
    g,
    r
  ];
}
class te extends q {
  constructor(e) {
    super(), N(
      this,
      e,
      Q,
      P,
      B,
      {
        five: 0,
        pxmm: 1,
        floorIndex: 2,
        hoverEnable: 3,
        floorplanData: 4,
        extraObjects: 10,
        highlightData: 5,
        missingFloorImageUrl: 6
      },
      K
    );
  }
}
export {
  te as default
};
