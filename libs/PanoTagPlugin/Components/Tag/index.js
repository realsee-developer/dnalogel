import { SvelteComponent as tA, init as iA, safe_not_equal as oA, append_styles as nA, empty as rA, insert as F, transition_out as w, check_outros as $, transition_in as k, detach as L, setContext as q, group_outros as AA, binding_callbacks as X, element as P, attr as _, noop as j, toggle_class as Q, null_to_empty as W, set_style as U, append as x, listen as eA, create_component as D, mount_component as M, destroy_component as v } from "../../../vendor/svelte/internal/index.js";
import lA from "./TextTag/index.js";
import aA from "./ImageTextTag.js";
import mA from "./MarketingTag.js";
import "three";
import { noTypecheck as c } from "../../utils/noTypecheck.js";
import pA from "./AudioTag/index.js";
import sA from "./MediaPlane.js";
import fA from "./LinkTag.js";
import gA from "./PanoramaTag.js";
import uA from "./CustomTag.js";
import { classnames as S } from "../../../vendor/classnames/index.js";
import { ModelTag as cA } from "../../controller/Tag/ModelTag.js";
import "../../../shared-utils/tag.js";
import { isModelLike as dA } from "../../../shared-utils/five/mode.js";
import "../../../vendor/hammerjs/hammer.js";
import "../../../shared-utils/three/PointSelector/index.js";
import "../../../shared-utils/three/CSS3DRenderer/index.js";
import "../../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "@realsee/five/line";
import "../../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../../shared-utils/three/core/Sphere.js";
import "../../../vendor/animejs/lib/anime.es.js";
import "../../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../../shared-utils/five/FivePuppet.js";
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
import "../../../shared-utils/positionToVector3.js";
import "../../../shared-utils/five/vector3ToScreen.js";
import "../../../shared-utils/five/getFiveModel.js";
import "../../../shared-utils/Utils/FiveUtil.js";
import "../../../shared-utils/Utils/BaseUtil.js";
import "../../../shared-utils/Subscribe.js";
import "../../../shared-utils/Utils/WorkUtil.js";
import "../../../shared-utils/five/transformPosition.js";
import "../../../shared-utils/three/temp.js";
import "../../../shared-utils/three/core/Raycaster.js";
import "../../../shared-utils/dom/resizeObserver.js";
import "../../../shared-utils/five/fiveEveryReadyListener.js";
import "../../../shared-utils/throttle.js";
import "../../../shared-utils/five/fiveModelLoad.js";
import "../../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../../shared-utils/three/Magnifier.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../../shared-utils/three/Assets/index.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../../shared-utils/even.js";
import "../../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../../shared-utils/three/centerPoint.js";
import "../../../shared-utils/three/getObjectVisible.js";
import "../../../shared-utils/three/PointSelector/utils/html.js";
import "../../../shared-utils/CSS3DRender/index.js";
import "../../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../../shared-utils/createResizeObserver.js";
import "../../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../../Sculpt/Meshes/Line.js";
import "../../../Sculpt/typings/style.js";
import "../../../shared-utils/three/IObject3D.js";
import "../../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../../shared-utils/util.js";
import "../../../shared-utils/three/core/LineGeometry.js";
import "../../../shared-utils/three/core/LineMaterial.js";
import "../../../shared-utils/three/core/Line2.js";
import "../../../shared-utils/three/core/LineMaterial2.js";
import "../../../Sculpt/utils/unit.js";
import "../../../Sculpt/utils/renderDom.js";
import "../../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../../shared-utils/isTouchDevice.js";
import "../../../shared-utils/five/getPosition.js";
import "../../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../../shared-utils/three/PointSelector/utils/contents.js";
import "../../../Sculpt/utils/three/rayOnLine.js";
import "@realsee/five";
import "./AudioTag/AudioTag.js";
import "../Common/Audio.js";
import "../../utils/audio/SharedAudio.js";
import "../../../shared-utils/audio.js";
import "../Common/Icon/audioIcon.js";
import "./AudioTag/AudioPlaneTag.js";
import "../Common/Icon/Icon.js";
import "../../utils/getImageInfo.js";
import "../../../shared-utils/CSS3DRender/CSS3DObject.js";
import "../../../shared-utils/three/GLTFLoader.js";
import "@realsee/five/gltf-loader";
import "../../utils/planeNormal.js";
import "../../utils/tag/tagCheck.js";
import "../../utils/model/mediaPlane.js";
import "../../../shared-utils/three/loadTexture.js";
import "../../../shared-utils/three/Quadrangle.js";
import "../../../shared-utils/math/pointsIsRectangle.js";
import "../../../shared-utils/three/loadVideoTexture.js";
import "../../../shared-utils/device.js";
import "../../../shared-utils/three/getPositionsByObjectFit.js";
import "../../../shared-utils/three/FragmentTransparencyMaterial.js";
import "../../../shared-utils/three/getNormal.js";
import "../../../shared-utils/constants.js";
import "./index.js";
import "../../controller/Tag/BaseTag.js";
import "../../utils/tag/calculateTagConfig.js";
import "../../../vendor/object-assign-deep/objectAssignDeep.js";
import "../../../shared-utils/typescript/entries.js";
import "../../utils/tag/adaptConfig.js";
import "../../typings/tag/TagConfig.js";
import "../../utils/tag/format.js";
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
import "../../../shared-utils/promise/withResolvers.js";
function BA(i) {
  nA(i, "svelte-elzzn6", '@font-face{font-family:"TG-TYPE";font-style:normal;font-weight:400;src:local("TG-TYPE-Bold"), url(data:application/font-woff2;charset=utf-8;base64,T1RUTwAKAIAAAwAgQ0ZGINFD4CEAAAaQAAAHC0dTVUIAAQAAAAANnAAAAApPUy8yaB5pEwAAAjQAAABgY21hcEItjGUAAAT0AAABfGhlYWQS1WWOAAAAtAAAADZoaGVhBfMBxwAAAhAAAAAkaG10eJ9gBO8AAADsAAABJG1heHAASVAAAAAArAAAAAZuYW1lqczkZQAAApQAAAJecG9zdP+4ADIAAAZwAAAAIAAAUAAASQAAAAEAAAABAADkeHeyXw889QADA+gAAAAA2NoRKwAAAADY2hErACn/OAHgAyAAAQADAAIAAAAAAAAB9ABdAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACWAAAAlgAAAJYAAACCAA7AcwAdwIIADMCCAA0AhwAMwISADkCCAAuAfQANAH+ACsB/gApAggANAEeAFABHgBQAR4AUAIIADQCCAAuAR4AUAEeAFABfAAxAAEAAAPo/zgAAAIcACkAKQHgAAEAAAAAAAAAAAAAAAAAAABJAAMCLgGQAAUACAKKAlgAAABLAooCWAAAAV4AMgEsAAAAAAgAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFVLV04AIAAg/xsDIP84AMgD6ADIAAAAAQAAAAAB9AK8AAAAIAAAAAAAEADGAAEAAAAAAAEADAAAAAEAAAAAAAIABAAMAAEAAAAAAAMAGwAQAAEAAAAAAAQAEQArAAEAAAAAAAUAPAA8AAEAAAAAAAYAEAB4AAEAAAAAAAgADAAAAAEAAAAAAAkADAAAAAMAAQQJAAEAGACIAAMAAQQJAAIACACgAAMAAQQJAAMANgCoAAMAAQQJAAQAIgDeAAMAAQQJAAUAeAEAAAMAAQQJAAYAIAF4AAMAAQQJAAgAGACIAAMAAQQJAAkAGACIQUxJQkFCQSBGb250Qm9sZDEuMDAwO1VLV047QUxJQkFCQUZvbnQtQm9sZEFMSUJBQkEgRm9udCBCb2xkVmVyc2lvbiAxLjAwMDtQUyAwMDEuMDAwO2hvdGNvbnYgMS4wLjg4O21ha2VvdGYubGliMi41LjY0Nzc1QUxJQkFCQUZvbnQtQm9sZABBAEwASQBCAEEAQgBBACAARgBvAG4AdABCAG8AbABkADEALgAwADAAMAA7AFUASwBXAE4AOwBBAEwASQBCAEEAQgBBAEYAbwBuAHQALQBCAG8AbABkAEEATABJAEIAQQBCAEEAIABGAG8AbgB0ACAAQgBvAGwAZABWAGUAcgBzAGkAbwBuACAAMQAuADAAMAAwADsAUABTACAAMAAwADEALgAwADAAMAA7AGgAbwB0AGMAbwBuAHYAIAAxAC4AMAAuADgAOAA7AG0AYQBrAGUAbwB0AGYALgBsAGkAYgAyAC4ANQAuADYANAA3ADcANQBBAEwASQBCAEEAQgBBAEYAbwBuAHQALQBCAG8AbABkAAAAAAADAAAAAwAAASIAAQAAAAAAHAADAAEAAAEiAAABBgAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAABCSEMANjc4OTo7PD0+PwAAAAAAAAACAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGwAAAAAAABwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAFoAAAAQABAAAwAAACAALgA5AFoAegCl/xv//wAAACAALAAwAEEAYQCl/xr////hAAAABv/B/7v/nwAAAAEAAAAOAAAAAAAAAAAACgAAAEIASABDAEYARwADAAAAAAAA/7UAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAgABAQERQUxJQkFCQUZvbnQtQm9sZAABAQEg+A8A+CAB+CEC+BgEtPtc+HT5tAX3KA/3UBGcHAZWEgAHAQENExoiKTpLbmluZS4wMDEuMDAxbW9uZXkudW5pRkYxQm5pbmUuMDAxdW5pRkYxQWNvcHlyaWdodCBtaXNzaW5nQUxJQkFCQSBGb250IEJvbGQAAAEAAQAAIhkAQhkAEQkBhwABigAADQAADwAAZAABiAABiwABiQAADgAASQIAAQCtAK4ArwCwALEAsgCzALQAtQC2ALcAuAC5ALoAuwC8AL0AvgC/AMAAwQDCAMMAxADFAMYAxwDIAMkAygDLAMwAzQDOAM8A0ADRANIA0wDUANUA1gDXANgA2QDaANsA3ADdAN4A3wDgAOEA4gFDAVoBqwIsAloCuAMcAzkDzwQ4BDoEPARRBFMEVQTNBOIE8QUEmPtc0Ky6rKKsuqzHrKPDoa2irLCspq2vraWssKzOAejVrKytrKzYA/gu+bQV+9H+fPfRBj76ORVqSWbNavs6rM2wSqwH7vsVFUXNafs68wfNaRVqZ6wG704VaklFJ6zNsEmsB/c6TxUn+zqt9xnNB6z7DhX7Bfs69wWsO++6anRpwwfv+0EV+wX7OvcFB/cZahUnXO8GrFMVamsHRVwF8Wr7OqwG0boFRawGDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OrIr5UQH3OPdUA/ebihVmaZSdbB9Mr2TL0xr3vgewlK2eqh7Kr86y1BuvrIJ5qh/HZrJIQhr7vgdngmp5bR5OZ0tkQxv46ARUX2FSH/u+B1a5YMDAs7TCHve+B8RjtVYeDnD4utkB93HzA/cL+QgVPfH8vPP5UgcOrIn5UgG++DYD+GmJFfw28wb3svfUBZ2glKSnGsNduFBWXF1UiB4ijgaMsJWsnqoIyLHMstYbsa6Ceawfy2ezSUAaVndXZ2Me+2/7jQX3pwYOrIvy92Tz90ryEr/zM/L3SvMu8hPy+B/3/xUT7LCwpMDDGq6CrHqoHsZnTK5DG2lrg3puH09pZk5EGobykAe4tba6vrViXFZiYlcedyOfBhPyxLpdUlJcW1JSXLvEH5ojfAdllGiebB5LsM5j1xuwrpSeqx/KsLPO1xrKcMNerx4OwPL1Affi8gP4dPdlFWD4fPshBvuJ/HkF+wH3ryPy87YH+8z1Ffc69+QF++QHDrb3ZNf3ZfAB9zX3YwP3nRZlaJSebB9LsGPO1xrzBlK6XMTEubrEHtcHxF26UlJcXFIeI/g0+BYh+677JAaorK2ZsBuwroJ4qx/LZrNHPxo/B2aCaHhrHktmR2NAGw6si/X3b/IBufX3b/ID95n4QBWAg4uKhh/3EfelBfsHBvtK/CMFfnCFbm0aZJVnnmoeSrLPYdobsq6Vnqwfy7K10dgasoGueKwey2RHtT4b+9YETlu7yMe8vcfHvVlPT1laTx8OmIr5UQG/+B8D93iKFfsIBvdo+OYF+6T2+B8oBg6iifL3bPX3QPEStvNB8vc/8jXxE/L4EvgHFRPss7Cnu78arYOreqgexWpNr0YbaWyDem4fUmlmTUcaXqBftGAeE/JWYmROSxpklWieax5Ksc9i2BuxrpWerB/LsbTP2BrHaMVath4T7PsN93QVu7FjXFtlZltcZbC7urGzuh8T8oX8ghVPW7zHx7q6yMa9W1BPWVpQHw6i96Tz92/0AbTz93DzA/hp+HkVsIGveKwezmNFtUAbZGeBeGofSmNiRT8aZJVnnmseSrHPYtoboAb7EvukBfcHBvdL+CEFmaySqaQa+9gWxry+yJ6dhoGcHq12oWZmGk5YW1BMXLnKHg4gCiEK+11L91IlCvdiyhWtb6hpJgoeJAoOIQogCqz3pe/3b/UBufX3bfQD+G74dxWyga94rB7NZEW0PhtlaIF4ah9KY2FFPxo7tkTPZh6MjIqKjB+TiJCIjYoIjgaCoKGHoRuanY6QoB+IgfsB+6QF9wcG9y/4IgWYppGnqhr7a/sCFVBbvMjHu7zGyLxbTk5aWk4fDvtd+AojCoz7jBUmCh8kCq1vqGkeDvtdi/cS94wjCvwKBCIKDiD3ru8BvPeuA7z4EhUn967vBw4eoDf/DAmLDAv47BT4exWcEwAHAQFBXW97ipCarPcv8+7yAfdl8gP4aPf6FfIjB+r3gwUiBi77gwWHBjH3gwUkBuP7gwUnJPcxKPsxI/cx+y/y9y/3MPP7MO4GDvtdi/cSJQr3JBZkcqOzsKSksrCkcWdlcnFmHw6up6eurm+naGhvb2hop2+uHwv3EiUK9yP4ChUiCgt3SgWxBrnmBZGVj5eZGgsB2/cSAwtobm5paqBzqoYLAAABAAAAAAAAAAAAAA==) format("woff2")}*{-webkit-tap-highlight-color:transparent}.content__container.svelte-elzzn6{position:relative;left:50%;top:50%;transform:translate(-50%, -50%);font-family:PingFangSC, Segoe UI, Rototo, sans-serif;transition:opacity 0.2s linear}.content__container.unClickable.svelte-elzzn6{pointer-events:none !important}.content__container.unClickable.svelte-elzzn6 *{pointer-events:none !important}.content__wrapper.svelte-elzzn6{pointer-events:none;width:100%;height:100%}.content__container.hide.svelte-elzzn6{opacity:0;pointer-events:none}.content__container.hide.svelte-elzzn6 *{pointer-events:none !important}.content__container.disable.svelte-elzzn6{display:none}.content.svelte-elzzn6{position:relative;width:100%;height:100%;font-size:0.75rem;color:#fff}.content.svelte-elzzn6:not(.unfolded){pointer-events:none}.content.svelte-elzzn6:not(.unfolded) *{pointer-events:none !important}.content.unfolded.svelte-elzzn6{pointer-events:auto}');
}
function _A(i) {
  let A, t;
  return {
    c() {
      A = P("div"), _(A, "data-info", "tag content is keep folded"), _(A, "data-id", t = /*tag*/
      i[0].id);
    },
    m(e, n) {
      F(e, A, n);
    },
    p(e, n) {
      n & /*tag*/
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
  let A, t, e, n, l, d, g, m, o, p, s, u, b, h, B, E, T;
  const Y = [
    vA,
    MA,
    DA,
    hA,
    bA,
    CA,
    kA
  ], C = [];
  function J(r, f) {
    return f & /*tag, contentTypeMap*/
    9 && (n = null), f & /*tag, contentTypeMap*/
    9 && (l = null), f & /*tag, contentTypeMap*/
    9 && (d = null), f & /*tag, contentTypeMap*/
    9 && (g = null), f & /*tag, contentTypeMap*/
    9 && (m = null), f & /*tag, contentTypeMap*/
    9 && (o = null), f & /*tag, contentTypeMap*/
    9 && (p = null), n == null && (n = !!(["Text"].includes(
      /*tag*/
      r[0].contentType
    ) || ["Text"].includes(
      /*contentTypeMap*/
      r[3].get(
        /*tag*/
        r[0].contentType
      )
    ))), n ? 0 : (l == null && (l = !!(["ImageText", "Image", "Video"].includes(
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
    ))), g ? 3 : (m == null && (m = !!(["Link", "VRLink", "PanoLink", "Sticker"].includes(
      /*tag*/
      r[0].contentType
    ) || ["Link", "VRLink", "PanoLink", "Sticker"].includes(
      /*contentTypeMap*/
      r[3].get(
        /*tag*/
        r[0].contentType
      )
    ))), m ? 4 : (o == null && (o = !!(["MediaPlane", "MediaModel"].includes(
      /*tag*/
      r[0].contentType
    ) || ["MediaPlane", "MediaModel"].includes(
      /*contentTypeMap*/
      r[3].get(
        /*tag*/
        r[0].contentType
      )
    ))), o ? 5 : (p == null && (p = !!(["Panorama"].includes(
      /*tag*/
      r[0].contentType
    ) || ["Panorama"].includes(
      /*contentTypeMap*/
      r[3].get(
        /*tag*/
        r[0].contentType
      )
    ))), p ? 6 : -1))))));
  }
  return ~(s = J(i, -1)) && (u = C[s] = Y[s](i)), {
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
    m(r, f) {
      F(r, A, f), x(A, t), x(t, e), ~s && C[s].m(e, null), i[16](A), B = !0, E || (T = eA(
        A,
        "click",
        /*click_handler_1*/
        i[17],
        !0
      ), E = !0);
    },
    p(r, f) {
      var a;
      let y = s;
      s = J(r, f), s === y ? ~s && C[s].p(r, f) : (u && (AA(), w(C[y], 1, 1, () => {
        C[y] = null;
      }), $()), ~s ? (u = C[s], u ? u.p(r, f) : (u = C[s] = Y[s](r), u.c()), k(u, 1), u.m(e, null)) : u = null), (!B || f & /*tag*/
      1) && Q(
        e,
        "unfolded",
        /*tag*/
        (a = r[0].state) == null ? void 0 : a.unfolded
      ), (!B || f & /*tag*/
      1 && b !== (b = W(S(
        "content__container",
        /*tag*/
        r[0].className
      )) + " svelte-elzzn6")) && _(A, "class", b), (!B || f & /*tag*/
      1 && h !== (h = /*tag*/
      r[0].id)) && _(A, "data-id", h), (!B || f & /*tag, tag*/
      1) && Q(
        A,
        "disable",
        /*tag*/
        r[0].enabled === !1
      ), (!B || f & /*tag, isHide*/
      33) && Q(
        A,
        "hide",
        /*isHide*/
        r[5]
      ), (!B || f & /*tag, tag*/
      1) && Q(
        A,
        "unClickable",
        /*tag*/
        r[0].config.clickable === !1
      ), f & /*tag*/
      1 && U(
        A,
        "width",
        /*tag*/
        r[0].stickType === "Plane" || /*tag*/
        r[0].contentType === "MediaModel" ? "100%" : 0
      ), f & /*tag*/
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
      r && L(A), ~s && C[s].d(), i[16](null), E = !1, T();
    }
  };
}
function wA(i) {
  let A, t, e, n, l, d, g;
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
      )) + " svelte-elzzn6"), _(A, "data-id", n = /*tag*/
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
    m(m, o) {
      F(m, A, o), M(t, A, null), i[14](A), l = !0, d || (g = eA(
        A,
        "click",
        /*click_handler*/
        i[15]
      ), d = !0);
    },
    p(m, o) {
      const p = {};
      o & /*tag*/
      1 && (p.tag = c(
        /*tag*/
        m[0]
      )), o & /*rendererMap*/
      4 && (p.rendererMap = /*rendererMap*/
      m[2]), t.$set(p), (!l || o & /*tag*/
      1 && e !== (e = W(S(
        "content__container",
        /*tag*/
        m[0].className
      )) + " svelte-elzzn6")) && _(A, "class", e), (!l || o & /*tag*/
      1 && n !== (n = /*tag*/
      m[0].id)) && _(A, "data-id", n), (!l || o & /*tag, tag*/
      1) && Q(
        A,
        "custom-tag-disable",
        /*tag*/
        m[0].enabled === !1
      ), (!l || o & /*tag, isHide*/
      33) && Q(
        A,
        "custom-tag-hide",
        /*isHide*/
        m[5]
      );
    },
    i(m) {
      l || (k(t.$$.fragment, m), l = !0);
    },
    o(m) {
      w(t.$$.fragment, m), l = !1;
    },
    d(m) {
      m && L(A), v(t), i[14](null), d = !1, g();
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
    m(e, n) {
      M(A, e, n), t = !0;
    },
    p(e, n) {
      const l = {};
      n & /*tag*/
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
  return A = new sA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, n) {
      M(A, e, n), t = !0;
    },
    p(e, n) {
      const l = {};
      n & /*tag*/
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
  return A = new fA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, n) {
      M(A, e, n), t = !0;
    },
    p(e, n) {
      const l = {};
      n & /*tag*/
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
  return A = new mA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, n) {
      M(A, e, n), t = !0;
    },
    p(e, n) {
      const l = {};
      n & /*tag*/
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
  return A = new pA({
    props: { tag: c(
      /*tag*/
      i[0]
    ) }
  }), {
    c() {
      D(A.$$.fragment);
    },
    m(e, n) {
      M(A, e, n), t = !0;
    },
    p(e, n) {
      const l = {};
      n & /*tag*/
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
    m(e, n) {
      M(A, e, n), t = !0;
    },
    p(e, n) {
      const l = {};
      n & /*tag*/
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
    m(e, n) {
      M(A, e, n), t = !0;
    },
    p(e, n) {
      const l = {};
      n & /*tag*/
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
  let A, t, e, n, l;
  const d = [wA, QA, _A], g = [];
  function m(o, p) {
    return p & /*tag, rendererMap*/
    5 && (A = null), A == null && (A = !!/*tag*/
    (o[0].element || /*rendererMap*/
    o[2].has(
      /*tag*/
      o[0].contentType
    ))), A ? 0 : (
      /*haveContent*/
      o[4] ? 1 : 2
    );
  }
  return t = m(i, -1), e = g[t] = d[t](i), {
    c() {
      e.c(), n = rA();
    },
    m(o, p) {
      g[t].m(o, p), F(o, n, p), l = !0;
    },
    p(o, [p]) {
      let s = t;
      t = m(o, p), t === s ? g[t].p(o, p) : (AA(), w(g[s], 1, 1, () => {
        g[s] = null;
      }), $(), e = g[t], e ? e.p(o, p) : (e = g[t] = d[t](o), e.c()), k(e, 1), e.m(n.parentNode, n));
    },
    i(o) {
      l || (k(e), l = !0);
    },
    o(o) {
      w(e), l = !1;
    },
    d(o) {
      g[t].d(o), o && L(n);
    }
  };
}
function TA(i, A, t) {
  let e, n, l, d, g, m, { tag: o } = A, { hooks: p } = A, { rendererMap: s = /* @__PURE__ */ new Map() } = A, { contentTypeMap: u = /* @__PURE__ */ new Map() } = A, { state: b } = A, { mediaStore: h } = A, { temporaryState: B } = A;
  q("hooks", p), q("mediaStore", h);
  let E, T;
  function Y(a) {
    a ? p.emit("exposure", { id: d, type: "start" }) : p.emit("exposure", { id: d, type: "end" });
  }
  function C(a, z, H) {
    var G, I;
    return !(!a.enabled || !z.visible || !z.enabled || !H.visible || !((G = a.state) != null && G.visible) || ((I = a.temporaryState) == null ? void 0 : I.visible) === !1 || a instanceof cA && a.loading);
  }
  function J(a) {
    X[a ? "unshift" : "push"](() => {
      o.contentDom = a, t(0, o);
    });
  }
  const r = (a) => p.emit("click", { event: a, target: "TagContent", tag: o });
  function f(a) {
    X[a ? "unshift" : "push"](() => {
      o.contentDom = a, t(0, o);
    });
  }
  const y = (a) => {
    o.entryFromModel && dA(o.five.state.mode) ? (a.stopPropagation(), o.find({ targetMode: "Panorama" })) : p.emit("click", { event: a, target: "TagContent", tag: o });
  };
  return i.$$set = (a) => {
    "tag" in a && t(0, o = a.tag), "hooks" in a && t(1, p = a.hooks), "rendererMap" in a && t(2, s = a.rendererMap), "contentTypeMap" in a && t(3, u = a.contentTypeMap), "state" in a && t(6, b = a.state), "mediaStore" in a && t(7, h = a.mediaStore), "temporaryState" in a && t(8, B = a.temporaryState);
  }, i.$$.update = () => {
    var a, z, H, G, I, O, V, Z, K, N, R;
    i.$$.dirty & /*tag*/
    1 && t(12, e = (a = o.state) == null ? void 0 : a.unfolded), i.$$.dirty & /*tag*/
    1 && t(11, n = (z = o.state) == null ? void 0 : z.visible), i.$$.dirty & /*state, temporaryState, tag*/
    321 && t(13, l = b.visible && B.visible && ((H = o.state) == null ? void 0 : H.visible)), i.$$.dirty & /*tag*/
    1 && (d = o.id), i.$$.dirty & /*tag, state, temporaryState*/
    321 && t(5, g = !C(o, b, B)), i.$$.dirty & /*isVisible*/
    8192 && Y(l), i.$$.dirty & /*tag, unfolded, lastUnfoldedState, visible, lastVisibleState*/
    7681 && o.hooks && (e !== void 0 && e !== T && (t(10, T = e), e ? (I = (G = o.hooks).emit) == null || I.call(G, "unfolded") : (V = o == null ? void 0 : (O = o.hooks).emit) == null || V.call(O, "folded")), n !== void 0 && n !== E && (t(9, E = n), n ? (K = (Z = o.hooks).emit) == null || K.call(Z, "show") : (R = (N = o.hooks).emit) == null || R.call(N, "hide"))), i.$$.dirty & /*tag*/
    1 && t(4, m = (() => !(typeof o.config.unfoldedConfig == "object" && o.config.unfoldedConfig.keep === "folded"))());
  }, [
    o,
    p,
    s,
    u,
    m,
    g,
    b,
    h,
    B,
    E,
    T,
    n,
    e,
    l,
    J,
    r,
    f,
    y
  ];
}
class Pi extends tA {
  constructor(A) {
    super(), iA(
      this,
      A,
      TA,
      EA,
      oA,
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
  Pi as default
};
