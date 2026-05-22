var h = (u, t, e) => new Promise((a, r) => {
  var i = (s) => {
    try {
      o(e.next(s));
    } catch (n) {
      r(n);
    }
  }, _ = (s) => {
    try {
      o(e.throw(s));
    } catch (n) {
      r(n);
    }
  }, o = (s) => s.done ? a(s.value) : Promise.resolve(s.value).then(i, _);
  o((e = e.apply(u, t)).next());
});
import { setIntervalImmediate as p } from "./interval.js";
const g = 35, l = 1;
class P {
  constructor({ onProgressValueChange: t }) {
    this._onProgressValueChange = t, this._autoplayDuration, this._onProgressValueChange, this._interval, this._paused = !1;
  }
  setAutoplayDuration(t) {
    this._autoplayDuration = t;
  }
  start(t) {
    return new Promise((e) => {
      this.reset();
      const a = Math.min(g, Math.max(this._autoplayDuration, 1));
      let r = -a;
      this._interval = p(() => h(this, null, function* () {
        if (this._paused)
          return;
        r += a;
        const i = r / this._autoplayDuration;
        this._onProgressValueChange(i), i > l && (this.reset(), yield t(), e());
      }), a);
    });
  }
  pause() {
    this._paused = !0;
  }
  resume() {
    this._paused = !1;
  }
  reset() {
    clearInterval(this._interval), this._onProgressValueChange(l);
  }
}
export {
  P as ProgressManager
};
