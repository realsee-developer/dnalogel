import { createDispatcher as m } from "../../utils/event.js";
import { getDistance as l } from "../../utils/math.js";
import { addFocusinEventListener as f, removeFocusinEventListener as h, removeFocusoutEventListener as r, addFocusoutEventListener as T } from "./event.js";
import { TAP_DURATION_MS as E, TAP_MOVEMENT_PX as v } from "../../units.js";
function y(e) {
  const s = m(e);
  let a = 0, c = { x: 0, y: 0 };
  function p({
    tapEndedAt: n,
    tapEndedPos: t
  }) {
    const u = n - a, d = l(c, t);
    return u <= E && d <= v;
  }
  function i(n) {
    a = Date.now();
    const t = n.touches[0];
    c = { x: t.clientX, y: t.clientY }, T(e, o);
  }
  function o(n) {
    r(e, o);
    const t = n.changedTouches[0];
    p({
      tapEndedAt: Date.now(),
      tapEndedPos: { x: t.clientX, y: t.clientY }
    }) && s("tapped");
  }
  return f(e, i), {
    destroy() {
      h(e, i), r(e, o);
    }
  };
}
export {
  y as tappable
};
