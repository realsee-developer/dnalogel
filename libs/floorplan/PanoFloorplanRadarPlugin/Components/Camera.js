import { SvelteComponent as T, init as W, safe_not_equal as E, append_styles as R, element as h, attr as _, set_style as s, insert as z, append as D, noop as q, detach as G, onMount as H } from "../../../vendor/svelte/internal/index.js";
import { CAMERA_IMAGE as w } from "../../Assets/camera.js";
import { throttle as O } from "../../../shared-utils/throttle.js";
function j(r) {
  R(r, "svelte-1nqrlxd", ".plugin-radar__camera-wrapper.svelte-1nqrlxd{width:100%;height:100%;position:absolute;pointer-events:none}.plugin-radar__camera-position.svelte-1nqrlxd{position:absolute;left:0;top:0;width:0;height:0;transform:none;pointer-events:none;transition:transform 1s linear}.plugin-radar__camera-rotate.svelte-1nqrlxd{position:absolute;left:-0.9375rem;top:-0.9375rem;width:1.0625rem;height:1.0625rem;transform-origin:0.9375rem 0.9375rem;transform:rotate(45deg);background-repeat:no-repeat;background-size:100%}");
}
function B(r) {
  let n, e, a;
  return {
    c() {
      n = h("div"), e = h("div"), a = h("div"), _(a, "class", "plugin-radar__camera-rotate svelte-1nqrlxd"), s(a, "background-image", "url(" + /*cameraImageUrl*/
      (r[0] || w) + ")"), s(
        a,
        "transform",
        /*rotateTransform*/
        r[1]
      ), _(e, "class", "plugin-radar__camera-position svelte-1nqrlxd"), s(
        e,
        "transform",
        /*positionTransform*/
        r[2]
      ), _(n, "class", "plugin-radar__camera-wrapper svelte-1nqrlxd"), s(
        n,
        "opacity",
        /*hasCurrentFloorData*/
        r[3] ? 1 : 0
      );
    },
    m(i, l) {
      z(i, n, l), D(n, e), D(e, a);
    },
    p(i, [l]) {
      l & /*cameraImageUrl*/
      1 && s(a, "background-image", "url(" + /*cameraImageUrl*/
      (i[0] || w) + ")"), (l & /*cameraImageUrl*/
      1 || l & /*rotateTransform, cameraImageUrl*/
      3) && s(
        a,
        "transform",
        /*rotateTransform*/
        i[1]
      ), l & /*positionTransform*/
      4 && s(
        e,
        "transform",
        /*positionTransform*/
        i[2]
      ), l & /*hasCurrentFloorData*/
      8 && s(
        n,
        "opacity",
        /*hasCurrentFloorData*/
        i[3] ? 1 : 0
      );
    },
    i: q,
    o: q,
    d(i) {
      i && G(n);
    }
  };
}
function J(r) {
  return `rotate(${Math.floor(r / Math.PI * 180) * -1 + 45}deg)`;
}
function K(r, n, e) {
  var y, A;
  let a, i, l, c, { five: o } = n, { pxmm: m } = n, { floorplanData: f } = n, { cameraImageUrl: x } = n, u = o.getCurrentState().panoIndex, p = o.getCurrentState().longitude, g = (A = (y = o.work.observers[o.getCurrentState().panoIndex]) == null ? void 0 : y.floorIndex) != null ? A : 0;
  function M(t, U) {
    const d = t.bounding, v = t.observers[U];
    if (!v)
      return "";
    const k = (d.max.x - d.min.x) * m, F = (d.max.y - d.min.y) * m, P = Math.floor(v.positionInImage.x * k), S = Math.floor(v.positionInImage.y * F);
    return `translate(${P}px, ${S}px)`;
  }
  function I(t) {
    e(7, u = t);
  }
  function b(t) {
    e(9, g = o.work.observers[t].floorIndex);
  }
  const C = O(
    (t) => {
      e(8, p = t.longitude);
    },
    1e3 / 60
  );
  return H(() => (o.on("panoWillArrive", I), o.on("panoArrived", b), o.on("cameraDirectionUpdate", C), function() {
    o.off("panoWillArrive", I), o.off("panoArrived", b), o.off("cameraDirectionUpdate", C);
  })), r.$$set = (t) => {
    "five" in t && e(4, o = t.five), "pxmm" in t && e(5, m = t.pxmm), "floorplanData" in t && e(6, f = t.floorplanData), "cameraImageUrl" in t && e(0, x = t.cameraImageUrl);
  }, r.$$.update = () => {
    r.$$.dirty & /*floorplanData, floorIndex*/
    576 && e(10, a = f.floorDatas[g]), r.$$.dirty & /*floorData*/
    1024 && e(3, i = a.rooms.length > 0), r.$$.dirty & /*floorplanData, panoIndex*/
    192 && e(2, l = M(f, u)), r.$$.dirty & /*longitude*/
    256 && e(1, c = J(p));
  }, [
    x,
    c,
    l,
    i,
    o,
    m,
    f,
    u,
    p,
    g,
    a
  ];
}
class V extends T {
  constructor(n) {
    super(), W(
      this,
      n,
      K,
      B,
      E,
      {
        five: 4,
        pxmm: 5,
        floorplanData: 6,
        cameraImageUrl: 0
      },
      j
    );
  }
}
export {
  V as default
};
