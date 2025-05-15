import { SvelteComponent as S, init as j, safe_not_equal as q, append_styles as A, element as I, attr as p, set_style as s, insert as g, noop as N, detach as y, onMount as E, onDestroy as F, text as G, space as P, append as R, listen as T, is_function as Y, set_data as H, binding_callbacks as z } from "../../vendor/svelte/internal/index.js";
import { ROOM_LABEL_BG as J } from "./Assets/roomLabelBg.js";
import { rad2Deg as K } from "../../shared-utils/math/rad2Deg.js";
function Q(i) {
  A(i, "svelte-16mrlad", ".room-label-item.svelte-16mrlad{position:absolute;font-size:0.625rem;transform:none;cursor:pointer;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#fff}.room-label-item__text.svelte-16mrlad{position:absolute;left:0;top:-4rem;transform:translate(-50%, 0);display:flex;justify-content:center;align-items:center;height:1.25rem;min-width:2rem;padding:0 0.375rem;pointer-events:all;background-size:100% 100%;background-repeat:no-repeat;white-space:nowrap}.room-label-item__bar.svelte-16mrlad{position:absolute;transform-origin:top;top:-2.75rem;height:3rem;width:0.0625rem;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))}");
}
function L(i) {
  let e, n, o, l, r, d;
  return {
    c() {
      e = I("span"), n = G(
        /*content*/
        i[0]
      ), o = P(), l = I("div"), p(e, "class", "room-label-item__text svelte-16mrlad"), s(e, "background-image", "url(" + J + ")"), p(l, "class", "room-label-item__bar svelte-16mrlad");
    },
    m(f, a) {
      g(f, e, a), R(e, n), i[13](e), g(f, o, a), g(f, l, a), i[14](l), r || (d = T(e, "click", function() {
        Y(
          /*onClick*/
          i[4]
        ) && i[4].apply(this, arguments);
      }), r = !0);
    },
    p(f, a) {
      i = f, a & /*content*/
      1 && H(
        n,
        /*content*/
        i[0]
      );
    },
    d(f) {
      f && y(e), i[13](null), f && y(o), f && y(l), i[14](null), r = !1, d();
    }
  };
}
function V(i) {
  let e, n = !/*rendererIfNeed*/
  i[5] && L(i);
  return {
    c() {
      e = I("div"), n && n.c(), p(e, "class", "room-label-item svelte-16mrlad"), s(
        e,
        "z-index",
        /*zIndex*/
        i[2]
      ), s(
        e,
        "transform",
        /*transform*/
        i[3]
      ), s(
        e,
        "opacity",
        /*opacity*/
        i[1]
      ), s(
        e,
        "visibility",
        /*visibility*/
        i[9]
      );
    },
    m(o, l) {
      g(o, e, l), n && n.m(e, null), i[15](e);
    },
    p(o, [l]) {
      /*rendererIfNeed*/
      o[5] ? n && (n.d(1), n = null) : n ? n.p(o, l) : (n = L(o), n.c(), n.m(e, null)), l & /*zIndex*/
      4 && s(
        e,
        "z-index",
        /*zIndex*/
        o[2]
      ), l & /*transform*/
      8 && s(
        e,
        "transform",
        /*transform*/
        o[3]
      ), l & /*opacity*/
      2 && s(
        e,
        "opacity",
        /*opacity*/
        o[1]
      ), l & /*visibility*/
      512 && s(
        e,
        "visibility",
        /*visibility*/
        o[9]
      );
    },
    i: N,
    o: N,
    d(o) {
      o && y(e), n && n.d(), i[15](null);
    }
  };
}
function W(i, e, n) {
  let o, { content: l } = e, { five: r = void 0 } = e, { visible: d = !0 } = e, { opacity: f = 1 } = e, { zIndex: a = 0 } = e, { transform: C = void 0 } = e, { onClick: D = () => {
  } } = e, { rendererIfNeed: b = void 0 } = e, { rendererData: h = void 0 } = e, u, m, c, _;
  const k = (t) => {
    if (r.state.mode !== "Panorama") {
      const w = -(10 + 54 * (1 - K(t.latitude) / 90)), v = w + 20, O = v >= 0 ? 0 : -v / 44;
      n(7, m.style.transform = `scaleY(${O})`, m), n(7, m.style.top = `${v}px`, m), n(8, c.style.top = `${w}px`, c);
    }
  };
  E(() => {
    u && typeof b == "function" && (_ = b(u, h)), r && (k(r.camera.pose), r.on("cameraUpdate", k));
  }), F(() => {
    _ == null || _(), r == null || r.off("cameraUpdate", k);
  });
  function U(t) {
    z[t ? "unshift" : "push"](() => {
      c = t, n(8, c);
    });
  }
  function B(t) {
    z[t ? "unshift" : "push"](() => {
      m = t, n(7, m);
    });
  }
  function M(t) {
    z[t ? "unshift" : "push"](() => {
      u = t, n(6, u);
    });
  }
  return i.$$set = (t) => {
    "content" in t && n(0, l = t.content), "five" in t && n(10, r = t.five), "visible" in t && n(11, d = t.visible), "opacity" in t && n(1, f = t.opacity), "zIndex" in t && n(2, a = t.zIndex), "transform" in t && n(3, C = t.transform), "onClick" in t && n(4, D = t.onClick), "rendererIfNeed" in t && n(5, b = t.rendererIfNeed), "rendererData" in t && n(12, h = t.rendererData);
  }, i.$$.update = () => {
    i.$$.dirty & /*visible*/
    2048 && n(9, o = d ? "visible" : "hidden");
  }, [
    l,
    f,
    a,
    C,
    D,
    b,
    u,
    m,
    c,
    o,
    r,
    d,
    h,
    U,
    B,
    M
  ];
}
class ne extends S {
  constructor(e) {
    super(), j(
      this,
      e,
      W,
      V,
      q,
      {
        content: 0,
        five: 10,
        visible: 11,
        opacity: 1,
        zIndex: 2,
        transform: 3,
        onClick: 4,
        rendererIfNeed: 5,
        rendererData: 12
      },
      Q
    );
  }
}
export {
  ne as LabelItem
};
