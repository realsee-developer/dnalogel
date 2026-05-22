import { SvelteComponent as D, init as L, safe_not_equal as k, append_styles as z, element as f, attr as d, set_style as t, insert as P, append as U, noop as g, detach as w } from "../../vendor/svelte/internal/index.js";
import { CAMERA_IMAGE as c } from "../Assets/camera.js";
import { rad2Deg as A } from "../../shared-utils/math/rad2Deg.js";
function C(a) {
  z(a, "svelte-17hhq1b", ".floorplan__camera-position.svelte-17hhq1b{pointer-events:none;position:absolute;width:0;height:0}.floorplan__camera-rotate.svelte-17hhq1b{position:absolute;background-repeat:no-repeat;background-size:100%}");
}
function R(a) {
  let n, e;
  return {
    c() {
      n = f("div"), e = f("div"), d(e, "class", "floorplan__camera-rotate svelte-17hhq1b"), t(e, "background-image", `url(${/*cameraImageUrl*/
      a[0] || c})`), t(
        e,
        "width",
        /*domSizeStyle*/
        a[4]
      ), t(
        e,
        "height",
        /*domSizeStyle*/
        a[4]
      ), t(e, "left", "-" + /*domSizeStyle*/
      a[4]), t(e, "top", "-" + /*domSizeStyle*/
      a[4]), t(e, "transform", `rotate(${/*rotate*/
      a[3]}deg)`), t(e, "transform-origin", `${/*domSizeStyle*/
      a[4]} ${/*domSizeStyle*/
      a[4]}`), d(n, "class", "floorplan__camera-position svelte-17hhq1b"), t(
        n,
        "left",
        /*positionLeft*/
        a[1]
      ), t(
        n,
        "top",
        /*positionTop*/
        a[2]
      );
    },
    m(o, r) {
      P(o, n, r), U(n, e);
    },
    p(o, [r]) {
      r & /*cameraImageUrl*/
      1 && t(e, "background-image", `url(${/*cameraImageUrl*/
      o[0] || c})`);
      const i = r & /*cameraImageUrl*/
      1;
      i && t(
        e,
        "width",
        /*domSizeStyle*/
        o[4]
      ), i && t(
        e,
        "height",
        /*domSizeStyle*/
        o[4]
      ), i && t(e, "left", "-" + /*domSizeStyle*/
      o[4]), i && t(e, "top", "-" + /*domSizeStyle*/
      o[4]), i && t(e, "transform", `rotate(${/*rotate*/
      o[3]}deg)`), i && t(e, "transform-origin", `${/*domSizeStyle*/
      o[4]} ${/*domSizeStyle*/
      o[4]}`);
    },
    i: g,
    o: g,
    d(o) {
      o && w(n);
    }
  };
}
function S(a, n, e) {
  let { panoIndex: o } = n, { floorplanData: r } = n, { lastPanoramaLongitude: i } = n, { cameraImageUrl: l } = n;
  const { observers: h } = r, m = h[o], u = m.positionInImage.x, p = m.positionInImage.y, b = u * 100 + "%", _ = p * 100 + "%", I = -A(i) + 45, v = document.body.clientWidth, y = document.body.clientHeight, q = `${(v < 500 || y < 500 ? 17 : 37) / 16}rem`;
  return a.$$set = (s) => {
    "panoIndex" in s && e(5, o = s.panoIndex), "floorplanData" in s && e(6, r = s.floorplanData), "lastPanoramaLongitude" in s && e(7, i = s.lastPanoramaLongitude), "cameraImageUrl" in s && e(0, l = s.cameraImageUrl);
  }, [
    l,
    b,
    _,
    I,
    q,
    o,
    r,
    i
  ];
}
class G extends D {
  constructor(n) {
    super(), L(
      this,
      n,
      S,
      R,
      k,
      {
        panoIndex: 5,
        floorplanData: 6,
        lastPanoramaLongitude: 7,
        cameraImageUrl: 0
      },
      C
    );
  }
}
export {
  G as Camera
};
