import { SvelteComponent as C, init as O, safe_not_equal as B, append_styles as R, element as p, space as z, attr as c, null_to_empty as A, set_style as k, insert as j, append as g, listen as P, noop as I, detach as w, binding_callbacks as S, text as L, set_data as y } from "../vendor/svelte/internal/index.js";
import { classnames as _ } from "../vendor/classnames/index.js";
function x(l) {
  R(l, "svelte-1jhufeh", `.item-label-item.svelte-1jhufeh.svelte-1jhufeh{position:absolute;z-index:0;transform:none;cursor:pointer;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:svelte-1jhufeh-fadeIn .3s ease-in}.item-label-item.fold.svelte-1jhufeh>.item-label-item__text-wrap.svelte-1jhufeh{visibility:hidden}.item-label-item.fold.svelte-1jhufeh>.item-label-item__bar.anchor.svelte-1jhufeh{visibility:hidden}.item-label-item.fold.svelte-1jhufeh>.item-label-item__bar.anchor.svelte-1jhufeh:after{visibility:visible}.item-label-item__text-wrap.svelte-1jhufeh.svelte-1jhufeh{height:-moz-fit-content;height:fit-content;padding:0.75rem 1.25rem 0.75rem 0.75rem;position:absolute;width:-moz-max-content;width:max-content;max-width:29.5625rem;min-height:5.75rem;background-image:linear-gradient(269deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.60) 49%, rgba(31, 38, 46, 0.70) 100%);border:0.09375rem solid rgba(255, 255, 255, .65);border-radius:0.1875rem;color:white;transform:translate(-50%, 0);display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box;overflow:hidden;pointer-events:all}.item-label-item__custom.svelte-1jhufeh.svelte-1jhufeh{padding:0;max-width:unset;min-height:unset;background-image:unset;border:0;border-radius:0}.icon-wrap.svelte-1jhufeh.svelte-1jhufeh{width:4.25rem;height:100%;display:flex;justify-content:center;align-content:center}.icon.svelte-1jhufeh.svelte-1jhufeh{width:4.25rem;height:4.25rem;background-repeat:no-repeat;background-size:contain;background-position:center}.item-label-text.svelte-1jhufeh.svelte-1jhufeh{margin-left:0.75rem;padding-left:0.75rem;min-height:4.25rem;height:auto;display:flex;flex-flow:column;justify-content:space-around;align-content:flex-start;border-left:solid rgba(255, 255, 255, .2) 0.0625rem;border-top:solid rgba(255, 255, 255, .2) 0;border-right:solid rgba(255, 255, 255, .2) 0;border-bottom:solid rgba(255, 255, 255, .2) 0;pointer-events:auto}.item-model.svelte-1jhufeh.svelte-1jhufeh{white-space:nowrap;font-size:1.375rem;font-weight:bold;line-height:1.875rem}.item-name.svelte-1jhufeh.svelte-1jhufeh{height:auto;word-wrap:break-word;word-break:break-all;font-size:1.25rem;line-height:1.75rem}.item-label-item__bar.svelte-1jhufeh.svelte-1jhufeh{position:absolute;bottom:0;width:0.1875rem;background-image:linear-gradient(to bottom, white, rgba(255, 255, 255, 0));box-shadow:0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.20);pointer-events:none}.item-label-item__bar.anchor.svelte-1jhufeh.svelte-1jhufeh:after{content:'';position:absolute;bottom:0;width:1.5rem;height:1.5rem;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABcVBMVEUAAAAAAAD////////+/v45OTn////////39/fp6enPz8/7+/vw8PD+/v7x8fHc3NzHx8f////////+/v77+/vr6+v////7+/v5+fn////z8/P////////q6uqgoKD+/v79/f3m5ub+/v7////////////////39/f39/f////z8/P////t7e3s7Oz29vb////5+fn////h4eH////g4ODV1dX////////BwcH///////////+Ojo5zc3MlJSX////////////////////////7+/v////////////v7+/u7u7n5+f////39/f////09PT6+vr09PT+/v76+vr////5+fnv7+/09PTk5OT////////////////Jycn///++vr7///////+0tLT///9TU1P///8SEhL////////+/v76+vr////8/Pz39/ft7e3t7e36+vr////////X19fV1dX///+xsbF9fX1iYmL///////+K8mOEAAAAenRSTlMaAIDy8CD41cWRX9uk7Kl1VVEw6dWT/M/NvKyVkY475eWIgx0Z39rHv7axnZyZmIuKhn56emZjX1FEPTU0Kx4PCAX69fTgxcKkopWL7crJuri2sa6rnIyHhX54bVtZVU9NSUcsJSIcFROno6Hcwp+ekHVxbWhnRC8nDLc9s8oAAAOGSURBVEjHpdd3X9pAGAfwkBBDAoQmBJmWvUWWiIDIHoJb66x7a4d78Op7pBQ1J5DY33987vnyXEIu3CGy/0hvnDthM+l0hj3JScSudDKOdhNPpl1i8Ut624Gi6+trI3zW1tcdqGM7/SIC5/ZRR2SNJEm7JkHt7FAJjR18WIs40P3cAFxIOaIRna6ZOHxGunk+TDR1ukjUkSr0w86bcKShiz1OI4JMP8YAD9+4emM2Gm407IfIhzm0NxrhKNsLH4SvQ+RktyvUfZIMXYcPPsSFCcvY6EYW6ZPsxuiYZaLwAW5bDY70Da5paxjvm8d+UcjAUL/GzPtCnDF/mwFWhJ75Zs68x05gxxFRGQfa+RYXokHVCC4O4yOqYLTwBjNB+ncWEZnsbzrIvOLz4CW9g4jODn0ZPO/iZN0UmhaPp0Omq+Q/nLu6NO0hErJnurjKdTBzEdAhkqILXDAdbFkJ7EnDe4EVy198srpiwhE4X1RKDFOqviBwcNPK6gmPmeWlGDz+VdHqRPEVHo0tLTM8RpcX4G+flLe6kU/Cs1pYRnm8uriQhfoC+0ZDvbMLi6ttfO5fDCDCKFrvooAKAov+c4BZvy8EzaolCHRdIZ+fBThl9G0Ih1RCrBJWbPiMKYAZ409oMSqFWAktzJ9GBuDvRoVGOIQJMSas0CiM39u45v0M9tbaeLc6F5M+7dhcbRfgg+pcU/oNa85VDwDOzBtmpP9UKsN8BuCzeb1P+kPi08+fASyr6fVPUh/PJ72+xj/bZk5PSV0YlJ4z83iC4EipS5LkiAkeHxGcQerLwMARRzyW+QklhUgKpST8nXfYg+fHkjS89MPz0MFnhKdCSWpc8RBnPAZB3RUvLt7i3oob7f5juDzuikY81tjcHlcHg9xabdyUWDvF2ay3slecr1ptimNx9lhhs1bzXQxy5NZa6VMx9pS2Wt1H77cVjFartYvBdlDICDc0cbVa3Twd2NcOyuLwVqo+K1ebjgdcr0k+O1uXwThfl8vlhqm+99kASup5GINsYhhmG8d7UXzcBgo2e21cd9WlUll5/7G958ql8uxu7y0zS5SGSkOGBA51TRiGQAi232Y9v4kVQZGavpt6c6l3tLpNsc38gGOC01IeLg4Xi8NaLz1KkqO0VzvcTrFscYo4oLjiRAsKEXeJPRqxW0bsFWLGLVbiocyZSm5vbW0nU9BsIfyp/AGqAvfOkBaFawAAAABJRU5ErkJggg==');background-position:center;background-size:contain;transform:translate(-0.65625rem, 50%)}@keyframes svelte-1jhufeh-fadeIn{from{opacity:0
        }to{opacity:1
        }}`);
}
function V(l) {
  let e, t, n, s = (
    /*itemLabel*/
    (l[0].code || /*itemLabel*/
    l[0].id) + ""
  ), u, o, f, r = (
    /*itemLabel*/
    l[0].name + ""
  ), v, a = (
    /*itemLabel*/
    l[0].icon && D(l)
  );
  return {
    c() {
      a && a.c(), e = z(), t = p("div"), n = p("span"), u = L(s), o = z(), f = p("span"), v = L(r), c(n, "class", "item-model svelte-1jhufeh"), c(f, "class", "item-name svelte-1jhufeh"), c(t, "class", "item-label-text svelte-1jhufeh");
    },
    m(i, d) {
      a && a.m(i, d), j(i, e, d), j(i, t, d), g(t, n), g(n, u), g(t, o), g(t, f), g(f, v);
    },
    p(i, d) {
      /*itemLabel*/
      i[0].icon ? a ? a.p(i, d) : (a = D(i), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), d & /*itemLabel*/
      1 && s !== (s = /*itemLabel*/
      (i[0].code || /*itemLabel*/
      i[0].id) + "") && y(u, s), d & /*itemLabel*/
      1 && r !== (r = /*itemLabel*/
      i[0].name + "") && y(v, r);
    },
    d(i) {
      a && a.d(i), i && w(e), i && w(t);
    }
  };
}
function E(l) {
  let e;
  return {
    c() {
      e = p("div");
    },
    m(t, n) {
      j(t, e, n), l[6](e);
    },
    p: I,
    d(t) {
      t && w(e), l[6](null);
    }
  };
}
function D(l) {
  let e, t, n, s, u;
  return {
    c() {
      e = p("div"), t = p("div"), c(t, "class", "icon svelte-1jhufeh"), c(t, "style", n = `background-image: url(${/*itemLabel*/
      l[0].icon})`), c(e, "class", "icon-wrap svelte-1jhufeh");
    },
    m(o, f) {
      j(o, e, f), g(e, t), s || (u = P(
        e,
        "click",
        /*click_handler*/
        l[7]
      ), s = !0);
    },
    p(o, f) {
      f & /*itemLabel*/
      1 && n !== (n = `background-image: url(${/*itemLabel*/
      o[0].icon})`) && c(t, "style", n);
    },
    d(o) {
      o && w(e), s = !1, u();
    }
  };
}
function G(l) {
  let e, t, n, s, u, o, f, r, v, a;
  function i(h, m) {
    return m & /*itemLabel*/
    1 && (n = null), n == null && (n = typeof /*itemLabel*/
    h[0].render == "function"), n ? E : V;
  }
  let d = i(l, -1), b = d(l);
  return {
    c() {
      e = p("div"), t = p("div"), b.c(), u = z(), o = p("div"), c(t, "class", s = A(_("item-label-item__text-wrap", {
        "item-label-item__custom": typeof /*itemLabel*/
        l[0].render == "function"
      })) + " svelte-1jhufeh"), k(t, "bottom", `${/*itemLabel*/
      l[0].strokeLength}px`), c(o, "class", f = A(_("item-label-item__bar", { anchor: (
        /*anchorEnabled*/
        l[1]
      ) })) + " svelte-1jhufeh"), k(o, "height", `${/*itemLabel*/
      l[0].strokeLength}px`), c(e, "class", r = A(_("item-label-item", { fold: (
        /*itemLabel*/
        l[0].isFold
      ) })) + " svelte-1jhufeh"), k(
        e,
        "z-index",
        /*itemLabel*/
        l[0].zIndex
      ), k(
        e,
        "transform",
        /*itemLabel*/
        l[0].transform
      );
    },
    m(h, m) {
      j(h, e, m), g(e, t), b.m(t, null), g(e, u), g(e, o), v || (a = P(
        t,
        "click",
        /*onClick*/
        l[4]
      ), v = !0);
    },
    p(h, [m]) {
      d === (d = i(h, m)) && b ? b.p(h, m) : (b.d(1), b = d(h), b && (b.c(), b.m(t, null))), m & /*itemLabel*/
      1 && s !== (s = A(_("item-label-item__text-wrap", {
        "item-label-item__custom": typeof /*itemLabel*/
        h[0].render == "function"
      })) + " svelte-1jhufeh") && c(t, "class", s), m & /*itemLabel*/
      1 && k(t, "bottom", `${/*itemLabel*/
      h[0].strokeLength}px`), m & /*anchorEnabled*/
      2 && f !== (f = A(_("item-label-item__bar", { anchor: (
        /*anchorEnabled*/
        h[1]
      ) })) + " svelte-1jhufeh") && c(o, "class", f), m & /*itemLabel*/
      1 && k(o, "height", `${/*itemLabel*/
      h[0].strokeLength}px`), m & /*itemLabel*/
      1 && r !== (r = A(_("item-label-item", { fold: (
        /*itemLabel*/
        h[0].isFold
      ) })) + " svelte-1jhufeh") && c(e, "class", r), m & /*itemLabel*/
      1 && k(
        e,
        "z-index",
        /*itemLabel*/
        h[0].zIndex
      ), m & /*itemLabel*/
      1 && k(
        e,
        "transform",
        /*itemLabel*/
        h[0].transform
      );
    },
    i: I,
    o: I,
    d(h) {
      h && w(e), b.d(), v = !1, a();
    }
  };
}
function U(l, e, t) {
  let { itemLabel: n } = e, { hooks: s } = e, { anchorEnabled: u } = e, { onIconClick: o } = e;
  function f() {
    s.emit("onLabelClick", n);
  }
  let r;
  function v(i) {
    S[i ? "unshift" : "push"](() => {
      r = i, t(3, r);
    });
  }
  const a = (i) => o(n);
  return l.$$set = (i) => {
    "itemLabel" in i && t(0, n = i.itemLabel), "hooks" in i && t(5, s = i.hooks), "anchorEnabled" in i && t(1, u = i.anchorEnabled), "onIconClick" in i && t(2, o = i.onIconClick);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*itemLabel, customElement*/
    9 && typeof n.render == "function" && r && r.children.length === 0) {
      const i = n.render(n);
      i && r.appendChild(i);
    }
  }, [
    n,
    u,
    o,
    r,
    f,
    s,
    v,
    a
  ];
}
class K extends C {
  constructor(e) {
    super(), O(
      this,
      e,
      U,
      G,
      B,
      {
        itemLabel: 0,
        hooks: 5,
        anchorEnabled: 1,
        onIconClick: 2
      },
      x
    );
  }
}
export {
  K as default
};
