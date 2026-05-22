import { SvelteComponent as h, init as S, safe_not_equal as y, append_styles as L, element as _, text as I, space as k, attr as c, toggle_class as v, set_style as a, insert as O, append as b, listen as P, set_data as x, noop as w, detach as A } from "../vendor/svelte/internal/index.js";
import { ROOM_LABEL_BG as B } from "./Assets/roomLabelBg.js";
import { FONT_SIZE_MAP as E } from "../shared-utils/fontSize.js";
import { px2rem as p } from "../shared-utils/px2rem.js";
function H(t) {
  L(t, "svelte-12g01uw", ".room-label-item.svelte-12g01uw{position:absolute;font-size:0.5rem;z-index:0;transform:none;cursor:pointer;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.room-label-item__text.svelte-12g01uw{position:absolute;left:0;top:-4rem;transform:translate(-50%, 0);display:flex;justify-content:center;align-items:center;min-width:2rem;pointer-events:all;white-space:nowrap;-o-border-image:var(--bg-image) 3 / 0.0625rem / 0rem stretch;border-image:var(--bg-image) 3 fill / 0.0625rem / 0rem stretch;box-sizing:border-box}.room-label-item__bar.svelte-12g01uw{position:absolute;height:3rem;width:0.0625rem;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))}.wide.svelte-12g01uw{font-size:0.625rem}");
}
function M(t) {
  let i, e, n = (
    /*roomLabel*/
    t[0].name + ""
  ), d, s = `url(${B})`, u, l, f, g;
  return {
    c() {
      i = _("div"), e = _("span"), d = I(n), u = k(), l = _("div"), c(e, "class", "room-label-item__text svelte-12g01uw"), v(
        e,
        "wide",
        /*roomLabel*/
        t[0].name.length > 3
      ), a(
        e,
        "font-size",
        /*nameSize*/
        t[3]
      ), a(
        e,
        "padding",
        /*paddingStyle*/
        t[2]
      ), a(e, "--bg-image", s), c(l, "class", "room-label-item__bar svelte-12g01uw"), a(
        l,
        "top",
        /*barTopPosition*/
        t[1]
      ), c(i, "class", "room-label-item svelte-12g01uw"), a(
        i,
        "z-index",
        /*roomLabel*/
        t[0].zIndex
      ), a(
        i,
        "transform",
        /*roomLabel*/
        t[0].transform
      ), a(
        i,
        "opacity",
        /*roomLabel*/
        t[0].visible ? 1 : 0
      );
    },
    m(o, r) {
      O(o, i, r), b(i, e), b(e, d), b(i, u), b(i, l), f || (g = P(
        e,
        "click",
        /*onClick*/
        t[4]
      ), f = !0);
    },
    p(o, [r]) {
      r & /*roomLabel*/
      1 && n !== (n = /*roomLabel*/
      o[0].name + "") && x(d, n), r & /*roomLabel*/
      1 && v(
        e,
        "wide",
        /*roomLabel*/
        o[0].name.length > 3
      ), r & /*nameSize*/
      8 && a(
        e,
        "font-size",
        /*nameSize*/
        o[3]
      ), r & /*paddingStyle*/
      4 && a(
        e,
        "padding",
        /*paddingStyle*/
        o[2]
      ), r & /*barTopPosition*/
      2 && a(
        l,
        "top",
        /*barTopPosition*/
        o[1]
      ), r & /*roomLabel*/
      1 && a(
        i,
        "z-index",
        /*roomLabel*/
        o[0].zIndex
      ), r & /*roomLabel*/
      1 && a(
        i,
        "transform",
        /*roomLabel*/
        o[0].transform
      ), r & /*roomLabel*/
      1 && a(
        i,
        "opacity",
        /*roomLabel*/
        o[0].visible ? 1 : 0
      );
    },
    i: w,
    o: w,
    d(o) {
      o && A(i), f = !1, g();
    }
  };
}
function R(t, i, e) {
  let n, d, s, u, l, f, { five: g } = i, { roomLabel: o } = i, { fontSize: r = "md" } = i;
  function z() {
    g.setState({
      panoIndex: o.panoIndex,
      mode: "Panorama",
      longitude: o.longitude
    });
  }
  return t.$$set = (m) => {
    "five" in m && e(5, g = m.five), "roomLabel" in m && e(0, o = m.roomLabel), "fontSize" in m && e(6, r = m.fontSize);
  }, t.$$.update = () => {
    var m;
    t.$$.dirty & /*fontSize*/
    64 && e(9, n = E[r]), t.$$.dirty & /*fontConfig*/
    512 && e(3, d = p((n == null ? void 0 : n.name) || 12)), t.$$.dirty & /*fontConfig*/
    512 && e(8, s = ((m = n == null ? void 0 : n.padding) == null ? void 0 : m.room) || [6, 5]), t.$$.dirty & /*padding*/
    256 && e(2, u = `${p(s[1])} ${p(s[0])}`), t.$$.dirty & /*fontConfig, padding*/
    768 && e(7, l = ((n == null ? void 0 : n.lineHeight) || 14) + s[1] * 2), t.$$.dirty & /*textHeight*/
    128 && e(1, f = p(-(64 - l)));
  }, [
    o,
    f,
    u,
    d,
    z,
    g,
    r,
    l,
    s,
    n
  ];
}
class G extends h {
  constructor(i) {
    super(), S(this, i, R, M, y, { five: 5, roomLabel: 0, fontSize: 6 }, H);
  }
}
export {
  G as default
};
