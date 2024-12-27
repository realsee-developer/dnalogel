import { SvelteComponent as R, init as W, safe_not_equal as H, append_styles as M, element as c, space as z, text as N, attr as d, add_render_callback as j, set_style as a, insert as _, append as k, add_resize_listener as B, set_data as S, noop as y, detach as P, destroy_each as V, null_to_empty as Z } from "../vendor/svelte/internal/index.js";
function J(i) {
  M(i, "svelte-1h27ktp", ".PanoRulerPlugin-rule-line.svelte-1h27ktp.svelte-1h27ktp{position:absolute;transform-origin:left 0.0625rem;width:0;height:0.125rem;pointer-events:none}.PanoRulerPlugin-rule-line.svelte-1h27ktp.svelte-1h27ktp::after{content:'';position:absolute;left:-0.125rem;top:-0.1rem;width:0.25rem;height:0.25rem;border-radius:50%;background:#fff;z-index:1;animation:svelte-1h27ktp-viewport-rule-point 0.1s 1s;animation-fill-mode:both}.PanoRulerPlugin-rule-line.svelte-1h27ktp.svelte-1h27ktp::before{content:'';position:absolute;right:-0.125rem;top:-0.1rem;width:0.25rem;height:0.25rem;border-radius:50%;background:#fff;z-index:1;animation:svelte-1h27ktp-viewport-rule-point 0.1s 1.5s;animation-fill-mode:both}.PanoRulerPlugin-rule-line.svelte-1h27ktp em.svelte-1h27ktp{display:block;height:0.0625rem;animation:svelte-1h27ktp-viewport-rule-line 0.5s ease 1s;animation-fill-mode:both;box-shadow:0 0 0.25rem rgb(0 0 0 / 40%);position:relative}.rule-mixed-line.svelte-1h27ktp.svelte-1h27ktp{display:flex;height:0.0625rem;animation:svelte-1h27ktp-viewport-rule-line 0.5s ease 1s;animation-fill-mode:both;align-items:center}.em-solid.svelte-1h27ktp.svelte-1h27ktp{height:100%;background:#ffffff}.em-dotted.svelte-1h27ktp.svelte-1h27ktp{height:0.125rem;background:var(--background-image);background-position:center;background-repeat:repeat}.PanoRulerPlugin-rule-label.svelte-1h27ktp.svelte-1h27ktp{position:absolute;width:0;height:0;top:0.0625rem;pointer-events:none}.PanoRulerPlugin-rule-label-name.svelte-1h27ktp.svelte-1h27ktp{position:absolute;padding:0.1875rem 0.375rem;background:rgba(195, 195, 195, 0.3);backdrop-filter:blur(0.25rem);-webkit-backdrop-filter:blur(0.25rem);border-radius:6.25rem;border:0.0625rem solid rgba(255, 255, 255, 0.6);white-space:nowrap;overflow:hidden;color:#ffffff;font-weight:500;font-size:0.75rem;line-height:1;animation:svelte-1h27ktp-viewport-rule-label 0.25s ease 1s;animation-fill-mode:both;box-shadow:inset 0 0 0.625rem 0 rgba(255, 255, 255, 0.3)}@keyframes svelte-1h27ktp-viewport-rule-line{0%{width:0%}100%{width:100%}}@keyframes svelte-1h27ktp-viewport-rule-label{0%{opacity:0;transform:scaleX(0)}100%{opacity:1;transform:translate(-50%, -50%) scaleX(1)}}@keyframes svelte-1h27ktp-viewport-rule-point{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}");
}
function G(i, e, s) {
  const l = i.slice();
  return l[6] = e[s], l;
}
function D(i) {
  let e, s = (
    /*rulerItemProp*/
    i[0].children
  ), l = [];
  for (let t = 0; t < s.length; t += 1)
    l[t] = X(G(i, s, t));
  return {
    c() {
      e = c("div");
      for (let t = 0; t < l.length; t += 1)
        l[t].c();
      d(e, "class", "rule-mixed-line svelte-1h27ktp");
    },
    m(t, o) {
      _(t, e, o);
      for (let n = 0; n < l.length; n += 1)
        l[n] && l[n].m(e, null);
    },
    p(t, o) {
      if (o & /*rulerItemProp, vars*/
      9) {
        s = /*rulerItemProp*/
        t[0].children;
        let n;
        for (n = 0; n < s.length; n += 1) {
          const p = G(t, s, n);
          l[n] ? l[n].p(p, o) : (l[n] = X(p), l[n].c(), l[n].m(e, null));
        }
        for (; n < l.length; n += 1)
          l[n].d(1);
        l.length = s.length;
      }
    },
    d(t) {
      t && P(e), V(l, t);
    }
  };
}
function A(i) {
  let e, s;
  return {
    c() {
      e = c("em"), d(e, "class", s = Z(
        /*rulerItemProp*/
        i[0].state ? "em-solid" : "em-dotted"
      ) + " svelte-1h27ktp"), d(
        e,
        "style",
        /*vars*/
        i[3]
      );
    },
    m(l, t) {
      _(l, e, t);
    },
    p(l, t) {
      t & /*rulerItemProp*/
      1 && s !== (s = Z(
        /*rulerItemProp*/
        l[0].state ? "em-solid" : "em-dotted"
      ) + " svelte-1h27ktp") && d(e, "class", s), t & /*vars*/
      8 && d(
        e,
        "style",
        /*vars*/
        l[3]
      );
    },
    d(l) {
      l && P(e);
    }
  };
}
function X(i) {
  let e, s, l = `${/*child*/
  i[6].width}px`;
  return {
    c() {
      e = c("div"), d(e, "class", s = Z(
        /*child*/
        i[6].state ? "em-solid" : "em-dotted"
      ) + " svelte-1h27ktp"), d(
        e,
        "style",
        /*vars*/
        i[3]
      ), a(e, "width", l);
    },
    m(t, o) {
      _(t, e, o);
    },
    p(t, o) {
      o & /*rulerItemProp*/
      1 && s !== (s = Z(
        /*child*/
        t[6].state ? "em-solid" : "em-dotted"
      ) + " svelte-1h27ktp") && d(e, "class", s), o & /*vars*/
      8 && d(
        e,
        "style",
        /*vars*/
        t[3]
      ), (o & /*vars*/
      8 || o & /*rulerItemProp, vars*/
      9 && l !== (l = `${/*child*/
      t[6].width}px`)) && a(e, "width", l);
    },
    d(t) {
      t && P(e);
    }
  };
}
function C(i) {
  let e, s, l, t, o = (
    /*rulerItemProp*/
    i[0].labelElement + ""
  ), n, p, f = `${/*rulerItemProp*/
  i[0].labelOffset}%`, u = `${/*rulerItemProp*/
  i[0].width}px`, v = `${/*rulerItemProp*/
  i[0].left}px`, b = `${/*rulerItemProp*/
  i[0].top}px`, I = `rotate(${/*rulerItemProp*/
  i[0].rotateDeg}deg)`;
  function w(r, m) {
    return (
      /*rulerItemProp*/
      r[0].children.length === 0 ? A : D
    );
  }
  let g = w(i), h = g(i);
  return {
    c() {
      e = c("div"), h.c(), s = z(), l = c("div"), t = c("div"), n = N(o), d(t, "class", "PanoRulerPlugin-rule-label-name svelte-1h27ktp"), j(() => (
        /*div0_elementresize_handler*/
        i[4].call(t)
      )), d(l, "class", "PanoRulerPlugin-rule-label svelte-1h27ktp"), a(l, "left", f), d(e, "class", "PanoRulerPlugin-rule-line svelte-1h27ktp"), a(e, "width", u), a(e, "left", v), a(e, "top", b), a(e, "transform", I), a(
        e,
        "display",
        /*rulerItemProp*/
        i[0].visible && /*_visible*/
        i[2] ? "block" : "none"
      );
    },
    m(r, m) {
      _(r, e, m), h.m(e, null), k(e, s), k(e, l), k(l, t), k(t, n), p = B(
        t,
        /*div0_elementresize_handler*/
        i[4].bind(t)
      );
    },
    p(r, [m]) {
      g === (g = w(r)) && h ? h.p(r, m) : (h.d(1), h = g(r), h && (h.c(), h.m(e, s))), m & /*rulerItemProp*/
      1 && o !== (o = /*rulerItemProp*/
      r[0].labelElement + "") && S(n, o), m & /*rulerItemProp*/
      1 && f !== (f = `${/*rulerItemProp*/
      r[0].labelOffset}%`) && a(l, "left", f), m & /*rulerItemProp*/
      1 && u !== (u = `${/*rulerItemProp*/
      r[0].width}px`) && a(e, "width", u), m & /*rulerItemProp*/
      1 && v !== (v = `${/*rulerItemProp*/
      r[0].left}px`) && a(e, "left", v), m & /*rulerItemProp*/
      1 && b !== (b = `${/*rulerItemProp*/
      r[0].top}px`) && a(e, "top", b), m & /*rulerItemProp*/
      1 && I !== (I = `rotate(${/*rulerItemProp*/
      r[0].rotateDeg}deg)`) && a(e, "transform", I), m & /*rulerItemProp, _visible*/
      5 && a(
        e,
        "display",
        /*rulerItemProp*/
        r[0].visible && /*_visible*/
        r[2] ? "block" : "none"
      );
    },
    i: y,
    o: y,
    d(r) {
      r && P(e), h.d(), p();
    }
  };
}
function Y(i, e, s) {
  let l, { rulerItemProp: t } = e, o = !0, n, p = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQiIHdpZHRoPSIxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PGZpbHRlciBpZD0icHJlZml4X19hIiBoZWlnaHQ9IjQwMCUiIHdpZHRoPSIxMzcuNCUiIHg9Ii0xOC43JSIgeT0iLTE1MCUiPjxmZU1vcnBob2xvZ3kgaW49IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iZGlsYXRlIiByYWRpdXM9Ii41IiByZXN1bHQ9InNoYWRvd1NwcmVhZE91dGVyMSIvPjxmZU9mZnNldCBpbj0ic2hhZG93U3ByZWFkT3V0ZXIxIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZU1vcnBob2xvZ3kgaW49IlNvdXJjZUFscGhhIiByYWRpdXM9IjEiIHJlc3VsdD0ic2hhZG93SW5uZXIiLz48ZmVPZmZzZXQgaW49InNoYWRvd0lubmVyIiByZXN1bHQ9InNoYWRvd0lubmVyIi8+PGZlQ29tcG9zaXRlIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIGluMj0ic2hhZG93SW5uZXIiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIgc3RkRGV2aWF0aW9uPSIuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMiAwIi8+PC9maWx0ZXI+PHBhdGggaWQ9InByZWZpeF9fYiIgZD0iTS44ODkgMkgxMS41OCIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1kYXNoYXJyYXk9IjUgNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNwcmVmaXhfX2EpIiB4bGluazpocmVmPSIjcHJlZml4X19iIi8+PHVzZSBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuNCIgeGxpbms6aHJlZj0iI3ByZWZpeF9fYiIvPjwvZz48L3N2Zz4=";
  function f() {
    n = this.offsetWidth, s(1, n);
  }
  return i.$$set = (u) => {
    "rulerItemProp" in u && s(0, t = u.rulerItemProp);
  }, i.$$.update = () => {
    i.$$.dirty & /*labelWidth, rulerItemProp*/
    3 && (n >= t.width || n / 2 >= t.labelOffset / 100 * t.width || n / 2 >= (1 - t.labelOffset / 100) * t.width ? s(2, o = !1) : s(2, o = !0));
  }, s(3, l = `--background-image: url(${p})`), [t, n, o, l, f];
}
class U extends R {
  constructor(e) {
    super(), W(this, e, Y, C, H, { rulerItemProp: 0 }, J);
  }
}
export {
  U as default
};
