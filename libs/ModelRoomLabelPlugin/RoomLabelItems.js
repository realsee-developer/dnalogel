var P = Object.defineProperty, A = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var M = Object.getOwnPropertySymbols;
var E = Object.prototype.hasOwnProperty, G = Object.prototype.propertyIsEnumerable;
var R = (o, t, e) => t in o ? P(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, C = (o, t) => {
  for (var e in t || (t = {}))
    E.call(t, e) && R(o, e, t[e]);
  if (M)
    for (var e of M(t))
      G.call(t, e) && R(o, e, t[e]);
  return o;
}, D = (o, t) => A(o, B(t));
import { SvelteComponent as J, init as K, safe_not_equal as N, append_styles as Q, element as X, attr as Y, insert as O, action_destroyer as Z, listen as S, update_keyed_each as $, check_outros as ee, transition_in as T, transition_out as W, detach as V, run_all as te, afterUpdate as oe, onDestroy as ne, globals as re, empty as ie, create_component as se, mount_component as le, destroy_component as ce, group_outros as ae, outro_and_destroy_block as fe } from "../vendor/svelte/internal/index.js";
import { Raycaster as me, Vector3 as w } from "three";
import ue from "./RoomLabelItem.js";
import { svelteResizeObserver as de } from "../shared-utils/svelte/resizeObserver.js";
import "./Assets/roomLabelBg.js";
import "../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
const { Map: pe } = re;
function he(o) {
  Q(o, "svelte-9eg4zi", ".room-labels-container.svelte-9eg4zi{width:100%;height:100%;position:relative;color:#fff}");
}
function U(o, t, e) {
  const c = o.slice();
  return c[13] = t[e], c;
}
function H(o, t) {
  let e, c, r;
  return c = new ue({
    props: {
      roomLabel: (
        /*roomLabelItem*/
        t[13]
      ),
      five: (
        /*five*/
        t[1]
      )
    }
  }), {
    key: o,
    first: null,
    c() {
      e = ie(), se(c.$$.fragment), this.first = e;
    },
    m(n, m) {
      O(n, e, m), le(c, n, m), r = !0;
    },
    p(n, m) {
      t = n;
      const a = {};
      m & /*roomLabels*/
      1 && (a.roomLabel = /*roomLabelItem*/
      t[13]), m & /*five*/
      2 && (a.five = /*five*/
      t[1]), c.$set(a);
    },
    i(n) {
      r || (T(c.$$.fragment, n), r = !0);
    },
    o(n) {
      W(c.$$.fragment, n), r = !1;
    },
    d(n) {
      n && V(e), ce(c, n);
    }
  };
}
function _e(o) {
  let t, e = [], c = new pe(), r, n, m, a = (
    /*roomLabels*/
    o[0]
  );
  const d = (i) => (
    /*roomLabelItem*/
    i[13].id
  );
  for (let i = 0; i < a.length; i += 1) {
    let s = U(o, a, i), u = d(s);
    c.set(u, e[i] = H(u, s));
  }
  return {
    c() {
      t = X("div");
      for (let i = 0; i < e.length; i += 1)
        e[i].c();
      Y(t, "class", "room-labels-container svelte-9eg4zi");
    },
    m(i, s) {
      O(i, t, s);
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(t, null);
      r = !0, n || (m = [
        Z(de.call(null, t)),
        S(
          t,
          "clientWidth",
          /*clientWidth_handler*/
          o[6]
        ),
        S(
          t,
          "clientHeight",
          /*clientHeight_handler*/
          o[7]
        )
      ], n = !0);
    },
    p(i, [s]) {
      s & /*roomLabels, five*/
      3 && (a = /*roomLabels*/
      i[0], ae(), e = $(e, s, d, 1, i, a, c, t, fe, H, null, U), ee());
    },
    i(i) {
      if (!r) {
        for (let s = 0; s < a.length; s += 1)
          T(e[s]);
        r = !0;
      }
    },
    o(i) {
      for (let s = 0; s < e.length; s += 1)
        W(e[s]);
      r = !1;
    },
    d(i) {
      i && V(t);
      for (let s = 0; s < e.length; s += 1)
        e[s].d();
      n = !1, te(m);
    }
  };
}
function ge(o, t, e) {
  var F;
  let c, { five: r } = t, { roomLabels: n } = t, m, a, d = (F = r.model.shownFloor) != null ? F : null;
  function i(l) {
    if (!(d === null || l.floorIndex === d))
      return !1;
    const _ = new me(), p = r.camera.position.clone(), b = new w(l.position.x, l.position.y, l.position.z), f = b.distanceTo(p);
    _.set(p.clone(), b.clone().sub(p).normalize());
    const [h] = r.model.intersectRaycaster(_);
    return !(h && h.distance + 1 < f);
  }
  function s(l, g) {
    const p = new w(l.position.x, l.position.y, l.position.z).clone().project(r.camera), b = Math.ceil((p.x + 1) / 2 * g.x), f = Math.ceil((-p.y + 1) / 2 * g.y);
    return `translate(${b}px, ${f}px)`;
  }
  function u(l) {
    const { rendererSize: g } = l, _ = /* @__PURE__ */ new Map();
    function p(f) {
      const h = _.get(f.id);
      if (h)
        return h;
      const { x: L, y: v, z: k } = f.position, y = new w(L, v, k).clone().distanceTo(r.camera.position);
      return _.set(f.id, y), y;
    }
    return n.map((f) => {
      const h = i(f), L = h ? s(f, g) : f.transform, v = p(f), y = n.filter((x) => x.visible && p(x) < v).length * 10;
      return D(C({}, f), { visible: h, transform: L, zIndex: y });
    });
  }
  function I() {
    e(0, n = u({ rendererSize: c, shownFloor: d }));
  }
  function z(l) {
    e(4, d = l);
  }
  r.on("cameraUpdate", I), r.on("modelShownFloorChange", z), oe(() => {
    e(0, n = u({ rendererSize: c, shownFloor: d }));
  }), ne(() => {
    r.off("cameraUpdate", I), r.off("modelShownFloorChange", z);
  });
  const j = (l) => {
    e(2, m = l.detail);
  }, q = (l) => {
    e(3, a = l.detail);
  };
  return o.$$set = (l) => {
    "five" in l && e(1, r = l.five), "roomLabels" in l && e(0, n = l.roomLabels);
  }, o.$$.update = () => {
    o.$$.dirty & /*containerWidth, containerHeight*/
    12 && e(5, c = { x: m, y: a }), o.$$.dirty & /*rendererSize, shownFloor*/
    48 && e(0, n = u({ rendererSize: c, shownFloor: d }));
  }, [
    n,
    r,
    m,
    a,
    d,
    c,
    j,
    q
  ];
}
class Fe extends J {
  constructor(t) {
    super(), K(this, t, ge, _e, N, { five: 1, roomLabels: 0 }, he);
  }
}
export {
  Fe as default
};
