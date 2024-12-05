import { SvelteComponent as g, init as $, safe_not_equal as k, empty as b, insert as y, transition_out as m, check_outros as h, transition_in as l, detach as A, group_outros as R, create_component as s, mount_component as _, destroy_component as d } from "../../../../vendor/svelte/internal/index.js";
import T from "./AudioTag.js";
import w from "./AudioPlaneTag.js";
import "../../../../vendor/svelte/easing/index.js";
import "../../../../vendor/svelte/transition/index.js";
import "../../Common/Audio.js";
import "../../../utils/audio/SharedAudio.js";
import "../../../../shared-utils/audio.js";
import "../../Common/Line/Straight.js";
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
import "../../Common/Icon/audioIcon.js";
import "../../../utils/px2rem.js";
import "../../../../shared-utils/svelte/resizeObserver.js";
import "../../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "../../Common/Text/MText.js";
function q(n) {
  let t, o;
  return t = new w({ props: { tag: (
    /*tag*/
    n[0]
  ) } }), t.$on(
    "audioRef",
    /*audioRef*/
    n[2]
  ), {
    c() {
      s(t.$$.fragment);
    },
    m(e, r) {
      _(t, e, r), o = !0;
    },
    p(e, r) {
      const a = {};
      r & /*tag*/
      1 && (a.tag = /*tag*/
      e[0]), t.$set(a);
    },
    i(e) {
      o || (l(t.$$.fragment, e), o = !0);
    },
    o(e) {
      m(t.$$.fragment, e), o = !1;
    },
    d(e) {
      d(t, e);
    }
  };
}
function v(n) {
  let t, o;
  return t = new T({ props: { tag: (
    /*tag*/
    n[0]
  ) } }), t.$on(
    "audioRef",
    /*audioRef*/
    n[2]
  ), {
    c() {
      s(t.$$.fragment);
    },
    m(e, r) {
      _(t, e, r), o = !0;
    },
    p(e, r) {
      const a = {};
      r & /*tag*/
      1 && (a.tag = /*tag*/
      e[0]), t.$set(a);
    },
    i(e) {
      o || (l(t.$$.fragment, e), o = !0);
    },
    o(e) {
      m(t.$$.fragment, e), o = !1;
    },
    d(e) {
      d(t, e);
    }
  };
}
function C(n) {
  let t, o, e, r;
  const a = [v, q], p = [];
  function u(i, f) {
    return (
      /*appearance*/
      i[1] === "line" ? 0 : (
        /*appearance*/
        i[1] === "plane" ? 1 : -1
      )
    );
  }
  return ~(t = u(n)) && (o = p[t] = a[t](n)), {
    c() {
      o && o.c(), e = b();
    },
    m(i, f) {
      ~t && p[t].m(i, f), y(i, e, f), r = !0;
    },
    p(i, [f]) {
      let c = t;
      t = u(i), t === c ? ~t && p[t].p(i, f) : (o && (R(), m(p[c], 1, 1, () => {
        p[c] = null;
      }), h()), ~t ? (o = p[t], o ? o.p(i, f) : (o = p[t] = a[t](i), o.c()), l(o, 1), o.m(e.parentNode, e)) : o = null);
    },
    i(i) {
      r || (l(o), r = !0);
    },
    o(i) {
      m(o), r = !1;
    },
    d(i) {
      ~t && p[t].d(i), i && A(e);
    }
  };
}
function N(n, t, o) {
  let e, { tag: r } = t, a;
  function p(u) {
    a = u.detail;
  }
  return r.play = () => a.play(), r.pause = () => a.pause(), n.$$set = (u) => {
    "tag" in u && o(0, r = u.tag);
  }, n.$$.update = () => {
    var u;
    n.$$.dirty & /*tag*/
    1 && o(1, e = (u = r.data.appearance) != null ? u : "line");
  }, [r, e, p];
}
class ot extends g {
  constructor(t) {
    super(), $(this, t, N, C, k, { tag: 0 });
  }
}
export {
  ot as default
};
