import { SvelteComponent as C, init as M, safe_not_equal as L, append_styles as O, element as c, space as Z, attr as v, set_style as P, toggle_class as p, insert as j, append as s, listen as q, noop as I, detach as A, onMount as E, afterUpdate as B, onDestroy as F, binding_callbacks as G } from "../../vendor/svelte/internal/index.js";
import { currentTarget as J } from "../store.js";
import "../../vendor/svelte/store/index.js";
function K(e) {
  O(e, "svelte-vi2gid", `.PanoSpatialTagPlugin__tag-x.svelte-vi2gid.svelte-vi2gid{position:absolute;top:0;left:0;display:block;white-space:nowrap;box-sizing:border-box;width:25rem;height:14rem;color:#fff;transform:translate(0, -100%);transition:height 0.5s linear}.PanoSpatialTagPlugin__tag-shadow.svelte-vi2gid.svelte-vi2gid{content:'';position:absolute;width:30rem;height:30rem;top:-15rem;left:-15rem;z-index:-1;opacity:0;transition:opacity 0.8s 0.6s;background-size:30rem 30rem}.PanoSpatialTagPlugin__tag-line.svelte-vi2gid.svelte-vi2gid{position:absolute;left:-1rem;width:2rem;height:100%;overflow:hidden}.PanoSpatialTagPlugin__tag-flagpole.svelte-vi2gid.svelte-vi2gid{position:absolute;top:0;left:1rem;height:calc(100% - 1.5rem);width:0.15rem;background:linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.1));box-shadow:0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);opacity:0;transform:translate(-50%, 60%) scaleY(0);transition:transform 0.4s cubic-bezier(0.44, 0.44, 0.74, 0.98), opacity 0.4s cubic-bezier(0.44, 0.44, 0.74, 0.98), width 0.5s linear,
      height 0.5s linear;transform-origin:center bottom}.PanoSpatialTagPlugin__tag-line1.svelte-vi2gid.svelte-vi2gid{position:absolute;top:0;left:0.3rem;height:1.8rem;width:0.1rem;background:#fff;opacity:0;transform:translate(-50%, 200%) scaleY(0);transform-origin:center top}.PanoSpatialTagPlugin__tag-line2.svelte-vi2gid.svelte-vi2gid{position:absolute;top:0;left:0.5rem;height:1.8rem;width:0.1rem;background:#fff;opacity:0;transform:translate(-50%, 200%) scaleY(0);transform-origin:center top}.PanoSpatialTagPlugin__tag-show.svelte-vi2gid .PanoSpatialTagPlugin__tag-line1.svelte-vi2gid{animation:svelte-vi2gid-PanoSpatialTagPlugin__tag-line1 linear 0.5s forwards 0.45s}.PanoSpatialTagPlugin__tag-show.svelte-vi2gid .PanoSpatialTagPlugin__tag-line2.svelte-vi2gid{animation:svelte-vi2gid-PanoSpatialTagPlugin__tag-line2 linear 0.5s forwards 0.65s}.PanoSpatialTagPlugin__tag-x.PanoSpatialTagPlugin__tag-upside-down.svelte-vi2gid.svelte-vi2gid{transform:translate(0, 0)}.PanoSpatialTagPlugin__tag-upside-down.svelte-vi2gid .PanoSpatialTagPlugin__tag-line.svelte-vi2gid{transform:scaleY(-1)}.PanoSpatialTagPlugin__tag-animate.svelte-vi2gid.svelte-vi2gid{position:relative;height:100%;overflow:hidden;transform-origin:left top;transition:transform 0.5s linear}.PanoSpatialTagPlugin__tag-upside-down.svelte-vi2gid .PanoSpatialTagPlugin__tag-animate.svelte-vi2gid{transform-origin:left bottom}.PanoSpatialTagPlugin__tag-content.svelte-vi2gid.svelte-vi2gid{position:absolute;display:inline-block;transform:translate(-100%, 0);transition:transform 0.9s cubic-bezier(0, 0.65, 0.16, 1.08) 0.6s;padding-left:0.5rem;font-size:1rem}.PanoSpatialTagPlugin__tag-upside-down.svelte-vi2gid .PanoSpatialTagPlugin__tag-content.svelte-vi2gid{bottom:0}.PanoSpatialTagPlugin__tag-show.svelte-vi2gid .PanoSpatialTagPlugin__tag-flagpole.svelte-vi2gid{opacity:1;transform:translate(-50%, 0) scaleY(1)}.PanoSpatialTagPlugin__tag-upside-down.svelte-vi2gid .PanoSpatialTagPlugin__tag-shadow.svelte-vi2gid{top:unset;bottom:-15rem}.PanoSpatialTagPlugin__tag-show.svelte-vi2gid .PanoSpatialTagPlugin__tag-shadow.svelte-vi2gid{opacity:0.32}.PanoSpatialTagPlugin__tag-show.svelte-vi2gid .PanoSpatialTagPlugin__tag-content.svelte-vi2gid{transform:translate(0, 0)}.PanoSpatialTagPlugin__tag-hide.svelte-vi2gid .PanoSpatialTagPlugin__tag-flagpole.svelte-vi2gid{opacity:0;transform:translate(-50%, 60%) scaleY(0);transition:transform 0.5s 0.55s, opacity 0.4s 0.55s}.PanoSpatialTagPlugin__tag-hide.svelte-vi2gid .PanoSpatialTagPlugin__tag-shadow.svelte-vi2gid{opacity:0;transition:opacity 0.8s}.PanoSpatialTagPlugin__tag-hide.svelte-vi2gid .PanoSpatialTagPlugin__tag-content.svelte-vi2gid{transform:translate(-100%, 0);transition:transform 0.6s cubic-bezier(0.53, 0.06, 0.88, 0.59)}.PanoSpatialTagPlugin__tag-hide.svelte-vi2gid .PanoSpatialTagPlugin__tag-content .svelte-vi2gid{pointer-events:none}.PanoSpatialTagPlugin__tag-hide.svelte-vi2gid .PanoSpatialTagPlugin__tag-line1.svelte-vi2gid{opacity:0.5;transform:translate(-50%, 10%) scaleY(0);animation:svelte-vi2gid-PanoSpatialTagPlugin__tag-line1-hide linear 0.28s forwards 0.3s}.PanoSpatialTagPlugin__tag-hide.svelte-vi2gid .PanoSpatialTagPlugin__tag-line2.svelte-vi2gid{opacity:0.5;transform:translate(-50%, 0) scaleY(0);animation:svelte-vi2gid-PanoSpatialTagPlugin__tag-line2-hide linear 0.28s forwards 0.45s}@keyframes svelte-vi2gid-PanoSpatialTagPlugin__tag-line1{0%{opacity:0;transform:translate(-50%, 250%) scaleY(1)}50%{opacity:0.5;transform:translate(-50%, 135%) scaleY(1)}100%{opacity:0.5;transform:translate(-50%, 20%) scaleY(0)}}@keyframes svelte-vi2gid-PanoSpatialTagPlugin__tag-line2{0%{opacity:0;transform:translate(-50%, 250%) scaleY(1)}50%{opacity:0.5;transform:translate(-50%, 125%) scaleY(1)}100%{opacity:0.5;transform:translate(-50%, 0) scaleY(0)}}@keyframes svelte-vi2gid-PanoSpatialTagPlugin__tag-line1-hide{0%{opacity:0.5;transform:translate(-50%, 10%) scaleY(0)}50%{opacity:0.2;transform:translate(-50%, 105%) scaleY(1)}100%{opacity:0;transform:translate(-50%, 200%) scaleY(0)}}@keyframes svelte-vi2gid-PanoSpatialTagPlugin__tag-line2-hide{0%{opacity:0.5;transform:translate(-50%, 0) scaleY(0)}50%{opacity:0.2;transform:translate(-50%, 100%) scaleY(1)}100%{opacity:0;transform:translate(-50%, 200%) scaleY(0)}}`);
}
function Q(e) {
  let a, t, r, o, f, b, h, w, T, d, _, g, u, S, y;
  return {
    c() {
      a = c("div"), t = c("div"), r = Z(), o = c("div"), f = c("i"), b = Z(), h = c("i"), w = Z(), T = c("i"), d = Z(), _ = c("div"), g = c("div"), v(t, "class", "PanoSpatialTagPlugin__tag-shadow svelte-vi2gid"), P(t, "transform", "translate(" + /*contentWidth*/
      e[8] / 2 * /*contentZoom*/
      e[3] * 3 + "px, " + /*contentHeight*/
      e[9] / 2 * /*upsideDown*/
      (e[1] ? -1 : 1) * /*contentZoom*/
      e[3] * 3 + "px) scale(" + 1 / /*contentZoom*/
      e[3] + ")"), P(t, "background-image", "url('" + /*blurImageUrl*/
      e[7] + "')"), v(f, "class", "PanoSpatialTagPlugin__tag-flagpole svelte-vi2gid"), P(
        f,
        "width",
        /*lineWidthZoom*/
        e[4] + "rem"
      ), v(h, "class", "PanoSpatialTagPlugin__tag-line1 svelte-vi2gid"), v(T, "class", "PanoSpatialTagPlugin__tag-line2 svelte-vi2gid"), v(o, "class", "PanoSpatialTagPlugin__tag-line svelte-vi2gid"), v(g, "class", "PanoSpatialTagPlugin__tag-content svelte-vi2gid"), v(_, "class", "PanoSpatialTagPlugin__tag-animate svelte-vi2gid"), P(_, "transform", "scale(" + /*contentZoom*/
      e[3] * 3 + ")"), v(a, "id", u = "PanoSpatialTagPlugin__" + /*id*/
      e[0]), P(a, "height", 20 * /*lineHeightZoom*/
      e[5] + "rem"), v(a, "class", "svelte-vi2gid"), p(a, "PanoSpatialTagPlugin__tag-x", !0), p(
        a,
        "PanoSpatialTagPlugin__tag-upside-down",
        /*upsideDown*/
        e[1]
      ), p(
        a,
        "PanoSpatialTagPlugin__tag-show",
        /*show*/
        e[11]
      ), p(
        a,
        "PanoSpatialTagPlugin__tag-hide",
        /*show*/
        e[11] === !1 || /*destroying*/
        e[6]
      );
    },
    m(n, l) {
      j(n, a, l), s(a, t), s(a, r), s(a, o), s(o, f), s(o, b), s(o, h), s(o, w), s(o, T), s(a, d), s(a, _), s(_, g), g.innerHTML = /*content*/
      e[2], e[17](g), S || (y = q(
        g,
        "click",
        /*handleClickContent*/
        e[12]
      ), S = !0);
    },
    p(n, [l]) {
      l & /*contentWidth, contentZoom, contentHeight, upsideDown*/
      778 && P(t, "transform", "translate(" + /*contentWidth*/
      n[8] / 2 * /*contentZoom*/
      n[3] * 3 + "px, " + /*contentHeight*/
      n[9] / 2 * /*upsideDown*/
      (n[1] ? -1 : 1) * /*contentZoom*/
      n[3] * 3 + "px) scale(" + 1 / /*contentZoom*/
      n[3] + ")"), l & /*blurImageUrl*/
      128 && P(t, "background-image", "url('" + /*blurImageUrl*/
      n[7] + "')"), l & /*lineWidthZoom*/
      16 && P(
        f,
        "width",
        /*lineWidthZoom*/
        n[4] + "rem"
      ), l & /*content*/
      4 && (g.innerHTML = /*content*/
      n[2]), l & /*contentZoom*/
      8 && P(_, "transform", "scale(" + /*contentZoom*/
      n[3] * 3 + ")"), l & /*id*/
      1 && u !== (u = "PanoSpatialTagPlugin__" + /*id*/
      n[0]) && v(a, "id", u), l & /*lineHeightZoom*/
      32 && P(a, "height", 20 * /*lineHeightZoom*/
      n[5] + "rem"), l & /*upsideDown*/
      2 && p(
        a,
        "PanoSpatialTagPlugin__tag-upside-down",
        /*upsideDown*/
        n[1]
      ), l & /*show*/
      2048 && p(
        a,
        "PanoSpatialTagPlugin__tag-show",
        /*show*/
        n[11]
      ), l & /*show, destroying*/
      2112 && p(
        a,
        "PanoSpatialTagPlugin__tag-hide",
        /*show*/
        n[11] === !1 || /*destroying*/
        n[6]
      );
    },
    i: I,
    o: I,
    d(n) {
      n && A(a), e[17](null), S = !1, y();
    }
  };
}
function R(e, a, t) {
  let { id: r } = a, { upsideDown: o } = a, { content: f } = a, { contentZoom: b } = a, { lineWidthZoom: h } = a, { lineHeightZoom: w } = a, { destroying: T = !1 } = a, { folded: d } = a, { dispose: _ } = a, { events: g } = a, { hooks: u } = a, { blurImageUrl: S } = a, y = 0, n = 0, l, k, Y = setTimeout(
    () => {
      d || t(11, k = !0), Y = void 0;
    },
    100
  );
  const W = (i) => {
    const z = Object.keys(g);
    let m = i.target;
    for (; m; ) {
      const H = m.getAttribute("class");
      if (!H) {
        m = m.parentNode;
        continue;
      }
      if (H.includes("PanoSpatialTagPlugin__tag-content")) {
        m = null;
        break;
      }
      z.forEach((D) => {
        H.includes(D) && g[D](r);
      }), m = m.parentNode;
    }
  };
  E(() => {
    u.emit("initTag", { id: r });
  });
  const U = J.subscribe((i) => {
    if (i === null)
      return;
    const [z, m] = i.split("-PanoSpatialTagPlugin-");
    r === z && (u.emit("clickOrigin", { id: r, show: k }), Y || (t(11, k = d), t(13, d = !d), Y = setTimeout(
      () => {
        Y = void 0;
      },
      1500
    )));
  });
  B(() => {
    t(8, y = l.offsetWidth), t(9, n = l.offsetHeight), !Y && t(11, k = !d);
  }), F(() => {
    u.emit("destroyTag", { id: r }), U(), _();
  });
  function N(i) {
    G[i ? "unshift" : "push"](() => {
      l = i, t(10, l);
    });
  }
  return e.$$set = (i) => {
    "id" in i && t(0, r = i.id), "upsideDown" in i && t(1, o = i.upsideDown), "content" in i && t(2, f = i.content), "contentZoom" in i && t(3, b = i.contentZoom), "lineWidthZoom" in i && t(4, h = i.lineWidthZoom), "lineHeightZoom" in i && t(5, w = i.lineHeightZoom), "destroying" in i && t(6, T = i.destroying), "folded" in i && t(13, d = i.folded), "dispose" in i && t(14, _ = i.dispose), "events" in i && t(15, g = i.events), "hooks" in i && t(16, u = i.hooks), "blurImageUrl" in i && t(7, S = i.blurImageUrl);
  }, [
    r,
    o,
    f,
    b,
    h,
    w,
    T,
    S,
    y,
    n,
    l,
    k,
    W,
    d,
    _,
    g,
    u,
    N
  ];
}
class $ extends C {
  constructor(a) {
    super(), M(
      this,
      a,
      R,
      Q,
      L,
      {
        id: 0,
        upsideDown: 1,
        content: 2,
        contentZoom: 3,
        lineWidthZoom: 4,
        lineHeightZoom: 5,
        destroying: 6,
        folded: 13,
        dispose: 14,
        events: 15,
        hooks: 16,
        blurImageUrl: 7
      },
      K
    );
  }
}
export {
  $ as default
};
