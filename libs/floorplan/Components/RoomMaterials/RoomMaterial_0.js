import { SvelteComponent as c, init as f, safe_not_equal as h, svg_element as m, attr as i, insert as u, noop as p, detach as d } from "../../../vendor/svelte/internal/index.js";
import { pathD as s } from "../../utils/formatPosition.js";
function l(n) {
  let t;
  return {
    c() {
      t = m("path"), i(
        t,
        "d",
        /*d*/
        n[0]
      ), i(t, "fill", "#2F313A");
    },
    m(e, r) {
      u(e, t, r);
    },
    p(e, [r]) {
      r & /*d*/
      1 && i(
        t,
        "d",
        /*d*/
        e[0]
      );
    },
    i: p,
    o: p,
    d(e) {
      e && d(t);
    }
  };
}
function _(n, t, e) {
  let r, { path: a } = t;
  return n.$$set = (o) => {
    "path" in o && e(1, a = o.path);
  }, n.$$.update = () => {
    n.$$.dirty & /*path*/
    2 && e(0, r = s(a, { needZ: !0 }));
  }, [r, a];
}
class q extends c {
  constructor(t) {
    super(), f(this, t, _, l, h, { path: 1 });
  }
}
export {
  q as RoomMaterial_0
};
