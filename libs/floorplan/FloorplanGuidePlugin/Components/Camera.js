import { SvelteComponent as W, init as E, safe_not_equal as R, append_styles as q, element as v, attr as I, set_style as i, insert as G, append as y, noop as z, detach as H, onMount as j } from "../../../vendor/svelte/internal/index.js";
import { CAMERA_IMAGE as S } from "../../Assets/camera.js";
import { throttle as B } from "../../../shared-utils/throttle.js";
function J(e) {
  q(e, "svelte-3rukxu", ".plugin-radar__camera-wrapper.svelte-3rukxu{width:100%;height:100%;position:absolute;pointer-events:none;z-index:20}.plugin-radar__camera-position.svelte-3rukxu{position:absolute;left:0;top:0;width:0;height:0;transform:none;pointer-events:none;transition:transform 1s linear;transform-origin:0 0;z-index:20}.plugin-radar__camera-rotate.svelte-3rukxu{position:absolute;transform:rotate(45deg);background-repeat:no-repeat;background-size:100%;z-index:20}");
}
function K(e) {
  let f, o, r, u = `${/*cameraSize*/
  e[1]}px`, g = `${/*cameraSize*/
  e[1]}px`, p = `-${/*cameraOffset*/
  e[2]}px`, a = `-${/*cameraOffset*/
  e[2]}px`, s = `${/*cameraOffset*/
  e[2]}px ${/*cameraOffset*/
  e[2]}px`;
  return {
    c() {
      f = v("div"), o = v("div"), r = v("div"), I(r, "class", "plugin-radar__camera-rotate svelte-3rukxu"), i(r, "background-image", "url(" + /*cameraImageUrl*/
      (e[0] || S) + ")"), i(
        r,
        "transform",
        /*rotateTransform*/
        e[3]
      ), i(r, "width", u), i(r, "height", g), i(r, "left", p), i(r, "top", a), i(r, "transform-origin", s), I(o, "class", "plugin-radar__camera-position svelte-3rukxu"), i(
        o,
        "transform",
        /*positionTransform*/
        e[4]
      ), I(f, "class", "plugin-radar__camera-wrapper svelte-3rukxu"), i(
        f,
        "opacity",
        /*hasCurrentFloorData*/
        e[5] ? 1 : 0
      );
    },
    m(n, l) {
      G(n, f, l), y(f, o), y(o, r);
    },
    p(n, [l]) {
      l & /*cameraImageUrl*/
      1 && i(r, "background-image", "url(" + /*cameraImageUrl*/
      (n[0] || S) + ")");
      const m = l & /*cameraImageUrl*/
      1;
      (m || l & /*rotateTransform, cameraImageUrl*/
      9) && i(
        r,
        "transform",
        /*rotateTransform*/
        n[3]
      ), (m || l & /*cameraSize, cameraImageUrl*/
      3 && u !== (u = `${/*cameraSize*/
      n[1]}px`)) && i(r, "width", u), (m || l & /*cameraSize, cameraImageUrl*/
      3 && g !== (g = `${/*cameraSize*/
      n[1]}px`)) && i(r, "height", g), (m || l & /*cameraOffset, cameraImageUrl*/
      5 && p !== (p = `-${/*cameraOffset*/
      n[2]}px`)) && i(r, "left", p), (m || l & /*cameraOffset, cameraImageUrl*/
      5 && a !== (a = `-${/*cameraOffset*/
      n[2]}px`)) && i(r, "top", a), (m || l & /*cameraOffset, cameraImageUrl*/
      5 && s !== (s = `${/*cameraOffset*/
      n[2]}px ${/*cameraOffset*/
      n[2]}px`)) && i(r, "transform-origin", s), l & /*positionTransform*/
      16 && i(
        o,
        "transform",
        /*positionTransform*/
        n[4]
      ), l & /*hasCurrentFloorData*/
      32 && i(
        f,
        "opacity",
        /*hasCurrentFloorData*/
        n[5] ? 1 : 0
      );
    },
    i: z,
    o: z,
    d(n) {
      n && H(f);
    }
  };
}
function L(e) {
  return `rotate(${Math.floor(e / Math.PI * 180) * -1 + 45}deg)`;
}
function N(e, f, o) {
  var A, D;
  let r, u, g, p, { five: a } = f, { pxmm: s } = f, { floorplanData: n } = f, { cameraImageUrl: l } = f, { cameraSize: m = 36 } = f, { cameraOffset: b = 28.5 } = f, d = a.getCurrentState().panoIndex, h = a.getCurrentState().longitude, _ = (D = (A = a.work.observers[a.getCurrentState().panoIndex]) == null ? void 0 : A.floorIndex) != null ? D : 0;
  function M(t, U) {
    const c = t.bounding, x = t.observers[U];
    if (!x)
      return "";
    const O = (c.max.x - c.min.x) * s, F = (c.max.y - c.min.y) * s, P = Math.floor(x.positionInImage.x * O), T = Math.floor(x.positionInImage.y * F);
    return `translate(${P}px, ${T}px)`;
  }
  function k(t) {
    o(9, d = t);
  }
  function C(t) {
    o(11, _ = a.work.observers[t].floorIndex);
  }
  const w = B(
    (t) => {
      o(10, h = t.longitude);
    },
    1e3 / 60
  );
  return j(() => (a.on("panoWillArrive", k), a.on("panoArrived", C), a.on("cameraDirectionUpdate", w), function() {
    a.off("panoWillArrive", k), a.off("panoArrived", C), a.off("cameraDirectionUpdate", w);
  })), e.$$set = (t) => {
    "five" in t && o(6, a = t.five), "pxmm" in t && o(7, s = t.pxmm), "floorplanData" in t && o(8, n = t.floorplanData), "cameraImageUrl" in t && o(0, l = t.cameraImageUrl), "cameraSize" in t && o(1, m = t.cameraSize), "cameraOffset" in t && o(2, b = t.cameraOffset);
  }, e.$$.update = () => {
    e.$$.dirty & /*floorplanData, floorIndex*/
    2304 && o(12, r = n.floorDatas[_]), e.$$.dirty & /*floorData*/
    4096 && o(5, u = r.rooms.length > 0), e.$$.dirty & /*floorplanData, panoIndex*/
    768 && o(4, g = M(n, d)), e.$$.dirty & /*longitude*/
    1024 && o(3, p = L(h));
  }, [
    l,
    m,
    b,
    p,
    g,
    u,
    a,
    s,
    n,
    d,
    h,
    _,
    r
  ];
}
class Y extends W {
  constructor(f) {
    super(), E(
      this,
      f,
      N,
      K,
      R,
      {
        five: 6,
        pxmm: 7,
        floorplanData: 8,
        cameraImageUrl: 0,
        cameraSize: 1,
        cameraOffset: 2
      },
      J
    );
  }
}
export {
  Y as default
};
