import { SvelteComponent as w, init as k, safe_not_equal as L, append_styles as z, element as u, text as I, space as y, attr as b, set_style as s, null_to_empty as v, insert as x, append as f, listen as C, set_data as j, noop as h, detach as q } from "../vendor/svelte/internal/index.js";
import { classnames as _ } from "../vendor/classnames/index.js";
function S(t) {
  z(t, "svelte-1wufped", ".item-label-item.svelte-1wufped{position:absolute;z-index:0;transform:none;cursor:pointer;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:0}.item-label-item.visible.svelte-1wufped{opacity:1;animation:svelte-1wufped-fadeIn 0.3s ease-in}.item-label-item__text-wrap.svelte-1wufped::before{content:'';position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.3);filter:blur(1rem);z-index:-1}.item-label-item__text-wrap.svelte-1wufped{padding:0.375rem 0.375rem 0;position:absolute;height:1.25rem;pointer-events:all;background-size:100% 100%;background-repeat:no-repeat;white-space:nowrap;line-height:0.625rem;font-size:0.6875rem;font-weight:bold;color:#ffeac0;transform:translate(-50%, 0);display:flex;justify-content:center;align-items:center}.item-label-item__text.svelte-1wufped{padding-bottom:0.25rem;border-top:0 solid;border-left:0 solid;border-right:0 solid;border-bottom:0.0625rem solid;-o-border-image:linear-gradient(to right, rgba(234, 208, 154, 0), rgba(234, 208, 154, 100), rgba(234, 208, 154, 0)) 4.5 1 4.5;border-image:linear-gradient(to right, rgba(234, 208, 154, 0), rgba(234, 208, 154, 100), rgba(234, 208, 154, 0)) 4.5 1 4.5}.item-label-item__bar.svelte-1wufped{position:absolute;bottom:0;width:0.0625rem;background-image:linear-gradient(to bottom, rgba(234, 208, 154, 0), rgba(234, 208, 154, 1))}@keyframes svelte-1wufped-fadeIn{from{opacity:0}to{opacity:1}}");
}
function A(t) {
  let e, l, a, n = (
    /*itemLabel*/
    (t[0].name.length > 6 ? `${/*itemLabel*/
    t[0].name.slice(0, 6)}...` : (
      /*itemLabel*/
      t[0].name
    )) + ""
  ), m, r, d, p, g, c;
  return {
    c() {
      e = u("div"), l = u("div"), a = u("span"), m = I(n), r = y(), d = u("div"), b(a, "class", "item-label-item__text svelte-1wufped"), b(l, "class", "item-label-item__text-wrap svelte-1wufped"), s(l, "top", `-${/*itemLabel*/
      t[0].strokeLength + 26}px`), b(d, "class", "item-label-item__bar svelte-1wufped"), s(d, "height", `${/*itemLabel*/
      t[0].strokeLength}px`), b(e, "class", p = v(_("item-label-item", { visible: (
        /*itemLabel*/
        t[0].visible
      ) })) + " svelte-1wufped"), s(
        e,
        "z-index",
        /*itemLabel*/
        t[0].zIndex
      ), s(
        e,
        "transform",
        /*itemLabel*/
        t[0].transform
      );
    },
    m(i, o) {
      x(i, e, o), f(e, l), f(l, a), f(a, m), f(e, r), f(e, d), g || (c = C(
        a,
        "click",
        /*onClick*/
        t[1]
      ), g = !0);
    },
    p(i, [o]) {
      o & /*itemLabel*/
      1 && n !== (n = /*itemLabel*/
      (i[0].name.length > 6 ? `${/*itemLabel*/
      i[0].name.slice(0, 6)}...` : (
        /*itemLabel*/
        i[0].name
      )) + "") && j(m, n), o & /*itemLabel*/
      1 && s(l, "top", `-${/*itemLabel*/
      i[0].strokeLength + 26}px`), o & /*itemLabel*/
      1 && s(d, "height", `${/*itemLabel*/
      i[0].strokeLength}px`), o & /*itemLabel*/
      1 && p !== (p = v(_("item-label-item", { visible: (
        /*itemLabel*/
        i[0].visible
      ) })) + " svelte-1wufped") && b(e, "class", p), o & /*itemLabel*/
      1 && s(
        e,
        "z-index",
        /*itemLabel*/
        i[0].zIndex
      ), o & /*itemLabel*/
      1 && s(
        e,
        "transform",
        /*itemLabel*/
        i[0].transform
      );
    },
    i: h,
    o: h,
    d(i) {
      i && q(e), g = !1, c();
    }
  };
}
function B(t, e, l) {
  let { itemLabel: a } = e, { hooks: n } = e;
  function m() {
    n.emit("onLabelClick", a);
  }
  return t.$$set = (r) => {
    "itemLabel" in r && l(0, a = r.itemLabel), "hooks" in r && l(2, n = r.hooks);
  }, [a, m, n];
}
class F extends w {
  constructor(e) {
    super(), k(this, e, B, A, L, { itemLabel: 0, hooks: 2 }, S);
  }
}
export {
  F as default
};
