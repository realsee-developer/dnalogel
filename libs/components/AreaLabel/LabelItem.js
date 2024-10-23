import { SvelteComponent as w, init as C, safe_not_equal as D, append_styles as N, element as v, attr as k, set_style as f, insert as b, noop as y, detach as _, onMount as L, onDestroy as B, text as M, space as O, toggle_class as z, append as q, listen as A, is_function as E, set_data as G, binding_callbacks as R } from "../../vendor/svelte/internal/index.js";
import { ROOM_LABEL_BG as S } from "./Assets/roomLabelBg.js";
function F(i) {
  N(i, "svelte-1s88cj8", ".room-label-item.svelte-1s88cj8{position:absolute;font-size:0.5rem;transform:none;cursor:pointer;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#fff}.room-label-item__text.svelte-1s88cj8{position:absolute;left:0;top:-4rem;transform:translate(-50%, 0);display:flex;justify-content:center;align-items:center;height:1.25rem;min-width:2rem;padding:0 0.375rem;pointer-events:all;background-size:100% 100%;background-repeat:no-repeat;white-space:nowrap}.room-label-item__bar.svelte-1s88cj8{position:absolute;top:-2.75rem;height:3rem;width:0.0625rem;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))}.wide.svelte-1s88cj8{font-size:0.625rem}");
}
function j(i) {
  let e, n, l, o, a, m;
  return {
    c() {
      e = v("span"), n = M(
        /*content*/
        i[0]
      ), l = O(), o = v("div"), k(e, "class", "room-label-item__text svelte-1s88cj8"), f(e, "background-image", "url(" + S + ")"), z(
        e,
        "wide",
        /*content*/
        i[0].length > 3
      ), k(o, "class", "room-label-item__bar svelte-1s88cj8");
    },
    m(r, s) {
      b(r, e, s), q(e, n), b(r, l, s), b(r, o, s), a || (m = A(e, "click", function() {
        E(
          /*onClick*/
          i[4]
        ) && i[4].apply(this, arguments);
      }), a = !0);
    },
    p(r, s) {
      i = r, s & /*content*/
      1 && G(
        n,
        /*content*/
        i[0]
      ), s & /*content*/
      1 && z(
        e,
        "wide",
        /*content*/
        i[0].length > 3
      );
    },
    d(r) {
      r && _(e), r && _(l), r && _(o), a = !1, m();
    }
  };
}
function H(i) {
  let e, n = !/*rendererIfNeed*/
  i[5] && j(i);
  return {
    c() {
      e = v("div"), n && n.c(), k(e, "class", "room-label-item svelte-1s88cj8"), f(
        e,
        "z-index",
        /*zIndex*/
        i[2]
      ), f(
        e,
        "transform",
        /*transform*/
        i[3]
      ), f(
        e,
        "opacity",
        /*opacity*/
        i[1]
      ), f(
        e,
        "visibility",
        /*visibility*/
        i[7]
      );
    },
    m(l, o) {
      b(l, e, o), n && n.m(e, null), i[10](e);
    },
    p(l, [o]) {
      /*rendererIfNeed*/
      l[5] ? n && (n.d(1), n = null) : n ? n.p(l, o) : (n = j(l), n.c(), n.m(e, null)), o & /*zIndex*/
      4 && f(
        e,
        "z-index",
        /*zIndex*/
        l[2]
      ), o & /*transform*/
      8 && f(
        e,
        "transform",
        /*transform*/
        l[3]
      ), o & /*opacity*/
      2 && f(
        e,
        "opacity",
        /*opacity*/
        l[1]
      ), o & /*visibility*/
      128 && f(
        e,
        "visibility",
        /*visibility*/
        l[7]
      );
    },
    i: y,
    o: y,
    d(l) {
      l && _(e), n && n.d(), i[10](null);
    }
  };
}
function J(i, e, n) {
  let l, { content: o } = e, { visible: a = !0 } = e, { opacity: m = 1 } = e, { zIndex: r = 0 } = e, { transform: s = void 0 } = e, { onClick: h = () => {
  } } = e, { rendererIfNeed: c = void 0 } = e, { rendererData: g = void 0 } = e, d, u;
  L(() => {
    d && typeof c == "function" && (u = c(d, g));
  }), B(() => {
    u == null || u();
  });
  function I(t) {
    R[t ? "unshift" : "push"](() => {
      d = t, n(6, d);
    });
  }
  return i.$$set = (t) => {
    "content" in t && n(0, o = t.content), "visible" in t && n(8, a = t.visible), "opacity" in t && n(1, m = t.opacity), "zIndex" in t && n(2, r = t.zIndex), "transform" in t && n(3, s = t.transform), "onClick" in t && n(4, h = t.onClick), "rendererIfNeed" in t && n(5, c = t.rendererIfNeed), "rendererData" in t && n(9, g = t.rendererData);
  }, i.$$.update = () => {
    i.$$.dirty & /*visible*/
    256 && n(7, l = a ? "visible" : "hidden");
  }, [
    o,
    m,
    r,
    s,
    h,
    c,
    d,
    l,
    a,
    g,
    I
  ];
}
class Q extends w {
  constructor(e) {
    super(), C(
      this,
      e,
      J,
      H,
      D,
      {
        content: 0,
        visible: 8,
        opacity: 1,
        zIndex: 2,
        transform: 3,
        onClick: 4,
        rendererIfNeed: 5,
        rendererData: 9
      },
      F
    );
  }
}
export {
  Q as LabelItem
};
