import { SvelteComponent as L, init as k, safe_not_equal as z, append_styles as P, element as f, attr as d, set_style as t, insert as U, append as w, noop as c, detach as A } from "../../vendor/svelte/internal/index.js";
import { CAMERA_IMAGE as g } from "../Assets/camera.js";
import { rad2Deg as C } from "../../shared-utils/math/rad2Deg.js";
function R(a) {
  P(a, "svelte-17cl35n", ".floorplan__camera-position.svelte-17cl35n{position:absolute;width:0;height:0}.floorplan__camera-rotate.svelte-17cl35n{position:absolute;background-repeat:no-repeat;background-size:100%}");
}
function S(a) {
  let n, e;
  return {
    c() {
      n = f("div"), e = f("div"), d(e, "class", "floorplan__camera-rotate svelte-17cl35n"), t(e, "background-image", `url(${/*cameraImageUrl*/
      a[0] || g})`), t(
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
      a[4]}`), d(n, "class", "floorplan__camera-position svelte-17cl35n"), t(
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
      U(o, n, r), w(n, e);
    },
    p(o, [r]) {
      r & /*cameraImageUrl*/
      1 && t(e, "background-image", `url(${/*cameraImageUrl*/
      o[0] || g})`);
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
    i: c,
    o: c,
    d(o) {
      o && A(n);
    }
  };
}
function E(a, n, e) {
  let { panoIndex: o } = n, { floorplanData: r } = n, { lastPanoramaLongitude: i } = n, { cameraImageUrl: s } = n;
  const { observers: u } = r, m = u[o], p = m.positionInImage.x, h = m.positionInImage.y, _ = p * 100 + "%", I = h * 100 + "%", b = -C(i) + 45, v = document.body.clientWidth, y = document.body.clientHeight, D = `${(v < 500 || y < 500 ? 17 : 37) / 16}rem`;
  return a.$$set = (l) => {
    "panoIndex" in l && e(5, o = l.panoIndex), "floorplanData" in l && e(6, r = l.floorplanData), "lastPanoramaLongitude" in l && e(7, i = l.lastPanoramaLongitude), "cameraImageUrl" in l && e(0, s = l.cameraImageUrl);
  }, [
    s,
    _,
    I,
    b,
    D,
    o,
    r,
    i
  ];
}
class G extends L {
  constructor(n) {
    super(), k(
      this,
      n,
      E,
      S,
      z,
      {
        panoIndex: 5,
        floorplanData: 6,
        lastPanoramaLongitude: 7,
        cameraImageUrl: 0
      },
      R
    );
  }
}
export {
  G as Camera
};
