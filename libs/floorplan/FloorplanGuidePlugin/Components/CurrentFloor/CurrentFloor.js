import { SvelteComponent as y, init as H, safe_not_equal as U, empty as E, insert as d, transition_out as h, check_outros as O, transition_in as _, detach as D, group_outros as R, assign as v, create_component as k, space as p, mount_component as F, get_spread_update as w, destroy_component as I } from "../../../../vendor/svelte/internal/index.js";
import N from "./ExtraObjects.js";
import { BaseImage as q } from "../../../Components/BaseImage.js";
import { RoomHighlight as B } from "../../../Components/RoomHighlight/RoomHighlight.js";
import { MissingFloor as M } from "../../../Components/MissingFloor.js";
import "../../../Components/Normalmage.js";
import "../../../Components/SvgImage.js";
import "../../../Components/RoomHighlight/Room.js";
import "../../../utils/formatPosition.js";
function S(l) {
  let e, o, n, s, i, m;
  const u = [
    {
      floorIndex: (
        /*floorIndex*/
        l[2]
      ),
      floorplanData: (
        /*floorplanData*/
        l[4]
      )
    }
  ];
  let f = {};
  for (let t = 0; t < u.length; t += 1)
    f = v(f, u[t]);
  e = new q({ props: f }), n = new N({
    props: {
      extraObjects: (
        /*currentFloorExtraObjects*/
        l[7]
      )
    }
  });
  let r = (
    /*hoverEnable*/
    l[3] && j(l)
  );
  return {
    c() {
      k(e.$$.fragment), o = p(), k(n.$$.fragment), s = p(), r && r.c(), i = E();
    },
    m(t, g) {
      F(e, t, g), d(t, o, g), F(n, t, g), d(t, s, g), r && r.m(t, g), d(t, i, g), m = !0;
    },
    p(t, g) {
      const b = g & /*floorIndex, floorplanData*/
      20 ? w(u, [
        {
          floorIndex: (
            /*floorIndex*/
            t[2]
          ),
          floorplanData: (
            /*floorplanData*/
            t[4]
          )
        }
      ]) : {};
      e.$set(b);
      const c = {};
      g & /*currentFloorExtraObjects*/
      128 && (c.extraObjects = /*currentFloorExtraObjects*/
      t[7]), n.$set(c), /*hoverEnable*/
      t[3] ? r ? (r.p(t, g), g & /*hoverEnable*/
      8 && _(r, 1)) : (r = j(t), r.c(), _(r, 1), r.m(i.parentNode, i)) : r && (R(), h(r, 1, 1, () => {
        r = null;
      }), O());
    },
    i(t) {
      m || (_(e.$$.fragment, t), _(n.$$.fragment, t), _(r), m = !0);
    },
    o(t) {
      h(e.$$.fragment, t), h(n.$$.fragment, t), h(r), m = !1;
    },
    d(t) {
      I(e, t), t && D(o), I(n, t), t && D(s), r && r.d(t), t && D(i);
    }
  };
}
function z(l) {
  let e, o;
  return e = new M({
    props: {
      missingFloorConfig: (
        /*missingFloorConfig*/
        l[6]
      )
    }
  }), {
    c() {
      k(e.$$.fragment);
    },
    m(n, s) {
      F(e, n, s), o = !0;
    },
    p(n, s) {
      const i = {};
      s & /*missingFloorConfig*/
      64 && (i.missingFloorConfig = /*missingFloorConfig*/
      n[6]), e.$set(i);
    },
    i(n) {
      o || (_(e.$$.fragment, n), o = !0);
    },
    o(n) {
      h(e.$$.fragment, n), o = !1;
    },
    d(n) {
      I(e, n);
    }
  };
}
function j(l) {
  let e, o;
  const n = [
    {
      five: (
        /*five*/
        l[0]
      ),
      pxmm: (
        /*pxmm*/
        l[1]
      ),
      floorIndex: (
        /*floorIndex*/
        l[2]
      ),
      floorplanData: (
        /*floorplanData*/
        l[4]
      ),
      onRoomHeightClick: (
        /*onRoomHeightClick*/
        l[9]
      ),
      highlightData: (
        /*highlightData*/
        l[5]
      ),
      hoveredRoom: void 0
    }
  ];
  let s = {};
  for (let i = 0; i < n.length; i += 1)
    s = v(s, n[i]);
  return e = new B({ props: s }), {
    c() {
      k(e.$$.fragment);
    },
    m(i, m) {
      F(e, i, m), o = !0;
    },
    p(i, m) {
      const u = m & /*five, pxmm, floorIndex, floorplanData, onRoomHeightClick, highlightData, undefined*/
      567 ? w(n, [
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
      o || (_(e.$$.fragment, i), o = !0);
    },
    o(i) {
      h(e.$$.fragment, i), o = !1;
    },
    d(i) {
      I(e, i);
    }
  };
}
function A(l) {
  let e, o, n, s;
  const i = [z, S], m = [];
  function u(f, r) {
    return (
      /*hasCurrentFloorData*/
      f[8] ? 1 : 0
    );
  }
  return e = u(l), o = m[e] = i[e](l), {
    c() {
      o.c(), n = E();
    },
    m(f, r) {
      m[e].m(f, r), d(f, n, r), s = !0;
    },
    p(f, [r]) {
      let t = e;
      e = u(f), e === t ? m[e].p(f, r) : (R(), h(m[t], 1, 1, () => {
        m[t] = null;
      }), O(), o = m[e], o ? o.p(f, r) : (o = m[e] = i[e](f), o.c()), _(o, 1), o.m(n.parentNode, n));
    },
    i(f) {
      s || (_(o), s = !0);
    },
    o(f) {
      h(o), s = !1;
    },
    d(f) {
      m[e].d(f), f && D(n);
    }
  };
}
function G(l, e, o) {
  let n, s, i, { five: m } = e, { pxmm: u } = e, { floorIndex: f } = e, { hoverEnable: r } = e, { floorplanData: t } = e, { extraObjects: g = [] } = e, { highlightData: b } = e, { missingFloorConfig: c } = e, { missingFloorImageUrl: C } = e;
  const x = void 0;
  return l.$$set = (a) => {
    "five" in a && o(0, m = a.five), "pxmm" in a && o(1, u = a.pxmm), "floorIndex" in a && o(2, f = a.floorIndex), "hoverEnable" in a && o(3, r = a.hoverEnable), "floorplanData" in a && o(4, t = a.floorplanData), "extraObjects" in a && o(10, g = a.extraObjects), "highlightData" in a && o(5, b = a.highlightData), "missingFloorConfig" in a && o(6, c = a.missingFloorConfig), "missingFloorImageUrl" in a && o(11, C = a.missingFloorImageUrl);
  }, l.$$.update = () => {
    l.$$.dirty & /*floorplanData, floorIndex*/
    20 && o(12, n = t.floorDatas[f]), l.$$.dirty & /*floorData*/
    4096 && o(8, s = n.rooms.length > 0), l.$$.dirty & /*extraObjects, floorIndex*/
    1028 && o(7, i = g == null ? void 0 : g.filter((a) => a.floorIndex === f));
  }, [
    m,
    u,
    f,
    r,
    t,
    b,
    c,
    i,
    s,
    x,
    g,
    C,
    n
  ];
}
class Y extends y {
  constructor(e) {
    super(), H(this, e, G, A, U, {
      five: 0,
      pxmm: 1,
      floorIndex: 2,
      hoverEnable: 3,
      floorplanData: 4,
      extraObjects: 10,
      highlightData: 5,
      missingFloorConfig: 6,
      missingFloorImageUrl: 11
    });
  }
}
export {
  Y as default
};
