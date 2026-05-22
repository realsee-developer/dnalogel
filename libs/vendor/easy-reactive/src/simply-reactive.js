import { lodash_get as s } from "../../lodash.get/index.js";
import { cloneDeep as w } from "../../lodash.clonedeep/index.js";
import { createSubscription as x } from "./utils/subscription.js";
import { createTargetWatcher as C } from "./utils/watcher.js";
function E(c, l) {
  const h = s(c, "data", {}), m = s(c, "watch", {}), b = s(c, "methods", {}), i = s(l, "onChange", () => {
  }), { subscribe: d, notify: _, subscribers: p } = x(), { targetWatcher: y, getTarget: a } = C();
  let n;
  const o = {}, f = () => ({
    data: n,
    methods: o
  });
  let u = !1;
  const j = (e) => (...t) => {
    u = !0;
    const r = e(...t);
    return u = !1, r;
  };
  Object.entries(b).forEach(([e, t]) => {
    o[e] = j(
      (...r) => t(f(), ...r)
    ), Object.defineProperty(o[e], "name", { value: e });
  }), n = new Proxy(w(h), {
    get(e, t) {
      return a() && !u && d(a(), { prop: t, value: e[t] }), Reflect.get(...arguments);
    },
    set(e, t, r) {
      return e[t] === r || (Reflect.set(...arguments), a() || (i && i(t, r), _(n, t))), !0;
    }
  }), Object.entries(m).forEach(([e, t]) => {
    y(e, () => {
      t(f());
    });
  });
  const g = [n, o];
  return g._internal = {
    _getSubscribers() {
      return p;
    }
  }, g;
}
export {
  E as simplyReactive
};
