import { Tween as i, Easing as c } from "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { nextFrame as u, requestAnimationFrameInterval as p } from "./index.js";
const m = c;
function f(t, o, a, l = m.Linear.None) {
  const e = new i(t).to(o, a).easing(l);
  u(() => e.start(0));
  const r = p((n) => {
    e.update(n) === !1 && r();
  }), s = [];
  return e.onDestroy = (n) => (s.push(n), e), e.destroy = function() {
    this.stop(), Object.assign(e, {
      _onStartCallback: null,
      _onUpdateCallback: null,
      _onCompleteCallback: null,
      _onStopCallbackL: null
    });
    let n;
    for (; n = s.shift(); )
      n();
    r();
  }, e;
}
function h(t, o) {
  return f({ progress: 0 }, { progress: 1 }, t, o);
}
export {
  h as tweenProgress
};
