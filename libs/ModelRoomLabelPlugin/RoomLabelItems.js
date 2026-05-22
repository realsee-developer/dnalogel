var A = Object.defineProperty, B = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var R = Object.getOwnPropertySymbols;
var J = Object.prototype.hasOwnProperty, K = Object.prototype.propertyIsEnumerable;
var x = (o, t, e) => t in o ? A(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, C = (o, t) => {
  for (var e in t || (t = {}))
    J.call(t, e) && x(o, e, t[e]);
  if (R)
    for (var e of R(t))
      K.call(t, e) && x(o, e, t[e]);
  return o;
}, D = (o, t) => B(o, E(t));
import { SvelteComponent as N, init as Q, safe_not_equal as X, append_styles as Y, element as Z, attr as $, insert as T, action_destroyer as ee, listen as U, update_keyed_each as te, check_outros as oe, transition_in as W, transition_out as j, detach as V, run_all as ne, afterUpdate as re, onDestroy as ie, globals as se, empty as le, create_component as ce, mount_component as ae, destroy_component as fe, group_outros as me, outro_and_destroy_block as ue } from "../vendor/svelte/internal/index.js";
import { Raycaster as pe, Vector3 as w } from "three";
import de from "./RoomLabelItem.js";
import { svelteResizeObserver as he } from "../shared-utils/svelte/resizeObserver.js";
import { getGlobalResponsiveFontSize as _e, getCurrentFontSize as be } from "../shared-utils/fontSize.js";
import "./Assets/roomLabelBg.js";
import "../shared-utils/px2rem.js";
import "../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
const { Map: ge } = se;
function ye(o) {
  Y(o, "svelte-9eg4zi", ".room-labels-container.svelte-9eg4zi{width:100%;height:100%;position:relative;color:#fff}");
}
function H(o, t, e) {
  const c = o.slice();
  return c[15] = t[e], c;
}
function O(o, t) {
  let e, c, l;
  return c = new de({
    props: {
      roomLabel: (
        /*roomLabelItem*/
        t[15]
      ),
      five: (
        /*five*/
        t[1]
      ),
      fontSize: (
        /*fontSize*/
        t[4]
      )
    }
  }), {
    key: o,
    first: null,
    c() {
      e = le(), ce(c.$$.fragment), this.first = e;
    },
    m(n, f) {
      T(n, e, f), ae(c, n, f), l = !0;
    },
    p(n, f) {
      t = n;
      const a = {};
      f & /*roomLabels*/
      1 && (a.roomLabel = /*roomLabelItem*/
      t[15]), f & /*five*/
      2 && (a.five = /*five*/
      t[1]), f & /*fontSize*/
      16 && (a.fontSize = /*fontSize*/
      t[4]), c.$set(a);
    },
    i(n) {
      l || (W(c.$$.fragment, n), l = !0);
    },
    o(n) {
      j(c.$$.fragment, n), l = !1;
    },
    d(n) {
      n && V(e), fe(c, n);
    }
  };
}
function ze(o) {
  let t, e = [], c = new ge(), l, n, f, a = (
    /*roomLabels*/
    o[0]
  );
  const u = (r) => (
    /*roomLabelItem*/
    r[15].id
  );
  for (let r = 0; r < a.length; r += 1) {
    let s = H(o, a, r), p = u(s);
    c.set(p, e[r] = O(p, s));
  }
  return {
    c() {
      t = Z("div");
      for (let r = 0; r < e.length; r += 1)
        e[r].c();
      $(t, "class", "room-labels-container svelte-9eg4zi");
    },
    m(r, s) {
      T(r, t, s);
      for (let p = 0; p < e.length; p += 1)
        e[p] && e[p].m(t, null);
      l = !0, n || (f = [
        ee(he.call(null, t)),
        U(
          t,
          "clientWidth",
          /*clientWidth_handler*/
          o[7]
        ),
        U(
          t,
          "clientHeight",
          /*clientHeight_handler*/
          o[8]
        )
      ], n = !0);
    },
    p(r, [s]) {
      s & /*roomLabels, five, fontSize*/
      19 && (a = /*roomLabels*/
      r[0], me(), e = te(e, s, u, 1, r, a, c, t, ue, O, null, H), oe());
    },
    i(r) {
      if (!l) {
        for (let s = 0; s < a.length; s += 1)
          W(e[s]);
        l = !0;
      }
    },
    o(r) {
      for (let s = 0; s < e.length; s += 1)
        j(e[s]);
      l = !1;
    },
    d(r) {
      r && V(t);
      for (let s = 0; s < e.length; s += 1)
        e[s].d();
      n = !1, ne(f);
    }
  };
}
function Le(o, t, e) {
  var S;
  let c, { five: l } = t, { roomLabels: n } = t, f, a, u = (S = l.model.shownFloor) != null ? S : null;
  const r = _e();
  let s = be();
  typeof r == "object" && "subscribe" in r && r.subscribe((i) => {
    e(4, s = i);
  });
  function p(i) {
    if (!(u === null || i.floorIndex === u))
      return !1;
    const _ = new pe(), d = l.camera.position.clone(), g = new w(i.position.x, i.position.y, i.position.z), m = g.distanceTo(d);
    _.set(d.clone(), g.clone().sub(d).normalize());
    const [h] = l.model.intersectRaycaster(_);
    return !(h && h.distance + 1 < m);
  }
  function q(i, b) {
    const d = new w(i.position.x, i.position.y, i.position.z).clone().project(l.camera), g = Math.ceil((d.x + 1) / 2 * b.x), m = Math.ceil((-d.y + 1) / 2 * b.y);
    return `translate(${g}px, ${m}px)`;
  }
  function z(i) {
    const { rendererSize: b } = i, _ = /* @__PURE__ */ new Map();
    function d(m) {
      const h = _.get(m.id);
      if (h)
        return h;
      const { x: L, y: v, z: k } = m.position, y = new w(L, v, k).clone().distanceTo(l.camera.position);
      return _.set(m.id, y), y;
    }
    return n.map((m) => {
      const h = p(m), L = h ? q(m, b) : m.transform, v = d(m), y = n.filter((M) => M.visible && d(M) < v).length * 10;
      return D(C({}, m), { visible: h, transform: L, zIndex: y });
    });
  }
  function F() {
    e(0, n = z({ rendererSize: c, shownFloor: u }));
  }
  function I(i) {
    e(5, u = i);
  }
  l.on("cameraUpdate", F), l.on("modelShownFloorChange", I), re(() => {
    e(0, n = z({ rendererSize: c, shownFloor: u }));
  }), ie(() => {
    l.off("cameraUpdate", F), l.off("modelShownFloorChange", I);
  });
  const G = (i) => {
    e(2, f = i.detail);
  }, P = (i) => {
    e(3, a = i.detail);
  };
  return o.$$set = (i) => {
    "five" in i && e(1, l = i.five), "roomLabels" in i && e(0, n = i.roomLabels);
  }, o.$$.update = () => {
    o.$$.dirty & /*containerWidth, containerHeight*/
    12 && e(6, c = { x: f, y: a }), o.$$.dirty & /*rendererSize, shownFloor*/
    96 && e(0, n = z({ rendererSize: c, shownFloor: u }));
  }, [
    n,
    l,
    f,
    a,
    s,
    u,
    c,
    G,
    P
  ];
}
class Ce extends N {
  constructor(t) {
    super(), Q(this, t, Le, ze, X, { five: 1, roomLabels: 0 }, ye);
  }
}
export {
  Ce as default
};
