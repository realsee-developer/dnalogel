var A = Object.defineProperty, D = Object.defineProperties;
var E = Object.getOwnPropertyDescriptors;
var H = Object.getOwnPropertySymbols;
var F = Object.prototype.hasOwnProperty, J = Object.prototype.propertyIsEnumerable;
var R = (l, e, i) => e in l ? A(l, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[e] = i, q = (l, e) => {
  for (var i in e || (e = {}))
    F.call(e, i) && R(l, i, e[i]);
  if (H)
    for (var i of H(e))
      J.call(e, i) && R(l, i, e[i]);
  return l;
}, B = (l, e) => D(l, E(e));
import { SvelteComponent as K, init as L, safe_not_equal as M, append_styles as N, element as G, space as W, svg_element as p, attr as t, set_style as _, insert as P, append as f, transition_in as S, transition_out as x, check_outros as O, detach as j, create_component as Q, mount_component as T, destroy_component as U, group_outros as V } from "../../../../vendor/svelte/internal/index.js";
import X from "../Shadow.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
function Y(l) {
  N(l, "svelte-ezi5lu", `.icon.svelte-ezi5lu{font-size:0}.icon-bg.svelte-ezi5lu{position:absolute;width:141%;height:141%;top:50%;left:50%;transform:translate(-50%, -50%);border-radius:50%;overflow:hidden;z-index:-1}.icon-bg-circle.svelte-ezi5lu{border-radius:50%;position:absolute;top:0;left:0;width:100%;height:100%}.icon-bg-circle-inner.svelte-ezi5lu{border-radius:50%;position:absolute;top:0;left:0;width:100%;height:100%}.icon-bg-circle-inner-shadow.svelte-ezi5lu{border-radius:50%;position:absolute;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at center, transparent 20%, rgba(255,255,255,0.3))}.icon-bg-circle.svelte-ezi5lu::before{content:"";position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;border-radius:50%;background:linear-gradient(-45deg, rgba(255,255,255,1), rgba(255,255,255,0.2), rgba(255,255,255,1));z-index:1;mask:radial-gradient(circle at center, 
              transparent 65%, 
              black 0%);-webkit-mask:radial-gradient(circle at center, 
              transparent 65%, 
              black 0%)}`);
}
function C(l) {
  let e, i;
  return e = new X({
    props: {
      center: !0,
      blurRadius: 24,
      spreadRadius: 16
    }
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(o, n) {
      T(e, o, n), i = !0;
    },
    i(o) {
      i || (S(e.$$.fragment, o), i = !0);
    },
    o(o) {
      x(e.$$.fragment, o), i = !1;
    },
    d(o) {
      U(e, o);
    }
  };
}
function I(l) {
  let e, i, o, n, r;
  return {
    c() {
      e = G("div"), i = G("div"), o = G("div"), n = W(), r = G("div"), t(o, "class", "icon-bg-circle-inner svelte-ezi5lu"), _(
        o,
        "background",
        /*bgcolor*/
        l[4]
      ), _(
        o,
        "opacity",
        /*bgopacity*/
        l[3]
      ), t(r, "class", "icon-bg-circle-inner-shadow svelte-ezi5lu"), t(i, "class", "icon-bg-circle svelte-ezi5lu"), t(e, "class", "icon-bg svelte-ezi5lu");
    },
    m(a, h) {
      P(a, e, h), f(e, i), f(i, o), f(i, n), f(i, r);
    },
    p(a, h) {
      h & /*bgcolor*/
      16 && _(
        o,
        "background",
        /*bgcolor*/
        a[4]
      ), h & /*bgopacity*/
      8 && _(
        o,
        "opacity",
        /*bgopacity*/
        a[3]
      );
    },
    d(a) {
      a && j(e);
    }
  };
}
function Z(l) {
  let e, i, o, n, r, a, h, m, c, v, s, b, k, y, w, d = (
    /*shadow*/
    l[1] && C()
  ), u = (
    /*bgcolor*/
    l[4] && I(l)
  );
  return {
    c() {
      e = G("div"), d && d.c(), i = W(), u && u.c(), o = W(), n = p("svg"), r = p("linearGradient"), a = p("stop"), h = p("stop"), m = p("linearGradient"), c = p("stop"), v = p("stop"), s = p("g"), b = p("path"), k = p("path"), y = p("path"), t(a, "offset", "0"), t(a, "stop-color", "#fff"), t(h, "offset", "1"), t(h, "stop-color", "#fff"), t(h, "stop-opacity", ".7"), t(r, "id", "a"), t(r, "x1", "78.74567%"), t(r, "x2", "5.663764%"), t(r, "y1", "94.075617%"), t(r, "y2", "5.924383%"), t(c, "offset", "0"), t(c, "stop-color", "#fff"), t(v, "offset", "1"), t(v, "stop-color", "#fff"), t(v, "stop-opacity", "0"), t(m, "id", "b"), t(m, "x1", "16.588502%"), t(m, "x2", "68.285986%"), t(m, "y1", "5.924383%"), t(m, "y2", "63.800896%"), t(b, "d", "m18 5.4v8c0 1.9329966-4.0294373 3.5-9 3.5-4.97056275 0-9-1.5670034-9-3.5v-8c0 1.93299662 4.02943725 3.5 9 3.5 4.8670094 0 8.8316983-1.50239169 8.9947813-3.37967512zm-13.0396582-.5c.259 0 .504-.063.728-.196.441-.259.721-.728.721-1.26 0-.441-.189-.833-.504-1.085.259-.259.434-.63.434-1.022 0-.245-.063-.476-.182-.679-.252-.413-.693-.658-1.197-.658-.238 0-.462.056-.665.175-.42.238-.679.665-.679 1.162v.035h.721v-.035c0-.315.294-.616.623-.616.357 0 .651.287.651.616 0 .371-.287.658-.651.658h-.14v.728h.14c.399 0 .728.322.728.721s-.329.735-.728.735-.728-.336-.728-.735v-.105h-.728v.105c0 .266.063.511.196.728.259.448.728.728 1.26.728zm3.647 0c.273 0 .518-.07.749-.203.448-.273.742-.763.742-1.302 0-.273-.07-.518-.203-.749-.273-.448-.749-.742-1.288-.742-.077 0-.133 0-.168.007l.875-1.911h-.805l-1.274 2.793c-.091.189-.133.392-.133.602 0 .273.07.525.203.756.273.455.749.749 1.302.749zm0-.742c-.427 0-.763-.336-.763-.763 0-.42.343-.77.763-.77s.77.35.77.77-.35.763-.77.763zm3.654.749c.504 0 .952-.273 1.204-.7.126-.21.189-.441.189-.693v-2.086c0-.511-.273-.98-.693-1.239-.217-.126-.448-.189-.7-.189-.511 0-.98.273-1.232.714-.133.217-.196.455-.196.714v2.086c0 .504.273.952.714 1.204.217.126.455.189.714.189zm0-.721c-.371 0-.693-.301-.693-.672v-2.086c0-.399.308-.693.693-.693.371 0 .651.294.651.693v2.086c0 .385-.28.672-.651.672zm3.2140391-2.11266016c.2734375 0 .5132649-.09855143.7194824-.29565429.2062174-.19710287.3093262-.44376628.3093262-.73999024 0-.28710937-.0991211-.53035481-.2973633-.72973633-.1982422-.19938151-.4420573-.29907226-.7314453-.29907226-.2825521 0-.5257976.10026042-.7297364.30078125s-.3059082.44661458-.3059082.73828125c0 .2734375.0968425.51269531.2905274.71777344.1936849.20507812.4420573.30761718.7451172.30761718zm0-.37255859c-.1822917 0-.3383789-.06494141-.4682618-.19482422-.1298828-.12988281-.1948242-.28369141-.1948242-.46142578 0-.18457031.0655111-.34122721.1965332-.4699707.1310222-.12874349.2865397-.19311524.4665528-.19311524.180013 0 .3343912.06494141.4631347.19482422s.1931153.28369141.1931153.46142578c0 .18457031-.0655111.34122722-.1965332.46997071-.1310222.12874349-.2842611.19311523-.4597168.19311523z"), t(b, "fill", "url(#a)"), t(b, "fill-rule", "nonzero"), t(k, "d", "m18 5.4v8c0 1.9329966-4.0294373 3.5-9 3.5-4.97056275 0-9-1.5670034-9-3.5v-8c0 1.93299662 4.02943725 3.5 9 3.5 4.8670094 0 8.8316983-1.50239169 8.9947813-3.37967512zm-.537 1.917-.0556083.04651904c-1.6129673 1.27557869-4.7855335 2.07278608-8.4073917 2.07278608-3.5667171 0-6.69228643-.77164105-8.32741897-2.0099189l-.13658103-.10838622.00030512 6.082c0 1.4658868 3.60570734 2.8999734 8.15878222 2.9616322l.30491266.0020627c4.6959533 0 8.4636949-1.4652329 8.4636949-2.9636949zm-5.2016582-7.317c.252 0 .483.063.7.189.42.259.693.728.693 1.239v2.086l-.00756.14868c-.02016.19488-.08064.37632-.18144.54432-.252.427-.7.7-1.204.7-.259 0-.497-.063-.714-.189-.441-.252-.714-.7-.714-1.204v-2.086l.007616-.15288c.020384-.20048.081984-.38752.188384-.56112.252-.441.721-.714 1.232-.714zm-7.301 0c.504 0 .945.245 1.197.658.119.203.182.434.182.679 0 .392-.175.763-.434 1.022.315.252.504.644.504 1.085 0 .532-.28 1.001-.721 1.26-.224.133-.469.196-.728.196-.532 0-1.001-.28-1.26-.728-.133-.217-.196-.462-.196-.728v-.105h.728v.105c0 .399.329.735.728.735s.728-.336.728-.735-.329-.721-.728-.721h-.14v-.728h.14c.364 0 .651-.287.651-.658 0-.329-.294-.616-.651-.616-.329 0-.623.301-.623.616v.035h-.721v-.035c0-.497.259-.924.679-1.162.203-.119.427-.175.665-.175zm4.354 0-.875 1.911c.035-.007.091-.007.168-.007.539 0 1.015.294 1.288.742.133.231.203.476.203.749 0 .539-.294 1.029-.742 1.302-.231.133-.476.203-.749.203-.553 0-1.029-.294-1.302-.749-.133-.231-.203-.483-.203-.756 0-.21.042-.413.133-.602l1.274-2.793zm2.947.735c-.385 0-.693.294-.693.693v2.086l.0077784.09927273c.051172.32396694.3479489.57272727.6852216.57272727.371 0 .651-.287.651-.672v-2.086l-.0068002-.10607288c-.044861-.34395191-.3069271-.58692712-.6441998-.58692712zm-3.654 1.89c-.42 0-.763.35-.763.77 0 .427.336.763.763.763.42 0 .77-.343.77-.763s-.35-.77-.77-.77zm6.8680391-2.61611328c.289388 0 .5332031.09969075.7314453.29907226.1982422.19938152.2973633.44262696.2973633.72973633 0 .29622396-.1031088.54288737-.3093262.73999024-.2062175.19710286-.4460449.29565429-.7194824.29565429-.3030599 0-.5514323-.10253906-.7451172-.30761718-.1936849-.20507813-.2905274-.44433594-.2905274-.71777344 0-.29166667.1019694-.53776042.3059082-.73828125s.4471843-.30078125.7297364-.30078125zm0 .37255859c-.1800131 0-.3355306.06437175-.4665528.19311524-.1310221.12874349-.1965332.28540039-.1965332.4699707 0 .17773437.0649414.33154297.1948242.46142578.1298829.12988281.2859701.19482422.4682618.19482422.1754557 0 .3286946-.06437174.4597168-.19311523.1310221-.12874349.1965332-.2854004.1965332-.46997071 0-.17773437-.0643718-.33154297-.1931153-.46142578s-.2831217-.19482422-.4631347-.19482422z"), t(k, "fill", "url(#b)"), t(k, "fill-rule", "nonzero"), t(y, "d", "m3.00030998 2.79110119v5.21779762c-1.84142801-.64087734-3.00030998-1.57225753-3.00030998-2.60889881s1.15888197-1.96802147 3.00030998-2.60889881zm12.00038752.00035068c1.8408432.64086639 2.9993025 1.57209591 2.9993025 2.60854813s-1.1584593 1.96768174-2.9993025 2.60854813z"), t(y, "fill", "#d8d8d8"), t(y, "opacity", ".6"), t(s, "fill", "none"), t(s, "fill-rule", "evenodd"), t(s, "transform", "translate(3 3.1)"), t(
        n,
        "height",
        /*finalWidth*/
        l[2]
      ), t(
        n,
        "width",
        /*finalWidth*/
        l[2]
      ), t(n, "viewBox", "0 0 24 24"), t(n, "xmlns", "http://www.w3.org/2000/svg"), t(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"), t(e, "class", "icon svelte-ezi5lu"), _(
        e,
        "width",
        /*width*/
        l[0]
      );
    },
    m(g, z) {
      P(g, e, z), d && d.m(e, null), f(e, i), u && u.m(e, null), f(e, o), f(e, n), f(n, r), f(r, a), f(r, h), f(n, m), f(m, c), f(m, v), f(n, s), f(s, b), f(s, k), f(s, y), w = !0;
    },
    p(g, [z]) {
      /*shadow*/
      g[1] ? d ? z & /*shadow*/
      2 && S(d, 1) : (d = C(), d.c(), S(d, 1), d.m(e, i)) : d && (V(), x(d, 1, 1, () => {
        d = null;
      }), O()), /*bgcolor*/
      g[4] ? u ? u.p(g, z) : (u = I(g), u.c(), u.m(e, o)) : u && (u.d(1), u = null), (!w || z & /*finalWidth*/
      4) && t(
        n,
        "height",
        /*finalWidth*/
        g[2]
      ), (!w || z & /*finalWidth*/
      4) && t(
        n,
        "width",
        /*finalWidth*/
        g[2]
      ), z & /*width*/
      1 && _(
        e,
        "width",
        /*width*/
        g[0]
      );
    },
    i(g) {
      w || (S(d), w = !0);
    },
    o(g) {
      x(d), w = !1;
    },
    d(g) {
      g && j(e), d && d.d(), u && u.d();
    }
  };
}
function $(l) {
  const { originWidth: e, originHeight: i, scale: o = 1, wantedWidth: n } = l, r = (n != null ? n : e) * o, a = typeof i == "number" ? r * (i / e) : void 0;
  return B(q({}, l), { width: r, height: a });
}
function e2(l, e, i) {
  let o, n, r, a, h, { width: m = null } = e, { icon: c = null } = e, { shadow: v = !1 } = e;
  return l.$$set = (s) => {
    "width" in s && i(0, m = s.width), "icon" in s && i(5, c = s.icon), "shadow" in s && i(1, v = s.shadow);
  }, l.$$.update = () => {
    var s, b;
    l.$$.dirty & /*icon*/
    32 && i(4, o = c == null ? void 0 : c.bgcolor), l.$$.dirty & /*icon*/
    32 && i(3, n = (s = c == null ? void 0 : c.bgopacity) != null ? s : 0.6), l.$$.dirty & /*icon*/
    32 && i(7, r = (b = c == null ? void 0 : c.scale) != null ? b : 1), l.$$.dirty & /*icon*/
    32 && i(6, a = c == null ? void 0 : c.width), l.$$.dirty & /*iconScale, iconWidth*/
    192 && i(2, h = $({
      originWidth: 24,
      originHeight: 24,
      scale: r,
      wantedWidth: a
    }).width);
  }, [m, v, h, n, o, c, a, r];
}
class r2 extends K {
  constructor(e) {
    super(), L(this, e, e2, Z, M, { width: 0, icon: 5, shadow: 1 }, Y);
  }
}
export {
  r2 as default
};
