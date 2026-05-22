var r = Object.defineProperty;
var n = (t, e, s) => e in t ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var i = (t, e, s) => (n(t, typeof e != "symbol" ? e + "" : e, s), s);
import { Tween as a, remove as p, Easing as h } from "../../vendor/@tweenjs/tween/dist/tween.esm.js.js";
import { requestAnimationFrameInterval as m } from "./index.js";
class d extends a {
  constructor() {
    super(...arguments);
    i(this, "disposeMethods", []);
    i(this, "animationFrameDisposer");
    i(this, "onDispose", (s) => (this.disposeMethods.push(s), this));
    i(this, "play", () => {
      var s;
      return this.start(0), (s = this.animationFrameDisposer) == null || s.call(this), this.animationFrameDisposer = m((o) => this.update(o)), this;
    });
    i(this, "stop", () => {
      var s;
      return super.stop(), (s = this.animationFrameDisposer) == null || s.call(this), this;
    });
    i(this, "dispose", () => {
      var s;
      this.stop(), (s = this.animationFrameDisposer) == null || s.call(this), this.disposeMethods.forEach((o) => o()), this.disposeMethods = [], p(this);
    });
  }
}
function F(t, e = h.Linear.None) {
  const s = new d({ progress: 0 }).to({ progress: 1 });
  return t !== void 0 && s.duration(t), e !== void 0 && s.easing(e), s;
}
export {
  d as BetterTween,
  F as tweenProgress
};
