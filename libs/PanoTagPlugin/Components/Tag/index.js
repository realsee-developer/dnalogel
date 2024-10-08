import { SvelteComponent as tA, init as iA, safe_not_equal as nA, append_styles as oA, empty as rA, insert as F, transition_out as w, check_outros as $, transition_in as k, detach as L, setContext as q, group_outros as AA, binding_callbacks as X, element as P, attr as _, noop as j, toggle_class as Q, null_to_empty as W, set_style as U, append as x, listen as eA, create_component as D, mount_component as M, destroy_component as v } from "../../../vendor/svelte/internal/index.js";
import lA from "./TextTag/index.js";
import aA from "./ImageTextTag.js";
import sA from "./MarketingTag.js";
import "three";
import { noTypecheck as c } from "../../utils/noTypecheck.js";
import fA from "./AudioTag/index.js";
import mA from "./MediaPlane.js";
import pA from "./LinkTag.js";
import gA from "./PanoramaTag.js";
import uA from "./CustomTag.js";
import { classnames as S } from "../../../vendor/classnames/index.js";
import { ModelTag as cA } from "../../controller/Tag/ModelTag.js";
import { isModelLike as dA } from "../../../shared-utils/five/mode.js";
import "hammerjs";
import "three/examples/jsm/renderers/CSS3DRenderer";
import "@realsee/five/line";
import "../../../vendor/three/examples/jsm/lines/LineGeometry.js";
import "../../../shared-utils/tag.js";
import "../../../shared-utils/three/core/Sphere.js";
import "animejs";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "./TextTag/TextTag.js";
import "../Common/Line/Straight.js";
import "../../../vendor/svelte/transition/index.js";
import "../../../vendor/svelte/easing/index.js";
import "../../../shared-utils/uuid.js";
import "../Common/Shadow.js";
import "../Common/Text/FlyMText.js";
import "../Common/Text/FlyText.js";
import "../../../shared-utils/isNil.js";
import "../../utils/search.js";
import "../../utils/constants.js";
import "../Common/Arrow.js";
import "../../Assets/Icon.js";
import "../../utils/doUtil.js";
import "../../../shared-utils/svelte/resizeObserver.js";
import "../../../vendor/resize-observer-polyfill/dist/ResizeObserver.es.js";
import "./TextTag/TextPlaneTag.js";
import "../Common/Text/MText.js";
import "../../utils/px2rem.js";
import "../Common/Line/Polyline.js";
import "../Common/Media.js";
import "../../../vendor/svelte-carousel/src/components/Carousel/Carousel.js";
import "../../../vendor/svelte-carousel/src/components/Dots/Dots.js";
import "../../../vendor/svelte-carousel/src/components/Dot/Dot.js";
import "../../../vendor/svelte-carousel/src/components/Arrow/Arrow.js";
import "../../../vendor/svelte-carousel/src/direction.js";
import "../../../vendor/svelte-carousel/src/components/Progress/Progress.js";
import "../../../vendor/svelte-carousel/src/actions/swipeable/swipeable.js";
import "../../../vendor/svelte-carousel/src/actions/swipeable/event.js";
import "../../../vendor/svelte-carousel/src/utils/event.js";
import "../../../vendor/svelte-carousel/src/units.js";
import "../../../vendor/svelte-carousel/src/actions/hoverable/hoverable.js";
import "../../../vendor/svelte-carousel/src/actions/hoverable/event.js";
import "../../../vendor/svelte-carousel/src/actions/tappable/tappable.js";
import "../../../vendor/svelte-carousel/src/utils/math.js";
import "../../../vendor/svelte-carousel/src/actions/tappable/event.js";
import "../../../vendor/svelte-carousel/src/utils/page.js";
import "../../../vendor/svelte-carousel/src/utils/clones.js";
import "../../../vendor/svelte-carousel/src/utils/object.js";
import "../../../vendor/svelte-carousel/src/components/Carousel/createCarousel.js";
import "../../../vendor/easy-reactive/src/simply-reactive.js";
import "../../../vendor/lodash.get/index.js";
import "../../../_commonjsHelpers.js";
import "../../../vendor/lodash.clonedeep/index.js";
import "../../../vendor/easy-reactive/src/utils/subscription.js";
import "../../../vendor/easy-reactive/src/utils/object.js";
import "../../../vendor/lodash.isequal/index.js";
import "../../../vendor/easy-reactive/src/utils/watcher.js";
import "../../../vendor/svelte-carousel/src/utils/lazy.js";
import "../../../vendor/svelte-carousel/src/utils/ProgressManager.js";
import "../../../vendor/svelte-carousel/src/utils/interval.js";
import "../Common/MediaItem.js";
import "../../../vendor/three/examples/jsm/lines/LineSegmentsGeometry.js";
import "../../../vendor/three/build/three.module.js";
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "./AudioTag/AudioTag.js";
import "../Common/Audio.js";
import "../../utils/audio/SharedAudio.js";
import "../../../shared-utils/audio.js";
import "../Common/Icon/audioIcon.js";
import "./AudioTag/AudioPlaneTag.js";
import "../Common/Icon/Icon.js";
import "../../utils/getImageInfo.js";
import "../../../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../../utils/planeNormal.js";
import "../../utils/tag/tagCheck.js";
import "../../utils/model/mediaPlane.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/loadTexture.js";
import "../../../shared-utils/three/Quadrangle.js";
import "../../../shared-utils/math/pointsIsRectangle.js";
import "../../../shared-utils/three/loadVideoTexture.js";
import "../../../shared-utils/device.js";
import "../../../shared-utils/three/getPositionsByObjectFit.js";
import "../../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../../shared-utils/three/getNormal.js";
import "../../controller/Tag/BaseTag.js";
import "../../utils/tag/calculateTagConfig.js";
import "../../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "@realsee/five";
import "../../utils/tag/format.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/three/blink.js";
import "../../../shared-utils/vectorToCoordinate.js";
import "../../../shared-utils/formatRad.js";
import "../../../shared-utils/five/lookPoint.js";
import "../../utils/tagPosition.js";
import "../../utils/checkRange.js";
import "../../../shared-utils/url/getUrl.js";
import "../../../shared-utils/five/getFloorIndex.js";
import "../../../shared-utils/safeObj.js";
import "../../utils/Cache.js";
function BA(i) {
  oA(i, "svelte-elzzn6", '@font-face{font-family:"TG-TYPE";font-style:normal;font-weight:400;src:local("TG-TYPE-Bold"), url(data:application/font-woff2;charset=utf-8;base64,T1RUTwAKAIAAAwAgQ0ZGINFD4CEAAAaQAAAHC0dTVUIAAQAAAAANnAAAAApPUy8yaB5pEwAAAjQAAABgY21hcEItjGUAAAT0AAABfGhlYWQS1WWOAAAAtAAAADZoaGVhBfMBxwAAAhAAAAAkaG10eJ9gBO8AAADsAAABJG1heHAASVAAAAAArAAAAAZuYW1lqczkZQAAApQAAAJecG9zdP+4ADIAAAZwAAAAIAAAUAAASQAAAAEAAAABAADkeHeyXw889QADA+gAAAAA2NoRKwAAAADY2hErACn/OAHgAyAAAQADAAIAAAAAAAAB9ABdAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACCAA7AcwAdwIIADMCCAA0AhwAMwISADkCCAAuAfQANAH+ACsB/gApAggANAEeAFABHgBQAR4AUAIIADQCCAAuAR4AUAEeAFABfAAxAAEAAAPo/zgAAAIcACkAKQHgAAEAAAAAAAAAAAAAAAAAAABJAAMCLgGQAAUACAKKAlgAAABLAooCWAAAAV4AMgEsAAAAAAgAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFVLV04AIAAg/xsDIP84AMgD6ADIAAAAAQAAAAAB9AK8AAAAIAAAAAAAEADGAAEAAAAAAAEADAAAAAEAAAAAAAIABAAMAAEAAAAAAAMAGwAQAAEAAAAAAAQAEQArAAEAAAAAAAUAPAA8AAEAAAAAAAYAEAB4AAEAAAAAAAgADAAAAAEAAAAAAAkADAAAAAMAAQQJAAEAGACIAAMAAQQJAAIACACgAAMAAQQJAAMANgCoAAMAAQQJAAQAIgDeAAMAAQQJAAUAeAEAAAMAAQQJAAYAIAF4AAMAAQQJAAgAGACIAAMAAQQJAAkAGACIQUxJQkFCQSBGb250Qm9sZDEuMDAwO1VLV047QUxJQkFCQUZvbnQtQm9sZEFMSUJBQkEgRm9udCBCb2xkVmVyc2lvbiAxLjAwMDtQUyAwMDEuMDAwO2hvdGNvbnYgMS4wLjg4O21ha2VvdGYubGliMi41LjY0Nzc1QUxJQkFCQUZvbnQtQm9sZABBAEwASQBCAEEAQgBBACAARgBvAG4AdABCAG8AbABkADEALgAwADAAMAA7AFUASwBXAE4AOwBBAEwASQBCAEEAQgBBAEYAbwBuAHQALQBCAG8AbABkAEEATABJAEIAQQBCAEEAIABGAG8AbgB0ACAAQgBvAGwAZABWAGUAcgBzAGkAbwBuACAAMQAuADAAMAAwADsAUABTACAAMAAwADEALgAwADAAMAA7AGgAbwB0AGMAbwBuAHYAIAAxAC4AMAAuADgAOAA7AG0AYQBrAGUAbwB0AGYALgBsAGkAYgAyAC4ANQAuADYANAA3ADcANQBBAEwASQBCAEEAQgBBAEYAbwBuAHQALQBCAG8AbABkAAAAAAADAAAAAwAAASIAAQAAAAAAHAADAAEAAAEiAAABBgAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAABCSEMANjc4OTo7PD0+PwAAAAAAAAACAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGwAAAAAAABwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAFoAAAAQABAAAwAAACAALgA5AFoAegCl/xv//wAAACAALAAwAEEAYQCl/xr////hAAAABv/B/7v/nwAAAAEAAAAOAAAAAAAAAAAACgAAAEIASABDAEYARwADAAAAAAAA/7UAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAgABAQERQUxJQkFCQUZvbnQtQm9sZAABAQEg+A8A+CAB+CEC+BgEtPtc+HT5tAX3KA/3UBGcHAZWEgAHAQENExoiKTpLbmluZS4wMDEuMDAxbW9uZXkudW5pRkYxQm5pbmUuMDAxdW5pRkYxQWNvcHlyaWdodCBtaXNzaW5nQUxJQkFCQSBGb250IEJvbGQAAAEAAQAAIhkAQhkAEQkBhwABigAADQAADwAAZAABiAABiwABiQAADgAASQIAAQCtAK4ArwCwALEAsgCzALQAtQC2ALcAuAC5ALoAuwC8AL0AvgC/AMAAwQDCAMMAxADFAMYAxwDIAMkAygDLAMwAzQDOAM8A0ADRANIA0wDUANUA1gDXANgA2QDaANsA3ADdAN4A3wDgAOEA4gFDAVoBqwIsAloCuAMcAzkDzwQ4BDoEPARRBFMEVQTNBOIE8QUEmPtc0Ky6rKKsuqzHrKPDoa2irLCspq2vraWssKzOAejVrKytrKzYA/gu+bQV+9H+fPfRBj76ORVqSWbNavs6rM2wSqwH7vsVFUXNafs68wfNaRVqZ6wG704VaklFJ6zNsEmsB/c6TxUn+zqt9xnNB6z7DhX7Bfs69wWsO++6anRpwwfv+0EV+wX7OvcFB/cZahUnXO8GrFMVamsHRVwF8Wr7OqwG0boFRawGDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OrIr5UQH3OPdUA/ebihVmaZSdbB9Mr2TL0xr3vgewlK2eqh7Kr86y1BuvrIJ5qh/HZrJIQhr7vgdngmp5bR5OZ0tkQxv46ARUX2FSH/u+B1a5YMDAs7TCHve+B8RjtVYeDnD4utkB93HzA/cL+QgVPfH8vPP5UgcOrIn5UgG++DYD+GmJFfw28wb3svfUBZ2glKSnGsNduFBWXF1UiB4ijgaMsJWsnqoIyLHMstYbsa6Ceawfy2ezSUAaVndXZ2Me+2/7jQX3pwYOrIvy92Tz90ryEr/zM/L3SvMu8hPy+B/3/xUT7LCwpMDDGq6CrHqoHsZnTK5DG2lrg3puH09pZk5EGobykAe4tba6vrViXFZiYlcedyOfBhPyxLpdUlJcW1JSXLvEH5ojfAdllGiebB5LsM5j1xuwrpSeqx/KsLPO1xrKcMNerx4OwPL1Affi8gP4dPdlFWD4fPshBvuJ/HkF+wH3ryPy87YH+8z1Ffc69+QF++QHDrb3ZNf3ZfAB9zX3YwP3nRZlaJSebB9LsGPO1xrzBlK6XMTEubrEHtcHxF26UlJcXFIeI/g0+BYh+677JAaorK2ZsBuwroJ4qx/LZrNHPxo/B2aCaHhrHktmR2NAGw6si/X3b/IBufX3b/ID95n4QBWAg4uKhh/3EfelBfsHBvtK/CMFfnCFbm0aZJVnnmoeSrLPYdobsq6Vnqwfy7K10dgasoGueKwey2RHtT4b+9YETlu7yMe8vcfHvVlPT1laTx8OmIr5UQG/+B8D93iKFfsIBvdo+OYF+6T2+B8oBg6iifL3bPX3QPEStvNB8vc/8jXxE/L4EvgHFRPss7Cnu78arYOreqgexWpNr0YbaWyDem4fUmlmTUcaXqBftGAeE/JWYmROSxpklWieax5Ksc9i2BuxrpWerB/LsbTP2BrHaMVath4T7PsN93QVu7FjXFtlZltcZbC7urGzuh8T8oX8ghVPW7zHx7q6yMa9W1BPWVpQHw6i96Tz92/0AbTz93DzA/hp+HkVsIGveKwezmNFtUAbZGeBeGofSmNiRT8aZJVnnmseSrHPYtoboAb7EvukBfcHBvdL+CEFmaySqaQa+9gWxry+yJ6dhoGcHq12oWZmGk5YW1BMXLnKHg4gCiEK+11L91IlCvdiyhWtb6hpJgoeJAoOIQogCqz3pe/3b/UBufX3bfQD+G74dxWyga94rB7NZEW0PhtlaIF4ah9KY2FFPxo7tkTPZh6MjIqKjB+TiJCIjYoIjgaCoKGHoRuanY6QoB+IgfsB+6QF9wcG9y/4IgWYppGnqhr7a/sCFVBbvMjHu7zGyLxbTk5aWk4fDvtd+AojCoz7jBUmCh8kCq1vqGkeDvtdi/cS94wjCvwKBCIKDiD3ru8BvPeuA7z4EhUn967vBw4eoDf/DAmLDAv47BT4exWcEwAHAQFBXW97ipCarPcv8+7yAfdl8gP4aPf6FfIjB+r3gwUiBi77gwWHBjH3gwUkBuP7gwUnJPcxKPsxI/cx+y/y9y/3MPP7MO4GDvtdi/cSJQr3JBZkcqOzsKSksrCkcWdlcnFmHw6up6eurm+naGhvb2hop2+uHwv3EiUK9yP4ChUiCgt3SgWxBrnmBZGVj5eZGgsB2/cSAwtobm5paqBzqoYLAAABAAAAAAAAAAAAAA==) format("woff2")}*{-webkit-tap-highlight-color:transparent}.content__container.svelte-elzzn6{position:relative;left:50%;top:50%;transform:translate(-50%, -50%);font-family:PingFangSC, Segoe UI, Rototo, sans-serif;transition:opacity 0.2s linear}.content__container.unClickable.svelte-elzzn6{pointer-events:none !important}.content__container.unClickable.svelte-elzzn6 *{pointer-events:none !important}.content__wrapper.svelte-elzzn6{pointer-events:none;width:100%;height:100%}.content__container.hide.svelte-elzzn6{opacity:0;pointer-events:none}.content__container.hide.svelte-elzzn6 *{pointer-events:none !important}.content__container.disable.svelte-elzzn6{display:none}.content.svelte-elzzn6{position:relative;width:100%;height:100%;font-size:0.75rem;color:#fff}.content.svelte-elzzn6:not(.unfolded){pointer-events:none}.content.svelte-elzzn6:not(.unfolded) *{pointer-events:none !important}.content.unfolded.svelte-elzzn6{pointer-events:auto}');
}
function _A(i) {
  let A, t;
  return {
    c() {
      A = P("div"), _(A, "data-info", "tag content is keep folded"), _(A, "data-id", t = /*tag*/
      i[0].id);
    },
    m(e, o) {
      F(e, A, o);
    },
    p(e, o) {
      o & /*tag*/
      1 && t !== (t = /*tag*/
      e[0].id) && _(A, "data-id", t);
    },
    i: j,
    o: j,
    d(e) {
      e && L(A);
    }
  };
}
function QA(i) {
  let A, t, e, o, l, d, g, s, n, f, m, u, b, h, B, E, T;
  const Y = [
    vA,
    MA,
    DA,
    hA,
    bA,
    CA,
    kA
  ], C = [];
  function J(r, p) {
    return p & /*tag, contentTypeMap*/
    9 && (o = null), p & /*tag, contentTypeMap*/
    9 && (l = null), p & /*tag, contentTypeMap*/
    9 && (d = null), p & /*tag, contentTypeMap*/
    9 && (g = null), p & /*tag, contentTypeMap*/
    9 && (s = null), p & /*tag, contentTypeMap*/
    9 && (n = null), p & /*tag, contentTypeMap*/
    9 && (f = null), o == null && (o = !!(["Text"].includes(
      /*tag*/
      r[0].contentType
    ) || ["Text"].includes(
      /*contentTypeMap*/
      r[3].get(
        /*tag*/
        r[0].contentType
      )
    ))), o ? 0 : (l == null && (l = !!(["ImageText", "Image", "Video"].includes(
      /*tag*/
      r[0].contentType
    ) || ["ImageText", "Image", "Video"].includes(
      /*contentTypeMap*/
      r[3].get(
        /*tag*/
        r[0].contentType
      )
    ))), l ? 1 : (d == null && (d = !!(["Audio"].includes(
      /*tag*/
      r[0].contentType
    ) || ["Audio"].includes(
      /*contentTypeMap*/
      r[3].get(
        /*tag*/
        r[0].contentType
      )
    ))), d ? 2 : (g == null && (g = !!(["Marketing"].includes(
      /*tag*/
      r[0].contentType
    ) || ["Marketing"].includes(
      /*contentTypeMap*/
      r[3].get(
        /*tag*/
        r[0].contentType
      )
    ))), g ? 3 : (s == null && (s = !!(["Link", "VRLink", "PanoLink", "Sticker"].includes(
      /*tag*/
      r[0].contentType
    ) || ["Link", "VRLink", "PanoLink", "Sticker"].includes(
      /*contentTypeMap*/
      r[3].get(
        /*tag*/
        r[0].contentType
      )
    ))), s ? 4 : (n == null && (n = !!(["MediaPlane", "MediaModel"].includes(
      /*tag*/
      r[0].contentType
    ) || ["MediaPlane", "MediaModel"].includes(
      /*contentTypeMap*/
      r[3].get(
        /*tag*/
        r[0].contentType
      )
    ))), n ? 5 : (f == null && (f = !!(["Panorama"].includes(
      /*tag*/
      r[0].contentType
    ) || ["Panorama"].includes(
      /*contentTypeMap*/
      r[3].get(
        /*tag*/
        r[0].contentType
      )
    ))), f ? 6 : -1))))));
  }
  return ~(m = J(i, -1)) && (u = C[m] = Y[m](i)), {
    c() {
      var r;
      A = P("div"), t = P("div"), e = P("div"), u && u.c(), _(e, "class", "content svelte-elzzn6"), Q(
        e,
        "unfolded",
        /*tag*/
        (r = i[0].state) == null ? void 0 : r.unfolded
      ), _(t, "class", "content__wrapper svelte-elzzn6"), _(A, "class", b = W(S(
        "content__container",
        /*tag*/
        i[0].className
      )) + " svelte-elzzn6"), _(A, "data-id", h = /*tag*/
      i[0].id), Q(
        A,
        "disable",
        /*tag*/
        i[0].enabled === !1
      ), Q(
        A,
        "hide",
        /*isHide*/
        i[5]
      ), Q(
        A,
        "unClickable",
        /*tag*/
        i[0].config.clickable === !1
      ), U(
        A,
        "width",
        /*tag*/
        i[0].stickType === "Plane" || /*tag*/
        i[0].contentType === "MediaModel" ? "100%" : 0
      ), U(
        A,
        "height",
        /*tag*/
        i[0].stickType === "Plane" || /*tag*/
        i[0].contentType === "MediaModel" ? "100%" : 0
      );
    },
    m(r, p) {
      F(r, A, p), x(A, t), x(t, e), ~m && C[m].m(e, null), i[16](A), B = !0, E || (T = eA(
        A,
        "click",
        /*click_handler_1*/
        i[17],
        !0
      ), E = !0);
    },
    p(r, p) {
      var a;
      let y = m;
      m = J(r, p), m === y ? ~m && C[m].p(r, p) : (u && (AA(), w(C[y], 1, 1, () => {
        C[y] = null;
      }), $()), ~m ? (u = C[m], u ? u.p(r, p) : (u = C[m] = Y[m](r), u.c()), k(u, 1), u.m(e, null)) : u = null), (!B || p & /*tag*/
      1) && Q(
        e,
        "unfolded",
        /*tag*/
        (a = r[0].state) == null ? void 0 : a.unfolded
      ), (!B || p & /*tag*/
      1 && b !== (b = W(S(
        "content__container",
        /*tag*/
        r[0].className
      )) + " svelte-elzzn6")) && _(A, "class", b), (!B || p & /*tag*/
      1 && h !== (h = /*tag*/
      r[0].id)) && _(A, "data-id", h), (!B || p & /*tag, tag*/
      1) && Q(
        A,
        "disable",
        /*tag*/
        r[0].enabled === !1
      ), (!B || p & /*tag, isHide*/
      33) && Q(
        A,
        "hide",
        /*isHide*/
        r[5]
      ), (!B || p & /*tag, tag*/
      1) && Q(
        A,
        "unClickable",
        /*tag*/
        r[0].config.clickable === !1
      ), p & /*tag*/
      1 && U(
        A,
        "width",
        /*tag*/
        r[0].stickType === "Plane" || /*tag*/
        r[0].contentType === "MediaModel" ? "100%" : 0
      ), p & /*tag*/
      1 && U(
        A,
        "height",
        /*tag*/
        r[0].stickType === "Plane" || /*tag*/
        r[0].contentType === "MediaModel" ? "100%" : 0
      );
    },
    i(r) {
      B || (k(u), B = !0);
    },
    o(r) {
      w(u), B = !1;
    },
    d(r) {
      r && L(A), ~m && C[m].d(), i[16](null), E = !1, T();
    }
  };
}
function wA(i) {
  let A, t, e, o, l, d, g;
  return t = new uA({
    props: {
      tag: c(
        /*tag*/
        i[0]
      ),
      rendererMap: (
        /*rendererMap*/
        i[2]
      )
    }
  }), {
    c() {
      A = P("div"), D(t.$$.fragment), _(A, "class", e = W(S(
        "content__container",
        /*tag*/
        i[0].className
      )) + " svelte-elzzn6"), _(A, "data-id", o = /*tag*/
      i[0].id), Q(
        A,
        "custom-tag-disable",
        /*tag*/
        i[0].enabled === !1
      ), Q(
        A,
        "custom-tag-hide",
        /*isHide*/
        i[5]
      );
    },
    m(s, n) {
      F(s, A, n), M(t, A, null), i[14](A), l = !0, d || (g = eA(
        A,
        "click",
        /*click_handler*/
        i[15]
      ), d = !0);
    },
    p(s, n) {
      const f = {};
      n & /*tag*/
      1 && (f.tag = c(
        /*tag*/
        s[0]
      )), n & /*rendererMap*/
      4 && (f.rendererMap = /*rendererMap*/
      s[2]), t.$set(f), (!l || n & /*tag*/
      1 && e !== (e = W(S(
        "content__container",
        /*tag*/
        s[0].className
      )) + " svelte-elzzn6")) && _(A, "class", e), (!l || n & /*tag*/
      1 && o !== (o = /*tag*/
      s[0].id)) && _(A, "data-id", o), (!l || n & /*tag, tag*/
      1) && Q(
        A,
        "custom-tag-disable",
        /*tag*/
        s[0].enabled === !1
      ), (!l || n & /*tag, isHide*/
      33) && Q(
        A,
        "custom-tag-hide",
        /*isHide*/
        s[5]
      );
    },
    i(s) {
      l || (k(t.$$.fragment, s), l = !0);
    },
    o(s) {
      w(t.$$.fragment, s), l = !1;
    },
    d(s) {
      s && L(A), v(t), i[14](null), d = !1, g();
    }
  };
}
function kA(i) {
  let A, t;
  return A = new gA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, o) {
      M(A, e, o), t = !0;
    },
    p(e, o) {
      const l = {};
      o & /*tag*/
      1 && (l.tag = c(
        /*tag*/
        e[0]
      )), A.$set(l);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      v(A, e);
    }
  };
}
function CA(i) {
  let A, t;
  return A = new mA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, o) {
      M(A, e, o), t = !0;
    },
    p(e, o) {
      const l = {};
      o & /*tag*/
      1 && (l.tag = c(
        /*tag*/
        e[0]
      )), A.$set(l);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      v(A, e);
    }
  };
}
function bA(i) {
  let A, t;
  return A = new pA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, o) {
      M(A, e, o), t = !0;
    },
    p(e, o) {
      const l = {};
      o & /*tag*/
      1 && (l.tag = c(
        /*tag*/
        e[0]
      )), A.$set(l);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      v(A, e);
    }
  };
}
function hA(i) {
  let A, t;
  return A = new sA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, o) {
      M(A, e, o), t = !0;
    },
    p(e, o) {
      const l = {};
      o & /*tag*/
      1 && (l.tag = c(
        /*tag*/
        e[0]
      )), A.$set(l);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      v(A, e);
    }
  };
}
function DA(i) {
  let A, t;
  return A = new fA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, o) {
      M(A, e, o), t = !0;
    },
    p(e, o) {
      const l = {};
      o & /*tag*/
      1 && (l.tag = c(
        /*tag*/
        e[0]
      )), A.$set(l);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      v(A, e);
    }
  };
}
function MA(i) {
  let A, t;
  return A = new aA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, o) {
      M(A, e, o), t = !0;
    },
    p(e, o) {
      const l = {};
      o & /*tag*/
      1 && (l.tag = c(
        /*tag*/
        e[0]
      )), A.$set(l);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      v(A, e);
    }
  };
}
function vA(i) {
  let A, t;
  return A = new lA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, o) {
      M(A, e, o), t = !0;
    },
    p(e, o) {
      const l = {};
      o & /*tag*/
      1 && (l.tag = c(
        /*tag*/
        e[0]
      )), A.$set(l);
    },
    i(e) {
      t || (k(A.$$.fragment, e), t = !0);
    },
    o(e) {
      w(A.$$.fragment, e), t = !1;
    },
    d(e) {
      v(A, e);
    }
  };
}
function EA(i) {
  let A, t, e, o, l;
  const d = [wA, QA, _A], g = [];
  function s(n, f) {
    return f & /*tag, rendererMap*/
    5 && (A = null), A == null && (A = !!/*tag*/
    (n[0].element || /*rendererMap*/
    n[2].has(
      /*tag*/
      n[0].contentType
    ))), A ? 0 : (
      /*haveContent*/
      n[4] ? 1 : 2
    );
  }
  return t = s(i, -1), e = g[t] = d[t](i), {
    c() {
      e.c(), o = rA();
    },
    m(n, f) {
      g[t].m(n, f), F(n, o, f), l = !0;
    },
    p(n, [f]) {
      let m = t;
      t = s(n, f), t === m ? g[t].p(n, f) : (AA(), w(g[m], 1, 1, () => {
        g[m] = null;
      }), $(), e = g[t], e ? e.p(n, f) : (e = g[t] = d[t](n), e.c()), k(e, 1), e.m(o.parentNode, o));
    },
    i(n) {
      l || (k(e), l = !0);
    },
    o(n) {
      w(e), l = !1;
    },
    d(n) {
      g[t].d(n), n && L(o);
    }
  };
}
function TA(i, A, t) {
  let e, o, l, d, g, s, { tag: n } = A, { hooks: f } = A, { rendererMap: m = /* @__PURE__ */ new Map() } = A, { contentTypeMap: u = /* @__PURE__ */ new Map() } = A, { state: b } = A, { mediaStore: h } = A, { temporaryState: B } = A;
  q("hooks", f), q("mediaStore", h);
  let E, T;
  function Y(a) {
    a ? f.emit("exposure", { id: d, type: "start" }) : f.emit("exposure", { id: d, type: "end" });
  }
  function C(a, z, H) {
    var G, I;
    return !(!z.visible || !z.enabled || !H.visible || !((G = a.state) != null && G.visible) || ((I = a.temporaryState) == null ? void 0 : I.visible) === !1 || a instanceof cA && a.loading);
  }
  function J(a) {
    X[a ? "unshift" : "push"](() => {
      n.contentDom = a, t(0, n);
    });
  }
  const r = (a) => f.emit("click", { event: a, target: "TagContent", tag: n });
  function p(a) {
    X[a ? "unshift" : "push"](() => {
      n.contentDom = a, t(0, n);
    });
  }
  const y = (a) => {
    n.entryFromModel && dA(n.five.state.mode) ? (a.stopPropagation(), n.find({ targetMode: "Panorama" })) : f.emit("click", { event: a, target: "TagContent", tag: n });
  };
  return i.$$set = (a) => {
    "tag" in a && t(0, n = a.tag), "hooks" in a && t(1, f = a.hooks), "rendererMap" in a && t(2, m = a.rendererMap), "contentTypeMap" in a && t(3, u = a.contentTypeMap), "state" in a && t(6, b = a.state), "mediaStore" in a && t(7, h = a.mediaStore), "temporaryState" in a && t(8, B = a.temporaryState);
  }, i.$$.update = () => {
    var a, z, H, G, I, O, V, Z, K, N, R;
    i.$$.dirty & /*tag*/
    1 && t(12, e = (a = n.state) == null ? void 0 : a.unfolded), i.$$.dirty & /*tag*/
    1 && t(11, o = (z = n.state) == null ? void 0 : z.visible), i.$$.dirty & /*state, temporaryState, tag*/
    321 && t(13, l = b.visible && B.visible && ((H = n.state) == null ? void 0 : H.visible)), i.$$.dirty & /*tag*/
    1 && (d = n.id), i.$$.dirty & /*tag, state, temporaryState*/
    321 && t(5, g = !C(n, b, B)), i.$$.dirty & /*isVisible*/
    8192 && Y(l), i.$$.dirty & /*tag, unfolded, lastUnfoldedState, visible, lastVisibleState*/
    7681 && n.hooks && (e !== void 0 && e !== T && (t(10, T = e), e ? (I = (G = n.hooks).emit) == null || I.call(G, "unfolded") : (V = n == null ? void 0 : (O = n.hooks).emit) == null || V.call(O, "folded")), o !== void 0 && o !== E && (t(9, E = o), o ? (K = (Z = n.hooks).emit) == null || K.call(Z, "show") : (R = (N = n.hooks).emit) == null || R.call(N, "hide"))), i.$$.dirty & /*tag*/
    1 && t(4, s = (() => !(typeof n.config.unfoldedConfig == "object" && n.config.unfoldedConfig.keep === "folded"))());
  }, [
    n,
    f,
    m,
    u,
    s,
    g,
    b,
    h,
    B,
    E,
    T,
    o,
    e,
    l,
    J,
    r,
    p,
    y
  ];
}
class qt extends tA {
  constructor(A) {
    super(), iA(
      this,
      A,
      TA,
      EA,
      nA,
      {
        tag: 0,
        hooks: 1,
        rendererMap: 2,
        contentTypeMap: 3,
        state: 6,
        mediaStore: 7,
        temporaryState: 8
      },
      BA
    );
  }
}
export {
  qt as default
};
