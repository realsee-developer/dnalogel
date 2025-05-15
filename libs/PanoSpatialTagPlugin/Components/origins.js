import { SvelteComponent as d, init as h, safe_not_equal as P, append_styles as y, empty as v, insert as p, noop as c, destroy_each as S, detach as u, element as T, attr as b, toggle_class as f, set_style as g, listen as k } from "../../vendor/svelte/internal/index.js";
import { currentTarget as z } from "../store.js";
import "../../vendor/svelte/store/index.js";
function w(n) {
  y(n, "svelte-19zi46m", ".PanoSpatialTagPlugin__tag-origin.svelte-19zi46m{position:absolute;width:0.5rem;height:0.5rem;border-radius:50%;background:#fff;box-shadow:0 0 .6rem #fff;transform:translate(-50%, -50%) scale(1);transform-origin:center center;animation:svelte-19zi46m-PanoSpatialTagPlugin__tag-origin 1.2s forwards;pointer-events:auto}.PanoSpatialTagPlugin__tag-origin.svelte-19zi46m:after{content:'';position:absolute;top:50%;height:50%;width:2rem;height:2rem;transform:translate(-50%, -50%)}.PanoSpatialTagPlugin__tag-origin-destroy.svelte-19zi46m{transform:translate(-50%, -50%) scale(0.6);animation:svelte-19zi46m-PanoSpatialTagPlugin__tag-origin-destroy 1.2s forwards .7s}@keyframes svelte-19zi46m-PanoSpatialTagPlugin__tag-origin{0%{transform:translate(-50%, -50%) scale(1);opacity:0}100%{transform:translate(-50%, -50%) scale(0.6);opacity:1 }}@keyframes svelte-19zi46m-PanoSpatialTagPlugin__tag-origin-destroy{0%{transform:translate(-50%, -50%) scale(0.6);opacity:1}10%{transform:translate(-50%, -50%) scale(1);opacity:0.9}100%{transform:translate(-50%, -50%) scale(1);opacity:0}}");
}
function _(n, t, o) {
  const e = n.slice();
  return e[3] = t[o], e;
}
function m(n) {
  let t, o = `${/*origin*/
  n[3].top}%`, e = `${/*origin*/
  n[3].left}%`, a, l;
  function i() {
    return (
      /*click_handler*/
      n[2](
        /*origin*/
        n[3]
      )
    );
  }
  return {
    c() {
      t = T("i"), b(t, "class", "svelte-19zi46m"), f(t, "PanoSpatialTagPlugin__tag-origin", !0), f(
        t,
        "PanoSpatialTagPlugin__tag-origin-destroy",
        /*origin*/
        n[3].destroying
      ), g(t, "top", o), g(t, "left", e), g(
        t,
        "visibility",
        /*origin*/
        n[3].front ? "visible" : "hidden"
      );
    },
    m(r, s) {
      p(r, t, s), a || (l = k(t, "click", i), a = !0);
    },
    p(r, s) {
      n = r, s & /*origins*/
      1 && f(
        t,
        "PanoSpatialTagPlugin__tag-origin-destroy",
        /*origin*/
        n[3].destroying
      ), s & /*origins*/
      1 && o !== (o = `${/*origin*/
      n[3].top}%`) && g(t, "top", o), s & /*origins*/
      1 && e !== (e = `${/*origin*/
      n[3].left}%`) && g(t, "left", e), s & /*origins*/
      1 && g(
        t,
        "visibility",
        /*origin*/
        n[3].front ? "visible" : "hidden"
      );
    },
    d(r) {
      r && u(t), a = !1, l();
    }
  };
}
function $(n) {
  let t, o = (
    /*origins*/
    n[0]
  ), e = [];
  for (let a = 0; a < o.length; a += 1)
    e[a] = m(_(n, o, a));
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      t = v();
    },
    m(a, l) {
      for (let i = 0; i < e.length; i += 1)
        e[i] && e[i].m(a, l);
      p(a, t, l);
    },
    p(a, [l]) {
      if (l & /*origins, handleClick*/
      3) {
        o = /*origins*/
        a[0];
        let i;
        for (i = 0; i < o.length; i += 1) {
          const r = _(a, o, i);
          e[i] ? e[i].p(r, l) : (e[i] = m(r), e[i].c(), e[i].m(t.parentNode, t));
        }
        for (; i < e.length; i += 1)
          e[i].d(1);
        e.length = o.length;
      }
    },
    i: c,
    o: c,
    d(a) {
      S(e, a), a && u(t);
    }
  };
}
function C(n, t, o) {
  let { origins: e } = t;
  const a = (i) => {
    z.update(() => `${i}-PanoSpatialTagPlugin-${Date.now()}`);
  }, l = (i) => a(i.id);
  return n.$$set = (i) => {
    "origins" in i && o(0, e = i.origins);
  }, [e, a, l];
}
class O extends d {
  constructor(t) {
    super(), h(this, t, C, $, P, { origins: 0 }, w);
  }
}
export {
  O as default
};
