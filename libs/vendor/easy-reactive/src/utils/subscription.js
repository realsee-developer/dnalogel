import { getUpdatedDeps as d, depsAreEqual as a, getDepNames as f } from "./object.js";
const m = () => {
  const e = {}, i = (s, t) => {
    const { watcherName: c, fn: n } = s, { prop: p, value: o } = t;
    e[c] || (e[c] = {
      deps: {},
      fn: n
    }), e[c].deps[p] = o;
  };
  return {
    subscribers: e,
    subscribe(s, t) {
      s && i(s, t);
    },
    notify(s, t) {
      Object.entries(e).forEach(([c, { deps: n, fn: p }]) => {
        const o = f(n);
        if (o.includes(t)) {
          const r = d(o, s);
          a(n, r) || (e[c].deps = r, p());
        }
      });
    }
  };
};
export {
  m as createSubscription
};
