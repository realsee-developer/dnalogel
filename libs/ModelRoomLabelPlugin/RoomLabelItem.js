import { SvelteComponent as g, init as h, safe_not_equal as _, append_styles as z, element as f, text as w, space as k, attr as b, set_style as r, toggle_class as p, insert as L, append as d, listen as I, set_data as x, noop as v, detach as y } from "../vendor/svelte/internal/index.js";
import { ROOM_LABEL_BG as B } from "./Assets/roomLabelBg.js";
function C(t) {
  z(t, "svelte-1d7uzh5", ".room-label-item.svelte-1d7uzh5{position:absolute;font-size:0.5rem;z-index:0;transform:none;cursor:pointer;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.room-label-item__text.svelte-1d7uzh5{position:absolute;left:0;top:-4rem;transform:translate(-50%, 0);display:flex;justify-content:center;align-items:center;height:1.25rem;min-width:2rem;padding:0 0.375rem;pointer-events:all;background-size:100% 100%;background-repeat:no-repeat;white-space:nowrap}.room-label-item__bar.svelte-1d7uzh5{position:absolute;top:-2.75rem;height:3rem;width:0.0625rem;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))}.wide.svelte-1d7uzh5{font-size:0.625rem}");
}
function O(t) {
  let e, n, i = (
    /*roomLabel*/
    t[0].name + ""
  ), a, m, l, u, c;
  return {
    c() {
      e = f("div"), n = f("span"), a = w(i), m = k(), l = f("div"), b(n, "class", "room-label-item__text svelte-1d7uzh5"), r(n, "background-image", "url(" + B + ")"), p(
        n,
        "wide",
        /*roomLabel*/
        t[0].name.length > 3
      ), b(l, "class", "room-label-item__bar svelte-1d7uzh5"), b(e, "class", "room-label-item svelte-1d7uzh5"), r(
        e,
        "z-index",
        /*roomLabel*/
        t[0].zIndex
      ), r(
        e,
        "transform",
        /*roomLabel*/
        t[0].transform
      ), r(
        e,
        "opacity",
        /*roomLabel*/
        t[0].visible ? 1 : 0
      );
    },
    m(o, s) {
      L(o, e, s), d(e, n), d(n, a), d(e, m), d(e, l), u || (c = I(
        n,
        "click",
        /*onClick*/
        t[1]
      ), u = !0);
    },
    p(o, [s]) {
      s & /*roomLabel*/
      1 && i !== (i = /*roomLabel*/
      o[0].name + "") && x(a, i), s & /*roomLabel*/
      1 && p(
        n,
        "wide",
        /*roomLabel*/
        o[0].name.length > 3
      ), s & /*roomLabel*/
      1 && r(
        e,
        "z-index",
        /*roomLabel*/
        o[0].zIndex
      ), s & /*roomLabel*/
      1 && r(
        e,
        "transform",
        /*roomLabel*/
        o[0].transform
      ), s & /*roomLabel*/
      1 && r(
        e,
        "opacity",
        /*roomLabel*/
        o[0].visible ? 1 : 0
      );
    },
    i: v,
    o: v,
    d(o) {
      o && y(e), u = !1, c();
    }
  };
}
function R(t, e, n) {
  let { five: i } = e, { roomLabel: a } = e;
  function m() {
    i.setState({
      panoIndex: a.panoIndex,
      mode: "Panorama",
      longitude: a.longitude
    });
  }
  return t.$$set = (l) => {
    "five" in l && n(2, i = l.five), "roomLabel" in l && n(0, a = l.roomLabel);
  }, [a, m, i];
}
class q extends g {
  constructor(e) {
    super(), h(this, e, R, O, _, { five: 2, roomLabel: 0 }, C);
  }
}
export {
  q as default
};
