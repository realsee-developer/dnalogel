import { SvelteComponent as O, init as B, safe_not_equal as R, append_styles as S, element as p, space as y, attr as f, null_to_empty as A, set_style as k, insert as w, append as g, listen as C, noop as I, detach as z, binding_callbacks as x, text as L, set_data as D } from "../vendor/svelte/internal/index.js";
import { classnames as _ } from "../vendor/classnames/index.js";
function V(l) {
  S(l, "svelte-139cs8e", `.item-label-item.svelte-139cs8e.svelte-139cs8e{position:absolute;z-index:0;transform:none;cursor:pointer;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:svelte-139cs8e-fadeIn .3s ease-in}.item-label-item.fold.svelte-139cs8e>.item-label-item__text-wrap.svelte-139cs8e{visibility:hidden}.item-label-item.fold.svelte-139cs8e>.item-label-item__bar.anchor.svelte-139cs8e{visibility:hidden}.item-label-item.fold.svelte-139cs8e>.item-label-item__bar.anchor.svelte-139cs8e:after{visibility:visible}.item-label-item__text-wrap.svelte-139cs8e.svelte-139cs8e{height:-moz-fit-content;height:fit-content;padding:0.75rem 1.25rem 0.75rem 0.75rem;position:absolute;width:-moz-max-content;width:max-content;max-width:29.5625rem;min-height:5.75rem;background-image:linear-gradient(269deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.60) 49%, rgba(31, 38, 46, 0.70) 100%);border:0.09375rem solid rgba(255, 255, 255, .65);border-radius:0.1875rem;color:white;transform:translate(-50%, 0);display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box;overflow:hidden;pointer-events:all}.item-label-item__custom.svelte-139cs8e.svelte-139cs8e{padding:0;max-width:unset;min-height:unset;background-image:unset;border:0;border-radius:0}.icon-wrap.svelte-139cs8e.svelte-139cs8e{width:4.25rem;height:100%;display:flex;justify-content:center;align-content:center}.icon.svelte-139cs8e.svelte-139cs8e{width:4.25rem;height:4.25rem;background-repeat:no-repeat;background-size:contain;background-position:center}.item-label-text.svelte-139cs8e.svelte-139cs8e{margin-left:0.75rem;padding-left:0.75rem;min-height:4.25rem;height:auto;display:flex;flex-flow:column;justify-content:space-around;align-content:flex-start;border-left:solid rgba(255, 255, 255, .2) 0.0625rem;border-top:solid rgba(255, 255, 255, .2) 0;border-right:solid rgba(255, 255, 255, .2) 0;border-bottom:solid rgba(255, 255, 255, .2) 0;pointer-events:auto}.item-model.svelte-139cs8e.svelte-139cs8e{white-space:nowrap;font-size:1.375rem;font-weight:bold;line-height:1.875rem}.item-name.svelte-139cs8e.svelte-139cs8e{height:auto;word-break:break-word;overflow-wrap:break-word;hyphens:auto;-webkit-hyphens:auto;font-size:1.25rem;line-height:1.75rem}.item-label-item__bar.svelte-139cs8e.svelte-139cs8e{position:absolute;bottom:0;width:0.1875rem;background-image:linear-gradient(to bottom, white, rgba(255, 255, 255, 0));box-shadow:0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.20);pointer-events:none}.item-label-item__bar.anchor.svelte-139cs8e.svelte-139cs8e:after{content:'';position:absolute;bottom:0;width:1.5rem;height:1.5rem;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABcVBMVEUAAAAAAAD////////+/v45OTn////////39/fp6enPz8/7+/vw8PD+/v7x8fHc3NzHx8f////////+/v77+/vr6+v////7+/v5+fn////z8/P////////q6uqgoKD+/v79/f3m5ub+/v7////////////////39/f39/f////z8/P////t7e3s7Oz29vb////5+fn////h4eH////g4ODV1dX////////BwcH///////////+Ojo5zc3MlJSX////////////////////////7+/v////////////v7+/u7u7n5+f////39/f////09PT6+vr09PT+/v76+vr////5+fnv7+/09PTk5OT////////////////Jycn///++vr7///////+0tLT///9TU1P///8SEhL////////+/v76+vr////8/Pz39/ft7e3t7e36+vr////////X19fV1dX///+xsbF9fX1iYmL///////+K8mOEAAAAenRSTlMaAIDy8CD41cWRX9uk7Kl1VVEw6dWT/M/NvKyVkY475eWIgx0Z39rHv7axnZyZmIuKhn56emZjX1FEPTU0Kx4PCAX69fTgxcKkopWL7crJuri2sa6rnIyHhX54bVtZVU9NSUcsJSIcFROno6Hcwp+ekHVxbWhnRC8nDLc9s8oAAAOGSURBVEjHpdd3X9pAGAfwkBBDAoQmBJmWvUWWiIDIHoJb66x7a4d78Op7pBQ1J5DY33987vnyXEIu3CGy/0hvnDthM+l0hj3JScSudDKOdhNPpl1i8Ut624Gi6+trI3zW1tcdqGM7/SIC5/ZRR2SNJEm7JkHt7FAJjR18WIs40P3cAFxIOaIRna6ZOHxGunk+TDR1ukjUkSr0w86bcKShiz1OI4JMP8YAD9+4emM2Gm407IfIhzm0NxrhKNsLH4SvQ+RktyvUfZIMXYcPPsSFCcvY6EYW6ZPsxuiYZaLwAW5bDY70Da5paxjvm8d+UcjAUL/GzPtCnDF/mwFWhJ75Zs68x05gxxFRGQfa+RYXokHVCC4O4yOqYLTwBjNB+ncWEZnsbzrIvOLz4CW9g4jODn0ZPO/iZN0UmhaPp0Omq+Q/nLu6NO0hErJnurjKdTBzEdAhkqILXDAdbFkJ7EnDe4EVy198srpiwhE4X1RKDFOqviBwcNPK6gmPmeWlGDz+VdHqRPEVHo0tLTM8RpcX4G+flLe6kU/Cs1pYRnm8uriQhfoC+0ZDvbMLi6ttfO5fDCDCKFrvooAKAov+c4BZvy8EzaolCHRdIZ+fBThl9G0Ih1RCrBJWbPiMKYAZ409oMSqFWAktzJ9GBuDvRoVGOIQJMSas0CiM39u45v0M9tbaeLc6F5M+7dhcbRfgg+pcU/oNa85VDwDOzBtmpP9UKsN8BuCzeb1P+kPi08+fASyr6fVPUh/PJ72+xj/bZk5PSV0YlJ4z83iC4EipS5LkiAkeHxGcQerLwMARRzyW+QklhUgKpST8nXfYg+fHkjS89MPz0MFnhKdCSWpc8RBnPAZB3RUvLt7i3oob7f5juDzuikY81tjcHlcHg9xabdyUWDvF2ay3slecr1ptimNx9lhhs1bzXQxy5NZa6VMx9pS2Wt1H77cVjFartYvBdlDICDc0cbVa3Twd2NcOyuLwVqo+K1ebjgdcr0k+O1uXwThfl8vlhqm+99kASup5GINsYhhmG8d7UXzcBgo2e21cd9WlUll5/7G958ql8uxu7y0zS5SGSkOGBA51TRiGQAi232Y9v4kVQZGavpt6c6l3tLpNsc38gGOC01IeLg4Xi8NaLz1KkqO0VzvcTrFscYo4oLjiRAsKEXeJPRqxW0bsFWLGLVbiocyZSm5vbW0nU9BsIfyp/AGqAvfOkBaFawAAAABJRU5ErkJggg==');background-position:center;background-size:contain;transform:translate(-0.65625rem, 50%)}@keyframes svelte-139cs8e-fadeIn{from{opacity:0
        }to{opacity:1
        }}`);
}
function E(l) {
  let e, t, n, a = (
    /*itemLabel*/
    (l[0].code || /*itemLabel*/
    l[0].id) + ""
  ), b, s, m, r = (
    /*itemLabel*/
    l[0].name + ""
  ), h, o = (
    /*itemLabel*/
    l[0].icon && P(l)
  );
  return {
    c() {
      o && o.c(), e = y(), t = p("div"), n = p("span"), b = L(a), s = y(), m = p("span"), h = L(r), f(n, "class", "item-model svelte-139cs8e"), f(m, "class", "item-name svelte-139cs8e"), f(t, "class", "item-label-text svelte-139cs8e");
    },
    m(i, v) {
      o && o.m(i, v), w(i, e, v), w(i, t, v), g(t, n), g(n, b), g(t, s), g(t, m), g(m, h);
    },
    p(i, v) {
      /*itemLabel*/
      i[0].icon ? o ? o.p(i, v) : (o = P(i), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), v & /*itemLabel*/
      1 && a !== (a = /*itemLabel*/
      (i[0].code || /*itemLabel*/
      i[0].id) + "") && D(b, a), v & /*itemLabel*/
      1 && r !== (r = /*itemLabel*/
      i[0].name + "") && D(h, r);
    },
    d(i) {
      o && o.d(i), i && z(e), i && z(t);
    }
  };
}
function G(l) {
  let e;
  return {
    c() {
      e = p("div");
    },
    m(t, n) {
      w(t, e, n), l[6](e);
    },
    p: I,
    d(t) {
      t && z(e), l[6](null);
    }
  };
}
function P(l) {
  let e, t, n, a, b;
  return {
    c() {
      e = p("div"), t = p("div"), f(t, "class", "icon svelte-139cs8e"), f(t, "style", n = `background-image: url(${/*itemLabel*/
      l[0].icon})`), f(e, "class", "icon-wrap svelte-139cs8e");
    },
    m(s, m) {
      w(s, e, m), g(e, t), a || (b = C(
        e,
        "click",
        /*click_handler*/
        l[7]
      ), a = !0);
    },
    p(s, m) {
      m & /*itemLabel*/
      1 && n !== (n = `background-image: url(${/*itemLabel*/
      s[0].icon})`) && f(t, "style", n);
    },
    d(s) {
      s && z(e), a = !1, b();
    }
  };
}
function U(l) {
  let e, t, n, a, b, s, m, r, h, o;
  function i(c, d) {
    return d & /*itemLabel*/
    1 && (n = null), n == null && (n = typeof /*itemLabel*/
    c[0].render == "function"), n ? G : E;
  }
  let v = i(l, -1), u = v(l);
  return {
    c() {
      e = p("div"), t = p("div"), u.c(), b = y(), s = p("div"), f(t, "class", a = A(_("item-label-item__text-wrap", {
        "item-label-item__custom": typeof /*itemLabel*/
        l[0].render == "function"
      })) + " svelte-139cs8e"), k(t, "bottom", `${/*itemLabel*/
      l[0].strokeLength}px`), f(s, "class", m = A(_("item-label-item__bar", { anchor: (
        /*anchorEnabled*/
        l[1]
      ) })) + " svelte-139cs8e"), k(s, "height", `${/*itemLabel*/
      l[0].strokeLength}px`), f(e, "class", r = A(_("item-label-item", { fold: (
        /*itemLabel*/
        l[0].isFold
      ) })) + " svelte-139cs8e"), k(
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
    m(c, d) {
      w(c, e, d), g(e, t), u.m(t, null), g(e, b), g(e, s), h || (o = C(
        t,
        "click",
        /*onClick*/
        l[4]
      ), h = !0);
    },
    p(c, [d]) {
      v === (v = i(c, d)) && u ? u.p(c, d) : (u.d(1), u = v(c), u && (u.c(), u.m(t, null))), d & /*itemLabel*/
      1 && a !== (a = A(_("item-label-item__text-wrap", {
        "item-label-item__custom": typeof /*itemLabel*/
        c[0].render == "function"
      })) + " svelte-139cs8e") && f(t, "class", a), d & /*itemLabel*/
      1 && k(t, "bottom", `${/*itemLabel*/
      c[0].strokeLength}px`), d & /*anchorEnabled*/
      2 && m !== (m = A(_("item-label-item__bar", { anchor: (
        /*anchorEnabled*/
        c[1]
      ) })) + " svelte-139cs8e") && f(s, "class", m), d & /*itemLabel*/
      1 && k(s, "height", `${/*itemLabel*/
      c[0].strokeLength}px`), d & /*itemLabel*/
      1 && r !== (r = A(_("item-label-item", { fold: (
        /*itemLabel*/
        c[0].isFold
      ) })) + " svelte-139cs8e") && f(e, "class", r), d & /*itemLabel*/
      1 && k(
        e,
        "z-index",
        /*itemLabel*/
        c[0].zIndex
      ), d & /*itemLabel*/
      1 && k(
        e,
        "transform",
        /*itemLabel*/
        c[0].transform
      );
    },
    i: I,
    o: I,
    d(c) {
      c && z(e), u.d(), h = !1, o();
    }
  };
}
function W(l, e, t) {
  let { itemLabel: n } = e, { hooks: a } = e, { anchorEnabled: b } = e, { onIconClick: s } = e;
  function m() {
    a.emit("onLabelClick", n);
  }
  let r;
  function h(i) {
    x[i ? "unshift" : "push"](() => {
      r = i, t(3, r);
    });
  }
  const o = (i) => s(n);
  return l.$$set = (i) => {
    "itemLabel" in i && t(0, n = i.itemLabel), "hooks" in i && t(5, a = i.hooks), "anchorEnabled" in i && t(1, b = i.anchorEnabled), "onIconClick" in i && t(2, s = i.onIconClick);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*itemLabel, customElement*/
    9 && typeof n.render == "function" && r && r.children.length === 0) {
      const i = n.render(n);
      i && r.appendChild(i);
    }
  }, [
    n,
    b,
    s,
    r,
    m,
    a,
    h,
    o
  ];
}
class Z extends O {
  constructor(e) {
    super(), B(
      this,
      e,
      W,
      U,
      R,
      {
        itemLabel: 0,
        hooks: 5,
        anchorEnabled: 1,
        onIconClick: 2
      },
      V
    );
  }
}
export {
  Z as default
};
