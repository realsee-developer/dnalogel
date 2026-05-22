var s = Object.defineProperty;
var r = (i, t, e) => t in i ? s(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var o = (i, t, e) => (r(i, typeof t != "symbol" ? t + "" : t, e), e);
import { objectAssignDeepExports as p } from "../../vendor/object-assign-deep/objectAssignDeep.js";
import l from "../Components/Tip.js";
import "../../vendor/svelte/internal/index.js";
import "../../vendor/svelte/transition/index.js";
import "../../vendor/svelte/easing/index.js";
const n = {
  line: {
    start: "选择一个合适的位置开始测量，点击【结束】或【鼠标右键】结束测量"
  },
  area: {
    start: "选择一个合适的位置开始绘制平面",
    close: "选择3个点后将闭合平面，点击【结束】或【鼠标右键】将自动闭合"
  }
}, c = {
  line: {
    start: ""
  },
  area: {
    start: "",
    close: "选择3个点后将闭合平面，点击结束自动闭合"
  }
};
class D {
  constructor(t, e) {
    o(this, "tipSvelteDom");
    this.tipSvelteDom = new l({
      target: e.container,
      props: {
        measureController: t,
        tips: p({}, e.pointSelectorMode === "fixed" ? c : n, e.tips),
        i18n: e.i18n,
        visible: !0,
        tipStyle: e.tipStyle
      }
    });
  }
  dispose() {
    var t;
    (t = this.tipSvelteDom) == null || t.$destroy();
  }
  show() {
    var t;
    return (t = this.tipSvelteDom) == null || t.$set({ visible: !0 }), this;
  }
  hide() {
    var t;
    return (t = this.tipSvelteDom) == null || t.$set({ visible: !1 }), this;
  }
}
export {
  D as GuideController
};
