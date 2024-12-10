import { PREV as m, NEXT as x } from "../../direction.js";
import { addStartEventListener as y, removeStartEventListener as S, addMoveEventListener as D, addEndEventListener as T, removeEndEventListener as h, removeMoveEventListener as E } from "./event.js";
import { createDispatcher as I } from "../../utils/event.js";
import { SWIPE_MIN_DURATION_MS as L, SWIPE_MIN_DISTANCE_PX as _ } from "../../units.js";
function f(e) {
  if ("TouchEvent" in window && e instanceof TouchEvent) {
    const o = e.touches[0];
    return {
      x: o ? o.clientX : 0,
      y: o ? o.clientY : 0
    };
  }
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function b(e, { thresholdProvider: o }) {
  const r = I(e);
  let s, c, n = 0, l, a = !1;
  function v() {
    return Date.now() - l >= L && Math.abs(n) >= _;
  }
  function p(i) {
    l = Date.now(), n = 0, a = !0;
    const t = f(i);
    s = t.x, c = t.y, r("swipeStart", { x: s, y: c }), D(window, w), T(window, u);
  }
  function w(i) {
    if (!a)
      return;
    const t = f(i), d = t.x - s, M = t.y - c;
    s = t.x, c = t.y, r("swipeMove", { x: s, y: c, dx: d, dy: M }), d !== 0 && Math.sign(d) !== Math.sign(n) && (n = 0), n += d, Math.abs(n) > o() && (r("swipeThresholdReached", { direction: n > 0 ? m : x }), h(window, u), E(window, w));
  }
  function u(i) {
    if (h(window, u), E(window, w), a = !1, !v()) {
      r("swipeFailed");
      return;
    }
    const t = f(i);
    r("swipeEnd", { x: t.x, y: t.y });
  }
  return y(e, p), {
    destroy() {
      S(e, p);
    }
  };
}
export {
  b as swipeable
};
