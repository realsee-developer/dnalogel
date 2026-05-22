import { SvelteComponent as Y, init as Z, safe_not_equal as J, append_styles as K, element as M, attr as N, set_style as o, insert as v, noop as T, detach as S, onMount as Q, onDestroy as V, text as X, space as x, append as $, listen as ee, is_function as ie, set_data as ne, binding_callbacks as B } from "../../vendor/svelte/internal/index.js";
import { ROOM_LABEL_PC_BG as U, ROOM_LABEL_MOBILE_BG as C } from "./Assets/roomLabelBg.js";
import { rad2Deg as te } from "../../shared-utils/math/rad2Deg.js";
import { FONT_SIZE_MAP as re } from "./Assets/fontSize.js";
import { px2rem as s } from "../../shared-utils/px2rem.js";
function oe(i) {
  K(i, "svelte-c40h79", ".room-label-item.svelte-c40h79{position:absolute;font-size:0.625rem;transform:none;cursor:pointer;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#fff}.room-label-item__text.svelte-c40h79{position:absolute;left:0;transform:translate(-50%, 0);display:flex;justify-content:center;align-items:center;pointer-events:none;white-space:nowrap;position:relative;box-shadow:0 0.1875rem 0.8125rem 0 #00000033;font-weight:500;border-radius:var(--border-radius);-o-border-image:var(--bg-image) var(--border-radius-num) / var(--border-radius) / 0rem stretch;border-image:var(--bg-image) var(--border-radius-num) fill / var(--border-radius) / 0rem stretch;box-sizing:border-box}.room-label-item__bar.svelte-c40h79{position:absolute;transform-origin:top;height:3rem;width:0.0625rem;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))}");
}
function F(i) {
  let e, n, l, r, h, u;
  return {
    c() {
      var m, f, b, a;
      e = M("span"), n = X(
        /*content*/
        i[0]
      ), l = x(), r = M("div"), N(e, "class", "room-label-item__text svelte-c40h79"), o(
        e,
        "font-size",
        /*nameSize*/
        i[13]
      ), o(
        e,
        "padding",
        /*paddingStyle*/
        i[12]
      ), o(
        e,
        "line-height",
        /*textLineHeightRem*/
        i[11]
      ), o(
        e,
        "--bg-image",
        /*fontConfig*/
        ((m = i[6]) == null ? void 0 : m.name) >= 16 ? `url(${U})` : `url(${C})`
      ), o(e, "min-width", s(
        /*fontConfig*/
        (f = i[6]) == null ? void 0 : f.minWidth
      )), o(
        e,
        "--border-radius",
        /*fontConfig*/
        ((b = i[6]) == null ? void 0 : b.name) >= 16 ? s(4) : s(2)
      ), o(
        e,
        "--border-radius-num",
        /*fontConfig*/
        ((a = i[6]) == null ? void 0 : a.name) >= 16 ? 8 : 4
      ), N(r, "class", "room-label-item__bar svelte-c40h79"), o(r, "top", s(
        /*barTopPosition*/
        i[10]
      ));
    },
    m(m, f) {
      v(m, e, f), $(e, n), i[22](e), v(m, l, f), v(m, r, f), i[23](r), h || (u = ee(e, "click", function() {
        ie(
          /*onClick*/
          i[4]
        ) && i[4].apply(this, arguments);
      }), h = !0);
    },
    p(m, f) {
      var b, a, _, g;
      i = m, f & /*content*/
      1 && ne(
        n,
        /*content*/
        i[0]
      ), f & /*nameSize*/
      8192 && o(
        e,
        "font-size",
        /*nameSize*/
        i[13]
      ), f & /*paddingStyle*/
      4096 && o(
        e,
        "padding",
        /*paddingStyle*/
        i[12]
      ), f & /*textLineHeightRem*/
      2048 && o(
        e,
        "line-height",
        /*textLineHeightRem*/
        i[11]
      ), f & /*fontConfig*/
      64 && o(
        e,
        "--bg-image",
        /*fontConfig*/
        ((b = i[6]) == null ? void 0 : b.name) >= 16 ? `url(${U})` : `url(${C})`
      ), f & /*fontConfig*/
      64 && o(e, "min-width", s(
        /*fontConfig*/
        (a = i[6]) == null ? void 0 : a.minWidth
      )), f & /*fontConfig*/
      64 && o(
        e,
        "--border-radius",
        /*fontConfig*/
        ((_ = i[6]) == null ? void 0 : _.name) >= 16 ? s(4) : s(2)
      ), f & /*fontConfig*/
      64 && o(
        e,
        "--border-radius-num",
        /*fontConfig*/
        ((g = i[6]) == null ? void 0 : g.name) >= 16 ? 8 : 4
      ), f & /*barTopPosition*/
      1024 && o(r, "top", s(
        /*barTopPosition*/
        i[10]
      ));
    },
    d(m) {
      m && S(e), i[22](null), m && S(l), m && S(r), i[23](null), h = !1, u();
    }
  };
}
function fe(i) {
  let e, n = !/*rendererIfNeed*/
  i[5] && F(i);
  return {
    c() {
      e = M("div"), n && n.c(), N(e, "class", "room-label-item svelte-c40h79"), o(
        e,
        "z-index",
        /*zIndex*/
        i[2]
      ), o(
        e,
        "transform",
        /*transform*/
        i[3]
      ), o(
        e,
        "opacity",
        /*opacity*/
        i[1]
      ), o(
        e,
        "visibility",
        /*visibility*/
        i[14]
      );
    },
    m(l, r) {
      v(l, e, r), n && n.m(e, null), i[24](e);
    },
    p(l, [r]) {
      /*rendererIfNeed*/
      l[5] ? n && (n.d(1), n = null) : n ? n.p(l, r) : (n = F(l), n.c(), n.m(e, null)), r & /*zIndex*/
      4 && o(
        e,
        "z-index",
        /*zIndex*/
        l[2]
      ), r & /*transform*/
      8 && o(
        e,
        "transform",
        /*transform*/
        l[3]
      ), r & /*opacity*/
      2 && o(
        e,
        "opacity",
        /*opacity*/
        l[1]
      ), r & /*visibility*/
      16384 && o(
        e,
        "visibility",
        /*visibility*/
        l[14]
      );
    },
    i: T,
    o: T,
    d(l) {
      l && S(e), n && n.d(), i[24](null);
    }
  };
}
function le(i, e, n) {
  let l, r, h, u, m, f, b, a, _, { content: g } = e, { five: d = void 0 } = e, { visible: w = !0 } = e, { opacity: E = 1 } = e, { zIndex: H = 0 } = e, { transform: P = void 0 } = e, { onClick: A = () => {
  } } = e, { rendererIfNeed: I = void 0 } = e, { rendererData: L = void 0 } = e, { fontSize: D } = e, y, c, z, k;
  const O = (t) => {
    if (d.state.mode !== "Panorama") {
      const R = -(10 + 54 * (1 - te(t.latitude) / 90)), p = R + a, q = p >= 0 ? 0 : -p / -_;
      n(8, c.style.transform = `scaleY(${q})`, c), n(8, c.style.top = s(p), c), n(9, z.style.top = s(R), z);
    }
  };
  Q(() => {
    y && typeof I == "function" && (k = I(y, L)), d && (O(d.camera.pose), d.on("cameraUpdate", O));
  }), V(() => {
    k == null || k(), d == null || d.off("cameraUpdate", O);
  });
  function G(t) {
    B[t ? "unshift" : "push"](() => {
      z = t, n(9, z);
    });
  }
  function W(t) {
    B[t ? "unshift" : "push"](() => {
      c = t, n(8, c);
    });
  }
  function j(t) {
    B[t ? "unshift" : "push"](() => {
      y = t, n(7, y);
    });
  }
  return i.$$set = (t) => {
    "content" in t && n(0, g = t.content), "five" in t && n(15, d = t.five), "visible" in t && n(16, w = t.visible), "opacity" in t && n(1, E = t.opacity), "zIndex" in t && n(2, H = t.zIndex), "transform" in t && n(3, P = t.transform), "onClick" in t && n(4, A = t.onClick), "rendererIfNeed" in t && n(5, I = t.rendererIfNeed), "rendererData" in t && n(17, L = t.rendererData), "fontSize" in t && n(18, D = t.fontSize);
  }, i.$$.update = () => {
    var t;
    i.$$.dirty & /*visible*/
    65536 && n(14, l = w ? "visible" : "hidden"), i.$$.dirty & /*fontSize*/
    262144 && n(6, r = re[D]), i.$$.dirty & /*fontConfig*/
    64 && n(13, h = s(r == null ? void 0 : r.name)), i.$$.dirty & /*fontConfig*/
    64 && n(20, u = (t = r == null ? void 0 : r.padding) == null ? void 0 : t.room), i.$$.dirty & /*padding*/
    1048576 && n(12, m = `${s(u[1])} ${s(u[0])}`), i.$$.dirty & /*fontConfig*/
    64 && n(21, f = r == null ? void 0 : r.lineHeight), i.$$.dirty & /*textLineHeight*/
    2097152 && n(11, b = s(f)), i.$$.dirty & /*textLineHeight, padding*/
    3145728 && n(19, a = f + u[1] * 2), i.$$.dirty & /*textHeight*/
    524288 && n(10, _ = -(64 - a));
  }, [
    g,
    E,
    H,
    P,
    A,
    I,
    r,
    y,
    c,
    z,
    _,
    b,
    m,
    h,
    l,
    d,
    w,
    L,
    D,
    a,
    u,
    f,
    G,
    W,
    j
  ];
}
class he extends Y {
  constructor(e) {
    super(), Z(
      this,
      e,
      le,
      fe,
      J,
      {
        content: 0,
        five: 15,
        visible: 16,
        opacity: 1,
        zIndex: 2,
        transform: 3,
        onClick: 4,
        rendererIfNeed: 5,
        rendererData: 17,
        fontSize: 18
      },
      oe
    );
  }
}
export {
  he as LabelItem
};
