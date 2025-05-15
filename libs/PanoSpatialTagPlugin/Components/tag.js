import { SvelteComponent as M, init as j, safe_not_equal as I, append_styles as L, element as c, space as Y, attr as P, set_style as p, toggle_class as h, insert as O, append as r, listen as q, noop as D, detach as A, onMount as E, afterUpdate as U, onDestroy as B, binding_callbacks as F } from "../../vendor/svelte/internal/index.js";
import { currentTarget as G } from "../store.js";
import "../../vendor/svelte/store/index.js";
function J(i) {
  L(i, "svelte-9m6drd", `.PanoSpatialTagPlugin__tag-x.svelte-9m6drd.svelte-9m6drd{position:absolute;top:0;left:0;display:block;white-space:nowrap;box-sizing:border-box;width:25rem;height:14rem;color:#fff;transform:translate(0, -100%);transition:height 0.5s linear}.PanoSpatialTagPlugin__tag-shadow.svelte-9m6drd.svelte-9m6drd{content:'';position:absolute;width:30rem;height:30rem;top:-15rem;left:-15rem;z-index:-1;opacity:0;transition:opacity 0.8s 0.6s;background:url('https://vrlab-image4.ljcdn.com/release/web/PanoSpatialTagPlugin__blur.png');background-size:30rem 30rem}.PanoSpatialTagPlugin__tag-line.svelte-9m6drd.svelte-9m6drd{position:absolute;left:-1rem;width:2rem;height:100%;overflow:hidden}.PanoSpatialTagPlugin__tag-flagpole.svelte-9m6drd.svelte-9m6drd{position:absolute;top:0;left:1rem;height:calc(100% - 1.5rem);width:0.15rem;background:linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.1));box-shadow:0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);opacity:0;transform:translate(-50%, 60%) scaleY(0);transition:transform 0.4s cubic-bezier(0.44, 0.44, 0.74, 0.98), opacity 0.4s cubic-bezier(0.44, 0.44, 0.74, 0.98), width 0.5s linear,
      height 0.5s linear;transform-origin:center bottom}.PanoSpatialTagPlugin__tag-line1.svelte-9m6drd.svelte-9m6drd{position:absolute;top:0;left:0.3rem;height:1.8rem;width:0.1rem;background:#fff;opacity:0;transform:translate(-50%, 200%) scaleY(0);transform-origin:center top}.PanoSpatialTagPlugin__tag-line2.svelte-9m6drd.svelte-9m6drd{position:absolute;top:0;left:0.5rem;height:1.8rem;width:0.1rem;background:#fff;opacity:0;transform:translate(-50%, 200%) scaleY(0);transform-origin:center top}.PanoSpatialTagPlugin__tag-show.svelte-9m6drd .PanoSpatialTagPlugin__tag-line1.svelte-9m6drd{animation:svelte-9m6drd-PanoSpatialTagPlugin__tag-line1 linear 0.5s forwards 0.45s}.PanoSpatialTagPlugin__tag-show.svelte-9m6drd .PanoSpatialTagPlugin__tag-line2.svelte-9m6drd{animation:svelte-9m6drd-PanoSpatialTagPlugin__tag-line2 linear 0.5s forwards 0.65s}.PanoSpatialTagPlugin__tag-x.PanoSpatialTagPlugin__tag-upside-down.svelte-9m6drd.svelte-9m6drd{transform:translate(0, 0)}.PanoSpatialTagPlugin__tag-upside-down.svelte-9m6drd .PanoSpatialTagPlugin__tag-line.svelte-9m6drd{transform:scaleY(-1)}.PanoSpatialTagPlugin__tag-animate.svelte-9m6drd.svelte-9m6drd{position:relative;height:100%;overflow:hidden;transform-origin:left top;transition:transform 0.5s linear}.PanoSpatialTagPlugin__tag-upside-down.svelte-9m6drd .PanoSpatialTagPlugin__tag-animate.svelte-9m6drd{transform-origin:left bottom}.PanoSpatialTagPlugin__tag-content.svelte-9m6drd.svelte-9m6drd{position:absolute;display:inline-block;transform:translate(-100%, 0);transition:transform 0.9s cubic-bezier(0, 0.65, 0.16, 1.08) 0.6s;padding-left:0.5rem;font-size:1rem}.PanoSpatialTagPlugin__tag-upside-down.svelte-9m6drd .PanoSpatialTagPlugin__tag-content.svelte-9m6drd{bottom:0}.PanoSpatialTagPlugin__tag-show.svelte-9m6drd .PanoSpatialTagPlugin__tag-flagpole.svelte-9m6drd{opacity:1;transform:translate(-50%, 0) scaleY(1)}.PanoSpatialTagPlugin__tag-upside-down.svelte-9m6drd .PanoSpatialTagPlugin__tag-shadow.svelte-9m6drd{top:unset;bottom:-15rem}.PanoSpatialTagPlugin__tag-show.svelte-9m6drd .PanoSpatialTagPlugin__tag-shadow.svelte-9m6drd{opacity:0.32}.PanoSpatialTagPlugin__tag-show.svelte-9m6drd .PanoSpatialTagPlugin__tag-content.svelte-9m6drd{transform:translate(0, 0)}.PanoSpatialTagPlugin__tag-hide.svelte-9m6drd .PanoSpatialTagPlugin__tag-flagpole.svelte-9m6drd{opacity:0;transform:translate(-50%, 60%) scaleY(0);transition:transform 0.5s 0.55s, opacity 0.4s 0.55s}.PanoSpatialTagPlugin__tag-hide.svelte-9m6drd .PanoSpatialTagPlugin__tag-shadow.svelte-9m6drd{opacity:0;transition:opacity 0.8s}.PanoSpatialTagPlugin__tag-hide.svelte-9m6drd .PanoSpatialTagPlugin__tag-content.svelte-9m6drd{transform:translate(-100%, 0);transition:transform 0.6s cubic-bezier(0.53, 0.06, 0.88, 0.59)}.PanoSpatialTagPlugin__tag-hide.svelte-9m6drd .PanoSpatialTagPlugin__tag-content .svelte-9m6drd{pointer-events:none}.PanoSpatialTagPlugin__tag-hide.svelte-9m6drd .PanoSpatialTagPlugin__tag-line1.svelte-9m6drd{opacity:0.5;transform:translate(-50%, 10%) scaleY(0);animation:svelte-9m6drd-PanoSpatialTagPlugin__tag-line1-hide linear 0.28s forwards 0.3s}.PanoSpatialTagPlugin__tag-hide.svelte-9m6drd .PanoSpatialTagPlugin__tag-line2.svelte-9m6drd{opacity:0.5;transform:translate(-50%, 0) scaleY(0);animation:svelte-9m6drd-PanoSpatialTagPlugin__tag-line2-hide linear 0.28s forwards 0.45s}@keyframes svelte-9m6drd-PanoSpatialTagPlugin__tag-line1{0%{opacity:0;transform:translate(-50%, 250%) scaleY(1)}50%{opacity:0.5;transform:translate(-50%, 135%) scaleY(1)}100%{opacity:0.5;transform:translate(-50%, 20%) scaleY(0)}}@keyframes svelte-9m6drd-PanoSpatialTagPlugin__tag-line2{0%{opacity:0;transform:translate(-50%, 250%) scaleY(1)}50%{opacity:0.5;transform:translate(-50%, 125%) scaleY(1)}100%{opacity:0.5;transform:translate(-50%, 0) scaleY(0)}}@keyframes svelte-9m6drd-PanoSpatialTagPlugin__tag-line1-hide{0%{opacity:0.5;transform:translate(-50%, 10%) scaleY(0)}50%{opacity:0.2;transform:translate(-50%, 105%) scaleY(1)}100%{opacity:0;transform:translate(-50%, 200%) scaleY(0)}}@keyframes svelte-9m6drd-PanoSpatialTagPlugin__tag-line2-hide{0%{opacity:0.5;transform:translate(-50%, 0) scaleY(0)}50%{opacity:0.2;transform:translate(-50%, 100%) scaleY(1)}100%{opacity:0;transform:translate(-50%, 200%) scaleY(0)}}`);
}
function K(i) {
  let a, n, g, s, u, b, T, w, v, d, m, o, _, S, y;
  return {
    c() {
      a = c("div"), n = c("div"), g = Y(), s = c("div"), u = c("i"), b = Y(), T = c("i"), w = Y(), v = c("i"), d = Y(), m = c("div"), o = c("div"), P(n, "class", "PanoSpatialTagPlugin__tag-shadow svelte-9m6drd"), p(n, "transform", "translate(" + /*contentWidth*/
      i[7] / 2 * /*contentZoom*/
      i[3] * 3 + "px, " + /*contentHeight*/
      i[8] / 2 * /*upsideDown*/
      (i[1] ? -1 : 1) * /*contentZoom*/
      i[3] * 3 + "px) scale(" + 1 / /*contentZoom*/
      i[3] + ")"), P(u, "class", "PanoSpatialTagPlugin__tag-flagpole svelte-9m6drd"), p(
        u,
        "width",
        /*lineWidthZoom*/
        i[4] + "rem"
      ), P(T, "class", "PanoSpatialTagPlugin__tag-line1 svelte-9m6drd"), P(v, "class", "PanoSpatialTagPlugin__tag-line2 svelte-9m6drd"), P(s, "class", "PanoSpatialTagPlugin__tag-line svelte-9m6drd"), P(o, "class", "PanoSpatialTagPlugin__tag-content svelte-9m6drd"), P(m, "class", "PanoSpatialTagPlugin__tag-animate svelte-9m6drd"), p(m, "transform", "scale(" + /*contentZoom*/
      i[3] * 3 + ")"), P(a, "id", _ = "PanoSpatialTagPlugin__" + /*id*/
      i[0]), p(a, "height", 20 * /*lineHeightZoom*/
      i[5] + "rem"), P(a, "class", "svelte-9m6drd"), h(a, "PanoSpatialTagPlugin__tag-x", !0), h(
        a,
        "PanoSpatialTagPlugin__tag-upside-down",
        /*upsideDown*/
        i[1]
      ), h(
        a,
        "PanoSpatialTagPlugin__tag-show",
        /*show*/
        i[10]
      ), h(
        a,
        "PanoSpatialTagPlugin__tag-hide",
        /*show*/
        i[10] === !1 || /*destroying*/
        i[6]
      );
    },
    m(e, l) {
      O(e, a, l), r(a, n), r(a, g), r(a, s), r(s, u), r(s, b), r(s, T), r(s, w), r(s, v), r(a, d), r(a, m), r(m, o), o.innerHTML = /*content*/
      i[2], i[16](o), S || (y = q(
        o,
        "click",
        /*handleClickContent*/
        i[11]
      ), S = !0);
    },
    p(e, [l]) {
      l & /*contentWidth, contentZoom, contentHeight, upsideDown*/
      394 && p(n, "transform", "translate(" + /*contentWidth*/
      e[7] / 2 * /*contentZoom*/
      e[3] * 3 + "px, " + /*contentHeight*/
      e[8] / 2 * /*upsideDown*/
      (e[1] ? -1 : 1) * /*contentZoom*/
      e[3] * 3 + "px) scale(" + 1 / /*contentZoom*/
      e[3] + ")"), l & /*lineWidthZoom*/
      16 && p(
        u,
        "width",
        /*lineWidthZoom*/
        e[4] + "rem"
      ), l & /*content*/
      4 && (o.innerHTML = /*content*/
      e[2]), l & /*contentZoom*/
      8 && p(m, "transform", "scale(" + /*contentZoom*/
      e[3] * 3 + ")"), l & /*id*/
      1 && _ !== (_ = "PanoSpatialTagPlugin__" + /*id*/
      e[0]) && P(a, "id", _), l & /*lineHeightZoom*/
      32 && p(a, "height", 20 * /*lineHeightZoom*/
      e[5] + "rem"), l & /*upsideDown*/
      2 && h(
        a,
        "PanoSpatialTagPlugin__tag-upside-down",
        /*upsideDown*/
        e[1]
      ), l & /*show*/
      1024 && h(
        a,
        "PanoSpatialTagPlugin__tag-show",
        /*show*/
        e[10]
      ), l & /*show, destroying*/
      1088 && h(
        a,
        "PanoSpatialTagPlugin__tag-hide",
        /*show*/
        e[10] === !1 || /*destroying*/
        e[6]
      );
    },
    i: D,
    o: D,
    d(e) {
      e && A(a), i[16](null), S = !1, y();
    }
  };
}
function Q(i, a, n) {
  let { id: g } = a, { upsideDown: s } = a, { content: u } = a, { contentZoom: b } = a, { lineWidthZoom: T } = a, { lineHeightZoom: w } = a, { destroying: v = !1 } = a, { folded: d } = a, { dispose: m } = a, { events: o } = a, { hooks: _ } = a, S = 0, y = 0, e, l, k = setTimeout(
    () => {
      d || n(10, l = !0), k = void 0;
    },
    100
  );
  const W = (t) => {
    const Z = Object.keys(o);
    let f = t.target;
    for (; f; ) {
      const z = f.getAttribute("class");
      if (!z) {
        f = f.parentNode;
        continue;
      }
      if (z.includes("PanoSpatialTagPlugin__tag-content")) {
        f = null;
        break;
      }
      Z.forEach((H) => {
        z.includes(H) && o[H](g);
      }), f = f.parentNode;
    }
  };
  E(() => {
    _.emit("initTag", { id: g });
  });
  const N = G.subscribe((t) => {
    if (t === null)
      return;
    const [Z, f] = t.split("-PanoSpatialTagPlugin-");
    g === Z && (_.emit("clickOrigin", { id: g, show: l }), k || (n(10, l = d), n(12, d = !d), k = setTimeout(
      () => {
        k = void 0;
      },
      1500
    )));
  });
  U(() => {
    n(7, S = e.offsetWidth), n(8, y = e.offsetHeight), !k && n(10, l = !d);
  }), B(() => {
    _.emit("destroyTag", { id: g }), N(), m();
  });
  function C(t) {
    F[t ? "unshift" : "push"](() => {
      e = t, n(9, e);
    });
  }
  return i.$$set = (t) => {
    "id" in t && n(0, g = t.id), "upsideDown" in t && n(1, s = t.upsideDown), "content" in t && n(2, u = t.content), "contentZoom" in t && n(3, b = t.contentZoom), "lineWidthZoom" in t && n(4, T = t.lineWidthZoom), "lineHeightZoom" in t && n(5, w = t.lineHeightZoom), "destroying" in t && n(6, v = t.destroying), "folded" in t && n(12, d = t.folded), "dispose" in t && n(13, m = t.dispose), "events" in t && n(14, o = t.events), "hooks" in t && n(15, _ = t.hooks);
  }, [
    g,
    s,
    u,
    b,
    T,
    w,
    v,
    S,
    y,
    e,
    l,
    W,
    d,
    m,
    o,
    _,
    C
  ];
}
class x extends M {
  constructor(a) {
    super(), j(
      this,
      a,
      Q,
      K,
      I,
      {
        id: 0,
        upsideDown: 1,
        content: 2,
        contentZoom: 3,
        lineWidthZoom: 4,
        lineHeightZoom: 5,
        destroying: 6,
        folded: 12,
        dispose: 13,
        events: 14,
        hooks: 15
      },
      J
    );
  }
}
export {
  x as default
};
