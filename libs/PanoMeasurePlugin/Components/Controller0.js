import { SvelteComponent as j, init as x, safe_not_equal as B, append_styles as F, binding_callbacks as G, bind as H, element as h, space as C, create_component as P, attr as g, insert as R, append as s, mount_component as T, transition_in as w, transition_out as I, check_outros as J, add_flush_callback as K, detach as U, destroy_component as W, onMount as N, onDestroy as Q, text as y, set_style as E, toggle_class as z, listen as S, set_data as A, run_all as V, group_outros as X } from "../../vendor/svelte/internal/index.js";
import Y from "./Common/Switcher0.js";
import Z from "./Common/Exit.js";
import $ from "../Controller/EditController.js";
import { IconLine as q, IconArea as D, IconUndo as ee, IconOk as te } from "./Common/icons/index.js";
import "../Model/line.js";
import "../../shared-utils/uuid.js";
import "../utils/line.js";
import "../../shared-utils/five/FiveLine.js";
import "@realsee/five/line";
import "../utils/constants.js";
import "three";
import "@realsee/five";
import "../utils/dom/distanceItem.js";
import "../utils/dom/base.js";
import "../utils/isNDCPointInScreen.js";
import "../../shared-utils/three/centerPoint.js";
import "../Model/point.js";
import "../../shared-utils/throttle.js";
import "../Controller/BaseController.js";
import "../utils/ironbox.js";
import "../Model/polyline.js";
import "../Model/area.js";
import "../Model/polygon.js";
import "../../shared-utils/three/IObject3D.js";
import "../../shared-utils/three/generatePolygonGeometry.js";
import "../../shared-utils/three/earcut3D.js";
import "../../vendor/earcut/src/earcut.js";
import "../../shared-utils/three/getNormal.js";
import "../utils/isIntersecting.js";
import "../utils/dom/areaDom.js";
import "../../shared-utils/three/geometryUtil.js";
import "../../shared-utils/tag.js";
import "../../shared-utils/positionToVector3.js";
import "../../shared-utils/five/vector3ToScreen.js";
import "../../shared-utils/five/getFiveModel.js";
import "../../shared-utils/Utils/FiveUtil.js";
import "../../shared-utils/Utils/BaseUtil.js";
import "../../shared-utils/Subscribe.js";
import "../../shared-utils/Utils/WorkUtil.js";
import "../../shared-utils/five/transformPosition.js";
import "../../shared-utils/three/temp.js";
import "../../shared-utils/three/core/Raycaster.js";
import "../../shared-utils/dom/resizeObserver.js";
import "../../shared-utils/five/fiveEveryReadyListener.js";
import "../../vendor/hammerjs/hammer.js";
import "../../shared-utils/three/PointSelector/index.js";
import "../../shared-utils/three/PointSelector/utils/PointSelectorHelper.js";
import "../../shared-utils/three/Magnifier.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper.js";
import "../../shared-utils/three/Assets/index.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DObject.js";
import "../../shared-utils/even.js";
import "../../shared-utils/CSS3DRender/OpacityMesh.js";
import "../../shared-utils/three/getObjectVisible.js";
import "../../shared-utils/three/CSS3DRenderer/index.js";
import "../../CSS3DRenderPlugin/utils/generateBehindFiveElement.js";
import "../../shared-utils/isNil.js";
import "../../shared-utils/three/core/Five_LineMaterial2.js";
import "../../shared-utils/three/core/Sphere.js";
import "../../vendor/animejs/lib/anime.es.js";
import "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DRender.js";
import "../../shared-utils/CSS3DRender/CSS3DRenderer.js";
import "../../shared-utils/createResizeObserver.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DScene.js";
import "../../CSS3DRenderPlugin/utils/getAllCSS3DObject.js";
import "../../shared-utils/util.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DGroup.js";
import "../../shared-utils/three/PointSelector/utils/html.js";
import "../../shared-utils/CSS3DRender/index.js";
import "../../shared-utils/five/fiveModelLoad.js";
import "../../shared-utils/three/PointSelector/utils/PointHelper2.js";
import "../../Sculpt/Meshes/Line.js";
import "../../Sculpt/typings/style.js";
import "../../Sculpt/utils/Meshes/getLengthHTML.js";
import "../../shared-utils/three/applyObjectMatrixWorld.js";
import "../../shared-utils/three/core/LineGeometry.js";
import "../../shared-utils/three/core/LineMaterial.js";
import "../../shared-utils/three/core/Line2.js";
import "../../shared-utils/three/core/LineMaterial2.js";
import "../../Sculpt/utils/unit.js";
import "../../Sculpt/utils/renderDom.js";
import "../../shared-utils/five/FivePuppet.js";
import "../../CSS3DRenderPlugin/utils/three/CSS3DSprite.js";
import "../../shared-utils/isTouchDevice.js";
import "../../shared-utils/five/getPosition.js";
import "../../shared-utils/five/getRaycasterByNdcPosition.js";
import "../../shared-utils/three/PointSelector/utils/contents.js";
import "../../Sculpt/utils/three/rayOnLine.js";
import "../Modules/DeleteDom/index.js";
import "../Modules/DeleteDom/_Assets/delete.svg.js";
import "../Modules/DeleteDom/_Assets/delete_bg.png.js";
import "../Modules/DeleteDom/_Assets/delete_hover_bg.png.js";
import "../utils/math.js";
function oe(n) {
  F(n, "svelte-468fdd", '*.forbid.svelte-468fdd.svelte-468fdd{pointer-events:none !important;opacity:0.5}.Measure-Controller.svelte-468fdd.svelte-468fdd{pointer-events:none;position:relative;width:100%;height:100%;z-index:2}.Measure-Controller.svelte-468fdd .mode-switcher.svelte-468fdd{margin-top:2.25rem}.Measure-Controller.svelte-468fdd .bottom.svelte-468fdd{position:absolute;width:100%;bottom:0}.Measure-Controller.svelte-468fdd .bottom .mask.svelte-468fdd{position:absolute;bottom:0;width:100%;height:11.5rem;background-size:100%;background-image:linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3))}.Measure-Controller.svelte-468fdd .bottom .center.svelte-468fdd{display:flex;flex-direction:column;align-items:center;margin-bottom:2.5rem}.Measure-Controller.svelte-468fdd .buttons.svelte-468fdd{pointer-events:all;display:flex;align-items:center;height:2.5rem;background:rgba(0, 0, 0, 0.2);color:rgba(255, 255, 255, 0.85);width:-moz-max-content;width:max-content;border-radius:624.9375rem;overflow:hidden}.Measure-Controller.svelte-468fdd .buttons .button.svelte-468fdd{cursor:pointer;display:flex;align-items:center;position:relative;font-size:0.875rem;padding:0rem 1rem}.Measure-Controller.svelte-468fdd .buttons .button .icon.svelte-468fdd{width:1.5rem;height:1.5rem;background-repeat:no-repeat;background-size:100%;margin-right:0.25rem}.Measure-Controller.svelte-468fdd .buttons .button.svelte-468fdd::after{content:"";position:absolute;display:block;right:-0.03125rem;height:1.5rem;width:0.0625rem;background-image:linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent);background-size:100%;background-repeat:no-repeat;background-position:center}.Measure-Controller.svelte-468fdd .buttons .button.svelte-468fdd:last-child::after{display:none}');
}
function L(n) {
  let o, i;
  return o = new Z({
    props: {
      onClick: (
        /*measureController*/
        n[0].disable
      )
    }
  }), {
    c() {
      P(o.$$.fragment);
    },
    m(t, p) {
      T(o, t, p), i = !0;
    },
    p(t, p) {
      const f = {};
      p & /*measureController*/
      1 && (f.onClick = /*measureController*/
      t[0].disable), o.$set(f);
    },
    i(t) {
      i || (w(o.$$.fragment, t), i = !0);
    },
    o(t) {
      I(o.$$.fragment, t), i = !1;
    },
    d(t) {
      W(o, t);
    }
  };
}
function O(n) {
  let o, i, t, p, f = (
    /*i18n*/
    n[2]("撤销") + ""
  ), m, v, d, a, b, c = (
    /*i18n*/
    n[2]("结束") + ""
  ), r, l, _;
  return {
    c() {
      o = h("div"), i = h("div"), t = h("div"), p = C(), m = y(f), v = C(), d = h("div"), a = h("div"), b = C(), r = y(c), g(t, "class", "icon svelte-468fdd"), E(t, "background-image", `url(${ee})`), g(i, "class", "button svelte-468fdd"), z(i, "forbid", !/*canRevoke*/
      n[3]), g(a, "class", "icon svelte-468fdd"), E(a, "background-image", `url(${te})`), g(d, "class", "button svelte-468fdd"), g(o, "class", "buttons svelte-468fdd");
    },
    m(u, e) {
      R(u, o, e), s(o, i), s(i, t), s(i, p), s(i, m), s(o, v), s(o, d), s(d, a), s(d, b), s(d, r), l || (_ = [
        S(
          i,
          "click",
          /*click_handler*/
          n[7]
        ),
        S(
          d,
          "click",
          /*complete*/
          n[6]
        )
      ], l = !0);
    },
    p(u, e) {
      e & /*i18n*/
      4 && f !== (f = /*i18n*/
      u[2]("撤销") + "") && A(m, f), e & /*canRevoke*/
      8 && z(i, "forbid", !/*canRevoke*/
      u[3]), e & /*i18n*/
      4 && c !== (c = /*i18n*/
      u[2]("结束") + "") && A(r, c);
    },
    d(u) {
      u && U(o), l = !1, V(_);
    }
  };
}
function ie(n) {
  let o, i, t, p, f, m, v, d, a, b, c, r = (
    /*showExit*/
    n[1] && L(n)
  ), l = (
    /*showController*/
    n[5] && O(n)
  );
  function _(e) {
    n[9](e);
  }
  let u = {
    options: [
      {
        key: "line",
        value: (
          /*i18n*/
          n[2]("测距离")
        ),
        icon: q
      },
      {
        key: "area",
        value: (
          /*i18n*/
          n[2]("测面积")
        ),
        icon: D
      }
    ],
    onChange: (
      /*func*/
      n[8]
    )
  };
  return (
    /*setSwitcherActiveIndex*/
    n[4] !== void 0 && (u.setIndex = /*setSwitcherActiveIndex*/
    n[4]), a = new Y({ props: u }), G.push(() => H(a, "setIndex", _)), {
      c() {
        o = h("div"), r && r.c(), i = C(), t = h("div"), p = h("div"), f = C(), m = h("div"), l && l.c(), v = C(), d = h("div"), P(a.$$.fragment), g(p, "class", "mask svelte-468fdd"), g(d, "class", "mode-switcher svelte-468fdd"), g(m, "class", "center svelte-468fdd"), g(t, "class", "bottom svelte-468fdd"), g(o, "class", "Measure-Controller svelte-468fdd");
      },
      m(e, k) {
        R(e, o, k), r && r.m(o, null), s(o, i), s(o, t), s(t, p), s(t, f), s(t, m), l && l.m(m, null), s(m, v), s(m, d), T(a, d, null), c = !0;
      },
      p(e, [k]) {
        /*showExit*/
        e[1] ? r ? (r.p(e, k), k & /*showExit*/
        2 && w(r, 1)) : (r = L(e), r.c(), w(r, 1), r.m(o, i)) : r && (X(), I(r, 1, 1, () => {
          r = null;
        }), J()), /*showController*/
        e[5] ? l ? l.p(e, k) : (l = O(e), l.c(), l.m(m, v)) : l && (l.d(1), l = null);
        const M = {};
        k & /*i18n*/
        4 && (M.options = [
          {
            key: "line",
            value: (
              /*i18n*/
              e[2]("测距离")
            ),
            icon: q
          },
          {
            key: "area",
            value: (
              /*i18n*/
              e[2]("测面积")
            ),
            icon: D
          }
        ]), k & /*measureController*/
        1 && (M.onChange = /*func*/
        e[8]), !b && k & /*setSwitcherActiveIndex*/
        16 && (b = !0, M.setIndex = /*setSwitcherActiveIndex*/
        e[4], K(() => b = !1)), a.$set(M);
      },
      i(e) {
        c || (w(r), w(a.$$.fragment, e), c = !0);
      },
      o(e) {
        I(r), I(a.$$.fragment, e), c = !1;
      },
      d(e) {
        e && U(o), r && r.d(), l && l.d(), W(a);
      }
    }
  );
}
function re(n, o, i) {
  let { measureController: t } = o, { showExit: p = !1 } = o, { i18n: f = (e) => e } = o, m = !1, v;
  function d(e) {
    e === "Edit" ? i(5, r = !0) : (v(null), i(5, r = !1));
  }
  function a() {
    t.controller instanceof $ && t.controller.complete(), t.save({ mode: "Watch" });
  }
  function b(e) {
    i(3, m = e.length > 0);
  }
  function c() {
    i(3, m = !1);
  }
  N(() => {
    t.hook.on("modeChange", d), t.hook.on("complete", c), t.hook.on("pointsChange", b);
  }), Q(() => {
    t.hook.off("modeChange", d), t.hook.off("complete", c), t.hook.off("pointsChange", b);
  });
  let r = !1;
  const l = () => t.revoke(), _ = (e) => {
    t.save().changeMode("Edit"), t.changeMeasureType(e);
  };
  function u(e) {
    v = e, i(4, v);
  }
  return n.$$set = (e) => {
    "measureController" in e && i(0, t = e.measureController), "showExit" in e && i(1, p = e.showExit), "i18n" in e && i(2, f = e.i18n);
  }, [
    t,
    p,
    f,
    m,
    v,
    r,
    a,
    l,
    _,
    u
  ];
}
class Kt extends j {
  constructor(o) {
    super(), x(
      this,
      o,
      re,
      ie,
      B,
      {
        measureController: 0,
        showExit: 1,
        i18n: 2
      },
      oe
    );
  }
}
export {
  Kt as default
};
