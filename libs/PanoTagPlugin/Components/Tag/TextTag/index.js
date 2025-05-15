import { SvelteComponent as d, init as $, safe_not_equal as k, empty as b, insert as x, transition_out as f, check_outros as T, transition_in as m, detach as y, group_outros as h, create_component as s, mount_component as _, destroy_component as g } from "../../../../vendor/svelte/internal/index.js";
import w from "./TextTag.js";
import q from "./TextPlaneTag.js";
import "../../Common/Line/Straight.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../../../vendor/svelte/easing/index.js";
import "../../../../shared-utils/uuid.js";
import "../../Common/Shadow.js";
import "../../Common/Text/FlyMText.js";
import "../../Common/Text/FlyText.js";
import "../../../../vendor/animejs/lib/anime.es.js";
import "../../../../shared-utils/isNil.js";
import "three";
import "../../../utils/search.js";
import "../../../utils/constants.js";
import "../../Common/Arrow.js";
import "../../../Assets/Icon.js";
import "../../../utils/doUtil.js";
import "../../../../shared-utils/svelte/resizeObserver.js";
import "../../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "../../Common/Text/MText.js";
import "../../../utils/px2rem.js";
function v(a) {
  let t, r;
  return t = new q({ props: { tag: (
    /*tag*/
    a[0]
  ) } }), {
    c() {
      s(t.$$.fragment);
    },
    m(e, o) {
      _(t, e, o), r = !0;
    },
    p(e, o) {
      const i = {};
      o & /*tag*/
      1 && (i.tag = /*tag*/
      e[0]), t.$set(i);
    },
    i(e) {
      r || (m(t.$$.fragment, e), r = !0);
    },
    o(e) {
      f(t.$$.fragment, e), r = !1;
    },
    d(e) {
      g(t, e);
    }
  };
}
function C(a) {
  let t, r;
  return t = new w({ props: { tag: (
    /*tag*/
    a[0]
  ) } }), {
    c() {
      s(t.$$.fragment);
    },
    m(e, o) {
      _(t, e, o), r = !0;
    },
    p(e, o) {
      const i = {};
      o & /*tag*/
      1 && (i.tag = /*tag*/
      e[0]), t.$set(i);
    },
    i(e) {
      r || (m(t.$$.fragment, e), r = !0);
    },
    o(e) {
      f(t.$$.fragment, e), r = !1;
    },
    d(e) {
      g(t, e);
    }
  };
}
function N(a) {
  let t, r, e, o;
  const i = [C, v], p = [];
  function u(n, c) {
    return (
      /*appearance*/
      n[1] === "line" ? 0 : (
        /*appearance*/
        n[1] === "plane" ? 1 : -1
      )
    );
  }
  return ~(t = u(a)) && (r = p[t] = i[t](a)), {
    c() {
      r && r.c(), e = b();
    },
    m(n, c) {
      ~t && p[t].m(n, c), x(n, e, c), o = !0;
    },
    p(n, [c]) {
      let l = t;
      t = u(n), t === l ? ~t && p[t].p(n, c) : (r && (h(), f(p[l], 1, 1, () => {
        p[l] = null;
      }), T()), ~t ? (r = p[t], r ? r.p(n, c) : (r = p[t] = i[t](n), r.c()), m(r, 1), r.m(e.parentNode, e)) : r = null);
    },
    i(n) {
      o || (m(r), o = !0);
    },
    o(n) {
      f(r), o = !1;
    },
    d(n) {
      ~t && p[t].d(n), n && y(e);
    }
  };
}
function P(a, t, r) {
  let e, { tag: o } = t;
  return a.$$set = (i) => {
    "tag" in i && r(0, o = i.tag);
  }, a.$$.update = () => {
    var i;
    a.$$.dirty & /*tag*/
    1 && r(1, e = (i = o.data.appearance) != null ? i : "line");
  }, [o, e];
}
class Y extends d {
  constructor(t) {
    super(), $(this, t, P, N, k, { tag: 0 });
  }
}
export {
  Y as default
};
