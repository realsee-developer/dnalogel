import { SvelteComponent as c, init as s, safe_not_equal as m, append_styles as p, element as u, create_component as l, attr as f, insert as d, mount_component as g, transition_in as h, transition_out as _, detach as y, destroy_component as x } from "../../../vendor/svelte/internal/index.js";
import w from "../Common/Icon/PanoramaIcon.js";
import "../Common/Shadow.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
function v(r) {
  p(r, "svelte-yq4ru9", ".wrapper.svelte-yq4ru9{font-weight:600;cursor:pointer;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);display:flex;align-items:center;justify-content:center;flex-direction:column;pointer-events:auto}");
}
function $(r) {
  let n, e, a;
  return e = new w({
    props: { icon: (
      /*icon*/
      r[0]
    ), shadow: !0 }
  }), {
    c() {
      n = u("div"), l(e.$$.fragment), f(n, "class", "wrapper svelte-yq4ru9");
    },
    m(t, o) {
      d(t, n, o), g(e, n, null), a = !0;
    },
    p(t, [o]) {
      const i = {};
      o & /*icon*/
      1 && (i.icon = /*icon*/
      t[0]), e.$set(i);
    },
    i(t) {
      a || (h(e.$$.fragment, t), a = !0);
    },
    o(t) {
      _(e.$$.fragment, t), a = !1;
    },
    d(t) {
      t && y(n), x(e);
    }
  };
}
function q(r, n, e) {
  let a, { tag: t } = n;
  return r.$$set = (o) => {
    "tag" in o && e(1, t = o.tag);
  }, r.$$.update = () => {
    var o, i;
    r.$$.dirty & /*tag*/
    2 && e(0, a = (i = t.data.icon) != null ? i : (o = t.style) == null ? void 0 : o.point);
  }, [a, t];
}
class I extends c {
  constructor(n) {
    super(), s(this, n, q, $, m, { tag: 1 }, v);
  }
}
export {
  I as default
};
