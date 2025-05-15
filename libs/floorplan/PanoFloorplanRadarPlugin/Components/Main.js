import { SvelteComponent as L, init as Q, safe_not_equal as T, append_styles as V, empty as X, insert as D, transition_in as u, transition_out as _, check_outros as P, detach as y, onMount as Y, element as R, attr as B, action_destroyer as Z, listen as H, group_outros as G, run_all as x, assign as W, create_component as z, space as $, set_style as I, mount_component as C, append as ee, get_spread_update as S, destroy_component as A } from "../../../vendor/svelte/internal/index.js";
import te from "./Camera.js";
import le from "./CurrentFloor/CurrentFloor.js";
import { svelteResizeObserver as re } from "../../../shared-utils/svelte/resizeObserver.js";
import "../../Assets/camera.js";
import "../../../shared-utils/throttle.js";
import "./CurrentFloor/ExtraObjects.js";
import "../../Components/BaseImage.js";
import "../../Components/Normalmage.js";
import "../../Components/SvgImage.js";
import "../../Components/RoomHighlight/RoomHighlight.js";
import "../../Components/RoomHighlight/Room.js";
import "../../utils/formatPosition.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
function ne(i) {
  V(i, "svelte-1mvqyqq", ".plugin-floorplan-radar.svelte-1mvqyqq{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.plugin-floorplan-radar-container.svelte-1mvqyqq{position:relative}");
}
function M(i) {
  let e, r, l, a, n = (
    /*clientWidth*/
    i[8] !== 0 && N(i)
  );
  return {
    c() {
      e = R("div"), n && n.c(), B(e, "class", "plugin-floorplan-radar svelte-1mvqyqq");
    },
    m(f, m) {
      D(f, e, m), n && n.m(e, null), r = !0, l || (a = [
        Z(re.call(null, e)),
        H(
          e,
          "clientWidth",
          /*clientWidth_handler*/
          i[14]
        ),
        H(
          e,
          "clientHeight",
          /*clientHeight_handler*/
          i[15]
        )
      ], l = !0);
    },
    p(f, m) {
      /*clientWidth*/
      f[8] !== 0 ? n ? (n.p(f, m), m & /*clientWidth*/
      256 && u(n, 1)) : (n = N(f), n.c(), u(n, 1), n.m(e, null)) : n && (G(), _(n, 1, 1, () => {
        n = null;
      }), P());
    },
    i(f) {
      r || (u(n), r = !0);
    },
    o(f) {
      _(n), r = !1;
    },
    d(f) {
      f && y(e), n && n.d(), l = !1, x(a);
    }
  };
}
function N(i) {
  let e, r, l, a, n = `${/*contentWidth*/
  i[10]}px`, f = `${/*contentHeight*/
  i[13]}px`, m;
  const g = [
    {
      five: (
        /*five*/
        i[0]
      ),
      pxmm: (
        /*pxmm*/
        i[11]
      ),
      floorIndex: (
        /*floorIndex*/
        i[12]
      ),
      floorplanData: (
        /*floorplanData*/
        i[3]
      ),
      hoverEnable: (
        /*hoverEnable*/
        i[2]
      ),
      extraObjects: (
        /*extraObjects*/
        i[5]
      ),
      highlightData: (
        /*highlightData*/
        i[6]
      ),
      missingFloorImageUrl: (
        /*missingFloorImageUrl*/
        i[7]
      )
    }
  ];
  let c = {};
  for (let t = 0; t < g.length; t += 1)
    c = W(c, g[t]);
  r = new le({ props: c });
  const h = [
    {
      pxmm: (
        /*pxmm*/
        i[11]
      ),
      five: (
        /*five*/
        i[0]
      ),
      floorplanData: (
        /*floorplanData*/
        i[3]
      ),
      cameraImageUrl: (
        /*cameraImageUrl*/
        i[4]
      )
    }
  ];
  let d = {};
  for (let t = 0; t < h.length; t += 1)
    d = W(d, h[t]);
  return a = new te({ props: d }), {
    c() {
      e = R("div"), z(r.$$.fragment), l = $(), z(a.$$.fragment), B(e, "class", "plugin-floorplan-radar-container svelte-1mvqyqq"), I(e, "width", n), I(e, "height", f);
    },
    m(t, s) {
      D(t, e, s), C(r, e, null), ee(e, l), C(a, e, null), m = !0;
    },
    p(t, s) {
      const p = s & /*five, pxmm, floorIndex, floorplanData, hoverEnable, extraObjects, highlightData, missingFloorImageUrl*/
      6381 ? S(g, [
        {
          five: (
            /*five*/
            t[0]
          ),
          pxmm: (
            /*pxmm*/
            t[11]
          ),
          floorIndex: (
            /*floorIndex*/
            t[12]
          ),
          floorplanData: (
            /*floorplanData*/
            t[3]
          ),
          hoverEnable: (
            /*hoverEnable*/
            t[2]
          ),
          extraObjects: (
            /*extraObjects*/
            t[5]
          ),
          highlightData: (
            /*highlightData*/
            t[6]
          ),
          missingFloorImageUrl: (
            /*missingFloorImageUrl*/
            t[7]
          )
        }
      ]) : {};
      r.$set(p);
      const v = s & /*pxmm, five, floorplanData, cameraImageUrl*/
      2073 ? S(h, [
        {
          pxmm: (
            /*pxmm*/
            t[11]
          ),
          five: (
            /*five*/
            t[0]
          ),
          floorplanData: (
            /*floorplanData*/
            t[3]
          ),
          cameraImageUrl: (
            /*cameraImageUrl*/
            t[4]
          )
        }
      ]) : {};
      a.$set(v), s & /*contentWidth*/
      1024 && n !== (n = `${/*contentWidth*/
      t[10]}px`) && I(e, "width", n), s & /*contentHeight*/
      8192 && f !== (f = `${/*contentHeight*/
      t[13]}px`) && I(e, "height", f);
    },
    i(t) {
      m || (u(r.$$.fragment, t), u(a.$$.fragment, t), m = !0);
    },
    o(t) {
      _(r.$$.fragment, t), _(a.$$.fragment, t), m = !1;
    },
    d(t) {
      t && y(e), A(r), A(a);
    }
  };
}
function ie(i) {
  let e, r, l = (
    /*visible*/
    i[1] && M(i)
  );
  return {
    c() {
      l && l.c(), e = X();
    },
    m(a, n) {
      l && l.m(a, n), D(a, e, n), r = !0;
    },
    p(a, [n]) {
      /*visible*/
      a[1] ? l ? (l.p(a, n), n & /*visible*/
      2 && u(l, 1)) : (l = M(a), l.c(), u(l, 1), l.m(e.parentNode, e)) : l && (G(), _(l, 1, 1, () => {
        l = null;
      }), P());
    },
    i(a) {
      r || (u(l), r = !0);
    },
    o(a) {
      _(l), r = !1;
    },
    d(a) {
      l && l.d(a), a && y(e);
    }
  };
}
function oe(i, e, r) {
  var w, j;
  let { five: l } = e, { visible: a } = e, { hoverEnable: n } = e, { floorplanData: f } = e, { cameraImageUrl: m } = e, { extraObjects: g = [] } = e, { highlightData: c } = e, { missingFloorImageUrl: h } = e, d = 0, t = (j = (w = l.work.observers[l.getCurrentState().panoIndex]) == null ? void 0 : w.floorIndex) != null ? j : 0, s = 0, p = 0, v = 0, U = 0;
  function k(o) {
    r(12, t = l.work.observers[o].floorIndex);
  }
  Y(() => (l.on("panoArrived", k), () => {
    l.off("panoArrived", k);
  }));
  const J = (o) => {
    r(8, s = o.detail);
  }, K = (o) => {
    r(9, p = o.detail);
  };
  return i.$$set = (o) => {
    "five" in o && r(0, l = o.five), "visible" in o && r(1, a = o.visible), "hoverEnable" in o && r(2, n = o.hoverEnable), "floorplanData" in o && r(3, f = o.floorplanData), "cameraImageUrl" in o && r(4, m = o.cameraImageUrl), "extraObjects" in o && r(5, g = o.extraObjects), "highlightData" in o && r(6, c = o.highlightData), "missingFloorImageUrl" in o && r(7, h = o.missingFloorImageUrl);
  }, i.$$.update = () => {
    if (i.$$.dirty & /*clientWidth, clientHeight, floorplanData, contentWidth*/
    1800) {
      const o = Math.min(s, p), { max: F, min: O } = f.bounding, b = F.x - O.x, q = F.y - O.y, E = function() {
        return b > q ? [o, o / b * q] : [o / q * b, o];
      }();
      r(10, v = E[0]), r(13, U = E[1]), r(11, d = v / b);
    }
  }, [
    l,
    a,
    n,
    f,
    m,
    g,
    c,
    h,
    s,
    p,
    v,
    d,
    t,
    U,
    J,
    K
  ];
}
class De extends L {
  constructor(e) {
    super(), Q(
      this,
      e,
      oe,
      ie,
      T,
      {
        five: 0,
        visible: 1,
        hoverEnable: 2,
        floorplanData: 3,
        cameraImageUrl: 4,
        extraObjects: 5,
        highlightData: 6,
        missingFloorImageUrl: 7
      },
      ne
    );
  }
}
export {
  De as default
};
