import { noop as f, safe_not_equal as l } from "../internal/index.js";
const s = [];
function h(n, u = f) {
  let i;
  const o = /* @__PURE__ */ new Set();
  function r(e) {
    if (l(n, e) && (n = e, i)) {
      const c = !s.length;
      for (const t of o)
        t[1](), s.push(t, n);
      if (c) {
        for (let t = 0; t < s.length; t += 2)
          s[t][0](s[t + 1]);
        s.length = 0;
      }
    }
  }
  function b(e) {
    r(e(n));
  }
  function p(e, c = f) {
    const t = [e, c];
    return o.add(t), o.size === 1 && (i = u(r) || f), e(n), () => {
      o.delete(t), o.size === 0 && i && (i(), i = null);
    };
  }
  return { set: r, update: b, subscribe: p };
}
export {
  h as writable
};
