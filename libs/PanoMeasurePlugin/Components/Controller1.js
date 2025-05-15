import { SvelteComponent as ee, init as te, safe_not_equal as oe, append_styles as re, element as j, space as T, create_component as q, attr as w, toggle_class as D, insert as I, append as g, mount_component as O, transition_in as k, transition_out as _, check_outros as R, detach as K, destroy_component as U, onMount as ie, onDestroy as le, add_render_callback as F, create_bidirectional_transition as E, text as V, set_style as W, listen as X, set_data as Y, group_outros as B } from "../../vendor/svelte/internal/index.js";
import ne from "./Common/Switcher1.js";
import se from "./Common/CircleButton.js";
import H from "../Controller/EditController.js";
import ae from "./Common/Exit.js";
import { fade as S } from "../../vendor/svelte/transition/index.js";
import { IconUndo as me, IconOk as pe } from "./Common/icons/index.js";
import "../Modules/UIController/mobileHTML.js";
import "../../vendor/svelte/easing/index.js";
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
function fe(o) {
  re(o, "svelte-ldjbp8", "*.forbid.svelte-ldjbp8.svelte-ldjbp8{pointer-events:none !important;opacity:0.5}.Measure-Controller.svelte-ldjbp8.svelte-ldjbp8{pointer-events:none;position:relative;width:100%;height:100%;z-index:2;color:white}.Measure-Controller.svelte-ldjbp8 .mode-switcher.svelte-ldjbp8{margin-top:2.25rem}.Measure-Controller.svelte-ldjbp8 .bottom.svelte-ldjbp8{position:absolute;width:100%;bottom:0}.Measure-Controller.svelte-ldjbp8 .bottom .mask.svelte-ldjbp8{position:absolute;bottom:0;width:100%;height:12.5rem;background-size:100%;z-index:-1;background-image:linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))}.Measure-Controller.svelte-ldjbp8 .bottom .center.svelte-ldjbp8{display:flex;flex-direction:column;align-items:center;margin-bottom:2.5rem}.Measure-Controller.svelte-ldjbp8 .controller.svelte-ldjbp8{pointer-events:all;display:flex;align-items:center}.Measure-Controller.svelte-ldjbp8 .controller .button.svelte-ldjbp8{cursor:pointer;display:flex;align-items:center;height:2.5rem;padding-left:1rem;padding-right:1rem;border-radius:624.9375rem;font-size:0.875rem;color:#fff;background-color:rgba(0, 0, 0, 0.2)}.Measure-Controller.svelte-ldjbp8 .controller .button .icon.svelte-ldjbp8{width:1.5rem;height:1.5rem;background-repeat:no-repeat;background-size:100%;margin:0 0.25rem}.Measure-Controller.svelte-ldjbp8 .controller .main-button.svelte-ldjbp8{margin-left:1.75rem;margin-right:1.75rem;font-size:0.875rem;font-weight:bold}");
}
function J(o) {
  let t, i;
  return t = new ae({
    props: {
      onClick: (
        /*measureController*/
        o[0].disable
      )
    }
  }), {
    c() {
      q(t.$$.fragment);
    },
    m(e, a) {
      O(t, e, a), i = !0;
    },
    p(e, a) {
      const l = {};
      a & /*measureController*/
      1 && (l.onClick = /*measureController*/
      e[0].disable), t.$set(l);
    },
    i(e) {
      i || (k(t.$$.fragment, e), i = !0);
    },
    o(e) {
      _(t.$$.fragment, e), i = !1;
    },
    d(e) {
      U(t, e);
    }
  };
}
function L(o) {
  let t, i, e, a;
  return i = new ne({
    props: {
      options: [
        {
          key: "line",
          value: (
            /*i18n*/
            o[2]("测距离")
          )
        },
        {
          key: "area",
          value: (
            /*i18n*/
            o[2]("测面积")
          )
        }
      ],
      defaultKey: (
        /*measureController*/
        o[0].currentMeasureType
      ),
      onChange: (
        /*measureController*/
        o[0].changeMeasureType
      )
    }
  }), {
    c() {
      t = j("div"), q(i.$$.fragment), w(t, "class", "mode-switcher svelte-ldjbp8");
    },
    m(l, n) {
      I(l, t, n), O(i, t, null), a = !0;
    },
    p(l, n) {
      o = l;
      const m = {};
      n & /*i18n*/
      4 && (m.options = [
        {
          key: "line",
          value: (
            /*i18n*/
            o[2]("测距离")
          )
        },
        {
          key: "area",
          value: (
            /*i18n*/
            o[2]("测面积")
          )
        }
      ]), n & /*measureController*/
      1 && (m.defaultKey = /*measureController*/
      o[0].currentMeasureType), n & /*measureController*/
      1 && (m.onChange = /*measureController*/
      o[0].changeMeasureType), i.$set(m);
    },
    i(l) {
      a || (k(i.$$.fragment, l), l && F(() => {
        a && (e || (e = E(t, S, { duration: P }, !0)), e.run(1));
      }), a = !0);
    },
    o(l) {
      _(i.$$.fragment, l), l && (e || (e = E(t, S, { duration: P }, !1)), e.run(0)), a = !1;
    },
    d(l) {
      l && K(t), U(i), l && e && e.end();
    }
  };
}
function N(o) {
  let t, i, e, a = (
    /*i18n*/
    o[2]("撤销") + ""
  ), l, n, m, f, C;
  return {
    c() {
      t = j("div"), i = j("div"), e = T(), l = V(a), w(i, "class", "icon svelte-ldjbp8"), W(i, "background-image", `url(${me})`), w(t, "class", "button svelte-ldjbp8"), D(
        t,
        "forbid",
        /*buttonState*/
        o[3] === "start"
      );
    },
    m(r, c) {
      I(r, t, c), g(t, i), g(t, e), g(t, l), m = !0, f || (C = X(
        t,
        "click",
        /*click_handler*/
        o[13]
      ), f = !0);
    },
    p(r, c) {
      o = r, (!m || c & /*i18n*/
      4) && a !== (a = /*i18n*/
      o[2]("撤销") + "") && Y(l, a), (!m || c & /*buttonState*/
      8) && D(
        t,
        "forbid",
        /*buttonState*/
        o[3] === "start"
      );
    },
    i(r) {
      m || (r && F(() => {
        m && (n || (n = E(t, S, { duration: P }, !0)), n.run(1));
      }), m = !0);
    },
    o(r) {
      r && (n || (n = E(t, S, { duration: P }, !1)), n.run(0)), m = !1;
    },
    d(r) {
      r && K(t), r && n && n.end(), f = !1, C();
    }
  };
}
function Q(o) {
  let t, i, e, a = (
    /*i18n*/
    o[2]("结束") + ""
  ), l, n, m, f, C;
  return {
    c() {
      t = j("div"), i = j("div"), e = T(), l = V(a), w(i, "class", "icon svelte-ldjbp8"), W(i, "background-image", `url(${pe})`), w(t, "class", "button svelte-ldjbp8");
    },
    m(r, c) {
      I(r, t, c), g(t, i), g(t, e), g(t, l), m = !0, f || (C = X(
        t,
        "click",
        /*complete*/
        o[10]
      ), f = !0);
    },
    p(r, c) {
      o = r, (!m || c & /*i18n*/
      4) && a !== (a = /*i18n*/
      o[2]("结束") + "") && Y(l, a);
    },
    i(r) {
      m || (r && F(() => {
        m && (n || (n = E(t, S, { duration: P }, !0)), n.run(1));
      }), m = !0);
    },
    o(r) {
      r && (n || (n = E(t, S, { duration: P }, !1)), n.run(0)), m = !1;
    },
    d(r) {
      r && K(t), r && n && n.end(), f = !1, C();
    }
  };
}
function ue(o) {
  let t, i, e, a, l, n, m, f, C, r, c, z, M, b = (
    /*showExit*/
    o[1] && J(o)
  ), p = (
    /*measureController*/
    o[0].allowMeasureType.length >= 2 && /*buttonState*/
    o[3] === "start" && L(o)
  ), u = (
    /*showButton*/
    o[4] && N(o)
  );
  c = new se({
    props: {
      onClick: (
        /*func*/
        o[14]
      ),
      text: (
        /*buttonTextMap*/
        o[6][
          /*buttonState*/
          o[3]
        ]
      ),
      color: (
        /*buttonColorMap*/
        o[7][
          /*buttonState*/
          o[3]
        ]
      )
    }
  });
  let d = (
    /*showButton*/
    o[4] && Q(o)
  );
  return {
    c() {
      t = j("div"), b && b.c(), i = T(), e = j("div"), a = j("div"), l = T(), n = j("div"), p && p.c(), m = T(), f = j("div"), u && u.c(), C = T(), r = j("div"), q(c.$$.fragment), z = T(), d && d.c(), w(a, "class", "mask svelte-ldjbp8"), w(r, "class", "main-button svelte-ldjbp8"), D(r, "forbid", !/*allowAddPoint*/
      o[5]), w(f, "class", "controller svelte-ldjbp8"), w(n, "class", "center svelte-ldjbp8"), w(e, "class", "bottom svelte-ldjbp8"), w(t, "class", "Measure-Controller svelte-ldjbp8");
    },
    m(s, v) {
      I(s, t, v), b && b.m(t, null), g(t, i), g(t, e), g(e, a), g(e, l), g(e, n), p && p.m(n, null), g(n, m), g(n, f), u && u.m(f, null), g(f, C), g(f, r), O(c, r, null), g(f, z), d && d.m(f, null), M = !0;
    },
    p(s, [v]) {
      /*showExit*/
      s[1] ? b ? (b.p(s, v), v & /*showExit*/
      2 && k(b, 1)) : (b = J(s), b.c(), k(b, 1), b.m(t, i)) : b && (B(), _(b, 1, 1, () => {
        b = null;
      }), R()), /*measureController*/
      s[0].allowMeasureType.length >= 2 && /*buttonState*/
      s[3] === "start" ? p ? (p.p(s, v), v & /*measureController, buttonState*/
      9 && k(p, 1)) : (p = L(s), p.c(), k(p, 1), p.m(n, m)) : p && (B(), _(p, 1, 1, () => {
        p = null;
      }), R()), /*showButton*/
      s[4] ? u ? (u.p(s, v), v & /*showButton*/
      16 && k(u, 1)) : (u = N(s), u.c(), k(u, 1), u.m(f, C)) : u && (B(), _(u, 1, 1, () => {
        u = null;
      }), R());
      const y = {};
      v & /*buttonState*/
      8 && (y.onClick = /*func*/
      s[14]), v & /*buttonState*/
      8 && (y.text = /*buttonTextMap*/
      s[6][
        /*buttonState*/
        s[3]
      ]), v & /*buttonState*/
      8 && (y.color = /*buttonColorMap*/
      s[7][
        /*buttonState*/
        s[3]
      ]), c.$set(y), (!M || v & /*allowAddPoint*/
      32) && D(r, "forbid", !/*allowAddPoint*/
      s[5]), /*showButton*/
      s[4] ? d ? (d.p(s, v), v & /*showButton*/
      16 && k(d, 1)) : (d = Q(s), d.c(), k(d, 1), d.m(f, null)) : d && (B(), _(d, 1, 1, () => {
        d = null;
      }), R());
    },
    i(s) {
      M || (k(b), k(p), k(u), k(c.$$.fragment, s), k(d), M = !0);
    },
    o(s) {
      _(b), _(p), _(u), _(c.$$.fragment, s), _(d), M = !1;
    },
    d(s) {
      s && K(t), b && b.d(), p && p.d(), u && u.d(), U(c), d && d.d();
    }
  };
}
const P = 100;
function de(o, t, i) {
  let { measureController: e } = t, { showExit: a = !1 } = t, { i18n: l = (h) => h } = t;
  const n = {
    start: l("开始"),
    add: l("添加"),
    end: l("结束"),
    complete: l("完成")
  }, m = {
    start: "white",
    add: "white",
    end: "blue",
    complete: "blue"
  };
  let f = !1, C = !0, r = "start", c = e.currentMeasureType;
  const z = () => {
    e.getCurrentMode() !== "Edit" ? e.changeMode("Edit") : (p("add"), M());
  }, M = () => {
    e.controller instanceof H && e.controller.selectPoint();
  }, b = () => {
    e.controller instanceof H && e.controller.complete();
  }, p = (h) => {
    i(3, r = h);
  }, u = () => {
    M(), A("allow");
  }, d = () => {
    p("complete");
  }, s = () => {
    e.currentMeasureType === "area" && r === "complete" && p("add");
  }, v = (h) => {
    h.length;
  }, y = () => {
    p("start"), A("allow");
  }, A = (h) => {
    i(5, C = h === "allow");
  }, G = (h) => {
    i(12, c = h);
  }, Z = (h) => {
    h.isEmpty && p("start");
  };
  ie(() => {
    e.hook.on("revoke", Z), e.hook.on("measureTypeChange", G), e.hook.on("modeChange", y), e.hook.on("pointsChange", v), e.hook.on("allowAddPointStateChange", A), e.hook.on("readyComplete", d), e.hook.on("notReadyComplete", s), e.hook.on("complete", y);
  }), le(() => {
    e.hook.off("measureTypeChange", G), e.hook.off("modeChange", y), e.hook.off("allowAddPointStateChange", A), e.hook.off("readyComplete", d), e.hook.off("pointsChange", v), e.hook.off("notReadyComplete", s), e.hook.off("complete", y);
  });
  const $ = () => e.revoke(), x = () => {
    r === "start" ? z() : r === "add" ? M() : (r === "end" || r === "complete") && u();
  };
  return o.$$set = (h) => {
    "measureController" in h && i(0, e = h.measureController), "showExit" in h && i(1, a = h.showExit), "i18n" in h && i(2, l = h.i18n);
  }, o.$$.update = () => {
    o.$$.dirty & /*currentMeasureType, buttonState*/
    4104 && i(4, f = c === "area" && r !== "start");
  }, [
    e,
    a,
    l,
    r,
    f,
    C,
    n,
    m,
    z,
    M,
    b,
    u,
    c,
    $,
    x
  ];
}
class lo extends ee {
  constructor(t) {
    super(), te(
      this,
      t,
      de,
      ue,
      oe,
      {
        measureController: 0,
        showExit: 1,
        i18n: 2
      },
      fe
    );
  }
}
export {
  lo as default
};
